'use client';

import React from 'react';
import Link from 'next/link';
import styles from './InstantServiceMap.module.css';
import { CITIES } from '@/config/cities';

export default function InstantServiceMap() {
  // Show top 6 priorities for the list to match the photo's clean accordion style.
  const displayCities = CITIES.filter(c => c.priority === 'P1').slice(0, 6);

  return (
    <div className={styles.container}>
      <div className={styles.mapLeft} style={{ overflow: 'hidden' }}>
        <iframe
          data-cmp-ab="1"
          src="https://www.google.com/maps/d/embed?mid=11YfgF3UnpXY64S533SE58sm0uPYzxlY&ehbc=2E312F"
          className={styles.iframeMap}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="First Class Key Einsatzgebiet Stuttgart und Umgebung"
        />
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#fff', padding: '10px 15px', borderRadius: '30px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '0.85rem', fontWeight: 600 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
          Aktiv in Ihrer Region
        </div>
      </div>

      <div className={styles.mapRight}>
        <p className={styles.eyebrow}>Einsatzgebiet</p>
        <h3 className={styles.title}>Wählen Sie Ihre Stadt</h3>
        <p className={styles.desc}>
          Wir sind täglich mit mehreren Servicefahrzeugen in den untenstehenden Regionen aktiv. Wählen Sie Ihre Stadt für direkte lokale Tarife und Ankunftszeiten.
        </p>

        <div className={styles.cityList}>
          {displayCities.map((city) => (
            <Link href={`/standorte/${city.slug}`} key={city.slug} className={styles.cityRow}>
              {city.city}
              <span className={styles.cityIcon}>+</span>
            </Link>
          ))}
        </div>

        <Link href="/standorte" className={styles.viewAllBtn}>
          Alle {CITIES.length} Städte ansehen →
        </Link>
      </div>
    </div>
  );
}
