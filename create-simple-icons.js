// Simple S icon generator - no dependencies needed
const fs = require('fs');

// Create SVG templates for different sizes
const createSvgIcon = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <text x="${size/2}" y="${size*0.75}" font-family="Arial, sans-serif" font-size="${size*0.8}" font-weight="bold" text-anchor="middle" fill="#1e40af">S</text>
</svg>`;

// Create different sized SVG icons
const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const svgContent = createSvgIcon(size);
  fs.writeFileSync(`public/icons/icon-${size}x${size}.svg`, svgContent);
  console.log(`Created icon-${size}x${size}.svg`);
});

console.log('All simple S icons created successfully!');
