'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';



interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  alt: string;
  author: string;
  authorImage: string;
  authorAlt: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

const ArticleDetailContent = () => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get('id');
  const articleData = searchParams.get('data');
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
        setShareOpen(false);
      }, 2000);
    });
  };

  const handleSharePlatform = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article?.title || '');
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      reddit: `https://reddit.com/submit?url=${url}&title=${text}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
    setShareOpen(false);
  };

  const allArticles: Article[] = [
  {
    id: 'apple-m4-chip',
    title: 'Apple M4 Chip Revolutionizes Computing with 40% Performance Boost',
    excerpt: 'Apple unveils its most powerful chip yet at CES 2026, featuring breakthrough 3nm architecture and unprecedented AI capabilities.',
    content: `Apple has officially unveiled the M4 chip at CES 2026, marking a significant leap forward in computing performance. The new chip, built on an advanced 3-nanometer process, delivers a remarkable 40% performance boost over its predecessor while maintaining exceptional energy efficiency.

## Revolutionary Architecture

The M4 chip features a groundbreaking architecture that combines high-performance and efficiency cores in a way that maximizes both speed and battery life. With up to 16 CPU cores and 40 GPU cores, the M4 is designed to handle the most demanding professional workflows with ease.

## AI Capabilities

One of the most impressive aspects of the M4 is its dedicated Neural Engine, which can perform up to 45 trillion operations per second. This makes it ideal for machine learning tasks, real-time video analysis, and advanced computational photography.

## Industry Impact

Industry experts are calling the M4 a game-changer for mobile computing. The chip's combination of raw performance and energy efficiency sets a new standard that competitors will struggle to match. Early benchmarks show the M4 outperforming desktop-class processors in many tasks while consuming a fraction of the power.

## Availability

The M4 chip will debut in the new MacBook Pro lineup, with availability expected in Q2 2026. Apple has indicated that the chip will eventually make its way to other products in the Mac lineup, including the iMac and Mac mini.`,
    category: 'Consumer Electronics',
    image: "https://images.unsplash.com/photo-1718154621789-83c84f83f4b1",
    alt: 'Close-up of advanced Apple M4 chip with glowing circuits',
    author: 'Sarah Chen',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_120f980d1-1763300650373.png",
    authorAlt: 'Professional Asian woman tech journalist',
    publishedAt: 'March 18, 2026',
    readTime: 5,
    tags: ['Apple', 'M4 Chip', 'Computing', 'CES 2026']
  },
  {
    id: 'sony-wh-2000xm6',
    title: 'Sony WH-2000XM6 Review: The New King of Noise Cancellation',
    excerpt: 'Sony\'s latest flagship headphones set a new standard for active noise cancellation and audio quality.',
    content: `Sony has once again raised the bar for premium wireless headphones with the WH-2000XM6. After spending two weeks with these headphones, I can confidently say they represent the pinnacle of noise-canceling technology.

## Design and Comfort

The WH-2000XM6 maintains Sony's signature minimalist aesthetic while introducing subtle refinements. The ear cups are slightly larger and more plush than the previous generation, providing exceptional comfort during extended listening sessions. At just 250 grams, they're remarkably light for over-ear headphones.

The headband features improved padding with memory foam that distributes pressure evenly across your head. Sony has also refined the folding mechanism, making it more compact for travel. The headphones come with a premium hard-shell carrying case that includes compartments for cables and adapters.

Build quality is exceptional, with a combination of high-grade plastics and aluminum accents. The matte finish resists fingerprints and feels premium to the touch. Available in Midnight Black, Platinum Silver, and new Desert Sand colorways.

## Technical Specifications

**Driver Unit:** 40mm dome type (CCAW Voice coil)
**Frequency Response:** 4Hz - 40,000Hz (LDAC 990kbps)
**Impedance:** 48Ω (1kHz) when connected via headphone cable with power on
**Bluetooth:** Version 5.3 with multipoint connection
**Supported Codecs:** LDAC, AAC, SBC
**Battery Life:** Up to 35 hours (ANC ON), 45 hours (ANC OFF)
**Charging Time:** Approx. 3.5 hours (full charge), 10 min charge = 5 hours playback
**Charging Port:** USB-C
**Weight:** 250g
**Microphones:** 8 total (4 for ANC, 4 for calls)
**NFC:** Yes
**Voice Assistant:** Alexa, Google Assistant built-in

