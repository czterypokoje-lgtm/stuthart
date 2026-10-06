// Regenerates every brand raster from one master: public/brand/logo-source.png
// (produced by prepare-logo-source.mjs from the designer's original).
// Run after any logo change:  node scripts/build-brand-assets.mjs
import sharp from 'sharp';
import { copyFileSync, statSync, writeFileSync } from 'fs';

const MASTER = 'public/brand/logo-source.png';
const NAVY = '#0d2137';
const F = "'IBM Plex Sans',system-ui,-apple-system,Segoe UI,Arial,sans-serif";

// Minimal single-image .ico — the format is a 22-byte header wrapping a PNG.
const ico = (pngBuf, size) => {
  const h = Buffer.alloc(22);
  h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4);
  h.writeUInt8(size, 6); h.writeUInt8(size, 7);
  h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12);
  h.writeUInt32LE(pngBuf.length, 14); h.writeUInt32LE(22, 18);
  return Buffer.concat([h, pngBuf]);
};

// The logo is gold line-art with no solid ground of its own. On a white browser
// tab that nearly disappears, so icons get the site's navy behind them.
// Both layers go in ONE composite call — a second call replaces the first.
const iconAt = async (size, padRatio, radiusRatio) => {
  const inner = Math.round(size * (1 - padRatio * 2));
  const art = await sharp(MASTER)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const { width, height } = await sharp(art).metadata();
  const radius = Math.round(size * radiusRatio);
  const ground = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/></svg>`);
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: ground, top: 0, left: 0 },
      { input: art, top: Math.round((size - height) / 2), left: Math.round((size - width) / 2) },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
};

// ── Open Graph card: the real logo on the brand navy ──
const logoForOg = await sharp(MASTER).resize({ height: 190 }).toBuffer();
const ogMeta = await sharp(logoForOg).metadata();
const ogBg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0E2B55"/><stop offset="1" stop-color="#061A35"/></linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F7D070"/><stop offset=".45" stop-color="#D9A32B"/><stop offset="1" stop-color="#A6761A"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1090" cy="110" r="300" fill="#fff" opacity=".04"/>
  <rect width="14" height="630" fill="url(#gold)"/>
  <text x="80" y="330" font-family="${F}" font-size="64" font-weight="700" fill="#fff">Autoschlüssel nachmachen</text>
  <text x="80" y="408" font-family="${F}" font-size="64" font-weight="700" fill="#E8B84B">&amp; Notöffnung vor Ort</text>
  <text x="80" y="474" font-family="${F}" font-size="29" font-weight="500" fill="#AFC2D8">Mobiler Service · alle Marken · Festpreis ab 149 €</text>
  <rect x="80" y="516" width="296" height="70" rx="35" fill="url(#gold)"/>
  <text x="228" y="561" font-family="${F}" font-size="29" font-weight="700" fill="#0A1831" text-anchor="middle">0172 141 61 44</text>
  <text x="410" y="551" font-family="${F}" font-size="23" font-weight="500" fill="#8FA6C2">Stuttgart · Sindelfingen ·<tspan x="410" dy="29">Baden-Württemberg</tspan></text>
</svg>`;

await sharp(Buffer.from(ogBg))
  .composite([{ input: logoForOg, top: 60, left: 80 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');

// ── Square logo for schema.org / sitemaps, and the app icons ──
writeFileSync('public/logo.png', await iconAt(512, 0.08, 0.16));
writeFileSync('public/icon.png', await iconAt(512, 0.08, 0.16));
writeFileSync('public/apple-icon.png', await iconAt(180, 0.10, 0.20));
copyFileSync('public/icon.png', 'src/app/icon.png');
copyFileSync('public/apple-icon.png', 'src/app/apple-icon.png');

const fav = ico(await iconAt(48, 0.04, 0.14), 48);
writeFileSync('public/favicon.ico', fav);
writeFileSync('src/app/favicon.ico', fav);

// ── Header/footer lockup: served directly, so keep it small ──
await sharp(MASTER).resize({ height: 192 }).png({ compressionLevel: 9 }).toFile('public/logo-lockup.png');

for (const f of ['public/og-image.png', 'public/logo.png', 'public/logo-lockup.png', 'public/icon.png', 'public/apple-icon.png', 'public/favicon.ico'])
  console.log(f.padEnd(28), (statSync(f).size / 1024).toFixed(0) + 'KB');
