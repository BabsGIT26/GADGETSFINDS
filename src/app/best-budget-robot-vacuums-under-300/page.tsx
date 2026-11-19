import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import RelatedGuides from "@/components/common/RelatedGuides";
import { FaqJsonLd, ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Best Robot Vacuums Under $300 in 2026 | Gadgets Finds",
  description:
    "Best robot vacuums under $300 in 2026: Lefant M210 Pro for most homes, eufy G30 for pet hair, and Roborock Q5 when it drops near $300. What to skip.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-budget-robot-vacuums-under-300" },
  openGraph: {
    title: 'Best Robot Vacuums Under $300 in 2026',
    description: 'Lefant M210 Pro for most homes, eufy G30 for pet hair, and Roborock Q5 when it drops near $300.',
    url: 'https://www.gadgets-finds.com/best-budget-robot-vacuums-under-300',
    siteName: "Gadgets Finds",
    type: "article",
    images: [{
      url: 'https://www.gadgets-finds.com/assets/images/eufy-robovac-g30-hq.jpg',
      alt: 'eufy RoboVac G30 robot vacuum',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: 'Best Robot Vacuums Under $300 in 2026',
    description: 'Lefant M210 Pro for most homes, eufy G30 for pet hair, and Roborock Q5 when it drops near $300.',
    images: ['https://www.gadgets-finds.com/assets/images/eufy-robovac-g30-hq.jpg'],
  },
};


const AMAZON = {
  lefant: "https://www.amazon.com/dp/B0F6YJM2TV?tag=gadgetsfindswebsite-20",
  eufy: "https://www.amazon.com/s?k=eufy+RoboVac+G30&tag=gadgetsfindswebsite-20",
  q5: "https://www.amazon.com/dp/B09N3JKFFY?tag=gadgetsfindswebsite-20",
  roomba: "https://www.amazon.com/dp/B08SP5GYJP?tag=gadgetsfindswebsite-20",
} as const;
PLACEHOLDER
