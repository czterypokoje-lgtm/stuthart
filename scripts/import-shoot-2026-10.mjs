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

  // Schlüssel fräsen / nachmachen
  ['8W7A2506.jpg', 'werkstatt/autoschluessel-spezialist-an-der-fraesmaschine', 1400],
  ['8W7A2529.jpg', 'werkstatt/schluesselfraesmaschine-schluesselbart-detail', 1400],
  ['8W7A2544.jpg', 'werkstatt/transponder-schluessel-codieren-werkstatt', 1400],

  // Notöffnung / Autotür öffnen
  ['8W7A2595.jpg', 'werkstatt/auto-notoeffnung-fahrzeug-oeffnen-stuttgart', 1400],
  ['8W7A2597.jpg', 'werkstatt/autotuer-oeffnen-spezialwerkzeug-vor-ort', 1400],
  ['8W7A2606.jpg', 'werkstatt/autotuer-oeffnen-ohne-beschaedigung-werkzeug', 1400],
  ['8W7A2589.jpg', 'werkstatt/autoschluessel-uebergabe-nach-notoeffnung', 1400],
  ['8W7A2586.jpg', 'werkstatt/autoschluessel-rohling-pruefen-am-fahrzeug', 1400],

  // Elektronik / Funkschlüssel-Reparatur
  ['8W7A2625.jpg', 'werkstatt/funkschluessel-platine-reparatur-loeten', 1400],
  ['8W7A2632.jpg', 'werkstatt/autoschluessel-elektronik-pruefen-pinzette', 1400],

  // NOTE: 8W7A2613-2617 from this shoot show a euro profile cylinder being
  // drilled in a steel building door — building locksmithing, not car work.
  // They are deliberately not imported: this site's services are all automotive.
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
