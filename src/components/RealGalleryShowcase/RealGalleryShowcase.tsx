'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

/* ─── Photos ─────────────────────────────────────────────── */
const PHOTOS = [
  { src: '/images/hero-van-2400.webp',                                  alt: 'First Class Key Servicefahrzeug VW Caddy — mobiler Schlüsseldienst Stuttgart',          label: 'Unser Servicefahrzeug' },
  { src: '/images/merken/autoschluessel-nachmachen-bmw-1.webp',           alt: 'BMW Autoschlüssel nachmachen und programmieren vor Ort in Stuttgart',                   label: 'BMW Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-bmw-2.webp',           alt: 'BMW Smart Key CAS/FEM anlernen — mobiler Kfz-Schlüsseldienst Sindelfingen',            label: 'BMW Smart Key' },
  { src: '/images/merken/autoschluessel-nachmachen-mercedes-benz-1.webp', alt: 'Mercedes-Benz Schlüssel nachmachen — EIS/FBS Programmierung Stuttgart',               label: 'Mercedes-Benz' },
  { src: '/images/merken/autoschluessel-nachmachen-mercedes-benz-2.webp', alt: 'Mercedes Schlüssel codieren — Böblingen & Sindelfingen mobiler Service',              label: 'Mercedes Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-audi-1.webp',          alt: 'Audi Autoschlüssel nachmachen — Transponder anlernen Stuttgart & Umkreis',             label: 'Audi Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-audi-2.webp',          alt: 'Audi Smart Key programmieren — mobil in Stuttgart',                                    label: 'Audi Smart Key' },
  { src: '/images/merken/autoschluessel-nachmachen-volkswagen-1.webp',    alt: 'VW Volkswagen Schlüssel nachmachen — MQB Transponder Stuttgart',                       label: 'VW Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-volkswagen-2.webp',    alt: 'VW Golf GTI Schlüssel codieren — FC-KEY mobiler Service Böblingen',                   label: 'VW Golf' },
  { src: '/images/merken/autoschluessel-nachmachen-ford-1.webp',          alt: 'Ford Autoschlüssel nachmachen — vor Ort Sindelfingen & Stuttgart',                     label: 'Ford Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-ford-2.webp',          alt: 'Ford Focus / Transit Schlüssel programmieren — Stuttgart',                             label: 'Ford Transit' },
  { src: '/images/merken/autoschluessel-nachmachen-renault-1.webp',       alt: 'Renault Keycard nachmachen — Schlüsselkarte programmieren Stuttgart',                  label: 'Renault Keycard' },
  { src: '/images/merken/autoschluessel-nachmachen-skoda-1.webp',         alt: 'Škoda Autoschlüssel nachmachen — Transponder Stuttgart Umkreis',                       label: 'Škoda Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-hyundai-1.webp',       alt: 'Hyundai Schlüssel nachmachen und anlernen — Stuttgart',                                label: 'Hyundai Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-nissan-1.webp',        alt: 'Nissan Autoschlüssel nachmachen — Qashqai / Juke Transponder Stuttgart',              label: 'Nissan Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-opel-1.webp',          alt: 'Opel Autoschlüssel nachmachen — Astra / Corsa / Insignia Transponder Stuttgart',      label: 'Opel Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-fiat-1.webp',          alt: 'Fiat Autoschlüssel nachmachen — 500 / Panda Transponder codieren Stuttgart',          label: 'Fiat Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-jeep-1.webp',          alt: 'Jeep Autoschlüssel nachmachen — Wrangler / Cherokee Smart Key Stuttgart',             label: 'Jeep Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-mini-1.webp',          alt: 'MINI Cooper Autoschlüssel nachmachen — CAS Programmierung Stuttgart',                 label: 'MINI Schlüssel' },
  { src: '/images/merken/autoschluessel-nachmachen-land-rover-1.webp',    alt: 'Land Rover / Range Rover Schlüssel nachmachen — Stuttgart & Böblingen',               label: 'Land Rover' },
  { src: '/images/merken/autoschluessel-nachmachen-werkplaats-1.webp',    alt: 'FC-KEY mobiler Schlüsseldienst bei der Arbeit — Stuttgart Sindelfingen',               label: 'Mobiler Service' },
  { src: '/images/merken/autoschluessel-nachmachen-werkplaats-2.webp',    alt: 'Kfz-Schlüssel programmieren vor Ort — FC-KEY First Class Key Stuttgart 24/7',         label: 'Vor Ort Service' },
  { src: '/images/merken/autoschluessel-nachmachen-mercedes-benz-3.webp', alt: 'Mercedes C/E-Klasse Schlüssel nachmachen — Stuttgart & Umgebung',                     label: 'Mercedes C-Klasse' },
  { src: '/images/merken/autoschluessel-nachmachen-volkswagen-3.webp',    alt: 'VW Passat / Tiguan Schlüssel codieren — FC-KEY vor Ort Esslingen',                    label: 'VW Passat' },
];

const CARD_W = 300; // px per card
const GAP    = 16;  // px gap

export interface GalleryPhoto {
  src: string;
  alt: string;
  label?: string;
}

interface RealGalleryShowcaseProps {
  photos?: GalleryPhoto[];
}

export default function RealGalleryShowcase({ photos = PHOTOS }: RealGalleryShowcaseProps) {
  const rail = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const displayedPhotos = showAll ? photos : photos.slice(0, 6);

  function slide(dir: 'left' | 'right') {
    if (!showAll) setShowAll(true);
    setTimeout(() => {
      const el = rail.current;
      if (!el) return;
      el.scrollBy({ left: dir === 'left' ? -(CARD_W + GAP) * 2 : (CARD_W + GAP) * 2, behavior: 'smooth' });
    }, 50);
  }

  return (
    <div style={{ width: '100%', userSelect: 'none' }}>

      {/* ── Rail ── */}
      <div
        ref={rail}
        onScroll={() => !showAll && setShowAll(true)}
        onTouchStart={() => !showAll && setShowAll(true)}
        onMouseEnter={() => !showAll && setShowAll(true)}
        style={{
          display: 'flex',
          gap: GAP,
          overflowX: 'scroll',          /* native scroll — always works */
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 8,
          paddingLeft: 4,
          paddingRight: 4,
          /* hide scrollbar visually */
          scrollbarWidth: 'none',
        }}
      >
        {displayedPhotos.map((p, i) => (
          <div
            key={i}
            style={{
              flex: `0 0 ${CARD_W}px`,
              width: CARD_W,
              scrollSnapAlign: 'start',
              borderRadius: 12,
              overflow: 'hidden',
              position: 'relative',
              background: '#0f172a',
              aspectRatio: '4/3',
              boxShadow: '0 4px 16px rgba(0,0,0,.18)',
            }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="300px"
              loading={i < 4 ? 'eager' : 'lazy'}
              style={{ objectFit: 'cover' }}
            />
            {/* Label overlay (optional) */}
            {p.label && (
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(4,38,85,.88) 0%, transparent 100%)',
                padding: '1.5rem 0.875rem 0.625rem',
                color: '#fff', fontSize: '0.8rem', fontWeight: 700,
              }}>
                {p.label}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Buttons ── */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 16 }}>
        <button
          type="button"
          onClick={() => slide('left')}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            border: '2px solid #cbd5e1', background: '#f8fafc',
            fontSize: 20, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#0f172a', transition: 'all .15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#042655'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#042655'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f8fafc'; (e.currentTarget as HTMLButtonElement).style.color = '#0f172a'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#cbd5e1'; }}
          aria-label="Zurück"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => slide('right')}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            border: '2px solid #cbd5e1', background: '#f8fafc',
            fontSize: 20, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#0f172a', transition: 'all .15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#042655'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#042655'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f8fafc'; (e.currentTarget as HTMLButtonElement).style.color = '#0f172a'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#cbd5e1'; }}
          aria-label="Weiter"
        >
          →
        </button>
      </div>
    </div>
  );
}
