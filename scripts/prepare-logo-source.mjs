// One-off: turn the supplied gold-on-black logo photo into a cropped, transparent
// master at public/brand/logo-source.png. Everything else is derived from that by
// build-brand-assets.mjs.
//
//   node scripts/prepare-logo-source.mjs "<path to the original>"
import sharp from 'sharp';
import { mkdirSync } from 'fs';

const src = process.argv[2];
if (!src) { console.error('usage: node scripts/prepare-logo-source.mjs <image>'); process.exit(1); }

const BG_MAX = 42;   // luminance at or below this counts as background black
const PAD = 12;

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const lum = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];

// Flood-fill the background inward from the border. Enclosed dark areas — the key
// fob body — are never reached, so they stay opaque.
const outside = new Uint8Array(W * H);
const stack = [];
for (let x = 0; x < W; x++) { stack.push(x, (H - 1) * W + x); }
for (let y = 0; y < H; y++) { stack.push(y * W, y * W + W - 1); }
while (stack.length) {
  const p = stack.pop();
  if (outside[p] || lum(p * 4) > BG_MAX) continue;
  outside[p] = 1;
  const x = p % W, y = (p - x) / W;
  if (x > 0) stack.push(p - 1);
  if (x < W - 1) stack.push(p + 1);
  if (y > 0) stack.push(p - W);
  if (y < H - 1) stack.push(p + W);
}

// Alpha from luminance on the background side kills the halo the glow leaves behind.
const rowHits = new Int32Array(H), colHits = new Int32Array(W);
for (let p = 0; p < W * H; p++) {
  if (outside[p]) { data[p * 4 + 3] = 0; continue; }
  const l = lum(p * 4);
  if (l < BG_MAX) data[p * 4 + 3] = Math.round(255 * (l / BG_MAX));
  // Count only solidly lit pixels: the corners carry a few stray bright specks
  // from the messaging app, and one of those would blow the crop box wide open.
  if (l > 60) { const x = p % W; rowHits[(p - x) / W]++; colHits[x]++; }
}
const span = (hits) => {
  // Scale the cut-off to how much real content the busiest line holds, so a dozen
  // stray specks never count as a row of logo.
  const min = Math.max(8, 0.04 * Math.max(...hits));
  let lo = hits.findIndex((n) => n >= min);
  let hi = hits.length - 1;
  while (hi > lo && hits[hi] < min) hi--;
  return [lo, hi];
};
const [minY, maxY] = span(rowHits);
const [minX, maxX] = span(colHits);

const left = Math.max(0, minX - PAD), top = Math.max(0, minY - PAD);
const w = Math.min(W - left, maxX - minX + 1 + PAD * 2);
const h = Math.min(H - top, maxY - minY + 1 + PAD * 2);

mkdirSync('public/brand', { recursive: true });
await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .extract({ left, top, width: w, height: h })
  .png({ compressionLevel: 9 })
  .toFile('public/brand/logo-source.png');

console.log(`source ${W}x${H} → cropped ${w}x${h} at (${left},${top}), background made transparent`);
