import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import { BRANDS } from '../../config/brands';
import { CITIES } from '../../config/cities';

const leistungen = [
  ['Autoschlüssel nachmachen', '/leistungen/autoschluessel-nachmachen'],
  ['Transponder programmieren', '/leistungen/transponder-programmieren'],
  ['Smart Key / Keyless', '/leistungen/smart-key-programmieren'],
  ['Zündschloss ersetzen', '/leistungen/zuendschloss-auto-wechseln'],
  ['Ersatzschlüssel machen', '/leistungen/ersatzschluessel-machen'],
  ['Autoschlüssel reparieren', '/leistungen/autoschluessel-reparieren'],
  ['Alle Leistungen →', '/leistungen'],
];


const spoed = [
  ['Autoschlüssel verloren', '/autoschluessel-verloren'],
  ['Auto öffnen ohne Schlüssel', '/leistungen/auto-ohne-schluessel-oeffnen'],
  ['24/7 Notdienst', '/leistungen/auto-schluesseldienst'],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div>
            <div className={styles.footerBrand}>
              <Image
                src="/logo-golden-crest.jpg"
                alt="First Class Key Logo"
                width={120}
                height={120}
                style={{ height: '120px', width: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </div>
            <p className={styles.footerDesc}>Professionelle mobile Autoschlüssel-Programmierung für alle Marken. Aktiv in <Link href="/standorte/stuttgart" className={styles.seoLink}>Stuttgart</Link>, <Link href="/standorte/sindelfingen" className={styles.seoLink}>Sindelfingen</Link>, <Link href="/standorte/boeblingen" className={styles.seoLink}>Böblingen</Link>, <Link href="/standorte/ludwigsburg" className={styles.seoLink}>Ludwigsburg</Link>, <Link href="/standorte/esslingen" className={styles.seoLink}>Esslingen</Link>, <Link href="/standorte/leonberg" className={styles.seoLink}>Leonberg</Link>, <Link href="/standorte/fellbach" className={styles.seoLink}>Fellbach</Link>, <Link href="/standorte/waiblingen" className={styles.seoLink}>Waiblingen</Link>, <Link href="/standorte/filderstadt" className={styles.seoLink}>Filderstadt</Link>, <Link href="/standorte/ditzingen" className={styles.seoLink}>Ditzingen</Link> und der restlichen Region.</p>
            <div className={styles.footerBadges}>
              <span>Handelsregister: {SITE_CONFIG.kvk}</span>
              <span>USt-IdNr: {SITE_CONFIG.btw}</span>
              <span>{SITE_CONFIG.rating} ★ Google</span>
              <span>Versichert</span>
            </div>
            <div className={styles.footerContact} style={{ marginTop: '1.5rem' }}>
              <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              <span className={styles.hours}>24/7 Erreichbar</span>
            </div>
          </div>

          {/* Leistungen & Spoed */}
          <div>
            <h4 className={styles.colTitle}>Notdienst</h4>
            <ul className={styles.linkList}>
              {spoed.map(([label, href]) => <li key={href}><Link href={href} style={{ color: 'var(--orange-400)' }}>{label}</Link></li>)}
            </ul>
            <h4 className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Leistungen</h4>
            <ul className={styles.linkList}>
              {leistungen.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
            </ul>
          </div>

          {/* Merken */}
          <div>
            <h4 className={styles.colTitle}>Marken</h4>
            <ul className={styles.linkList}>
              {BRANDS.filter(b => b.priority === 'P1').map(b => (
                <li key={b.slug}><Link href={`/marken/${b.nameSlug}-autoschluessel-nachmachen`}>{b.name} Schlüssel nachmachen</Link></li>
              ))}
              <li><Link href="/marken">Alle 59 Marken →</Link></li>
            </ul>
            <h4 className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Blog &amp; Ratgeber</h4>
            <ul className={styles.linkList}>
              <li><Link href="/blog/autoschluessel-batterie-wechseln-anleitung">Batterie wechseln</Link></li>
              <li><Link href="/blog/autoschluessel-gestohlen-was-tun">Schlüssel gestohlen?</Link></li>
              <li><Link href="/faq" style={{ color: 'var(--orange-400)', fontWeight: 600 }}>FAQ & Wissensdatenbank →</Link></li>
            </ul>
          </div>

          {/* Steden */}
          <div>
            <h4 className={styles.colTitle}>Städte</h4>
            <ul className={styles.linkList}>
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link href={`/standorte/${c.slug}`}>
                    {c.city}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <Link href="/standorte" style={{ color: 'var(--orange-400)', fontWeight: 600 }}>
                  Alle Städte & Regionen →
                </Link>
              </li>
            </ul>
          </div>

          {/* Over Ons & Openingstijden */}
          <div>
            <h4 className={styles.colTitle}>Über Uns</h4>
            <ul className={styles.linkList} style={{ marginBottom: '1.5rem' }}>
              <li><Link href="/bewertungen">Kundenbewertungen</Link></li>
              <li><Link href="/galerie">Unsere Galerie</Link></li>
              <li><Link href="/ueber-uns">Über Uns</Link></li>
            </ul>

            <h4 className={styles.colTitle}>Öffnungszeiten</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>
              <tbody>
                {[
                  ['Montag', '24 Stunden geöffnet'],
                  ['Dienstag', '24 Stunden geöffnet'],
                  ['Mittwoch', '24 Stunden geöffnet'],
                  ['Donnerstag', '24 Stunden geöffnet'],
                  ['Freitag', '24 Stunden geöffnet'],
                  ['Samstag', '24 Stunden geöffnet'],
                  ['Sonntag', '24 Stunden geöffnet'],
                ].map(([dag, tijd]) => (
                  <tr key={dag} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '0.35rem 0', fontWeight: 500 }}>{dag}</td>
                    <td style={{ padding: '0.35rem 0', textAlign: 'right', color: 'var(--orange-400)', fontWeight: 600 }}>{tijd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomInner}>
            <div className={styles.footerSeoText} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                First Class Key ist Ihr zuverlässiger, mobiler Autoschlüsselspezialist im Raum Stuttgart. Mit unserer fortschrittlichen Diagnoseausrüstung und CNC-Fräsmaschinen öffnen wir schadensfrei Türen, programmieren Smart Keys und lösen 'All Keys Lost' Situationen vor Ort. 24/7 erreichbar in <Link href="/standorte/stuttgart" className={styles.seoLink}>Stuttgart</Link>, <Link href="/standorte/sindelfingen" className={styles.seoLink}>Sindelfingen</Link>, <Link href="/standorte/boeblingen" className={styles.seoLink}>Böblingen</Link>, <Link href="/standorte/ludwigsburg" className={styles.seoLink}>Ludwigsburg</Link>, <Link href="/standorte/esslingen" className={styles.seoLink}>Esslingen</Link>, <Link href="/standorte/leonberg" className={styles.seoLink}>Leonberg</Link>, <Link href="/standorte/fellbach" className={styles.seoLink}>Fellbach</Link>, <Link href="/standorte/waiblingen" className={styles.seoLink}>Waiblingen</Link> und der restlichen Region mit standardmäßiger 12-monatiger Garantie.
              </p>
            </div>
            <p>© {year} {SITE_CONFIG.fullName}. Alle Rechte vorbehalten.</p>
            <div className={styles.bottomLinks}>
              <a
                href="https://www.iubenda.com/privacy-policy/c53c352b-ed07-4c5b-b461-8b542ddd3aaf"
                className="iubenda-white iubenda-noiframe iubenda-embed"
                title="Privacy Policy"
                rel="noopener noreferrer"
              >
                Datenschutzerklärung
              </a>
              <a
                href="https://www.iubenda.com/privacy-policy/c53c352b-ed07-4c5b-b461-8b542ddd3aaf/cookie-policy"
                className="iubenda-white iubenda-noiframe iubenda-embed"
                title="Cookie Policy"
                rel="noopener noreferrer"
              >
                Cookie-Richtlinie
              </a>
              <button
                type="button"
                className="iubenda-cs-preferences-link"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'inherit',
                }}
              >
                Cookie-Einstellungen
              </button>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Kontakt</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
