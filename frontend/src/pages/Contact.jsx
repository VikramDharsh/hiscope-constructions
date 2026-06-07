import React, { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin, ArrowUpRight, Building2, Cpu } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { toast } from "sonner";
import { COMPANY, SERVICES } from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const buildMailto = (toEmail, form) => {
  const subject = encodeURIComponent(
    `New inquiry from ${form.name || "—"}${
      form.service ? " · " + form.service : ""
    }`
  );
  const lines = [
    `Name: ${form.name || "—"}`,
    `Email: ${form.email || "—"}`,
    `Phone: ${form.phone || "—"}`,
    `Service Interest: ${form.service || "—"}`,
    "",
    "Message:",
    form.message || "—",
    "",
    "—",
    "Sent via hiscopeconstructions.com",
  ];
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${toEmail}?subject=${subject}&body=${body}`;
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }

    setSubmitting(true);
    try {
      // Persist a copy to MongoDB for our records (best-effort, non-blocking UX)
      axios
        .post(`${API}/contact`, {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          service: form.service || null,
          message: form.message.trim(),
        })
        .catch(() => {
          /* swallow — popup mailto is the primary path */
        });

      setPopupOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  const onMailtoChosen = () => {
    toast.success("Opening your email client…");
    setPopupOpen(false);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div data-testid="contact-page" className="bg-brand-bg">
      <section className="border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold">
            Contact
          </p>
          <h1 className="font-display mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-brand-ink">
            Let's<br />talk scope.
          </h1>
          <p className="mt-8 max-w-2xl text-brand-muted text-base lg:text-lg leading-relaxed">
            Tell us about your project — site, program, timeline, budget range — and we'll
            have a preconstruction lead back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left: contact info */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Direct line
              </p>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                data-testid="contact-phone-link"
                className="group mt-4 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-brand-ink group-hover:text-brand-primary transition-colors" />
                <span className="font-display text-3xl md:text-4xl font-bold text-brand-ink group-hover:text-brand-primary transition-colors">
                  {COMPANY.phone}
                </span>
              </a>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Email
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                data-testid="contact-email-link"
                className="group mt-4 inline-flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-brand-ink group-hover:text-brand-primary transition-colors" />
                <span className="font-display text-xl md:text-2xl font-bold text-brand-ink group-hover:text-brand-primary transition-colors break-all">
                  {COMPANY.email}
                </span>
              </a>
            </div>

            <div className="space-y-6">
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Offices
              </p>
              {COMPANY.offices.map((o) => (
                <div
                  key={o.country}
                  data-testid={`contact-office-${o.country.toLowerCase()}`}
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-brand-ink mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink">
                      {o.flag} {o.country} · {o.label}
                    </p>
                    <p className="mt-2 text-brand-ink leading-snug">
                      {o.lines.map((l, i) => (
                        <span key={i}>
                          {l}
                          {i < o.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-brand-muted">{COMPANY.hours}</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="bg-white border border-brand-line p-8 md:p-12 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink"
                  >
                    Full name *
                  </Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="rounded-none border-brand-line focus-visible:ring-brand-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    data-testid="input-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className="rounded-none border-brand-line focus-visible:ring-brand-primary h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    data-testid="input-phone"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+1 (555) 000-0000"
                    className="rounded-none border-brand-line focus-visible:ring-brand-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink">
                    Service interest
                  </Label>
                  <Select value={form.service} onValueChange={update("service")}>
                    <SelectTrigger
                      data-testid="select-service"
                      className="rounded-none border-brand-line h-12"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {SERVICES.map((s) => (
                        <SelectItem
                          key={s.id}
                          value={s.title}
                          data-testid={`service-option-${s.id}`}
                        >
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.2em] font-bold text-brand-ink"
                >
                  Project brief *
                </Label>
                <Textarea
                  id="message"
                  data-testid="input-message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Site, program, rough budget, timeline, any constraints we should know about."
                  rows={6}
                  className="rounded-none border-brand-line focus-visible:ring-brand-primary"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="submit-contact"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-brand-ink text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-brand-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Preparing…" : "Send message"}
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>

              <p className="text-xs text-brand-muted">
                Submitting opens your email client with the message ready to send. We
                also keep a copy for our records.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent
          data-testid="contact-popup"
          className="sm:max-w-lg rounded-none border-2 border-brand-ink p-0 gap-0"
        >
          <div className="bg-brand-ink text-white p-6">
            <DialogHeader className="space-y-3 text-left">
              <DialogTitle className="font-display text-2xl md:text-3xl uppercase tracking-tight">
                Choose a recipient
              </DialogTitle>
              <DialogDescription className="text-white/70 text-sm leading-relaxed">
                Your message is ready. Pick the team that fits — your email client will
                open with the details pre-filled.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 space-y-4 bg-white">
            <a
              href={buildMailto(COMPANY.contactEmails.hrConstructions, form)}
              onClick={onMailtoChosen}
              data-testid="popup-mailto-constructions"
              className="group flex items-start gap-4 border border-brand-line p-5 hover:border-brand-ink hover:bg-brand-bg transition-colors"
            >
              <div className="w-11 h-11 shrink-0 bg-brand-ink text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-primary">
                  Hiscope Constructions
                </p>
                <p className="font-display text-lg font-bold text-brand-ink mt-1 break-all">
                  {COMPANY.contactEmails.hrConstructions}
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Project inquiries · proposals · partnerships
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-brand-ink group-hover:text-brand-primary group-hover:rotate-45 transition-all" />
            </a>

            <a
              href={buildMailto(COMPANY.contactEmails.hrTechnologies, form)}
              onClick={onMailtoChosen}
              data-testid="popup-mailto-technologies"
              className="group flex items-start gap-4 border border-brand-line p-5 hover:border-brand-ink hover:bg-brand-bg transition-colors"
            >
              <div className="w-11 h-11 shrink-0 bg-brand-primary text-white flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-primary">
                  Hiscope Technologies
                </p>
                <p className="font-display text-lg font-bold text-brand-ink mt-1 break-all">
                  {COMPANY.contactEmails.hrTechnologies}
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Tech, automation & software collaboration
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-brand-ink group-hover:text-brand-primary group-hover:rotate-45 transition-all" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
