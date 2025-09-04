import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spektri.Labs - The Future of Work is Here',
  description: 'Where Fear of God\'s luxury meets Rolex\'s precision and Apple\'s magic. Create AI agents that amplify human creativity and intelligence.',
  keywords: ['AI', 'automation', 'agents', 'productivity', 'future of work', 'artificial intelligence'],
  authors: [{ name: 'Spektri.Labs' }],
  creator: 'Spektri.Labs',
  publisher: 'Spektri.Labs',
  metadataBase: new URL('https://spektri.labs'),
  openGraph: {
    title: 'Spektri.Labs - The Future of Work is Here',
    description: 'Create AI agents that amplify human creativity and intelligence',
    url: 'https://spektri.labs',
    siteName: 'Spektri.Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spektri.Labs - AI-Powered Future',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spektri.Labs - The Future of Work is Here',
    description: 'Create AI agents that amplify human creativity and intelligence',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}