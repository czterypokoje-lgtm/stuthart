const fs = require('fs');
let content = fs.readFileSync('src/config/services.ts', 'utf8');

content = content.replace(
  /title: 'Autoschlüssel verloren oder im Auto vergessen\? Der ultimative Maßnahmenplan',/g,
  "title: 'Autoschlüssel verloren oder im Auto vergessen? Maßnahmenplan',"
);

content = content.replace(
  /title: 'Autoschlüssel nachmachen: Tipps für ein schnelles und sicheres Ergebnis',/g,
  "title: 'Autoschlüssel nachmachen: Tipps für ein sicheres Ergebnis',"
);

content = content.replace(
  /title: 'Ghost Immobiliser: Warum jedes Keyless-Auto in Stuttgart einen braucht',/g,
  "title: 'Ghost Immobiliser: Schutz für jedes Keyless-Auto in Stuttgart',"
);

fs.writeFileSync('src/config/services.ts', content);
console.log('Fixed some blog titles.');
