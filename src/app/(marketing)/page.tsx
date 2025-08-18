import type { Metadata } from "next"
import Hero from "@/components/marketing/Hero"
import { LogoCloudMarquee } from "@/components/marketing/LogoCloudMarquee"
import SectionBg from "@/components/marketing/SectionBg"
import { Pillars } from "@/components/marketing/Sections"
import WinSection from "@/components/marketing/WinSection"
import WhatIs from "@/components/marketing/WhatIs"
import AboutUs from "@/components/marketing/AboutUs"

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
      <WhatIs />
      <Pillars />
      <AboutUs />
      <WinSection />
    </>
  )
}
