import os

filepath = "/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/app/marken/[merkSlug]/page.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

REPLACEMENTS = {
    # SEO Meta & Schema
    "Autosleutel Bijmaken | Alle Modellen & Bouwjaren": "Autoschlüssel Nachmachen | Alle Modelle & Baujahre",
    "autosleutel bijmaken & programmeren op locatie. Volledig A–Z modellenoverzicht": "Autoschlüssel nachmachen & programmieren vor Ort. Komplette A-Z Modellübersicht",
    "Tot 50% goedkoper dan de": "Bis zu 50% günstiger als der",
    "dealer. Bel direct:": "Händler. Direkt anrufen:",
    "Autosleutel Bijmaken & Programmeren | Alle Modellen & Bouwjaren": "Autoschlüssel Nachmachen & Programmieren | Alle Modelle & Baujahre",
    "autosleutel bijmaken & inleren op locatie. Goedkoper dan de dealer. Zelfde dag klaar met 12 maanden garantie. Bel direct!": "Autoschlüssel nachmachen & anlernen vor Ort. Günstiger als der Händler. Am selben Tag fertig mit 12 Monaten Garantie. Direkt anrufen!",
    "reservesleutel bijmaken": "Ersatzschlüssel nachmachen",
    "Autosleutel Bijmaken — Autosleutel Specialist": "Autoschlüssel Nachmachen — Autoschlüssel Spezialist",
    "Professionele autosleutel bijmaken & programmeren voor alle": "Professionell Autoschlüssel nachmachen & programmieren für alle",
    "Autosleutel Specialist mobiele service op locatie.": "Autoschlüssel Spezialist mobiler Service vor Ort.",

    # Hero
    "Autosleutel Bijmaken &amp; Programmeren": "Autoschlüssel Nachmachen &amp; Programmieren",
    "Alle Modellen &amp; Bouwjaren • Mobiel Ter Plaatse": "Alle Modelle &amp; Baujahre • Mobiler Vor-Ort-Service",
    "Bent u uw {brand.name} autosleutel kwijt, is de sleutel afgebroken of reageert de Smart Key afstandsbediening niet meer?": "Haben Sie Ihren {brand.name} Autoschlüssel verloren, ist der Schlüssel abgebrochen oder reagiert die Smart-Key-Fernbedienung nicht mehr?",
    "Wij komen met onze volledig uitgeruste mobiele werkplaats naar u toe en programmeren direct een originele dealer-sleutel in de boordcomputer.": "Wir kommen mit unserer voll ausgestatteten mobilen Werkstatt zu Ihnen und programmieren direkt einen originalen Händlerschlüssel in den Bordcomputer.",
    "30% tot 50% goedkoper dan de {brand.name}-dealer": "30% bis 50% günstiger als der {brand.name}-Händler",
    "zonder wegsleepkosten!": "ohne Abschleppkosten!",
    "Direct Belcontact:": "Direkt anrufen:",
    "WhatsApp uw {brand.name} Kenteken": "WhatsApp Ihr {brand.name} Kennzeichen",

    # Gallery
    "Recente Projecten": "Aktuelle Projekte",
    "Recent Werk: {brand.name} Autosleutels": "Aktuelle Arbeiten: {brand.name} Autoschlüssel",
    "sleutel bijmaken": "Schlüssel nachmachen",

    # Models
    "SLEUTELS DIE WIJ BIJMAKEN": "SCHLÜSSEL, DIE WIR NACHMACHEN",
    "Alle modellen ondersteund.": "Alle Modelle werden unterstützt.",
    "Bel Nu:": "Jetzt anrufen:",

    # SEO Deep Dive
    "Sleutel Bijmaken en Inleren": "Schlüssel nachmachen und anlernen",
    "Wilt u een <strong>{brand.name} sleutel laten maken</strong>? Dat regelen wij graag voor u! Moderne auto&apos;s zoals de {brand.name} hebben een slimme beveiliging met een transponderchip (zoals <strong>{brand.system}</strong>). U kunt de auto alleen starten met een officieel ingeleerde sleutel. Wij kunnen direct een nieuwe <strong>{brand.name} sleutel bijmaken</strong> en deze veilig in de computer van uw auto inleren. Zo kunt u weer met een gerust hart de weg op. U kunt bij ons ook uw kapotte sleutel laten repareren.": "Möchten Sie einen <strong>{brand.name} Schlüssel nachmachen lassen</strong>? Das erledigen wir gerne für Sie! Moderne Autos wie der {brand.name} verfügen über ein intelligentes Sicherheitssystem mit einem Transponderchip (wie <strong>{brand.system}</strong>). Sie können das Auto nur mit einem offiziell angelernten Schlüssel starten. Wir können direkt einen neuen <strong>{brand.name} Schlüssel nachmachen</strong> und diesen sicher im Computer Ihres Autos anlernen. So können Sie wieder beruhigt auf die Straße gehen. Sie können bei uns auch Ihren kaputten Schlüssel reparieren lassen.",
    "Hoe werkt het inleren van een {brand.name} transponder of Smart Key?": "Wie funktioniert das Anlernen eines {brand.name} Transponders oder Smart Keys?",
    "Elke {brand.name} autosleutel bevat een miniatuur transponderchip die een unieke, digitaal versleutelde code uitzendt naar de immobiliser-unit of body control module van de auto. Wanneer u de sleutel in het contactslot steekt of op de startknop drukt, verifieert het systeem deze code binnen enkele milliseconden. Komt de code niet overeen, dan wordt de brandstoftoevoer en ontsteking direct geblokkeerd.": "Jeder {brand.name} Autoschlüssel enthält einen Miniatur-Transponderchip, der einen eindeutigen, digital verschlüsselten Code an die Wegfahrsperre oder das Karosseriesteuergerät des Autos sendet. Wenn Sie den Schlüssel ins Zündschloss stecken oder den Startknopf drücken, überprüft das System diesen Code innerhalb weniger Millisekunden. Stimmt der Code nicht überein, werden die Kraftstoffzufuhr und die Zündung sofort blockiert.",
    "Onze monteurs sluiten op locatie een professionele OBD2-programmer aan op uw {brand.name}. Wij synchroniseren de cryptografische sleutelsessies rechtstreeks met de fabrieksbeveiliging. Hierdoor functioneert uw nieuwe reservesleutel of Keyless Go afstandsbediening exact zoals een sleutel die rechtstreeks uit de fabriek komt.": "Unsere Mechaniker schließen vor Ort ein professionelles OBD2-Programmiergerät an Ihren {brand.name} an. Wir synchronisieren die kryptografischen Schlüsselsitzungen direkt mit der Werkssicherheit. Dadurch funktioniert Ihr neuer Ersatzschlüssel oder Ihre Keyless-Go-Fernbedienung genau wie ein Schlüssel, der direkt aus der Fabrik kommt.",
    "Wat te doen bij &quot;All Keys Lost&quot; (Alle {brand.name} Sleutels Kwijt)?": "Was tun bei &quot;All Keys Lost&quot; (Alle {brand.name} Schlüssel verloren)?",
    "Bent u onderweg of thuis al uw {brand.name} autosleutels kwijtgeraakt? Bij een merkdealer bent u dan vaak genoodzaakt om uw auto te laten wegslepen en soms complete slotensets of regelapparaten te laten vervangen—een traject dat honderden euro&apos;s extra kost en weken kan duren.": "Haben Sie unterwegs oder zu Hause alle Ihre {brand.name} Autoschlüssel verloren? Bei einem Vertragshändler sind Sie oft gezwungen, Ihr Auto abschleppen zu lassen und manchmal komplette Schlosssätze oder Steuergeräte auszutauschen — ein Prozess, der Hunderte von Euro extra kostet und Wochen dauern kann.",
    "Dankzij onze gespecialiseerde mobiele noodservice lossen wij een &apos;All Keys Lost&apos; situatie ter plaatse voor u op:": "Dank unseres spezialisierten mobilen Notdienstes lösen wir eine &apos;All Keys Lost&apos;-Situation für Sie vor Ort:",
    "100% Schadevrij Openen:": "100% Schadenfreies Öffnen:",
    "Met precisie Lishi 2-in-1 lock decoders openen wij het portierslot van uw {brand.name} zonder enige schade aan lak, rubber of cilinder.": "Mit Präzisions-Lishi-2-in-1-Schloss-Decodern öffnen wir das Türschloss Ihres {brand.name} ohne jegliche Schäden an Lack, Gummi oder Zylinder.",
    "Mechanisch CNC-Frezen:": "Mechanisches CNC-Fräsen:",
    "Aan de hand van de slotcode snijdt onze mobiele computergestuurde freesmachine direct een gloednieuwe sleutelbaard.": "Anhand des Schlosscodes schneidet unsere mobile computergesteuerte Fräsmaschine sofort einen brandneuen Schlüsselbart.",
    "Elektronische Herprogrammering:": "Elektronische Umprogrammierung:",
    "Wij programmeren de nieuwe sleutel in en wissen tegelijkertijd alle verloren of gestolen sleutels uit de computer, zodat onbevoegden uw auto niet meer kunnen starten.": "Wir programmieren den neuen Schlüssel ein und löschen gleichzeitig alle verlorenen oder gestohlenen Schlüssel aus dem Computer, sodass Unbefugte Ihr Auto nicht mehr starten können.",
    "Transparante Prijsvergelijking": "Transparenter Preisvergleich",
    "Veel autobezitters schrikken van de tarieven die officiële merkdealers rekenen voor een nieuwe {brand.name} sleutel. Door onze efficiënte mobiele werkwijze zonder logge showrooms bieden wij u niet alleen snelheid, maar ook een fors financieel voordeel:": "Viele Autobesitzer sind über die Preise schockiert, die offizielle Vertragshändler für einen neuen {brand.name} Schlüssel verlangen. Durch unsere effiziente mobile Arbeitsweise ohne sperrige Ausstellungsräume bieten wir Ihnen nicht nur Schnelligkeit, sondern auch einen erheblichen finanziellen Vorteil:",
    "Service Onderdeel": "Leistungsbestandteil",
    "Officiële {brand.name} Dealer": "Offizieller {brand.name} Händler",
    "Wachttijd": "Wartezeit",
    "Gemiddeld 5 tot 14 werkdagen": "Durchschnittlich 5 bis 14 Werktage",
    "Zelfde dag klaar op locatie": "Am selben Tag vor Ort fertig",
    "Sleepkosten bij sleutel kwijt": "Abschleppkosten bei Schlüsselverlust",
    "wegslepen verplicht": "Abschleppen obligatorisch",
    "Wij komen naar uw auto": "Wir kommen zu Ihrem Auto",
    "Prijsniveau Reservesleutel": "Preisniveau Ersatzschlüssel",
    "Hoog dealer-tarief": "Hoher Händlertarif",
    "Tot 50% voordeliger": "Bis zu 50% günstiger",
    "Garantie op sleutel &amp; chip": "Garantie auf Schlüssel &amp; Chip",
    "Standaard fabrieksgarantie": "Standard-Werksgarantie",
    "12 maanden schriftelijke garantie": "12 Monate schriftliche Garantie",
    "Populaire {brand.name} Modellen die Wij Bedienen": "Beliebte {brand.name} Modelle, die wir bedienen",

    # Reviews
    "Wat Klanten Zeggen over Onze {brand.name} Service": "Was Kunden über unseren {brand.name} Service sagen",
    "Beoordeeld met {SITE_CONFIG.rating} / 5.0 op basis van honderden tevreden automobilisten": "Bewertet mit {SITE_CONFIG.rating} / 5.0 basierend auf Hunderten von zufriedenen Autofahrern",

    # CTA
    "Direct een Nieuwe {brand.name} Autosleutel Nodig?": "Brauchen Sie direkt einen neuen {brand.name} Autoschlüssel?",
    "Neem direct contact op met onze spoeddienst of stuur een foto van uw sleutel via WhatsApp.": "Kontaktieren Sie sofort unseren Notdienst oder senden Sie ein Foto Ihres Schlüssels über WhatsApp.",
    "Binnen 1 minuut ontvangt u een vrijblijvende, vaste prijsopgave inclusief programmeren op locatie.": "Innerhalb von 1 Minute erhalten Sie ein unverbindliches Festpreisangebot inklusive Programmierung vor Ort.",
    "WhatsApp Direct": "Direkt per WhatsApp"
}

for old, new in REPLACEMENTS.items():
    content = content.replace(old, new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx")
