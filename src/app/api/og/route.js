import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #60a5fa 100%)',
          color: '#fff',
          padding: '72px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.9, marginBottom: 20 }}>SecureGen</div>
        <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          Generate Strong Passwords Instantly
        </div>
        <div style={{ fontSize: 30, opacity: 0.9, marginTop: 26 }}>
          100% client-side privacy • Free • Cryptographically secure
        </div>
        <div style={{ marginTop: 48, fontSize: 26, opacity: 0.85 }}>{siteConfig.url}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
