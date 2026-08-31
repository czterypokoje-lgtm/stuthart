import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Preise Autoschlüssel nachmachen & programmieren | FC-KEY',
  },
  description: 'Ungefähre Preise für das Nachmachen und Programmieren von Autoschlüsseln. Der genaue Preis wird immer im Voraus vereinbart. Sparen Sie 30–50% gegenüber dem Händler. Rufen Sie an für ein Angebot.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/preise`,
    languages: {
      'de-DE': `${SITE_CONFIG.domain}/preise`,
      'x-default': `${SITE_CONFIG.domain}/preise`,
    },
  },
};

type PriceItem = 
  | { category: string; service?: never; from?: never; to?: never; note?: never }
  | { category?: never; service: string; from: string; to: string; note: string };

const priceRows: PriceItem[] = [
  { category: 'Autoschlüssel nachmachen (Ersatzschlüssel)' },
  { service: 'Standard Transponderschlüssel', from: '€ 149', to: '€ 199', note: 'Meiste ältere Modelle' },
  { service: 'Klappschlüssel mit Fernbedienung', from: '€ 199', to: '€ 249', note: 'VW, Audi, Seat, Skoda, Ford' },
  { service: 'Smart Key / Keyless Entry', from: '€ 249', to: '€ 299', note: 'BMW, Mercedes, Toyota, Mazda' },
  { service: 'Proximity Key mit Start-Stop', from: '€ 279', to: '€ 299', note: 'Premium-Marken' },
  
  { category: 'Autoschlüssel verloren (Alle Schlüssel verloren)' },
  { service: 'Standard Transponderschlüssel', from: '€ 249', to: '€ 349', note: 'Inklusive Programmierung' },
  { service: 'Klappschlüssel mit Fernbedienung', from: '€ 299', to: '€ 399', note: 'Inklusive Code auslesen' },
  { service: 'Smart Key / Keyless Entry', from: '€ 349', to: '€ 449', note: 'Inklusive Notfallprozedur' },
  { service: 'Proximity Key mit Start-Stop', from: '€ 399', to: '€ 500', note: 'Premium-Systeme' },
  
  { category: 'Auto öffnen (Ausgesperrt)' },
  { service: 'Standard Auto öffnen', from: '€ 150', to: '€ 200', note: 'Zerstörungsfrei, 5-15 Minuten' },
  { service: 'Auto öffnen + Schlüssel machen', from: '€ 199', to: '€ 349', note: 'Kombinationsrabatt' },
  { service: 'Notöffnung (Keyless-System)', from: '€ 175', to: '€ 250', note: 'Spezielle Technik erforderlich' },
  
  { category: 'Reparatur & Wartung (Schlüssel defekt)' },
  { service: 'Gehäuse wechseln', from: '€ 45', to: '€ 89', note: 'Neues Umbau-Set' },
  { service: 'Batterie wechseln', from: '€ 15', to: '€ 35', note: 'Inklusive Test' },
  { service: 'Fernbedienung neu programmieren', from: '€ 49', to: '€ 99', note: 'Funktioniert nicht mehr' },
  { service: 'Transponder-Chip ersetzen', from: '€ 89', to: '€ 149', note: 'Chip defekt' },
  
  { category: 'Zündschloss & Lenkradschloss (Mechanische Probleme)' },
  { service: 'Zündschloss auto wechseln (Standard)', from: '€ 299', to: '€ 399', note: 'VW, Audi, Seat, Skoda' },
  { service: 'Zündschloss auto wechseln (Premium)', from: '€ 399', to: '€ 599', note: 'Mercedes, BMW' },
  { service: 'Lenkradschloss Reparatur/Austausch', from: '€ 199', to: '€ 349', note: 'ELV/ESL-Systeme' },
  { service: 'Wegfahrsperre (Immobilizer) Reset', from: '€ 149', to: '€ 299', note: 'Software-Wiederherstellung' }
];

