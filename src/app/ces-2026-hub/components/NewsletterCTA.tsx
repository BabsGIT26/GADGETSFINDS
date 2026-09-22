'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterCTA() {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-brand-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={32} variant="solid" className="text-white" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Stay Ahead for CES 2027
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get early access to CES 2027 coverage, exclusive tech news, and behind-the-scenes content delivered straight to your inbox
          </p>

          {isSubscribed ? (
            <div className="bg-success/20 border border-success/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Icon name="CheckCircleIcon" size={24} variant="solid" />
                <span className="font-semibold text-lg">Successfully subscribed!</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 50,000+ tech enthusiasts. Unsubscribe anytime.
              </p>
            </form>
          )}

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4,500+</div>
              <div className="text-white/80 text-sm">Exhibitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-white/80 text-sm">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">138K+</div>
              <div className="text-white/80 text-sm">Attendees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}