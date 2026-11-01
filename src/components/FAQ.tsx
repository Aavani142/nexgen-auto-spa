import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS, waLink } from "../data/site";
import { Reveal, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-graphite py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Good to know"
            title={<>Questions,<br />answered.</>}
            desc="Everything practical about booking, timing and finding the studio. Still curious? Message us — we reply fast."
          />
          <Reveal delay={0.2}>
            <a
              href={waLink("Hi NEXGEN AUTO SPA! I have a question about your detailing services.")}
              target="_blank"
              rel="noreferrer"
              className="font-display mt-8 inline-flex items-center gap-2 border-b-2 border-ember pb-1.5 text-sm font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:text-ember"
            >
              Ask on WhatsApp
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={cn(open && "faq-open")}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className={cn("font-display text-xs font-bold tracking-widest transition-colors", open ? "text-ember" : "text-silver/50")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("font-display text-base font-bold tracking-tight transition-colors sm:text-lg", open ? "text-bone" : "text-bone/85 group-hover:text-bone")}>
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-400",
                        open ? "rotate-45 border-ember bg-ember text-white" : "border-white/15 text-silver group-hover:border-white/40 group-hover:text-bone"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className="faq-grid" role="region" id={`faq-panel-${i}`} aria-labelledby={`faq-btn-${i}`}>
                    <div className="faq-inner">
                      <p className="max-w-2xl pb-7 pl-9 pr-4 text-sm leading-relaxed text-silver sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
