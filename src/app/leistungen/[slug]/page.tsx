import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import { LEISTUNGEN } from '@/config/leistungen';
import { getRelatedBlogPosts } from '@/config/services';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import ServiceCoverageMap from '@/components/ServiceCoverageMap/ServiceCoverageMap';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import { generateContextualReviews } from '@/utils/reviews';
import { CITIES } from '@/config/cities';
import { BRANDS } from '@/config/brands';
import { getBaseLocalBusinessSchema } from '@/utils/schema';
import styles from './page.module.css';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  return LEISTUNGEN.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = LEISTUNGEN.find(s => s.slug === slug);
  if (!service) return {};
  const pageUrl = `${SITE_CONFIG.domain}/leistungen/${slug}`;
  return {
    title: {
      absolute: `${service.title} | 24/7 Mobil | FC-KEY`,
    },
    description: service.metaDesc,
    alternates: {
      canonical: pageUrl,
      languages: {
        'nl-NL': pageUrl,
        'de-DE': pageUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: `${service.title} | Mobil & Schadensfrei vor Ort`,
      description: service.metaDesc,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${service.title} — FC-KEY` }],
    },
  };
}

// Helper for stable hashing
function getStableHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default async function DienstPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = LEISTUNGEN.find(s => s.slug === slug);
  if (!service) notFound();

  const p1Cities = CITIES.filter(c => c.priority === 'P1').slice(0, 8);
  const popularBrands = BRANDS.filter(b => b.priority === 'P1').slice(0, 8);

  const isOpening = ['auto-ohne-schluessel-oeffnen', 'schluessel-im-auto', 'tuer-zugefallen', 'kofferraum-oeffnen', 'schluessel-im-schloss-abgebrochen', 'notoeffnung-auto', 'auto-ohne-schluessel-oeffnen'].includes(slug);
  const isKey = ['sleutel-bijmaken', 'autoschluessel-verloren', 'alle-schluessel-verloren-auto', 'ersatz-autoschluessel', 'transponder-programmieren', 'smart-key-programmieren', 'autoschluessel-nachmachen'].includes(slug);

  let howItWorksVariant: 'default' | 'akl' | 'ignition' | 'lockout' = 'default';
  if (['autoschluessel-verloren', 'alle-schluessel-verloren-auto'].includes(slug)) {
    howItWorksVariant = 'akl';
  } else if (['auto-ohne-schluessel-oeffnen', 'schluessel-im-auto', 'tuer-zugefallen', 'kofferraum-oeffnen', 'notoeffnung-auto', 'auto-schluesseldienst'].includes(slug)) {
    howItWorksVariant = 'lockout';
  } else if (['zuendschloss-auto-wechseln', 'schluessel-im-schloss-abgebrochen', 'zuendschloss-wechseln'].includes(slug)) {
    howItWorksVariant = 'ignition';
  }

  // Load recent work images for this service
  const imagesDirMerken = path.join(process.cwd(), 'public', 'images', 'merken');
  const imagesDirLeistungen = path.join(process.cwd(), 'public', 'images', 'leistungen');
  let serviceImages: string[] = [];
  try {
    if (fs.existsSync(imagesDirMerken)) {
      const files = fs.readdirSync(imagesDirMerken);
      const matched = files.filter(f => {
        if (isOpening && f.includes('auto-ohne-schluessel-oeffnen')) return true;
        if (isKey && f.includes('autoschluessel-nachmachen')) return true;
        return false;
      });
      // Mix up the array to get a variety
      const shuffled = matched.sort(() => 0.5 - Math.random());
      serviceImages.push(...shuffled.slice(0, 4).map(f => `/images/marken/${f}`));
    }
    
    // Fallback/fill with general equipment if needed
    if (fs.existsSync(imagesDirLeistungen) && serviceImages.length < 4) {
      const equipFiles = fs.readdirSync(imagesDirLeistungen);
      serviceImages.push(...equipFiles.slice(0, 4 - serviceImages.length).map(f => `/images/leistungen/${f}`));
    }
  } catch (e) {}

  const trustItems = [
    '24/7 Mobiler Service',
    `Innerhalb von ${SITE_CONFIG.responseTime} vor Ort`,
    isOpening ? '100% Schadensfrei öffnen' : (service.priceFrom ? service.priceFrom : 'Festpreis vorab'),
    '12 Monate Garantie',
    'Versichert & Zertifiziert'
  ];

  // Dynamic scenarios for better SEO & human tone
  const bulletItems = isOpening ? [
    { strong: 'Schlüssel auf dem Autositz oder im Zündschloss liegen gelassen:', text: 'Sie steigen kurz aus und die Zentralverriegelung rastet automatisch ein, während der Schlüssel noch im Auto liegt.' },
    { strong: 'Schlüssel im Kofferraum vergessen:', text: 'Beim Einladen von Einkäufen, Sportausrüstung oder Gepäck klappt die Heckklappe zu, während der Schlüssel im Laderaum liegt.' },
    { strong: 'Batterie der Fernbedienung oder des Smart Keys leer:', text: 'Das Auto reagiert nicht mehr auf das Signal und der mechanische Notschlüssel im Türgriff dreht sich aufgrund von Schmutz oder Frost nicht.' },
    { strong: 'Kind oder Haustier versehentlich eingeschlossen:', text: 'Ein akuter Notfall, in dem wir sofort mit höchster Priorität und garantiert schadensfrei eingreifen.' },
    { strong: 'Elektronische Störung in der Zentralverriegelung:', text: 'Das Schloss verweigert seinen Dienst oder das Keyless-Entry-Modul erkennt den Schlüssel nach einem Spannungsabfall nicht mehr.' }
  ] : isKey ? [
    { strong: 'Sie haben nur noch einen funktionierenden Schlüssel:', text: 'Vermeiden Sie akuten Stress und hohe Abschleppkosten, indem Sie rechtzeitig einen Ersatzschlüssel mit Wegfahrsperre anfertigen lassen.' },
    { strong: 'Autoschlüssel verloren oder gestohlen:', text: 'Wir löschen verlorene oder gestohlene Schlüssel sofort aus dem Bordcomputer (ECU), sodass Ihr Auto zu 100% vor Diebstahl geschützt bleibt.' },
    { strong: 'Gehäuse abgenutzt oder Tasten eingedrückt:', text: 'Der Schlüsselbart ist verbogen oder die Gummidrucktasten sind defekt, sodass Feuchtigkeit die Platine beschädigen kann.' },
    { strong: 'Transponder oder Chip wird nicht mehr erkannt:', text: 'Der Anlasser dreht sich, aber der Motor springt nicht an, weil das Signal der Wegfahrsperre nicht übertragen wird.' },
    { strong: 'Zusätzlicher Schlüssel für Partner oder Familienmitglied benötigt:', text: 'Direkt vor Ort eingelernt und an allen Türen und am Zündschloss getestet.' }
  ] : [
    { strong: 'Zündschloss dreht nicht oder klemmt:', text: 'Der Schlüssel lässt sich durch internen Verschleiß des Zylinders oder der Lenksäule nicht mehr im Lenkradschloss drehen.' },
    { strong: 'Schlüssel im Zündschloss oder Türschloss abgebrochen:', text: 'Wir entfernen das abgebrochene Schlüsselstück mit speziellen Extraktionswerkzeugen, ohne das Schloss zu beschädigen.' },
    { strong: 'Elektronische Störung oder Kommunikationsfehler:', text: 'Die Wegfahrsperre oder das BCM-Modul blockieren die Startfreigabe Ihres Fahrzeugs.' },
    { strong: 'Verschleiß am Schlüsselbart:', text: 'Durch jahrelangen Gebrauch hat sich das Metall abgenutzt, wodurch der Schlüssel hakt oder stecken bleibt.' }
  ];

  const pricingHeaders = ['Dienstleistung / Schlüsseltyp', 'Eigenschaften', 'Unsere Tarife (exkl. MwSt)', 'Händlerpreis'];
  const pricingRows = [
    ['Standard Autoschlüssel (mechanisch)', 'Ohne Fernbedienung, inkl. Transponder-Chip', `Ab € ${SITE_CONFIG.prices.transponder},-`, '€ 140,- bis € 180,-'],
    ['Autoschlüssel mit Fernbedienung', 'Originalqualität, inkl. Einlernen & Fräsen', `Ab € ${SITE_CONFIG.prices.remote},-`, '€ 220,- bis € 320,-'],
    ['Smart Key / Keyless Entry', 'Proximity-Start, vollständig programmiert', `Ab € ${SITE_CONFIG.prices.smartKey},-`, '€ 350,- bis € 480,-'],
    ['Schlüsselgehäuse / Batterie wechseln', 'Neues Gehäuse, Mikroschalter & Batterie', `Ab € ${SITE_CONFIG.prices.casing},-`, 'Oft ganzer Schlüssel (€ 200+)'],
    ['All Keys Lost (alle Schlüssel verloren)', 'Spezialisierte Notprogrammierung vor Ort', `Ab € ${SITE_CONFIG.prices.allKeysLost},-`, '€ 800,-+ (inkl. Abschleppkosten)'],
    ['Zündschloss Reparatur / Austausch', 'Überholung oder neues Schloss inkl. Schlüsseln', `Ab € ${SITE_CONFIG.prices.ignition},-`, 'Oft ganze Lenksäule (€ 600+)']
  ];

  const howToSchema = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: service.h1, description: service.intro,
    step: service.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s })),
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: service.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.title,
    provider: getBaseLocalBusinessSchema(),
    description: service.metaDesc,
    ...(service.priceFrom && { offers: { '@type': 'Offer', priceCurrency: 'EUR', description: service.priceFrom } }),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_CONFIG.domain}/leistungen` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_CONFIG.domain}/leistungen/${slug}` },
    ],
  };

  return (
    <>
      <Script id={`howto-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id={`faq-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id={`svc-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id={`bc-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <Link href="/leistungen">Leistungen</Link> <span>/</span>
              <span>{service.title}</span>
            </nav>

            <h1>{service.h1}</h1>

            <p className={styles.heroLead}>{service.intro}</p>

            <div style={{ marginTop: '2rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phoneTel} />
            </div>
          </div>
        </section>

        <BrandsMarquee />

        {/* ===== FEATURE CARDS ===== */}
        <div style={{ backgroundColor: '#f3f4f6', padding: '1px 0' }}>
          <FeatureCards 
            title={isOpening ? "Schadensfrei Auto öffnen." : "Mobiler Auto-Schlüsseldienst."}
            subtitle={
              isOpening 
                ? <>Ausgesperrt? <span style={{ color: 'var(--orange-500)' }}>FC-KEY</span> öffnet Ihr Auto komplett schadensfrei.</>
                : <>Probleme mit dem Autoschlüssel? <span style={{ color: 'var(--orange-500)' }}>FC-KEY</span> hilft Ihnen direkt vor Ort weiter.</>
            }
            features={[
              {
                id: 'feature-1',
                icon: <Image src="/images/icon_map.jpg" alt="In 30-60 Min. vor Ort" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: 'In 30-60 Min. vor Ort',
                description: isOpening ? 'Ausgesperrt? Wir sind sofort zu Ihnen unterwegs. Unser Monteur ist immer in der Nähe.' : 'Probleme mit dem Schlüssel? Wir sind sofort zu Ihnen unterwegs. Unser Monteur ist immer in der Nähe.',
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
                icon: <Image src="/images/icon_car_check.jpg" alt={isOpening ? "100% Schadensfrei Garantie" : "12 Monate Garantie"} width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: isOpening ? '100% Schadensfrei Garantie' : '12 Monate Garantie',
                description: isOpening 
                  ? 'Wir garantieren, dass wir Ihr Auto öffnen, ohne die Scheibe einzuschlagen oder das Schloss zu beschädigen.' 
                  : 'Wir garantieren höchste Qualität und bieten 12 Monate volle Garantie auf alle unsere Schlüssel.',
                linkText: 'Mehr über Garantie',
                linkUrl: '/leistungen'
              },
            ]}
          />
        </div>

        {/* ── HOW IT WORKS (Full width under hero) ── */}
        <HowItWorks variant={howItWorksVariant} />

        {/* ── CONTENT SECTION ─────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.mainContent}>

                {/* Section 1: Wann benötigen Sie den Service? */}
                <div>
                  <h2>Wann benötigen Sie {service.title}?</h2>
                  <p>
                    Probleme mit der Autoverriegelung oder den Autoschlüsseln treten immer zu einem ungelegenen Zeitpunkt auf. Bei {SITE_CONFIG.name} verstehen wir, wie frustrierend und stressig dies ist. Unsere spezialisierten Monteure stehen Tag und Nacht für Sie bereit und lösen die folgenden Situationen täglich schadensfrei für Sie:
                  </p>
                  <ul className={styles.bulletList}>
                    {bulletItems.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.strong}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 2: Preistabelle oder Öffnungsmethoden */}
                {isOpening ? (
                  <div>
                    <h2>Schadensfreie Öffnungsmethoden & Garantie</h2>
                    <p>
                      Unsere Monteure verwenden ausschließlich fortschrittliches, markenspezifisches Schlosserwerkzeug. Im Gegensatz zu herkömmlichen Werkstätten oder Abschleppdiensten öffnen wir Ihr Fahrzeug zu 100% schadensfrei. Wir verbiegen keine Türsäulen, verursachen keine Lackschäden und schlagen niemals Scheiben ein.
                    </p>
                    <div className={styles.tableWrapper} style={{ marginBottom: '2rem' }}>
                      <table className={styles.pricingTable}>
                        <thead>
                          <tr>
                            <th>Technik / Werkzeug</th>
                            <th>Anwendung & Situation</th>
                            <th>Schadensfrei Garantie</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Air Wedge + Long Reach Tool</strong></td>
                            <td>Standard bei 95% aller modernen Pkw</td>
                            <td>100% schadensfrei, kein Druck auf Lack oder Gummi</td>
                          </tr>
                          <tr>
                            <td><strong>Lishi 2-in-1 Pick / Decoder</strong></td>
                            <td>Direktes Lockpicking und Auslesen über das Türschloss</td>
                            <td>100% mechanische Präzision ohne Gewalt</td>
                          </tr>
                          <tr>
                            <td><strong>Turbo Decoder</strong></td>
                            <td>Hochsicherheitsschlösser (wie BMW, VAG und Porsche)</td>
                            <td>Sicher und blitzschnell ohne Einbruchspuren</td>
                          </tr>
                          <tr>
                            <td><strong>Extraktion & Zylinder-Bypass</strong></td>
                            <td>Bei abgebrochenen Schlüsselstücken im Zünd- oder Türschloss</td>
                            <td>Erhalt Ihres originalen Schließzylinders</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.callout}>
                      <strong>Schadensfrei Garantie:</strong> Wir garantieren 100% schadensfreie Öffnung oder Reparatur. Sollte in einem Ausnahmefall im Vorfeld ein Risiko bestehen, bespricht unser Monteur dies immer transparent mit Ihnen vor Beginn der Arbeiten.
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2>Was kostet {service.title}? — Transparente Preise</h2>
                    <p>
                      Wir glauben an faire und klare Tarife ohne versteckte Kosten im Nachhinein. Da wir direkt von unseren voll ausgestatteten mobilen Servicebussen aus arbeiten, sparen Sie bei uns bis zu 50% gegenüber dem offiziellen Markenvertragshändler — und Sie müssen keine teuren Abschleppkosten zahlen!
                    </p>
                    <div className={styles.tableWrapper}>
                      <table className={styles.pricingTable}>
                        <thead>
                          <tr>
                            {pricingHeaders.map((h, i) => (
                              <th key={i}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {pricingRows.map((row, idx) => (
                            <tr key={idx}>
                              <td>{row[0]}</td>
                              <td>{row[1]}</td>
                              <td><strong>{row[2]}</strong></td>
                              <td>{row[3]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.callout}>
                      <strong>Transparenz vorab:</strong> Der genaue Preis ist abhängig von Automarke, Modell, Baujahr und Schlüsseltyp. Nehmen Sie direkt per Telefon oder WhatsApp Kontakt auf und Sie erhalten von uns sofort ein festes Preisangebot ohne spätere Überraschungen.
                    </div>
                  </div>
                )}

                {/* Section 2.5: SEO Image & Expert Description */}
                <div>
                  <h2>Professioneller mobiler Service — Direkt vor Ort</h2>
                  
                  {slug === 'auto-ohne-schluessel-oeffnen' ? (
                    <img 
                      src="/images/seo/auto_tuer_oeffnen_schluesseldienst_stuttgart_schadensfrei.webp" 
                      alt="Autotür schadensfrei vom Monteur öffnen lassen" 
                      style={{ width: '100%', borderRadius: '12px', margin: '1.25rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', objectFit: 'cover', aspectRatio: '16/9' }}
                    />
                  ) : slug === 'autoschluessel-reparieren' ? (
                    <RealGalleryShowcase 
                      photos={[
                        { src: "/images/seo/autoschluessel-reparieren-werkstatt-stuttgart.webp", alt: "SMD-Löten von Mikroschaltern und Tasten unter dem Mikroskop", label: "Schlüssel Reparatur" },
                        { src: "/images/seo/autoschluessel-reparieren-inventar-sindelfingen.webp", alt: "Vorrat an OEM-Gehäusen und Ersatzschlüssel-Teilen", label: "Gehäuseersatz" },
                        { src: "/images/seo/autoschluessel-reparieren-ersatzteile-boeblingen.webp", alt: "Ersatzschlüssel-Platinen, Transponder und Spulen", label: "Transponder & Spulen" },
                        { src: "/images/seo/autoschluessel-reparieren-service-ludwigsburg.webp", alt: "Monteur repariert Schlüssel vor Ort", label: "Mobiler Service" }
                      ]}
                    />
                  ) : slug === 'alle-schluessel-verloren-auto' ? (
                    <img 
                      src="/images/seo/alle-schluessel-verloren-auto-hero.jpg" 
                      alt="Professionelle Programmierung eines Autoschlüssels vor Ort" 
                      style={{ width: '100%', height: 'auto', borderRadius: '12px', margin: '1.25rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                    />
                  ) : slug === 'zuendschloss-auto-wechseln' ? (
                    <RealGalleryShowcase 
                      photos={[
                        { src: "/images/seo/zuendschloss-auto-wechseln-werkstatt-stuttgart.webp", alt: "Demontage und Reparatur eines defekten mechanischen Zylinders", label: "Zylinder Reparatur" },
                        { src: "/images/seo/zuendschloss-auto-wechseln-mobil-sindelfingen.webp", alt: "Blockiertes Zündschloss vor Ort repariert", label: "Zündschloss Service" }
                      ]}
                    />
                  ) : serviceImages.length > 0 ? (
                    <RealGalleryShowcase 
                      photos={serviceImages.map((src) => ({
                        src: src,
                        alt: `${service.title} durch FC-KEY mobilen Service - Impression`
                      }))}
                    />
                  ) : (
                    <img 
                      src="/fc-key-schluesselnachmachen-stuttgart.webp" 
                      alt={`Professioneller mobiler Service für ${service.title.toLowerCase()} - direkt vor Ort und 100% schadensfrei`} 
                      style={{ width: '100%', borderRadius: '12px', margin: '1.25rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', objectFit: 'cover', aspectRatio: '16/9' }}
                    />
                  )}
                  <p>
                    Wenn Sie mit einem Problem bei der Autoverriegelung oder einem kaputten Schlüssel konfrontiert werden, ist eine schnelle und fachgerechte Lösung von entscheidender Bedeutung. Unsere mobilen Servicebusse fungieren als rollende Hightech-Werkstätten. Sie sind mit denselben fortschrittlichen Diagnosegeräten und Schlüsselfräsmaschinen ausgestattet wie die offiziellen Markenwerkstätten. Daher müssen Sie Ihr Fahrzeug nicht abschleppen lassen; wir führen den kompletten Service direkt auf Ihrer eigenen Einfahrt, an Ihrem Arbeitsplatz oder an der Autobahn aus.
                  </p>
                  <p>
                    Unsere Arbeitsweise basiert auf Schnelligkeit, handwerklichem Können und Zuverlässigkeit. Wo eine Werkstatt oft mehrere Arbeitstage bis hin zu Wochen Lieferzeit für die Bestellung und das Einlernen eines neuen Autoschlüssels oder Zündschlosses hat, erledigen wir dies in fast allen Fällen noch am selben Tag. Wir lesen die Sicherheitscodes über den OBD2-Diagnoseport aus, fräsen den Schlüsselbart mit Laserpräzision und programmieren die Wegfahrsperre (Transponder) direkt im Motorsteuergerät Ihres Autos.
                  </p>
                </div>




                {/* Section 5.5: Comprehensive Dutch SEO Guide */}
                <div className="seo-article-block" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                  <h2>Alles über {service.title}: Mobiler Service, Technik und Versicherung</h2>
                  <p>
                    Wenn Sie Hilfe bei <strong>{service.title.toLowerCase()}</strong> benötigen, möchten Sie nicht von langen Wartezeiten oder teuren Abschleppdiensten herkömmlicher Werkstätten abhängig sein. Unsere zertifizierten mobilen Schlüsseldienste kommen 24 Stunden am Tag, 7 Tage die Woche direkt zu Ihrem Auto im Großraum Stuttgart. Egal, ob Sie zu Hause in der Einfahrt stehen, bei der Arbeit oder am Straßenrand gestrandet sind: Innerhalb von durchschnittlich 30 Minuten sind wir vor Ort.
                  </p>
                  <h3>Fortschrittliche Ausrüstung &amp; 100% Schadensfrei Garantie</h3>
                  <p>
                    Wir arbeiten ausschließlich mit Hightech-Diagnosegeräten und originalen Händler-Tokens. Zum Öffnen von Autotüren verwenden wir spezielle Lishi 2-in-1 Lock-Decoder, mit denen wir das Schloss schadensfrei über den Zylinder öffnen. Muss ein neuer Schlüssel angelernt werden? Über den OBD2-Diagnoseport koppeln wir den neuen Transponderchip oder Keyless Go Smart Key direkt an die Wegfahrsperre Ihres Autos.
                  </p>
                  <h3>Kosten sparen gegenüber dem Händler & 12 Monate Garantie</h3>
                  <p>
                    Da wir keine teuren Ausstellungsräume oder Logistikketten unterhalten, sind Sie bei uns durchschnittlich <strong>50% günstiger dran</strong> als beim offiziellen Vertragshändler. Ein Ersatzschlüssel kostet bei uns 149€ bis 299€. Wenn "alle Schlüssel verloren" sind, zahlen Sie 249€ bis 500€ (inklusive Programmierung). Außerdem kommen wir zu Ihnen vor Ort, Sie zahlen also <strong>keine Abschleppkosten</strong>! Sie erhalten standardmäßig 12 Monate schriftliche Garantie auf all unsere gelieferten Schlüssel und Reparaturen.
                  </p>
                </div>

                {/* Section 6: FAQ Accordion */}
                <div>
                  <h2>Häufig gestellte Fragen zu {service.title}</h2>
                  {service.faq.map((f, i) => (
                    <details key={i} className={styles.faqItem}>
                      <summary className={styles.faqQuestion}>
                        {f.q}
                        <span className={styles.faqChevron}>+</span>
                      </summary>
                      <p className={styles.faqAnswer}>
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>

              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Sofortige Hilfe benötigt?</h3>
                  <p>Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir sind 24/7 erreichbar und durchschnittlich innerhalb von {SITE_CONFIG.responseTime} bei Ihnen vor Ort.</p>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.sidePhone} id={`svc-sidebar-${slug}-phone`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Anrufen: {SITE_CONFIG.phone}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.sideWa} id={`svc-sidebar-${slug}-wa`}>WhatsApp Direkt</a>
                  <div className={styles.sideList}>
                    {['Keine Abschleppkosten', 'Festpreis vorab', 'Rechnung für Versicherung', '12 Monate Garantie', '24/7 verfügbar'].map(item => (
                      <div key={item} className={styles.sideListItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" style={{ color: '#22c55e', flexShrink: 0 }} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.ratingCard}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <p className={styles.ratingText}>&ldquo;Blitzschnell geholfen! In 25 Minuten stand der Monteur da und die Tür war in 3 Minuten schadensfrei offen.&rdquo;</p>
                  <span className={styles.ratingMeta}>Mark W. — BMW 5er, Stuttgart</span>
                  <span className={styles.ratingCount}>{SITE_CONFIG.reviewCount} Google-Bewertungen · {SITE_CONFIG.rating}/5</span>
                </div>
              </aside>

            </div> {/* closes contentGrid */}
          </div>
        </section>

        <BrandsLogoGrid
          title={`Für welche Marken bieten wir ${service.title} an?`}
          subtitle="Unsere Programmiergeräte und Lishi-Öffnungswerkzeuge unterstützen über 95% aller Automarken auf deutschen Straßen. Wir sind Spezialisten unter anderem für:"
        />

        <ServiceCoverageMap />

        <section className={styles.section} style={{ paddingTop: '4rem' }}>
          <div className={styles.container}>

            {/* Bottom CTA block */}
            <div className={styles.ctaBlock}>
              <h2>{service.title} benötigt? Rufen Sie unseren mobilen Notdienst an</h2>
              <p>Keine langen Wartezeiten, keine teuren Abschleppkosten zur Werkstatt. Wir sind 24 Stunden am Tag, 7 Tage die Woche verfügbar und kommen direkt zu Ihnen.</p>
              <div className={styles.ctaBtnsGrid}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPrimary} id={`svc-cta-${slug}-phone`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                  Anrufen: {SITE_CONFIG.phone}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp} id={`svc-cta-${slug}-wa`}>WhatsApp Direkt</a>
              </div>
              <div className={styles.microText}>
                <span>✓ Direkter Kontakt zum Monteur</span>
                <span>✓ Festpreis vorab, keine Überraschungen</span>
                <span>✓ 100% Schadensfreie Garantie</span>
              </div>
            </div>

            {/* ── RELATED BLOGS SECTION ────────────────────────────────── */}
            {(() => {
              const relatedPosts = getRelatedBlogPosts(slug);
              if (!relatedPosts || relatedPosts.length === 0) return null;
              return (
                <section className={styles.relatedBlogsSection} style={{ borderBottom: 'none', paddingBottom: 0 }}>
                  <div className={styles.relatedBlogsContainer} style={{ padding: 0 }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
                      VERWANDTES WISSEN &amp; RATGEBER
                    </p>
                    <h2 className={styles.relatedBlogsTitle}>
                      Nützliche Artikel zu {service.title}
                    </h2>
                    <div className={styles.relatedBlogsGrid}>
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className={styles.blogPostCard}
                          id={`related-blog-${post.slug}`}
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
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem', textAlign: 'center' }}>
                KUNDENBEWERTUNGEN
              </p>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2rem 0', textAlign: 'center' }}>
                Was unsere Kunden über {service.title} sagen
              </h2>
              <div className={styles.ratingBig}>
                <span className={styles.ratingNum}>{SITE_CONFIG.rating}</span>
                <div>
                  <div className={styles.ratingStarsReview}>★★★★★</div>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                    {SITE_CONFIG.reviewCount} Verifizierte Google-Bewertungen · {SITE_CONFIG.rating}/5
                  </span>
                </div>
              </div>
              <div className={styles.reviewGrid}>
                {generateContextualReviews(service.title, 'service').map((review, i) => (
                  <GoogleReviewCard key={i} review={review} />
                ))}
              </div>
            </section>

            {/* ── COMPREHENSIVE SERVICE TECHNICAL SEO GUIDE ── */}
            <div className="seo-article-block" style={{ marginTop: '3.5rem', marginBottom: '3.5rem', background: '#ffffff', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--gray-200)' }}>
              <h2>Alles über {service.title} durch unsere zertifizierten Schlüsseldienste</h2>
              <p>
                Die fachmännische Ausführung von <strong>{service.title.toLowerCase()}</strong> erfordert Präzision, Spezialwerkzeuge und aktuelles Wissen über die Fahrzeugelektronik. Bei modernen Personen- und Nutzfahrzeugen ist jedes Teil — vom Zünd- und Türschloss bis hin zur Fernbedienung und zum Transponderchip — nahtlos mit dem zentralen Bordcomputer (ECU, BSI oder CAS-Modul) verbunden. Wo herkömmliche Werkstätten oder allgemeine Pannendienste oft nicht über die richtigen Spezialgeräte verfügen, ist <strong>{SITE_CONFIG.name}</strong> gerüstet, um direkt vor Ort einzugreifen.
              </p>
              <h3>Warum professionelle mobile Hilfe unerlässlich ist</h3>
              <p>
                Wenn Sie mit einer Aussperrung, einem kaputten Schlüssel oder einer Störung der Wegfahrsperre konfrontiert sind, möchten Sie vermeiden, dass Ihr Autolack, Ihre Türen oder Ihre Elektronik beschädigt werden. Unsere Monteure arbeiten mit schadensfreien Lishi 2-in-1 Lockdecodern, OEM-zertifizierten Diagnosecomputern und Hightech-CNC-Lasermaschinen. Wir lösen das Problem direkt vor Ihrer Tür — egal ob Sie zu Hause sind, bei der Arbeit stehen oder unterwegs am Straßenrand.
              </p>
              <h3>Transparente All-In-Preise, Versicherung und 12 Monate Garantie</h3>
              <p>
                Wir vereinbaren im Vorfeld immer einen festen und klaren Preis, sodass Sie nie mit unerwarteten Kosten oder hohen Abschleppgebühren zum Händler konfrontiert werden. Darüber hinaus erhalten Sie auf alle unsere gelieferten Schlüssel, Teile und Reparaturen standardmäßig 12 Monate schriftliche Garantie. Viele Versicherungen erstatten unsere Rechnung im Rahmen Ihrer Teilkasko- oder Vollkaskoversicherung.
              </p>
            </div>

            {/* ── INTERNAL LINKING NETWORK SECTION ── */}
            <div className="seo-hub-box" style={{ marginTop: '4rem' }}>
              <div className="seo-hub-grid">
                <div>
                  <div className="seo-hub-title">Andere Leistungen</div>
                  <div className="seo-hub-col">
                    {LEISTUNGEN.filter(s => s.slug !== service.slug).map(s => (
                      <Link key={s.slug} href={`/leistungen/${s.slug}`} className="seo-hub-link">
                        {`${s.title} →`}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="seo-hub-title">Automarken für {service.title}</div>
                  <div className="seo-hub-col">
                    {BRANDS.map(b => (
                      <Link key={b.slug} href={`/marken/${b.nameSlug.toLowerCase()}-autoschluessel-nachmachen`} className="seo-hub-link">
                        {`${b.name} Autoschlüssel nachmachen →`}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="seo-hub-title">{service.title} in der Region</div>
                  <div className="seo-hub-col">
                    <Link href="/standorte" className="seo-hub-link" style={{ fontWeight: 'bold' }}>
                      Alle Städte ansehen →
                    </Link>
                    {p1Cities.map(c => (
                      <Link key={c.slug} href={`/standorte/${c.slug}`} className="seo-hub-link">
                        {`${service.title} ${c.city} →`}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
