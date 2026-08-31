import os

dirs_to_check = ['public/brands', 'public/images', 'public/images/keys', 'public/images/blog']

replacements = [
    ('autosleutel', 'autoschluessel'),
    ('bijmaken', 'nachmachen')
]

for d in dirs_to_check:
    if not os.path.exists(d):
        continue
    for root, dirs, files in os.walk(d):
        for file in files:
            new_name = file
            for search, replace in replacements:
                new_name = new_name.replace(search, replace)
            
            if new_name != file:
                old_path = os.path.join(root, file)
                new_path = os.path.join(root, new_name)
                os.rename(old_path, new_path)
                print(f"Renamed {file} to {new_name}")
