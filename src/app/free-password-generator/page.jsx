import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Free Online Password Generator | No Installation Required | SecureGen',
  description: 'Use SecureGen\'s free online password generator - no installation, registration, or signup needed. Generate strong passwords instantly in your browser. 100% free and completely private.',
  keywords: ['free password generator', 'online password generator', 'free online password maker', 'no installation', 'instant password generator', 'web-based password generator', 'browser password generator'],
  url: '/free-password-generator',
  ogImageAlt: 'Free Online Password Generator - No Installation Required',
});

export default function FreePasswordGenerator() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SecureGen Free Online Password Generator",
    "description": "Free online password generator without installation, registration, or signup. Generate strong passwords instantly in your browser.",
    "url": "https://passwordgens.online/free-password-generator",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                No Sign-Up Required
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Free Online Password <span className="text-primary">Generator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                SecureGen is 100% free, forever. No hidden costs, no premium version, no signup required. Generate unlimited strong passwords instantly with zero restrictions.
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <PasswordGenerator />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2>Why Choose SecureGen's Free Password Generator?</h2>
              <ul>
                <li><strong>Completely Free:</strong> No premium limits, no paid upgrades, no trial restrictions</li>
                <li><strong>No Registration:</strong> Use instantly without creating an account</li>
                <li><strong>No Installation:</strong> Works directly in your web browser</li>
                <li><strong>No Login:</strong> No username, password, or email verification needed</li>
                <li><strong>Unlimited Passwords:</strong> Generate as many passwords as you need</li>
                <li><strong>Fully Private:</strong> 100% client-side - passwords never sent to servers</li>
                <li><strong>Open Source:</strong> Source code available on GitHub for transparency</li>
              </ul>

              <h2>How to Use SecureGen (It's Simple!)</h2>
              <ol>
                <li><strong>Visit the site</strong> - no login or signup needed</li>
                <li><strong>Customize settings</strong> - choose length and character types</li>
                <li><strong>Click Generate</strong> - instant strong password</li>
                <li><strong>Copy to clipboard</strong> - password ready to paste</li>
                <li><strong>Use password</strong> - paste into your account or password manager</li>
              </ol>

              <h2>Free Features You Get</h2>
              <ul>
                <li><strong>Customizable length:</strong> 4-64 characters</li>
                <li><strong>Character type selection:</strong> uppercase, lowercase, numbers, symbols</li>
                <li><strong>Instant generation:</strong> passwords created instantly</li>
                <li><strong>One-click copy:</strong> password copied to clipboard automatically</li>
                <li><strong>Strength meter:</strong> visual indicator of password strength</li>
                <li><strong>Dark mode:</strong> supporting eye-friendly theme</li>
                <li><strong>Mobile friendly:</strong> works on phones, tablets, and computers</li>
              </ul>

              <h2>Why Free Tools Are Worth It</h2>
              <p>
                Password generation is a fundamental security need, not a premium feature. SecureGen is free because:
              </p>
              <ul>
                <li><strong>Security shouldn't be gatekept:</strong> Everyone deserves strong password protection</li>
                <li><strong>No server costs:</strong> Client-side generation means minimal operational expenses</li>
                <li><strong>Open source model:</strong> Community contributions keep costs low</li>
                <li><strong>Our mission:</strong> Making the internet safer, one password at a time</li>
              </ul>

              <h2>Best Practices with Free Password Generators</h2>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 my-6">
                <h3 className="mt-0">To get maximum benefit from SecureGen:</h3>
                <ul className="mb-0">
                  <li><strong>Use with a password manager:</strong> SecureGen generates, a password manager stores</li>
                  <li><strong>Enable 2FA:</strong> Two-factor authentication adds another security layer</li>
                  <li><strong>Use unique passwords:</strong> Different password for each website</li>
                  <li><strong>Store safely:</strong> Use a password manager to keep passwords secure</li>
                  <li><strong>Check regularly:</strong> Monitor accounts for suspicious activity</li>
                </ul>
              </div>

              <h2>Frequently Asked Questions</h2>
              <h3>Is SecureGen really free forever?</h3>
              <p>
                Yes, 100%. SecureGen is open-source and free forever with no plans to charge. We believe password generation should be a free, universal tool.
              </p>

              <h3>Why don't you require an account?</h3>
              <p>
                No account means no data collection. We don't need to store anything about you. Just visit, generate, and go. Privacy by design.
              </p>

              <h3>Can I use SecureGen on my phone?</h3>
              <p>
                Yes! SecureGen works on any device with a web browser: phones, tablets, computers, even smart TVs with browsers.
              </p>

              <h3>Is there a limit to how many passwords I can generate?</h3>
              <p>
                No limit. Generate as many passwords as you need. SecureGen will generate passwords for all 100+ accounts you might have.
              </p>

              <h3>Can I download SecureGen for offline use?</h3>
              <p>
                SecureGen works offline! Since it's client-side only, you can use it without an internet connection once the page loads.
              </p>

              <h3>Is there anything better than the free version?</h3>
              <p>
                No. The "free" version is the complete version. All features are included. We don't have a limited free version - we just have SecureGen, completely free.
              </p>
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Explore Other SecureGen Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/strong-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Strong Password Generator</h3>
                <p className="text-muted-foreground mb-4">Create unbreakable passwords with maximum entropy and 16+ character lengths.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Create stronger <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
              
              <Link
                href="/secure-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Secure Password Generator</h3>
                <p className="text-muted-foreground mb-4">Bank-grade security with cryptographic protection for your most important accounts.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Get bank-grade security <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/random-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Random Password Generator</h3>
                <p className="text-muted-foreground mb-4">Truly random passwords with zero predictability using cryptographic entropy.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Get random passwords <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/best-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Best Password Generator</h3>
                <p className="text-muted-foreground mb-4">Why SecureGen stands out: compare features and security with other password generators.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Compare features <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Start Generating Free Passwords Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                No signup, no payment, no limits. Just click and generate strong passwords instantly.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Heart className="h-5 w-5" />
                Open Free Generator
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
