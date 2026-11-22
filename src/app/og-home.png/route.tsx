import { ImageResponse } from 'next/og';
import { illustrationSvg } from '@/lib/illustrations';

// Default share image for the home page and pages without their own image.
export const dynamic = 'force-static';

export async function GET() {
  const svg = illustrationSvg('gadget');
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#0f172a',
          color: '#f8fafc',
          padding: '0 64px',
          gap: 48,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>Gadgets Finds</div>
          <div style={{ fontSize: 36, marginTop: 20, color: '#cbd5e1', lineHeight: 1.3 }}>
            Gadget buying guides: what to buy, what to skip, and why.
          </div>
          <div style={{ fontSize: 26, marginTop: 36, color: '#fbbf24' }}>www.gadgets-finds.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={420} height={315} alt="" style={{ borderRadius: 24 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
