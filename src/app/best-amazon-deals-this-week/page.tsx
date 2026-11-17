import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/app/homepage/components/Footer";
import AmazonDealBox from "@/components/common/AmazonDealBox";
import RelatedGuides from "@/components/common/RelatedGuides";

export const metadata: Metadata = {
  title: "Best Amazon Deals This Week (50%+ Off) | Gadgets Finds",
  description:
    "Four Amazon Fire TV deals checked on November 17, 2026, each more than half off: the new Stick 4K, the 4K Plus, the 4K Select, and the Fire TV Cube.",
  metadataBase: new URL("https://www.gadgets-finds.com"),
  alternates: { canonical: "https://www.gadgets-finds.com/best-amazon-deals-this-week" },
};

const AMAZON = {
  stick: "https://www.amazon.com/dp/B0G4XRP464?tag=gadgetsfindswebsite-20",
  plus: "https://www.amazon.com/dp/B0F7Z4QZTT?tag=gadgetsfindswebsite-20",
  select: "https://www.amazon.com/dp/B0C6W3D4RM?tag=gadgetsfindswebsite-20",
  cube: "https://www.amazon.com/dp/B09BZZ3MM7?tag=gadgetsfindswebsite-20",
} as const;

function amazonHref(url: string) {
  return `/api/go?url=${encodeURIComponent(url)}`;
}

