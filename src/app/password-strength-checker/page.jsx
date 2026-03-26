import { generateMetadata as genMeta } from '@/lib/seo-metadata';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = genMeta({
  title: 'Password Strength Checker - Test Your Security | SecureGen',
  description: 'How strong is your password? Check your password strength instantly and get tips to improve it. 100% private analysis.',
  keywords: ['password strength checker', 'password analyzer', 'password strength test', 'check password strength', 'password security analyzer', 'strong password checker', 'password strength meter'],
  url: '/password-strength-checker',
  ogImageAlt: 'Password Strength Checker - Analyze Your Password Security',
});

export default function PasswordStrengthChecker() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SecureGen Password Strength Checker",
    "description": "Check password strength and get security analysis. Completely private client-side password analyzer.",
    "url": "https://passwordgens.online/password-strength-checker",
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
                    <BreadcrumbPage>Password Strength Checker</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Instant Security Analysis
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Password Strength <span className="text-primary">Checker</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Analyze your password's security strength instantly. Get detailed feedback on what makes passwords weak or strong, and tips to improve your security.
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
              <h2>How to Evaluate Password Strength</h2>
              <p>
                Password strength depends on multiple factors working together. A weak password might fail in one or more categories, while a strong password excels across all dimensions.
              </p>

              <h2>Key Factors in Password Strength</h2>
              <h3>1. Length</h3>
              <ul>
                <li><strong>Weak:</strong> Less than 8 characters</li>
                <li><strong>Fair:</strong> 8-12 characters</li>
                <li><strong>Good:</strong> 12-16 characters</li>
                <li><strong>Strong:</strong> 16+ characters</li>
                <li><strong>Excellent:</strong> 24+ characters</li>
              </ul>

              <h3>2. Character Diversity</h3>
              <ul>
                <li><strong>Very weak:</strong> Only lowercase letters</li>
                <li><strong>Weak:</strong> Numbers or symbols added</li>
                <li><strong>Medium:</strong> Two types of characters (upper + lower, or lower + numbers)</li>
                <li><strong>Strong:</strong> Three types (upper + lower + numbers)</li>
                <li><strong>Excellent:</strong> All four types (upper + lower + numbers + symbols)</li>
              </ul>

              <h3>3. Predictability</h3>
              <ul>
                <li><strong>Very predictable:</strong> Common words, birthdays, pet names</li>
                <li><strong>Predictable:</strong> Dictionary words with number substitutions</li>
                <li><strong>Random:</strong> No apparent pattern or logic</li>
                <li><strong>Cryptographically random:</strong> Generated by secure randomness source</li>
              </ul>

              <h3>4. Uniqueness</h3>
              <ul>
                <li><strong>Weak:</strong> Same password used across multiple accounts</li>
                <li><strong>Good:</strong> Slight variations of the same base password</li>
                <li><strong>Strong:</strong> Completely unique password per account</li>
              </ul>

              <h2>Password Strength Examples</h2>
              <h3>Weak Passwords (Avoid These!)</h3>
              <ul>
                <li>password123</li>
                <li>qwerty</li>
                <li>123456</li>
                <li>abc123</li>
                <li>birthdate (any personal date)</li>
                <li>PetName2024</li>
              </ul>
              <p>
                These passwords fail because they use common words, predictable patterns, and/or lack character diversity.
              </p>

              <h3>Good Passwords (Better, But Not Perfect)</h3>
              <ul>
                <li>BlueMountain42!</li>
                <li>Coffee@Shop#2024</li>
                <li>Sunshine_Forest_99</li>
              </ul>
              <p>
                These passwords have good length and character diversity, but may contain recognizable words or patterns.
              </p>

              <h3>Strong Passwords (Excellent!)</h3>
              <ul>
                <li>K9$mPq2@vL#Rx8Hn</li>
                <li>7x!B4dC&8Q$pN2M</li>
                <li>aZ4!kL9@mX2#oP5$</li>
              </ul>
              <p>
                These passwords are truly random, use all character types, and have no discernible patterns.
              </p>

              <h2>Why Entropy Matters</h2>
              <p>
                Entropy measures how many possible passwords exist in your password space. More entropy means more security.
              </p>
              <ul>
                <li><strong>4-character password:</strong> ~6 million possibilities (seconds to crack)</li>
                <li><strong>8-character password:</strong> ~218 trillion possibilities (seconds to crack)</li>
                <li><strong>12-character password:</strong> ~6 quadrillion possibilities (minutes to hours)</li>
                <li><strong>16-character password:</strong> ~200 quintillion possibilities (centuries to crack)</li>
                <li><strong>20-character password:</strong> ~6.7 sextillion possibilities (millions of years)</li>
              </ul>

              <h2>Improving Weak Passwords</h2>
              <h3>Problem: Too Short</h3>
              <p><strong>Solution:</strong> Add more characters. Aim for minimum 16 characters. Use SecureGen to create longer passwords.</p>

              <h3>Problem: Only Letters</h3>
              <p><strong>Solution:</strong> Add numbers and symbols. Include uppercase, lowercase, numbers, and special characters.</p>

              <h3>Problem: Predictable (Dictionary Words)</h3>
              <p><strong>Solution:</strong> Use random generation. Let SecureGen create completely random passwords with no words.</p>

              <h3>Problem: Same Password Everywhere</h3>
              <p><strong>Solution:</strong> Generate unique passwords per account. Use secureGen + password manager like Bitwarden.</p>

              <h2>Frequently Asked Questions</h2>
              <h3>How long does it take to crack passwords?</h3>
              <p>
                It depends on password strength and hacking method. A typical brute-force attack at 1 billion guesses/second would take:
              </p>
              <ul>
                <li>8-character password: ~1 second</li>
                <li>12-character password: ~1 hour</li>
                <li>16-character password: ~100,000 years</li>
                <li>20-character password: ~3 billion years</li>
              </ul>

              <h3>Is a strong password enough to protect my account?</h3>
              <p>
                A strong password is essential but not sufficient. Also use:
              </p>
              <ul>
                <li>Two-factor authentication (2FA)</li>
                <li>Unique password per account</li>
                <li>Password manager to store safely</li>
                <li>Regular security monitoring</li>
              </ul>

              <h3>Should I use a passphrase instead of random passwords?</h3>
              <p>
                Passphrases (like "correct-horse-battery-staple") can be strong if they're long enough (25+ characters) and truly random word selection. For most people, random passwords via SecureGen are more practical and equally secure.
              </p>

              <h3>How often should I change my password?</h3>
              <p>
                If your password is strong and hasn't been compromised, you don't need to change it regularly. Change immediately if: account shows suspicious activity, the service had a breach, or you suspect compromise.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Generate Your Strongest Password Yet
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Move beyond weak passwords. SecureGen creates passwords so strong they're cryptographically secure for any purpose.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <ShieldCheck className="h-5 w-5" />
                Generate Strong Password
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
