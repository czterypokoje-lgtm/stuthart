export interface Location {
  slug: string;
  city: string;
  region: string;
  country: string;
  geo: { lat: string; lng: string };
  travelTime: string;
  subAreas: string[];
  reviewQuote: string;
  reviewAuthor: string;
  reviewCar: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: 'autoschluessel-nachmachen-stuttgart',
    city: 'Stuttgart',
    region: 'Baden-Württemberg',
    country: 'DE',
    geo: { lat: '48.7758', lng: '9.1829' },
    travelTime: '15-30 Minuten',
    subAreas: ['Sindelfingen', 'Böblingen', 'Leonberg', 'Fellbach', 'Esslingen'],
    reviewQuote: 'BMW alle Schlüssel verloren in Stuttgart. Der Vertragshändler wollte 1.400€. Diese Jungs haben es für 580€ gemacht und kamen zu mir!',
    reviewAuthor: 'Nils',
    reviewCar: 'BMW 5er, Stuttgart',
  },
  {
    slug: 'autoschluessel-nachmachen-ludwigsburg',
    city: 'Ludwigsburg',
    region: 'Baden-Württemberg',
    country: 'DE',
    geo: { lat: '48.8974', lng: '9.1922' },
    travelTime: '30-45 Minuten',
    subAreas: ['Kornwestheim', 'Bietigheim-Bissingen', 'Tamm', 'Asperg', 'Freiberg am Neckar'],
    reviewQuote: 'Alle Schlüssel verloren in Ludwigsburg-Zentrum. Sie kamen aus Stuttgart und haben alles gelöst. Top Service!',
    reviewAuthor: 'Marco',
    reviewCar: 'VW Golf 8, Ludwigsburg',
  },
];
