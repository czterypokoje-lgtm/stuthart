import os
import glob

# 1. Rename directories
DIR_RENAMES = {
    'steden': 'standorte',
    'kennisbank': 'wissensdatenbank',
    'merken': 'marken',
    'autosleutel-kwijt': 'autoschluessel-verloren',
    'galerij': 'galerie',
    'prijzen': 'preise',
    'veelgestelde-vragen': 'faq',
    'beoordelingen': 'bewertungen',
    'autosleutel-bestellen-op-kenteken': 'autoschluessel-bestellen',
    'over-ons': 'ueber-uns',
}

base_path = '/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/app'

for old_dir, new_dir in DIR_RENAMES.items():
    old_path = os.path.join(base_path, old_dir)
    new_path = os.path.join(base_path, new_dir)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old_path} to {new_path}")

# Also rename inside leistungen
leistungen_path = os.path.join(base_path, 'leistungen')
LEISTUNGEN_RENAMES = {
    'autosleutel-bijmaken': 'autoschluessel-nachmachen',
    'auto-openen-zonder-sleutel': 'auto-ohne-schluessel-oeffnen',
    'auto-slotenmaker': 'auto-schluesseldienst'
}
if os.path.exists(leistungen_path):
    for old_dir, new_dir in LEISTUNGEN_RENAMES.items():
        old_path = os.path.join(leistungen_path, old_dir)
        new_path = os.path.join(leistungen_path, new_dir)
        if os.path.exists(old_path):
            os.rename(old_path, new_path)
            print(f"Renamed {old_path} to {new_path}")

# 2. Global Find and Replace for Internal Links
LINK_REPLACEMENTS = {
    '/steden': '/standorte',
    '/kennisbank': '/wissensdatenbank',
    '/merken': '/marken',
    '/autosleutel-kwijt': '/autoschluessel-verloren',
    '/galerij': '/galerie',
    '/prijzen': '/preise',
    '/veelgestelde-vragen': '/faq',
    '/beoordelingen': '/bewertungen',
    '/autosleutel-bestellen-op-kenteken': '/autoschluessel-bestellen',
    '/over-ons': '/ueber-uns',
    '/leistungen/autosleutel-bijmaken': '/leistungen/autoschluessel-nachmachen',
    '/leistungen/auto-openen-zonder-sleutel': '/leistungen/auto-ohne-schluessel-oeffnen',
    '/leistungen/auto-slotenmaker': '/leistungen/auto-schluesseldienst',
}

files_to_check = glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.tsx", recursive=True) + glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.ts", recursive=True)

for filepath in files_to_check:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in LINK_REPLACEMENTS.items():
            content = content.replace(f'"{old}"', f'"{new}"')
            content = content.replace(f"'{old}'", f"'{new}'")
            content = content.replace(f'`{old}`', f'`{new}`')
            content = content.replace(f'"{old}/', f'"{new}/')
            content = content.replace(f"'{old}/", f"'{new}/")
            content = content.replace(f'`{old}/', f'`{new}/')
            
            # Special replacements for slugs used dynamically
            if old == '/steden':
                 content = content.replace('steden/', 'standorte/')
            if old == '/merken':
                 content = content.replace('merken/', 'marken/')
            if old == '/kennisbank':
                 content = content.replace('kennisbank/', 'wissensdatenbank/')
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated links in {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
