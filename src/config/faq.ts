// ============================================================
// FAQ CONFIG — First Class Schlüsselnotdienst
// Powers FAQPage schema on all service, city, and static pages
// ============================================================

import { SITE_CONFIG } from '@/config/site.config';

export type FaqItem = { q: string; a: string };

// ── GLOBAL FAQs (used on homepage, FAQ page, and as fallback) ──
export const FAQ_GLOBAL: FaqItem[] = [
  {
    q: 'Was kostet es durchschnittlich, einen Autoschlüssel nachmachen zu lassen?',
    a: `Die genauen Kosten für das Nachmachen eines Autoschlüssels hängen stark von Marke, Modell, Baujahr und Schlüsseltyp ab (Standardschlüssel, Klappschlüssel oder Smart Key). Beim offiziellen Vertragshändler zahlen Sie schnell zwischen 300€ und 900€, exklusive hoher Abschleppkosten, wenn Sie alle Schlüssel verloren haben. Bei uns sind Sie garantiert günstiger dran. Ein Standard-Transponderschlüssel beginnt bei ca. €${SITE_CONFIG.prices.transponder}, während ein vollständig programmierter Smart Key bei ca. €${SITE_CONFIG.prices.smartKey} beginnt. Da wir direkt vor Ort arbeiten, profitieren Sie von Großhandelspreisen in Händlerqualität. Kontaktieren Sie uns telefonisch oder per WhatsApp für ein genaues und unverbindliches Angebot für Ihr Fahrzeug.`,
  },
  {
    q: 'Wie schnell können Sie bei mir sein?',
    a: 'In Stuttgart sind wir durchschnittlich innerhalb von 15–30 Minuten vor Ort. In Sindelfingen, Böblingen und Leonberg in 30–60 Minuten. Wir sind 24 Stunden am Tag, 7 Tage die Woche für Sie da — auch an Sonn- und Feiertagen.',
  },
  {
    q: 'Was soll ich tun, wenn ich meinen Autoschlüssel verloren habe?',
    a: `Bleiben Sie ruhig und rufen Sie sofort unseren mobilen Service an (${SITE_CONFIG.phone}). Wir kommen direkt zu Ihrem Standort. Sie müssen Ihr Auto nicht zum Händler abschleppen lassen. Wir lesen das Schloss oder den Bordcomputer aus, fräsen vor Ort einen neuen Schlüssel und programmieren die Wegfahrsperre. Den alten, verlorenen Schlüssel löschen wir zu Ihrer Sicherheit direkt aus dem System.`,
  },
  {
    q: 'Können Sie auch einen Ersatzschlüssel ohne das Original nachmachen?',
    a: 'Ja. Auch wenn Sie alle Schlüssel verloren haben, können wir durch OBD-Auslesung oder durch Decodierung des Schließzylinders einen neuen Schlüssel herstellen. Dies ist unser AKL-Service (All Keys Lost). Das ist auch für neuere Modelle mit Smart Key möglich.',
  },
  {
    q: 'Sind Sie günstiger als der Vertragshändler?',
    a: 'In den meisten Fällen sind wir 40–60% günstiger als der offizielle Händler. Händler berechnen oft extra für das Anlernen, Programmieren und die Verwaltung. Wir bieten einen transparenten Festpreis inklusive allem.',
  },
  {
    q: 'Arbeiten Sie auch nachts und am Wochenende?',
    a: 'Ja, wir sind 24/7 erreichbar — auch an Samstagen, Sonntagen und Feiertagen. Notdiensttarife entsprechen unseren regulären fairen Tarifen.',
  },
  {
    q: 'Welche Automarken unterstützen Sie?',
    a: 'Wir arbeiten mit allen gängigen Marken: BMW, Mercedes-Benz, Volkswagen, Audi, Toyota, Ford, Opel, Renault, Peugeot, Citroën, Kia, Hyundai, Volvo, Skoda, Nissan, Jeep, Porsche, Seat, Fiat, Honda und mehr. Inklusive Elektrofahrzeuge (EV).',
  },
  {
    q: 'Wie kann ich einen Transponderschlüssel programmieren, ohne zum Händler zu gehen?',
    a: 'Sie können einen Transponderschlüssel ohne spezielle OBD-Auslesegeräte nicht selbst programmieren. Zum Glück müssen Sie nicht zum Händler! Wir kommen als mobiler Spezialist mit Diagnosegeräten auf Händler-Niveau zu Ihnen. Wir programmieren den Transponderchip innerhalb weniger Minuten sicher über den OBD2-Anschluss Ihres Autos, direkt in Ihrer Einfahrt oder an Ihrem Arbeitsplatz.',
  },
  {
    q: 'Was kann ich tun, wenn mein Keyless-Entry-Schlüssel nicht mehr funktioniert?',
    a: 'Prüfen Sie zunächst die Batterie (meist eine CR2032 Knopfzelle) und tauschen Sie diese bei Bedarf aus. Funktioniert der Smart Key immer noch nicht? Dann hat der Schlüssel möglicherweise seine Synchronisierung verloren oder der Chip ist defekt. Halten Sie den Schlüssel direkt an den Startknopf, um das Auto mechanisch zu starten. Rufen Sie uns dann an: Wir reparieren oder ersetzen Ihren Smart Key vor Ort.',
  },
  {
    q: 'Haben Sie eine offizielle Firmenregistrierung?',
    a: 'Ja, First Class Schlüsselnotdienst ist ein eingetragenes Unternehmen. Nach jedem Service erhalten Sie eine offizielle Rechnung — praktisch für die Versicherung.',
  },
  {
    q: 'Kann ich mein Auto öffnen, wenn die Batterie leer ist?',
    a: 'Ja. Fast alle modernen Autos haben ein mechanisches Notschloss im Türgriff hinter einer Abdeckung. Wir können Ihr Auto auch bei komplett leerer Batterie öffnen — ohne das Auto zu beschädigen.',
  },
  {
    q: 'Was ist der Unterschied zwischen einem Klappschlüssel und einem normalen Schlüssel?',
    a: 'Ein Klappschlüssel (Flip Key) hat einen mechanischen Schlüsselbart, der in das Gehäuse einklappt. Der Schlüssel enthält einen Transponder oder eine Fernbedienungsfunktion. Wir können den Schlüsselbart ersetzen, den Transponder programmieren und die Fernbedienung für Ihr Auto anlernen.',
  },
  {
    q: 'Wie funktioniert das Nachmachen eines Autoschlüssels?',
    a: 'Wenn Sie noch einen funktionierenden Autoschlüssel haben, lesen wir den Transponderchip aus und kopieren diese Daten auf einen neuen Chip. Danach fräsen wir mit einer computergesteuerten CNC-Maschine den Schlüsselbart präzise nach. Dieser Vorgang dauert in der Regel 20 bis 30 Minuten pro Schlüssel an Ihrem Standort.',
  },
  {
    q: 'Autoschlüssel verloren, welche Dienste bieten Ersatz an?',
    a: 'Wenn Sie Ihren Autoschlüssel verloren haben, bieten wir als spezialisierter mobiler Schlüsseldienst einen kompletten All Keys Lost (AKL) Ersatzdienst an. Wir kommen zu Ihrem Standort, öffnen das Auto zerstörungsfrei, fräsen einen neuen Schlüssel anhand des Schließzylinders und programmieren den Transponder oder Smart Key in den Bordcomputer. Das ist deutlich schneller und günstiger, als Ihr Auto zum Händler abschleppen zu lassen.',
  },
  {
    q: 'Schritt-für-Schritt-Plan bei verlorenem Autoschlüssel?',
    a: `1. Ruhig bleiben und an offensichtlichen Orten suchen. 2. Prüfen, ob der Schlüssel versehentlich im Auto liegt. 3. Den Ersatzschlüssel suchen. 4. Kein Ersatzschlüssel? Suchen Sie Ihren Fahrzeugschein und Ausweis. 5. Rufen Sie uns an (${SITE_CONFIG.phone}). Wir kommen direkt zu Ihnen, um vor Ort einen neuen Schlüssel herzustellen und anzulernen.`,
  },
  {
    q: 'Wo finde ich einen Autoschlüsseldienst in meiner Nähe?',
    a: 'First Class Schlüsselnotdienst ist der mobile Autoschlüsseldienst im Raum Stuttgart. Da wir mit einem voll ausgestatteten Servicebus arbeiten, bringen wir die Werkstatt zu Ihnen nach Stuttgart, Sindelfingen, Böblingen, Leonberg und Umgebung. Sie müssen also nicht nach einem physischen Geschäft suchen; wir kommen direkt zu Ihrem Auto.',
  },
  {
    q: 'Kosten für das Nachmachen eines Autoschlüssels ohne Ersatzschlüssel?',
    a: `Das Nachmachen eines Autoschlüssels ohne Original-Ersatzschlüssel (All Keys Lost) kostet mehr als eine einfache Kopie, da wir das Schloss decodieren müssen. Die Kosten beginnen bei ca. €${SITE_CONFIG.prices.allKeysLost} für mechanische Schlüssel und können bei modernen Smart Keys höher liegen. Bei uns zahlen Sie jedoch immer einen festen, transparenten Preis, der bis zu 50% unter dem des Autohändlers liegt, ohne zusätzliche Abschleppkosten.`,
  },
  {
    q: 'Kann ein Autoschlüssel mit Fernbedienung ohne Originalschlüssel hergestellt werden?',
    a: 'Ja, absolut. Mit unseren fortschrittlichen OBD2-Diagnosegeräten können wir einen komplett neuen Autoschlüssel mit Fernbedienung (und Transponder) in den Bordcomputer Ihres Autos anlernen, selbst wenn Sie den Originalschlüssel nicht mehr haben. Die alte, verlorene Fernbedienung löschen wir sofort aus dem System, um Diebstahl vorzubeugen.',
  },
  {
    q: 'Auto öffnen ohne Schlüssel durch einen Profi?',
    a: 'Haben Sie Ihren Schlüssel im Auto liegen lassen? Wir sind darauf spezialisiert, Autos zu 100% zerstörungsfrei zu öffnen. Wir verwenden dafür professionelle Techniken wie Air Wedges und Lishi Lockpicks. Damit manipulieren wir das Schloss, ohne den Lack, die Fenster oder die Gummis zu beschädigen. Versuchen Sie dies niemals selbst mit einem Kleiderbügel, das führt fast immer zu teuren Schäden.',
  },
  {
    q: 'Autoschlüssel weg, kann der Händler einen neuen machen?',
    a: 'Ja, der Vertragshändler kann einen neuen Schlüssel herstellen, aber das bringt Nachteile mit sich. Sie müssen Ihr Auto auf eigene Kosten zum Händler schleppen lassen, und die Bestellung eines Schlüssels ab Werk dauert oft 1 bis 2 Wochen. Wir bieten eine schnellere und günstigere Alternative: Wir fertigen und programmieren den Schlüssel direkt bei Ihnen vor Ort, während Sie warten.',
  },
  {
    q: 'Ersatz-Autoschlüssel online bestellen?',
    a: 'Sie können leere Schlüsselgehäuse online bestellen, aber die Online-Bestellung eines voll funktionsfähigen Transponderschlüssels ist unmöglich. Ein Schlüssel muss nämlich physisch über den OBD-Anschluss an die einzigartige Wegfahrsperre Ihres Autos angelernt werden. Wir liefern Schlüssel in Original-OEM-Qualität und übernehmen die komplette Programmierung bei Ihnen zu Hause.',
  },
  {
    q: 'Wie funktioniert das Programmieren eines Autoschlüssels nach Verlust?',
    a: 'Nach dem Verlust Ihrer Schlüssel schließen wir unsere Diagnosegeräte an den OBD2-Anschluss Ihres Autos an. Wir kommunizieren mit dem Motorsteuergerät (ECU), um Sicherheitscodes zu überprüfen. Dann schreiben wir den einzigartigen digitalen Code des neuen Transponderchips in den Speicher des Autos. Als letzten Schritt löschen wir den verlorenen Schlüssel aus dem System, sodass dieser das Auto nicht mehr starten kann.',
  },
  {
    q: 'Wird der Verlust eines Autoschlüssels von der Versicherung gedeckt?',
    a: 'Das hängt von Ihrer Police ab. Bei einer Teilkasko- oder Vollkaskoversicherung werden die Kosten für den Ersatz verlorener oder gestohlener Autoschlüssel (und manchmal auch der Austausch der Schlösser) oft von der Versicherung übernommen. Überprüfen Sie Ihre Versicherungsbedingungen. Wir stellen Ihnen immer eine offizielle Rechnung aus, die Sie bei Ihrer Versicherung einreichen können.',
  },
  {
    q: 'Was sind die Optionen, wenn alle Autoschlüssel verloren sind?',
    a: 'Wenn Sie alle Schlüssel verloren haben, haben Sie zwei Möglichkeiten: 1) Das Auto zum Händler abschleppen lassen, was teuer ist und Wochen dauert. 2) Einen mobilen Schlüsseldienst wie uns beauftragen. Wir kommen direkt zu Ihnen, öffnen das Auto, fräsen einen neuen Schlüssel anhand des Schlosses und programmieren ihn sofort. Das ist die schnellste und kostengünstigste Option.',
  },
  {
    q: 'Wie finde ich einen günstigen Autoschlüsseldienst?',
    a: 'Wählen Sie einen unabhängigen, mobilen Spezialisten anstelle des offiziellen Autohändlers. Da mobile Autoschlüsseldienste wie wir keine teuren Gebäude oder Ausstellungsräume haben, sind die Gemeinkosten viel geringer. Wir kaufen direkt ein und geben diesen Preisvorteil an den Kunden weiter, wodurch wir oft die günstigste und schnellste Option in der Region sind.',
  },
  {
    q: 'Kann ich einen Autoschlüssel online bestellen und programmieren lassen?',
    a: 'Es wird davon abgeraten, einen Schlüssel selbst online zu bestellen (z. B. über AliExpress oder eBay), da diese oft von schlechter Qualität sind oder nicht den richtigen Chip für Ihr spezifisches Modell enthalten. Wir können vom Kunden bereitgestellte Schlüssel manchmal programmieren, geben darauf aber keine Garantie. Wir empfehlen die Verwendung unserer hochwertigen OEM-Schlüssel inklusive Garantie und Anlernen.',
  },
  {
    q: 'Autoschlüssel verloren, was kostet der Ersatz durch einen Universalschlüssel?',
    a: `Einen vollständig "universellen" Autoschlüssel gibt es für moderne Autos nicht, da jedes Auto eine einzigartige kryptografische Wegfahrsperre hat. Wir verwenden jedoch hochwertige Aftermarket- (OEM-Qualität) Schlüssel, die wir speziell für Ihr Auto programmieren. Dies kostet je nach Modell und Typ (Transponder oder Smart Key) ab ca. €${SITE_CONFIG.prices.allKeysLost} in einer Situation, in der alle Schlüssel verloren sind.`,
  },
  {
    q: 'Wie lange dauert es, einen Autoschlüssel nachzumachen?',
    a: 'Für einen Standard-Transponderschlüssel dauert es 20–45 Minuten vor Ort. Smart Keys und Keyless-Entry-Systeme können 45–90 Minuten dauern. Wir beginnen erst, wenn Sie dem Festpreis zustimmen.',
  },
  {
    q: 'Sind Sie auch außerhalb von Stuttgart verfügbar?',
    a: 'Ja, wir bedienen den Großraum Stuttgart und Umgebung. Feste Servicegebiete: Stuttgart, Sindelfingen, Böblingen, Leonberg, Ludwigsburg, Esslingen, Filderstadt und viele weitere Städte.',
  },
  {
    q: 'Geben Sie Garantie auf Ihre Arbeit?',
    a: 'Ja, wir geben 12 Monate Garantie auf alle Schlüssel und Programmierarbeiten. Sollte Ihr Schlüssel innerhalb eines Jahres durch einen Fehler unsererseits nicht mehr funktionieren, beheben wir das kostenlos.',
  },
  {
    q: 'Wo kann ich schnell einen Autoschlüssel in meiner Nähe nachmachen lassen?',
    a: 'Für den schnellsten Service in Ihrer Nähe müssen Sie das Haus nicht verlassen. Wir agieren als komplett mobile Werkstatt in der Region Stuttgart. Wir kommen direkt zu Ihrem Auto, ob zu Hause oder auf der Arbeit, und fertigen vor Ort innerhalb von 30 Minuten einen neuen Schlüssel an.',
  },
  {
    q: 'Welche Unternehmen bieten das Nachmachen von Autoschlüsseln als Notdienst an?',
    a: `Wir sind auf Notdienste für Autoschlüssel spezialisiert. Wir sind 24 Stunden am Tag, 7 Tage die Woche unter ${SITE_CONFIG.phone} erreichbar. In Notfällen (wie z. B. Aussperrung oder alle Schlüssel verloren) sind wir in der Region Stuttgart oft schon innerhalb von 30 Minuten vor Ort, um Ihnen sofort wieder auf den Weg zu helfen.`,
  },
  {
    q: 'Wie funktioniert der Prozess beim Händler im Vergleich zum Spezialisten?',
    a: 'Beim Händler müssen Sie einen Termin vereinbaren, das Auto bringen und manchmal 2 Wochen auf einen Werksschlüssel warten, wonach Sie hohe Programmierkosten zahlen. Als mobiler Spezialist kommen wir zu Ihrem Standort, decodieren das Schloss oder den Bordcomputer, fräsen den Schlüssel in unserem Bus mit einer CNC-Maschine und programmieren den Transponder direkt über OBD2. Das dauert nur 30 bis 60 Minuten.',
  },
  {
    q: 'Ist es möglich, einen Autoschlüssel ohne Originalschlüssel nachzumachen?',
    a: 'Ja, das nennt sich "All Keys Lost" (AKL) Verfahren. Wir können einen komplett neuen Schlüssel ohne Original herstellen. Mit spezieller Software lesen wir den Sicherheitscode (PIN-Code) aus der ECU Ihres Autos aus. Anschließend fräsen wir einen neuen Schlüsselbart passgenau und lernen den neuen Transponder an. Die verlorenen Schlüssel werden gleichzeitig digital gesperrt.',
  },
  {
    q: 'Welche Garantie bekomme ich beim Nachmachen eines Autoschlüssels?',
    a: 'Bei uns erhalten Sie standardmäßig 12 Monate Garantie auf den physischen Schlüssel (Hardware und Batterie) sowie auf die Programmierung (Software). Da wir mit hochwertigen Schlüsseln in OEM-Qualität und fortschrittlichen Programmiergeräten arbeiten, garantieren wir, dass der Schlüssel einwandfrei funktioniert. Wir fahren erst ab, wenn Sie den Schlüssel erfolgreich getestet haben.',
  },
  {
    q: 'Kann ich einen Autoschlüssel nachmachen lassen, der auch die Wegfahrsperre unterstützt?',
    a: 'Ja. Fast alle nach 1995 gebauten Autos haben eine eingebaute Wegfahrsperre (Immobilizer). Jeder Schlüssel, den wir liefern, enthält den richtigen Transponderchip (wie ID46, ID48 oder Megamos Crypto). Wir programmieren diesen Chip direkt in das Wegfahrsperrenmodul Ihres Fahrzeugs, damit das Auto sicher startet.',
  },
  {
    q: 'Was brauche ich, um einen Autoschlüssel bei einem spezialisierten Service nachmachen zu lassen?',
    a: 'Aus Sicherheitsgründen und zur Diebstahlprävention bitten wir Sie immer um zwei Dokumente: 1) Einen gültigen Personalausweis oder Führerschein. 2) Die Zulassungsbescheinigung (Fahrzeugschein), die beweist, dass Sie der rechtmäßige Eigentümer des Fahrzeugs sind. Ohne diese Dokumente fertigen wir keine Schlüssel an.',
  },
  {
    q: 'Gibt es mobile Dienste, die Autoschlüssel zu Hause nachmachen?',
    a: 'Ja, wir sind ein 100% mobiler Autoschlüsseldienst. Unsere Firmenwagen sind mit Laserfräsmaschinen, Stromversorgung und aller notwendigen OBD-Diagnosesoftware ausgestattet. Dadurch können wir Ihren neuen Autoschlüssel komplett zu Hause, an Ihrem Arbeitsplatz oder am Straßenrand fräsen und anlernen.',
  },
  {
    q: 'Ist es möglich, einen Autoschlüssel selbst zu programmieren?',
    a: 'Bei älteren Autos (vor 2005) gibt es manchmal ein manuelles Anlernverfahren für die Fernbedienung, wie das mehrmalige Drehen des Zündschlosses. Der Transponderchip (für die Wegfahrsperre) kann jedoch ausschließlich mit professionellen OBD-Geräten und sicheren PIN-Codes programmiert werden. Das Selbstprogrammieren moderner Schlüssel ist ohne diese teuren Geräte unmöglich. Wenden Sie sich hierfür an uns.',
  },
  {
    q: 'Welche Arten von Autoschlüsseln können heutzutage nachgemacht werden?',
    a: 'Wir können alle Schlüsseltypen nachmachen: 1) Traditionelle mechanische Schlüssel. 2) Transponderschlüssel (mit Wegfahrsperre). 3) Klappschlüssel mit Fernbedienung (Zentralverriegelung). 4) Smart Keys / Keyless Entry Fobs für Push-to-Start-Systeme. 5) Einsteckschlüssel (wie für VW Passat oder Audi).',
  },
  {
    q: 'Wo kann ich in Deutschland einen Ersatzschlüssel anfertigen lassen?',
    a: 'Für die Anfertigung eines Ersatzschlüssels für Ihr Auto können Sie sich an den Vertragshändler oder einen spezialisierten mobilen Schlüsseldienst wenden. Wir sind die schnellste Option im Raum Stuttgart. Wir kommen als mobiler Service zu Ihrem Standort, um den Ersatzschlüssel zu fräsen und in Ihr Auto anzulernen.',
  },
  {
    q: 'Was ist der beste Ort, um einen Ersatzschlüssel nachmachen zu lassen?',
    a: 'Der beste Ort ist ein unabhängiger Autoschlüssel-Spezialist wie der First Class Schlüsselnotdienst. Ein normaler Schlüsseldienst (Schuster) kann oft nur einfache Schlüssel ohne Wegfahrsperre kopieren, und ein Händler ist sehr teuer und langsam. Wir bieten Schlüssel in Händlerqualität, inklusive Programmierung der Fernbedienung, zu einem viel niedrigeren Preis, direkt vor Ihrer Haustür.',
  },
  {
    q: 'Kann ich online einen Ersatzschlüssel anfertigen und nach Hause liefern lassen?',
    a: 'Nein, ein voll funktionsfähiger moderner Autoschlüssel kann nicht einfach online bestellt und per Post geliefert werden. Der Wegfahrsperren-Chip im Schlüssel muss nämlich über den OBD2-Anschluss im Auto selbst programmiert werden. Wir kommen jedoch zu Ihnen nach Hause, um diesen gesamten Vorgang sicher in Ihrer Einfahrt durchzuführen.',
  },
  {
    q: 'Schlüsselgehäuse Auto wechseln: Ist das möglich?',
    a: 'Ja! Funktioniert die Elektronik Ihres aktuellen Autoschlüssels noch gut, aber die Tasten sind kaputt oder das Gehäuse ist beschädigt? Wir können die interne Platine und den Transponderchip in ein komplett neues, robustes Schlüsselgehäuse umbauen. Dies ist eine sehr günstige Reparatur im Vergleich zum Kauf eines komplett neuen Schlüssels.',
  },
  {
    q: 'Wie funktioniert ein mobiler Autoschlüsseldienst?',
    a: `Unser mobiler Service funktioniert ganz einfach: Sie rufen an oder schreiben uns per WhatsApp (${SITE_CONFIG.phone}) Ihr Kennzeichen und Ihren Standort. Wir kommen mit unserem voll ausgestatteten Servicebus zu Ihnen. In unserem Bus haben wir computergesteuerte Fräsmaschinen und OBD-Programmiergeräte. Innerhalb von 30 Minuten fahren Sie wieder mit einem perfekt funktionierenden neuen Schlüssel.`,
  },
  {
    q: 'Welche Batterie befindet sich in einer Autoschlüssel-Fernbedienung und wie wechsle ich sie?',
    a: 'In 90% der Fälle verwendet eine Fernbedienung eine CR2032 oder CR2025 Lithium-Knopfzelle. Sie können diese selbst wechseln, indem Sie das Gehäuse vorsichtig mit einem flachen Schraubendreher oder einer Münze aufhebeln. Funktioniert der Schlüssel nach dem Batteriewechsel immer noch nicht? Dann muss der Schlüssel möglicherweise neu angelernt werden oder der Chip ist defekt. Wir können dies vor Ort für Sie reparieren.',
  },
  {
    q: 'Wie funktioniert die Programmierung eines Autoschlüssels bei verschiedenen Automarken?',
    a: 'Obwohl das Grundprinzip (OBD2-Auslesung) gleich ist, unterscheidet sich die Software je nach Automarke enorm. Volkswagen (VAG) verwendet z.B. UDS-Protokolle, während BMW mit CAS- oder FEM-Modulen arbeitet. Wir verfügen über markenspezifische, fortschrittliche Lizenzen und Auslesegeräte. Dadurch können wir den Transponderchip für fast alle europäischen, asiatischen und amerikanischen Automarken sicher und fehlerfrei programmieren.',
  },
  {
    q: 'Wie lautet die Telefonnummer für die Pannenhilfe bei einem verlorenen Autoschlüssel?',
    a: `Stehen Sie dringend still, weil Ihre Autoschlüssel verloren, gestohlen oder im Auto eingeschlossen sind? Rufen Sie direkt unsere Notrufnummer an: ${SITE_CONFIG.phone}. Wir fungieren als Pannenhilfe für Autoschlüssel und sind im Raum Stuttgart 24/7 erreichbar. Wir kommen zu Ihnen und lösen das Problem sofort.`,
  },
  {
    q: 'Was ist der Unterschied zwischen einem normalen Autoschlüssel und einem Smart Key?',
    a: 'Ein "normaler" Autoschlüssel oder Klappschlüssel hat einen physischen Schlüsselbart aus Metall, den Sie ins Zündschloss stecken und drehen, kombiniert mit einem Transponderchip. Ein Smart Key (Keyless Go) sendet kontinuierlich ein einzigartiges Funksignal. Sobald Sie in der Nähe des Autos sind, öffnet es sich automatisch und Sie können über die Start/Stopp-Taste starten. Wir können beide Schlüsseltypen nachmachen und programmieren.',
  },
  {
    q: 'Wie kann ich einen Termin zum Autoschlüssel kopieren vereinbaren?',
    a: `Sie können ganz einfach einen Termin vereinbaren, indem Sie anrufen oder eine WhatsApp-Nachricht an ${SITE_CONFIG.phone} senden. Senden Sie Ihren Standort und ein Foto Ihres Fahrzeugscheins. Wir planen dann sofort einen Termin. Da wir mobil arbeiten, kommen wir dorthin, wo es Ihnen passt: nach Hause, zur Arbeit oder unterwegs.`,
  },
  {
    q: 'Wie sicher sind Autoschlüssel mit Transponderchip?',
    a: 'Transponderschlüssel sind äußerst sicher. Sie enthalten einen RFID-Chip mit einem verschlüsselten kryptografischen Code, der mit der Wegfahrsperre im Motorsteuergerät (ECU) korrespondiert. Erst wenn der Computer den richtigen Code liest, wird die Kraftstoffpumpe freigegeben. Deshalb kann niemand Ihr Auto nur mit einem gefrästen Stück Metall starten. Bei Verlust löschen wir den alten Transpondercode, sodass der verlorene Schlüssel wertlos wird.',
  },
  {
    q: 'Was kostet ein Autodienst für das Öffnen einer Tür?',
    a: `Die Kosten für die beschädigungsfreie Öffnung Ihrer Tür beginnen in der Regel bei ca. €${SITE_CONFIG.prices.unlock}, abhängig von Ihrem Standort, der Uhrzeit und der Automarke. Wir haben feste und transparente Preise für Notöffnungen, sodass Sie keine Überraschungen erleben. Kontaktieren Sie uns für einen genauen Preis.`,
  },
  {
    q: 'Wechseln Sie auch das Autoschloss nach einem Einbruch?',
    a: 'Ja, wenn Ihr Türschloss oder Zündschloss nach einem Einbruchsversuch forciert oder beschädigt wurde, kann unser mobiler Dienst dies direkt vor Ort reparieren oder ersetzen. Wir können das neue Schloss mechanisch an Ihren vorhandenen Schlüssel anpassen (pinnen), sodass Sie kein komplett neues Schlüsselset für alle Türen kaufen müssen.',
  },
  {
    q: 'Gibt es einen Dienst, der vor Ort direkt Schlüssel nachmachen kann?',
    a: 'Absolut. Während viele Pannendienste Ihr Auto nur öffnen oder abschleppen können, sind wir ein vollwertiger mobiler Schlüsseldienst. Nachdem wir Ihr Auto geöffnet haben, können wir in unserem Servicebus direkt einen neuen Schlüssel fräsen und den Transponder anlernen, selbst wenn Sie alle Schlüssel verloren haben.',
  },
];

