
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight, Bot, Gauge, Network, AppWindow, Check, Menu, X } from 'lucide-react';
import { Balancer } from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import LogoCloud from "@/components/logo-cloud";
// Removed extra marketing blends; keep landing lean
import FeaturesSection2 from "@/components/FeaturesSection2";
import SectionVisionMission from "@/components/SectionVisionMission";
import SectionCTA from "@/components/SectionCTA";
// Below-the-fold heavy sections via dynamic import (keeps SSR, splits bundle)
const Section3Integrations = dynamic(() => import("@/components/Section3Integrations"), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-5 md:max-w-7xl md:px-6 py-20 md:py-24"><div className="h-56 w-full animate-pulse rounded-3xl bg-white/5"/></div> });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true, loading: () => <div className="h-48" /> });
// Static import hero image for LCP with blur
import heroDashboard from "../../public/photos/hero-dashboard.png";
// Static import for hero image (LCP) with blur placeholder

// Logo component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spektri logomark">
      <defs>
        <linearGradient id="logo-gradient-live" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D6AFF"/>
          <stop offset="100%" stopColor="#22D3EE"/>
        </linearGradient>
      </defs>
      <path d="M 44 10 C 34 2, 16 2, 16 12 C 16 20, 28 20, 28 28 C 28 36, 16 36, 16 44 C 16 54, 34 54, 44 46" fill="none" stroke="url(#logo-gradient-live)" strokeWidth="6" strokeLinecap="round"/>
    </svg>
    <span className="font-bold text-lg text-gray-900 dark:text-white">Spektri.Labs</span>
  </div>
);

