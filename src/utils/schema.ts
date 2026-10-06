import { SITE_CONFIG } from '@/config/site.config';
import { CITIES } from '@/config/cities';

/**
 * Returns a standardized Locksmith (LocalBusiness) schema object.
 * This guarantees consistent NAP data (Stuttgart) and a full areaServed list
 * across all pages (City, Service, and Brand pages).
 */
export function getBaseLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair', 'Locksmith'],
    '@id': `${SITE_CONFIG.domain}/#localbusiness`,
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phoneTel,
    priceRange: '€€',
    image: `${SITE_CONFIG.domain}/og-image.png`,
    logo: `${SITE_CONFIG.domain}/logo.png`,
    sameAs: [SITE_CONFIG.social.google, SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postal,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.lat,
      longitude: SITE_CONFIG.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...SITE_CONFIG.workshopHours.days],
        opens: SITE_CONFIG.workshopHours.opens,
        closes: SITE_CONFIG.workshopHours.closes,
      },
    ],
    areaServed: CITIES.map((c) => ({
      '@type': 'City',
      name: c.city,
    })),
  };
}
