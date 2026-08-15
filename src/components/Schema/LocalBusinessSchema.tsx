import { SITE_CONFIG } from '@/config/site.config';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutomotiveBusiness', 'Locksmith'],
    '@id': `${SITE_CONFIG.domain}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: 'FC-KEY',
    description: 'Professioneller mobiler Autoschlüsselspezialist für alle Marken und Modelle. Autoschlüssel nachmachen, Transponder programmieren, Smart Key anfertigen und Auto öffnen. Tätig im Raum Stuttgart, Sindelfingen und Umgebung.',
    url: SITE_CONFIG.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.domain}/images/logo/fc-key-logo-slotenmaker-stuttgart.png`,
      width: 1024,
      height: 304,
    },
    image: `${SITE_CONFIG.domain}/og-image.png`,
    telephone: SITE_CONFIG.phoneTel,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      ...(SITE_CONFIG.address.street ? { streetAddress: SITE_CONFIG.address.street } : {}),
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      ...(SITE_CONFIG.address.postal ? { postalCode: SITE_CONFIG.address.postal } : {}),
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(SITE_CONFIG.geo.lat),
      longitude: parseFloat(SITE_CONFIG.geo.lng),
    },
    hasMap: `https://maps.google.com/?q=${SITE_CONFIG.geo.lat},${SITE_CONFIG.geo.lng}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'City', 'name': 'Stuttgart', 'sameAs': 'https://en.wikipedia.org/wiki/Stuttgart' },
      { '@type': 'City', 'name': 'Sindelfingen', 'sameAs': 'https://en.wikipedia.org/wiki/Sindelfingen' },
      { '@type': 'City', 'name': 'Böblingen', 'sameAs': 'https://en.wikipedia.org/wiki/Böblingen' },
      { '@type': 'City', 'name': 'Ludwigsburg', 'sameAs': 'https://en.wikipedia.org/wiki/Ludwigsburg' },
      { '@type': 'City', 'name': 'Esslingen', 'sameAs': 'https://en.wikipedia.org/wiki/Esslingen' },
      { '@type': 'City', 'name': 'Leonberg' },
      { '@type': 'City', 'name': 'Fellbach' },
      { '@type': 'City', 'name': 'Waiblingen' },
      { '@type': 'City', 'name': 'Filderstadt' },
      { '@type': 'City', 'name': 'Ditzingen' },
      { '@type': 'City', 'name': 'Kornwestheim' },
      { '@type': 'City', 'name': 'Bietigheim-Bissingen' },
      { '@type': 'City', 'name': 'Schorndorf' },
      { '@type': 'City', 'name': 'Nürtingen' },
      { '@type': 'City', 'name': 'Herrenberg' }
    ],
    priceRange: '€€',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'EUR',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: parseFloat(SITE_CONFIG.rating),
      reviewCount: parseInt(SITE_CONFIG.reviewCount, 10),
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.google,
    ],
    foundingDate: '2020',
    vatID: SITE_CONFIG.btw,
    legalName: SITE_CONFIG.fullName,
    identifier: {
      '@type': 'PropertyValue',
      name: 'KVK',
      value: SITE_CONFIG.kvk,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
