import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "../data/site";

export default function Services() {
  return (
    <div data-testid="services-page" className="bg-brand-bg">
      <section className="border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold">
            Services
          </p>
          <h1 className="font-display mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-brand-ink">
            What we<br />build.
          </h1>
          <p className="mt-8 max-w-2xl text-brand-muted text-base lg:text-lg leading-relaxed">
            Four integrated disciplines, delivered by one accountable team. Preconstruction
            through closeout, under a single contract — so the right decisions happen at
            the right moments.
          </p>
        </div>
      </section>

      {SERVICES.map((svc, i) => (
        <section
          key={svc.id}
          data-testid={`service-section-${svc.id}`}
          className={`py-24 md:py-32 border-b border-brand-line ${
            i % 2 === 0 ? "bg-white" : "bg-brand-bg"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src={svc.image}
                alt={svc.title}
                className="w-full aspect-[4/5] object-cover border border-brand-line"
              />
            </div>
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-display text-sm tracking-widest text-brand-primary font-bold">
                {svc.no}
              </p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold tracking-tight uppercase text-brand-ink">
                {svc.title}
              </h2>
              <p className="mt-6 text-brand-muted leading-relaxed text-base lg:text-lg">
                {svc.long}
              </p>

              <ul className="mt-10 space-y-4">
                {svc.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-4 border-b border-brand-line pb-4"
                  >
                    <Check className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                    <span className="text-brand-ink">{d}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                data-testid={`service-cta-${svc.id}`}
                className="group mt-10 inline-flex items-center gap-3 bg-brand-ink text-white px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-brand-primary transition-colors"
              >
                Discuss a {svc.title.split(" ")[0].toLowerCase()} project
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
