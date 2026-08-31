import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';
import KennzeichenForm from '@/components/KennzeichenForm/KennzeichenForm';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import styles from './page.module.css';
import GlobalFeatureCards from '@/components/FeatureCards/GlobalFeatureCards';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel nach Kennzeichen bestellen? | Direkter Preis & Vor-Ort-Hilfe',
  },
  description: 'Autoschlüssel bestellen leicht gemacht! Kennzeichen per WhatsApp senden & sofort Festpreis erhalten. Inklusive 12 Mon. Garantie & Vor-Ort Service.',
  alternates: { canonical: `${SITE_CONFIG.domain}/autoschluessel-bestellen` },
};

export default function KennzeichenBestellenPage() {
  const faqItems = [
    { q: 'Wie schnell erhalte ich einen Preis, wenn ich mein Kennzeichen durchgebe?', a: 'Während unserer Öffnungszeiten antworten wir per WhatsApp oder Telefon fast sofort (oft schon innerhalb von 5 bis 10 Minuten). So wissen Sie direkt, woran Sie sind.' },
    { q: 'Machen Sie Schlüssel für alle Automarken?', a: 'Ja! Da wir nach dem Kennzeichen suchen, können wir für fast jede Marke einen Schlüssel liefern und anlernen. Ob Volkswagen, BMW, Ford, Renault oder sogar amerikanische Marken wie Jeep und Dodge. Auch für moderne Keyless Go (Smart Keys) sind Sie bei uns an der richtigen Adresse.' },
    { q: 'Muss ich im Voraus bezahlen?', a: 'Nein, bei FC-KEY zahlen Sie nie im Voraus. Sie zahlen erst vor Ort (bar oder mit Karte), nachdem wir den Schlüssel erfolgreich angelernt und an Ihrem Auto getestet haben.' },
    { q: 'Was ist, wenn ich alle Autoschlüssel verloren habe? Funktioniert das auch über das Kennzeichen?', a: 'Absolut. Selbst wenn Sie gar keinen Schlüssel mehr haben, können wir anhand des Kennzeichens und der Fahrgestellnummer (VIN) einen komplett neuen Schlüssel "von Grund auf" generieren, fräsen und im Bordcomputer Ihres Autos anlernen.' }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Autoschlüssel nach Kennzeichen bestellen', item: `${SITE_CONFIG.domain}/autoschluessel-bestellen` },
    ],
  };

  const whatsappMsg = "Hallo, was kostet ein neuer Schlüssel für mein Auto? Mein Kennzeichen ist: ";
  const customWhatsAppUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      <script id="kennzeichen-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id="kennzeichen-bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <span>Autoschlüssel nach Kennzeichen bestellen</span>
            </nav>
            <h1>Autoschlüssel nach Kennzeichen bestellen: In 1 Minute zum genauen Preis</h1>
            <p className={styles.heroLead}>
              Benötigen Sie einen neuen Autoschlüssel, Ersatzschlüssel oder Smart Key, wissen aber nicht genau, welchen Transpondertyp, welche Frequenz oder welches Schlüsselprofil Ihr Auto verwendet? Kein Problem. Bei {SITE_CONFIG.name} machen wir es Ihnen einfach. Sie können Ihren Autoschlüssel bei uns bequem nach Kennzeichen bestellen. Anhand Ihres Kennzeichens sehen wir in unserer Datenbank genau, welcher Schlüssel zu Ihrem Fahrzeug gehört. Sie müssen nichts recherchieren, wir erledigen alles und kommen direkt zu Ihnen!
            </p>
            <div className={styles.heroCtas}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPhone} id="kb-hero-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                Anrufen: {SITE_CONFIG.phone}
              </a>
              <a href={customWhatsAppUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWa} id="kb-hero-wa">WhatsApp Kennzeichen</a>
              <Link href="/kontakt" className={styles.btnOutline} id="kb-hero-form">Direktangebot</Link>
            </div>
          </div>
        </section>

        <GlobalFeatureCards />


        <BrandsMarquee />


        {/* Content Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>

                <KennzeichenForm />
                
                {/* Section 1 - How it works */}

                  
                  <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <a href={customWhatsAppUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      backgroundColor: '#002752',
                      color: '#fff',
                      padding: '1.25rem 2rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      width: '100%',
                      textAlign: 'center'
                    }}>
                      💬 Senden Sie Ihr Kennzeichen direkt per WhatsApp
                    </a>
                  </div>

                {/* Section 2 - Dealer vs FC-KEY */}
                <div>
                  <h2>Warum {SITE_CONFIG.name} statt des Händlers wählen?</h2>
                  <p>
                    Viele denken bei einem verlorenen oder defekten Autoschlüssel sofort an den offiziellen Markenhändler. Aber wussten Sie, dass dies oft unnötig teuer ist und viel Zeit kostet?
                  </p>
                  <div className={styles.tableWrapper}>
                    <table className={styles.pricingTable}>
                      <thead>
                        <tr>
                          <th>Was Sie erwarten</th>
                          <th>Der Vertragshändler ❌</th>
                          <th>{SITE_CONFIG.name} ✅</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Ort</strong></td>
                          <td>Sie müssen das Auto zur Werkstatt abschleppen (lassen).</td>
                          <td><strong>Wir kommen mit unserem Servicefahrzeug zu Ihnen.</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Geschwindigkeit</strong></td>
                          <td>Oft 1 bis 2 Wochen Wartezeit auf den neuen Schlüssel.</td>
                          <td><strong>Meist am selben Tag oder direkt am nächsten Tag erledigt.</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Preis</strong></td>
                          <td>Höchstpreise plus versteckte Anlernkosten.</td>
                          <td><strong>Bis zu 50% günstiger mit einem transparenten Festpreis vorab.</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Garantie</strong></td>
                          <td>Standard-Werksgarantie.</td>
                          <td><strong>12 Monate Garantie und eine offizielle Rechnung.</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 3 - Privacy */}
                <div>
                  <h2>Sicher & Vertrauenswürdig: Was machen wir mit Ihrem Kennzeichen?</h2>
                  <p>
                    Datenschutz und Sicherheit stehen bei uns an erster Stelle. Wenn Sie uns Ihr Kennzeichen mitteilen, nutzen wir dieses ausschließlich, um technische Fahrzeugdaten abzufragen (wie Baujahr, Modell und Art der Wegfahrsperre/Immobilizer).
                  </p>
                  <p>
                    <strong>Wir haben keinen Einblick in Ihre persönlichen Daten, Adressdaten oder Versicherungsdetails.</strong> Sie gehen also kein Risiko ein.
                  </p>
                </div>

                <div style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                  <img 
                    src="/images/autoschluessel-bestellen.jpg" 
                    alt="Autoschlüssel nach Kennzeichen bestellen per WhatsApp - direkter Preis" 
                    style={{ borderRadius: '12px', width: '100%', height: 'auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                </div>

                {/* Section 4 - FAQ */}
                <div>
                  <h2>💡 Häufig gestellte Fragen (FAQ)</h2>
                  
                  {faqItems.map((f, i) => (
                    <details key={i} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>
                        {f.q}
                        <span className={styles.faqChevron}>+</span>
                      </summary>
                      <p className={styles.faqAnswer}>{f.a}</p>
                    </details>
                  ))}
                </div>

              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Direkt Preis anfragen?</h3>
                  <p>Senden Sie eine Nachricht mit Ihrem Kennzeichen. Wir sind 24/7 erreichbar und antworten superschnell.</p>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.sidePhone} id="kb-side-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href="#angebot-form" className={styles.sideWa} id="kb-side-wa">Direkt WhatsApp</a>
                  <div className={styles.sideList}>
                    {['Keine Abschleppkosten', 'Fester Preis vorab', 'Keine Adressdaten nötig', '12 Monate Garantie', 'Direkte Antwort'].map(item => (
                      <div key={item} className={styles.sideListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" style={{color:'#22c55e',flexShrink:0}} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.ratingCard}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <p className={styles.ratingText}>&ldquo;Super praktisch! Kennzeichen per WhatsApp geschickt, direkt einen Preis bekommen. Am nächsten Morgen standen sie schon vor der Tür, um den Schlüssel zu programmieren. Sehr zu empfehlen!&rdquo;</p>
                  <span className={styles.ratingMeta}>Markus S. — Volkswagen Golf</span>
                  <span className={styles.ratingCount}>{SITE_CONFIG.reviewCount} Google Bewertungen · {SITE_CONFIG.rating}/5</span>
                </div>
              </aside>
            </div>

            {/* Bottom CTA block */}
            <div className={styles.ctaBlock}>
              <h2>Kennen Sie den Preis noch nicht? Fordern Sie ihn direkt an!</h2>
              <p>Senden Sie uns einfach Ihr Kennzeichen per WhatsApp und wir suchen in unserer Datenbank direkt den exakten Preis für einen neuen Schlüssel heraus.</p>
              <div className={styles.ctaBtnsGrid}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPrimary} id="kb-bottom-phone">Anrufen: {SITE_CONFIG.phone}</a>
                <a href="#angebot-form" className={styles.btnWhatsapp} id="kb-bottom-wa">Kennzeichen per WhatsApp senden</a>
              </div>
              <span className={styles.microText}>Reaktion innerhalb von 5 bis 10 Minuten (während der Öffnungszeiten)</span>
            </div>

          </div>
        </section>

        {/* ── REVIEWS SECTION ────────────────────────────────────── */}
        <section className={styles.reviews}>
          <div className={styles.container}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
              KUNDENBEWERTUNGEN
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              Was Kunden über unseren Service sagen
            </h2>
            <div className={styles.ratingBig}>
              <span className={styles.ratingNum}>{SITE_CONFIG.rating}</span>
              <div>
                <div className={styles.ratingStarsReview}>★★★★★</div>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  {SITE_CONFIG.reviewCount} Google Bewertungen · {SITE_CONFIG.rating}/5
                </span>
              </div>
            </div>
            <div className={styles.reviewGrid}>
              {generateContextualReviews('autoschluessel', 'service').map((review, i) => (
                <GoogleReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
