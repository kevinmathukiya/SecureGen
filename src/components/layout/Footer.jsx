import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Generate strong, secure passwords instantly. Your security is our priority. No data is ever stored.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">Password Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Standard Generator</Link></li>
              <li><Link href="/strong-password-generator" className="hover:text-primary transition-colors">Strong Generator</Link></li>
              <li><Link href="/random-password-generator" className="hover:text-primary transition-colors">Random Generator</Link></li>
              <li><Link href="/secure-password-generator" className="hover:text-primary transition-colors">Secure Generator</Link></li>
              <li><Link href="/free-password-generator" className="hover:text-primary transition-colors">Free Generator</Link></li>
              <li><Link href="/password-strength-checker" className="hover:text-primary transition-colors">Strength Checker</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Security Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About SecureGen</Link></li>
              <li><a href="https://github.com/kevinmathukiya/SecureGen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Source Code</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SecureGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
