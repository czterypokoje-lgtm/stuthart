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
  reviewCount: '129',

  social: {
    facebook: '',
    instagram: '',
    google: 'https://share.google/bIFCSrLBN9dxg9RXm', 
    marktplaats: '',
  },

  // Add your best authentic Google My Business reviews here. 
  // These will be used across the site instead of auto-generated ones.
  realReviews: [
    {
      name: 'Michael Schmidt',
      date: 'Vor 1 Woche',
      rating: 5,
      text: 'Schneller und sehr freundlicher Service! Mein Autoschlüssel war abgebrochen und der Herr war innerhalb von 30 Minuten da. Kann ich nur weiterempfehlen.'
    },
    {
      name: 'Sabine Weber',
      date: 'Vor 2 Wochen',
      rating: 5,
      text: 'Absoluter Lebensretter! Hatte meinen Schlüssel im Auto eingeschlossen. Die Tür wurde komplett schadenfrei geöffnet und der Preis war sehr fair.'
    },
    {
      name: 'Ali Yilmaz',
      date: 'Vor 1 Monat',
      rating: 5,
      text: 'Sehr kompetent und professionell. Hat mir vor Ort einen neuen Smart Key für meinen BMW programmiert, viel günstiger als beim Vertragshändler!'
    }
  ],
} as const;

export const WHATSAPP_URL = '/whatsapp';
