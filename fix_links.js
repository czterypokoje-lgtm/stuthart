const fs = require('fs');

function replaceFile(path, regexes) {
  if (!fs.existsSync(path)) {
    console.error(`File not found: ${path}`);
    return;
  }
  let content = fs.readFileSync(path, 'utf8');
  for (const [regex, replacement] of regexes) {
    content = content.replace(regex, replacement);
  }
  fs.writeFileSync(path, content);
}

// 1-4. blog_content.tsx
replaceFile('src/config/blog_content.tsx', [
  [/\/diensten\/autoschluessel-reparieren/g, '/leistungen/autoschluessel-reparieren'],
  [/\/diensten\/batterie-wechseln/g, '/leistungen/batterie-wechseln'],
  [/\/diensten\/gehaeuse-wechseln/g, '/leistungen/gehaeuse-wechseln'],
  [/\/diensten\/autoschluessel-nachmachen/g, '/leistungen/autoschluessel-nachmachen']
]);

// 5-7. standorte/[citySlug]/page.tsx
replaceFile('src/app/standorte/[citySlug]/page.tsx', [
  [/\/leistungen\/autoschluessel-verloren/g, '/autoschluessel-verloren'],
  [/\/leistungen\/autotuer-oeffnen/g, '/leistungen/auto-ohne-schluessel-oeffnen'], // Directly pointing to the hub we created earlier
  [/\/leistungen\/autoschluessel-reparatur/g, '/leistungen/autoschluessel-reparieren']
]);

// 8. marken/[merkSlug]/page.tsx
replaceFile('src/app/marken/[merkSlug]/page.tsx', [
  [/\/leistungen\/auto-oeffnen-ohne-schluessel/g, '/leistungen/auto-ohne-schluessel-oeffnen']
]);

// 9. leistungen/[slug]/page.tsx
replaceFile('src/app/leistungen/[slug]/page.tsx', [
  [/\/leistungen\/alle-schluessel-verloren/g, '/leistungen/alle-schluessel-verloren-auto']
]);

console.log('Links replaced.');
