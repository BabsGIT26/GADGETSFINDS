import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gadgets Finds',
  description: 'What Gadgets Finds collects, the analytics and X pixel we use, how Amazon link clicks are tracked, cookies, and your choices.',
  metadataBase: new URL('https://www.gadgets-finds.com'),
  alternates: {
    canonical: 'https://www.gadgets-finds.com/privacy-policy'
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Understand how we protect your data and respect your privacy.',
    url: 'https://www.gadgets-finds.com/privacy-policy',
    type: 'website',
    images: [
    {
      url: "https://www.gadgets-finds.com/og-home.png",
      width: 1200,
      height: 630,
      alt: 'Privacy Policy'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gadgets_finds',
    creator: '@Gadgets_finds',
    title: 'Privacy Policy',
    description: 'Understand how we protect your data and respect your privacy.',
    images: ['https://www.gadgets-finds.com/og-home.png']
  }
};

interface SectionProps {
  title: string;
  content: string[];
}

const Section = ({ title, content }: SectionProps) =>
<section className="mb-8">
    <h2 className="text-2xl font-bold text-brand-text-primary mb-4">{title}</h2>
    {content.map((paragraph, index) =>
  <p key={index} className="text-brand-text-secondary mb-4 leading-relaxed">
        {paragraph}
      </p>
  )}
  </section>;


const PrivacyPolicyPage = () => {
  const sections = [
  {
    title: 'Information We Collect',
    content: [
    'Information you give us: if you post a comment, we store the name you type and your comment. If you contact us or join our newsletter, we keep the email address and anything you choose to send us.',
    'Information collected automatically: like most websites, our hosting provider (Vercel) and our analytics tools receive technical data when you visit, such as your browser type, device, pages viewed, referring page, and an approximate location derived from your IP address.']

  },
  {
    title: 'Analytics (Google Analytics 4)',
    content: [
    'We use Google Analytics 4 (measurement ID G-XVZBC35EG6) to understand which pages are read and which guides are useful. Google Analytics sets first-party cookies (such as _ga) and receives your IP address from your browser in order to work. Google states that GA4 does not log or store IP addresses. We do not send names, emails, or other personal data to Google Analytics.',
    'You can opt out with Google’s browser add-on at tools.google.com/dlpage/gaoptout, or by blocking cookies for this site.']

  },
  {
    title: 'Click Tracking on Amazon Links',
    content: [
    'Product buttons on this site go through our own link (/api/go) before sending you to Amazon. When you click one, we record an "amazon_click" event in Google Analytics with the page and the product link, so we know which recommendations people use. We do not see what you buy on Amazon.',
    'We do not send your IP address, email, phone number, or user agent to X (Twitter) or any other ad platform from our server. If you arrived from an ad on X, X adds its own click ID (twclid) to the link and its pixel stores it in a first-party cookie named _twclid. In that case only, our server tells X that the ad click led to an Amazon click, using that click ID and the page address without any query string. If you did not come from an X ad, nothing is sent to X from our server.']

  },
  {
    title: 'Advertising Pixel (X / Twitter)',
    content: [
    'We use the X (Twitter) website pixel (ID pwfa9) to measure whether our posts and ads on X bring visitors. The pixel runs in your browser, may set cookies, and sends X information such as the page you visited, your browser details, and your IP address as part of the normal web request. X’s use of this data is covered by the X Privacy Policy at x.com/privacy. You can limit it in your X account’s privacy settings or by blocking third-party cookies.']

  },
  {
    title: 'Amazon Associates and Third-Party Cookies',
    content: [
    'Gadgets Finds is a participant in the Amazon Services LLC Associates Program. When you follow a link to Amazon, Amazon may set its own cookies so the purchase can be credited to us. Those cookies are set by Amazon on amazon.com and are covered by Amazon’s privacy notice, not this policy. See our Affiliate Disclosure page for more on how we earn money.',
    'Embedded or linked third-party services (for example Google, X, Amazon, and Pinterest) may set their own cookies under their own policies.']

  },
  {
    title: 'Cookies and Local Storage',
    content: [
    'We use a small number of cookies and browser storage items: Google Analytics cookies (_ga and related), the X pixel cookie (_twclid and related, set only by X’s script), and local storage on your own device to remember your dark/light theme choice, which notifications you have read, and which comments you voted on. Local storage never leaves your device.',
    'You can delete or block cookies and local storage in your browser settings. The site will still work, but some preferences will not be remembered. See our Cookie Policy for more detail.']

  },
  {
    title: 'How We Use Your Information',
    content: [
    'We use this information to run and improve the site, to see which guides and products are useful, to measure whether our posts on X bring visitors, to display comments you choose to post, and to reply when you contact us.',
    'We do not sell your personal information, and we do not use it to build advertising profiles.']

  },
  {
    title: 'Information Sharing and Disclosure',
    content: [
    'We share information only with the service providers that run the site for us: Vercel (hosting), Supabase (comment storage), Google (analytics), and X (ad measurement, as described above). We may also disclose information if required by law or a valid legal process.']

  },
  {
    title: 'Data Retention and Security',
    content: [
    'Comments are kept until you ask us to remove them. Google Analytics data is kept for the retention period set in our Google Analytics account. We take reasonable measures to protect information, but no system is completely secure.']

  },
  {
    title: 'Your Rights and Choices',
    content: [
    'You can ask us to access, correct, or delete information you gave us, such as a comment or your email address, by writing to info@gadgets-finds.com. Depending on where you live (for example in California or the European Economic Area), you may have additional rights, including the right to object to analytics and advertising measurement.']

  },
  {
    title: 'Children\'s Privacy',
    content: [
    'Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete it.']

  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
    'We may update this Privacy Policy from time to time. The date at the top of this page shows the latest change.']

  },
  {
    title: 'Contact Us',
    content: [
    'If you have any questions about this Privacy Policy, please contact us at info@gadgets-finds.com or write to us at Best Gadgets Finds LLC, 2105 Vista Oeste NW Suite E #3494 Albuquerque, NM 87120.']

  }];


  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl pt-28 md:pt-32">
        <div className="mb-8">
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-primary-hover transition-colors inline-flex items-center mb-6">
            
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-text-secondary">
            Last Updated: November 22, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-text-secondary mb-8 text-lg">
            At Gadgets Finds, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully.
          </p>

          {sections.map((section, index) =>
          <Section key={index} title={section.title} content={section.content} />
          )}
        </div>
      </div>
      <Footer />
    </div>);

};

export default PrivacyPolicyPage;