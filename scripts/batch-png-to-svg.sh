#!/bin/bash

# Right now this method only works with DE's simple icon PNGs so I wouldn't try this with
# anything more complex then an icon. Even then the original would have to be something >= 256x256
# otherwise you could have misalinged lines and blobs

indir=$1
outdir=$2

mkdir temp
mkdir -p $outdir

# Loop through PNG files
for file in $indir/*.png; do
  # Extract filename without extension
  filename=$(basename -- "$file")
  filename="${filename%.*}"

  # Potrace needs black lines to trace properly, this sttep sets the transparent background to black then inverts the color
  magick "$file" \
    -background black \
    -alpha remove \
    -negate \
    -set filename:base "%[basename]" \
    "temp/%[filename:base].bmp"

  # Convert PNM to black SVG with Potrace
  potrace "temp/$filename.bmp" --svg --color "#f2f2f2" --progress -o "$outdir/$filename.svg"
done

rm -rf temp
echo "Finished batch conversion"

echo "Updating Warframe-Symbols"
fantasticon --config fonts/.fantasticonrc.js
