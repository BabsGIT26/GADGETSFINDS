import { ImageResponse } from 'next/og';

// Home-screen icon referenced by the root layout metadata.
export const dynamic = 'force-static';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          color: '#fbbf24',
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        GF
      </div>
    ),
    { width: 180, height: 180 },
  );
}
