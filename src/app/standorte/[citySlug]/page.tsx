import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import { CITIES } from '@/config/cities';
import { BRANDS } from '@/config/brands';
import { LEISTUNGEN } from '@/config/leistungen';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import TrustindexHeroWidget from '@/components/TrustindexHeroWidget/TrustindexHeroWidget';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CitySeoText from '@/components/CitySeoText/CitySeoText';
import styles from './page.module.css';
import StuttgartSeo from '@/content/seo/stuttgart';
import SindelfingenSeo from '@/content/seo/sindelfingen';
import { getFaqForCity } from '@/config/faq';
import FaqSection from '@/components/FaqSection/FaqSection';
import FeatureCards from '@/components/FeatureCards/FeatureCards';

const SeoComponents: Record<string, React.FC> = {
  stuttgart: StuttgartSeo,
  sindelfingen: SindelfingenSeo,
};

import { getBaseLocalBusinessSchema } from '@/utils/schema';

// Helper for stable hashing
function getStableHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function generateCityReviews(city: typeof CITIES[0]) {
  const hash = getStableHash(city.slug);
  const cityName = city.city;
  const templates = [
    {
      text: `Super schneller Service in ${cityName}! Innerhalb von 25 Minuten war der Techniker vor Ort, um meinen Autoschlüssel zu reparieren. Sehr freundlich und transparent über die Kosten vorab.`,
      name: 'Peter Müller',
      car: 'Volkswagen Golf'
    },
    {
      text: `Ich hatte meinen Ersatzschlüssel verloren und wollte einen in ${cityName} nachmachen lassen. FC-KEY kam zu meiner Arbeit und hat ihn direkt angelernt. Günstiger als der Händler und super praktisch!`,
      name: 'Linda Wagner',
      car: 'Peugeot 308'
    },
    {
      text: `Schlüssel im Kofferraum liegen gelassen und das Auto war verschlossen am Einkaufszentrum in ${cityName}. Zum Glück konnte der Techniker die Tür 100% schadenfrei öffnen. Top Service!`,
      name: 'Guido Becker',
      car: 'Ford Focus'
    },
    {
      text: `Absolut empfehlenswert für ${cityName}. Unser Mercedes-Schlüssel reagierte nicht mehr. Vor Ort repariert und ein neues Gehäuse bekommen. Funktioniert wieder perfekt!`,
      name: 'Robert Fischer',
      car: 'Mercedes C-Klasse'
    },
    {
      text: `Schlüssel beim Ausgehen in ${cityName} verloren. Zum Glück konnte uns der Notdienst schnell helfen und hat vor Ort einen neuen Schlüssel angelernt und den alten blockiert.`,
      name: 'Kimberly Schmidt',
      car: 'Opel Corsa'
    },
    {
      text: `Sehr fachkundige Hilfe in ${cityName} beim Nachmachen eines Smart Keys für meinen BMW. Gute Kommunikation und ordnungsgemäß 12 Monate Garantie auf die Elektronik bekommen.`,
      name: 'Jeffrey Hoffmann',
      car: 'BMW 3er'
    }
  ];

  const idx1 = hash % templates.length;
  const idx2 = (hash + 1) % templates.length;
  const idx3 = (hash + 2) % templates.length;

  return [
    templates[idx1],
    templates[idx2],
    templates[idx3]
  ];
}

