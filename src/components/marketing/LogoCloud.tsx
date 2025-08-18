"use client";
import * as React from "react";
import { BRAND_ICONS } from "@/content/brand-icons";

type Props = {
  variant?: "mono" | "brand";
  max?: number;
  className?: string;
};

export default function LogoCloud({ variant = "mono", max, className }: Props) {
  const items = max ? BRAND_ICONS.slice(0, max) : BRAND_ICONS;

  return (
    <div className={["w-full mx-auto", className].filter(Boolean).join(" ")}> 
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-white/5 text-white/80 ring-1 ring-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          Works with your stack
        </span>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
        {items.map(({ id, label, path, hex }) => (
          <li key={id} className="flex justify-center">
            <svg
              role="img" aria-label={label}
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
