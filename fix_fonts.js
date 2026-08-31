const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace("--font-main: 'IBM Plex Sans'", "--font-main: var(--font-ibm-plex-sans)");
fs.writeFileSync('src/app/globals.css', css);
console.log('Fixed globals.css');
