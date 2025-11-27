import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Shield, Lock, Zap, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/seo/Seo';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SecureGen Password Generator",
    "url": "https://securegen.app",
    "description": "Generate strong, secure passwords instantly with our free online tool. Client-side generation ensures your data never leaves your browser.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": "Customizable length, Uppercase, Lowercase, Numbers, Symbols, Strength meter"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo 
        title="Free Secure Password Generator"
        description="Generate strong, uncrackable passwords instantly. 100% free, secure, and runs entirely in your browser. Customize length and characters for maximum security."
        keywords="password generator, secure password, random password, strong password, password security, online password tool"
        canonicalUrl="https://securegen.app/"
        schema={schema}
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 mb-12">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm text-muted-foreground animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Secure & Client-side Generation
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl animate-fade-in [animation-delay:100ms]">
                Generate <span className="text-primary">Secure Passwords</span> Instantly
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in [animation-delay:200ms]">
                Create strong, uncrackable passwords to keep your accounts safe. 
                100% free, secure, and runs entirely in your browser.
              </p>
            </div>

            <div className="animate-fade-in [animation-delay:300ms]">
              <PasswordGenerator />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Use SecureGen?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We prioritize your security with a tool that's easy to use and technically robust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Bank-Grade Security</h3>
                <p className="text-muted-foreground">
                  Uses cryptographically strong random number generation for maximum entropy.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">100% Private</h3>
                <p className="text-muted-foreground">
                  Passwords are generated locally in your browser. Nothing is ever sent to our servers.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border shadow-sm transition-all hover:shadow-md">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Instant & Easy</h3>
                <p className="text-muted-foreground">
                  One-click generation and copy. Customizable settings to meet any website's requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Block - Rewritten for Natural Flow */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-6">Why Strong Passwords Are Your Best Defense</h2>
              <p>
                We live in a world where our digital lives are just as important as our physical ones. From banking apps to social media, everything is protected by a password. Unfortunately, many of us still rely on simple, easy-to-remember passwords like "123456" or "password123". While these might be convenient, they are also the first keys hackers try when attempting to breach an account.
              </p>
              <p>
                A truly strong password acts as a formidable barrier. It's not just about length; it's about unpredictability. By using a random mix of uppercase and lowercase letters, numbers, and special symbols, you create a combination that is exponentially harder for automated hacking tools to crack.
              </p>
              
              <h3 className="font-heading text-2xl font-semibold mt-8 mb-4">How to Keep Your Accounts Safe</h3>
              <p>
                Creating a secure password is just the first step. Here are a few simple habits that can significantly boost your online security:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Go Long:</strong> Aim for at least 12 characters. The longer the password, the more secure it is.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Mix It Up:</strong> Don't rely on words found in a dictionary. Use a chaotic mix of characters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>One Site, One Password:</strong> Never reuse passwords. If one site gets breached, your other accounts remain safe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Use a Password Manager:</strong> You don't need to memorize complex passwords. Let a trusted password manager handle them for you.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
