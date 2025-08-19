"use client";

import {
  ArrowRight,
  Target,
  BadgeCheck,
  Rocket,
  Sparkles,
  Users,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  Heart,
} from "lucide-react";
import BorderBeam from "@/components/magicui/BorderBeam";

const WHY_ITEMS = [
  {
    icon: Globe,
    title: "Avoin ekosysteemi",
    desc: "Ei vendor lock-in. Oma data, omat säännöt, täysi kontrolli infrastruktuuriin.",
  },
  {
    icon: Zap,
    title: "Nopeus etusijalla",
    desc: "Ideasta MVP:hen 60 sekunnissa. Agentit hoitavat raskauttamisen, sinä keskityt visioon.",
  },
  {
    icon: Shield,
    title: "Turvallisuus sisäänrakennettuna",
    desc: "SOC2, GDPR, ja zero-trust arkkitehtuuri. Enterprise-ready päivä yhdestä.",
  },
  {
    icon: Heart,
    title: "Yhteisöllisyys",
    desc: "Jaa agenttejasi, löydä inspiraatiota ja luo yhdessä – ansainta seuraa mukana.",
  },
  {
    icon: Users,
    title: "Luojat keskiössä",
    desc: "Ansaintamallit, attribuutio ja yhteisöllisyys on suunniteltu tekijöiden näkökulmasta.",
  },
  {
    icon: TrendingUp,
    title: "Tuotevetoinen kasvu",
    desc: "Alusta leviää orgaanisesti käyttäjien kautta – eksponentiaalinen skaala sisäänrakennettuna.",
  },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-zinc-400">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

export default function SectionVisionMission() {
  return (
    <section id="vision" className="relative mx-auto max-w-7xl px-4 py-20 text-white">
      <BorderBeam className="pointer-events-none" />

      {/* Header */}
      <div className="mb-10 flex flex-col items-start gap-3">
        <Kicker>Spektri Labs · Manifesti</Kicker>
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Demokratisoitu tekoäly – <span className="text-zinc-300">luovaa ja sosiaalista</span>
        </h2>
        <p className="max-w-3xl text-zinc-300">
          Rakennamme maailmaa, jossa tekoäly on demokraattista, luovaa ja sosiaalista – voimistaen jokaista ihmistä muuttamaan ideat toimiviksi sovelluksiksi ilman koodaustaitoja.
        </p>
      </div>

      {/* Two cards: Vision & Mission */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-black/60 to-zinc-900/60 p-6">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <Target className="h-4 w-4" /> Visio
          </div>
          <h3 className="text-xl font-semibold">Demokraattinen, luova ja sosiaalinen tekoäly</h3>
          <p className="mt-2 text-zinc-300">
            Voimistaen jokaista muuttamaan ideat sovelluksiksi – ilman koodia.
          </p>
          <BorderBeam className="pointer-events-none" />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-black/60 to-zinc-900/60 p-6">
          <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
            <BadgeCheck className="h-4 w-4" /> Missio
          </div>
          <h3 className="text-xl font-semibold">Modulaarinen ekosysteemi luojataloudelle</h3>
          <p className="mt-2 text-zinc-300">
            Teemme agenttien löytämisestä, remixaamisesta ja jakamisesta vaivatonta – arvo palautuu tekijöille.
          </p>
          <BorderBeam className="pointer-events-none" />
        </div>
      </div>

      {/* Why Spektri */}
      <div className="mt-12">
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
          <Rocket className="h-4 w-4" /> Miksi Spektri?
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Icon className="h-4 w-4 text-zinc-400" /> {title}
              </div>
              <p className="text-sm text-zinc-300">{desc}</p>
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <figure className="mt-12 rounded-2xl border border-zinc-800 bg-black/40 p-6">
        <blockquote className="text-lg font-medium text-zinc-200">
          "Rakennamme seuraavaa sukupolvea muovaavaa alustaa – ei koodilla, vaan kollektiivisella älyllä."
        </blockquote>
        <figcaption className="mt-2 text-sm text-zinc-400">Spektri Labs</figcaption>
      </figure>

      {/* CTA Row */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#one-platform" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100">
          Tutustu alustan ytimeen <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#integrations-3" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
          Näe integraatiot
        </a>
      </div>
    </section>
  );
}