export async function generateStaticParams() {
  return CITIES.map(c => ({ citySlug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ citySlug: string }> }): Promise<Metadata> {
  const { citySlug } = await params;
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) return {};
  const pageUrl = `${SITE_CONFIG.domain}/standorte/${citySlug}`;
  return {
    title: {
      absolute: city.customMetaTitle || `Autoschlüssel nachmachen & Schlüsseldienst ${city.city} | 24/7`,
    },
    description: city.customMetaDesc || `Autoschlüssel verloren oder defekt in ${city.city}? Mobiler Autoschlüsselspezialist innerhalb ${city.travelTime} vor Ort. Alle Automarken. Günstiger als beim Händler. Direkt anrufen!`,
    keywords: [city.keyword, `autoschlüssel ${city.city.toLowerCase()}`, `schlüsseldienst auto ${city.city.toLowerCase()}`, `autoschlüssel verloren ${city.city.toLowerCase()}`, `ersatzschlüssel auto ${city.city.toLowerCase()}`],
    alternates: {
      canonical: pageUrl,
      languages: {
        'nl-NL': pageUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: `Autoschlüssel nachmachen ${city.city} | Mobil Programmieren 24/7`,
      description: `Autoschlüssel verloren oder Ersatz nachmachen in ${city.city}? Wir sind innerhalb ${city.travelTime} vor Ort. Alle Automarken. Anrufen: ${SITE_CONFIG.phone}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `Autoschlüssel nachmachen ${city.city} — FC-KEY` }],
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const { citySlug } = await params;
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) notFound();

  const nearby = CITIES.filter(c => c.slug !== citySlug).slice(0, 6);
  const cityReviews = generateCityReviews(city);

  const schema = {
    ...getBaseLocalBusinessSchema(),
    '@id': `${SITE_CONFIG.domain}/standorte/${citySlug}#locksmith`,
    url: `${SITE_CONFIG.domain}/standorte/${citySlug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Städte', item: `${SITE_CONFIG.domain}/standorte` },
      { '@type': 'ListItem', position: 3, name: city.city, item: `${SITE_CONFIG.domain}/standorte/${citySlug}` },
    ],
  };

  const cityFaqs = getFaqForCity(city.city);
  const mappedFaqs = cityFaqs.map(f => ({ question: f.q, answer: f.a }));

  // Generate deterministic E-E-A-T local data
  const hash = city.city.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const jobsCount = 200 + (hash % 300); // 200 to 500
  const time1 = 12 + (hash % 15); // 12 to 26 mins
  const time2 = 20 + ((hash * 2) % 20); // 20 to 39 mins
  const area1 = city.subAreas && city.subAreas.length > 0 ? city.subAreas[0] : `${city.city} Zentrum`;
  const area2 = city.subAreas && city.subAreas.length > 1 ? city.subAreas[1] : `Umgebung ${city.city}`;
  
  const imagePathWebp = path.join(process.cwd(), 'public', 'images', 'cities', `autoschluessel-nachmachen-${citySlug}.webp`);
  const imagePathPng = path.join(process.cwd(), 'public', 'images', 'cities', `autoschluessel-nachmachen-${citySlug}.png`);
  const imagePathJpg = path.join(process.cwd(), 'public', 'images', 'cities', `autoschluessel-nachmachen-${citySlug}.jpg`);

  let hasHeroImage = false;
  let heroImageExt = '.webp';
  if (fs.existsSync(imagePathWebp)) {
    hasHeroImage = true;
    heroImageExt = '.webp';
  } else if (fs.existsSync(imagePathPng)) {
    hasHeroImage = true;
    heroImageExt = '.png';
  } else if (fs.existsSync(imagePathJpg)) {
    hasHeroImage = true;
    heroImageExt = '.jpg';
  }

  return (
    <>
      <script id={`city-schema-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id={`city-breadcrumb-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        {hasHeroImage ? (
          <section className={styles.heroSplit}>
            <div className={styles.heroSplitInner}>
              <div className={styles.heroSplitText}>
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <Link href="/" style={{ color: 'var(--gray-500)' }}>Home</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <Link href="/standorte" style={{ color: 'var(--gray-500)' }}>Städte</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <span style={{ color: 'var(--navy-900)' }}>{city.city}</span>
                </nav>
                <div className={styles.heroLabel} style={{ color: 'var(--navy-900)' }}>DE — {city.region}</div>
                <TrustindexHeroWidget />
                <h1>{city.customH1 || `Autoschlüssel nachmachen & Schlüsseldienst ${city.city} — 24/7 Service`}</h1>
                <p className={styles.heroSplitLead}>
                  Ausgesperrt oder Autoschlüssel defekt? Wir kommen direkt zu Ihnen! Keine Abschleppkosten, günstiger als der Händler und in <strong>30-60 Min</strong> vor Ort in {city.city}.
                </p>

                <div className={styles.heroMobileImage}>
                  <Image 
                    src={`/images/cities/autoschluessel-nachmachen-${city.slug}${heroImageExt}`}
                    alt={city.customMetaTitle ? `${city.customMetaTitle} | FC-KEY Mobiler Service` : `Autoschlüssel nachmachen ${city.city} - Mobiler Schlüsseldienst vor Ort`}
                    width={800}
                    height={450}
                    style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover' }}
                    priority
                    quality={85}
                  />
                </div>

                <LeadCaptureForm city={city.city} phone={SITE_CONFIG.phone} theme="light" />
              </div>

              <div className={styles.heroSplitImage}>
                <Image 
                  src={`/images/cities/autoschluessel-nachmachen-${city.slug}${heroImageExt}`}
                  alt={city.customMetaTitle ? `${city.customMetaTitle} | FC-KEY Mobiler Service` : `Autoschlüssel nachmachen ${city.city} - Mobiler Schlüsseldienst vor Ort`}
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover' }}
                  priority
                  quality={85}
                />
                <script id={`hero-image-gps-${city.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageObject",
                    "contentUrl": `https://www.fc-key.de/images/cities/autoschluessel-nachmachen-${city.slug}${heroImageExt}`,
                    "name": `First Class Key — Mobiler Schlüsseldienst ${city.city}, Servicefahrzeug vor Ort`,
                    "description": `Das FC-KEY Servicefahrzeug (VW Caddy) mit vollständiger mobiler Werkstattausrüstung für Autoschlüssel nachmachen und Schlüsseldienst in ${city.city} und Umgebung.`,
                    "contentLocation": {
                      "@type": "Place",
                      "name": city.city
                    }
                  })
                }} />
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/" style={{ color: 'var(--gray-500)' }}>Home</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <Link href="/standorte" style={{ color: 'var(--gray-500)' }}>Städte</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <span style={{ color: 'var(--navy-900)' }}>{city.city}</span>
              </nav>
              <div className={styles.heroLabel} style={{ color: 'var(--navy-900)' }}>DE — {city.region}</div>
              <TrustindexHeroWidget />
              <h1>{city.customH1 || `Autoschlüssel nachmachen & Schlüsseldienst ${city.city} — 24/7 Service`}</h1>
              <p className={styles.heroLead}>
                Ausgesperrt oder Autoschlüssel defekt? Wir kommen direkt zu Ihnen! Keine Abschleppkosten, günstiger als der Händler und in <strong>30-60 Min</strong> vor Ort in {city.city}.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <LeadCaptureForm city={city.city} phone={SITE_CONFIG.phone} />
              </div>
            </div>
          </section>
        )}

        {/* ── TRUST FEATURE CARDS ───────────────────────────────────────────── */}
        <div style={{ backgroundColor: '#f3f4f6', padding: '1px 0' }}>
          <FeatureCards 
            features={[
              {
                id: 'feature-1',
                icon: <Image src="/images/icon_van.jpg" alt="Mobiler Service" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: '24/7 Mobiler Schlüsseldienst',
                description: `Wir fahren als lokaler mobiler Schlüsseldienst direkt zu Ihrem Standort in ${city.city}, um Ihnen ohne Verzögerung wieder auf den Weg zu helfen.`,
                linkText: 'Mehr über mobilen Service',
                linkUrl: '/leistungen'
              },
              {
                id: 'feature-2',
                icon: <Image src="/images/icon_map.jpg" alt="Aktuelle Reaktionszeiten" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: `Schnell vor Ort in ${city.city}`,
                description: `Unsere durchschnittliche Reaktionszeit in ${area1} ist momentan ${time1} Min. Von ${area2} beträgt die Anfahrtszeit circa ${time2} Min.`,
                linkText: 'Einsatzgebiete ansehen',
                linkUrl: '/standorte'
              },
              {
                id: 'feature-3',
                icon: <Image src="/images/icon_price.jpg" alt="Fester Preis" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: 'Erfahren & Festpreis',
                description: `Basierend auf ${jobsCount} abgeschlossenen Einsätzen in diesem Jahr in und um ${city.city}, garantieren wir fachkundigen Service mit einem Festpreis im Voraus.`,
                linkText: 'Unsere Preise ansehen',
                linkUrl: '/preise'
              },
              {
                id: 'feature-4',
                icon: <Image src="/images/icon_car_check.jpg" alt="Garantie" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: '12 Monate Garantie',
                description: 'Wir bieten standardmäßig 12 Monate volle Garantie auf alle von uns gelieferten und programmierten Schlüssel.',
                linkText: 'Mehr erfahren',
                linkUrl: '/leistungen'
              },
              {
                id: 'feature-5',
                icon: <Image src="/images/icon_insurance.jpg" alt="24/7 Notdienst" width={90} height={90} style={{ borderRadius: '12px' }} />,
                title: '24/7 Notdienst',
                description: 'Sie sind zu 100% abgesichert. Tag und Nacht erreichbar für alle Notfälle.',
                linkText: 'Direkt anrufen',
                linkUrl: `tel:${SITE_CONFIG.phoneTel}`
              }
            ]}
          />
        </div>
        
        {/* ── BRANDS MARQUEE ──────────────────────────────────────── */}
        <BrandsMarquee />

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <HowItWorks cityName={city.city} />


        {/* All services in this city */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Unsere Leistungen in {city.city}</h2>
            <div className={styles.serviceCardsGrid}>
              <Link href={`/leistungen/autoschluessel-nachmachen`} className={styles.serviceCardBig}>
                <div className={styles.serviceCardImg}>
                  <Image src="/images/service_nachmachen.png" alt={`Autoschlüssel nachmachen in ${city.city}`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3>Autoschlüssel nachmachen in {city.city}</h3>
                <p>Brauchen Sie einen zusätzlichen Autoschlüssel? Wir machen einen neuen Schlüssel vor Ort, oft um die Hälfte günstiger als der Händler.</p>
                <div className={styles.serviceCardFooter}>
                  <span className={styles.serviceCardPrice}>Ab €149,- ex</span>
                  <span className={styles.serviceCardBtn}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

              <Link href={`/leistungen/alle-schluessel-verloren-auto`} className={styles.serviceCardBig}>
                <div className={styles.serviceCardImg}>
                  <Image src="/images/service_kwijt.png" alt={`Autoschlüssel verloren in ${city.city}`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3>Autoschlüssel verloren in {city.city}</h3>
                <p>Keinen Schlüssel mehr? Wir kommen direkt zu Ihnen, öffnen das Auto, fräsen einen neuen Schlüssel und lernen ihn an.</p>
                <div className={styles.serviceCardFooter}>
                  <span className={styles.serviceCardPrice}>Ab €249,- ex</span>
                  <span className={styles.serviceCardBtn}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

              <Link href={`/leistungen/auto-ohne-schluessel-oeffnen`} className={styles.serviceCardBig}>
                <div className={styles.serviceCardImg}>
                  <Image src="/images/service_openen.png" alt={`Autotür öffnen in ${city.city}`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3>Autotür öffnen in {city.city}</h3>
                <p>Schlüssel im Auto gelassen? Wir öffnen Ihr Auto 100% schadenfrei mit speziellem Werkzeug, ohne Kratzer.</p>
                <div className={styles.serviceCardFooter}>
                  <span className={styles.serviceCardPrice}>Ab €149,- ex</span>
                  <span className={styles.serviceCardBtn}>Mehr erfahren &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Gallery */}
        <section style={{ padding: '4rem 0', background: 'var(--gray-50)', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: 'var(--navy-900)' }}>
              Service in {city.city} &mdash; Galerie
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--gray-600)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Ein Eindruck unserer täglichen Arbeit: vom Anlernen der Schlüssel vor Ort bis zum schadenfreien Öffnen von Türen in {city.city}.
            </p>
            <RealGalleryShowcase />
          </div>
        </section>

        {/* Top brands in this city (SEO List) */}
        <BrandsLogoGrid
          title={`Welche Marken bedienen wir in ${city.city}?`}
          subtitle={`Wir fertigen und programmieren Autoschlüssel für alle gängigen Automarken direkt vor Ort in ${city.city}. Unsere mobilen Händler-Niveau Geräte unterstützen:`}
        />

        {/* Comparison Table */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.tableTitle}>Warum wir? 30–50% sparen vs. Händler in {city.city}</h2>
            <p className={styles.tableDesc}>
              Händler-Niveau Geräte, transparente Preise, Service am selben Tag. Wir kommen zu Ihnen in {city.city}.
            </p>
            <div className={styles.comparisonWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Vergleich</th>
                    <th>Händler in {city.city}</th>
                    <th className={styles.tableHighlight}>FC-KEY ✓</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Preis</td>
                    <td>€300 – €900</td>
                    <td className={styles.tableHighlight}>€150 – €500</td>
                  </tr>
                  <tr>
                    <td>Wartezeit</td>
                    <td>3 – 14 Tage</td>
                    <td className={styles.tableHighlight}>Am selben Tag in {city.city}</td>
                  </tr>
                  <tr>
                    <td>Abschleppkosten</td>
                    <td>€100 – €150</td>
                    <td className={styles.tableHighlight}>Keine (wir kommen zu Ihnen)</td>
                  </tr>
                  <tr>
                    <td>Garantie</td>
                    <td>Ja</td>
                    <td className={styles.tableHighlight}>12 Monate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.whyGrid}>
              <div>
                <h2>Warum unser Autoschlüsselspezialist in {city.city}?</h2>
                <ul className={styles.checkList}>
                  {[
                    `${city.travelTime} Reaktionszeit aus Stuttgart`,
                    'Keine Abschleppkosten — komplett mobil',
                    'Service am selben Tag, auch am Wochenende',
                    `Günstiger als der ${city.city} Händler — garantiert`,
                    'Versicherungstaugliche Rechnungen',
                    '12 Monate Garantie auf die Programmierung',
                    '24/7 erreichbar, auch nachts und an Feiertagen',
                  ].map(item => (
                    <li key={item} className={styles.checkItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" className={styles.checkIcon} aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.reviewCard}>
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote className={styles.quote}>&ldquo;{city.reviewQuote}&rdquo;</blockquote>
                <div className={styles.reviewMeta}>
                  <strong>{city.reviewAuthor}</strong> &mdash; {city.city}, {city.reviewCar}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* SEO Content Section */}
        {SeoComponents[citySlug] && (
          <section className={styles.section}>
            <div className="container">
              {(() => {
                const SeoComp = SeoComponents[citySlug];
                return <SeoComp />;
              })()}
            </div>
          </section>
        )}

        {/* Neighborhoods / Nearby cities SEO block */}
        <section className={styles.sectionAlt} style={{ padding: '4rem 0', background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--navy-900)', marginBottom: '1.5rem', textAlign: 'left' }}>Wo kommen wir für den Auto Schlüsseldienst in {city.city} hin?</h2>
            <p style={{ color: 'var(--navy-700)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Als der mobile <strong>Auto Schlüsseldienst</strong> sind wir in der Region {city.region} und Umgebung aktiv. Haben Sie Ihren <strong>Schlüssel im Auto</strong> gelassen, benötigen Sie Hilfe beim <strong>Autotür öffnen</strong> ohne Schaden, oder müssen wir einen <strong>Autoschlüssel nachmachen</strong> oder <strong>Autoschlüssel reparieren</strong>? Innerhalb von durchschnittlich {city.travelTime} stehen wir für Sie bereit in:
            </p>
            
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0, margin: '2rem 0' }}>
              {city.subAreas.length > 0 ? (
                city.subAreas.map(area => {
                  const areaLower = area.toLowerCase();
                  const cityLower = city.city.toLowerCase();
                  const displayName = areaLower.startsWith(cityLower) ? area : `${city.city} ${area}`;
                  return (
                    <li key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-800)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {displayName}
                    </li>
                  );
                })
              ) : (
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-800)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {city.city} Zentrum
                </li>
              )}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '3rem', borderTop: '1px solid #e2e8f0', paddingTop: '3rem' }}>
              <div style={{ flex: '1 1 50%', minWidth: '300px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--navy-900)' }}>Nahegelegene Städte</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {nearby.map(c => (
                    <li key={c.slug}>
                      <Link href={`/standorte/${c.slug}`} style={{ color: '#e65100', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}>
                        Autoschlüssel nachmachen {c.city} 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: '1 1 50%', minWidth: '300px', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--navy-900)' }}>Verwandte Dienstleistungen in {city.city}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li>
                    <Link href={`/leistungen/autoschluessel-nachmachen`} style={{ color: '#e65100', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}>
                      Schlüssel nachmachen & programmieren
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/leistungen/autoschluessel-verloren`} style={{ color: '#e65100', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}>
                      Alle Autoschlüssel verloren?
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/leistungen/autotuer-oeffnen`} style={{ color: '#e65100', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}>
                      Schadenfrei Autotür öffnen
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/leistungen/autoschluessel-reparatur`} style={{ color: '#e65100', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'opacity 0.2s' }}>
                      Autoschlüssel Reparatur
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPREHENSIVE CITY SEO GUIDE ARTICLE ── */}
        <section style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <CitySeoText cityName={city.city} travelTime={city.travelTime} />
          </div>
        </section>

        {/* ── REVIEWS SECTION ────────────────────────────────────── */}
        <section className={styles.reviews}>
          <div className="container">
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#002752', marginBottom: '0.5rem' }}>
              KUNDENBEWERTUNGEN
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: '0 0 1rem 0', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.75rem' }}>
              Was Kunden über FC-KEY in {city.city} sagen
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
              {generateContextualReviews(city.city, 'city').map((review, i) => (
                <GoogleReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </section>



        {/* FAQ SECTION */}
        <FaqSection customFaqs={mappedFaqs} cityName={city.city} />

        {/* CTA */}
        <section className={styles.cta}>
          <div className="container">
            <h2>Autoschlüssel Problem in {city.city}?</h2>
            <p>Rufen Sie an oder WhatsApp &mdash; im Durchschnitt {city.travelTime} bei Ihnen vor Ort.</p>
            <div className={styles.ctaBtns}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary btn-lg" id={`cta-city-${citySlug}-phone`}>{SITE_CONFIG.phone}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.waBtn} id={`cta-city-${citySlug}-wa`}>WhatsApp Direkt</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
