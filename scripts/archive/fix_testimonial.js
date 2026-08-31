const fs = require('fs');
let code = fs.readFileSync('src/components/TestimonialSection/TestimonialSection.module.css', 'utf8');
code = code.replace(/width: 42px;/g, 'width: 44px; min-width: 44px; flex-shrink: 0;');
code = code.replace(/height: 42px;/g, 'height: 44px; min-height: 44px;');
fs.writeFileSync('src/components/TestimonialSection/TestimonialSection.module.css', code);
console.log('Fixed TestimonialSection.module.css');
