import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { FAQ_GLOBAL, FAQ_AUTOSLEUTEL_BIJMAKEN, FAQ_TRANSPONDER, FAQ_SMART_KEY, FAQ_AUTO_OP_SLOT, FAQ_AKL } from '@/config/faq';

export const metadata: Metadata = {
  title: {
    absolute: 'Häufig gestellte Fragen Autoschlüssel | FAQ | FC-KEY',
  },
  description: `FAQ: Autoschlüssel nachmachen, Kosten & Smart Keys programmieren. Alle Antworten hier. Mobiler Service ab 99€. Jetzt anfragen!`,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/faq`,
    languages: {
      'de-DE': `${SITE_CONFIG.domain}/faq`,
      'x-default': `${SITE_CONFIG.domain}/faq`,
    },
  },
  openGraph: {
    url: `${SITE_CONFIG.domain}/faq`,
    type: 'website',
    title: 'Häufig gestellte Fragen Autoschlüssel Nachmachen | FC-KEY',
    description: `FAQ: Autoschlüssel nachmachen, Kosten & Smart Keys programmieren. Alle Antworten hier. Mobiler Service ab 99€. Jetzt anfragen!`,
    images: [{ url: `${SITE_CONFIG.domain}/og-image.png`, width: 1200, height: 630, alt: 'Häufig gestellte Fragen Autoschlüssel Nachmachen — FC-KEY' }],
  },
};

// Combine all FAQs for the dedicated FAQ page — most comprehensive page
const allFaqs = [
  ...FAQ_GLOBAL,
  ...FAQ_AUTOSLEUTEL_BIJMAKEN,
  ...FAQ_TRANSPONDER,
  ...FAQ_SMART_KEY,
  ...FAQ_AUTO_OP_SLOT,
  ...FAQ_AKL,
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
    { '@type': 'ListItem', position: 2, name: 'Häufig gestellte Fragen', item: `${SITE_CONFIG.domain}/faq` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

// Section categories for structured display
const sections = [
  {
    title: '💰 Kosten & Preise',
    faqs: [FAQ_GLOBAL[0], FAQ_GLOBAL[4], FAQ_AUTOSLEUTEL_BIJMAKEN[2], FAQ_SMART_KEY[0]],
  },
  {
    title: '⏱️ Reaktionszeit & Verfügbarkeit',
    faqs: [FAQ_GLOBAL[1], FAQ_GLOBAL[5], FAQ_GLOBAL[13]],
  },
  {
    title: '🔑 Autoschlüssel verloren & Nachmachen',
    faqs: [FAQ_GLOBAL[2], FAQ_GLOBAL[3], FAQ_AUTOSLEUTEL_BIJMAKEN[0], FAQ_AUTOSLEUTEL_BIJMAKEN[1], FAQ_GLOBAL[12]],
  },
  {
    title: '📡 Transponder & Smart Key',
    faqs: [FAQ_GLOBAL[7], FAQ_GLOBAL[8], FAQ_TRANSPONDER[0], FAQ_TRANSPONDER[1], FAQ_TRANSPONDER[2], FAQ_SMART_KEY[1], FAQ_GLOBAL[11]],
  },
  {
    title: '🚗 Auto öffnen',
    faqs: [FAQ_AUTO_OP_SLOT[0], FAQ_AUTO_OP_SLOT[1], FAQ_AUTO_OP_SLOT[2], FAQ_GLOBAL[10]],
  },
  {
    title: '🛡️ Alle Schlüssel verloren (AKL)',
    faqs: [FAQ_AKL[0], FAQ_AKL[1], FAQ_GLOBAL[3]],
  },
  {
    title: '✅ Garantie & Zuverlässigkeit',
    faqs: [FAQ_GLOBAL[14], FAQ_GLOBAL[9], FAQ_GLOBAL[6]],
  },
];

export default function FAQPage() {
  return (
    <>
      <script id="schema-faq-page" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="schema-faq-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '5rem 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--navy-700)', marginBottom: '0.75rem' }}>HÄUFIG GESTELLTE FRAGEN</p>
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Alles über Autoschlüssel nachmachen & programmieren</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 640, margin: '0 auto 1.5rem' }}>
            Antworten auf die am häufigsten gestellten Fragen zu unserem Service. Haben Sie nicht gefunden, was Sie gesucht haben?
          </p>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ display: 'inline-block', background: 'var(--navy-800)', color: '#fff', padding: '0.875rem 2rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            📞 Rufen Sie uns an: {SITE_CONFIG.phone}
          </a>
        </section>

        <div className="container" style={{ padding: '4rem 2rem', maxWidth: 960 }}>

          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid var(--gray-200)', color: 'var(--gray-900)' }}>
                {section.title}
              </h2>
              {section.faqs.map((faq, i) => (
                <details
                  key={i}
                  style={{ borderBottom: '1px solid var(--color-border)', padding: '1.25rem 0' }}
                >
                  <summary style={{ fontSize: '1.02rem', fontWeight: 600, cursor: 'pointer', color: 'var(--color-text-primary)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    {faq.q}
                    <span style={{ color: 'var(--navy-800)', flexShrink: 0, fontSize: '1.3rem', lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ marginTop: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', paddingLeft: '0' }}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          {/* ── COMPREHENSIVE FAQ SEO GUIDE ARTICLE ── */}
          <div className="seo-article-block" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
            <h2>Technische Hintergrundinformationen zur Autoschlüssel-Programmierung und Sicherheit</h2>
            <p>
              Die Verwaltung moderner Autoschlüssel hat sich in den letzten zwanzig Jahren drastisch verändert. Während ein Autoschlüssel früher nur ein zugeschnittenes Stück Metall war, das einen Schließzylinder drehte, ist heute jeder Schlüssel ein fortschrittlicher Minicomputer. Im Schlüsselgehäuse ist ein Transponderchip integriert, der über Funkfrequenzen (RFID) mit der Ringantenne um Ihr Zündschloss kommuniziert. Ohne den korrekten kryptografischen Schlüsselcode startet der Motor nicht.
            </p>
            <h3>Wegfahrsperren, EWS, CAS, FEM und MQB Systeme</h3>
            <p>
              Autohersteller entwickeln ständig neue Generationen von Wegfahrsperren, um Diebstahl zu verhindern. Beim Nachmachen eines Autoschlüssels lesen unsere Techniker die Speicherchips (EEPROM/MCU) über den OBD2-Anschluss aus. Wir berechnen vor Ort die richtigen Sicherheitsschlüssel, um einen neuen Schlüssel zum Wegfahrsperrensystem Ihres Autos hinzuzufügen.
            </p>
            <h3>Was tun bei einem defekten oder wassergeschädigten Autoschlüssel?</h3>
            <p>
              Ist Ihr Schlüssel ins Wasser gefallen oder reagieren die Tasten nicht mehr? Oft können wir die elektronische Platine reparieren, die Mikroschalter austauschen oder ein neues Schlüsselgehäuse montieren. Dies spart Ihnen Hunderte von Euro im Vergleich zu einem komplett neuen Schlüssel beim Händler.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, var(--navy-800), var(--navy-900))', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', marginTop: '2rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Ist Ihre Frage nicht dabei?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>Rufen Sie an oder schreiben Sie uns per WhatsApp — wir antworten innerhalb von 2 Minuten.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} style={{ background: '#fff', color: 'var(--navy-900)', padding: '0.875rem 1.75rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
                📞 {SITE_CONFIG.phone}
              </a>
              <a href={WHATSAPP_URL} style={{ background: '#002752', color: '#fff', padding: '0.875rem 1.75rem', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
