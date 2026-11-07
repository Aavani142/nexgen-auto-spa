import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, MapPin, Star } from "lucide-react";
import { useRef } from "react";
import { BUSINESS, WA_DEFAULT } from "../data/site";
import { SplitWords } from "./ui";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="home" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0" aria-hidden>
        <img
          src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glossy black luxury car under dramatic studio lighting"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="hero-vignette absolute inset-0" aria-hidden />
      {/* ember hairline glow at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" aria-hidden />

      {/* Giant outline word */}
      <div className="pointer-events-none absolute inset-x-0 top-[16%] hidden select-none overflow-hidden lg:block" aria-hidden>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="font-display whitespace-nowrap text-center text-[13vw] font-extrabold leading-none tracking-tighter text-stroke opacity-40"
        >
          NEXGEN
        </motion.p>
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:pb-28 lg:px-8">
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 py-2 pl-3 pr-4 backdrop-blur-md"
        >
          <MapPin className="h-3.5 w-3.5 text-ember" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bone sm:text-xs">
            Premium Automotive Care in Varkala
          </span>
        </motion.div>

        <h1 className="font-display max-w-5xl text-[clamp(2.75rem,10.5vw,6.2rem)] font-extrabold leading-[0.95] tracking-tight text-bone">
          <SplitWords text="YOUR DRIVE." delay={0.25} />
          <br />
          <span className="text-ember">
            <SplitWords text="OUR OBSESSION." delay={0.5} />
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="max-w-xl"
          >
            <p className="border-l-2 border-ember pl-4 text-base leading-relaxed text-bone/85 sm:text-lg">
              Precision detailing. Exceptional care. A flawless finish for every drive — from ceramic
              protection to cabin revival.
            </p>
            <div className="mt-4 flex items-center gap-2 pl-4 text-sm text-silver">
              <span className="flex gap-0.5" aria-label="Rated 4.5 out of 5 on Google">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="relative inline-block h-3.5 w-3.5">
                  <Star className="absolute inset-0 h-3.5 w-3.5 text-amber-400" />
                  <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  </span>
                </span>
              </span>
              <span>Loved by car & bike owners across Varkala</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
          >
            <a
              href={WA_DEFAULT}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("nexgen:open-booking"));
              }}
              className="group card-sheen font-display inline-flex items-center justify-center gap-2.5 bg-ember px-8 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-carbon transition-all duration-300 hover:bg-ember-deep"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Book Your Service
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="group font-display inline-flex items-center justify-center gap-2.5 border border-white/20 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-bone backdrop-blur-sm transition-all duration-300 hover:border-bone/60 hover:bg-white/[0.08]"
            >
              <Play className="h-4 w-4 fill-current" />
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex items-center justify-between border-t border-white/10 pt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-silver"
        >
          <span className="hidden sm:block">Ceramic · Graphene · Interior · Foam Wash</span>
          <span className="sm:hidden">Varkala · Kerala</span>
          <span className="hidden items-center gap-3 md:flex">
            Scroll
            <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/20">
              <span className="mt-1.5 h-2 w-1 animate-scroll-dot rounded-full bg-ember" />
            </span>
          </span>
          <span>{BUSINESS.hoursShort}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
