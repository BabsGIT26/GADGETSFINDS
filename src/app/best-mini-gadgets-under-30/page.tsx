import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-mini-gadgets-under-30";
const SEO_TITLE = "Best Tech Gadgets Under $30 in 2026";
const TITLE = "Best Tech Gadgets Under $30 in 2026: Small Gadgets Worth Buying";
const DESCRIPTION =
  "The best tech gadgets under $30 in 2026: an Anker 45W charger, a 5-in-1 USB-C hub, 100W cables and the Galaxy SmartTag2, all useful every week. Check prices.";
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "gadget" });

const products: RoundupProduct[] = [
  {
    id: "anker-nano-45w",
    name: "Anker Nano Charger 45W with 6 ft USB-C cable",
    label: "Best overall",
    url: amz("B0DPKRC84P"),
    why: "A real 45W charger with the cable in the box.",
    specs: [
      ["What it does", "Charges a phone, tablet or thin laptop"],
      ["Key spec", "45W USB-C with PPS, folding US plug"],
      ["Watch out", "One port; US prongs"],
    ],
    body: [
      "If the charger in your bag is an old 5W block, this is the upgrade. Model B2692 delivers up to 45W from one USB-C port with PPS, so phones that ask for a specific voltage get it. It weighs 2.11 ounces, the prongs fold, and input is 100 to 240V, so it works abroad with a simple plug adapter.",
      "45W is enough for phones, tablets and thin USB-C laptops. Samsung note from Anker's listing: Galaxy S22 to S24 Plus and Ultra need a 5A cable for Super Fast Charging, so check the cable marking if that mode matters. Anker lists an 18-month warranty.",
    ],
    skip: "you need to charge two devices at once. There is only one port.",
    image: illustrationPath("charger"),
  },
  {
    id: "anker-5-in-1-hub",
    name: "Anker 5-in-1 USB-C Hub (4K HDMI)",
    label: "Best for laptops",
    url: amz("B0CH9JN4R4"),
    why: "Adds HDMI and three USB ports to a thin laptop.",
    specs: [
      ["What it does", "HDMI and USB ports for a laptop"],
      ["Key spec", "4K HDMI, 3 x 5Gbps data, 85W pass-through"],
      ["Watch out", "4K refresh rate not stated; no charger"],
    ],
    body: [
      "A laptop with two USB-C ports runs out the first time you want a monitor and a mouse. This hub adds a 4K HDMI port, a USB-C data port and two USB-A ports, all at 5Gbps, and passes up to 85W of charging through to the laptop from your own USB-C charger.",
      "The cable to the laptop is attached, so there is nothing extra to lose. Use it for a second screen, a keyboard and a drive.",
    ],
    skip: "you need Ethernet, an SD card reader or guaranteed 4K at 60Hz. Those need a bigger, more expensive hub.",
    image: illustrationPath("hub"),
  },
  {
    id: "anker-100w-cable-2-pack",
    name: "Anker 333 USB-C to USB-C Cable, 100W, 6 ft (2-pack)",
    label: "Best spare cable",
    url: amz("B09LCJPZ1P"),
    why: "Two braided 100W cables for the price of one gadget.",
    specs: [
      ["What it does", "Charges and syncs USB-C devices"],
      ["Key spec", "100W, 6 ft, nylon, about 5,000 bends (Anker)"],
      ["Watch out", "No video output"],
    ],
    body: [
      "The cable that came with your phone is the first thing to fray. These are 6-foot nylon-braided cables rated at 100W, so they will not be the bottleneck for a phone or laptop charger. A hook-and-loop tie is included, and Anker backs them with its lifetime cable warranty.",
    ],
    skip: "you want to connect a monitor. These cables do not carry video; you need one that lists DisplayPort Alt Mode.",
    image: illustrationPath("cable"),
  },
  {
    id: "galaxy-smarttag2",
    name: "Samsung Galaxy SmartTag2 (1 pack)",
    label: "Best for Galaxy phones",
    url: amz("B0CCBXRYRC"),
    why: "Find keys or a bag with a Samsung phone.",
    specs: [
      ["What it does", "Finds keys and bags via SmartThings Find"],
      ["Key spec", "Bluetooth + UWB, IP67, up to 500 days battery (Samsung)"],
      ["Watch out", "Galaxy only; not GPS; CR2032 not included"],
    ],
    body: [
      "On a compatible Galaxy phone, ultra-wideband points you straight to the tag when it is in the room. Farther away, other Galaxy phones nearby update its location on the map, the same idea as Apple's Find My. It is IP67 rated, so rain and a wet bag are fine.",
      "It has no GPS chip, so the map only updates when a Galaxy phone passes nearby. Add a CR2032 battery to your order; this listing does not include one.",
    ],
    skip: "you use an iPhone. Buy an Apple AirTag instead, and skip third-party tags that put Find My in the title.",
    image: illustrationPath("tracker"),
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Gadgets under $30"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best tech gadgets under $30 are the boring ones you use every week. Our top pick is the Anker Nano 45W charger with a cable in the box. Add the Anker 5-in-1 USB-C hub if your laptop is short of ports, a two-pack of 100W cables as spares, and the Galaxy SmartTag2 if you have a Samsung phone and keep losing your keys."
      intro={[
        "Every pick is a new listing from a brand that will still answer if something fails, and each was aimed at a budget under $30 when we checked. Prices at this level move by a few dollars, so confirm the pack size and the live price before you pay. We leave out no-name power banks with impossible capacity claims and trackers that imitate AirTags.",
      ]}
      hero={{ src: illustrationPath("gadget"), alt: "Tech gadgets under $30" }}
      tableTitle="Tech gadgets under $30 compared"
      tableColumns={["What it does", "Key spec", "Watch out"]}
      products={products}
      buyingGuide={{
        heading: "How to choose a gadget under $30",
        points: [
          { title: "It fixes something you do every week", body: "Charging, plugging in a monitor or finding your keys. A gadget whose only job is to look clever rarely survives a month." },
          { title: "The specs are printed, not implied", body: "Wattage, ports and phone compatibility should be on the listing. If the listing avoids numbers, so should you." },
          { title: "The brand will still be there", body: "A lifetime warranty only helps if the seller still exists next year. Stick to known brands sold by Amazon or the maker." },
          { title: "Watch the pack size", body: "A four-pack of trackers is not a $30 gadget, even if each tag costs less. Check the quantity before you add to cart." },
        ],
      }}
      verdict={[
        "If you buy one thing, buy the Anker Nano 45W charger. Add the 100W cable two-pack when your current cable starts to fray, the 5-in-1 hub when your laptop needs a monitor port, and the SmartTag2 only if you use a Galaxy phone, with a CR2032 battery in the same order.",
      ]}
      faqTitle="Gadgets under $30: common questions"
      faq={[
        { q: "What is the best tech gadget under $30?", a: "The Anker Nano 45W charger. It is a real 45W USB-C charger, the cable is in the box, and it is useful every day." },
        { q: "What is a good tech gift under $30?", a: "A fast charger, a spare braided USB-C cable or a USB-C hub are safe gifts because nearly everyone uses them. Only buy a tracker if you know which phone they use." },
        { q: "Is a cheap Bluetooth tracker as good as an AirTag?", a: "No. Third-party tags with Find My in the title are not AirTags. The Galaxy SmartTag2 here only works with Samsung phones, and it is not GPS." },
        { q: "Will a 100W USB-C cable connect a monitor?", a: "Not these. They charge and transfer data, but they do not carry video unless the listing says they support DisplayPort Alt Mode." },
      ]}
      dealBox={{ productName: "Mini Gadgets and Phone Accessories", href: `https://www.amazon.com/s?k=usb+c+charger+hub+cable&tag=${TAG}` }}
    />
  );
}
