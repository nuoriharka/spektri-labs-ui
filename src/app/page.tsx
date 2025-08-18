import SiteHeader from "@/components/layout/SiteHeader"
import Hero from "@/components/marketing/Hero"
import DashboardShowcase from "@/components/marketing/DashboardShowcase"
import { Pillars, TrustBar, Features, HowItWorks, FinalCTA } from "@/components/marketing/Sections"
import LogosMarquee from "@/components/marketing/LogosMarquee"
import Testimonials from "@/components/marketing/Testimonials"
export const metadata = { openGraph: { images: ["/images/og/og-home.png"] } } as const

function Landing() {
  return (
    <main className="min-h-screen bg-[#0B0C0E] text-[var(--fg,#E7E9EC)]">
      <SiteHeader />
      <Hero />
      <DashboardShowcase
        src="/images/app/dashboard.webp"
        alt="Spektri.Labs – Komentokeskus, KPI-kortit ja ajot"
        badge="Live product"
        caption="Reaaliaikaiset KPI:t, ajot ja agentit yhdestä näkymästä"
      />
      <Pillars />
      <TrustBar />
  <Features />
  <LogosMarquee />
  <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} Spektri.Labs</footer>
    </main>
  )
}

function ClassicLanding() {
  return (
  <main id="main" />
  )
}

export default function Home() { return <Landing /> }
