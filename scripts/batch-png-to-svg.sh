#!/bin/bash

# Right now this method only works with DE's simple icon PNGs so I wouldn't try this with
# anything more complex then an icon. Even then the original would have to be something >= 256x256
# otherwise you could have misalinged lines and basically blobs

# Loop through PNG files
for file in *.png; do
  # Extract filename without extension
  basename=$(echo "$file" | sed 's/\.\w*$//')

  # Convert PNG to black PNG with transparency
  # We need to convert the image from black to white so potrace can detect
  # and trace properly
  convert "$file" \
    -channel RGB \
    -fuzz 99% \
    -fill black \
    -opaque white \
    -set filename:base "%[basename]" \
    "%[filename:base].png"

  # Convert black PNG to PNM
  pngtopnm -mix "$basename.png" > "$basename.pnm"

  # Convert PNM to black SVG with Potrace
  potrace "$basename.pnm" --svg --color "#e5e5e5" --progress > "$basename.svg"

  # Clean up intermediate PNM file
  rm "$basename.pnm"
done

echo "Finished converting PNG icons to black SVGs!"
