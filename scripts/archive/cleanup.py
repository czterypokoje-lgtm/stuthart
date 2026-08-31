import os
import re

replacements = [
    (r'"/contact"', '"/kontakt"'),
    (r"'/contact'", "'/kontakt'"),
    (r'#offerte-form', '#angebot-form'),
    (r'nav-offerte-cta', 'nav-angebot-cta'),
    (r'kenteken-schema', 'kennzeichen-schema'),
    (r'kenteken-bc-schema', 'kennzeichen-bc-schema'),
    (r'KentekenBestellenPage', 'KennzeichenBestellenPage'),
    (r'autosleutel', 'autoschluessel'),
    (r'bijmaken', 'nachmachen')
]

for root, dirs, files in os.walk('./src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css') or file.endswith('.md'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original = content
            for search, replace in replacements:
                content = re.sub(search, replace, content)
            
            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filepath}")
