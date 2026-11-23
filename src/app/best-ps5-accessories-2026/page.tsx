import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/best-ps5-accessories-2026";
const SEO_TITLE = "Best PS5 Accessories Worth Buying in 2026";
const TITLE = "Best PS5 Accessories Worth Buying in 2026";
const DESCRIPTION =
  "The best PS5 accessories in 2026: WD_BLACK SN850P SSD, DualSense Edge, PULSE Elite headset, charging station and more, ranked by what to buy first. Shop now.";
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "controller" });

const products: RoundupProduct[] = [
  {
    id: "wd-black-sn850p",
    name: "WD_BLACK SN850P 2TB NVMe SSD with heatsink (PS5 licensed)",
    label: "Best upgrade",
    url: amz("B0C47ZX1WB"),
    why: "The licensed drive for deleting fewer games.",
    specs: [
      ["Priority", "High (original PS5 and Slim)"],
      ["What it adds", "2TB for PS5 games, 7,300 MB/s read"],
      ["Fits", "PS5, PS5 Slim, PS5 Pro"],
    ],
    body: [
      "Storage is the first upgrade for most owners: the original PS5 leaves about 667GB for games and the Slim ships with 1TB. PS5 games cannot run from a USB drive, so an M.2 SSD in the expansion bay is the only way to play more of your library without deleting and reinstalling.",
      "The SN850P is Western Digital's officially licensed PS5 drive, with the heatsink already fitted at 9.89mm tall, inside Sony's 11.25mm limit. The 2TB model (WDBBYV0020BNC-WRSN) is rated at up to 7,300 MB/s read and 1,200TBW, with a 5-year warranty. Installation takes about ten minutes: power off, remove the bay cover, seat the drive, screw it down, and the console formats it on first boot.",
    ],
    skip: "you own a PS5 Pro with plenty of free space on its 2TB drive. Spend the money elsewhere first.",
    image: illustrationPath("ssd"),
  },
  {
    id: "dualsense-edge",
    name: "Sony DualSense Edge wireless controller",
    label: "Best controller",
    url: amz("B0BSYFB99D"),
    why: "Back buttons, trigger stops and replaceable sticks.",
    specs: [
      ["Priority", "Medium"],
      ["What it adds", "2 back buttons, trigger stops, swappable stick modules"],
      ["Fits", "PS5 and PS5 Pro; PC over USB or Bluetooth"],
    ],
    body: [
      "Sony's pro controller keeps the DualSense haptics and adaptive triggers and adds two mappable back buttons (lever and half-dome sets included), three-step trigger stops, adjustable stick curves and on-controller profiles. If a stick drifts, you replace the module instead of the whole controller.",
      "The box includes a carrying case, extra stick caps and a 9-foot braided USB-C cable with a lock. The linked listing is the white controller sold new.",
    ],
    skip: "a standard controller already does what you need. The Edge is heavier (about 325g) and its battery runs out sooner, often after five or six hours.",
    image: illustrationPath("controller"),
  },
  {
    id: "pulse-elite",
    name: "Sony PULSE Elite wireless headset",
    label: "Best headset",
    url: amz("B0CMDH9M5W"),
    why: "Sony's official wireless headset with planar drivers.",
    specs: [
      ["Priority", "High (if you play with headphones)"],
      ["What it adds", "Planar drivers, retractable mic, about 30 hours (Sony)"],
      ["Fits", "PS5, PlayStation Portal, PC and Mac via PlayStation Link"],
    ],
    body: [
      "TV speakers are fine until someone else is in the room or you want footsteps and voice chat in the same mix. The PULSE Elite uses planar magnetic drivers, connects through the included PlayStation Link USB adapter, and also pairs over Bluetooth. The boom mic retracts into the ear cup when you play alone.",
      "Make sure the listing says PULSE Elite, not the older and cheaper Pulse 3D, which has different drivers and a much shorter battery.",
    ],
    skip: "you already own a comfortable headset you like, or you need active noise cancelling, which the Elite does not have.",
    image: illustrationPath("headphones"),
  },
  {
    id: "dualsense-charging-station",
    name: "Sony DualSense Charging Station (CFI-ZDS1)",
    label: "Best value",
    url: amz("B08HHFKMXB"),
    why: "Charges two controllers without the console.",
    specs: [
      ["Priority", "Medium"],
      ["What it adds", "Charges 2 controllers in about 3 hours"],
      ["Fits", "DualSense and DualSense Edge"],
    ],
    body: [
      "Sony's official dock charges one or two controllers, including the Edge, in about three hours from empty, using its own AC adapter so your console's USB ports stay free for a headset dongle or a drive. Controllers click onto the contacts, and the light turns off when they are full.",
    ],
    skip: "you play alone with one controller and already have a cable at the couch.",
    image: illustrationPath("controller"),
  },
  {
    id: "ps5-vertical-stand",
    name: "PlayStation Vertical Stand (CFI-ZVS1)",
    label: "Best for upright setups",
    url: amz("B0CL5GJDVY"),
    why: "Screws a Slim or Pro down so it cannot tip.",
    specs: [
      ["Priority", "Low to medium"],
      ["What it adds", "A screwed-in base for vertical placement"],
      ["Fits", "Original PS5, PS5 Slim, PS5 Pro"],
    ],
    body: [
      "The Slim and the PS5 Pro do not include a vertical stand. They can stand upright on their own, but in a home with kids, pets or a narrow shelf, Sony's chrome stand screws into the console so it stays put. It fits the original CFI-1000, the Slim CFI-2000 and CFI-2100, and the Pro.",
    ],
    skip: "your console lies flat, or you own a launch PS5 that still has the stand it came with.",
    image: illustrationPath("console"),
  },
  {
    id: "cooling-station",
    name: "PS5 cooling station with controller charger",
    label: "Best all-in-one base",
    url: amz("B0CXSWDHM6"),
    why: "A stand, fan and two controller docks in one base.",
    specs: [
      ["Priority", "Optional"],
      ["What it adds", "3-speed fan, 2 DualSense docks, 3 USB ports"],
      ["Fits", "Original, Slim and Pro, disc or digital (per listing)"],
    ],
    body: [
      "A third-party vertical base that combines a stand, a fan under the console and two charging docks for standard DualSense controllers. It is worth it if you want one base instead of a separate stand and charger.",
    ],
    skip: "you own a DualSense Edge, which it does not charge, or you are trying to fix heat. Clear space around the vents does more than an extra fan.",
    image: illustrationPath("console"),
  },
  {
    id: "racing-wheel",
    name: "Logitech G29 Driving Force racing wheel and pedals",
    label: "Best starter racing wheel",
    url: amz("B00Z0UWWYC"),
    why: "A proven entry wheel for PS5, PS4 and PC.",
    specs: [
      ["Priority", "Optional (racing games)"],
      ["What it adds", "Force feedback, 900° rotation, 3 pedals"],
      ["Fits", "PS5, PS4 and PC"],
    ],
    body: [
      "A long-running starter wheel with dual-motor force feedback, 900 degrees of rotation, steel paddle shifters and a three-pedal set. It is gear-driven, so it feels less smooth and detailed than a modern direct-drive wheel, but it is the simplest way to start sim racing. The G920 is the Xbox version.",
    ],
    skip: "you already know you want direct drive. Spend more once instead of upgrading later.",
    image: illustrationPath("wheel"),
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="PS5"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="The best PS5 accessory for most owners is more storage: the WD_BLACK SN850P 2TB, the officially licensed SSD, lets you keep more games installed. After that, buy the PULSE Elite headset if you play with headphones, the DualSense Edge if you want back buttons and replaceable sticks, and Sony's charging station if you have two controllers."
      intro={[
        "What you need depends on the console you own. The original PS5 leaves about 667GB for games, the Slim has 1TB, and the PS5 Pro has 2TB. Storage and audio change how the console feels every day; stands, docks and decorations are convenience. Every pick is a new listing, not renewed.",
      ]}
      hero={{ src: illustrationPath("controller"), alt: "PS5 accessories" }}
      tableTitle="PS5 accessories compared: what to buy first"
      tableColumns={["Priority", "What it adds", "Fits"]}
      products={products}
      extra={[
        {
          id: "dualsense",
          heading: "Do you need a second DualSense controller?",
          body: [
            "A standard DualSense is normal to add when the PS5 is the family TV console. Amazon mixes official Sony controllers with lookalikes, so buy one sold by Amazon or PlayStation and check that the title says DualSense. The listing we used to link is gone, so there is no button here; the DualSense Edge above is the upgrade pick.",
          ],
        },
        {
          id: "skip",
          heading: "PS5 accessories to skip",
          body: [
            "RGB light strips, shell plates and decorative covers change the look and nothing else, and some cover vents. Clip-on cooling fans usually add noise without fixing heat. Unbranded controllers are a worse bet against stick drift than a standard DualSense.",
            "USB hard drives sold as PS5 storage upgrades cannot run PS5 games; use them only to store PS4 games or park installs. Never add a second heatsink to a drive that already has one, or buy an SSD whose cooler is taller than 11.25mm.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "How to choose PS5 accessories",
        points: [
          { title: "Check your storage first", body: "If you delete games to install new ones, an M.2 SSD is the upgrade that matters most. It needs PCIe Gen4 with at least 5,500 MB/s read and a heatsink no taller than 11.25mm." },
          { title: "Audio before extras", body: "If you play with headphones, a good wireless headset improves every session. If you never use headphones, skip it." },
          { title: "Controllers by how you play", body: "Competitive players benefit from the Edge's back buttons and trigger stops. Everyone else is fine with a standard DualSense." },
          { title: "Buy official or known brands", body: "Sony and Western Digital listings sold by Amazon avoid lookalikes. Confirm the item is new, not renewed, and check the model number." },
        ],
      }}
      verdict={[
        "Start with the WD_BLACK SN850P 2TB if you are out of space; skip it only on a PS5 Pro with room to spare. Add the PULSE Elite if you play with headphones, and the DualSense Edge if you want back buttons and repairable sticks. The charging station and vertical stand are worthwhile conveniences, but they come after storage and audio.",
      ]}
      faqTitle="PS5 accessory questions"
      faq={[
        { q: "What PS5 accessory should I buy first?", a: "The WD_BLACK SN850P 2TB if you keep deleting games to install new ones. A PS5 Pro with free space can skip the SSD and start with a headset." },
        { q: "Does a USB hard drive play PS5 games?", a: "No. USB storage can hold PS4 games and parked installs. PS5 games have to run from the internal SSD or an M.2 drive in the expansion bay." },
        { q: "What SSD is compatible with the PS5?", a: "A PCIe Gen4 x4 M.2 NVMe SSD with at least 5,500 MB/s sequential read and a heatsink no larger than 25mm wide and 11.25mm tall. The WD_BLACK SN850P is officially licensed and ready to install." },
        { q: "Is the DualSense Edge worth it?", a: "Only if you want back buttons, trigger stops and stick modules you can replace. Its battery is shorter than a standard DualSense." },
      ]}
      dealBox={{ productName: "PS5 Accessories", href: `https://www.amazon.com/s?k=ps5+accessories&tag=${TAG}` }}
    />
  );
}
