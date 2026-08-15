import os

base_dir = '/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/config'
reviews_file = '/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/utils/reviews.ts'

slug_mappings = {
    'sleutel-bijmaken': 'autoschluessel-nachmachen',
    'afstandsbediening-bijmaken': 'fernbedienung-nachmachen',
    'reservesleutel-maken': 'ersatzschluessel-machen',
    'batterij-vervangen': 'batterie-wechseln',
    'behuizing-vervangen': 'gehaeuse-wechseln',
    'knoppen-repareren': 'tasten-reparieren',
    'contactslot-auto-vervangen': 'zuendschloss-auto-wechseln',
    'autosleutel-batterij-vervangen-stappenplan': 'autoschluessel-batterie-wechseln-anleitung',
    'autosleutel-kosten-per-merk-2026': 'autoschluessel-kosten-pro-marke-2026',
    'dealer-vs-slotenmaker-kostenverschil': 'haendler-vs-schluesseldienst-kostenunterschied',
    'verzekering-dekt-autosleutel-vervangen': 'versicherung-deckt-autoschluessel-verlust',
    'bmw-bdc2-sleutel-bijmaken-2026': 'bmw-bdc2-schluessel-nachmachen-2026',
    'toyota-hybride-sleutel-vervangen': 'toyota-hybrid-schluessel-nachmachen',
    'autosleutel-gestolen-wat-te-doen': 'autoschluessel-gestohlen-was-tun',
    'autosleutel-bijmaken-zonder-origineel': 'autoschluessel-nachmachen-ohne-original',
    'sfd-lock-vw-golf-8-uitleg': 'sfd-lock-vw-golf-8-erklaerung',
    'ghost-immobiliser-utrecht': 'ghost-immobiliser-stuttgart',
    'faraday-pouch-bescherming-relay-attack': 'faraday-pouch-schutz-relay-attack',
    'case-study-bmw-besparing': 'fallstudie-bmw-ersparnis',
    'auto-beveiligen-tegen-diefstal-tips': 'auto-vor-diebstahl-schuetzen-tipps',
    'dealer-vs-mobiele-sleutelmaker': 'haendler-vs-mobiler-schluesseldienst',
    'autosleutel-bijmaken-tips-snel-veilig': 'autoschluessel-nachmachen-tipps-schnell-sicher',
    'auto-openen-zonder-sleutel-schadevrij': 'auto-oeffnen-ohne-schluessel-schadenfrei',
    'autosleutel-kwijt-wat-nu-stappenplan': 'autoschluessel-verloren-was-nun-anleitung',
    'autosleutel-bijmaken-kosten-prijslijst': 'autoschluessel-nachmachen-kosten-preisliste',
    'sleutel-bijmaken-auto-mobiele-service': 'autoschluessel-nachmachen-mobiler-service',
    'auto-slotenmaker-ultieme-gids-snel-hulp': 'auto-schluesseldienst-ultimativer-leitfaden-schnelle-hilfe',
    'autosleutel-repareren-tips-kosten-besparen': 'autoschluessel-reparieren-tipps-kosten-sparen',
    'autosleutel-bestellen-op-kenteken': 'autoschluessel-bestellen-nach-fahrgestellnummer',
    'auto-openen-zonder-sleutel-tips-hulp': 'auto-oeffnen-ohne-schluessel-tipps-hilfe',
    'sleutel-in-auto-laten-liggen-oplossingen': 'schluessel-im-auto-liegen-gelassen-loesungen',
    'auto-herkent-sleutel-niet-meer': 'auto-erkennt-schluessel-nicht-mehr',
    'volkswagen-sleutel-bijmaken': 'volkswagen-schluessel-nachmachen',
    'autosleutel-bijmaken': 'autoschluessel-nachmachen-stuttgart',
    'transponder-programmeren': 'transponder-programmieren',
    'smart-key-programmeren': 'smart-key-programmieren',
    'autosleutel-kwijt': 'autoschluessel-verloren',
    'alle-sleutels-kwijt-auto': 'alle-schluessel-verloren-auto',
    'auto-openen-zonder-sleutel': 'auto-ohne-schluessel-oeffnen',
    'auto-slotenmaker': 'auto-schluesseldienst',
    'autosleutels-repareren': 'autoschluessel-reparieren',
    'bmw-sleutel-bijmaken-utrecht': 'bmw-schluessel-nachmachen-stuttgart',
    'vw-audi-sleutel-bijmaken-utrecht': 'vw-audi-schluessel-nachmachen-stuttgart',
    'toyota-sleutel-vervangen-utrecht': 'toyota-schluessel-ersetzen-stuttgart',
    'verzekering': 'versicherung',
    'sleutel-kwijt-auto-hulp-oplossingen': 'schluessel-verloren-auto-hilfe-loesungen',
    'alle-sleutels-kwijt-wat-nu-utrecht': 'alle-schluessel-verloren-was-nun-stuttgart',
    'sleutel-kwijt-utrecht-stappenplan': 'schluessel-verloren-stuttgart-anleitung'
}

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for k, v in slug_mappings.items():
                content = content.replace(f"'{k}'", f"'{v}'")
                content = content.replace(f"\"{k}\"", f"\"{v}\"")
                content = content.replace(f"slug: '{k}'", f"slug: '{v}'")

            if file == 'site.config.ts':
                content = content.replace("Autosleutel Expert", "FC-KEY")
                content = content.replace("radiusMeters: '75000'", "radiusMeters: '50000'")
                content = content.replace("Stuttgart, Sindelfingen und Umgebung", "Stuttgart, Sindelfingen und 50km Umkreis")

            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

