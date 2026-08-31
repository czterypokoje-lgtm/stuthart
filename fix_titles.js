const fs = require('fs');

function replaceFile(path, regexes) {
  let content = fs.readFileSync(path, 'utf8');
  for (const [regex, replacement] of regexes) {
    content = content.replace(regex, replacement);
  }
  fs.writeFileSync(path, content);
}

replaceFile('src/app/blog/[slug]/page.tsx', [
  [/absolute: `\$\{post\.title\} \| \$\{SITE_CONFIG\.name\}`/g, 'absolute: post.title'],
  [/title: `\$\{post\.title\} \| \$\{SITE_CONFIG\.name\}`/g, 'title: post.title']
]);

replaceFile('src/app/marken/[merkSlug]/page.tsx', [
  [/absolute: brand\.customMetaTitle \|\| `\$\{brand\.name\} Autoschlüssel Nachmachen \| Alle Modelle & Baujahre \| FC-KEY`/g, 'absolute: brand.customMetaTitle || `${brand.name} Autoschlüssel nachmachen Stuttgart | FC-KEY`'],
  [/title: `\$\{brand\.name\} Autoschlüssel Nachmachen & Programmieren \| Alle Modelle & Baujahre`/g, 'title: `${brand.name} Autoschlüssel nachmachen Stuttgart | FC-KEY`']
]);

replaceFile('src/app/layout.tsx', [
  [/template: '%s \| First Class Key'/g, "template: '%s | FC-KEY'"],
  [/default: 'Autoschlüssel Nachmachen oder Verloren\? 24\/7 Mobiler Service \| First Class Key'/g, "default: 'Autoschlüssel Nachmachen oder Verloren? 24/7 Mobiler Service | FC-KEY'"]
]);

replaceFile('src/app/page.tsx', [
  [/absolute: 'Autoschlüssel nachmachen oder verloren\? 24\/7 Mobiler Service \| First Class Key'/g, "absolute: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | FC-KEY'"],
  [/title: 'Autoschlüssel nachmachen oder verloren\? 24\/7 Mobiler Service \| First Class Key'/g, "title: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | FC-KEY'"]
]);

console.log('Titles fixed.');