## Noise Cancellation Performance

The star of the show is undoubtedly the upgraded noise cancellation system. Sony's new V2 processor analyzes ambient sound 1000 times per second, adapting in real-time to your environment. Whether you're on a busy subway, in a crowded office, or on an airplane, the WH-2000XM6 creates an impressively quiet bubble around you.

In my testing, these headphones outperformed every competitor, including Apple's AirPods Max and Bose's QuietComfort Ultra. The difference is particularly noticeable in challenging environments with multiple sound sources.

**Real-World ANC Testing Results:**
- **Airplane cabin noise:** 95% reduction (industry-leading)
- **Subway/train:** 92% reduction
- **Office chatter:** 88% reduction
- **Street traffic:** 90% reduction
- **Wind noise:** 85% reduction (improved wind guard)

The Adaptive Sound Control feature automatically adjusts ANC levels based on your activity and environment. It recognizes when you're walking, sitting, or in transit and optimizes accordingly. The Speak-to-Chat feature automatically pauses music and lets in ambient sound when you start speaking.

## Sound Quality Deep Dive

Beyond noise cancellation, the WH-2000XM6 delivers exceptional audio quality. The 40mm drivers produce rich, detailed sound with impressive clarity across the frequency spectrum. Bass is punchy without being overwhelming, mids are warm and present, and highs are crisp without harshness.

**Audio Performance Analysis:**

**Bass (20Hz-250Hz):** Deep, controlled, and impactful. Sub-bass extension reaches down to 4Hz, providing rumble you can feel. Mid-bass is tight and punchy without bleeding into the midrange. Perfect for electronic, hip-hop, and orchestral music.

**Midrange (250Hz-4kHz):** Warm and natural with excellent vocal clarity. Instruments are well-separated and detailed. Guitars have texture, pianos sound rich, and vocals sit perfectly in the mix without sounding recessed or overly forward.

**Treble (4kHz-40kHz):** Crisp and extended without harshness or sibilance. Cymbals shimmer naturally, strings have air and sparkle. The extended frequency response up to 40kHz (with LDAC) provides exceptional detail retrieval.

**Soundstage:** Surprisingly wide for closed-back headphones. Imaging is precise, making it easy to pinpoint instrument placement. The DSEE Extreme upscaling technology enhances compressed audio files in real-time.

Sony's LDAC codec support ensures high-resolution audio playback when paired with compatible devices, transmitting up to 990kbps for near-lossless quality. The headphones also support standard AAC and SBC codecs for universal compatibility.

## Battery Life and Charging

Battery life is outstanding at 35 hours with ANC enabled and 45 hours with it disabled. Quick charging provides 5 hours of playback from just 10 minutes of charging via USB-C.

**Battery Performance Testing:**
- **Mixed use (ANC ON, 50% volume):** 34 hours 15 minutes
- **Music only (ANC ON, 70% volume):** 32 hours 45 minutes
- **ANC OFF (50% volume):** 44 hours 30 minutes
- **Quick charge test:** 10 min = 5h 12min playback
- **Full charge time:** 3 hours 28 minutes
- **Standby time:** 200+ hours

The headphones also feature power-saving modes that automatically turn off after periods of inactivity. Battery status is displayed in the Sony Headphones Connect app with precise percentage indicators.

## Smart Features and Connectivity

The headphones feature multipoint connectivity, allowing seamless switching between two devices. In testing, switching between my iPhone and MacBook was instantaneous and reliable.

**Key Features:**

**Speak-to-Chat:** Automatically pauses music and activates ambient sound when you start speaking. Resumes playback after 15 seconds of silence (customizable).

**Quick Attention Mode:** Cover the right ear cup to instantly lower volume and let in ambient sound for quick conversations.

**Adaptive Sound Control:** Learns your frequently visited locations and automatically adjusts ANC settings. Recognizes walking, running, sitting, and transit activities.

**360 Reality Audio:** Immersive spatial audio experience with compatible streaming services (Tidal, Amazon Music HD, Deezer).

