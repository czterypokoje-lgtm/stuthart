import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site.config';
import { LEISTUNGEN } from '@/config/leistungen';
import { CITIES } from '@/config/cities';
import { BRANDS } from '@/config/brands';
import { BLOG_POSTS } from '@/config/services';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain;
  const now = new Date();

  // 1. Core Pages
  const corePages = [
    '', '/leistungen', '/standorte', '/marken', '/preise', '/blog', '/wissensdatenbank',
    '/ueber-uns', '/galerie', '/bewertungen', '/faq',
    '/kontakt', '/privacybeleid',
    '/autoschluessel-verloren', '/autoschluessel-bestellen'
  ].map(p => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1.0 : 0.8,
    images: [`${base}/og-image.png`, `${base}/logo.png`],
  }));

  // 2. Service Pages
  const servicePages = LEISTUNGEN.map(s => ({
    url: `${base}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. City Pages
  const cityPages = CITIES.map(c => {
    const images = [];
    if (fs.existsSync(path.join(process.cwd(), 'public', 'images', `autoschluessel-nachmachen-${c.slug}.webp`))) {
      images.push(`${base}/images/autoschluessel-nachmachen-${c.slug}.webp`);
    }
    return {
      url: `${base}/standorte/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      images,
    };
  });

  // 4. Brand Pages
  const brandPages = BRANDS.map(b => ({
    url: `${base}/marken/${b.nameSlug}-autoschluessel-nachmachen`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));




  // 8. Blog Pages
  const blogPages = BLOG_POSTS.map(b => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...cityPages,
    ...brandPages,
    ...blogPages
  ];
}
