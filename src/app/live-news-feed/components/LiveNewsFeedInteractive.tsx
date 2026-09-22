'use client';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import FilterBar from './FilterBar';
import BreakingNewsBanner from './BreakingNewsBanner';
import LiveIndicator from './LiveIndicator';
import Icon from '@/components/ui/AppIcon';

interface FilterState {
  category: string;
  urgency: string;
  sortBy: string;
}

interface Article {
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
  _rawPublishedAt?: string;
}

const mockArticles: Article[] = [
{
  id: '1',
  title: 'Apple M4 Chip: 40% Performance Boost Over M3',
  excerpt: 'Apple\'s M4 chip — announced at Apple\'s own events in 2024 — delivers breakthrough 3nm architecture and unprecedented AI capabilities. First debuted in iPad Pro (May 2024), then MacBook Pro and Mac mini (October 2024).',
  category: 'Consumer Electronics',
  urgency: 'breaking',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14efe4240-1768364558592.png",
  alt: 'Close-up of advanced computer chip with glowing circuits on dark background',
  author: 'Sarah Chen',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac06a530-1763295260042.png",
  authorAlt: 'Professional Asian woman with short black hair in business attire smiling',
  publishedAt: '2 min ago',
  readTime: 5,
  views: 12847,
  comments: 234
},
{
  id: '2',
  title: 'Google Gemini 3 Pro Sets New Standard for AI Language Models',
  excerpt: 'Gemini 3 Pro launched in late 2025, with further variants including Gemini 3.5 and 3.6 Flash following in 2026 — bringing unprecedented multimodal understanding and reasoning capabilities.',
  category: 'AI & Machine Learning',
  urgency: 'breaking',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15afdb008-1772093387845.png",
  alt: 'Futuristic AI neural network visualization with blue and purple glowing nodes',
  author: 'Michael Rodriguez',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1e75d8b3c-1763293339486.png",
  authorAlt: 'Hispanic man with beard wearing glasses and casual shirt',
  publishedAt: '15 min ago',
  readTime: 7,
  views: 9823,
  comments: 187
},
{
  id: '3',
  title: 'Tesla Autonomous Robotaxi Fleet Launch Confirmed for Q2 2026',
  excerpt: 'Elon Musk announces commercial rollout of fully autonomous taxi service in major cities, marking a pivotal moment in transportation history.',
  category: 'Emerging Tech',
  urgency: 'high',
  image: "https://images.unsplash.com/photo-1685984350996-a4a4bc52f24b",
  alt: 'Modern white autonomous electric vehicle on city street at sunset',
  author: 'Emily Watson',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13bdacd03-1763298932646.png",
  authorAlt: 'Young Caucasian woman with blonde hair in professional blazer',
  publishedAt: '28 min ago',
  readTime: 6,
  views: 8456,
  comments: 156
},
{
  id: '4',
  title: 'Samsung Galaxy Z Fold 6 Review: Refined Foldable, Crease Still Present',
  excerpt: 'Samsung\'s 2024 foldable flagship brings meaningful improvements in design and durability — but the inner display crease remains visible, as confirmed by reviewers worldwide.',
  category: 'Mobile Technology',
  urgency: 'high',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b44cefde-1768629979683.png",
  alt: 'Modern foldable smartphone displaying vibrant screen in partially folded position',
  author: 'David Kim',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11d2f9611-1763296666779.png",
  authorAlt: 'Asian man with short hair wearing black turtleneck sweater',
  publishedAt: '45 min ago',
  readTime: 4,
  views: 7234,
  comments: 98
},
{
  id: '5',
  title: 'Meta Quest 4: What We Know — Not Yet Announced',
  excerpt: 'Meta has not announced the Quest 4. Roadmaps point to 2027 or later. Claims of "8K per eye" resolution are fabricated — here is what is actually known.',
  category: 'Gaming',
  urgency: 'normal',
  image: "https://images.unsplash.com/photo-1551053495-efa988165115",
  alt: 'Person wearing white VR headset with glowing blue lights in dark room',
  author: 'Jessica Martinez',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1fdde4a7a-1763300767237.png",
  authorAlt: 'Hispanic woman with long dark hair in casual white shirt smiling',
  publishedAt: '1 hour ago',
  readTime: 5,
  views: 6789,
  comments: 145
},
{
  id: '6',
  title: 'Microsoft Azure Quantum Achieves Breakthrough in Error Correction',
  excerpt: 'Microsoft announces major advancement in quantum computing stability, bringing practical quantum applications significantly closer to reality.',
  category: 'Enterprise Tech',
  urgency: 'normal',
  image: "https://images.unsplash.com/photo-1681908571128-d5916951bf9c",
  alt: 'Complex quantum computer with gold and silver components in laboratory setting',
  author: 'Robert Johnson',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0bc914b-1763293487646.png",
  authorAlt: 'African American man with short hair in navy blue suit',
  publishedAt: '2 hours ago',
  readTime: 8,
  views: 5432,
  comments: 87
},
{
  id: '7',
  title: 'NVIDIA RTX 5090 Delivers Massive Ray Tracing Performance Gains',
  excerpt: 'NVIDIA\'s flagship Blackwell GPU — the RTX 5090, launched January 2025 — showcases revolutionary architecture with unprecedented gaming and AI rendering capabilities.',
  category: 'Gaming',
  urgency: 'normal',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca1905a2-1779728038568.png",
  alt: 'High-end graphics card with RGB lighting and advanced cooling system',
  author: 'Alex Thompson',
  authorImage: "https://images.unsplash.com/photo-1616701560632-d77fb4310f3c",
  authorAlt: 'Young Caucasian man with brown hair wearing casual denim jacket',
  publishedAt: '3 hours ago',
  readTime: 6,
  views: 4987,
  comments: 203
},
{
  id: '8',
  title: 'Sony PlayStation 6: What We Know — Possible 2027–2028 Window',
  excerpt: 'Sony has not officially announced the PS6. No confirmed specs exist. Analyst reports suggest a possible 2027–2028 release window. "16K gaming confirmed" claims are fabricated.',
  category: 'Gaming',
  urgency: 'normal',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11e24fc46-1782880534733.png",
  alt: 'Modern gaming console with sleek white design and blue accent lighting',
  author: 'Lisa Anderson',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb3c4eb7-1772731214067.png",
  authorAlt: 'Caucasian woman with red hair in professional gray blazer',
  publishedAt: '4 hours ago',
  readTime: 5,
  views: 8765,
  comments: 312
},
{
  id: '9',
  title: 'IBM Unveils 1000-Qubit Quantum Processor for Commercial Use',
  excerpt: 'IBM reaches major milestone in quantum computing with commercial-grade processor, opening new possibilities for drug discovery and cryptography.',
  category: 'Enterprise Tech',
  urgency: 'normal',
  image: "https://images.unsplash.com/photo-1681908571128-d5916951bf9c",
  alt: 'Advanced quantum computing hardware with intricate gold circuitry',
  author: 'Thomas Wright',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6dc337b-1772822810062.png",
  authorAlt: 'Middle-aged Caucasian man with gray hair in formal business suit',
  publishedAt: '5 hours ago',
  readTime: 7,
  views: 3456,
  comments: 76
},
{
  id: '10',
  title: 'SpaceX Starlink Gen 3 Satellites Enable Global 10Gbps Internet',
  excerpt: 'SpaceX launches next-generation satellite constellation promising unprecedented internet speeds and coverage to every corner of the planet.',
  category: 'Emerging Tech',
  urgency: 'normal',
  image: "https://images.unsplash.com/photo-1640796433065-f423a9d9a5fd",
  alt: 'Satellite in orbit above Earth with solar panels extended against starry background',
  author: 'Maria Garcia',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11094aa78-1763296768439.png",
  authorAlt: 'Hispanic woman with dark hair in professional attire smiling confidently',
  publishedAt: '6 hours ago',
  readTime: 6,
  views: 5678,
  comments: 134
},
{
  id: '11',
  title: 'Intel Arc B-Series GPUs Challenge NVIDIA and AMD Dominance',
  excerpt: 'Intel\'s latest discrete graphics cards demonstrate competitive performance and aggressive pricing, shaking up the GPU market landscape.',
  category: 'Consumer Electronics',
  urgency: 'normal',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6da8304-1786441688054.png",
  alt: 'Modern laptop with illuminated keyboard and high-performance graphics display',
  author: 'Kevin Lee',
  authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1adc857f5-1763294071886.png",
  authorAlt: 'Asian man with glasses wearing casual gray sweater',
  publishedAt: '7 hours ago',
  readTime: 5,
  views: 4321,
  comments: 89
},
{
  id: '12',
  title: 'OpenAI GPT-5 Family: GPT-5.5 and GPT-5.6 Advance AI Reasoning in 2026',
  excerpt: 'OpenAI has released GPT-5.5 and GPT-5.6 variants in 2026, building on the GPT-5 foundation with improved reasoning, efficiency, and multimodal capabilities.',
  category: 'AI & Machine Learning',
  urgency: 'normal',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f77e0fe-1772815067249.png",
  alt: 'Abstract AI visualization with interconnected neural pathways in blue and purple',
  author: 'Amanda Foster',
  authorImage: "https://images.unsplash.com/photo-1622383041638-f3621ce4da7a",
  authorAlt: 'Young woman with brown hair in casual blue denim shirt',
  publishedAt: '8 hours ago',
  readTime: 8,
  views: 9876,
  comments: 267
}];


