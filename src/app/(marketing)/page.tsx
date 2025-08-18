import type { Metadata } from "next"
import Hero from "@/components/marketing/Hero"
import DashboardShowcase from "@/components/marketing/DashboardShowcase"
import LogoCloud from "@/components/marketing/LogoCloud"
import FeatureGrid from "@/components/marketing/FeatureGrid"
import HowItWorks from "@/components/marketing/HowItWorks"
import { Pillars, TrustBar, FinalCTA } from "@/components/marketing/Sections"
import WinSection from "@/components/marketing/WinSection"
import LogosMarquee from "@/components/marketing/LogosMarquee"
import Testimonials from "@/components/marketing/Testimonials"
import Problems from "@/components/marketing/Problems"

export const metadata: Metadata = {
  title: "Etusivu",
  description: "Aloita ilmaiseksi. Katso 60s demo. Ei lukittautumista.",
  openGraph: { images: ["/images/og/og-home.png"], title: "Spektri.Labs", description: "Aloita ilmaiseksi. Katso 60s demo." },
  twitter: { card: "summary_large_image" },
}

export default function Home() {
  return (
    <>
      <Hero />
  <Problems />
      <section className="py-12 md:py-16">
        <LogoCloud variant="mono" />
      </section>
      <DashboardShowcase
        src="/images/app/dashboard.webp"
        alt="Spektri.Labs – Komentokeskus, KPI-kortit ja ajot"
        badge="Live product"
        caption="Reaaliaikaiset KPI:t, ajot ja agentit yhdestä näkymästä"
      />
      <WinSection />
      <Pillars />
      <TrustBar />
      <FeatureGrid />
      <HowItWorks />
      <LogosMarquee />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
