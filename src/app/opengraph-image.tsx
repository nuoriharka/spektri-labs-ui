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
							flexDirection: 'column',
							alignItems: 'flex-start',
							justifyContent: 'flex-end',
							padding: 64,
							background: '#0b1220',
							color: '#e5e7eb',
							fontFamily:
								'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
						}}
					>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div style={{ opacity: 0.8, fontSize: 18 }}>Rakennettu shadcn/ui:lla</div>
						<div
							style={{
								marginTop: 8,
								fontSize: 56,
								fontWeight: 800,
								letterSpacing: -1,
								lineHeight: 1.1,
							}}
						>
							Spektri.Labs UI
						</div>
						<div style={{ marginTop: 10, fontSize: 28, opacity: 0.9 }}>
							Automatisoi työnkulut. Rakenna valvottuja agentteja.
						</div>
					</div>
					<div style={{ display: 'flex', gap: 8 }}>
						<div
							style={{
								height: 6,
								width: 120,
								backgroundColor: '#22d3ee',
								borderRadius: 9999,
								boxShadow: '0 0 24px #22d3ee88',
							}}
						/>
						<div
							style={{
								height: 6,
								width: 120,
								backgroundColor: '#a78bfa',
								borderRadius: 9999,
								boxShadow: '0 0 24px #a78bfa88',
							}}
						/>
					</div>
			</div>
		),
		{ ...size }
	)
}

