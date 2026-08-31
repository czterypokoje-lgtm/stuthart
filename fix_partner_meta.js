const fs = require('fs');
let file = 'src/app/partner/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /description: 'Zuverlässiger B2B-Partner für Autoschlüssel-Nachmachen[^']+',/,
  "description: 'B2B-Partner für Autoschlüssel: Mobiler Express-Service für Leasing, Flotten & Werkstätten ab 99€. Reduzieren Sie Ausfallzeiten noch heute.',"
);

fs.writeFileSync(file, content);
console.log('Partner meta fixed.');
