import type { Metadata } from "next";
import AppImage from "@/components/ui/AppImage";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";

const AMAZON = "https://www.amazon.com/dp/B0CD1JTBSC?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Meta Quest 3 Review — Gadgets Finds",
  description: "Meta Quest 3 standalone VR headset: mixed reality, games, and who should buy it.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/meta-quest-3-article" },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="relative min-h-[40vh] overflow-hidden">
          <AppImage src="/assets/images/meta_quest_3.png" alt="Meta Quest 3" className="w-full h-[42vh] object-cover" />
        </div>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">XR</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Meta Quest 3</h1>
          <p className="text-muted-foreground mb-8">
            Current standalone Meta headset with color mixed reality. Quest 4 is not released.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">What it is</h2>
          <p className="text-muted-foreground mb-4">
            All-in-one VR: Snapdragon XR2 Gen 2, pancake lenses, higher resolution than Quest 2,
            and pass-through so digital objects sit in your room. No PC required for the main library.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            Fitness, Beat Saber-style games, and mixed-reality toys. Buy Quest 3 if you want the
            sharper lenses; Quest 3S is the cheaper sibling with older-style lenses.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Watch-outs</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
            <li>Battery is a couple of hours — plan a charger.</li>
            <li>Meta account required.</li>
            <li>Check storage (128GB vs 512GB) on the Amazon listing before buying.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            The headset you can actually add to cart. Ignore Quest 4 rumors for a purchase today.
          </p>
          <AmazonDealBox productName="Meta Quest 3" href={AMAZON} />
        </div>
      </article>
      <Footer />
    </>
  );
}
