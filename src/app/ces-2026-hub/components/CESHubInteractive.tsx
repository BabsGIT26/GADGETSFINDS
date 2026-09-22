'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import LiveStreamSection from './LiveStreamSection';
import EventSchedule from './EventSchedule';
import ProductLaunches from './ProductLaunches';
import ExclusiveInterviews from './ExclusiveInterviews';
import NewsletterCTA from './NewsletterCTA';

export default function CESHubInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [eventDate] = useState("January 6–9, 2026");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading CES 2026 Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection eventDate={eventDate} />
      <LiveStreamSection />
      <EventSchedule />
      <ProductLaunches />
      <ExclusiveInterviews />
      <NewsletterCTA />
    </>
  );
}