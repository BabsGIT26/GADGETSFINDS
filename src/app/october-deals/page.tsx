import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";

const TAG = "gadgetsfindswebsite-20";
const s = (q: string) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(q)}&tag=${TAG}`;

const deals = [
  {
    name: "AirPods Pro 3",
    price: "$179",
    was: "$249",
    off: "28% off",
    href: s("Apple AirPods Pro 3"),
    image: "/assets/images/no_image.png",
    text: "Apple’s in-ear buds with active noise cancelling, spatial audio, and USB-C. The listing also mentions live translation and heart-rate sensing. Lightning Deal, so the cut can end today.",
  },
  {
    name: "MacBook Air 13-inch, M5, 512GB",
    price: "$1,099",
    was: "$1,299",
    off: "15% off",
    href: s("MacBook Air 13 M5 512GB"),
    image: "/assets/images/no_image.png",
    text: "13.6-inch Liquid Retina, 16GB memory, 512GB storage, midnight. A portable laptop, not the 15-inch model below.",
  },
  {
    name: "Fire HD 10",
    price: "$72.99",
    was: "$154.99",
    off: "53% off",
    href: s("Amazon Fire HD 10"),
    image: "/assets/images/no_image.png",
    text: "10.1-inch Full HD tablet, 4GB RAM, 32GB, black. Fine for video and reading. Not a laptop replacement.",
  },
  {
    name: "MacBook Air 15-inch, M5, 512GB",
    price: "$1,299",
    was: "$1,499",
    off: "13% off",
    href: s("MacBook Air 15 M5 512GB"),
    image: "/assets/images/no_image.png",
    text: "Same M5 chip and 512GB storage as the 13-inch, with a 15.3-inch screen. Sky Blue on this listing.",
  },
  {
    name: "iRobot Roomba 415X",
    price: "$398.99",
    was: "$799.99",
    off: "50% off",
    href: s("iRobot Roomba 415X"),
    image: "/assets/images/no_image.png",
    text: "Robot vacuum and mop with a self-emptying dock. The listing claims 90 days between empties and a pet-hair setup. Confirm what is in the box.",
  },
  {
    name: "Ring Battery Doorbell 2K",
    price: "$39.99",
    was: "$99.99",
    off: "60% off",
    href: s("Ring Battery Doorbell 2K"),
    image: "/assets/images/no_image.png",
    text: "Battery doorbell, 2K video, two-way talk, speckled gray. No wiring. A Ring subscription is separate if you want stored video.",
  },
  {
    name: "Echo Show 11",
    price: "$149.99",
    was: "$249.99",
    off: "40% off",
    href: s("Echo Show 11"),
    image: "/assets/images/no_image.png",
    text: "11-inch Alexa screen with spatial audio, graphite. Useful in a kitchen. Video calls and smart-home controls need the Alexa setup.",
  },
  {
    name: "Dyson Cyclone V10 Origin",
    price: "$329.99",
    was: "$479.99",
    off: "31% off",
    href: s("Dyson Cyclone V10 Origin"),
    image: "/assets/images/no_image.png",
    text: "Cordless stick vacuum, Origin trim. Lighter than a full Dyson kit. Check the tool count on the listing before you buy.",
  },
  {
    name: "iPad mini, A17 Pro, 128GB",
    price: "$499",
    was: "$599",
    off: "17% off",
    href: s("iPad mini A17 Pro 128GB"),
    image: "/assets/images/no_image.png",
    text: "8.3-inch Liquid Retina, 128GB, Wi-Fi, space gray. The small iPad, not the Air or the Pro.",
  },
  {
    name: "Ring Floodlight Cam Wired Plus",
    price: "$89.99",
    was: "$179.99",
    off: "50% off",
    href: s("Ring Floodlight Cam Wired Plus"),
    image: "/assets/images/no_image.png",
    text: "Wired outdoor camera with motion floodlights and 1080p. Needs power at the mount. White on this listing.",
  },
  {
    name: "Beats Studio Pro",
    price: "$149.95",
    was: "$299.99",
    off: "50% off",
    href: s("Beats Studio Pro"),
    image: "/assets/images/no_image.png",
    text: "Over-ear headphones, active noise cancelling, USB-C, up to 40 hours. Works with Apple and Android. Black on this listing.",
  },
  {
    name: "Blink Outdoor 4, 5-camera kit",
    price: "$104.99",
    was: "$299.99",
    off: "65% off",
    href: s("Blink Outdoor 4 5 camera system"),
    image: "/assets/images/no_image.png",
    text: "Five wireless cameras plus the Sync Module. The listing says a two-year battery and 1080p. Cloud storage is a separate Blink plan.",
  },
];

export const metadata: Metadata = {
  title: "October deals we checked — Gadgets Finds",
  description:
    "Twelve Lightning Deals seen on October 4, 2026. Prices change. Each card links to the current Amazon listing.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/october-deals" },
  openGraph: {
    title: "October deals we checked",
    description: "Twelve listings seen on October 4. Prices change.",
    url: "https://www.gadgets-finds.com/october-deals",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Gadgets Finds" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "October deals we checked",
    images: ["/og-home.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-24 md:pt-16">
        <div className="container mx-auto px-4 pt-4 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Deals</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            October deals we checked
          </h1>
          <p className="text-sm text-muted-foreground mb-6">By Gadgets Finds · October 4, 2026</p>
          <p className="text-muted-foreground mb-10">
            Twelve Lightning Deals seen on Amazon on October 4. The percentage is against the
            list price on that card, not a promise it is the lowest price of the year. Stock and
            price can change before you click.
          </p>

          <div className="space-y-10">
            {deals.map((d) => (
              <section key={d.name} className="border-b border-border pb-10">
                <AppImage
                  src={d.image}
                  alt={d.name}
                  className="w-full max-h-56 object-contain mb-4"
                />
                <h2 className="text-2xl font-bold text-foreground mb-2">{d.name}</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">{d.price}</span>
                  {" · "}
                  list {d.was}
                  {" · "}
                  {d.off} when checked
                </p>
                <p className="text-muted-foreground mb-4">{d.text}</p>
                <a
                  href={d.href}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
                >
                  Check price on Amazon
                </a>
              </section>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
