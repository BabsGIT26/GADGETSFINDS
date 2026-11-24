import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import CommentSection from "@/components/comments/CommentSection";
import { FaqJsonLd } from "@/components/common/GuideFaq";

const AMAZON = "https://www.amazon.com/dp/B0BTD871Y3?tag=gadgetsfindswebsite-20";

const TITLE = "Selore USB-C Dual HDMI Dock: Windows vs Mac";
const DESCRIPTION =
  "Selore 8-in-1 USB-C hub with dual 4K 60 Hz HDMI, 100W charging, USB, and SD. Windows can extend two monitors; Macs only mirror. Check today's price on Amazon.";

const FAQ = [
  {
    q: "Can I use two different screens on a Mac?",
    a: "No. Selore says this adapter does not support dual-screen extension (MST) on macOS. A MacBook Pro or Air, or another Mac, gets the same mirrored picture on both HDMI monitors.",
  },
  {
    q: "Can Windows extend the desktop to both monitors?",
    a: "Yes, if the laptop’s USB-C port is full-featured or Thunderbolt and supports DisplayPort 1.4. Selore lists MST mode on Windows for two extended screens. If the second display stays black or looks soft, the port is usually the limit, not the HDMI cable.",
  },
  {
    q: "Does it charge the laptop?",
    a: "Yes, through the USB-C power-delivery port next to the SD and microSD slots. Selore lists up to 100 W in and about 85 W out to the laptop. The charger and charging cable are not in the box, so you need a USB-C PD charger that can supply that input — typically the laptop’s own charger. The second USB-C port is for data only and does not charge the laptop.",
  },
  {
    q: "Will it work in a charge-only USB-C port?",
    a: "No. Selore says the dock needs a Thunderbolt port or a full-featured USB-C port that can carry video, data, and charging. A port that only charges or only moves data will not drive the screens.",
  },
  {
    q: "Is there Ethernet? Is this a Thunderbolt dock?",
    a: "There is no Ethernet port on the listed 8-in-1 layout. It can plug into a Thunderbolt 3 or 4 port, but the USB-A and USB-C data ports are listed at up to 5 Gbps, not Thunderbolt speed.",
  },
];

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Gadgets Finds` },
  description: DESCRIPTION,
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/selore-usb-c-dual-hdmi-dock" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/images/selore-usb-c-dual-hdmi-official.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background site-pad-top">
        <div className="container mx-auto px-4 pb-10 max-w-3xl">
          <p className="text-xs md:text-sm text-foreground mb-6">
            Disclosure: Gadgets Finds is an Amazon Associate. We may earn from qualifying
            purchases if you buy through links on this page, at no extra cost to you.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Laptops</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            Selore USB-C dock for two HDMI monitors
          </h1>
          <p className="text-sm text-muted-foreground mb-8">By Gadgets Finds</p>

          <p className="text-muted-foreground mb-4">
            If your laptop has one video-capable USB-C port and the desk already has HDMI
            monitors, this Selore 8-in-1 hub is meant to fill the gap with a single cable.
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
<div> 
<P>
            The listing includes two HDMI ports at up to 4K at 60 Hz each, a USB-C
            power-delivery port that takes up to 100 W and passes about 85 W to the laptop,
            two USB-A 3.0 ports, one USB-C data port, and SD and microSD slots. It is a
            compact grey hub — Selore lists it at 5 by 0.7 by 0.13 inches and about 0.22
            pounds — not a full Thunderbolt dock, and the port list does not include Ethernet.
          </p>
          <p className="text-muted-foreground mb-6">
            The useful catch is the operating system. On a Windows laptop with the right
            USB-C port, both monitors can show different desktops. On a Mac, both HDMI
            screens show the same picture. Brands do not pay to be included in our guides.
          </p>
</div>
          <h2 className="text-2xl font-bold mt-10 mb-3">Who it is for</h2>
          <p className="text-muted-foreground mb-4">
            This is a good fit for a Windows laptop when you want two extended HDMI
            screens at the same desk, plus charging, USB, and a card reader, without a
            large dock. Selore’s listing mentions USB-C and Thunderbolt 3 or 4 machines
            such as Dell XPS, HP, Lenovo, and Surface, and only when that port is
            full-featured — it has to carry video, data, and charging. A charge-only or
            data-only USB-C port will not drive either screen.
          </p>
          <p className="text-muted-foreground mb-6">
            It can still be useful on a MacBook Pro or Air if you only need a mirrored
            image on two external displays, along with pass-through charging and the USB
            and SD ports. If you need two different desktops on a Mac, this is not the
            adapter for that job.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Ports and features, in plain words</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>
              Two HDMI ports, each listed at up to 4K at 60 Hz, so two monitors can plug
              in at once.
            </li>
            <li>
              A USB-C power-delivery port next to the SD and microSD slots. It accepts up
              to 100 W from a charger and passes about 85 W to the laptop; the dock uses
              the rest.
            </li>
            <li>
              Two USB-A 3.0 ports, up to 5 Gbps, for things like a mouse, keyboard, or a
              typical flash drive.
            </li>
            <li>
              One extra USB-C port for data only, also up to 5 Gbps. It does not charge
              the laptop.
            </li>
            <li>
              SD and microSD slots. Selore lists the reader at up to 104 MB/s, though one
              line on the listing also writes this as Mbps.
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            The charger and the charging cable are not in the box. Use the laptop’s own
            USB-C charger, or another USB-C PD charger that can supply the listed 100 W
            input. A low-wattage phone charger will not cover a work laptop and two
            screens.
          </p>
          <p className="text-muted-foreground mb-6">
            Selore describes the dock as plug-and-play and lists a two-year refund or
            replacement for defective units. The model on this listing is SEUC0422.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Setup notes: Windows vs Mac</h2>
          <p className="text-muted-foreground mb-4">
            Plug the dock into a Thunderbolt or full-featured USB-C port, then connect the
            monitors to the two HDMI ports. If you want the laptop to charge at the same
            time, connect your USB-C PD charger to the power-delivery port beside the card
            slots — not to the extra USB-C data port.
          </p>
          <p className="text-muted-foreground mb-4">
            On Windows, Selore says you can extend the desktop across both monitors using
            MST, as long as the USB-C port supports DisplayPort 1.4. In Windows display
            settings, set the screens to extend rather than duplicate. If the second
            screen stays black or the picture looks soft, the port is the likely limit,
            not a bad HDMI cable.
          </p>
          <p className="text-muted-foreground mb-6">
            On macOS, Selore says this adapter does not support dual-screen extension
            (MST). A Mac gets a mirrored, repeated image on both HDMI screens (SST). That
            applies to MacBook Pro and Air as well. You still get the HDMI outputs,
            charging, USB, and card slots; you do not get two independent Mac desktops.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">Pros and cons</h2>
          <p className="font-semibold text-foreground mb-2">Pros</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Two HDMI ports, each listed at up to 4K at 60 Hz, from one USB-C cable.</li>
            <li>Pass-through charging, listed at up to 100 W in and about 85 W out to the laptop.</li>
            <li>USB-A, USB-C data, and SD/microSD in a small 8-in-1 hub.</li>
            <li>
              On a Windows laptop with DisplayPort 1.4 or Thunderbolt USB-C, both monitors
              can extend.
            </li>
          </ul>
          <p className="font-semibold text-foreground mb-2">Cons</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Macs can only mirror; they cannot extend to two different desktops.</li>
            <li>Windows dual-extend needs a full-featured USB-C port with DisplayPort 1.4.</li>
            <li>No Ethernet.</li>
            <li>USB data ports top out at 5 Gbps, so this is not a Thunderbolt-speed dock.</li>
            <li>The charger and charging cable are not included.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3">FAQ</h2>
          <FaqJsonLd items={FAQ} />
          <div className="mb-8 space-y-6">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Verdict</h2>
          <p className="text-muted-foreground mb-8">
            Buy this if you have a Windows laptop with a full-featured USB-C or Thunderbolt
            port and two HDMI monitors, and you want charging, USB, and a card reader in
            one small hub. Skip it if you need two separate screens on a Mac, Ethernet, or
            faster than 5 Gbps for an external drive — or if the laptop’s only USB-C port
            is for charging. Brands do not pay to be included in our guides.
          </p>

          <AmazonDealBox productName="Selore USB-C dual HDMI dock" href={AMAZON} />

          <CommentSection articleSlug="selore-usb-c-dual-hdmi-dock" />
        </div>
      </article>
      <Footer />
    </>
  );
}
