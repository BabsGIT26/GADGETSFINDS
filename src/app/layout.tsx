import Script from "next/script";
import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Gadgets Finds — Daily gadget deals",
  description: "Daily gadget deals and tech drops. Compare prices, read reviews, and find discounted laptops, phones, and gear on Gadgets Finds.",
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
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Gadgets Finds",
      },
    ],

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Gadgets Finds — Tech News & Reviews',
    description: 'Discover the best trending gadgets with honest reviews, tech news, and expert recommendations.',
        images: ["/og-home.png"],
  },
    icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: "/apple-touch-icon.png",
  },
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
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gadgets Finds",
  alternateName: ["GadgetsFinds", "gadgets-finds.com"],
  url: "https://www.gadgets-finds.com/",
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
                
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
</head>
            <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XVZBC35EG6"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XVZBC35EG6');
          `}
        </Script>
      </body>
    </html>);

}
