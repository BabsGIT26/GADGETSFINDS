import type { Metadata } from "next";
import Roundup, { type RoundupProduct } from "@/components/common/Roundup";
import { pageMetadata } from "@/lib/seo";
import { illustrationPath } from "@/lib/illustrations";

const TAG = "gadgetsfindswebsite-20";
const PATH = "/roborock-vs-roomba-2026";
const SEO_TITLE = "Roborock vs Roomba (2026): Which Is Better?";
const TITLE = "Roborock vs Roomba in 2026: Which Robot Vacuum Is Better?";
const DESCRIPTION =
  "Roborock vs Roomba in 2026: Qrevo S Pro vs Combo 10 Max compared on suction, LiDAR vs camera navigation, mopping, docks and price. See which one to buy.";
const IMG = illustrationPath("vacuum");
const amz = (asin: string) => `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const metadata: Metadata = pageMetadata({ path: PATH, title: SEO_TITLE, description: DESCRIPTION, kind: "vacuum" });

const products: RoundupProduct[] = [
  {
    id: "roborock-qrevo-s-pro",
    name: "Roborock Qrevo S Pro",
    label: "Best overall",
    url: amz("B0GGRSMXKN"),
    why: "More suction, LiDAR, two lifting mops and a mop-washing dock for less money.",
    specs: [
      ["Suction (Roborock)", "18,500Pa"],
      ["Navigation", "PreciSense LiDAR plus Reactive Tech obstacle avoidance"],
      ["Mopping", "Two spinning mops that lift on carpet"],
      ["Dock", "Self-empty, refill, 167°F mop wash, warm-air dry"],
      ["List price (checked Nov 22, 2026)", "$699.99"],
    ],
    body: [
      "The Qrevo S Pro shows Roborock's current formula in one box: very high rated suction, a LiDAR map that works in the dark, two spinning mops, and a dock that empties the bin into a sealed 2.7-liter bag (about seven to nine weeks per bag, Roborock says), refills the water and hot-washes and dries the mops.",
      "Do not confuse it with the older Qrevo S, a 7,000Pa robot. The link here is the new black Qrevo S Pro; white is a separate listing. When we checked on November 22, 2026, it was in stock and sold by Amazon.",
    ],
    skip: "you want the simplest possible app. Roborock's app has more settings than iRobot's, and it needs 2.4GHz Wi-Fi.",
    image: IMG,
  },
  {
    id: "roomba-combo-10-max",
    name: "iRobot Roomba Combo 10 Max",
    label: "Best Roomba",
    url: amz("B0D9ZRH61T"),
    why: "Camera obstacle recognition, a retracting mop and the familiar iRobot app.",
    specs: [
      ["Suction", "Not published by iRobot"],
      ["Navigation", "PrecisionVision camera, not LiDAR"],
      ["Mopping", "One retracting SmartScrub pad"],
      ["Dock", "AutoWash: empties, refills, washes and dries the pad"],
      ["List price (checked Nov 22, 2026)", "$1,399"],
    ],
    body: [
      "iRobot's current answer to Roborock's dock combos, model X085020. The camera can recognize shoes, cords and pet waste, which is what Roomba buyers usually pay for. The single mop pad scrubs back and forth with pressure, then lifts so the robot can cross carpet dry.",
      "It costs more than the Qrevo S Pro at list price and has usually cost more on sale too. When we checked, the listing was sold by a third-party seller, so read the seller line before you buy.",
    ],
    skip: "price matters or your home is often dark. The camera maps less reliably in low light, and the Roborock costs less.",
    image: IMG,
  },
  {
    id: "roborock-q7-l5",
    name: "Roborock Q7 L5",
    label: "Best budget Roborock",
    url: amz("B0F3337BV7"),
    why: "LiDAR mapping and a mop pad for a fraction of the price.",
    specs: [
      ["Suction (Roborock)", "8,000Pa"],
      ["Navigation", "LiDAR"],
      ["Mopping", "Drag pad, 270ml tank"],
      ["Dock", "Charging only"],
      ["Price when checked", "$119.99 on Amazon, Nov 22, 2026"],
    ],
    body: [
      "If neither dock robot fits your budget, the Q7 L5 gives you Roborock's LiDAR map, no-go zones and room schedules without the station. You empty the bin and rinse the pad yourself.",
    ],
    skip: "you want a hands-off robot. With no self-empty or mop-washing dock, you do the maintenance.",
    image: IMG,
  },
];

export default function Page() {
  return (
    <Roundup
      path={PATH}
      eyebrow="Comparison"
      title={TITLE}
      updated="November 2026"
      description={DESCRIPTION}
      answer="Roborock is better than Roomba for most people in 2026. The Roborock Qrevo S Pro has higher rated suction, LiDAR navigation, two lifting mops and a mop-washing dock, and costs less than the Roomba Combo 10 Max. Pick the Roomba if you want camera obstacle recognition and the simpler iRobot app."
      intro={[
        "To keep the Roborock vs Roomba comparison concrete, we compare each brand's current dock combo: the Roborock Qrevo S Pro and the iRobot Roomba Combo 10 Max. Both links go to the original new listing, not a renewed unit or a search page. Prices move, so check the live price on both before you decide.",
      ]}
      hero={{ src: IMG, alt: "Roborock vs Roomba robot vacuums" }}
      tableTitle="Roborock vs Roomba: specs compared"
      tableColumns={["Navigation", "Mopping", "Dock"]}
      products={products}
      extra={[
        {
          id: "cleaning",
          heading: "Roborock vs Roomba suction and cleaning",
          body: [
            "Roborock publishes 18,500Pa for the Qrevo S Pro and pairs it with an anti-tangle brush for pet hair. iRobot does not publish a pascal number for the Combo 10 Max; it relies on its rubber rollers and a side brush that reaches baseboards. Both handle hard floors and ordinary carpet. Winner: Roborock, for raw pickup and pet hair.",
          ],
        },
        {
          id: "navigation",
          heading: "LiDAR vs camera navigation",
          body: [
            "Roborock's LiDAR measures the room with a laser, so a dim hallway does not break the map, and it stores several floors with rooms and no-go zones. The Roomba's camera is better at naming objects on the floor, like cords and pet waste, but maps less reliably in low light. Winner: Roborock for a dependable map; Roomba for obstacle recognition.",
          ],
        },
        {
          id: "mopping",
          heading: "Mopping and docks",
          body: [
            "The Qrevo S Pro spins two pads that lift on carpet; its dock hot-washes and dries them. The Combo 10 Max scrubs with one pad that retracts on carpet, and its AutoWash dock washes and dries it. Neither replaces a weekly hand mop on a busy kitchen floor. Winner: Roborock.",
          ],
        },
        {
          id: "app-parts",
          heading: "App, parts and support",
          body: [
            "The iRobot app is easier on day one: pair it, map, schedule. Roborock's app gives more room-by-room control but has more settings. Roomba still wins on parts: filters, brushes and bags are easy to find in stores. Roborock parts are available, mostly online. Winner: Roomba for simplicity and parts.",
          ],
        },
      ]}
      buyingGuide={{
        heading: "Should you buy a Roborock or a Roomba?",
        points: [
          { title: "Choose Roborock if", body: "you want stronger rated suction, a LiDAR map that works with the lights off, spinning mops that lift, and more hardware for the money." },
          { title: "Choose Roomba if", body: "you want the simpler iRobot app, camera avoidance for pet waste and cords, and parts you can find in a local store." },
          { title: "Check the listing", body: "Buy the original new listing. A renewed unit, an older Qrevo S or a Roomba without the AutoWash dock is not the robot compared here." },
          { title: "Budget under $300", body: "Neither dock robot fits. See our budget robot vacuum guide, led by the Roborock Q7 L5." },
        ],
      }}
      verdict={[
        "Roborock is the better choice for most homes: the Qrevo S Pro offers more rated suction, LiDAR, two mops and a mop-washing dock, usually for less than the Roomba Combo 10 Max. Choose the Roomba if you value its camera obstacle recognition and simpler app, and only when a sale closes the price gap.",
      ]}
      faqTitle="Roborock vs Roomba questions"
      faq={[
        { q: "Is Roborock or Roomba better in 2026?", a: "Roborock, for most people. The Qrevo S Pro has LiDAR, higher rated suction and a dock that washes the mops, usually for less than the Roomba Combo 10 Max." },
        { q: "When is a Roomba the better buy?", a: "When you want the simpler iRobot app, camera avoidance for cords and pet waste, and a sale that closes the price gap." },
        { q: "Is LiDAR better than a camera on a robot vacuum?", a: "For mapping, yes: LiDAR works in the dark and keeps a stable map. Cameras are better at recognizing specific objects on the floor." },
        { q: "What is the best Roborock or Roomba under $300?", a: "The Roborock Q7 L5. It has LiDAR mapping and a mop pad, and was $119.99 on Amazon when we checked. Neither dock robot here is under $300." },
      ]}
      dealBox={{ productName: "Roborock and Roomba Robot Vacuums", href: `https://www.amazon.com/s?k=roborock+roomba&tag=${TAG}` }}
    />
  );
}
