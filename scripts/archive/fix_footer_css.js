const fs = require('fs');
let code = fs.readFileSync('src/components/Footer/Footer.module.css', 'utf8');

code = code.replace('.linkList a { font-size: 0.82rem; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.12s; }', '.linkList a { font-size: 0.82rem; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.12s; display: inline-block; padding: 4px 0; min-height: 24px; }');
code = code.replace('.footerContact a { font-size: 0.82rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.12s; }', '.footerContact a { font-size: 0.82rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.12s; display: inline-block; padding: 4px 0; min-height: 24px; }');
code = code.replace('.bottomLinks a { font-size: 0.75rem; color: rgba(255,255,255,0.55); text-decoration: none; }', '.bottomLinks a { font-size: 0.75rem; color: rgba(255,255,255,0.55); text-decoration: none; display: inline-block; padding: 4px 0; min-height: 24px; }');

fs.writeFileSync('src/components/Footer/Footer.module.css', code);
console.log('Fixed Footer CSS');
