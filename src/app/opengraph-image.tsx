import { ImageResponse } from 'next/og'

export const size = {
	width: 1200,
	height: 630,
}
export const contentType = 'image/png'

// Minimal OG image to unblock builds. Keeps branding simple and readable.
export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'stretch',
					justifyContent: 'space-between',
					background: '#0b1220',
					color: '#e5e7eb',
					fontFamily:
						'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
				}}
			>
				<div style={{ padding: 64, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
					<div style={{ opacity: 0.8, fontSize: 18 }}>Spektri.Labs</div>
					<div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>
						Automatisoi työnkulut. Rakenna valvottuja agentteja.
					</div>
					<div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
						<div style={{ height: 6, width: 120, backgroundColor: '#22d3ee', borderRadius: 9999, boxShadow: '0 0 24px #22d3ee88' }} />
						<div style={{ height: 6, width: 120, backgroundColor: '#a78bfa', borderRadius: 9999, boxShadow: '0 0 24px #a78bfa88' }} />
					</div>
				</div>
				<div style={{ width: 360, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 48 }}>
					<div style={{ width: 200, height: 200, borderRadius: 24, background: 'linear-gradient(135deg,#22d3ee33,#a78bfa33)', border: '1px solid rgba(255,255,255,0.08)' }} />
				</div>
			</div>
		),
		{ ...size }
	)
}

