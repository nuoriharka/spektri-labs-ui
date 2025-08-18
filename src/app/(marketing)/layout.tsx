import type { Metadata } from 'next'
import SiteHeader from '@/components/layout/SiteHeader'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Spektri.Labs UI',
  description: 'Ammattimainen käyttöliittymäkirjasto ja demo, rakennettu shadcn/ui-komponenteilla.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[var(--fg,#E7E9EC)]">
      <SiteHeader />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
