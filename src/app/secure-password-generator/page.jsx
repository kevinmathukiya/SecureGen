import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { FAQSection } from '@/components/ui/FAQSection';
import { Lock, ArrowRight } from 'lucide-react';
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
  securePasswordFAQs,
  passwordGeneratorHowToSteps,
} from '@/lib/schema-generators';

export const metadata = genMeta({
  title: 'Secure Password Generator | Bank-Grade Security Passwords | SecureGen',
  description: 'Create secure passwords with bank-grade cryptographic security. SecureGen generates fortress-level passwords protected by Web Crypto API. 100% client-side, no data collection.',
  keywords: ['secure password generator', 'secure password maker', 'bank grade password', 'cryptographically secure password', 'encrypted password generator', 'secure authentication password'],
  url: '/secure-password-generator',
  ogImageAlt: 'Secure Password Generator - Bank-Grade Cryptographic Security',
});

export default function SecurePasswordGenerator() {
  const appSchema = generateSoftwareApplicationSchema(
    'SecureGen Secure Password Generator',
    'Generate secure passwords with bank-grade cryptographic security and zero data collection.',
    'https://passwordgens.online/secure-password-generator'
  );

  const faqSchema = generateFAQSchema(securePasswordFAQs);

  const howtoSchema = generateHowToSchema(
    'How to Generate Bank-Grade Secure Passwords',
    'Step-by-step guide to generate cryptographically secure passwords using SecureGen',
    passwordGeneratorHowToSteps
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Password Generators', url: '/password-tools' },
    { name: 'Secure Password Generator', url: '/secure-password-generator' }
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
                    <BreadcrumbPage>Secure Password Generator</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Bank-Grade Security
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Secure Password <span className="text-primary">Generator</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Generate fortress-level secure passwords with bank-grade cryptographic protection. SecureGen uses the Web Crypto API to create passwords so secure they're suitable for protecting financial accounts, cryptocurrency wallets, and critical infrastructure.
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
              <h2>What Makes a Password Secure?</h2>
              <p>
                True security means comprehensive protection against all known attack vectors. A mathematically secure password proactively resists:
              </p>
              
              <h3>Brute-Force & Dictionary Attacks</h3>
              <p>By enforcing extreme length and eliminating known dictionary words, SecureGen renders automated guessing algorithms useless. It would take billions of years to guess a bank-grade password.</p>
              
              <h3>Rainbow Table & Pre-computation</h3>
              <p>Using true cryptographic randomness ensures your password's hash has never been pre-calculated or stored in any hacker database ("rainbow table").</p>
              
              <h3>Credential Stuffing</h3>
              <p>Generating a unique, highly secure password for every individual service prevents a breach on one website from compromising your other accounts.</p>

              <h2>Bank-Grade Security Standards</h2>
              <p>
                Financial institutions use specific password requirements to ensure security:
              </p>
              <ul>
                <li><strong>Minimum 12 characters,</strong> preferably 16 or more</li>
                <li><strong>Mixed character types:</strong> uppercase, lowercase, numbers, symbols</li>
                <li><strong>Cryptographic randomness:</strong> Generated using secure entropy sources</li>
                <li><strong>No patterns or dictionary words:</strong> Completely random generation</li>
                <li><strong>Client-side generation:</strong> Never transmitted or stored</li>
              </ul>
              <p>
                SecureGen meets all bank-grade security standards.
              </p>

              <h2>Why Client-Side Generation Is Secure</h2>
              <p>
                The fundamental rule of password security is simple: never transmit the password over a network. SecureGen architecture executes 100% within your local browser environment:
              </p>
              
              <h3>Zero Transmission Risk</h3>
              <p>Because the password never leaves your device, it is completely immune to Man-in-the-Middle (MitM) attacks or server-side interception.</p>
              
              <h3>No Storage or Logging</h3>
              <p>The generated password exists temporarily in your device's memory and clipboard. We maintain no databases, logs, or records of what you generated.</p>
              
              <h3>End-to-End Trustless Security</h3>
              <p>You do not need to inherently "trust" our servers, because our servers never see, handle, or process the passwords you generate.</p>

              <h2>Cryptographic Security Principles</h2>
              <p>
                SecureGen applies cryptographic security principles:
              </p>
              <ul>
                <li><strong>Entropy:</strong> Using the Web Crypto API provides maximum entropy</li>
                <li><strong>Non-determinism:</strong> Each password is completely independent and unpredictable</li>
                <li><strong>Cryptographic strength:</strong> Suitable for protecting sensitive information</li>
                <li><strong>Security standards:</strong> Based on NIST and industry best practices</li>
              </ul>

              <h2>Security for Different Account Types</h2>
              <h3>Financial Accounts (Banks, Investment, Cryptocurrency)</h3>
              <p>Generate 20-32 character passwords with all character types. These should be your longest, most complex passwords.</p>

              <h3>Email Accounts</h3>
              <p>Generate at least 16 characters. Your email is the recovery key for all other accounts, so protect it heavily.</p>

              <h3>Social Media & Regular Sites</h3>
              <p>Minimum 16 characters recommended. Many sites are targets for data breaches, so use strong, unique passwords everywhere.</p>


        <FAQSection 
          faqs={securePasswordFAQs}
          heading="Frequently Asked Questions About Secure Password Generation"
        />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Protect Your Accounts with Secure Passwords
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Generate bank-grade secure passwords instantly. No signup, no tracking, 100% private.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Lock className="h-5 w-5" />
                Generate Secure Password
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
