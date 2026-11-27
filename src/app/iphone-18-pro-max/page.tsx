import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/iphone-18-pro-max";
const URL = "https://link.amazon/B016R4EFR";
const ASIN = "B0HJHXTRFQ";
const SEO_TITLE = "iPhone 18 Pro Max 512GB Review";
const TITLE = "iPhone 18 Pro Max (Black, 512GB, Unlocked)";
const DESCRIPTION =
  "Apple iPhone 18 Pro Max in Black, 512GB, unlocked: variable-aperture camera, A20 Pro and a 6.9-inch display. Who should buy it. Check today's price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "phone" });

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="Phones"
      title={TITLE}
      description={DESCRIPTION}
      topics={["mobile"]}
      answer="The iPhone 18 Pro Max in Black, with 512GB, unlocked, is Apple's largest non-folding phone. The main camera has a mechanical variable aperture, the chip is the A20 Pro, and Apple rates the battery as the longest in an iPhone. The price on Amazon is the one that counts."
      image={{ src: illustrationPath("phone"), alt: "Apple iPhone 18 Pro Max in Black" }}
      cta={{ href: URL, asin: ASIN, note: "Black, 512GB, factory unlocked. Price and stock change on Amazon." }}
      bestFor="Someone who wants the biggest iPhone, 512GB of storage, and a phone that is not locked to one carrier"
      glance={[
        ["Display", "6.9-inch OLED, 2868 × 1320, 1–120Hz, 3,000 nits"],
        ["Chip", "A20 Pro, 12GB RAM"],
        ["Storage", "512GB, Black aluminum unibody"],
        ["Main camera", "48MP Fusion, variable aperture f/1.48 to f/4"],
        ["Other cameras", "48MP ultra wide, 48MP telephoto, 18MP front"],
        ["Battery", "Up to 45 hours of video playback"],
        ["Charging", "About 50% in 15 minutes on a 60W+ USB-C adapter"],
        ["Wireless", "Apple C2 5G, Wi-Fi 7, Bluetooth 6, Thread"],
        ["Size", "163.4 × 78.0 × 8.75 mm, 249 g"],
        ["In the box", "Phone and a 1 m USB-C cable. No power adapter."],
      ]}
      why={[
        "Apple's main 24 mm Fusion camera is 48MP and, for the first time on an iPhone, uses a six-blade variable aperture that moves between f/1.48, f/1.8, f/2.8 and f/4. That is hardware control of depth of field and low-light exposure, not a portrait mode. The ultra wide is 48MP at 13 mm. The telephoto is 48MP, listed at 8x optical-quality zoom, with a wider optical-quality range up to 16x and digital zoom up to 40x. The front camera is an 18MP Center Stage camera with Face ID.",
        "The A20 Pro has a 6-core CPU, a 7-core GPU and a dual 16-core Neural Engine, with 12GB of RAM. Apple pairs it with a new vapor chamber so the phone can hold speed during 4K/120 fps ProRes, games and on-device Apple Intelligence on iOS 27. Video includes 4K Dolby Vision up to 120 fps, ProRes and ProRes RAW, Apple Log 2 and Genlock. 512GB is the useful size if you keep 4K video and RAW photos on the phone.",
      ]}
      skip={[
        "Skip it if you want a phone you can use in one hand. It weighs 249 g and the screen is 6.9 inches. The 6.3-inch iPhone 18 Pro in 512GB has the same A20 Pro and the same three rear cameras in a smaller body.",
        "U.S. unlocked models are eSIM only. There is no nano-SIM tray. The phone can store eight or more eSIM profiles, with two active at once. Check that your carrier supports eSIM before you switch.",
      ]}
      sections={[
        {
          heading: "Display, battery and the Black finish",
          body: [
            "The screen is a 6.9-inch Super Retina XDR OLED at 2868 × 1320, 460 pixels per inch. ProMotion runs from 1Hz to 120Hz, including an Always-On display. Apple lists an anti-reflective coating and 3,000 nits of peak outdoor brightness.",
            "Apple rates video playback at up to 45 hours, and streamed video at 40 hours. In ordinary use that is a day and a half to two days, not a number you should treat as a promise for heavy camera or game use. A 60W or higher USB-C adapter reaches about 50% in 15 minutes. MagSafe and Qi2 are listed at up to 25W, which is about 50% in 30 minutes. The box has a braided 1 m USB-C cable and no power adapter.",
            "The body is a color-matched Black aluminum unibody with Ceramic Shield 2 on the front and color-matched Ceramic Shield glass on the back. Apple rates it IP68. U.S. models use Apple's C2 5G modem, including sub-6 GHz and mmWave, which Apple says uploads faster and draws about 15% less power, plus the N1 chip for Wi-Fi 7, Bluetooth 6 and Thread.",
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "The listing should be the Black 512GB unlocked iPhone 18 Pro Max, sold new.",
            "U.S. unlocked units have no physical SIM tray. Confirm eSIM with your carrier.",
            "The fastest wired charge needs your own 60W or higher USB-C adapter.",
            "249 g and a 6.9-inch screen is a two-handed phone. The smaller iPhone 18 Pro is the same camera system if pocket size matters more.",
          ],
        },
        {
          heading: "How it fits the other phone guides",
          body: [
            <>
              For a wider look at this year's phones, including smaller flagships, see our{" "}
              <a href="/best-phones-2026" className={link}>best phones of 2026</a>.
            </>,
          ],
        },
      ]}
      faqTitle="iPhone 18 Pro Max questions"
      faq={[
        { q: "Does the iPhone 18 Pro Max battery last two days?", a: "Apple rates it at up to 45 hours of video playback, which is the longest figure the company has put on an iPhone. Heavy camera, navigation or game use will drain it faster than video playback." },
        { q: "Is a charger in the box?", a: "No. The box includes a 1 m USB-C cable. A 60W or higher USB-C adapter is what Apple cites for a 50% charge in about 15 minutes." },
        { q: "Will this unlocked iPhone take a physical SIM?", a: "Not the U.S. unlocked model. It is Dual eSIM only. Check your carrier before you rely on a nano-SIM." },
        { q: "What is different about the main camera?", a: "The 48MP Fusion camera has a mechanical variable aperture, listed at f/1.48, f/1.8, f/2.8 and f/4. Earlier iPhones used a fixed aperture on the main camera." },
      ]}
      products={["Apple iPhone 18 Pro Max Black 512GB Unlocked"]}
      dealBox={{ productName: "iPhone 18 Pro Max (Black, 512GB, unlocked)", href: URL }}
    />
  );
}
