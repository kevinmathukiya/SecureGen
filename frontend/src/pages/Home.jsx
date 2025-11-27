import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PasswordGenerator } from '@/components/password/PasswordGenerator';
import { Shield, Lock, Zap, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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

        {/* SEO Content Block */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2 className="font-heading text-3xl font-bold mb-6">The Importance of Strong Passwords</h2>
              <p>
                In today's digital age, your password is the first line of defense against cyber threats. 
                Weak passwords like "123456" or "password" are the leading cause of data breaches. 
                Using a random password generator ensures your credentials are unpredictable and resistant to brute-force attacks.
              </p>
              
              <h3 className="font-heading text-2xl font-semibold mt-8 mb-4">Best Practices for Password Security</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Length Matters:</strong> Use at least 12 characters. 16+ is recommended.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Mix it Up:</strong> Combine uppercase, lowercase, numbers, and symbols.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Unique Every Time:</strong> Never reuse passwords across different sites.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Use a Manager:</strong> Store your complex passwords in a trusted password manager.</span>
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
