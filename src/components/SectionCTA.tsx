"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BorderBeam from "@/components/magicui/BorderBeam";

/**
 * CALL TO ACTION — Tailark CTA-2 inspired
 * Place this right before the footer.
 */
export default function SectionCTA() {
  return (
  <section id="cta" className="relative mx-auto max-w-6xl px-5 md:max-w-7xl md:px-6 py-20 md:py-24 text-white type-modular baseline">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-cyan-500/5" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

  <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950/80 to-zinc-900/60 p-8 md:p-12 shadow-lg shadow-zinc-950/20">
        <BorderBeam className="pointer-events-none" />

        {/* Kicker */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
          <Sparkles className="h-3.5 w-3.5" /> Valmiina rakentamaan agenttien kanssa?
        </div>

        {/* Headline */}
  <h2 className="text-balance text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          Aloita ilmaiseksi — <span className="text-zinc-300">Yksi alusta, rajaton potentiaali</span>
        </h2>
  <p className="mt-3 max-w-2xl text-zinc-300 leading-7 md:leading-8">
          Rakenna, orkestroi ja skaalaa agentteja minuuteissa. Ei lukitusta, ei monimutkaisuutta — vain nopeita tuloksia.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="rounded-full micro-cta">
            <Link href="/signup">
              Aloita nyt
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" className="rounded-full micro-cta border border-white/20 bg-white/10 hover:bg-white/20">
            <Link href="/demo">
              <Calendar className="mr-2 h-4 w-4" /> Varaa demo
            </Link>
          </Button>
        </div>

        {/* Trust row */}
  <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
          {["SOC2‑ready","LLM‑agnostinen","No‑code & Pro‑code","No vendor lock‑in"].map((chip) => (
            <span key={chip} className="rounded-full border border-zinc-800 bg-black/40 px-3 py-1">{chip}</span>
          ))}
        </div>

        {/* Gradient divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Small print */}
        <p className="mt-3 text-xs text-zinc-500">
          14 päivän ilmainen kokeilu. Ei luottokorttia. Voit perua milloin tahansa.
        </p>
      </div>
    </section>
  );
}
