import styles from './UrgencyBanner.module.css';
import { SITE_CONFIG } from '@/config/site.config';

export default function UrgencyBanner() {
  return (
    <div className={styles.banner} role="alert">
      <div className={styles.inner}>
        <div className={styles.dot} aria-hidden="true" />
        <span className={styles.text}>
          <strong>24/7 Notdienst</strong> — Durchschnittliche Reaktionszeit {SITE_CONFIG.responseTime} — Mobiler Einsatz vor Ort
        </span>
        <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.cta} id="banner-phone-cta">
          Jetzt Anrufen: {SITE_CONFIG.phone}
        </a>
      </div>
    </div>
  );
}
