import Image from "next/image";
import Container from "@/components/layout/Container";

export function Pillars(){
  const items = [
    { t:"Keskustelu on UI", d:"Kerro luonnollisella kielellä – agentti suunnittelee ja tekee." },
    { t:"Nolla kitkaa", d:"Aloita malleilla. Ensimmäinen onnistuminen alle 60 sekunnissa." },
    { t:"Taikuutta yksityiskohdissa", d:"Hienovaraiset animaatiot ja tuotantotason läpinäkyvyys." },
  ];
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((x)=>(
            <div key={x.t} className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <div className="text-lg font-semibold text-white">{x.t}</div>
              <p className="mt-2 text-white/80">{x.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TrustBar(){
  const items=["Google","Microsoft","Slack","Notion","HubSpot"];
  return (
    <section className="border-t border-white/10 bg-black/20">
      <Container>
        <div className="py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((n)=>(<div key={n} className="text-sm text-white/60">{n}</div>))}
        </div>
      </Container>
    </section>
  );
}

function FeatureRow({reverse,title,desc,src,alt}:{reverse?:boolean;title:string;desc:string;src:string;alt:string;}){
  return (
    <div className={`grid items-center gap-6 md:grid-cols-2 ${reverse?"md:[&>div:first-child]:order-last":""}`}>
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-white/80">{desc}</p>
      </div>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover"/>
      </div>
    </div>
  );
}

export function Features(){
  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Rakenna, aja, skaalaa</h2>
          <p className="mt-3 text-white/80">Keskustelu on käyttöliittymä. Kaikki muu on nopeaa ja läpinäkyvää.</p>
        </div>
        <div className="mt-10 space-y-12">
          <FeatureRow title="Agent builder – split-näkymä" desc="Chat vasemmalla, visualisointi oikealla." src="/images/sections/features-1-builder.webp" alt="Agent builder – split-näkymä"/>
          <FeatureRow reverse title="Mallikirjasto – aloita 60 sekunnissa" desc="Valitse malli ja aja yhdellä klikkauksella." src="/images/sections/features-2-templates.webp" alt="Mallikirjasto – korttipino"/>
          <FeatureRow title="Integraatiot ilman kitkaa" desc="OAuth Googleen, Microsoftiin, CRM:iin ja verkkokauppoihin." src="/images/sections/features-3-integrations.webp" alt="Integraatiot – ikonipilvi"/>
          <FeatureRow reverse title="Suorituskyky & kustannukset" desc="Onnistumisprosentti, kustannus/ajo ja säästetty aika." src="/images/sections/features-4-performance.webp" alt="Suorituskyky & kustannukset – abstrakti graafi"/>
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks(){
  const steps=[
    { n:1,t:"Valitse malli", d:"Aloita pohjasta tai kerro tavoitteesi." },
    { n:2,t:"Yhdistä työkalut", d:"OAuth-integraatiot yhdellä klikkauksella." },
    { n:3,t:"Aja ja ajasta", d:"Katso tulokset ja ajasta toistuvaksi." },
  ];
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s)=>(
            <div key={s.n} className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <div className="text-[var(--brand)] text-sm font-semibold">Vaihe {s.n}</div>
              <div className="mt-2 text-lg font-semibold text-white">{s.t}</div>
              <p className="mt-1 text-white/80">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-10 aspect-[7/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <Image src="/images/sections/how-it-works.webp" alt="Kolme vaihetta – lasisolmut ja valosäteet" fill sizes="100vw" className="object-cover"/>
        </div>
      </Container>
    </section>
  );
}

export function FinalCTA(){
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[var(--brand)]/20 to-[var(--brand2)]/20 p-10 text-center">
          <h3 className="text-3xl font-semibold text-white">Aloita automaatiomatkasi 60 sekunnissa</h3>
          <p className="mt-3 text-white/80">Ilmainen Basic-tili: rakenna ensimmäiset agenttisi heti.</p>
          <a href="/app" className="inline-flex items-center rounded-2xl px-6 py-3 bg-[var(--brand)] hover:brightness-110 text-white font-medium transition mt-6">Aloita ilmaiseksi</a>
        </div>
      </Container>
    </section>
  );
}
