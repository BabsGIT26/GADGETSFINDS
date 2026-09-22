import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Gadgets Finds — Tech News & Reviews',
  description: 'Discover the best trending gadgets with honest reviews, tech news, and expert recommendations from Best Gadgets Finds LLC.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com'
  },
  openGraph: {
    title: 'Gadgets Finds — Tech News & Reviews',
    description: 'Discover the best trending gadgets with honest reviews, tech news, and expert recommendations.',
    url: 'https://www.gadgets-finds.com',
    siteName: 'Gadgets Finds',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_142fa928a-1770670098681.png",
      width: 1200,
      height: 630,
      alt: 'Gadgets Finds — Tech News & Reviews'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Gadgets Finds — Tech News & Reviews',
    description: 'Discover the best trending gadgets with honest reviews, tech news, and expert recommendations.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  },
  icons: {
    icon: [
    { url: '/favicon.ico', type: 'image/x-icon' }]

  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gadgets Finds',
  legalName: 'Best Gadgets Finds LLC',
  url: 'https://www.gadgets-finds.com',
  logo: 'https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png',
  email: 'info@gadgets-finds.com',
  telephone: '+1-229-850-8834',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2105 Vista Oeste NW Suite E #3494',
    addressLocality: 'Albuquerque',
    addressRegion: 'NM',
    postalCode: '87120',
    addressCountry: 'US'
  },
  sameAs: [
  'https://x.com/Gadgets_finds',
  'https://www.pinterest.com/best_gadgets_finds/'],

  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@gadgets-finds.com',
    telephone: '+1-229-850-8834',
    contactType: 'customer support',
    availableLanguage: 'English'
  }
};

export default function RootLayout({
  children

}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png"
          as="image"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
</head>
      <body>{children}
</body>
    </html>);

}