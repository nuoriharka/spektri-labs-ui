export default function Content2() {
  return (
    <section className="border-y border-white/10 bg-white/[0.01] py-20">
      <div className="container mx-auto grid items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/60">KAIKEN KESKIPISTE</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">Spektri on sinun digitaalinen työvoimasi</h2>
          <p className="mb-4 text-white/80">
            Älä vaihtele työkalusta toiseen. Spektri keskittää tavoitteesi, agentit, integraatiot ja
            tulokset yhteen paikkaan. Sinä kerrot mitä, Spektri päättää miten.
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Yksi kirjautuminen, yksi lasku, rajattomasti mahdollisuuksia</li>
            <li>• Ihmisen hyväksynnät kriittisiin toimenpiteisiin</li>
            <li>• Täydet audit-lokit ja kustannusnäkyvyys</li>
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <img src="/photos/dashboard-agents.png" alt="Agenttifarmit ja Mission Control" className="w-full h-72 md:h-96 object-contain rounded-xl shadow-xl transition-transform duration-500 hover:scale-105" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
