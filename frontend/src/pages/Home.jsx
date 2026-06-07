import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, HardHat, Building2, Factory, Ruler } from "lucide-react";
import { COMPANY, MEDIA, SERVICES, PROJECTS } from "../data/site";

const stats = [
  { value: "22+", label: "Years Building" },
  { value: "340", label: "Projects Delivered" },
  { value: "180", label: "Skilled Crew" },
  { value: "0.6", label: "EMR Safety Rating" },
];

const serviceIcons = {
  residential: HardHat,
  commercial: Building2,
  industrial: Factory,
  "design-build": Ruler,
};

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={MEDIA.hero}
          alt="Hiscope construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold"
          >
            Hiscope Constructions · Est. {COMPANY.founded}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-white text-5xl sm:text-7xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.9] mt-6 max-w-5xl"
          >
            Building<br />the impossible.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl"
          >
            <p className="text-white/85 text-base lg:text-lg leading-relaxed max-w-xl">
              {COMPANY.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              data-testid="hero-cta-projects"
              className="group inline-flex items-center gap-3 bg-brand-primary text-white px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-colors"
            >
              See Our Work
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-colors"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-brand-ink text-white overflow-hidden border-y border-brand-ink">
        <Marquee speed={50} gradient={false} className="py-6">
          <span className="font-display text-3xl md:text-4xl font-black tracking-tight uppercase px-8">
            Residential
          </span>
          <span className="text-brand-primary text-3xl md:text-4xl px-4">✦</span>
          <span className="font-display text-3xl md:text-4xl font-black tracking-tight uppercase px-8">
            Commercial
          </span>
          <span className="text-brand-primary text-3xl md:text-4xl px-4">✦</span>
          <span className="font-display text-3xl md:text-4xl font-black tracking-tight uppercase px-8">
            Industrial
          </span>
          <span className="text-brand-primary text-3xl md:text-4xl px-4">✦</span>
          <span className="font-display text-3xl md:text-4xl font-black tracking-tight uppercase px-8">
            Design-Build
          </span>
          <span className="text-brand-primary text-3xl md:text-4xl px-4">✦</span>
          <span className="font-display text-3xl md:text-4xl font-black tracking-tight uppercase px-8">
            Preconstruction
          </span>
          <span className="text-brand-primary text-3xl md:text-4xl px-4">✦</span>
        </Marquee>
      </section>

      {/* STATS */}
      <section className="bg-brand-bg border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-testid={`stat-${i}`}
              className={`p-6 md:p-10 ${
                i !== 0 ? "md:border-l border-brand-line" : ""
              } ${i > 1 ? "border-t md:border-t-0 border-brand-line" : ""}`}
            >
              <p className="font-display text-5xl md:text-6xl font-black tracking-tighter text-brand-ink">
                {s.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-brand-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                What we do
              </p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-ink">
                A full-stack<br />construction firm.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-brand-muted leading-relaxed">
                From preconstruction estimating to final punchlist, Hiscope delivers four
                disciplines under one integrated team. No finger-pointing between
                consultants. No gaps in accountability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-line border border-brand-line">
            {SERVICES.map((svc) => {
              const Icon = serviceIcons[svc.id] || Building2;
              return (
                <Link
                  key={svc.id}
                  to="/services"
                  data-testid={`home-service-${svc.id}`}
                  className="group bg-white p-10 md:p-12 flex flex-col justify-between min-h-[320px] relative overflow-hidden transition-colors hover:bg-brand-ink"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm tracking-widest text-brand-muted group-hover:text-brand-primary transition-colors">
                        {svc.no}
                      </span>
                      <Icon className="w-6 h-6 text-brand-ink group-hover:text-brand-primary transition-colors" />
                    </div>
                    <h3 className="font-display mt-8 text-3xl md:text-4xl font-bold tracking-tight text-brand-ink group-hover:text-white transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mt-4 text-brand-muted group-hover:text-white/70 transition-colors max-w-md">
                      {svc.short}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-brand-ink group-hover:text-brand-primary transition-colors">
                    Explore service
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="bg-white py-24 md:py-32 border-y border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Selected work
              </p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-ink">
                Recent Projects
              </h2>
            </div>
            <Link
              to="/projects"
              data-testid="home-projects-all"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-brand-ink hover:text-brand-primary"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                data-testid={`home-project-${p.id}`}
                className="group block"
              >
                <div className="overflow-hidden border border-brand-line">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-bold">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-brand-ink mt-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-brand-muted mt-1">{p.location}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-brand-ink group-hover:rotate-45 group-hover:text-brand-primary transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
