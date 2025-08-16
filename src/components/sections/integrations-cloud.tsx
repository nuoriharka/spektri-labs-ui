"use client"
import Image from "next/image"
import spektriLogo from "../../../photos/Spektri (2).png"

export function IntegrationsCloud() {
  const logos = Array.from({ length: 6 }).map((_, i) => ({ id: i }))
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center text-slate-300 opacity-80 text-sm uppercase tracking-widest">Integraatiot</div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-90">
          {logos.map((l) => (
            <Image
              key={l.id}
              src={spektriLogo}
              alt="Spektri"
              className="h-8 w-auto"
              height={32}
              placeholder="empty"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