**DSEE Extreme:** AI-powered upscaling restores detail to compressed audio files in real-time.

**Multipoint Connection:** Connect to two Bluetooth devices simultaneously with seamless switching.

**Wearing Detection:** Automatically pauses music when you remove the headphones and resumes when you put them back on.

**Touch Controls:** Intuitive gesture controls on the right ear cup for playback, volume, ANC modes, and voice assistant access.

## Sony Headphones Connect App

The companion app is feature-rich and intuitive. It offers:
- Custom EQ with presets and manual adjustment
- ANC optimizer (analyzes ear shape and fit)
- Adaptive Sound Control customization
- 360 Reality Audio setup with ear photo analysis
- Firmware updates
- Battery status and codec information
- Sound quality mode selection (priority on sound quality vs. stable connection)

## Call Quality

With 4 dedicated microphones for voice pickup and advanced wind noise reduction, call quality is excellent. The AI-based noise reduction isolates your voice even in noisy environments. In testing, callers reported clear audio even when I was on a busy street or in a coffee shop.

## Comparison with Competitors

**vs. Apple AirPods Max ($549):**
- Sony wins: Better ANC, longer battery life, more compact, lighter, better value
- Apple wins: Premium build (metal), better integration with Apple ecosystem, spatial audio with head tracking

**vs. Bose QuietComfort Ultra ($429):**
- Sony wins: Better sound quality, longer battery life, more features, better app
- Bose wins: Slightly more comfortable for some users, simpler interface

**vs. Sennheiser Momentum 4 ($379):**
- Sony wins: Superior ANC, better smart features, more refined sound tuning
- Sennheiser wins: Longer battery life (60 hours), slightly better build quality

**vs. Sony WH-1000XM5 (previous gen, $399):**
- XM6 improvements: 15% better ANC, improved sound quality, better call quality, refined design, faster processor, improved wind noise reduction

## Pricing and Availability

**MSRP:** $399.99 USD / £379.99 GBP / €399.99 EUR

**Available at:**
- Sony.com (direct)
- Amazon
- Best Buy
- Target
- B&H Photo
- Major electronics retailers worldwide

**Included in the box:**
- Sony WH-2000XM6 headphones
- Carrying case (hard shell)
- USB-C charging cable (1.2m)
- Audio cable for wired use (1.2m)
- Airplane adapter (dual-prong)
- Quick start guide

**Warranty:** 1-year limited warranty (extendable to 2 years with registration)

**Color Options:**
- Midnight Black
- Platinum Silver  
- Desert Sand (new)

## Who Should Buy These?

**Perfect for:**
- Frequent travelers who need the best ANC
- Audiophiles seeking wireless convenience without compromising sound quality
- Professionals working in noisy environments
- Commuters who spend hours in transit
- Anyone who values premium audio and cutting-edge features

**Consider alternatives if:**
- You're deeply invested in the Apple ecosystem (AirPods Max might integrate better)
- You need water resistance for workouts (these lack an IP rating)
- You're on a tight budget (consider previous-gen XM5 or mid-range options)

## Long-Term Durability

After two weeks of intensive testing including daily commutes, flights, and gym sessions (though not recommended due to lack of water resistance), the WH-2000XM6 shows no signs of wear. The hinges feel solid, the padding maintains its shape, and the finish remains pristine.

Sony's track record with the WH-1000X series suggests these will last for years with proper care. The replaceable ear pads (available from Sony) extend the lifespan even further.

## Final Verdict

The Sony WH-2000XM6 justifies its premium price tag with best-in-class noise cancellation, exceptional sound quality, and impressive battery life. If you're looking for the ultimate wireless headphones, these are it.

They represent the culmination of Sony's decade-long refinement of the WH-1000X series, addressing nearly every complaint from previous generations while pushing the boundaries of what's possible in wireless audio. For $399, you're getting the most advanced noise-canceling headphones on the market, backed by Sony's reputation for audio excellence. Whether you're a frequent traveler, audiophile, or just someone who appreciates premium technology, the WH-2000XM6 won't disappoint.

**Overall Rating: 9.5/10**

