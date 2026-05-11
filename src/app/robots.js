export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://passwordgens.online/sitemap.xml',
  }
}
