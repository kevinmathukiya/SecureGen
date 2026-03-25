import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { FAQSection } from '@/components/ui/FAQSection';
import { Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  generateSoftwareApplicationSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateBreadcrumbSchema,
  passwordGeneratorFAQs,
  passwordGeneratorHowToSteps,
} from '@/lib/schema-generators';

export const metadata = genMeta({
  title: 'Strong Password Generator | Create Unbreakable Passwords | SecureGen',
  description: 'Generate truly strong passwords with SecureGen. Create unbreakable passwords with maximum entropy, mixed character sets, and cryptographic security. 16+ character passwords for maximum protection.',
  keywords: ['strong password generator', 'strong password maker', 'create strong password', 'unbreakable password', 'high entropy password', 'cryptographic password generator', 'secure strong password', 'powerful password tool'],
  url: '/strong-password-generator',
  ogImageAlt: 'Strong Password Generator - Create Unbreakable Passwords',
});

export default function StrongPasswordGenerator() {
  const appSchema = generateSoftwareApplicationSchema(
    'SecureGen Strong Password Generator',
    'Create strong, unbreakable passwords with maximum entropy and cryptographic security. 16+ character passwords for maximum protection.',
    'https://passwordgens.online/strong-password-generator'
  );

  const faqSchema = generateFAQSchema(passwordGeneratorFAQs);

  const howtoSchema = generateHowToSchema(
    'How to Generate a Strong Password Online',
    'Step-by-step guide to creating secure, unbreakable passwords using SecureGen',
    passwordGeneratorHowToSteps
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Password Generators', url: '/password-tools' },
    { name: 'Strong Password Generator', url: '/strong-password-generator' }
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Maximum Security & Entropy
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Strong Password <span className="text-primary">Generator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Create truly strong, unbreakable passwords with maximum entropy. SecureGen generates fortress-level passwords with 16+ characters, mixed character sets, and cryptographic randomness. 100% free and runs entirely in your browser.
              </p>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <PasswordGenerator />
            </div>

            {/* Trust Badges */}
            <div className="mt-16">
              <TrustBadges variant="compact" />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2>What Is a Strong Password?</h2>
              <p>
                A strong password is practically impossible for attackers to guess or crack. It combines length, randomness, and character diversity to maximize security. Strong passwords contain:
              </p>
              <ul>
                <li><strong>Minimum 16 characters</strong> - longer passwords exponentially increase crack time</li>
                <li><strong>Uppercase letters (A-Z)</strong> - adds diversity to character set</li>
                <li><strong>Lowercase letters (a-z)</strong> - further increases possible combinations</li>
                <li><strong>Numbers (0-9)</strong> - adds numeric entropy to the mix</li>
                <li><strong>Special symbols (!@#$%)</strong> - maximum character variety</li>
                <li><strong>Complete randomness</strong> - no patterns, dictionary words, or personal info</li>
              </ul>

              <h2>Why Strong Passwords Matter for Security</h2>
              <p>
                Your passwords are the gates to your digital life. Weak passwords put your email, banking, social media, and personal documents at risk. A single weak password can compromise your entire digital identity if that account is breached.
              </p>
              <p>
                Strong passwords protect against:
              </p>
              <ul>
                <li><strong>Brute-force attacks</strong> - trying every possible combination</li>
                <li><strong>Dictionary attacks</strong> - using common words and phrases</li>
                <li><strong>Credential stuffing</strong> - using leaked passwords from other sites</li>
                <li><strong>Rainbow table attacks</strong> - using pre-computed password hashes</li>
                <li><strong>Social engineering</strong> - passwords can't be guessed if truly random</li>
              </ul>

              <h2>How SecureGen Creates Unbreakable Passwords</h2>
              <p>
                SecureGen uses cryptographic randomness from your browser's secure APIs to generate passwords that are mathematically impossible to predict:
              </p>
              <ul>
                <li><strong>Cryptographic entropy:</strong> Uses Web Crypto API for true randomness, not pseudo-random generation</li>
                <li><strong>Client-side generation:</strong> Your passwords are never sent to servers, ensuring zero data exposure</li>
                <li><strong>Customizable length:</strong> Choose 4-64 characters depending on security needs</li>
                <li><strong>Mixed character sets:</strong> Combine uppercase, lowercase, numbers, and symbols for maximum entropy</li>
                <li><strong>Instant availability:</strong> Generate unlimited strong passwords instantly</li>
              </ul>

              <h2>Strong Password Length Requirements by Account Type</h2>
              <p>
                Different accounts require different password strengths. Use SecureGen to create appropriately strong passwords:
              </p>
              <ul>
                <li><strong>Email accounts (16+ characters):</strong> Your email is the key to password recovery for all other accounts. Use maximum length.</li>
                <li><strong>Banking & Finance (20+ characters):</strong> Financial accounts need extra protection. Use 20-32 characters.</li>
                <li><strong>Social Media (16 characters):</strong> Standard 16-character passwords are sufficient, but longer is always better.</li>
                <li><strong>Regular websites (12-16 characters):</strong> Most sites support 12+ character passwords for reasonable protection.</li>
                <li><strong>Critical systems (32+ characters):</strong> Maximum security accounts like cryptocurrency wallets need 32+ character passwords.</li>
              </ul>

              <h2>Best Practices for Strong Passwords</h2>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6 my-6">
                <h3 className="mt-0">How to Use SecureGen Strong Passwords</h3>
                <ul className="mb-0">
                  <li>Generate a new password and copy it immediately</li>
                  <li>Paste it into the password field or your password manager</li>
                  <li>Store it in your password manager (1Password, Bitwarden, LastPass, etc.)</li>
                  <li>Never reuse the same strong password across multiple accounts</li>
                  <li>Create truly unique passwords for each account</li>
                  <li>Use 2FA/MFA for added security on critical accounts</li>
                </ul>
              </div>


        <FAQSection 
          faqs={passwordGeneratorFAQs}
          heading="Frequently Asked Questions About Strong Passwords"
        />
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Related Password Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/random-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Random Password Generator</h3>
                <p className="text-muted-foreground mb-4">Generate truly random passwords using cryptographic entropy. Perfect for unpredictable password creation.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
              
              <Link
                href="/secure-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Secure Password Generator</h3>
                <p className="text-muted-foreground mb-4">Bank-grade security passwords with cryptographic protection. Ideal for financial and sensitive accounts.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/password-strength-checker"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Password Strength Checker</h3>
                <p className="text-muted-foreground mb-4">Analyze how strong your passwords are. Get detailed feedback and improvement tips.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Check strength <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/free-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Free Online Password Generator</h3>
                <p className="text-muted-foreground mb-4">100% free, no sign-up required. Generate unlimited passwords with zero restrictions.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Get free generator <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Generate Your First Strong Password
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create a new unbreakable password instantly. No signup required, completely free, 100% private.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Shield className="h-5 w-5" />
                Go to Password Generator
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
