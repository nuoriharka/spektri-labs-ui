import type { Metadata } from "next"
import Hero from "@/components/marketing/Hero"
import DashboardShowcase from "@/components/marketing/DashboardShowcase"
import FeatureGrid from "@/components/marketing/FeatureGrid"
import { LogoCloudMarquee } from "@/components/marketing/LogoCloudMarquee"
import LogoCloud from "@/components/marketing/LogoCloud"
import LogoCloudSection from "@/components/marketing/LogoCloudSection"
import { IntegrationsMarquee } from "@/components/marketing/IntegrationsMarquee"
import SectionBg from "@/components/marketing/SectionBg"
import HowItWorks from "@/components/marketing/HowItWorks"
import { Pillars, TrustBar, FinalCTA } from "@/components/marketing/Sections"
import WinSection from "@/components/marketing/WinSection"
import LogosMarquee from "@/components/marketing/LogosMarquee"
import Testimonials from "@/components/marketing/Testimonials"
import Problems from "@/components/marketing/Problems"
import NotAChat from "@/components/marketing/NotAChat"
import Differentiators from "@/components/marketing/Differentiators"
import EndCta from "@/components/marketing/EndCta"
import IntegrationsSection from "@/components/marketing/IntegrationsSection"

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
      <SectionBg>
        <LogoCloudMarquee speed={28} />
      </SectionBg>
      {/* Static logo grid with subtle background video */}
      <SectionBg>
        <div className="mx-auto max-w-6xl">
          <LogoCloudSection />
        </div>
      </SectionBg>
  <Problems />
      <DashboardShowcase
        src="/images/app/dashboard.webp"
        alt="Spektri.Labs – Komentokeskus, KPI-kortit ja ajot"
        badge="Live product"
        caption="Reaaliaikaiset KPI:t, ajot ja agentit yhdestä näkymästä"
      />
      <WinSection />
  <Pillars />
  <NotAChat />
      <TrustBar />
      <FeatureGrid />
  <Differentiators />
      <HowItWorks />
      <SectionBg>
        <IntegrationsSection />
      </SectionBg>
      <Testimonials />
  <EndCta />
    </>
  )
}
