import { ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "../data/site";
import { Reveal, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

export default function Services() {
  return (
    <section id="services" className="relative bg-carbon py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={<>Care for every panel.<br /><span className="text-silver">Inside & out.</span></>}
            desc="Verified services from the Nexgen studio in Varkala — from everyday foam washes to concours-level coating and body-shop work."
          />
          <Reveal delay={0.2} className="shrink-0">
            <a
              href={waLink("Hi NEXGEN AUTO SPA! Please help me choose the right service for my vehicle.")}
              target="_blank"
              rel="noreferrer"
              className="font-display group inline-flex items-center gap-2 border-b border-ember pb-2 text-sm font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:text-ember"
            >
              Not sure what you need? Ask us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08} className={cn("md:col-span-1", s.span)}>
              <article className="img-zoom group relative h-[420px] overflow-hidden rounded-sm bg-graphite ring-1 ring-white/[0.07] transition-all duration-500 hover:ring-ember/40 sm:h-[440px]">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/45 to-carbon/5" aria-hidden />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span className="rounded-full border border-white/15 bg-black/45 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone backdrop-blur-md">
                    {s.tag}
                  </span>
                  <span className="font-display text-sm font-bold tracking-widest text-bone/50">{s.index}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-bone sm:text-[1.7rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-bone/70">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={waLink(`Hi NEXGEN AUTO SPA! I'm interested in: ${s.title}. Please share details and a quote.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-2 bg-bone px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-carbon transition-all duration-300 hover:bg-ember hover:text-carbon"
                    >
                      Enquire Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <span className="hidden h-px flex-1 bg-white/15 transition-colors group-hover:bg-ember/40 sm:block" aria-hidden />
                  </div>
                </div>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-ember transition-all duration-700 ease-out group-hover:w-full" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs tracking-wide text-silver/70">
            Also available: seat covers · floor mats · two-wheeler mechanical & electrical works · spare parts · customer lounge & waiting area.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
