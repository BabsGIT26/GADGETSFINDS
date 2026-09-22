'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl shadow-lg p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <Icon name="BellAlertIcon" size={32} variant="solid" />
        </div>

        <h3 className="text-2xl font-bold mb-2">Stay Ahead of the Curve</h3>
        <p className="text-white/90 mb-6">
          Get weekly trend alerts, expert predictions, and exclusive reports
          delivered to your inbox
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-brand-primary font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <Icon name="ArrowRightIcon" size={18} variant="outline" />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 py-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Icon name="CheckCircleIcon" size={24} variant="solid" />
            <span className="font-semibold">Successfully subscribed!</span>
          </div>
        )}

        <p className="text-xs text-white/70 mt-4">
          Join 50,000+ tech enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;