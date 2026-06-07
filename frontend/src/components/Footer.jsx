import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "../data/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-brand-ink text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
              Start a conversation
            </p>
            <h2 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.95]">
              Let's build<br />something<br />that lasts.
            </h2>
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="group inline-flex items-center gap-3 mt-10 bg-brand-primary text-white px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-brand-ink transition-colors"
            >
              Request a proposal
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-5">Navigate</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    data-testid={`footer-nav-${n.label.toLowerCase()}`}
                    className="text-lg hover:text-brand-primary transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-white/50 mb-3">Direct</p>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                data-testid="footer-phone"
                className="block text-white/90 hover:text-brand-primary transition-colors"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                data-testid="footer-email"
                className="block text-white/90 hover:text-brand-primary transition-colors break-all"
              >
                {COMPANY.email}
              </a>
              <p className="text-white/60 text-sm mt-2">{COMPANY.hours}</p>
            </div>
            <div className="flex gap-4">
              {COMPANY.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-brand-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {COMPANY.offices.map((o) => (
            <div key={o.country} data-testid={`footer-office-${o.country.toLowerCase()}`}>
              <p className="uppercase text-xs tracking-[0.25em] text-brand-primary font-bold">
                {o.flag} {o.country} · {o.label}
              </p>
              <p className="mt-4 text-white/90 leading-relaxed">
                {o.lines.map((l, i) => (
                  <span key={i}>
                    {l}
                    {i < o.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 overflow-hidden">
        <Marquee speed={60} gradient={false} className="py-8">
          <span className="font-display text-[18vw] leading-none font-black tracking-tighter uppercase px-8 hiscope-outline-white">
            HISCOPE · CONSTRUCTIONS · BUILDING THE IMPOSSIBLE ·&nbsp;
          </span>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50 uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p>Est. {COMPANY.founded}</p>
      </div>
    </footer>
  );
}
