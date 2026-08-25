'use client';

import React, { useRef } from 'react';
import styles from './TestimonialSection.module.css';
import { SITE_CONFIG } from '@/config/site.config';
import { generateContextualReviews } from '@/utils/reviews';

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Fetch the real reviews (mapped to standard format)
  const reviews = generateContextualReviews('general');

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.mainTitle}>Kundenbewertungen {SITE_CONFIG.name}</h2>
      
      <div className={styles.sliderWrapper}>
        <div className={styles.backgroundLayer}>
          <div className={styles.bgTop}></div>
          <div className={styles.bgBottom}>
            {/* Large Quote Icon on the left */}
            <div className={styles.quoteIconWrapper}>
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            {/* Controls on the right */}
            <div className={styles.controls}>
              <a href={SITE_CONFIG.social.google} target="_blank" rel="noopener noreferrer" className={styles.allReviews}>
                Alle Bewertungen
              </a>
              <button onClick={scrollLeft} className={styles.arrowBtn} aria-label="Zurück">&lt;</button>
              <button onClick={scrollRight} className={styles.arrowBtn} aria-label="Weiter">&gt;</button>
            </div>
          </div>
        </div>

        <div className={styles.contentLayer}>
          <div className={styles.mainLayout}>
            <div className={styles.leftCol}>
              <div className={styles.scoreTitle}>
                Bewertet mit<br />
                {SITE_CONFIG.rating}/5
              </div>
              <div className={styles.scoreSub}>
                Basierend auf {SITE_CONFIG.reviewCount} Bewertungen aus der gesamten Region.
              </div>
            </div>
            <div className={styles.rightCol} ref={scrollRef}>
              {reviews.map((review, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <span className={styles.name}>{review.name}</span>
                  <div className={styles.dateRow}>
                    <span className={styles.date}>{review.date}</span>
                    <span className={styles.location}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#dc2626' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Stuttgart
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* Add a few more duplicated cards to demonstrate the slider if there are too few real reviews */}
            {reviews.length < 4 && reviews.map((review, i) => (
              <div key={`dup-${i}`} className={styles.card}>
                <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <span className={styles.name}>{review.name}</span>
                  <div className={styles.dateRow}>
                    <span className={styles.date}>{review.date}</span>
                    <span className={styles.location}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#dc2626' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Sindelfingen
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
