import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Hiscope Constructions — Building The Impossible";
const DEFAULT_DESC =
  "Hiscope Constructions delivers high-integrity residential, commercial and industrial construction across the USA and India. Two decades. 340+ projects.";

const PAGE_META = {
  "/": {
    title: "Hiscope Constructions — Building The Impossible",
    description: DEFAULT_DESC,
  },
  "/about": {
    title: "About — Hiscope Constructions",
    description:
      "Built by builders. 22 years, 340+ projects, three generations of construction craft. Meet the team behind Hiscope Constructions.",
  },
  "/services": {
    title: "Services — Hiscope Constructions",
    description:
      "Residential, commercial, industrial and design-build construction services delivered by an integrated team — preconstruction through closeout.",
  },
  "/projects": {
    title: "Projects — Hiscope Constructions",
    description:
      "Selected commercial, residential, and industrial projects delivered by Hiscope Constructions in the USA and India.",
  },
  "/careers": {
    title: "Careers — Hiscope Constructions",
    description:
      "Join Hiscope Constructions. Open roles for project managers, superintendents, estimators, carpenters and project engineers.",
  },
  "/contact": {
    title: "Contact — Hiscope Constructions",
    description:
      "Talk scope with Hiscope Constructions. Studios in Sheridan, Wyoming and Hyderabad, India.",
  },
};

const setMeta = (name, content, attr = "name") => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESC,
    };

    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", window.location.href, "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1763189158851-a12144e779b5?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
      "property"
    );
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setLink("canonical", window.location.href);
  }, [pathname]);

  return null;
}
