"use client";

import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonButton from "@/components/common/AmazonButton";

const deals = [
  {
    name: "EA Sports FC 27 — PS5",
    price: "$34.99",
    original: "$69.99",
    discount: "50%",
    asin: "B0H9SYK5Q7",
    image: "https://m.media-amazon.com/images/I/71xf3vrARiL.jpg",
  },
  {
    name: "Stanley Quencher H2.0 — 40 oz Black",
    price: "$22.50",
    original: "$45.00",
    discount: "50%",
    asin: "B0CP9Z1S51",
    image: "https://m.media-amazon.com/images/I/611FshOQWjL.jpg",
  },
  {
    name: "Ring Battery Doorbell 2K",
    price: "$39.99",
    original: "$99.99",
    discount: "60%",
    asin: "B0G2D1R15Q",
    image: "https://kotaku.com/app/uploads/2026/11/Ring-Battery-Doorbell-2K.jpg",
  },
  {
    name: "Blink Outdoor 4 — Add-on Camera",
    price: "$23.99",
    original: "$69.99",
    discount: "66%",
    asin: "B0B1N7LJD3",
    image: "https://www.trustedreviews.com/wp-content/uploads/sites/7/2026/09/hero-tr.jpg",
  },
  {
    name: "Dyson V9 Motorbar Cordless Vacuum",
    price: "$269.95",
    original: "$599.99",
    discount: "55%",
    asin: "B0FCVM3PZN",
    image: "https://i5.walmartimages.com/seo/Dyson-V9-Motorbar-Cordless-Vacuum-Nickel-New_e6b02de1-a5ca-42c9-bba1-783f1cb5c77c.c7e90543c1bb8f574aaea50cfb0aecae.jpeg",
  },
  {
    name: "Blink Battery Doorbell 2K+ + Outdoor Bundle",
    price: "$119.99",
    original: "$410+",
    discount: "71%",
    asin: "B0GNVFFZRP",
    image: "https://lifehacker.com/imagery/articles/01M3KJG4896P11FWW2XT7TMYH2/hero-image.fill.size_1200x675.png",
  },
  {
    name: "EA Sports NHL 27 — PS5",
    price: "$34.99",
    original: "$69.99",
    discount: "50%",
    asin: "B0H8QND851",
    image: "https://m.media-amazon.com/images/I/61EdXiKSHjL.jpg",
  },
  {
    name: "Blink Mini Pan-Tilt 2K+",
    price: "$19.99",
    original: "$49.99",
    discount: "60%",
    asin: "B0GZLXWN8X",
    image: "https://www.androidauthority.com/wp-content/uploads/2026/08/Blink-Mini-Pan-Tilt-Camera-Press-Image.jpg",
  },
  {
    name: "Marvel’s Spider-Man 2 — PS5",
    price: "$29.99",
    original: "$69.99",
    discount: "57%",
    asin: "B0C7WQRCPB",
    image: "https://m.media-amazon.com/images/I/81WUPcfQ9OL.jpg",
  },
  {
    name: "CHEFMAN Multifunctional Air Fryer+",
    price: "$69.99",
    original: "$139.99",
    discount: "50%",
    asin: "B08DL8WH9V",
    image: "https://chefman.com/cdn/shop/files/RJ38-10-RDO-V2_INFO-1.jpg?v=1738269664",
  },
  {
    name: "HP Everyday Slim Laptop (2027)",
    price: "$319.99",
    original: "$699.99",
    discount: "54%",
    asin: "B0H3KV46ZX",
    image: "https://m.media-amazon.com/images/I/71MIJ2pvp2L.jpg",
  },
  {
    name: "Compressed Air Duster 280,000 RPM",
    price: "$28.98",
    original: "$83.99",
    discount: "65%",
    asin: "B0H4L4J1VC",
    image: "https://i5.walmartimages.com/seo/Compressed-Air-Duster-280000-RPM-Electric-Air-Duster-Rechargeable-Air-Duster-C-Keyboard-Cleaner-4-Speeds_21e0e1b2-47a8-4d17-98e5-2a11ea17fc78.a48f2377561d3c3d327c8505ed04067f.jpeg",
  },
  {
    name: "Ring Outdoor Cam 2K",
    price: "$49.99",
    original: "$99.99",
    discount: "50%",
    asin: "B0C5QRZ47P",
    image: "https://cdn.shopify.com/s/files/1/0641/9388/8321/files/50070228_685362.png?v=1776229535",
  },
  {
    name: "Fire TV Stick HD",
    price: "$19.99",
    original: "$39.99",
    discount: "50%",
    asin: "B0CQMRKRV5",
    image: "https://m.media-amazon.com/images/I/51GHEdUznQL._AC_SL1000_.jpg",
  },
  {
    name: "Skullcandy Crusher ANC 2 Headphones",
    price: "$119.99",
    original: "$239.99",
    discount: "50%",
    asin: "B0C9L8ZR6Q",
    image: "https://m.media-amazon.com/images/I/71ew5pFViAL.jpg",
  },
  {
    name: "Soundcore P31i Noise Cancelling Earbuds",
    price: "$29.99",
    original: "$59.99",
    discount: "50%",
    asin: "B0FNWCYLZN",
    image: "https://m.media-amazon.com/images/I/61fZoNoybhL.jpg",
  },
  // Deals from 40%
  {
    name: "Vitamix 5200 Professional-Grade Blender",
    price: "$299.95",
    original: "$499.95",
    discount: "40%",
    asin: "B008H4SLV6",
    image: "https://m.media-amazon.com/images/I/71SwPHuwR-L.jpg",
  },
  {
    name: "Keurig K-Express Coffee Maker",
    price: "$59.99",
    original: "$109.99",
    discount: "45%",
    asin: "B09715G57M",
    image: "https://m.media-amazon.com/images/I/617ScgWbpLL.jpg",
  },
];

