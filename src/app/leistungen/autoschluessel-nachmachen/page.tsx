import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getRelatedBlogPosts } from '@/config/services';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { CITIES } from '@/config/cities';
import { BRANDS } from '@/config/brands';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import ServiceCoverageMap from '@/components/ServiceCoverageMap/ServiceCoverageMap';
import TrustindexHeroWidget from '@/components/TrustindexHeroWidget/TrustindexHeroWidget';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import { generateContextualReviews } from '@/utils/reviews';
import { getBaseLocalBusinessSchema } from '@/utils/schema';
import styles from './page.module.css';
import GlobalFeatureCards from '@/components/FeatureCards/GlobalFeatureCards';

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel nachmachen ab 149€ | FC-KEY',
  },
  description: 'Autoschlüssel nachmachen? 24/7 vor Ort, Festpreis ab 149€ — günstiger als beim Händler. Innerhalb von 30 Min. vor Ort. Rufen Sie jetzt an oder schreiben Sie per WhatsApp!',
  alternates: { canonical: `${SITE_CONFIG.domain}/leistungen/autoschluessel-nachmachen` },
  openGraph: {
    title: 'Autoschlüssel nachmachen ab 149€ | FC-KEY',
    url: `${SITE_CONFIG.domain}/leistungen/autoschluessel-nachmachen`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoschlüssel nachmachen ab 149€ | FC-KEY',
  },
};

