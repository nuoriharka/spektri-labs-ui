import type { Metadata } from "next"
import Hero from "@/components/marketing/Hero"
import LogoMarquee from "@/components/marketing/LogoMarquee"
import ProblemSolution from "@/components/marketing/ProblemSolution"
import WhySpektri from "@/components/marketing/WhySpektri"
import SpektriBento from "@/components/SpektriBento"
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
      {/* Spektri Bento Grid section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Yksi Alusta. Rajaton Potentiaali.</h2>
          <SpektriBento />
        </div>
      </section>
      <ProblemSolution />
      <WhySpektri />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </main>
  )
}
