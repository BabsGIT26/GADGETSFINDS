import { ImageResponse } from 'next/og';
import { ILLUSTRATION_KINDS, illustrationSvg, isIllustrationKind } from '@/lib/illustrations';

// PNG share images (Open Graph / Twitter) built from the original SVG illustrations.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return ILLUSTRATION_KINDS.map((kind) => ({ kind }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  const k = isIllustrationKind(kind) ? kind : 'gadget';
  const svg = illustrationSvg(k);
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={840} height={630} alt="" />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
