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
import InstantServiceMap from '@/components/InstantServiceMap';
import LocalBusinessSchema from '@/components/Schema/LocalBusinessSchema';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import HeroGoogleBadge from '@/components/HeroGoogleBadge/HeroGoogleBadge';

const RealGalleryShowcase = dynamic(() => import('@/components/RealGalleryShowcase/RealGalleryShowcase'), { ssr: true });

export const metadata: Metadata = {
  title: {
    absolute: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | First Class Key',
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
    title: 'Autoschlüssel nachmachen oder verloren? 24/7 Mobiler Service | First Class Key',
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
    src: '/images/seo/autoschluessel_nachmachen_home.jpg',
    alt: 'Autoschlüssel nachmachen lassen',
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
    src: '/images/seo/autosleutel_reparatie_stuttgart_sindelfingen_mobiel.webp',
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
    src: '/images/brands/mercedes.jpg', // Using generic for now
    alt: 'Smart Key & Keyless Go Programmierung',
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
      <LocalBusinessSchema />
      <Script id="home-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main>
      {/* ===== HERO (SPLIT) ===== */}
      <section className={styles.heroSplit}>
        <div className={styles.heroSplitInner}>
          <div className={styles.heroSplitText}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', border: '1px solid var(--gray-200)', borderRadius: '30px', padding: '0.35rem 1rem 0.35rem 0.35rem', marginBottom: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ccc', border: '2px solid #fff', zIndex: 4, backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)', backgroundSize: 'cover' }}></div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#bbb', border: '2px solid #fff', zIndex: 3, marginLeft: '-10px', backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)', backgroundSize: 'cover' }}></div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#aaa', border: '2px solid #fff', zIndex: 2, marginLeft: '-10px', backgroundImage: 'url(https://randomuser.me/api/portraits/men/46.jpg)', backgroundSize: 'cover' }}></div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#999', border: '2px solid #fff', zIndex: 1, marginLeft: '-10px', backgroundImage: 'url(https://randomuser.me/api/portraits/women/68.jpg)', backgroundSize: 'cover' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', lineHeight: '1.1' }}>
                  5/5 <span style={{ color: '#ff9800', fontSize: '0.8rem' }}>★★★★★</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gray-500)', marginTop: '0.1rem' }}>
                  Basierend auf Google Rezensionen
                </div>
              </div>
            </div>
            
            <h1 className={styles.heroTitle}>
              Autoschlüssel verloren oder nachmachen?<br />
              <span className={styles.heroOrange}>Wir helfen direkt vor Ort!</span>
            </h1>
            <p className={styles.heroLead}>
              Haben Sie sich ausgesperrt oder ist Ihr Autoschlüssel defekt? Keine Panik. FC-KEY kommt mit einem voll ausgestatteten Servicefahrzeug zu Ihnen. Keine Abschleppkosten, günstiger als der Händler und oft innerhalb von <strong>30 bis 60 Minuten</strong> wieder unterwegs!
            </p>
            <LeadCaptureForm phone={SITE_CONFIG.phone} theme="light" />
          </div>
          
          <div className={styles.heroSplitImage}>
            <Image
              src="/images/hero-van-side.jpg"
              alt="First Class Key — Mobiler Schlüsseldienst Stuttgart"
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }}
              priority
              fetchPriority="high"
              quality={85}
            />
            <Script id="hero-image-gps" type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "contentUrl": "https://www.fc-key.de/images/hero-van-side.jpg",
                "name": "First Class Key — Mobiler Schlüsseldienst Stuttgart, Servicefahrzeug vor Ort",
                "description": "Das FC-KEY Servicefahrzeug (VW Caddy) mit vollständiger mobiler Werkstattausrüstung für Autoschlüssel nachmachen und Schlüsseldienst in Stuttgart, Sindelfingen und 50km Umkreis.",
                "contentLocation": {
                  "@type": "Place",
                  "name": "Stuttgart, Sindelfingen",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 48.7758,
                    "longitude": 9.1829
                  }
                }
              })
            }} />
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS ===== */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '1px 0' }}>
        <FeatureCards 
          title="Nachmachen. Ersetzen. Programmieren."
          subtitle={<><span style={{ color: 'var(--orange-500)' }}>First Class Key</span> macht alles, wo immer Sie sind.</>}
          features={[
            {
              id: 'feature-1',
              icon: <Image src="/images/icon_van.jpg" alt="Autoschlüssel Verloren? Direkte Hilfe" width={90} height={90} style={{ borderRadius: '12px' }} />,
              title: 'Autoschlüssel Verloren? Direkte Hilfe',
              description: 'Wir kommen direkt zu Ihrem Standort für eine Reparatur oder den Ersatz.',
              linkText: 'Mehr über den mobilen Service',
              linkUrl: '/leistungen'
            },
            {
              id: 'feature-2',
              icon: <Image src="/images/icon_map.jpg" alt="Auto verschlossen? Zerstörungsfrei öffnen" width={90} height={90} style={{ borderRadius: '12px' }} />,
              title: 'Auto verschlossen? Zerstörungsfrei öffnen',
              description: `Innerhalb von 15-30 Minuten vor Ort. Unser lokaler Monteur ist immer in der Nähe.`,
              linkText: 'Einsatzgebiete ansehen',
              linkUrl: '/standorte'
            },
            {
              id: 'feature-3',
              icon: <Image src="/images/icon_price.jpg" alt="Fester Preis im Voraus" width={90} height={90} style={{ borderRadius: '12px' }} />,
              title: 'Fester Preis im Voraus',
              description: 'Keine Überraschungen im Nachhinein. Sie wissen genau, was Sie zahlen, bevor wir beginnen.',
              linkText: 'Unsere Preise ansehen',
              linkUrl: '/preise'
            },
            {
              id: 'feature-4',
              icon: <Image src="/images/icon_car_check.jpg" alt="12 Monate Garantie" width={90} height={90} style={{ borderRadius: '12px' }} />,
              title: '12 Monate Garantie',
              description: 'Wir bieten standardmäßig 12 Monate volle Garantie auf alle unsere Schlüssel.',
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
      <section className={styles.serviceAreaSection}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <p className="section-eyebrow">MOBILER EINSATZBEREICH</p>
            <h2 className="section-title">Direkt vor Ort in Ihrer Region</h2>
            <p className="section-lead">Unsere Servicefahrzeuge sind täglich im Raum Stuttgart für Sie im Einsatz.</p>
          </div>
          
          <div className={styles.serviceAreaGrid}>
            <div className={styles.serviceAreaText}>
              <p className={styles.serviceAreaLead}>
                <strong>First Class Key</strong> bedient ein großes Einsatzgebiet in und um Stuttgart. Egal, ob Sie Ihren Autoschlüssel in <strong>Stuttgart</strong>, <strong>Sindelfingen</strong> oder <strong>Böblingen</strong> verloren haben, mit einem defekten Zündschloss in <strong>Ludwigsburg</strong> oder <strong>Esslingen</strong> stehen, oder dringend einen Transponderschlüssel in <strong>Fellbach</strong> (<strong>Waiblingen</strong>, <strong>Filderstadt</strong>, <strong>Ditzingen</strong>) oder <strong>Leonberg</strong> programmieren lassen müssen — wir kommen direkt zu Ihnen nach Hause oder zum Pannenort.
              </p>
              <p className={styles.serviceAreaSub}>
                Dank unserer modernen, GPS-gestützten Routenplanung sind unsere Techniker meist innerhalb von <strong>20 bis 60 Minuten</strong> vor Ort. Keine Abschleppkosten zum Händler und immer 100% zerstörungsfrei geöffnet und programmiert. Klicken Sie auf Ihre Region für lokale Preise und Ankunftszeiten:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginTop: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                {CITIES.map((city) => (
                  <li key={city.slug} style={{ marginBottom: '0.25rem' }}>
                    <Link href={`/standorte/${city.slug}`} style={{ color: 'var(--orange-700)', textDecoration: 'underline', fontWeight: 600 }}>
                      Autoschlüssel nachmachen {city.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '0.75rem' }}>
                <Link href="/standorte" className="btn btn-navy">Alle Städte in unserem Einsatzgebiet ansehen</Link>
              </div>
            </div>

            <div className={styles.mapContainerWrap}>
              <InstantServiceMap />
            </div>
          </div>
        </div>
      </section>

      {/* ===== E-E-A-T MEET THE OWNER ===== */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            <div>
              <p className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>LOKALE EXPERTISE &amp; VERTRAUEN</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.75rem', marginTop: '0.25rem' }}>
                Lernen Sie uns kennen
              </h2>
              <p style={{ fontWeight: 600, color: 'var(--orange-700)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Geprüfte Techniker von First Class Key
              </p>
              <p style={{ color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Wenn Sie wegen eines Autoschlüsselproblems anrufen, haben Sie es direkt mit einem Experten zu tun. Als Haupttechniker garantiere ich persönlich für die Qualität unseres Service. Mit jahrelanger aktiver Erfahrung in der Kfz-Schlosserbranche und zertifiziert von Marktführern wie Autel, programmieren wir jeden Schlüssel schnell, sicher und vor Ort.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 1.5rem 0', fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Zertifizierte Experten:</strong> Spezialisiert auf Autel IM608 Pro II &amp; AVDI Abrites.</span>
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Umfangreiche Erfahrung:</strong> Jahrelange Erfahrung mit allen Automarken und -systemen.</span>
                </li>
                <li style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> <span><strong>Zuverlässig &amp; Lokal:</strong> Faire, im Voraus kommunizierte Festpreise ohne Überraschungen.</span>
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className="btn btn-primary" id="meet-owner-phone">
                  📞 Direkt anrufen: {SITE_CONFIG.phone}
                </a>
                <Link href="/ueber-uns" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Lesen Sie mehr über uns →
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/images/seo/skoda-enyaq-key.jpg"
                alt="Autoschlüssel programmieren Skoda Enyaq iV"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  display: 'block'
                }}
              />
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
            {generateContextualReviews('autosleutel', 'general').map((r, i) => (
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
