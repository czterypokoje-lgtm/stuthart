import os

files_to_modify = [
    'src/config/leistungen.ts',
    'src/app/leistungen/[slug]/page.tsx',
    'src/app/image-sitemap.xml/route.ts'
]

slug_map = {
    'auto-openen-zonder-sleutel': 'auto-ohne-schluessel-oeffnen',
    'sleutel-in-auto': 'schluessel-im-auto',
    'deur-dichtgevallen': 'tuer-zugefallen',
    'kofferbak-openen': 'kofferraum-oeffnen',
    'sleutel-afgebroken-in-slot': 'schluessel-im-schloss-abgebrochen',
    'sleutel-bijmaken': 'schluessel-nachmachen',
    'transponder-programmeren': 'transponder-programmieren',
    'afstandsbediening-bijmaken': 'fernbedienung-nachmachen',
    'smart-key-programmeren': 'smart-key-programmieren',
    'reservesleutel-maken': 'ersatzschluessel-anfertigen',
    'noodopening-auto': 'notoeffnung-auto',
    'alle-sleutels-kwijt-auto': 'alle-schluessel-verloren-auto',
    'batterij-vervangen': 'batterie-wechseln',
    'autosleutels-repareren': 'autoschluessel-reparieren',
    'behuizing-vervangen': 'gehaeuse-ersetzen',
    'knoppen-repareren': 'tasten-reparieren',
    'contactslot-auto-vervangen': 'zuendschloss-auto-wechseln',
    'autosleutel-kwijt': 'autoschluessel-verloren',
    'reserve-autosleutel': 'ersatz-autoschluessel',
    'autosleutel-bijmaken': 'autoschluessel-nachmachen',
    'auto-slotenmaker': 'auto-schluesseldienst',
    'contactslot-vervangen': 'zuendschloss-wechseln'
}

for filepath in files_to_modify:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, file not found")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    replaced = False
    for old, new in slug_map.items():
        if old in content:
            content = content.replace(old, new)
            replaced = True
            
    if replaced:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Replaced slugs in {filepath}")
    else:
        print(f"No replacements made in {filepath}")

print("Slugs replaced successfully.")
