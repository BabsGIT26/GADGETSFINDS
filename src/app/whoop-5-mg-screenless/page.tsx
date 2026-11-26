import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { ProductPhoto } from "@/components/common/AmazonMedia";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON = "https://www.amazon.com/dp/B0DY2SWV16?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "WHOOP 5.0/MG Review: Screenless Sleep and Recovery — Gadgets Finds",
  description:
    "A screenless WHOOP 5.0/MG band with a 12-month membership for sleep, recovery, and strain, with 14+ days of battery life.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/whoop-5-mg-screenless" },
  openGraph: {
    title: "WHOOP 5.0/MG Review: Screenless Sleep and Recovery",
    description:
      "A screenless band for sleep, recovery, and strain, sold with a 12-month WHOOP membership.",
    url: "https://www.gadgets-finds.com/whoop-5-mg-screenless",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/whoop-5-og.jpg",
        alt: "Black WHOOP screenless fitness band",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "WHOOP 5.0/MG Review: Screenless Sleep and Recovery",
    description: "Sleep, recovery, and strain on a band with no screen, plus a 12-month membership.",
    images: ["/assets/images/whoop-5-og.jpg"],
  },
};

const buttonClass =
  "inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors";

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-32">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Wearables</p>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            WHOOP 5.0/MG Review: Screenless Sleep and Recovery
          </h1>

          <p className="text-muted-foreground mb-6">
            If you want deep, continuous tracking of your sleep, recovery, and daily strain without
            another buzzing smartwatch screen on your wrist, the WHOOP 5.0/MG Screenless Wearable
            combines lightweight hardware with a full 12-month membership out of the box. Featuring
            14+ days of battery life, IP68 water resistance, and an AI Coach powered by your
            personal baselines, it is built for athletes and health-focused users who care more
            about actionable insights than wrist notifications.
          </p>

          <p className="mb-8">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className={buttonClass}>
              View on Amazon
            </a>
          </p>

          <div className="mb-10 flex justify-center">
            <ProductPhoto
              url={AMAZON}
              fallback="/assets/images/whoop-5-amazon.jpg"
              alt="Black WHOOP screenless fitness band"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What Makes the WHOOP 5.0/MG Stand Out?</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>
              <span className="font-semibold text-foreground">100% Screenless, Zero-Distraction Design:</span>{" "}
              Weighing roughly 26.5–27 g, the band stays out of your way during workouts, sleep, and
              daily work—sending all biometric metrics cleanly to the iOS and Android WHOOP app with
              no glowing screen or message alerts.
            </li>
            <li>
              <span className="font-semibold text-foreground">14+ Day Battery Life & On-Wrist Charging:</span>{" "}
              Runs for over two weeks on a single charge. Models bundled with the Wireless PowerPack
              (Peak and Life tiers) slide right over the band so you can charge while wearing it
              without losing a single minute of sleep or recovery data.
            </li>
            <li>
              <span className="font-semibold text-foreground">24/7 Sleep, Recovery & Strain Coaching:</span>{" "}
              Tracks all four sleep stages, resting heart rate, heart rate variability (HRV), blood
              oxygen, and skin temperature to calculate daily Recovery, Sleep, and Strain scores
              alongside personalized AI Coach recommendations.
            </li>
            <li>
              <span className="font-semibold text-foreground">Women’s Health & Hormonal Insights:</span>{" "}
              Monitors menstrual cycle trends and physiological shifts across phases—with Natural
              Cycles integration—to help tailor training intensity and rest recommendations.
            </li>
            <li>
              <span className="font-semibold text-foreground">IP68 Water-Resistant Build:</span> Rated
              IP68 (up to 10 meters), making it safe for swimming, showers, and sweat-heavy training
              sessions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">WHOOP 5.0 vs. WHOOP MG: Understanding the Bundle Tiers</h2>
          <p className="text-muted-foreground mb-4">
            Amazon listings titled WHOOP 5.0/MG typically offer two distinct hardware-and-membership
            configurations, both including a 12-month subscription:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-left border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 font-semibold text-foreground">Feature / Spec</th>
                  <th className="p-3 font-semibold text-foreground">WHOOP 5.0 (Peak Membership Bundle)</th>
                  <th className="p-3 font-semibold text-foreground">WHOOP MG (Life Membership Bundle)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="p-3">Hardware Included</td>
                  <td className="p-3">WHOOP 5.0 device + SuperKnit band + Wireless PowerPack</td>
                  <td className="p-3">WHOOP MG device + SuperKnit Luxe band + Wireless PowerPack</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Battery & Durability</td>
                  <td className="p-3">14+ days battery life; IP68 water-resistant</td>
                  <td className="p-3">14+ days battery life; IP68 water-resistant</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Core Tracking</td>
                  <td className="p-3">
                    Sleep stages, Recovery, Strain, Steps, VO2 Max, Stress Monitor, Healthspan,
                    Women’s Health
                  </td>
                  <td className="p-3">Everything in Peak</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Medical-Grade Heart Features</td>
                  <td className="p-3">Standard optical heart rate & vitals</td>
                  <td className="p-3">On-demand ECG, AFib detection (Heart Screener) & Blood Pressure Insights</td>
                </tr>
                <tr>
                  <td className="p-3">Typical Annual Price</td>
                  <td className="p-3">$239/year (often discounted around $199 during seasonal sales)</td>
                  <td className="p-3">$359/year (often discounted around $299 during seasonal sales)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Real-World Performance & Practical Trade-Offs</h2>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">Subscription-Based Ecosystem:</span> The
            hardware is bundled with your first 12 months of membership, and an active WHOOP
            subscription is required to continue viewing data in the app after year one.
          </p>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">No Built-In Screen or Standalone GPS:</span>{" "}
            If you want real-time pace, distance maps, or turn-by-turn stats on your wrist during
            outdoor runs without carrying your phone, a traditional GPS sports watch will serve you
            better.
          </p>
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Unmatched Sleep & Recovery Consistency:</span>{" "}
            Because you never have to take it off to charge overnight and there is no screen lighting
            up in bed, WHOOP excels at capturing uninterrupted multi-week trends in recovery, stress,
            and sleep debt.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who Should Buy It—and Who Shouldn't</h2>
          <p className="font-semibold text-foreground mb-2">Buy the WHOOP 5.0/MG (12-Month Membership) if:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>You want 24/7 sleep, recovery, stress, and strain coaching without wearing a smartwatch or giving up a mechanical watch.</li>
            <li>You value 14+ day battery life and hassle-free on-wrist charging.</li>
            <li>You want advanced heart health tools like on-demand ECG and blood pressure insights (choose the WHOOP MG / Life bundle).</li>
          </ul>
          <p className="font-semibold text-foreground mb-2">Skip it if:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>You refuse to pay an ongoing annual membership after the first 12 months.</li>
            <li>You want an on-wrist display for notifications, or phone-free GPS pace tracking.</li>
          </ul>

          <p className="mb-8">
            <a href={AMAZON} target="_blank" rel="nofollow sponsored noopener noreferrer" className={buttonClass}>
              Check Current Price & Membership Options on Amazon
            </a>
          </p>

          <AmazonDealBox productName="WHOOP 5.0/MG 12-month membership" href={AMAZON} />

          <CommentSection articleSlug="whoop-5-mg-screenless" />
        </div>
      </article>
      <Footer />
    </>
  );
}
