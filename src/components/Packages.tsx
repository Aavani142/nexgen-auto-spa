import { ArrowUpRight, ShieldCheck, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { COATING_MAINTENANCE, inr, waLink } from "../data/site";
import { Reveal, Eyebrow } from "./ui";

const WAX_SERVICES = [
  { name: "Normal Wax", price: 4999, durability: "3 Months", desc: "Instant gloss revival and basic hydrophobic protection." },
  { name: "Ceramic Wax", price: 7999, durability: "1 Year", desc: "Infused with ceramic SiO2 for deeper gloss, UV resistance, and durable water beading." },
];

const CERAMIC_PACKAGES = [
  { name: "Ceramic Coating", price: 17999, durability: "2 Years", desc: "Essential multi-layer ceramic protection against daily wear, dust, and oxidation." },
  { name: "Ceramic Coating", price: 23999, durability: "3 Years", desc: "Enhanced multi-stage coating with deeper gloss, slickness, and chemical resistance.", popular: true },
  { name: "Ceramic Coating", price: 29999, durability: "5 Years", desc: "Maximum ceramic shield with ultra-hard SiO2 matrix for long-term paint preservation." },
];

const ADVANCED_COATINGS = [
  {
    name: "Graphene Coating",
    price: 26999,
    durability: "4 Years",
    desc: "Advanced graphene oxide matrix providing superior heat dissipation, reduced water spotting, and extreme surface slickness.",
    badge: "High Heat Defence",
  },
  {
    name: "Borophene Coating",
    price: 32999,
    durability: "5 Years",
    desc: "Next-generation 2D nanomaterial coating delivering unmatched surface hardness, optical clarity, and ultimate paint resilience.",
    badge: "Flagship Protection",
  },
];

const PRODUCTS = [
  {
    brand: "Koch Chemie",
    origin: "Germany",
    role: "Compounds, Polishes & Finish Chemistry",
    desc: "World-class German polishing compounds and surface prep systems for swirl-free clarity.",
  },
  {
    brand: "RUPES",
    origin: "Italy",
    role: "BigFoot Machine Technology & Pads",
    desc: "Precision dual-action machine polishing delivering uniform surface levelling without holograms.",
  },
  {
    brand: "GYEON",
    origin: "South Korea",
    role: "Advanced Quartz Coating Systems",
    desc: "Globally acclaimed quartz and graphene coating chemistry tested under extreme climates.",
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
      {/* Background outline watermark */}
      <div className="pointer-events-none absolute right-0 top-12 select-none overflow-hidden" aria-hidden>
        <p className="font-display whitespace-nowrap text-[14vw] font-extrabold leading-none tracking-tighter text-white/[0.02]">
          PROTECTION
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Protection & Paint Correction</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Paint Correction &amp; Protection Services
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-silver sm:text-lg">
              Give your car a lasting shine and premium protection with our professional paint
              correction and coating services. We use premium international products and advanced
              detailing techniques to enhance your vehicle's appearance, restore its gloss, and
              protect its paintwork.
            </p>
          </Reveal>
        </div>

        {/* 1. Wax Protection */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-ember">
                  Category 01
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-bone sm:text-3xl">
                  1. Wax Protection
                </h3>
              </div>
              <span className="hidden text-xs text-silver sm:block">Entry protection &amp; instant gloss</span>
            </div>
          </Reveal>

          <div className="mt-6 divide-y divide-white/[0.08] border-b border-white/[0.08]">
            {WAX_SERVICES.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.08}>
                <div className="group relative grid grid-cols-1 items-center gap-4 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-[1.6fr_1fr_auto_1.2fr] sm:px-4">
                  <span className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-ember transition-transform group-hover:scale-y-100" aria-hidden />
                  <div>
                    <h4 className="font-display text-xl font-bold text-bone">{it.name}</h4>
                    <p className="mt-1 text-xs text-silver">{it.desc}</p>
                  </div>
                  <div>
                    <span className="font-display inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-bone">
                      <ShieldCheck className="h-3.5 w-3.5 text-ember" />
                      {it.durability}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-extrabold tabular-nums text-bone sm:text-right">
                    ₹{inr(it.price)}
                  </p>
                  <div className="sm:justify-self-end">
                    <a
                      href={waLink(`Hi NEXGEN AUTO SPA! I would like to book "${it.name}" (₹${inr(it.price)}, ${it.durability} durability). My vehicle is: `)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-1.5 border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-bone transition-all hover:border-ember hover:bg-ember hover:text-carbon"
                    >
                      Book on WhatsApp
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. Ceramic Coating */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex flex-col gap-2 border-b border-white/15 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-ember">
                  Category 02
                </p>
                <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-bone sm:text-3xl">
                  2. Ceramic Coating
                </h3>
              </div>
              <p className="text-xs text-silver sm:max-w-md sm:text-right">
                Long-lasting paint protection with enhanced gloss, a smooth finish, and easier maintenance.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 divide-y divide-white/[0.08] border-b border-white/[0.08]">
            {CERAMIC_PACKAGES.map((it, i) => (
              <Reveal key={it.name + it.durability} delay={i * 0.08}>
                <div className="group relative grid grid-cols-1 items-center gap-4 py-6 transition-colors hover:bg-white/[0.02] sm:grid-cols-[1.6fr_1fr_auto_1.2fr] sm:px-4">
                  <span className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-ember transition-transform group-hover:scale-y-100" aria-hidden />
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-display text-xl font-bold text-bone">{it.name}</h4>
                      {it.popular && (
                        <span className="rounded-full bg-ember px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-carbon">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-silver">{it.desc}</p>
                  </div>
                  <div>
                    <span className="font-display inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-bone">
                      <ShieldCheck className="h-3.5 w-3.5 text-ember" />
                      {it.durability}
                    </span>
                  </div>
                  <p className="font-display text-2xl font-extrabold tabular-nums text-bone sm:text-right">
                    ₹{inr(it.price)}
                  </p>
                  <div className="sm:justify-self-end">
                    <a
                      href={waLink(`Hi NEXGEN AUTO SPA! I would like to book Ceramic Coating (${it.durability} protection, ₹${inr(it.price)}). My vehicle is: `)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-1.5 border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-bone transition-all hover:border-ember hover:bg-ember hover:text-carbon"
                    >
                      Book on WhatsApp
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3. Advanced Coating Protection */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="border-b border-white/15 pb-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-ember">
                Category 03
              </p>
              <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-bone sm:text-3xl">
                3. Advanced Coating Protection
              </h3>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {ADVANCED_COATINGS.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.1}>
                <div className="relative flex h-full flex-col justify-between border border-white/10 bg-graphite/60 p-7 transition-all duration-300 hover:border-ember/50 hover:bg-graphite">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-ember/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ember">
                        {it.badge}
                      </span>
                      <span className="font-display inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-bone">
                        <ShieldCheck className="h-3.5 w-3.5 text-ember" />
                        {it.durability}
                      </span>
                    </div>

                    <h4 className="font-display mt-5 text-2xl font-bold tracking-tight text-bone">
                      {it.name}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-silver">
                      {it.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-baseline justify-between border-t border-white/10 pt-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-silver">Price</span>
                      <p className="font-display text-3xl font-extrabold text-bone">
                        ₹{inr(it.price)}
                      </p>
                    </div>
                    <a
                      href={waLink(`Hi NEXGEN AUTO SPA! I would like to book "${it.name}" (₹${inr(it.price)}, ${it.durability} durability). My vehicle is: `)}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-1.5 bg-ember px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ember-deep"
                    >
                      Book Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Premium International Products */}
        <div className="mt-20">
          <Reveal>
            <div className="border-b border-white/15 pb-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-ember">
                Studio Standards
              </p>
              <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-bone sm:text-3xl">
                Premium International Products
              </h3>
              <p className="mt-2 text-sm text-silver">
                We use premium products from globally recognised detailing brands:
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.brand} delay={i * 0.1}>
                <div className="group h-full border border-white/10 bg-graphite/40 p-6 transition-all hover:border-ember/40 hover:bg-graphite">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-display text-xl font-black text-bone">{p.brand}</h4>
                    <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ember">
                      {p.origin}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-silver/80">{p.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-silver">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Important: Long-Term Maintenance & Care */}
        <div className="mt-16">
          <Reveal>
            <div className="relative overflow-hidden border border-ember/30 bg-graphite/70 p-7 sm:p-10">
              <div className="absolute left-0 top-0 h-1 w-full bg-ember" aria-hidden />

              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                  <Wrench className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="flex-1">
                  <h4 className="font-display text-2xl font-bold tracking-tight text-bone sm:text-3xl">
                    {COATING_MAINTENANCE.title}
                  </h4>
                  <p className="mt-2 text-sm font-medium text-silver sm:text-base">
                    {COATING_MAINTENANCE.lead}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {COATING_MAINTENANCE.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 rounded-sm border border-white/10 bg-carbon/50 p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                        <p className="text-xs leading-relaxed text-silver">{pt}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                    <p className="font-display text-base font-bold tracking-tight text-bone sm:text-lg">
                      <Sparkles className="mr-2 inline h-4 w-4 text-ember" />
                      {COATING_MAINTENANCE.motto}
                    </p>
                    <a
                      href={waLink("Hi NEXGEN AUTO SPA! I have a question regarding coating maintenance or booking a 6-month inspection.")}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-1.5 bg-ember px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ember-deep"
                    >
                      Enquire on Maintenance
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
