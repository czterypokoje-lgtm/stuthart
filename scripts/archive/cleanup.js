const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const replacements = [
  { search: /"\/contact"/g, replace: '"/kontakt"' },
  { search: /'\/contact'/g, replace: "'/kontakt'" },
  { search: /#offerte-form/g, replace: '#angebot-form' },
  { search: /nav-offerte-cta/g, replace: 'nav-angebot-cta' },
  { search: /kenteken-schema/g, replace: 'kennzeichen-schema' },
  { search: /kenteken-bc-schema/g, replace: 'kennzeichen-bc-schema' },
  { search: /KentekenBestellenPage/g, replace: 'KennzeichenBestellenPage' },
  { search: /autosleutel/g, replace: 'autoschluessel' },
  { search: /bijmaken/g, replace: 'nachmachen' }
];

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.md')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    replacements.forEach(r => {
      if (r.search.test(content)) {
        content = content.replace(r.search, r.replace);
        changed = true;
      }
    });

    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    }
  }
});
