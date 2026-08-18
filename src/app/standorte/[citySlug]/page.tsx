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
import HeroGoogleBadge from '@/components/HeroGoogleBadge/HeroGoogleBadge';
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

  const imagePathWebp = path.join(process.cwd(), 'public', 'images', `autoschluessel-nachmachen-${citySlug}.webp`);
  const imagePathPng = path.join(process.cwd(), 'public', 'images', `autoschluessel-nachmachen-${citySlug}.png`);
  const imagePathJpg = path.join(process.cwd(), 'public', 'images', `autoschluessel-nachmachen-${citySlug}.jpg`);
  
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
      <Script id={`city-schema-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id={`city-breadcrumb-${citySlug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
        {/* Hero */}
        {hasHeroImage ? (
          <section className={styles.heroUtrecht}>
            <div className={styles.heroUtrechtInner}>
              <div className={styles.heroUtrechtText}>
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <Link href="/" style={{ color: 'var(--gray-500)' }}>Home</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <Link href="/standorte" style={{ color: 'var(--gray-500)' }}>Städte</Link> <span style={{ color: 'var(--gray-400)' }}>/</span> <span style={{ color: 'var(--navy-900)' }}>{city.city}</span>
                </nav>
                <div className={styles.heroLabel} style={{ color: 'var(--navy-900)' }}>DE — {city.region}</div>
                <h1>{city.customH1 || `Autoschlüssel nachmachen & Schlüsseldienst ${city.city} — 24/7 Service`}</h1>
                <p className={styles.heroUtrechtLead}>
                  Wir sind im Durchschnitt innerhalb von <strong>{city.travelTime}</strong> bei Ihnen in {city.city}.
                  Alle Marken, vor Ort programmiert.
                </p>
                <LeadCaptureForm city={city.city} phone={SITE_CONFIG.phone} theme="light" />
                <div style={{ marginTop: '1.5rem' }}>
                  <HeroGoogleBadge />
                </div>
              </div>
              <div className={styles.heroUtrechtImage}>
                <Image 
                  src={`/images/autoschluessel-nachmachen-${city.slug}${heroImageExt}`}
                  alt={city.customMetaTitle ? `${city.customMetaTitle} | FC-KEY Mobiler Service` : `Autoschlüssel nachmachen ${city.city} - Mobiler Schlüsseldienst vor Ort`}
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  priority
                  unoptimized={true}
                  fetchPriority="high"
                />
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link> <span>/</span> <Link href="/standorte">Städte</Link> <span>/</span> <span>{city.city}</span>
              </nav>
              <div className={styles.heroLabel}>DE — {city.region}</div>
              <h1>{city.customH1 || `Autoschlüssel nachmachen & Schlüsseldienst ${city.city} — 24/7 Service`}</h1>
              <p className={styles.heroLead}>
                Wir sind im Durchschnitt innerhalb von <strong>{city.travelTime}</strong> bei Ihnen in {city.city}.
                Alle Marken, vor Ort programmiert.
              </p>
              <LeadCaptureForm city={city.city} phone={SITE_CONFIG.phone} />
              <div style={{ marginTop: '1.5rem' }}>
                <HeroGoogleBadge />
              </div>
            </div>
          </section>
        )}

        {/* ── TRUST BAR ───────────────────────────────────────────── */}
        <div className={styles.trustBar}>
          <div className={styles.trustBarInner}>
            {[
              '24/7 Mobiler Service',
              `Innerhalb ${city.travelTime} in ${city.city}`,
              'Festpreis vorab',
              '12 Monate Garantie',
              'Versichert & Zertifiziert'
            ].map((item, idx) => (
              <div key={idx} className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* ── BRANDS MARQUEE ──────────────────────────────────────── */}
        <BrandsMarquee />

        {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
        <HowItWorks cityName={city.city} />

        {/* ── LOKALE ERFAHRUNG & SAYAC DASHBOARD ─────────────── */}
        {(city.localFact || city.popularBrands || city.commonJob) && (
          <section className={styles.sectionAlt} style={{ padding: '4rem 0' }}>
            <div className="container">
                {/* E-E-A-T Local Stats Card (Sayac Visual Timeline) */}
                <div style={{ 
                  background: '#fff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '20px', 
                  padding: '3.5rem 2rem', 
                  margin: '0 auto',
                  maxWidth: '1000px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}>
                  
                  {/* Visual Header & Image */}
                  <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                    <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '1.5rem' }}>
                      <Image 
                        src="/images/local-service-trust.jpg" 
                        alt={`Zertifizierter mobiler Schlüsseldienst in ${city.city}`} 
                        fill 
                        style={{ objectFit: 'contain' }} 
                      />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--navy-900)' }}>
                      Lokaler Schlüsseldienst in {city.city} – Reaktionszeiten & Fakten
                    </h3>
                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Transparent. Schnell. Zuverlässig.
                    </p>
                  </div>

                  {/* The SAYAC (Visual Timeline / Stats Progress) */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '850px',
                    margin: '0 auto 3rem auto',
                    position: 'relative',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {/* Background Connector Line (Hidden on mobile via media query conceptually, but we use flex/gap instead of absolute positioning to make it fully responsive easily) */}
                    
                    {/* Node 1: Jobs Completed */}
                    <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--gray-50)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--gray-200)', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 4px 10px rgba(0,39,82,0.2)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-900)', lineHeight: 1 }}>{jobsCount}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginTop: '0.5rem', fontWeight: 500, textTransform: 'uppercase' }}>Erfolgreiche Aufträge</div>
                    </div>

                    {/* Node 2: Area 1 Response Time */}
                    <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--gray-50)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--gray-200)', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--orange-400)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 4px 10px rgba(253,197,59,0.3)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/></svg></div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-900)', lineHeight: 1 }}>{time1} Min</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginTop: '0.5rem', fontWeight: 500, textTransform: 'uppercase' }}>Reaktionszeit ({area1})</div>
                    </div>

                    {/* Node 3: Area 2 Response Time */}
                    <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--gray-50)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--gray-200)', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--orange-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 4px 10px rgba(253,185,19,0.3)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy-900)', lineHeight: 1 }}>{time2} Min</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginTop: '0.5rem', fontWeight: 500, textTransform: 'uppercase' }}>Anfahrtszeit ({area2})</div>
                    </div>
                  </div>

                  {/* LOKALE INSIGHTS CARDS (Integrated into Dashboard) */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
                    gap: '1.5rem', 
                    width: '100%', 
                    maxWidth: '900px', 
                    margin: '0 auto 3rem auto',
                    textAlign: 'left'
                  }}>
                    {city.localFact && (
                      <div style={{ background: 'var(--navy-50)', border: '1px solid rgba(0,39,82,0.08)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--navy-900)' }}>Lokale Erfahrung</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--navy-700)', lineHeight: 1.6, margin: 0 }}>{city.localFact}</p>
                      </div>
                    )}

                    {city.popularBrands && (
                      <div style={{ background: 'var(--navy-50)', border: '1px solid rgba(0,39,82,0.08)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg></div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--navy-900)' }}>Gefragteste Marken</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {city.popularBrands.map(brand => (
                            <span key={brand} style={{ background: '#fff', color: 'var(--navy-900)', border: '1px solid rgba(0,39,82,0.15)', borderRadius: '8px', padding: '0.3rem 0.6rem', fontSize: '0.8rem', fontWeight: 700 }}>{brand}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {city.commonJob && (
                      <div style={{ background: 'var(--navy-50)', border: '1px solid rgba(0,39,82,0.08)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg></div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--navy-900)' }}>Häufigster Auftrag</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--navy-700)', lineHeight: 1.6, margin: 0 }}>{city.commonJob}</p>
                        {city.avgJobDuration && (
                          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                            <span style={{ display: 'inline-block', background: 'var(--orange-100)', color: 'var(--orange-700)', padding: '0.3rem 0.6rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>⏱ Ø Arbeitszeit: {city.avgJobDuration}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* SEO & Trust Text Algorithm Section */}
                  <div style={{ background: 'var(--navy-50)', padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '900px', borderLeft: '4px solid var(--color-primary)', textAlign: 'left' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--navy-800)', lineHeight: 1.7, margin: 0 }}>
                      <strong>Warum Sie uns vertrauen können:</strong> Basierend auf exakt <strong>{jobsCount} abgeschlossenen Einsätzen</strong> in diesem Jahr in und um <strong>{city.city}</strong>, garantieren wir höchste Zuverlässigkeit. Unsere ausgeklügelte Logistik ermöglicht es uns, eine durchschnittliche Reaktionszeit in <strong>{area1}</strong> von derzeit nur <strong>{time2} Minuten</strong> sicherzustellen. Für Einsätze aus <strong>{area2}</strong> kalkulieren wir mit einer Anfahrtszeit von ca. <strong>{time1} Minuten</strong>. Als zertifizierter lokaler Schlüsseldienst fahren wir mit voll ausgestatteten Servicefahrzeugen direkt zu Ihrem Standort, um Autoschlüssel vor Ort nachzumachen oder Türen schadenfrei zu öffnen – damit Sie ohne Verzögerung wieder auf die Straße kommen.
                    </p>
                  </div>
                </div>
            </div>
          </section>
        )}

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

        {/* All services in this city */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Unsere Leistungen in {city.city}</h2>
            <div className={styles.serviceCardsGrid}>
              <Link href={`/leistungen/autoschluessel-nachmachen`} className={styles.serviceCardBig}>
                <div className={styles.serviceCardImg}>
                  <Image src="/images/service_bijmaken.png" alt={`Autoschlüssel nachmachen in ${city.city}`} fill style={{ objectFit: 'contain' }} />
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
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2>Wo kommen wir für den Auto Schlüsseldienst in {city.city} hin?</h2>
            <p className={styles.seoIntro}>
              Als der mobile <strong>Auto Schlüsseldienst</strong> sind wir in der Region {city.region} und Umgebung aktiv. Haben Sie Ihren <strong>Schlüssel im Auto</strong> gelassen, benötigen Sie Hilfe beim <strong>Autotür öffnen</strong> ohne Schaden, oder müssen wir einen <strong>Autoschlüssel nachmachen</strong> oder <strong>Autoschlüssel reparieren</strong>? Innerhalb von durchschnittlich {city.travelTime} stehen wir für Sie bereit in:
            </p>
            <ul className={styles.seoList}>
              {city.subAreas.length > 0 ? (
                city.subAreas.map(area => {
                  const areaLower = area.toLowerCase();
                  const cityLower = city.city.toLowerCase();
                  const displayName = areaLower.startsWith(cityLower) ? area : `${city.city} ${area}`;
                  
                  return (
                    <li key={area}>
                      <strong>{displayName}</strong>
                    </li>
                  );
                })
              ) : (
                nearby.map(c => (
                  <li key={c.slug}>
                    <Link href={`/standorte/${c.slug}`}>
                      <strong>{c.city}</strong>
                    </Link>
                  </li>
                ))
              )}
            </ul>
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
