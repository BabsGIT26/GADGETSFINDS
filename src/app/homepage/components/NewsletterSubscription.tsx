'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSubscription = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setIsSubmitting(false);
      }, 1000);
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="EnvelopeIcon" size={32} variant="outline" className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Tech Curve</h2>
          <p className="text-white/90 mb-8">
            Get exclusive insights, breaking news, and expert analysis delivered to your inbox every
            week
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-dark text-white rounded-lg font-semibold hover:bg-brand-dark/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to Gadgets Finds  !</h2>
          <p className="text-white/90 mb-6">
            Thank you for subscribing. Check your inbox for a confirmation email and get ready for
            exclusive tech insights.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="px-6 py-3 bg-white text-foreground rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 md:p-8 lg:p-12 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <Icon name="EnvelopeIcon" size={24} variant="outline" className="text-white md:w-8 md:h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 px-2">Stay Ahead of the Tech Curve</h2>
        <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 px-4">
          Get exclusive insights, breaking news, and expert analysis delivered to your inbox every
          week
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
            className="flex-1 px-4 py-2.5 md:py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 md:px-6 py-2.5 md:py-3 bg-brand-dark text-white rounded-lg font-semibold hover:bg-brand-dark/90 transition-colors whitespace-nowrap flex items-center justify-center space-x-2 text-sm md:text-base min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <Icon name="ArrowRightIcon" size={18} variant="outline" className="md:w-5 md:h-5" />
              </>
            )}
          </button>
        </form>
        <p className="text-white/70 text-xs md:text-sm mt-3 md:mt-4 px-4">
          Join our subscribers. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscription;