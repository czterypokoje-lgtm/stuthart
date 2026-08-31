import { SITE_CONFIG } from '@/config/site.config';
import { BLOG_POSTS } from '@/config/services';
import { CITIES } from '@/config/cities';

const BASE = 'https://www.fc-key.nl';

// ── Core SEO images with descriptive alt/title metadata ──
const CORE_IMAGES = [
  {
    url: '/autoschluessel-nachmachen-stuttgart-sindelfingen-mobil.webp',
    title: 'Autoschlüssel Nachmachen Stuttgart und Sindelfingen',
    caption: 'FC-KEY — mobiler Autoschlüssel-Spezialist in Stuttgart, Sindelfingen und 50km Umkreis',
    geo_location: 'Stuttgart und Sindelfingen, Deutschland',
  },
  {
    url: '/fc-key-schluesselnachmachen-stuttgart.webp',
    title: 'Autoschlüssel Nachmachen Stuttgart',
    caption: 'Professionelles Autoschlüssel Nachmachen vor Ort in Stuttgart durch FC-KEY',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/hero-auto.webp',
    title: 'Auto Schlüssel Service Stuttgart 24/7',
    caption: 'FC-KEY — 24/7 mobiler Autoschlüssel Service in Stuttgart und Umgebung',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/auto_tuer_oeffnen_schluesseldienst_stuttgart_schadensfrei.webp',
    title: 'Auto Tür Öffnen Schadensfrei Stuttgart',
    caption: 'Professioneller Auto Schlüsseldienst öffnet Tür schadensfrei in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/auto_schluessel_machen_vor_ort_stuttgart.webp',
    title: 'Autoschlüssel Machen Vor Ort Stuttgart',
    caption: 'Autoschlüssel Programmiergeräte — Schlüssel nachmachen vor Ort in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/auto_schluessel_stuttgart_24stunden_werkstatt.webp',
    title: 'Autoschlüssel Werkstatt Stuttgart 24 Stunden',
    caption: 'Professionelle Autoschlüssel Werkstatt von FC-KEY in Stuttgart — 24/7 geöffnet',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/autoschluessel_nachmachen_stuttgart_car_keys.webp',
    title: 'Autoschlüssel Nachmachen Stuttgart',
    caption: 'Verschiedene Autoschlüssel zum Nachmachen und Programmieren in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/autoschluessel-marken-nachmachen-stuttgart-sindelfingen.webp',
    title: 'Autoschlüssel Marken Nachmachen Stuttgart und Sindelfingen',
    caption: 'FC-KEY macht Schlüssel für alle 59 Automarken, darunter BMW, Mercedes, VW, Audi, Toyota, Ford und Volvo in Stuttgart und Sindelfingen',
    geo_location: 'Stuttgart und Sindelfingen, Deutschland',
  },
  {
    url: '/images/seo/autoschluessel_programmieren_vor_ort_stuttgart_sindelfingen.webp',
    title: 'Autoschlüssel Programmieren Stuttgart Sindelfingen',
    caption: 'Mobiles Autoschlüssel Programmieren vor Ort in Stuttgart und Sindelfingen',
    geo_location: 'Stuttgart, Sindelfingen, Deutschland',
  },
  {
    url: '/images/seo/autoschluessel_reparatur_stuttgart_sindelfingen_mobil.webp',
    title: 'Autoschlüssel Reparatur Stuttgart Sindelfingen',
    caption: 'Mobile Autoschlüssel Reparatur in Stuttgart und Sindelfingen durch FC-KEY',
    geo_location: 'Stuttgart, Sindelfingen, Deutschland',
  },
  {
    url: '/images/seo/autoschluessel_bestand_alle_marken_stuttgart_sindelfingen.webp',
    title: 'Autoschlüssel Bestand Alle Marken',
    caption: 'Großer Bestand an originalen Autoschlüsseln für alle Marken bei FC-KEY',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/zuendschloss_reparatur_wechseln_stuttgart_schluesseldienst.webp',
    title: 'Zündschloss Auto Wechseln Stuttgart',
    caption: 'Professionelles Zündschloss reparieren und wechseln in Stuttgart durch Schlüsseldienst',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/professionelle_diagnose_geraete_stuttgart_sindelfingen.webp',
    title: 'Professionelle Diagnosegeräte Autoschlüssel',
    caption: 'Händler-Level Diagnosegeräte für Autoschlüssel Programmierung — Autel, VVDI, Lonsdor',
    geo_location: 'Stuttgart, Sindelfingen, Deutschland',
  },
  {
    url: '/images/seo/ersatz_autoschluessel_transponder_programmieren_stuttgart.webp',
    title: 'Ersatz Autoschlüssel Transponder Programmieren Stuttgart',
    caption: 'Ersatz Autoschlüssel mit Transponder Chip programmieren in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/schluesseldienst_werkzeug_stuttgart_notfall.webp',
    title: 'Schlüsseldienst Werkzeuge Stuttgart Notfall',
    caption: 'Professionelle Schlüsseldienst Werkzeuge für Notfälle in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/schluesseldienst_stuttgart_arbeiten_24stunden.webp',
    title: 'Schlüsseldienst Stuttgart Arbeiten 24 Stunden',
    caption: 'Schlüsseldienst in Stuttgart führt Arbeiten vor Ort aus — 24 Stunden verfügbar',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/schluesseldienst_bestand_stuttgart_schluessel.webp',
    title: 'Schlüsseldienst Bestand Stuttgart Schlüssel',
    caption: 'Großer Schlüsselbestand des Schlüsseldienstes in Stuttgart',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/gungor-demir.webp',
    title: 'Gungor Demir — Autoschlüssel-Spezialist Stuttgart',
    caption: 'Gungor Demir, Inhaber und leitender Techniker von FC-KEY',
    geo_location: 'Stuttgart, Deutschland',
  },
  {
    url: '/images/seo/marktplaats-fc-key-verifiziert.webp',
    title: 'FC-KEY Verifiziert',
    caption: 'Verifiziertes Profil von FC-KEY für zusätzliche Zuverlässigkeit und Bewertungen',
    geo_location: 'Stuttgart, Deutschland',
  },
];

