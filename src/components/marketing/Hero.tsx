"use client";
import Image from "next/image";
import { getBlur } from "@/lib/images";
import { photos } from "@/content/photos";
import Link from "next/link";
import Container from "@/components/layout/Container";
import win from "@/content/win.fi.json";
import PrimaryCta from "@/components/ui/PrimaryCta";
import { track } from "@/lib/analytics";
import dynamic from "next/dynamic";
const SimRun = dynamic(() => import("@/components/marketing/SimRun"), { ssr: false });

export default function Hero() {
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-[rgba(109,106,255,0.15)] via-transparent to-transparent">
      {/* Simplified background; focus on primary hero image below */}
      <Container>
        <div className="py-28 md:py-36 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/15">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden />
            <span>Ei lukittautumista</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Sinulla on idea. Me annamme sille armeijan.
          </h1>
          <p className="mt-6 text-lg text-white/80">Muuta tavoitteesi tuloksiksi keskustelemalla. Ensimmäinen digitaalinen työntekijäsi on valmiina alle 60 sekunnissa.</p>
          <div className="mt-8 flex items-center gap-3">
            <PrimaryCta href="/app" event="hero_cta_primary">Aloita ilmaiseksi</PrimaryCta>
            <button
              onClick={() => {
                track('hero_cta_demo');
                const el = document.getElementById('simrun-dialog');
                el?.classList.remove('hidden');
              }}
              className="inline-flex items-center rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-medium backdrop-blur transition"
            >
              Katso 60 sekunnin demo
            </button>
          </div>
          <p className="mt-3 text-sm text-white/60">Ei luottokorttia, ei sitoumuksia.</p>
          <div className="mt-10">
            <Image
              src={photos.hero.dashboard.src}
              alt={photos.hero.dashboard.alt}
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div id="simrun-dialog" className="hidden fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0B0C0E] p-4 shadow-2xl">
              <div className="flex items-center justify-between p-2">
                <div className="font-semibold text-white">60s demo</div>
                <button onClick={() => document.getElementById('simrun-dialog')?.classList.add('hidden')} className="text-white/70 hover:text-white">Sulje</button>
              </div>
              <div className="p-2">
                <SimRun />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
