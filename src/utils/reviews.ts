import { GoogleReview } from '@/components/GoogleReviewCard/GoogleReviewCard';

const FIRST_NAMES = ['Thomas', 'Sara', 'Mohammed', 'Lisa', 'Lukas', 'Klaus', 'Fatima', 'Peter', 'Anna', 'Markus', 'Stefan', 'Emma', 'Ali', 'Julia', 'Leon', 'Sophie', 'Kevin', 'Laura', 'Mia', 'Felix', 'Jonas', 'Marie', 'Eva'];
const LAST_NAMES = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Yilmaz', 'Kaya', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder'];
const DATES = ['Vor 1 Tag', 'Vor 2 Tagen', 'Vor 3 Tagen', 'Vor 5 Tagen', 'Vor 1 Woche', 'Vor 2 Wochen', 'Vor 4 Tagen', 'Vor 6 Tagen', 'Vor 3 Wochen'];

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const INTRO = [
  "Top Service!",
  "Klasse geholfen.",
  "Wahre Retter in der Not.",
  "Schnell und professionell.",
  "Echte Profis.",
  "Sehr zufrieden.",
  "Hervorragende Erfahrung.",
  "Absolute Empfehlung!",
  "Sehr glücklich über die Hilfe.",
  "Super geregelt!",
  "Fantastisches Unternehmen.",
  "Wirklich perfekt."
];

const PROBLEM_CITY = [
  "Ich stand mit einem defekten Schlüssel in {context}.",
  "Gestrandetes Auto in {context}, konnte nirgendwo hin.",
  "Aus meinem Auto in der Nähe von {context} ausgesperrt.",
  "Mein Schlüssel lag noch im Auto in der Region {context}.",
  "Brauchte dringend einen Autoschlüssel im Zentrum von {context}.",
  "Schlüssel abgebrochen, während ich in {context} war."
];

const PROBLEM_BRAND = [
  "Mein {context} Schlüssel war abgebrochen.",
  "Der Transponder meines {context} funktionierte nicht mehr.",
  "Ich hatte den Ersatzschlüssel für den {context} verloren.",
  "Aus meinem {context} ausgesperrt, sehr ärgerlich.",
  "Das Zündschloss meines {context} war defekt.",
  "Ich brauchte einen neuen Smart Key für meinen {context}."
];

const PROBLEM_SERVICE = [
  "Brauchte schnelle Hilfe für {context}.",
  "Mein Termin für {context} konnte sofort eingeplant werden.",
  "Ich suchte einen Spezialisten für {context}.",
  "Niemand konnte mir sofort bei {context} helfen, außer ihnen.",
  "Für {context} sind Sie hier genau richtig.",
  "Ich rief wegen {context} an und wurde sehr gut beraten."
];

const PROBLEM_GENERAL = [
  "Schlüssel im Zündschloss stecken gelassen und die Tür fiel ins Schloss.",
  "Mein Autoschlüssel war spurlos verschwunden.",
  "Die Fernbedienung des Autos reagierte auf nichts mehr.",
  "Schlüssel im Türschloss meines Autos abgebrochen.",
  "Ersatzschlüssel kurz vor meinem Urlaub benötigt.",
  "Ich hatte meine Autoschlüssel beim Einkaufen verloren."
];

const ACTION = [
  "Innerhalb einer halben Stunde war der Mechaniker vor Ort.",
  "Zum Glück waren sie sehr schnell da.",
  "Sie kamen sofort, nachdem ich angerufen hatte.",
  "Der Mechaniker hatte die richtige Ausrüstung dabei.",
  "Sie wussten genau, was zu tun war.",
  "Trotz der späten Stunde waren sie schnell zur Stelle."
];

const RESOLUTION = [
  "Die Tür wurde zu 100% schadenfrei geöffnet.",
  "Sie haben vor Ort einen neuen Schlüssel angelernt.",
  "Das Problem war in kürzester Zeit gelöst.",
  "Alles funktioniert wieder perfekt, ohne Probleme.",
  "Für einen fairen Preis war ich sofort wieder auf dem Weg.",
  "Der Mechaniker war super freundlich und hat es sofort gelöst."
];

export function generateContextualReviews(contextName: string, type: 'city' | 'brand' | 'service' | 'general' = 'general'): GoogleReview[] {
  // Use a hash of contextName to have a stable but distinct base seed for each context
  const seedBase = contextName.split('').reduce((acc, char, index) => acc + char.charCodeAt(0) * (index + 1), 0) + (type.length * 100);
  
  const reviews: GoogleReview[] = [];
  
  for (let i = 0; i < 3; i++) {
    const seed = seedBase + i * 997; // large prime multiplier
    
    const firstName = FIRST_NAMES[Math.floor(seededRandom(seed) * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(seededRandom(seed + 1) * LAST_NAMES.length)];
    const date = DATES[Math.floor(seededRandom(seed + 2) * DATES.length)];
    const rating = 5;
    
    const intro = INTRO[Math.floor(seededRandom(seed + 3) * INTRO.length)];
    const action = ACTION[Math.floor(seededRandom(seed + 4) * ACTION.length)];
    const resolution = RESOLUTION[Math.floor(seededRandom(seed + 5) * RESOLUTION.length)];
    
    let problemPool = PROBLEM_GENERAL;
    if (type === 'city') problemPool = PROBLEM_CITY;
    else if (type === 'brand') problemPool = PROBLEM_BRAND;
    else if (type === 'service') problemPool = PROBLEM_SERVICE;

    let problem = problemPool[Math.floor(seededRandom(seed + 6) * problemPool.length)];
    
    // In case context name has specific casing, we use it directly as interpolated in array
    problem = problem.replace(/\{context\}/g, contextName.toLowerCase() === contextName ? contextName : contextName);

    const text = `${intro} ${problem} ${action} ${resolution}`;
    
    reviews.push({
      name: `${firstName} ${lastName}`,
      avatarLetter: firstName.charAt(0),
      avatarColor: ['#e81c62', '#3f51b5', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#795548', '#009688', '#607d8b'][Math.floor(seededRandom(seed + 7) * 9)],
      date,
      rating,
      text
    });
  }
  
  return reviews;
}
