import { getBlogPosts } from '../lib/blog.js';
import { siteConfig } from '../config/site.js';

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  
  // Use a more stable date for static pages to avoid "fake" daily updates
  // This is better for Google's trust
  const lastModifiedStatic = new Date('2026-05-11').toISOString();
  const blogPosts = await getBlogPosts();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(), // Home page changes often with new blog posts
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedStatic,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastModifiedStatic,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastModifiedStatic,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: lastModifiedStatic,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
