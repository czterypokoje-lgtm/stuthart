import React from 'react';
import Link from 'next/link';
import { CITIES } from '@/config/cities';
import styles from './ServiceCoverageMap.module.css';

export default function ServiceCoverageMap() {
  // Top cities we want to highlight in the grid
  const topCities = CITIES.slice(0, 10);

  return (
    <section className={styles.section}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      
      <div className={styles.container}>
        {/* LEFT: VISUAL SPACER FOR BACKGROUND IMAGE WITH LIVE PINS */}
        <div className={styles.radarContainer}>
          {/* Stuttgart Pin */}
          <div className={`${styles.pin} ${styles.pinStuttgart}`}>
            <div className={styles.pinDot} />
            <div className={styles.pinLabel}>
              Stuttgart <span className={styles.pinTime}>~15m</span>
            </div>
          </div>

          {/* Sindelfingen Pin */}
          <div className={`${styles.pin} ${styles.pinSindelfingen}`}>
            <div className={styles.pinDot} />
            <div className={styles.pinLabel}>
              Sindelfingen <span className={styles.pinTime}>~20m</span>
            </div>
          </div>

          {/* Ludwigsburg Pin */}
          <div className={`${styles.pin} ${styles.pinLudwigsburg}`}>
            <div className={styles.pinDot} />
            <div className={styles.pinLabel}>
              Ludwigsburg <span className={styles.pinTime}>~25m</span>
            </div>
          </div>

          {/* Esslingen Pin */}
          <div className={`${styles.pin} ${styles.pinEsslingen}`}>
            <div className={styles.pinDot} />
            <div className={styles.pinLabel}>
              Esslingen <span className={styles.pinTime}>~25m</span>
            </div>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE CITIES GRID */}
        <div className={styles.content}>
          <h2 className={styles.title}>Wo bieten wir unseren Service an?</h2>
          <p className={styles.description}>
            Als mobiler Autoschlüsselservice sind wir in der Region Stuttgart, Sindelfingen und im 50km Umkreis aktiv. Entdecken Sie unser Einsatzgebiet:
          </p>
          
          <div className={styles.cityGrid}>
            {topCities.map((c) => (
              <Link key={c.slug} href={`/standorte/${c.slug}`} className={styles.cityCard}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{c.city}</span>
                <svg className={styles.cardArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          
          <Link href="/standorte" className={styles.bottomLink}>
            Komplettes Einsatzgebiet ansehen &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
