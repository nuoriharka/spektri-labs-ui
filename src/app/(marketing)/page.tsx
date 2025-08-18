import type { Metadata } from "next"
import SpektriBento from "@/components/SpektriBento"

export const metadata: Metadata = {
  title: "Etusivu",
  description: "Aloita ilmaiseksi. Katso 60s demo. Ei lukittautumista.",
  openGraph: { images: ["/images/og/og-home.png"], title: "Spektri.Labs", description: "Aloita ilmaiseksi. Katso 60s demo." },
  twitter: { card: "summary_large_image" },
}

import Hero from "@/components/marketing/Hero";
import { Suspense } from "react";
import LogoCloud from "@/components/marketing/LogoCloud";

export default function Page() {
  const Features8 = require("@/components/marketing/Features8").default;
  const Content2 = require("@/components/marketing/Content2").default;
  const CTA1 = require("@/components/marketing/CTA1").default;
  return (
    <Suspense>
      <main>
        <Hero />
        <LogoCloud />
        <Features8 />
        <Content2 />
        <CTA1 />
      </main>
    </Suspense>
  );
}
