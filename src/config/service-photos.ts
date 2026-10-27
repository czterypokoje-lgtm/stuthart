// ============================================================
// SERVICE PHOTOS — real photography per service page
// ------------------------------------------------------------
// Replaces the old filesystem scan, which read /images/merken but
// emitted /images/marken URLs (404 on every service page) and served
// Audi photos on, say, a transponder page. Each service now names the
// shots that actually show that job, with alt text written for it.
// Shot October 2026, imported by scripts/import-shoot-2026-10.mjs.
// ============================================================

export type ServicePhoto = { src: string; alt: string; label: string };

const W = '/images/werkstatt';

// ── Reusable shots, grouped by the job they show ──
const FRAESEN: ServicePhoto[] = [
  { src: `${W}/autoschluessel-fraesen-cnc-maschine-sindelfingen.webp`, alt: 'Autoschlüssel wird auf der CNC-Fräsmaschine in der Werkstatt in Sindelfingen gefräst', label: 'Schlüssel fräsen' },
  { src: `${W}/schluesselfraesmaschine-schluesselbart-detail.webp`, alt: 'Detailaufnahme: Fräser arbeitet den Schlüsselbart eines Autoschlüssel-Rohlings heraus', label: 'Präzisionsfräsung' },
  { src: `${W}/autoschluessel-spezialist-an-der-fraesmaschine.webp`, alt: 'Güngör Demir fräst einen Ersatzschlüssel an der Schlüsselfräsmaschine', label: 'Anfertigung' },
  { src: `${W}/autoschluessel-nachmachen-schluesselrohling-fraesen.webp`, alt: 'Schlüsselrohling wird für das Nachmachen eines Autoschlüssels eingespannt', label: 'Rohling einspannen' },
];

const CODIEREN: ServicePhoto[] = [
  { src: `${W}/transponder-schluessel-codieren-werkstatt.webp`, alt: 'Transponder eines Autoschlüssels wird in der Werkstatt ausgelesen und codiert', label: 'Transponder codieren' },
  { src: `${W}/autoschluessel-rohling-anpassen-vor-ort.webp`, alt: 'Neuer Autoschlüssel wird direkt am Fahrzeug angepasst und angelernt', label: 'Anlernen vor Ort' },
  { src: `${W}/autoschluessel-rohling-pruefen-am-fahrzeug.webp`, alt: 'Frisch gefräster Autoschlüssel wird am Fahrzeugschloss auf Passgenauigkeit geprüft', label: 'Passprobe' },
];

const NOTOEFFNUNG: ServicePhoto[] = [
  { src: `${W}/autotuer-oeffnen-spezialwerkzeug-vor-ort.webp`, alt: 'Autotür wird mit Spezialwerkzeug schadensfrei vor Ort geöffnet', label: 'Schadensfreie Öffnung' },
  { src: `${W}/auto-notoeffnung-fahrzeug-oeffnen-stuttgart.webp`, alt: 'Mobile Notöffnung eines verschlossenen Fahrzeugs im Raum Stuttgart', label: 'Notöffnung' },
  { src: `${W}/autotuer-oeffnen-ohne-beschaedigung-werkzeug.webp`, alt: 'Öffnungswerkzeug wird zwischen Scheibe und Dichtung geführt, ohne Lack oder Dichtung zu beschädigen', label: 'Ohne Beschädigung' },
  { src: `${W}/auto-oeffnen-ohne-schluessel-notoeffnung-vor-ort.webp`, alt: 'Fahrzeug wird ohne Schlüssel geöffnet — mobiler Schlüsseldienst vor Ort', label: 'Auto öffnen' },
  { src: `${W}/autoschluessel-uebergabe-nach-notoeffnung.webp`, alt: 'Übergabe des Autoschlüssels an den Kunden nach erfolgreicher Notöffnung', label: 'Übergabe' },
];

