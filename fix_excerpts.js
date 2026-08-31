const fs = require('fs');

let content = fs.readFileSync('src/config/services.ts', 'utf8');

// Replace long excerpts
content = content.replace(/excerpt: 'Ist Ihr Autoschlüssel gestohlen worden[^']+',/g, "excerpt: 'Auto gestohlen oder Schlüssel weg? Sperren Sie sofort Ihren Schlüssel im Steuergerät. Wir helfen vor Ort in 30 Min. ab 99€.',");
content = content.replace(/excerpt: 'Entdecken Sie effektive Tipps, um Ihr Auto vor Diebstahl zu schützen[^']+',/g, "excerpt: 'So schützen Sie Ihr Auto effektiv vor Diebstahl: Physische und elektronische Tipps. Ab 99€ programmieren wir sichere Ersatzschlüssel in 30 Min vor Ort.',");
content = content.replace(/excerpt: 'Die Bestellung eines Autoschlüssels nach Fahrgestellnummer[^']+',/g, "excerpt: 'Autoschlüssel nach Fahrgestellnummer (VIN) bestellen? Wir fräsen und programmieren Ihren Ersatzschlüssel in 30 Min vor Ort ab 99€.',");
content = content.replace(/excerpt: 'Entdecken Sie clevere Methoden, um Ihr Auto ohne Schlüssel zu öffnen[^']+',/g, "excerpt: 'Ausgesperrt? Wir öffnen Ihr Auto 100% schadenfrei in 30 Min vor Ort ab 99€. Keine Kratzer, keine kaputten Scheiben.',");
content = content.replace(/excerpt: 'Entdecken Sie alles über das Nachmachen eines Schlüssels für Ihren Volkswagen[^']+',/g, "excerpt: 'Volkswagen Schlüssel nachmachen lassen ab 99€. In 30 Min vor Ort fertig codiert. Sparen Sie 50% gegenüber dem VW Händler.',");
content = content.replace(/excerpt: 'Ein ehrlicher und detaillierter Preisvergleich zwischen dem Vertragshändler und einem mobilen Kfz-Schlüsselspezialisten[^']+',/g, "excerpt: 'Händler vs. Mobiler Schlüsseldienst: Wir sparen Ihnen bis zu 50% und programmieren Autoschlüssel ab 99€ in 30 Min vor Ort.',");
content = content.replace(/excerpt: 'Verlieren Sie oft Ihren Autoschlüssel\? Keine Panik! Entdecken Sie praktische Tipps zum schnellen und sicheren Nachmachen Ihres Autoschlüssels[^']+',/g, "excerpt: 'Immer mobil bleiben: Wir machen Autoschlüssel sicher & schnell nach. Ab 99€ in 30 Min bei Ihnen vor Ort inkl. Programmierung.',");
content = content.replace(/excerpt: 'Eine ehrliche und transparente Preisliste für das Nachmachen von Transponderschlüsseln[^']+',/g, "excerpt: 'Unsere Preise: Autoschlüssel nachmachen ab 99€. Sparen Sie 50% gegenüber dem Händler! Mobiler Service in 30 Min vor Ort.',");
content = content.replace(/excerpt: 'Einen Ersatzschlüssel für Ihr Auto nachmachen zu lassen war noch nie so einfach[^']+',/g, "excerpt: 'Ersatzschlüssel ab 99€: Unsere mobile Werkstatt kommt zu Ihnen. Wir programmieren in 30 Min vor Ort alle Modelle.',");
content = content.replace(/excerpt: 'Brauchen Sie Hilfe bei einer Aussperrung, einem verlorenen Schlüssel oder einem defekten Autoschloss\? Lesen Sie hier alles über den Auto-Schlüsseldienst[^']+',/g, "excerpt: 'Auto-Schlüsseldienst ab 99€: Wir helfen in 30 Min vor Ort bei Aussperrung & Schlüsselverlust. Schadenfreie Öffnung garantiert.',");
content = content.replace(/excerpt: 'Ein kaputter Autoschlüssel muss nicht teuer sein. Entdecken Sie praktische Tipps, um Ihre Batterie oder das Gehäuse selbst zu reparieren[^']+',/g, "excerpt: 'Kaputter Schlüssel? Wir reparieren Gehäuse & Batterie ab 99€ in 30 Min vor Ort. Sparen Sie massiv im Vergleich zum Neukauf.',");
content = content.replace(/excerpt: 'Erleben Sie Stress, weil Ihr Auto den Schlüssel nicht mehr erkennt\? Entdecken Sie hier schnelle Lösungen und häufige Ursachen[^']+',/g, "excerpt: 'Auto erkennt Schlüssel nicht? Wir diagnostizieren & programmieren in 30 Min vor Ort ab 99€. Schnelle Hilfe bei defekten Schlüsseln.',");

fs.writeFileSync('src/config/services.ts', content);
console.log('Fixed services.ts');
