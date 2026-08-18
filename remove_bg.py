from PIL import Image
import os

def remove_background(input_path, output_path, tolerance=50):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is white or close to white
        # item is (R, G, B, A)
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            new_data.append((255, 255, 255, 0)) # Make it transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background("public/logo-golden-crest.jpg", "public/logo-golden-crest.png")
    print("Background removed successfully.")
