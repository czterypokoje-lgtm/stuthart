const fs = require('fs');

let code = fs.readFileSync('src/components/BrandsLogoGrid/BrandsLogoGrid.tsx', 'utf8');

if (code.includes('useState')) {
  console.log('Already uses useState');
} else {
  code = code.replace("import React from 'react';", "import React, { useState } from 'react';\n'use client';");
  
  // Also we need to make it a client component but wait, it might be used in Server Components without children?
  // Yes, adding 'use client' is fine for this UI component.
  
  const oldComp = "export default function BrandsLogoGrid({ title, subtitle, hideSeoHeader = false }: BrandsLogoGridProps) {";
  const newComp = "export default function BrandsLogoGrid({ title, subtitle, hideSeoHeader = false }: BrandsLogoGridProps) {\n  const [showAll, setShowAll] = useState(false);\n  const displayedBrands = showAll ? TOP_BRANDS : TOP_BRANDS.slice(0, 8);";
  
  code = code.replace(oldComp, newComp);
  
  const oldGrid = `{TOP_BRANDS.map((brand) => (`;
  const newGrid = `{displayedBrands.map((brand) => (`;
  code = code.replace(oldGrid, newGrid);
  
  const oldActions = `<div className={styles.actions}>`;
  const newActions = `{!showAll && (
            <button 
              onClick={() => setShowAll(true)} 
              className={styles.secondaryButton} 
              style={{ width: '100%', marginBottom: '1rem', cursor: 'pointer', border: 'none' }}
            >
              Alle {TOP_BRANDS.length} Marken anzeigen
            </button>
          )}
          <div className={styles.actions}>`;
  code = code.replace(oldActions, newActions);
  
  fs.writeFileSync('src/components/BrandsLogoGrid/BrandsLogoGrid.tsx', code);
  console.log('BrandsLogoGrid updated.');
}
