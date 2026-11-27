export type DealCategory = "Audio" | "TV & streaming" | "Smart home" | "Kitchen" | "Vacuums" | "Tools";

export type Deal = {
  asin: string;
  name: string;
  detail: string;
  category: DealCategory;
  note: string;
};

const TAG = "gadgetsfindswebsite-20";

export const DEALS: Deal[] = [
  { asin: "B0C8PT7DF5", name: "Beats Studio Pro", detail: "Deep Brown, 40-hour ANC", category: "Audio", note: "Over-ear headphones with active noise cancelling and a 40-hour battery." },
  { asin: "B0F7Z4QZTT", name: "Fire TV Stick 4K Plus", detail: "Wi-Fi 6, Alexa search", category: "TV & streaming", note: "4K streaming stick with Wi-Fi 6 and Alexa+ search." },
  { asin: "B0HH1BM4D5", name: "Insignia 40\" Fire TV", detail: "1080p, Alexa remote", category: "TV & streaming", note: "40-inch 1080p smart TV with a Fire TV remote." },
  { asin: "B0DHLTCYWH", name: "Blink Outdoor 4", detail: "Wire-free security camera", category: "Smart home", note: "Wire-free outdoor security camera." },
  { asin: "B0BTYCRJSS", name: "Soundcore P20i", detail: "Earbuds, 30-hour case", category: "Audio", note: "Anker Soundcore earbuds with big bass and a charging case." },
  { asin: "B0764HS4SL", name: "Fullstar Chopper", detail: "Chop and spiralize", category: "Kitchen", note: "Countertop chopper and spiralizer." },
  { asin: "B0F334DN9J", name: "Roborock Q7 L5", detail: "Vacuums and mops", category: "Vacuums", note: "Robot vacuum and mop." },
  { asin: "B015TKUPIC", name: "NOCO Boost GB40", detail: "1000A lithium jump starter", category: "Tools", note: "Portable jump starter for a car, truck, or motorcycle." },
  { asin: "B09B8V1LZ3", name: "Echo Dot, 5th gen", detail: "Alexa speaker, charcoal", category: "Smart home", note: "Small Alexa speaker for a bedroom or desk, in charcoal." },
  { asin: "B0H3QW8DF2", name: "JLab JBuds Lux", detail: "ANC over-ear headphones", category: "Audio", note: "Over-ear headphones with active noise cancelling." },
  { asin: "B0DJGDC3BD", name: "Fire TV Stick HD", detail: "Streaming stick, Alexa", category: "TV & streaming", note: "The current HD streaming stick with an Alexa remote." },
  { asin: "B0C6W3D4RM", name: "Fire TV Stick 4K Select", detail: "4K streaming stick", category: "TV & streaming", note: "A smaller 4K Fire TV stick for a bedroom TV." },
  { asin: "B0DXM9Y8J1", name: "Ring Indoor Cam", detail: "2K, plug-in, white", category: "Smart home", note: "Indoor security camera, newest model, in white." },
  { asin: "B0CNY1F31S", name: "Chefman Air Fryer", detail: "4 quarts, touch controls", category: "Kitchen", note: "Compact 4-quart air fryer with touch controls." },
  { asin: "B0FWDSZ6Q2", name: "Ring Outdoor Cam", detail: "2K battery, wide view", category: "Smart home", note: "Battery outdoor camera with a wide view." },
  { asin: "B0DX6KZR9T", name: "Roomba 105", detail: "Robot vacuum and dock", category: "Vacuums", note: "Robot vacuum with a charging base." },
  { asin: "B0BS1PRC4L", name: "Sony WH-CH520", detail: "On-ear, built-in mic", category: "Audio", note: "On-ear wireless headphones with a microphone." },
  { asin: "B0DC8ZMR1P", name: "Echo Show 8", detail: "8.7-inch display, graphite", category: "Smart home", note: "8.7-inch smart display, newest model, in graphite." },
  { asin: "B0D9B96TBX", name: "Astercook Knives", detail: "13-piece kitchen set", category: "Kitchen", note: "A 13-piece kitchen knife set." },
  { asin: "B08R9LK9K3", name: "Lefant Robot Vacuum", detail: "Small daily floor robot", category: "Vacuums", note: "A smaller robot vacuum for daily floor cleanup." },
  { asin: "B0GHY4PR3N", name: "JBL Tune 530BT", detail: "On-ear, 2026, black", category: "Audio", note: "On-ear wireless headphones, 2026 model, in black." },
  { asin: "B0BCR7M9KX", name: "Echo Hub", detail: "8-inch home controller", category: "Smart home", note: "8-inch smart-home control panel for lights and other devices." },
  { asin: "B0DZHR44J9", name: "Bose QuietComfort", detail: "ANC headphones, blue", category: "Audio", note: "Over-ear noise cancelling headphones, twilight blue." },
  { asin: "B0H6KDLQFL", name: "Echo Show 5 Bundle", detail: "Show 5 plus Ring doorbell", category: "Smart home", note: "A bundle: Echo Show 5 plus a Ring battery doorbell." },
  { asin: "B0D2XRXNGY", name: "Soundcore V20i", detail: "Open-ear earbuds", category: "Audio", note: "Open-ear wireless earbuds from Anker's Soundcore line." },
  { asin: "B0H42R2J7M", name: "Echo Show 8 Bundle", detail: "Show 8 plus Blink Mini", category: "Smart home", note: "A bundle: Echo Show 8 plus a Blink Mini camera." },
];

export const CATEGORIES: DealCategory[] = ["Audio", "TV & streaming", "Smart home", "Kitchen", "Vacuums", "Tools"];

export function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}`;
}
