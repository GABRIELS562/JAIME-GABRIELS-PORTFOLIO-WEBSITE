#!/bin/bash

# Image Optimization Script for Portfolio Website
# This script will convert images to WebP format when you have the necessary tools installed

echo "==================================="
echo "Image Optimization Guide"
echo "==================================="
echo ""
echo "To optimize your images to WebP format, you'll need to:"
echo ""
echo "1. Install image optimization tools:"
echo "   brew install webp imageoptim-cli"
echo ""
echo "2. Run the following commands to convert your images:"
echo ""

# List of images to optimize
images=(
    "public/images/projects/streaming-architecture.png"
    "public/images/projects/polybot-architecture.png"
    "public/images/projects/election-architecture.png"
    "public/images/projects/disko-architecture.png"
    "public/images/jaime-profile.png"
    "public/images/selfie.png"
    "public/images/jaime-selfie.png"
    "public/images/devops-background.png"
    "public/images/devops-infinity.png"
)

echo "# Convert PNG images to WebP:"
for img in "${images[@]}"; do
    if [[ $img == *.png ]]; then
        webp_path="${img%.png}.webp"
        echo "cwebp -q 85 \"$img\" -o \"$webp_path\""
    fi
done

echo ""
echo "3. After conversion, update your React components to use WebP with fallback:"
echo ""
echo "Example usage in React:"
echo ""
cat << 'EOF'
<picture>
  <source srcSet="/images/projects/streaming-architecture.webp" type="image/webp" />
  <img src="/images/projects/streaming-architecture.png" alt="Streaming Architecture" />
</picture>
EOF

echo ""
echo "==================================="
echo "Note: WebP provides 25-35% better compression than PNG/JPEG"
echo "while maintaining visual quality."
echo "===================================="