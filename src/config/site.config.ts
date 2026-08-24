// ============================================================
// SITE CONFIG — FC-KEY
// Update with real business data before launch
// ============================================================

export const SITE_CONFIG = {
  name: 'FIRST CLASS KEY',
  fullName: 'First Class Schlüsselnotdienst',
  tagline: 'Ihr Autoschlüssel Spezialist vor Ort',
  domain: 'https://fc-key.de', // primary

  phone: '0172 141 61 44',
  phoneTel: '+491721416144',
  whatsapp: '491721416144',
  whatsappDisplay: '0172 141 61 44',
  email: 'info@fc-key.de',

  address: {
    street: 'Mercedesstraße 12',
    city: 'Sindelfingen',
    region: 'Baden-Württemberg',
    postal: '71063',
    country: 'DE',
  },
  geo: { lat: '48.7075', lng: '9.0031' }, // Sindelfingen approx
  serviceArea: {
    lat: '48.7075',
    lng: '9.0031',
    radiusMeters: '50000', // 75km serving area
  },
  serviceAreaString: 'Stuttgart, Sindelfingen und 50km Umkreis',

  prices: {
    unlock: '149',
    transponder: '149',
    remote: '220',
    smartKey: '249',
    allKeysLost: '249',
    casing: '35',
    ignition: '299',
    exVatDisclaimer: 'zzgl. MwSt.',
  },

  hours: 'Montag bis Freitag 09:30–19:00',
  hoursShort: 'Abholservice Mo-Fr',
  responseTime: '30–60 Minuten',

  kvk: '56295/56209', // HRB / USt-IdNr
  btw: '56295/56209', // USt-IdNr
  rating: '5.0',
  reviewCount: '11',

  social: {
    facebook: '',
    instagram: '',
    google: '', 
    marktplaats: '',
  },
} as const;

export const WHATSAPP_URL = '/whatsapp';
