import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Github, Twitter, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/40 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 sm:col-span-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              SecureGen is the ultimate tool for generating cryptographically strong, 100% private passwords.
              Designed for 2026 security standards, ensuring your digital identity remains uncrackable.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kevinmathukiya/SecureGen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background border transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                aria-label="Security Policy"
              >
                <Shield className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading font-bold text-base mb-6 tracking-tight">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors inline-block py-1">Security Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors inline-block py-1">About SecureGen</Link></li>
              <li><a href="https://github.com/kevinmathukiya/SecureGen/issues" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-block py-1">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-heading font-bold text-base mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors inline-block py-1">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors inline-block py-1">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors inline-block py-1">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-medium">
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} SecureGen. Built with security-first principles.
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              All Systems Operational
            </span>
            <span className="hidden sm:inline">v0.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
