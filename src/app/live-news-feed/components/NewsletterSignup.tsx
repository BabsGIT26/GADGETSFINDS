'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setIsSubmitting(false);
        setTimeout(() => setIsSubscribed(false), 3000);
      }, 1000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-brand-secondary to-brand-trust rounded-lg shadow-lg p-6 text-white mb-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <Icon name="EnvelopeIcon" size={24} variant="outline" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Never Miss a Beat</h3>
          <p className="text-sm opacity-90 mb-4">
            Get breaking tech news delivered to your inbox. Join 50,000+ subscribers.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center gap-2 bg-success/20 border border-success/30 rounded-lg px-4 py-3 min-h-[44px]">
              <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
              <span className="text-sm font-medium">Successfully subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 md:px-6 py-2 bg-white text-brand-secondary rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-brand-secondary border-t-transparent rounded-full animate-spin"></div>
                    <span className="hidden sm:inline">Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;