// Header + hero
const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [currentHash, setCurrentHash] = React.useState<string>(typeof window !== 'undefined' ? window.location.hash : '')
  const mobileNavRef = React.useRef<HTMLDivElement | null>(null)
  const lastFocusedRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    const handleHash = () => setCurrentHash(window.location.hash)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHash)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])

  // Focus trap + ESC close for mobile menu
  React.useEffect(() => {
    if (!menuState) return
    lastFocusedRef.current = (document.activeElement as HTMLElement) ?? null
    const container = mobileNavRef.current
    const focusables = container?.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables?.[0]
    const last = focusables && focusables.length > 0 ? focusables[focusables.length - 1] : undefined
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenuState(false)
        return
      }
      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); (last as HTMLElement)?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); (first as HTMLElement)?.focus();
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [menuState])

  const menuItems = [
    { name: 'Ominaisuudet', href: '#ominaisuudet' },
    { name: 'Ratkaisut', href: '#ratkaisut' },
    { name: 'Hinnoittelu', href: '#hinnoittelu' },
    { name: 'Meistä', href: '#' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav role="navigation" aria-label="Päänavigaatio" data-state={menuState ? 'active' : 'inactive'} className="w-full">
        {/* Lock header height to avoid CLS */}
  <div className="relative h-16 flex items-center px-4">
          {/* Soft background so hero doesn't flash; no layout shift */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/70 to-transparent supports-[backdrop-filter]:bg-background/40 supports-[backdrop-filter]:backdrop-blur-md" />
          <div className={cn('mx-auto w-full max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-5xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between md:w-auto">
                <Link href="/" aria-label="Etusivu">
                  <Logo />
                </Link>
                {/* Mobile menu toggle */}
                <button onClick={() => setMenuState((v) => !v)} aria-expanded={menuState} aria-controls="mobile-nav" aria-label={menuState ? 'Sulje valikko' : 'Avaa valikko'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 md:hidden">
                  <Menu className={cn('m-auto size-6 duration-200', menuState && 'rotate-180 scale-0 opacity-0')} />
                  <X className={cn('absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200', menuState && 'rotate-0 scale-100 opacity-100')} />
                </button>
              </div>

              {/* Desktop nav: md+ only */}
              <div className="absolute inset-0 m-auto hidden size-fit md:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} aria-current={currentHash === item.href ? 'page' : undefined} className="block duration-150 text-muted-foreground hover:text-accent-foreground">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile nav: <md only */}
              <div
                id="mobile-nav"
                ref={mobileNavRef}
                role="dialog"
                aria-modal="true"
                aria-label="Valikko"
                className={cn('mb-6 w-full space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-zinc-950/20 md:hidden', menuState ? 'block bg-background' : 'hidden')}
              >
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} aria-current={currentHash === item.href ? 'page' : undefined} className="block duration-150 text-muted-foreground hover:text-accent-foreground">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <a href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                    Kirjaudu sisään
                  </a>
                  <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Aloita ilmaiseksi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const HeroSection = () => (
  <section className="type-modular baseline scroll-mt-24">
    <div className="relative pt-24 md:pt-36">
      <div aria-hidden className="absolute inset-0 -z-20 isolate hidden opacity-65 contain-strict lg:block">
        <div className="w-[87.5rem] h-[200rem] -translate-y-[54.6875rem] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[200rem] absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] -translate-y-1/2" />
        <div className="h-[200rem] -translate-y-[54.6875rem] absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(120%_120%_at_50%_100%,transparent_0%,#0b0c0e_75%)]"></div>
  <div className="mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
          <Link href="#" className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
            <span className="text-foreground text-sm">Yksi Alusta. Rajaton Potentiaali.</span>
            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
              <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
              </div>
            </div>
          </Link>
          <h1 className="mt-10 text-balance text-[2.5rem] leading-tight font-bold md:text-7xl md:leading-[1.05] lg:mt-16 xl:text-[5rem]">
            <Balancer>Anna tavoite. Agentit hoitavat työn.</Balancer>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-7 text-muted-foreground md:leading-8">
            Muunna ideat ja prosessit tuotantovalmiiksi automaatioksi luonnollisella kielellä. Aja ensimmäinen työnkulku alle 60 sekunnissa.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href="#" className="btn-primary focus-ring rounded-full h-12 px-5">
              Rakenna ensimmäinen agenttisi
            </a>
            <a href="#" className="btn-secondary focus-ring rounded-full h-12 px-5">
              Katso 60s demo
            </a>
          </div>
        </div>
      </div>
  <div className="relative mt-8 overflow-hidden px-4 md:px-6 sm:mt-12 md:mt-20">
        <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-zinc-800 bg-black/40 p-3 md:p-4 shadow-none">
          <Image
            className="bg-background aspect-[15/8] relative rounded-2xl"
            src={heroDashboard}
            alt="Spektri dashboardin esikatselu"
            placeholder="blur"
            priority
            sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
            quality={90}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </section>
)


const FeaturesSection = () => {
  const features = [
    { icon: Network, title: "Agenttifarmit™", description: "Rakenna erikoistuneiden agenttien tiimejä, jotka tekevät yhteistyötä monimutkaisissa prosesseissa." },
    { icon: Bot, title: "Meta-Orkestrointi", description: "Spektri valitsee ja yhdistää automaattisesti parhaat tekoälymallit ja työkalut jokaiseen tehtävään." },
    { icon: AppWindow, title: "Ideasta Sovellukseksi™", description: "Muunna ideasi toimivaksi sovellukseksi keskustelemalla – agentit hoitavat suunnittelun ja koodauksen." },
    { icon: Gauge, title: "Mission Control", description: "Hallitse kaikkea yhdestä näkymästä ja seuraa tuloksia reaaliajassa. Sinä olet aina ohjaksissa." },
  ];
  return (
    <section id="ominaisuudet" className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Yksi Alusta. Rajaton Potentiaali.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Kaikki mitä tarvitset, ilman monimutkaisuutta</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Spektri.Labs ei ole vain työkalu, se on käyttöjärjestelmä luovuudelle. Poistamme tekniset esteet, jotta voit keskittyä olennaiseen.</p>
        </div>
  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w_none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// IntegrationsSection replaced by ConnectToolsSection from OnePlatformSection

const ContentSection = () => (
  <section className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-4">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
            <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
              <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6d6aff] to-[#22d3ee] opacity-40" />
            </div>
            <figure className="relative isolate">
              <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                <p>“Spektri.Labs on muuttanut tapamme ajatella automaatiota...”</p>
              </blockquote>
              <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                <strong className="font-semibold text-white">Liisa Virtanen</strong>, Toimitusjohtaja, Kasvu Oy
              </figcaption>
            </figure>
          </div>
        </div>
        <div>
          <div className="text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Miksi me voitamme</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Emme rakenna nopeampaa hevosta. Rakennamme auton.</h2>
            <div className="max-w-xl">
              <p className="mt-6">Nykyiset automaatiotyökalut ovat tehokkaita, mutta...</p>
              <ul className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                {["Moni-LLM Orkestrointi.", "Tilallinen Muisti.", "Arvopohjainen Hinnoittelu."].map((title) => (
                  <li className="flex gap-x-3" key={title}>
                    <Check className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">{title}</strong> ...
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Removed inline CTA and Footer; using shared components instead.

export default function LandingPage() {
  return (
    <>
      <HeroHeader />
      {/* Avoid nested <main>; layout already provides <main id="main"> */}
      <div>
        <HeroSection />
        <LogoCloud />
        <SectionVisionMission />
        <FeaturesSection2 />
        <Section3Integrations />
        <SectionCTA />
      </div>
      <Footer />
    </>
  );
}

