'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TrendCard from './TrendCard';
import TimelineVisualization from './TimelineVisualization';
import IndustryImpactAssessment from './IndustryImpactAssessment';
import NewsletterSignup from './NewsletterSignup';
import Icon from '@/components/ui/AppIcon';

interface Trend {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  impactScore: number;
  predictionAccuracy: number;
  timeframe: string;
  description: string;
  industries: string[];
  slug: string;
}

interface TimelineEvent {
  id: number;
  year: string;
  quarter: string;
  title: string;
  description: string;
  category: string;
  likelihood: number;
}

interface IndustryImpact {
  id: number;
  industry: string;
  icon: string;
  impactLevel: 'High' | 'Medium' | 'Low';
  impactScore: number;
  keyTrends: string[];
  description: string;
}

const TechTrendsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeYear, setActiveYear] = useState('2026');
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedTrendId, setSelectedTrendId] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = ['All', 'AI & ML', 'Hardware', 'Software', 'Connectivity', 'Sustainability'];

  const mockTrends: Trend[] = [
  {
    id: 1,
    title: 'Quantum Computing Reaches Commercial Viability',
    category: 'Hardware',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1376ea3cf-1767029942992.png",
    alt: 'Close-up of quantum computer processor with blue glowing circuits and complex wiring',
    impactScore: 9.5,
    predictionAccuracy: 87,
    timeframe: 'Q2 2026',
    description: 'Major tech companies announce first commercially available quantum computers for enterprise use, revolutionizing cryptography, drug discovery, and financial modeling with unprecedented computational power.',
    industries: ['Finance', 'Healthcare', 'Cybersecurity'],
    slug: 'quantum-computing-reaches-commercial-viability'
  },
  {
    id: 2,
    title: 'AI-Powered Personal Health Assistants Go Mainstream',
    category: 'AI & ML',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a38cb48b-1772411330748.png",
    alt: 'Modern smartphone displaying health monitoring app with heart rate and activity graphs',
    impactScore: 8.8,
    predictionAccuracy: 92,
    timeframe: 'Q1 2026',
    description: 'Advanced AI health assistants integrate with wearables to provide real-time medical insights, early disease detection, and personalized wellness recommendations, transforming preventive healthcare.',
    industries: ['Healthcare', 'Fitness', 'Insurance'],
    slug: 'ai-powered-personal-health-assistants-go-mainstream'
  },
  {
    id: 3,
    title: 'Sustainable Tech Manufacturing Becomes Industry Standard',
    category: 'Sustainability',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f43358f2-1766939568516.png",
    alt: 'Green technology factory with solar panels on roof and wind turbines in background',
    impactScore: 9.2,
    predictionAccuracy: 85,
    timeframe: 'Q3 2026',
    description: 'Major electronics manufacturers commit to 100% renewable energy and circular economy principles, introducing biodegradable components and comprehensive recycling programs across product lines.',
    industries: ['Manufacturing', 'Electronics', 'Energy'],
    slug: 'sustainable-tech-manufacturing-becomes-industry-standard'
  },
  {
    id: 4,
    title: '6G Networks Begin Global Rollout',
    category: 'Connectivity',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102c6b84a-1766483968711.png",
    alt: 'Futuristic 5G cell tower with glowing blue lights against night sky in urban setting',
    impactScore: 8.5,
    predictionAccuracy: 78,
    timeframe: 'Q4 2026',
    description: 'Next-generation 6G networks launch in major cities, offering 100x faster speeds than 5G, enabling holographic communications, advanced IoT ecosystems, and seamless AR/VR experiences.',
    industries: ['Telecommunications', 'IoT', 'Entertainment'],
    slug: '6g-networks-begin-global-rollout'
  },
  {
    id: 5,
    title: 'Neural Interface Technology Enters Consumer Market',
    category: 'Hardware',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_136859be1-1772653156363.png",
    alt: 'Person wearing sleek black neural interface headset with LED indicators in modern tech lab',
    impactScore: 9.0,
    predictionAccuracy: 73,
    timeframe: 'Q3 2026',
    description: 'First consumer-grade brain-computer interfaces launch, allowing direct neural control of devices, enhanced learning capabilities, and revolutionary accessibility solutions for individuals with disabilities.',
    industries: ['Healthcare', 'Gaming', 'Education'],
    slug: 'neural-interface-technology-enters-consumer-market'
  },
  {
    id: 6,
    title: 'Autonomous Vehicles Achieve Level 5 Certification',
    category: 'AI & ML',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a693dabe-1769690612408.png",
    alt: 'Futuristic white autonomous electric vehicle with sensors driving on modern city street',
    impactScore: 8.9,
    predictionAccuracy: 81,
    timeframe: 'Q2 2026',
    description: 'Multiple manufacturers receive regulatory approval for fully autonomous vehicles requiring no human intervention, marking the beginning of widespread self-driving transportation adoption.',
    industries: ['Automotive', 'Transportation', 'Logistics'],
    slug: 'autonomous-vehicles-achieve-level-5-certification'
  }];


  const mockTimelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2026',
    quarter: 'Q1',
    title: 'AI Health Assistants Launch',
    description: 'Major tech companies release consumer AI health monitoring systems',
    category: 'AI',
    likelihood: 92
  },
  {
    id: 2,
    year: '2026',
    quarter: 'Q2',
    title: 'Quantum Computing Commercialization',
    description: 'First commercial quantum computers available for enterprise purchase',
    category: 'Hardware',
    likelihood: 87
  },
  {
    id: 3,
    year: '2026',
    quarter: 'Q2',
    title: 'Level 5 Autonomous Vehicles Certified',
    description: 'Regulatory bodies approve fully autonomous vehicles for public roads',
    category: 'AI',
    likelihood: 81
  },
  {
    id: 4,
    year: '2026',
    quarter: 'Q3',
    title: 'Sustainable Manufacturing Standard',
    description: 'Industry-wide adoption of circular economy principles',
    category: 'Sustainability',
    likelihood: 85
  },
  {
    id: 5,
    year: '2026',
    quarter: 'Q3',
    title: 'Consumer Neural Interfaces',
    description: 'Brain-computer interfaces become available to general public',
    category: 'Hardware',
    likelihood: 73
  },
  {
    id: 6,
    year: '2026',
    quarter: 'Q4',
    title: '6G Network Rollout Begins',
    description: 'Next-generation wireless networks launch in major metropolitan areas',
    category: 'Connectivity',
    likelihood: 78
  },
  {
    id: 7,
    year: '2027',
    quarter: 'Q1',
    title: 'Holographic Displays Go Mainstream',
    description: '3D holographic displays become standard in consumer devices',
    category: 'Hardware',
    likelihood: 68
  },
  {
    id: 8,
    year: '2027',
    quarter: 'Q2',
    title: 'AI-Generated Content Regulation',
    description: 'Global standards established for AI-created media identification',
    category: 'Software',
    likelihood: 89
  }];


  const mockIndustries: IndustryImpact[] = [
  {
    id: 1,
    industry: 'Healthcare',
    icon: 'HeartIcon',
    impactLevel: 'High',
    impactScore: 94,
    keyTrends: ['AI Diagnostics', 'Telemedicine', 'Wearable Tech'],
    description: 'AI-powered diagnostics and personalized medicine will transform patient care, reducing costs by 30% while improving outcomes through early disease detection and precision treatments.'
  },
  {
    id: 2,
    industry: 'Finance',
    icon: 'BanknotesIcon',
    impactLevel: 'High',
    impactScore: 89,
    keyTrends: ['Quantum Security', 'DeFi', 'AI Trading'],
    description: 'Quantum computing will revolutionize risk modeling and fraud detection, while blockchain-based systems enable instant global transactions with unprecedented security.'
  },
  {
    id: 3,
    industry: 'Manufacturing',
    icon: 'CogIcon',
    impactLevel: 'High',
    impactScore: 86,
    keyTrends: ['Smart Factories', 'Sustainability', 'Robotics'],
    description: 'Fully automated smart factories with AI-driven optimization will increase production efficiency by 50% while achieving zero-waste manufacturing through circular economy principles.'
  },
  {
    id: 4,
    industry: 'Education',
    icon: 'AcademicCapIcon',
    impactLevel: 'Medium',
    impactScore: 78,
    keyTrends: ['Personalized Learning', 'VR Classrooms', 'AI Tutors'],
    description: 'Adaptive AI tutors and immersive VR environments will personalize education for each student, improving learning outcomes by 40% while making quality education globally accessible.'
  },
  {
    id: 5,
    industry: 'Retail',
    icon: 'ShoppingCartIcon',
    impactLevel: 'Medium',
    impactScore: 72,
    keyTrends: ['AR Shopping', 'Predictive Analytics', 'Automation'],
    description: 'Augmented reality try-before-you-buy experiences and AI-powered personalization will transform online shopping, reducing returns by 60% while increasing customer satisfaction.'
  },
  {
    id: 6,
    industry: 'Entertainment',
    icon: 'FilmIcon',
    impactLevel: 'Medium',
    impactScore: 81,
    keyTrends: ['Metaverse', 'AI Content', 'Immersive Media'],
    description: 'Fully immersive metaverse experiences and AI-generated personalized content will redefine entertainment, creating new revenue streams worth $500B by 2028.'
  }];


  const filteredTrends = selectedCategory === 'All' ?
  mockTrends :
  mockTrends.filter((trend) => trend.category === selectedCategory);

  const handleShare = (trendId: number) => {
    if (!isHydrated) return;
    setSelectedTrendId(trendId);
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setSelectedTrendId(null);
  };

  const shareToSocial = (platform: string) => {
    if (!isHydrated) return;
    console.log(`Sharing trend ${selectedTrendId} to ${platform}`);
    closeShareModal();
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16"></div>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="h-16"></div>

      <div className="relative bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-trust text-white py-16 overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Icon name="SparklesIcon" size={20} variant="solid" />
              <span className="text-sm font-semibold">Future Tech Observatory</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tech Trends 2026
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover the technological innovations that will shape tomorrow. Our expert analysis combines predictive insights, industry impact assessments, and real-time accuracy tracking to keep you ahead of the curve.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name="ChartBarIcon" size={20} variant="solid" />
                <span className="text-sm font-semibold">156 Active Predictions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name="UserGroupIcon" size={20} variant="solid" />
                <span className="text-sm font-semibold">6 Key Trends Tracked</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name="CheckBadgeIcon" size={20} variant="solid" />
                <span className="text-sm font-semibold">87% Accuracy Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Trending Predictions
            </h2>
            <div className="flex items-center gap-2">
              <Icon name="FireIcon" size={20} variant="solid" />
              <span className="text-sm text-muted-foreground">
                Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'All' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                All
              </button>
              <button
              onClick={() => setSelectedCategory('AI & ML')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'AI & ML' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                AI & ML
              </button>
              <button
              onClick={() => setSelectedCategory('Hardware')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'Hardware' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                Hardware
              </button>
              <button
              onClick={() => setSelectedCategory('Software')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'Software' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                Software
              </button>
              <button
              onClick={() => setSelectedCategory('Connectivity')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'Connectivity' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                Connectivity
              </button>
              <button
              onClick={() => setSelectedCategory('Sustainability')}
              className={`
                  px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
              selectedCategory === 'Sustainability' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}
                `
              }>

                Sustainability
              </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrends.map((trend) =>
            <TrendCard
              key={trend.id}
              trend={trend}
              onShare={handleShare} />

            )}
          </div>
        </div>

        <div className="mb-12">
          <TimelineVisualization
            events={mockTimelineEvents}
            activeYear={activeYear}
            onYearChange={setActiveYear} />

        </div>

        <div className="mb-12">
          <IndustryImpactAssessment industries={mockIndustries} />
        </div>

        <div className="mb-12">
          <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Related Insights
              </h2>
              <p className="text-muted-foreground">
                Explore more content from our Future Tech Observatory
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/live-news-feed" className="bg-muted/30 rounded-lg p-6 hover:bg-muted/50 transition-colors cursor-pointer block">
                <Icon name="NewspaperIcon" size={32} variant="outline" />
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  Latest Tech News
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with breaking stories and real-time developments
                </p>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  Read More
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </span>
              </Link>

              <Link href="/product-comparison-engine" className="bg-muted/30 rounded-lg p-6 hover:bg-muted/50 transition-colors cursor-pointer block">
                <Icon name="ScaleIcon" size={32} variant="outline" />
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  Product Comparisons
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Make informed decisions with our detailed comparison tools
                </p>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  Compare Now
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </span>
              </Link>

              <Link href="/ces-2026-hub" className="bg-muted/30 rounded-lg p-6 hover:bg-muted/50 transition-colors cursor-pointer block">
                <Icon name="SparklesIcon" size={32} variant="outline" />
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  CES 2026 Coverage
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Exclusive insights from the world's biggest tech event
                </p>
                <span className="text-sm text-primary font-semibold flex items-center gap-1">
                  Explore CES
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <NewsletterSignup />
      </div>

      {showShareModal &&
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl shadow-2xl max-w-md w-full p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Share Trend</h3>
              <button
              onClick={closeShareModal}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Close modal">

                <Icon name="XMarkIcon" size={20} variant="outline" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
              onClick={() => shareToSocial('Twitter')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors">

                <Icon name="ShareIcon" size={20} variant="outline" />
                Twitter
              </button>
              <button
              onClick={() => shareToSocial('LinkedIn')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors">

                <Icon name="ShareIcon" size={20} variant="outline" />
                LinkedIn
              </button>
              <button
              onClick={() => shareToSocial('Facebook')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#0c63d4] transition-colors">

                <Icon name="ShareIcon" size={20} variant="outline" />
                Facebook
              </button>
              <button
              onClick={() => shareToSocial('Email')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">

                <Icon name="EnvelopeIcon" size={20} variant="outline" />
                Email
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Share Link</p>
              <div className="flex items-center gap-2">
                <input
                type="text"
                value={`https://www.gadgets-finds.com/tech-trends-2026/${mockTrends.find(t => t.id === selectedTrendId)?.slug ?? ''}`}
                readOnly
                className="flex-1 px-3 py-2 bg-muted rounded-md text-sm text-foreground" />

                <button
                onClick={() => {
                  if (isHydrated) {
                    navigator.clipboard.writeText(`https://www.gadgets-finds.com/tech-trends-2026/${mockTrends.find(t => t.id === selectedTrendId)?.slug ?? ''}`);
                  }
                }}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">

                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

};

export default TechTrendsInteractive;