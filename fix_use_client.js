const fs = require('fs');
let code = fs.readFileSync('src/components/BrandsLogoGrid/BrandsLogoGrid.tsx', 'utf8');
code = code.replace("import React, { useState } from 'react';\n'use client';", "'use client';\nimport React, { useState } from 'react';");
fs.writeFileSync('src/components/BrandsLogoGrid/BrandsLogoGrid.tsx', code);
console.log('Fixed use client');
