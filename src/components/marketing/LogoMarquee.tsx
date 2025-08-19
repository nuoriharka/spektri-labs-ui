import { logos } from "@/data/logos";
export default function LogoMarquee(){
  return (
    <section className="py-10 border-t border-white/10">
      <p className="text-center text-sm text-white/60">Orkestroimme maailman parhaat työkalut ja palvelut puolestasi</p>
      <div className="mt-6 overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-10 md:gap-14 whitespace-nowrap px-4 items-center">
          <div className="h-10 md:h-12 flex items-center opacity-80">
            <img src="/brand/spektri-logomark-gradient.svg" alt="Spektri" className="h-8 md:h-9 w-auto object-contain" />
            <span className="sr-only">Spektri</span>
          </div>
          {[{ name: "Spektri.Labs", src: "/brand/spektri-logomark-gradient.svg" }, ...logos, ...logos].map((l,i)=>(
            <div key={i} className="h-10 md:h-12 flex items-center opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-2xl transition">
              <img src={l.src} alt={l.name} className="h-8 md:h-9 w-auto max-w-[140px] object-contain" />
              <span className="sr-only">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
