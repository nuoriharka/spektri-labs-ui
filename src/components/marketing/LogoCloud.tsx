
"use client";
import * as React from "react";

const LOGOS = [
  { slug: "openai", label: "OpenAI", href: "https://openai.com" },
  { slug: "anthropic", label: "Anthropic", href: "https://www.anthropic.com" },
  { slug: "google", label: "Google", href: "https://www.google.com" },
  { slug: "microsoft", label: "Microsoft", href: "https://www.microsoft.com" },
  { slug: "github", label: "GitHub", href: "https://github.com" },
  { slug: "stripe", label: "Stripe", href: "https://stripe.com" },
  { slug: "vercel", label: "Vercel", href: "https://vercel.com" },
  { slug: "supabase", label: "Supabase", href: "https://supabase.com" },
];

export default function LogoCloud() {
  const [isDesigner, setIsDesigner] = React.useState(false);
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDesigner(document.documentElement.getAttribute("data-theme") === "designer");
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDesigner(document.documentElement.getAttribute("data-theme") === "designer");
    return () => observer.disconnect();
  }, []);
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-lg font-medium text-[color:var(--muted)] tracking-tight">
          Orkestroimme maailman parhaita työkaluja puolestasi
        </p>
        <div className={`relative ${isDesigner ? "" : "animate-marquee"}`}>
          {/* Fade gradients left/right, stronger and longer for luxury effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[var(--bg)] via-transparent to-transparent" />
          {/* Tighter logo spacing, shorter travel */}
          <div className="flex gap-10 md:gap-14 whitespace-nowrap will-change-transform items-center py-4" style={{ width: 'min(700px, 90vw)', margin: '0 auto' }}>
            {[...LOGOS, ...LOGOS].map(({ slug, label, href }, i) => (
              <a
                key={`${slug}-${i}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 opacity-90 hover:opacity-100 transition-transform hover:scale-110"
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
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-25%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  );
}