const surcharges = [
  { time: 'Mo bis Fr  08:00 – 16:00', label: 'Standardtarif', color: 'var(--color-success)' },
  { time: 'Mo bis Fr  16:00 – 22:00', label: '+15% Abendzuschlag', color: 'var(--navy-800)' },
  { time: 'Mo bis Fr  22:00 – 08:00', label: '+25% Nachtzuschlag', color: 'var(--color-danger)' },
  { time: 'Samstag  08:00 – 22:00',  label: '+15% Wochenendzuschlag', color: 'var(--navy-800)' },
  { time: 'Sonn- & Feiertage',       label: '+25% Zuschlag',       color: 'var(--color-danger)' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
    { '@type': 'ListItem', position: 2, name: 'Preise', item: `${SITE_CONFIG.domain}/preise` },
  ],
};

export default function PrijzenPage() {
  return (
    <>
      <script id="prijzen-bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.label}>PREISE</p>
          <h1>Preisübersicht — Ungefähre Tarife</h1>
          <p className={styles.heroSub}>
            Der genaue Preis wird <strong>immer vor Beginn</strong> der Arbeiten vereinbart. 
            Beim offiziellen Vertragshändler sind Sie oft <strong>50% teurer</strong> dran. Außerdem zahlen Sie bei uns <strong>keine Abschleppkosten</strong>, da wir zu Ihnen kommen!
          </p>
          <div className={styles.heroCtas}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPhone} id="prijzen-hero-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              Für genauen Preis anrufen
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWa} id="prijzen-hero-wa">WhatsApp Angebot</a>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 1000, margin: '0 auto' }}>

        {/* Important disclaimer */}
        <div className={styles.disclaimer}>
          <div className={styles.disclaimerIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <strong>Wichtige Informationen zu unseren Preisen</strong>
            <ul className={styles.disclaimerList}>
              <li>Die untenstehenden Preise sind <strong>ungefähre Startpreise</strong> — der genaue Preis hängt von Ihrer Marke, dem Modell, dem Baujahr und dem Typ des Schlüsselsystems ab.</li>
              <li>Die Tarife gelten von <strong>Montag bis Freitag 08:00–16:00 Uhr</strong>. Außerhalb dieser Zeiten fallen Zuschläge an (siehe Tabelle unten).</li>
              <li>Alle Preise verstehen sich exklusive MwSt.</li>
              <li>Der endgültige Preis wird <strong>immer vorab telefonisch vereinbart</strong> — keine Überraschungen im Nachhinein.</li>
              <li>Der Vertragshändler ist oft <strong>50% teurer</strong>, und Sie sparen bei uns teure Abschleppkosten (wir arbeiten zu 100% vor Ort).</li>
            </ul>
          </div>
        </div>

        {/* Main price table */}
        <h2 className={styles.tableTitle}>Ungefähre Preisliste</h2>
        <div className={styles.tableWrap}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Dienstleistung</th>
                <th>Von</th>
                <th>Bis</th>
                <th className={styles.noteCol}>Erläuterung</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row, i) => (
                row.category ? (
                  <tr key={i} className={styles.categoryRow}>
                    <td colSpan={4}><strong>{row.category}</strong></td>
                  </tr>
                ) : (
                  <tr key={i}>
                    <td className={styles.serviceCell}>{row.service}</td>
                    <td className={styles.priceCell}>{row.from}</td>
                    <td className={styles.priceCell}>{row.to}</td>
                    <td className={styles.noteCell}>{row.note}</td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.tableNote}>* Preise exklusive MwSt. und gelten für Dienstleistungen in Stuttgart, Sindelfingen und 50km Umkreis. Genauer Preis nach telefonischer Diagnose.</p>

        {/* Surcharge table */}
        <h2 className={styles.tableTitle} style={{ marginTop: '3rem' }}>Zuschläge außerhalb der Geschäftszeiten</h2>
        <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          Wir sind rund um die Uhr verfügbar. Außerhalb der regulären Arbeitszeiten fällt ein Zuschlag auf den Grundtarif an.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Uhrzeit</th>
                <th>Zuschlag</th>
              </tr>
            </thead>
            <tbody>
              {surcharges.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.88rem' }}>{s.time}</td>
                  <td style={{ fontWeight: 700, color: s.color }}>{s.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Trust Gallery: Onze Mobiele Werkplaats & Apparatuur */}
        <div className={styles.trustSection}>
          <h2 className={styles.tableTitle}>Unsere mobile Werkstatt &amp; Ausstattung in Stuttgart &amp; Sindelfingen</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Wir arbeiten ausschließlich mit zertifizierten Diagnose- und Programmiergeräten. Unsere mobilen Servicebusse sind voll ausgestattet, um Transponderschlüssel, Smart Keys und Zündschlösser vor Ort in Stuttgart, Sindelfingen und 50km Umkreis zu 100% zerstörungsfrei zu programmieren.
          </p>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustImgWrap}>
                <Image
                  src="/images/preise-schluessel-reparatur.jpg"
                  alt="Mechaniker repariert das Gehäuse eines Autoschlüssels vor Ort"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={styles.trustImg}
                />
              </div>
              <div className={styles.trustContent}>
                <h3 className={styles.trustTitle}>Mobile Schlüsselreparatur vor Ort</h3>
                <p className={styles.trustDesc}>Direkte Reparatur von defekten Schlüsselgehäusen, Transpondern und Platinen vor Ort in Stuttgart und Umgebung.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustImgWrap}>
                <Image
                  src="/images/preise-programmierung.jpg"
                  alt="Programmieren und Anlernen eines neuen Autoschlüssels im mobilen Servicebus"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={styles.trustImg}
                />
              </div>
              <div className={styles.trustContent}>
                <h3 className={styles.trustTitle}>Programmierung vor Ort</h3>
                <p className={styles.trustDesc}>Anlernen von Transponderschlüsseln und Smart Keys vor Ort, ohne Ihr Fahrzeug zum Händler abschleppen zu müssen.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustImgWrap}>
                <Image
                  src="/images/seo/autoschluessel_voorraad_alle_merken_stuttgart_sindelfingen.webp"
                  alt="Bestand an originalen Autoschlüsseln und Transpondern für diverse Automarken"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={styles.trustImg}
                />
              </div>
              <div className={styles.trustContent}>
                <h3 className={styles.trustTitle}>Originalbestand aller Marken</h3>
                <p className={styles.trustDesc}>Umfangreicher Bestand an OEM-Schlüsseln, Smart Keys und Transponder-Chips für den sofortigen Einsatz bei Schlüsselverlust.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustImgWrap}>
                <Image
                  src="/images/preise-expertise.jpg"
                  alt="Komplexe Fahrzeugelektronik und tiefgreifende Diagnose bei anspruchsvollen Modellen"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className={styles.trustImg}
                />
              </div>
              <div className={styles.trustContent}>
                <h3 className={styles.trustTitle}>Meisterhafte Expertise & 12 Jahre Erfahrung</h3>
                <p className={styles.trustDesc}>Mit über 9.000 erfolgreich programmierten Fahrzeugen beherrschen wir auch komplexeste Elektronikprobleme. Wir bieten tiefgreifendes Know-how für nahezu jedes europäische und amerikanische Modell – dort, wo Standard-Werkstätten aufgeben.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why cheaper */}
        <div className={styles.whyCard}>
          <h2>Warum günstiger als der Vertragshändler?</h2>
          <div className={styles.whyGrid}>
            {[
              { title: 'Keine Showroom-Kosten', desc: 'Wir fahren zu Ihnen — keine Miete, keine Gemeinkosten.' },
              { title: 'Dieselben Werkzeuge', desc: 'Autel IM608 Pro II, AVDI, VVDI — Ausrüstung auf Händlerniveau.' },
              { title: 'Keine Wartezeit', desc: 'Kein 1–2 wöchiges Warten auf einen Schlüssel vom Hersteller.' },
              { title: 'Fester Preis im Voraus', desc: 'Sie kennen den Preis, bevor wir anfangen. Niemals eine Überraschung.' },
            ].map(item => (
              <div key={item.title} className={styles.whyItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" style={{ color: 'var(--color-success)', flexShrink: 0, marginTop: 2 }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPREHENSIVE PRIJZEN SEO GUIDE ARTICLE ── */}
        <div className="seo-article-block" style={{ marginTop: '3.5rem', marginBottom: '3.5rem' }}>
          <h2>Transparente Preise für Autoschlüssel und Schlüsseldienst vor Ort</h2>
          <p>
            Beim Nachmachen oder Ersetzen eines Autoschlüssels spielen verschiedene technische Faktoren eine Rolle bei der Preisgestaltung. Während ein einfacher Ersatzschlüssel ohne Fernbedienung relativ günstig ist, erfordert ein moderner Keyless Entry oder Keyless Go Schlüssel (Smart Key) fortschrittliche Elektronik und zertifizierte Programmier-Software. <strong>FC-KEY</strong> garantiert Ihnen immer im Voraus einen festen und transparenten All-in-Preis, sodass Sie nie mit unerwarteten Kosten konfrontiert werden.
          </p>
          <h3>Warum sind wir 30% bis 50% günstiger als der offizielle Vertragshändler?</h3>
          <p>
            Offizielle Vertragshändler berechnen oft hohe Stundensätze, logistische Bestell- und Verwaltungskosten sowie obligatorische Abschleppkosten zu ihrem Showroom. Unsere zertifizierten mobilen Schlüsseldienste kommen mit einem komplett ausgestatteten Servicebus direkt zu Ihrem Fahrzeug. Wir fräsen den Schlüsselbart mit CNC-gesteuerten Fräsmaschinen vor Ort und lernen den Transponderchip über den OBD2-Diagnoseanschluss an.
          </p>
          <h3>Preisunterschied zwischen mechanischen Schlüsseln, Klappschlüsseln und Smart Keys</h3>
          <p>
            Ein mechanischer Ersatzschlüssel mit Transponderchip startet Ihr Auto und öffnet Ihre Türen manuell; dies ist die günstigste Option (ab €125). Ein Klappschlüssel mit Fernbedienung verfügt über zusätzliche HF-Elektronik, um Ihre Zentralverriegelung aus der Ferne zu bedienen (ab €150). Keyless Entry und Keyless Go Smart Keys (wie bei BMW, Mercedes und Volkswagen) erfordern kryptografische Eeprom- oder Bench-Programmierung und liegen im Premium-Segment (ab €195).
          </p>
          <h3>Kosten bei All Keys Lost (Alle Schlüssel verloren) im Vergleich zum Ersatzschlüssel</h3>
          <p>
            Wenn Sie noch mindestens einen funktionierenden Schlüssel haben, können wir die kryptografischen Schlüsseldaten direkt klonen oder über den OBD2-Anschluss einen zweiten Schlüssel hinzufügen. Haben Sie jedoch alle Schlüssel verloren? Dann müssen wir den Schlüsselcode über das Türschloss dekodieren, die Wegfahrsperre komplett zurücksetzen und mit neuen Transpondercodes neu sichern. Aus diesem Grund sind die Tarife für "All Keys Lost" etwas höher als für das Anfertigen eines einzelnen Ersatzschlüssels.
          </p>
          <h3>Erstattung über Ihre Autoversicherung &amp; 12 Monate Garantie</h3>
          <p>
            Wenn Sie Ihren Autoschlüssel verloren haben oder er gestohlen wurde, fällt der Austausch Ihres Schlüsselsatzes und das Löschen der alten Schlüsselcodes oft unter die Deckung Ihrer Teilkasko- oder Vollkaskoversicherung. Sie erhalten von uns immer eine offizielle und detaillierte Rechnung, die Sie direkt bei Ihrem Versicherer einreichen können. Außerdem erhalten Sie auf alle gelieferten Autoschlüssel 12 Monate schriftliche Garantie.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h2>Genauen Preis erfahren?</h2>
          <p>Teilen Sie uns Ihre Automarke, das Modell und das Baujahr mit — wir nennen Ihnen direkt einen Festpreis.</p>
          <div className={styles.ctaBtns}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.ctaPhone} id="prijzen-cta-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
              {SITE_CONFIG.phone}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWa} id="prijzen-cta-wa">WhatsApp</a>
            <Link href="/kontakt" className={styles.ctaContact} id="prijzen-cta-form">Angebotsformular</Link>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}