export default function SleutelBijmakenPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Autoschlüssel nachmachen",
    "provider": getBaseLocalBusinessSchema(),
    "serviceType": "Autoschlüssel nachmachen, Transponder programmieren, Smart Key einlernen",
    "priceRange": "€149 - €500",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Autoschlüssel nachmachen Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Autoschlüssel nachmachen",
            "description": "Ersatzschlüssel für ältere Modelle ohne Chip"
          },
          "price": "149",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transponder Autoschlüssel nachmachen",
            "description": "Schlüssel mit Chip für Marken wie Volkswagen, Opel, Ford"
          },
          "price": "149",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Key Programmieren",
            "description": "Keyless Entry Schlüssel für BMW, Mercedes, Audi, Toyota"
          },
          "price": "199",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kann ich einen Autoschlüssel nachmachen lassen, wenn ich alle Schlüssel verloren habe?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja. Wir haben die Ausrüstung, um einen neuen Schlüssel anhand des Zündschlosses oder der Wegfahrsperre zu generieren. Dies gilt für die meisten Marken ab Baujahr 1995. Für einige neue Modelle (ab 2020) ist ein Originalschlüssel erforderlich." }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert es, einen Autoschlüssel nachzumachen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ein Standard-Transponderschlüssel dauert 20-30 Minuten. Ein Smart Key mit Keyless Entry dauert 30-45 Minuten. Ein Mercedes FBS4 Schlüssel mit Online Component Protection dauert 45-60 Minuten." }
      },
      {
        "@type": "Question",
        "name": "Ist es günstiger als beim Autohändler?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja, erheblich! Ein Händler ist durchschnittlich 50% teurer. Für einen Ersatzschlüssel zahlen Sie bei uns 149€ bis 299€. Wenn 'alle Schlüssel verloren' sind, berechnen wir 249€ bis 500€. Beim Händler gehen diese Kosten in die Tausende, auch weil oft der gesamte Schlosssatz ausgetauscht werden soll und Sie das Auto abschleppen lassen müssen (bei uns fallen keine Abschleppkosten an!)." }
      },
      {
        "@type": "Question",
        "name": "Was passiert, wenn mein Schlüssel gestohlen wurde?",
        "acceptedAnswer": { "@type": "Answer", "text": "Wir fertigen einen neuen Schlüssel an und löschen den gestohlenen Schlüssel aus dem Fahrzeugsystem. Der gestohlene Schlüssel kann das Auto dann nicht mehr starten oder öffnen." }
      },
      {
        "@type": "Question",
        "name": "Bekomme ich Garantie auf den neuen Schlüssel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja, 12 Monate Garantie auf alle Schlüssel und die Programmierung. Zudem erhalten Sie eine versicherungstaugliche Rechnung." }
      },
      {
        "@type": "Question",
        "name": "Kann ich vor Ort einen Autoschlüssel mit Fernbedienung nachmachen lassen?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sicher! Wir kommen mit unserem voll ausgestatteten mobilen Servicefahrzeug zu Ihrem Standort, um vor Ort einen kompletten Autoschlüssel mit Fernbedienung nachzumachen. Egal, ob Sie ein zusätzliches Exemplar oder direkt einen Ersatzschlüssel wünschen, wir programmieren alle Autoschlüssel mit Fernbedienung fachgerecht über den OBD2-Port, während Sie warten." }
      },
      {
        "@type": "Question",
        "name": "Programmieren Sie auch Autoschlüssel mit Keyless Entry?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir sind auf das Einlernen moderner Smart Keys und jedes Typs von Autoschlüssel mit Keyless Entry (Proximity Start) spezialisiert. Sie müssen Ihr Auto nicht abschleppen lassen; wir können vor Ort einen zusätzlichen Autoschlüssel oder Keyless Fob programmieren und Ihre Werksgarantie bleibt erhalten." }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
      { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": `${SITE_CONFIG.domain}/leistungen` },
      { "@type": "ListItem", "position": 3, "name": "Autoschlüssel nachmachen", "item": `${SITE_CONFIG.domain}/leistungen/autoschluessel-nachmachen` }
    ]
  };

  const reviews = [
    {
      text: "Großartiger Service! Ich hatte innerhalb einer halben Stunde einen neuen Ersatzschlüssel für meinen VW Polo. Der Monteur war sehr freundlich und kam einfach zu mir nach Hause nach Stuttgart.",
      name: "Marc S.",
      city: "Stuttgart",
      car: "Volkswagen Polo"
    },
    {
      text: "Viel günstiger als beim Händler! Mein Schlüssel war ins Wasser gefallen und tat nichts mehr. FC-KEY hat vor Ort einen neuen Smart Key eingelernt. Sehr zufrieden.",
      name: "Esther W.",
      city: "Sindelfingen",
      car: "BMW 1er"
    },
    {
      text: "Schnell, fachmännisch und transparent. Keine Abschleppkosten und ich konnte direkt weiterfahren. Der Monteur hatte die nötige Ausrüstung in seiner mobilen Werkstatt dabei. Top!",
      name: "Lukas H.",
      city: "Böblingen",
      car: "Ford Focus"
    }
  ];

  return (
    <>
      <script id="sleutel-nachmachen-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id="sleutel-nachmachen-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sleutel-nachmachen-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/leistungen">Leistungen</Link> <span>/</span> <span>Autoschlüssel nachmachen</span>
            </nav>
            <TrustindexHeroWidget />
            <h1>Autoschlüssel nachmachen — Ersatzschlüssel fürs Auto vor Ort anfertigen lassen</h1>
            <p className={styles.heroLead}>
              Möchten Sie einen <strong>Autoschlüssel nachmachen</strong>, ohne zum teuren Händler zu müssen? FC-KEY kommt 24/7 zu Ihnen — nach Hause, zur Arbeit oder an die Straße — und programmiert Ihren neuen Autoschlüssel, Ersatzschlüssel oder Ihre Fernbedienung direkt vor Ort. Vom einfachen Transponderschlüssel bis zum modernen Autoschlüssel mit Keyless Entry: Wir fräsen und programmieren alles, während Sie warten, ohne Abschleppkosten oder lange Wartezeiten.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phoneTel} />
            </div>
          </div>
        </section>

        <GlobalFeatureCards />


        <BrandsMarquee />


        {/* 3 steps HowTo */}
        <div style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <HowItWorks />
          </div>
        </div>

        {/* Content Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                
                {/* Section 1 */}
                <div>
                  <h2>Wann benötigen Sie einen zusätzlichen Autoschlüssel oder Ersatzschlüssel?</h2>
                  <p>
                    Ein professionell getesteter <strong>Ersatzschlüssel</strong> ist kein Luxus — er verhindert teure Notfälle. Viele Fahrer entscheiden sich, rechtzeitig einen <strong>zweiten Schlüssel</strong> anfertigen zu lassen oder einen kompletten <strong>Autoschlüssel mit Fernbedienung</strong> für folgende Situationen nachmachen zu lassen:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Prävention &amp; Komfort:</strong> Sie haben derzeit nur einen Schlüssel und möchten vorsorglich einen <strong>zusätzlichen Schlüssel</strong> nachmachen, bevor er verloren geht oder beschädigt wird.</li>
                    <li><strong>Autoschlüssel verloren:</strong> Wenn Sie Ihren einzigen Schlüssel <strong>verloren haben</strong>, können wir direkt vor Ort einen brandneuen <strong>Autoschlüssel mit Keyless Entry</strong> oder einen normalen Transponderschlüssel programmieren.</li>
                    <li><strong>Ersatzschlüssel fürs Auto anfertigen lassen:</strong> Möchten Sie einen <strong>Ersatzschlüssel anfertigen lassen</strong>, bevor Sie einen verlieren? Das ist eine kluge Entscheidung. Wir machen einen kompletten Ersatzschlüssel vor Ort.</li>
                    <li><strong>Abgenutzte Tasten oder Gehäuse:</strong> Wenn ältere <strong>Autoschlüssel mit Fernbedienung</strong> klemmen, ist es oft klüger, direkt einen neuen Klappschlüssel mit Garantie anfertigen zu lassen.</li>
                    <li><strong>Schlüssel gestohlen:</strong> Wir liefern einen neuen Schlüssel und löschen die alten Schlüssel direkt aus dem Autocomputer (ECU) für maximale Diebstahlsicherheit.</li>
                    <li><strong>Mehrere Fahrer:</strong> Teilen Sie das Auto mit Ihrem Partner oder Ihrer Familie? Wir können mehrere <strong>Autoschlüssel mit Fernbedienung</strong> günstig vor Ort einlernen.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2>Was kostet das Nachmachen eines Autoschlüssels? — Transparente Preise</h2>
                  <p>
                    Möchten Sie im Voraus genau wissen, wie hoch die Gebühren für einen <strong>zusätzlichen Autoschlüssel</strong> sind? Ob Sie einen Standard-Transponderschlüssel, einen Klappschlüssel oder einen luxuriösen <strong>Autoschlüssel mit Keyless Entry</strong> <strong>nachmachen lassen</strong> wollen, wir haben transparente All-in-Tarife inklusive Fräsen und Einlernen:
                  </p>
                  <div className={styles.tableWrapper}>
                    <table className={styles.pricingTable}>
                      <thead>
                        <tr>
                          <th>Schlüssel Typ</th>
                          <th>Marke / Modell</th>
                          <th>Preis</th>
                          <th>Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Standardschlüssel (mit Transponderchip)</td>
                          <td>Ältere Autos, Basismodelle</td>
                          <td><strong>149€ - 249€</strong></td>
                          <td>15 Min.</td>
                        </tr>
                        <tr>
                          <td>Klappschlüssel / Flip Key</td>
                          <td>VW, Toyota, Ford, Opel, etc.</td>
                          <td><strong>199€ - 349€</strong></td>
                          <td>20-30 Min.</td>
                        </tr>
                        <tr>
                          <td>Smart Key / Keyless</td>
                          <td>Proximity-Schlüssel, Push-to-start</td>
                          <td><strong>299€ - 499€</strong></td>
                          <td>30-45 Min.</td>
                        </tr>
                        <tr>
                          <td>Alle Schlüssel verloren (kein funktionierender Schlüssel)</td>
                          <td>Auto öffnen & Schlüssel einlernen</td>
                          <td><strong>Ab 299€</strong></td>
                          <td>45-60 Min.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul className={styles.bulletList}>
                    <li>
                      <strong>Was kostet das Nachmachen eines Schlüssels?</strong> Ein neuer Ersatzschlüssel kostet bei uns zwischen 149€ und 299€, abhängig von der Marke und ob es sich um einen Smart Key handelt. Haben Sie alle Schlüssel verloren? Dann liegen die Kosten zwischen 249€ und 500€. Das ist immer inklusive Programmierung vor Ort!
                    </li>
                    <li>
                      <strong>Händler vs. Schlüsseldienst:</strong> Der Händler ist durchschnittlich 50% teurer als FC-KEY für exakt denselben Schlüssel. Zudem sparen Sie sich bei uns die Abschleppkosten, denn wir kommen zu Ihnen (keine Abschleppkosten!). Sie erhalten immer <strong>zertifizierte Schlüssel</strong> mit 12 Monaten Garantie.
                    </li>
                  </ul>
                </div>

                {/* Section 2.5: Onze Service Galerij */}
                <div>
                  <h2>Unser Service in der gesamten Region — Galerie</h2>
                  <p>
                    Egal, ob Sie an unserem Stützpunkt vorbeikommen oder wir unsere mobilen Busse zu Ihnen vor Ort in Stuttgart, Sindelfingen und 50km Umkreis schicken; wir garantieren einen fachmännischen Service. Sehen Sie sich hier einen Eindruck unserer Ausrüstung und kürzlich abgeschlossener Aufträge an.
                  </p>
                  <RealGalleryShowcase 
                    photos={[
                      {
                        src: "/images/gallery/bmw-3er-goeppingen-schluessel.jpg",
                        alt: "Autoschlüssel nachmachen BMW 3er in Göppingen",
                        label: "BMW 3er Göppingen"
                      },
                      {
                        src: "/images/gallery/ford-focus-mannheim-schluessel.jpg",
                        alt: "Ersatzschlüssel programmieren Ford Focus in Mannheim",
                        label: "Ford Focus Mannheim"
                      },
                      {
                        src: "/images/gallery/porsche-macan-reutlingen-schluessel.jpg",
                        alt: "Autoschlüssel nachmachen Porsche Macan in Reutlingen",
                        label: "Porsche Macan Reutlingen"
                      },
                      {
                        src: "/images/gallery/audi-a4-heidelberg-schluessel.jpg",
                        alt: "Smart Key einlernen Audi A4 in Heidelberg",
                        label: "Audi A4 Heidelberg"
                      }
                    ]} 
                  />
                  <p>
                    Dank unserer fortschrittlichen Ausrüstung können wir Ersatzschlüssel für mehr als 95% der Fahrzeuge anfertigen. Wir sind 24/7 für unseren mobilen Service vor Ort erreichbar.
                  </p>
                </div>




                {/* Section 6 - FAQ */}
                <div>
                  <h2>Häufig gestellte Fragen zum Autoschlüssel nachmachen</h2>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Kann ich einen Autoschlüssel ohne das Original nachmachen?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Ja. Wir haben Ausrüstung, um einen neuen Schlüssel basierend auf dem Zündschloss oder der Wegfahrsperre zu generieren. 
                      Das gilt für die meisten Marken ab Baujahr 1995. Für einige neuere Modelle (2020+) ist ein Originalschlüssel erforderlich.
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Wie lange dauert es, einen Autoschlüssel nachzumachen?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Ein Standard-Transponderschlüssel dauert 20-30 Minuten. Ein Smart Key mit Keyless Entry dauert 30-45 Minuten. 
                      Ein Mercedes FBS4 Schlüssel mit Online Component Protection dauert 45-60 Minuten.
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Ist es günstiger als beim Vertragshändler?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Ja, erheblich! Ein Händler ist durchschnittlich 50% teurer. Für einen Ersatzschlüssel zahlen Sie bei uns 149€ bis 299€. Bei "alle Schlüssel verloren" berechnen wir 249€ bis 500€. Beim Händler gehen diese Kosten schnell in die Tausende, da oft der ganze Schlosssatz ausgetauscht werden soll und Abschleppkosten anfallen (die Sie sich bei uns sparen!).
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Was ist, wenn mein Schlüssel gestohlen wurde?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Wir fertigen einen neuen Schlüssel an und löschen den gestohlenen Schlüssel aus dem Fahrzeugsystem. 
                      Der gestohlene Schlüssel kann das Auto dann nicht mehr starten oder öffnen.
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Bekomme ich Garantie auf den neuen Schlüssel?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Ja, 12 Monate Garantie auf alle Schlüssel und die Programmierung. Zudem erhalten Sie eine versicherungstaugliche Rechnung.
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Kann ich vor Ort einen Autoschlüssel mit Fernbedienung nachmachen lassen?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Sicher! Wir kommen mit unserem voll ausgestatteten mobilen Servicefahrzeug zu Ihrem Standort, um vor Ort einen kompletten <strong>Autoschlüssel mit Fernbedienung</strong> nachzumachen. Ob Sie ein zusätzliches Exemplar oder direkt einen Ersatzschlüssel wünschen, wir programmieren alle Autoschlüssel mit Fernbedienung fachgerecht über den OBD2-Port, während Sie warten.
                    </p>
                  </details>

                  <details className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      Programmieren Sie auch Autoschlüssel mit Keyless Entry?
                      <span className={styles.faqChevron}>+</span>
                    </summary>
                    <p className={styles.faqAnswer}>
                      Ja, wir sind spezialisiert auf das Einlernen moderner Smart Keys und jeden Typ <strong>Autoschlüssel mit Keyless Entry</strong> (Proximity Start). Sie müssen Ihr Auto nicht abschleppen lassen; wir können vor Ort einen zusätzlichen Autoschlüssel oder Keyless Fob programmieren und Ihre Werksgarantie bleibt erhalten.
                    </p>
                  </details>
                </div>

              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Sofortige Hilfe benötigt?</h3>
                  <p>Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir sind 24/7 erreichbar und durchschnittlich in 30 Minuten bei Ihnen.</p>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.sidePhone} id="sb-side-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.sideWa} id="sb-side-wa">WhatsApp Direkt</a>
                  <div className={styles.sideList}>
                    {['Keine Abschleppkosten', 'Festpreis vorab', 'Rechnung für Versicherung', '12 Monate Garantie', '24/7 verfügbar'].map(item => (
                      <div key={item} className={styles.sideListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" style={{color:'#22c55e',flexShrink:0}} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.ratingCard}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <p className={styles.ratingText}>&ldquo;Schlüssel von meinem Audi A4 verloren. Wartezeit beim Händler 8 Tage. FC-KEY war in 40 Min. vor Ort und der neue Schlüssel funktionierte sofort. Top Service!&rdquo;</p>
                  <span className={styles.ratingMeta}>Mark D. — Audi A4, Stuttgart</span>
                  <span className={styles.ratingCount}>{SITE_CONFIG.reviewCount} Google-Bewertungen · {SITE_CONFIG.rating}/5</span>
                </div>
              </aside>
            </div> {/* closes contentGrid */}
          </div>
        </section>

        <BrandsLogoGrid
          title="Welche Marken bedienen wir?"
          subtitle="Wir fertigen und programmieren Schlüssel für alle gängigen Marken. Unsere Ausrüstung unterstützt:"
        />

        <ServiceCoverageMap />

        <section className={styles.section} style={{ paddingTop: '4rem' }}>
          <div className={styles.container}>

            {/* Bottom CTA block */}
            <div className={styles.ctaBlock}>
              <h2>Autoschlüssel nachmachen benötigt? Direkt anrufen</h2>
              <p>Unser mobiler Spezialist ist in 30 Min. bei Ihnen in Stuttgart. Festpreis, keine Überraschungen.</p>
              <div className={styles.ctaBtnsGrid}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPrimary} id="sb-bottom-phone">Anrufen: {SITE_CONFIG.phone}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} id="sb-bottom-wa">WhatsApp Direkt</a>
              </div>
              <span className={styles.microText}>24/7 verfügbar — auch nachts und am Wochenende</span>
            </div>

          </div>
        </section>

        {/* ── RELATED BLOGS SECTION ────────────────────────────────── */}
        {(() => {
          const relatedPosts = getRelatedBlogPosts('autoschluessel-nachmachen');
          if (!relatedPosts || relatedPosts.length === 0) return null;
          return (
            <section className={styles.relatedBlogsSection}>
              <div className={styles.relatedBlogsContainer}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
                  VERWANDTES WISSEN &amp; RATGEBER
                </p>
                <h2 className={styles.relatedBlogsTitle}>
                  Nützliche Artikel zum Thema Autoschlüssel nachmachen
                </h2>
                <div className={styles.relatedBlogsGrid}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={styles.blogPostCard}
                      id={`sb-related-blog-${post.slug}`}
                    >
                      <div className={styles.blogPostMeta}>
                        <span className={styles.blogPostReadTime}>{post.readTime} lesen</span>
                        <span className={styles.blogPostDate}>
                          {new Date(post.publishDate).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      </div>
                      <h3 className={styles.blogPostTitle}>{post.title}</h3>
                      <p className={styles.blogPostExcerpt}>{post.excerpt}</p>
                      <span className={styles.blogPostLink}>Artikel lesen →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* ── REVIEWS SECTION ────────────────────────────────────── */}
        <section className={styles.reviews}>
          <div className={styles.container}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
              KUNDENBEWERTUNGEN
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              Was Kunden über das Nachmachen von Autoschlüsseln sagen
            </h2>
            <div className={styles.ratingBig}>
              <span className={styles.ratingNum}>{SITE_CONFIG.rating}</span>
              <div>
                <div className={styles.ratingStarsReview}>★★★★★</div>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  {SITE_CONFIG.reviewCount} Google-Bewertungen · {SITE_CONFIG.rating}/5
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
