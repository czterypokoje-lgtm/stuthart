import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { BRANDS } from '../config/brands';
import { CITIES } from '@/config/cities';
import FaqSection from '@/components/FaqSection/FaqSection';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';
import ServiceCoverageMap from '@/components/ServiceCoverageMap/ServiceCoverageMap';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import GlobalFeatureCards from '@/components/FeatureCards/GlobalFeatureCards';
import HeroGoogleBadge from '@/components/HeroGoogleBadge/HeroGoogleBadge';

const RealGalleryShowcase = dynamic(() => import('@/components/RealGalleryShowcase/RealGalleryShowcase'), { ssr: true });

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | FC-KEY',
  },
  description: `Autoschlüssel nachmachen oder alle Schlüssel verloren? Unsere mobilen Mechaniker kommen direkt zu Ihnen in Stuttgart. Zerstörungsfrei öffnen & anlernen. Jetzt anrufen!`,
  alternates: {
    canonical: SITE_CONFIG.domain,
    languages: {
      'de-DE': SITE_CONFIG.domain,
      'x-default': SITE_CONFIG.domain,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_CONFIG.domain,
    title: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | FC-KEY',
    description: 'Autoschlüssel nachmachen oder alle Schlüssel verloren? Unsere mobilen Mechaniker kommen direkt zu Ihnen in Stuttgart. Zerstörungsfrei öffnen & anlernen. Jetzt anrufen!',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'First Class Key mobiler Autoschlüsselspezialist' }],
  },
};


const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.domain,
    },
  ],
};

const simplifiedServices = [
  {
    title: 'Autoschlüssel Nachmachen',
    desc: 'Wir fertigen und programmieren neue Ersatzschlüssel für fast alle Automarken direkt bei Ihnen vor Ort.',
    href: '/leistungen/autoschluessel-nachmachen',
    src: '/images/services/autoschluessel-nachmachen-stuttgart-vor-ort.jpg',
    alt: 'Autoschlüssel nachmachen Stuttgart vor Ort - Mobiler Schlüsseldienst Ersatzschlüssel',
    buttonText: 'Mehr über Ersatzschlüssel'
  },
  {
    title: 'Alle Autoschlüssel Verloren',
    desc: 'Haben Sie alle Schlüssel verloren? Wir kommen zu Ihnen, öffnen das Auto und programmieren einen komplett neuen Schlüssel.',
    href: '/autoschluessel-verloren',
    src: '/images/seo/lost_car_key_concept.jpg',
    alt: 'Autoschlüssel Verloren?',
    buttonText: 'Notdienst kontaktieren'
  },
  {
    title: 'Autoschlüssel Reparatur',
    desc: 'Ist Ihr Schlüssel abgebrochen, das Gehäuse defekt oder die Batterie leer? Wir reparieren es schnell und günstig.',
    href: '/leistungen/autoschluessel-reparieren',
    src: '/images/seo/autoschluessel_reparatie_stuttgart_sindelfingen_mobiel.webp',
    alt: 'Autoschlüssel Reparatur',
    buttonText: 'Reparatur anfragen'
  },
  {
    title: 'Zündschloss Reparatur',
    desc: 'Klemmt das Zündschloss oder lässt sich der Schlüssel nicht mehr drehen? Wir reparieren oder tauschen es aus.',
    href: '/leistungen/zuendschloss-auto-wechseln',
    src: '/images/seo/zuendschloss_reparatur_home.jpg',
    alt: 'Zündschloss Reparatur & Austausch',
    buttonText: 'Zündschloss reparieren'
  },
  {
    title: 'Auto Zerstörungsfrei Öffnen',
    desc: 'Schlüssel im Auto vergessen und Tür zu? Mit Spezialwerkzeug öffnen wir Ihr Fahrzeug 100% ohne Schäden.',
    href: '/leistungen/auto-schluesseldienst',
    src: '/images/seo/auto_schluesseldienst_home.jpg',
    alt: 'Auto Schlüsseldienst & Öffnung',
    buttonText: 'Auto öffnen lassen'
  },
  {
    title: 'Smart Key / Keyless Go',
    desc: 'Wir programmieren hochmoderne Keyless-Go Schlüssel und Smart Keys mit originalen Diagnosegeräten.',
    href: '/leistungen/autoschluessel-nachmachen',
    src: '/images/smart-key-start-stop.jpg',
    alt: 'Smart Key und Keyless Go Programmierung Stuttgart - Auto Start Stop System',
    buttonText: 'Mehr über Keyless'
  }
];

