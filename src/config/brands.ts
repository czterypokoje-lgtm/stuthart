export type Brand = {
  slug: string;
  name: string;
  nameSlug: string;
  priority: string;
  system: string;
  excerpt: string;
  customSeoBlurb?: string;
  customMetaTitle?: string;
  specialIntents?: { slug: string; name: string }[];
  customH1?: string;
  models: { slug: string; name: string; years: string }[];
};

export const BRANDS: Brand[] = [
  {
    "slug": "volkswagen",
    "name": "Volkswagen",
    "nameSlug": "volkswagen",
    "priority": "P1",
    "system": "MQB / PQ35 / KESSY / UDS",
    "excerpt": "VW Schlüssel nachmachen: Golf, Polo, Passat, T5/T6.",
    "customSeoBlurb": "Wir sind auf Volkswagen spezialisiert. Egal ob ältere PQ35-Plattform (Golf 5/6) oder moderne MQB-Systeme (Golf 7/8, Passat B8) mit KESSY – wir programmieren neue VW-Autoschlüssel und Transponder direkt vor Ort. Selbst bei \"All Keys Lost\" (AKL) greifen wir auf sichere Online-VAG-Datenbanken zurück.",
    "models": [
      {
        "slug": "golf",
        "name": "Golf",
        "years": "Alle Baujahre (inkl. MQB & SFD)"
      },
      {
        "slug": "polo",
        "name": "Polo",
        "years": "Alle Baujahre"
      },
      {
        "slug": "passat",
        "name": "Passat",
        "years": "B5, B6, B7, B8, B9"
      },
      {
        "slug": "transporter",
        "name": "Transporter (T4/T5/T6)",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "bmw",
    "name": "BMW",
    "nameSlug": "bmw",
    "priority": "P1",
    "system": "CAS (1-4) / FEM / BDC",
    "excerpt": "BMW Schlüssel programmieren: 1er, 3er, 5er, X-Modelle.",
    "customSeoBlurb": "Die Programmierung von BMW-Schlüsseln erfordert höchste Präzision. Wir bearbeiten alle Wegfahrsperren-Generationen: Vom älteren EWS und CAS1-CAS4 (E- und frühe F-Modelle) bis hin zu hochkomplexen FEM- und BDC-Modulen (F- und G-Modelle). Ihr neuer BMW Smart Key wird sicher in die Bordelektronik integriert.",
    "models": [
      {
        "slug": "1er",
        "name": "1er",
        "years": "E87, F20, F40"
      },
      {
        "slug": "3er",
        "name": "3er",
        "years": "E46, E90, F30, G20"
      },
      {
        "slug": "5er",
        "name": "5er",
        "years": "E39, E60, F10, G30"
      },
      {
        "slug": "x3-x5",
        "name": "X3 & X5",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "mercedes",
    "name": "Mercedes",
    "nameSlug": "mercedes",
    "priority": "P1",
    "system": "FBS3 / FBS4 / EZS / ELV",
    "excerpt": "Mercedes-Benz Schlüssel Ersatz & EZS/ELV Reparatur.",
    "customSeoBlurb": "Mercedes-Schlüssel verloren? Wir codieren FBS3 und FBS4 (Fahrberechtigungssystem) Smart Keys. Zudem beheben wir den berüchtigten \"Zündschloss dreht nicht\"-Fehler bei W204/W212 Modellen durch professionelle EZS/ELV (elektronische Lenkradverriegelung) Reparatur oder Emulatoren vor Ort.",
    "models": [
      {
        "slug": "a-klasse",
        "name": "A-Klasse",
        "years": "W169, W176, W177"
      },
      {
        "slug": "c-klasse",
        "name": "C-Klasse",
        "years": "W203, W204, W205, W206"
      },
      {
        "slug": "e-klasse",
        "name": "E-Klasse",
        "years": "W211, W212, W213"
      },
      {
        "slug": "sprinter",
        "name": "Sprinter",
        "years": "W906, W907"
      }
    ]
  },
  {
    "slug": "audi",
    "name": "Audi",
    "nameSlug": "audi",
    "priority": "P1",
    "system": "UDS / BCM2 / MQB / MLB",
    "excerpt": "Audi Schlüssel nachmachen: A3, A4, A6, Q-Modelle.",
    "customSeoBlurb": "Für Audi bieten wir die komplette Palette an Schlüsselservices. Von älteren Megamos48-Transpondern bis hin zu modernen BCM2-Systemen (Audi A4, A5, Q5) und der MLB-Plattform. Wir fräsen den Notschlüsselbart CNC-genau und lernen Ihren neuen Advanced Key (Keyless Go) fachgerecht an.",
    "models": [
      {
        "slug": "a3",
        "name": "A3",
        "years": "8L, 8P, 8V, 8Y"
      },
      {
        "slug": "a4",
        "name": "A4",
        "years": "B5, B6, B7, B8, B9"
      },
      {
        "slug": "a6",
        "name": "A6",
        "years": "C5, C6, C7, C8"
      },
      {
        "slug": "q5",
        "name": "Q5",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "skoda",
    "name": "Skoda",
    "nameSlug": "skoda",
    "priority": "P1",
    "system": "VAG MQB / KESSY",
    "excerpt": "Skoda Autoschlüssel: Octavia, Fabia, Superb.",
    "customSeoBlurb": "Als Teil des VW-Konzerns nutzt Skoda die gleichen Wegfahrsperren wie VW (MQB-Plattform). Wir können für Modelle wie den Octavia 3/4 oder Kodiaq problemlos neue KESSY-Schlüssel anlernen, ohne dass Sie Wochen auf einen Termin beim VAG-Händler warten müssen.",
    "models": [
      {
        "slug": "octavia",
        "name": "Octavia",
        "years": "Alle Generationen"
      },
      {
        "slug": "fabia",
        "name": "Fabia",
        "years": "Alle Generationen"
      },
      {
        "slug": "superb",
        "name": "Superb",
        "years": "Alle Generationen"
      },
      {
        "slug": "kodiaq",
        "name": "Kodiaq",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "opel",
    "name": "Opel",
    "nameSlug": "opel",
    "priority": "P2",
    "system": "GM PATS / PSA",
    "excerpt": "Opel Schlüssel nachmachen: Corsa, Astra, Insignia.",
    "customSeoBlurb": "Ob ältere GM-basierte Wegfahrsperren (Astra H/J) oder neuere PSA-basierte Systeme (Corsa F) – wir haben die korrekten Security-Pins und OBD-Diagnosegeräte, um Opel-Autoschlüssel kostengünstig und schnell nachzumachen.",
    "models": [
      {
        "slug": "corsa",
        "name": "Corsa",
        "years": "C, D, E, F"
      },
      {
        "slug": "astra",
        "name": "Astra",
        "years": "G, H, J, K, L"
      },
      {
        "slug": "insignia",
        "name": "Insignia",
        "years": "Alle Generationen"
      }
    ]
  },
  {
    "slug": "ford",
    "name": "Ford",
    "nameSlug": "ford",
    "priority": "P2",
    "system": "PATS / Incode / Keyless",
    "excerpt": "Ford Autoschlüssel: Fiesta, Focus, Transit.",
    "customSeoBlurb": "Ford verwendet das PATS-Sicherheitssystem. Wir berechnen Incode/Outcode für ältere Modelle offline und besitzen Händlerzugänge für die neuesten Ford-Modelle. Besonders für Handwerker mit Ford Transit bieten wir einen ultra-schnellen Schlüssel-Ersatz direkt auf der Baustelle.",
    "models": [
      {
        "slug": "fiesta",
        "name": "Fiesta",
        "years": "Alle Baujahre"
      },
      {
        "slug": "focus",
        "name": "Focus",
        "years": "Alle Baujahre"
      },
      {
        "slug": "transit",
        "name": "Transit",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "seat",
    "name": "Seat",
    "nameSlug": "seat",
    "priority": "P2",
    "system": "MQB / VAG KESSY",
    "excerpt": "Seat / Cupra Schlüssel: Leon, Ibiza, Ateca.",
    "customSeoBlurb": "Seat- und Cupra-Fahrzeuge basieren technisch auf der VAG-Architektur. Unser mobiler Service fräst und programmiert Ibiza- oder Leon-Schlüssel direkt vor Ihrer Haustür, voll kompatibel mit dem Seat KESSY Keyless-Entry System.",
    "models": [
      {
        "slug": "leon",
        "name": "Leon",
        "years": "Alle Generationen"
      },
      {
        "slug": "ibiza",
        "name": "Ibiza",
        "years": "Alle Generationen"
      },
      {
        "slug": "ateca",
        "name": "Ateca",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "hyundai",
    "name": "Hyundai",
    "nameSlug": "hyundai",
    "priority": "P2",
    "system": "Smart Key / ID46 / ID8A",
    "excerpt": "Hyundai Schlüssel: i10, i20, i30, Tucson.",
    "customSeoBlurb": "Wir programmieren sowohl herkömmliche Transponderschlüssel mit Fernbedienung (ID46) als auch die neuesten kapazitiven Smart Keys (ID8A) für Hyundai-Modelle. Ihr neuer Tucson- oder i30-Schlüssel ist innerhalb von 30 Minuten einsatzbereit.",
    "models": [
      {
        "slug": "i10",
        "name": "i10",
        "years": "Alle Baujahre"
      },
      {
        "slug": "i20",
        "name": "i20",
        "years": "Alle Baujahre"
      },
      {
        "slug": "i30",
        "name": "i30",
        "years": "Alle Baujahre"
      },
      {
        "slug": "tucson",
        "name": "Tucson",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "renault",
    "name": "Renault",
    "nameSlug": "renault",
    "priority": "P2",
    "system": "Keycard / UCH / Hands-free",
    "excerpt": "Renault Keycards: Clio, Megane, Captur.",
    "customSeoBlurb": "Renault ist bekannt für seine empfindlichen Keycards, die oft in der Hosentasche brechen. Wir haben Megane-, Clio- und Scenic-Keycards (Hands-free) stets auf Lager und programmieren diese über das UCH-Modul direkt bei Ihnen vor Ort neu.",
    "models": [
      {
        "slug": "clio",
        "name": "Clio",
        "years": "Alle Generationen"
      },
      {
        "slug": "megane",
        "name": "Megane (Keycard)",
        "years": "Alle Generationen"
      },
      {
        "slug": "captur",
        "name": "Captur",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "fiat",
    "name": "Fiat",
    "nameSlug": "fiat",
    "priority": "P2",
    "system": "BSI / Marelli / Megamos",
    "excerpt": "Fiat Schlüssel: 500, Ducato, Panda.",
    "customSeoBlurb": "Das Programmieren eines Fiat 500 oder Fiat Ducato Schlüssels erfordert das direkte Auslesen des BSI-Moduls (Body Computer). Wir erledigen diese Pre-Codierung professionell und sicher am Fahrzeug, ideal auch für Ducato-Wohnmobile.",
    "models": [
      {
        "slug": "500",
        "name": "500",
        "years": "Alle Baujahre"
      },
      {
        "slug": "ducato",
        "name": "Ducato",
        "years": "Alle Generationen"
      },
      {
        "slug": "panda",
        "name": "Panda",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "toyota",
    "name": "Toyota",
    "nameSlug": "toyota",
    "priority": "P2",
    "system": "H-Chip / G-Chip / Smart Key",
    "excerpt": "Toyota Schlüssel: Yaris, Corolla, RAV4.",
    "customSeoBlurb": "Wir sind Experten für Toyota-Wegfahrsperren. Ob alter G-Chip, neuerer H-Chip oder das Smart Key Keyless-Go-System im neuen RAV4 Hybrid – wir führen auch bei komplett verlorenen Schlüsseln einen Wegfahrsperren-Reset (Immo Reset) durch.",
    "models": [
      {
        "slug": "yaris",
        "name": "Yaris",
        "years": "Alle Baujahre"
      },
      {
        "slug": "corolla",
        "name": "Corolla",
        "years": "Alle Baujahre"
      },
      {
        "slug": "rav4",
        "name": "RAV4",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "kia",
    "name": "Kia",
    "nameSlug": "kia",
    "priority": "P3",
    "system": "Smart Key / ID8A",
    "excerpt": "Kia Autoschlüssel: Ceed, Sportage, Picanto.",
    "customSeoBlurb": "Die Technik von Kia ist eng mit Hyundai verwandt. Wir bieten raschen Ersatz für Ihren Kia Ceed oder Sportage Smart Key. Alle unsere Schlüssel verfügen über die originale Funkfrequenz und Keyless-Go-Funktionalität.",
    "models": [
      {
        "slug": "ceed",
        "name": "Ceed",
        "years": "Alle Baujahre"
      },
      {
        "slug": "sportage",
        "name": "Sportage",
        "years": "Alle Baujahre"
      },
      {
        "slug": "picanto",
        "name": "Picanto",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "peugeot",
    "name": "Peugeot",
    "nameSlug": "peugeot",
    "priority": "P3",
    "system": "BSI / PSA",
    "excerpt": "Peugeot Schlüssel: 208, 308, 2008.",
    "customSeoBlurb": "Wir lesen den PIN-Code Ihrer Peugeot-Wegfahrsperre sicher aus dem BSI-System aus und codieren neue Funkschlüssel für Modelle wie den 208, 308 oder Boxer. Schnell, verlässlich und deutlich günstiger als in der PSA-Vertragswerkstatt.",
    "models": [
      {
        "slug": "208",
        "name": "208",
        "years": "Alle Baujahre"
      },
      {
        "slug": "308",
        "name": "308",
        "years": "Alle Baujahre"
      },
      {
        "slug": "2008",
        "name": "2008",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "dacia",
    "name": "Dacia",
    "nameSlug": "dacia",
    "priority": "P3",
    "system": "Renault UCH",
    "excerpt": "Dacia Schlüssel nachmachen: Sandero, Duster.",
    "customSeoBlurb": "Die Wegfahrsperrentechnik von Dacia basiert auf der Renault UCH-Plattform. Wir können herkömmliche Schlüssel für den Dacia Sandero oder Duster sowie die modernen Keycard-Systeme problemlos vor Ort anlernen.",
    "models": [
      {
        "slug": "sandero",
        "name": "Sandero",
        "years": "Alle Baujahre"
      },
      {
        "slug": "duster",
        "name": "Duster",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "volvo",
    "name": "Volvo",
    "nameSlug": "volvo",
    "priority": "P3",
    "system": "CEM / KVM",
    "excerpt": "Volvo Schlüssel: XC60, XC90, V40, V60.",
    "customSeoBlurb": "Die Programmierung von Volvo-Smartkeys erfordert den Zugriff auf das CEM- oder KVM-Modul, welches wir sicher decodieren. Wir bieten neue Funkschlüssel für Ihren XC60 oder V60, inklusive dem präzisen Fräsen des Volvo-Notbartes.",
    "models": [
      {
        "slug": "xc60",
        "name": "XC60",
        "years": "Alle Baujahre"
      },
      {
        "slug": "xc90",
        "name": "XC90",
        "years": "Alle Baujahre"
      },
      {
        "slug": "v60",
        "name": "V60",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "nissan",
    "name": "Nissan",
    "nameSlug": "nissan",
    "priority": "P3",
    "system": "NATS / BCM",
    "excerpt": "Nissan Schlüssel: Qashqai, Micra, Juke.",
    "customSeoBlurb": "Nissan nutzt das NATS-System (Nissan Anti-Theft System). Wir berechnen den korrekten BCM-Rolling-Code und programmieren neue Intelligent Keys (Keyless) für beliebte Modelle wie den Qashqai oder Micra im Handumdrehen.",
    "models": [
      {
        "slug": "qashqai",
        "name": "Qashqai",
        "years": "Alle Baujahre"
      },
      {
        "slug": "micra",
        "name": "Micra",
        "years": "Alle Baujahre"
      },
      {
        "slug": "juke",
        "name": "Juke",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "mazda",
    "name": "Mazda",
    "nameSlug": "mazda",
    "priority": "P3",
    "system": "Mazda Advanced Key",
    "excerpt": "Mazda Autoschlüssel: Mazda3, CX-5, MX-5.",
    "customSeoBlurb": "Haben Sie Ihren Mazda Advanced Key verloren? Wir nutzen spezifische Mazda-Diagnosesoftware, um Ihr Fahrzeug zu öffnen und sicher einen neuen, voll funktionstüchtigen Proximity-Schlüssel für Ihren Mazda3 oder CX-5 zu codieren.",
    "models": [
      {
        "slug": "mazda3",
        "name": "Mazda3",
        "years": "Alle Baujahre"
      },
      {
        "slug": "cx-5",
        "name": "CX-5",
        "years": "Alle Baujahre"
      },
      {
        "slug": "mx-5",
        "name": "MX-5",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "citroen",
    "name": "Citroen",
    "nameSlug": "citroen",
    "priority": "P3",
    "system": "PSA BSI",
    "excerpt": "Citroën Schlüssel: C3, C4, Berlingo, Jumper.",
    "customSeoBlurb": "Wir sind Experten für PSA-Fahrzeuge. Unser mobiler Service programmiert neue Fernbedienungen für Ihren Citroën C3, Berlingo oder Jumper-Transporter. Wir lesen den Wegfahrsperren-Code direkt am Fahrzeug aus, ohne den Händler kontaktieren zu müssen.",
    "models": [
      {
        "slug": "c3",
        "name": "C3",
        "years": "Alle Baujahre"
      },
      {
        "slug": "berlingo",
        "name": "Berlingo",
        "years": "Alle Baujahre"
      },
      {
        "slug": "jumper",
        "name": "Jumper",
        "years": "Alle Baujahre"
      }
    ]
  },
  {
    "slug": "mini",
    "name": "Mini",
    "nameSlug": "mini",
    "priority": "P3",
    "system": "CAS / FEM / BDC",
    "excerpt": "Mini Schlüssel: Cooper, Clubman, Countryman.",
    "customSeoBlurb": "Als Teil der BMW-Gruppe verwendet Mini identische CAS- und BDC-Wegfahrsperrentechnik. Egal ob älterer Cooper mit Steckschlüssel (UFO-Form) oder neuer Countryman mit Smart Key – wir bieten fachgerechte Programmierung vor Ort.",
    "models": [
      {
        "slug": "cooper",
        "name": "Cooper",
        "years": "R50, R56, F56"
      },
      {
        "slug": "countryman",
        "name": "Countryman",
        "years": "R60, F60"
      }
    ]
  },
  {
    "slug": "porsche",
    "name": "Porsche",
    "nameSlug": "porsche",
    "priority": "P3",
    "system": "VAG BCM / KESSY",
    "excerpt": "Porsche Schlüssel: 911, Cayenne, Macan.",
    "customSeoBlurb": "Wir programmieren Ersatzschlüssel für Porsche Cayenne, Macan und 911-Modelle. Da viele Porsche-Wegfahrsperren auf der VAG-Architektur basieren, können wir auch hier mit maximaler Sicherheit und ohne Beschädigungen anlernen.",
    "models": [
      {
        "slug": "911",
        "name": "911",
        "years": "996, 997, 991, 992"
      },
      {
        "slug": "cayenne",
        "name": "Cayenne",
        "years": "Alle Generationen"
      },
      {
        "slug": "macan",
        "name": "Macan",
        "years": "Alle Baujahre"
      }
    ]
  }
];