// ── SERVICE-SPECIFIC FAQs ──
export const FAQ_AUTOSLEUTEL_BIJMAKEN: FaqItem[] = [
  {
    q: 'Wie macht man einen Autoschlüssel nach?',
    a: 'Unser Prozess: 1) Wir lesen den Schließzylinder oder den OBD-Anschluss Ihres Autos aus. 2) Wir fräsen einen neuen Schlüsselbart passgenau. 3) Der Transponderchip wird für Ihr spezifisches Auto programmiert. 4) Der Schlüssel wird als autorisierter Schlüssel angelernt. Das alles vor Ort, ohne dass Sie in die Werkstatt müssen.',
  },
  {
    q: 'Kann ein Autoschlüssel ohne das Original nachgemacht werden?',
    a: 'Ja, das ist unsere Spezialität. Über OBD-Auslesung oder Zylinder-Decodierung können wir immer einen neuen Schlüssel anfertigen — auch wenn Sie kein einziges Original mehr haben (All Keys Lost).',
  },
  {
    q: 'Wie teuer ist es, einen Ersatzschlüssel anfertigen zu lassen?',
    a: `Die Preise beginnen bei ca. €${SITE_CONFIG.prices.transponder} für einfache Transponderschlüssel. Smart Keys und Keyless-Schlüssel kosten ab ca. €${SITE_CONFIG.prices.smartKey}. Ein Festpreis wird immer vorab kommuniziert. Rufen Sie für ein kostenloses Angebot an: ${SITE_CONFIG.phone}.`,
  },
];

