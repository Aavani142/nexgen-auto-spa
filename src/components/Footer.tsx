import { ArrowUp, Phone, MapPin, Clock, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "../data/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import NexgenLogo from "./Logo";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/[0.07] bg-[#08090b]">
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-16 lg:px-8 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="inline-block" aria-label="Nexgen Auto Spa home">
              <NexgenLogo />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver">
              Premium automotive detailing studio in Varkala, Kerala — precision detailing,
              protection and care for cars and bikes.
            </p>
            <p className="font-display mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-ember">
              Your Drive. Our Obsession.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Nexgen Auto Spa on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-silver transition-all hover:border-ember hover:bg-ember hover:text-carbon"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-silver transition-all hover:border-ember hover:bg-ember hover:text-carbon"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                aria-label="Call Nexgen Auto Spa"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-silver transition-all hover:border-ember hover:bg-ember hover:text-carbon"
              >
                <Phone className="h-[18px] w-[18px]" />
              </a>
              <a
                href={BUSINESS.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Reviews for Nexgen AutoSpa Varkala"
                className="flex h-11 items-center gap-1.5 rounded-full border border-white/12 px-3 text-xs font-semibold text-silver transition-all hover:border-ember hover:bg-ember hover:text-carbon"
              >
                <Star className="h-3.5 w-3.5 fill-current" />
                Google Reviews
              </a>
            </div>
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-silver">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-bone/75 transition-colors hover:text-ember">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* services */}
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-silver">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-bone/75 transition-colors hover:text-ember">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-silver">Reach Us</p>
            <ul className="mt-5 space-y-4 text-sm text-bone/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <a href={BUSINESS.phoneHref} className="flex gap-3 transition-colors hover:text-ember">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
            <button
              onClick={toTop}
              className="font-display group mt-7 inline-flex items-center gap-2.5 border border-white/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-bone transition-all hover:border-ember hover:text-ember"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 text-xs text-silver/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}, {BUSINESS.location}. All rights reserved.</p>
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-silver/80 transition-colors hover:text-ember"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Nexgen AutoSpa Varkala on Google
          </a>
        </div>
      </div>
    </footer>
  );
}
