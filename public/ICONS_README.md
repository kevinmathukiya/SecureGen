# Icons and Favicons

This directory contains all the icon files for SecureGen.

## Files

- `logo.svg` - Main logo SVG (shield with lock icon)
- `favicon.svg` - Favicon for modern browsers (SVG format)
- `manifest.json` - Web app manifest for PWA support

## Required: Apple Touch Icon

The `apple-touch-icon.png` file (180x180px) needs to be generated from the logo SVG.

### How to Generate:

1. Open `logo.svg` in an image editor (Inkscape, Adobe Illustrator, etc.)
2. Export as PNG at 180x180 pixels
3. Save as `apple-touch-icon.png` in the `public` folder

### Online Tools:

You can also use online SVG to PNG converters:
- https://svgtopng.com/
- https://convertio.co/svg-png/

Make sure to:
- Set size to 180x180 pixels
- Use a solid background color (recommended: #3b82f6 or white)
- Save as PNG format

## SEO Integration

All icons are automatically included in:
- Next.js metadata API (via `src/lib/seo-metadata.js`)
- Web app manifest
- Structured data (JSON-LD)

No additional configuration needed - icons are automatically referenced throughout the site.

