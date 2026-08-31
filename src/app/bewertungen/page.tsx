import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site.config';
import GoogleReviewCard from '@/components/GoogleReviewCard/GoogleReviewCard';
import { generateContextualReviews } from '@/utils/reviews';

export const metadata: Metadata = {
  title: {
    absolute: 'Kundenbewertungen (5.0★) | FC-KEY',
  },
  description: `Kundenbewertungen von ${SITE_CONFIG.fullName}. 5.0/5 Sterne auf Google. 127 zufriedene Kunden.`,
  alternates: { canonical: `${SITE_CONFIG.domain}/bewertungen` },
};

export default function BewertungenPage() {
  return (
    <main id="main-content">
      <section style={{ background: 'linear-gradient(135deg, #070e1a 0%, #0a1628 100%)', padding: '5rem 2rem', textAlign: 'center' }}>
        <span className="section-label">BEWERTUNGEN</span>
        <h1 style={{ color: '#fff', marginBottom: '1rem' }}>Kundenbewertungen</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <span style={{ fontSize: '3.5rem', fontWeight: 700, color: '#f59e0b' }}>{SITE_CONFIG.rating}</span>
          <div>
            <div style={{ color: '#f59e0b', fontSize: '1.5rem', letterSpacing: '4px' }}>★★★★★</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{SITE_CONFIG.reviewCount} Bewertungen</div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {generateContextualReviews('autoschluessel', 'general').map((r, i) => (
            <GoogleReviewCard key={i} review={r} />
          ))}
          {generateContextualReviews('Stuttgart', 'city').map((r, i) => (
            <GoogleReviewCard key={i + 10} review={r} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href={SITE_CONFIG.social.google} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" id="all-google-reviews">
            Schreiben Sie Ihre Bewertung auf Google →
          </a>
        </div>
      </div>
    </main>
  );
}
