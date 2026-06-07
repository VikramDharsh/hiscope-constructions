import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "../data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div data-testid="projects-page" className="bg-brand-bg">
      <section className="border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold">
            Selected projects
          </p>
          <h1 className="font-display mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-brand-ink">
            Our<br />portfolio.
          </h1>
          <p className="mt-8 max-w-2xl text-brand-muted text-base lg:text-lg leading-relaxed">
            A sample of recent work across commercial, residential, and industrial
            divisions. Every project below was delivered under a signed GMP or lump-sum
            contract, on or ahead of schedule.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`filter-${f.toLowerCase()}`}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.25em] font-bold border transition-colors ${
                  active
                    ? "bg-brand-ink text-white border-brand-ink"
                    : "bg-transparent text-brand-ink border-brand-line hover:border-brand-ink"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, idx) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  data-testid={`project-${p.id}`}
                  className="group"
                >
                  <Link to={`/projects/${p.id}`} className="block">
                    <div className="overflow-hidden border border-brand-line bg-white">
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
                        <p className="text-sm text-brand-muted mt-1">
                          {p.location} · {p.sqft}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-brand-ink group-hover:rotate-45 group-hover:text-brand-primary transition-all" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-brand-muted py-16">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
