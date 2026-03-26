import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import Image from 'next/image';
import { Shield, ArrowRight, Calendar, User, Clock, Search, Filter } from 'lucide-react';

export const metadata = genMeta(pageMetadata.blog);

export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getBlogPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load blog posts';
  }

  // Generate structured data for blog listing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SecureGen Password Security Blog",
    "description": "Tips, tutorials, and insights about password security and generation.",
    "url": "https://passwordgens.online/blog",
    "publisher": {
      "@type": "Organization",
      "name": "SecureGen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://passwordgens.online/logo.svg"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "url": `https://passwordgens.online/blog/${post.slug}`,
      "image": post.image,
      "publisher": {
        "@type": "Organization",
        "name": "SecureGen"
      }
    }))
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
      }
    ]
  };

  const categories = ["All", "Security", "Privacy", "Tutorials", "Guides"];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Blog Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-primary/10 text-primary mb-6">
                Knowledge Base
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                Password Security <span className="text-primary">Insights</span> & Guides
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Stay one step ahead of digital threats. Expert advice on password hygiene, encryption standards, and online safety.
              </p>
              
              <div className="max-w-md mx-auto relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-background border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 pb-24">
          {/* Category Filter */}
          <div className="flex items-center justify-start md:justify-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  i === 0 ? "bg-foreground text-background" : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {error ? (
            <div className="max-w-md mx-auto text-center py-20 border border-dashed rounded-3xl">
              <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Error loading posts</h3>
              <p className="text-muted-foreground">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="max-w-md mx-auto text-center py-20 border border-dashed rounded-3xl">
               <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground text-sm">Our security experts are currently crafting new content. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <article
                  key={post.slug}
                  className={`group flex flex-col rounded-3xl border bg-background overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 ${
                    i === 0 ? "md:col-span-2 lg:col-span-2 md:flex-row h-full" : ""
                  }`}
                >
                  {post.image && (
                    <div className={`relative overflow-hidden bg-muted ${
                      i === 0 ? "md:w-1/2 min-h-[300px]" : "h-64"
                    }`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  )}

                  <div className={`flex-1 flex flex-col p-8 relative z-20 ${
                    i === 0 ? "md:w-1/2" : ""
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded-md">
                        {post.category || 'Security'}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block mb-4">
                      <h2 className={`font-heading font-bold group-hover:text-primary transition-colors duration-300 leading-tight ${
                        i === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                      }`}>
                        {post.title}
                      </h2>
                    </Link>

                    {post.description && (
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {post.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t mt-auto">
                       <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                          {post.author ? post.author.charAt(0) : 'S'}
                        </div>
                        <span className="text-xs font-semibold">{post.author || 'SecureGen Team'}</span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center text-primary font-bold text-xs gap-2"
                      >
                        Read More
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
