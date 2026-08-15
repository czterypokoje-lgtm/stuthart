import os
import glob
import re

URL_MAPPINGS = {
    r'/steden\b': '/standorte',
    r'/merken\b': '/marken',
    r'/kennisbank\b': '/wissensdatenbank',
    r'/autosleutel-kwijt\b': '/autoschluessel-verloren',
    r'/galerij\b': '/galerie',
    r'/prijzen\b': '/preise',
    r'/veelgestelde-vragen\b': '/faq',
    r'/beoordelingen\b': '/bewertungen',
    r'/autosleutel-bestellen-op-kenteken\b': '/autoschluessel-bestellen',
    r'/over-ons\b': '/ueber-uns',
    r'autosleutel-bijmaken': 'autoschluessel-nachmachen'
}

TEXT_MAPPINGS = {
    "'Steden'": "'Städte'",
    "'Merken'": "'Marken'",
    '"Steden"': '"Städte"',
    '"Merken"': '"Marken"'
}

files_to_check = glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.tsx", recursive=True) + \
                 glob.glob("/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/src/**/*.ts", recursive=True)

for filepath in files_to_check:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        for old, new in URL_MAPPINGS.items():
            content = re.sub(old, new, content)

        for old, new in TEXT_MAPPINGS.items():
            content = content.replace(old, new)
            
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
