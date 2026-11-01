import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand, MoveHorizontal, Camera } from "lucide-react";
import { BUSINESS, GALLERY } from "../data/site";
import { Reveal, SectionHeading } from "./ui";
import { InstagramIcon } from "./icons";
import { cn } from "../utils/cn";

/* Interactive before/after slider */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
  };

  // Illustrative transformation demo (clearly labelled)
  const before = "https://images.pexels.com/photos/4870724/pexels-photo-4870724.jpeg?auto=compress&cs=tinysrgb&w=1200";
  const after = "https://images.pexels.com/photos/29566864/pexels-photo-29566864.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <div className="mt-12">
      <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.22em]">
        <span className="flex items-center gap-2 text-silver">
          <MoveHorizontal className="h-4 w-4 text-ember" /> Drag to compare
        </span>
        <span className="hidden text-silver/60 sm:block">Illustrative finish demonstration</span>
      </div>
      <div
        ref={trackRef}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        className="relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden rounded-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-ember sm:aspect-[21/9]"
      >
        <img src={after} alt="After premium detailing — deep gloss reflection" className="absolute inset-0 h-full w-full object-cover" loading="lazy" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }} aria-hidden>
          <div className="relative h-full" style={{ width: `${(100 / pos) * 100}%` }}>
            <img src={before} alt="" className="absolute inset-0 h-full w-full object-cover saturate-[0.55] brightness-[0.72]" loading="lazy" draggable={false} />
            <div className="absolute inset-0 bg-carbon/20" />
          </div>
        </div>
        {/* labels */}
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone backdrop-blur-md">Before</span>
        <span className="absolute right-4 top-4 rounded-full bg-ember px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">After</span>
        {/* handle */}
        <div className="absolute inset-y-0 w-[2px] bg-bone/90" style={{ left: `${pos}%` }} aria-hidden>
          <span className="ba-handle absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ember text-white">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs text-silver/60">
        Demonstration of the depth and clarity a professional detail delivers. Follow{" "}
        <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="text-bone underline decoration-ember underline-offset-4 hover:text-ember">
          @nexgen_autospa_varkala
        </a>{" "}
        for real studio transformations.
      </p>
    </div>
  );
}

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(GALLERY.map((g) => g.cat)))];
  const visible = GALLERY.filter((g) => filter === "All" || g.cat === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setLightbox((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  // touch swipe in lightbox
  const touchX = useRef<number | null>(null);

  return (
    <section id="work" className="relative bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our work"
            title={<>THE RESULTS SPEAK<br />FOR <span className="text-ember">THEMSELVES.</span></>}
            desc="A curated look at the finishes we chase — deep gloss, crisp interiors and meticulous details. Tap any frame to view it full-screen."
          />
          <Reveal delay={0.2} className="shrink-0">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-display group inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-bone transition-all hover:border-ember hover:bg-ember hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              @nexgen_autospa_varkala
            </a>
          </Reveal>
        </div>

        {/* filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
            {cats.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "font-display rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all",
                  filter === c
                    ? "bg-ember text-white"
                    : "border border-white/12 text-silver hover:border-white/30 hover:text-bone"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* editorial grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((g, i) => (
              <motion.figure
                layout
                key={g.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn("img-zoom group relative cursor-zoom-in overflow-hidden rounded-sm ring-1 ring-white/[0.07] hover:ring-ember/40", g.tall ? "sm:row-span-2 h-[420px] sm:h-[560px]" : "h-[300px] sm:h-[268px]")}
                onClick={() => setLightbox(GALLERY.indexOf(g))}
              >
                <img src={g.thumb} alt={g.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-ember">{g.cat}</span>
                    <span className="font-display mt-1 block text-lg font-bold text-bone">{g.label}</span>
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-bone opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.05}>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-silver/60">
            <Camera className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Gallery frames are representative of premium detailing finishes. Real customer transformations are published on our Instagram — visit the profile to see the latest studio work.
          </p>
        </Reveal>

        <Reveal>
          <BeforeAfter />
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-carbon/95 p-4 backdrop-blur-xl sm:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (dx < -50) step(1);
              if (dx > 50) step(-1);
              touchX.current = null;
            }}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-bone transition-colors hover:border-ember hover:text-ember"
              aria-label="Close viewer"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-bone transition-colors hover:border-ember hover:text-ember sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-bone transition-colors hover:border-ember hover:text-ember sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[82vh] max-w-5xl overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                className="max-h-[74vh] w-auto max-w-full object-contain"
              />
              <figcaption className="flex items-center justify-between bg-graphite px-5 py-3.5">
                <span className="font-display text-sm font-bold text-bone">{GALLERY[lightbox].label}</span>
                <span className="text-xs tracking-widest text-silver">{lightbox + 1} / {GALLERY.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