export const FAQ_TRANSPONDER: FaqItem[] = [
  {
    q: 'Was bedeutet Transponderschlüssel programmieren?',
    a: 'Transponder programmieren bedeutet, dass der eindeutige Code des Chips in Ihrem neuen Schlüssel mit der Wegfahrsperre Ihres Autos verknüpft wird. Ohne diese Verknüpfung startet der Motor nicht. Wir machen das über den OBD-Anschluss oder durch PIN-Code-Berechnung — je nach Auto.',
  },
  {
    q: 'Wie viele Transponder kann mein Auto speichern?',
    a: 'Die meisten Autos können 2–8 Transponder speichern. BMWs und Mercedes unterstützen oft bis zu 10. Wir überprüfen immer die aktuelle Konfiguration und registrieren Ihren neuen Schlüssel korrekt.',
  },
  {
    q: 'Kann ich einen Transponderschlüssel selbst programmieren?',
    a: 'Nein, für die meisten modernen Autos benötigen Sie spezielle Geräte (AUTEL, Xhorse VVDI, Autocom). DIY-Lösungen funktionieren nur bei älteren Autos (vor ca. 2005). Wir verfügen über professionelle Geräte für alle Marken und Modelle.',
  },
];

export const FAQ_SMART_KEY: FaqItem[] = [
  {
    q: 'Was kostet das Nachmachen eines Smart Keys?',
    a: 'Smart Keys kosten mehr als normale Schlüssel aufgrund der komplexeren Elektronik und Programmierprozesse. Preise: ab ca. 149€–299€ je nach Marke und Modell. BMW Smart Keys z.B. durchschnittlich 199€, Mercedes 229€, VW/Audi 179€.',
  },
  {
    q: 'Wie lange hält die Batterie eines Smart Keys?',
    a: 'Durchschnittlich 1–3 Jahre bei normalem Gebrauch. Wir wechseln auch die Batterie in Ihrem Smart Key.',
  },
];

