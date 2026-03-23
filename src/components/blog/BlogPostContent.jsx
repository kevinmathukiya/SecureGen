'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/lib/mdx-components';

export default function BlogPostContent({ mdxSource }) {
  return (
    <div className="prose prose-xl dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-img:mx-auto prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg">
      <MDXRemote source={mdxSource.compiledSource} scope={mdxSource.scope} components={mdxComponents} />
    </div>
  );
}
