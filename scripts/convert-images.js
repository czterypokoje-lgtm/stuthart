const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images');
const outDir = path.join(__dirname, '../public/images/cities');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.startsWith('autoschluessel-nachmachen-') || !file.match(/\.(png|jpg|webp)$/)) {
      continue;
    }
    
    const basename = file.substring(0, file.lastIndexOf('.'));
    const ext = file.substring(file.lastIndexOf('.'));
    const inPath = path.join(dir, file);
    const outPath = path.join(outDir, `${basename}.webp`);
    
    console.log(`Processing ${file}...`);
    
    // If it's already a webp, just move it to cities folder if it's not there
    if (ext === '.webp') {
      fs.renameSync(inPath, outPath);
      console.log(`Moved ${file} to cities folder.`);
      continue;
    }
    
    // Convert to webp
    if (!fs.existsSync(outPath)) {
      await sharp(inPath)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log(`Converted ${file} to WebP and saved in cities folder.`);
    }
    
    // Remove the original png/jpg to save space
    fs.unlinkSync(inPath);
    console.log(`Deleted original ${file}`);
  }
}

run().catch(console.error);
