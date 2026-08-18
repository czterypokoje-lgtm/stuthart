import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BrandsLogoGrid.module.css';

interface BrandsLogoGridProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  hideSeoHeader?: boolean;
}

export const TOP_BRANDS = [
  { name: 'Volkswagen', slug: 'volkswagen-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/volkswagen/001E50' },
  { name: 'Audi', slug: 'audi-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/audi/001E50' },
  { name: 'Mercedes-Benz', slug: 'mercedes-autoschluessel-nachmachen', svg: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { name: 'Skoda', slug: 'skoda-autoschluessel-nachmachen', svg: '/brands/skoda_sleutel_bijmaken.webp' },
  { name: 'BMW', slug: 'bmw-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/bmw/001E50' },
  { name: 'Ford', slug: 'ford-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/ford/001E50' },
  { name: 'Opel', slug: 'opel-autoschluessel-nachmachen', svg: '/brands/opel_sleutel_bijmaken.webp' },
  { name: 'Renault', slug: 'renault-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/renault/001E50' },
  { name: 'Peugeot', slug: 'peugeot-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/peugeot/001E50' },
  { name: 'Toyota', slug: 'toyota-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/toyota/001E50' },
  { name: 'Seat', slug: 'seat-autoschluessel-nachmachen', svg: '/brands/seat_sleutel_bijmaken.webp' },
  { name: 'Hyundai', slug: 'hyundai-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/hyundai/001E50' },
  { name: 'Kia', slug: 'kia-autoschluessel-nachmachen', svg: '/brands/kia_sleutel_bijmaken.svg' },
  { name: 'Fiat', slug: 'fiat-autoschluessel-nachmachen', svg: '/brands/fiat_sleutel_bijmaken.webp' },
  { name: 'Nissan', slug: 'nissan-autoschluessel-nachmachen', svg: 'https://cdn.simpleicons.org/nissan/001E50' },
  { name: 'Citroën', slug: 'citroen-autoschluessel-nachmachen', svg: '/brands/citroen_sleutel_bijmaken.webp' },
];

export default function BrandsLogoGrid({ title, subtitle, hideSeoHeader = false }: BrandsLogoGridProps) {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.heroContainer}>
        
        {/* Left side text and brands */}
        <div className={styles.textContent}>
          {!hideSeoHeader && (
            <div className={styles.badge}>
              <svg className={styles.badgeIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
              Autosleutel24 verbindet Kunden mit geprüften Experten
            </div>
          )}

          <h2 className={styles.heading}>{title || 'Autoschlüssel-Service für zahlreiche Fahrzeugmarken'}</h2>
          
          <p className={styles.lead}>
            {subtitle || 'Von Volkswagen über Audi bis Mercedes oder Skoda – mit uns finden Sie schnell geprüfte Autoschlüssel-Experten für Ihr Fahrzeug direkt vor Ort.'}
          </p>

          <div className={styles.brandLogosRow}>
            {TOP_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/marken/${brand.slug}`}
                className={styles.brandLogoCard}
              >
                <Image
                  src={brand.svg}
                  alt={`${brand.name} logo`}
                  className={styles.brandLogoImg}
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/kontakt" className={styles.primaryButton}>
              Kontakt aufnehmen &rarr;
            </Link>
            <Link href="/partner" className={styles.secondaryButton}>
              B2B Partner
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className={styles.imageContent}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <Image 
            src="/images/team/woman_pointing.jpg" 
            alt="Autoschlüssel Expertin" 
            width={550} 
            height={650} 
            className={styles.personImage}
            unoptimized={true}
          />
        </div>

      </div>
    </section>
  );
}
