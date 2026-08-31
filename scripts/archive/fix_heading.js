const fs = require('fs');
let code = fs.readFileSync('src/components/Footer/Footer.tsx', 'utf8');
code = code.replace(/<h4/g, '<h3');
code = code.replace(/<\/h4>/g, '</h3>');
fs.writeFileSync('src/components/Footer/Footer.tsx', code);
console.log('Fixed headings in Footer');
