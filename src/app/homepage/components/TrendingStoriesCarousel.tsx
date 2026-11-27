'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { illustrationAlt } from '@/lib/illustrations';

type Story = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  author: string;
  readTime: string;
  link: string;
};

const STORIES: Story[] = [
  {
    id: 8,
    title: 'Black Friday Gaming PC Parts',
    excerpt: 'CPU, graphics card, board, memory, SSD, power supply, cooler, and case, with today\'s Amazon price and percent off.',
    category: 'Buying Guide',
    image: '/assets/illustrations/gpu.svg',
    alt: 'MSI RTX 3060 Ventus 2X graphics card',
    author: 'Gadgets Finds',
    readTime: '6 min read',
    link: '/black-friday-gaming-pc',
  },
  {
    id: 0,
    title: 'Black Friday Robot Vacuums',
    excerpt: 'Dock, mop station, or a robot you empty yourself. What each one is for before you open Amazon.',
    category: 'Buying Guide',
    image: '/assets/illustrations/vacuum.svg',
    alt: 'Roborock Qrevo 2 Pro robot vacuum and dock',
    author: 'Gadgets Finds',
    readTime: '6 min read',
    link: '/black-friday-robot-vacuums',
  },
  {
    id: 1,
    title: 'Black Friday Smartwatches',
    excerpt: 'Apple Watch, Garmin, WHOOP, or a budget GPS watch. Match it to the phone first.',
    category: 'Buying Guide',
    image: '/assets/illustrations/watch.svg',
    alt: 'Apple Watch SE 3 GPS 40mm',
    author: 'Gadgets Finds',
    readTime: '7 min read',
    link: '/black-friday-smartwatches',
  },
  {
    id: 2,
    title: 'Best Budget Robot Vacuums Under $300',
    excerpt: 'Lefant, eufy, and Roborock under $300. What each one is for, and what to skip.',
    category: 'Buying Guide',
    image: '/assets/illustrations/vacuum.svg',
    alt: 'Roborock Q7 L5 robot vacuum',
    author: 'Gadgets Finds',
    readTime: '12 min read',
    link: '/best-budget-robot-vacuums-under-300',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S26 Ultra Review: AI Camera Powerhouse',
    excerpt:
      "Announced February 25, 2026 and available from March 11, 2026 — the Galaxy S26 Ultra delivers Samsung's most advanced AI-powered photography and flagship performance to date.",
    category: 'Phones',
    image: '/assets/illustrations/phone.svg',
    alt: 'Samsung Galaxy S26 Ultra',
    author: 'Gadgets Finds',
    readTime: '5 min read',
    link: '/best-phones-2026#galaxy-s26-ultra',
  },
  {
    id: 4,
    title: 'iPhone 16 Pro vs Samsung Galaxy S26 Ultra: Ultimate Camera Showdown',
    excerpt: 'How iPhone 16 Pro and Galaxy S26 Ultra compare on paper for photography.',
    category: 'Phones',
    image: '/assets/illustrations/phone.svg',
    alt: 'Samsung Galaxy S26 Ultra, from our iPhone vs Galaxy comparison',
    author: 'Gadgets Finds',
    readTime: '8 min read',
    link: '/best-phones-2026#iphone-17-vs-galaxy-s26-ultra',
  },
  {
    id: 5,
    title: 'NVIDIA RTX 5090 Benchmarks: Gaming Performance Breakthrough',
    excerpt: 'Public benchmarks and reporting on RTX 5090 versus RTX 4090 in ray-traced games.',
    category: 'Hardware',
    image: '/assets/illustrations/gpu.svg',
    alt: 'ASUS TUF Gaming GeForce RTX 5090 graphics card',
    author: 'Gadgets Finds',
    readTime: '6 min read',
    link: '/best-graphics-cards-2026#rtx-5090',
  },
  {
    id: 6,
    title: 'Best Cheap Tablets Under $150 in 2026',
    excerpt: 'Fire HD 10, Galaxy Tab A9+, Fire HD 8, and Lenovo Tab One. New listings only.',
    category: 'Buying Guide',
    image: '/assets/illustrations/tablet.svg',
    alt: 'Amazon Fire HD 8 tablet',
    author: 'Gadgets Finds',
    readTime: '8 min read',
    link: '/best-cheap-tablets-under-150',
  },
  {
    id: 7,
    title: 'MacBook Pro M4 is gone: the 14-inch M5 is the one to buy',
    excerpt: 'What changed from the M4 to the M5, and who should buy the 14-inch model.',
    category: 'Laptops',
    image: '/assets/illustrations/laptop.svg',
    alt: 'MacBook Pro 14-inch with the M5 chip',
    author: 'Gadgets Finds',
    readTime: '10 min read',
    link: '/best-macbooks-2026#macbook-pro-14-m5',
  },
];

const INTERVAL_MS = 6000;

function isAmazonPhoto(src: string) {
  return /^https:\/\/m\.media-amazon\.com\//.test(src);
}

function isSvg(src: string) {
  return src.endsWith('.svg') || src.includes('/assets/illustrations/');
}

function PhotoPanel({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const amazon = isAmazonPhoto(src);
  return (
    <div className="relative h-[220px] sm:h-[260px] md:h-full w-full bg-white md:rounded-2xl md:border md:border-zinc-200 overflow-hidden">
      <Image
        src={src}
        alt={illustrationAlt(src, alt)}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        unoptimized={amazon || isSvg(src)}
        className="object-contain p-5 sm:p-6 md:p-8"
      />
    </div>
  );
}

export default function TrendingStoriesCarousel({ photos = {} }: { photos?: Record<string, string> }) {
  const stories: Story[] = STORIES.map((story) => ({
    ...story,
    image: photos[story.link] ?? story.image,
  }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const count = stories.length;
  const goTo = useCallback((index: number) => {
    setCurrentIndex(((index % count) + count) % count);
  }, [count]);
  const nextSlide = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prevSlide = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (paused || reduceMotion.current) return undefined;
    const id = window.setInterval(nextSlide, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, nextSlide]);

  const story = stories[currentIndex];

  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 md:h-[420px] lg:h-[460px]"
        aria-roledescription="carousel"
        aria-label="Featured guides"
      >
        <div className="order-1 md:order-2 md:p-5 lg:p-6 md:h-full">
          <PhotoPanel src={story.image} alt={story.alt} priority={currentIndex === 0} />
        </div>

        <div className="order-2 md:order-1 flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-8 min-h-[220px] md:min-h-0">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">{story.category}</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug line-clamp-3 mb-3">
            {story.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3 mb-5">{story.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <Link
              href={story.link}
              aria-label={`Read the guide: ${story.title}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
            >
              <span>Read the guide</span>
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
            <p className="text-xs text-slate-400">
              {story.author} · {story.readTime}
            </p>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-center gap-1 px-4 py-3 bg-slate-950 border-t border-white/10">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center text-white hover:text-amber-400"
          aria-label="Previous guide"
        >
          <Icon name="ChevronLeftIcon" size={20} variant="outline" />
        </button>
        {stories.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            className="flex items-center justify-center min-w-8 min-h-8"
            aria-label={`Go to guide ${index + 1}: ${item.title}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-400 w-8' : 'bg-white/30 w-2'
              }`}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center text-white hover:text-amber-400"
          aria-label="Next guide"
        >
          <Icon name="ChevronRightIcon" size={20} variant="outline" />
        </button>
      </div>
    </div>
  );
}
