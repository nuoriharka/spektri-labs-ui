"use client";
import * as React from "react";
import { BRAND_ICONS } from "@/content/brand-icons";
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-lg font-medium text-[color:var(--muted)] tracking-tight">
          Orkestroimme maailman parhaita työkaluja puolestasi
        </p>
        <div className={`relative ${isDesigner ? "" : "animate-marquee"}`}>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg)]" />
          <div className="flex gap-20 md:gap-24 whitespace-nowrap will-change-transform items-center py-4">
            {[...LOGOS, ...LOGOS].map(({ slug, label, href }, i) => (
              <a
                key={`${slug}-${i}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
                style={{ filter: isDesigner ? "none" : "drop-shadow(0 2px 12px rgba(34,211,238,0.10))" }}
              >
                <img
                  src={`/logos/${slug}.svg`}
                  alt={`${label} logo`}
                  className={`h-10 w-10 object-contain drop-shadow-xl transition-all duration-200 ${isDesigner ? "" : "grayscale invert"} data-[theme=designer]:invert-0`}
                  style={{ imageRendering: 'auto' }}
                />
                <span className="text-xs md:text-sm text-[color:var(--fg)] font-medium tracking-wide drop-shadow-lg">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </section>
  );
              viewBox="0 0 24 24"
              className="h-6 md:h-7 lg:h-8 w-auto transition-opacity opacity-70 hover:opacity-100"
              style={variant === "brand" ? { color: hex } : { color: "rgb(156 163 175)" }}
            >
              <title>{label}</title>
              <path d={path} fill="currentColor" />
            </svg>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-white/50">
        Logot ovat tavaramerkkejä – käyttötapa viitteellinen (“works with”). Ei sponsorointia tai kumppanuusviestiä.
      </p>
    </div>
  );
}
