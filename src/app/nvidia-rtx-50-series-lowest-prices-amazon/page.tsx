import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lowest Prices for NVIDIA RTX 50-Series GPUs on Amazon Right Now — Gadgets Finds",
  description:
    "Current lowest prices for high-end RTX 5090, 5080, 5070 Ti, 5070, and 5060 Ti cards on Amazon as prices skyrocket. Check stock and deals.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/nvidia-rtx-50-series-lowest-prices-amazon",
  },
  openGraph: {
    title: "NVIDIA RTX 50-Series Lowest Amazon Prices Right Now",
    description: "Best current deals on RTX 5090, 5080, 5070 Ti and more as GPU prices climb.",
    url: "https://www.gadgets-finds.com/nvidia-rtx-50-series-lowest-prices-amazon",
    siteName: "Gadgets Finds",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            As an Amazon Associate, we may earn from qualifying purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">GPUs</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Lowest Prices for NVIDIA RTX 50-Series GPUs on Amazon Right Now
          </h1>
          <p className="text-muted-foreground mb-6">
            High-end NVIDIA RTX 50-series graphics cards are in high demand and prices have skyrocketed far above original MSRP. Here are the lowest prices we found on Amazon at the time of writing for the main models. Stock is limited and these numbers can change by the hour.
          </p>

          {/* RTX 5090 */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5090</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $7,680.96<br />
                <strong>Card:</strong> ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition<br />
                <strong>ASIN:</strong> B0DTHV8THW<br />
                <strong>Status:</strong> Currently unavailable (out of stock)
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0DTHV8THW?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5090 ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/811IbTkEvnL.jpg"
              alt="ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          {/* RTX 5080 */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5080</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $2,211.17<br />
                <strong>Card:</strong> PNY NVIDIA GeForce RTX 5080 Triple-Fan 16GB GDDR7<br />
                <strong>ASIN:</strong> B0DYRZZJZ1<br />
                <strong>Delivery:</strong> FREE delivery Tue, Nov 3<br />
                <strong>Note:</strong> Customers report strong performance; mixed feedback on noise levels.
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0DYRZZJZ1?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5080 ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/71oOraaImGL.jpg"
              alt="PNY NVIDIA GeForce RTX 5080 Triple-Fan 16GB GDDR7"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          {/* RTX 5070 Ti */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5070 Ti</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $1,389.99<br />
                <strong>Card:</strong> ASUS TUF Gaming GeForce RTX 5070 Ti 16GB GDDR7 OC Edition<br />
                <strong>ASIN:</strong> B0DS6WTXGP<br />
                <strong>Delivery:</strong> Nov 8–12
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0DS6WTXGP?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5070 Ti ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/81POeoI3lSL.jpg"
              alt="ASUS TUF Gaming GeForce RTX 5070 Ti 16GB GDDR7 OC Edition"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          {/* RTX 5070 */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5070</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $999.99<br />
                <strong>Card:</strong> NVIDIA GeForce RTX 5070 12GB GDDR7 Founders Edition<br />
                <strong>ASIN:</strong> B0F7XHBT13<br />
                <strong>Delivery:</strong> Nov 5<br />
                <strong>Note:</strong> Official NVIDIA reference design.
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0F7XHBT13?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5070 ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://www.techpowerup.com/gpu-specs/images-new/b/12306-front-thumb.jpg"
              alt="NVIDIA GeForce RTX 5070 12GB GDDR7 Founders Edition"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          {/* RTX 5060 Ti 8GB */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5060 Ti (8GB)</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $547.99<br />
                <strong>Card:</strong> ASUS Dual GeForce RTX 5060 Ti 8GB GDDR7 OC Edition<br />
                <strong>ASIN:</strong> B0F7W1KVT3<br />
                <strong>Delivery:</strong> Nov 3
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0F7W1KVT3?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5060 Ti 8GB ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/41LK8D7pR7L._SL500_.jpg"
              alt="ASUS Dual GeForce RTX 5060 Ti 8GB GDDR7 OC Edition"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          {/* RTX 5060 Ti 16GB */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-10 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">RTX 5060 Ti (16GB)</h2>
              <p className="text-muted-foreground mb-2">
                <strong>Lowest price:</strong> $788.99<br />
                <strong>Card:</strong> ASUS Prime GeForce RTX 5060 Ti 16GB GDDR7<br />
                <strong>ASIN:</strong> B0F4RZDFD5<br />
                <strong>Delivery:</strong> Nov 2–4
              </p>
              <div className="mb-2">
                <a
                  href="https://www.amazon.com/dp/B0F4RZDFD5?tag=gadgetsfindswebsmediavid-20"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
                >
                  VIEW RTX 5060 Ti 16GB ON AMAZON
                </a>
              </div>
            </div>
            <img
              src="https://m.media-amazon.com/images/I/81aN+w8d4GL.jpg"
              alt="ASUS Prime GeForce RTX 5060 Ti 16GB GDDR7"
              className="w-48 h-auto rounded-lg object-contain flex-shrink-0 mx-auto md:mx-0"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What to know before buying</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Prices on high-end RTX 50-series cards are currently far above original launch MSRP due to strong demand.</li>
            <li>Always check the live Amazon page for current price, stock, seller rating, and return policy.</li>
            <li>Confirm you are buying the exact model (VRAM amount, cooler type, etc.) and not a different SKU.</li>
            <li>Delivery dates and availability can shift quickly.</li>
            <li>These listings were the lowest we spotted at the time of writing — they may no longer be the cheapest by the time you read this.</li>
          </ul>

          <AmazonDealBox productName="NVIDIA RTX 50-Series GPUs" href="https://www.amazon.com/s?k=RTX+50+series&tag=gadgetsfindswebsmediavid-20" />

          <div className="flex justify-end mt-8 mb-2">
            <Link
              href="/homepage"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
