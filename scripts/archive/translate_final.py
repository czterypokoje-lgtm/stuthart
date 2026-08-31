import os
import glob

SLUG_MAPPINGS = {
    'autosleutel-kwijt': 'autoschluessel-verloren',
    'sleutel-in-auto': 'schluessel-im-auto',
    'deur-dichtgevallen': 'tuer-zugefallen',
    'kofferbak-openen': 'kofferraum-oeffnen',
    'sleutel-afgebroken-in-slot': 'schluessel-im-schloss-abgebrochen',
    'noodopening-auto': 'notoeffnung-auto',
    'autosleutel-bijmaken': 'autoschluessel-nachmachen',
    'auto-openen-zonder-sleutel': 'auto-ohne-schluessel-oeffnen',
    'auto-slotenmaker': 'auto-schluesseldienst',
    'reserve-autosleutel': 'ersatz-autoschluessel',
    'transponder-programmeren': 'transponder-programmieren',
    'smart-key-programmeren': 'smart-key-programmieren',
    'autosleutels-repareren': 'autoschluessel-reparieren',
    'alle-sleutels-kwijt-auto': 'alle-schluessel-verloren-auto',
    'autosleutel-bestellen-op-kenteken': 'autoschluessel-bestellen'
}

TEXT_MAPPINGS = {
    'Over FC-KEY: Uw Mobiele Autosleutelspecialist': 'Über FC-KEY: Ihr mobiler Autoschlüssel-Spezialist',
    'Maak kennis met FC-KEY. Onder leiding van Berkan Acarol bieden wij professionele, mobiele autosleutelservice in de gehele Randstad en Midden-Nederland.': 'Lernen Sie FC-KEY kennen. Unter der Leitung von Berkan Acarol bieten wir professionellen, mobilen Autoschlüsselservice im gesamten Großraum Stuttgart und Umgebung.',
    'Hoofdtechnicus & Autosleutelspecialist': 'Cheftechniker & Autoschlüssel-Spezialist',
    'Gecertificeerd autosleutelspecialist met jarenlange ervaring in voertuigbeveiliging en autosleutelcodering. Specialist in transponder programmering, smart key systemen en contactslot reparatie voor alle automerken.': 'Zertifizierter Autoschlüssel-Spezialist mit jahrelanger Erfahrung in Fahrzeugsicherheit und Autoschlüsselcodierung. Spezialist für Transponderprogrammierung, Smart-Key-Systeme und Zündschlossreparatur für alle Automarken.',
    'Autosleutel programmering': 'Autoschlüssel-Programmierung',
    'Wij zijn uw betrouwbare, mobiele autosleutelspecialist. Met geavanceerde apparatuur en jarenlange ervaring lossen wij elk autosleutelprobleem op. Wij doen dit direct ter plaatse, 24/7 en voor een eerlijke, vaste prijs.': 'Wir sind Ihr zuverlässiger, mobiler Autoschlüssel-Spezialist. Mit fortschrittlicher Ausrüstung und jahrelanger Erfahrung lösen wir jedes Autoschlüsselproblem. Wir tun dies direkt vor Ort, 24/7 und zu einem fairen, festen Preis.',
    'FC-KEY wordt geleid door Berkan Acarol. Hij is een gecertificeerd expert in voertuigbeveiliging en autosleutelcodering. Samen met een hecht team van ervaren mobiele monteurs helpen wij dagelijks particulieren, wagenparkbeheerders en garagebedrijven.': 'FC-KEY wird von Berkan Acarol geleitet. Er ist ein zertifizierter Experte für Fahrzeugsicherheit und Autoschlüsselcodierung. Zusammen mit einem engen Team erfahrener mobiler Mechaniker helfen wir täglich Privatpersonen, Flottenmanagern und Werkstätten.',
    'Professionele autosleutel werkplaats en gereedschap': 'Professionelle Autoschlüssel-Werkstatt und Werkzeuge',
    'Alle Autosleutel Leistungen 24/7': 'Alle Autoschlüssel-Dienstleistungen 24/7',
    'Overzicht van al onze autosleutel leistungen: bijmaken, programmeren, reparatie en beveiliging. Mobiele service aan huis.': 'Übersicht aller unserer Autoschlüssel-Dienstleistungen: Nachmachen, Programmieren, Reparatur und Sicherheit. Mobiler Service vor Ort.',
    'Professionele Autosleutel Services': 'Professionelle Autoschlüssel-Dienstleistungen',
    'Wij lossen elk autosleutel probleem ter plaatse op. Geen sleepkosten, geen lange wachttijden bij de dealer.': 'Wir lösen jedes Autoschlüsselproblem vor Ort. Keine Abschleppkosten, keine langen Wartezeiten beim Händler.',
    'Compleet Overzicht van Onze Mobiele Autosleutel & Slotenmaker Leistungen': 'Komplette Übersicht unserer mobilen Autoschlüssel- & Schlüsseldienst-Leistungen',
    'Als gespecialiseerd auto slotenmaker biedt': 'Als spezialisierter Auto-Schlüsseldienst bietet',
    'een totaaloplossing voor elk type autosleutelprobleem. Of u nu uw sleutel in de auto heeft laten liggen, te maken heeft met een afgebroken sleutelbaard, een defect contactslot of een lege batterij van uw smart key: onze mobiele monteurs staan 24/7 voor u klaar om u ter plaatse te helpen.': 'eine Gesamtlösung für jede Art von Autoschlüsselproblem. Egal, ob Sie Ihren Schlüssel im Auto gelassen haben, mit einem abgebrochenen Schlüsselbart, einem defekten Zündschloss oder einer leeren Batterie Ihres Smart Keys zu tun haben: Unsere mobilen Mechaniker stehen Ihnen 24/7 zur Verfügung, um Ihnen vor Ort zu helfen.',
    '2. Autosleutel Bijmaken & Programmeren op Locatie': '2. Autoschlüssel nachmachen & programmieren vor Ort',
    'Bent u al uw autosleutels verloren? Geen paniek. Waar een dealer u verplicht om uw auto te laten wegslepen en vaak complete slotensets vervangt, genereren wij ter plaatse een compleet nieuwe sleutel en wissen wij de oude, verloren sleutels uit het geheugen van uw boordcomputer.': 'Haben Sie alle Ihre Autoschlüssel verloren? Keine Panik. Wo ein Händler Sie zwingt, Ihr Auto abschleppen zu lassen, und oft komplette Schlosssätze ersetzt, generieren wir vor Ort einen komplett neuen Schlüssel und löschen die alten, verlorenen Schlüssel aus dem Speicher Ihres Bordcomputers.',
    'utrecht': 'stuttgart',
    'amsterdam': 'sindelfingen',
    'almere': 'boeblingen',
    'amersfoort': 'esslingen',
}

files_to_check = glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.tsx", recursive=True) + \
                 glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.ts", recursive=True)

for filepath in files_to_check:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for old, new in SLUG_MAPPINGS.items():
            content = content.replace(f"'{old}'", f"'{new}'")
            content = content.replace(f"\"{old}\"", f"\"{new}\"")
            content = content.replace(f"`{old}`", f"`{new}`")
            content = content.replace(f"/{old}", f"/{new}")
            content = content.replace(f"{old}.webp", f"{new}.webp")
            content = content.replace(f"{old}.png", f"{new}.png")

        for old, new in TEXT_MAPPINGS.items():
            content = content.replace(old, new)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
