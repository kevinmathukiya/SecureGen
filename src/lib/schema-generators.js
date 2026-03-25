/**
 * Reusable schema generators for SEO
 * Generates FAQ, HowTo, Breadcrumb, and other structured data
 */

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateHowToSchema = (title, description, steps) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      ...(step.image && { "image": step.image })
    }))
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://passwordgens.online${crumb.url}`
    }))
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SecureGen",
    "url": "https://passwordgens.online",
    "logo": "https://passwordgens.online/logo.svg",
    "description": "Free, secure, privacy-focused password generator",
    "sameAs": [
      "https://github.com/kevinmathukiya/SecureGen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Support",
      "url": "https://passwordgens.online"
    }
  };
};

export const generateSoftwareApplicationSchema = (name, description, url) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Any",
    "requirements": "Web browser with JavaScript support"
  };
};

// Common password generator FAQs
export const passwordGeneratorFAQs = [
  {
    question: "How does the password generator work?",
    answer: "The SecureGen password generator uses cryptographically secure randomization from the Web Crypto API to create truly random passwords. It generates passwords instantly in your browser without ever sending them to a server or storing them anywhere."
  },
  {
    question: "Are my passwords saved or sent anywhere?",
    answer: "No. All password generation happens entirely in your browser on your device. Passwords are never stored, logged, tracked, or sent to any server. Your privacy and security are guaranteed."
  },
  {
    question: "What makes a password strong?",
    answer: "A strong password has: sufficient length (minimum 12 characters, preferably 16+), mixed character types (uppercase, lowercase, numbers, symbols), true randomness with no patterns, and uniqueness (different for each account)."
  },
  {
    question: "Can I customize the password settings?",
    answer: "Yes. You can customize password length (4-64 characters) and choose which character types to include: uppercase letters, lowercase letters, numbers, and special symbols. This allows you to meet specific password requirements."
  },
  {
    question: "Is SecureGen really free?",
    answer: "Yes, SecureGen is 100% free forever. There are no premium features, no subscription costs, no hidden charges, and no trial limitations. Generate as many passwords as you need at no cost."
  },
  {
    question: "Should I use SecureGen with a password manager?",
    answer: "Yes. SecureGen generates strong passwords securely. Once generated, store them in a password manager like Bitwarden, 1Password, or KeePass for both security and convenience. Use both tools together for optimal security."
  },
  {
    question: "Is this tool safe to use?",
    answer: "Yes. SecureGen uses industry-standard Web Crypto API for randomization, runs entirely client-side with no server communication, is open-source and auditable on GitHub, and collects zero data. It's one of the most secure password generators available."
  },
  {
    question: "Why is randomness better than creating my own password?",
    answer: "Humans unconsciously create patterns in passwords (birthdays, pet names, favorite words). These patterns are predictable and exploitable. SecureGen's cryptographic randomness eliminates human bias completely, creating mathematically superior passwords."
  }
];

// HowTo steps for using password generator
export const passwordGeneratorHowToSteps = [
  {
    name: "Visit SecureGen",
    description: "No installation, registration, or signin needed. Just visit the site and start generating passwords immediately."
  },
  {
    name: "Customize Your Preferences",
    description: "Choose password length (4-64 characters) and select which character types you want: uppercase letters, lowercase letters, numbers, and special symbols."
  },
  {
    name: "Generate Password",
    description: "Click the Generate button or let the page auto-generate. Your new password appears instantly with a strength meter showing how secure it is."
  },
  {
    name: "Copy to Clipboard",
    description: "Click the Copy button to copy your password to your clipboard. You'll see a confirmation message that the password was copied."
  },
  {
    name: "Use Your Password",
    description: "Paste the password into your account creation form or password manager. Each generated password is unique and cryptographically secure."
  },
  {
    name: "Generate More If Needed",
    description: "Generate as many passwords as you need for different accounts. Each one is independently random and secure."
  }
];
