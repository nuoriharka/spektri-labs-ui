import { logos } from "@/data/logos";
export default function LogoMarquee(){
  return (
    <section className="py-10 border-t border-white/10">
      <p className="text-center text-sm text-white/60">Orkestroimme maailman parhaat työkalut ja palvelut puolestasi</p>
      <div className="mt-6 overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-12 whitespace-nowrap px-4 items-center">
          <img src="/brand/spektri-logomark-gradient.svg" alt="Spektri" className="h-6 w-auto opacity-80" />
          {[...logos, ...logos].map((l,i)=>(
            <div key={i} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition">
              <img src={l.src} alt={l.name} className="h-6 w-auto" />
              <span className="text-xs">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
