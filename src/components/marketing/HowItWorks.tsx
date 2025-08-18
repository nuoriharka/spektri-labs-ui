import Container from "@/components/layout/Container";
import PrimaryCta from "@/components/ui/PrimaryCta";
import Image from "next/image";
import { photos } from "@/content/photos";
import { BLUR_DATA_URL } from "@/lib/blur";

export default function HowItWorks(){
  const steps = [
    { n:1, t:"Valitse malli", d:"Aloita pohjasta tai kerro tavoitteesi.", cta:"Selaa malleja", href:"/templates" },
    { n:2, t:"Yhdistä", d:"OAuth-integraatiot yhdellä klikkauksella.", cta:"Yhdistä palvelut", href:"/integrations" },
    { n:3, t:"Aja & Ajasta", d:"Katso tulokset ja ajasta toistuvaksi.", cta:"Aja demo", href:"#" },
  ];
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <div className="text-sm text-white/60">Vaihe {s.n}</div>
              <h3 className="mt-1 text-lg font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-white/70">{s.d}</p>
              <div className="mt-4"><PrimaryCta href={s.href} variant="ghost">{s.cta}</PrimaryCta></div>
            </div>
          ))}
        </div>
        <div className="relative mt-10 aspect-[7/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <Image src={photos.how.overall.src} alt={photos.how.overall.alt} fill sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={BLUR_DATA_URL}/>
        </div>
      </Container>
    </section>
  );
}