// ── Blog post images ──
const BLOG_IMAGES = [
  {
    url: '/images/blog/auto_oeffnen_ohne_schluessel_schadensfrei.png',
    title: 'Auto Öffnen Ohne Schlüssel Schadensfrei',
    caption: 'Schadensfrei Auto öffnen ohne Schlüssel durch FC-KEY',
  },
  {
    url: '/images/blog/autoschluessel_nachmachen_kosten_preisliste.png',
    title: 'Autoschlüssel Nachmachen Kosten Preisliste 2026',
    caption: 'Kostenübersicht Autoschlüssel nachmachen pro Marke — 2026 Preisliste',
  },
  {
    url: '/images/blog/autoschluessel_nachmachen_spezialist_stuttgart.png',
    title: 'Autoschlüssel Nachmachen Spezialist Stuttgart',
    caption: 'Zertifizierter Autoschlüssel-Spezialist bei der Arbeit in Stuttgart',
  },
  {
    url: '/images/blog/autoschluessel_verloren_was_nun_schritt_fuer_schritt.png',
    title: 'Autoschlüssel Verloren — Schritt-für-Schritt Stuttgart',
    caption: 'Schritt-für-Schritt: Was tun, wenn Sie Ihren Autoschlüssel in Stuttgart verloren haben',
  },
  {
    url: '/images/blog/schluessel_nachmachen_auto_mobiler_service.png',
    title: 'Autoschlüssel Nachmachen Mobiler Service',
    caption: 'Mobiler Autoschlüssel Nachmachen Service — FC-KEY bei Ihnen zu Hause oder im Büro',
  },
  {
    url: '/images/blog/smart_key_programmieren_stuttgart_auto.png',
    title: 'Smart Key Programmieren Stuttgart',
    caption: 'Smart Key und Keyless Entry Schlüssel programmieren in Stuttgart',
  },
];

// ── Page entries: url → its image(s) ──
const PAGE_ENTRIES = [
  {
    loc: `${BASE}/`,
    images: [
      CORE_IMAGES[0], CORE_IMAGES[2], CORE_IMAGES[7],
      CORE_IMAGES[4], CORE_IMAGES[3], CORE_IMAGES[17], CORE_IMAGES[18],
    ],
  },
  {
    loc: `${BASE}/ueber-uns`,
    images: [
      CORE_IMAGES[5], CORE_IMAGES[11], CORE_IMAGES[14], CORE_IMAGES[17], CORE_IMAGES[18],
    ],
  },
  {
    loc: `${BASE}/leistungen/autoschluessel-nachmachen`,
    images: [CORE_IMAGES[4], CORE_IMAGES[13], CORE_IMAGES[9]],
  },
  {
    loc: `${BASE}/leistungen/transponder-programmieren`,
    images: [CORE_IMAGES[13], CORE_IMAGES[8]],
  },
  {
    loc: `${BASE}/leistungen/smart-key-programmieren`,
    images: [CORE_IMAGES[8], CORE_IMAGES[1]],
  },
  {
    loc: `${BASE}/leistungen/zuendschloss-auto-wechseln`,
    images: [CORE_IMAGES[10], CORE_IMAGES[11]],
  },

  ...BLOG_POSTS.map((post) => ({
    loc: `${BASE}/blog/${post.slug}`,
    images: [BLOG_IMAGES[0]],
  })),

  // Dynamically add all 8 gallery images for each city
  ...CITIES.map((city) => ({
    loc: `${BASE}/standorte/${city.slug}`,
    images: Array.from({ length: 8 }).map((_, i) => ({
      url: `/images/cities/${city.slug}/autoschluessel-nachmachen-${city.slug}-${i + 1}.webp`,
      title: `Autoschlüssel Nachmachen ${city.city} - Foto ${i + 1}`,
      caption: `Professionell Autoschlüssel nachmachen und programmieren in ${city.city}`,
      geo_location: `${city.city}, ${city.region}, Deutschland`,
    })),
  })),
];

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PAGE_ENTRIES.map(({ loc, images }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
${images.map((img) => `    <image:image>
      <image:loc>${escapeXml(BASE + img.url)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>${(img as any).geo_location ? `
      <image:geo_location>${escapeXml((img as any).geo_location)}</image:geo_location>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
