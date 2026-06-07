import React from "react";
import { motion } from "framer-motion";
import { MEDIA, VALUES, TEAM, COMPANY } from "../data/site";

export default function About() {
  return (
    <div data-testid="about-page" className="bg-brand-bg">
      {/* HEADER */}
      <section className="border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="uppercase text-xs tracking-[0.3em] text-brand-primary font-bold">
            About Hiscope
          </p>
          <h1 className="font-display mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-brand-ink">
            Built by<br />builders.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32 border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src={MEDIA.aboutStory}
              alt="Hiscope field team reviewing plans"
              className="w-full aspect-[4/5] object-cover border border-brand-line"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
              Our story
            </p>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold tracking-tight uppercase text-brand-ink">
              Two decades. Three generations of builders. One obsession: structure done right.
            </h2>
            <div className="mt-8 space-y-5 text-brand-muted leading-relaxed text-base lg:text-lg">
              <p>
                Hiscope Construction was founded in {COMPANY.founded} by Marcus Ashton, a
                third-generation concrete foreman who was tired of watching projects fail
                from avoidable mistakes: rushed estimates, disconnected subs, value
                engineering at the wrong moments.
              </p>
              <p>
                We started with a single commercial tenant improvement. Twenty-two years
                later we deliver {COMPANY.projectsCompleted}+ projects across residential,
                commercial, and industrial work — but the obsession is the same. Every
                line on the drawing set gets built the way the architect drew it, or we
                raise our hand before concrete flies.
              </p>
              <p>
                Today Hiscope is {COMPANY.skilledWorkers}+ people strong — superintendents,
                estimators, PMs, carpenters, equipment operators — all in on a simple
                idea: the most important building on our schedule is the one we're
                standing on right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-white border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                What we stand on
              </p>
              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-ink">
                Four load-bearing values.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-line border border-brand-line">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`value-${v.title.toLowerCase()}`}
                className="bg-white p-10 md:p-14"
              >
                <p className="font-display text-sm tracking-widest text-brand-primary font-bold">
                  {v.no}
                </p>
                <h3 className="font-display mt-6 text-3xl md:text-4xl font-bold text-brand-ink">
                  {v.title}
                </h3>
                <p className="mt-5 text-brand-muted leading-relaxed max-w-md">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
            Leadership
          </p>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-ink">
            The people in the trailer.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            {TEAM.map((m) => (
              <div key={m.name} data-testid={`team-${m.name.split(" ")[0].toLowerCase()}`}>
                <div className="aspect-[4/5] overflow-hidden border border-brand-line grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display mt-6 text-2xl font-bold text-brand-ink">
                  {m.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-muted mt-1">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
