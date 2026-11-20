import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import RelatedGuides from "@/components/common/RelatedGuides";
import GuideFaq, { ProductListJsonLd } from "@/components/common/GuideFaq";

export const metadata: Metadata = {
  title: "Best Smartwatches Under $350 in 2026 | Gadgets Finds",
  description:
    "Four new smartwatches under $350: Apple Watch SE 3, Samsung Galaxy Watch 7, Garmin Forerunner 165, and Pixel Watch 3. Phone match, battery, and exact listings.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-smartwatches-under-350" },
  openGraph: {
    title: 'Best Smartwatches Under $350 in 2026',
    description: 'Apple Watch SE 3, Galaxy Watch 7, Garmin Forerunner 165, and Pixel Watch 3.',
    url: 'https://www.gadgets-finds.com/best-smartwatches-under-350',
    siteName: "Gadgets Finds",
    type: "article",
    images: [{
      url: 'https://www.gadgets-finds.com/assets/images/original/watch-b.jpg',
      alt: 'Apple Watch SE 3',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    creator: "@Gadgets_finds",
    title: 'Best Smartwatches Under $350 in 2026',
    description: 'Apple Watch SE 3, Galaxy Watch 7, Garmin Forerunner 165, and Pixel Watch 3.',
    images: ['https://www.gadgets-finds.com/assets/images/original/watch-b.jpg'],
  },
};

const AMAZON = {
  se: "https://www.amazon.com/dp/B0FQFW7M9H?tag=gadgetsfindswebsite-20",
  galaxy: "https://www.amazon.com/dp/B0D1YNVD88?tag=gadgetsfindswebsite-20",
  garmin: "https://www.amazon.com/dp/B0CT3SGHXL?tag=gadgetsfindswebsite-20",
  pixel: "https://www.amazon.com/dp/B0D912YVPQ?tag=gadgetsfindswebsite-20",
} as const;

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

function ViewOnAmazon({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={amazonHref(href)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={`View ${name} on Amazon`}
      className="inline-flex items-center justify-center mt-6 min-w-[220px] px-8 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
    >
      View on Amazon
    </a>
  );
}

const IMAGES = {
  se: "/assets/images/original/watch-b.jpg",
  galaxy: "/assets/images/original/watch-a.jpg",
  garmin: "/assets/images/original/watch-c.jpg",
  pixel: "/assets/images/original/watch-a.jpg",
} as const;

function ProductPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="border-b border-border bg-white py-6">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="mx-auto block w-auto h-auto max-h-72 md:max-h-80 max-w-full object-contain"
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Buying Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Smartwatches Under $350 in 2026</h1>
          <p className="text-muted-foreground mb-2 text-sm">Last updated: November 2026</p>
          <ProductListJsonLd name="Best smartwatches under $350" url="/best-smartwatches-under-350" products={["Apple Watch SE 3", "Samsung Galaxy Watch 7", "Garmin Forerunner 165", "Google Pixel Watch 3"]} />
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Under $350 you can buy a current watch from Apple, Samsung, Garmin, or Google. You cannot buy one watch that is the best on an iPhone and an Android phone at the same time. The Apple Watch only pairs with an iPhone. The Galaxy Watch and the Pixel Watch want an Android phone. Garmin is the one that stays useful on either.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            This guide stays on four new listings. Each title links to that product, and each review ends with its own View on Amazon button. None of them is renewed. Open the page and check the case size, the band length, and whether the box says GPS or LTE before you pay. A cellular plan is a monthly bill this article is not recommending. The sale list, including the Series 12 and the Garmin Venu 4, is the{" "}
            <a href="/black-friday-smartwatches" className="underline decoration-amber-500/80 underline-offset-4 hover:text-foreground">
              Black Friday smartwatch page
            </a>
            .
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">What actually changes the watch you should buy</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border-2 border-sky-400 bg-sky-400/10 p-5">
              <h3 className="font-bold text-sky-500 mb-2">The phone</h3>
              <p className="text-sm text-muted-foreground">If it is an iPhone, start with the SE 3. If it is a Galaxy, start with the Watch 7. If it is a Pixel or another Android phone and you live in Google’s apps, look at the Pixel Watch 3. If the point is running, look at the Forerunner regardless of the phone.</p>
            </div>
            <div className="rounded-xl border-2 border-violet-400 bg-violet-400/10 p-5">
              <h3 className="font-bold text-violet-500 mb-2">Battery</h3>
              <p className="text-sm text-muted-foreground">Apple and Google are built around a nightly charge. Samsung usually clears a day and a half. Garmin is measured in days, then in GPS hours.</p>
            </div>
            <div className="rounded-xl border-2 border-emerald-400 bg-emerald-400/10 p-5">
              <h3 className="font-bold text-emerald-500 mb-2">GPS versus a phone in your pocket</h3>
              <p className="text-sm text-muted-foreground">All four here have their own GPS. That is what you want if you run without the phone.</p>
            </div>
            <div className="rounded-xl border-2 border-rose-400 bg-rose-400/10 p-5">
              <h3 className="font-bold text-rose-500 mb-2">Health claims</h3>
              <p className="text-sm text-muted-foreground">Heart rate is on all of them. An ECG or a sleep-apnea notification is a regulated feature, not a doctor, and it is missing on some of these models on purpose.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">1. Apple Watch SE 3</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.se} alt="Apple Watch SE 3 GPS 40mm in Midnight with a sport band" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.se)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Apple Watch SE 3 (GPS, 40mm)</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> Midnight aluminum, Midnight sport band S/M, GPS, model MEH94LW/A, sold new</li>
                <li><strong className="text-amber-500">Chip and display:</strong> S10, always-on Retina, Ion-X glass</li>
                <li><strong className="text-amber-500">Case:</strong> 40 × 34 × 10.7 mm, 26.3 g</li>
                <li><strong className="text-amber-500">Battery:</strong> up to 18 hours, with faster charging than the SE 2</li>
                <li><strong className="text-amber-500">Recently seen:</strong> $199, list $249</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The current SE is the third generation, released in September 2025. The linked watch is the GPS 40mm in Midnight with the small/medium sport band, not a cellular model and not an AppleCare bundle. Apple’s case weight for this GPS size is 26.3 grams. It uses the S10 chip and, unlike the SE 2, it has an always-on display, so the time stays visible without a wrist raise. Apple rates the battery at up to 18 hours and says this generation charges faster than the SE 2, including a short top-up that can put hours back on the watch. Water resistance is 50 meters. It is still a swim-proof sports watch, not a dive computer.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                On an iPhone this is the polished one. Notifications, Wallet, Siri, workouts, and the watch app store all behave the way Apple owners expect, and the software support is the reason to pick it over a cheaper watch that happens to show an iPhone’s texts. The 40mm case fits smaller wrists. If you want the 44mm, that is a different size on the same product family, with a listed GPS weight of 32.9 grams, and you should switch size on the listing rather than assume this band will fit.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What you do not get is the rest of the Series feature list. The SE still does not include the ECG app or the blood-oxygen sensor. Those stay on the more expensive Apple Watch models. There is also no cellular radio in this GPS listing, so a run without the phone is a GPS workout, not a phone call. And it will not pair with an Android phone at all. If that is the phone you own, skip to the next three.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Strengths</p>
                  <p className="text-sm text-muted-foreground">The current SE, always-on, S10, and the only one of these four that belongs on an iPhone. Often under $200.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">Limitations</p>
                  <p className="text-sm text-muted-foreground">A nightly charge. No ECG and no blood oxygen. iPhone only. This link is 40mm GPS with the shorter band.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The iPhone watch. Best suited for someone who charges at night and does not need a cellular plan.</p>
              <ViewOnAmazon href={AMAZON.se} name="Apple Watch SE 3" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">2. Samsung Galaxy Watch 7</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.galaxy} alt="Samsung Galaxy Watch 7 40mm in Cream" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.galaxy)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Samsung Galaxy Watch 7 (40mm, Bluetooth)</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> 40mm Bluetooth, Cream, US version, one-year warranty, sold new</li>
                <li><strong className="text-amber-500">Display:</strong> 1.3-inch Super AMOLED, 432 × 432, sapphire crystal</li>
                <li><strong className="text-amber-500">Case:</strong> 40.4 × 40.4 × 9.7 mm, 28.8 g, 5 ATM and IP68</li>
                <li><strong className="text-amber-500">Inside:</strong> Exynos W1000, 2 GB RAM, 32 GB, dual-frequency GPS</li>
                <li><strong className="text-amber-500">Recently seen:</strong> $149.99, list $249.99</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Watch 7 is the 2024 Galaxy watch, and in late 2026 it is the one that routinely sits well under $200 while the newer Watch 8 and Watch 9 do not. The linked style is the 40mm Bluetooth model in Cream, sold as a US version with a one-year manufacturer warranty. Confirm those three words on the page: 40mm, Bluetooth, and not Renewed. The LTE versions add a carrier plan. The green and silver colors are the same watch with a different band.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The 40mm case is 40.4 × 40.4 × 9.7 mm and 28.8 grams, with a sapphire crystal over a 1.3-inch 432 × 432 Super AMOLED. The chip is the 3 nm Exynos W1000 with 2 GB of RAM and 32 GB of storage. GPS is dual-frequency, which is the more useful kind when you are between buildings. The battery is 300 mAh. Samsung’s own typical-use figure for the 40mm is about 30 hours, closer to 40 hours on the 44mm. An always-on watch face shortens that. It is still a watch you charge most nights if you use it hard, and a watch that can clear a weekend morning if you do not.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The health list is the reason Samsung owners pick it over a generic Wear OS watch. Heart rate, SpO2, skin temperature, ECG, and body composition are on the Watch 7. The sleep-apnea notification needs a compatible Galaxy phone and it is a screening feature, not a diagnosis. Several of those tools are weaker, or missing, if the phone is not a Samsung. On a Pixel or another Android phone you still get a watch, GPS, and notifications. You do not get the full Samsung Health story. It is not an iPhone watch.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Strengths</p>
                  <p className="text-sm text-muted-foreground">Sapphire, dual-frequency GPS, a real health suite, and a street price around $150 for a watch that was a flagship in 2024.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">Limitations</p>
                  <p className="text-sm text-muted-foreground">Best on a Galaxy phone. The 40mm battery is a day, not a week. This link is Bluetooth, not LTE.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The Android daily watch, especially on a Samsung phone. Best suited for someone who wants the screen and the health tools more than a week of battery.</p>
              <ViewOnAmazon href={AMAZON.galaxy} name="Samsung Galaxy Watch 7" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">3. Garmin Forerunner 165</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.garmin} alt="Garmin Forerunner 165 running watch in black" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.garmin)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Garmin Forerunner 165</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> 43mm, Black, model 010-02863-20, sold new</li>
                <li><strong className="text-amber-500">Display:</strong> 1.2-inch AMOLED, 390 × 390, touchscreen</li>
                <li><strong className="text-amber-500">Case:</strong> 43 × 43 × 11.6 mm, 39 g, 5 ATM</li>
                <li><strong className="text-amber-500">Battery:</strong> up to 11 days as a watch, about 4 days with always-on, up to 19 hours of GPS</li>
                <li><strong className="text-amber-500">Recently seen:</strong> about $192, list $249.99</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Forerunner 165 is a running watch that happens to tell the time, not a mini phone. Garmin’s figures for this model are the ones that matter if you train: up to 11 days in smartwatch mode, about 4 days if you leave the AMOLED always on, up to 20 days in a battery-saver mode, and up to 19 hours with GPS only. All-systems GNSS is a little shorter, around 17 hours. That is a week of runs without hunting a charger, which none of the other three here can claim.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The case is 43 × 43 × 11.6 mm and 39 grams, with a 1.2-inch 390 × 390 AMOLED, a touchscreen, and physical buttons. Water rating is 5 ATM. GPS is multi-constellation, meaning GPS, GLONASS, and Galileo, but it is not a multiband receiver. Tighter GPS, on the Forerunner 265 and above, costs more. Heart rate is the Elevate gen 4 sensor, with Pulse Ox, a barometric altimeter, and Garmin Pay. Garmin Coach and daily suggested workouts are the training tools this price is actually for. The watch works with the Garmin app on iPhone and on Android, so the phone brand stops being the deciding fact.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The linked model is the standard 165, not the 165 Music. There is no offline Spotify or Deezer on this one. Music controls the phone. Storage is there, but the music feature is the more expensive SKU. There is also no rich third-party app store, no full keyboard for replies the way Apple and Wear OS do them, and the charger is Garmin’s own plug, not a generic cable you already own. If you want a watch that answers texts and runs apps, this is the wrong aisle. If you want pace, heart rate, and a battery that survives a training block, it is the right one, and it has been selling under $200.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Strengths</p>
                  <p className="text-sm text-muted-foreground">Eleven days, real GPS workouts, either phone, and a price that undercuts the rest of Garmin’s AMOLED runners.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">Limitations</p>
                  <p className="text-sm text-muted-foreground">Not multiband GPS. No offline music on this listing. A thinner smartwatch experience than Apple or Samsung.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The training watch. Best suited for running and for anyone who is tired of charging a watch every night.</p>
              <ViewOnAmazon href={AMAZON.garmin} name="Garmin Forerunner 165" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">4. Google Pixel Watch 3</h2>
          <div className="mb-8 bg-card border-2 border-amber-400/60 rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.pixel} alt="Google Pixel Watch 3 with a light band" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.pixel)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Google Pixel Watch 3 (41mm, Wi-Fi)</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-amber-500">Listing:</strong> 41mm, Champagne Gold case, Hazel band, Wi-Fi, sold new</li>
                <li><strong className="text-amber-500">Display:</strong> Actua LTPO AMOLED, up to 2,000 nits, Gorilla Glass 5</li>
                <li><strong className="text-amber-500">Case:</strong> 12.3 mm thick, about 31 g without the band, 5 ATM and IP68</li>
                <li><strong className="text-amber-500">Battery:</strong> 306 mAh, up to 24 hours with the display always on, up to 36 hours in Battery Saver</li>
                <li><strong className="text-amber-500">Recently seen:</strong> $249.99</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Pixel Watch 3 is the clean Wear OS watch. The linked one is the 41mm Wi-Fi model in Champagne Gold with the Hazel band, not the LTE version and not the 45mm. Google rates this size at about 31 grams without the band and 12.3 mm thick, with a 306 mAh battery. The promise is up to 24 hours with the always-on display and up to 36 hours in Battery Saver. A 50 percent charge is about 24 minutes on the 41mm. That is a nightly charger, same idea as the Apple Watch, with a saver mode that can stretch a second day if you are careful.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The screen is the Actua LTPO AMOLED at 320 pixels per inch, peaking at 2,000 nits, under Gorilla Glass 5. The chip is still Qualcomm’s SW5100, with 2 GB of RAM and 32 GB of storage. Fitbit is the fitness layer: heart rate, SpO2, skin temperature, and the ECG app where it is cleared. GPS is on the watch, so a run does not require the phone in a pocket. Ultra-wideband is there for features like Watch Unlock on a compatible Pixel. None of that includes a cellular radio on this Wi-Fi listing. Leave the phone behind and you keep GPS and whatever the watch stored. You do not keep a phone call.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Buy it if the phone is a Pixel, or at least an Android phone you already run through Google’s apps. Assistant, Wallet, and Maps are the point. It will not set up as an iPhone companion. Next to the Galaxy Watch 7 it costs more and lasts about as long, and it gives you a rounder, simpler watch rather than Samsung’s health lab. Next to the Forerunner it is the one you wear to dinner. It is not the one you take on a four-hour run without thinking about the battery.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Strengths</p>
                  <p className="text-sm text-muted-foreground">Bright screen, Fitbit, ECG on a cleared model, and the least cluttered Wear OS software. The 41mm stays small.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">Limitations</p>
                  <p className="text-sm text-muted-foreground">One day of battery. Android only. This link is Wi-Fi, 41mm, Champagne Gold. LTE and 45mm cost more and are different listings.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The Google watch. Best suited for a Pixel owner who wants Fitbit and will charge it with the phone.</p>
              <ViewOnAmazon href={AMAZON.pixel} name="Google Pixel Watch 3" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-4">Quick comparison</h2>
          <div className="overflow-x-auto mb-10 rounded-xl border-2 border-amber-400/70">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-amber-400/15">
                <tr className="border-b">
                  <th className="text-left p-3">Watch</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Battery</th>
                  <th className="text-left p-3">Best at</th>
                  <th className="text-left p-3">Recently seen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">SE 3, 40mm GPS</td><td className="p-3">iPhone only</td><td className="p-3">Up to 18 hours</td><td className="p-3">Daily iPhone watch</td><td className="p-3">$199</td></tr>
                <tr className="border-b"><td className="p-3">Galaxy Watch 7, 40mm</td><td className="p-3">Android, best on Galaxy</td><td className="p-3">About 30 hours</td><td className="p-3">Screen and health tools</td><td className="p-3">$149.99</td></tr>
                <tr className="border-b"><td className="p-3">Forerunner 165</td><td className="p-3">iPhone or Android</td><td className="p-3">Up to 11 days</td><td className="p-3">Running</td><td className="p-3">About $192</td></tr>
                <tr><td className="p-3">Pixel Watch 3, 41mm</td><td className="p-3">Android, best on Pixel</td><td className="p-3">Up to 24 hours</td><td className="p-3">Fitbit and Google apps</td><td className="p-3">$249.99</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">How to choose</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>iPhone, and you want the normal Apple experience: SE 3. Step up to a Series watch only if you need ECG or blood oxygen.</li>
            <li>Galaxy phone, and you want one watch for messages and health: Watch 7, 40mm if you want the smaller case, 44mm if you want the longer battery.</li>
            <li>You run, or you refuse to charge a watch every night: Forerunner 165. Pay more only if you need multiband GPS or offline music.</li>
            <li>Pixel phone, and you already use Fitbit: Pixel Watch 3, Wi-Fi, unless you have a real reason to pay for LTE.</li>
            <li>Skip any listing that says Renewed, and skip a bundle that adds a protection plan unless you actually want that plan. The four links above are the watches alone.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Final verdict</h2>
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-400/10 p-6 md:p-8 mb-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Match the watch to the phone first. The Apple Watch SE 3 is the one to buy for an iPhone, and at about $199 it is the current SE rather than a leftover second generation. The Galaxy Watch 7 is the Android watch that still feels current at about $150, with the caveat that Samsung’s health features want a Samsung phone. The Forerunner 165 is the better product the moment training matters more than apps, on either phone. The Pixel Watch 3 is the right small Wear OS watch if you already live in Google’s software and you accept a nightly charge.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Prices move, and color and band size change the ASIN. Use the button under the review, then confirm GPS versus LTE and the band length on the page you land on.
          </p>
          </div>
          <GuideFaq
            items={[
              { q: "What is the best smartwatch under $350?", a: "It depends on the phone. The Apple Watch SE 3 is the buy for an iPhone. The Galaxy Watch 7 is the buy for a Samsung phone. Garmin is the one that works well on either." },
              { q: "Can an Apple Watch pair with an Android phone?", a: "No. The Apple Watch only pairs with an iPhone. An Android phone should look at the Galaxy Watch 7, the Pixel Watch 3, or the Garmin Forerunner 165." },
              { q: "Which watch lasts more than a day?", a: "The Garmin Forerunner 165. Apple, Samsung, and Pixel watches in this guide are closer to a day or two of normal use." },
            ]}
          />
          <RelatedGuides current="/best-smartwatches-under-350" />

          <AmazonDealBox
            productName="Smartwatches"
            href="https://www.amazon.com/s?k=smartwatch&tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">An ECG reading and a sleep-apnea notification are not a diagnosis. Check the case size and whether the listing includes cellular service before you buy.</p>
        </div>
      </article>
      <Footer />
    </>
  );
}
