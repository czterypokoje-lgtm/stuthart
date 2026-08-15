// ============================================================
// SITE CONFIG — FC-KEY
// Update with real business data before launch
// ============================================================

export const SITE_CONFIG = {
  name: 'FIRST CLASS KEY',
  fullName: 'First Class Schlüsselnotdienst',
  tagline: 'Ihr Autoschlüssel Spezialist vor Ort',
  domain: 'https://fc-key.de', // primary

  phone: '07031-4917380',
  phoneTel: '+4970314917380',
  whatsapp: '491733695866',
  whatsappDisplay: '0173 3695866',
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

  hours: 'Montag bis Sonntag 00:00–24:00',
  hoursShort: '24/7 Erreichbar',
  responseTime: '30–60 Minuten',

  kvk: '', // HRB number if available
  btw: '', // USt-IdNr if available
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
