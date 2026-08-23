import os
import shutil
import unicodedata

source_dir = "/Users/ik/Desktop/oçadam"
dest_dir = "/Users/ik/.gemini/antigravity/scratch/autosleutel-stuttgart/public/images"

# Mapping from sanitized original filenames to city slugs
mapping = {
    "stuttgart": "stuttgart",
    "sindelfingen": "sindelfingen",
    "boblingen": "boeblingen",
    "boeblingen": "boeblingen",
    "ludwigsburg": "ludwigsburg",
    "esslingen": "esslingen",
    "esslingenamneckar": "esslingen",
    "leonberg": "leonberg",
    "fellbach": "fellbach",
    "waiblingen": "waiblingen",
    "filderstadt": "filderstadt",
    "ditzingen": "ditzingen",
    "mannheim": "mannheim",
    "karlsruhe": "karlsruhe",
    "freiburg": "freiburg",
    "freiburgimbreisgau": "freiburg",
    "heidelberg": "heidelberg",
    "heilbronn": "heilbronn",
    "ulm": "ulm",
    "pforzheim": "pforzheim",
    "reutlingen": "reutlingen"
}

def sanitize_name(filename):
    name = os.path.splitext(filename)[0].lower()
    if name.endswith('png'):
        name = name[:-3]
    name = unicodedata.normalize('NFKD', name).encode('ASCII', 'ignore').decode('utf-8')
    return name

def main():
    if not os.path.exists(source_dir):
        print(f"Error: Source directory {source_dir} not found.")
        return

    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    files = os.listdir(source_dir)
    success_count = 0

    for filename in files:
        if not (filename.lower().endswith('.png') or filename.lower().endswith('.jpg')):
            continue
            
        sanitized = sanitize_name(filename)
        slug = mapping.get(sanitized)
        
        if not slug:
            print(f"Warning: Could not map '{filename}' (sanitized: '{sanitized}') to a city slug.")
            continue
            
        src_path = os.path.join(source_dir, filename)
        ext = os.path.splitext(filename)[1].lower()
        dest_filename = f"autoschluessel-nachmachen-{slug}{ext}"
        dest_path = os.path.join(dest_dir, dest_filename)
        
        try:
            shutil.copy2(src_path, dest_path)
            print(f"Copied: {filename} -> {dest_filename}")
            success_count += 1
        except Exception as e:
            print(f"Error copying {filename}: {e}")

    print(f"Successfully processed {success_count} images.")

if __name__ == "__main__":
    main()