export const FAQ_AUTO_OP_SLOT: FaqItem[] = [
  {
    q: 'Wie schnell kann mein Auto geöffnet werden?',
    a: 'Wir sind in Stuttgart durchschnittlich innerhalb von 20-30 Minuten vor Ort. Das Öffnen des Autos selbst dauert 5–20 Minuten, je nach Modell.',
  },
  {
    q: 'Können Sie mein Auto ohne Beschädigung öffnen?',
    a: 'Ja. Wir verwenden ausschließlich professionelles Schlosserwerkzeug: Lishi-Decoder, Air-Wedges und J-Tools. Ihr Lack, die Fenster und die Türdichtungen bleiben zu 100% intakt. Wir arbeiten auch bei Autos mit extra Deadlock-Verriegelung.',
  },
  {
    q: 'Wie kann ich mein Auto ohne Beschädigung öffnen, wenn ich den Schlüssel darin vergessen habe?',
    a: 'Versuchen Sie es niemals selbst mit einem Kleiderbügel oder indem Sie eine Scheibe einschlagen; die Reparaturkosten sind oft viel höher. Rufen Sie einen professionellen Schlüsseldienst. Wir öffnen die Türen 100% zerstörungsfrei innerhalb weniger Minuten. Selbst wenn die Zündung an ist oder der Schlüssel im Kofferraum liegt, bekommen wir ihn unbeschädigt auf.',
  },
  {
    q: 'Was ist, wenn mein Autoschlüssel im Auto ist und die Tür verschlossen ist?',
    a: 'Rufen Sie uns direkt an. Wir öffnen Ihr Auto mechanisch über das Schloss oder elektronisch. Sie müssen das Auto nicht abschleppen lassen. Dies ist unser meistgefragter Notdienst.',
  },
];

