import type { Metadata } from "next"
import Hero from "@/components/marketing/Hero"
import LogoMarquee from "@/components/marketing/LogoMarquee"
import ProblemSolution from "@/components/marketing/ProblemSolution"
import WhySpektri from "@/components/marketing/WhySpektri"
import HowItWorks from "@/components/marketing/HowItWorks"
import Testimonials from "@/components/marketing/Testimonials"
import Pricing from "@/components/marketing/Pricing"
import FinalCTA from "@/components/marketing/FinalCTA"

export const metadata: Metadata = {
  title: "Etusivu",
  description: "Aloita ilmaiseksi. Katso 60s demo. Ei lukittautumista.",
  openGraph: { images: ["/images/og/og-home.png"], title: "Spektri.Labs", description: "Aloita ilmaiseksi. Katso 60s demo." },
  twitter: { card: "summary_large_image" },
}

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <LogoMarquee />
      <ProblemSolution />
      <WhySpektri />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </main>
  )
}
