import Hero from "@/components/marketing/Hero"
import DashboardShowcase from "@/components/marketing/DashboardShowcase"
import { Pillars, TrustBar, Features, HowItWorks, FinalCTA } from "@/components/marketing/Sections"
import WinSection from "@/components/marketing/WinSection"
import LogosMarquee from "@/components/marketing/LogosMarquee"
import Testimonials from "@/components/marketing/Testimonials"
import dynamic from "next/dynamic"
const LogoCloud = dynamic(() => import("@/components/marketing/LogoCloud"), { ssr: false })

function Landing() {
  return (
  <main className="min-h-screen bg-[#0B0C0E] text-[var(--fg,#E7E9EC)]" id="main">
      <Hero />
      <DashboardShowcase
        src="/images/app/dashboard.webp"
        alt="Spektri.Labs – Komentokeskus, KPI-kortit ja ajot"
        badge="Live product"
        caption="Reaaliaikaiset KPI:t, ajot ja agentit yhdestä näkymästä"
      />
      <section className="py-12 md:py-16">
        <LogoCloud variant="mono" />
      </section>
  {/* WinSection early to communicate value */}
  <WinSection />
  <Pillars />
      <TrustBar />
  <Features />
  <LogosMarquee />
  <Testimonials />
      <HowItWorks />
      <FinalCTA />
    </main>
  )
}

function ClassicLanding() {
  return (
  <main id="main" />
  )
}

export default function Home() { return <Landing /> }
