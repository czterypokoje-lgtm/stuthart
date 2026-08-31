const fs = require('fs');

let content = fs.readFileSync('src/app/marken/[merkSlug]/page.tsx', 'utf8');

content = content.replace(
  /description: `\$\{brand.name\} Autoschlüssel nachmachen & anlernen vor Ort. Günstiger als der Händler. Am selben Tag fertig mit 12 Monaten Garantie. Direkt anrufen!`,/g,
  "description: `Ab 99€ & 30 Min vor Ort: ${brand.name} Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Codierung (${brand.system}).`.substring(0, 155),"
);

content = content.replace(
  /description: `Professionell Autoschlüssel nachmachen & programmieren für alle \$\{brand.name\} Modelle \(\$\{brand.system\}\). FC-KEY mobiler Service vor Ort.`,/g,
  "description: `Ab 99€ & 30 Min vor Ort: ${brand.name} Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Codierung (${brand.system}).`.substring(0, 155),"
);

fs.writeFileSync('src/app/marken/[merkSlug]/page.tsx', content);
console.log('Fixed brand openGraph and schema meta');
