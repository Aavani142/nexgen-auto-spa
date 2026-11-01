import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Sparkles, KeyRound } from "lucide-react";
import { SectionHeading, Reveal } from "./ui";

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    t: "Get in Touch",
    d: "Contact the team and discuss your vehicle's needs — on WhatsApp, call, or the form below.",
  },
  {
    n: "02",
    icon: ClipboardList,
    t: "Choose Your Care",
    d: "Find the detailing service that suits your vehicle, with honest guidance and a clear quote.",
  },
  {
    n: "03",
    icon: Sparkles,
    t: "Precision in Every Detail",
    d: "The team works on your vehicle with care and attention — relax in our lounge or use pickup & drop.",
  },
  {
    n: "04",
    icon: KeyRound,
    t: "Drive Away Refreshed",
    d: "Experience your vehicle looking its best — protected, revived and ready for every drive.",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      {/* backdrop line */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.06] lg:block" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="The detailing experience"
          title={<>Effortless for you.<br /><span className="text-silver">Obsessive for us.</span></>}
          desc="Four simple steps between you and a flawless finish."
        />

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[52px] hidden h-[2px] origin-left bg-ember/70 lg:block"
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="group relative h-full border border-white/[0.08] bg-graphite/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/50 hover:bg-graphite">
                <div className="flex items-start justify-between">
                  <span className="grid h-[72px] w-[72px] place-items-center rounded-full border border-white/10 bg-carbon text-ember transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-white">
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-5xl font-extrabold tracking-tighter text-white/[0.07] transition-colors duration-500 group-hover:text-ember/20">
                    {s.n}
                  </span>
                </div>
                <p className="font-display mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-ember">
                  Step {s.n}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-bone">{s.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-silver">{s.d}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-ember transition-all duration-700 group-hover:w-full" aria-hidden />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
