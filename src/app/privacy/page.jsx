import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { generateBreadcrumbSchema } from '@/lib/schema-generators';
import Link from 'next/link';

export const metadata = genMeta(pageMetadata.privacy);

export default function Privacy() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" }
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
            <div className="absolute top-0 right-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
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
                    Zero-Data Commitment
                  </h2>
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-6">
                    <p className="text-foreground font-bold leading-relaxed mb-2">
                      At SecureGen, we prioritize your privacy above all else.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our core service—the password generator—is designed to be <strong>100% client-side</strong>. This means that every password you generate is created locally on your device using your browser's own cryptographic functions.
                    </p>
                  </div>
                  <p className="text-primary font-black text-center text-lg py-4 border-y border-dashed border-primary/30">
                    We never see, store, or transmit your generated passwords.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">2</span>
                    Information We Collect
                  </h2>
                  <h3 className="text-xl font-bold mt-8 mb-4">Usage Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To improve our user experience, we use <strong>Google Analytics 4 (GA4)</strong>. GA4 collects anonymized data such as:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 not-prose">
                    {["Pages visited & time spent", "Device & browser info", "General location (City/Country)", "Referral sources"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl border border-border">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-200 dark:border-orange-900/30 text-sm">
                    <p className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <strong>Important:</strong> Google Analytics does NOT have access to the passwords you generate. The values generated by the tool are never sent to Google or any other third party.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">3</span>
                    Local Storage & Preferences
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use <strong>Local Storage</strong> and <strong>Session Storage</strong> in your browser to save your tool preferences:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Dark/Light mode theme setting</li>
                    <li>• Your last used password length preference</li>
                    <li>• Character set toggles (Uppercase, Numbers, etc.)</li>
                  </ul>
                  <p className="text-muted-foreground italic">
                    This data remains on your physical device and is not synchronized with any server.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">4</span>
                    Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use minimal cookies primarily for Google Analytics. You can manage your cookie preferences through your browser settings.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm">5</span>
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our security practices, you can reach out via our {' '}
                    <a
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      GitHub repository
                    </a>.
                  </p>
                </section>
              </div>

              <div className="mt-20 p-10 rounded-[40px] bg-foreground text-background">
                <h3 className="text-2xl font-black mb-4">Committed to Transparency</h3>
                <p className="text-muted font-medium mb-8 leading-relaxed">
                  Our privacy commitment is backed by our open-source nature. Audit our code to see exactly how we handle your data.
                </p>
                <a
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-background text-foreground px-8 py-3.5 font-bold hover:opacity-90 transition-all"
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
