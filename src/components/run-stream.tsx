"use client"

import { useEffect, useRef, useState } from "react"

export type RunEvent = {
  id: string | number
  type: "start" | "step" | "end" | "TASK_UPDATE" | "LOG" | "METRIC" | "DONE"
  message: string
  time: string
}

export function RunStream({ events: initial = [] as RunEvent[], autoScroll = true, sseUrl }: { events?: RunEvent[]; autoScroll?: boolean; sseUrl?: string }) {
  const [events, setEvents] = useState<RunEvent[]>(initial)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (autoScroll && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [events, autoScroll])

  useEffect(() => {
    if (!sseUrl) return
    const es = new EventSource(sseUrl)
    const push = (type: RunEvent["type"], message: string) =>
      setEvents((ev) => [...ev, { id: ev.length + 1, type, message, time: new Date().toLocaleTimeString() }])
    es.addEventListener("TASK_UPDATE", () => push("TASK_UPDATE", "Status päivittyi"))
    es.addEventListener("LOG", (e) => {
      try {
        const d = JSON.parse((e as MessageEvent).data)
        push("LOG", d.message || "Lokirivi")
      } catch {
        push("LOG", "Lokirivi")
      }
    })
    es.addEventListener("METRIC", () => push("METRIC", "Mittaustieto"))
    es.addEventListener("DONE", () => {
      push("DONE", "Valmis")
      es.close()
    })
    return () => es.close()
  }, [sseUrl])

  function simulate() {
    const now = new Date()
    const time = now.toLocaleTimeString()
    setEvents((ev) => [
      ...ev,
      { id: ev.length + 1, type: ev.length === 0 ? "start" : ev.length > 4 ? "end" : "step", message: `Tapahtuma ${ev.length + 1}`, time },
    ])
  }

  return (
    <div>
      <div ref={ref} className="h-48 overflow-auto rounded-md border bg-card p-3 space-y-2">
        {events.map((e) => (
          <div key={e.id} className="text-sm flex items-center justify-between">
            <span>
              <span className="font-medium">[{e.type}]</span> {e.message}
            </span>
            <span className="text-muted-foreground">{e.time}</span>
          </div>
        ))}
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground">Ei tapahtumia vielä.</p>
        ) : null}
      </div>
      {!sseUrl && (
        <button
          onClick={simulate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              simulate()
            }
          }}
          className="mt-2 text-xs underline"
          aria-label="Simuloi tapahtuma"
        >
          Simuloi tapahtuma
        </button>
      )}
    </div>
  )
}
