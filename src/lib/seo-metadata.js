import { siteConfig } from '@/config/site';

const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.name;
const DEFAULT_IMAGE = '/logo.svg';
const TWITTER_HANDLE = '@securegen';
const LOGO_URL = siteConfig.branding.logo;
const FAVICON_URL = siteConfig.branding.favicon;

// Base metadata shared across all pages
export const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ultimate Password Generator | Secure & Random Passwords | SecureGen',
    template: '%s | SecureGen',
  },
  description: 'Generate highly secure, random passwords instantly. Customize length, symbols, and numbers. 100% client-side for maximum privacy and modern security standards.',
keywords: [
  'password generator',
  'secure password',
  'random string generator',
  'modern password security',
  'secure password generator',
  'random password generator',
  'strong password generator',
  'online password generator',
  'cryptographic password generator',
  'client-side password generator',
  'free password generator',
  'generate strong passwords',
  'privacy focused password tool',
  'secure password creator',
  'secure password generator online',
  'secure password creation',
  'secure pass gen',
  'password generator secure',
  'password generator free',
  'password generator online',
  'password generator strong',
  'password generator random',
  'secure passphrase generator',
  'cryptographically secure random password',
  'password strength tester',
  'random password generator online',
  'free password generator',
],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'SecureGen - Free Secure Password Generator',
    description: 'Generate strong, secure passwords instantly. 100% free, secure, and runs entirely in your browser.',
    images: [
      {
        url: `${SITE_URL}${DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'SecureGen - Free Secure Password Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecureGen - Free Secure Password Generator',
    description: 'Generate strong, secure passwords instantly. 100% free, secure, and runs entirely in your browser.',
    creator: TWITTER_HANDLE,
    images: [`${SITE_URL}${DEFAULT_IMAGE}`],
  },
  category: 'Security',
  classification: 'Utility',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: FAVICON_URL, type: 'image/svg+xml' },
      { url: LOGO_URL, type: 'image/svg+xml', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
   alternates: {
    canonical: SITE_URL,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
  },
};

/**
 * Generate page-specific metadata by merging with base metadata
 * @param {Object} pageMetadata - Page-specific metadata overrides
 * @returns {Object} Merged metadata object
 */
export function generateMetadata(pageMetadata = {}) {
  const {
    title,
    description,
    keywords = [],
    url,
    ogImage,
    ogImageAlt,
    robots,
  } = pageMetadata;

  // Build full URL
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  // Merge keywords
  const mergedKeywords = [
    ...baseMetadata.keywords,
    ...keywords,
  ];

  // Build OpenGraph image
  const ogImages = ogImage ? [
    {
      url: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
      width: 1200,
      height: 630,
      alt: ogImageAlt || title || baseMetadata.openGraph.title,
    },
  ] : baseMetadata.openGraph.images;

  return {
    ...baseMetadata,
    ...(title && { title }),
    ...(description && { description }),
    keywords: mergedKeywords,
    openGraph: {
      ...baseMetadata.openGraph,
      ...(title && { title }),
      ...(description && { description }),
      ...(url && { url: fullUrl }),
      images: ogImages,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(title && { title }),
      ...(description && { description }),
      images: ogImages.map(img => img.url),
    },
    alternates: {
      canonical: fullUrl,
    },
    ...(robots && { robots }),
  };
}

// Pre-configured metadata for common pages
export const pageMetadata = {
  home: {
    title: 'Ultimate Password Generator | Secure & Random Passwords | SecureGen',
    description: 'Generate highly secure, random passwords instantly. Customize length, symbols, and numbers. 100% client-side for maximum privacy and modern security standards.',
    keywords: ['password generator', 'strong password generator', 'random password generator', 'free password generator', 'online password generator', 'secure password maker', 'cryptographic password generator', 'password length customizer', 'password strength checker', 'password generator online free'],
    url: '/',
    ogImageAlt: 'SecureGen - Ultimate Secure Password Generator | Modern Security Standards',
  },
  
  about: {
    title: 'About SecureGen | Our Mission for Password Security & Privacy',
    description: 'Discover SecureGen\'s mission: making the internet safer, one password at a time. Learn how we built a powerful yet simple, privacy-first password generator. Open-source, transparent, and trusted by security-conscious users worldwide.',
    keywords: ['about securegen', 'password security mission', 'privacy-first password tool', 'open source password generator', 'secure password creator', 'password generation technology', 'client-side password security', 'transparent password tool', 'cybersecurity innovation'],
    url: '/about',
    ogImageAlt: 'About SecureGen - Our Password Security Mission',
  },

  blog: {
    title: 'Password Security Blog | Expert Tips, Guides & Tutorials | SecureGen',
    description: 'Expert insights on password security, best practices, and practical guides. Learn password management strategies, multi-factor authentication, phishing prevention, and how to create unbreakable passwords. Updated weekly with actionable security tips.',
    keywords: ['password security blog', 'password tips', 'security tutorials', 'password best practices', 'cybersecurity blog', 'password management guide', 'authentication security', 'phishing prevention', 'password security guide', 'password management tips'],
    url: '/blog',
    ogImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=630&fit=crop&crop=center',
    ogImageAlt: 'SecureGen Password Security Blog - Expert Tips & Guides',
  },

  privacy: {
    title: 'Privacy Policy | SecureGen - Zero Data Collection Guarantee',
    description: 'Our Privacy Policy: SecureGen prioritizes your privacy with 100% client-side password generation. No personal data collection, no tracking cookies, no server storage. Review our commitment to zero-data privacy and transparent data practices.',
    keywords: ['privacy policy', 'data privacy', 'zero data collection', 'client-side privacy', 'no tracking', 'password privacy guarantee', 'data security policy', 'user privacy protection', 'transparent privacy policy'],
    url: '/privacy',
    ogImageAlt: 'SecureGen Privacy Policy - Zero Data Collection',
    robots: {
      index: true,
      follow: true,
    },
  },

  terms: {
    title: 'Terms of Service | SecureGen Password Generator',
    description: 'SecureGen Terms of Service. Review our usage terms, legal disclaimers, and service agreement. Free, open-source password generator provided as-is. Understand your rights and our responsibilities.',
    keywords: ['terms of service', 'usage terms', 'legal disclaimer', 'password generator agreement', 'service terms', 'user agreement', 'acceptable use policy', 'liability disclaimer'],
    url: '/terms',
    ogImageAlt: 'SecureGen Terms of Service',
    robots: {
      index: true,
      follow: true,
    },
  },
  
  cookies: {
    title: 'Cookie Policy | SecureGen - How We Use Cookies',
    description: 'Learn about how SecureGen uses cookies and local storage to provide a better, more secure experience. Transparent disclosure of analytics and preference tracking.',
    keywords: ['cookie policy', 'securegen cookies', 'local storage usage', 'analytics cookies', 'privacy settings', 'browser storage', 'cookie disclosure'],
    url: '/cookies',
    ogImageAlt: 'SecureGen Cookie Policy',
  },
};

