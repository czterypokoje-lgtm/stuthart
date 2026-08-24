import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site.config';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';

export const metadata: Metadata = {
  title: `Galerie | ${SITE_CONFIG.name}`,
  description: 'Galerie von Autoschlüssel-Arbeiten. 26 echte Praxis-Projekte: BMW, Mercedes, VW, Audi, Porsche, Toyota mit GPS-Geolokalisierung.',
  alternates: { canonical: `${SITE_CONFIG.domain}/galerie` },
};

export default function GaleriePage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '5rem 2rem', textAlign: 'center' }}>
        <span className="section-label">GALERIE & PROJEKTE</span>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Unsere Arbeit in Bildern</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 650, margin: '0 auto' }}>
          Sehen Sie sich unsere 26 aktuellen Schlüsselreparaturen, Schlüsselprogrammierungen und Smart-Key-Lernprojekte vor Ort in <Link href="/standorte/stuttgart" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Stuttgart</Link>, <Link href="/standorte/sindelfingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Sindelfingen</Link>, <Link href="/standorte/boeblingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Böblingen</Link>, <Link href="/standorte/esslingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Esslingen</Link>, <Link href="/standorte/ludwigsburg" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Ludwigsburg</Link> und im Umkreis von 50km an.
        </p>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        {/* Werkstatt Section */}
        <div style={{ marginBottom: '4rem', background: 'var(--color-bg-alt)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ color: 'var(--navy-800)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em' }}>STUTTGART WERKSTATT & MOBILER SERVICE</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Professioneller Autoschlüssel-Spezialist</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Unsere professionelle Werkstatt in Stuttgart und unser voll ausgestattetes mobiles Servicefahrzeug sind mit den modernsten OEM-Diagnose- und Programmierwerkzeugen ausgestattet. Von BMW FEM/BDC und Mercedes EIS bis hin zu Volkswagen SFD und Porsche Smart Keys – wir programmieren Schlüssel für alle Marken vor Ort.
              </p>
            </div>
            <div>
              <img 
                src="/fc-key-sleutelnachmachen-stuttgart.webp" 
                alt="Schlüsseldienst Werkstatt mit Lötkolben und Werkzeug" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }} 
              />
            </div>
          </div>
        </div>

        {/* 26 REAL PHOTOS SHOWCASE */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', textAlign: 'center' }}>Alle 26 Projektfotos aus unserer Praxis</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            Sehen Sie sich alle Praxisprojekte aus Stuttgart, Sindelfingen und 50km Umkreis an.
          </p>
          <RealGalleryShowcase />
        </div>
      </div>
    </main>
  );
}
