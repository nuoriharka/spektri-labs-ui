"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import SiteHeader from '@/components/layout/SiteHeader'
import MarketingFooter from '@/components/marketing/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(mq.matches)
      const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
      mq.addEventListener?.('change', onChange)
      return () => mq.removeEventListener?.('change', onChange)
    }
  }, [])
  return (
    <div className={cn(reduced ? 'reduced-motion' : '')}>
      <header role="banner">
        <SiteHeader />
      </header>
  {children}
      <footer role="contentinfo">
        <MarketingFooter />
      </footer>
    </div>
  )
}
