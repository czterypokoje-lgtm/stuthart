import React from 'react';
import { SITE_CONFIG } from '@/config/site.config';
import styles from './HeroGoogleBadge.module.css';

const STAR = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';

export default function HeroGoogleBadge() {
  const rating = parseFloat(SITE_CONFIG.rating);
  const pct = `${(rating / 5) * 100}%`;
  // German decimal comma — "4,7", not "4.7".
  const ratingLabel = SITE_CONFIG.rating.replace('.', ',');

  return (
    <a
      className={styles.badge}
      href={SITE_CONFIG.social.google}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ratingLabel} von 5 Sternen aus ${SITE_CONFIG.reviewCount} Google-Bewertungen — Profil ansehen`}
    >
      <svg className={styles.g} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>

      <strong className={styles.score}>{ratingLabel}</strong>

      {/* One gradient across the whole row gives an honest partial last star. */}
      <svg className={styles.stars} viewBox="0 0 120 24" width="100" height="20" aria-hidden="true">
        <defs>
          <linearGradient id="fck-stars" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">
            <stop offset={pct} stopColor="#F5A623" />
            <stop offset={pct} stopColor="#D8DCE1" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={STAR} fill="url(#fck-stars)" transform={`translate(${i * 24}) scale(1)`} />
        ))}
      </svg>

      <span className={styles.count}>{SITE_CONFIG.reviewCount} Bewertungen</span>
    </a>
  );
}
