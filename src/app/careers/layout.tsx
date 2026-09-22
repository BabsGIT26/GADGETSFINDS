import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Gadgets Finds — Join Our Tech Journalism Team',
  description: 'Join Gadgets Finds and help shape the future of tech journalism. Explore open positions in editorial, technical, marketing, and operations.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/careers'
  },
  openGraph: {
    title: 'Careers at Gadgets Finds',
    description: 'Join our team of passionate tech enthusiasts and help shape tech journalism.',
    url: 'https://www.gadgets-finds.com/careers',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_142fa928a-1770670098681.png",
      width: 1200,
      height: 630,
      alt: 'Careers at Gadgets Finds'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Careers at Gadgets Finds',
    description: 'Join our team of passionate tech enthusiasts and help shape tech journalism.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function CareersLayout({ children }: {children: React.ReactNode;}) {
  return <>{children}</>;
}