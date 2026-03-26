import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Shield, Lock, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { getBlogPosts } from '@/lib/blog';
import {
  generateFAQSchema,
  generateHowToSchema,
  generateSoftwareApplicationSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  passwordGeneratorHowToSteps,
  strongPasswordFAQs
} from '@/lib/schema-generators';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = genMeta(pageMetadata.home);

export default async function Home() {
  const blogPosts = await getBlogPosts();

  const softwareSchema = generateSoftwareApplicationSchema(
    "SecureGen Password Generator",
    "Ultimate free secure & random password generator for 2026 security standards. 100% client-side privacy.",
    "https://passwordgens.online"
  );

  const faqSchema = generateFAQSchema(strongPasswordFAQs);

  const orgSchema = generateOrganizationSchema();

  const howToSchema = generateHowToSchema(
    "How to Generate a Secure Password with SecureGen",
    "Follow these simple steps to create a cryptographically strong password in seconds.",
    passwordGeneratorHowToSteps
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" }
  ]);

  const siteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6 md:space-y-8">
              <div className="inline-flex items-center rounded-full border px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground animate-fade-in w-fit">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span className="whitespace-nowrap">2026 Security Standards</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-fade-in [animation-delay:100ms] leading-tight">
                Ultimate <span className="text-primary">Secure Password Generator</span> for 2026
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in [animation-delay:200ms] leading-relaxed">
                Create strong, uncrackable passwords to keep your accounts safe.
                100% free, secure, and runs entirely in your browser.
              </p>
            </div>

            {/* Right Component */}
            <div className="flex justify-center md:justify-end animate-fade-in [animation-delay:300ms] w-full">
              <div className="w-full max-w-sm md:max-w-none">
                <PasswordGenerator />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Benefits of a Random Password Generator</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We prioritize your security with a tool that's easy to use and technically robust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Bank-Grade Security</h3>
              <p className="text-muted-foreground">
                Uses cryptographically strong random number generation for maximum entropy.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-muted-foreground">
                Passwords are generated locally in your browser. Nothing is ever sent to our servers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Instant & Easy</h3>
              <p className="text-muted-foreground">
                One-click generation and copy. Customizable settings to meet any website's requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Privacy Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">100% Private: Why Your Passwords Never Leave Your Browser</h2>
          <p>SecureGen generates every password via client-side cryptographic APIs. That means no data is sent to a server, no logs are stored, and your generated text never leaves your device.</p>
          <p>Using a client-side password generator is one of the quickest ways to protect yourself from data leakage and remote breaches. Remember: if your password generator uploads or saves passwords in the cloud, your attack surface increases significantly.</p>
          <ul className="list-disc pl-5">
            <li><strong>Client-side computation:</strong> all random bytes are created locally with secure entropy sources.</li>
            <li><strong>No tracking:</strong> zero analytics tracking on generated values, no telemetry data collection.</li>
            <li><strong>Open mindset:</strong> use copied passwords immediately and clear them from memory when done.</li>
          </ul>
        </div>
      </section>

      {/* SEO Content Block - Rewritten for Natural Flow */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">What Is a Password Generator?</h2>
            <p>
              A password generator creates strong, random passwords automatically. It helps you avoid weak passwords such as "password123" or birthdates, which are easy to guess. SecureGen generates values entirely on your device, so sensitive data is never shared with third-party servers.
            </p>

            <h2 className="font-heading text-3xl font-bold mt-10 mb-6">Why Strong Passwords Matter</h2>
            <p>
              Weak passwords are the most common cause of account breaches. A secure password should be long, unique, and random. This makes brute-force and dictionary attacks ineffective, and prevents credential stuffing across services.
            </p>

            <h2 className="font-heading text-3xl font-bold mt-10 mb-6">How Hackers Crack Passwords</h2>
            <p>
              Attackers use tools that guess millions of passwords per second. They rely on leaked passwords, dictionary lists, and pattern-based guessing. SecureGen stops that by creating passwords with high entropy and no predictable patterns.
            </p>

            <h3 className="font-heading text-2xl font-semibold mt-8 mb-4">Tips to Keep Your Password Safe</h3>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Use length:</strong> 16+ characters for maximum strength.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Use variety:</strong> upper, lower, numbers, symbols.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Never reuse:</strong> unique password per site/account.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Use manager:</strong> store passwords safely and auto-fill securely.</span>
              </li>
            </ul>

            <h2 className="font-heading text-3xl font-bold mt-10 mb-6">Frequently Asked Questions (FAQ)</h2>
            <div>
              <h3 className="font-heading text-2xl font-semibold mt-6">Can I use SecureGen for all my accounts?</h3>
              <p>Yes. Use SecureGen to generate unique passwords for each account. Avoid repeating credentials across sites.</p>

              <h3 className="font-heading text-2xl font-semibold mt-6">Do you store my generated passwords?</h3>
              <p>No. SecureGen runs fully client-side and does not store or transmit generated passwords.</p>

              <h3 className="font-heading text-2xl font-semibold mt-6">What is password entropy?</h3>
              <p>Entropy measures randomness. Higher entropy means a password is harder for attackers to crack. SecureGen maximizes entropy with mixed character sets.</p>

              <h3 className="font-heading text-2xl font-semibold mt-6">How often should I update passwords?</h3>
              <p>Update critical passwords 6-12 months or immediately after a breach notification. Use SecureGen to quickly create updated credentials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-primary/10 text-primary mb-6 animate-fade-in">
              Latest Security Tips
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tight">Stay Protected with SecureGen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our latest guidance on password hygiene, multi-factor authentication, and modern digital safety.
            </p>
          </div>

          {blogPosts && blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-6 mb-12">
              {blogPosts.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col rounded-3xl border bg-background overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {post.image && (
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col p-8 relative z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded-md">
                        Security
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold text-sm gap-2 mt-auto">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-background/50 rounded-3xl border border-dashed">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Base Coming Soon</h3>
              <p className="text-muted-foreground">Our security experts are currently crafting deep-dive tutorials just for you.</p>
            </div>
          )}

          {blogPosts && blogPosts.length > 0 && (
            <div className="flex justify-center pt-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-background font-bold transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
              >
                Explore Knowledge Base
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

