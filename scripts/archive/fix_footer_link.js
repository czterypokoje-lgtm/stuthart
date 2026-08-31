const fs = require('fs');
let code = fs.readFileSync('src/components/Footer/Footer.tsx', 'utf8');
code = code.replace('<Link href="/">\n                <Image', '<Link href="/" aria-label="Startseite">\n                <Image');
fs.writeFileSync('src/components/Footer/Footer.tsx', code);
console.log('Fixed Footer link');
