import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getBlogPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load blog posts';
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tips, tutorials, and insights about password security and generation.
          </p>
        </div>

        {error ? (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">No blog posts yet.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Check back soon for tips and tutorials!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col p-6">
                  <Link href={`/blog/${post.slug}`} className="block mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  {post.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                      {post.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col text-sm text-gray-500 dark:text-gray-500">
                      <span>{post.author}</span>
                      <span className="text-xs">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    {post.readTime && (
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {post.readTime}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