export default function Page() {
  const [showAll, setShowAll] = useState(false);
  const visibleDeals = showAll ? deals : deals.slice(0, 16);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <p className="text-xs md:text-sm text-foreground mb-4">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
            Prices and stock change on Amazon.
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
            Early Black Friday Deals
          </h1>
          <p className="text-muted-foreground mb-8">
            Deals with 40% or more off. Always check the current price on Amazon before buying.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleDeals.map((deal) => {
              const href = `https://www.amazon.com/dp/${deal.asin}?tag=gadgetsfindswebsite-20`;
              return (
                <div
                  key={deal.asin}
                  className="border border-border rounded-lg p-4 bg-card hover:shadow-sm transition-shadow"
                >
                  <div className="h-40 bg-muted rounded-md mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="inline-block bg-red-600 text-white text-[11px] font-bold px-1.5 py-0.5 rounded mb-1.5">
                    -{deal.discount}
                  </div>
                  <h2 className="font-semibold text-foreground text-xs mb-1.5 line-clamp-2 leading-tight">
                    {deal.name}
                  </h2>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-base font-bold text-foreground">{deal.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{deal.original}</span>
                  </div>
                  <AmazonButton
                    href={href}
                    productName={deal.name}
                    asin={deal.asin}
                    className="w-full text-center text-xs py-2"
                  >
                    View on Amazon
                  </AmazonButton>
                </div>
              );
            })}
          </div>

          {!showAll && deals.length > 16 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View More
              </button>
            </div>
          )}

          {/* Live limited-time mini box */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.amazon.com/deals?&linkCode=ll2&tag=gadgetsfindswebsite-20&linkId=19abd9c9095f43007bb1681ce0f8ccc1&language=en_US&ref_=as_li_ss_tl"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full max-w-md rounded-xl border-2 border-red-600 bg-red-50 dark:bg-red-950/40 p-4 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="absolute top-2 right-2 flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide animate-pulse">
                  Live
                </span>
              </div>

              <div className="text-center">
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1 animate-pulse">
                  Limited Time Deal
                </p>
                <p className="text-lg font-extrabold text-red-700 dark:text-red-400 leading-tight">
                  See more Early Black Friday deals
                </p>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  on Amazon →
                </p>
              </div>

              <div className="mt-3 h-1 bg-red-200 dark:bg-red-900 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 animate-pulse" style={{ width: '70%' }} />
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
