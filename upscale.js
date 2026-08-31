const fs = require('fs');
const sharp = require('sharp');

sharp('public/images/hero-van-fc-key.webp')
  .resize(2400, null, {
    kernel: sharp.kernel.lanczos3,
    fastShrinkOnLoad: false
  })
  .webp({ quality: 85 })
  .toFile('public/images/hero-van-2400.webp')
  .then(() => console.log('Successfully upscaled and converted to WebP!'))
  .catch(err => console.error(err));
