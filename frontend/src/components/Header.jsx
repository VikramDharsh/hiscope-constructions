import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, COMPANY } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-brand-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="site-logo"
          className="font-display font-black text-lg md:text-xl tracking-tight uppercase text-brand-ink leading-none"
        >
          Hiscope<span className="text-brand-primary">·</span>Constructions
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.18em] font-medium transition-colors ${
                  isActive ? "text-brand-primary" : "text-brand-ink hover:text-brand-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="header-cta"
            className="group inline-flex items-center gap-2 bg-brand-ink text-white px-5 py-3 text-sm uppercase tracking-[0.18em] font-medium hover:bg-brand-primary transition-colors"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-brand-ink text-brand-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-white border-t border-brand-line"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base uppercase tracking-[0.18em] font-medium ${
                    isActive ? "text-brand-primary" : "text-brand-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              data-testid="mobile-phone"
              className="text-sm text-brand-muted mt-2"
            >
              {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
