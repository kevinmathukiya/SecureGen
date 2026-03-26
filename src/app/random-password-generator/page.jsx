import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { FAQSection } from '@/components/ui/FAQSection';
import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  generateSoftwareApplicationSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateBreadcrumbSchema,
  randomPasswordFAQs,
  passwordGeneratorHowToSteps,
} from '@/lib/schema-generators';

export const metadata = genMeta({
  title: 'Random Password Generator - Create Secure Passwords | SecureGen',
  description: 'Need a random password? Use our free generator to create cryptographically strong passwords in seconds. No data stored, total privacy guaranteed.',
  keywords: ['random password generator', 'random password maker', 'generate random password', 'truly random password', 'secure random password', 'cryptographically random password', 'random password creator'],
  url: '/random-password-generator',
  ogImageAlt: 'Random Password Generator - Truly Random Authentication Passwords',
});

export default function RandomPasswordGenerator() {
  const appSchema = generateSoftwareApplicationSchema(
    'SecureGen Random Password Generator',
    'Generate truly random passwords using cryptographic entropy for maximum security.',
    'https://passwordgens.online/random-password-generator'
  );

  const faqSchema = generateFAQSchema(randomPasswordFAQs);

  const howtoSchema = generateHowToSchema(
    'How to Generate Truly Random Passwords',
    'Step-by-step guide to generate cryptographically random passwords using SecureGen',
    passwordGeneratorHowToSteps
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Password Generators', url: '/password-tools' },
    { name: 'Random Password Generator', url: '/random-password-generator' }
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
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/password-tools">Password Tools</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Random Password Generator</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Cryptographically Random
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Random Password <span className="text-primary">Generator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Generate truly random passwords with zero predictability. SecureGen uses cryptographic randomness from your browser's Web Crypto API to create passwords that are mathematically impossible to predict or guess.
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
              <h2>What Makes a Password Truly Random?</h2>
              <p>
                True randomness means no patterns, predictability, or human bias. A random password generator creates password characters in a completely unpredictable sequence. SecureGen generates passwords using Web Crypto API, which provides cryptographic randomness suitable for security applications.
              </p>

              <h2>Pseudo-Random vs Cryptographically Random</h2>
              <p>
                Not all random generators are equal. There are two main types of random generation used in software today:
              </p>
              
              <h3>Pseudo-Random Number Generators (PRNG)</h3>
              <p>These algorithms appear random but are mathematically predictable if an attacker discovers the initial "seed" value. They are generally <strong>NOT suitable</strong> for securing sensitive accounts.</p>
              
              <h3>Cryptographically Secure Randomness (CSPRNG)</h3>
              <p>This method utilizes high-quality entropy sources from the operating system (like system noise or hardware interrupts) to create values that are completely unpredictable. This is the <strong>ideal standard</strong> for generating passwords.</p>
              
              <p>
                SecureGen strictly utilizes cryptographically secure methodologies (specifically the Web Crypto API), ensuring your generated passwords remain resilient against modern threats.
              </p>

              <h2>How Randomness Prevents Password Attacks</h2>
              <p>
                Attackers exploit patterns. A truly random password has no patterns to exploit:
              </p>
              <ul>
                <li>Can't be guessed through pattern analysis</li>
                <li>Can't be cracked with dictionary attacks</li>
                <li>Impossible to predict even with knowledge of other passwords</li>
                <li>Resistant to all known password cracking techniques</li>
              </ul>

              <h2>The Importance of Password Randomness</h2>
              <p>
                Humans are terrible at creating random passwords. We unconsciously use patterns: birthdays, pet names, favorite words. SecureGen eliminates human bias completely by generating passwords from cryptographic entropy.
              </p>

              <h2>Customizing Your Random Password</h2>
              <p>
                While absolute randomness forms the foundation of a secure password, it must also align with the specific security policies of the website you are registering on. Use SecureGen's controls to customize your output:
              </p>
              
              <h3>Adjusting Length for Security</h3>
              <p>Longer passwords mathematically increase security exponentially. Always aim for a minimum of 16 characters for standard accounts, and 20+ for sensitive financial accounts.</p>
              
              <h3>Expanding Character Diversity</h3>
              <p>Toggle uppercase, lowercase, numbers, and symbols to maximize the "password space" (entropy) an attacker would need to guess.</p>
              
              <h3>Meeting Complexity Requirements</h3>
              <p>Many legacy systems mandate specific character combinations or restrict certain symbols. Instantly adapt your generated password to meet these exact compliance rules without sacrificing randomness.</p>


        <FAQSection 
          faqs={randomPasswordFAQs}
          heading="Frequently Asked Questions About Random Passwords"
        />
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Other SecureGen Password Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/strong-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Strong Password Generator</h3>
                <p className="text-muted-foreground mb-4">Create fortress-level strong passwords with 16+ character lengths.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
              
              <Link
                href="/secure-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Secure Password Generator</h3>
                <p className="text-muted-foreground mb-4">Bank-grade cryptographic protection for important accounts.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Get secure passwords <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/password-strength-checker"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Password Strength Checker</h3>
                <p className="text-muted-foreground mb-4">Analyze password strength and get security improvement tips.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Check strength <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>

              <Link
                href="/best-password-generator"
                className="p-6 rounded-lg border bg-background hover:shadow-lg hover:border-primary transition-all"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">Best Password Generator</h3>
                <p className="text-muted-foreground mb-4">Why SecureGen is trusted for password generation security.</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Compare <ArrowRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Generate Random Passwords Right Now
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create infinite random passwords instantly. Each one is truly random, completely unpredictable, and mathematically secure.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Zap className="h-5 w-5" />
                Go to Generator
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
