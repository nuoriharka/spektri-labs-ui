// server component: static content, no client-only APIs

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, PanelLeft, Bot, Users, type LucideIcon } from "lucide-react";
import BorderBeam from "@/components/magicui/BorderBeam";
import komentokeskus from "../../public/photos/komentokeskus.png";
import metaAgentti from "../../public/photos/meta-agentti.png";
import agenttifarmit from "../../public/photos/agenttifarmit.png";

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
    img: komentokeskus as StaticImageData,
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
    img: metaAgentti as StaticImageData,
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
    img: agenttifarmit as StaticImageData,
    href: "/#agenttifarmit",
    icon: Users,
    chips: ["Autoscale", "Sandbox", "Budjettikatot"],
  },
] as const;

type Feature = {
  kicker: string;
  title: string;
  desc: string;
  img: StaticImageData;
  href: string;
  icon: LucideIcon;
  chips: readonly string[];
};

function FeatureRow({
  kicker,
  title,
  desc,
  img,
  href,
  icon: Icon,
  chips,
  reverse,
}: Feature & { reverse?: boolean }) {
  const isMeta = kicker.toLowerCase().includes('meta');
  return (
    <div
      className={`grid items-center gap-8 md:gap-10 lg:gap-12 ${
        reverse ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"
      }`}
    >
      {/* Copy */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-balance">{title}</h3>
        <p className="mt-3 max-w-prose text-zinc-300">{desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="chip text-zinc-300">
              {c}
            </span>
          ))}
        </div>

        <Link prefetch={false} href={href} className="mt-6 btn-primary micro-cta focus-ring">
          Tutustu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Visual */}
      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl hy-img hy-overlay shadow-none">
          <Image
            src={img}
            alt={kicker}
            fill
            placeholder="blur"
            className={`object-cover ${isMeta ? 'object-top' : ''} transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none`}
            quality={90}
            priority={kicker === 'Komentokeskus'}
            sizes="(min-width:1024px) 50vw, 100vw"
          />
          {/* overlay is provided by .hy-overlay */}
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
    <section id="features-2" className="relative mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6 py-20 md:py-24 text-white scroll-mt-24 section-halo">
      {/* Header */}
      <div className="mb-10 md:mb-12 flex flex-col items-start gap-2">
        <span className="text-xs uppercase tracking-wider text-zinc-400">Section 2 · Features</span>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          Yksi Alusta, <span className="text-zinc-300">Rajaton Potentiaali</span>
        </h2>
        <p className="max-w-2xl text-zinc-300 leading-7 md:leading-8">
          Kolme keihäänkärkeä, jotka tekevät Spektristä tappavan nopean: keskitetty ohjaus, itseään parantava meta‑agentti ja rajattomasti skaalautuvat agenttifarmit.
        </p>
      </div>

      <div className="space-y-14 md:space-y-16">
        {FEATURES.map((f, idx) => {
          const { key: featureKey, ...rest } = f;
          return (
            <FeatureRow key={featureKey ?? idx} {...(rest as Feature)} reverse={idx === 1} />
          );
        })}
      </div>
    </section>
  );
}
