import type { Metadata } from "next"
import SpektriBento from "@/components/SpektriBento"

export const metadata: Metadata = {
  title: "Etusivu",
  description: "Aloita ilmaiseksi. Katso 60s demo. Ei lukittautumista.",
  openGraph: { images: ["/images/og/og-home.png"], title: "Spektri.Labs", description: "Aloita ilmaiseksi. Katso 60s demo." },
  twitter: { card: "summary_large_image" },
}

  import HeroTailark from "@/components/marketing/HeroTailark";
  import LogoCloudTailark from "@/components/marketing/LogoCloudTailark";
  import Features8 from "@/components/marketing/Features8";
  import Content2 from "@/components/marketing/Content2";
  import CTA1 from "@/components/marketing/CTA1";

  export default function Page() {
    return (
      <>
        <HeroTailark />
        <LogoCloudTailark />
        <Features8 />
        <Content2 />
        <CTA1 />
      </>
    );
  }
