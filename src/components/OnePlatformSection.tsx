"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Link2, Workflow, Cpu } from "lucide-react";
import BorderBeam from "@/components/magicui/BorderBeam";

// Tile card used in the asymmetric mosaic
function Tile({
  title,
  subtitle,
  href,
  img,
  className,
}: {
  title: string;
  subtitle?: string;
  href: string;
  img: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 ${
        className || ""
      }`}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <BorderBeam className="pointer-events-none" />
      <div className="absolute bottom-4 left-4 z-10">
        <div className="text-lg font-semibold text-white drop-shadow">{title}</div>
        {subtitle && <div className="text-sm text-zinc-300">{subtitle}</div>}
      </div>
      <div className="absolute bottom-4 right-4 z-10 hidden items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black transition group-hover:flex">
        Tutustu <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

export default function OnePlatformSection() {
  return (
    <section id="one-platform" className="relative mx-auto max-w-7xl px-4 py-16 text-white">
      {/* Headline */}
      <div className="mb-10 flex flex-col items-start gap-2">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
          Yksi Alusta. <span className="text-zinc-300">Rajaton Potentiaali.</span>
        </h2>
        <p className="text-zinc-300">Kaikki mitä tarvitset, ilman monimutkaisuutta.</p>
      </div>

      {/* DISTINCT LAYOUT: Asymmetrical mosaic */}
      <div className="grid grid-cols-12 gap-6">
        {/* HERO (tall) */}
        <Tile
          title="Meta-Orkestroija"
          subtitle="Autopilot for your agents"
          href="/#metaorkestroija"
          img="/photos/ai-agent.jpg"
          className="col-span-12 h-[360px] sm:h-[420px] lg:col-span-7 lg:h-[520px]"
        />

        {/* RIGHT COLUMN STACK */}
        <Tile
          title="Agenttifarmit"
          subtitle="Scale AI crews on demand"
          href="/#agenttifarmit"
          img="/photos/agent-swarm.jpg"
          className="col-span-12 h-[200px] sm:col-span-6 lg:col-span-5"
        />
        <Tile
          title="Mission Control"
          subtitle="Operoi ekosysteemiä yhdestä näkymästä"
          href="/#mission-control"
          img="/photos/dashboard-3.png"
          className="col-span-12 h-[200px] sm:col-span-6 lg:col-span-5"
        />

        {/* FULL-WIDTH FEATURE */}
        <Tile
          title="Idea → MVP"
          subtitle="Ideasta sovellukseksi tunneissa"
          href="/#idea-to-mvp"
          img="/photos/templates.png"
          className="col-span-12 h-[220px]"
        />

        {/* SMALL SIDE FEATURE */}
        <Tile
          title="Role Agents"
          subtitle="Specialist roles that ship work"
          href="/#role-agents"
          img="/photos/dashboard-agents.png"
          className="col-span-12 h-[200px] sm:col-span-6 lg:col-span-4"
        />

        {/* Stats/Chips to add variety */}
        <div className="col-span-12 grid place-items-center rounded-2xl border border-zinc-800 bg-gradient-to-br from-black/60 to-zinc-900/60 p-6 sm:col-span-6 lg:col-span-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
            {[
              "24/7 Agents",
              "No Meetings",
              "Secure by Default",
              "Fast Deploys",
              "Vector Memory",
              "LLM‑Agnostic",
              "Observability",
              "Human-in-the-Loop",
            ].map((chip) => (
              <span key={chip} className="rounded-full border border-zinc-700/70 bg-black/40 px-3 py-1">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConnectToolsSection() {
  const tabs = [
    { key: "integrations", label: "Integrations", icon: Plug, img: "/photos/integrations.png" },
    { key: "connections", label: "Connections", icon: Link2, img: "/photos/how-step-2-connect-oauth.webp" },
    { key: "nocode", label: "No‑Code", icon: Workflow, img: "/photos/how-it-works.png" },
    { key: "ai", label: "AI Software", icon: Cpu, img: "/photos/builder-hero.png" },
  ] as const;
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("integrations");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="connect-tools" className="relative mx-auto max-w-7xl px-4 py-20 text-white">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* LEFT: PIPELINE COPY (distinct design) */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Yhdistä kaikki työkalusi. <span className="text-zinc-300">Vapauta data.</span>
          </h2>
          <p className="mt-3 max-w-xl text-zinc-300">
            Spektri kytkee integraatiot, datavirrat ja agentit yhdeksi arkkitehtuuriksi. Rakennat ilman kitkaa – koodilla tai ilman.
          </p>

          {/* Pipeline */}
          <ol className="mt-6 space-y-5">
            {tabs.map((t, i) => (
              <li key={t.key} className="relative flex items-start gap-3">
                <t.icon className="mt-0.5 h-5 w-5 text-zinc-400" />
                <div>
                  <div className="text-sm font-medium">{t.label}</div>
                  <div className="text-sm text-zinc-400">
                    {i === 0 && "Plug & play liittimet (Zapier, n8n, Webhooks, GraphQL/REST)."}
                    {i === 1 && "Reititä, rikasta ja synkkaa data turvallisesti (OAuth, RBAC)."}
                    {i === 2 && "Visuaalinen editori: laukaise, muunna ja orkestroi ilman koodia."}
                    {i === 3 && "Julkaise agentit ja mikropalvelut yhdellä klikkauksella."}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Tab buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Button
                key={t.key}
                size="sm"
                onClick={() => setActive(t.key)}
                className={`rounded-full ${
                  active === t.key ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <t.icon className="mr-2 h-4 w-4" /> {t.label}
              </Button>
            ))}
          </div>
        </div>

        {/* RIGHT: BIG PREVIEW PANEL */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800 bg-black/40">
            <Image
              key={activeTab.img}
              src={activeTab.img}
              alt={activeTab.label}
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
              {activeTab.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
            <BorderBeam className="pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
