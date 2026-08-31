const fs = require('fs');

let content = fs.readFileSync('src/config/services.ts', 'utf8');

content = content.replace(
  /Haben Sie Ihren einzigen Autoschlüssel verloren\? Lesen Sie hier, wie ein mobiler Kfz-Schlüsselspezialist einen neuen Schlüssel ohne den Originalschlüssel nachmachen und anlernen kann./g,
  "Alle Schlüssel verloren? Kein Problem! Ab 99€ fräsen & programmieren wir in 30 Min vor Ort einen neuen Autoschlüssel komplett ohne Original."
);

content = content.replace(
  /Autoschlüssel verloren, im Auto eingeschlossen oder Auto lässt sich nicht öffnen\? Lesen Sie unseren kompletten Guide zur schadenfreien Öffnung und Schlüssel-Neuprogrammierung./g,
  "Schlüssel verloren oder im Auto vergessen? Wir öffnen schadenfrei und programmieren Ersatzschlüssel ab 99€ in 30 Min vor Ort. Der Komplett-Guide."
);

fs.writeFileSync('src/config/services.ts', content);
console.log('Fixed last two long excerpts.');
