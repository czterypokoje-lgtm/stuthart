const fs = require('fs');

function replaceMeta(file, regex, replacement) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content);
}

replaceMeta('src/app/leistungen/auto-schluesseldienst/page.tsx', 
  /description: 'Notfall Auto Schlüsseldienst benötigt\?[^']+',/,
  "description: 'Ab 149€ & 30 Min vor Ort: Auto Schlüsseldienst. 100% schadenfreie Öffnung & neuer Schlüssel direkt vor Ort. 24/7 Notdienst. Jetzt anrufen!',");

replaceMeta('src/app/leistungen/auto-ohne-schluessel-oeffnen/page.tsx', 
  /description: 'Auto ohne Schlüssel öffnen\?[^']+',/,
  "description: 'Ab 149€ in 30 Min vor Ort: Auto 100% schadenfrei öffnen. Unser Schlüsseldienst hilft schnell in Stuttgart & 50km Umkreis. 24/7 anrufen!',");

replaceMeta('src/app/leistungen/autoschluessel-nachmachen/page.tsx', 
  /description: 'Autoschlüssel nachmachen\? 24\/7 vor Ort, Festpreis ab 149€ [^']+',/,
  "description: 'Ab 149€ in 30 Min vor Ort: Autoschlüssel nachmachen. 24/7 mobiler Service, günstiger als der Händler. Direkt anrufen oder WhatsApp!',");

replaceMeta('src/app/ueber-uns/page.tsx', 
  /description: `Lernen Sie FC-KEY kennen\.[^\`]+\`,/,
  "description: `FC-KEY: Ihr zertifizierter Autoschlüsselspezialist. Mobiler Service für Transponder, Smart Keys & Zündschlösser in ganz Süddeutschland.`,");

replaceMeta('src/app/faq/page.tsx', 
  /description: `Antworten auf alle Fragen rund um Autoschlüssel nachmachen[^\`]+\`,/,
  "description: `FAQ: Autoschlüssel nachmachen, Kosten & Smart Keys programmieren. Alle Antworten hier. Mobiler Service ab 99€. Jetzt anfragen!`,");

replaceMeta('src/app/faq/page.tsx', 
  /description: `Alles, was Sie über das Nachmachen von Autoschlüsseln, die Kosten und unseren Service wissen möchten[^\`]+\`,/,
  "description: `FAQ: Autoschlüssel nachmachen, Kosten & Smart Keys programmieren. Alle Antworten hier. Mobiler Service ab 99€. Jetzt anfragen!`,");

replaceMeta('src/app/preise/page.tsx', 
  /description: 'Ungefähre Preise für das Nachmachen und Programmieren von Autoschlüsseln[^']+',/,
  "description: 'Unsere Preise: Autoschlüssel nachmachen & programmieren. Sparen Sie bis zu 50% gegenüber dem Händler. Festpreis im Voraus. Jetzt anrufen!',");

replaceMeta('src/app/autoschluessel-bestellen/page.tsx', 
  /description: 'Kein technischer Aufwand! Senden Sie uns Ihr Kennzeichen per WhatsApp und erhalten Sie sofort einen Festpreis[^']+',/,
  "description: 'Autoschlüssel bestellen leicht gemacht! Kennzeichen per WhatsApp senden & sofort Festpreis erhalten. Inklusive 12 Mon. Garantie & Vor-Ort Service.',");

replaceMeta('src/app/blog/page.tsx', 
  /description: 'Tipps, Anleitungen und Praxisfälle rund um Autoschlüssel[^']+',/,
  "description: 'Ratgeber Autoschlüssel: Tipps zu Kosten, Transponder, Smart Key, Sicherheit & Notfallhilfe. Mobiler Service ab 99€ in 30 Min vor Ort.',");

replaceMeta('src/app/blog/page.tsx', 
  /description: 'Ihr Ratgeber rund um Autoschlüssel: Kosten, Transponder, Smart Key[^']+',/,
  "description: 'Ratgeber Autoschlüssel: Tipps zu Kosten, Transponder, Smart Key, Sicherheit & Notfallhilfe. Mobiler Service ab 99€ in 30 Min vor Ort.',");

console.log('Static pages fixed.');
