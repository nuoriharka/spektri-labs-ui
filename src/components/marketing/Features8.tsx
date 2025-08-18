import { Sparkles, Workflow, Bot, Shield, Rocket, Timer, DollarSign, ListChecks } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Keskustelu on käyttöliittymä", text: "Kerro mitä haluat – agentit tekevät loput. Ei koodausta." },
  { icon: Workflow, title: "Meta-orkestrointi", text: "Valitsee automaattisesti parhaan työkalun ja mallin jokaiseen tehtävään." },
  { icon: Bot, title: "Agenttifarmit™", text: "Rakenna tiimi erikoistuneita agentteja pitkien prosessien hoitamiseen." },
  { icon: Shield, title: "Yritystason turva", text: "SSO/SAML, RBAC, audit-logit ja hyväksyntäportit kriittisiin vaiheisiin." },
  { icon: Rocket, title: "Ideasta sovellukseksi", text: "UI → koodi → julkaisu. Kaikki yhdestä komennosta." },
  { icon: Timer, title: "Aika on rahaa", text: "Näet säästetyn ajan ja kustannuksen jokaisesta ajosta." },
  { icon: DollarSign, title: "Ennustettava hinnoittelu", text: "Yksi alusta, yksi lasku – ei yllätyksiä." },
  { icon: ListChecks, title: "Mission Control™", text: "Yksi näkymä, täydellinen hallinta. Pause/Boost/Reroute." },
];

export default function Features8() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight">Enemmän kuin työkalu — koko digitaalinen työvoimasi</h2>
        <p className="mb-10 max-w-2xl text-white/80">Kun idea syntyy, Spektri rakentaa toteutuksen. Ilman kitkaa.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white/90" />
              </div>
              <h3 className="mb-1 text-base font-medium">{title}</h3>
              <p className="text-sm text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
