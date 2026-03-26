'use client'

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Logo } from './Logo';
import { Button } from '../ui/button';
import { Moon, Sun, Github, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary outline-none">
              Tools <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer w-full">Standard Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/strong-password-generator" className="cursor-pointer w-full">Strong Password Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/random-password-generator" className="cursor-pointer w-full">Random Password Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/secure-password-generator" className="cursor-pointer w-full">Secure Password Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/free-password-generator" className="cursor-pointer w-full">Free Password Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/password-strength-checker" className="cursor-pointer w-full">Password Strength Checker</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};
