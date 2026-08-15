import React from 'react';
import { SITE_CONFIG } from '@/config/site.config';

function getStableHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const introTemplates = [
  (city: string, travel: string) => `Willkommen bei ${SITE_CONFIG.name}, Ihrem zuverlässigen Partner rund um Autoschlüssel in ${city} und Umgebung. Haben Sie ein Problem mit Ihrem Schlüssel, der Fernbedienung oder dem Schloss? Unsere Spezialisten stehen Ihnen 24/7 zur Verfügung und sind oft schon innerhalb von ${travel} vor Ort, um Ihnen weiterzuhelfen. Wir arbeiten komplett mobil und verfügen über modernste Ausrüstung.`,
  (city: string, travel: string) => `Benötigen Sie dringend einen neuen Autoschlüssel in ${city}? Oder bekommen Sie Ihr Auto nicht mehr auf? ${SITE_CONFIG.name} bietet einen einzigartigen, komplett mobilen Schlüsseldienst. Innerhalb von durchschnittlich ${travel} ist unser Monteur bei Ihnen in ${city} eingetroffen. Wir garantieren eine schadensfreie Öffnung und können fast jeden Schlüssel direkt vor Ort für Sie nachmachen und programmieren.`,
  (city: string, travel: string) => `In ${city} und der weiten Region darum herum ist ${SITE_CONFIG.name} der Spezialist für Autoschlüssel und Fahrzeugsicherheit. Sie müssen Ihr Fahrzeug nicht zu einem teuren Händler schleppen, wenn Sie alle Ihre Schlüssel verloren haben. Wir kommen zu Ihnen. Mit einer durchschnittlichen Anfahrtszeit von nur ${travel} lösen wir Ihr Problem direkt am Auto.`
];

const bodyTemplates1 = [
  (city: string) => `Unsere mobilen Werkstätten sind täglich in ${city} unterwegs. Sie sind mit computergesteuerten CNC-Fräsmaschinen und modernster OBD-Diagnosetechnik ausgestattet. Dadurch können wir nicht nur herkömmliche Transponderschlüssel, sondern auch fortschrittliche Smart Keys und Keyless-Go-Systeme problemlos programmieren. Egal, ob Sie in Ihrer Einfahrt, bei der Arbeit oder an einer stark befahrenen Straße in ${city} stehen, unser Service ist immer für Sie da.`,
  (city: string) => `Wo herkömmliche Werkstätten in ${city} oft wochenlange Wartezeiten für die Bestellung eines Original-Autoschlüssels haben, erledigen wir dies direkt aus unserem Bestand. Unsere Monteure in ${city} haben Zugriff auf die Software von über 59 Automarken. Das bedeutet, dass wir den Bordcomputer auslesen, alte und verlorene Schlüssel sicher aus dem Speicher löschen und vor Ort einen komplett neuen Schlüssel für Sie anfertigen können.`,
  (city: string) => `Der Verlust Ihres letzten Autoschlüssels (All Keys Lost) in ${city} ist ein stressiges Ereignis. Wir nehmen Ihnen diese Sorge komplett ab. Da wir nicht mit Abschleppdiensten oder teuren Zwischenhändlern zusammenarbeiten, sparen Sie bei uns bis zu 50%. Unsere erfahrenen Techniker sind darauf geschult, sicher auf die Wegfahrsperre oder das Motorsteuergerät Ihres Fahrzeugs zuzugreifen, selbst wenn die Türen verriegelt sind.`
];

const bodyTemplates2 = [
  (city: string) => `Darüber hinaus sind wir auf das schadensfreie Öffnen von Fahrzeugen spezialisiert. Sollten Sie Ihre Schlüssel versehentlich im Kofferraum oder auf dem Beifahrersitz gelassen haben, öffnen wir Ihre Türen mit speziellen Lishi-Decodern. Dieses Lockpicking-Werkzeug stellt sicher, dass Ihr Schloss völlig intakt bleibt. Ob Einwohner oder Besucher von ${city}, wir helfen Ihnen sicher wieder in Ihr Fahrzeug.`,
  (city: string) => `Auch für Reparaturen an vorhandenen Schlüsseln sind Sie in ${city} an der richtigen Adresse. Klemmen die Tasten, ist das Gehäuse kaputt oder muss einfach die Batterie ausgetauscht werden? Wir führen Mikrolötarbeiten vor Ort durch. Dadurch sparen Sie die Kosten für einen komplett neuen Schlüssel und verlängern die Lebensdauer Ihrer aktuellen Fernbedienung erheblich. Wir verwenden dafür ausschließlich hochwertige OEM-Komponenten.`,
  (city: string) => `Transparenz und Sicherheit stehen bei uns an erster Stelle. Bevor wir in ${city} mit der Arbeit an Ihrem Auto beginnen, überprüfen wir immer Identität und Fahrzeugpapiere, um Missbrauch zu verhindern. Außerdem erhalten Sie vorab ein genaues Preisangebot, sodass Sie keine bösen Überraschungen erleben. Mit einer offiziellen Rechnung und 12 Monaten schriftlicher Garantie auf unsere Arbeit, können Sie sich auf absolute Spitzenqualität verlassen.`
];

interface CitySeoTextProps {
  cityName: string;
  travelTime: string;
}

export default function CitySeoText({ cityName, travelTime }: CitySeoTextProps) {
  const hash = getStableHash(cityName);
  
  const intro = introTemplates[hash % introTemplates.length];
  const body1 = bodyTemplates1[(hash + 1) % bodyTemplates1.length];
  const body2 = bodyTemplates2[(hash + 2) % bodyTemplates2.length];

  return (
    <div className="seo-article-block">
      <h2>Komplettservice für Autoschlüssel in {cityName}</h2>
      <p>{intro(cityName, travelTime)}</p>
      
      <h3>Moderne Ausrüstung, direkt verfügbar</h3>
      <p>{body1(cityName)}</p>
      
      <h3>Schadensfreie Öffnung und fachmännische Reparaturen</h3>
      <p>{body2(cityName)}</p>
      
      <h3>Entscheiden Sie sich für Sicherheit in {cityName}</h3>
      <p>
        Warten Sie nicht länger, wenn Ihr Schlüssel Probleme macht oder Sie ein Ersatzexemplar benötigen. 
        Unsere lokale Abdeckung in <strong>{cityName}</strong> garantiert schnelle Reaktionszeiten und 
        professionelle Handwerkskunst. Rufen Sie direkt <strong>{SITE_CONFIG.phone}</strong> an für ein 
        unverbindliches Angebot oder um sofort einen Notdienstmonteur anzufordern. 
        Ihre Mobilität ist unsere Priorität.
      </p>
    </div>
  );
}
