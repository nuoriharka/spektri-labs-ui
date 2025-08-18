import Hero from "@/components/marketing/Hero"
import DashboardShowcase from "@/components/marketing/DashboardShowcase"
import { Pillars, TrustBar, Features, HowItWorks, FinalCTA } from "@/components/marketing/Sections"
import WinSection from "@/components/marketing/WinSection"
import LogosMarquee from "@/components/marketing/LogosMarquee"
import Testimonials from "@/components/marketing/Testimonials"

export const metadata = { openGraph: { images: ["/images/og/og-home.png"] } } as const

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardShowcase
  src="/images/app/dashboard.webp"
        alt="Spektri.Labs – Komentokeskus, KPI-kortit ja ajot"
        badge="Live product"
        caption="Reaaliaikaiset KPI:t, ajot ja agentit yhdestä näkymästä"
      />
  {/* WinSection placed early to communicate value; keep rest below */}
  <WinSection />
  <Pillars />
  <TrustBar />
  <Features />
  <LogosMarquee />
  <Testimonials />
  <HowItWorks />
  <FinalCTA />
    </>
  )
}
