import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";
import { BUSINESS, WA_DEFAULT } from "../data/site";
import { Reveal } from "./ui";
import { WhatsAppIcon } from "./icons";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-40">
      <motion.div style={{ y }} className="absolute inset-[-14%_0]" aria-hidden>
        <img
          src="https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Side profile of a detailed black luxury coupe"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-carbon/72" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-ember">
            Varkala · Kerala · Mon – Sat 9–8
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-4xl font-extrabold leading-[1.0] tracking-tight text-balance text-bone sm:text-6xl lg:text-7xl">
            YOUR CAR DESERVES MORE THAN ORDINARY.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
            Give your vehicle the attention it deserves. Connect with Nexgen Auto Spa and discover
            professional car care in Varkala.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="group card-sheen font-display inline-flex items-center justify-center gap-2.5 bg-ember px-9 py-4.5 text-sm font-extrabold uppercase tracking-[0.12em] text-carbon transition-all duration-300 hover:bg-ember-deep"
              style={{ paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Book on WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="font-display inline-flex items-center justify-center gap-2.5 border border-white/25 bg-black/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.12em] text-bone backdrop-blur-md transition-all duration-300 hover:border-bone hover:bg-bone hover:text-carbon"
              style={{ paddingTop: "1.1rem", paddingBottom: "1.1rem" }}
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-6 text-xs tracking-[0.18em] text-silver/70 uppercase">
            {BUSINESS.phoneDisplay} · Pickup & drop available
          </p>
        </Reveal>
      </div>
    </section>
  );
}