with open(reviews_file, 'r', encoding='utf-8') as f:
    reviews = f.read()

replacements = {
    "['1 dag geleden', '2 dagen geleden', '3 dagen geleden', '5 dagen geleden', '1 week geleden', '2 weken geleden', '4 dagen geleden', '6 dagen geleden', '3 weken geleden']": "['Vor 1 Tag', 'Vor 2 Tagen', 'Vor 3 Tagen', 'Vor 5 Tagen', 'Vor 1 Woche', 'Vor 2 Wochen', 'Vor 4 Tagen', 'Vor 6 Tagen', 'Vor 3 Wochen']",
    '"Top service!"': '"Top Service!"',
    '"Geweldig geholpen."': '"Klasse geholfen."',
    '"Wat een redders in nood."': '"Wahre Retter in der Not."',
    '"Snel en vakkundig."': '"Schnell und professionell."',
    '"Echte professionals."': '"Echte Profis."',
    '"Zeer tevreden."': '"Sehr zufrieden."',
    '"Uitstekende ervaring."': '"Hervorragende Erfahrung."',
    '"Absolute aanrader!"': '"Absolute Empfehlung!"',
    '"Heel erg blij met de hulp."': '"Sehr glücklich über die Hilfe."',
    '"Super geregeld!"': '"Super geregelt!"',
    '"Fantastisch bedrijf."': '"Fantastisches Unternehmen."',
    '"Echt perfect."': '"Wirklich perfekt."',
    '"Ik stond met een defecte sleutel in {context}."': '"Ich stand mit einem defekten Schlüssel in {context}."',
    '"Gestrande auto in {context}, kon geen kant op."': '"Gestrandetes Auto in {context}, konnte nirgendwo hin."',
    '"Buitengesloten uit mijn auto nabij {context}."': '"Aus meinem Auto in der Nähe von {context} ausgesperrt."',
    '"Mijn sleutel lag nog in de auto in de regio {context}."': '"Mein Schlüssel lag noch im Auto in der Region {context}."',
    '"Had met spoed een autosleutel nodig in het centrum van {context}."': '"Brauchte dringend einen Autoschlüssel im Zentrum von {context}."',
    '"Sleutel afgebroken terwijl ik in {context} was."': '"Schlüssel abgebrochen, während ich in {context} war."',
    '"Mijn {context} sleutel was afgebroken."': '"Mein {context} Schlüssel war abgebrochen."',
    '"De transponder van mijn {context} werkte niet meer."': '"Der Transponder meines {context} funktionierte nicht mehr."',
    '"Ik was de reserve sleutel van de {context} kwijt."': '"Ich hatte den Ersatzschlüssel für den {context} verloren."',
    '"Buitengesloten uit mijn {context}, erg vervelend."': '"Aus meinem {context} ausgesperrt, sehr ärgerlich."',
    '"Contactslot van mijn {context} was defect."': '"Das Zündschloss meines {context} war defekt."',
    '"Ik had een nieuwe smart key voor mijn {context} nodig."': '"Ich brauchte einen neuen Smart Key für meinen {context}."',
    '"Had snel hulp nodig voor {context}."': '"Brauchte schnelle Hilfe für {context}."',
    '"Mijn afspraak voor {context} kon direct ingepland worden."': '"Mein Termin für {context} konnte sofort eingeplant werden."',
    '"Ik zocht een specialist in {context}."': '"Ich suchte einen Spezialisten für {context}."',
    '"Niemand kon me direct helpen met {context}, behalve zij."': '"Niemand konnte mir sofort bei {context} helfen, außer ihnen."',
    '"Voor {context} ben je hier aan het juiste adres."': '"Für {context} sind Sie hier genau richtig."',
    '"Ik belde voor {context} en werd erg goed te woord gestaan."': '"Ich rief wegen {context} an und wurde sehr gut beraten."',
    '"Sleutel in het contact laten zitten en de deur viel in het slot."': '"Schlüssel im Zündschloss stecken gelassen und die Tür fiel ins Schloss."',
    '"Mijn autosleutel was spoorloos verdwenen."': '"Mein Autoschlüssel war spurlos verschwunden."',
    '"De afstandsbediening van de auto reageerde nergens meer op."': '"Die Fernbedienung des Autos reagierte auf nichts mehr."',
    '"Sleutel afgebroken in het deurslot van mijn auto."': '"Schlüssel im Türschloss meines Autos abgebrochen."',
    '"Reserve sleutel nodig vlak voor mijn vakantie."': '"Ersatzschlüssel kurz vor meinem Urlaub benötigt."',
    '"Ik was mijn autosleutels kwijtgeraakt tijdens het winkelen."': '"Ich hatte meine Autoschlüssel beim Einkaufen verloren."',
    '"Binnen een half uur was de monteur ter plaatse."': '"Innerhalb einer halben Stunde war der Mechaniker vor Ort."',
    '"Gelukkig waren ze er heel erg snel."': '"Zum Glück waren sie sehr schnell da."',
    '"Ze kwamen direct nadat ik gebeld had."': '"Sie kamen sofort, nachdem ich angerufen hatte."',
    '"De monteur had de juiste apparatuur bij zich."': '"Der Mechaniker hatte die richtige Ausrüstung dabei."',
    '"Ze wisten precies wat er moest gebeuren."': '"Sie wussten genau, was zu tun war."',
    '"Ondanks het late tijdstip waren ze snel aanwezig."': '"Trotz der späten Stunde waren sie schnell zur Stelle."',
    '"De deur werd 100% schadevrij geopend."': '"Die Tür wurde zu 100% schadenfrei geöffnet."',
    '"Ze hebben ter plekke een nieuwe sleutel ingeleerd."': '"Sie haben vor Ort einen neuen Schlüssel angelernt."',
    '"Het probleem was binnen no-time opgelost."': '"Das Problem war in kürzester Zeit gelöst."',
    '"Alles werkt weer perfect, zonder gedoe."': '"Alles funktioniert wieder perfekt, ohne Probleme."',
    '"Voor een eerlijke prijs was ik direct weer op weg."': '"Für einen fairen Preis war ich sofort wieder auf dem Weg."',
    '"De monteur was super vriendelijk en loste het direct op."': '"Der Mechaniker war super freundlich und hat es sofort gelöst."'
}

for k, v in replacements.items():
    reviews = reviews.replace(k, v)

with open(reviews_file, 'w', encoding='utf-8') as f:
    f.write(reviews)
print("Done")
