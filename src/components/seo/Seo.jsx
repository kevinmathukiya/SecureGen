import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Seo = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema
}) => {
  const siteName = 'SecureGen';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = window.location.origin;
  const url = canonicalUrl ? canonicalUrl : window.location.href;
  const image = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.png`; // Assuming an og-image exists or fallback

  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url} />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD Schema */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
