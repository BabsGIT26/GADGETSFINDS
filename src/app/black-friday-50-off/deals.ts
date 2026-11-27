export type DealCategory = "Audio" | "TV & streaming" | "Smart home" | "Kitchen" | "Vacuums";

export type Deal = {
  asin: string;
  name: string;
  category: DealCategory;
  note: string;
};

const TAG = "gadgetsfindswebsite-20";

export const DEALS: Deal[] = [
  { asin: "B0C8PT7DF5", name: "Beats Studio Pro, Deep Brown", category: "Audio", note: "Over-ear headphones with active noise cancelling and a 40-hour battery." },
  { asin: "B0HH1BM4D5", name: "Insignia 40-inch F40 Fire TV", category: "TV & streaming", note: "40-inch 1080p smart TV with a Fire TV remote." },
  { asin: "B0DHLTCYWH", name: "Blink Outdoor 4", category: "Smart home", note: "Wire-free outdoor security camera." },
  { asin: "B0764HS4SL", name: "Fullstar Vegetable Chopper", category: "Kitchen", note: "Countertop chopper and spiralizer." },
  { asin: "B0F334DN9J", name: "Roborock Q7 L5", category: "Vacuums", note: "Robot vacuum and mop." },
  { asin: "B0H3QW8DF2", name: "JLab JBuds Lux ANC", category: "Audio", note: "Over-ear headphones with active noise cancelling." },
  { asin: "B0DJGDC3BD", name: "Fire TV Stick HD", category: "TV & streaming", note: "The current HD streaming stick with an Alexa remote." },
  { asin: "B0DXM9Y8J1", name: "Ring Indoor Cam 2K", category: "Smart home", note: "Indoor security camera, newest model, in white." },
  { asin: "B0CNY1F31S", name: "Chefman 4-Quart Air Fryer", category: "Kitchen", note: "Compact 4-quart air fryer with touch controls." },
  { asin: "B0DX6KZR9T", name: "iRobot Roomba 105", category: "Vacuums", note: "Robot vacuum with a charging base." },
  { asin: "B0BS1PRC4L", name: "Sony WH-CH520", category: "Audio", note: "On-ear wireless headphones with a microphone." },
  { asin: "B0DC8ZMR1P", name: "Echo Show 8", category: "Smart home", note: "8.7-inch smart display, newest model, in graphite." },
  { asin: "B0D9B96TBX", name: "Astercook 13-Piece Knife Set", category: "Kitchen", note: "A 13-piece kitchen knife set." },
  { asin: "B08R9LK9K3", name: "Lefant Robot Vacuum", category: "Vacuums", note: "A smaller robot vacuum for daily floor cleanup." },
  { asin: "B0GHY4PR3N", name: "JBL Tune 530BT", category: "Audio", note: "On-ear wireless headphones, 2026 model, in black." },
  { asin: "B0BCR7M9KX", name: "Echo Hub", category: "Smart home", note: "8-inch smart-home control panel for lights and other devices." },
  { asin: "B0DZHR44J9", name: "Bose QuietComfort Headphones", category: "Audio", note: "Over-ear noise cancelling headphones, twilight blue." },
  { asin: "B0H6KDLQFL", name: "Echo Show 5 and Ring Doorbell", category: "Smart home", note: "A bundle: Echo Show 5 plus a Ring battery doorbell." },
  { asin: "B0D2XRXNGY", name: "Soundcore V20i Open-Ear Earbuds", category: "Audio", note: "Open-ear wireless earbuds from Anker's Soundcore line." },
  { asin: "B0H42R2J7M", name: "Echo Show 8 and Blink Mini", category: "Smart home", note: "A bundle: Echo Show 8 plus a Blink Mini camera." },
];

export const CATEGORIES: DealCategory[] = ["Audio", "TV & streaming", "Smart home", "Kitchen", "Vacuums"];

export function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}`;
}
