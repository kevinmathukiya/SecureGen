import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { notFound } from 'next/navigation';
import { mdxComponents } from '@/lib/mdx-components';
import Image from 'next/image';

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

  return genMeta({
    title: metadata.title,
    description: metadata.description,
    keywords: ['password security', 'cybersecurity', metadata.title.toLowerCase()],
    url: `/blog/${params.slug}`,
    ogImage: metadata.image,
    ogImageAlt: metadata.title,
  });
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

  // Generate structured data for blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metadata.title,
    "description": metadata.description,
    "author": {
      "@type": "Person",
      "name": metadata.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SecureGen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://passwordgens.online/logo.svg"
      }
    },
    "datePublished": metadata.date,
    "dateModified": metadata.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://passwordgens.online/blog/${params.slug}`
    },
    "url": `https://passwordgens.online/blog/${params.slug}`,
    "image": metadata.image,
    "articleSection": "Password Security",
    "keywords": "password security, cybersecurity, password generation",
    "wordCount": content.split(/\s+/).length,
    "timeRequired": metadata.readTime ? `PT${metadata.readTime.split(' ')[0]}M` : "PT5M"
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://passwordgens.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://passwordgens.online/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": metadata.title,
        "item": `https://passwordgens.online/blog/${params.slug}`
      }
    ]
  };

  // FAQ structured data for blog posts
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is this blog post about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": metadata.description
        }
      },
      {
        "@type": "Question",
        "name": `How long does it take to read "${metadata.title}"?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": metadata.readTime ? `This article requires approximately ${metadata.readTime} to read completely.` : "This article requires approximately 5 minutes to read."
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
          "text": `Yes, this article was published on ${new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} and contains current information about password security practices.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Back to blog link */}
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>

          {/* Article header */}
          <div className="mb-10">
            {metadata.category && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                  {metadata.category}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {metadata.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-800 pb-6">
              <span className="font-medium text-gray-900 dark:text-white">{metadata.author}</span>
              <span className="hidden sm:block">•</span>
              <span>
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {metadata.readTime && (
                <>
                  <span className="hidden sm:block">•</span>
                  <span>{metadata.readTime}</span>
                </>
              )}
            </div>
            {metadata.description && (
              <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg leading-relaxed">
                {metadata.description}
              </p>
            )}
          </div>

          {/* Featured Image */}
          {metadata.image && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 relative h-[400px] w-full">
              <Image
                src={metadata.image}
                alt={metadata.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
              <h2 className="text-xl font-bold mb-4 mt-0 text-gray-900 dark:text-white">Table of Contents</h2>
              <ul className="space-y-3">
                {headings.map((heading, idx) => (
                  <li key={idx} className={`${heading.level === 3 ? 'ml-6 text-sm' : 'font-medium'}`}>
                    <a href={`#${heading.id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article content */}
          <div className="prose prose-xl dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-img:mx-auto prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg mb-12">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* AI Disclosure & Fact Checking */}
          <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-6 text-sm text-gray-700 dark:text-gray-300 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <strong className="text-gray-900 dark:text-white text-base">Fact Checked by SecureGen Editorial Team</strong>
            </div>
            <p className="m-0 leading-relaxed">
              <strong>Authenticity Disclosure:</strong> This article was drafted with the assistance of AI tools for structural research. It was subsequently rigorously fact-checked, edited, and expanded by our Security Editorial Team to guarantee technical accuracy, strategic value, and alignment with modern cryptographic standards.
            </p>
          </div>

          {/* Author Bio (E-E-A-T) */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-6">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900/30 flex justify-center items-center font-bold text-2xl text-blue-600 dark:text-blue-400">
              {metadata.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-bold mt-0 mb-1 text-gray-900 dark:text-white">Written by {metadata.author}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">Cybersecurity Expert & Developer</p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {metadata.author} is a dedicated security researcher focused on privacy-centric tools and cryptography. They write to educate users on protecting their digital identities with strong, client-side encryption and modern Web Crypto API standards.
              </p>
            </div>
          </div>

          {/* Tags Section */}
          {metadata.keywords && (
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-900">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {metadata.keywords.split(',').map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What is this blog post about?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {metadata.description}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  How long does it take to read this article?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {metadata.readTime ? `This article requires approximately ${metadata.readTime} to read completely.` : "This article requires approximately 5 minutes to read."}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Who authored this blog post?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  This article was written by <strong>{metadata.author}</strong>, an expert in password security and cybersecurity best practices.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Is this information up to date?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, this article was published on <strong>{new Date(metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong> and contains current information about password security practices.
                </p>
              </div>
            </div>
          </section>

          {/* Footer separator and back link */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
