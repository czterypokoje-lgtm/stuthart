import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { BRANDS } from '../config/brands';
import FaqSection from '@/components/FaqSection/FaqSection';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';
import InstantServiceMap from '@/components/InstantServiceMap';
import LocalBusinessSchema from '@/components/Schema/LocalBusinessSchema';
import LeadCaptureForm from '@/components/LeadCaptureForm/LeadCaptureForm';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import BrandsLogoGrid from '@/components/BrandsLogoGrid/BrandsLogoGrid';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
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

const services = [
  { 
    title: 'Autoschlüssel Nachmachen & Ersatzschlüssel', 
    desc: (
      <>
        Möchten Sie einen professionellen Ersatzschlüssel nachmachen und programmieren lassen, ohne lange Wartezeiten oder hohe Händlerpreise? Unsere mobilen Schlüsseldienste kommen 24/7 zu Ihnen, mit Preisen, die bis zu 50% günstiger sind. Wir fräsen mechanische Schlüsselbärte und lernen Smart Keys direkt über den OBD2-Anschluss an.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • Fertig in 30 bis 60 Minuten vor Ort<br/>
          • Keine teuren Abschleppkosten zum Autohaus<br/>
          • Geprüfter Ersatzschlüssel mit 12 Monaten Garantie
        </span>
      </>
    ), 
    href: '/leistungen/autoschluessel-nachmachen',
    src: '/images/seo/autosleutel_bijmaken_stuttgart_car_keys.webp',
    alt: 'Autoschlüssel nachmachen und programmieren in Stuttgart - fertig während Sie warten vor Ort'
  },
  { 
    title: 'Transponder Programmieren & Wegfahrsperre', 
    desc: (
      <>
        Startet Ihr Motor nicht mehr, weil der Transponder-Chip defekt ist oder nicht erkannt wird? Wir lösen Störungen in der ECU und Wegfahrsperre direkt vor Ort. Mit unserer Händler-Level Ausrüstung können wir Ihren Transponderschlüssel programmieren, Fehlercodes auslesen und die Wegfahrsperre zurücksetzen.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • Sichere Synchronisation neuer Krypto-Transponder<br/>
          • Vollständiger Erhalt der Werkssicherheit<br/>
          • Sofortige Hilfe bei elektronischen Startproblemen
        </span>
      </>
    ), 
    href: '/leistungen/transponder-programmieren',
    src: '/images/seo/reserve_autosleutel_transponder_programmeren_stuttgart.webp',
    alt: 'Transponder Schlüssel programmieren und Chip anlernen für alle Automarken vor Ort in Stuttgart'
  },
  { 
    title: 'Autoschlüssel Reparieren & Gehäuse Ersetzen', 
    desc: (
      <>
        Ist das Gehäuse Ihres Autoschlüssels gerissen, klemmen die Tasten oder funktioniert die Fernbedienung nicht mehr? In 90% der Fälle müssen Sie keinen teuren neuen Autoschlüssel kaufen. Unsere Spezialisten können Ihren Autoschlüssel reparieren, während Sie warten.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • Austausch verschlissener Schlüsselgehäuse<br/>
          • Präzisionslöten von Mikroschaltern auf der Platine<br/>
          • Inklusive neuer Varta oder Panasonic Batterie
        </span>
      </>
    ),
    href: '/leistungen/autoschluessel-reparieren',
    src: '/images/seo/autosleutel_reparatie_stuttgart_sindelfingen_mobiel.webp',
    alt: 'Autoschlüssel Reparatur, Gehäuse, Drucktasten und Transponder wiederherstellen in Stuttgart mobiler Service'
  },
  { 
    title: 'Zündschloss Ersetzen & Reparatur', 
    desc: (
      <>
        Dreht sich Ihr Schlüssel nicht mehr reibungslos im Zündschloss oder ist Ihr Lenkradschloss komplett blockiert? Mechanischer Verschleiß oder elektronische Störungen in Systemen wie Mercedes EIS und ELV blockieren Ihr Auto vollständig. Wir überholen und ersetzen defekte Zündschlösser vor Ort.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • Angepasst an Ihren bestehenden Schlüsselcode<br/>
          • Einen Schlüssel für alle Türen und die Zündung behalten<br/>
          • Fachgerechte Überholung bei Zündungsproblemen
        </span>
      </>
    ), 
    href: '/leistungen/zuendschloss-auto-wechseln',
    src: '/images/seo/contactslot_reparatie_vervangen_stuttgart_slotenmaker.webp',
    alt: 'Zündschloss Reparatur und Ersetzen für alle Automarken vor Ort in Stuttgart ohne Abschleppkosten'
  },
  { 
    title: 'Auto Schlüsseldienst & Zerstörungsfrei Öffnen', 
    desc: (
      <>
        Haben Sie sich ausgesperrt, den Schlüssel im Kofferraum vergessen oder hat sich Ihr Auto selbst verriegelt? Unser 24-Stunden Auto-Schlüsseldienst löst das Problem sofort. Wir können jede Autotür mit modernen Lishi-Lockpick-Werkzeugen zu 100% zerstörungsfrei öffnen.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • 24/7 Notdienst bei Aussperrung oder Schlüsselverlust<br/>
          • Keine Schäden an Lack oder Türdichtungen<br/>
          • Direkt vor Ort einen neuen Chip oder Smart Key anlernen
        </span>
      </>
    ),
    href: '/leistungen/auto-schluesseldienst',
    src: '/images/seo/auto_deur_openen_slotenmaker_stuttgart_schadevrij.webp',
    alt: 'Auto zerstörungsfrei öffnen bei vergessenem Schlüssel im Auto oder verschlossener Tür in Stuttgart und Umgebung'
  },
  { 
    title: 'Smart Key / Keyless Go System', 
    desc: (
      <>
        Haben Sie Probleme mit Ihrem Keyless-Entry-Schlüssel oder wird Ihr Smart Key nicht mehr erkannt? Moderne drahtlose Systeme erfordern spezielle Verschlüsselung und Programmierung, um Kommunikationsprobleme mit dem Bordnetz zu beheben.<br/><br/>
        <span style={{display: 'block', paddingLeft: '0.5rem', color: 'var(--navy-900)'}}>
          • Anlernen von Original- und Aftermarket-Smart-Keys<br/>
          • Unterstützung für u.a. BMW, Mercedes, Audi, VW und Ford<br/>
          • Optimaler Schutz vor Relay-Angriffen und Diebstahl
        </span>
      </>
    ), 
    href: '/leistungen/smart-key-programmieren',
    src: '/images/seo/smart-key-keyless-programmeren-fc-key-stuttgart.webp',
    alt: 'Smart Key und Keyless-Go Start-Stop Knopf programmieren und anlernen durch mobilen Spezialisten Stuttgart'
  },
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
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-van-fc-key.webp"
          alt="First Class Key — Mobiler Schlüsseldienst Stuttgart mit eigenem Servicefahrzeug"
          fill
          priority
          fetchPriority="high"
          quality={85}
          className={styles.heroBackground}
          sizes="100vw"
        />
        <Script id="hero-image-gps" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "contentUrl": "https://www.fc-key.de/images/hero-van-fc-key.webp",
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
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Der mobile Autoschlüsselspezialist — Raum Stuttgart</p>
            <h1 className={styles.heroTitle}>
              Autoschlüssel verloren oder nachmachen?<br />
              <span className={styles.heroOrange}>Wir helfen direkt vor Ort!</span>
            </h1>
            <p className={styles.heroLead}>
              Sind Sie ausgesperrt oder ist Ihr Autoschlüssel defekt? Keine Panik. First Class Key kommt mit einem komplett ausgestatteten Servicebus zu Ihnen. Keine Abschleppkosten, günstiger als der Händler und oft innerhalb von 30 bis 60 Minuten wieder fahrbereit!
            </p>
            {/* Interactive Lead Capture Form */}
            <div style={{ marginTop: '2rem' }}>
              <LeadCaptureForm phone={SITE_CONFIG.phone} />
            </div>
            
            <Link href="/autoschluessel-verloren" className={styles.heroUrgentBtn}>Alle Schlüssel verloren? →</Link>
            <div className={styles.heroTrust} style={{marginTop: '1.5rem'}}>
              <span className={styles.trustPill}>✓ {SITE_CONFIG.rating} / 5 Google ({SITE_CONFIG.reviewCount} Reviews)</span>
              <span className={styles.trustPill}>✓ 12 Monate Garantie</span>
              <span className={styles.trustPill}>✓ Versichert & Zertifiziert</span>
              <span className={styles.trustPill}>✓ 24/7 Erreichbar</span>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <HeroGoogleBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY STRIP ===== */}
      <section className={styles.emergencyStrip}>
        <div className={styles.emergencyInner}>
          <div className={styles.emergencyItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span><strong>Autoschlüssel verloren?</strong> Soforthilfe</span>
          </div>
          <div className={styles.emergencyItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <span><strong>Auto verschlossen?</strong> Zerstörungsfrei öffnen</span>
          </div>
          <div className={styles.emergencyItem}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span><strong>24/7 Notdienst</strong> Jetzt anrufen</span>
          </div>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.emergencyPhone}>{SITE_CONFIG.phone}</a>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ──────────────────────────────────────── */}
      <BrandsMarquee />

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== SERVICES ===== */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-eyebrow">UNSERE LEISTUNGEN</p>
            <h2 className="section-title">Alles für Ihren Autoschlüssel — Schnell & Zuverlässig</h2>
            <p className="section-lead">Direkt vor Ort in unserer mobilen Werkstatt programmiert. Keine versteckten Kosten und immer ein Festpreis im Voraus.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <article key={i} className={styles.serviceCard} id={`svc-${i}`}>
                <Link href={s.href} className={styles.serviceImgLink} aria-label={s.title}>
                  <div className={styles.serviceImgBox}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={400}
                      height={225}
                      className={styles.serviceImg}
                    />
                  </div>
                </Link>
                <div className={styles.serviceBody}>
                  <div className={styles.serviceTitleRow}>
                    <div className={styles.serviceIconBox}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                        {i === 0 && <><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></>}
                        {i === 1 && <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>}
                        {i === 2 && <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></>}
                        {i === 3 && <><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></>}
                        {i === 4 && <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>}
                        {i === 5 && <><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>}
                      </svg>
                    </div>
                    <h3 className={styles.serviceTitle}>
                      <Link href={s.href} className={styles.serviceTitleLink}>{s.title}</Link>
                    </h3>
                  </div>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.serviceFooter}>
                    <Link href={s.href} className={styles.serviceCardBtn}>
                      <span>Leistung &amp; Preise ansehen</span>
                      <span className={styles.serviceArrow}>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.servicesCta} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/autoschluessel-bestellen" className="btn btn-green">Autoschlüssel bestellen</Link>
            <Link href="/leistungen" className="btn btn-navy">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      {/* ===== BRANDS (VISUAL LOGO GRID) ===== */}
      <section className={styles.brandsSection}>
        <div className="container">
        {/* ---- BRANDS SEO SECTION ---- */}
        <BrandsLogoGrid />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section">
        <div className="container">
          <p className="section-eyebrow">GALERIE</p>
          <h2 className="section-title">Unsere Arbeit in Bildern</h2>
          <p className="section-lead" style={{ maxWidth: 880, margin: '0 auto 2.5rem', lineHeight: '1.75', fontSize: '0.98rem', color: 'var(--gray-600)' }}>
            Sehen Sie sich unten eine Auswahl unserer abgeschlossenen Praxisprojekte und zufriedenen Kunden im Raum Stuttgart an. Als anerkannter Autoschlüsselspezialist sind wir täglich mit unserem komplett ausgestatteten mobilen Servicebus in <Link href="/standorte/stuttgart" style={{color: 'var(--orange-500)', textDecoration: 'underline'}}>Stuttgart</Link>, <Link href="/standorte/sindelfingen" style={{color: 'var(--orange-500)', textDecoration: 'underline'}}>Sindelfingen</Link>, <Link href="/standorte/boeblingen" style={{color: 'var(--orange-500)', textDecoration: 'underline'}}>Böblingen</Link>, <Link href="/standorte/ludwigsburg" style={{color: 'var(--orange-500)', textDecoration: 'underline'}}>Ludwigsburg</Link>, <Link href="/standorte/esslingen" style={{color: 'var(--orange-500)', textDecoration: 'underline'}}>Esslingen</Link> und Umgebung im Einsatz. Egal, ob es um das Nachmachen eines Ersatzschlüssels, das fachmännische Anlernen von Keyless-Entry-Smart-Keys oder Notreparaturen bei einem verlorenen oder defekten Autoschlüssel vor Ort geht: Wir garantieren zerstörungsfreie Arbeit mit originalen OEM-Diagnosegeräten. Dank unserer transparenten Preise, schnellen Reaktionszeiten und langjährigen Expertise sparen Sie sich unnötige Abschleppkosten und lange Wartezeiten beim offiziellen Vertragshändler. Durchstöbern Sie unsere letzten Aufträge und entdecken Sie, warum unzählige Autofahrer unserem mobilen Schlüsseldienst vertrauen.
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
                {serviceAreaCities.map((city) => (
                  <li key={city.slug} style={{ marginBottom: '0.25rem' }}>
                    <Link href={`/standorte/${city.slug}`} style={{ color: 'var(--orange-700)', textDecoration: 'underline', fontWeight: 600 }}>
                      Autoschlüssel nachmachen {city.name}
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
            <div>
              <img
                src="/images/team/berkan-acarol-autosleutelspecialist-stuttgart.webp"
                alt="Autoschlüsselspezialist im Einsatz"
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  height: '220px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e1',
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
