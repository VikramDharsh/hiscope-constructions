import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ROLES, COMPANY } from "../data/site";

export default function Careers() {
  return (
    <div data-testid="careers-page" className="bg-brand-bg">
      <section className="border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold">
            Careers
          </p>
          <h1 className="font-display mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-brand-ink">
            Join<br />the build.
          </h1>
          <p className="mt-8 max-w-2xl text-brand-muted text-base lg:text-lg leading-relaxed">
            We hire people who treat construction as a craft — not a job site stop on the
            way to somewhere else. Full medical, union shop where applicable, and real
            career pathways from apprenticeship to project executive.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="bg-white border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { k: "0.6", v: "EMR Safety Rating" },
            { k: "94%", v: "5-Year Retention" },
            { k: "38%", v: "Promoted From Within" },
          ].map((s, i) => (
            <div
              key={s.v}
              data-testid={`careers-stat-${i}`}
              className={`p-8 md:p-10 ${i !== 0 ? "md:border-l border-brand-line" : ""}`}
            >
              <p className="font-display text-5xl md:text-6xl font-black tracking-tighter text-brand-ink">
                {s.k}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-brand-muted">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Open positions
              </p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-ink">
                Currently hiring.
              </h2>
            </div>
            <p className="text-sm text-brand-muted">
              {ROLES.length} open roles · Updated weekly
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="border-t border-brand-line"
            data-testid="roles-accordion"
          >
            {ROLES.map((r) => (
              <AccordionItem
                key={r.id}
                value={r.id}
                data-testid={`role-${r.id}`}
                className="border-b border-brand-line"
              >
                <AccordionTrigger className="py-8 hover:no-underline group">
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-left pr-6">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-brand-ink group-hover:text-brand-primary transition-colors">
                        {r.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-brand-muted">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> {r.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" /> {r.type}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2">
                    <div className="lg:col-span-7">
                      <p className="text-brand-muted leading-relaxed text-base">
                        {r.summary}
                      </p>
                      <p className="mt-8 text-xs uppercase tracking-[0.25em] text-brand-primary font-bold">
                        What we're looking for
                      </p>
                      <ul className="mt-4 space-y-2">
                        {r.requirements.map((req) => (
                          <li key={req} className="text-brand-ink text-sm flex gap-3">
                            <span className="text-brand-primary">→</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="bg-brand-ink text-white p-8">
                        <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-bold">
                          Apply
                        </p>
                        <p className="mt-4 text-white/80 text-sm leading-relaxed">
                          Send a resume and a short note about a project you're proud of.
                          No cover-letter template, please.
                        </p>
                        <a
                          href={`mailto:${COMPANY.contactEmails.hrConstructions}?subject=${encodeURIComponent(
                            "Application: " + r.title
                          )}`}
                          data-testid={`apply-${r.id}`}
                          className="group mt-6 inline-flex items-center gap-3 bg-brand-primary text-white px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-colors"
                        >
                          Email application
                          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-brand-line p-10 bg-white">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-ink">
                Don't see your role?
              </h3>
              <p className="mt-2 text-brand-muted max-w-md">
                We're always talking to strong superintendents, estimators, and craft
                trades. Send us a note.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="careers-general-cta"
              className="group inline-flex items-center gap-3 bg-brand-ink text-white px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-brand-primary transition-colors whitespace-nowrap"
            >
              Introduce yourself
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
