/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		remotePatterns: [
			{ protocol: 'https', hostname: 'html.tailus.io' },
			{ protocol: 'https', hostname: 'placehold.co' },
		],
	},
}

module.exports = nextConfig
