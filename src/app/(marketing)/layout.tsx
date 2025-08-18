import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import MarketingFooter from '@/components/marketing/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
  <>
      <header role="banner">
        <SiteHeader />
      </header>
  {children}
      <footer role="contentinfo">
        <MarketingFooter />
      </footer>
  </>
  )
}
