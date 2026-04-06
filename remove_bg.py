import os
import io
import sys
from rembg import remove
from PIL import Image, ImageOps

def process_image(input_path, output_path, invert=True):
    if os.path.exists(input_path):
        with open(input_path, 'rb') as i:
            input_data = i.read()
            
        # Remove background
        output_data = remove(input_data)
        
        # Load into PIL
        img = Image.open(io.BytesIO(output_data)).convert("RGBA")
        
        # Split channels
        r, g, b, a = img.split()
        
        if invert:
            # Invert the RGB channels
            rgb_img = Image.merge("RGB", (r, g, b))
            inverted_rgb = ImageOps.invert(rgb_img)
            # Merging back with original alpha
            final_img = Image.merge("RGBA", (*inverted_rgb.split(), a))
        else:
            final_img = img
            
        final_img.save(output_path)
        print(f"Processed: {input_path} -> {output_path}")
    else:
        print(f"File not found: {input_path}")

if __name__ == "__main__":
    # Default for backward compatibility
    process_image(r"C:\Users\YangHyeonJoon\Desktop\MongMaStudio\main_logo.png", 
                  r"C:\Users\YangHyeonJoon\Desktop\MongMaStudio\main_logo_transparent.png")
    
    # Specific for steam icon
    process_image(r"C:\Users\YangHyeonJoon\Desktop\MongMaStudio\steam_icon_raw.png", 
                  r"C:\Users\YangHyeonJoon\Desktop\MongMaStudio\steam_icon_white.png")
