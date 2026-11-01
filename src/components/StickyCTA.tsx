import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BUSINESS, WA_DEFAULT } from "../data/site";
import { WhatsAppIcon } from "./icons";

export default function StickyCTA() {
  const [hidden, setHidden] = useState(true); // hide only when footer / modal zone reached

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.scrollHeight - 360;
      setHidden(nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile / tablet sticky booking bar — visible from the start */}
      <motion.div
        initial={{ y: 90 }}
        animate={{ y: hidden ? 90 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 px-4 pb-[max(0.85rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        style={{ background: "rgba(11,13,15,0.94)" }}
      >
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={BUSINESS.phoneHref}
            className="font-display flex items-center justify-center gap-2 border border-white/15 bg-white/[0.05] py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-bone active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="font-display flex items-center justify-center gap-2 bg-ember py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-carbon active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book Now
          </a>
        </div>
      </motion.div>

      {/* Desktop floating contact stack — WhatsApp + Call, always available */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: hidden ? 0 : 1, x: hidden ? 40 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className={`fixed bottom-8 right-7 z-40 hidden flex-col items-end gap-3 lg:flex ${hidden ? "pointer-events-none" : ""}`}
        aria-label="Quick contact"
      >
        <a
          href={BUSINESS.phoneHref}
          className="group flex items-center gap-3"
          aria-label={`Call ${BUSINESS.phoneDisplay}`}
        >
          <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-white/12 bg-carbon/92 py-2.5 pl-4 pr-0 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-bone opacity-0 shadow-lg backdrop-blur transition-all duration-400 group-hover:max-w-[220px] group-hover:pr-4 group-hover:opacity-100">
            {BUSINESS.phoneDisplay}
          </span>
          <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-graphite/90 text-bone shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] backdrop-blur transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-carbon">
            <Phone className="h-5 w-5" />
          </span>
        </a>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3"
          aria-label="Book on WhatsApp"
        >
          <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-white/12 bg-carbon/92 py-2.5 pl-4 pr-0 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-bone opacity-0 shadow-lg backdrop-blur transition-all duration-400 group-hover:max-w-[220px] group-hover:pr-4 group-hover:opacity-100">
            Book on WhatsApp
          </span>
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-ember text-carbon shadow-[0_16px_40px_-8px_rgba(254,199,0,0.35)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-ember" aria-hidden />
            <WhatsAppIcon className="h-6 w-6" />
          </span>
        </a>
      </motion.div>
    </>
  );
}
