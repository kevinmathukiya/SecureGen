import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/lib/mdx-components';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    return genMeta({
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
      url: `/blog/${params.slug}`,
    });
  }

  const { metadata } = blogPost;

  const postKeywords = metadata.keywords
    ? metadata.keywords.split(',').map(k => k.trim())
    : ['password security', 'cybersecurity'];

  const meta = genMeta({
    title: metadata.title,
    description: metadata.description,
    keywords: postKeywords,
    url: `/blog/${params.slug}`,
    ogImage: metadata.image,
    ogImageAlt: metadata.title,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
      publishedTime: metadata.date,
      authors: [metadata.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    notFound();
  }

  const { metadata, content } = blogPost;

  // Extract headings for TOC
  const headings = Array.from(content.matchAll(/(#{2,3})\s+(.*)/g)).map(match => ({
    level: match[1].length,
    text: match[2],
    id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  }));

  const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const authorInitials = metadata.author.split(' ').map(n => n[0]).join('');

  // Generate structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metadata.title,
    "description": metadata.description,
    "author": { "@type": "Person", "name": metadata.author },
    "publisher": {
      "@type": "Organization",
      "name": "SecureGen",
      "logo": { "@type": "ImageObject", "url": "https://passwordgens.online/logo.svg" }
    },
    "datePublished": metadata.date,
    "dateModified": metadata.date,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://passwordgens.online/blog/${params.slug}` },
    "url": `https://passwordgens.online/blog/${params.slug}`,
    "image": metadata.image,
    "articleSection": "Password Security",
    "keywords": "password security, cybersecurity, password generation",
    "wordCount": content.split(/\s+/).length,
    "timeRequired": metadata.readTime ? `PT${metadata.readTime.split(' ')[0]}M` : "PT5M"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://passwordgens.online" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://passwordgens.online/blog" },
      { "@type": "ListItem", "position": 3, "name": metadata.title, "item": `https://passwordgens.online/blog/${params.slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is this blog post about?",
        "acceptedAnswer": { "@type": "Answer", "text": metadata.description }
      },
      {
        "@type": "Question",
        "name": `How long does it take to read "${metadata.title}"?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": metadata.readTime
            ? `This article requires approximately ${metadata.readTime} to read completely.`
            : "This article requires approximately 5 minutes to read."
        }
      },
      {
        "@type": "Question",
        "name": "Who authored this blog post?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `This article was written by ${metadata.author}, an expert in password security and cybersecurity best practices.`
        }
      },
      {
        "@type": "Question",
        "name": "Is this information up to date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, this article was published on ${formattedDate} and contains current information about password security practices.`
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-background">

        {/* ── Hero Banner ── */}
        <div className="relative w-full bg-gradient-to-b from-primary/10 via-background/80 to-background overflow-hidden">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground line-clamp-1 max-w-[200px] sm:max-w-xs">{metadata.title}</span>
            </nav>

            {/* Category badge */}
            {metadata.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-5">
                {metadata.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-6 max-w-4xl">
              {metadata.title}
            </h1>

            {/* Description */}
            {metadata.description && (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
                {metadata.description}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm shrink-0">
                  {authorInitials}
                </div>
                <span className="font-semibold text-foreground">{metadata.author}</span>
              </div>
              <span className="hidden sm:block text-muted-foreground/50">|</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formattedDate}</span>
              </div>
              {metadata.readTime && (
                <>
                  <span className="hidden sm:block text-muted-foreground/50">|</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{metadata.readTime}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Main Content Area ── */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 max-w-7xl mx-auto">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0">

              {/* Featured Image - Proper Display for All Screens */}
              {metadata.image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-border relative w-full aspect-[16/9] sm:aspect-[21/9]">
                  <Image
                    src={metadata.image}
                    alt={metadata.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              )}


              {/* Mobile TOC */}
              {headings.length > 0 && (
                <div className="xl:hidden mb-8 p-5 bg-muted/40 border border-border rounded-2xl">
                  <h2 className="text-base font-bold mb-3 mt-0 text-foreground flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h10M4 14h16M4 18h10" />
                    </svg>
                    Table of Contents
                  </h2>
                  <ul className="space-y-2">
                    {headings.map((heading, idx) => (
                      <li key={idx} className={heading.level === 3 ? 'ml-5' : ''}>
                        <a
                          href={`#${heading.id}`}
                          className={`text-sm hover:text-primary transition-colors ${heading.level === 3 ? 'text-muted-foreground' : 'text-foreground font-medium'}`}
                        >
                          {heading.level === 3 && <span className="mr-1.5 text-muted-foreground/60">—</span>}
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* MDX Content */}
              <div className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none
                prose-headings:scroll-mt-24 prose-headings:font-extrabold
                prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto prose-img:max-w-full prose-img:h-auto
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-gray-950 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:border prose-pre:border-border
                prose-blockquote:border-primary/50 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-1
                prose-li:my-1 mb-12">
                <MDXRemote source={content} components={mdxComponents} />
              </div>

              {/* Tags */}
              {metadata.keywords && (
                <div className="mb-10 pt-8 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {metadata.keywords.split(',').map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-xs font-medium hover:bg-muted/70 hover:text-foreground transition-colors cursor-default"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Disclosure */}
              <div className="mb-12 p-5 sm:p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground mb-1">Fact Checked by SecureGen Editorial Team</p>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    <strong>Authenticity Disclosure:</strong> This article was drafted with the assistance of AI tools for structural research. It was subsequently rigorously fact-checked, edited, and expanded by our Security Editorial Team to guarantee technical accuracy and alignment with modern cryptographic standards.
                  </p>
                </div>
              </div>

              {/* Author Bio */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-muted/30 flex flex-col sm:flex-row gap-5 sm:gap-6 mb-12">
                <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full bg-primary/15 flex items-center justify-center font-extrabold text-2xl text-primary mx-auto sm:mx-0">
                  {authorInitials}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Author</p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground mt-0 mb-1">{metadata.author}</h3>
                  <p className="text-sm text-primary font-medium mb-3">Cybersecurity Expert & Developer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    {metadata.author} is a dedicated security researcher focused on privacy-centric tools and cryptography. They write to educate users on protecting their digital identities with strong, client-side encryption and modern Web Crypto API standards.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <section className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'What is this blog post about?',
                      a: metadata.description,
                    },
                    {
                      q: 'How long does it take to read this article?',
                      a: metadata.readTime
                        ? `This article requires approximately ${metadata.readTime} to read completely.`
                        : 'This article requires approximately 5 minutes to read.',
                    },
                    {
                      q: 'Who authored this blog post?',
                      a: `This article was written by ${metadata.author}, an expert in password security and cybersecurity best practices.`,
                    },
                    {
                      q: 'Is this information up to date?',
                      a: `Yes, this article was published on ${formattedDate} and contains current information about password security practices.`,
                    },
                  ].map(({ q, a }, i) => (
                    <div key={i} className="p-5 sm:p-6 rounded-2xl border border-border bg-muted/20 hover:border-primary/30 transition-colors">
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                        <span className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-extrabold flex items-center justify-center mt-0.5">Q</span>
                        {q}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed ml-8">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom nav */}
              <div className="pt-8 border-t border-border flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
                <span className="text-xs text-muted-foreground">{formattedDate}</span>
              </div>
            </article>

            {/* ── Sticky Desktop Sidebar TOC ── */}
            {headings.length > 0 && (
              <aside className="hidden xl:block w-72 shrink-0">
                <div className="sticky top-24 space-y-6">
                  <div className="p-5 rounded-2xl border border-border bg-muted/20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h10M4 14h16M4 18h10" />
                      </svg>
                      Contents
                    </h2>
                    <ul className="space-y-1.5">
                      {headings.map((heading, idx) => (
                        <li key={idx}>
                          <a
                            href={`#${heading.id}`}
                            className={`block py-1 text-sm transition-colors hover:text-primary rounded-md ${heading.level === 3
                              ? 'ml-4 text-muted-foreground text-xs'
                              : 'text-foreground font-medium'
                              }`}
                          >
                            {heading.level === 3 && <span className="mr-1 text-muted-foreground/50">·</span>}
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Article info card */}
                  <div className="p-5 rounded-2xl border border-border bg-muted/20 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center font-extrabold text-primary text-sm shrink-0">
                        {authorInitials}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Written by</p>
                        <p className="text-sm font-bold text-foreground leading-tight">{metadata.author}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formattedDate}</span>
                      </div>
                      {metadata.readTime && (
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{metadata.readTime}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                        <span>{content.split(/\s+/).length.toLocaleString()} words</span>
                      </div>
                    </div>
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors pt-2 border-t border-border"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Blog
                    </Link>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