const serviceAreaCities = [
  { name: 'Stuttgart', slug: 'stuttgart', time: '15-25 Min' },
  { name: 'Sindelfingen', slug: 'sindelfingen', time: '10-15 Min' },
  { name: 'Böblingen', slug: 'boeblingen', time: '10-20 Min' },
  { name: 'Ludwigsburg', slug: 'ludwigsburg', time: '25-35 Min' },
  { name: 'Esslingen am Neckar', slug: 'esslingen', time: '30-40 Min' },
  { name: 'Leonberg', slug: 'leonberg', time: '15-25 Min' },
  { name: 'Fellbach', slug: 'fellbach', time: '30-40 Min' },
  { name: 'Waiblingen', slug: 'waiblingen', time: '30-40 Min' },
  { name: 'Filderstadt', slug: 'filderstadt', time: '25-35 Min' },
  { name: 'Ditzingen', slug: 'ditzingen', time: '20-30 Min' },
];

export default function HomePage() {
  return (
    <>
      <script id="home-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main id="main-content">
      {/* ===== HERO (SPLIT) ===== */}
      <section className={styles.heroSplit}>
        <div className={styles.heroSplitInner}>
          <div className={styles.heroSplitText}>
            <HeroGoogleBadge />

            <h1 className={styles.heroTitle}>
              Autoschlüssel verloren oder nachmachen?<br />
              <span className={styles.heroOrange}>Wir helfen direkt vor Ort!</span>
            </h1>
            <p className={styles.heroLead}>
              Ausgesperrt oder Autoschlüssel defekt? <strong>Güngör Demir</strong> und sein Team kommen
              direkt zu Ihnen — keine Abschleppkosten, günstiger als der Händler und in <strong>30-60 Min</strong> vor Ort.
            </p>

            <ul className={styles.heroTrust}>
              <li className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                15 Jahre Erfahrung
              </li>
              <li className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.36-1.86M17 20H7m10 0v-2c0-.66-.13-1.3-.36-1.86m0 0A5 5 0 0012 14a5 5 0 00-4.64 2.14M7 20H2v-2a3 3 0 015.36-1.86M7 20v-2c0-.66.13-1.3.36-1.86m0 0A5 5 0 0112 14m0-4a3 3 0 100-6 3 3 0 000 6z" /></svg>
                Familienbetrieb
              </li>
              <li className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Alle Marken &amp; Modelle
              </li>
            </ul>
          </div>

          <div className={styles.heroSplitImage}>
            <Image
              src="/images/hero/autoschluessel-spezialist-guengoer-demir-servicefahrzeug-stuttgart.webp"
              alt="Güngör Demir, Inhaber von First Class Key, am mobilen Servicefahrzeug für Autoschlüssel-Notdienst in Stuttgart und Sindelfingen"
              width={2000}
              height={1333}
              sizes="(min-width: 992px) 50vw, 100vw"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }}
              priority
              fetchPriority="high"
              quality={82}
            />
            <script id="hero-image-gps" type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "contentUrl": `${SITE_CONFIG.domain}/images/hero/autoschluessel-spezialist-guengoer-demir-servicefahrzeug-stuttgart.webp`,
                "name": "Güngör Demir mit dem Servicefahrzeug von First Class Key",
                "description": "Güngör Demir, Inhaber von First Class Key, am voll ausgestatteten mobilen Servicefahrzeug für Autoschlüssel nachmachen, Programmierung und Notöffnung in Stuttgart, Sindelfingen und 50km Umkreis.",
                "contentLocation": {
                  "@type": "Place",
                  "name": "Stuttgart, Sindelfingen",
                  "geo": { "@type": "GeoCoordinates", "latitude": 48.7758, "longitude": 9.1829 }
                }
              })
            }} />
          </div>

          <div className={styles.heroSplitForm}>
            <LeadCaptureForm phone={SITE_CONFIG.phone} theme="light" />
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <GlobalFeatureCards />

      {/* ── BRANDS MARQUEE ──────────────────────────────────────── */}
      <BrandsMarquee />

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== SERVICES ===== */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className="section-title" style={{ color: 'var(--navy-900)' }}>Der passende Service für Ihr Autoschlüssel-Problem</h2>
            <p className="section-lead" style={{ color: 'var(--gray-600)', maxWidth: '700px', margin: '0 auto' }}>Wählen Sie den passenden Service und erfahren Sie, wie First Class Key Ihnen helfen kann.</p>
          </div>
          <div className={styles.servicesGrid}>
            {simplifiedServices.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceImgBox}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className={styles.serviceImg}
                  />
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle} style={{ color: 'var(--orange-600)', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className={styles.serviceDesc} style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {s.desc}
                  </p>
                  <Link href={s.href} className="btn btn-navy" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                    {s.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.servicesCta} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <Link href="/autoschluessel-bestellen" className="btn btn-green">Autoschlüssel bestellen</Link>
            <Link href="/leistungen" className="btn btn-navy">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      {/* ===== BRANDS (VISUAL LOGO GRID) ===== */}
      <BrandsLogoGrid />

      {/* ===== GALLERY ===== */}
      <section className="gallery-section">
        <div className="container">
          <p className="section-eyebrow">GALERIE</p>
          <h2 className="section-title">Unsere Arbeit in Bildern</h2>
          <p className="section-lead" style={{ maxWidth: 880, margin: '0 auto 2.5rem', lineHeight: '1.75', fontSize: '0.98rem', color: 'var(--gray-600)' }}>
            Sehen Sie sich unten eine Auswahl unserer abgeschlossenen Praxisprojekte und zufriedenen Kunden im Raum Stuttgart an. Als anerkannter Autoschlüsselspezialist sind wir täglich mit unserem komplett ausgestatteten mobilen Servicebus in <Link href="/standorte/stuttgart" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Stuttgart</Link>, <Link href="/standorte/sindelfingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Sindelfingen</Link>, <Link href="/standorte/boeblingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Böblingen</Link>, <Link href="/standorte/ludwigsburg" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Ludwigsburg</Link>, <Link href="/standorte/esslingen" style={{color: 'var(--navy-800)', textDecoration: 'underline'}}>Esslingen</Link> und Umgebung im Einsatz. Egal, ob es um das Nachmachen eines Ersatzschlüssels, das fachmännische Anlernen von Keyless-Entry-Smart-Keys oder Notreparaturen bei einem verlorenen oder defekten Autoschlüssel vor Ort geht: Wir garantieren zerstörungsfreie Arbeit mit originalen OEM-Diagnosegeräten. Dank unserer transparenten Preise, schnellen Reaktionszeiten und langjährigen Expertise sparen Sie sich unnötige Abschleppkosten und lange Wartezeiten beim offiziellen Vertragshändler. Durchstöbern Sie unsere letzten Aufträge und entdecken Sie, warum unzählige Autofahrer unserem mobilen Schlüsseldienst vertrauen.
          </p>
          <RealGalleryShowcase />
        </div>
      </section>

      {/* ===== SERVICE AREA & MAP PREVIEW (SEO) ===== */}
      <ServiceCoverageMap />

      {/* ===== E-E-A-T MEET THE OWNER ===== */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <script id="owner-person-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE_CONFIG.domain}/#guengoer-demir`,
            "name": "Güngör Demir",
            "jobTitle": "Inhaber & Autoschlüssel-Spezialist",
            "image": `${SITE_CONFIG.domain}/images/team/guengoer-demir-inhaber-first-class-key-sindelfingen.webp`,
            "worksFor": { "@id": `${SITE_CONFIG.domain}/#localbusiness` },
            "knowsAbout": [
              "Autoschlüssel nachmachen", "Transponder programmieren", "Smart Key / Keyless Go",
              "All Keys Lost", "Zündschloss-Reparatur", "Schadensfreie Autoöffnung"
            ]
          })
        }} />
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <p className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>INHABER &amp; FAMILIENBETRIEB</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
                Güngör Demir — Ihr Autoschlüssel-Spezialist
              </h2>
              <p style={{ fontWeight: 600, color: 'var(--orange-700)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Inhaber von First Class Key, Sindelfingen · 15 Jahre Erfahrung
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.65, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Wenn Sie bei uns anrufen, sprechen Sie nicht mit einem Callcenter, sondern direkt mit dem
                Fachmann, der anschliessend zu Ihnen herausfährt. First Class Key ist ein
                <strong> inhabergeführter Familienbetrieb</strong> — kein Franchise und keine Vermittlung.
                In 15 Jahren habe ich Tausende Autoschlüssel gefräst, programmiert und Fahrzeuge schadensfrei
                geöffnet, vom einfachen Transponder bis zum Keyless-Go-System nach Totalverlust aller Schlüssel.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 1.5rem 0', fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>15 Jahre Erfahrung:</strong> täglich an allen gängigen Marken und Schliesssystemen.</span>
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Familienbetrieb:</strong> Sie haben immer denselben Ansprechpartner — vom Anruf bis zum fertigen Schlüssel.</span>
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Eigene Werkstatt &amp; Technik:</strong> CNC-Fräse, Autel IM608 Pro II und AVDI Abrites — auch Elektronik-Reparatur im Haus.</span>
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Festpreis vorab:</strong> Sie erfahren den Preis am Telefon, bevor wir losfahren.</span>
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary" id="meet-owner-phone">
                  📞 Direkt anrufen: {SITE_CONFIG.phone}
                </a>
                <Link href="/ueber-uns" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Mehr über uns →
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <figure style={{ margin: 0, maxWidth: '440px', width: '100%' }}>
                <Image
                  src="/images/team/guengoer-demir-inhaber-first-class-key-sindelfingen.webp"
                  alt="Güngör Demir, Inhaber von First Class Key, in seiner Schlüsselwerkstatt in Sindelfingen"
                  width={1100}
                  height={1650}
                  sizes="(min-width: 768px) 440px, 100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.12)', display: 'block' }}
                />
                <figcaption style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--gray-600)', textAlign: 'center' }}>
                  Güngör Demir in der eigenen Werkstatt im Stern Center, Sindelfingen
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARE ===== */}
      <section className={styles.compare}>
        <div className="container">
          <div className={styles.compareGrid}>
            <div>
              <p className="section-eyebrow">WARUM WIR?</p>
              <h2 className="section-title">Sparen Sie 30–50% gegenüber Händlern</h2>
              <p>Ausrüstung auf Händlerniveau, transparente Preise, Service am selben Tag. Wir kommen zu Ihnen.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> Günstiger als Händler — garantiert</li>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> Keine Abschleppkosten — wir kommen zu Ihnen</li>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> Service am selben Tag — auch am Wochenende</li>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> Händler-Level Tools: Autel, VVDI, AVDI, ACDP</li>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> 12 Monate Garantie</li>
                <li className={styles.checkItem}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"/></svg> Rechnungen für die Versicherung</li>
              </ul>
              <Link href="/leistungen/autoschluessel-nachmachen" className="btn btn-primary btn-lg">Autoschlüssel Nachmachen</Link>
            </div>
            <div className={styles.compareTableWrap}>
              <table className="price-table">
                <thead>
                  <tr><th>Vergleich</th><th>Vertragshändler</th><th>Wir ✓</th></tr>
                </thead>
                <tbody>
                  <tr><td>Preis</td><td>€300–€900</td><td><strong>€150–€500</strong></td></tr>
                  <tr><td>Wartezeit</td><td>3–14 Tage</td><td><strong>Am selben Tag</strong></td></tr>
                  <tr><td>Abschleppkosten</td><td>€100–€150</td><td><strong>Keine</strong></td></tr>
                  <tr><td>Standort</td><td>Sie fahren dorthin</td><td><strong>Wir kommen</strong></td></tr>
                  <tr><td>Öffnungszeiten</td><td>Mo-Fr 8–17</td><td><strong>24/7</strong></td></tr>
                  <tr><td>Garantie</td><td>Ja</td><td><strong>12 Monate</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className={styles.reviews}>
        <div className="container">
          <p className="section-eyebrow">KUNDENBEWERTUNGEN</p>
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <div className={styles.ratingBig}>
            <span className={styles.ratingNum}>{SITE_CONFIG.rating}</span>
            <div>
              <div className="stars">★★★★★</div>
              <span style={{fontSize: '0.8rem', color: 'var(--gray-500)'}}>{SITE_CONFIG.reviewCount} Google Bewertungen</span>
            </div>
          </div>
          <h3 className="text-center" style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--gray-600)' }}>Erfahrungen von Kunden</h3>
          <div className={styles.reviewGrid}>
            {generateContextualReviews('autoschluessel', 'general').map((r, i) => (
              <GoogleReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE HOMEPAGE SEO GUIDE ARTICLE ── */}
      <section style={{ padding: '3.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="seo-article-block" style={{ marginTop: 0 }}>
            <h2>Autoschlüsselservice vor Ort — Schlüssel nachmachen in Stuttgart und Umgebung</h2>
            <p>
              Benötigen Sie einen neuen Autoschlüssel? Oder möchten Sie einen <strong>Zweitschlüssel</strong> anfertigen lassen, damit Sie immer einen Ersatz haben?
              Bei <strong>{SITE_CONFIG.name}</strong> sind Sie für einen kompletten <strong>Autoschlüsselservice</strong> an der richtigen Adresse.
              <strong>Wir machen</strong> Schlüssel für <strong>nahezu alle</strong> Automarken und Modelle —
              vom einfachen Transponderschlüssel bis zum modernen Smart Key mit Fernbedienung.
            </p>
            <p>
              Unser Einsatzgebiet ist groß. Wir sind aktiv in Stuttgart, Sindelfingen, Böblingen, Ludwigsburg
              <strong> und Umgebung</strong>. Möchten Sie einen Autoschlüssel <strong>in Stuttgart nachmachen</strong>?
              Dann sind wir im Durchschnitt innerhalb von 15 bis 20 Minuten bei Ihnen. Stehen Sie irgendwo anders geparkt? Kein Problem.
              Wir kommen direkt zu Ihrem Standort.
            </p>

            <h3>Autoschlüssel mit Fernbedienung anfertigen lassen</h3>
            <p>
              Moderne Autos fahren nicht mehr mit einem einfachen Metallschlüssel. Sie benötigen
              <strong> Autoschlüssel mit Fernbedienung</strong> — auch Klappschlüssel, Smart Keys
              oder Keyless Go Schlüssel genannt. Wir liefern und programmieren <strong>zertifizierte Schlüssel</strong>,
              die genau wie der originale Fabrikschlüssel funktionieren. Sie müssen nicht zum Vertragshändler.
              Wir erledigen alles vor Ort, bei Ihnen zu Hause oder am Arbeitsplatz.
            </p>

            <h3>Autoschlüssel gestohlen? Wir lösen das Problem</h3>
            <p>
              Wurden Ihre <strong>Autoschlüssel gestohlen</strong>? Dann müssen Sie schnell handeln.
              Ein gestohlener Schlüssel ist ein Sicherheitsrisiko. Wir löschen den gestohlenen Schlüssel aus dem
              Speicher Ihres Autos und fertigen direkt einen neuen an. So kann niemand anderes mehr mit Ihrem
              Fahrzeug fahren. Dies ist ein Notfallservice, den wir 24 Stunden am Tag, 7 Tage die Woche durchführen.
            </p>

            <h3>Günstiger als der Händler, mit 12 Monaten Garantie</h3>
            <p>
              Da wir direkt bei Ihnen vor Ort arbeiten, sparen Sie im Durchschnitt <strong>30% bis 50%</strong>
              im Vergleich zum Vertragshändler. Sie zahlen keine Abschleppkosten und keine teuren Showroom-Preise.
              Auf jeden neuen Schlüssel und jede Reparatur geben wir standardmäßig 12 Monate schriftliche Garantie.
              Viele Versicherungen erstatten unsere Rechnung im Rahmen Ihrer Kaskoversicherung.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FaqSection />

    </main>
    </>
  );
}
