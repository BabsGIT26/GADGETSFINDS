import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import CommentSection from "@/components/comments/CommentSection";

const AMAZON = "https://www.amazon.com/dp/B0BTD871Y3?tag=gadgetsfindswebsite-20";

export const metadata: Metadata = {
  title: "Selore USB-C Dock for Two HDMI Monitors — Gadgets Finds",
  description:
    "An 8-in-1 USB-C hub with two HDMI ports, 100W pass-through charging, USB-A, USB-C data, and SD slots. Windows can extend. Macs mirror.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/selore-usb-c-dual-hdmi-dock" },
  openGraph: {
    title: "Selore USB-C Dock for Two HDMI Monitors",
    description:
      "Two HDMI ports, laptop charging, and card slots from one USB-C cable. Check the Mac limit before you buy.",
    url: "https://www.gadgets-finds.com/selore-usb-c-dual-hdmi-dock",
    siteName: "Gadgets Finds",
    type: "article",
    images: [
      {
        url: "/assets/images/selore-usb-c-dual-hdmi-official.jpg",
        alt: "Selore USB-C docking station with two HDMI ports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Gadgets_finds",
    title: "Selore USB-C Dock for Two HDMI Monitors",
    description: "Two HDMI ports from one USB-C cable. Windows extends. Macs mirror.",
    images: ["/assets/images/selore-usb-c-dual-hdmi-official.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 pt-4 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Laptops</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Selore USB-C dock for two HDMI monitors
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-6">
            An 8-in-1 hub for a laptop that has one video-capable USB-C port and not enough
            sockets. One cable gives you two HDMI monitors, laptop charging, two USB-A ports,
            one USB-C data port, and an SD/microSD reader. It is a travel hub, not a
            Thunderbolt dock, and it has no Ethernet.
          </p>

          <p className="mb-8">
            <a
              href={AMAZON}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold hover:bg-transparent hover:text-foreground border border-amber-400 transition-colors"
            >
              View on Amazon
            </a>
          </p>

          <div className="w-full flex justify-center py-6 mb-10">
            <img
              src="/assets/images/selore-usb-c-dual-hdmi-official.jpg"
              alt="Selore USB-C docking station with two HDMI ports, USB ports, and SD card slots"
              className="max-h-[28rem] w-auto max-w-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-6">
            A Windows laptop, when the desk already has HDMI monitors. Selore lists machines
            such as Dell XPS, HP EliteBook, and Lenovo Yoga, and only when that USB-C port
            supports video, charging, and data. A charge-only USB-C port will not drive either
            screen.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Ports</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Two HDMI ports, each listed at up to 4K at 60 Hz.</li>
            <li>
              USB-C power delivery. It takes up to 100 W from your charger and passes about
              85 W to the laptop. The dock uses the rest.
            </li>
            <li>Two USB-A 3.0 ports, up to 5 Gbps.</li>
            <li>One extra USB-C port for data only, up to 5 Gbps. It does not charge the laptop.</li>
            <li>SD and microSD, listed at up to 104 MB/s.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            The charger and the charging cable are not in the box. Use the laptop’s own USB-C
            charger, or a USB-C PD charger of at least that wattage. A phone charger will not
            keep a work laptop topped up while both screens are on.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Macs mirror. Windows can extend.</h2>
          <p className="text-muted-foreground mb-6">
            Selore says this adapter does not support dual-screen extension on macOS. A Mac
            gets the same picture on both HDMI screens. On Windows, extending both monitors
            needs a USB-C port with DisplayPort 1.4. If the second screen stays black or looks
            soft, the port is the limit, not a bad HDMI cable.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Skip it if</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>You need Ethernet.</li>
            <li>You need Thunderbolt speed for an external SSD. These data ports top out at 5 Gbps.</li>
            <li>The laptop’s only USB-C port is for charging.</li>
            <li>You want two different desktops on a Mac.</li>
          </ul>

          <AmazonDealBox productName="Selore USB-C dual HDMI dock" href={AMAZON} />

          <CommentSection articleSlug="selore-usb-c-dual-hdmi-dock" />
        </div>
      </article>
      <Footer />
    </>
  );
}
