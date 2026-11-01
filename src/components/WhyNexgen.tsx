import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { BUSINESS, WA_DEFAULT } from "../data/site";
import { Eyebrow, Reveal } from "./ui";

const POINTS = [
  {
    t: "Attention to every detail",
    d: "Edges, emblems, vents, stitching — the small areas most washes skip are where we spend our time.",
  },
  {
    t: "Vehicle-specific care",
    d: "Hatchback or luxury SUV, commuter or superbike — the process is matched to your paint, trim and usage.",
  },
  {
    t: "Protection-first thinking",
    d: "From ceramic & graphene coatings to PPF and careful wash methods, everything is built to preserve value.",
  },
  {
    t: "Customer-focused studio",
    d: "Friendly team, comfortable lounge while you wait, and pickup & drop available across Varkala.",
  },
];

export default function WhyNexgen() {
  return (
    <section id="why" className="relative overflow-hidden bg-[#d3d4d1] py-24 text-carbon sm:py-32">
      {/* faint outline */}
      <div className="pointer-events-none absolute -top-6 left-0 select-none overflow-hidden" aria-hidden>
        <p className="font-display whitespace-nowrap text-[16vw] font-extrabold leading-none tracking-tighter text-carbon/[0.04]">
          OBSESSED
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* imagery */}
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <div className="img-zoom clip-slant relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/35149470/pexels-photo-35149470.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Detailer machine-polishing a car door in a professional studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/50 via-transparent to-transparent" aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-8 -right-2 w-[52%] sm:right-6 lg:-right-6">
            <div className="overflow-hidden rounded-sm shadow-[0_24px_64px_-16px_rgba(11,13,15,0.5)] ring-4 ring-bone">
              <img
                src="https://images.pexels.com/photos/17339307/pexels-photo-17339307.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Close-up of pristine luxury car interior trim"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -left-2 top-8 bg-carbon px-5 py-4 text-bone shadow-xl sm:left-6"
          >
            <p className="font-display text-2xl font-extrabold leading-none">
              9<span className="text-ember">–</span>8
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-silver">Open daily · Varkala</p>
          </motion.div>
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2 lg:pt-4">
          <Reveal>
            <Eyebrow>Why Nexgen</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Not a car wash.
              <br />A <span className="relative inline-block">detailing studio.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                  <motion.path
                    d="M2 9 C 80 2, 220 2, 298 8"
                    stroke="#FF4D1C"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Anyone can rinse a car. We study it — paint, trim, cabin, wheels — then bring it back
              with methodical, professional care. That obsession is why Varkala trusts {BUSINESS.name} with
              daily drivers and prized machines alike.
            </p>
          </Reveal>

          <div className="mt-9 space-y-0 divide-y divide-carbon/10 border-y border-carbon/10">
            {POINTS.map((p, i) => (
              <Reveal key={p.t} delay={0.08 * i}>
                <div className="group flex gap-4 py-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-carbon text-bone transition-colors duration-300 group-hover:bg-ember">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">{p.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="font-display group inline-flex items-center gap-2 bg-carbon px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-ember hover:text-white"
              >
                Talk to the team
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="font-display inline-flex items-center gap-2 border border-carbon/20 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-carbon transition-colors hover:border-carbon hover:bg-carbon hover:text-bone"
              >
                See the results
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
