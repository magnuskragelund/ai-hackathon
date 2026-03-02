import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'IDA AI Hackathon';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          fontFamily: 'monospace',
          border: '2px solid #30363d',
          boxSizing: 'border-box',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ color: '#f85149', fontSize: '14px' }}>●</div>
          <div style={{ color: '#d29922', fontSize: '14px' }}>●</div>
          <div style={{ color: '#7ee787', fontSize: '14px' }}>●</div>
          <div style={{ color: '#8b949e', fontSize: '13px', marginLeft: '8px' }}>
            ai-hackathon.ida.dk
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ color: '#8b949e', fontSize: '18px' }}>
            <span style={{ color: '#7ee787' }}>v2026.03.04</span> — IDA Dubai
          </div>

          <div style={{ color: '#58a6ff', fontSize: '72px', fontWeight: 'bold', lineHeight: 1.1 }}>
            AI Hackathon
          </div>

          <div style={{ color: '#c9d1d9', fontSize: '28px' }}>
            Eksperimenter med agenter og generativ AI
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Claude Code', 'MCP', 'Figma Make', 'Agents'].map((tag) => (
              <div
                key={tag}
                style={{
                  color: '#7ee787',
                  fontSize: '14px',
                  border: '1px solid #30363d',
                  padding: '4px 10px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ color: '#8b949e', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#7ee787' }}>▊</span> 4. marts 2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
