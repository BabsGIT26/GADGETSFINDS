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
    asin: "B0C6F1T6N8",
    image: "https://m.media-amazon.com/images/I/71K8e5b0J0L.jpg",
  },
  {
    name: "Blink Outdoor 4 — Add-on Camera",
    price: "$23.99",
    original: "$69.99",
    discount: "66%",
    asin: "B0B1N7LJD3",
    image: "https://m.media-amazon.com/images/I/61gB5g0Q0L.jpg",
  },
  {
    name: "Dyson V9 Motorbar Cordless Vacuum",
    price: "$269.95",
    original: "$599.99",
    discount: "55%",
    asin: "B0B8F5H5R5",
    image: "https://m.media-amazon.com/images/I/61X8e5b0J0L.jpg",
  },
  {
    name: "Blink Battery Doorbell 2K+ + Outdoor Bundle",
    price: "$119.99",
    original: "$410+",
    discount: "71%",
    asin: "B0GNVFFZRP",
    image: "https://m.media-amazon.com/images/I/71gB5g0Q0L.jpg",
  },
  {
    name: "EA Sports NHL 27 — PS5",
    price: "$34.99",
    original: "$69.99",
    discount: "50%",
    asin: "B0H8QND851",
    image: "https://m.media-amazon.com/images/I/71xf3vrARiL.jpg",
  },
  {
    name: "Blink Mini Pan-Tilt 2K+",
    price: "$19.99",
    original: "$49.99",
    discount: "60%",
    asin: "B0GZLXWN8X",
    image: "https://m.media-amazon.com/images/I/61gB5g0Q0L.jpg",
  },
  {
    name: "Marvel’s Spider-Man 2 — PS5",
    price: "$29.99",
    original: "$69.99",
    discount: "57%",
    asin: "B0C7WQRCPB",
    image: "https://m.media-amazon.com/images/I/81K8e5b0J0L.jpg",
  },
  {
    name: "CHEFMAN Multifunctional Air Fryer+",
    price: "$69.99",
    original: "$139.99",
    discount: "50%",
    asin: "B0B8F5H5R6",
    image: "https://m.media-amazon.com/images/I/71K8e5b0J0L.jpg",
  },
  {
    name: "HP Everyday Slim Laptop (2027)",
    price: "$319.99",
    original: "$699.99",
    discount: "54%",
    asin: "B0H4L4J1VD",
    image: "https://m.media-amazon.com/images/I/61X8e5b0J0L.jpg",
  },
  {
    name: "Compressed Air Duster 280,000 RPM",
    price: "$28.98",
    original: "$83.99",
    discount: "65%",
    asin: "B0H4L4J1VC",
    image: "https://m.media-amazon.com/images/I/61gB5g0Q0L.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-6xl">
          <p className="text-xs md:text-sm text-foreground mb-4">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases.
            Prices and stock change on Amazon.
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Early Black Friday Deals
          </h1>
          <p className="text-muted-foreground mb-10">
            Deals with 50% or more off. Always check the current price on Amazon before buying.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => {
              const href = `https://www.amazon.com/dp/${deal.asin}?tag=gadgetsfindswebsite-20`;
              return (
                <div
                  key={deal.asin}
                  className="border border-border rounded-xl p-5 bg-card hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                    -{deal.discount}
                  </div>
                  <h2 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">
                    {deal.name}
                  </h2>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg font-bold text-foreground">{deal.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{deal.original}</span>
                  </div>
                  <AmazonButton href={href} className="w-full text-center">
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
