import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonButton from "@/components/common/AmazonButton";

export const metadata: Metadata = {
  title: "Early Black Friday Deals | Gadgets Finds",
  description: "Early Black Friday deals with 50% or more off on gadgets, gaming, and more. Prices and stock change on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/early-black-friday-deals",
  },
};

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
    image: "https://m.media-amazon.com/images/I/61x5eQvJ8bL._AC_SL1500_.jpg",
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
    image: "https://m.media-amazon.com/images/I/61Qj3mYqYL._AC_SL1500_.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <p className="text-xs md:text-sm text-foreground mb-4">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
            Prices and stock change on Amazon.
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Early Black Friday Deals
          </h1>
          <p className="text-muted-foreground mb-8">
            Deals with 50% or more off. Always check the current price on Amazon before buying.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deals.map((deal) => {
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
                  <AmazonButton href={href} className="w-full text-center text-xs py-2">
                    View on Amazon
                  </AmazonButton>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
