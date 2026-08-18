'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { SITE_CONFIG } from '@/config/site.config';

const LeistungenStructure = [
  {
    title: 'Auto Schlüsseldienst',
    href: '/leistungen/auto-schluesseldienst',
    subs: [
      { href: '/leistungen/auto-ohne-schluessel-oeffnen', label: 'Auto öffnen ohne Schlüssel' },
      { href: '/leistungen/schluessel-im-auto', label: 'Schlüssel im Auto' },
      { href: '/leistungen/tuer-zugefallen', label: 'Tür zugefallen' },
      { href: '/leistungen/kofferraum-oeffnen', label: 'Kofferraum öffnen' },
      { href: '/leistungen/schluessel-im-schloss-abgebrochen', label: 'Schlüssel abgebrochen' },
    ]
  },
  {
    title: 'Autoschlüssel nachmachen',
    href: '/leistungen/autoschluessel-nachmachen',
    subs: [
      { href: '/leistungen/transponder-programmieren', label: 'Transponder programmieren' },
      { href: '/leistungen/fernbedienung-nachmachen', label: 'Fernbedienung nachmachen' },
      { href: '/leistungen/smart-key-programmieren', label: 'Smart Key / Keyless' },
      { href: '/leistungen/ersatzschluessel-machen', label: 'Ersatzschlüssel machen' },
      { href: '/autoschluessel-bestellen', label: 'Nach VIN bestellen' },
    ]
  },
  {
    title: 'Autoschlüssel verloren',
    href: '/autoschluessel-verloren',
    subs: [
      { href: '/leistungen/notoeffnung-auto', label: 'Notöffnung' },
      { href: '/leistungen/alle-schluessel-verloren-auto', label: 'Alle Schlüssel verloren (AKL)' },
    ]
  },
  {
    title: 'Batterie wechseln',
    href: '/leistungen/batterie-wechseln',
    price: '€15 - €20',
    subs: []
  },
  {
    title: 'Autoschlüssel reparieren',
    href: '/leistungen/autoschluessel-reparieren',
    subs: [
      { href: '/leistungen/gehaeuse-wechseln', label: 'Gehäuse wechseln' },
      { href: '/leistungen/tasten-reparieren', label: 'Tasten reparieren' },
    ]
  },
  {
    title: 'Zündschloss ersetzen',
    href: '/leistungen/zuendschloss-auto-wechseln',
    subs: []
  },
];

const MerkenLinks = [
  { href: '/marken/bmw-autoschluessel-nachmachen', label: 'BMW' },
  { href: '/marken/mercedes-autoschluessel-nachmachen', label: 'Mercedes-Benz' },
  { href: '/marken/volkswagen-autoschluessel-nachmachen', label: 'Volkswagen' },
  { href: '/marken/audi-autoschluessel-nachmachen', label: 'Audi' },
  { href: '/marken/toyota-autoschluessel-nachmachen', label: 'Toyota' },
  { href: '/marken/ford-autoschluessel-nachmachen', label: 'Ford' },
  { href: '/marken/volvo-autoschluessel-nachmachen', label: 'Volvo' },
  { href: '/marken/opel-autoschluessel-nachmachen', label: 'Opel' },
];



export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="First Class Key — 24/7 Autoschlüsselspezialist Stuttgart homepage">
          <Image
            src="/logo-golden-crest.jpg"
            alt="First Class Key Logo"
            width={80}
            height={80}
            style={{ height: '80px', width: 'auto', display: 'block', borderRadius: '8px' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} role="navigation" aria-label="Hauptnavigation">
          {/* Leistungen dropdown */}
          <div className={styles.dropdown}>
            <button className={styles.navBtn} aria-haspopup="true">
              Leistungen
              <svg className={styles.chevron} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div className={styles.dropMenuLarge}>
              <div className={styles.dropHeader}>Unsere Leistungen</div>
              <div className={styles.dropGridLarge}>
                {LeistungenStructure.map(pillar => (
                  <div key={pillar.title} className={styles.dropColumn}>
                    <Link href={pillar.href} className={styles.pillarTitle}>
                      {pillar.title} {pillar.price ? ` (${pillar.price})` : ''}
                    </Link>
                    {pillar.subs.length > 0 && (
                      <div className={styles.subList}>
                        {pillar.subs.map(sub => (
                          <Link key={sub.href} href={sub.href} className={styles.subLinkItem}>{sub.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.dropDivider} />
              <Link href="/leistungen" className={styles.dropAll}>Alle Leistungen ansehen →</Link>
            </div>
          </div>

          {/* Marken dropdown */}
          <div className={styles.dropdown}>
            <button className={styles.navBtn} aria-haspopup="true">
              Marken
              <svg className={styles.chevron} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
            </button>
            <div className={styles.dropMenu}>
              <div className={styles.dropHeader}>Beliebte Marken</div>
              <div className={styles.dropGrid}>
                {MerkenLinks.map(l => (
                  <Link key={l.href} href={l.href} className={styles.dropItem}>{l.label}</Link>
                ))}
              </div>
              <div className={styles.dropDivider} />
              <Link href="/marken" className={styles.dropAll}>Alle 59 Marken →</Link>
            </div>
          </div>



          <Link href="/standorte" className={styles.navLink}>Städte</Link>
          <Link href="/preise" className={styles.navLink}>Preise</Link>
          <Link href="/blog" className={styles.navLink}>Blog &amp; Ratgeber</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          <Link href="/ueber-uns" className={styles.navLink}>Über Uns</Link>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.phoneLink} id="nav-phone-cta" aria-label={`Jetzt anrufen: ${SITE_CONFIG.phone}`}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <Link href="/contact" className={styles.ctaBtn} id="nav-offerte-cta">
            Angebot anfordern
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className={`${styles.mobileDrawer} ${styles.mobileDrawerOpen}`} role="dialog" aria-modal="true" aria-label="Navigationsmenü">
            <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.mobilePhone} onClick={() => setMobileOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              Jetzt anrufen: {SITE_CONFIG.phone}
            </a>



            <div className={styles.mobileSection}>
              <div className={styles.mobileSectionTitle}>Leistungen</div>
              <div className={styles.mobileLeistungenGroup}>
                {LeistungenStructure.map(pillar => (
                  <div key={pillar.title} className={styles.mobilePillarBlock}>
                    <Link href={pillar.href} className={styles.mobilePillarLink} onClick={() => setMobileOpen(false)}>
                      {pillar.title} {pillar.price ? ` (${pillar.price})` : ''}
                    </Link>
                    {pillar.subs.map(sub => (
                      <Link key={sub.href} href={sub.href} className={styles.mobileSubLink} onClick={() => setMobileOpen(false)}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.mobileSection}>
              <div className={styles.mobileSectionTitle}>Marken</div>
              {MerkenLinks.map(l => <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{l.label}</Link>)}
              <Link href="/marken" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Alle 59 Marken →</Link>
            </div>

            <div className={styles.mobileDivider} />
            <Link href="/standorte" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Städte</Link>
            <Link href="/preise" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Preise</Link>
            <Link href="/blog" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Blog &amp; Ratgeber</Link>
            <Link href="/ueber-uns" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Über Uns</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Kontakt</Link>
          </div>
        </>
      )}
    </header>
  );
}
