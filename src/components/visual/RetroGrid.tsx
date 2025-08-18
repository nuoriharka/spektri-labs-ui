"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function RetroGrid({ className, opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,${opacity}) 1px, transparent 1px)`,
        backgroundSize: "24px 24px, 24px 24px",
        backgroundPosition: "-1px -1px, -1px -1px",
      }}
    />
  )
}
