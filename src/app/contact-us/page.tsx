'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
  {
    icon:
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>,

    title: 'Twitter/X',
    description: 'Follow us for quick updates',
    contact: '@Gadgets_finds',
    action: 'https://x.com/Gadgets_finds'
  },
  {
    icon:
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>,

    title: 'Pinterest',
    description: 'Discover curated tech collections',
    contact: '@best_gadgets_finds',
    action: 'https://www.pinterest.com/best_gadgets_finds/'
  },
  {
    icon: '📧',
    title: 'Email Us',
    description: 'General inquiries and support',
    contact: 'info@gadgets-finds.com',
    action: 'mailto:info@gadgets-finds.com'
  },
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Speak with our team directly',
    contact: '+1 229 850 8834',
    action: 'tel:+12298508834'
  }];


  const faqs = [
  {
    question: 'How can I submit a product for review?',
    answer: 'Please email us at info@gadgets-finds.com with product details and press materials.'
  },
  {
    question: 'Do you accept guest contributions?',
    answer: 'Yes! We welcome tech writers and industry experts. Send your pitch to our editorial team.'
  },
  {
    question: 'How do I report a technical issue?',
    answer: 'Use the contact form below with "Technical Issue" as the subject, and describe the problem in detail.'
  },
  {
    question: 'Can I advertise on Gadgets Finds?',
    answer: 'For advertising and partnership opportunities, please reach out via email with your proposal.'
  }];


  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl pt-28 md:pt-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) =>
          <a
            key={index}
            href={method.action}
            target={method.action.startsWith('http') ? '_blank' : undefined}
            rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-brand-primary transition-all group">
            
              <div className="text-4xl mb-3 text-brand-text-primary group-hover:text-brand-primary transition-colors">
                {typeof method.icon === 'string' ? method.icon : method.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-brand-text-secondary text-sm mb-2">{method.description}</p>
              <p className="text-brand-primary font-semibold text-sm">{method.contact}</p>
            </a>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Send Us a Message</h2>

            {submitted &&
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">✅ Message sent successfully!</p>
                <p className="text-brand-text-secondary text-sm mt-1">
                  We'll get back to you within 24-48 hours.
                </p>
              </div>
            }

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-brand-text-primary font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Your full name" />
                
              </div>

              <div>
                <label className="block text-brand-text-primary font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="your.email@example.com" />
                
              </div>

              <div>
                <label className="block text-brand-text-primary font-semibold mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors">
                  
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="review">Product Review Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical">Technical Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-brand-text-primary font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..." />
                
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-lg transition-colors">
                
                Send Message
              </button>

              <p className="text-xs text-brand-text-secondary text-center">
                By submitting this form, you agree to our{' '}
                <Link href="/privacy-policy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) =>
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-bold text-brand-text-primary mb-2">{faq.question}</h3>
                  <p className="text-brand-text-secondary text-sm">{faq.answer}</p>
                </div>
              )}
            </div>

            {/* Business Info */}
            <div className="mt-8 bg-gradient-to-r from-brand-primary/10 to-purple-500/10 p-6 rounded-xl border border-brand-primary/30">
              <h3 className="text-lg font-bold text-brand-text-primary mb-3">Business Information</h3>
              <div className="space-y-2 text-brand-text-secondary text-sm">
                <p>
                  <strong className="text-brand-text-primary">Company:</strong> Best Gadgets Finds LLC
                </p>
                <p>
                  <strong className="text-brand-text-primary">Website:</strong> www.gadgets-finds.com
                </p>
                <p>
                  <strong className="text-brand-text-primary">Email:</strong> info@gadgets-finds.com
                </p>
                <p>
                  <strong className="text-brand-text-primary">Phone:</strong> +1 229 850 8834
                </p>
                <p>
                  <strong className="text-brand-text-primary">Address:</strong> 2105 Vista Oeste NW Suite E #3494, Albuquerque, NM 87120
                </p>
                <p>
                  <strong className="text-brand-text-primary">Response Time:</strong> 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>);

};

export default ContactUs;