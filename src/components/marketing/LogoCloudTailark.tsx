"use client";

import { CORE_LOGOS } from "@/config/brand-logos";

export default function LogoCloudTailark() {
  // Add Spektri logo at the start
  const spektriLogo = {
    slug: "spektri",
    label: "Spektri.Labs",
    href: "/",
    src: "/brand/spektri-logomark-gradient.svg"
  };
  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <p className="mb-6 text-center text-sm text-white/70">
          Orkestroimme maailman parhaita työkaluja puolestasi
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background" />
          <div className="flex animate-[marquee_30s_linear_infinite] gap-12 md:gap-16 whitespace-nowrap will-change-transform items-center">
            {/* Spektri logo at start */}
            <a
              href={spektriLogo.href}
              className="inline-flex items-center gap-3 opacity-90 hover:opacity-100"
              style={{ marginRight: '2.5rem' }}
            >
              <img src={spektriLogo.src} alt={spektriLogo.label} className="h-8 w-8 object-contain drop-shadow-lg" />
              <span className="text-xs font-semibold">{spektriLogo.label}</span>
            </a>
            {/* Brand logos, uniform size, color on hover, crisp rendering */}
            {[...CORE_LOGOS, ...CORE_LOGOS].map(({ slug, label, href }, i) => (
              <a
                key={`${slug}-${i}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 opacity-80 hover:opacity-100 transition-transform hover:scale-105"
              >
                <img
                  src={`/logos/${slug}.svg`}
                  alt={`${label} logo`}
                  className="h-8 w-8 object-contain transition-all duration-200 grayscale hover:grayscale-0 drop-shadow"
                  style={{ imageRendering: 'auto' }}
                />
                <span className="text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
