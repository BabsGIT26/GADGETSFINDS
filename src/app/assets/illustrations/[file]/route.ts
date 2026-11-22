import { ILLUSTRATION_KINDS, illustrationSvg, isIllustrationKind } from '@/lib/illustrations';

// Serves /assets/illustrations/<kind>.svg, prerendered at build time from src/lib/illustrations.ts.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return ILLUSTRATION_KINDS.map((kind) => ({ file: `${kind}.svg` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const kind = file.endsWith('.svg') ? file.slice(0, -4) : file;
  return new Response(illustrationSvg(isIllustrationKind(kind) ? kind : 'gadget'), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
  });
}