function ViewOnAmazon({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={amazonHref(href)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={`View ${name} on Amazon`}
      className="inline-flex items-center justify-center mt-6 min-w-[220px] px-8 py-3 rounded-full bg-amber-400 text-zinc-950 text-sm font-extrabold hover:bg-amber-300 transition-colors"
    >
      View on Amazon
    </a>
  );
}

const IMAGES = {
  stick: "/assets/images/fire-tv-stick-4k.jpg",
  plus: "/assets/images/fire-tv-stick-4k-plus.jpg",
  select: "/assets/images/fire-tv-stick-4k-select.jpg",
  cube: "/assets/images/fire-tv-cube.jpg",
} as const;

function ProductPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="border-b border-border bg-white py-6">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="mx-auto block w-auto h-auto max-h-72 md:max-h-80 max-w-full object-contain"
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <article className="min-h-screen bg-background pt-14 md:pt-16">
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">Disclosure:</span> Gadgets Finds is an Amazon Associate. We may earn from qualifying purchases if you buy through links on this page, at no extra cost to you. Prices and availability change on Amazon.
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Deals</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Best Amazon Deals This Week</h1>
          <p className="text-muted-foreground mb-2 text-sm">Prices checked: November 17, 2026</p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Amazon’s early Black Friday sale is already cutting its own streaming boxes by more than half. The official sale week starts November 19. These four prices were on the product pages on November 17, and a streaming stick is the kind of deal that can vanish overnight. Open the button, then read the price on Amazon before you pay.
          </p>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Every discount below is against the list price printed on that same page, not a made-up “was” from a coupon site. Netflix, Disney+, and the rest are not included. A stick does not make those subscriptions cheaper.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">What a real half-off deal looks like</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-8">
            <li>The list price and the sale price are both on Amazon’s own page, sold by Amazon.</li>
            <li>The product is current. A 70% cut on a stick from 2018 is not the same purchase.</li>
            <li>The cheaper model is not the better buy. A $16 HD stick next to a $20 4K stick is the trap this week.</li>
            <li>Lightning deals and Prime-only coupons are not the same as the price in the buy box. This page uses the buy box.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">1. Fire TV Stick 4K, newest model</h2>
          <div className="mb-8 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.stick} alt="Amazon Fire TV Stick 4K newest model with the new remote" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.stick)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Amazon Fire TV Stick 4K (newest model)</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-foreground">Checked price:</strong> $19.99, list $59.99, about 67% off</li>
                <li><strong className="text-foreground">Picture:</strong> 4K, HDR10+</li>
                <li><strong className="text-foreground">Wireless:</strong> Wi-Fi 6</li>
                <li><strong className="text-foreground">Power:</strong> Direct Power from the TV’s USB port, wall adapter not required</li>
                <li><strong className="text-foreground">In the box:</strong> the new Fire TV remote with a navigation ring</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This is the deal. Amazon’s newest Stick 4K was $19.99 against a $59.99 list price, which is $40 off. The page describes 4K with HDR10+, Wi-Fi 6, and Direct Power, meaning the stick can draw power from a USB port on the TV with the included cable instead of a wall brick. The remote is the new one: a navigation ring, TV power and volume, and buttons for the shortcut panel, the Fire TV menu, and live TV. Alexa+ is the voice layer Amazon is advertising for search and smart-home controls. That is a feature of the software, not a promise that every Alexa service stays free.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What this listing does not claim is Dolby Vision. HDR10+ is the format printed here. If the TV and the apps you watch are built around Dolby Vision, look at the 4K Plus, which costs $10 more at the price checked today. If the TV is 1080p, neither 4K stick will invent a sharper panel. You still get the apps and the remote. You do not get a 4K picture from a 1080p set.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Apps are the usual set: Prime Video, Netflix, YouTube, Disney+, Apple TV, Max, Hulu, and the free ad-supported channels. Each paid app still wants its own subscription. At $20 this is the one to buy for a bedroom TV that already has an HDMI port and a USB port that stays powered when the set is off. Some TVs cut USB power in standby, and then Direct Power is not enough. A wall outlet fixes that.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Why it is the deal</p>
                  <p className="text-sm text-muted-foreground">The current 4K stick, Wi-Fi 6, the new remote, and $40 off a $60 list.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">The limit</p>
                  <p className="text-sm text-muted-foreground">HDR10+, not Dolby Vision. A TV that kills USB power in standby still needs a wall plug.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: Buy this one unless the TV specifically wants Dolby Vision. Check that $19.99 is still the price.</p>
              <ViewOnAmazon href={AMAZON.stick} name="Fire TV Stick 4K newest model" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">2. Fire TV Stick 4K Plus</h2>
          <div className="mb-8 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.plus} alt="Amazon Fire TV Stick 4K Plus with its remote" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.plus)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Amazon Fire TV Stick 4K Plus</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-foreground">Checked price:</strong> $29.99, list $69.99, about 57% off</li>
                <li><strong className="text-foreground">Picture and sound:</strong> Dolby Vision, HDR10+, Dolby Atmos</li>
                <li><strong className="text-foreground">Wireless:</strong> Wi-Fi 6</li>
                <li><strong className="text-foreground">Software:</strong> the 2026 Fire TV interface, Alexa+</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Plus was $29.99 against $69.99. Amazon’s page calls it the next generation of its best-selling 4K stick and lists Wi-Fi 6 plus Dolby Vision, HDR10+, and Dolby Atmos. That is the actual difference from the $20 stick, whose page stops at HDR10+. Dolby Vision only matters if the television and the app both support it. On a set that does, the $10 gap is the reason to step up. On a set that does not, you paid $10 for a logo.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The same page mentions cloud games, including titles such as Call of Duty and Hogwarts Legacy, through Xbox Game Pass and Luna. Read the condition in Amazon’s own sentence: a Game Pass subscription and a compatible controller are sold separately. One line on that listing even names the 4K Select, which is Amazon mixing product copy. Do not buy the Plus because you think a console’s worth of games is in the box. Buy it because the TV does Dolby Vision and $30 is still less than half of $70.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The remote in the listing photo is the earlier layout, with Prime Video and Netflix buttons, not the ring remote on the newest $20 stick. That is a fair trade if picture format is the priority and a small annoyance if you wanted the new clicker. Either way it is a stick, not a soundbar. Atmos here is a bitstream the stick can pass. The speakers that play it are still yours.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Why it is the deal</p>
                  <p className="text-sm text-muted-foreground">Dolby Vision and Atmos at $30, $40 under the list price, still Wi-Fi 6.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">The limit</p>
                  <p className="text-sm text-muted-foreground">Games need a separate subscription and a controller. The newer ring remote is on the $20 stick, not this one.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The $10 step up, and only if the TV uses Dolby Vision.</p>
              <ViewOnAmazon href={AMAZON.plus} name="Fire TV Stick 4K Plus" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">3. Fire TV Stick 4K Select</h2>
          <div className="mb-8 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.select} alt="Amazon Fire TV Stick 4K Select streaming stick and remote" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.select)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Amazon Fire TV Stick 4K Select</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-foreground">Checked price:</strong> $17.99, list $49.99, about 64% off</li>
                <li><strong className="text-foreground">Picture:</strong> 4K, HDR10+</li>
                <li><strong className="text-foreground">Body:</strong> about 3.9 × 1.2 × 0.6 in, 1.5 oz</li>
                <li><strong className="text-foreground">Inside:</strong> quad-core 1.7 GHz, 8 GB storage</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Select was $17.99 against a $49.99 list, so the percentage looks as good as the newest stick. The hardware Amazon prints for it is a quad-core 1.7 GHz processor, 8 GB of storage, and a body about 3.9 by 1.2 by 0.6 inches at 1.5 ounces. Picture is 4K with HDR10+. The page also carries the 2026 Fire TV software, so the menu is current even if the stick is the cheaper one.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The problem is the neighbor. The newest Stick 4K was $19.99 the same afternoon, two dollars more, with Wi-Fi 6 called out by name and the new remote. Two dollars is not a reason to take the older essential stick unless the newest one has sold out or the price has flipped by the time you click. Check both buttons. If they are still $18 and $20, take the $20.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Select stays useful as the backup if the newest model jumps back toward $60 and this one is still under $20. It is a real 4K stick with a real discount. It is not the one to grab first while the newer stick is cheaper than a pizza.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Why it is on the list</p>
                  <p className="text-sm text-muted-foreground">A genuine 64% cut, 4K and HDR10+, and a small stick that still runs the current Fire TV software.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">The limit</p>
                  <p className="text-sm text-muted-foreground">Two dollars under the newer stick on the day this was checked. Easy to buy the wrong one.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The fallback. Buy it only if the newest 4K stick is no longer $20.</p>
              <ViewOnAmazon href={AMAZON.select} name="Fire TV Stick 4K Select" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-4">4. Fire TV Cube</h2>
          <div className="mb-8 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <ProductPhoto src={IMAGES.cube} alt="Amazon Fire TV Cube hands-free streaming player" />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">
                <a href={amazonHref(AMAZON.cube)} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline decoration-amber-500/80 underline-offset-4 hover:text-amber-700">Amazon Fire TV Cube</a>
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                <li><strong className="text-foreground">Checked price:</strong> $89.99, list $199.99, about 55% off</li>
                <li><strong className="text-foreground">Processor:</strong> octa-core, listed as twice the Fire TV Stick 4K Max</li>
                <li><strong className="text-foreground">Wireless:</strong> Wi-Fi 6E</li>
                <li><strong className="text-foreground">Picture and sound:</strong> Dolby Vision, HDR, Dolby Atmos</li>
                <li><strong className="text-foreground">Extra:</strong> hands-free microphones and speakers, HDMI switching</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Cube was $89.99 against $199.99. That is $110 off, and it is a different object from the sticks. Amazon calls it the fastest Fire TV media player, with an octa-core processor it says is twice a Fire TV Stick 4K Max, and it is the one with Wi-Fi 6E. Dolby Vision, HDR, and Dolby Atmos are on the page. So are hands-free microphones, so Alexa can hear you without the remote, and HDMI switching, so the Cube can sit between the TV and a cable box, a console, or a webcam. There is a microphone off button. Use it.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fifty-five percent off a $200 box is a real discount. It is still $70 more than the newest stick. Pay it if the living room has more than one HDMI source and you want the Cube to switch them, or if the router is Wi-Fi 6E and the stick’s Wi-Fi 6 is the weak link. Do not pay it to watch the same Netflix account in a bedroom. The stick does that for $20. The Cube also takes shelf space and a power outlet. It is not something you hide behind the TV the way a stick disappears into an HDMI port.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The listing is the current Cube page, with the 2026 Fire TV software called out. Confirm the price is still under $100. At $140 the math against a $20 stick gets worse. At $90 it is the one Fire TV in this sale that is not a dongle.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="font-semibold text-green-600 mb-2">Why it is the deal</p>
                  <p className="text-sm text-muted-foreground">$110 off, Wi-Fi 6E, Dolby Vision, and hands-free control with an HDMI switcher built in.</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 mb-2">The limit</p>
                  <p className="text-sm text-muted-foreground">Still $90. A bedroom does not need it. The microphones are always a reason to know where the off switch is.</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">Verdict: The living-room box, at half of $200. Skip it if a stick already solves the TV.</p>
              <ViewOnAmazon href={AMAZON.cube} name="Fire TV Cube" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-16 mb-4">Prices checked on November 17</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Device</th>
                  <th className="text-left p-3">Sale</th>
                  <th className="text-left p-3">List</th>
                  <th className="text-left p-3">Off</th>
                  <th className="text-left p-3">Buy it if</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Stick 4K, newest</td><td className="p-3">$19.99</td><td className="p-3">$59.99</td><td className="p-3">67%</td><td className="p-3">You want one 4K stick</td></tr>
                <tr className="border-b"><td className="p-3">Stick 4K Plus</td><td className="p-3">$29.99</td><td className="p-3">$69.99</td><td className="p-3">57%</td><td className="p-3">The TV does Dolby Vision</td></tr>
                <tr className="border-b"><td className="p-3">Stick 4K Select</td><td className="p-3">$17.99</td><td className="p-3">$49.99</td><td className="p-3">64%</td><td className="p-3">The newest stick is gone</td></tr>
                <tr><td className="p-3">Fire TV Cube</td><td className="p-3">$89.99</td><td className="p-3">$199.99</td><td className="p-3">55%</td><td className="p-3">You need HDMI switching</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">What to skip</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Fire TV Stick HD was $15.99 the same day, against a $40 list. That is a large percentage and a bad purchase next to a 4K stick at $20. Four dollars is not worth giving up 4K and the new remote. A “50% off” banner on a no-name Android box is the other thing to skip. The seller, the review count, and the return window matter more than the crossed-out price.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Echo speakers were also in a Prime-member coupon sale on November 17, often advertised at half off. Those coupons are not the same as the Fire TV buy-box prices above, and they can be limited to one device per account. If you go looking, clip nothing until the cart shows the final number.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Final verdict</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            On November 17 the purchase was the newest Fire TV Stick 4K at $19.99. It is the current stick, the cut is $40, and the 4K Select at $17.99 is not different enough to save the two dollars. Spend $29.99 on the 4K Plus only when the television uses Dolby Vision. Spend $89.99 on the Cube only when you want Wi-Fi 6E, hands-free Alexa, and an HDMI switch in the living room.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Black Friday week starts November 19, so these numbers can move in either direction. The button under each review is the listing. The price on that page, the afternoon you buy, is the one that counts.
          </p>

          <RelatedGuides current="/best-amazon-deals-this-week" />

          <AmazonDealBox
            productName="Amazon Today's Deals"
            href="https://www.amazon.com/gp/goldbox?tag=gadgetsfindswebsite-20"
          />

          <p className="text-sm text-muted-foreground mt-8">Streaming apps bill separately. A half-off stick does not include Netflix, Disney+, or a Game Pass subscription.</p>
        </div>
      </article>
      <Footer />
    </>
  );
}
