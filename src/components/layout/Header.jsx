import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Github } from 'lucide-react';

export const Header = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-primary">Generator</Link>
          <Link to="/about" className="transition-colors hover:text-primary">About</Link>
          <Link to="/privacy" className="transition-colors hover:text-primary">Privacy</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
            <Github className="h-4 w-4" />
            <span>Star on GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
