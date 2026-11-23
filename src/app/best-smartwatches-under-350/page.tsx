import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-smartwatches-under-350";
const SEO_TITLE = "Best Smartwatches Under $350 in 2026";
const TITLE = "Best Smartwatches Under $350 in 2026";
const DESCRIPTION =
  "The best smartwatches under $350 in 2026: Apple Watch SE 3, Galaxy Watch 7, Garmin Forerunner 165 and Pixel Watch 3, matched to your phone. Check today's price.";
const IMG = illustrationPath("watch");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "watch" });

const products: RoundupProduct[] = [
  {
    id: "apple-watch-se-3",
    name: "Apple Watch SE 3 (GPS, 40mm)",
    label: "Best for iPhone",
    url: amz("B0FQFW7M9H"),
    why: "The current SE, now with an always-on screen.",
    specs: [
      ["Works with", "iPhone only"],
      ["Battery (maker rating)", "Up to 18 hours"],
      ["GPS", "Built in"],
      ["Case", "40mm, 26.3 g, 50m water resistant"],
    ],
    body: [
      "The third-generation SE (September 2025) gets Apple's S10 chip and, for the first time on an SE, an always-on display. Notifications, Apple Pay, Siri and workouts work the way iPhone owners expect, and it charges faster than the SE 2. Apple's list price is $249.",
      "The linked listing is the GPS 40mm in Midnight with the small/medium band, not a cellular model or an AppleCare bundle. Switch size on the listing if you want the 44mm case.",
    ],
    skip: "you want the ECG app or a blood-oxygen sensor, which stay on the Series models, or your phone is Android. The Apple Watch only pairs with an iPhone.",
    image: IMG,
  },
  {
    id: "galaxy-watch-7",
    name: "Samsung Galaxy Watch 7 (40mm, Bluetooth)",
    label: "Best for Android",
    url: amz("B0D1YQKDML"),
    why: "Sapphire glass, dual-frequency GPS and Samsung's health tools.",
    specs: [
      ["Works with", "Android, best on Galaxy phones"],
      ["Battery (maker rating)", "About 30 hours (40mm)"],
      ["GPS", "Dual-frequency"],
      ["Case", "40mm, 28.8 g, 5 ATM and IP68"],
    ],
    body: [
      "Samsung's 2024 watch is the Android pick that still feels current and usually sells well under its list price. It has a sapphire crystal over a 1.3-inch AMOLED, the 3nm Exynos W1000, and dual-frequency GPS that holds a better line between tall buildings.",
      "Heart rate, SpO2, skin temperature, ECG and body composition are all here; the sleep-apnea notification needs a compatible Galaxy phone and is a screening feature, not a diagnosis. The linked listing is the 40mm Bluetooth model, US version, sold by Amazon when we checked on November 22, 2026.",
    ],
    skip: "you want a week of battery, or you use a non-Samsung Android phone and care most about health features. Several Samsung Health tools are limited on other phones.",
    image: IMG,
  },
  {
    id: "garmin-forerunner-165",
    name: "Garmin Forerunner 165",
    label: "Best for running",
    url: amz("B0CT3SGHXL"),
    why: "Up to 11 days of battery and real training tools, on any phone.",
    specs: [
      ["Works with", "iPhone or Android"],
      ["Battery (maker rating)", "Up to 11 days; 19 hours GPS"],
      ["GPS", "Multi-constellation (not multiband)"],
      ["Case", "43mm, 39 g, 5 ATM"],
    ],
    body: [
      "A running watch first. Garmin rates it at up to 11 days as a smartwatch, about 4 days with the AMOLED always on, and up to 19 hours of GPS, so a week of runs does not need a charger. Garmin Coach, daily suggested workouts, Pulse Ox, a barometric altimeter and Garmin Pay are included.",
      "It works with the Garmin app on iPhone and Android, which makes it the one watch here that does not care what phone you own. The linked model is the standard 165, not the 165 Music.",
    ],
    skip: "you want to reply to messages and run apps from your wrist, or you need offline music. That is the Music version or a different kind of watch.",
    image: IMG,
  },
  {
    id: "pixel-watch-3",
    name: "Google Pixel Watch 3 (41mm, Wi-Fi)",
    label: "Best for Pixel phones",
    url: amz("B0D912YVPQ"),
    why: "A bright screen, Fitbit tracking and clean Wear OS.",
    specs: [
      ["Works with", "Android, best on Pixel"],
      ["Battery (maker rating)", "Up to 24 hours always-on; 36 hours saver"],
      ["GPS", "Built in"],
      ["Case", "41mm, about 31 g, 5 ATM and IP68"],
    ],
    body: [
      "The simplest Wear OS watch, with Google Assistant, Wallet and Maps, and Fitbit for heart rate, SpO2, skin temperature and the ECG app where it is cleared. The Actua screen reaches 2,000 nits, so it is easy to read outdoors, and Google says the 41mm charges to 50 percent in about 24 minutes.",
      "The linked listing is the 41mm Wi-Fi model in Champagne Gold with the Hazel band, not LTE and not the 45mm.",
    ],
    skip: "you use an iPhone, or you want more than a day of battery without saver mode. The Forerunner lasts far longer.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Smartwatches"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best smartwatch under $350 depends on your phone. For an iPhone, buy the Apple Watch SE 3. For Android, the Samsung Galaxy Watch 7 is the best all-rounder, and the Pixel Watch 3 suits Pixel owners. If you run, or hate charging every night, the Garmin Forerunner 165 lasts up to 11 days and works with both."
      intro={[
        "All four are new listings with their own GPS, so you can run without your phone. None of them is renewed, and none includes a cellular plan. Before you pay, check the case size, band length and whether the listing says GPS or LTE. Looking for discounts on newer models such as the Series 12 or Garmin Venu 4? See our Black Friday smartwatch deals.",
      ]}
      hero={{ src: IMG, alt: "Smartwatches under $350" }}
      tableTitle="Smartwatches under $350 compared"
      tableColumns={["Works with", "Battery (maker rating)", "GPS"]}
      products={products}
      buyingGuide={{
        heading: "How to choose a smartwatch",
        points: [
          { title: "Start with your phone", body: "Apple Watch needs an iPhone. Galaxy and Pixel watches need Android and work best with their own brand's phones. Garmin works with both." },
          { title: "Battery life", body: "Apple and Google watches are built around a nightly charge. Samsung usually lasts a day to a day and a half. Garmin is measured in days, then in GPS hours." },
          { title: "Health features", body: "All four track heart rate. ECG and sleep-apnea alerts are regulated screening features and vary by model and phone; they are not a diagnosis." },
          { title: "GPS or LTE", body: "GPS models track runs without a phone. LTE models can also take calls, but they cost more and add a monthly carrier bill." },
          { title: "Size and band", body: "Case size and band length change the listing. Check both on the Amazon page; a 40mm case fits smaller wrists." },
        ],
      }}
      verdict={[
        "Match the watch to the phone first. Buy the Apple Watch SE 3 for an iPhone and the Galaxy Watch 7 for Android, especially on a Samsung phone. Choose the Forerunner 165 as soon as training matters more than apps, and the Pixel Watch 3 if you live in Google's apps and accept a nightly charge.",
      ]}
      faqTitle="Smartwatch buying questions"
      faq={[
        { q: "What is the best smartwatch under $350?", a: "The Apple Watch SE 3 for iPhone, the Galaxy Watch 7 for Android, and the Garmin Forerunner 165 for running on either phone." },
        { q: "Can an Apple Watch pair with an Android phone?", a: "No. The Apple Watch only pairs with an iPhone. Android owners should look at the Galaxy Watch 7, the Pixel Watch 3 or the Garmin Forerunner 165." },
        { q: "Which smartwatch has the longest battery life?", a: "The Garmin Forerunner 165, rated at up to 11 days as a smartwatch. The Apple, Samsung and Pixel watches here last about a day or two." },
        { q: "Do I need an LTE smartwatch?", a: "Only if you want calls and messages without your phone nearby. GPS models track workouts on their own and cost less, with no monthly plan." },
      ]}
      dealBox={{ productName: "Smartwatches", href: `https://www.amazon.com/s?k=smartwatch&tag=${TAG}` }}
    />
  );
}
