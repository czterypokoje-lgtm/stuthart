import type { Metadata } from 'next';
import Link from 'next/link';
import { LEISTUNGEN } from '@/config/leistungen';
import { SITE_CONFIG, WHATSAPP_URL } from '@/config/site.config';
import BrandsMarquee from '@/components/BrandsMarquee/BrandsMarquee';
import TrustindexHeroWidget from '@/components/TrustindexHeroWidget/TrustindexHeroWidget';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: {
    absolute: 'Alle Autoschlüssel Leistungen 24/7 | FC-KEY',
  },
  description: 'Übersicht unserer Autoschlüssel Leistungen: nachmachen, programmieren, reparieren und Sicherheit. Mobiler Service vor Ort.',
  alternates: { canonical: `${SITE_CONFIG.domain}/leistungen` },
};

export default function LeistungenOverviewPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.label}>UNSERE LEISTUNGEN</span>
          <TrustindexHeroWidget />
          <h1>Professionelle Autoschlüssel Services</h1>
          <p className={styles.heroSub}>
            Wir lösen jedes Autoschlüssel Problem direkt vor Ort. Keine Abschleppkosten, keine langen Wartezeiten beim Händler.
          </p>
        </div>
      </section>

      <BrandsMarquee />

      <div className="container" style={{ padding: '3rem 2rem', maxWidth: 1000, margin: '0 auto' }}>
        <h2 className={styles.tableTitle}>Leistungen Übersicht</h2>
        <div className={styles.tableWrap}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Dienstleistung</th>
                <th>Was wir tun</th>
                <th>Dauer</th>
                <th className={styles.actionCol}></th>
              </tr>
            </thead>
            <tbody>
              {LEISTUNGEN.map((s, i) => (
                <tr key={i}>
                  <td className={styles.serviceCell}>
                    <Link href={`/leistungen/${s.slug}`} className={styles.serviceLink}>{s.title}</Link>
                  </td>
                  <td className={styles.descCell}>{s.intro.split('.')[0]}.</td>
                  <td className={styles.timeCell}>{s.duration || '30–60 Min'}</td>
                  <td className={styles.actionCell}>
                    <Link href={`/leistungen/${s.slug}`} className={styles.moreBtn}>Details →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── COMPREHENSIVE LEISTUNGEN SEO GUIDE ARTICLE ── */}
        <section style={{ padding: '3.5rem 0', background: '#ffffff' }}>
          <div className="seo-article-block" style={{ marginTop: 0 }}>
            <h2>Komplette Übersicht unserer mobilen Autoschlüssel &amp; Schlüsseldienst Leistungen</h2>
            <p>
              Als spezialisierter Autoschlüsseldienst bietet <strong>{SITE_CONFIG.name}</strong> eine Komplettlösung für jede Art von Autoschlüsselproblem. Egal, ob Sie Ihren Schlüssel im Auto gelassen haben, mit einem abgebrochenen Schlüsselbart kämpfen, ein defektes Zündschloss haben oder die Batterie Ihres Smart Keys leer ist: Unsere mobilen Techniker stehen Ihnen 24/7 zur Verfügung, um Ihnen direkt vor Ort zu helfen.
            </p>
            <h3>1. Schadensfrei Autotür Öffnen &amp; Notöffnungen</h3>
            <p>
              Ist Ihre Autotür zugefallen, während der Schlüssel noch im Zündschloss oder auf dem Sitz liegt? Wir öffnen Ihr Auto zu 100% schadensfrei mit fortschrittlichen Lishi Lock Decodern. Im Gegensatz zu traditionellen Aufbruchmethoden bleibt Ihr Originalschloss vollständig intakt.
            </p>
            <h3>2. Autoschlüssel Nachmachen &amp; Programmieren vor Ort</h3>
            <p>
              Wir fräsen mechanische Schlüsselbärte direkt mit unseren mobilen CNC-Lasermaschinen und lesen Ihre Wegfahrsperre (Immobilizer) über den OBD2-Diagnoseanschluss aus. Wir liefern und programmieren originale Transponderchips und Keyless-Go-Schlüssel für über 59 Automarken.
            </p>
            <h3>3. All Keys Lost (AKL) — Alle Schlüssel Verloren</h3>
            <p>
              Haben Sie alle Ihre Autoschlüssel verloren? Keine Panik. Während ein Händler Sie zwingt, Ihr Auto abschleppen zu lassen, und oft komplette Schlosssätze austauscht, generieren wir vor Ort einen komplett neuen Schlüssel und löschen die alten, verlorenen Schlüssel aus dem Speicher Ihres Bordcomputers.
            </p>
          </div>
        </section>

        <div className={styles.cta}>
          <h2>Sofort Hilfe benötigt?</h2>
          <p>Rufen Sie an oder schreiben Sie per WhatsApp für einen Kostenvoranschlag und Terminplanung.</p>
          <div className={styles.ctaBtns}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.btnPhone} id="leistungen-overview-phone">{SITE_CONFIG.phone}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnWa} id="leistungen-overview-wa">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  );
}
