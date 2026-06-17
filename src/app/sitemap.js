import { getBlogPosts } from '../lib/blog.js';
import { siteConfig } from '../config/site.js';
import fs from 'fs';
import path from 'path';

const getFileModifiedIso = (relativePath) => {
  const filePath = path.join(process.cwd(), relativePath);
  if (!fs.existsSync(filePath)) {
    return new Date().toISOString();
  }
  return fs.statSync(filePath).mtime.toISOString();
};

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const blogPosts = await getBlogPosts();
  const staticDates = {
    home: getFileModifiedIso('src/app/page.jsx'),
    about: getFileModifiedIso('src/app/about/page.jsx'),
    privacy: getFileModifiedIso('src/app/privacy/page.jsx'),
    terms: getFileModifiedIso('src/app/terms/page.jsx'),
    cookies: getFileModifiedIso('src/app/cookies/page.jsx'),
    blog: getFileModifiedIso('src/app/blog/page.jsx'),
  };

  const latestPostDate = blogPosts.length > 0
    ? new Date(Math.max(...blogPosts.map(post => new Date(post.lastModified || post.date).getTime()))).toISOString()
    : staticDates.blog;

  const staticPages = [
    {
      url: baseUrl,
      lastModified: staticDates.home,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticDates.about,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticDates.privacy,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticDates.terms,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: staticDates.cookies,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified || post.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
