'use client';

import React, { useEffect, useRef } from 'react';
import styles from './TestimonialSection.module.css';
import { SITE_CONFIG } from '@/config/site.config';

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the Trustindex script directly into this container
    // so the widget renders exactly here.
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?27aa318800c619830b1601c181a';
      script.async = true;
      script.defer = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.sectionContainer} style={{ padding: '4rem 2rem', background: '#f1f5f9' }}>
      <h2 className={styles.mainTitle} style={{ marginBottom: '2rem' }}>Kundenbewertungen {SITE_CONFIG.name}</h2>
      
      {/* Trustindex Widget Container */}
      <div ref={containerRef} style={{ maxWidth: '1200px', margin: '0 auto', minHeight: '300px' }}>
      </div>
    </div>
  );
}
