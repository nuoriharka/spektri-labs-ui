/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		// Avoid requiring 'sharp' in constrained environments
		unoptimized: true,
	},
}

module.exports = nextConfig
