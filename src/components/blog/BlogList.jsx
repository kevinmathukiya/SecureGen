'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = ["All", "Security", "Privacy", "Tutorials", "Guides"];

export default function BlogList({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.keywords && post.keywords.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        activeCategory === 'All' || 
        post.category?.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, activeCategory]);

  const featuredPost = searchQuery === '' && activeCategory === 'All' ? filteredPosts[0] : null;
  const displayPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      
      {/* ── Search & Filter Controls ── */}
      <div className="max-w-3xl mx-auto mb-12 space-y-8">
        {/* Search bar */}
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/80 backdrop-blur-sm border border-border rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/30'
                  : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      {filteredPosts.length === 0 ? (
        <div className="max-w-sm mx-auto text-center py-24 border border-dashed border-border rounded-3xl">
          <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <svg className="h-7 w-7 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m1-8h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">No articles found</h3>
          <p className="text-muted-foreground text-sm">Try adjusting your search or filter to find what you're looking for.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-6 text-primary font-bold text-sm hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">

          {/* ── Featured Post (wide card) ── */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="relative flex flex-col lg:flex-row rounded-3xl border border-border bg-background overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1">
                {/* Image */}
                {featuredPost.image && (
                  <div className="relative w-full lg:w-[55%] h-64 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden bg-muted shrink-0">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow">
                        Featured
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col p-7 sm:p-9 lg:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2.5 py-1 bg-primary/10 rounded-md border border-primary/20">
                      {featuredPost.category || 'Security'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground group-hover:text-primary transition-colors mb-4">
                    {featuredPost.title}
                  </h2>

                  {featuredPost.description && (
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 flex-1">
                      {featuredPost.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-border">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-extrabold text-xs shrink-0">
                        {featuredPost.author ? featuredPost.author.charAt(0) : 'S'}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground leading-tight">{featuredPost.author || 'SecureGen Team'}</p>
                        {featuredPost.readTime && <p className="text-xs text-muted-foreground">{featuredPost.readTime}</p>}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Read Article
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* ── Rest of Posts Grid ── */}
          {displayPosts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full flex flex-col rounded-3xl border border-border bg-background overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1">
                    {/* Card Image */}
                    {post.image && (
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-muted shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-0.5 bg-primary/10 rounded border border-primary/15">
                          {post.category || 'Security'}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-extrabold leading-snug text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {post.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {post.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-primary/15 flex items-center justify-center text-primary font-extrabold text-xs shrink-0">
                            {post.author ? post.author.charAt(0) : 'S'}
                          </div>
                          <p className="text-xs font-semibold text-foreground truncate max-w-[100px]">{post.author || 'SecureGen'}</p>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold text-primary">
                          Read
                          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
