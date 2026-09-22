import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Gadgets Finds Data Protection',
  description: 'Learn how Gadgets Finds collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights.',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1123a7243-1764783240184.png",
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
    images: ['https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png']
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
    'We collect information you provide directly to us when you create an account, subscribe to our newsletter, participate in interactive features, or communicate with us. This may include your name, email address, and any other information you choose to provide.',
    'We automatically collect certain information about your device when you use our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our website through cookies and similar technologies.']

  },
  {
    title: 'How We Use Your Information',
    content: [
    'We use the information we collect to provide, maintain, and improve our services, including to deliver personalized content and recommendations based on your interests and browsing history.',
    'We may use your information to communicate with you about products, services, offers, promotions, and events, and provide news and information we think will interest you. We also use your information to monitor and analyze trends, usage, and activities in connection with our services.']

  },
  {
    title: 'Information Sharing and Disclosure',
    content: [
    'We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
    'We may disclose information if we believe disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements.']

  },
  {
    title: 'Cookies and Tracking Technologies',
    content: [
    'We use cookies, web beacons, and other tracking technologies to collect information about your browsing activities and to distinguish you from other users of our website. This helps us provide you with a personalized experience and allows us to improve our services.',
    'You can control cookies through your browser settings and other tools. However, if you block or reject cookies, some features of our website may not function properly.']

  },
  {
    title: 'Data Security',
    content: [
    'We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems or your information.']

  },
  {
    title: 'Your Rights and Choices',
    content: [
    'You may update, correct, or delete your account information at any time by logging into your account or contacting us. You may opt out of receiving promotional communications from us by following the instructions in those communications.',
    'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal information, or to object to or restrict certain processing of your information.']

  },
  {
    title: 'Children\'s Privacy',
    content: [
    'Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.']

  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
    'We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the effective date of the changes. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.']

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
            href="/homepage"
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
            Last Updated: March 24, 2026
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