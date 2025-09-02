
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Balancer } from "react-wrap-balancer";
import { cn } from "@/lib/utils";
// Split below-the-fold sections to lower First Load JS
const LogoCloud = dynamic(() => import("@/components/logo-cloud"), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6 py-12"><div className="h-10 w-full animate-pulse rounded-lg bg-white/5"/></div> })
const FeaturesSection2 = dynamic(() => import("@/components/FeaturesSection2"), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6 py-20 md:py-24"><div className="h-56 w-full animate-pulse rounded-3xl bg-white/5"/></div> })
const SectionVisionMission = dynamic(() => import("@/components/SectionVisionMission"), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6 py-20 md:py-24"><div className="h-40 w-full animate-pulse rounded-3xl bg-white/5"/></div> })
const SectionCTA = dynamic(() => import("@/components/SectionCTA"), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-4 md:max-w-7xl md:px-6 py-12"><div className="h-20 w-full animate-pulse rounded-2xl bg-white/5"/></div> })
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
  window.addEventListener('scroll', handleScroll, { passive: true })
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
            <Link prefetch={false} href={item.href} aria-current={currentHash === item.href ? 'page' : undefined} className="block duration-150 text-muted-foreground hover:text-accent-foreground">
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
            <Link prefetch={false} href={item.href} aria-current={currentHash === item.href ? 'page' : undefined} className="block duration-150 text-muted-foreground hover:text-accent-foreground">
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
            fetchPriority="high"
            sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
            quality={90}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
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

