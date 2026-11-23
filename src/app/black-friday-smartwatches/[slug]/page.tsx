import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DealDetail, dealSeoTitle } from "@/components/common/DealPages";
import { metaDescription, pageMetadata } from "@/lib/seo";
import { WATCHES, amazonUrl, watchBySlug } from "../watches";

type Props = { params: Promise<{ slug: string }> };

const HUB = "/black-friday-smartwatches";

export function generateStaticParams() {
  return WATCHES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = watchBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    path: `${HUB}/${item.slug}`,
    title: dealSeoTitle(item.name),
    description: metaDescription([`${item.name} Black Friday deal:`, item.card]),
    kind: "watch",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = watchBySlug(slug);
  if (!item) notFound();
  return (
    <DealDetail
      item={{ ...item, href: amazonUrl(item.asin) }}
      hubPath={HUB}
      hubLabel="Black Friday smartwatch deals"
      noun="watch"
    />
  );
}
