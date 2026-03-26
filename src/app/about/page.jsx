import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { generateBreadcrumbSchema } from '@/lib/schema-generators';
import Link from 'next/link';

export const metadata = genMeta(pageMetadata.about);

export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">

        {/* ── Hero Section ── */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden border-b border-border">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The SecureGen Mission
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Elevating Digital Privacy through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Transparent Cryptography
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                SecureGen was built with a simple premise: Everyone deserves free, industrial-grade security tools that respect their privacy.
              </p>
            </div>
          </div>
        </section>

        {/* ── Philosophy Section ── */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Privacy First */}
              <div className="p-8 rounded-3xl border border-border bg-muted/20 hover:border-primary/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Privacy First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We designed SecureGen to run entirely in your local browser. No password you generate is ever sent to our servers. Your data stays in your RAM, deleted the moment you close the tab.
                </p>
              </div>

              {/* Open Source */}
              <div className="p-8 rounded-3xl border border-border bg-muted/20 hover:border-primary/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Open Source</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trust should be earned through transparency. Our complete source code is available for public audit on GitHub, ensuring no backdoors or hidden tracking exist in our tools.
                </p>
              </div>

              {/* Zero Knowledge */}
              <div className="p-8 rounded-3xl border border-border bg-muted/20 hover:border-primary/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 21a10.003 10.003 0 008.384-4.51m-2.408-4.697A4 4 0 0118 8c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .741.201 1.436.552 2.03m5.448 0a4.391 4.391 0 01.448 2c0 1.341-.61 2.538-1.552 3.328m-4.448-3.328A4.391 4.391 0 0010 12c0 1.341.61 2.538 1.552 3.328M12 11V9m0-6V2m0 22V22m12-10h2m-24 0h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Zero Knowledge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't want your data. By maintaining a zero-knowledge posture, we ensure that we have no access to your digital identities, making our platform inherently secure from server breaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technology Section ── */}
        <section className="py-20 md:py-32 bg-muted/10 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 order-2 md:order-1">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                    Powered by the <br />
                    <span className="text-primary">Web Crypto API</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      SecureGen leverages the modern standard for browser-based cryptographic operations: the <strong>Web Crypto API</strong>.
                    </p>
                    <p>
                      Unlike legacy applications that use <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">Math.random()</code>, which is inherently predictable, the Web Crypto API utilizes the underlying operating system's true hardware random number generator.
                    </p>
                    <p>
                      This provides cryptographically secure entropy, ensuring that every password generated is virtually unguessable and meets the highest standards of modern security.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="h-48 w-48 rounded-3xl bg-primary/10 flex items-center justify-center text-primary relative z-10">
                      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 border border-primary/20 rounded-full animate-ping duration-[3s]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 border border-primary/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Behind the Project</h2>
                <p className="text-muted-foreground text-lg">The story of how SecureGen came to be.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-10 p-8 sm:p-12 rounded-[40px] border border-border bg-gradient-to-br from-background via-muted/20 to-background shadow-xl">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-[32px] bg-primary/20 flex justify-center items-center font-black text-5xl text-primary mx-auto md:mx-0 shadow-lg border-2 border-primary/10">
                  KM
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-1">Kevin Mathukiya</h3>
                  <p className="text-primary font-bold tracking-widest uppercase text-xs mb-6 px-3 py-1 bg-primary/10 rounded-full inline-block">
                    Security Consultant & Developer
                  </p>
                  <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
                    <p>
                      SecureGen was created to solve a personal frustration: the lack of completely free, ad-free, and privacy-respecting password generation tools online.
                    </p>
                    <p>
                      Driven by a passion for open-source software and strong cryptographic principles, Kevin developed SecureGen as a transparent utility for the global security community.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <a
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Conclusion Section ── */}
        <section className="py-20 pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="p-12 rounded-[48px] border-2 border-primary/20 bg-primary/5 relative overflow-hidden group">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-primary/20 transition-colors duration-700" />

                <h3 className="text-3xl sm:text-4xl font-black mb-6">Transparency is Non-Negotiable</h3>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Don't trust black boxes. Audit our code, verify our cryptographic implementation, and join our mission to secure the digital world.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 h-14 px-10 shadow-lg shadow-primary/20"
                  >
                    Audit Source Code
                  </a>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-2xl text-base font-bold transition-all border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 h-14 px-10"
                  >
                    Read Our Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
