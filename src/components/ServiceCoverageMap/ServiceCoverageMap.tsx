'use client';

import React from 'react';
import InstantServiceMap from '@/components/InstantServiceMap';

export default function ServiceCoverageMap() {
  return (
    <section style={{ padding: '4rem 0', background: '#f8fafc' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <p className="section-eyebrow">MOBILER EINSATZBEREICH</p>
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--navy-900)' }}>Direkt vor Ort in Ihrer Region</h2>
          <p className="section-lead" style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--gray-600)', fontSize: '1.1rem' }}>Unsere Servicefahrzeuge sind täglich im Raum Stuttgart für Sie im Einsatz.</p>
        </div>
        
        <InstantServiceMap />
      </div>
    </section>
  );
}
