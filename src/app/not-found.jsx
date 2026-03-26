import Link from 'next/link';
import { ArrowLeft, Home, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | SecureGen',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 p-6 bg-red-50 dark:bg-red-950/20 rounded-full">
        <ShieldAlert className="w-16 h-16 text-red-500" />
      </div>
      
      <h1 className="text-6xl font-bold mb-4 font-heading text-gray-900 dark:text-white">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Target Not Located</h2>
      
      <p className="text-lg text-muted-foreground mb-10 max-w-md">
        The requested secure resource could not be found. It may have been moved, deleted, or never existed in our cryptographic vault.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 gap-2"
        >
          <Home className="w-4 h-4" />
          Return to Dashboard
        </Link>
        <Link 
          href="/blog"
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Read Security Blog
        </Link>
      </div>
    </div>
  );
}
