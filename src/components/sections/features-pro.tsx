"use client"

import { ShieldCheck, Layers, Gauge, Wand2 } from "lucide-react"

const items = [
  { icon: Gauge, title: "Nopea ja skaalautuva", desc: "Optimoitu Next.js 14:lle. Staattinen kuin mahdollista, dynaaminen vain kun tarvitaan." },
  { icon: Layers, title: "Uudelleenkäytettävät mallit", desc: "shadcn/ui‑käytäntö: kapseloi logiikka ja skeemat. Komponentit ovat omistettavissa." },
  { icon: ShieldCheck, title: "Turvallinen oletuksista", desc: "Radix‑primitiivit, roolit ja fokus näkyvät oikein. Hyvä a11y on sisäänrakennettu." },
  { icon: Wand2, title: "Tyyliteltävä", desc: "Tailwind + CSS‑muuttujat. Brändivärit, tummat tilat ja kontrasti kohdallaan." },
]

export function FeaturesPro() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Keskeiset hyödyt</h2>
          <p className="mt-2 text-slate-300">Rakentu shadcn/ui‑komponenteille – selkeä, nopea ja ylläpidettävä.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 text-white transition-colors hover:bg-white/[0.06]">
              <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-cyan-300 drop-shadow" />
                </div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-slate-300">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
