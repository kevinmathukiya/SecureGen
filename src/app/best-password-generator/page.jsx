import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Zap, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Best Password Generator | Free, Secure & Private | SecureGen',
  description: 'SecureGen is the best free password generator: 100% client-side, open-source, no signup required, fully customizable. Compare features and see why trusted for password security.',
  keywords: ['best password generator', 'password generator comparison', 'secure password generator', 'best free password generator', 'password tool review', 'password generator features'],
  url: '/best-password-generator',
  ogImageAlt: 'Best Password Generator - SecureGen Features Comparison',
});

export default function BestPasswordGenerator() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SecureGen - Best Password Generator",
    "description": "The best free, private, and secure password generator. Open-source, client-side, no signup.",
    "url": "https://passwordgens.online/best-password-generator",
    "applicationCategory": "UtilityApplication",
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
                Trusted & Recommended
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Best Password <span className="text-primary">Generator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                SecureGen is the best password generator for one reason: it prioritizes YOUR security above everything else. No tracking, no ads, no premium limits—just powerful password generation.
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
              <h2>What Makes the Best Password Generator?</h2>
              <p>
                A truly great password generator should be:
              </p>
              <ul>
                <li><strong>Secure:</strong> Using cryptographic randomness suitable for security</li>
                <li><strong>Private:</strong> Client-side only, no server transmission of passwords</li>
                <li><strong>Transparent:</strong> Open-source code available for inspection</li>
                <li><strong>Simple:</strong> Easy to use without complex configuration</li>
                <li><strong>Free:</strong> No hidden costs or premium restrictions</li>
              </ul>

              <h2>Why SecureGen Is the Best Choice</h2>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-6 my-6">
                <h3 className="mt-0 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Security First</span>
                </h3>
                <p className="mb-0">Uses Web Crypto API for cryptographically secure password generation. Suitable for banking, cryptocurrency, and sensitive systems.</p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6 my-6">
                <h3 className="mt-0 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>100% Private</span>
                </h3>
                <p className="mb-0">All password generation happens in your browser. Nothing leaves your device. No servers = no data breaches.</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-lg p-6 my-6">
                <h3 className="mt-0 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Open Source</span>
                </h3>
                <p className="mb-0">Code is publicly available on GitHub. Anyone can inspect it for security vulnerabilities or malicious code.</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-6 my-6">
                <h3 className="mt-0 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>No Sign-up Required</span>
                </h3>
                <p className="mb-0">Start generating immediately. No account creation, no email verification, no personal data collection.</p>
              </div>

              <h2>Feature Comparison: SecureGen vs Others</h2>
              <table className="w-full my-6">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3">Feature</th>
                    <th className="text-center p-3">SecureGen</th>
                    <th className="text-center p-3">Online Tool A</th>
                    <th className="text-center p-3">Online Tool B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Cryptographically Secure</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">? Unknown</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Client-side Only</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✗ No</td>
                    <td className="text-center p-3">✗ No</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Open Source</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✗ No</td>
                    <td className="text-center p-3">✗ No</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">No Sign-up Required</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✓ Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Completely Free</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">$ Freemium</td>
                    <td className="text-center p-3">$ Premium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">No Ads or Tracking</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">Has Ads</td>
                    <td className="text-center p-3">Tracking</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Mobile Friendly</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✓ Yes</td>
                  </tr>
                  <tr>
                    <td className="p-3">Works Offline</td>
                    <td className="text-center p-3">✓ Yes</td>
                    <td className="text-center p-3">✗ No</td>
                    <td className="text-center p-3">✗ No</td>
                  </tr>
                </tbody>
              </table>

              <h2>Key Advantages of Using SecureGen</h2>
              <h3>Advantage #1: True Privacy</h3>
              <p>
                Unlike other online password generators, SecureGen never transmits your password to a server. Client-side generation means complete privacy—your password exists only on your device.
              </p>

              <h3>Advantage #2: Auditable Security</h3>
              <p>
                SecureGen is open-source. Security researchers and professionals can inspect the code, verify it's secure, and report any vulnerabilities. This transparency is something paid tools rarely offer.
              </p>

              <h3>Advantage #3: Absolutely Free</h3>
              <p>
                No freemium model. No premium features. No upgrade nags. Everything is included at no cost. This is uncommon in the password generator space.
              </p>

              <h3>Advantage #4: Maximum Customization</h3>
              <p>
                Adjust password length (4-64 characters) and select exactly which character types to include. Perfect for meeting any website's specific password requirements.
              </p>

              <h3>Advantage #5: Offline Capability</h3>
              <p>
                SecureGen works offline once loaded. Generate passwords without internet connection—critical for security-conscious users.
              </p>

              <h2>Frequently Asked Questions</h2>
              <h3>Is SecureGen better than password managers?</h3>
              <p>
                SecureGen and password managers serve different purposes: SecureGen generates passwords, password managers store them. Use both together for complete security.
              </p>

              <h3>Can I trust SecureGen?</h3>
              <p>
                SecureGen uses standard Web Crypto APIs, is open-source (auditable), doesn't transmit data, and has no tracking. The code is available on GitHub for independent verification.
              </p>

              <h3>Why is SecureGen better than enterprise password generators?</h3>
              <p>
                Enterprise tools are optimized for organizational needs. SecureGen is optimized for individual privacy and security. No compromise on either front.
              </p>

              <h3>What if I need a password generator on my phone?</h3>
              <p>
                SecureGen works on all devices with web browsers—phones, tablets, computers. Mobile-optimized and works offline too.
              </p>

              <h3>Is it really free with no catches?</h3>
              <p>
                Yes, completely free with no catches, no ads, no tracking, no premium version. Open-source and community-supported.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Experience the Best Password Generator
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Try SecureGen now. No signup, no limits, no compromise on security.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Zap className="h-5 w-5" />
                Use Best Generator
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
