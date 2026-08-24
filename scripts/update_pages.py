import sys
import os

files = [
    "src/app/leistungen/autoschluessel-nachmachen/page.tsx",
    "src/app/leistungen/transponder-programmieren/page.tsx",
    "src/app/leistungen/fernbedienung-nachmachen/page.tsx",
    "src/app/leistungen/smart-key-programmieren/page.tsx",
    "src/app/leistungen/ersatzschluessel-machen/page.tsx",
    "src/app/autoschluessel-bestellen/page.tsx",
    "src/app/leistungen/autoschluessel-reparieren/page.tsx",
    "src/app/leistungen/gehaeuse-wechseln/page.tsx",
    "src/app/leistungen/tasten-reparieren/page.tsx",
    "src/app/autoschluessel-verloren/page.tsx",
    "src/app/leistungen/notoeffnung-auto/page.tsx",
    "src/app/leistungen/alle-schluessel-verloren-auto/page.tsx"
]

for filepath in files:
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    if "GlobalFeatureCards" in content:
        print(f"Already updated: {filepath}")
        continue
        
    # Add import
    lines = content.split('\n')
    import_idx = 0
    for i, line in enumerate(lines):
        if line.startswith('import '):
            import_idx = i
            
    # Insert right after the last import
    lines.insert(import_idx + 1, "import GlobalFeatureCards from '@/components/FeatureCards/GlobalFeatureCards';")
    
    # Rejoin to string
    content = '\n'.join(lines)
    
    # Find the first </section> which closes the hero
    hero_end_idx = content.find('</section>')
    if hero_end_idx != -1:
        # Insert GlobalFeatureCards right after
        insert_str = '\n\n        <GlobalFeatureCards />\n'
        content = content[:hero_end_idx + 10] + insert_str + content[hero_end_idx + 10:]
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"Could not find </section> in {filepath}")
