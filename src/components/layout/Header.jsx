'use client'

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Logo } from './Logo';
import { Button } from '../ui/button';
import { Moon, Sun, Menu, Github } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavLinks = () => (
    <>
      <Link href="/" className="transition-colors hover:text-primary">Home</Link>
      <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
      <Link href="/about" className="transition-colors hover:text-primary">About</Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Navigation Tray */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 text-lg font-semibold">
                  <Link href="/" className="px-2 py-1 transition-colors hover:text-primary">Home</Link>
                  <Link href="/blog" className="px-2 py-1 transition-colors hover:text-primary">Blog</Link>
                  <Link href="/about" className="px-2 py-1 transition-colors hover:text-primary">About</Link>
                  <hr className="my-4" />
                </nav>
                <div className="absolute bottom-10 left-6">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    SecureGen v0.1.0
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
