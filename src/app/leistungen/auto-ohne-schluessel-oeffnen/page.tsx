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
import GlobalFeatureCards from '@/components/FeatureCards/GlobalFeatureCards';
import ServiceCoverageMap from '@/components/ServiceCoverageMap/ServiceCoverageMap';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import TrustindexHeroWidget from '@/components/TrustindexHeroWidget/TrustindexHeroWidget';
import { generateContextualReviews } from '@/utils/reviews';
import { getBaseLocalBusinessSchema } from '@/utils/schema';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Auto ohne Schlüssel öffnen | 24/7 Schadensfrei | FC-KEY',
  },
  description: 'Auto ohne Schlüssel öffnen? Unser mobiler Schlüsseldienst öffnet Ihr Auto 100% schadensfrei innerhalb von 30 Min. Festpreis ab 149€. Aktiv in Stuttgart, Sindelfingen und 50km Umkreis. 24/7 anrufen!',
  alternates: { canonical: `${SITE_CONFIG.domain}/leistungen/auto-ohne-schluessel-oeffnen` },
  keywords: [
    'auto ohne schlüssel öffnen',
    'schlüssel im auto vergessen',
    'autotür schadensfrei öffnen',
    'auto öffnen schlüsseldienst',
    'aussperrung auto',
    'auto ohne schlüssel öffnen kosten',
    'auto ohne schlüssel öffnen stuttgart',
    'auto öffnen sindelfingen'
  ]
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Auto ohne Schlüssel öffnen",
  "provider": {
    "@type": "Locksmith",
    "name": "FC-KEY",
    "telephone": SITE_CONFIG.phoneTel,
    "url": SITE_CONFIG.domain,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Stuttgart",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Stuttgart" },
    { "@type": "City", "name": "Sindelfingen" },
    { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.7758, "longitude": 9.1829 }, "geoRadius": "50000" }
  ],
  "serviceType": "Auto ohne Schlüssel öffnen, schadensfreie Aussperrung, Kofferraum öffnen",
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "description": "All-in-Preis exklusive MwSt"
    }
  }
};

