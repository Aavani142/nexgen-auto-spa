import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2, Phone } from "lucide-react";
import { BUSINESS, SERVICES, waLink } from "../data/site";
import { WhatsAppIcon } from "./icons";
import { cn } from "../utils/cn";

const LOCATIONS = ["Varkala", "Kurakkanni", "Ponnumthuruth", "Sreekaryam", "Attingal", "Kazhakkoottam", "Trivandrum", "Other (Kerala)"];
const VEHICLES = ["Hatchback", "Sedan", "SUV / MUV", "Luxury / Premium", "Bike / Scooter", "Other"];

type Errors = Partial<Record<"name" | "phone" | "location" | "requirement", string>>;

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "", vehicle: "", requirement: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [imgOk, setImgOk] = useState(true);
  const reduce = useReducedMotion();
  const firstField = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  // open shortly after every page load (desktop and mobile)
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // allow any "Book" trigger on the page to reopen it
  useEffect(() => {
    const onOpen = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener("nexgen:open-booking", onOpen);
    return () => window.removeEventListener("nexgen:open-booking", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstField.current?.focus(), 450);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, close]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er: Errors = {};
    if (form.name.trim().length < 2) er.name = "Please tell us your name.";
    if (form.phone.replace(/\D/g, "").length < 10) er.phone = "Enter a valid 10-digit mobile.";
    if (!form.location) er.location = "Where are you calling from?";
    if (!form.requirement) er.requirement = "Pick a service.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const msg =
      `Hi NEXGEN AUTO SPA! New enquiry from the website:\n` +
      `• Name: ${form.name}\n• Phone: ${form.phone}\n• Location: ${form.location}\n` +
      (form.vehicle ? `• Vehicle: ${form.vehicle}\n` : "") +
      `• Requirement: ${form.requirement}\n` +
      (form.message ? `• Note: ${form.message}` : "");
    setTimeout(() => {
      window.open(waLink(msg), "_blank", "noopener");
      setStatus("done");
    }, 800);
  };

  const inputCls = (bad?: string) =>
    cn(
      "w-full border bg-carbon px-3.5 py-3 text-sm text-bone placeholder:text-silver/45 outline-none transition-colors focus:border-ember",
      bad ? "border-red-500/70" : "border-white/12 hover:border-white/25"
    );

  const labelCls = "font-display mb-1.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-silver";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-carbon/85 p-3 backdrop-blur-md sm:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
        >
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92svh] w-full max-w-3xl overflow-y-auto overscroll-contain border border-white/10 bg-graphite shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:grid-cols-[0.85fr_1fr]"
          >
            <button
              onClick={close}
              aria-label="Close booking form"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-carbon/70 text-silver backdrop-blur transition-colors hover:border-ember hover:text-ember"
            >
              <X className="h-4 w-4" />
            </button>

            {/* image panel */}
            <div className="relative hidden overflow-hidden sm:block">
              {imgOk ? (
                <img
                  src="images/popup-panel.jpg"
                  onError={() => setImgOk(false)}
                  alt="Polished black car in a dark detailing studio"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <img
                  src="https://images.pexels.com/photos/6873190/pexels-photo-6873190.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Polished black car in a dark detailing studio"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" aria-hidden />
              <div className="relative flex h-full flex-col justify-end p-7">
                <p className="font-display text-2xl font-extrabold leading-tight tracking-tight text-bone">
                  Your Drive.
                  <br />
                  <span className="text-ember">Our Obsession.</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-silver">
                  Wax · Ceramic · Graphene · Borophene protection by Koch-Chemie, RUPES & GYEON.
                </p>
              </div>
            </div>

            {/* form panel */}
            <div className="p-6 sm:p-8">
              {status === "done" ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" strokeWidth={1.4} />
                  <h2 className="font-display mt-5 text-2xl font-bold text-bone">Enquiry ready!</h2>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-silver">
                    WhatsApp has opened with your details pre-filled — press send and our team will reply with
                    availability and a quote.
                  </p>
                  <div className="mt-7 flex flex-col gap-2.5">
                    <a
                      href={BUSINESS.phoneHref}
                      className="font-display inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-ember hover:text-ember"
                    >
                      <Phone className="h-4 w-4" /> Call instead
                    </a>
                    <button
                      onClick={close}
                      className="font-display inline-flex items-center justify-center gap-2 bg-bone px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ember hover:text-carbon"
                    >
                      Continue browsing
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-ember">Welcome to Nexgen</p>
                  <h2 id="welcome-title" className="font-display mt-2.5 text-2xl font-extrabold leading-tight tracking-tight text-bone sm:text-3xl">
                    Get your free<br className="hidden sm:block" /> detailing quote.
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-silver">
                    Tell us a little about your vehicle and we'll reply on WhatsApp with the right care plan.
                  </p>

                  <form onSubmit={submit} noValidate className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="w-name" className={labelCls}>Name *</label>
                        <input ref={firstField} id="w-name" type="text" autoComplete="name" placeholder="Enter your full name" value={form.name} onChange={set("name")} className={inputCls(errors.name)} aria-invalid={!!errors.name} />
                        {errors.name && <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="w-phone" className={labelCls}>Phone *</label>
                        <input id="w-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} className={inputCls(errors.phone)} aria-invalid={!!errors.phone} />
                        {errors.phone && <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="w-location" className={labelCls}>Your location *</label>
                        <select id="w-location" value={form.location} onChange={set("location")} className={cn(inputCls(errors.location), !form.location && "text-silver/45")} aria-invalid={!!errors.location}>
                          <option value="" disabled>Select area</option>
                          {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                        </select>
                        {errors.location && <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400"><AlertCircle className="h-3 w-3" />{errors.location}</p>}
                      </div>
                      <div>
                        <label htmlFor="w-vehicle" className={labelCls}>Vehicle</label>
                        <select id="w-vehicle" value={form.vehicle} onChange={set("vehicle")} className={cn(inputCls(), !form.vehicle && "text-silver/45")}>
                          <option value="" disabled>Select vehicle</option>
                          {VEHICLES.map((v) => <option key={v} value={v}>{v}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="w-req" className={labelCls}>What do you need? *</label>
                      <select id="w-req" value={form.requirement} onChange={set("requirement")} className={cn(inputCls(errors.requirement), !form.requirement && "text-silver/45")} aria-invalid={!!errors.requirement}>
                        <option value="" disabled>Choose a service</option>
                        {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                        <option value="Not sure — advise me">Not sure — advise me</option>
                      </select>
                      {errors.requirement && <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400"><AlertCircle className="h-3 w-3" />{errors.requirement}</p>}
                    </div>
                    <div>
                      <label htmlFor="w-msg" className={labelCls}>
                        Message <span className="font-medium normal-case tracking-normal text-silver/45">(optional)</span>
                      </label>
                      <textarea id="w-msg" rows={2} placeholder="Model, preferred date, anything else…" value={form.message} onChange={set("message")} className={cn(inputCls(), "resize-none")} />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="font-display group flex w-full items-center justify-center gap-2.5 bg-ember px-5 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.14em] text-carbon transition-colors hover:bg-ember-deep disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Preparing…</>
                      ) : (
                        <><WhatsAppIcon className="h-4 w-4" /> Send enquiry <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></>
                      )}
                    </button>

                    <div className="flex items-center justify-between gap-3">
                      <button type="button" onClick={close} className="text-[11px] font-medium text-silver/70 underline underline-offset-4 transition-colors hover:text-bone">
                        No thanks, just browsing
                      </button>
                      <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 text-[11px] font-bold text-bone transition-colors hover:text-ember">
                        <Phone className="h-3 w-3" /> {BUSINESS.phoneDisplay}
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
