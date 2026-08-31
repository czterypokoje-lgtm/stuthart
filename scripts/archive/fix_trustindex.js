const fs = require('fs');
let content = `
'use client';

import React, { useEffect, useRef } from 'react';

export default function TrustindexHeroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScript = () => {
      if (containerRef.current && !containerRef.current.querySelector('script')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?97c0dde80209198c2b968e75ce7';
        script.async = true;
        script.defer = true;
        containerRef.current.appendChild(script);
      }
    };

    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (consent === 'accepted') {
        loadScript();
      } else {
        window.addEventListener('cookie_consent_accepted', loadScript);
        return () => window.removeEventListener('cookie_consent_accepted', loadScript);
      }
    }
  }, []);

  return (
    <div ref={containerRef} style={{ marginBottom: '0.5rem', minHeight: '40px', display: 'flex', alignItems: 'center' }}>
      {/* Trustindex will inject the widget here */}
    </div>
  );
}
`;
fs.writeFileSync('src/components/TrustindexHeroWidget/TrustindexHeroWidget.tsx', content.trim() + '\\n');
console.log('Fixed TrustindexHeroWidget.tsx');