**Pros:**
- Industry-leading noise cancellation with adaptive technology
- Exceptional sound quality across all frequencies
- Outstanding 35-hour battery life with quick charging
- Comfortable for extended wear (all-day comfort)
- Feature-rich with intuitive controls and smart functions
- Excellent call quality with AI noise reduction
- Multipoint connectivity works flawlessly
- Comprehensive companion app
- Premium build quality and design
- Great value compared to competitors

**Cons:**
- Premium price point (though justified)
- No IP rating for water/sweat resistance
- Plastic build may feel less premium than metal alternatives
- Touch controls can be accidentally triggered
- Case is bulky compared to some competitors

**Bottom Line:** The Sony WH-2000XM6 sets the gold standard for wireless noise-canceling headphones in 2026. They're the headphones to beat.`,
    category: 'Audio',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a4d5808-1764677183408.png",
    alt: 'Premium Sony WH-2000XM6 wireless headphones with silver accents',
    author: 'Michael Rodriguez',
    authorImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_12dfc2f89-1763294012746.png',
    authorAlt: 'Hispanic tech reviewer with beard and glasses',
    publishedAt: 'March 17, 2026',
    readTime: 8,
    tags: ['Sony', 'Headphones', 'Audio', 'Review']
  },
  {
    id: 'google-gemini-3',
    title: 'Google Gemini 3.0 Sets New Standard for AI Language Models',
    excerpt: 'The latest iteration of Google\'s AI demonstrates unprecedented understanding of context and nuance.',
    content: `Google has unveiled Gemini 3.0, the latest version of its flagship AI language model, and it represents a quantum leap in artificial intelligence capabilities. After extensive testing, it's clear that Gemini 3.0 sets a new benchmark for what AI can achieve.

## Enhanced Understanding

Gemini 3.0's most impressive feature is its ability to understand context and nuance at a level that feels almost human. The model can maintain coherent conversations across multiple topics, remember previous interactions, and adapt its responses based on user preferences.

## Multimodal Capabilities

Unlike previous models, Gemini 3.0 seamlessly integrates text, image, audio, and video understanding. You can show it a photo and ask complex questions about what's happening in the scene, or have it analyze a video and provide detailed insights.

## Performance Benchmarks

In comprehensive testing across multiple benchmarks, Gemini 3.0 outperformed competitors including GPT-4 and Claude 3. It achieved a 95% accuracy rate on complex reasoning tasks and demonstrated superior performance in coding challenges.

## Real-World Applications

Google is already integrating Gemini 3.0 across its product ecosystem, from Search to Workspace. Early adopters report significant productivity gains, with the AI handling tasks that previously required human intervention.

## Ethical Considerations

Google has implemented robust safety measures to prevent misuse, including advanced content filtering and bias detection systems. The company has also been transparent about the model's limitations and potential risks.

## Availability

Gemini 3.0 is rolling out gradually, with API access available to developers starting this month. Consumer-facing applications will receive the upgrade over the coming weeks.`,
    category: 'AI & Machine Learning',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png",
    alt: 'Futuristic AI neural network visualization with glowing nodes',
    author: 'Emily Watson',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_136e29321-1763300795741.png",
    authorAlt: 'Young Caucasian woman tech journalist',
    publishedAt: 'March 16, 2026',
    readTime: 7,
    tags: ['Google', 'AI', 'Gemini', 'Machine Learning']
  },
  {
    id: 'tesla-robotaxi',
    title: 'Tesla Autonomous Robotaxi Fleet Launch Confirmed for Q2 2026',
    excerpt: 'Elon Musk announces commercial rollout of fully autonomous taxi service in major cities.',
    content: `Tesla has officially confirmed the commercial launch of its autonomous robotaxi fleet for Q2 2026, marking a pivotal moment in transportation history. CEO Elon Musk made the announcement at a special event in Austin, Texas.

## The Technology

Tesla's robotaxi fleet will utilize the company's Full Self-Driving (FSD) system, which has been in development for over a decade. The latest version, FSD 13.0, has achieved Level 4 autonomy, meaning the vehicles can operate without human intervention in most conditions.

## Initial Rollout

The service will launch initially in Austin, Phoenix, and Los Angeles, with plans to expand to 10 additional cities by the end of 2026. Tesla has already deployed a fleet of 5,000 specially configured Model 3 and Model Y vehicles for the service.

## Pricing and Availability

Tesla's robotaxi service will be priced competitively with traditional ride-sharing services, with the added benefit of no driver to tip. Users will be able to hail rides through the Tesla app, with estimated wait times of under 5 minutes in most areas.

## Safety Record

Tesla has accumulated over 10 billion miles of autonomous driving data, with the latest FSD system demonstrating a safety record that exceeds human drivers by a factor of 10. The company has also implemented redundant safety systems to ensure passenger protection.

## Industry Impact

The launch of Tesla's robotaxi service is expected to disrupt the traditional taxi and ride-sharing industries. Competitors including Waymo and Cruise are racing to launch their own services, but Tesla's scale and vertical integration give it a significant advantage.

## Regulatory Approval

Tesla has secured regulatory approval in all launch cities, following extensive testing and safety demonstrations. The company worked closely with local authorities to establish safety standards and operational guidelines.`,
    category: 'Emerging Tech',
    image: "https://images.unsplash.com/photo-1655792291146-0f71474eb407",
    alt: 'Modern white autonomous Tesla vehicle on city street',
    author: 'David Kim',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1353040b4-1763296301937.png",
    authorAlt: 'Asian tech journalist in black turtleneck',
    publishedAt: 'March 15, 2026',
    readTime: 6,
    tags: ['Tesla', 'Autonomous Vehicles', 'Transportation', 'Innovation']
  },
  {
    id: 'samsung-galaxy-z-fold-6',
    title: 'Samsung Galaxy Z Fold 6 Redefines Foldable Phone Standards',
    excerpt: 'Samsung\'s latest foldable flagship features revolutionary ultra-thin glass technology.',
    content: `Samsung has unveiled the Galaxy Z Fold 6, and it represents the most significant advancement in foldable phone technology to date. After a week of intensive testing, I'm convinced this device finally delivers on the promise of foldable smartphones.

## Design Evolution

The Z Fold 6 is noticeably thinner and lighter than its predecessor, measuring just 11.5mm when folded and weighing 239 grams. Samsung has achieved this through a combination of new materials and engineering innovations.

## The Crease Solution

The most impressive achievement is Samsung's virtually invisible crease. Using a new ultra-thin glass technology and refined hinge mechanism, the crease is barely noticeable during normal use. This addresses one of the biggest complaints about previous foldable phones.

## Display Quality

Both displays are stunning. The 6.4-inch cover screen is perfect for one-handed use, while the 7.8-inch main display provides a tablet-like experience. Both panels support 120Hz refresh rates and achieve peak brightness of 2000 nits.

## Performance and Battery

Powered by Qualcomm's Snapdragon 8 Gen 4 processor, the Z Fold 6 handles everything you throw at it with ease. The 4800mAh battery easily lasts a full day of heavy use, and 45W fast charging gets you to 80% in just 30 minutes.

## Camera System

Samsung has equipped the Z Fold 6 with a versatile triple camera system that rivals traditional flagship phones. The 50MP main sensor produces excellent photos in all lighting conditions, while the 12MP ultrawide and 10MP telephoto lenses provide creative flexibility.

## Software Experience

One UI 8 is optimized for the foldable form factor, with excellent multitasking capabilities. You can run three apps simultaneously on the main display, and app continuity works seamlessly when switching between screens.

## Verdict

The Galaxy Z Fold 6 is the most refined foldable phone yet. While it's still expensive, it's finally reached a level of polish that justifies the premium price for power users and early adopters.

**Rating: 9/10**`,
    category: 'Mobile Technology',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d9ea378-1772208754355.png",
    alt: 'Samsung Galaxy Z Fold 6 foldable smartphone partially opened',
    author: 'Jessica Martinez',
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c557787b-1763299182093.png",
    authorAlt: 'Hispanic woman tech reviewer',
    publishedAt: 'March 14, 2026',
    readTime: 8,
    tags: ['Samsung', 'Foldable', 'Smartphones', 'Review']
  }];

  useEffect(() => {
    // Check if we have dynamic article data from News API
    if (articleData) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(articleData));

        // Generate comprehensive content for 5-minute read
        const generateEnhancedContent = (title: string, excerpt: string, category: string) => {
          const sections = [
          `${excerpt}\n\n`,
          `## Breaking News Overview\n\nThis developing story has captured the attention of the technology industry as stakeholders assess its potential ramifications. The announcement comes at a critical time when ${category.toLowerCase()} continues to evolve rapidly, with companies racing to innovate and capture market share.\n\n`,
          `## Detailed Analysis\n\nIndustry analysts are closely examining the implications of this development. Early assessments suggest this could represent a significant shift in how companies approach ${category.toLowerCase()}. Market research firms have begun tracking consumer sentiment and investor reactions, with preliminary data indicating strong interest from multiple stakeholder groups.\n\nThe technical aspects of this announcement reveal careful planning and strategic positioning. Experts note that the timing aligns with broader industry trends toward innovation and digital transformation. This move could potentially influence competitor strategies and accelerate development timelines across the sector.\n\n`,
          `## Industry Context and Background\n\nTo fully understand the significance of this news, it's important to consider the broader context of the ${category.toLowerCase()} landscape. Over the past several years, we've witnessed unprecedented growth and innovation in this space, with major players investing billions in research and development.\n\nThe competitive dynamics have intensified as companies seek to differentiate their offerings and capture consumer attention. This latest development adds another dimension to an already complex market environment, where technological capabilities, user experience, and ecosystem integration all play crucial roles.\n\n`,
          `## Market Impact and Implications\n\nFinancial analysts are evaluating the potential market impact of this announcement. Early trading activity suggests investors are responding positively, though the full implications will take time to materialize. Industry observers note that this could trigger a wave of similar announcements from competitors seeking to maintain their market positions.\n\nConsumer advocates are also weighing in, examining how this development might affect product availability, pricing, and user experience. The consensus appears to be cautiously optimistic, with many seeing potential benefits for end users while acknowledging that execution will be critical.\n\n`,
          `## Expert Perspectives\n\nLeading technology experts have begun sharing their perspectives on this development. Many emphasize the innovative aspects while noting the challenges that lie ahead. Implementation details will be crucial, as will the ability to scale and deliver on the promises being made.\n\nAcademic researchers studying ${category.toLowerCase()} trends see this as part of a larger pattern of industry evolution. They point to similar historical developments and draw parallels that help contextualize the current situation. Their analysis suggests we're witnessing a pivotal moment that could shape the direction of the industry for years to come.\n\n`,
          `## Looking Ahead\n\nAs this story continues to develop, industry watchers will be monitoring several key factors. The immediate response from competitors, regulatory considerations, and consumer adoption patterns will all play important roles in determining the ultimate success and impact of this initiative.\n\nStakeholders across the technology ecosystem are preparing for potential ripple effects. Supply chain partners, software developers, and service providers are all assessing how this news might affect their own strategies and operations. The coming weeks and months will be critical in revealing the full scope and implications of this announcement.\n\n`,
          `## Stay Informed\n\nThis is a developing story, and we'll continue to provide updates as more information becomes available. For the latest breaking news and in-depth analysis of ${category.toLowerCase()} trends, visit our Live News Feed where we deliver real-time updates from trusted sources around the world.\n\nOur editorial team is committed to bringing you comprehensive coverage of the most important technology stories, helping you stay informed about the innovations and developments shaping our digital future.`];


          return sections.join('');
        };

        const dynamicArticle: Article = {
          id: decodedData.id,
          title: decodedData.title,
          excerpt: decodedData.excerpt,
          content: generateEnhancedContent(decodedData.title, decodedData.excerpt, decodedData.category),
          category: decodedData.category,
          image: decodedData.image,
          alt: decodedData.alt,
          author: decodedData.author,
          authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11b50cd2e-1786441685392.png",
          authorAlt: 'News source logo',
          publishedAt: decodedData.publishedAt,
          readTime: 5,
          tags: [decodedData.category, 'Breaking News', 'Live Feed']
        };
        setArticle(dynamicArticle);

        // Get related articles from same category
        const related = allArticles.
        filter((a) => a.category === dynamicArticle.category).
        slice(0, 3);
        setRelatedArticles(related);
        return;
      } catch (error) {
        console.error('Error parsing article data:', error);
      }
    }

    // Find article by ID or title match (for static articles)
    const foundArticle = allArticles.find((a) =>
    a.id === articleId ||
    a.title.toLowerCase().includes(articleId?.toLowerCase() || '')
    );

    if (foundArticle) {
      setArticle(foundArticle);
      // Get related articles from same category
      const related = allArticles.
      filter((a) => a.id !== foundArticle.id && a.category === foundArticle.category).
      slice(0, 3);
      setRelatedArticles(related);
    }
  }, [articleId, articleData]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <Icon name="ExclamationTriangleIcon" size={64} variant="outline" className="mx-auto text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/live-news-feed"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">

            <Icon name="ArrowLeftIcon" size={20} variant="outline" />
            <span>Back to News Feed</span>
          </Link>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/homepage" className="hover:text-foreground transition-colors">Home</Link>
            <Icon name="ChevronRightIcon" size={16} variant="outline" />
            <Link href="/live-news-feed" className="hover:text-foreground transition-colors">News</Link>
            <Icon name="ChevronRightIcon" size={16} variant="outline" />
            <span className="text-foreground font-medium">{article.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
          
          {/* Article Meta */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
            <div className="flex items-center space-x-4">
              <AppImage
                src={article.authorImage}
                alt={article.authorAlt}
                className="w-12 h-12 rounded-full object-cover" />

              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-sm text-muted-foreground">{article.publishedAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span className="flex items-center space-x-1 text-sm">
                <Icon name="ClockIcon" size={16} variant="outline" />
                <span>{article.readTime} min read</span>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <AppImage
            src={article.image}
            alt={article.alt}
            className="w-full h-auto object-cover" />

        </div>

        {/* Article Actions */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors">

              <Icon
                name="BookmarkIcon"
                size={18}
                variant={isBookmarked ? 'solid' : 'outline'}
                className={isBookmarked ? 'text-primary' : ''} />

              <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Single functional share button with dropdown */}
            <div ref={shareRef} className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors">
                
                <Icon name="ShareIcon" size={18} variant="outline" />
                <span className="text-sm font-medium">Share</span>
              </button>

              {shareOpen &&
              <div className="absolute top-full mt-2 left-0 w-52 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                  <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                  
                    <Icon name={copySuccess ? 'CheckIcon' : 'LinkIcon'} size={16} variant="outline" className={copySuccess ? 'text-success' : ''} />
                    {copySuccess ? 'Link Copied!' : 'Copy Link'}
                  </button>
                  <div className="border-t border-border" />
                  <button onClick={() => handleSharePlatform('twitter')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    Share on X
                  </button>
                  <button onClick={() => handleSharePlatform('facebook')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    Share on Facebook
                  </button>
                  <button onClick={() => handleSharePlatform('linkedin')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    Share on LinkedIn
                  </button>
                  <button onClick={() => handleSharePlatform('reddit')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                    Share on Reddit
                  </button>
                  <button onClick={() => handleSharePlatform('whatsapp')} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Share on WhatsApp
                  </button>
                </div>
              }
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{article.readTime} min read</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>);

            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="font-bold text-foreground my-4">
                  {paragraph.replace(/\*\*/g, '')}
                </p>);

            }
            return (
              <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                {paragraph}
              </p>);

          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {article.tags.map((tag) =>
          <span
            key={tag}
            className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors cursor-pointer">

              #{tag}
            </span>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-12 text-center">
          <Icon name="EnvelopeIcon" size={48} variant="outline" className="mx-auto text-primary mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">Get the latest tech news delivered to your inbox</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />

            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 &&
        <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) =>
            <Link
              key={related.id}
              href={`/article-detail-page?id=${related.id}`}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">

                  <div className="relative h-40 overflow-hidden">
                    <AppImage
                  src={related.image}
                  alt={related.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                      {related.category}
                    </span>
                    <h4 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">{related.readTime} min read</p>
                  </div>
                </Link>
            )}
            </div>
          </div>
        }
      </article>
    </div>);

};

const ArticleDetailPage = () => {
  return (
    <Suspense fallback={
    <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-3/4"></div>
            <div className="h-96 bg-muted rounded-lg"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    }>
      <ArticleDetailContent />
    </Suspense>);

};

export default ArticleDetailPage;