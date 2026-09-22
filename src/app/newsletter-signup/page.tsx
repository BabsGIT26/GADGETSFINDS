'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/app/homepage/components/Footer';

interface NewsletterOption {
  id: string;
  title: string;
  description: string;
  frequency: string;
  icon: string;
}

interface Preference {
  id: string;
  label: string;
  checked: boolean;
}

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [selectedNewsletters, setSelectedNewsletters] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<Preference[]>([
  { id: 'smartphones', label: 'Smartphones & Mobile', checked: false },
  { id: 'laptops', label: 'Laptops & Computers', checked: false },
  { id: 'emerging', label: 'Emerging Tech & AI', checked: false },
  { id: 'analysis', label: 'Industry Analysis', checked: false }]
  );
  const [frequency, setFrequency] = useState('daily');
  const [submitted, setSubmitted] = useState(false);

  const newsletters: NewsletterOption[] = [
  {
    id: 'daily-pulse',
    title: 'Daily Tech Pulse',
    description: 'Breaking news and trending stories delivered every morning',
    frequency: 'Daily',
    icon: '⚡'
  },
  {
    id: 'weekly-dive',
    title: 'Weekly Deep Dive',
    description: 'Comprehensive analysis and in-depth reviews every Sunday',
    frequency: 'Weekly',
    icon: '📊'
  },
  {
    id: 'product-alerts',
    title: 'Product Launch Alerts',
    description: 'Early access notifications for new gadget releases',
    frequency: 'As it happens',
    icon: '🚀'
  },
  {
    id: 'ces-coverage',
    title: 'CES Exclusive Coverage',
    description: 'Special event coverage with behind-the-scenes insights',
    frequency: 'Event-based',
    icon: '🎪'
  }];


  const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Journalist',
    quote: 'The Daily Tech Pulse keeps me ahead of the curve. Essential reading for anyone in tech.',
    avatar: '👩‍💻'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager',
    quote: 'Weekly Deep Dive provides the analysis I need to make informed decisions.',
    avatar: '👨‍💼'
  },
  {
    name: 'Emily Watson',
    role: 'Early Adopter',
    quote: 'Product Launch Alerts ensure I never miss the latest gadget releases.',
    avatar: '🎯'
  }];


  const handleNewsletterToggle = (id: string) => {
    setSelectedNewsletters((prev) =>
    prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePreferenceToggle = (id: string) => {
    setPreferences((prev) =>
    prev.map((pref) => pref.id === id ? { ...pref, checked: !pref.checked } : pref)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedNewsletters.length > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSelectedNewsletters([]);
        setPreferences((prev) => prev.map((p) => ({ ...p, checked: false })));
        setFrequency('daily');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl pt-28 md:pt-32">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
            Stay Ahead of the Tech Curve
          </h1>
          <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Join <span className="text-brand-primary font-semibold">50,000+ tech enthusiasts</span> receiving
            personalized insights and breaking news
          </p>
        </div>

        {/* Success Message */}
        {submitted &&
        <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Welcome to Gadgets Finds!</h3>
            <p className="text-brand-text-secondary">Check your email for confirmation and your first newsletter.</p>
          </div>
        }

        {/* Newsletter Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Choose Your Newsletters</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {newsletters.map((newsletter) =>
            <button
              key={newsletter.id}
              onClick={() => handleNewsletterToggle(newsletter.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedNewsletters.includes(newsletter.id) ?
              'border-brand-primary bg-brand-primary/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'}`
              }>
              
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{newsletter.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-text-primary">{newsletter.title}</h3>
                      <span className="text-xs text-brand-text-secondary bg-slate-700 px-2 py-1 rounded">
                        {newsletter.frequency}
                      </span>
                    </div>
                    <p className="text-brand-text-secondary text-sm">{newsletter.description}</p>
                  </div>
                  <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  selectedNewsletters.includes(newsletter.id) ?
                  'border-brand-primary bg-brand-primary' : 'border-slate-600'}`
                  }>
                  
                    {selectedNewsletters.includes(newsletter.id) &&
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                  }
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="bg-slate-800/50 rounded-xl p-8 mb-12 border border-slate-700">
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Customize Your Experience</h2>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-brand-text-primary font-semibold mb-2">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-brand-text-primary focus:outline-none focus:border-brand-primary transition-colors" />
            
          </div>

          {/* Topic Preferences */}
          <div className="mb-6">
            <label className="block text-brand-text-primary font-semibold mb-3">Content Preferences</label>
            <div className="grid md:grid-cols-2 gap-3">
              {preferences.map((pref) =>
              <label
                key={pref.id}
                className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg cursor-pointer hover:bg-slate-900/70 transition-colors">
                
                  <input
                  type="checkbox"
                  checked={pref.checked}
                  onChange={() => handlePreferenceToggle(pref.id)}
                  className="w-5 h-5 accent-brand-primary" />
                
                  <span className="text-brand-text-secondary">{pref.label}</span>
                </label>
              )}
            </div>
          </div>

          {/* Frequency Selection */}
          <div className="mb-6">
            <label className="block text-brand-text-primary font-semibold mb-3">Delivery Frequency</label>
            <div className="flex gap-3">
              {['daily', 'weekly', 'monthly'].map((freq) =>
              <button
                key={freq}
                type="button"
                onClick={() => setFrequency(freq)}
                className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all ${
                frequency === freq ?
                'bg-brand-primary text-white' : 'bg-slate-900 text-brand-text-secondary hover:bg-slate-900/70'}`
                }>
                
                  {freq}
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!email || selectedNewsletters.length === 0}
            className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors">
            
            {selectedNewsletters.length === 0 ?
            'Select at least one newsletter' :
            `Subscribe to ${selectedNewsletters.length} Newsletter${selectedNewsletters.length > 1 ? 's' : ''}`}
          </button>

          <p className="text-xs text-brand-text-secondary text-center mt-4">
            By subscribing, you agree to our{' '}
            <Link href="/privacy-policy" className="text-brand-primary hover:underline">
              Privacy Policy
            </Link>
            . Unsubscribe anytime.
          </p>
        </form>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6 text-center">
            What Our Subscribers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) =>
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-brand-text-secondary mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-brand-text-primary font-semibold">{testimonial.name}</p>
                  <p className="text-brand-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-brand-primary/10 to-purple-500/10 rounded-xl p-8 border border-brand-primary/30">
          <h2 className="text-2xl font-bold text-brand-text-primary mb-6 text-center">
            Exclusive Subscriber Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">🎁</div>
              <div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-1">Early Access</h3>
                <p className="text-brand-text-secondary text-sm">
                  Get product reviews and announcements before they go public
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-1">Community Access</h3>
                <p className="text-brand-text-secondary text-sm">
                  Join exclusive discussions with fellow tech enthusiasts
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-1">Personalized Content</h3>
                <p className="text-brand-text-secondary text-sm">
                  Receive recommendations tailored to your interests
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-1">Referral Rewards</h3>
                <p className="text-brand-text-secondary text-sm">
                  Earn exclusive perks by inviting friends to subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>);

};

export default NewsletterSignup;