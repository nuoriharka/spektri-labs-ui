import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { initTelemetry } from '@/lib/telemetry'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'Segoe UI',
    'Roboto',
    'Noto Sans',
    'Ubuntu',
    'Cantarell',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
})

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
  icons: { icon: '/brand/favicon.svg' },
  openGraph: {
    title: 'Spektri.Labs UI',
    description: 'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
    url: resolvedBaseUrl,
    siteName: 'Spektri.Labs UI',
    images: [
      { url: '/images/og/og-home.png', width: 1200, height: 630, alt: 'Spektri Labs UI' },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spektri.Labs UI',
    description:
      'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
    site: '@spektri',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1020' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (typeof window !== 'undefined') {
    try { initTelemetry() } catch {}
  }
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
  {/* Minimal network hints: keep conservative */}
  <link rel="preconnect" href="https://vitals.vercel-insights.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          // Organization structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Spektri.Labs',
              url: resolvedBaseUrl,
              logo: `${resolvedBaseUrl}/brand/favicon.svg`,
            }),
          }}
        />
        <script
          id="ld-site"
          type="application/ld+json"
          // WebSite structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Spektri.Labs UI',
              url: resolvedBaseUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${resolvedBaseUrl}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
  <body className={inter.className + ' antialiased'}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
            >
              Siirry sisältöön
            </a>
            <script
              dangerouslySetInnerHTML={{
                __html: `(() => {try {var mq = window.matchMedia('(prefers-reduced-motion: reduce)'); var apply = (v) => document.documentElement.classList.toggle('reduced-motion', !!v); apply(mq.matches); mq.addEventListener && mq.addEventListener('change', (e)=> apply(e.matches));} catch (e) {}})();`
              }}
            />
            <QueryProvider>
              <Toaster>
                <main id="main">
                  {children}
                </main>
              </Toaster>
            </QueryProvider>
            <Analytics />
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