export const FAQ_AKL: FaqItem[] = [
  {
    q: 'Was soll ich tun, wenn alle meine Autoschlüssel verloren sind?',
    a: `Rufen Sie uns direkt unter ${SITE_CONFIG.phone} an. Wir bieten den AKL-Service (All Keys Lost). Schritt 1: Wir löschen alle vorhandenen Schlüssel aus dem Speicher Ihres Autos. Schritt 2: Wir fräsen einen neuen Schlüssel. Schritt 3: Der neue Schlüssel wird als einziger autorisierter Schlüssel angelernt. Sie können sicher weiterfahren.`,
  },
  {
    q: 'Ist es möglich, dass jemand mit meinem alten (verlorenen) Schlüssel mein Auto öffnet?',
    a: 'Nach dem AKL-Verfahren nicht mehr. Wir löschen alle alten Schlüssel aus dem System. Ihr verlorener Schlüssel ist danach unbrauchbar. Dies ist auch ein Sicherheitshinweis: Lassen Sie alte Schlüssel immer löschen, wenn sie gestohlen wurden.',
  },
];

// ── CITY-SPECIFIC FAQs (dynamisch generiert auf Stadtseite) ──
export function getFaqForCity(cityName: string): FaqItem[] {
  return [
    {
      q: `Autoschlüssel nachmachen in ${cityName}: Was sind die genauen Kosten?`,
      a: `Die Kosten für das Nachmachen eines Autoschlüssels in ${cityName} beginnen bei ca. €${SITE_CONFIG.prices.transponder} für einen Standard-Transponderschlüssel. Für einen Autoschlüssel mit Fernbedienung oder Smart Key (Keyless Entry) beginnen die Tarife ab ca. €${SITE_CONFIG.prices.smartKey}. Unsere Preise beinhalten immer das Fräsen des Schlüsselbarts und das Anlernen oder Programmieren des Transponders vor Ort in ${cityName}. Da wir mobil sind, zahlen Sie keine Abschleppkosten und sind bis zu 50% günstiger als beim offiziellen Händler.`,
    },
    {
      q: `Autoschlüssel verloren in ${cityName}, was ist die schnellste Lösung?`,
      a: `Haben Sie Ihren Autoschlüssel in ${cityName} verloren und keinen Ersatzschlüssel mehr? Die schnellste Lösung ist unser mobiler Service. Wir kommen direkt zu Ihrem Standort in ${cityName}, öffnen Ihr Auto 100% zerstörungsfrei, fräsen einen neuen Schlüssel anhand Ihres Schlosses und programmieren ihn vor Ort in die ECU (Bordcomputer). Dieses "All Keys Lost" (AKL) Verfahren sorgt dafür, dass Sie sofort wieder fahren können, ohne dass ein Abschleppen nötig ist.`,
    },
    {
      q: `Wie lange dauert das Anlernen und Programmieren eines Autoschlüssels in ${cityName}?`,
      a: `Das Fräsen, Anlernen und Programmieren eines neuen Autoschlüssels in ${cityName} dauert durchschnittlich 20 bis 45 Minuten. Unsere erfahrenen Monteure nutzen modernste OBD2-Diagnosegeräte, um den neuen Chip oder Smart Key sicher mit dem Diebstahlschutz (Wegfahrsperre) Ihres Autos zu synchronisieren. Alte, verlorene Schlüssel werden sofort elektronisch aus dem System blockiert.`,
    },
    {
      q: `Autotür öffnen in ${cityName} (Schlüssel im Auto liegen lassen), können Sie helfen?`,
      a: `Ja, wenn Sie Ihren Schlüssel in ${cityName} im Auto gelassen haben (ausgesperrt), öffnen wir Ihre Autotür garantiert ohne Schäden. Unsere Mechaniker in ${cityName} verwenden spezielles Lishi-Lockpick-Werkzeug, um das Türschloss fachmännisch zu manipulieren, ohne Kratzer am Lack oder Schäden an den Dichtungen. Wir sind 24/7 für diesen Notdienst erreichbar.`,
    },
    {
      q: `Machen Sie auch Autoschlüssel für alle Automarken in ${cityName} nach?`,
      a: `Ja, wir reparieren und machen Autoschlüssel in ${cityName} für fast alle Automarken nach, darunter Volkswagen (VW), BMW, Audi, Mercedes-Benz, Peugeot, Renault, Ford, Opel, Toyota, Fiat und Seat. Egal, ob es sich um einen klassischen Schlüssel, einen Klappschlüssel oder einen hochmodernen Keyless Smart Key handelt, wir haben die passenden Schlüssel in OEM-Qualität in unserem Servicebus auf Lager.`,
    },
    {
      q: `Wie schnell ist der mobile Schlüsseldienst in ${cityName} vor Ort?`,
      a: `Bei Notfällen in ${cityName}, wie z. B. alle Autoschlüssel verloren oder ausgesperrt, ist unser mobiler Schlüsseldienst durchschnittlich innerhalb von 30 bis 60 Minuten bei Ihnen vor Ort. Wir arbeiten 24 Stunden am Tag, 7 Tage die Woche in der Region ${cityName}, damit Ihnen sofort geholfen wird.`,
    },
  ];
}

