export const AMAZON_TAG = "gadgetsfindswebsite-20";

export function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export type Watch = {
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

export const WATCHES: Watch[] = [
  {
    slug: "apple-watch-se-3-40mm",
    name: "Apple Watch SE 3 GPS 40mm",
    image: "/assets/images/original/watch-b.jpg",
    alt: "Apple Watch SE 3 with a midnight aluminum case and navy sport band",
    asin: "B0HJB1CGR3",
    card: "The smaller Apple watch on this list. GPS only, 40mm midnight case, navy band in S/M. For an iPhone, not for leaving the phone at home.",
    fit: "This listing is the SE 3 GPS in the 40mm midnight aluminum case with the navy sport band, size S/M. It is the Apple watch to open when the phone is an iPhone and you want the SE line rather than the Series 12. The longer under-$350 guide already walks through the SE 3 as the Apple pick. This page is the specific sale listing: one size, one band.",
    skip: "Skip it if the phone is Android. An Apple Watch does not pair with one. Skip it if you need the watch to take calls and stream maps with the phone left behind. That is the Series 12 GPS + Cellular 46mm on this same list, and cellular is a plan you pay the carrier for. Also skip it if S/M is the wrong band length. The listing is not a choice of sizes.",
    points: [
      "GPS, not cellular. It tracks a workout on its own. It still needs the iPhone nearby for the phone stuff.",
      "40mm midnight case. If you wanted the bigger Series 12, this is the wrong box.",
      "Navy sport band, S/M. Check that length on Amazon before you treat it as the only SE 3.",
    ],
    limit: "Battery on an SE is a nightly charge, not a Garmin week. Health features on the listing are Apple's, and they are not a diagnosis. This is a different ASIN from the SE 3 in the under-$350 guide, so confirm the case size on the page you open.",
    compareName: "Apple Watch Series 12 GPS 42mm",
    compareSlug: "apple-watch-series-12-42mm",
    compare: "The Series 12 GPS 42mm is the current Apple watch without cellular, in black, with an S/M band. The SE 3 is the smaller, simpler Apple line. If you only need notifications, workouts, and a watch on an iPhone, the SE is the cleaner buy. If you want the newest Series 12 body, open that listing instead.",
  },
  {
    slug: "apple-watch-series-12-42mm",
    name: "Apple Watch Series 12 GPS 42mm",
    image: "/assets/images/original/watch-a.jpg",
    alt: "Apple Watch Series 12 GPS 42mm in black aluminum with a black sport band",
    asin: "B0HJBCX8VS",
    card: "Current Apple watch, GPS only, 42mm black case, black sport band in S/M. The one to buy when the iPhone stays with you.",
    fit: "Apple lists this as the Series 12 GPS, 42mm, black aluminum, black sport band S/M. The listing talks about health, fitness, sleep, heart rate, and a battery of up to 24 hours, with a short charge covering up to 12 hours. Those are Apple's figures. Buy it when you want the current Series 12 and you do not want a cellular line.",
    skip: "Skip it if you want the watch to work away from the iPhone. This box is GPS, not GPS + Cellular. Skip it if you wear a larger band. This is S/M, not M/L. Skip it on Android.",
    points: [
      "42mm black aluminum. The other Series 12 on this page is the 46mm cellular, which is a different watch and a different band size.",
      "GPS model. Workouts do not need the phone. Messages and calls still do.",
      "The 24-hour battery figure is the normal-use claim on the listing, not a multi-day Garmin number.",
    ],
    limit: "Fast-charge claims and health sensors are Apple's. A black sport band in S/M is what this ASIN includes. Do not assume a different size is the same price or the same deal.",
    compareName: "Apple Watch Series 12 GPS + Cellular 46mm",
    compareSlug: "apple-watch-series-12-cellular-46mm",
    compare: "Same series, different job. The 42mm stays GPS and uses an S/M band. The 46mm adds cellular and uses an M/L band. Pick the 42mm if the phone is always in a pocket. Pick the 46mm only if you have actually wanted to run or leave the house without the phone, and you will pay for the cellular plan.",
  },
  {
    slug: "apple-watch-series-12-cellular-46mm",
    name: "Apple Watch Series 12 GPS + Cellular 46mm",
    image: "/assets/images/original/watch-a.jpg",
    alt: "Apple Watch Series 12 GPS and Cellular 46mm in black aluminum",
    asin: "B0HJ9RYJGL",
    card: "The Series 12 that can leave the iPhone at home. 46mm black case, black sport band in M/L. Cellular is a carrier plan on top of the watch.",
    fit: "This is the Series 12 GPS + Cellular, 46mm, black aluminum, black sport band M/L. Cellular is the reason to pick it over the 42mm GPS model. Maps, calls, and messages can go through the watch when the phone is not there, after you add it to a carrier plan. The watch does not include that plan.",
    skip: "Skip it if you will never leave the phone behind. You would be paying for a radio you do not use, and the band on this listing is M/L, which is wrong if you need S/M. Skip it on Android. Skip it if you wanted the smaller 42mm GPS Series 12.",
    points: [
      "GPS + Cellular, 46mm. It is not a color swap of the 42mm listing.",
      "M/L black sport band. The 42mm listing on this page is S/M.",
      "The carrier bill starts after you activate the watch. The Amazon page is the hardware.",
    ],
    limit: "Coverage is the carrier's problem, not Apple's spec sheet. Battery with cellular on is shorter than the GPS-only claim. Read the band size on the listing before you order.",
    compareName: "Apple Watch SE 3 GPS 40mm",
    compareSlug: "apple-watch-se-3-40mm",
    compare: "The SE 3 is the smaller GPS watch and the one the under-$350 guide already treats as the default Apple pick. This Series 12 is the bigger cellular model. Most people who just want a watch on an iPhone should read the SE note first. Open this one when the phone staying home is a real requirement.",
  },
  {
    slug: "garmin-venu-4",
    name: "Garmin Venu 4 45mm",
    image: "/assets/images/original/watch-b.jpg",
    alt: "Garmin Venu 4 45mm fitness smartwatch with a black silicone band",
    asin: "B0FRG18TLS",
    card: "The everyday Garmin. Bright round screen, GPS, a flashlight, and a long app list. Works with an iPhone or an Android phone.",
    fit: "Garmin lists the Venu 4 as a 45mm fitness watch with a black silicone band, a built-in flashlight, GPS, sleep tracking, and more than 80 sports apps. It is the watch to open when you want a normal smartwatch face and training data, and you do not want to be locked to Apple.",
    skip: "Skip it if you want iMessage, Apple Pay, or the Apple fitness rings. Garmin will not become an Apple Watch. Skip it if the point is a week in the woods with a tougher case. That is the Instinct 3 AMOLED. Skip it if you wanted a screenless band. That is the WHOOP, and it is a membership.",
    points: [
      "45mm, black silicone. Confirm the size. Garmin sells other Venu 4 sizes that are not this ASIN.",
      "Built-in GPS, so a run does not depend on the phone.",
      "The flashlight is on the listing. It is a utility light, not a headlamp.",
    ],
    limit: "Battery life and sport counts are Garmin's claims. The phone app is Garmin Connect, which is a different habit from the Apple Watch app. Buttons and menus take a day to learn.",
    compareName: "Garmin Instinct 3 AMOLED",
    compareSlug: "garmin-instinct-3-amoled",
    compare: "The Venu 4 is the watch you wear to the gym and the office. The Instinct 3 AMOLED is the rugged one, with a metal-reinforced bezel and the longer battery claim. If the job is daily training and a bright screen, stay on the Venu. If the job is trails, weather, and not charging every night, read the Instinct note.",
  },
  {
    slug: "garmin-instinct-3-amoled",
    name: "Garmin Instinct 3 AMOLED 45mm",
    image: "/assets/images/original/watch-c.jpg",
    alt: "Garmin Instinct 3 AMOLED 45mm rugged GPS watch in black",
    asin: "B0DSC8JF59",
    card: "The rugged Garmin. 45mm, metal-reinforced bezel, AMOLED screen, multi-band GPS, and a flashlight. Built to be knocked, not to match an iPhone.",
    fit: "Garmin lists the Instinct 3 AMOLED as a 45mm rugged GPS watch in black, with a metal-reinforced bezel, an LED flashlight, and a battery claim of up to 18 days. The listing also names multi-band GPS. Buy it when the watch is for hikes, job sites, or travel where a thin aluminum Apple Watch is the wrong tool.",
    skip: "Skip it if you wanted a slim everyday watch. The Venu 4 is the less rugged Garmin on this page. Skip it if you need cellular without the phone. This is not an Apple Watch with a plan. Skip it if you wanted the cheapest GPS watch in the cart. The CARBINOX is the budget one, and it is not Garmin.",
    points: [
      "45mm black, metal-reinforced bezel. It is thicker and more tool-like than the Venu.",
      "Multi-band GPS is the navigation reason. Phone GPS in a pocket is the thing this replaces.",
      "The flashlight has modes on Garmin's listing, including a strobe. Useful at camp, not a bike light.",
    ],
    limit: "The 18-day figure is Garmin's smartwatch-mode claim, not 18 days of GPS. GPS hours are much shorter. Read that split on the listing. The screen is AMOLED, so it is not the dim memory-in-pixel Instinct some people still picture.",
    compareName: "CARBINOX Edge",
    compareSlug: "carbinox-edge",
    compare: "Both are rugged-looking GPS watches. The Instinct is Garmin's software, maps, and the brand people already trust for a trail. The CARBINOX is the cheaper-looking stainless watch with its own app and a MIL-STD claim we did not test. If the data has to be right, buy the Garmin. If you only need a tough GPS watch and you accept an unknown brand, read the CARBINOX note before you decide.",
  },
  {
    slug: "whoop-5-peak",
    name: "WHOOP 5.0 Peak (12-month membership)",
    image: "/assets/images/original/watch-c.jpg",
    alt: "WHOOP 5.0 screenless fitness band with a black band and a charging pack",
    asin: "B0DY2SWV16",
    card: "Not a smartwatch. A screenless band sold with 12 months of WHOOP Peak. Buy it for recovery data, not for a watch face.",
    fit: "The listing is the WHOOP 5.0/MG with a 12-month Peak membership. The hardware is a screenless band, a SuperKnit strap, and a wireless battery pack. WHOOP's page talks about sleep, strain, heart rate, an AI coach, and a battery claim past 14 days, plus IP68. There is no watch face to glance at. The membership is the product.",
    skip: "Skip it if you want the time, notifications, Apple Pay, or GPS maps on your wrist. None of that is this device. Skip it if you do not want a membership. When the 12 months end, the band is not a normal watch you keep using on its own. Skip it if you wanted the Garmin or the Apple Watch on this page.",
    points: [
      "Screenless. You read the data on the phone, not on the wrist.",
      "The Amazon listing includes 12 months of Peak. That is not a bonus sticker. It is how WHOOP is sold.",
      "The battery pack is in the box so you can charge without taking the band off. That is the point of a tracker you wear to sleep.",
    ],
    limit: "A membership product is a bad surprise if you thought you were buying a watch. The health scores are WHOOP's model, not a lab test. After the included year, continuing means paying WHOOP again.",
    compareName: "Garmin Venu 4",
    compareSlug: "garmin-venu-4",
    compare: "The Venu 4 is a watch. You get the time, GPS, and a screen, and you are not buying a 12-month plan in the same box. The WHOOP is the better fit only if you already know you want that recovery app and you do not care that the wrist stays blank. If you are unsure, buy the watch.",
  },
  {
    slug: "carbinox-edge",
    name: "CARBINOX Edge",
    image: "/assets/images/original/watch-c.jpg",
    alt: "CARBINOX Edge stainless steel GPS smartwatch in black",
    asin: "B0G56N4239",
    card: "Budget GPS watch in stainless steel. Dual-band GPS and Bluetooth calling on the listing. Not Apple, and not Garmin.",
    fit: "CARBINOX lists the Edge as a military-style watch for Android and iOS, with a stainless case, a 1.96-inch AMOLED screen, dual-frequency GPS (L1 and L5), Bluetooth calling, 5 ATM water resistance, and a MIL-STD-810H test claim. It belongs on a sale list as the watch you buy when Garmin money is the problem and you still want GPS on the wrist.",
    skip: "Skip it if you need a brand whose maps and coaching you already trust. That is the Instinct 3 or the Venu 4. Skip it if the phone is an iPhone and you want the watch to feel like part of the phone. That is an Apple Watch. Skip it if 'military tested' on a product page is the whole reason. We did not run that test.",
    points: [
      "Dual-band GPS is the spec that matters. A watch that only borrows the phone's location is a different product.",
      "Bluetooth calling means the phone is still nearby. It is not a cellular plan.",
      "Stainless case and a round screen. It looks like a tool watch. The software is CARBINOX's, which you should open on your phone before you rely on it.",
    ],
    limit: "Battery figures on the listing, including a long basic-watch mode, are the maker's figures. Basic-watch mode is not GPS mode. An unknown brand can also mean thinner support and a worse app. Read recent reviews on Amazon for the app, not just the case.",
    compareName: "Garmin Instinct 3 AMOLED",
    compareSlug: "garmin-instinct-3-amoled",
    compare: "The Instinct costs more because it is Garmin: the maps, the training load, and the flashlight are in a system people use for years. The CARBINOX is the one to consider when that system is more watch than you need and you have checked that the app runs on your phone. Do not buy it just because the case looks rugged.",
  },
];

export function watchBySlug(slug: string) {
  return WATCHES.find((item) => item.slug === slug);
}
