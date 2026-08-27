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
      name: 'Alexandra Shteflyuk',
      date: 'Vor 6 Monaten',
      rating: 5,
      text: 'Schlüssel in der Tür stecken gelassen und konnten die Türe nicht mehr öffnen. Die Firma First Class Key war sehr freundlich, kamen schnell und haben haben auch sehr schnell die Türe geöffnet. Vielen Dank, wir sind sehr zufrieden'
    },
    {
      name: 'Erso Eisen',
      date: 'Vor 8 Monaten',
      rating: 5,
      text: 'Ich habe bei First Class Key einen Autoschlüssel für meinen Range Rover Evoque nachmachen lassen und bin sehr zufrieden. Alles hat einwandfrei funktioniert, der Service war sehr schnell, professionell und preislich deutlich günstiger als beim Hersteller. Der Mitarbeiter war freundlich, kompetent und hat sich Zeit genommen. Ich kann First Class Key absolut weiterempfehlen und würde jederzeit wiederkommen!'
    },
    {
      name: 'A. Ak',
      date: 'Vor 1 Jahr',
      rating: 5,
      text: 'Ich bin wirklich begeistert von diesem Kfz-Schlüsseldienst! Mein Autoschlüssel war plötzlich defekt, und ich stand vor verschlossener Tür. Der Mitarbeiter war sehr freundlich, schnell vor Ort und hat professionell gearbeitet. Innerhalb kürzester Zeit konnte ich wieder in mein Auto – ganz ohne Schäden. Besonders hervorheben möchte ich die faire Preisgestaltung und die transparente Erklärung der Arbeitsschritte. Man merkt sofort, dass hier Fachwissen und Kundenservice großgeschrieben werden. Absolut empfehlenswert für jeden, der einen zuverlässigen und seriösen Schlüsseldienst für sein Auto sucht!'
    },
    {
      name: 'Sven Haeussler',
      date: 'Vor 9 Monaten',
      rating: 5,
      text: 'The electronic steering lock on my Mercedes suddenly broke down. On a recommendation, I contacted First Class KEY in Sindelfingen. The employee responded quickly and very kindly and replaced the steering lock at a fair price. I\'m very satisfied and can definitely recommend First Class KEY! :)'
    },
    {
      name: 'lassmalstecken88',
      date: 'Vor 1 Jahr',
      rating: 5,
      text: 'Ich habe meinen Autoschlüssel verloren und wollte ihn nachmachen lassen. Bei First Class KEY war sehr zufrieden! Sehr freundlicher Service und Kontakt, jeder Termin wurde eingehalten und der neue Autoschlüssel mit Zentralverriegelung funktioniert perfekt! Kann ich vorbehaltlos weiterempfehlen!'
    },
    {
      name: 'Martina Gropper',
      date: 'Vor 4 Jahren',
      rating: 5,
      text: 'Super netter Service und toller Dienstleister. Ich empfehle diesen Schlüsseldienst. Ich habe mir für meinen alten Daimler einen Autoschlüssel nachmachen lassen, was nicht einfach war. Der Herr hat nicht aufgegeben bis es gepasst hat und hat und das für die Hälfte des Preises, was es bei Mercedes gekostet hätte. 👍😁'
    },
    {
      name: 'Brandon Metzger',
      date: 'Vor 3 Jahren',
      rating: 5,
      text: 'Great service! Called on a Saturday and they were at the house in 30 minutes.'
    },
    {
      name: 'James Harlow',
      date: 'Vor 4 Jahren',
      rating: 5,
      text: 'I called and within 15 minutes he was here and 5 minutes Later I was back in the house.'
    },
    {
      name: 'Bozhidara Ilieva',
      date: 'Vor 1 Monat',
      rating: 5,
      text: 'Top'
    }
  ],
} as const;

export const WHATSAPP_URL = '/whatsapp';
