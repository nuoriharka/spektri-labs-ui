import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Bot, Sparkles, Workflow, Brain, ArrowRight, ShieldCheck, Gauge, Layers } from "lucide-react"
import { ChartCard } from "@/components/chart-card"
import Image from "next/image"
import saasScreenshot from "../../photos/image.png"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { HeroDusk } from "@/components/sections/hero-dusk"
import { FeaturesPro } from "@/components/sections/features-pro"
import { HowItWorks } from "@/components/sections/how-it-works"
import { AnimatedStats } from "@/components/sections/animated-stats"
import { UseCases } from "@/components/sections/use-cases"
import { ContactSection } from "@/components/sections/contact"
import { Testimonials } from "@/components/sections/testimonials"
import { PricingTeaser } from "@/components/sections/pricing-teaser"
// Removed alternate hero variants for stability
import { FAQSection } from "@/components/sections/faq"
import { Chart3D } from "@/components/chart-3d"
const dashboardImg = "/images/app/dashboard.webp"

function FancyLanding() {
  // All features enabled by default
  return (
  <main id="main" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section – Tailark-inspired hero */}
      <HeroDusk />

      {/* Highlights – Tailark features when enabled */}
  <FeaturesPro />

  {/* How it works */}
  <HowItWorks />

  {/* Animated stats */}
  <AnimatedStats />

  {/* Product UI preview – compact demo */}
  <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl overflow-hidden text-white">
            {/* Browser frame */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 bg-white/5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 text-xs text-slate-300">app.spektri.labs</div>
            </div>
            {/* Content */}
            <div className="grid gap-6 p-4 md:p-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-4">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
                  <Image src={dashboardImg} alt="Dashboard" width={1600} height={900} className="w-full h-auto object-cover" />
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-300">Aktiiviset agentit</CardTitle></CardHeader>
                    <CardContent className="pt-0 text-2xl font-semibold text-white">12</CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-300">Tehtävät / vrk</CardTitle></CardHeader>
                    <CardContent className="pt-0 text-2xl font-semibold text-white">1 942</CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="pb-2"><CardTitle className="text-sm text-slate-300">Kesk. tarkkuus</CardTitle></CardHeader>
                    <CardContent className="pt-0 text-2xl font-semibold text-white">98.3%</CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-3">
                <Card className="bg-white/5 border-white/10">
                  <CardHeader className="pb-2"><CardTitle className="text-sm">Viimeaikaiset</CardTitle></CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    {["Raportointi", "Sisällön tuotanto", "Liidien rikastus"].map((n, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-500" /><span className="text-white/90">{n}</span>
                        </div>
                        <span className="text-slate-300">{i * 7 + 3} min</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardHeader className="pb-2"><CardTitle className="text-sm">Käyttäjät</CardTitle></CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    {["MS","AT","JL"].map((ini, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-7 w-7"><AvatarFallback className="text-xs">{ini}</AvatarFallback></Avatar>
                          <span className="text-sm text-white/90">Käyttäjä {i+1}</span>
                        </div>
                        <span className="text-xs text-slate-300">online</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations cloud when enabled, else simple logo cloud */}
  {/* Logo sections removed per request */}


      {/* CTA Section */}
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Aloita tänään</h2>
      <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">Käyttöönotto minuuteissa. Skaalaa ilman yllätyksiä.</p>
          <Link href="/dashboard">
            <Button size="lg" className="btn-spektri text-lg px-8 py-4">
              <Sparkles className="mr-2 h-5 w-5" /> Kokeile ilmaiseksi 14 päivää
            </Button>
          </Link>
        </div>
      </section>

  {/* Social proof */}
  <Testimonials />

  {/* Use cases */}
  <UseCases />

  {/* Pricing teaser */}
  <PricingTeaser />

  {/* Contact */}
  <ContactSection />

  {/* FAQ */}
  <FAQSection />
    </main>
  )
}

function ClassicLanding() {
  return (
    <main id="main" className="min-h-screen bg-background">
      <section className="border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-3" variant="secondary">Rakennettu shadcn/ui-komponenteilla</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Spektri.Labs UI
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Ammattimainen UI-malli Next.js 14:lle. Yksinkertainen, vakaa ja laajennettava.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/dashboard">
                <Button size="lg">Aloita</Button>
              </Link>
              <Link href="/components">
                <Button size="lg" variant="outline">Komponentit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Nopea aloitus</CardTitle>
                <CardDescription>Selkeä peruspohja ilman ylimääräistä.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>Yhtenäiset ja saavutettavat komponentit.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Laajennettavuus</CardTitle>
                <CardDescription>Lisää osioita ja sivuja tarpeen mukaan.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base md:text-lg">Kokonaisaktiivisuus</CardTitle>
              <CardDescription>Ajot 14 päivän aikana</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartCard
                title=""
                description=""
                data={[8,12,11,18,20,22,25,24,28,30,31,33,35,37]}
                labels={["1","2","3","4","5","6","7","8","9","10","11","12","13","14"]}
                className="bg-card"
                accentClassName="stroke-[hsl(var(--quantum-blue))]"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Valmis tuotantoon</h2>
          <p className="mt-2 text-muted-foreground">Seuraavat askeleet: lisää sisältöä, kytke data ja julkaise.</p>
          <div className="mt-6">
            <Link href="/status">
              <Button variant="secondary">Katso järjestelmän tila</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function Home() {
  return <FancyLanding />
}
