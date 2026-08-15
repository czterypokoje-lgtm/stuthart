import os

src_dir = "src"

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.css', '.json', '.md')):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                original = f.read()
            
            content = original
            content = content.replace("@/config/diensten", "@/config/leistungen")
            content = content.replace("DIENSTEN", "LEISTUNGEN")
            content = content.replace("diensten", "leistungen")
            content = content.replace("Diensten", "Leistungen")

            if content != original:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {path}")
