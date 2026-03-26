import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { generateBreadcrumbSchema } from '@/lib/schema-generators';
import Link from 'next/link';

export const metadata = genMeta(pageMetadata.cookies);

export default function Cookies() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cookie Policy", url: "/cookies" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* ── Hero Section ── */}
        <section className="relative pt-16 pb-12 overflow-hidden border-b border-border">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* ── Content Section ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose dark:prose-invert prose-slate max-w-none">

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">1</span>
                    What Are Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide specific functionality to the user while navigating between pages.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">2</span>
                    How SecureGen Uses Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    SecureGen uses minimal cookies and similar technologies (like LocalStorage) for the following purposes:
                  </p>

                  <div className="space-y-6">
                    {/* Essential Card */}
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Essential & Functional (LocalStorage)
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        We use <strong>LocalStorage</strong> to remember your settings and preferences so you don't have to re-enter them every time you visit. These are strictly functional and do not track you across other websites.
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose">
                        <li className="flex items-center gap-2 text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border">
                          <strong>Theme:</strong> Light or Dark mode.
                        </li>
                        <li className="flex items-center gap-2 text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border">
                          <strong>Tool Settings:</strong> Length & Char types.
                        </li>
                      </ul>
                    </div>

                    {/* Performance Card */}
                    <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Performance & Analytics (Cookies)
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        We use <strong>Google Analytics 4 (GA4)</strong> to understand how visitors interact with our website to improve performance and user experience.
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose">
                        <li className="flex items-center gap-2 text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border">
                          <strong>_ga:</strong> User Distinction.
                        </li>
                        <li className="flex items-center gap-2 text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border">
                          <strong>_ga_&lt;id&gt;:</strong> Session State.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">3</span>
                    Managing Your Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to alert you when cookies are being sent.
                  </p>
                  <p className="text-muted-foreground leading-relaxed p-4 rounded-xl border border-dashed border-border text-sm">
                    To find out more about cookies, visit {' '}
                    <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">aboutcookies.org</a> or {' '}
                    <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">allaboutcookies.org</a>.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">4</span>
                    Updates to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date to keep you informed about our data practices.
                  </p>
                </section>
              </div>

              <div className="mt-20 p-10 rounded-[40px] bg-primary/5 border border-primary/10 text-center">
                <h3 className="text-2xl font-bold mb-4">Committed to Transparency</h3>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed max-w-sm mx-auto">
                  Audit our complete source code on GitHub to verify how we implement specific functionalities and handle storage.
                </p>
                <a
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary text-primary-foreground px-8 py-3.5 font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  View Source on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
