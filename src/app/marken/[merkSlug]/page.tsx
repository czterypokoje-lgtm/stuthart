import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
import Script from 'next/script';
import fs from 'fs';
import path from 'path';
import { BRANDS } from '@/config/brands';
import { CITIES } from '@/config/cities';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';
import FaqSection from '@/components/FaqSection/FaqSection';
import { getFaqForBrand } from '@/config/faq';
import { getBaseLocalBusinessSchema } from '@/utils/schema';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import RealGalleryShowcase from '@/components/RealGalleryShowcase/RealGalleryShowcase';
import HeroGoogleBadge from '@/components/HeroGoogleBadge/HeroGoogleBadge';

export async function generateStaticParams() {
  return BRANDS.map(b => ({ merkSlug: `${b.nameSlug}-autoschluessel-nachmachen` }));
}

export async function generateMetadata(props: { params: Promise<{ merkSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const merkSlug = params.merkSlug;
  const decodedSlug = decodeURIComponent(merkSlug).toLowerCase();
  
  const brand = BRANDS.find(b => {
    const base = b.nameSlug.toLowerCase();
    return decodedSlug === `${base}-autoschluessel-nachmachen` || decodedSlug === base;
  });

  if (!brand) return {};
  
  // Always use the long SEO slug for the canonical URL
  const pageUrl = `${SITE_CONFIG.domain}/marken/${brand.nameSlug.toLowerCase()}-autoschluessel-nachmachen`;
  return {
    title: {
      absolute: brand.customMetaTitle || `${brand.name} Autoschlüssel nachmachen Stuttgart | FC-KEY`,
    },
    description: `Ab 99€ & 30 Min vor Ort: ${brand.name} Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Codierung (${brand.system}).`.substring(0, 155),
    alternates: {
      canonical: pageUrl,
      languages: {
        'de-DE': pageUrl,
        'x-default': pageUrl,
      },
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: `${brand.name} Autoschlüssel nachmachen Stuttgart | FC-KEY`,
      description: `Ab 99€ & 30 Min vor Ort: ${brand.name} Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Codierung (${brand.system}).`.substring(0, 155),
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${brand.name} Ersatzschlüssel nachmachen — FC-KEY` }],
    },
  };
}

export default async function BrandPage(props: { params: Promise<{ merkSlug: string }> }) {
  const params = await props.params;
  const merkSlug = params.merkSlug;
  const decodedSlug = decodeURIComponent(merkSlug).toLowerCase();

  const brand = BRANDS.find(b => {
    const base = b.nameSlug.toLowerCase();
    return decodedSlug === `${base}-autoschluessel-nachmachen` || decodedSlug === base;
  });

  if (!brand) notFound();

  // Redirect short slugs (e.g. /marken/audi) to the long SEO slug (e.g. /marken/audi-autoschluessel-nachmachen)
  if (decodedSlug === brand.nameSlug.toLowerCase()) {
    permanentRedirect(`/marken/${brand.nameSlug.toLowerCase()}-autoschluessel-nachmachen`);
  }

  // Load recent work images
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'merken');
  let recentWorkImages: string[] = [];
  try {
    const files = fs.readdirSync(imagesDir);
    const nSlug = brand.nameSlug.toLowerCase();
    const bSlug = brand.slug.toLowerCase();
    
    // Filter specific files for this brand
    let matchedFiles = files.filter(f => {
      const lower = f.toLowerCase();
      
      // Match if filename contains the brand slug or name slug
      if (lower.includes(nSlug) || lower.includes(bSlug)) return true;

      // Special cases for common abbreviations or alternative names
      if (bSlug === 'volkswagen' && (lower.includes('vw-') || lower.includes('-vw'))) return true;
      if (bSlug === 'mercedes' && (lower.includes('benz') || lower.includes('mb-'))) return true;
      if (bSlug === 'land-rover' && (lower.includes('range'))) return true;
      
      return false;
    });

    // Deduplicate: Avoid showing the same photo twice.
    // If we have translated German files (autoschluessel-nachmachen-), ignore the old Dutch files for this brand.
    const hasGermanSEO = matchedFiles.some(f => f.toLowerCase().includes('autoschluessel-nachmachen-'));
    if (hasGermanSEO) {
      matchedFiles = matchedFiles.filter(f => {
        const lower = f.toLowerCase();
        return !lower.includes('-utrecht-') && !lower.includes('autoschluessel-nachmachen-');
      });
    }

    recentWorkImages = matchedFiles;

    // Do NOT mix in generic werkplaats/workplace photos anymore.
    // The user requested that we ONLY show photos of the specific brand.
  } catch (e) {
    // ignore
  }

  const brandImageMap: Record<string, string> = {
    audi: 'audi.jpg',
    citroen: 'citroen.jpg',
    fiat: 'fiat.avif',
    ford: 'ford.jpg',
    honda: 'honda.jpg',
    hyundai: 'hyundai.jpg',
    kia: 'kia.jpg',
    lexus: 'lexus.jpg',
    mazda: 'mazda.jpg',
    mercedes: 'mercedes.avif',
    mini: 'mini.jpg',
    nissan: 'nissan.jpg',
    opel: 'opel.avif',
    peugeot: 'peugeot.jpg',
    renault: 'renault.jpg',
    seat: 'seat.webp',
    skoda: 'skoda.jpg',
    toyota: 'toyota.jpg',
    volkswagen: 'volkswagen.jpg',
    volvo: 'volvo.jpg'
  };
  
  const imageName = brandImageMap[brand.nameSlug.toLowerCase()] || 'fallback.jpg';
  const carPhotoSrc = `/images/brands/${imageName}`;

  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `${brand.name} Autoschlüssel Nachmachen — Autoschlüssel Spezialist`,
    description: `Ab 99€ & 30 Min vor Ort: ${brand.name} Autoschlüssel nachmachen. Günstiger als der Händler, inkl. Codierung (${brand.system}).`.substring(0, 155),
    provider: getBaseLocalBusinessSchema(),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.domain },
      { '@type': 'ListItem', position: 2, name: 'Marken', item: `${SITE_CONFIG.domain}/marken` },
      { '@type': 'ListItem', position: 3, name: brand.name, item: `${SITE_CONFIG.domain}/marken/${merkSlug}` },
    ],
  };

  const heroBgPath = path.join(process.cwd(), 'public', 'images', `${brand.slug}-autoschluessel-nachmachen.webp`);
  const hasHeroBg = fs.existsSync(heroBgPath);
  const heroBgStyle = hasHeroBg 
    ? `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/${brand.slug}-autoschluessel-nachmachen.webp')` 
    : 'linear-gradient(160deg, var(--navy-900), var(--navy-800))';

  return (
    <>
      <script id={`brand-schema-${brand.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id={`brand-breadcrumb-${brand.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="main-content">
        {/* ── HERO SECTION ── */}
        <section className={hasHeroBg ? "hero-spacing-bg" : "hero-spacing"} style={{ 
          background: heroBgStyle, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px' }}>
              <nav style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.55)' }}>Home</Link> /
                <Link href="/marken" style={{ color: 'rgba(255,255,255,0.55)' }}>Marken</Link> /
                <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{brand.name}</span>
              </nav>
              <HeroGoogleBadge />
              <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.2rem' }}>
                {brand.customH1 || <>{brand.name} Autoschlüssel Nachmachen &amp; Programmieren</>} <br />
                <span style={{ color: 'var(--navy-700)' }}>Alle Modelle &amp; Baujahre • Mobiler Vor-Ort-Service</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: '2.2rem' }}>
                {brand.name} Schlüssel verloren oder defekt? Wir kommen zu Ihnen und programmieren vor Ort einen neuen Schlüssel. <strong>Bis zu 50% günstiger als der Händler</strong>, keine Abschleppkosten!
              </p>
            </div>
            <div style={{ flex: '1 1 400px', maxWidth: '450px', width: '100%', margin: '0 auto' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phone} theme="light" urgencyColor="#ffffff" />
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <HowItWorks brandName={brand.name} />

        {/* ── LEISTUNGEN SECTION ── */}
        <section style={{ padding: '4.5rem 0', background: 'var(--gray-50)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '0.75rem', fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>
              Unsere Leistungen für {brand.name}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--gray-600)', marginBottom: '3rem', maxWidth: 560, margin: '0 auto 3rem' }}>
              Wir sind spezialisiert auf alle Autoschlüssel-Services für {brand.name} — schnell, mobil und günstiger als der Händler.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>

              {/* Card 1: Nachmachen */}
              <Link href="/leistungen/autoschluessel-nachmachen" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem 2rem 2rem', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }} id={`brand-leistung-nachmachen-${brand.slug}`}>
                <div style={{ width: '100%', height: '160px', position: 'relative', marginBottom: '1.75rem' }}>
                  <Image src="/images/service_nachmachen.png" alt={`${brand.name} Autoschlüssel nachmachen`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>
                  {brand.name} Schlüssel Nachmachen
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                  Extra oder Ersatzschlüssel für {brand.name} benötigt? Wir fräsen und programmieren einen neuen Schlüssel direkt bei Ihnen vor Ort — oft halb so teuer wie beim {brand.name}-Händler.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--orange-500)', fontWeight: 700, fontSize: '1rem' }}>Ab €149,- zzgl. MwSt.</span>
                  <span style={{ color: 'var(--navy-700)', fontWeight: 600, fontSize: '0.9rem' }}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

              {/* Card 2: Verloren */}
              <Link href="/autoschluessel-verloren" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem 2rem 2rem', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }} id={`brand-leistung-verloren-${brand.slug}`}>
                <div style={{ width: '100%', height: '160px', position: 'relative', marginBottom: '1.75rem' }}>
                  <Image src="/images/service_kwijt.png" alt={`${brand.name} Autoschlüssel verloren`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>
                  {brand.name} Alle Schlüssel Verloren
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                  Alle {brand.name} Schlüssel verloren? Wir kommen direkt zu Ihnen, öffnen das Auto schadensfrei, fräsen einen neuen Schlüssel und lernen ihn im {brand.name} Bordcomputer an.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--orange-500)', fontWeight: 700, fontSize: '1rem' }}>Ab €249,- zzgl. MwSt.</span>
                  <span style={{ color: 'var(--navy-700)', fontWeight: 600, fontSize: '0.9rem' }}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

              {/* Card 3: Öffnen */}
              <Link href="/leistungen/auto-ohne-schluessel-oeffnen" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem 2rem 2rem', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }} id={`brand-leistung-oeffnen-${brand.slug}`}>
                <div style={{ width: '100%', height: '160px', position: 'relative', marginBottom: '1.75rem' }}>
                  <Image src="/images/service_openen.png" alt={`${brand.name} Auto öffnen`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>
                  {brand.name} Auto Öffnen
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                  Schlüssel im {brand.name} eingeschlossen? Wir öffnen Ihr Auto 100% schadensfrei mit professionellem Werkzeug, ohne Kratzer oder Beschädigungen.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--orange-500)', fontWeight: 700, fontSize: '1rem' }}>Ab €149,- zzgl. MwSt.</span>
                  <span style={{ color: 'var(--navy-700)', fontWeight: 600, fontSize: '0.9rem' }}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

              {/* Card 4: Zündschloss */}
              <Link href="/leistungen" style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem 2rem 2rem', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }} id={`brand-leistung-zuendschloss-${brand.slug}`}>
                <div style={{ width: '100%', height: '160px', position: 'relative', marginBottom: '1.75rem' }}>
                  <Image src="/images/service_contactslot.png" alt={`${brand.name} Zündschloss ersetzen`} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>
                  {brand.name} Zündschloss Ersetzen
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                  {brand.name} Zündschloss defekt oder beschädigt? Wir ersetzen das Zündschloss und programmieren den neuen Schlüssel direkt vor Ort, ohne Ihr Auto zur Werkstatt zu schleppen.
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--orange-500)', fontWeight: 700, fontSize: '1rem' }}>Ab €299,- zzgl. MwSt.</span>
                  <span style={{ color: 'var(--navy-700)', fontWeight: 600, fontSize: '0.9rem' }}>Mehr erfahren &rarr;</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ── RECENT WORK GALLERY ── */}
        {recentWorkImages.length > 0 && (
          <section className="gallery-section">
            <div className="container">
              <p className="section-eyebrow">AKTUALISIERT</p>
              <h2 className="section-title">Unsere Arbeit in Bildern: {brand.name}</h2>
              <p className="section-lead" style={{ maxWidth: 880, margin: '0 auto 2.5rem', lineHeight: '1.75', fontSize: '0.98rem', color: 'var(--gray-600)' }}>
                Sehen Sie sich unten eine Auswahl unserer abgeschlossenen Praxisprojekte und zufriedenen Kunden für die Marke {brand.name} an. Als anerkannter Autoschlüsselspezialist sind wir täglich mit unserem komplett ausgestatteten mobilen Servicebus im Raum Stuttgart und Umgebung im Einsatz. Egal, ob es um das Nachmachen eines Ersatzschlüssels, das fachmännische Anlernen von Keyless-Entry-Smart-Keys oder Notreparaturen bei einem verlorenen oder defekten {brand.name} Autoschlüssel vor Ort geht: Wir garantieren zerstörungsfreie Arbeit mit originalen OEM-Diagnosegeräten.
              </p>
              <RealGalleryShowcase 
                photos={recentWorkImages.map((img, idx) => {
                  let altText = `${brand.name} Autoschlüssel nachmachen`;
                  const lowerImg = img.toLowerCase();
                  
                  if (lowerImg.includes('openen') || lowerImg.includes('oeffnen')) {
                    altText = `${brand.name} Auto öffnen ohne Schlüssel in Stuttgart`;
                  } else if (lowerImg.includes('contactslot') || lowerImg.includes('zuendschloss')) {
                    altText = `${brand.name} Zündschloss Reparatur & Austausch`;
                  } else if (lowerImg.includes('werkplaats') || lowerImg.includes('workplace')) {
                    altText = `Kfz-Schlüsseldienst mobiler Service vor Ort für ${brand.name}`;
                  } else if (idx === 0) {
                    altText = `${brand.name} Ersatzschlüssel codieren und anlernen Stuttgart`;
                  } else if (idx === 1) {
                    altText = `${brand.name} Funkschlüssel kopieren und programmieren vor Ort`;
                  } else if (idx === 2) {
                    altText = `${brand.name} Smart Key Gehäuse wechseln und Fräsen`;
                  } else {
                    altText = `${brand.name} Autoschlüssel nachmachen und anlernen lassen`;
                  }

                  return {
                    src: `/images/merken/${img}`,
                    alt: altText,
                    label: `${brand.name} Projekt`
                  };
                })}
              />
            </div>
          </section>
        )}

        {/* ── TIMPSON STYLE MODEL LIST ── */}
        <section id="modellen" style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: 1200 }}>
            <style dangerouslySetInnerHTML={{__html: `
              .timpson-section-wrap {
                display: flex;
                gap: 4rem;
                align-items: center;
                background: #ffffff;
                border-radius: 16px;
                padding: 3.5rem;
                box-shadow: 0 4px 20px rgba(0,0,0,0.03);
              }
              .ibm-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                padding: 1.125rem 2.5rem;
                font-size: 1.05rem;
                font-weight: 500;
                letter-spacing: 0.3px;
                border-radius: 0;
                text-decoration: none;
                transition: all 0.25s cubic-bezier(0.2, 0, 0.38, 0.9);
                min-width: 260px;
                position: relative;
                overflow: hidden;
              }
              .ibm-btn-primary {
                background-color: #0f172a;
                color: #ffffff !important;
                border: 1px solid #0f172a;
              }
              .ibm-btn-primary:hover {
                background-color: #1e293b;
                border-color: #1e293b;
                box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
              }
              .ibm-btn-wa {
                background-color: #128c7e;
                color: #ffffff !important;
                border: 1px solid #128c7e;
              }
              .ibm-btn-wa:hover {
                background-color: #075e54;
                border-color: #075e54;
                box-shadow: 0 8px 24px rgba(18, 140, 126, 0.2);
              }
              .models-list {
                color: #475569;
                font-size: 1.05rem;
                line-height: 2;
                padding-left: 1.5rem;
                margin-bottom: 1.5rem;
                font-weight: 600;
                list-style-type: disc;
                column-count: 2;
                column-gap: 2rem;
              }
              @media (max-width: 900px) {
                .timpson-section-wrap {
                  flex-direction: column;
                  padding: 2rem;
                  gap: 2rem;
                }
                .models-list {
                  column-count: 1;
                }
                .timpson-image-wrap {
                  flex: none !important;
                  width: 100%;
                }
              }
            `}} />

            <div className="timpson-section-wrap">
              <div style={{ flex: '1 1 500px' }}>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Neue {brand.name} Schlüssel für die beliebtesten Modelle
                </h2>
                
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Das Ersetzen Ihres {brand.name} Schlüssels geht bei First Class Key immer schnell und einfach. Unsere erfahrenen Monteure können {brand.name} Schlüssel fräsen, anlernen und reparieren vor Ort im ganzen Einsatzgebiet.
                </p>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Wir liefern schnelle und günstige {brand.name} Ersatzschlüssel für alle Modelle, darunter:
                </p>

                <ul className="models-list">
                  {brand.models?.map(m => (
                    <li key={m.slug} style={{ breakInside: 'avoid' }}>
                      <span style={{ color: '#1e293b' }}>
                        {brand.name} {m.name} Schlüssel
                      </span>
                    </li>
                  ))}
                  {brand.specialIntents?.map(intent => (
                    <li key={intent.slug} style={{ breakInside: 'avoid' }}>
                      <span style={{ color: 'var(--orange-600)' }}>
                        {intent.name}
                      </span>
                    </li>
                  ))}
                  {(!brand.models || brand.models.length === 0) && (
                    <li>Alle {brand.name} Modelle unterstützt</li>
                  )}
                </ul>
              </div>

              <div className="timpson-image-wrap" style={{ flex: '1 1 0%', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backgroundColor: '#fff' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={carPhotoSrc} alt={`${brand.name} Autoschlüssel nachmachen - Ersatzschlüssel und Programmierung vor Ort`} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Bottom: Action Buttons */}
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="ibm-btn ibm-btn-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Jetzt anrufen: {SITE_CONFIG.phone}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ibm-btn ibm-btn-wa">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp
              </a>
            </div>

          </div>
        </section>

        {/* ── KEY PHOTOS SECTION (ANTI-THIN CONTENT) ── */}
        <section style={{ padding: '3.5rem 0 1.5rem', background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: 1000 }}>
            {(() => {
              const key1Path = path.join(process.cwd(), 'public', 'images', 'keys', `${brand.slug}-autoschluessel-nachmachen-1.webp`);
              const key2Path = path.join(process.cwd(), 'public', 'images', 'keys', `${brand.slug}-autoschluessel-nachmachen-2.webp`);
              
              const hasKey1 = fs.existsSync(key1Path);
              const hasKey2 = fs.existsSync(key2Path);

              if (!hasKey1 && !hasKey2) return null;

              return (
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                      Beispiel {brand.name} Autoschlüssel
                    </h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      Um Ihnen einen guten Eindruck von der Qualität zu vermitteln, die wir liefern, sehen Sie hier Beispiele von originalen {brand.name} Schlüsseln, die wir kürzlich nachgemacht haben. Wir liefern immer Schlüssel höchster Qualität, einschließlich aller notwendigen Elektronik (wie der Transponderchip für die Wegfahrsperre und die Fernbedienung für die Zentralverriegelung).
                    </p>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      Jeder Schlüssel wird vor Ort mechanisch gefräst und direkt elektronisch im Bordcomputer Ihres {brand.name} angelernt. So sind Sie mit einem perfekt funktionierenden Ersatz- oder Hauptschlüssel mit 12 Monaten Vollgarantie versorgt.
                    </p>
                  </div>
                  <div style={{ flex: '1 1 350px', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {hasKey1 && (
                      <div style={{ flex: 1, background: '#f8fafc', borderRadius: '12px', padding: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/images/keys/${brand.slug}-autoschluessel-nachmachen-1.webp`} alt={`${brand.name} Schlüssel nachmachen Beispiel 1`} style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', mixBlendMode: 'multiply' }} loading="lazy" />
                      </div>
                    )}
                    {hasKey2 && (
                      <div style={{ flex: 1, background: '#f8fafc', borderRadius: '12px', padding: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/images/keys/${brand.slug}-autoschluessel-nachmachen-2.webp`} alt={`${brand.name} Schlüssel nachmachen Beispiel 2`} style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', mixBlendMode: 'multiply' }} loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ── TECHNICAL & SYSTEM DEEP DIVE (SEO RICH TEXT) ── */}
        <section style={{ padding: '4.5rem 0', background: '#ffffff' }}>
          <div className="container">
            <div className="seo-article-block" style={{ marginTop: 0 }}>
              <h2>{brand.name} Schlüssel nachmachen und anlernen ({brand.system})</h2>
              <p>
                Möchten Sie einen <strong>{brand.name} Schlüssel nachmachen lassen</strong>? Das erledigen wir gerne für Sie! Moderne Fahrzeuge wie der {brand.name} verfügen über eine intelligente Sicherung mit einem Transponderchip (wie <strong>{brand.system}</strong>). Das Auto kann nur mit einem offiziell angelernten Schlüssel gestartet werden. Wir können direkt einen neuen <strong>{brand.name} Schlüssel nachmachen</strong> und ihn sicher in den Computer Ihres Autos einlernen. So können Sie wieder beruhigt auf die Straße. Wir reparieren bei Bedarf auch Ihren defekten Schlüssel.
              </p>

              <h3>1. Wie funktioniert das Anlernen eines {brand.name} Transponders oder Smart Keys?</h3>
              <p>
                Jeder {brand.name} Autoschlüssel enthält einen Miniatur-Transponderchip, der einen eindeutigen, digital verschlüsselten Code an die Wegfahrsperre oder das Karosseriesteuergerät des Autos sendet. Wenn Sie den Schlüssel ins Zündschloss stecken oder den Startknopf drücken, überprüft das System diesen Code innerhalb weniger Millisekunden. Stimmt der Code nicht überein, werden die Kraftstoffzufuhr und die Zündung sofort blockiert.
              </p>
              <p>
                Unsere Mechaniker schließen vor Ort ein professionelles OBD2-Programmiergerät an Ihren {brand.name} an. Wir synchronisieren die kryptografischen Schlüsselsitzungen direkt mit der Werkssicherheit. Dadurch funktioniert Ihr neuer Ersatzschlüssel oder Ihre Keyless-Go-Fernbedienung genau wie ein Schlüssel, der direkt aus der Fabrik kommt.
              </p>

              <h3>2. Was tun bei &quot;All Keys Lost&quot; (Alle {brand.name} Schlüssel verloren)?</h3>
              <p>
                Haben Sie unterwegs oder zu Hause alle Ihre {brand.name} Autoschlüssel verloren? Bei einem Vertragshändler sind Sie oft gezwungen, Ihr Auto abschleppen zu lassen und manchmal komplette Schlosssätze oder Steuergeräte auszutauschen — ein Prozess, der Hunderte von Euro extra kostet und Wochen dauern kann.
              </p>
              <p>
                Dank unseres spezialisierten mobilen Notdienstes lösen wir eine &apos;All Keys Lost&apos;-Situation für Sie vor Ort:
              </p>
              <ul>
                <li><strong>100% Schadenfreies Öffnen:</strong> Mit Präzisions-Lishi-2-in-1-Schloss-Decodern öffnen wir das Türschloss Ihres {brand.name} ohne jegliche Schäden an Lack, Gummi oder Zylinder.</li>
                <li><strong>Mechanisches CNC-Fräsen:</strong> Anhand des Schlosscodes schneidet unsere mobile computergesteuerte Fräsmaschine sofort einen brandneuen Schlüsselbart.</li>
                <li><strong>Elektronische Umprogrammierung:</strong> Wir programmieren den neuen Schlüssel ein und löschen gleichzeitig alle verlorenen oder gestohlenen Schlüssel aus dem Computer, sodass Unbefugte Ihr Auto nicht mehr starten können.</li>
              </ul>

              <h3>3. Händler vs. FC-KEY: Transparenter Preisvergleich</h3>
              <p>
                Viele Autobesitzer sind über die Preise schockiert, die offizielle Vertragshändler für einen neuen {brand.name} Schlüssel verlangen. Durch unsere effiziente mobile Arbeitsweise ohne sperrige Ausstellungsräume bieten wir Ihnen nicht nur Schnelligkeit, sondern auch einen erheblichen finanziellen Vorteil:
              </p>
              <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                      <th style={{ padding: '0.85rem' }}>Leistungsbestandteil</th>
                      <th style={{ padding: '0.85rem' }}>Offizieller {brand.name} Händler</th>
                      <th style={{ padding: '0.85rem', color: '#ea580c' }}>FC-KEY (Mobil)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.85rem', fontWeight: 600 }}>Wartezeit</td>
                      <td style={{ padding: '0.85rem' }}>Durchschnittlich 5 bis 14 Werktage</td>
                      <td style={{ padding: '0.85rem', fontWeight: 700, color: '#059669' }}>Am selben Tag vor Ort fertig</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.85rem', fontWeight: 600 }}>Abschleppkosten bei Schlüsselverlust</td>
                      <td style={{ padding: '0.85rem' }}>€150 – €300 (Abschleppen obligatorisch)</td>
                      <td style={{ padding: '0.85rem', fontWeight: 700, color: '#059669' }}>€0 — Wir kommen zu Ihrem Auto</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.85rem', fontWeight: 600 }}>Preisniveau Ersatzschlüssel</td>
                      <td style={{ padding: '0.85rem' }}>Hoher Händlertarif</td>
                      <td style={{ padding: '0.85rem', fontWeight: 700, color: '#059669' }}>Bis zu 50% günstiger</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem', fontWeight: 600 }}>Garantie auf Schlüssel &amp; Chip</td>
                      <td style={{ padding: '0.85rem' }}>Standard-Werksgarantie</td>
                      <td style={{ padding: '0.85rem', fontWeight: 700, color: '#059669' }}>12 Monate schriftliche Garantie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {brand.customSeoBlurb && (
                <>
                  <h3>Beliebte {brand.name} Modelle, die wir bedienen</h3>
                  <p>{brand.customSeoBlurb}</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── TIMPSON STYLE 'WHY CHOOSE US' SECTION ── */}
        <section style={{ padding: '4.5rem 0', background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: 1200 }}>
            
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '3.5rem', textAlign: 'center' }}>
              Warum unseren {brand.name} Autoschlüssel Service wählen?
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              
              {/* Column 1: Affordable */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_1.jpg" alt="Bezahlbares Kartenterminal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Bezahlbar</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Unsere {brand.name} Ersatzschlüssel sind bis zu 50% günstiger als bei den offiziellen Vertragshändlern.
                </p>
              </div>

              {/* Column 2: Convenient */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_einfach.jpg" alt="Schlüssel vor Ort programmieren" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Einfach</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Erhalten Sie Ihren neuen {brand.name} Autoschlüssel schnell und einfach vor Ort im gesamten Einsatzgebiet.
                </p>
              </div>

              {/* Column 3: Quality */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '100%', aspectRatio: '5/4', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #f1f5f9', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/why_choose_us_3.png" alt="Schlüssel Werkstatt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Qualität</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Unsere Monteure fräsen präzise {brand.name} Schlüssel und lernen diese fachgerecht an Ihrem Fahrzeug an.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ── FAQ SECTION (SEO & AI OPTIMIZED) ── */}
        <FaqSection 
          customFaqs={getFaqForBrand(brand.name).map(f => ({ question: f.q, answer: f.a }))} 
          brandName={brand.name} 
        />

        {/* ── CUSTOMER REVIEWS ── */}
        <section style={{ padding: '4rem 0', background: 'var(--gray-50)' }}>
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>Was Kunden über unseren {brand.name} Service sagen</h2>
            <p className="text-center" style={{ color: 'var(--gray-600)', marginBottom: '2.5rem' }}>Bewertet mit {SITE_CONFIG.rating} / 5.0 basierend auf Hunderten von zufriedenen Autofahrern</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
              {generateContextualReviews(brand.name, 'brand').map((r, idx) => (
                <GoogleReviewCard key={idx} review={r} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA CONTACT BANNER ── */}
        <section style={{ padding: '4.5rem 0', background: 'var(--navy-900)', color: '#fff', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
              Brauchen Sie direkt einen neuen {brand.name} Autoschlüssel?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Kontaktieren Sie sofort unseren Notdienst oder senden Sie ein Foto Ihres Schlüssels über WhatsApp.
              Innerhalb von 1 Minute erhalten Sie ein unverbindliches Festpreisangebot inklusive Programmierung vor Ort.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary btn-lg" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 700 }}>
                📞 Jetzt anrufen: {SITE_CONFIG.phone}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-btn" style={{ background:'#002752', color:'#fff', padding:'1rem 2.5rem', borderRadius:'8px', fontWeight:700, textDecoration:'none', fontSize: '1.1rem' }}>
                💬 Direkt per WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
