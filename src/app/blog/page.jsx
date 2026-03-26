import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import BlogList from '@/components/blog/BlogList';

export const metadata = genMeta(pageMetadata.blog);

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getBlogPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load blog posts';
  }

  // Structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SecureGen Password Security Blog",
    "description": "Tips, tutorials, and insights about password security and generation.",
    "url": "https://passwordgens.online/blog",
    "publisher": {
      "@type": "Organization",
      "name": "SecureGen",
      "logo": { "@type": "ImageObject", "url": "https://passwordgens.online/logo.svg" }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": { "@type": "Person", "name": post.author },
      "datePublished": post.date,
      "url": `https://passwordgens.online/blog/${post.slug}`,
      "image": post.image,
      "publisher": { "@type": "Organization", "name": "SecureGen" }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://passwordgens.online" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://passwordgens.online/blog" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background">

        {/* ── Hero ── */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Knowledge Base
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Password Security{' '}
                <span className="text-primary relative">
                  Insights
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded-full" />
                </span>
                {' '}&amp; Guides
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Stay one step ahead of digital threats. Expert advice on password hygiene, encryption standards, and online safety.
              </p>
            </div>
          </div>
        </section>

        {/* ── Content (Client Component) ── */}
        {error ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-sm mx-auto text-center py-24 border border-dashed border-border rounded-3xl">
              <div className="h-14 w-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                <svg className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Error loading posts</h3>
              <p className="text-muted-foreground text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>
    </>
  );
}
