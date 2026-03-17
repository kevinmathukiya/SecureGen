import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Shield, Lock, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = genMeta(pageMetadata.home);

export default async function Home() {
  const blogPosts = await getBlogPosts();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SecureGen Password Generator",
    "url": "https://passwordgens.online",
    "description": "Generate strong, secure passwords instantly with our free online tool. Client-side generation ensures your data never leaves your browser.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "logo": {
      "@type": "ImageObject",
      "url": "https://passwordgens.online/logo.svg",
      "width": 32,
      "height": 32
    },
    "image": "https://passwordgens.online/logo.svg",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "Customizable length, Uppercase, Lowercase, Numbers, Symbols, Strength meter"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a password generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A password generator creates random, unique passwords in seconds. SecureGen uses client-side cryptography so your password never leaves your device."
        }
      },
      {
        "@type": "Question",
        "name": "Why do strong passwords matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strong passwords resist brute-force attacks, dictionary attacks, and credential stuffing. They are longer, unpredictable, and unique per account."
        }
      },
      {
        "@type": "Question",
        "name": "How do hackers crack passwords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Attackers use brute-force, rainbow tables, phishing, and leaked credential lists. A random password generator removes patterns and dramatically increases entropy."
        }
      },
      {
        "@type": "Question",
        "name": "Is SecureGen really private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All passwords are generated in your browser. No password data is sent to our servers, stored, or logged."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 mb-12">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Secure & Client-side Generation
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl animate-fade-in [animation-delay:100ms]">
                Generate <span className="text-primary">Secure Passwords</span> Instantly
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in [animation-delay:200ms]">
                Create strong, uncrackable passwords to keep your accounts safe. 
                100% free, secure, and runs entirely in your browser.
              </p>
            </div>

            <div className="animate-fade-in [animation-delay:300ms]">
              <PasswordGenerator />
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
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Latest Security Tips</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed with our latest articles on password security and best practices.
              </p>
            </div>

            {blogPosts && blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {blogPosts.slice(0, 2).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border bg-background overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-primary"
                  >
                    {post.image && (
                      <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Check back soon for security tips and tutorials!</p>
              </div>
            )}

            {blogPosts && blogPosts.length > 0 && (
              <div className="flex justify-center pt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  View All Articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>
    </>
  );
}

