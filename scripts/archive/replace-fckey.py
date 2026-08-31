import os
import glob
import re

TEXT_REPLACEMENTS = {
    "Autosleutel24": "FC-KEY",
    "autosleutel24": "fc-key",
    "Autosleutels Programmeren en Bijmaken voor Alle 59 Automerken in Nederland": "Autoschlüssel Programmieren und Nachmachen für Alle 59 Automarken im Umkreis von 50 km um Stuttgart und Sindelfingen",
    
    "Moderne auto's zijn uitgerust met complexe elektronische antidiefstalsystemen. Elke autofabrikant hanteert eigen beveiligingsprotocollen, startonderbrekers en transpondersystemen — van BMW CAS4/FEM en Volkswagen MQB tot Mercedes-Benz FBS3/FBS4 en Renault Keycards. Waar reguliere garages vaak vastlopen op merk-specifieke softwarebeveiliging of u doorsturen naar een dure merkdealer, is FIRST CLASS KEY gespecialiseerd in het sleutelbeheer van álle 59 gangbare automerken.": "Moderne Autos sind mit komplexen elektronischen Diebstahlschutzsystemen ausgestattet. Jeder Fahrzeughersteller verwendet eigene Sicherheitsprotokolle, Wegfahrsperren und Transpondersysteme — von BMW CAS4/FEM und Volkswagen MQB bis hin zu Mercedes-Benz FBS3/FBS4 und Renault Keycards. Wo normale Werkstätten oft an markenspezifischer Software-Sicherheit scheitern oder Sie an einen teuren Vertragshändler verweisen, ist FC-KEY auf das Schlüsselmanagement von allen 59 gängigen Automarken spezialisiert.",
    
    "1. Europese Automerken: VAG Group, BMW Group & Mercedes-Benz": "1. Europäische Automarken: VAG Group, BMW Group & Mercedes-Benz",
    
    "Duitse autofabrikanten lopen wereldwijd voorop als het gaat om complexe cryptografische voertuigbeveiliging. Binnen de Volkswagen Groep (Volkswagen, Audi, Seat, Skoda en Porsche) wordt gewerkt met onder andere de 4e en 5e generatie immobilisers en de moderne MQB- en MLB-platforms met Security Gateway (SFD). Bij BMW en Mini maken wij verbinding met EWS, CAS (1 t/m 4+), FEM en BDC modules. Voor Mercedes-Benz en Smart programmeren wij infrarood sleutels (Chromen sleutels) op de Electronic Ignition Switch (EIS/EZS) systemen binnen FBS3 en FBS4 protocollen.": "Deutsche Automobilhersteller sind weltweit führend in komplexer kryptografischer Fahrzeugsicherheit. Innerhalb des Volkswagen-Konzerns (Volkswagen, Audi, Seat, Skoda und Porsche) wird unter anderem mit Wegfahrsperren der 4. und 5. Generation sowie den modernen MQB- und MLB-Plattformen mit Security Gateway (SFD) gearbeitet. Bei BMW und Mini verbinden wir uns mit EWS, CAS (1 bis 4+), FEM und BDC Modulen. Für Mercedes-Benz und Smart programmieren wir Infrarotschlüssel (Chromschlüssel) auf den elektronischen Zündschloss-Systemen (EIS/EZS) innerhalb der FBS3 und FBS4 Protokolle.",
    
    "2. Franse & Italiaanse Automerken: PSA, Renault & Stellantis": "2. Französische & Italienische Automarken: PSA, Renault & Stellantis",
    
    "Franse en Italiaanse merken zoals Peugeot, Citroën, DS Automobiles, Fiat, Alfa Romeo en Renault maken gebruik van BSI (Body Systems Interface) en UCH (Unité de Contrôle Habitacle) modules. Vooral Renault en Dacia staan bekend om hun Keycard Handsfree systemen. Wij lezen de beveiligingspincodes direct uit de BSI of UCH en leren binnen enkele minuten een nieuwe afstandsbediening of sleutelkaart in, zelfs bij volledige sleutelverlies situaties.": "Französische und italienische Marken wie Peugeot, Citroën, DS Automobiles, Fiat, Alfa Romeo und Renault verwenden BSI- (Body Systems Interface) und UCH-Module (Unité de Contrôle Habitacle). Besonders Renault und Dacia sind für ihre Keycard-Handsfree-Systeme bekannt. Wir lesen die Sicherheits-PIN-Codes direkt aus dem BSI oder UCH aus und lernen innerhalb weniger Minuten eine neue Fernbedienung oder Schlüsselkarte an, selbst wenn alle Schlüssel verloren gegangen sind.",
    
    "3. Aziatische & Amerikaanse Merken: Toyota, Ford, Kia & Hyundai": "3. Asiatische & Amerikanische Marken: Toyota, Ford, Kia & Hyundai",
    
    "Aziatische autofabrikanten zoals Toyota, Lexus, Kia, Hyundai, Nissan, Honda en Mazda werken met G-chip, H-chip en Smart Key proximity systemen die vaak beveiligd zijn met ID4D, ID46, ID47 of ID8A transponders. Voor Amerikaanse merken zoals Ford en Jeep programmeren wij PATS (Passive Anti-Theft System) transponders en FOBIK sleutels.": "Asiatische Automobilhersteller wie Toyota, Lexus, Kia, Hyundai, Nissan, Honda und Mazda arbeiten mit G-Chip-, H-Chip- und Smart Key-Proximity-Systemen, die oft mit ID4D, ID46, ID47 oder ID8A Transpondern gesichert sind. Für amerikanische Marken wie Ford und Jeep programmieren wir PATS (Passive Anti-Theft System) Transponder und FOBIK Schlüssel.",
    
    "Geautoriseerde OEM-Diagnose en CNC-Sleutelfrezen": "Autorisierte OEM-Diagnose und CNC-Schlüsselfräsen",
    
    "Onze servicebussen zijn uitgerust met professionele diagnosecomputers en officiële OEM-licenties. Hierdoor kunnen wij rechtstreeks communiceren met de immobiliser, ECU of BSI van uw voertuig via de OBD2-poort. Wij slijpen mechanische sleutelbladen met uiterste precisie op onze computergestuurde CNC-frezen op basis van uw chassisnummer (VIN) of de sleutelcode.": "Unsere Servicefahrzeuge sind mit professionellen Diagnosecomputern und offiziellen OEM-Lizenzen ausgestattet. Dadurch können wir direkt über den OBD2-Anschluss mit der Wegfahrsperre, dem ECU oder BSI Ihres Fahrzeugs kommunizieren. Wir fräsen mechanische Schlüsselbärte mit höchster Präzision auf unseren computergesteuerten CNC-Fräsen, basierend auf Ihrer Fahrgestellnummer (VIN) oder dem Schlüsselcode.",
    
    "Smart Keys, Keyless Go en All Keys Lost per Merk": "Smart Keys, Keyless Go und Alle Schlüssel verloren (All Keys Lost) pro Marke",
    
    "Of u nu een gloednieuwe elektrische auto rijdt met Keyless Entry of een klassieke personenwagen: wij programmeren transponderchips, afstandsbedieningen en proximity keys op locatie. Ook wanneer u alle sleutels kwijt bent (All Keys Lost), openen wij uw voertuig 100% schadevrij met Lishi tools en genereren wij direct een nieuwe sleutelset met 12 maanden garantie.": "Egal, ob Sie ein brandneues Elektroauto mit Keyless Entry oder einen klassischen PKW fahren: Wir programmieren Transponderchips, Fernbedienungen und Proximity Keys vor Ort. Auch wenn Sie alle Schlüssel verloren haben (All Keys Lost), öffnen wir Ihr Fahrzeug zu 100% zerstörungsfrei mit Lishi-Werkzeugen und generieren sofort ein neues Schlüsselset mit 12 Monaten Garantie.",
}

# Recursively find all typescript/react files
files_to_check = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True)

for filepath in files_to_check:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply standard string replacements
        for old, new in TEXT_REPLACEMENTS.items():
            content = content.replace(old, new)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
