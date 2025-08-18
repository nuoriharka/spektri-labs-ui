import VideoLoop from "./VideoLoop";
import { ShimmerCTA } from "./ShimmerCTA";

export default function Hero(){
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Sinulla on idea. <br/>Me annamme sille armeijan.
        </h1>
        <p className="mt-4 text-white/70">
          Muuta tavoitteesi tuloksiksi keskustelemalla. Ensimmäinen digitaalinen työntekijäsi on valmiina alle 60 sekunnissa.
        </p>
        <div className="mt-8 flex gap-3">
          <ShimmerCTA> Aloita ilmaiseksi </ShimmerCTA>
          <a href="#demo" className="px-5 py-2 rounded-xl border border-white/15">Katso 60 sekunnin demo</a>
        </div>
        <p className="mt-3 text-xs text-white/50">Ei luottokorttia, ei sitoumuksia.</p>
      </div>
      <VideoLoop src="/videos/hero-video.mp4" label="Keskustelusta luomukseksi" />
    </section>
  );
}