const faqItems = [
  {
    q: "Wie funktioniert das Öffnen eines Autos ohne Schlüssel?",
    a: "Ein mobiler Auto-Schlüsseldienst verwendet spezielles Lishi-Lockpick-Werkzeug, das genau für Ihren Schließzylinder entwickelt wurde. Der Techniker schiebt das Werkzeug ins Schlüsselloch und tastet die inneren Stifte mechanisch ab. Sobald alle Stifte ausgerichtet sind, lässt sich der Zylinder drehen — ohne Gewalt, ohne Schaden. Bei moderneren Autos mit elektronisch verriegelten Türen wird zusätzlich ein OBD-Tool oder Long-Range-Decoder verwendet, um das CAN-Bus-Netzwerk zu entriegeln."
  },
  {
    q: "Meine Autoschlüssel liegen im Auto, was nun?",
    a: "Rufen Sie FC-KEY direkt an. Wir fragen nach Ihrer Automarke, dem Modell und Ihrem genauen Standort. Unser mobiler Schlüsseldienst fährt sofort zu Ihnen und ist durchschnittlich innerhalb von 30 Minuten vor Ort. Sie müssen keinen Abschleppdienst, Händler oder eine Werkstatt anrufen. Wir öffnen das Auto vor Ort schadensfrei und Sie erhalten eine offizielle, versicherungstaugliche Rechnung."
  },
  {
    q: "Welche Systeme werden zum Öffnen eines Autos ohne Schlüssel verwendet?",
    a: "Es gibt drei Haupttechniken: (1) Mechanische Öffnung via Lishi-Decoder — das schadensfreiste und zuverlässigste System für den Großteil des Marktes; (2) OBD-Port-Bypass für Autos mit elektronischem Deadlock wie BMW und Mercedes; (3) Slim-Jim/Long-Reach-Tools für ältere Fahrzeuge. FC-KEY verwendet ausschließlich zertifizierte Methoden (1) und (2) und niemals destruktive Techniken."
  },
  {
    q: "Was sind die Kosten für das Öffnen meines Autos (Aussperrung)?",
    a: "Bei FC-KEY zahlen Sie einen festen All-in-Preis ab 149€ für das schadensfreie Öffnen Ihrer Autotür bei einer Aussperrung. Sie erhalten das Preisangebot immer, bevor wir losfahren — keine versteckten Kosten im Nachhinein."
  },
  {
    q: "Welche Automarken können ohne Schlüssel geöffnet werden?",
    a: "Wir können fast alle gängigen Pkw-Marken schadensfrei öffnen: Volkswagen, BMW, Mercedes-Benz, Audi, Toyota, Ford, Opel, Renault, Peugeot, Citroën, Nissan, Hyundai, Kia, Seat, Skoda, Volvo, Porsche und mehr. Auch Autos mit Doppelverriegelung (Deadlock) oder reinen Keyless-Systemen sind für unsere Spezialisten kein Problem."
  },
  {
    q: "Wie schnell kann mein Auto geöffnet werden, wenn die Schlüssel darin liegen?",
    a: "Nach Ihrer telefonischen Meldung fährt der nächste mobile Schlüsseldienst sofort los. In der Region Stuttgart, Sindelfingen und im 50km Umkreis sind wir durchschnittlich in 25–40 Minuten vor Ort. Zu ruhigen Zeiten (tagsüber an Wochentagen) kann dies sogar kürzer sein. Niemals mehr als 60 Minuten in unserem Einsatzgebiet."
  },
  {
    q: "Gibt es Apps zum Öffnen von Autos ohne Schlüssel, die das ermöglichen?",
    a: "Einige moderne Autos (Tesla, bestimmte BMWs/Mercedes mit Connected App) bieten eine Werks-App an, mit der Sie das Fahrzeug aus der Ferne über Ihr Smartphone entriegeln können — vorausgesetzt, Sie haben die App vorher eingerichtet und ein aktives Abonnement. Wenn diese Möglichkeit fehlt oder die App nicht funktioniert, ist ein zertifizierter mobiler Schlüsseldienst die schnellste und sicherste Lösung. Achtung: Unbekannte Drittanbieter-Apps, die behaupten, Schlösser zu öffnen, sind Betrug."
  },
  {
    q: "Kann ich mein Auto öffnen, wenn ich keinen Ersatzschlüssel habe?",
    a: "Ja, absolut. Sie benötigen keinen Ersatzschlüssel. Durch mechanisches Dekodieren kann der Zylinder geöffnet werden. Wenn Sie danach auch einen neuen Ersatzschlüssel möchten, können wir diesen direkt vor Ort programmieren. So fahren Sie am selben Tag mit einem Ersatz los und lassen nie wieder einen Schlüssel im Auto liegen."
  },
  {
    q: "Welche Dienstleister für die Autoöffnung ohne Schlüssel sind in Deutschland aktiv?",
    a: `In Deutschland sind mehrere mobile Schlüsseldienste aktiv, aber die Qualität variiert stark. Achten Sie auf zertifizierte Fachleute, die mit professionellem Lishi-Werkzeug arbeiten und feste, transparente Preise vor der Ankunft kommunizieren. FC-KEY ist aktiv in Stuttgart, Sindelfingen und 50km Umkreis und bekannt für schadensfreie Öffnungen und faire All-in-Preise — nachprüfbar durch ${SITE_CONFIG.reviewCount} Google-Bewertungen mit einer ${SITE_CONFIG.rating}-Sterne-Bewertung.`
  },
  {
    q: "Wird das Öffnen ohne Schlüssel von meiner Versicherung erstattet?",
    a: "Bei Teilkasko oder Vollkasko werden die Kosten für eine Aussperrung manchmal als Teil Ihrer Pannenhilfe-Deckung erstattet — prüfen Sie Ihre Police. Versicherungsgesellschaften verlangen immer eine Originalrechnung mit MwSt. und Spezifikation. Diese erhalten Sie direkt von uns. Einige Pannenhilfe-Abonnements (ADAC etc.) decken dies auch ab — rufen Sie diese zuerst an, falls Sie eine solche Deckung haben."
  },
  {
    q: "Leistungen für das Öffnen eines Autos mit eingeschlossenem Schlüssel — was bietet ein mobiler Schlüsseldienst?",
    a: "Ein zertifizierter mobiler Auto-Schlüsseldienst bietet: (1) Schadensfreie Öffnung von Türen und Kofferraum; (2) Korrekte Identitätsprüfung vor der Öffnung (Kopie Führerschein + Fahrzeugschein); (3) Eine offizielle Rechnung für Ihre Versicherung; (4) Optional: direkte Programmierung eines neuen Ersatzschlüssels vor Ort. Das ist völlig anders als 'Glasbrecher' oder Amateure, die mit einem Kleiderbügel oder Brecheisen arbeiten und Schäden verursachen."
  }
];

