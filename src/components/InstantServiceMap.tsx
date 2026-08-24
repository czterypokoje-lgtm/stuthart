'use client';

import React from 'react';

export default function InstantServiceMap() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '350px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
        position: 'relative',
        background: '#e8eaf0',
      }}
    >
      <iframe
        data-cmp-ab="1"
        src="https://www.google.com/maps/d/embed?mid=11YfgF3UnpXY64S533SE58sm0uPYzxlY&ehbc=2E312F"
        style={{
          border: 'none',
          width: '100%',
          height: 'calc(100% + 65px)',
          marginTop: '-65px',
          display: 'block',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="First Class Key Einsatzgebiet Stuttgart und Umgebung"
      />
    </div>
  );
}
