import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { BUSINESS, waLink } from "../data/site";
import { Reveal, SectionHeading } from "./ui";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { cn } from "../utils/cn";

const VEHICLES = ["Hatchback / Sedan", "SUV / MUV", "Luxury / Premium", "Bike / Scooter", "Other"];
const INTERESTS = ["Premium Foam Wash", "Interior Deep Cleaning", "Exterior Detailing / Polish", "Ceramic / Graphene Coating", "Engine Bay Detailing", "Painting / PPF / Body Shop", "Bike Detailing / Service", "Not sure — need advice"];

type Errors = Partial<Record<"name" | "phone" | "vehicle" | "service", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", vehicle: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = (): boolean => {
    const er: Errors = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) er.phone = "Enter a valid 10-digit mobile number.";
    if (!form.vehicle) er.vehicle = "Select your vehicle type.";
    if (!form.service) er.service = "Choose a service.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const msg = `Hi NEXGEN AUTO SPA! New booking enquiry:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Vehicle: ${form.vehicle}\n• Service: ${form.service}${form.message ? `\n• Note: ${form.message}` : ""}\nPlease confirm a slot. Thank you!`;
    setTimeout(() => {
      window.open(waLink(msg), "_blank", "noopener");
      setStatus("done");
    }, 900);
  };

  const inputCls = (bad?: string) =>
    cn(
      "w-full border bg-carbon/60 px-4 py-3.5 text-sm text-bone placeholder:text-silver/50 outline-none transition-all focus:border-ember",
      bad ? "border-red-500/70" : "border-white/12 hover:border-white/25"
    );

  return (
    <section id="contact" className="relative bg-carbon py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Visit / Book"
          title={<>Find us in <span className="text-ember">Varkala.</span></>}
          desc="Drop in, call, or send a WhatsApp enquiry — booking takes less than a minute."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: info + map */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href={BUSINESS.phoneHref} className="group border border-white/[0.09] bg-graphite/70 p-6 transition-all hover:border-ember/50">
                  <Phone className="h-5 w-5 text-ember" strokeWidth={1.8} />
                  <p className="font-display mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-silver">Call the studio</p>
                  <p className="font-display mt-1.5 text-lg font-bold text-bone group-hover:text-ember">{BUSINESS.phoneDisplay}</p>
                  <p className="mt-1 text-xs text-silver">Tap to call now</p>
                </a>
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="group border border-white/[0.09] bg-graphite/70 p-6 transition-all hover:border-ember/50">
                  <WhatsAppIcon className="h-5 w-5 text-ember" />
                  <p className="font-display mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-silver">WhatsApp</p>
                  <p className="font-display mt-1.5 text-lg font-bold text-bone group-hover:text-ember">Chat & Book</p>
                  <p className="mt-1 text-xs text-silver">Fast replies, 9 AM – 8 PM</p>
                </a>
                <div className="border border-white/[0.09] bg-graphite/70 p-6">
                  <MapPin className="h-5 w-5 text-ember" strokeWidth={1.8} />
                  <p className="font-display mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-silver">Studio address</p>
                  <p className="mt-1.5 text-sm font-semibold leading-relaxed text-bone">{BUSINESS.address}</p>
                </div>
                <div className="border border-white/[0.09] bg-graphite/70 p-6">
                  <Clock className="h-5 w-5 text-ember" strokeWidth={1.8} />
                  <p className="font-display mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-silver">Hours</p>
                  <p className="font-display mt-1.5 text-sm font-bold text-bone">{BUSINESS.hours}</p>
                  <p className="mt-1 text-xs text-silver">Walk-ins welcome · Booking advised</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden border border-white/[0.09]">
                <iframe
                  title="Nexgen Auto Spa location map — Varkala"
                  src={BUSINESS.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full grayscale-[35%] contrast-[1.05] sm:h-[340px]"
                />
                <div className="flex flex-col gap-3 bg-graphite p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-silver">
                    <span className="font-display font-bold text-bone">NEXGEN AUTO SPA</span> · Kurakkanni, Varkala
                  </p>
                  <div className="flex gap-2.5">
                    <a
                      href={BUSINESS.mapsQuery}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-2 bg-bone px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ember hover:text-carbon"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Directions
                    </a>
                    <a
                      href={BUSINESS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display inline-flex items-center gap-2 border border-white/15 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-ember hover:text-ember"
                    >
                      <InstagramIcon className="h-3.5 w-3.5" /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <div className="relative h-full border border-white/[0.09] bg-graphite/70 p-7 sm:p-10">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-ember via-ember/50 to-transparent" aria-hidden />
              <h3 className="font-display text-2xl font-bold tracking-tight text-bone">Request a callback & quote</h3>
              <p className="mt-2 text-sm text-silver">Fill this in — we'll open WhatsApp with your enquiry ready to send.</p>

              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 rounded-sm border border-emerald-500/25 bg-emerald-500/[0.07] p-8 text-center"
                  >
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" strokeWidth={1.5} />
                    <h4 className="font-display mt-4 text-xl font-bold text-bone">Enquiry ready on WhatsApp!</h4>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-silver">
                      We've opened WhatsApp with your details pre-filled — just press send. Prefer to talk? Call us on{" "}
                      <a href={BUSINESS.phoneHref} className="font-bold text-bone hover:text-ember">{BUSINESS.phoneDisplay}</a>.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", vehicle: "", service: "", message: "" }); }}
                      className="font-display mt-6 border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-ember hover:text-ember"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    noValidate
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cf-name" className="font-display mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                          Your name *
                        </label>
                        <input id="cf-name" type="text" autoComplete="name" placeholder="Enter your full name" value={form.name} onChange={set("name")} className={inputCls(errors.name)} aria-invalid={!!errors.name} />
                        {errors.name && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="cf-phone" className="font-display mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                          Phone number *
                        </label>
                        <input id="cf-phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} className={inputCls(errors.phone)} aria-invalid={!!errors.phone} />
                        {errors.phone && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cf-vehicle" className="font-display mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                          Vehicle type *
                        </label>
                        <select id="cf-vehicle" value={form.vehicle} onChange={set("vehicle")} className={cn(inputCls(errors.vehicle), !form.vehicle && "text-silver/50")} aria-invalid={!!errors.vehicle}>
                          <option value="" disabled>Select vehicle</option>
                          {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                        {errors.vehicle && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400"><AlertCircle className="h-3 w-3" />{errors.vehicle}</p>}
                      </div>
                      <div>
                        <label htmlFor="cf-service" className="font-display mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                          Service needed *
                        </label>
                        <select id="cf-service" value={form.service} onChange={set("service")} className={cn(inputCls(errors.service), !form.service && "text-silver/50")} aria-invalid={!!errors.service}>
                          <option value="" disabled>Select service</option>
                          {INTERESTS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400"><AlertCircle className="h-3 w-3" />{errors.service}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cf-msg" className="font-display mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-silver">
                        Message <span className="font-medium normal-case tracking-normal text-silver/50">(optional)</span>
                      </label>
                      <textarea id="cf-msg" rows={3} placeholder="Vehicle model, preferred date, or anything we should know…" value={form.message} onChange={set("message")} className={cn(inputCls(), "resize-none")} />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="font-display group flex w-full items-center justify-center gap-2.5 bg-ember px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-carbon transition-all hover:bg-ember-deep disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Preparing WhatsApp…</>
                      ) : (
                        <><Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> Send via WhatsApp</>
                      )}
                    </button>
                    <p className="text-center text-[11px] leading-relaxed text-silver/60">
                      No spam, no pressure. Your details go straight to the Nexgen team for this enquiry only.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