const steps = [
  {
    num: 1,
    title: "Anrufen oder WhatsApp direkt",
    desc: "Geben Sie Ihren Standort, Automarke und Modell an. Wir nennen Ihnen direkt einen festen All-in-Preis."
  },
  {
    num: 2,
    title: "Mobiler Schlüsseldienst unterwegs",
    desc: "Der nächstgelegene Spezialist fährt sofort los. Durchschnittlich innerhalb von 30 Minuten bei Ihnen."
  },
  {
    num: 3,
    title: "Identitätskontrolle",
    desc: "Wir bitten um Ihren Führerschein + Fahrzeugpapiere. Dies ist für Ihre und unsere Sicherheit obligatorisch."
  },
  {
    num: 4,
    title: "Schadensfreie Öffnung",
    desc: "Über den Lishi-Decoder wird der Zylinder mechanisch geöffnet. 0% Schaden, 100% zuverlässig."
  },
  {
    num: 5,
    title: "Direkt weiterfahren + evtl. Ersatzschlüssel",
    desc: "Sie zahlen den vereinbarten Preis. Auf Wunsch programmieren wir direkt einen Ersatzschlüssel vor Ort."
  }
];

const trustItems = [
  '24/7 Nothilfe',
  'In 30 Min. vor Ort',
  '100% Schadensfrei',
  'Festpreis vorab',
  'Zertifizierter Schlüsseldienst',
  'Versicherungstaugliche Rechnung'
];

