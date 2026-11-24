import type { Metadata } from "next";
import ProductArticle from "@/components/common/ProductArticle";
import CommentSection from "@/components/comments/CommentSection";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const PATH = "/samsung-65-s85h-oled-article";
const URL = "https://www.amazon.com/dp/B0GQ6YWP33?tag=gadgetsfindswebsite-20";
const SEO_TITLE = "Samsung S85H 65-Inch OLED TV: Worth It?";
const TITLE = "Samsung S85H 65-Inch OLED TV (2026): Is It Worth Buying?";
const DESCRIPTION =
  "Samsung S85H 65-inch OLED TV (2026): Samsung's entry OLED with 4K 120Hz gaming, NQ4 AI Gen2 processor and HDR10+. Who it suits, who should skip it. See price.";

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "tv" });

const link = "underline decoration-amber-500/80 underline-offset-4 hover:text-foreground";

export default function Page() {
  return (
    <ProductArticle
      path={PATH}
      eyebrow="TVs"
      title={TITLE}
      description={DESCRIPTION}
      topics={["gaming", "home"]}
      answer="The Samsung S85H 65-inch OLED TV is worth buying if you want true OLED contrast and 4K 120Hz gaming without paying for Samsung's brighter QD-OLED models. It is Samsung's 2026 entry OLED. Skip it if your room is very bright or you want Dolby Vision."
      image={{ src: illustrationPath("tv"), alt: "Samsung S85H 65-inch OLED TV" }}
      cta={{ href: URL, note: "Model QN65S85HAEXZA. In stock when we checked; price and stock change." }}
      bestFor="Movies and console gaming in a dim or average room"
      glance={[
        ["Screen", "65-inch class, 4K (3840 x 2160) OLED"],
        ["Refresh", "Up to 120Hz, Motion Xcelerator"],
        ["Processor", "NQ4 AI Gen2 with Samsung Vision AI"],
        ["HDR", "OLED HDR, HDR10+ (no Dolby Vision)"],
        ["Gaming", "FreeSync Premium, G-Sync compatible, ALLM"],
      ]}
      why={[
        "OLED pixels light themselves, so black is truly black and there is no blooming around subtitles or bright objects. With 120Hz, VRR and auto low-latency mode, the S85H gets the most out of a PS5 or Xbox Series X. It is the least expensive way into a 65-inch Samsung OLED.",
      ]}
      skip={[
        "Skip it if the TV faces big sunny windows: entry OLEDs are less bright than Samsung's QD-OLED and Mini LED sets. Skip it too if you rely on Dolby Vision from streaming apps, since Samsung TVs use HDR10+ instead.",
      ]}
      sections={[
        {
          heading: "What the Samsung S85H is",
          body: [
            "The S85H (model QN65S85HAEXZA) is Samsung's 2026 entry OLED. It uses a WOLED panel, Samsung's NQ4 AI Gen2 processor for 4K AI upscaling, and Color Booster Pro. It runs Tizen with Alexa built in and has 20W speakers with AI Sound Controller.",
          ],
        },
        {
          heading: "Samsung S85H for gaming",
          body: [
            <>
              The Premium Gaming Pack covers what current consoles and PCs need: 4K at up to 120Hz, FreeSync Premium and G-Sync compatibility, and auto low-latency mode. If you are building a setup, see our{" "}
              <a href="/best-gaming-consoles-2026" className={link}>best gaming consoles</a> and{" "}
              <a href="/best-ps5-accessories-2026" className={link}>best PS5 accessories</a> guides.
            </>,
          ],
        },
        {
          heading: "Samsung S85H video overview",
          body: [
            <div key="video" className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/A1BcTPpHlqs"
                title="Samsung S85H OLED review video"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>,
          ],
        },
        {
          heading: "Check these before you buy",
          bullets: [
            "Confirm the listing is the 65-inch S85H (2026), not an older S85 model.",
            "Measure your wall or stand: a 65-inch TV is about 57 inches wide.",
            "Price and stock on this TV change often; recheck before you pay.",
          ],
        },
      ]}
      faqTitle="Samsung S85H OLED questions"
      faq={[
        { q: "Is the Samsung S85H a good TV?", a: "Yes, for dim or average rooms. It has OLED contrast, 4K 120Hz and full gaming features. Brighter rooms suit Samsung's QD-OLED or Mini LED models better." },
        { q: "Does the Samsung S85H support Dolby Vision?", a: "No. Samsung TVs support HDR10+ instead of Dolby Vision." },
        { q: "Is the S85H good for PS5 and Xbox?", a: "Yes. It supports 4K at 120Hz, variable refresh rate and auto low-latency mode." },
        { q: "What is the difference between the S85H and S90H?", a: "The S85H is Samsung's entry OLED. The higher S90-series models are generally brighter and cost more; compare current listings before you buy." },
      ]}
      products={["Samsung 65-inch S85H OLED 4K Smart TV"]}
      dealBox={{ productName: "Samsung 65-Inch S85H OLED 4K TV (2026)", href: URL }}
      after={<CommentSection articleSlug="samsung-65-s85h-oled-article" />}
    />
  );
}
