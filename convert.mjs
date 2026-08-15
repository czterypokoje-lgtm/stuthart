import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = '/Users/ik/Desktop/CITIES';
const targetDir = path.join(process.cwd(), 'public', 'images');

const cityMap = {
  'Esslingen.jpg': 'esslingen',
  'Heidelberg.jpg': 'heidelberg',
  'Karlsruhe.jpg': 'karlsruhe',
  'Leonberg.jpg': 'leonberg',
  'Ludwisburg.jpg': 'ludwigsburg',
  'Manheim.jpg': 'mannheim',
  'Pforzheim.jpg': 'pforzheim',
  'Reutlingen.jpg': 'reutlingen',
  'boblingen.jpg': 'boeblingen',
  'heilbron.jpg': 'heilbronn',
  'sindefilingen.jpg': 'sindelfingen',
  'ulm.jpg': 'ulm'
};

async function convertImages() {
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg'));
  
  for (const file of files) {
    if (cityMap[file]) {
      const citySlug = cityMap[file];
      const targetPath = path.join(targetDir, `autoschluessel-nachmachen-${citySlug}.webp`);
      
      console.log(`Converting ${file} to autoschluessel-nachmachen-${citySlug}.webp`);
      
      try {
        await sharp(path.join(sourceDir, file))
          .webp({ quality: 80 })
          .toFile(targetPath);
        console.log(`✅ Success: ${citySlug}`);
      } catch (err) {
        console.error(`❌ Error converting ${file}:`, err);
      }
    }
  }
}

convertImages();
