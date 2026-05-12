import { siteConfig } from '@/config/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