const BLOCKED_ARTICLE_TITLES = [
"Minecraft's Latest Update Is Now Live, Here Are The Full Patch Notes - Nintendo Life",
"Retraction: The App Store Rejection of the Week That Was, in Fact, a Correct Rejection"];

const MOCK_ARTICLE_ROUTES: Record<string, string> = {
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

const getArticleRoute = (article: Article): string => {
  if (MOCK_ARTICLE_ROUTES[article.id]) {
    return MOCK_ARTICLE_ROUTES[article.id];
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


const LiveNewsFeedInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    urgency: 'All',
    sortBy: 'latest'
  });
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [useMockData, setUseMockData] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date());
  const [updateCount, setUpdateCount] = useState(0);
  const [newArticlesCount, setNewArticlesCount] = useState(0);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    fetchNews();
    // Auto-refresh every 5 minutes (300000ms)
    const refreshInterval = setInterval(() => {
      fetchNews(true);
    }, 300000);

    return () => clearInterval(refreshInterval);
  }, []);

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  const fetchNews = async (isAutoRefresh = false) => {
    if (isAutoRefresh) {




      // Silent refresh in background
    } else {setIsLoading(true);}try {const response = await fetch('/api/news?pageSize=20');
      const data = await response.json();

      if (data.useMockData || !data.articles || data.articles.length === 0) {
        setUseMockData(true);
        setArticles(mockArticles.filter((a) => !BLOCKED_ARTICLE_TITLES.includes(a.title)));
        if (!isAutoRefresh) setIsLoading(false);
        return;
      }

      // Transform NewsAPI articles to our format
      const transformedArticles: Article[] = data.articles.map((article: any, index: number) => {
        const categories = ['AI & Machine Learning', 'Consumer Electronics', 'Mobile Technology', 'Gaming', 'Enterprise Tech', 'Emerging Tech'];
        const urgencies: ('breaking' | 'high' | 'normal')[] = index < 2 ? ['breaking'] : index < 5 ? ['high'] : ['normal'];

        // Create comprehensive excerpt (200-250 words for better preview)
        const baseDescription = article.description || article.content || 'No description available';
        const enhancedExcerpt = baseDescription.length < 200 ?
        `${baseDescription} This breaking story is developing as industry experts analyze the implications for the technology sector. The announcement has sparked significant interest among consumers and investors alike, with market analysts predicting substantial impact on the competitive landscape. Stay tuned for more updates as this story unfolds.` :
        baseDescription;

        // Calculate realistic read time for 5-minute article (approximately 1000-1250 words)
        const targetReadTime = 5;

        // Enhanced image validation and fallback system
        const validateImageUrl = (url: string | null): string => {
          if (!url || url.trim() === '') return '';
          try {
            new URL(url);
            return url;
          } catch {
            return '';
          }
        };

        const validatedImage = validateImageUrl(article.urlToImage);

        // Multiple fallback images for variety
        const fallbackImages = [
        'https://images.unsplash.com/photo-1518770660439-4636190af475',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        '/assets/images/no_image.png'];


        const finalImage = validatedImage || fallbackImages[index % fallbackImages.length];

        return {
          id: `news-${Date.now()}-${index}`,
          title: article.title || 'Untitled Article',
          excerpt: enhancedExcerpt.substring(0, 300),
          category: categories[index % categories.length],
          urgency: urgencies[0],
          image: finalImage,
          alt: article.title ? `News image for ${article.title}` : 'Technology news article image',
          author: article.source.name || 'Tech News',
          authorImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1de3fe335-1763296153125.png',
          authorAlt: `Source logo`,
          publishedAt: getTimeAgo(article.publishedAt),
          readTime: targetReadTime,
          views: Math.floor(10000 / (index + 1)) + (index % 3) * 1200,
          comments: Math.floor(300 / (index + 1)) + (index % 4) * 45,
          _rawPublishedAt: article.publishedAt || new Date().toISOString()
        };
      });

      // Check for new articles
      if (isAutoRefresh && articles.length > 0) {
        const newArticles = transformedArticles.filter(
          (newArticle) => !articles.some((existingArticle) => existingArticle.title === newArticle.title)
        );

        if (newArticles.length > 0) {
          setNewArticlesCount(newArticles.length);
          setShowUpdateNotification(true);
          setTimeout(() => setShowUpdateNotification(false), 5000);
        }
      }

      setArticles(transformedArticles.filter((a) => !BLOCKED_ARTICLE_TITLES.some((blocked) => a.title.includes(blocked) || blocked.includes(a.title))));
      setUseMockData(false);
      setLastUpdateTime(new Date());
      setUpdateCount((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching news:', error);
      setUseMockData(true);
      setArticles(mockArticles.filter((a) => !BLOCKED_ARTICLE_TITLES.includes(a.title)));
    } finally {
      if (!isAutoRefresh) {
        setIsLoading(false);
      }
    }
  };

  const filteredArticles = articles.filter((article) => {
    const categoryMatch = filters.category === 'All' || article.category === filters.category;
    const urgencyMatch = filters.urgency === 'All' || article.urgency === filters.urgency.toLowerCase();
    return categoryMatch && urgencyMatch;
  }).sort((a, b) => {
    if (filters.sortBy === 'popular') {
      return b.views - a.views;
    }
    if (filters.sortBy === 'trending') {
      return b.comments - a.comments;
    }
    // 'latest' — sort by raw date if available, otherwise keep original order
    if (a._rawPublishedAt && b._rawPublishedAt) {
      return new Date(b._rawPublishedAt).getTime() - new Date(a._rawPublishedAt).getTime();
    }
    return 0;
  });

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleArticles((prev) => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMore = visibleArticles < filteredArticles.length;

  const breakingNewsItems = articles
    .filter((article) => article.urgency === 'breaking')
    .slice(0, 3)
    .map((article) => ({
      id: article.id,
      title: article.title,
      timestamp: article.publishedAt,
      href: getArticleRoute(article)
    }));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-24 pb-8">
        {/* Auto-refresh notification */}
        {showUpdateNotification &&
        <div className="fixed top-20 right-4 z-50 bg-brand-primary text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right flex items-center gap-3">
            <Icon name="BoltIcon" size={20} variant="solid" />
            <span className="font-medium">
              {newArticlesCount} new {newArticlesCount === 1 ? 'article' : 'articles'} loaded!
            </span>
          </div>
        }
        <BreakingNewsBanner breakingNews={breakingNewsItems} />
        
        <LiveIndicator
          updateCount={updateCount}
          lastUpdateTime={lastUpdateTime}
          isLive={!useMockData} />

        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <FilterBar onFilterChange={setFilters} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedArticles.map((article) =>
              <NewsCard key={article.id} article={article} />
              )}
            </div>

            {displayedArticles.length === 0 &&
            <div className="text-center py-12 bg-card rounded-lg border border-border">
                <Icon name="FunnelIcon" size={48} variant="outline" className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more content</p>
              </div>
            }

            {hasMore &&
            <div className="text-center">
                <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto">
                  {isLoading ?
                <>
                      <Icon name="ArrowPathIcon" size={20} variant="outline" className="animate-spin" />
                      Loading...
                    </> :
                <>
                      Load More Articles
                      <Icon name="ChevronDownIcon" size={20} variant="outline" />
                    </>
                }
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default LiveNewsFeedInteractive;