// Problem/Solution pages — highest conversion rate (emergency intent)
export type Problem = {
  slug: string; title: string; metaTitle: string; metaDesc: string;
  h1: string; nlSearches: number; beSearches: number; cpc: number;
  intent: 'critical' | 'high' | 'medium'; conversionRate: string;
};

export const PROBLEMS: Problem[] = [
  {
    slug: 'autoschluessel-verloren',
    title: 'Autoschlüssel verloren',
    metaTitle: 'Autoschlüssel verloren? | Soforthilfe | 24/7 Mobiler Service',
    metaDesc: 'Autoschlüssel verloren? Wir helfen sofort! Neuen Schlüssel programmieren vor Ort. Alle Marken. 24/7. Jetzt anrufen.',
    h1: 'Autoschlüssel verloren? Soforthilfe – 24/7 Mobiler Service',
    nlSearches: 2400, beSearches: 880, cpc: 4.20, intent: 'critical', conversionRate: '8–12%',
  },
  {
    slug: 'auto-oeffnen-ohne-schluessel',
    title: 'Auto öffnen ohne Schlüssel',
    metaTitle: 'Auto öffnen ohne Schlüssel | Zerstörungsfrei | Alle Marken | 24/7',
    metaDesc: 'Auto öffnen ohne Schlüssel? Wir öffnen Ihr Fahrzeug zerstörungsfrei und professionell. Keine Schäden an Schloss oder Tür. Jetzt anrufen.',
    h1: 'Auto öffnen ohne Schlüssel – Zerstörungsfrei, Professionell, 24/7',
    nlSearches: 2100, beSearches: 780, cpc: 4.90, intent: 'critical', conversionRate: '8–12%',
  },
  {
    slug: 'notdienst-autoschluessel',
    title: '24/7 Schlüsselnotdienst',
    metaTitle: 'Schlüsselnotdienst | 24/7 Mobil | Direkt vor Ort | Alle Marken',
    metaDesc: 'Autoschlüssel Notfall? 24/7 mobile Hilfe. Durchschnittlich 30-60 Min Reaktionszeit. Alle Marken. Jetzt anrufen.',
    h1: 'Schlüsselnotdienst – 24/7 Mobil vor Ort',
    nlSearches: 920, beSearches: 340, cpc: 6.20, intent: 'critical', conversionRate: '12–18%',
  },
  {
    slug: '24h-service',
    title: '24h Schlüsseldienst',
    metaTitle: '24h Autoschlüsseldienst | Nacht & Wochenende | Region Stuttgart',
    metaDesc: '24 Stunden am Tag, 7 Tage die Woche Autoschlüsseldienst. Nacht, Wochenende, Feiertage. Jetzt anrufen.',
    h1: '24h Autoschlüsseldienst – Nacht, Wochenende & Feiertage',
    nlSearches: 640, beSearches: 240, cpc: 5.80, intent: 'critical', conversionRate: '11–16%',
  },
];

export const PROBLEM_SUBPAGES = [
  { slug: 'fernbedienung-funktioniert-nicht', title: 'Fernbedienung funktioniert nicht', searches: 1200 },
  { slug: 'wegfahrsperre', title: 'Wegfahrsperre defekt', searches: 320 },
  { slug: 'schluessel-nicht-erkannt', title: 'Schlüssel wird nicht erkannt', searches: 560 },
  { slug: 'chip-defekt', title: 'Schlüssel-Chip defekt', searches: 360 },
  { slug: 'schluessel-wasserschaden', title: 'Schlüssel Wasserschaden', searches: 180 },
  { slug: 'schluessel-abgebrochen', title: 'Schlüssel abgebrochen / kaputt', searches: 240 },
  { slug: 'alarm-ausschalten', title: 'Auto-Alarm geht nicht aus', searches: 480 },
  { slug: 'startknopf-defekt', title: 'Startknopf funktioniert nicht', searches: 240 },
];
