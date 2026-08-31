import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES } from '@/config/cities';
import { SITE_CONFIG } from '@/config/site.config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel nachmachen pro Stadt | 24/7 Mobil | FC-KEY',
  },
  description: `Mobiler Autoschlüsselspezialist in ${CITIES.length} Städten. Stuttgart, Sindelfingen und 50km Umkreis. Am selben Tag vor Ort. Rufen Sie an: ${SITE_CONFIG.phone}`,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/standorte`,
    languages: {
      'nl-NL': `${SITE_CONFIG.domain}/standorte`,
      'x-default': `${SITE_CONFIG.domain}/standorte`,
    },
  },
  openGraph: {
    url: `${SITE_CONFIG.domain}/standorte`,
    type: 'website',
    title: `Autoschlüssel nachmachen in ${CITIES.length} Städten | Region Stuttgart`,
    description: `Mobiler Autoschlüsselspezialist in ${CITIES.length} Städten. Service am selben Tag. Rufen Sie an: ${SITE_CONFIG.phone}`,
    images: [{ url: `${SITE_CONFIG.domain}/og-image.png`, width: 1200, height: 630, alt: 'FC-KEY — Mobiler Autoschlüsselspezialist im Raum Stuttgart' }],
  },
};

const groups = [
  { title: 'Stuttgart & Region', filter: (c: typeof CITIES[0]) => ['Stuttgart', 'Fellbach', 'Waiblingen', 'Filderstadt', 'Ditzingen'].includes(c.city) },
  { title: 'Umliegende Städte', filter: (c: typeof CITIES[0]) => ['Sindelfingen', 'Böblingen', 'Leonberg', 'Ludwigsburg', 'Esslingen am Neckar'].includes(c.city) },
  { title: 'Weitere Großstädte in Baden-Württemberg', filter: (c: typeof CITIES[0]) => ['Mannheim', 'Karlsruhe', 'Freiburg im Breisgau', 'Heidelberg', 'Heilbronn', 'Ulm', 'Pforzheim', 'Reutlingen'].includes(c.city) },
];

export default function Steden() {
  return (
    <main id="main-content">
      <section style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("/images/standorte-hero-bg.webp")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 2rem 5rem', 
        textAlign: 'center' 
      }}>
        <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--navy-700)', marginBottom: '0.75rem' }}>SERVICEBEREICH</p>
        <h1 style={{ color: '#fff', marginBottom: '1rem', fontSize: '2.5rem' }}>Alle Städte — {CITIES.length} Standorte</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: 650, margin: '0 auto', lineHeight: 1.6 }}>
          Mobiler Autoschlüssel-Service in Stuttgart, Sindelfingen und in ganz Baden-Württemberg. Klicken Sie auf Ihre Stadt für Reaktionszeiten und spezifische Infos.
        </p>
      </section>

      <div className="container" style={{ padding:'3.5rem 2rem' }}>
        {groups.map(g => {
          const cities = CITIES.filter(g.filter);
          if (!cities.length) return null;
          return (
            <div key={g.title} style={{ marginBottom:'3rem' }}>
              <h2 style={{ fontSize:'1.15rem', fontWeight:700, paddingBottom:'0.75rem', marginBottom:'1rem', borderBottom:'2px solid var(--gray-200)' }}>{g.title}</h2>

              <ul className={styles.seoList}>
                {cities.map(c => (
                  <li key={c.slug}>
                    <Link href={`/standorte/${c.slug}`} id={`stad-${c.slug}`}>
                      <strong style={{ color: 'var(--navy-800)' }}>{c.city}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* ── COMPREHENSIVE STEDEN SEO GUIDE ARTICLE ── */}
        <div className="seo-article-block" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <h2>Mobiler Autoschlüssel-Service: Innerhalb von 30-45 Minuten vor Ort</h2>
          <p>
            Von unseren zentralen Stützpunkten bedient <strong>{SITE_CONFIG.name}</strong> zahlreiche Städte und Gemeinden in Stuttgart, Sindelfingen und im 50km Umkreis. Ob Sie im Zentrum von Stuttgart ausgesperrt sind, mit einem kaputten Autoschlüssel in Sindelfingen stehen oder dringend einen neuen Schlüssel anlernen lassen müssen: Unsere voll ausgestatteten mobilen Werkstätten kommen 24 Stunden am Tag, 7 Tage die Woche direkt zu Ihrem Standort.
          </p>
          <h3>Keine Abschlepp- oder Bergungskosten mehr</h3>
          <p>
            Traditionelle Vertragshändler verlangen bei Verlust aller Autoschlüssel (All Keys Lost), dass Ihr Fahrzeug mit einem Abschleppwagen in die Werkstatt gebracht wird. Das kostet Hunderte Euro an Abschleppgebühren und bringt tagelange Wartezeiten mit sich. Wir führen alle Arbeiten — vom 100% schadenfreien Öffnen von Autotüren mit Lishi-Tools bis hin zum CNC-Fräsen und OBD2-Programmieren von Transponderchips — direkt vor Ort durch.
          </p>
          <h3>Abdeckung in Stuttgart, Sindelfingen und 50km Umkreis</h3>
          <p>
            Unsere Techniker sind strategisch entlang der wichtigen Autobahnen und Bundesstraßen stationiert. Dadurch können wir bei Notfällen blitzschnell reagieren. Steht Ihre Stadt nicht direkt in der obigen Übersicht? Rufen Sie direkt unsere 24/7 Notrufnummer an, um zu prüfen, wie schnell unser Techniker bei Ihnen sein kann.
          </p>
          <h3>Was machen wir bei All Keys Lost (Alle Autoschlüssel verloren) vor Ort?</h3>
          <p>
            Wenn Sie keinen funktionierenden Autoschlüssel mehr besitzen, lesen wir vor Ort den mechanischen Schlosscode Ihres Türschlosses aus oder demontieren bei Bedarf das Schloss, um den Schlüsselcode zu dekodieren. Anschließend fräst unsere automatische CNC-Maschine einen neuen mechanischen Schlüsselbart auf hundertstel Millimeter genau. Über fortschrittliche Diagnosegeräte programmieren wir den Transponderchip und die Fernbedienung direkt in die Wegfahrsperre (Immobilizer) ein.
          </p>
          <h3>12 Monate Garantie und Versicherungsabdeckung</h3>
          <p>
            In welcher Stadt Sie sich auch befinden: Sie zahlen vorab immer einen festen, transparenten Preis ohne Überraschungen im Nachhinein. Auf alle von uns gelieferten Schlüssel, Smart Keys und Reparaturen gewähren wir standardmäßig 12 Monate schriftliche Garantie. Viele Versicherungsgesellschaften erstatten unsere Arbeiten im Rahmen Ihrer Teilkasko- oder Vollkaskoversicherung.
          </p>
        </div>
      </div>
    </main>
  );
}
