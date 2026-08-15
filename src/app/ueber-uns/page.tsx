import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Über Uns | FC-KEY: Zertifizierter Autoschlüssel Spezialist',
  },
  description: `Lernen Sie FC-KEY kennen. Unter der Leitung von Gungor Demir bieten wir professionellen, mobilen Autoschlüsselservice im gesamten Großraum und in Süddeutschland.`,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/ueber-uns`,
    languages: {
      'nl-NL': `${SITE_CONFIG.domain}/ueber-uns`,
      'de-DE': `${SITE_CONFIG.domain}/ueber-uns`,
      'x-default': `${SITE_CONFIG.domain}/ueber-uns`,
    },
  },
};

const tools = ['Autel IM608 Pro II', 'VVDI BIMTool Pro', 'Yanhua Mini ACDP', 'FC-200 / Hextag', 'AVDI Abrites', 'Lonsdor K518', 'Xhorse Key Tool Plus', 'BMW ICOM NEXT + ISTA', 'Magic Motorsport FLEX', 'Dolphin XP005L CNC'];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
    { '@type': 'ListItem', position: 2, name: 'Über Uns', item: `${SITE_CONFIG.domain}/ueber-uns` },
  ],
};

// E-E-A-T: Named specialist schema — critical for Google trust signals
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_CONFIG.domain}/#specialist`,
  name: 'Gungor Demir',
  jobTitle: 'Cheftechniker & Autoschlüssel Spezialist',
  description: 'Zertifizierter Autoschlüsselspezialist mit jahrelanger Erfahrung in Fahrzeugsicherheit und Autoschlüsselcodierung. Spezialist für Transponderprogrammierung, Smart Key Systeme und Zündschlossreparatur für alle Automarken.',
  worksFor: {
    '@id': `${SITE_CONFIG.domain}/#localbusiness`,
  },
  knowsAbout: [
    'Autoschlüssel Programmierung',
    'Transponderschlüssel',
    'Smart Key Systeme',
    'Immobilizer Bypass',
    'Zündschloss Reparatur',
    'OBD2 Diagnose',
    'Fahrzeugsicherheit',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Zertifizierung',
      name: 'Autel IM608 Pro II Zertifiziert',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Zertifizierung',
      name: 'AVDI Abrites Zertifizierter Techniker',
    },
  ],
  url: `${SITE_CONFIG.domain}/ueber-uns`,
};

