import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BrandsLogoGrid.module.css';

interface BrandsLogoGridProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  hideSeoHeader?: boolean;
}

export const BRANDS_WITH_LOGOS = [
  { name: 'Volkswagen', slug: 'volkswagen-autoschluessel-nachmachen', models: 'Golf, Polo, Tiguan, Passat', svg: 'https://cdn.simpleicons.org/volkswagen/001E50' },
  { name: 'BMW', slug: 'bmw-autoschluessel-nachmachen', models: '1-, 3-, 5-Serie, X1, X3, X5', svg: 'https://cdn.simpleicons.org/bmw/001E50' },
  { name: 'Mercedes-Benz', slug: 'mercedes-autoschluessel-nachmachen', models: 'A-Klasse, C-Klasse, E-Klasse, Sprinter', svg: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { name: 'Audi', slug: 'audi-autoschluessel-nachmachen', models: 'A1, A3, A4, A6, Q3, Q5, Q7', svg: 'https://cdn.simpleicons.org/audi/001E50' },
  { name: 'Opel', slug: 'opel-autoschluessel-nachmachen', models: 'Corsa, Astra, Mokka, Vivaro', svg: '/brands/opel_sleutel_bijmaken.webp' },
  { name: 'Ford', slug: 'ford-autoschluessel-nachmachen', models: 'Focus, Fiesta, Transit, Kuga', svg: 'https://cdn.simpleicons.org/ford/001E50' },
  { name: 'Renault', slug: 'renault-autoschluessel-nachmachen', models: 'Clio, Captur, Megane, Trafic', svg: 'https://cdn.simpleicons.org/renault/001E50' },
  { name: 'Peugeot', slug: 'peugeot-autoschluessel-nachmachen', models: '208, 308, 2008, 3008, Partner', svg: 'https://cdn.simpleicons.org/peugeot/001E50' },
  { name: 'Toyota', slug: 'toyota-autoschluessel-nachmachen', models: 'Aygo, Yaris, Corolla, RAV4', svg: 'https://cdn.simpleicons.org/toyota/001E50' },
  { name: 'Seat', slug: 'seat-autoschluessel-nachmachen', models: 'Ibiza, Leon, Arona, Ateca', svg: '/brands/seat_sleutel_bijmaken.webp' },
  { name: 'Skoda', slug: 'skoda-autoschluessel-nachmachen', models: 'Fabia, Octavia, Superb, Kodiaq', svg: '/brands/skoda_sleutel_bijmaken.webp' },
  { name: 'Volvo', slug: 'volvo-autoschluessel-nachmachen', models: 'V40, V60, XC40, XC60, XC90', svg: '/brands/volvo_sleutel_bijmaken.webp' },
  { name: 'Nissan', slug: 'nissan-autoschluessel-nachmachen', models: 'Micra, Qashqai, Juke, Leaf', svg: 'https://cdn.simpleicons.org/nissan/001E50' },
  { name: 'Hyundai', slug: 'hyundai-autoschluessel-nachmachen', models: 'i10, i20, i30, Tucson, Kona', svg: 'https://cdn.simpleicons.org/hyundai/001E50' },
  { name: 'Kia', slug: 'kia-autoschluessel-nachmachen', models: 'Picanto, Rio, Ceed, Sportage', svg: '/brands/kia_sleutel_bijmaken.svg' },
  { name: 'Citroën', slug: 'citroen-autoschluessel-nachmachen', models: 'C1, C3, C4, Berlingo, Jumper', svg: '/brands/citroen_sleutel_bijmaken.webp' },
  { name: 'Fiat', slug: 'fiat-autoschluessel-nachmachen', models: '500, Panda, Ducato, Tipo', svg: '/brands/fiat_sleutel_bijmaken.webp' },
  { name: 'Honda', slug: 'honda-autoschluessel-nachmachen', models: 'Civic, Jazz, CR-V, HR-V', svg: '/brands/honda_sleutel_bijmaken.webp' },
  { name: 'Mazda', slug: 'mazda-autoschluessel-nachmachen', models: 'Mazda2, Mazda3, CX-5, MX-5', svg: '/brands/mazda_sleutel_bijmaken.svg' },
  { name: 'Land Rover', slug: 'land-rover-autoschluessel-nachmachen', models: 'Range Rover, Discovery, Evoque', svg: '/brands/land_rover_sleutel_bijmaken.webp' },
  { name: 'Porsche', slug: 'porsche-autoschluessel-nachmachen', models: 'Cayenne, Macan, 911, Panamera', svg: '/brands/porsche_sleutel_bijmaken.webp' },
  { name: 'Mini', slug: 'mini-autoschluessel-nachmachen', models: 'Cooper, One, Countryman', svg: '/brands/mini_sleutel_bijmaken.webp' },
  { name: 'Alfa Romeo', slug: 'alfa-romeo-autoschluessel-nachmachen', models: 'Giulia, Stelvio, Giulietta, MiTo', svg: '/brands/alfa_romeo_sleutel_bijmaken.webp' },
  { name: 'Lexus', slug: 'lexus-autoschluessel-nachmachen', models: 'CT200h, RX, IS, NX', svg: '/brands/lexus_sleutel_bijmaken.webp' },
  { name: 'Mitsubishi', slug: 'mitsubishi-autoschluessel-nachmachen', models: 'Outlander, Space Star, Colt, ASX', svg: '/brands/mitsubishi_sleutel_bijmaken.webp' },
  { name: 'Smart', slug: 'smart-autoschluessel-nachmachen', models: 'Fortwo, Forfour', svg: '/brands/smart_sleutel_bijmaken.webp' },
  { name: 'Maserati', slug: 'maserati-autoschluessel-nachmachen', models: 'Ghibli, Levante, Quattroporte', svg: '/brands/maserati_sleutel_bijmaken.webp' },
  { name: 'Subaru', slug: 'subaru-autoschluessel-nachmachen', models: 'Impreza, Forester, Outback', svg: '/brands/subaru_sleutel_bijmaken.svg' },
  { name: 'Dacia', slug: 'dacia-autoschluessel-nachmachen', models: 'Duster, Sandero, Logan, Spring', svg: '/brands/dacia_sleutel_bijmaken.svg' },
  { name: 'Dodge', slug: 'dodge-autoschluessel-nachmachen', models: 'RAM, Challenger, Charger, Caliber', svg: '/brands/dodge_sleutel_bijmaken.webp' },
  { name: 'Ferrari', slug: 'ferrari-autoschluessel-nachmachen', models: '458, 488, California, F430', svg: '/brands/ferrari_sleutel_bijmaken.webp' },
  { name: 'Jaguar', slug: 'jaguar-autoschluessel-nachmachen', models: 'F-Type, XF, XE, F-Pace', svg: '/brands/jaguar_sleutel_bijmaken.webp' },
  { name: 'Saab', slug: 'saab-autoschluessel-nachmachen', models: '9-3, 9-5', svg: '/brands/saab_sleutel_bijmaken.webp' },
  { name: 'GMC', slug: 'gmc-autoschluessel-nachmachen', models: 'Sierra, Yukon, Acadia', svg: '/brands/gmc_sleutel_bijmaken.webp' },
  { name: 'Bentley', slug: 'bentley-autoschluessel-nachmachen', models: 'Continental GT, Bentayga, Flying Spur', svg: '/brands/bentley_sleutel_bijmaken.webp' }
];

export default function BrandsLogoGrid({ title, subtitle, hideSeoHeader = false }: BrandsLogoGridProps) {
  return (
    <section className={styles.brandsSection}>
      <div className="container">
        {!hideSeoHeader && (
          <div className={styles.brandsSeoHeader}>
            <h2 className={styles.brandsHeading}>{title || 'Autoschlüssel Nachmachen — Alle Marken'}</h2>
            <p className={styles.brandsLead}>
              {subtitle || 'Wir fertigen und programmieren Autoschlüssel für alle gängigen Marken direkt vor Ort. Wählen Sie Ihre Marke:'}
            </p>
          </div>
        )}

        <div className={styles.brandsLogoGrid}>
          {BRANDS_WITH_LOGOS.map((brand) => (
            <Link
              key={brand.slug}
              href={`/marken/${brand.slug}`}
              className={styles.brandLogoCard}
            >
              <Image
                src={brand.svg}
                alt={`${brand.name} logo`}
                className={styles.brandLogoImg}
                width={80}
                height={48}
                unoptimized={true}
              />
              <span className={styles.brandLogoName}>{brand.name} Schlüssel nachmachen</span>
              {/* Hidden SEO text for crawlers */}
              <span className={styles.brandSeoHidden}>{brand.models}</span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/marken" className={styles.brandsAllLink}>
            Alle 59 Marken ansehen, die wir bedienen &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
