const fs = require('fs');

let code = fs.readFileSync('src/components/RealGalleryShowcase/RealGalleryShowcase.tsx', 'utf8');

if (code.includes('useState')) {
  console.log('Already uses useState');
} else {
  // Update imports
  code = code.replace("import React, { useRef } from 'react';", "import React, { useRef, useState } from 'react';");
  
  // Add state to component
  const oldComp = "export default function RealGalleryShowcase({ photos = PHOTOS }: RealGalleryShowcaseProps) {\n  const rail = useRef<HTMLDivElement>(null);";
  const newComp = "export default function RealGalleryShowcase({ photos = PHOTOS }: RealGalleryShowcaseProps) {\n  const rail = useRef<HTMLDivElement>(null);\n  const [showAll, setShowAll] = useState(false);\n  const displayedPhotos = showAll ? photos : photos.slice(0, 6);";
  code = code.replace(oldComp, newComp);
  
  // Modify slide function
  const oldSlide = `  function slide(dir: 'left' | 'right') {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -(CARD_W + GAP) * 2 : (CARD_W + GAP) * 2, behavior: 'smooth' });
  }`;
  const newSlide = `  function slide(dir: 'left' | 'right') {
    if (!showAll) setShowAll(true);
    setTimeout(() => {
      const el = rail.current;
      if (!el) return;
      el.scrollBy({ left: dir === 'left' ? -(CARD_W + GAP) * 2 : (CARD_W + GAP) * 2, behavior: 'smooth' });
    }, 50);
  }`;
  code = code.replace(oldSlide, newSlide);
  
  // Map displayedPhotos
  code = code.replace("{photos.map((p, i) => (", "{displayedPhotos.map((p, i) => (");
  
  // Add touch/scroll listeners to the rail
  const oldRail = `      <div
        ref={rail}`;
  const newRail = `      <div
        ref={rail}
        onScroll={() => !showAll && setShowAll(true)}
        onTouchStart={() => !showAll && setShowAll(true)}
        onMouseEnter={() => !showAll && setShowAll(true)}`;
  code = code.replace(oldRail, newRail);
  
  fs.writeFileSync('src/components/RealGalleryShowcase/RealGalleryShowcase.tsx', code);
  console.log('RealGalleryShowcase updated.');
}
