import Image from "next/image";
import { getBlur } from "@/lib/images";
import { photos } from "@/content/photos";
import Link from "next/link";
import Container from "@/components/layout/Container";
import win from "@/content/win.fi.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/landing/hero-desktop.webp"
          alt="Spektri.Labs – tumma hero, abstrakti verkko ja brändisäteet"
          fill priority sizes="100vw" placeholder="blur" blurDataURL={getBlur('/images/landing/hero-desktop.webp')}
          className="hidden md:block object-cover"
        />
        <Image
          src="/images/landing/hero-mobile.webp"
          alt="Spektri.Labs – hero mobiilissa, abstrakti verkko"
          fill priority sizes="100vw" placeholder="blur" blurDataURL={getBlur('/images/landing/hero-mobile.webp')}
          className="md:hidden object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" aria-hidden />
      </div>
      <Container>
        <div className="py-28 md:py-36 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 ring-1 ring-white/15">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" aria-hidden />
            <span>{win.nolockin_badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Tehosta liiketoimintaasi tekoälyohjatulla automaatiolla
          </h1>
          <p className="mt-6 text-lg text-white/80">{win.nolockin_line} {win.faster_line}</p>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/dashboard" className="inline-flex items-center rounded-2xl px-5 py-3 bg-[var(--brand)] text-white font-medium hover:brightness-110 transition">
              Aloita ilmaiseksi
            </Link>
            <Link href="#features" className="inline-flex items-center rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-medium backdrop-blur transition">
              Katso demo
            </Link>
          </div>
          <div className="mt-10">
            <Image
              src={photos.hero.dashboard.src}
              alt={photos.hero.dashboard.alt}
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
