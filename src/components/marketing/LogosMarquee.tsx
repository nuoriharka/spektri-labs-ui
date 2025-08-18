"use client"

export default function LogosMarquee(){
  const items = ["Google","Microsoft","Slack","Notion","HubSpot","Zapier","Vercel","OpenAI","AWS","Stripe"]
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="overflow-hidden py-6">
        <div className="flex animate-[scroll_30s_linear_infinite] [--gap:3rem] gap-[var(--gap)] will-change-transform motion-reduce:animate-none">
          {[...items, ...items].map((n, i) => (
            <div key={i} className="text-white/70 text-sm shrink-0">{n}</div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
