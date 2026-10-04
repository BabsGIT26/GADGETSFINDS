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
    image: "/assets/images/airpods_pro_3.png",
    text: "In-ear Apple buds with active noise cancelling, spatial audio, and a USB-C case. This generation adds live translation, heart-rate sensing, and a hearing-aid feature on the listing. At $179 against a $249 list price, it is one of the clearer cuts in the set, if the Lightning Deal is still on.",
  },
  {
    name: "MacBook Air 13-inch, M5, 512GB",
    price: "$1,099",
    was: "$1,299",
    off: "15% off",
    href: s("MacBook Air 13 M5 512GB"),
    image: "/assets/images/macbook_air_13_m5.png",
    text: "The smaller Air: 13.6-inch Liquid Retina, M5, 16GB memory, 512GB storage, midnight. Enough for school, writing, and light photo work without the 15-inch price. The deal is $200 off the list price, not a clearance.",
  },
  {
    name: "Fire HD 10",
    price: "$72.99",
    was: "$154.99",
    off: "53% off",
    href: s("Amazon Fire HD 10"),
    image: "/assets/images/fire_hd_10.png",
    text: "A 10.1-inch Full HD tablet with 4GB of RAM and 32GB of storage, in black. It is for video, books, and a browser, not for replacing a laptop. Half off the list price is why it is here. Storage is tight if you download a lot.",
  },
  {
    name: "MacBook Air 15-inch, M5, 512GB",
    price: "$1,299",
    was: "$1,499",
    off: "13% off",
    href: s("MacBook Air 15 M5 512GB"),
    image: "/assets/images/macbook_air_15_m5.png",
    text: "Same M5, 16GB, and 512GB as the 13-inch, on a 15.3-inch screen. Sky Blue on this card. Buy it if you want the larger display. The cut is only $200, so compare it with the 13-inch before you pay the difference.",
  },
  {
    name: "iRobot Roomba 415X",
    price: "$398.99",
    was: "$799.99",
    off: "50% off",
    href: s("iRobot Roomba 415X"),
    image: "/assets/images/roomba_415x.png",
    text: "A robot vacuum and mop with a dock that empties itself. The listing cites 20,000Pa, obstacle avoidance, and a pet-hair setup. Half off is the reason to look. Confirm the dock is in the box, and that your rooms are not all thick carpet.",
  },
  {
    name: "Ring Battery Doorbell 2K",
    price: "$39.99",
    was: "$99.99",
    off: "60% off",
    href: s("Ring Battery Doorbell 2K"),
    image: "/assets/images/ring_doorbell_2k.png",
    text: "A battery doorbell with 2K video, wide angle, and two-way talk. No wiring. Speckled gray on this listing. Stored video needs a Ring plan, which is not in the $39.99. The hardware discount is real. The subscription is separate.",
  },
  {
    name: "Echo Show 11",
    price: "$149.99",
    was: "$249.99",
    off: "40% off",
    href: s("Echo Show 11"),
    image: "/assets/images/echo_show_11.png",
    text: "An 11-inch Alexa screen with a larger viewing area and spatial audio, in graphite. Useful for timers, cameras, and a recipe while you cook. Forty percent off the list price. It is still an Alexa device, not a tablet.",
  },
  {
    name: "Dyson Cyclone V10 Origin",
    price: "$329.99",
    was: "$479.99",
    off: "31% off",
    href: s("Dyson Cyclone V10 Origin"),
    image: "/assets/images/dyson_v10_origin.png",
    text: "Dyson’s cordless stick in the Origin trim, $150 under the list price. Lighter than a corded vacuum, with a smaller tool set than the higher V10 kits. Check the head included on the card so you are not buying a bare motor.",
  },
  {
    name: "iPad mini, A17 Pro, 128GB",
    price: "$499",
    was: "$599",
    off: "17% off",
    href: s("iPad mini A17 Pro 128GB"),
    image: "/assets/images/ipad_mini_a17.png",
    text: "The 8.3-inch iPad, A17 Pro, 128GB, Wi-Fi, space gray. Easy to hold for reading and notes. The cut is $100, the smallest percent on this page. Skip it if you need a laptop keyboard. This is the mini, not the Air.",
  },
  {
    name: "Ring Floodlight Cam Wired Plus",
    price: "$89.99",
    was: "$179.99",
    off: "50% off",
    href: s("Ring Floodlight Cam Wired Plus"),
    image: "/assets/images/ring_floodlight_cam.png",
    text: "A wired outdoor camera with motion floodlights and 1080p, in white. It needs power at the mount, unlike the battery doorbell above. Half off the list price. Same Ring plan question if you want saved clips.",
  },
  {
    name: "Beats Studio Pro",
    price: "$149.95",
    was: "$299.99",
    off: "50% off",
    href: s("Beats Studio Pro"),
    image: "/assets/images/beats_studio_pro.png",
    text: "Over-ear Beats with active noise cancelling, USB-C, and a listed 40-hour battery. Works with Apple and Android. Black on this card. Half off is a real cut for this model. Not a substitute for AirPods if you live in the Apple auto-switch.",
  },
  {
    name: "Blink Outdoor 4, 5-camera kit",
    price: "$104.99",
    was: "$299.99",
    off: "65% off",
    href: s("Blink Outdoor 4 5 camera system"),
    image: "/assets/images/blink_outdoor_4.png",
    text: "Five wireless cameras plus the Sync Module. The listing says 1080p and a two-year battery. The deepest cut on the page, against a $299.99 list. Cloud storage is a Blink plan, not part of the hardware price.",
  },
];

export const metadata: Metadata = {
  title: "12 deals worth opening before October Prime Day",
  description:
    "Twelve Prime Day listings checked on October 4, 2026: AirPods Pro 3, MacBook Air M5, Fire HD 10, Roomba, Ring, Echo Show, Dyson, iPad mini, Beats, Blink. Prices change.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/october-deals" },
  openGraph: {
    title: "12 deals worth opening before October Prime Day",
    description: "AirPods, MacBook, Ring, Blink and more. Prices change.",
    url: "https://www.gadgets-finds.com/october-deals",
    siteName: "Gadgets Finds",
    type: "article",
    images: [{ url: "/october_deals.png", width: 1200, height: 630, alt: "October Prime Day deals" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "12 deals worth opening before October Prime Day",
    images: ["/october_deals.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-34 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-black mb-3 leading-relaxed">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            Some product images on this page come from Amazon. This content is provided as is
            and may change or be removed at any time.
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Deals</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            These 12 deals are worth opening before October Prime Day
          </h1>
          <p className="text-sm text-muted-foreground mb-6">By Gadgets Finds · October 4, 2026</p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Prime Big Deal Days is October 6–7. These twelve were already on Lightning Deals
            on October 4. The percent is against the list price on that card, not a promise it
            is the lowest price of the year. Open the listing before you treat the number as live.
          </p>
          <div className="space-y-10">
            {deals.map((d) => (
              <section key={d.name} className="border-b border-border pb-10">
                <AppImage src={d.image} alt={d.name} className="w-full max-h-64 object-contain mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">{d.name}</h2>
                <p className="text-sm text-foreground mb-3">
                  <span className="font-semibold">{d.price}</span>
                  {" · "}list {d.was}{" · "}{d.off} when checked
                </p>
                <p className="text-base text-muted-foreground mb-4 leading-relaxed">{d.text}</p>
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
