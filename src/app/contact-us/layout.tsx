import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Gadgets Finds — Get in Touch with Our Team',
  description: 'Have questions or partnership inquiries? Contact Gadgets Finds via email, phone, or social media. We respond within 24-48 hours.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/contact-us'
  },
  openGraph: {
    title: 'Contact Gadgets Finds',
    description: 'Reach out to our team for inquiries, feedback, or partnerships.',
    url: 'https://www.gadgets-finds.com/contact-us',
    type: 'website',
    images: [
    {
      url: "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d",
      width: 1200,
      height: 630,
      alt: 'Contact Gadgets Finds'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Contact Gadgets Finds',
    description: 'Reach out to our team for inquiries, feedback, or partnerships.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function ContactUsLayout({ children }: {children: React.ReactNode;}) {
  return <>{children}</>;
}