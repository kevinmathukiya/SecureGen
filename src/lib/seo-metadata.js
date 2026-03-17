/**
 * Common SEO metadata configuration for SecureGen
 * This file provides reusable metadata functions for all pages
 */

const SITE_URL = 'https://passwordgens.online';
const SITE_NAME = 'SecureGen';
const DEFAULT_IMAGE = '/logo.svg';
const TWITTER_HANDLE = '@securegen';
const LOGO_URL = '/logo.svg';
const FAVICON_URL = '/favicon.svg';

// Base metadata shared across all pages
export const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Secure Password Generator (4–64 Characters) – Free & Private | SecureGen',
    template: '%s | SecureGen',
  },
  description: 'Generate strong and secure passwords instantly. Choose length from 4–64 characters with letters, numbers, and symbols. 100% free and runs entirely in your browser.',
keywords: [
  'password generator',
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
    title: 'Strong Password Generator – Free, Secure & Random Password Tool',
    description: 'Generate strong, secure, and random passwords instantly. Free password generator with customizable length, symbols, and maximum security. 100% client-side, no data stored.',
    keywords: ['password strength', 'cryptographic password', 'generate password', 'online password generator', 'strong password online', 'password generator free'],
    url: '/',
  },
  
  about: {
    title: 'About Us | SecureGen',
    description: 'Learn about SecureGen\'s mission to make the internet safer with secure, client-side password generation. Privacy-first, open-source password generator.',
    keywords: ['about securegen', 'password security mission', 'secure password tool team', 'privacy-first password generator', 'open source password tool'],
    url: '/about',
    ogImageAlt: 'About SecureGen',
  },

  privacy: {
    title: 'Privacy Policy | SecureGen',
    description: 'Read our Privacy Policy. We prioritize your privacy with client-side generation and zero data collection. No tracking, no cookies, no data storage.',
    keywords: ['privacy policy', 'data privacy', 'secure password generator privacy', 'zero data collection', 'client-side privacy'],
    url: '/privacy',
    ogImageAlt: 'Privacy Policy | SecureGen',
    robots: {
      index: true,
      follow: true,
    },
  },

  terms: {
    title: 'Terms of Service | SecureGen',
    description: 'Review our Terms of Service regarding the use of the SecureGen password generator tool. Free, open-source, and provided as-is.',
    keywords: ['terms of service', 'usage terms', 'disclaimer', 'password generator terms', 'service agreement'],
    url: '/terms',
    ogImageAlt: 'Terms of Service | SecureGen',
    robots: {
      index: true,
      follow: true,
    },
  },
};

