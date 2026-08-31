// ============================================================
// LEISTUNGEN CONFIG — Service pages
// ============================================================
import { SITE_CONFIG } from '@/config/site.config';
export type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  system?: string;
  priceFrom?: string;
  duration?: string;
  steps: string[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const LEISTUNGEN: Service[] = [
  // ── 1. AUTODEUR OPENEN ─────────────────────────────────────
  {
    slug: 'auto-ohne-schluessel-oeffnen',
    title: 'Autotür öffnen',
    metaTitle: 'Autotür öffnen ohne Schlüssel | Zerstörungsfrei & 24/7 Mobil',
    metaDesc: 'Autotür öffnen ohne Schlüssel? Wir öffnen Ihr Auto 100% zerstörungsfrei vor Ort. Durchschnittlich in 30 Min vor Ort in Stuttgart. Jetzt anrufen!',
    h1: 'Autotür öffnen ohne Schlüssel — Mobil & Zerstörungsfrei vor Ort',
    intro: 'Schlüssel im Auto vergessen? Wir öffnen Ihre Autotür 100% schadensfrei. In ~30 Minuten direkt vor Ort.',
    system: 'Lishi Lock Decoders / Spezialwerkzeuge',
    priceFrom: `Ab €${SITE_CONFIG.prices.unlock}`,
    duration: '15–30 Minuten',
    steps: [
      'Sie kontaktieren uns per Telefon oder WhatsApp und nennen Ihren Standort sowie das Automodell',
      'Unser mobiler Spezialist fährt direkt zu Ihrem Standort',
      'Identitätsprüfung: Wir prüfen, ob Sie der rechtmäßige Eigentümer sind',
      'Die Autotür wird mit speziellem Werkzeug zerstörungsfrei geöffnet',
      'Sie erhalten direkt eine offizielle Rechnung für Ihre Versicherung'
    ],
    faq: [
      { q: 'Beschädigen Sie mein Auto beim Öffnen?', a: 'Nein. Wir verwenden ausschließlich professionelles Lockpick- und Decoder-Werkzeug (wie Lishi-Tools), das speziell für Ihren Autotyp entwickelt wurde. Dadurch öffnen wir Ihre Tür zu 100% zerstörungsfrei, ohne Kratzer oder Dellen.' },
      { q: 'Wie schnell können Sie meine Autotür öffnen?', a: 'Unsere mobilen Einsatzfahrzeuge sind in der gesamten Region Stuttgart unterwegs. Wir sind durchschnittlich innerhalb von 30 Minuten vor Ort.' },
      { q: 'Kann jedes Auto zerstörungsfrei geöffnet werden?', a: 'Ja, wir können fast alle Automarken und Modelle zerstörungsfrei öffnen, einschließlich Autos mit Doppelverriegelung (Deadlock-Systeme) wie BMW, Audi und Volkswagen.' }
    ],
    relatedSlugs: ['schluessel-im-auto', 'tuer-zugefallen', 'kofferraum-oeffnen', 'schluessel-im-schloss-abgebrochen']
  },
  {
    slug: 'schluessel-im-schloss-abgebrochen',
    title: 'Schlüssel im Schloss abgebrochen',
    metaTitle: 'Autoschlüssel im Schloss oder Zündschloss abgebrochen? | Hilfe',
    metaDesc: 'Autoschlüssel im Türschloss oder Zündschloss abgebrochen? Wir entfernen den Schlüssel zerstörungsfrei und machen direkt einen neuen vor Ort.',
    h1: 'Autoschlüssel im Schloss oder Zündschloss abgebrochen? — Wir helfen',
    intro: 'Schlüssel im Schloss abgebrochen? Wir entfernen das abgebrochene Stück schonend und fertigen direkt einen neuen Schlüssel.',
    system: 'Professionelle Extraktoren & CNC-Schlüsselmaschinen',
    priceFrom: 'Ab €120',
    duration: '30–60 Minuten',
    steps: [
      'Rufen Sie uns an und melden Sie den abgebrochenen Schlüssel',
      'Wir kommen mit unserer mobilen Werkstatt zu Ihnen',
      'Mit Extraktionswerkzeugen entfernen wir das abgebrochene Teil zerstörungsfrei',
      'Anhand der beiden Hälften fräsen wir mit unserer CNC-Maschine einen neuen Schlüsselbart',
      'Der neue Schlüssel wird programmiert und getestet'
    ],
    faq: [
      { q: 'Kann ein abgebrochener Schlüssel immer aus dem Zündschloss entfernt werden?', a: 'Ja, in 99% der Fälle können wir das abgebrochene Teil mit speziellen Extraktionsschlüsseln und Mikrohaken entfernen, ohne das komplette Zündschloss austauschen zu müssen.' },
      { q: 'Bekomme ich direkt einen neuen Schlüssel?', a: 'Ja. Unser mobiler Bus ist mit einer computergesteuerten CNC-Schlüsselmaschine ausgestattet, mit der wir den Schlüsselbart vor Ort präzise nachbilden.' }
    ],
    relatedSlugs: ['auto-ohne-schluessel-oeffnen', 'autoschluessel-nachmachen', 'zuendschloss-auto-wechseln', 'autoschluessel-reparieren']
  },

  // ── 2. AUTOSLEUTEL BIJMAKEN ───────────────────────────────
  {
    slug: 'autoschluessel-nachmachen',
    title: 'Autoschlüssel nachmachen',
    metaTitle: 'Autoschlüssel nachmachen | Ersatzschlüssel | 12 Mon Garantie',
    metaDesc: 'Autoschlüssel nachmachen vor Ort? Ersatzschlüssel programmieren für alle Marken. Günstiger als der Händler, 12 Monate Garantie. Jetzt anrufen!',
    h1: 'Autoschlüssel nachmachen & programmieren — Mobiler Service vor Ort',
    intro: 'Ersatzschlüssel benötigt? Wir programmieren und fräsen Autoschlüssel aller Marken vor Ort. Bis zu 50% günstiger als beim Händler!',
    system: 'AVDI, Lonsdor K518, VVDI, Autel IM608 Pro',
    priceFrom: `Ab €${SITE_CONFIG.prices.transponder}`,
    duration: '30–60 Minuten',
    steps: [
      'Geben Sie Marke, Modell und Baujahr per Telefon oder WhatsApp an',
      'Wir vereinbaren einen Termin bei Ihnen vor Ort',
      'Wir fräsen den Schlüsselbart mit einer CNC-Maschine',
      'Wir programmieren Transponder und Fernbedienung über den OBD-Diagnoseanschluss',
      'Vollständiger Test aller Funktionen (Türen, Kofferraum, Motorstart)'
    ],
    faq: [
      { q: 'Was kostet das Nachmachen eines Autoschlüssels bei Ihnen?', a: 'Ein Standard-Transponderschlüssel beginnt bei 149€. Ein Klappschlüssel mit Fernbedienung kostet im Durchschnitt 199€ bis 349€. Ein Smart Key ist ab 299€ erhältlich. Das ist im Schnitt 30% bis 50% günstiger als beim Vertragshändler.' },
      { q: 'Bekomme ich eine Garantie auf den neuen Autoschlüssel?', a: 'Ja, Sie erhalten 12 Monate volle Garantie auf die Programmierung und die elektronischen Komponenten des Schlüssels.' },
      { q: 'Muss ich mit dem Auto vorbeikommen?', a: 'Nein. Unser Spezialist kommt mit einer voll ausgestatteten mobilen Werkstatt zu Ihnen nach Stuttgart oder in die Umgebung.' }
    ],
    relatedSlugs: ['transponder-programmieren', 'fernbedienung-nachmachen', 'smart-key-programmieren', 'ersatzschluessel-machen']
  },
  {
    slug: 'transponder-programmieren',
    title: 'Transponder programmieren',
    metaTitle: 'Transponder programmieren | Wegfahrsperren-Chip anlernen',
    metaDesc: 'Transponder Schlüssel programmieren vor Ort. Spezialist für Megamos ID48, PCF7936, Hitag Pro & DST-AES Chips. 12 Monate Garantie.',
    h1: 'Transponder Schlüssel programmieren — Immo & Chip anlernen',
    intro: 'Probleme mit der Wegfahrsperre? Wir programmieren Transponder-Chips schnell und zuverlässig in den Bordcomputer ein.',
    system: 'Megamos ID48, NXP PCF7935 / PCF7936 / PCF7945 / PCF7953, Hitag 2 / 3 / Pro, DST40 / DST80 / DST-AES',
    priceFrom: `Ab €${SITE_CONFIG.prices.unlock}`,
    duration: '30–60 Minuten',
    steps: [
      'Wir lesen das Wegfahrsperren-System mit OBD-Diagnosetools aus',
      'Der richtige Transponder-Chip wird ausgewählt',
      'Der Chip wird mit der ECU/Wegfahrsperre Ihres Fahrzeugs gekoppelt',
      'Der Motorstart wird überprüft, um die Wegfahrsperre zu verifizieren'
    ],
    faq: [
      { q: 'Kann ein defekter Transponder-Chip ersetzt werden?', a: 'Ja. Wenn Ihr Auto den Schlüssel nicht mehr erkennt (oft blinkt dann eine Schlüssel-Leuchte im Armaturenbrett), können wir den alten Chip deprogrammieren und einen neuen Transponder einlesen.' },
      { q: 'Welche Transponder-Chips unterstützen Sie?', a: 'Wir unterstützen alle gängigen Chips, darunter Megamos ID48 (Audi/VW), NXP Hitag Pro (BMW/Opel), Texas Instruments DST-AES (Toyota) und den PCF7936.' }
    ],
    relatedSlugs: ['autoschluessel-nachmachen', 'smart-key-programmieren', 'fernbedienung-nachmachen', 'zuendschloss-auto-wechseln']
  },
  {
    slug: 'fernbedienung-nachmachen',
    title: 'Fernbedienung nachmachen',
    metaTitle: 'Autoschlüssel mit Fernbedienung nachmachen | OEM Qualität | 24/7',
    metaDesc: 'Neue Fernbedienung für Ihr Auto gesucht? Wir programmieren Fernbedienungen vor Ort. Zentralverriegelung, OEM-Chips, 12 Mon Garantie.',
    h1: 'Autoschlüssel mit Fernbedienung nachmachen & synchronisieren',
    intro: 'Sie möchten einen Schlüssel mit funktionierenden Tasten für die Zentralverriegelung? Wir programmieren Autoschlüssel mit Fernbedienung für fast alle Marken. Wir verwenden ausschließlich hochwertige OEM-Qualität Platinen und Chips.',
    system: 'ASK / FSK Rolling Code, NXP PCF7946 / PCF7961, Hitag2, 315MHz / 433MHz / 868MHz',
    priceFrom: 'Ab €120',
    duration: '30–60 Minuten',
    steps: [
      'Mechanisches Fräsen des Schlüsselbarts',
      'Synchronisierung der Fernbedienungs-Platine mit dem BCM (Body Control Module)',
      'Konfiguration der Zentralverriegelung und ggf. Kofferraum-/Alarmtasten',
      'Prüfung von Signalstärke und Rolling-Code-Sicherheit'
    ],
    faq: [
      { q: 'Warum funktioniert die Fernbedienung nach einem Batteriewechsel manchmal nicht?', a: 'Manche Autoschlüssel verlieren ihre Synchronisation, wenn die Batterie zu lange leer war. Wir können die Fernbedienung durch ein spezielles Verfahren neu an Ihrem Auto anlernen.' },
      { q: 'Sind Ihre Fernbedienungen Originalteile?', a: 'Wir liefern sowohl Original-OEM-Schlüssel als auch hochwertige Aftermarket-Alternativen, die identisch funktionieren. Sie haben immer die Wahl und erhalten 12 Monate Garantie.' }
    ],
    relatedSlugs: ['autoschluessel-nachmachen', 'smart-key-programmieren', 'transponder-programmieren', 'batterie-wechseln']
  },
  {
    slug: 'smart-key-programmieren',
    title: 'Smart Key / Keyless Entry programmieren',
    metaTitle: 'Smart Key programmieren | Keyless Go & Proximity Schlüssel',
    metaDesc: 'Keyless Entry & Smart Keys vor Ort programmieren. Spezialist für BMW CAS4/FEM/BDC, VAG MQB, Mercedes FBS3/FBS4. 12 Mon Garantie.',
    h1: 'Smart Key & Keyless Entry programmieren — Proximity Spezialist',
    intro: 'Keyless-Go Schlüssel benötigt? Wir programmieren Smart Keys für alle Marken (inkl. BMW, Mercedes) direkt bei Ihnen.',
    system: 'BMW CAS4+ / FEM / BDC / BDC2, Mercedes-Benz FBS3 / FBS4 / EIS / ELV, VAG MQB / MQB48 / MLB / SFD, JLR KVM / RFA / BCM',
    priceFrom: 'Ab €180',
    duration: '45–90 Minuten',
    steps: [
      'OBD-Diagnoseverbindung zum Steuergerät herstellen',
      'Vorhandene Schlüssel prüfen und synchronisieren',
      'Proximity-Transponder über die Ringantenne anlernen',
      'Keyless-Go (Starten ohne Schlüssel) und Keyless Entry testen'
    ],
    faq: [
      { q: 'Was ist der Unterschied zwischen FBS3 und FBS4 bei Mercedes?', a: 'FBS3 ist die ältere Generation. FBS4 ist die neueste Generation (ab ca. 2014). Wir verfügen über spezielle Hardware (wie G-Box 3 und AVDI), um auch komplexe FBS3-Systeme und spezifische FBS4-Schlüssel erfolgreich zu programmieren.' },
      { q: 'Kann ein verlorener Keyless-Schlüssel missbraucht werden?', a: 'Nein. Beim Anlernen des neuen Smart Keys löschen wir den verlorenen oder gestohlenen Schlüssel direkt aus dem Speicher des Fahrzeugs. Der verlorene Schlüssel kann das Auto dann nicht mehr öffnen oder starten.' }
    ],
    relatedSlugs: ['autoschluessel-nachmachen', 'transponder-programmieren', 'fernbedienung-nachmachen']
  },
  {
    slug: 'ersatzschluessel-machen',
    title: 'Ersatzschlüssel anfertigen lassen',
    metaTitle: 'Auto Ersatzschlüssel anfertigen | 12 Monate Garantie | Mobil',
    metaDesc: 'Zusätzlichen Ersatzschlüssel für Ihr Auto anfertigen lassen? Wir programmieren Ersatzschlüssel für alle Marken vor Ort. Günstiger als Händler.',
    h1: 'Auto Ersatzschlüssel anfertigen lassen — Vermeiden Sie hohe Abschleppkosten',
    intro: 'Wenn Sie nur noch einen Autoschlüssel haben, gehen Sie ein großes Risiko ein. Bei Verlust Ihres letzten Schlüssels (All Keys Lost) sind die Kosten für Öffnung und Programmierung um ein Vielfaches höher. Lassen Sie daher rechtzeitig einen Ersatzschlüssel anfertigen. Wir kommen zu Ihnen vor Ort, damit Sie keine Zeit verlieren.',
    system: 'Transponder Cloners / OBD programming tools',
    priceFrom: `Ab €${SITE_CONFIG.prices.unlock}`,
    duration: '30–60 Minuten',
    steps: [
      'Sie wählen zwischen einem einfachen Ersatzschlüssel oder einer Fernbedienung',
      'Wir fräsen den mechanischen Schlüssel anhand Ihres aktuellen Schlüssels',
      'Wir klonen den Transponder-Chip oder schreiben ihn über den OBD-Anschluss ein',
      'Der neue Schlüssel wird sofort auf Funktion geprüft'
    ],
    faq: [
      { q: 'Kann ich auch einen einfachen Ersatzschlüssel ohne Tasten bekommen?', a: 'Ja, das ist eine hervorragende Budget-Option. Dieser Schlüssel kann die Türen mechanisch öffnen und enthält den richtigen Transponder-Chip, um den Motor zu starten. Dies ist bereits ab 149€ möglich.' },
      { q: 'Wie lange dauert die Anfertigung eines Ersatzschlüssels?', a: 'Innerhalb von 30 bis 60 Minuten ist Ihr neuer Ersatzschlüssel fertig und vollständig programmiert.' }
    ],
    relatedSlugs: ['autoschluessel-nachmachen', 'transponder-programmieren', 'fernbedienung-nachmachen', 'smart-key-programmieren']
  },

  {
    slug: 'alle-schluessel-verloren-auto',
    title: 'Alle Schlüssel verloren (AKL)',
    metaTitle: 'Alle Autoschlüssel verloren? | AKL Spezialist vor Ort | 24/7',
    metaDesc: 'Alle Autoschlüssel verloren? Lassen Sie Ihr Auto nicht zum Händler abschleppen! Wir machen neue Schlüssel direkt vor Ort. Inklusive Programmierung.',
    h1: 'Alle Autoschlüssel verloren? — Mobiler Schlüsseldienst vor Ort',
    intro: 'Alle Schlüssel verloren? Wir helfen sofort! Kein teures Abschleppen nötig, wir programmieren neue Schlüssel direkt vor Ort.',
    system: 'All Keys Lost (AKL) Software, EEPROM-Programmierung, MCU-Daten lesen, OBD-Key-Writing',
    priceFrom: `Ab €${SITE_CONFIG.prices.allKeysLost}`,
    duration: '60–180 Minuten',
    steps: [
      'Wir überprüfen Ihre Identität und Fahrzeugpapiere',
      'Das Auto wird zerstörungsfrei geöffnet',
      'Der mechanische Schlüsselcode wird ermittelt',
      'Das Motorsteuergerät oder Startmodul (wie BMW BDC oder Mercedes EIS) wird ausgelesen',
      'Neue Transponderschlüssel werden direkt in den Speicher geschrieben',
      'Die verlorenen Schlüssel werden dauerhaft gesperrt'
    ],
    faq: [
      { q: 'Muss das Auto abgeschleppt werden, wenn ich alle Schlüssel verloren habe?', a: 'Nein. Im Gegensatz zum Händler erledigen wir alles dort, wo das Auto geparkt ist. Das spart Ihnen teure Abschleppkosten.' },
      { q: 'Geht das bei jeder Automarke?', a: 'Wir können bei fast 98% der Marken Ersatzschlüssel anfertigen, wenn alle Schlüssel verloren sind, einschließlich komplexer VAG MQB48 (VW Golf 8, Audi A3 8Y) und Mercedes FBS3 Systeme.' }
    ],
    relatedSlugs: ['autoschluessel-verloren', 'autoschluessel-nachmachen', 'smart-key-programmieren', 'zuendschloss-auto-wechseln']
  },

  // ── 4. BATTERIJ VERVANGEN ─────────────────────────────────
  {
    slug: 'batterie-wechseln',
    title: 'Batteriewechsel',
    metaTitle: 'Autoschlüssel Batterie wechseln | Festpreis 15€–20€ | Mobil',
    metaDesc: 'Autoschlüssel Batterie leer? Wir wechseln Ihre Autoschlüssel Batterie vor Ort zum Festpreis von 15€ bis 20€. Varta, Panasonic, Duracell.',
    h1: 'Autoschlüssel Batterie wechseln — Festpreis vor Ort',
    intro: 'Erhalten Sie die Meldung "Schlüsselbatterie schwach" oder reagiert das Auto erst nach mehrmaligem Drücken? Verhindern Sie, dass der Schlüssel plötzlich nicht mehr funktioniert. Wir tauschen Ihre Schlüsselbatterie vor Ort mit Marken-Knopfzellen.',
    system: 'Knopfzellen: CR2032, CR2025, CR1620, CR1616, CR2450 (Duracell, Panasonic, Varta)',
    priceFrom: 'Festpreis €15 - €20',
    duration: '5–10 Minuten',
    steps: [
      'Unser Techniker prüft die Signalstärke des Schlüssels',
      'Das Gehäuse wird vorsichtig und ohne Beschädigung geöffnet',
      'Die alte Knopfzelle wird entfernt und die Kontakte gereinigt',
      'Eine neue, originale Marken-Batterie wird eingesetzt',
      'Der Schlüssel wird erneut auf Funktion und Signalstärke geprüft'
    ],
    faq: [
      { q: 'Welche Batterie befindet sich in meinem Autoschlüssel?', a: 'Die meisten Autoschlüssel verwenden eine CR2032 oder CR2025 Lithium-Batterie. Einige japanische Marken verwenden die kleinere CR1620 oder CR1616, während neuere Smart Keys (BMW G-Serie) die dicke CR2450 benötigen.' },
      { q: 'Verliert mein Schlüssel den Code, wenn die Batterie herausgenommen wird?', a: 'Bei einem schnellen Batteriewechsel bleibt der Code erhalten. Wenn die Batterie jedoch tagelang leer war, ist möglicherweise eine Synchronisierung erforderlich. Wir führen dies direkt kostenlos durch.' },
      { q: 'Warum darf ich keine billige Batterie verwenden?', a: 'Billige Batterien verlieren schnell an Spannung und können auslaufen, was die Platine Ihres teuren Schlüssels dauerhaft beschädigen kann. Wir verwenden ausschließlich Varta, Panasonic und Duracell.' }
    ],
    relatedSlugs: ['fernbedienung-nachmachen', 'smart-key-programmieren', 'autoschluessel-reparieren', 'gehaeuse-wechseln']
  },

  // ── 5. AUTOSLEUTEL REPARATIE ──────────────────────────────
  {
    slug: 'autoschluessel-reparieren',
    title: 'Autoschlüssel reparieren',
    metaTitle: 'Autoschlüssel reparieren | Gehäuse & Tasten löten | Stuttgart',
    metaDesc: 'Autoschlüssel kaputt? Wir reparieren Ihren Autoschlüssel vor Ort in Stuttgart. Neues Gehäuse, Tasten löten, Batterie wechseln. Direkt anrufen!',
    h1: 'Autoschlüssel reparieren — Sparen Sie sich einen neuen Schlüssel',
    intro: 'Autoschlüssel defekt oder nass geworden? Wir reparieren Platinen, Spulen und Drucktasten fachgerecht und schnell.',
    system: 'Mikrolöten, SMD-Schalteraustausch, Reparatur der Transponderspule',
    priceFrom: 'Ab €49',
    duration: '20–45 Minuten',
    steps: [
      'Wir messen die Platine durch, um den genauen Fehler zu finden',
      'Defekte Mikroschalter oder Spulen werden entlötet',
      'Neue Komponenten werden unter dem Mikroskop eingelötet',
      'Der Schlüssel wird mit einem HF-Frequenztester geprüft',
      'Optional setzen wir die Platine in ein neues Gehäuse ein'
    ],
    faq: [
      { q: 'Wie kann ich einen kaputten Autoschlüssel selbst reparieren?', a: 'Sie können einen defekten Autoschlüssel selbst reparieren, indem Sie die Batterie wechseln. Für komplexere Probleme wie defekte Tasten, Startprobleme oder Transponder-Defekte ist professionelles Löten erforderlich. Selbst löten ohne Mikroskop kann den Schlüssel endgültig unbrauchbar machen.' },
      { q: 'Was tun, wenn der Autoschlüssel nicht mehr reagiert?', a: 'Tauschen Sie zuerst die Batterie (meist CR2032). Wenn der Schlüssel danach immer noch nicht funktioniert, prüfen Sie, ob der Ersatzschlüssel funktioniert. Reagiert das Auto auf keinen Schlüssel, liegt das Problem oft an der Autobatterie oder dem Empfängermodul.' },
      { q: 'Welche Marken von Autoschlüsseln sind leicht zu reparieren?', a: 'Marken wie Volkswagen, Peugeot, Citroën, Renault und Opel sind bezüglich Gehäuse und Tasten relativ leicht zu reparieren. Ultraschall-verklebte Schlüssel (z. B. von Ford oder BMW) erfordern Spezialwerkzeug.' }
    ],
    relatedSlugs: ['gehaeuse-wechseln', 'tasten-reparieren', 'zuendschloss-auto-wechseln', 'batterie-wechseln']
  },
  {
    slug: 'gehaeuse-wechseln',
    title: 'Schlüsselgehäuse ersetzen',
    metaTitle: 'Autoschlüssel Gehäuse ersetzen | Neues Gehäuse vor Ort',
    metaDesc: 'Autoschlüssel-Gehäuse kaputt oder abgenutzt? Wir tauschen Ihr Schlüsselgehäuse vor Ort gegen ein neues, stabiles Exemplar in OEM-Qualität aus.',
    h1: 'Schlüsselgehäuse ersetzen — Geben Sie Ihrem Schlüssel ein zweites Leben',
    intro: 'Ist das Plastikgehäuse Ihres Schlüssels gerissen, sind die Gummitasten eingedrückt oder klappt der Eisenteil nicht mehr richtig aus? Wir tauschen Ihr Schlüsselgehäuse vor Ort gegen ein neues Exemplar in OEM-Qualität aus. Die Elektronik wird vorsichtig umgesetzt.',
    system: 'OEM Ersatzschlüsselgehäuse',
    priceFrom: 'Ab €49',
    duration: '15–30 Minuten',
    steps: [
      'Das alte Gehäuse wird vorsichtig geöffnet (bei verklebten Typen manchmal aufgefäst)',
      'Die empfindliche Platine und der Transponder-Chip werden zerstörungsfrei entfernt',
      'Die internen Komponenten werden gereinigt und überprüft',
      'Alles wird in das neue Gehäuse eingesetzt',
      'Der Schlüsselbart wird übernommen oder neu gefräst'
    ],
    faq: [
      { q: 'Warum muss ein verklebter Schlüssel (wie Ford oder Opel) aufgefäst werden?', a: 'Werksschlüssel von z. B. Ford und Opel sind ultraschallverschweißt, um wasserdicht zu sein. Um die Platine zu retten, müssen wir das alte Gehäuse mit Präzisionswerkzeugen aufschneiden.' },
      { q: 'Startet mein Auto nach dem Austausch des Gehäuses noch?', a: 'Ja. Da wir den Original-Transponderchip (der mit Ihrer Wegfahrsperre gekoppelt ist) in das neue Gehäuse mitnehmen, startet das Auto weiterhin problemlos.' }
    ],
    relatedSlugs: ['autoschluessel-reparieren', 'tasten-reparieren', 'batterie-wechseln', 'autoschluessel-nachmachen']
  },
  {
    slug: 'tasten-reparieren',
    title: 'Tasten reparieren',
    metaTitle: 'Autoschlüssel Drucktasten reparieren | Schalter löten',
    metaDesc: 'Funktionieren die Tasten Ihres Autoschlüssels nicht mehr? Wir löten neue Mikroschalter auf die Platine. Schnell vor Ort erledigt. Anrufen!',
    h1: 'Autoschlüssel Drucktasten reparieren — SMD-Mikroschalter löten',
    intro: 'Reagiert das Auto nicht mehr auf die Tasten Ihres Schlüssels, obwohl die Batterie voll ist? Oft sind die Mikroschalter auf der Platine abgenutzt oder abgebrochen. Wir löten neue Schalter mit professionellen SMD-Löttechniken auf die Platine.',
    system: 'SMD-Mikrolöten / Platinenschalter-Austausch',
    priceFrom: 'Ab €49',
    duration: '20–40 Minuten',
    steps: [
      'Wir demontieren den Schlüssel und inspizieren die Platine unter einem Mikroskop',
      'Die defekten Tasten werden vorsichtig entlötet',
      'Neue, originale Mikroschalter werden auf die Platine gelötet',
      'Wir testen die Signalübertragung und montieren den Schlüssel wieder'
    ],
    faq: [
      { q: 'Was ist ein Mikroschalter?', a: 'Ein Mikroschalter ist der kleine elektronische Knopf auf der Platine, der Kontakt herstellt, wenn Sie außen auf den Schlüssel drücken. Durch intensiven Gebrauch verschleißen diese Kontakte.' },
      { q: 'Kann jeder Tastentyp ersetzt werden?', a: 'Ja, wir haben fast alle Arten von SMD-Schaltern für alle Automarken in unseren mobilen Bussen auf Lager.' }
    ],
    relatedSlugs: ['autoschluessel-reparieren', 'gehaeuse-wechseln', 'batterie-wechseln', 'fernbedienung-nachmachen']
  },
  {
    slug: 'zuendschloss-auto-wechseln',
    title: 'Zündschloss ersetzen',
    metaTitle: 'Auto Zündschloss ersetzen oder reparieren vor Ort',
    metaDesc: 'Auto Zündschloss defekt oder Schlüssel dreht sich nicht mehr? Bleibt Ihr Schlüssel im Schloss stecken? Wir reparieren Ihr Zündschloss vor Ort.',
    h1: 'Auto Zündschloss ersetzen & reparieren — Direkt vor Ort',
    intro: 'Zündschloss blockiert? Wir reparieren oder tauschen Ihr Zündschloss und die Lenkradverriegelung vor Ort aus.',
    system: 'Mercedes EIS / ELV / ESL Systeme, BMW CAS-Synchronisation, mechanische Zündschlösser',
    priceFrom: `Ab €${SITE_CONFIG.prices.ignition}`,
    duration: '45–120 Minuten',
    steps: [
      'Mechanische und elektrische Diagnose des Zündschlosses',
      'Demontage der Lenksäule oder der Verkleidung',
      'Reparatur der Schließzylinder oder Austausch der elektronischen Spule',
      'Ggf. Neucodierung der vorhandenen Autoschlüssel auf das neue Schloss',
      'Umfassender Starttest und Systemdiagnose'
    ],
    faq: [
      { q: 'Mein Mercedes-Schlüssel klickt nicht und das Lenkradschloss entriegelt nicht, was nun?', a: 'Dies ist ein bekanntes Problem bei Mercedes (W204, W212 etc.) und deutet fast immer auf ein defektes ELV (elektronisches Lenkradschloss) oder EIS-Modul hin. Händler tauschen die komplette Lenksäule für ca. 1.200€ aus. Wir reparieren das Modul vor Ort oder programmieren einen Emulator für einen Bruchteil dieses Preises.' },
      { q: 'Muss ich nach dem Austausch des Zündschlosses einen anderen Schlüssel verwenden?', a: 'Nein. Wir passen das neue mechanische Schloss so an, dass es perfekt zum Code Ihrer aktuellen Türschlüssel passt. Sie behalten also einen Schlüssel für das gesamte Auto.' }
    ],
    relatedSlugs: ['autoschluessel-reparieren', 'schluessel-im-schloss-abgebrochen', 'transponder-programmieren', 'alle-schluessel-verloren-auto']
  }
];
