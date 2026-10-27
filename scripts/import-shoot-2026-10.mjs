// Imports the October 2026 shoot: renames camera files to SEO-readable German
// slugs, resizes, strips EXIF and writes WebP into public/images/.
//   node scripts/import-shoot-2026-10.mjs "/path/to/Güngör"
import sharp from 'sharp';
import { mkdirSync, statSync } from 'fs';
import { join } from 'path';

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node scripts/import-shoot-2026-10.mjs <folder>'); process.exit(1); }

// camera file → [destination under public/images, long edge in px]
const PICKS = [
  ['8W7A2612.jpg', 'hero/autoschluessel-spezialist-guengoer-demir-servicefahrzeug-stuttgart', 2000],
  ['Foto 25.10.26, 21 44 47.jpg', 'team/guengoer-demir-inhaber-first-class-key-sindelfingen', 1100],
  ['Foto 25.10.26, 21 46 54.jpg', 'team/first-class-key-werkstatt-sindelfingen-stern-center', 1400],
  ['8W7A2501.jpg', 'werkstatt/autoschluessel-fraesen-cnc-maschine-sindelfingen', 1400],
  ['8W7A2624.jpg', 'werkstatt/autoschluessel-elektronik-transponder-reparatur', 1400],
  ['8W7A2598.jpg', 'werkstatt/auto-oeffnen-ohne-schluessel-notoeffnung-vor-ort', 1400],
  ['8W7A2574.jpg', 'werkstatt/autoschluessel-rohling-anpassen-vor-ort', 1400],
  ['8W7A2510.jpg', 'werkstatt/autoschluessel-nachmachen-schluesselrohling-fraesen', 1400],
];

for (const dir of new Set(PICKS.map(([, d]) => d.split('/')[0])))
  mkdirSync(join('public/images', dir), { recursive: true });

for (const [file, dest, edge] of PICKS) {
  const out = join('public/images', `${dest}.webp`);
  // rotate() applies the EXIF orientation, then metadata is dropped — these are
  // phone and DSLR files carrying GPS and serial numbers we should not publish.
  await sharp(join(SRC, file))
    .rotate()
    .resize({ width: edge, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const { width, height } = await sharp(out).metadata();
  console.log(`${file.padEnd(30)} → ${dest}.webp  ${width}x${height}  ${(statSync(out).size / 1024).toFixed(0)}KB`);
}
