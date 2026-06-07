import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Ruler, Users, Check } from "lucide-react";
import { PROJECTS } from "../data/site";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const idx = PROJECTS.findIndex((p) => p.id === id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const meta = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Ruler, label: "Area", value: project.sqft },
    { icon: Users, label: "Client", value: project.client },
  ];

  return (
    <div data-testid="project-detail-page" className="bg-brand-bg">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
          <Link
            to="/projects"
            data-testid="back-to-projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-brand-primary text-xs uppercase tracking-[0.25em] font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> All projects
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 uppercase text-xs tracking-[0.3em] text-brand-primary font-bold"
          >
            {project.category} · {project.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-white text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] mt-5 max-w-5xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* META GRID */}
      <section className="bg-white border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-0">
          {meta.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                data-testid={`project-meta-${m.label.toLowerCase()}`}
                className={`p-6 md:p-8 ${
                  i !== 0 ? "md:border-l border-brand-line" : ""
                } ${i > 1 ? "border-t md:border-t-0 border-brand-line" : ""}`}
              >
                <Icon className="w-5 h-5 text-brand-primary" />
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-brand-muted">
                  {m.label}
                </p>
                <p className="mt-2 font-display text-xl md:text-2xl font-bold text-brand-ink">
                  {m.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SCOPE + HIGHLIGHTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
              Scope of work
            </p>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-brand-ink">
              How it came together
            </h2>
            <p className="mt-8 text-brand-muted leading-relaxed text-base lg:text-lg">
              {project.scope}
            </p>
            <p className="mt-4 text-brand-muted text-sm">
              Project duration: <span className="text-brand-ink font-medium">{project.duration}</span>
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-brand-ink text-white p-8 md:p-10">
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                Highlights
              </p>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                    <span className="text-white/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-y border-brand-line">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
              Gallery
            </p>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl font-bold tracking-tight uppercase text-brand-ink">
              On-site
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((src, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover border border-brand-line"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to={`/projects/${next.id}`}
            data-testid="next-project"
            className="group block border border-brand-line bg-white hover:bg-brand-ink transition-colors p-10 md:p-14"
          >
            <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
              Next project
            </p>
            <div className="mt-6 flex items-center justify-between flex-wrap gap-6">
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase text-brand-ink group-hover:text-white transition-colors">
                {next.title}
              </h3>
              <ArrowUpRight className="w-10 h-10 text-brand-ink group-hover:text-brand-primary group-hover:rotate-45 transition-all" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
