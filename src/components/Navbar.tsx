import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./icons";
import { BUSINESS, NAV_LINKS, WA_DEFAULT } from "../data/site";
import NexgenLogo from "./Logo";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.07] bg-carbon/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        {/* top micro bar */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-500",
            scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[11px] font-medium tracking-wide text-silver lg:px-8">
            <p className="hidden items-center gap-2 sm:flex">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {BUSINESS.hours} · {BUSINESS.location}
            </p>
            <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-6">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-bone">
                <Phone className="h-3 w-3" /> {BUSINESS.phoneDisplay}
              </a>
              <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 transition-colors hover:text-bone sm:flex">
                <InstagramIcon className="h-3 w-3" /> @nexgen_autospa_varkala
              </a>
            </div>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8" aria-label="Primary">
          <a href="#home" className="group flex items-center" aria-label="Nexgen Auto Spa home">
            <NexgenLogo className="transition-transform duration-300 group-hover:scale-[1.02]" />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "nav-link font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors",
                  active === l.href.slice(1) ? "active text-bone" : "text-silver hover:text-bone"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WA_DEFAULT}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("nexgen:open-booking"));
              }}
              className="group card-sheen font-display inline-flex items-center gap-2 bg-ember px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.14em] text-carbon transition-all hover:bg-ember-deep"
            >
              Book Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-bone transition-colors hover:border-ember lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-carbon/[0.98] backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <NexgenLogo />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-bone"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-white/[0.06] py-3.5"
                >
                  <span className="font-display text-xs font-semibold text-ember">0{i + 1}</span>
                  <span className="font-display text-2xl font-bold tracking-tight text-bone transition-colors group-hover:text-ember">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 px-8 pb-10"
            >
              <a
                href={WA_DEFAULT}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  window.dispatchEvent(new CustomEvent("nexgen:open-booking"));
                }}
                className="font-display flex items-center justify-center gap-2 bg-ember px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-carbon"
              >
                Book Your Service <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="font-display flex items-center justify-center gap-2 border border-white/15 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-bone"
              >
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
              <p className="pt-2 text-center text-xs text-silver">{BUSINESS.hours} · {BUSINESS.address}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
