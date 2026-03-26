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
    "Ultimate free secure & random password generator for modern security standards. 100% client-side privacy.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background">
        
        {/* ── Hero Section ── */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden border-b border-border">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-primary/20 dark:bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/30 dark:bg-primary/10 rounded-full blur-[100px] translate-y-1/2 opacity-30 transition-colors" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Left Column: Text Content */}
              <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left-6 duration-1000">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Modern Security Standards
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                  Ultimate <span className="text-primary">Secure Password Generator</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Create strong, uncrackable passwords to keep your accounts safe. 100% free, secure, and runs entirely in your browser.
                </p>
              </div>

              {/* Right Column: Component */}
              <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-right-6 duration-1000">
                <div className="w-full max-w-md">
                  <PasswordGenerator />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features Section ── */}
        <section className="py-24 md:py-32 bg-muted/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">Why Use SecureGen?</h2>
              <div className="h-1.5 w-20 bg-primary/40 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-[40px] border border-border bg-background hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Bank-Grade Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uses cryptographically strong random number generation for maximum entropy and safety.
                </p>
              </div>

              <div className="p-8 rounded-[40px] border border-border bg-background hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">100% Private</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passwords are generated locally in your browser. Nothing is ever sent to or stored on our servers.
                </p>
              </div>

              <div className="p-8 rounded-[40px] border border-border bg-background hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Instant & Easy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  One-click generation and customization to meet any website requirements instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust & Privacy Highlight ── */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose dark:prose-invert">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-8 text-center sm:text-left">100% Private: Your Data Stays Local</h2>
            <p className="text-lg leading-relaxed mb-6">
              SecureGen generates every password via client-side cryptographic APIs (Web Crypto API). That means no data is sent to a server, no logs are stored, and your generated text never leaves your device.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 not-prose">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">Local Generation</span>
                    <span className="text-sm text-muted-foreground">All random bytes are created locally with secure entropy sources.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">Zero Tracking</span>
                    <span className="text-sm text-muted-foreground">No tracking on generated values or telemetry data collection.</span>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
                 <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                 <p className="text-sm font-bold text-foreground">Open-source & Transparent Architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO Content & FAQ ── */}
        <section className="py-24 md:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-24">
                <div>
                  <h2 className="text-3xl font-black mb-6">What Is a Password Generator?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A password generator creates strong, random passwords automatically. It helps you avoid weak patterns and common guessing techniques used by attackers. SecureGen generates values entirely on your device, ensuring maximum confidentiality.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-6">Why Strong Passwords Matter</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Weak passwords are the single most common cause of identity theft. A secure password must be long, unique, and irregular to withstand brute-force attacks and credential stuffing across modern digital services.
                  </p>
                </div>
              </div>

              <div className="bg-muted/10 rounded-[60px] p-8 md:p-16 border border-border mb-24">
                 <h2 className="text-3xl font-black mb-10">Password Security FAQ</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   {[
                     { q: "Can I use SecureGen for all my accounts?", a: "Yes. Use unique passwords for each service. SecureGen makes it easy to create different keys for every platform." },
                     { q: "Do you store my generated passwords?", a: "Never. SecureGen is architected as a zero-knowledge service. Values are cleared the moment the window closes." },
                     { q: "What is password entropy?", a: "Entropy measures randomness. Higher entropy means a password is harder to crack. SecureGen maximizes entropy automatically." },
                     { q: "How often should I update passwords?", a: "Update critical passwords every 6-12 months, or immediately after any major security breach notification." }
                   ].map((faq, i) => (
                     <div key={i} className="space-y-3">
                       <h3 className="text-xl font-bold text-foreground">{faq.q}</h3>
                       <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Latest Blog Posts Section */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Knowledge Base</span>
                <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">Stay Protected</h2>
                <p className="text-muted-foreground text-lg">Deep dives into cryptography, privacy standards, and online hygiene.</p>
              </div>
              <Link href="/blog" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 shrink-0">
                Explore Full Blog
              </Link>
            </div>

            {blogPosts && blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(0, 2).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative">
                    <article className="h-full flex flex-col rounded-[48px] border border-border bg-background overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/40">
                      <div className="relative h-64 sm:h-80 overflow-hidden bg-muted">
                        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>
                      <div className="flex-1 flex flex-col p-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">Security</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                        <p className="text-muted-foreground line-clamp-2 mb-8 flex-1 leading-relaxed">{post.description}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-black text-primary group-hover:translate-x-2 transition-transform">
                          Read Full Article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>

      </div>
    </>
  );
}
