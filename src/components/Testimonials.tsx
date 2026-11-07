import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck, ArrowUpRight, ExternalLink } from "lucide-react";
import { BUSINESS, TESTIMONIALS } from "../data/site";
import { SectionHeading, Reveal } from "./ui";
import { cn } from "../utils/cn";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: 1 | -1) => {
    setDir(d);
    setIdx((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const r = TESTIMONIALS[idx];

  return (
    <section id="reviews" className="relative bg-[#d3d4d1] py-24 text-carbon sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Google Reviews Trust Bar */}
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-4 border border-carbon/12 bg-white/40 p-5 shadow-sm sm:flex-row sm:items-center sm:p-6">
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-carbon text-ember font-display font-black text-lg">
                G
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-extrabold text-carbon">Nexgen AutoSpa Varkala</span>
                  <BadgeCheck className="h-4 w-4 text-emerald-600" aria-label="Verified Profile" />
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-neutral-600">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="relative inline-block h-3.5 w-3.5">
                      <Star className="absolute inset-0 h-3.5 w-3.5 text-amber-500" />
                      <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      </span>
                    </span>
                  </span>
                  <span className="font-bold text-carbon">4.5 Star Rating</span>
                  <span>· Verified Google Reviews</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-display inline-flex items-center gap-2 bg-carbon px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-ember hover:text-carbon"
            >
              View on Google Reviews
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              dark
              eyebrow="Customer love"
              title={<>Word on the street<br />in Varkala.</>}
              desc="Real feedback from verified Google reviews for Nexgen AutoSpa Varkala. No scripts, no actors — just genuine vehicle owners."
            />
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={() => go(-1)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-carbon/15 transition-all hover:border-carbon hover:bg-carbon hover:text-bone"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="grid h-12 w-12 place-items-center rounded-full border border-carbon/15 transition-all hover:border-carbon hover:bg-carbon hover:text-bone"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="font-display ml-2 text-sm font-bold tracking-widest text-neutral-500">
                  {String(idx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                    aria-label={`Go to review ${i + 1}`}
                    className={cn("h-1.5 rounded-full transition-all duration-500", i === idx ? "w-12 bg-ember" : "w-6 bg-carbon/15 hover:bg-carbon/30")}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative min-h-[340px] overflow-hidden bg-carbon p-8 text-bone sm:min-h-[320px] sm:p-12">
              <Quote className="absolute -right-4 -top-4 h-40 w-40 text-white/[0.04]" aria-hidden />
              <div className="absolute left-0 top-0 h-full w-1.5 bg-ember" aria-hidden />
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={idx}
                  custom={dir}
                  initial={{ opacity: 0, x: 40 * dir }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 * dir }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver/60">
                      Google Review
                    </span>
                  </div>

                  <p className="font-display mt-6 text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-[1.7rem]">
                    “{r.quote}”
                  </p>
                  <footer className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-ember font-display text-sm font-black text-carbon">
                        G
                      </span>
                      <span>
                        <span className="flex items-center gap-1.5 text-sm font-bold">
                          {r.name}
                          <BadgeCheck className="h-4 w-4 text-emerald-400" aria-label="Verified" />
                        </span>
                        <span className="block text-xs text-silver">{r.meta}</span>
                      </span>
                    </div>

                    <a
                      href={BUSINESS.googleReviewsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden items-center gap-1 text-xs font-semibold text-ember hover:underline sm:flex"
                    >
                      Verify on Google <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Verified review for Nexgen AutoSpa Varkala. Recently visited the studio?{" "}
              <a
                href={BUSINESS.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-carbon underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
              >
                Write a Google review for Nexgen AutoSpa
              </a>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
