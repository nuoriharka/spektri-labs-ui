/* Autogeneraattori voi korvata tämän myöhemmin; nyt staattiset importit. */
import heroDashboard from "photos/klassinen-spektri-hero.png";
import heroBuilder   from "photos/builder-hero.png";
import heroIconcloud from "photos/iconcloud-hero.png";
import ctaHero       from "photos/cta-hero.png";

import dashboard3    from "photos/dashboard-3.png";
import dashboard1    from "photos/dashboard-1.png";
import agentsDash    from "photos/dashboard-agents.png";

import builderSplit  from "photos/builder-split.png";
import howWorks      from "photos/how-it-works.png";

import costPerf      from "photos/cost-performance.png";
import integrations  from "photos/integrations.png";
import templates     from "photos/templates.png";

import ogHome        from "photos/dark-og-image.png";

export const photos = {
  hero: {
    dashboard: { src: heroDashboard, alt: "Spektri.Labs kojelauta tummalla taustalla" },
    builder:   { src: heroBuilder,   alt: "Rakentajan split-näkymä: chat ja työnkulku" },
    iconcloud: { src: heroIconcloud, alt: "Integraatioiden ikonipilvi" },
    cta:       { src: ctaHero,       alt: "Kutsu toimintaan – aloita minuutissa" },
  },
  showcase: {
    dashboard3: { src: dashboard3, alt: "Kojelaudan KPI-näkymä" },
    dashboard1: { src: dashboard1, alt: "Yleiskuva kojelaudasta" },
    agents:     { src: agentsDash, alt: "Agenttilista ja tilat" },
  },
  how: {
    split:   { src: builderSplit, alt: "Rakentajan split-näkymä" },
    overall: { src: howWorks,     alt: "Miten se toimii: valitse, yhdistä, aja" },
  },
  features: {
    cost:   { src: costPerf,    alt: "Kustannus ja suorituskyky" },
    integ:  { src: integrations,alt: "Integraatioiden ruudukko" },
    temps:  { src: templates,   alt: "Mallikirjasto" },
  },
  og: {
    home: { src: ogHome, alt: "Spektri.Labs – OG-kuva" },
  },
} as const;
export type PhotoKey = typeof photos;
