
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Gauge, Network, AppWindow, Check, Menu, X } from 'lucide-react';
import { Balancer } from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import LogoCloud from "@/components/logo-cloud";
import OnePlatformSection, { ConnectToolsSection } from "@/components/OnePlatformSection";

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

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Ominaisuudet', href: '#ominaisuudet' },
    { name: 'Ratkaisut', href: '#ratkaisut' },
    { name: 'Hinnoittelu', href: '#hinnoittelu' },
    { name: 'Meistä', href: '#' },
  ]

  return (
    <header>
      <nav data-state={menuState ? 'active' : 'inactive'} className="fixed z-50 w-full px-2">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-5xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home page">
                <Logo />
              </Link>
              <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className={cn("m-auto size-6 duration-200", menuState && 'rotate-180 scale-0 opacity-0')} />
                <X className={cn("absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200", menuState && 'rotate-0 scale-100 opacity-100')} />
              </button>
            </div>
            <div className={cn("absolute inset-0 m-auto hidden size-fit lg:block", isScrolled ? 'block' : 'hidden')}>
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-zinc-950/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none", menuState ? 'block' : 'hidden')}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <a href="#" className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2", "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground", isScrolled && 'lg:hidden')}>
                  Kirjaudu sisään
                </a>
                <a href="#" className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2", "bg-primary text-primary-foreground hover:bg-primary/90", isScrolled && 'lg:hidden')}>
                  Aloita ilmaiseksi
                </a>
                <a href="#" className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2", "bg-primary text-primary-foreground hover:bg-primary/90", isScrolled ? 'lg:inline-flex' : 'hidden')}>
                  Aloita Nyt
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const HeroSection = () => (
  <section>
    <div className="relative pt-24 md:pt-36">
      <div aria-hidden className="absolute inset-0 -z-20 isolate hidden opacity-65 contain-strict lg:block">
        <div className="w-[87.5rem] h-[200rem] -translate-y-[54.6875rem] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[200rem] absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] -translate-y-1/2" />
        <div className="h-[200rem] -translate-y-[54.6875rem] absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#030712_75%)]"></div>
      <div className="mx-auto max-w-7xl px-6">
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
          <h1 className="mt-8 text-balance text-5xl font-bold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
            <Balancer>Anna tavoite. Agentit hoitavat työn.</Balancer>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
            Muunna ideat ja prosessit tuotantovalmiiksi automaatioksi luonnollisella kielellä. Aja ensimmäinen työnkulku alle 60 sekunnissa.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row">
            <div className="bg-foreground/10 rounded-[calc(0.75rem+0.125rem)] border p-0.5">
              <a href="#" className="inline-flex items-center justify-center rounded-xl px-5 text-base h-12 font-medium btn-spektri focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Rakenna ensimmäinen agenttisi
              </a>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-xl px-5 h-[3.25rem] text-base font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Katso 60s demo
            </a>
          </div>
        </div>
      </div>
      <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
        <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] ring-background dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
          <Image
            className="bg-background aspect-[15/8] relative rounded-2xl"
            src="/photos/dashboard, käytä tätä.png"
            alt="App screen"
            width={2700}
            height={1440}
            priority
          />
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

const CtaSection = () => (
  <section className="bg-background">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Valmiina mullistamaan työnteon?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Aloita automaatiomatkasi tänään...</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">Aloita ilmaiseksi</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Ota yhteyttä <span aria-hidden>→</span></a>
        </div>
        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <circle cx={512} cy={512} r={512} fill="url(#cta-gradient-2)" fillOpacity="0.7" />
          <defs><radialGradient id="cta-gradient-2"><stop stopColor="#7775D6" /><stop offset={1} stopColor="#22D3EE" /></radialGradient></defs>
        </svg>
      </div>
    </div>
  </section>
)

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'Agenttifarmit', href: '#' },
      { name: 'Meta-Orkestrointi', href: '#' },
      { name: 'Ideasta Sovellukseksi', href: '#' },
    ],
    support: [
      { name: 'Hinnoittelu', href: '#hinnoittelu' },
      { name: 'Dokumentaatio', href: '#' },
      { name: 'Oppaat', href: '#' },
    ],
    company: [
      { name: 'Meistä', href: '#' },
      { name: 'Ura', href: '#' },
    ],
    legal: [
      { name: 'Tietosuoja', href: '#' },
      { name: 'Palveluehdot', href: '#' },
    ],
  }
  return (
    <footer className="bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm leading-6 text-muted-foreground">Demokratisoidaan tekoäly. Vapautetaan potentiaali.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Ratkaisut</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (<li key={item.name}><a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">{item.name}</a></li>))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Tuki</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (<li key={item.name}><a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">{item.name}</a></li>))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Yritys</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (<li key={item.name}><a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">{item.name}</a></li>))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Lakitiedot</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (<li key={item.name}><a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">{item.name}</a></li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-foreground/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">&copy; 2025 Spektri.Labs Oy. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <HeroSection />
        <LogoCloud />
  <OnePlatformSection />
        <FeaturesSection />
  <ConnectToolsSection />
        <ContentSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

