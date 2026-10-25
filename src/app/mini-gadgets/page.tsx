import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini Gadgets — Gadgets Finds",
  description: "Small useful gadgets for everyday carry. Screen cleaners, tools, and compact accessories.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/mini-gadgets" },
  openGraph: {
    title: "Mini Gadgets",
    description: "Small useful gadgets and accessories.",
    url: "https://www.gadgets-finds.com/mini-gadgets",
    siteName: "Gadgets Finds",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Mini Gadgets" }],
  },
};

const gadgets = [
  {
    title: "YTT Touchscreen Screen Cleaner Spray",
    href: "/ytt-touchscreen-cleaner",
    image: "https://m.media-amazon.com/images/I/71dnnsMpNpL._AC_UL450_SY450_QL70_.jpg",
    excerpt: "Two-in-one spray and microfiber cloth for phones, tablets, laptops, and car screens.",
  },
  {
    title: "Outlet Extender Stick for Behind Couch",
    href: "/outlet-extender-stick",
    image: "https://m.media-amazon.com/images/I/51DW7RN3fEL.jpg",
    excerpt: "Bring hard-to-reach outlets behind couches and desks within easy reach.",
  },
  {
    title: "Ultra-Slim Magnetic Power Bank",
    href: "/ultra-slim-magnetic-power-bank",
    image: "https://m.media-amazon.com/images/I/51FsefzzP3L.jpg",
    excerpt: "Ultra-thin MagSafe-compatible power bank with Qi2 wireless charging.",
  },
  {
    title: "Apple AirTag",
    href: "/apple-airtag",
    image: "https://m.media-amazon.com/images/I/61Qd9Z9caRL.jpg",
    excerpt: "Precision tracker that works with the Find My network.",
  },
  {
    title: "USB-C Power Meter",
    href: "/usb-c-power-meter",
    image: "https://m.media-amazon.com/images/I/61xiYeMNojL.jpg",
    excerpt: "Test voltage, current, and wattage of your chargers and cables.",
  },
  {
    title: "Mini GaN Charger 65W",
    href: "/mini-gan-charger-65w",
    image: "https://m.media-amazon.com/images/I/51nKMY3u+hL.jpg",
    excerpt: "Compact GaN charger with multiple ports for phones and laptops.",
  },
  {
    title: "Phone Cooler Ice Card",
    href: "/phone-cooler-ice-card",
    image: "https://m.media-amazon.com/images/I/71K3I5p0FDL.jpg",
    excerpt: "Magnetic phone cooler that keeps your phone cool during gaming.",
  },
  {
    title: "Ultra-Mini Webcam",
    href: "/ultra-mini-webcam",
    image: "https://m.media-amazon.com/images/I/51OZ72zdwsL.jpg",
    excerpt: "Tiny 4K webcam that fits in a pocket for video calls.",
  },
  {
    title: "Anker MagGo Power Bank",
    href: "/anker-maggo-power-bank",
    image: "https://m.media-amazon.com/images/I/61DzAk62YOL.jpg",
    excerpt: "Qi2 MagSafe power bank with smart display and foldable stand.",
  },
  {
    title: "KeySmart SmartCard Tracker",
    href: "/keysmart-smartcard-tracker",
    image: "https://m.media-amazon.com/images/I/71zeGEFy1aL.jpg",
    excerpt: "Ultra-thin credit card size Find My tracker that recharges wirelessly.",
  },
  {
    title: "OLIGHT iMini 2 Flashlight",
    href: "/olight-imini-2-flashlight",
    image: "https://m.media-amazon.com/images/I/51vdV5DwSrL.jpg",
    excerpt: "Tiny rechargeable keychain flashlight with magnetic base.",
  },
  {
    title: "UGREEN Nexode Mini 30W",
    href: "/ugreen-nexode-mini-30w",
    image: "https://m.media-amazon.com/images/I/51NSj7CbggL.jpg",
    excerpt: "Ultra-compact GaN 30W USB-C charger with foldable plug.",
  },
  {
    title: "Magnetic Phone Stand Wallet",
    href: "/magnetic-phone-stand-wallet",
    image: "https://m.media-amazon.com/images/I/61rNbqA6c6L.jpg",
    excerpt: "MagSafe wallet that doubles as a kickstand for your phone.",
  },
  {
    title: "Mini Electric Air Duster",
    href: "/mini-electric-air-duster",
    image: "https://m.media-amazon.com/images/I/81SEN6oNw1L._AC_SX425_.jpg",
    excerpt: "Cordless compressed air duster for keyboards and electronics.",
  },
  {
    title: "USB-C Cable Organizer",
    href: "/usb-c-cable-organizer",
    image: "https://m.media-amazon.com/images/I/61wCD0dNMUL.jpg",
    excerpt: "Magnetic cable holder that keeps your desk tidy.",
  },
  {
    title: "Portable Phone Tripod",
    href: "/portable-phone-tripod",
    image: "https://m.media-amazon.com/images/I/410XMoHbuPL.jpg",
    excerpt: "Foldable mini tripod with phone clamp for video and photos.",
  },
  {
    title: "LED Keychain Light",
    href: "/led-keychain-light",
    image: "https://m.media-amazon.com/images/I/61pU8V8MjAL.jpg",
    excerpt: "Bright rechargeable keychain light for everyday carry.",
  },
  {
    title: "Mini SSD Enclosure",
    href: "/mini-ssd-enclosure",
    image: "https://m.media-amazon.com/images/I/61DdBzVRhmL.jpg",
    excerpt: "Compact MagSafe-compatible enclosure for NVMe SSDs.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-black text-white pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <p className="text-xs text-gray-400 mb-6">
            <span className="text-red-500 font-semibold">Disclosure:</span> Gadgets Finds is an
            Amazon Associate. We may earn from qualifying purchases.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">Mini Gadgets</h1>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl">
            Small tools and accessories that solve everyday annoyances.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {gadgets.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition-colors h-full"
              >
                <div className="aspect-square bg-zinc-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-2 flex flex-col flex-1">
                  <h2 className="font-semibold text-sm mb-1 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-400 line-clamp-2 flex-1">{item.excerpt}</p>
                  <span className="inline-block mt-2 text-red-500 text-xs font-medium">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