export default function AutoOpenenZonderSleutelPage() {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
      { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": `${SITE_CONFIG.domain}/leistungen` },
      { "@type": "ListItem", "position": 3, "name": "Auto ohne Schlüssel öffnen", "item": `${SITE_CONFIG.domain}/leistungen/auto-ohne-schluessel-oeffnen` }
    ]
  };

  return (
    <>
      <script id="aozs-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id="aozs-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script id="aozs-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/leistungen">Leistungen</Link> <span>/</span>
              <span>Auto ohne Schlüssel öffnen</span>
            </nav>
            <TrustindexHeroWidget />
            <h1>Auto ohne Schlüssel öffnen — 100% Schadensfrei &amp; 24/7 Mobiler Service</h1>
            <p className={styles.heroLead}>
              Schlüssel im Auto liegen lassen? Tür zugefallen? Aus dem Auto ausgesperrt?
              Als zertifizierter mobiler Schlüsseldienst öffnen wir Ihr Auto zu 100% schadensfrei — ohne Scheibe einzuschlagen,
              ohne Abschleppwagen. Wir sind durchschnittlich in 30 Minuten bei Ihnen vor Ort in
              Stuttgart, Sindelfingen und 50km Umkreis.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phoneTel} />
            </div>
          </div>
        </section>



        {/* ===== FEATURE CARDS ===== */}
        <GlobalFeatureCards />


        {/* 3 steps HowTo */}
        <div style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <HowItWorks variant="lockout" />
          </div>
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>

                {/* Section 1: Wanneer nodig */}
                <div>
                  <h2>Wann müssen Sie Ihr Auto ohne Schlüssel öffnen lassen?</h2>
                  <p>
                    Es gibt mehrere Situationen, in denen Sie Ihr Auto ohne Ihren eigenen Schlüssel öffnen müssen. In all diesen Fällen ist FC-KEY Ihre schnellste und schadensfreiste Option:
                  </p>
                  <ul className={styles.bulletList}>
                    <li><strong>Schlüssel im Auto liegen gelassen:</strong> Sie haben das Auto verlassen, die Türen sind ins Schloss gefallen und der Schlüssel liegt noch auf dem Sitz oder im Zündschloss. Rufen Sie uns an — wir öffnen die Türen schadensfrei.</li>
                    <li><strong>Tür zugefallen mit Schlüssel darin:</strong> Sie haben die Tür geschlossen und das Auto hat sich automatisch verriegelt. Auch das lösen wir ohne eine Scheibe einzuschlagen.</li>
                    <li><strong>Kofferraum verschlossen mit Schlüssel darin:</strong> Der Kofferraum oder die Heckklappe ist zu und der Schlüssel liegt drinnen. Wir öffnen über das Türschloss oder die Kofferraumklappe.</li>
                    <li><strong>Alle Schlüssel verloren (Aussperrung):</strong> Sie haben keinen einzigen Schlüssel mehr — verloren oder gestohlen. Wir öffnen das Auto und programmieren am selben Tag einen neuen Schlüssel.</li>
                    <li><strong>Abgebrochener oder klemmender Schlüssel im Schloss:</strong> Der Schlüsselbart ist im Zylinder abgebrochen. Wir entfernen das Fragment und öffnen das Auto.</li>
                  </ul>
                </div>





                {/* Section 4: Tarieven */}
                <div>
                  <h2>Kosten Auto ohne Schlüssel öffnen — Transparente Preise</h2>
                  <div className={styles.tableWrapper}>
                    <table className={styles.pricingTable}>
                      <thead>
                        <tr>
                          <th>Dienstleistung</th>
                          <th>Zeitraum</th>
                          <th>Preis (All-in)</th>
                          <th>Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Autotür / Kofferraum schadensfrei öffnen</td>
                          <td>Tagsüber (07:00–22:00)</td>
                          <td><strong>149€</strong></td>
                          <td>10–20 Min.</td>
                        </tr>
                        <tr>
                          <td>Autotür / Kofferraum schadensfrei öffnen</td>
                          <td>Nachts &amp; Wochenende</td>
                          <td><strong>115€</strong></td>
                          <td>10–20 Min.</td>
                        </tr>
                        <tr>
                          <td>Öffnen + neuen Ersatzschlüssel programmieren</td>
                          <td>Jederzeit</td>
                          <td><strong>199€</strong></td>
                          <td>30–45 Min.</td>
                        </tr>
                        <tr>
                          <td>Öffnen bei Deadlock-System (BMW, Audi, VW)</td>
                          <td>Jederzeit</td>
                          <td><strong>125€</strong></td>
                          <td>20–30 Min.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.callout}>
                    <strong>Preisgarantie:</strong> Sie erhalten vor Abfahrt unseres Spezialisten immer ein festes All-in-Preisangebot telefonisch oder per WhatsApp. Was wir angeben, ist das, was Sie zahlen. Keine dubiosen Praktiken, bei denen sich der Preis nach der Ankunft verdoppelt.
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2>Unser mobiler Schlüsseldienst in Aktion — Galerie</h2>
                  <p>Wir öffnen täglich dutzende Autos schadensfrei in der Region. Hier ein Auszug aus unseren jüngsten Einsätzen:</p>
                  <RealGalleryShowcase 
                    photos={[
                      {
                        src: "/images/seo/auto-schluesseldienst-bmw-openen-sindelfingen.webp",
                        alt: "Schadensfreies Öffnen einer Autotür bei Aussperrung",
                        label: "BMW Öffnung Sindelfingen"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-werkplaats-stuttgart.webp",
                        alt: "Lishi-Decoder genutzt vom zertifizierten Techniker",
                        label: "Mobiler Service Stuttgart"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-volkswagen-golf-boeblingen.webp",
                        alt: "Autotür schadensfrei nach Aussperrung geöffnet",
                        label: "VW Golf Böblingen"
                      },
                      {
                        src: "/images/seo/auto-schluesseldienst-audi-inleren-esslingen.webp",
                        alt: "Aussperrung gelöst und Ersatzschlüssel programmiert",
                        label: "Audi Service Esslingen"
                      }
                    ]} 
                  />
                </div>



                {/* FAQ Section */}
                <div>
                  <h2>Häufig gestellte Fragen zum Auto öffnen ohne Schlüssel</h2>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    Antworten auf die meistgesuchten Fragen — damit Sie schnell und gut informiert eine Entscheidung treffen können.
                  </p>
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

              {/* ── SIDEBAR ──────────────────────────────────────────── */}
              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Auto verschlossen? Direkt anrufen</h3>
                  <p>Wir sind 24/7 erreichbar. Durchschnittlich in 30 Minuten bei Ihnen — auch nachts.</p>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.sidePhone} id="aozs-sidebar-phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                    </svg>
                    Anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.sideWa} id="aozs-sidebar-wa">
                    WhatsApp Direkt
                  </a>
                  <div className={styles.sideList}>
                    {[
                      '100% schadensfrei',
                      'Festpreis vorab',
                      'Rechnung für Versicherung',
                      'In 30 Min. vor Ort',
                      '24/7 verfügbar',
                      'Zertifizierter Schlüsseldienst'
                    ].map(item => (
                      <div key={item} className={styles.sideListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" style={{ color: '#22c55e', flexShrink: 0 }} aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.ratingCard}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <p className={styles.ratingText}>&ldquo;Schlüssel im VW Golf gelassen. FC-KEY angerufen und sie waren in 25 Minuten vor Ort. Auto offen ohne einen einzigen Kratzer. Großartig!&rdquo;</p>
                  <span className={styles.ratingMeta}>Lars V. — Volkswagen Golf, Stuttgart</span>
                  <span className={styles.ratingCount}>{SITE_CONFIG.reviewCount} Google-Bewertungen · {SITE_CONFIG.rating}/5</span>
                </div>

                <div className={styles.sideCard} style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                  <h3 style={{ color: '#166534' }}>Kein Schlüssel mehr?</h3>
                  <p style={{ color: '#15803d', fontSize: '0.88rem' }}>
                    Nach dem Öffnen können wir direkt vor Ort einen neuen Ersatzschlüssel programmieren. Nie wieder ausgesperrt.
                  </p>
                  <Link href="/leistungen/autoschluessel-nachmachen" className={styles.btnOutline} id="aozs-side-nachmachen" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                    Ersatzschlüssel anfertigen →
                  </Link>
                </div>
              </aside>
            </div>

            {/* ── BOTTOM CTA ────────────────────────────────────────── */}
            <div className={styles.ctaBlock}>
              <h2>Auto ohne Schlüssel öffnen — Direkt anrufen</h2>
              <p>Unser mobiler Schlüsseldienst ist in 30 Min. bei Ihnen. Festpreis, null Schaden, Rechnung für die Versicherung.</p>
              <div className={styles.ctaBtnsGrid}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPrimary} id="aozs-bottom-phone">
                  Anrufen: {SITE_CONFIG.phone}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} id="aozs-bottom-wa">
                  WhatsApp Direkt
                </a>
              </div>
              <span className={styles.microText}>24/7 verfügbar — auch nachts und am Wochenende</span>
            </div>
          </div>
        </section>

        {/* ── RELATED BLOGS ────────────────────────────────────────── */}
        {(() => {
          const relatedPosts = getRelatedBlogPosts('auto-ohne-schluessel-oeffnen');
          if (!relatedPosts || relatedPosts.length === 0) return null;
          return (
            <section className={styles.relatedBlogsSection}>
              <div className={styles.relatedBlogsContainer}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
                  VERWANDTES WISSEN &amp; RATGEBER
                </p>
                <h2 className={styles.relatedBlogsTitle}>
                  Nützliche Artikel über Autoöffnung &amp; Aussperrung
                </h2>
                <div className={styles.relatedBlogsGrid}>
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={styles.blogPostCard}
                      id={`aozs-related-blog-${post.slug}`}
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

        {/* ── REVIEWS ──────────────────────────────────────────────── */}
        <section className={styles.reviews}>
          <div className={styles.container}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
              KUNDENBEWERTUNGEN
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              Was Kunden über unsere Autoöffnung ohne Schlüssel sagen
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
              {generateContextualReviews('auto openen', 'service').map((review, i) => (
                <GoogleReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
