'use client';

import React, { useEffect, useRef } from 'react';

export default function TrustindexHeroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?97c0dde80209198c2b968e75ce7';
      script.async = true;
      script.defer = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ marginBottom: '1.5rem', minHeight: '50px', display: 'flex', alignItems: 'center' }}>
      {/* Trustindex will inject the widget here */}
    </div>
  );
}
