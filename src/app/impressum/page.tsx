import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Impressum | FC-KEY',
  },
  description: `Impressum von ${SITE_CONFIG.fullName}.`,
  alternates: { canonical: `${SITE_CONFIG.domain}/impressum` },
};

export default function ImpressumPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ color: '#fff' }}>Impressum</h1>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 900 }}>
        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Angaben gemäß § 5 TMG</h2>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            First Class Key<br />
            Mercedes str 12<br />
            71063 Sindelfingen
          </p>
        </div>

        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Kontakt</h2>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            Telefon: {SITE_CONFIG.phone}<br />
            E-Mail: {SITE_CONFIG.email}
          </p>
        </div>

        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Umsatzsteuer-ID</h2>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            56295/56209
          </p>
        </div>

        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>EU-Streitschlichtung</h2>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-blue)' }}>https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