const ELEKTRONIK: ServicePhoto[] = [
  { src: `${W}/autoschluessel-elektronik-transponder-reparatur.webp`, alt: 'Platine eines Autoschlüssels wird für die Reparatur der Elektronik geöffnet', label: 'Elektronik-Reparatur' },
  { src: `${W}/funkschluessel-platine-reparatur-loeten.webp`, alt: 'Defekte Lötstelle auf der Platine eines Funkschlüssels wird nachgelötet', label: 'Platine löten' },
  { src: `${W}/autoschluessel-elektronik-pruefen-pinzette.webp`, alt: 'Elektronik eines Autoschlüssels wird mit der Pinzette geprüft und instandgesetzt', label: 'Bauteilprüfung' },
];

const ZUENDSCHLOSS: ServicePhoto[] = [
  { src: `${W}/zuendschloss-wechseln-vor-ort-stuttgart.webp`, alt: 'Defektes Zündschloss wird vor Ort ausgebaut und ersetzt', label: 'Zündschloss wechseln' },
  { src: `${W}/zuendschloss-ausbohren-defektes-schloss.webp`, alt: 'Blockiertes Schloss wird fachgerecht ausgebohrt, um das Fahrzeug wieder zu öffnen', label: 'Schloss ausbohren' },
  { src: `${W}/schlosszylinder-bohren-detailaufnahme.webp`, alt: 'Detailaufnahme: Schließzylinder wird präzise aufgebohrt', label: 'Zylinder öffnen' },
];

/** Shown when a service has no explicit set — a general mix of the workshop. */
export const DEFAULT_SERVICE_PHOTOS: ServicePhoto[] = [FRAESEN[0], CODIEREN[0], NOTOEFFNUNG[0], ELEKTRONIK[0]];

const BY_SLUG: Record<string, ServicePhoto[]> = {
  'auto-ohne-schluessel-oeffnen': NOTOEFFNUNG,
  // First entry doubles as the hero photo, so keep it distinct from auto-ohne-schluessel-oeffnen.
  'auto-schluesseldienst': [NOTOEFFNUNG[1], NOTOEFFNUNG[2], ZUENDSCHLOSS[1], NOTOEFFNUNG[4]],
  'schluessel-im-schloss-abgebrochen': [ZUENDSCHLOSS[1], ZUENDSCHLOSS[2], FRAESEN[0], NOTOEFFNUNG[0]],
  'zuendschloss-auto-wechseln': ZUENDSCHLOSS,

  'autoschluessel-nachmachen': [FRAESEN[0], FRAESEN[1], CODIEREN[0], CODIEREN[2]],
  'ersatzschluessel-machen': [FRAESEN[2], FRAESEN[3], CODIEREN[2], CODIEREN[0]],
  'transponder-programmieren': [CODIEREN[0], FRAESEN[0], CODIEREN[1], ELEKTRONIK[0]],
  'smart-key-programmieren': [CODIEREN[1], CODIEREN[0], ELEKTRONIK[2], NOTOEFFNUNG[4]],
  'alle-schluessel-verloren-auto': [NOTOEFFNUNG[1], FRAESEN[0], CODIEREN[0], CODIEREN[1]],

  'fernbedienung-nachmachen': [ELEKTRONIK[1], ELEKTRONIK[0], CODIEREN[1], FRAESEN[1]],
  'autoschluessel-reparieren': ELEKTRONIK,
  'tasten-reparieren': [ELEKTRONIK[1], ELEKTRONIK[2], ELEKTRONIK[0]],
  'gehaeuse-wechseln': [ELEKTRONIK[0], ELEKTRONIK[1], FRAESEN[1]],
  'batterie-wechseln': [ELEKTRONIK[2], ELEKTRONIK[0], ELEKTRONIK[1]],
};

export function getServicePhotos(slug: string): ServicePhoto[] {
  return BY_SLUG[slug] ?? DEFAULT_SERVICE_PHOTOS;
}
