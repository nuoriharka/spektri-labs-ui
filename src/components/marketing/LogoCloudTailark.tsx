"use client";

import { CORE_LOGOS } from "@/config/brand-logos";

export default function LogoCloudTailark() {
  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-6">
        <p className="mb-6 text-center text-sm text-white/70">
          Orkestroimme maailman parhaita työkaluja puolestasi
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background" />
          <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap will-change-transform">
            {[...CORE_LOGOS, ...CORE_LOGOS].map(({ slug, label, href }, i) => (
              <a
                key={`${slug}-${i}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 opacity-80 hover:opacity-100"
              >
                <img src={`/logos/${slug}.svg`} alt={`${label} logo`} className="h-6 w-auto grayscale" />
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
