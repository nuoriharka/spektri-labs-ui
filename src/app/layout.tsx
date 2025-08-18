import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConditionalNav } from '@/components/conditional-nav'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'
import { initTelemetry } from '@/lib/telemetry'

const inter = Inter({ subsets: ['latin'] })

// Resolve site URL for canonical/OG. Prefer explicit env, then Vercel-provided URL, fallback to localhost.
const resolvedBaseUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (explicit) return explicit.startsWith('http') ? explicit : `https://${explicit}`
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return vercel.startsWith('http') ? vercel : `https://${vercel}`
  return 'http://localhost:3001'
})()

export const metadata: Metadata = {
  metadataBase: new URL(resolvedBaseUrl),
  title: {
    default: 'Spektri.Labs UI',
    template: '%s · Spektri.Labs',
  },
  description:
    'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
  applicationName: 'Spektri.Labs UI',
  authors: [{ name: 'Spektri.Labs' }],
  keywords: ['Spektri', 'UI', 'shadcn', 'Next.js', 'Tailwind'],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Spektri.Labs UI',
    description:
      'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
    url: '/',
    siteName: 'Spektri.Labs',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spektri.Labs UI',
    description:
      'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1020' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window !== 'undefined') {
    try { initTelemetry() } catch {}
  }
  return (
    <html lang="fi" suppressHydrationWarning>
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Siirry sisältöön
        </a>
        <Toaster>
          <ConditionalNav />
          {children}
          <Footer />
        </Toaster>
      </body>
    </html>
  )
}
