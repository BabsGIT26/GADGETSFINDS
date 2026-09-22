'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface NewsCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    urgency: 'breaking' | 'high' | 'normal';
    image: string;
    alt: string;
    author: string;
    authorImage: string;
    authorAlt: string;
    publishedAt: string;
    readTime: number;
    views: number;
    comments: number;
  };
}

const NewsCard = ({ article }: NewsCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const urgencyColors = {
    breaking: 'bg-destructive text-destructive-foreground',
    high: 'bg-warning text-warning-foreground',
    normal: 'bg-muted text-muted-foreground',
  };

  const categoryColors: Record<string, string> = {
    'AI & Machine Learning': 'bg-brand-trust/10 text-brand-trust',
    'Consumer Electronics': 'bg-brand-secondary/10 text-brand-secondary',
    'Mobile Technology': 'bg-brand-primary/10 text-brand-primary',
    'Gaming': 'bg-brand-accent/10 text-brand-accent',
    'Enterprise Tech': 'bg-brand-cta/10 text-brand-cta',
    'Emerging Tech': 'bg-success/10 text-success',
  };

  // Map article IDs to their dedicated page routes
  const getArticleRoute = (id: string): string => {
    const routeMap: Record<string, string> = {
      '1': '/apple-m4-chip-article',
      '2': '/google-gemini-3-article',
      '3': '/tesla-robotaxi-article',
      '4': '/samsung-galaxy-z-fold-6-article',
      '5': '/meta-quest-4-article',
      '6': '/microsoft-azure-quantum-article',
      '7': '/nvidia-rtx-6090-ti-live-news-article',
      '8': '/sony-playstation-6-article',
      '9': '/ibm-quantum-processor-article',
      '10': '/spacex-starlink-gen-3-article',
      '11': '/intel-arc-b-series-article',
      '12': '/openai-gpt-5-article',
    };

    if (routeMap[id]) {
      return routeMap[id];
    }

    const articleData = encodeURIComponent(JSON.stringify({
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      image: article.image,
      alt: article.alt,
      author: article.author,
      publishedAt: article.publishedAt,
      readTime: article.readTime
    }));

    return `/article-detail-page?data=${articleData}`;
  };

  // Close share dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false);
      }
    };
    if (shareOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [shareOpen]);

  const getArticleUrl = () => {
    if (typeof window === 'undefined') return '';
    const route = getArticleRoute(article.id);
    return `${window.location.origin}${route}`;
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = getArticleUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
        setShareOpen(false);
      }, 2000);
    });
  };

  const handleSharePlatform = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    const url = encodeURIComponent(getArticleUrl());
    const text = encodeURIComponent(article.title);
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      reddit: `https://reddit.com/submit?url=${url}&title=${text}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
    setShareOpen(false);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  const handleShareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setShareOpen(!shareOpen);
  };

  return (
    <article className="bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border group">
      <Link href={getArticleRoute(article.id)} className="block">
        <div className="relative h-48 overflow-hidden bg-muted">
          {/* Placeholder shown while loading or on error */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground gap-2">
              <Icon name="PhotoIcon" size={40} variant="outline" className="opacity-40" />
              <span className="text-xs opacity-50">No image available</span>
            </div>
          )}
          {!imageError && (
            <img
              src={article.image}
              alt={article.alt}
              className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => {
                setImageLoaded(true);
              }}
              onError={() => { setImageError(true); setImageLoaded(false); }}
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${urgencyColors[article.urgency]}`}>
              {article.urgency === 'breaking' && <Icon name="BoltIcon" size={12} variant="solid" className="inline mr-1" />}
              {article.urgency.toUpperCase()}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category] || 'bg-muted text-muted-foreground'}`}>
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="text-xs flex items-center gap-1">
                <Icon name="ClockIcon" size={14} variant="outline" />
                {article.readTime} min
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-4 flex items-center gap-2">
        <button
          onClick={handleBookmark}
          className="flex-1 flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Icon
            name="BookmarkIcon"
            size={16}
            variant={isBookmarked ? 'solid' : 'outline'}
            className={isBookmarked ? 'text-brand-primary' : ''}
          />
          <span className="text-xs md:text-sm font-medium">
            {isBookmarked ? 'Saved' : 'Save'}
          </span>
        </button>

        {/* Share button with dropdown */}
        <div ref={shareRef} className="flex-1 relative">
          <button
            onClick={handleShareToggle}
            className="w-full flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Share article"
          >
            <Icon name="ShareIcon" size={16} variant="outline" />
            <span className="text-xs md:text-sm font-medium">Share</span>
          </button>

          {shareOpen && (
            <div className="absolute bottom-full mb-2 right-0 w-52 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <Icon name={copySuccess ? 'CheckIcon' : 'LinkIcon'} size={16} variant="outline" className={copySuccess ? 'text-success' : ''} />
                {copySuccess ? 'Link Copied!' : 'Copy Link'}
              </button>
              <div className="border-t border-border" />
              <button onClick={(e) => handleSharePlatform(e, 'twitter')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </button>
              <button onClick={(e) => handleSharePlatform(e, 'facebook')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Share on Facebook
              </button>
              <button onClick={(e) => handleSharePlatform(e, 'linkedin')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Share on LinkedIn
              </button>
              <button onClick={(e) => handleSharePlatform(e, 'reddit')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                Share on Reddit
              </button>
              <button onClick={(e) => handleSharePlatform(e, 'whatsapp')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Share on WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;