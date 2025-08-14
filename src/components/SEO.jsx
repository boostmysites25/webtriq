import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  author = 'Webtriq Technologies',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const baseUrl = 'https://webtriq.com'; // Replace with your actual domain
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/logo.png`;
  
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index', 'follow');
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webtriq Technologies",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Your trusted partner for Web Development, App Development, AI Solutions, IoT, Blockchain, and Game Development.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Begur Hobli",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560076",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918219912716",
      "contactType": "customer service",
      "email": "connect@webtriq.com"
    },
    "sameAs": [
      "https://www.instagram.com/webtriq_technologies"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Webtriq Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@webtriq" />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="React" />
      <meta name="theme-color" content="#000000" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/fav.jpg" />
      <link rel="apple-touch-icon" href="/fav.jpg" />
    </Helmet>
  );
};

export default SEO;
