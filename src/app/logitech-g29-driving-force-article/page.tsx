import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON =
  "https://www.amazon.com/dp/B00Z0UWWYC?tag=gadgetsfindswebsite-20";

const OG_IMAGE = "https://m.media-amazon.com/images/I/61n0gQ9vBKL.jpg";

export const metadata: Metadata = {
  title: "Logitech G29 Driving Force Racing Wheel and Pedals | Gadgets Finds",
  description:
    "Logitech G29 Driving Force Racing Wheel and Floor Pedals for PS5, PS4, PC and Mac. Dual-motor force feedback, stainless steel paddle shifters, leather wheel cover. Price changes on Amazon.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: {
    canonical: "https://www.gadgets-finds.com/logitech-g29-driving-force-article",
  },
  openGraph: {
    title: "Logitech G29 Driving Force Racing Wheel and Pedals",
    description: "Force feedback racing wheel and pedals for PS5, PS4, PC and Mac. Price and stock change.",
    url: "https://www.gadgets-finds.com/logitech-g29-driving-force-article",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Logitech G29 Driving Force Racing Wheel and Pedals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Logitech G29 Driving Force Racing Wheel and Pedals",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-28 md:pt-16">
        <div className="container mx-auto px-4 pt-2 pb-10 max-w-3xl">
          <p className="text-sm text-foreground mb-3">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gaming Equipment
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Logitech G29 Driving Force Racing Wheel and Floor Pedals
          </h1>
          <p className="text-muted-foreground mb-6">
            Dual-motor force feedback racing wheel with stainless steel paddle shifters, hand-stitched leather cover, and adjustable floor pedals. Compatible with PS5, PS4, PC and Mac. Price and stock change on Amazon.
          </p>

          <a
            href={AMAZON}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-3 rounded-md"
          >
            VIEW ON AMAZON
          </a>

          <div className="my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/AMuIo_C144U"
              title="Logitech G29 Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">What this is</h2>
          <p className="text-muted-foreground mb-4">
            The Logitech G29 Driving Force is a classic entry-level sim racing wheel and pedal set. It uses dual motors for force feedback so you feel tire slip, understeer, and road texture. The wheel turns up to 900 degrees lock-to-lock.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://m.media-amazon.com/images/I/61n0gQ9vBKL.jpg"
              alt="Logitech G29 Driving Force Racing Wheel and Pedals"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Dual-motor force feedback with helical gearing</li>
            <li>900-degree lock-to-lock rotation</li>
            <li>Hand-stitched leather wheel cover</li>
            <li>Stainless steel paddle shifters</li>
            <li>3 adjustable floor pedals (throttle, brake, clutch)</li>
            <li>RPM LED indicator and integrated controls</li>
            <li>Compatible with PS5, PS4, PC and Mac</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Beginners and casual sim racers who want a complete wheel + pedals package that works on PlayStation and PC. It is one of the most popular starter wheels still sold today.
          </p>

          <div className="w-full flex justify-center py-6 mb-6">
            <AppImage
              src="https://www.bhphotovideo.com/images/fb/logitech_941_000110_g29_driving_force_racing_1374569.jpg"
              alt="Logitech G29 wheel and pedals side by side"
              className="max-h-[400px] w-auto max-w-full object-contain rounded-lg"
            />
          </div>

          <p className="text-muted-foreground mb-4">
            Skip it if you want direct-drive smoothness or higher torque. Newer entry-level direct-drive wheels exist, but the G29 remains a reliable, widely supported option.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Before you click</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Confirm platform compatibility (G29 = PS5/PS4/PC; G920 is the Xbox version).</li>
            <li>Price and stock change frequently. Recheck the Amazon page.</li>
            <li>Optional shifter is sold separately.</li>
            <li>Clamp or cockpit mounting recommended for stability.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            A proven force-feedback racing wheel and pedal set for PS5, PS4 and PC. Open the Amazon listing for the current price, what’s included, and availability.
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <AppImage
              src={OG_IMAGE}
              alt="Logitech G29 Driving Force"
              className="max-h-[400px] w-auto max-w-full object-contain"
            />
          </div>

          <AmazonDealBox
            productName="Logitech G29 Driving Force Racing Wheel and Pedals"
            href={AMAZON}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
