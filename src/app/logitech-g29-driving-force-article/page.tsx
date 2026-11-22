import type { Metadata } from "next";
import ArticleJsonLd from "@/components/common/ArticleJsonLd";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import AmazonButton from "@/components/common/AmazonButton";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON =
  "https://www.amazon.com/dp/B00Z0UWWYC?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "/assets/illustrations/wheel.svg";
const SHARE_IMAGE = "https://www.gadgets-finds.com/og/wheel";

export const metadata: Metadata = {
  title: "Logitech G29 Driving Force Wheel Review | Gadgets Finds",
  description:
    "Logitech G29 Driving Force Racing Wheel and Floor Pedals for PS5, PS4, PC and Mac. Dual-motor force feedback, 900° rotation, stainless steel paddle shifters, leather cover. Is it still worth it? Price changes on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/logitech-g29-driving-force-article",
  },
  openGraph: {
    title: "Logitech G29 Driving Force Racing Wheel and Pedals",
    description: "Force feedback racing wheel and pedals for PS5, PS4, PC and Mac. Dual-motor FFB, leather cover, paddle shifters. Price and stock change.",
    url: "https://www.gadgets-finds.com/logitech-g29-driving-force-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Logitech G29 Driving Force Racing Wheel and Pedals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Logitech G29 Driving Force Racing Wheel and Pedals",
    images: [SHARE_IMAGE],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Logitech G29 Driving Force Racing Wheel and Pedals",
  description: "Review of the Logitech G29 Driving Force Racing Wheel and Floor Pedals for PS5, PS4, PC and Mac.",
  image: OG_IMAGE,
  author: {
    "@type": "Organization",
    name: "Gadgets Finds",
  },
  publisher: {
    "@type": "Organization",
    name: "Gadgets Finds",
    logo: {
      "@type": "ImageObject",
      url: "https://www.gadgets-finds.com/assets/images/c25f7797a5e24e21877a902e49174fd6-1768753589028.png",
    },
  },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.gadgets-finds.com/logitech-g29-driving-force-article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Logitech G29 still worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes for beginners and casual sim racers who want a complete, reliable wheel + pedals package that works on PS5, PS4 and PC. Direct-drive wheels offer smoother feedback, but the G29 remains a popular and affordable entry point.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms does the Logitech G29 support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PS5, PS4, PC and Mac. The G920 is the equivalent for Xbox.",
      },
    },
    {
      "@type": "Question",
      name: "Does the G29 come with a shifter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Driving Force Shifter is sold separately and is compatible with the G29.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <ArticleJsonLd path="/logitech-g29-driving-force-article" headline={"Logitech G29 Driving Force Wheel Review"} description={"Logitech G29 Driving Force Racing Wheel and Floor Pedals for PS5, PS4, PC and Mac. Dual-motor force feedback, 900° rotation, stainless steel paddle shifters, leather cover. Is it still worth it? Price changes on Amazon."} products={["Logitech G29 Driving Force racing wheel and pedals"]} includeArticle={false} />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming Equipment
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Logitech G29 Driving Force Racing Wheel and Floor Pedals
          </h1>
          <p className="text-muted-foreground mb-6">
            Dual-motor force feedback racing wheel with stainless steel paddle shifters, hand-stitched leather cover, and adjustable three-pedal set. Compatible with PS5, PS4, PC and Mac. Price and stock change on Amazon.
          </p>

          <AmazonButton href={AMAZON} />

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/AMuIo_C144U"
              title="Logitech G29 Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this is</h2>
          <p className="text-muted-foreground mb-4">
            The Logitech G29 Driving Force is one of the most popular entry-level sim racing wheels. It uses dual motors and helical gearing to deliver force feedback so you feel tire slip, understeer, oversteer, and road texture. The wheel offers up to 900 degrees of lock-to-lock rotation, matching the range of many real cars.
          </p>

          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Dual-motor force feedback with helical gearing and anti-backlash system</li>
            <li>900-degree lock-to-lock rotation</li>
            <li>Hand-stitched leather wheel cover</li>
            <li>Stainless steel paddle shifters</li>
            <li>3 adjustable floor pedals (throttle, brake, clutch) with non-linear brake</li>
            <li>RPM LED indicator, D-pad, and integrated controls</li>
            <li>Compatible with PS5, PS4, PC and Mac (G920 is the Xbox version)</li>
            <li>Table clamps included; cockpit mounting possible</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Beginners and casual sim racers who want a complete, ready-to-use wheel and pedals package that works on both PlayStation and PC. It is still one of the most supported and widely available starter wheels.
          </p>

          <p className="text-muted-foreground mb-4">
            Skip it if you specifically want the smoother, more detailed feel of a modern direct-drive wheel or higher torque. The G29 remains a solid, reliable option for most people starting out or playing casually.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pros</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Complete package (wheel + 3 pedals)</li>
                <li>Strong platform support (PS5/PS4/PC)</li>
                <li>Realistic 900° rotation and force feedback</li>
                <li>Durable leather cover and metal paddles</li>
                <li>Widely available and often on sale</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Cons</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Gear-driven feedback can feel notchy compared to direct drive</li>
                <li>Can be noisy under hard force feedback</li>
                <li>Shifter sold separately</li>
                <li>Older design (direct-drive options now exist at similar prices)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm platform: G29 = PS5 / PS4 / PC / Mac. G920 is for Xbox.</li>
            <li>Price and stock change frequently. Recheck the Amazon page before buying.</li>
            <li>The Driving Force Shifter is optional and sold separately.</li>
            <li>Use the included clamps or a proper cockpit mount for stability.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The Logitech G29 remains a proven, accessible force-feedback racing wheel and pedal set for PS5, PS4 and PC. It is not the newest or smoothest option, but it is still one of the best complete starter packages available. Open the Amazon listing for the current price, what’s included, and availability.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src={OG_IMAGE}
              alt="Logitech G29 Driving Force Racing Wheel and Pedals"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="Logitech G29 Driving Force Racing Wheel and Pedals"
            href={AMAZON}
          />

          <CommentSection articleSlug="logitech-g29-driving-force-article" />
        </div>
      </article>
      <Footer />
    </>
  );
}
