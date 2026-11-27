import { ImageResponse } from "next/og";

// Share cards are 1200x630. A product photo is not, so Facebook, X and iMessage
// crop it and the product looks zoomed. This draws the whole photo inside that
// frame. pageMetadata sends every external og image here.
export const runtime = "nodejs";

const ALLOWED = new Set([
  "cdn.idealo.com",
  "m.media-amazon.com",
  "images.unsplash.com",
  "images.pexels.com",
  "images.pixabay.com",
  "img.rocket.new",
]);

function dimensions(buf: Buffer, mime: string) {
  if (mime === "image/png" && buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
  if (mime === "image/jpeg" || mime === "image/jpg") {
    let i = 2;
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i += 1;
        continue;
      }
      const marker = buf[i + 1];
      if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
        return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) };
      }
      if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) {
        i += 2;
        continue;
      }
      const len = buf.readUInt16BE(i + 2);
      if (len < 2) break;
      i += 2 + len;
    }
  }
  return null;
}

function fit(w: number, h: number) {
  const scale = Math.min(1040 / w, 560 / h);
  return { width: Math.max(1, Math.round(w * scale)), height: Math.max(1, Math.round(h * scale)) };
}

export async function GET(req: Request) {
  const raw = new URL(req.url).searchParams.get("src") ?? "";
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return new Response("Bad image", { status: 400 });
  }
  if (url.protocol !== "https:" || !ALLOWED.has(url.hostname)) {
    return new Response("Image host not allowed", { status: 400 });
  }
  const res = await fetch(url, { headers: { "User-Agent": "GadgetsFinds-OG" } });
  if (!res.ok) return new Response("Image unavailable", { status: 502 });
  const mime = (res.headers.get("content-type") || "image/jpeg").split(";")[0].trim();
  if (!mime.startsWith("image/")) return new Response("Not an image", { status: 400 });
  const bytes = Buffer.from(await res.arrayBuffer());
  const size = dimensions(bytes, mime) ?? { w: 560, h: 560 };
  const box = fit(size.w, size.h);
  const src = `data:${mime};base64,${bytes.toString("base64")}`;
  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={box.width} height={box.height} alt="" />
      </div>
    ),
    { width: 1200, height: 630 },
  );
  image.headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");
  return image;
}
