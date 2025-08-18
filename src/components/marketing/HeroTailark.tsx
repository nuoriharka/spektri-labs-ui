import Image from "next/image";
import Link from "next/link";

export default function HeroTailark() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(109,106,255,.25)_0%,rgba(34,211,238,0)_60%)]" />
      <div className="container mx-auto grid gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
            Agentit · Orkestrointi · No-code
          </p>
          <h1 className="mb-4 text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-tight tracking-[-0.02em]">
            Sinulla on idea. <span className="text-white/90">Me annamme sille armeijan.</span>
          </h1>
          <p className="mb-8 max-w-xl text-base text-white/80">
            Muuta tavoitteesi tuloksiksi keskustelemalla. Ensimmäinen digitaalinen työntekijäsi
            on valmiina alle 60 sekunnissa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-xl bg-[var(--brand,#6D6AFF)] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:brightness-110"
            >
              Aloita ilmaiseksi
            </Link>
            <Link
              href="/demo"
              className="rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              Katso 60 sekunnin demo
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/60">Ei luottokorttia, ei sitoumuksia.</p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <img
              src="/photos/dashboard1.png"
              alt="Spektri.Labs dashboard"
              className="w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
