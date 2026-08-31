const fs = require('fs');
let content = fs.readFileSync('src/app/standorte/[citySlug]/page.tsx', 'utf8');

content = content.replace(
  /description: city\.customMetaDesc \|\| `Autoschlüssel verloren oder defekt in \$\{city\.city\}\? Mobiler Autoschlüsselspezialist innerhalb \$\{city\.travelTime\} vor Ort. Alle Automarken. Günstiger als beim Händler. Direkt anrufen!`,/g,
  "description: city.customMetaDesc || `Ab 99€ & ${city.travelTime} vor Ort in ${city.city}: Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Programmierung. Direkt anrufen!`.substring(0, 155),"
);

content = content.replace(
  /description: `Autoschlüssel verloren oder Ersatz nachmachen in \$\{city\.city\}\? Wir sind innerhalb \$\{city\.travelTime\} vor Ort. Alle Automarken. Anrufen: \$\{SITE_CONFIG\.phone\}`,/g,
  "description: `Ab 99€ & ${city.travelTime} vor Ort in ${city.city}: Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Programmierung.`.substring(0, 155),"
);

fs.writeFileSync('src/app/standorte/[citySlug]/page.tsx', content);
console.log('Fixed city meta');
