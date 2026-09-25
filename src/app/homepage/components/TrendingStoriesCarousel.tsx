'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  author: string;
  readTime: string;
  trending: boolean;
  link?: string;
}

const TrendingStoriesCarousel = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

    const stories: Story[] = [
  {
    id: 1,
    title: 'Apple Vision Pro 2: Development Paused — Apple Pivots to Smart Glasses',
    excerpt: 'Reports from multiple credible sources indicate Apple has paused or significantly delayed a full Vision Pro successor, shifting focus to a lighter smart glasses product instead.',
    category: 'Breaking News',
    image: "/assets/images/image-1769356825932.png",
    alt: 'Apple Vision Pro headset with advanced eye-tracking sensors',
    author: 'Gadgets Finds',
    readTime: '5 min read',
    trending: true,
    link: '/apple-vision-pro-2-article'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S26 Ultra Review: AI Camera Powerhouse',
    excerpt: 'Announced February 25, 2026 and available from March 11, 2026 — the Galaxy S26 Ultra delivers Samsung\'s most advanced AI-powered photography and flagship performance to date.',
    category: 'Breaking News',
    image: "/assets/images/samsung_galaxy_s_twenty_six_ultra.png",
    alt: 'Samsung Galaxy S26 Ultra smartphone with advanced quad camera system',
    author: 'Gadgets Finds',
    readTime: '5 min read',
    trending: true,
    link: '/samsung-galaxy-s26-ultra-article'
  },
  {
    id: 3,
    title: 'iPhone 16 Pro vs Samsung Galaxy S26 Ultra: Ultimate Camera Showdown',
    excerpt: 'How iPhone 16 Pro and Galaxy S26 Ultra compare on paper for photography.',
    category: 'Reviews',
    image: "/assets/images/kPbKZWKxGPs5QqMwS3Y44D-1769358289194.jpg",
    alt: 'iPhone and Samsung Galaxy smartphones side by side comparison',
    author: 'Gadgets Finds',
    readTime: '8 min read',
    trending: true,
    link: '/i-phone-16-pro-vs-samsung-comparison-article'
  },
  {
    id: 4,
    title: 'NVIDIA RTX 5090 Benchmarks: Gaming Performance Breakthrough',
    excerpt: 'Public benchmarks and reporting on RTX 5090 versus RTX 4090 in ray-traced games.',
    category: 'Hardware',
    image: "/assets/images/nvidia_rtx_5090_hero.png",
    alt: 'NVIDIA GeForce RTX 5090 Blackwell graphics card with triple-fan cooler',
    author: 'Gadgets Finds',
    readTime: '6 min read',
    trending: true,
    link: '/nvidia-rtx-6090-ti-article'
  },
  {
    id: 5,
    title: 'Tesla Optimus Gen 3: Specs, AI5 Chip & What You Need to Know',
    excerpt: 'Tesla\'s third-generation Optimus robot features 22 DOF tendon-driven hands, AI5 chip, and Grok AI — targeting $20K–$30K at scale, with factory deployment underway and consumer availability targeted for late 2027.',
    category: 'AI & Robotics',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13de748df-1772891531864.png",
    alt: 'Advanced humanoid robot with white chassis and modern design',
    author: 'Gadgets Finds',
    readTime: '7 min read',
    trending: true,
    link: '/tesla-optimus-gen-3-article'
  },
  {
    id: 6,
    title: 'MacBook Pro M4: Apple Silicon Reaches New Performance Heights',
    excerpt: 'MacBook Pro M4 specs and who should buy the 14-inch model.',
    category: 'Laptops',
    image: "/assets/images/macbook_pro_m_four_v2.png",
    alt: 'MacBook Pro M4 with space gray aluminum body and glowing Apple logo on wooden desk',
    author: 'Gadgets Finds',
    readTime: '10 min read',
    trending: true,
    link: '/macbook-pro-m4-article'
  }];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-96 md:h-[500px]">
          <AppImage
            src={stories[0].image}
            alt={stories[0].alt}
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-3 py-1 bg-brand-accent text-brand-dark text-xs font-bold rounded-full mb-3">
              {stories[0].category}
            </span>
            <h3 className="text-3xl font-bold text-white mb-3">{stories[0].title}</h3>
            <p className="text-brand-text-secondary mb-4 line-clamp-2">{stories[0].excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-brand-text-secondary">
              <span>{stories[0].author}</span>
              <span>•</span>
              <span>{stories[0].readTime}</span>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-96 md:h-[500px]">
        <AppImage
          src={stories[currentIndex].image}
          alt={stories[currentIndex].alt}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <Icon name="FireIcon" size={16} variant="solid" className="text-white" />
          <span className="text-white text-xs font-bold">Trending</span>
        </div>

        {/* Category badge moved to top-left to avoid masking by navigation arrows */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-brand-accent text-brand-dark text-xs font-bold rounded-full">
            {stories[currentIndex].category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 line-clamp-2 px-10 md:px-0">
            {stories[currentIndex].title}
          </h3>
          <p className="text-brand-text-secondary mb-3 md:mb-4 line-clamp-2 text-sm md:text-base">
            {stories[currentIndex].excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-brand-text-secondary">
              <span>{stories[currentIndex].author}</span>
              <span>•</span>
              <span>{stories[currentIndex].readTime}</span>
            </div>
            <Link
              href={stories[currentIndex].link || '/live-news-feed'}
              className="inline-flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-brand-primary text-white rounded-lg font-semibold text-xs md:text-sm hover:bg-brand-primary/90 transition-colors">

              <span>Read More</span>
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-2 md:hidden">
            {stories.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-brand-primary w-8' : 'bg-white/50 w-2'}`
              }
              aria-label={`Go to story ${index + 1}`}>
            </button>
            )}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 min-w-[40px] min-h-[40px]"
          aria-label="Previous story">

          <Icon name="ChevronLeftIcon" size={20} variant="outline" className="text-white md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10 min-w-[40px] min-h-[40px]"
          aria-label="Next story">

          <Icon name="ChevronRightIcon" size={20} variant="outline" className="text-white md:w-6 md:h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center space-x-2 z-10">
          {stories.map((_, index) =>
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 min-w-[32px] min-h-[32px] flex items-center justify-center ${
            index === currentIndex ? 'bg-brand-primary w-8' : 'bg-white/50'}`
            }
            aria-label={`Go to story ${index + 1}`}>
          </button>
          )}
        </div>
      </div>
    </div>);

};

export default TrendingStoriesCarousel;
