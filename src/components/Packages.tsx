import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { inr, waLink } from "../data/site";
import { Reveal, Eyebrow } from "./ui";

const WAX_SERVICES = [
  { name: "Standard Wax", price: 4999, durability: "3 Months", desc: "Instant gloss revival and basic hydrophobic protection." },
  { name: "Ceramic Wax", price: 7999, durability: "1 Year", desc: "Infused with Ceramic SiO2 for deeper gloss, UV resistance, and durable water beading." },
];

const CERAMIC_PACKAGES = [
  { name: "Ceramic Shield", price: 17999, durability: "2 Years", desc: "Essential multi-layer Ceramic protection against daily wear, dust, and oxidation." },
  { name: "Ceramic Armor", price: 23999, durability: "3 Years", desc: "Enhanced multi-stage coating with deeper gloss, slickness, and chemical resistance." },
  { name: "Ceramic Titan", price: 29999, durability: "5 Years", desc: "Maximum Ceramic shield with ultra-hard SiO2 matrix for long-term paint preservation.", popular: true },
];

const ADVANCED_COATINGS = [
  {
    name: "Graphene Elite",
    price: 35999,
    durability: "7 Years",
    desc: "Advanced Graphene oxide matrix providing superior heat dissipation, reduced water spotting, and extreme surface slickness.",
    badge: "High Heat Defence",
  },
  {
    name: "Borophene Ultimate",
    price: 41999,
    durability: "9 Years",
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
    desc: "Globally acclaimed quartz and Graphene Coating chemistry tested under extreme climates.",
  },
  {
    brand: "CARPRO",
    origin: "International",
    role: "Coatings & Detailing Care",
    desc: "Makers of CQUARTZ Ceramic Coatings, plus washing, decontamination and paint-prep care trusted by detailers worldwide.",
  },
  {
    brand: "Kovalent Coatings",
    origin: "Australia",
    role: "Professional Coating Systems",
    desc: "Advanced paint protection coatings engineered for durability, gloss and long-lasting performance.",
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
              Give your car a lasting shine and premium protection with our professional Paint
              Correction and Coating services. We use premium international products and advanced
              detailing techniques to enhance your vehicle's appearance, restore its gloss, and
              protect its paintwork.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-2 text-xs font-semibold text-ember sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Prices shown are for hatchbacks and vary by vehicle size.
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
                  <div className="sm:text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-silver">Starting from</span>
                    <p className="font-display text-2xl font-extrabold tabular-nums text-bone">
                      ₹{inr(it.price)}
                    </p>
                  </div>
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
                  <div className="sm:text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-silver">Starting from</span>
                    <p className="font-display text-2xl font-extrabold tabular-nums text-bone">
                      ₹{inr(it.price)}
                    </p>
                  </div>
                  <div className="sm:justify-self-end">
                    <a
                      href={waLink(`Hi NEXGEN AUTO SPA! I would like to book "${it.name}" Ceramic Coating (${it.durability} protection, ₹${inr(it.price)}). My vehicle is: `)}
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
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-silver">Starting from</span>
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.brand} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-graphite/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40 hover:bg-graphite">
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
                  <span className="self-start whitespace-nowrap rounded-full border border-ember/30 bg-ember/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-ember">
                    {p.origin}
                  </span>
                  <h4 className="font-display mt-4 text-2xl font-black leading-tight tracking-tight text-bone">{p.brand}</h4>
                  <p className="mt-3 border-l-2 border-ember/60 pl-3 text-xs font-semibold uppercase tracking-[0.08em] text-bone/80">
                    {p.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-silver">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
