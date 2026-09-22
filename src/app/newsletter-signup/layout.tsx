import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter Signup — Stay Ahead with Gadgets Finds',
  description: 'Subscribe to Gadgets Finds newsletters for daily tech news, weekly deep dives, product alerts, and exclusive CES coverage delivered to your inbox.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/newsletter-signup'
  },
  openGraph: {
    title: 'Newsletter Signup — Gadgets Finds',
    description: 'Join 50,000+ tech enthusiasts receiving personalized insights and breaking news.',
    url: 'https://www.gadgets-finds.com/newsletter-signup',
    type: 'website',
    images: [
    {
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9c9c673-1765273095536.png",
      width: 1200,
      height: 630,
      alt: 'Newsletter Signup'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Newsletter Signup — Gadgets Finds',
    description: 'Join 50,000+ tech enthusiasts receiving personalized insights and breaking news.',
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
  }
};

export default function NewsletterSignupLayout({ children }: {children: React.ReactNode;}) {
  return <>{children}</>;
}