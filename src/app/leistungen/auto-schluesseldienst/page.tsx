import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { getRelatedBlogPosts } from '@/config/services';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import { generateContextualReviews } from '@/utils/reviews';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Auto Schlüsseldienst | 24/7 Mobil & Schadensfrei | FC-KEY',
  },
  description: 'Notfall Auto Schlüsseldienst benötigt? Wir öffnen Ihr Auto 100% schadensfrei und fertigen direkt vor Ort einen neuen Schlüssel an. Festpreise ab 149€. Jetzt 24/7 anrufen.',
  alternates: { canonical: `${SITE_CONFIG.domain}/leistungen/auto-schluesseldienst` },
};

export default function AutoSlotenmakerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Auto Schlüsseldienst",
    "provider": {
      "@type": "Locksmith",
      "name": "FC-KEY",
      "telephone": SITE_CONFIG.phoneTel,
      "url": SITE_CONFIG.domain
    },
    "areaServed": {
      "@type": "State",
      "name": "Baden-Württemberg"
    },
    "serviceType": "Auto Schlüsseldienst, Autotür öffnen, Autoschloss Reparatur, Ersatzschlüssel anfertigen",
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Schlüsseldienst Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autotür schadensfrei öffnen",
            "description": "Auto öffnen ohne Schlüssel bei Aussperrung"
          },
          "price": "149",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autoschloss Reparatur",
            "description": "Türschloss oder Zündschloss reparieren nach Einbruchschaden oder Verschleiß"
          },
          "price": "299",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neuen Autoschlüssel anfertigen",
            "description": "Autoschlüssel vor Ort fräsen und programmieren"
          },
          "price": "149",
          "priceCurrency": "EUR"
        }
      ]
    }
  };

  const trustItems = [
    '24/7 Notdienst',
    'In 30 Min. vor Ort',
    'Schadensfrei öffnen',
    'Direkt neuer Schlüssel',
    'Festpreise vorab',
    'Zertifizierte Monteure'
  ];

  const faqItems = [
    {
      q: 'Wie finde ich einen zuverlässigen Auto-Schlüsseldienst in der Nähe?',
      a: 'Ein zuverlässiger Auto-Schlüsseldienst arbeitet mit festen All-in-Preisen, die vorab kommuniziert werden, und ist zertifiziert. FC-KEY ist komplett mobil in der Region Stuttgart, Sindelfingen und im Umkreis von 50km aktiv. Wir sind innerhalb von 30 bis 45 Minuten mit einem voll ausgestatteten Servicebus an Ihrem Standort.'
    },
    {
      q: 'Was kostet ein Auto-Schlüsseldienst für die Öffnung meines Autos?',
      a: 'Bei FC-KEY kostet das schadensfreie Öffnen Ihrer Autotür bei einer Aussperrung ab 149€ (exklusive MwSt). Wir haben eine Festpreisgarantie: Der Tarif, der vorab telefonisch oder per WhatsApp vereinbart wurde, ist der endgültige Preis.'
    },
    {
      q: 'Kann ein Auto-Schlüsseldienst auch einen neuen Schlüssel anfertigen, wenn ich alle verloren habe?',
      a: 'Ja, absolut. Im Gegensatz zu herkömmlichen Schlüsseldiensten, die nur Schlösser öffnen, verfügen unsere Auto-Schlüsseldienste über fortschrittliche Diagnosegeräte. Wir dekodieren das Schloss mechanisch, um einen Schlüsselbart zu fräsen, und programmieren den Transponder direkt in den Computer Ihres Autos.'
    },
    {
      q: 'Wird der Auto-Schlüsseldienst von meiner Versicherung bezahlt?',
      a: 'In vielen Fällen ja. Wenn Sie Teilkasko oder Vollkasko versichert sind und ein Diebstahl oder Einbruchschaden an Ihren Autoschlössern vorliegt, erstatten die Versicherer die Kosten. Sie erhalten von uns immer eine offizielle Rechnung mit MwSt. und Spezifikation für Ihre Versicherung.'
    },
    {
      q: 'Was ist der Unterschied zwischen FC-KEY und dem Autohändler?',
      a: 'Der Autohändler verlangt, dass Sie Ihr Auto in seine Werkstatt abschleppen lassen, und hat oft Lieferzeiten von einigen Tagen bis Wochen für einen neuen Schlüssel. FC-KEY kommt zu Ihnen und regelt alles direkt vor Ort innerhalb von 30-45 Minuten, zu einem Tarif, der bis zu 50% unter dem des Vertragshändlers liegt.'
    }
  ];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
  const steps = [
    {
      num: 1,
      title: 'Nehmen Sie Kontakt auf',
      desc: 'Rufen Sie an oder senden Sie eine WhatsApp-Nachricht. Geben Sie Ihre Automarke, das Modell und den genauen Standort durch. Sie erhalten direkt ein festes All-in-Preisangebot.'
    },
    {
      num: 2,
      title: 'Monteur unterwegs',
      desc: 'Unser mobiler Auto-Schlüsseldienst fährt direkt zu Ihrem Standort. Innerhalb von 30-45 Minuten ist der Bus bei Ihnen vor Ort.'
    },
    {
      num: 3,
      title: 'Schadensfreie Öffnung',
      desc: 'Mit Hilfe von Lishi-Lockpicks und Spezialwerkzeug öffnen wir die Autotür oder den Kofferraum zu 100% schadensfrei.'
    },
    {
      num: 4,
      title: 'Direkt weiterfahren',
      desc: 'Bei Bedarf reparieren wir Ihr Schloss oder programmieren direkt einen neuen Schlüssel. Sie zahlen sicher per Karte oder bar.'
    }
  ];

  return (
    <>
      <Script id="auto-slotenmaker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="auto-slotenmaker-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/leistungen">Leistungen</Link> <span>/</span> <span>Auto Schlüsseldienst</span>
            </nav>
            <h1>24/7 Mobiler Auto Schlüsseldienst — Schnell &amp; Schadensfrei vor Ort</h1>
            <p className={styles.heroLead}>
              Haben Sie sich aus Ihrem Auto ausgesperrt, den Schlüssel im Auto liegen lassen oder haben Sie einen Einbruchschaden am Türschloss? 
              Als zertifizierter Auto-Schlüsseldienst öffnen wir Ihr Auto 100% schadensfrei und programmieren direkt vor Ort neue Ersatzschlüssel. 
              Unsere mobilen Servicebusse fahren direkt in der Region Stuttgart, Sindelfingen und im Umkreis von 50km los.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phoneTel} />
            </div>
          </div>
        </section>

        <BrandsMarquee />

        {/* ===== FEATURE CARDS ===== */}
        <div style={{ backgroundColor: '#f3f4f6', padding: '1px 0' }}>
          <FeatureCards 
            title="Schadensfrei Auto öffnen."
            subtitle={<>Ausgesperrt? <span style={{ color: 'var(--orange-500)' }}>FC-KEY</span> öffnet Ihr Auto komplett schadensfrei.</>}
            features={[
              {
                id: 'feature-1',
                icon: <Image src="/images/icon_map.jpg" alt="In 30-60 Min. vor Ort" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: 'In 30-60 Min. vor Ort',
                description: 'Ausgesperrt? Wir sind sofort zu Ihnen unterwegs. Unser Monteur ist immer in der Nähe.',
                linkText: 'Standorte ansehen',
                linkUrl: '/standorte'
              },
              {
                id: 'feature-2',
                icon: <Image src="/images/icon_van.jpg" alt="Ohne Abschleppwagen" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: 'Ohne Abschleppwagen',
                description: 'Wir öffnen Ihre Türen direkt an Ihrem Standort. Ihr Auto muss nicht abgeschleppt werden.',
                linkText: 'Mehr über unseren mobilen Service',
                linkUrl: '/leistungen'
              },
              {
                id: 'feature-3',
                icon: <Image src="/images/icon_price.jpg" alt="Festpreis vorab" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: 'Festpreis vorab',
                description: 'Keine bösen Überraschungen. Sie wissen sofort, was Sie bezahlen, bevor wir beginnen.',
                linkText: 'Unsere Preise ansehen',
                linkUrl: '/preise'
              },
              {
                id: 'feature-4',
                icon: <Image src="/images/icon_car_check.jpg" alt="100% Schadensfrei Garantie" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: '100% Schadensfrei Garantie',
                description: 'Wir garantieren, dass wir Ihr Auto öffnen, ohne die Scheibe einzuschlagen oder das Schloss zu beschädigen.',
                linkText: 'Mehr über Garantie',
                linkUrl: '/leistungen'
              },
              {
                id: 'feature-5',
                icon: <Image src="/images/icon_insurance.jpg" alt="24/7 Notdienst" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: '24/7 Notdienst',
                description: 'Sie sind zu 100% abgesichert. Tag und Nacht erreichbar für alle Notfälle.',
                linkText: 'Direkt anrufen',
                linkUrl: `tel:${SITE_CONFIG.phoneTel}`
              },
            ]}
          />
        </div>

        {/* 3 steps HowTo */}
        <div style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <HowItWorks variant="lockout" />
          </div>
        </div>

        {/* Content Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>
                
                {/* Section 1 */}
                <div>
                  <h2>Wann benötigen Sie einen Auto-Schlüsseldienst?</h2>
                  <p>
                    Eine Aussperrung oder ein defektes Autoschloss kommt immer ungelegen. Glücklicherweise müssen Sie Ihr Auto nicht abschleppen lassen. Unser spezialisierter Automotive-Schlüsseldienst kommt direkt zu Ihnen bei folgenden Problemen:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Schlüssel im verschlossenen Auto vergessen:</strong> Ihre Türen sind ins Schloss gefallen, während der Schlüssel noch im Zündschloss oder Kofferraum liegt. Wir öffnen Ihr Auto komplett schadensfrei.</li>
                    <li><strong>Autoschlüssel verloren oder gestohlen:</strong> Wenn Sie alle Ihre Schlüssel verloren haben, fertigen und programmieren wir vor Ort einen neuen, funktionierenden Schlüssel. Den alten Schlüssel löschen wir direkt aus der Wegfahrsperre.</li>
                    <li><strong>Abgebrochener Autoschlüssel:</strong> Ihr Schlüsselbart ist in der Tür oder im Zündschloss abgebrochen. Wir entfernen das Fragment und fräsen vor Ort einen neuen Schlüssel.</li>
                    <li><strong>Klemmendes oder defektes Zündschloss:</strong> Der Schlüssel lässt sich im Zündschloss nicht mehr drehen. Wir demontieren und überholen Ihr Zündschloss direkt vor Ort.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2>Preise Auto-Schlüsseldienst — Fair &amp; Transparent</h2>
                  <div className={styles.tableWrapper}>
                    <table className={styles.pricingTable}>
                      <thead>
                        <tr>
                          <th>Dienstleistung</th>
                          <th>Erläuterung</th>
                          <th>Preis (Ab)</th>
                          <th>Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Autotür schadensfrei öffnen</td>
                          <td>Bei Aussperrung, Schlüssel im Auto</td>
                          <td><strong>149€</strong></td>
                          <td>10-15 Min.</td>
                        </tr>
                        <tr>
                          <td>Neuen Ersatzschlüssel anfertigen</td>
                          <td>Inklusive Programmierung Transponder</td>
                          <td><strong>149€ - 299€</strong></td>
                          <td>20-30 Min.</td>
                        </tr>
                        <tr>
                          <td>Alle Schlüssel verloren (All Keys Lost)</td>
                          <td>Generieren eines neuen Schlüsselbarts</td>
                          <td><strong>249€ - 500€</strong></td>
                          <td>30-45 Min.</td>
                        </tr>
                        <tr>
                          <td>Zündschloss / Türschloss Reparatur</td>
                          <td>Demontage, Überholung und Reinigung</td>
                          <td><strong>299€</strong></td>
                          <td>45 Min.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.callout}>
                    <strong>Keine versteckten Kosten:</strong> Im Gegensatz zu unseriösen Schlüsseldiensten, die mit Lockangeboten arbeiten, erhalten Sie bei uns vorab ein festes Preisangebot exklusive MwSt. 
                    <br/><br/>
                    <strong>Gut zu wissen:</strong> Offizielle Autohändler sind oft <strong>50% teurer</strong>. Zudem sparen Sie bei uns teure Abschleppkosten, denn <strong>wir berechnen keine Abschleppkosten</strong> und helfen Ihnen direkt vor Ort!
                  </div>
                </div>

                {/* Section 2.5: Onze Service Galerij */}
                <div>
                  <h2>Unser Auto-Schlüsseldienst bei der Arbeit — Galerie</h2>
                  <p>
                    Wir sind stolz auf unsere Handwerkskunst. Nachfolgend sehen Sie einen Auszug aus unseren jüngsten Arbeiten, von der schadensfreien Türöffnung bis hin zu komplexen Transponderreparaturen:
                  </p>
                  <RealGalleryShowcase 
                    photos={[
                      {
                        src: "/images/seo/auto-schluesseldienst-werkplaats-stuttgart.webp",
                        alt: "Professionelles Löten von Mikroschaltern und Einlernen von Transponderchips",
                        label: "Mikroschalter Reparatur"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-bmw-openen-sindelfingen.webp",
                        alt: "Schadensfreies Öffnen einer Autotür bei Aussperrung",
                        label: "BMW Türöffnung"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-volkswagen-golf-boeblingen.webp",
                        alt: "Programmieren und Fräsen eines Ersatz-Klappschlüssels",
                        label: "VW Golf Schlüssel"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-audi-inleren-esslingen.webp",
                        alt: "Smart Key einlernen und Transponder programmieren",
                        label: "Audi Smart Key"
                      }
                    ]} 
                  />
                </div>



                {/* Section 4 */}
                <div>
                  <h2>Warum FC-KEY als Ihren Auto-Schlüsseldienst wählen?</h2>
                  <p>
                    Wenn Sie eine Panne haben, möchten Sie schnell, zuverlässig und ohne zusätzlichen Aufwand Hilfe erhalten. FC-KEY bietet große Vorteile gegenüber herkömmlichen Werkstätten oder Autohändlern:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>100% Mobiler Service:</strong> Sie müssen Ihr Auto nicht zu einem Händler abschleppen lassen. Wir kommen mit unserem mobilen Bus zu Ihnen nach Hause, zur Arbeit oder an die Autobahn.</li>
                    <li><strong>Schadensfrei Öffnen:</strong> Dank fortschrittlichem Lishi-Lockpick-Werkzeug manipulieren wir das Türschloss über den Zylinder. Dies hinterlässt keine Kratzer oder Schäden an Ihrem Lack oder den Gummis.</li>
                    <li><strong>Direkt neue Schlüssel fräsen:</strong> Unsere Servicebusse sind mit computergesteuerten CNC-Laser-Schlüsselmaschinen und Programmiersoftware ausgestattet, um direkt einen neuen Schlüssel zu programmieren.</li>
                    <li><strong>Verfügbar in ganz Stuttgart & Umgebung:</strong> Wir fahren schnell aus in Stuttgart, Sindelfingen und bis zu 50km Umkreis. Durchschnittlich sind wir in 30-45 Minuten vor Ort.</li>
                  </ul>
                </div>

                {/* FAQ Section */}
                <div>
                  <h2>Häufig gestellte Fragen zum Auto-Schlüsseldienst</h2>
                  {faqItems.map((item, idx) => (
                    <details key={idx} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>
                        {item.q}
                        <span className={styles.faqChevron}>+</span>
                      </summary>
                      <p className={styles.faqAnswer}>{item.a}</p>
                    </details>
                  ))}
                </div>

              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Sofortige Hilfe benötigt?</h3>
                  <p>Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir sind 24/7 erreichbar und durchschnittlich in 30 Minuten bei Ihnen.</p>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.sidePhone} id="asm-sidebar-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.sideWa} id="asm-sidebar-wa">WhatsApp Direkt</a>
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
                  <p className={styles.ratingText}>&ldquo;Meine Schlüssel lagen noch im Kofferraum und das Auto war verschlossen. FC-KEY war in 30 Min. da und öffnete den Kofferraum zu 100% schadensfrei. Super zuverlässiger Auto-Schlüsseldienst!&rdquo;</p>
                  <span className={styles.ratingMeta}>Daniel K. — Volkswagen Golf, Stuttgart</span>
                  <span className={styles.ratingCount}>{SITE_CONFIG.reviewCount} Google-Bewertungen · {SITE_CONFIG.rating}/5</span>
                </div>
              </aside>

            </div>

            {/* Bottom CTA block */}
            <div className={styles.ctaBlock}>
              <h2>Auto-Schlüsseldienst benötigt? Direkt anrufen</h2>
              <p>Unser mobiler Spezialist ist in 30 Min. bei Ihnen vor Ort. Festpreis, keine Überraschungen.</p>
              <div className={styles.ctaBtnsGrid}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPrimary} id="asm-bottom-phone">Anrufen: {SITE_CONFIG.phone}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} id="asm-bottom-wa">WhatsApp Direkt</a>
              </div>
              <span className={styles.microText}>24/7 verfügbar — auch nachts und am Wochenende</span>
            </div>

          </div>
        </section>

        {/* ── RELATED BLOGS SECTION ────────────────────────────────── */}
        {(() => {
          const relatedPosts = getRelatedBlogPosts('auto-schluesseldienst');
          if (!relatedPosts || relatedPosts.length === 0) return null;
          return (
            <section className={styles.relatedBlogsSection}>
              <div className={styles.relatedBlogsContainer}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
                  VERWANDTES WISSEN &amp; RATGEBER
                </p>
                <h2 className={styles.relatedBlogsTitle}>
                  Nützliche Artikel über Auto-Schlüsseldienste &amp; Sicherheit
                </h2>
                <div className={styles.relatedBlogsGrid}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={styles.blogPostCard}
                      id={`asm-related-blog-${post.slug}`}
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
              Was Kunden über unseren Auto-Schlüsseldienst sagen
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
              {generateContextualReviews('autosleutel', 'service').map((review, i) => (
                <GoogleReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
