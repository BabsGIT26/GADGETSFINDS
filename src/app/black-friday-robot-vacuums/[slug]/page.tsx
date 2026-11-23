import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DealDetail, dealSeoTitle } from "@/components/common/DealPages";
import { metaDescription, pageMetadata } from "@/lib/seo";
import { VACUUMS, amazonUrl, vacuumBySlug } from "../vacuums";
import { isSaleSeason } from "@/lib/sale-season";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

const HUB = "/black-friday-robot-vacuums";

export function generateStaticParams() {
  return VACUUMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = vacuumBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    path: `${HUB}/${item.slug}`,
    title: dealSeoTitle(item.name),
    description: metaDescription([isSaleSeason() ? `${item.name} Black Friday deal:` : `${item.name}:`, item.card]),
    kind: "vacuum",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = vacuumBySlug(slug);
  if (!item) notFound();
  return (
    <DealDetail
      item={{ ...item, href: amazonUrl(item.asin) }}
      hubPath={HUB}
      hubLabel={isSaleSeason() ? "Black Friday robot vacuum deals" : "Robot vacuum deals"}
      noun="robot vacuum"
    />
  );
}