export default function OverOnsPage() {
  return (
    <>
      <Script id="over-ons-bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="over-ons-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <main>
      <section style={{ 
        background: 'linear-gradient(135deg, rgba(7,14,26,0.85) 0%, rgba(10,22,40,0.95) 100%), url("/images/seo/auto_schluessel_stuttgart_hintergrund_service.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 2rem' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span className="section-label">ÜBER UNS</span>
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Über FC-KEY: Ihr mobiler Autoschlüssel Spezialist</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Wir sind Ihr zuverlässiger, mobiler Autoschlüsselspezialist. Mit modernster Ausrüstung und jahrelanger Erfahrung lösen wir jedes Autoschlüsselproblem. Wir machen dies direkt vor Ort, 24/7 und zu einem fairen Festpreis.
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>Wer sind wir?</h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>FC-KEY wird von Gungor Demir geleitet. Er ist ein zertifizierter Experte für Fahrzeugsicherheit und Autoschlüsselcodierung. Gemeinsam mit einem eng verbundenen Team erfahrener mobiler Monteure helfen wir täglich Privatpersonen, Flottenmanagern und Werkstätten.</p>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>Wir kommen immer zu Ihnen. Egal ob Sie zu Hause sind, bei der Arbeit oder am Straßenrand gestrandet sind.</p>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>Unser Fokus ist einfach: Faire Preise, schnelle Reaktionszeiten und technisch einwandfreie Arbeit. Keine vagen Geschichten, sondern direkte Lösung Ihres Problems.</p>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Unsere Kernwerte</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Transparenz:</strong> Sie erhalten immer vorab einen Festpreis. Keine Überraschungen danach.</span></li>
              <li style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Zuverlässigkeit:</strong> Wir sind bei der Handelskammer registriert, voll versichert und liefern Arbeiten mit standardmäßig 12 Monaten Garantie.</span></li>
              <li style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Qualität:</strong> Wir verwenden ausschließlich professionelle (OEM) Geräte, keine billigen Nachbauten.</span></li>
              <li style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Erreichbarkeit:</strong> Wir stehen Ihnen 24 Stunden am Tag, 7 Tage die Woche zur Verfügung, auch an Wochenenden und Feiertagen.</span></li>
            </ul>
          </div>

          <div>
            <img
              src="/images/gungor-demir.webp"
              alt="Gungor Demir — Cheftechniker"
              style={{
                width: '100%',
                maxWidth: '340px',
                height: '220px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>Gungor Demir</h3>
            <p style={{ color: 'var(--orange-500)', fontWeight: 600, fontSize: '0.85rem', margin: 0 }}>Cheftechniker</p>
          </div>
        </div>

        {/* Workshop Image Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.6rem' }}>Unsere Werkstatt &amp; Mobiler Service<br/>📍 Zentrale in Stuttgart, Aktiv im ganzen Großraum</h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>Unsere physische Werkstatt und das Lager befinden sich in Stuttgart. Von diesem zentralen Standort aus steuern wir unsere mobilen Servicebusse.</p>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>Wir fahren täglich zu Kunden in der gesamten Region Stuttgart und Süddeutschland. So helfen wir schnell und vor Ort unter anderem in Sindelfingen, Esslingen, Ludwigsburg, Böblingen und Leonberg.</p>
          </div>
          <div>
            <img 
              src="/images/seo/auto_schluessel_stuttgart_24stunden_werkstatt.webp" 
              alt="Professionelle Autoschlüssel Werkstatt und Werkzeuge" 
              style={{ width: '100%', maxWidth: '340px', height: '210px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'block' }} 
            />
          </div>
        </div>

        {/* Mobile Work & Inventory Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.6rem' }}>🚐 Voll Ausgestattete Servicebusse</h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>Probleme mit Autoschlüsseln passieren oft zu ungünstigen Zeiten. Deshalb haben wir unsere Busse als rollende Werkstätten eingerichtet. Wir fräsen Schlüssel direkt vor Ort mit CNC-gesteuerten Maschinen und haben Lötstationen für Präzisionsarbeiten dabei. Sie müssen Ihr Auto also nie teuer zu einem Händler abschleppen lassen.</p>
          </div>
          <div>
            <img 
              src="/images/seo/schluesseldienst_stuttgart_arbeiten_24stunden.webp" 
              alt="Arbeiten vor Ort durch Monteur" 
              style={{ width: '100%', maxWidth: '340px', height: '210px', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'block' }} 
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.6rem' }}>🔑 Großer Bestand an Originalschlüsseln</h2>
            <p style={{ color: 'var(--gray-700)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>Um Ihnen so schnell wie möglich wieder auf die Straße zu helfen, haben wir einen riesigen Bestand an originalen und Aftermarket-Autoschlüsseln. Von modernen Keyless-Go-Smart-Keys bis hin zu traditionellen Schlüsseln mit Transponder; für 99% aller Automarken haben wir sofort die richtige Lösung auf Lager.</p>
          </div>
          <div>
            <img 
              src="/images/seo/envanter.jpeg" 
              alt="Lager an originalen Autoschlüsseln und Transpondern" 
              style={{ width: '100%', maxWidth: '340px', height: '210px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'block' }} 
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            { num: `${SITE_CONFIG.rating}★`, label: 'Google Score', sub: `Mehr als ${SITE_CONFIG.reviewCount} Kundenbewertungen` },
            { num: '34 Min', label: 'Durchschnittliche Reaktionszeit', sub: 'Vor Ort' },
            { num: '24/7', label: 'Erreichbar', sub: 'Für Notfälle in der gesamten Region' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', padding: '2rem', background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{s.num}</div>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── COMPREHENSIVE OVER ONS SEO GUIDE ARTICLE ── */}
        <div className="seo-article-block" style={{ marginTop: '2rem', marginBottom: '3.5rem' }}>
          <h2>Warum FC-KEY wählen?</h2>
          <h3>Echte Expertise, keine Standard-Werkstatt</h3>
          <p>
            Gungor Demir und sein Team arbeiten immer mit der neuesten Software für Schlüssel- und Fahrzeugdiagnose. Wo eine Standard-Werkstatt aufhört, machen wir weiter. Wir sind spezialisiert auf komplexe Fahrzeugelektronik, das Auslesen von EEPROM, CAN-Bus-Sicherheit und das Programmieren von Transponderchips auf Werksniveau.
          </p>
          <h3>Keine Vermittler oder teure Callcenter</h3>
          <p>
            Wenn Sie unsere Notfallnummer anrufen, sprechen Sie nicht mit einem Callcenter, sondern direkt mit einem sachkundigen Monteur.
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Direkter Kontakt:</strong> Wir schätzen Ihre Situation sofort am Telefon ein.</li>
            <li><strong>Klarer Preis:</strong> Sie erhalten vorab ein klares All-In-Preisangebot.</li>
            <li><strong>Schnell vor Ort:</strong> Wir planen den nächstgelegenen Monteur ein. Oft sind wir schon innerhalb von 30 bis 45 Minuten bei Ihnen vor Ort.</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-primary btn-lg" id="over-ons-contact-cta">
            📞 Kontakt aufnehmen
          </Link>
          <a
            href={`https://search.google.com/local/writereview?placeid=ChIJdd4hrwug2EcRmSRUsedYDNk`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            id="over-ons-review-cta"
            style={{ background: '#fff', border: '2px solid var(--color-border)', color: 'var(--gray-800)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            ⭐ Schreiben Sie eine Google-Bewertung
          </a>
        </div>
      </div>
    </main>
    </>
  );
}
