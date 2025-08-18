"use client";
import * as React from "react";

export default function AnimatedListDemo({ className }: { className?: string }) {
  // Placeholder stub: simple pulsing list cards
  return (
    <div className={(className ?? "") + " grid grid-cols-2 gap-3"}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-16 animate-pulse rounded-lg border border-white/10 bg-white/5"
        />
      ))}
    </div>
  );
}
