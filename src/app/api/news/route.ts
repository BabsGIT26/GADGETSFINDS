import { NextResponse } from "next/server";

const FEEDS = [
  "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=en-US&gl=US&ceid=US:en",
  "https://www.theverge.com/rss/index.xml",
];

function decode(text: string) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function tag(block: string, name: string) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decode(m[1]) : "";
}

function imageFrom(block: string) {
  const enc = block.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enc) return enc[1];
  const media = block.match(/<(?:media:content|media:thumbnail)[^>]+url=["']([^"']+)["']/i);
  if (media) return media[1];
  const img = block.match(/<img[^>]+src=["']([^"']+)["']/i);
  return img ? img[1] : null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageSize = Math.min(Number(searchParams.get("pageSize") || "20"), 30);

  try {
    const xmls = await Promise.all(
      FEEDS.map(async (url) => {
        const res = await fetch(url, {
          next: { revalidate: 900 },
          headers: { "User-Agent": "GADGETSFINDS/1.0" },
        });
        return res.ok ? res.text() : "";
      })
    );

    const articles = xmls
      .flatMap((xml) => {
        const items = xml.match(/<item[\s\S]*?<\/item>/gi) || xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
        return items.map((item) => {
          const title = tag(item, "title");
          const url = tag(item, "link") || tag(item, "id");
          const source = tag(item, "source") || tag(item, "dc:creator") || "Tech";
          const publishedAt =
            tag(item, "pubDate") || tag(item, "published") || tag(item, "updated") || new Date().toISOString();
          const description = tag(item, "description") || tag(item, "summary");
          if (!title || !url) return null;
          return {
            source: { id: null, name: source || "RSS" },
            author: null,
            title,
            description: description.replace(/<[^>]+>/g, "").slice(0, 240),
            url,
            urlToImage: imageFrom(item),
            publishedAt: new Date(publishedAt).toISOString(),
            content: null,
          };
        });
      })
      .filter(Boolean)
      .slice(0, pageSize);

    return NextResponse.json({
      status: "ok",
      totalResults: articles.length,
      articles,
    });
  } catch (error) {
    console.error("RSS news error:", error);
    return NextResponse.json({ error: "Failed to fetch news", useMockData: true }, { status: 500 });
  }
}