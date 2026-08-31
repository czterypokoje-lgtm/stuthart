import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { BRANDS } from '@/config/brands';
import { SITE_CONFIG } from '@/config/site.config';

export const metadata: Metadata = {
  title: {
    absolute: 'Alle 59 Automarken | Schlüsselprogrammierung | FC-KEY',
  },
  description: 'Autoschlüssel-Programmierung für alle 59 Marken. BMW, Mercedes, VW, Audi, Toyota, Ford, Volvo, Renault, Peugeot, Tesla und mehr. Mobiler Service, 24/7.',
  alternates: { canonical: `${SITE_CONFIG.domain}/marken` },
};

const groups = [
  { title: 'Am häufigsten gefragt', brands: BRANDS.filter(b => b.priority === 'P1') },
  { title: 'Beliebte Marken', brands: BRANDS.filter(b => b.priority === 'P2') },
  { title: 'Alle anderen Marken', brands: BRANDS.filter(b => b.priority === 'P3') },
];

export default function MarkenPage() {
  const p1Brands = BRANDS.filter(b => b.priority === 'P1');
  const p2Brands = BRANDS.filter(b => b.priority === 'P2');
  const p3Brands = BRANDS.filter(b => b.priority === 'P3');

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--navy-900)', padding: '6rem 2rem', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
        <Image
          src="/autoschluessel-merken-nachmachen-stuttgart-sindelfingen.webp"
          alt="Autoschlüssel nachmachen für diverse Marken"
          fill
          priority
          fetchPriority="high"
          quality={70}
          style={{ objectFit: 'cover', opacity: 0.6, zIndex: 0 }}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.75)', zIndex: 1, pointerEvents: 'none' }} />
        
        <script id="merken-image-gps" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://www.fc-key.de/autoschluessel-merken-nachmachen-stuttgart-sindelfingen.webp",
            "name": "Autoschlüssel nachmachen Stuttgart & Sindelfingen",
            "description": "Vollständige Übersicht der 59 Automarken, für die FC-KEY Autoschlüssel programmiert und nachmacht in Stuttgart und Sindelfingen.",
            "contentLocation": {
              "@type": "Place",
              "name": "Stuttgart, Sindelfingen",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.7758,
                "longitude": 9.1829
              }
            }
          })
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--navy-700)', marginBottom: '0.75rem' }}>MARKEN</p>
          <h1 style={{ color: '#fff', marginBottom: '1rem' }}>59 Automarken — Alle Schlüsselsysteme</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 650, margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Von BMW CAS4+ über VW MQB SFD bis Toyota G-Chip. Händler-Level-Tools für jede Marke. Mobiler Service vor Ort.
          </p>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary" id="merken-hero-phone">{SITE_CONFIG.phone}</a>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ padding: '3.5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Webmaster-style Services & SEO block */}
        <div style={{
          background: '#fff',
          border: '1px solid var(--gray-200)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1rem', borderBottom: '1px solid var(--gray-200)', paddingBottom: '0.5rem' }}>
            Unsere Schlüsselservices &amp; Programmierung
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--gray-700)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
            Als mobiler Autoschlüsselspezialist bieten wir eine breite Palette an Leistungen direkt vor Ort. Wir programmieren Ihren Transponderschlüssel, duplizieren Ihren Smart Key oder öffnen Ihr Fahrzeug zerstörungsfrei, wenn Sie sich ausgesperrt haben. Unsere zertifizierten Spezialisten arbeiten schnell und professionell.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Autoschlüssel nachmachen</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Ersatzschlüssel fräsen und anlernen für alle Marken.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Transponder programmieren</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Wegfahrsperren-Chips kodieren und synchronisieren.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Smart Key anlernen</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Keyless Entry und Komfortschlüssel an der ECU anmelden.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Auto zerstörungsfrei öffnen</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Lishi-Lockpicking bei Aussperrung oder Schlüssel im Auto.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Schlüsselgehäuse reparieren</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Mikroschalter löten und Knopfzellenbatterien wechseln.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <div>
                <strong>Zündschloss Diagnose</strong>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>Defekte Schlösser auslesen, reparieren oder austauschen.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. MEEST GEVRAAGD (GRID STYLE WITH CHECKMARKS & ORANGE LINKS) */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, paddingBottom: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--gray-300)', color: 'var(--navy-900)' }}>
            Am häufigsten gefragte Automarken (Mobiles Codieren)
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1.5rem 1rem'
          }}>
            {p1Brands.map(b => (
              <div key={b.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.2' }}>✓</span>
                <div>
                  <Link 
                    href={`/marken/${b.nameSlug}-autoschluessel-nachmachen`} 
                    id={`merk-${b.slug}`}
                    style={{ color: 'var(--navy-800)', textDecoration: 'underline', fontWeight: 700, fontSize: '0.95rem' }}
                  >
                    {b.name}
                  </Link>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginTop: '0.15rem', lineHeight: 1.35 }}>
                    {b.name} Schlüssel nachmachen • {b.system}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. POPULAIRE MERKEN (GRID STYLE WITH CHECKMARKS & ORANGE LINKS) */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, paddingBottom: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--gray-300)', color: 'var(--navy-900)' }}>
            Beliebte Automarken
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1.5rem 1rem'
          }}>
            {p2Brands.map(b => (
              <div key={b.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.2' }}>✓</span>
                <div>
                  <Link 
                    href={`/marken/${b.nameSlug}-autoschluessel-nachmachen`} 
                    id={`merk-${b.slug}`}
                    style={{ color: 'var(--navy-800)', textDecoration: 'underline', fontWeight: 700, fontSize: '0.95rem' }}
                  >
                    {b.name}
                  </Link>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginTop: '0.15rem', lineHeight: 1.35 }}>
                    {b.name} Schlüssel programmieren • {b.system}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. OVERIGE MERKEN (GRID STYLE WITH CHECKMARKS & ORANGE LINKS) */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, paddingBottom: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--gray-300)', color: 'var(--navy-900)' }}>
            Weitere Automarken
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1.5rem 1rem'
          }}>
            {p3Brands.map(b => (
              <div key={b.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.2' }}>✓</span>
                <div>
                  <Link 
                    href={`/marken/${b.nameSlug}-autoschluessel-nachmachen`} 
                    id={`merk-${b.slug}`}
                    style={{ color: 'var(--navy-800)', textDecoration: 'underline', fontWeight: 700, fontSize: '0.95rem' }}
                  >
                    {b.name}
                  </Link>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', marginTop: '0.15rem', lineHeight: 1.35 }}>
                    {b.name} Schlüssel anlernen • {b.system}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPREHENSIVE MERKEN SEO GUIDE ARTICLE ── */}
        <div className="seo-article-block" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <h2>Autoschlüssel Programmieren und Nachmachen für Alle 59 Automarken im Umkreis von 50 km um Stuttgart und Sindelfingen</h2>
          <p>
            Moderne Autos sind mit komplexen elektronischen Diebstahlsicherungssystemen ausgestattet. Jeder Autohersteller verwendet eigene Sicherheitsprotokolle, Wegfahrsperren und Transpondersysteme — von BMW CAS4/FEM und Volkswagen MQB bis hin zu Mercedes-Benz FBS3/FBS4 und Renault Keycards. Während reguläre Werkstätten oft an markenspezifischer Software-Sicherheit scheitern oder Sie an einen teuren Vertragshändler verweisen, ist <strong>{SITE_CONFIG.name}</strong> auf das Schlüsselmanagement aller 59 gängigen Automarken spezialisiert.
          </p>
          <h3>1. Europäische Automarken: VAG Group, BMW Group &amp; Mercedes-Benz</h3>
          <p>
            Deutsche Automobilhersteller sind weltweit führend in komplexer kryptografischer Fahrzeugsicherheit. Innerhalb des Volkswagen-Konzerns (Volkswagen, Audi, Seat, Skoda und Porsche) wird unter anderem mit Wegfahrsperren der 4. und 5. Generation sowie den modernen MQB- und MLB-Plattformen mit Security Gateway (SFD) gearbeitet. Bei BMW und Mini verbinden wir uns mit EWS, CAS (1 bis 4+), FEM und BDC Modulen. Für Mercedes-Benz und Smart programmieren wir Infrarotschlüssel (Chromschlüssel) auf den elektronischen Zündschloss-Systemen (EIS/EZS) innerhalb der FBS3 und FBS4 Protokolle.
          </p>
          <h3>2. Französische &amp; Italienische Automarken: PSA, Renault &amp; Stellantis</h3>
          <p>
            Französische und italienische Marken wie Peugeot, Citroën, DS Automobiles, Fiat, Alfa Romeo und Renault verwenden BSI- (Body Systems Interface) und UCH-Module (Unité de Contrôle Habitacle). Besonders Renault und Dacia sind für ihre Keycard-Handsfree-Systeme bekannt. Wir lesen die Sicherheits-PIN-Codes direkt aus dem BSI oder UCH aus und lernen innerhalb weniger Minuten eine neue Fernbedienung oder Schlüsselkarte an, selbst wenn alle Schlüssel verloren gegangen sind.
          </p>
          <h3>3. Asiatische &amp; Amerikanische Marken: Toyota, Ford, Kia &amp; Hyundai</h3>
          <p>
            Asiatische Automobilhersteller wie Toyota, Lexus, Kia, Hyundai, Nissan, Honda und Mazda arbeiten mit G-Chip-, H-Chip- und Smart Key-Proximity-Systemen, die oft mit ID4D, ID46, ID47 oder ID8A Transpondern gesichert sind. Für amerikanische Marken wie Ford und Jeep programmieren wir PATS (Passive Anti-Theft System) Transponder und FOBIK Schlüssel.
          </p>
          <h3>Autorisierte OEM-Diagnose und CNC-Schlüsselfräsen</h3>
          <p>
            Unsere Servicefahrzeuge sind mit professionellen Diagnosecomputern und offiziellen OEM-Lizenzen ausgestattet. Dadurch können wir direkt über den OBD2-Anschluss mit der Wegfahrsperre, dem ECU oder BSI Ihres Fahrzeugs kommunizieren. Wir fräsen mechanische Schlüsselbärte mit höchster Präzision auf unseren computergesteuerten CNC-Fräsen, basierend auf Ihrer Fahrgestellnummer (VIN) oder dem Schlüsselcode.
          </p>
          <h3>Smart Keys, Keyless Go und Alle Schlüssel verloren (All Keys Lost) pro Marke</h3>
          <p>
            Egal, ob Sie ein brandneues Elektroauto mit Keyless Entry oder einen klassischen PKW fahren: Wir programmieren Transponderchips, Fernbedienungen und Proximity Keys vor Ort. Auch wenn Sie alle Schlüssel verloren haben (All Keys Lost), öffnen wir Ihr Fahrzeug zu 100% zerstörungsfrei mit Lishi-Werkzeugen und generieren sofort ein neues Schlüsselset mit 12 Monaten Garantie.
          </p>
        </div>

      </div>
    </main>
  );
}
