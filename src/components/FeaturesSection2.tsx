"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PanelLeft, Bot, Users } from "lucide-react";
import BorderBeam from "@/components/magicui/BorderBeam";

/**
 * SECTION 2 — FEATURES (Tailark-inspired)  
 * Headline: "Yksi Alusta, Rajaton Potentiaali"
 * Items: Komentokeskus, Meta‑Agentti, Agenttifarmit
 *
 * Assets required under /public:
 *  - /photos/komentokeskus.png  (Komentokeskus)
 *  - /photos/meta-agentti.png (Meta‑Agentti)
 *  - /photos/agenttifarmit.png       (Agenttifarmit)
 */

const FEATURES = [
  {
    key: "command",
    kicker: "Komentokeskus",
    title: "Operoi koko ekosysteemiä yhdestä näkymästä",
    desc:
      "Valvo agentteja, työnkulkuja ja integraatioita keskitetystä ohjaamosta. Live‑telemetria, hälytykset ja ihmisen hyväksyntä yhdellä klikkauksella.",
    img: "/photos/komentokeskus.png",
    href: "/#mission-control",
    icon: PanelLeft,
    chips: ["Realtime", "Audit Trail", "Roolit & oikeudet"],
  },
  {
    key: "meta",
    kicker: "Meta‑Agentti",
    title: "Orkestroi agenttitiimit automaattisesti",
    desc:
      "Meta‑agentti laatii suunnitelman, jakaa tehtävät erikoisagenteille ja optimoi suorituksen jatkuvasti. Tuloksena vähemmän kitkaa, enemmän toimitusta.",
    img: "/photos/meta-agentti.png",
    href: "/#metaorkestroija",
    icon: Bot,
    chips: ["Planner", "Critic", "Self‑Improve"],
  },
  {
    key: "farm",
    kicker: "Agenttifarmit",
    title: "Skaalaa suorituskykyä vailla ylärajaa",
    desc:
      "Käynnistä kymmeniä tai satoja agenteja hetkessä. Eristetyt sandboxit, välimuistit ja kustannusrajat tekevät skaalaamisesta hallittua.",
    img: "/photos/agenttifarmit.png",
    href: "/#agenttifarmit",
    icon: Users,
    chips: ["Autoscale", "Sandbox", "Budjettikatot"],
  },
] as const;

function FeatureRow({
  kicker,
  title,
  desc,
  img,
  href,
  icon: Icon,
  chips,
  reverse,
}: (typeof FEATURES)[number] & { reverse?: boolean }) {
  return (
    <div
      className={`grid items-center gap-8 md:gap-10 lg:gap-12 ${
        reverse ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"
      }`}
    >
      {/* Copy */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400">
          <Icon className="h-4 w-4" /> {kicker}
        </div>
        <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">{title}</h3>
        <p className="mt-3 max-w-prose text-zinc-300">{desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-zinc-700/60 bg-black/40 px-3 py-1 text-xs text-zinc-300"
            >
              {c}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100"
        >
          Tutustu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Visual */}
      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800 bg-black/40">
          <Image src={img} alt={kicker} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <BorderBeam className="pointer-events-none" />
          <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
            {kicker}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection2() {
  return (
    <section id="features-2" className="relative mx-auto max-w-7xl px-4 py-20 text-white">
      {/* Header */}
      <div className="mb-12 flex flex-col items-start gap-2">
        <span className="text-xs uppercase tracking-wider text-zinc-400">Section 2 · Features</span>
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Yksi Alusta, <span className="text-zinc-300">Rajaton Potentiaali</span>
        </h2>
        <p className="max-w-2xl text-zinc-300">
          Kolme keihäänkärkeä, jotka tekevät Spektristä tappavan nopean: keskitetty ohjaus, itseään parantava meta‑agentti ja rajattomasti skaalautuvat agenttifarmit.
        </p>
      </div>

      <div className="space-y-16">
        <FeatureRow {...FEATURES[0]} />
        <FeatureRow {...FEATURES[1]} reverse />
        <FeatureRow {...FEATURES[2]} />
      </div>
    </section>
  );
}
