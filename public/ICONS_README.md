# Icons and Favicons

This directory contains all the icon files for SecureGen.

## Files

- `logo.svg` - Main logo SVG (shield with lock icon)
- `favicon.svg` - Favicon for modern browsers (SVG format)
- `manifest.json` - Web app manifest for PWA support

## SEO Integration

All icons are automatically included in:
- Next.js metadata API (via `src/lib/seo-metadata.js`)
- Web app manifest
- Structured data (JSON-LD)

No additional configuration needed - icons are automatically referenced throughout the site.

