import { BadgeCheck, Sparkles, Car, Bike, Star, MapPin } from "lucide-react";
import { Reveal } from "./ui";
import { BUSINESS } from "../data/site";

const ITEMS = [
  { icon: BadgeCheck, title: "Premium Int'l Products", sub: "Koch-Chemie · RUPES · GYEON" },
  { icon: Sparkles, title: "Cars + Bikes", sub: "Foam wash to full detail" },
  { icon: Car, title: "Pickup & Drop", sub: "Available on request" },
  { icon: Bike, title: "Body Shop & Customs", sub: "Paint · PPF · Mods" },
  { icon: Star, title: "5.0 on Google", sub: "Nexgen AutoSpa Reviews", href: BUSINESS.googleReviewsUrl },
  { icon: MapPin, title: "Kurakkanni, Varkala", sub: "Easy to reach studio", href: BUSINESS.mapsQuery },
];

export default function TrustBar() {
  return (
    <section className="relative border-b border-white/[0.07] bg-carbon" aria-label="Why customers trust Nexgen">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {ITEMS.map((it) => {
              const Content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-ember transition-colors duration-300 group-hover:border-ember/50 group-hover:bg-ember-soft">
                    <it.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="font-display block text-[13px] font-bold tracking-wide text-bone transition-colors group-hover:text-ember">{it.title}</span>
                    <span className="mt-0.5 block text-xs text-silver">{it.sub}</span>
                  </span>
                </>
              );

              return it.href ? (
                <a
                  key={it.title}
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 transition-opacity hover:opacity-90"
                >
                  {Content}
                </a>
              ) : (
                <div key={it.title} className="group flex items-start gap-3">
                  {Content}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
      {/* marquee */}
      <div className="marquee-mask overflow-hidden border-t border-white/[0.07] bg-graphite/60 py-4">
        <div className="flex w-max animate-marquee gap-0 whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center" aria-hidden={n === 1}>
              {["CERAMIC COATING", "GRAPHENE PROTECTION", "INTERIOR DETAILING", "PREMIUM FOAM WASH", "ENGINE BAY DETAIL", "BIKE SPA", "PAINT & PPF"].map((t) => (
                <span key={t + n} className="font-display flex items-center text-[13px] font-semibold tracking-[0.3em] text-silver/80">
                  <span className="px-8">{t}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-ember/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
