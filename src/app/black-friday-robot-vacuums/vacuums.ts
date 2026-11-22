export const AMAZON_TAG = "gadgetsfindswebsite-20";

export function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export type Vacuum = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  asin: string;
  card: string;
  fit: string;
  skip: string;
  points: string[];
  limit: string;
  compareName: string;
  compareSlug: string;
  compare: string;
};

export const VACUUMS: Vacuum[] = [
  {
    slug: "roborock-qrevo-2-pro-black",
    name: "Roborock Qrevo 2 Pro (Black)",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Black Roborock Qrevo 2 Pro robot vacuum in its station",
    asin: "B0GXF7ZQPY",
    card: "The full station, in black. Vacuum, spinning mops, and a dock that empties, washes, and dries. Same robot as the white listing.",
    fit: "Open this listing when you want the 2026 Qrevo 2 Pro and you want it in black. Roborock sells it as a vacuum and mop with a dock that empties the dust, refills the water, washes the mops with hot water, and dries them. The listing quotes 20,000 Pa of suction, a dual anti-tangle brush, and a side mop arm that reaches the edge. That is a station robot for hard floors, if you have room for a tall base.",
    skip: "Skip it if you only needed the floor vacuumed. The eufy C10 and the Shark AI Ultra do not ask you to keep a water tank. Also skip it if the corner you have is small. The listing's station is about 19.5 inches long, 17.7 inches wide, and 15.8 inches tall. The white Qrevo 2 Pro is the same machine if black is the wrong color.",
    points: [
      "The dock is the product. Roborock says it empties dust, refills water, washes the spinning mops at 149°F, and dries them with warm air. You still empty the dirty water.",
      "The mops lift, and the listing says the mop can come off for carpet. That is the difference from a pad that drags across a rug.",
      "FlexiArm is the edge mop. The listing says it gets within about 1.85 mm of the wall. Obstacle avoidance here is the Reactive system, not a promise it will miss every cable.",
    ],
    limit: "Suction, temperature, and edge numbers are Roborock's numbers, not a test we ran. The listing says this robot only supports 2.4 GHz Wi-Fi. A 5 GHz-only network will not set it up. Black and white are colorways. Do not buy both.",
    compareName: "Qrevo 2 Pro in white",
    compareSlug: "roborock-qrevo-2-pro-white",
    compare: "The white listing is the same Qrevo 2 Pro. Pick the color that matches the room, then compare the live price. The different robot is the Qrevo Curv 2 Flow, which uses a roller mop instead of these spinning pads.",
  },
  {
    slug: "roborock-qrevo-2-pro-white",
    name: "Roborock Qrevo 2 Pro (White)",
    image: "/assets/illustrations/vacuum.svg",
    alt: "White Roborock Qrevo 2 Pro robot vacuum in its station",
    asin: "B0GXFHY7Y2",
    card: "The same Qrevo 2 Pro station, in white. Buy this listing only if white is the color you want.",
    fit: "This is not a second model. It is the 2026 Qrevo 2 Pro in white: the same dock, the same spinning mops, and the same claims as the black listing. Roborock lists 20,000 Pa of suction, a dual anti-tangle system, FlexiArm edge mopping, and a station that empties dust, refills water, hot-washes the mops, and dries them. Choose white when the black tower would look wrong in the room.",
    skip: "Skip it if you already decided on black. Buying both is buying the same robot twice. Skip it if you do not want mop maintenance at all. A vacuum-only dock, the eufy C10 or the Shark, is the smaller job.",
    points: [
      "Same station job as the black one: empty, refill, wash, dry. The color is the difference you can see.",
      "Spinning mops that lift off carpet, which is the reason to pick this over a vacuum that only has a bin.",
      "The listing still says 2.4 GHz Wi-Fi only. Check the router before you assume the app will connect.",
    ],
    limit: "Treat every performance number as the maker's claim. Confirm the live price on this exact white listing. A different seller, a renewed unit, or a bundle is not this product.",
    compareName: "Qrevo 2 Pro in black",
    compareSlug: "roborock-qrevo-2-pro-black",
    compare: "Black is the same Qrevo 2 Pro. Take whichever color is cheaper on the day, unless one of them clashes with the room. If you wanted a roller mop instead of spinning pads, that is the Curv 2 Flow, not either of these.",
  },
  {
    slug: "roborock-qrevo-curv-2-flow",
    name: "Roborock Qrevo Curv 2 Flow",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Roborock Qrevo Curv 2 Flow robot vacuum with its roller mop extended",
    asin: "B0FXG2BDTJ",
    card: "The other full station. A roller mop Roborock says washes itself as it runs, plus a dock that heat-washes and dries.",
    fit: "The Curv 2 Flow is the robot to open when you want a roller mop, not the spinning pads on the Qrevo 2 Pro. Roborock calls the roller SpiraFlow: water feeds it while a scraper cleans it during the run, and the dock heat-washes and dries it afterward. The listing also quotes 20,000 Pa, a dual anti-tangle system, and obstacle recognition it says can tell apart more than 200 objects. It is still a large station. Measure the spot before you treat the sale price as the decision.",
    skip: "Skip it if the Qrevo 2 Pro already has the station you wanted and you do not care how the mop is shaped. Skip it if carpet is most of the house. A roller and a water tank are a hard-floor tool. The eufy C10 is the vacuum-only dock if mopping was never the point.",
    points: [
      "The roller is the difference. Roborock says it cleans itself while it mops, then the dock washes it with hot water and dries it.",
      "Carpet handling on the listing is a mop lift of up to 15 mm, plus a shield the brand says keeps the wet roller off the rug.",
      "LiDAR mapping, with up to four floor plans on the listing. That is the feature that matters in a split-level house. It does not make a cluttered floor easy.",
    ],
    limit: "The 0% hair-tangle line is an SGS lab claim Roborock prints, not a promise hair never wraps in a real hallway. Suction and object-count figures are the brand's figures. This is not the Qrevo 2 Pro, and it is not the cheaper Q7 M5+ lower on this page.",
    compareName: "Qrevo 2 Pro",
    compareSlug: "roborock-qrevo-2-pro-black",
    compare: "Both are full Roborock stations with a hot-wash dock. The 2 Pro mops with spinning pads and a side arm. The Curv 2 Flow mops with a roller. If the live prices are close, pick the mop style you want. If one is much cheaper, the cheaper station is the rational buy unless the roller is the whole reason you are here.",
  },
  {
    slug: "eufy-c10",
    name: "eufy C10",
    image: "/assets/illustrations/vacuum.svg",
    alt: "eufy C10 robot vacuum with self-empty dock",
    asin: "B0GD1XTMFN",
    card: "Vacuum only, with a dock. Pick it if pet hair fills a bin every day and you do not need a mop.",
    fit: "The C10 is the straightforward dock robot on this list. eufy sells it as a self-emptying vacuum, about 2.85 inches tall, with LiDAR mapping and a brush that reaches the edge. That combination fits an apartment or a one-level home where the job is vacuuming, not washing the floor.",
    skip: "Skip it if you want the mop washed for you. That is the ECOVACS T90 Pro Omni, and it is a much bigger machine. Also skip it if you are happy to empty a bin yourself. The Lefant M210 Pro and the ILIFE A30s do not bring a dock into the room.",
    points: [
      "Self-empty dock, so the robot is not the thing you empty after every run.",
      "LiDAR mapping, which is the useful version of navigation. It is not a robot that only bounces until the battery dies.",
      "The low body is the reason to pick it over a taller robot when you have beds and sofas close to the floor. The dock itself is still a tower. Measure the closet or the corner where the dock will sit.",
    ],
    limit: "These are the claims on the Amazon listing, not a test we ran in one house. Mapping still fails on loose cables, and a dock does not remove the need to cut hair off the roller sometimes.",
    compareName: "Shark AI Ultra",
    compareSlug: "shark-ai-ultra",
    compare: "The Shark AI Ultra is the other vacuum-and-dock here, and it is the older, widely sold pet-hair model with a bagless base. Choose the C10 if the low robot height is the point. Choose the Shark if you already know that base and you do not want a mop.",
  },
  {
    slug: "ecovacs-t90-pro-omni",
    name: "ECOVACS DEEBOT T90 PRO OMNI",
    image: "/assets/illustrations/vacuum.svg",
    alt: "ECOVACS DEEBOT T90 PRO OMNI robot vacuum and mop",
    asin: "B0GJ5S4V78",
    card: "The full station. Vacuum, mop, and a dock that cleans the roller. Only if hard floors are the main job.",
    fit: "This is not a budget robot that happens to be on sale. ECOVACS lists it as a vacuum and mop with a self-cleaning roller, a lift so the mop stays off carpet, and tangle control. Buy it when you are tired of a robot that only vacuums and leaves the mopping to you.",
    skip: "Skip it if you mostly have carpet, or if you wanted a small robot you can ignore. A station this size needs a spot, water, and more cleaning of the dock than a vacuum-only base. The eufy C10 or the Shark is the smaller decision.",
    points: [
      "It mops and vacuums. Several robots further down this list only vacuum.",
      "The station is supposed to wash the roller mop, which is the part people hate doing by hand.",
      "The carpet lift matters if you have rugs. A mop that drags across a rug just wets the rug.",
    ],
    limit: "Suction numbers on the listing are the maker's numbers. A station does not make a messy home maintain itself. You still deal with the dirty water tank.",
    compareName: "Roborock Q7 M5+",
    compareSlug: "roborock-q7-m5-plus",
    compare: "The Roborock Q7 M5+ also vacuums and mops, with a self-empty dock and LiDAR. Pick the T90 if the selling point is the mop being washed in the station. Pick the Q7 M5+ if you want Roborock's mapping and a dock without stepping all the way up to this station.",
  },
  {
    slug: "roborock-q7-m5-plus",
    name: "Roborock Q7 M5+",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Roborock Q7 M5+ robot vacuum and mop with dock",
    asin: "B0DWX69JVG",
    card: "Vacuum and mop with a dock. The step up if you want a Roborock with a self-empty dock.",
    fit: "Roborock lists the Q7 M5+ as a vacuum and mop with a self-empty dock, LiDAR, and a dual anti-tangle system, and it calls it an upgrade from the Q5 Max+. That is the one to open if you want a mapped robot that also mops, and you do not want the largest station on this page.",
    skip: "Skip it if you will never use the mop. You would be paying for a pad, a tank, and maintenance you do not want. The eufy C10 or the Shark AI Ultra stay vacuum-only. Also skip it if you only needed the old Q5 from our budget guide. That is a different, simpler robot.",
    points: [
      "Self-empty dock. The listing talks about weeks between emptying, which is the whole point of the base.",
      "LiDAR, so you can keep it out of a room. Gyro robots on the cheap end cannot do that well.",
      "Anti-tangle is aimed at pet hair. It reduces wraps. It does not mean you never touch the brush.",
    ],
    limit: "Our under-$300 guide now covers the Roborock Q7 L5, the dockless model. Do not treat this as the same machine. The Q7 L5 has no self-empty dock.",
    compareName: "eufy C10",
    compareSlug: "eufy-c10",
    compare: "The C10 is the slimmer vacuum-only dock. The Q7 M5+ is the one that also mops. If the floors are mostly hard and you want both jobs, take the Roborock. If you only want hair off the floor, the C10 is the cleaner decision.",
  },
  {
    slug: "shark-ai-ultra",
    name: "Shark AI Ultra",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Shark AI Ultra robot vacuum with self-empty base",
    asin: "B09H8CWFNK",
    card: "Older vacuum-and-dock, bagless base, aimed at pet hair. Fine if you do not need a mop.",
    fit: "The AI Ultra is the known Shark robot with home mapping, a matrix cleaning path, and a bagless self-empty base. Shark aims it at pet hair. It belongs on a Black Friday list because it is a normal vacuum-and-dock, not because it is the newest robot in the category.",
    skip: "Skip it if you want mopping, or if you want the lowest robot that still has a dock. The eufy C10 is the short one. Also skip it if a bagless base sounds like no maintenance. You still empty that base, and you still clear the brush.",
    points: [
      "Bagless base. There is no bag subscription, which some dock robots quietly add.",
      "Mapping, so it is not a random bounce robot.",
      "It is a vacuum. There is no mop pad to rinse, which is a plus if you did not want one.",
    ],
    limit: "This model has been on the market for years. Newer robots map and avoid cables better. Buy it as a practical pet-hair dock, not as the most current robot vacuum.",
    compareName: "eufy C10",
    compareSlug: "eufy-c10",
    compare: "Both are vacuum plus dock. The Shark is the familiar bagless base. The C10 is the newer short eufy. Read both listings for what is included in the box, then pick the one that matches the corner you have for a dock.",
  },
  {
    slug: "ilife-a30s",
    name: "ILIFE A30s",
    image: "/assets/illustrations/vacuum.svg",
    alt: "ILIFE A30s robot vacuum",
    asin: "B0G5YDVR99",
    card: "No dock and no mop. LiDAR, no-go zones, and a remote. For people who will empty the bin.",
    fit: "ILIFE sells the A30s as a vacuum only: LiDAR, a map, no-go zones, a stated runtime around 150 minutes, plus the app, voice control, and a remote. It is the right shape of product if you want a mapped robot and you do not want a dock standing in the hall.",
    skip: "Skip it if heavy shedding fills a small bin every day. You will be the dock. Also skip it if you wanted the floor washed. Nothing on this model mops.",
    points: [
      "Real mapping and no-go zones, which cheap gyro robots do not give you.",
      "No station to find a place for.",
      "A physical remote still matters if you do not want the app for every run.",
    ],
    limit: "No dock means the convenience stops at the bin. The listing's suction figure is ILIFE's figure. Navigation is only as good as a clear floor.",
    compareName: "Lefant M210 Pro",
    compareSlug: "lefant-m210-pro",
    compare: "The Lefant is the other no-dock robot here, and it is the simpler one from the budget guide. Its navigation is gyroscopic, not LiDAR. Pick the ILIFE if keeping it out of one room matters. Pick the Lefant if you want the basic daily robot and you have already read that longer guide.",
  },
  {
    slug: "eufy-l60",
    name: "eufy L60 (Renewed)",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Renewed eufy L60 robot vacuum with self-empty station",
    asin: "B0CYNVGN26",
    card: "This listing is renewed, not new. A dock and a detangling roller, only if you accept a renewed unit.",
    fit: "The L60 on this list is the renewed listing, with a self-empty station and eufy's detangling roller. The listing also states a 5,000 Pa suction figure and up to 60 days of hands-free cleaning. Those are eufy's claims for the model. The important fact for the buyer is the condition: renewed means it is not sold as a brand-new robot.",
    skip: "Skip it if you want a new unit and a standard new-product warranty. Open the eufy C10 instead. It is the new eufy with a dock on this same list. Only stay on the L60 if the Amazon page still says renewed and you have read the return window.",
    points: [
      "Self-empty station, same job as the other docks: you stop emptying the robot bin every day.",
      "The detangling roller is the pet-hair feature. It is not a promise that hair never wraps.",
      "Renewed can be a fair buy. It is a different product from a new one, so the listing page is part of the decision.",
    ],
    limit: "Do not describe this to anyone as a new eufy L60. Condition, seller, and what 'renewed' includes are on Amazon and can change.",
    compareName: "eufy C10",
    compareSlug: "eufy-c10",
    compare: "The C10 is the new eufy dock on this list, and it is the safer default. The L60 is the renewed alternative with a detangling roller. If the two listings are close, buy the new one.",
  },
  {
    slug: "lefant-m210-pro",
    name: "Lefant M210 Pro",
    image: "/assets/illustrations/vacuum.svg",
    alt: "Lefant M210 Pro robot vacuum in white",
    asin: "B0CYL7273B",
    card: "The simple daily robot from the budget guide. No dock. You empty it. Fine for a small home.",
    fit: "The white M210 Pro is the budget robot from our longer under-$300 guide, and it is the listing that currently has a buy box. Lefant sells it as a slim vacuum with app and voice control, several cleaning modes, and a stated runtime around 120 minutes. In that guide it is the everyday pick for hard floors and moderate pet hair, not a mapping flagship.",
    skip: "Skip it if you need no-go zones, a mop, or a dock. A house that sheds heavily will fill this bin. Then look at the ILIFE if you still do not want a dock, or at the eufy C10 if you do.",
    points: [
      "No dock, so it takes one charging pad and nothing else.",
      "The longer guide treats the navigation as gyroscopic with a planned path, which is better than a robot that only bounces, and worse than LiDAR.",
      "Parts are ordinary: filter, side brush, roller. That is the maintenance on a robot in this class.",
    ],
    limit: "It gets stuck on cables and rug edges, like every other cheap robot. The dustbin is not large. None of that changed because it is Black Friday.",
    compareName: "ILIFE A30s",
    compareSlug: "ilife-a30s",
    compare: "Both robots have no dock. The ILIFE adds LiDAR and no-go zones. The Lefant is the simpler machine, and it is the one the longer budget guide actually walks through. Read that guide if you are choosing between cheap robots. Use this page if you are choosing between a cheap robot and a dock.",
  },
];

export function vacuumBySlug(slug: string) {
  return VACUUMS.find((item) => item.slug === slug);
}
