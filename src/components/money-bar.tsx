"use client"

import { cn } from "@/lib/utils"

export type MoneyBarItem = {
  label: string
  value: string
  delta?: string
  intent?: "good" | "bad" | "neutral"
}

export function MoneyBar({ items, className }: { items: MoneyBarItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3", className)}>
      {items.map((it) => (
        <div key={it.label} className="rounded-xl border bg-card p-4 flex items-center justify-between card-premium">
          <div>
            <p className="text-xs text-muted-foreground">{it.label}</p>
            <p className="text-lg font-semibold">{it.value}</p>
          </div>
          {it.delta ? (
            <span className={cn(
              "text-xs font-medium",
              it.intent === "good" ? "text-green-600" : it.intent === "bad" ? "text-red-600" : "text-muted-foreground"
            )}>
              {it.delta}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  )
}
