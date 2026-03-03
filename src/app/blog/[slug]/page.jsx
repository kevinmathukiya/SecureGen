'use client';

import { useState, useEffect } from 'react';
import { useMDXComponents } from '@/lib/mdx-components';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export default function BlogPostPage({ params }) {
  const [mdxSource, setMdxSource] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const components = useMDXComponents();

  useEffect(() => {
    async function loadBlogPost() {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }

        const data = await response.json();
        
        // Serialize the MDX content
        const mdxSource = await serialize(data.content);
        
        setMdxSource(mdxSource);
        setMetadata(data.metadata);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadBlogPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <a
            href="/blog"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
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
        {metadata && (
          <div className="mb-10">
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
        )}

        {/* Featured Image */}
        {metadata?.image && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <img
              src={metadata.image}
              alt={metadata.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20">
          {mdxSource && <MDXRemote {...mdxSource} components={components} />}
        </div>

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
  );
}
