import type { Metadata } from "next";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B08H99BPJN?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "PS5 DualSense Wireless Controller — Gadgets Finds",
  description:
    "PlayStation DualSense: haptics, adaptive triggers, battery, PC use, and how to spot an official listing on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/playstation-5-dualsense-article" },
  openGraph: {
    title: "PS5 DualSense Wireless Controller — Gadgets Finds",
    description: "Haptics, adaptive triggers, and what to check before you buy.",
    url: "https://www.gadgets-finds.com/playstation-5-dualsense-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/PS5_dualsense.png",
        width: 1200,
        height: 630,
        alt: "PlayStation DualSense wireless controller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "PS5 DualSense Wireless Controller — Gadgets Finds",
    images: ["/assets/images/PS5_dualsense.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Gaming</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            PlayStation 5 DualSense Wireless Controller
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-4">
            DualSense is the standard PS5 pad: haptic feedback, adaptive triggers, a built-in
            mic, Create button, USB-C. Street price often sits near $70–$80 for an official
            unit. Colors change; the internals do not.
          </p>
          <p className="text-muted-foreground mb-8">
            This is a buyer guide from public specs — not a lab tear-down. Amazon mixes official
            Sony pads with lookalikes. Read the seller line.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              DualSense on Amazon
            </a>
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src="/assets/images/PS5_dualsense.png"
              alt="PlayStation DualSense wireless controller"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What you actually feel</h2>
          <p className="text-muted-foreground mb-6">
            Adaptive triggers change resistance in supported games (shooters, racing). Haptics
            are finer than a DualShock rumble pack. If the title ignores DualSense, you have a
            very good Bluetooth controller and not much else. GTA 6 on PS5 is one of the games
            Sony keeps pointing at for this hardware — see our{" "}
            <Link href="/playstation-5-article" className="text-primary underline">
              PS5 guide
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">PC, Mac, phone</h2>
          <p className="text-muted-foreground mb-6">
            Sony lists DualSense for PS5 and, on current boxes, PC / Mac / mobile. Features on
            PC depend on the game and Steam Input. Do not assume adaptive triggers work in every
            Windows title.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Battery and stick wear</h2>
          <p className="text-muted-foreground mb-6">
            Charge over USB-C. Runtime is a few sessions, not a week. Analog stick drift is the
            long-term complaint on this generation — official or not. A second pad is normal if
            the console is the house TV.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">What to check on Amazon</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>Sold by Amazon or Sony/PlayStation — not a random import with a 20% badge.</li>
            <li>Title says DualSense / PlayStation, not “compatible replacement.”</li>
            <li>New vs Used vs Renewed. A cheap “new” third party is often neither official nor new.</li>
            <li>Color (White, Midnight Black, limited editions) is cosmetic.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            If you already own a working DualSense, you do not need another for GTA 6. If you
            need a second pad or you bought a Digital Slim with one controller, this is the
            official extra. Confirm the live Amazon card before you treat any price as fixed.
          </p>

          <AmazonDealBox productName="PS5 DualSense Wireless Controller" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
