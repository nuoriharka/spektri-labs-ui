"use client";
import * as React from "react";

export default function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  // Placeholder stub: static gradient box to avoid client-only dependencies.
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 " +
        (className ?? "")
      }
    />
  );
}