// ── BRAND-SPECIFIC FAQs (dynamisch generiert auf Markenseite) ──
export function getFaqForBrand(brandName: string): FaqItem[] {
  return [
    {
      q: `Was kostet es, einen neuen ${brandName} Autoschlüssel nachmachen zu lassen?`,
      a: `Die Kosten für das Nachmachen eines ${brandName} Autoschlüssels variieren je nach Modell und Schlüsseltyp. Ein Standard ${brandName} Transponderschlüssel beginnt bei ca. €${SITE_CONFIG.prices.transponder}. Benötigen Sie einen ${brandName} Klappschlüssel oder Smart Key (Keyless Entry)? Dann beginnen die Preise bei ca. €${SITE_CONFIG.prices.smartKey}. Damit sind wir bis zu 50% günstiger als der offizielle ${brandName} Händler, ohne zusätzliche Abschleppkosten. Sie erhalten vorab immer einen festen und transparenten Preis.`,
    },
    {
      q: `Meinen ${brandName} Autoschlüssel verloren, was soll ich tun?`,
      a: `Haben Sie alle Schlüssel Ihres ${brandName} verloren? Bleiben Sie ruhig und rufen Sie uns an. Wir bieten einen mobilen 'All Keys Lost' (AKL) Service und kommen direkt zu Ihrem Standort. Wir öffnen Ihren ${brandName} 100% zerstörungsfrei, lesen den PIN-Code aus der ECU/Bordcomputer über den OBD2-Anschluss aus und fräsen vor Ort einen komplett neuen Schlüssel. Die verlorenen ${brandName} Schlüssel werden sofort aus dem System gelöscht, um Diebstahl zu verhindern.`,
    },
    {
      q: `Wie lange dauert das Anlernen eines ${brandName} Schlüssels?`,
      a: `Das Fräsen und Anlernen eines neuen ${brandName} Autoschlüssels dauert durchschnittlich 30 bis 45 Minuten. Unsere Spezialisten verwenden modernste Diagnosegeräte, die speziell für die Sicherheitssysteme von ${brandName} geeignet sind. Sie müssen Ihr Auto also nicht tagelang beim Händler stehen lassen; wir erledigen alles direkt bei Ihnen vor der Haustür, auf der Arbeit oder am Straßenrand.`,
    },
    {
      q: `Können Sie einen ${brandName} Schlüssel reparieren (Gehäuse oder Batterie)?`,
      a: `Ja, wenn die Elektronik (Platine) Ihres ${brandName} Schlüssels noch intakt ist, können wir ihn oft günstig reparieren. Wir ersetzen defekte Tasten, erneuern die Batterie und setzen die Platine in ein brandneues ${brandName} Schlüsselgehäuse ein. Das ist eine schnelle und sehr kostensparende Lösung im Vergleich zum Kauf eines komplett neuen Schlüssels.`,
    },
    {
      q: `Funktioniert der neue ${brandName} Schlüssel genauso wie das Original?`,
      a: `Absolut. Wir liefern hochwertige Aftermarket- und OEM-Autoschlüssel für ${brandName}. Der neue Schlüssel funktioniert genau so, wie Sie es gewohnt sind: inklusive Fernbedienung (Zentralverriegelung), dem passenden Wegfahrsperren-Chip (Transponder) und etwaigen Keyless-Go- oder Smart-Key-Funktionen, die spezifisch für Ihr ${brandName} Modell sind. Außerdem erhalten Sie bei uns standardmäßig 12 Monate Garantie auf den Schlüssel und das Anlernen.`,
    },
    {
      q: `Muss mein ${brandName} für einen neuen Schlüssel zum Händler geschleppt werden?`,
      a: `Nein, das ist genau der große Vorteil unseres Service. Wir sind ein 100% mobiler Autoschlüssel-Spezialist. Sie müssen keinen teuren Abschleppdienst rufen, um Ihren ${brandName} in die Werkstatt zu bringen. Unsere voll ausgestatteten Servicebusse kommen zu Ihrem Pannenort, egal wo Sie sich befinden, und wir programmieren den neuen ${brandName} Schlüssel direkt vor Ort.`,
    }
  ];
}
