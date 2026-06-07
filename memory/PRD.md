# Hiscope Constructions — PRD

## Original Problem Statement
Build a website for construction company "Hiscope Constructions" with pages: About, Services, Projects, Careers, Contact Us.

## User Choices
- Design: agent-chosen — Swiss high-contrast industrial w/ safety-orange accent.
- Contact submissions: popup with mailto to hr@hiscopeconstructions.com and hr@hiscopetechnologies.com (Resend removed).
- Careers: static list of open roles.
- Branding: agent-created palette + wordmark "HISCOPE·CONSTRUCTIONS".

## Architecture
- Backend: FastAPI + MongoDB (Motor). All routes under `/api`.
- Frontend: React 19 + Tailwind + shadcn/ui + framer-motion + react-fast-marquee + sonner + lucide-react + axios.
- Fonts: Chivo (display) + IBM Plex Sans (body).
- Palette: bg `#F4F4F5`, ink `#09090B`, safety orange `#FF4500`, line `#D4D4D8`.

## Pages
- `/` Home — hero, kinetic marquee, stats, services bento, projects preview.
- `/about` — story, 4 values, 2 leadership portraits.
- `/services` — 4 alternating service sections w/ deliverables and CTAs.
- `/projects` — filterable gallery (All / Commercial / Residential / Industrial).
- `/projects/:id` — detail page (hero, meta grid, scope, highlights, gallery, next-project).
- `/careers` — 5 open roles via shadcn Accordion, mailto apply links to hr@hiscopeconstructions.com.
- `/contact` — info + form; submission opens shadcn Dialog with two mailto buttons (Constructions / Technologies).
- `/admin/inquiries` — unauth admin listing of all DB-stored submissions (currently public — flag for protection).
- Shared: sticky backdrop-blur header + dark footer w/ USA + India offices and HISCOPE marquee.
- SEO: SeoMeta component sets per-route title/description/OG/Twitter/canonical; `/robots.txt` + `/sitemap.xml` served.

## Backend Endpoints
- `GET /api/`
- `POST /api/contact` → validates + persists; non-blocking Resend send if key set.
- `GET /api/contact` → newest-first list (used by /admin/inquiries).
- `GET/POST /api/status` → legacy.

## Company Data (in /app/frontend/src/data/site.js)
- Phone: +1 937 530 5382
- Primary email: Info@hiscopeconstructions.com
- HR popup emails: hr@hiscopeconstructions.com, hr@hiscopetechnologies.com
- Offices: USA — Sheridan, Wyoming 82801; India — Level -1, Reliance Cyber Ville, Vittal Rao Nagar, Madhapur, HITEC City, Hyderabad, Telangana 500081

## Test Credentials
None — no auth in this app.

## Test Results
- iteration_1: backend 100% / frontend 100%
- iteration_2: backend 100% / frontend 100% (popup, project detail, admin, SEO all verified)

## Backlog
- **P0**: Add authentication to `/admin/inquiries` before sharing the URL publicly.
- **P1**: Replace stock photos with real Hiscope project photography when available.
- **P1**: Optionally remove unused `resend` integration from server.py to reduce dependency surface.
- **P2**: Project detail content (cur. placeholder) — replace scope, highlights, client names with real values.
- **P2**: Add SEO server-side (currently client-side via SeoMeta) using a prerender step or move to Next.js for better crawling.
- **P2**: Add rate limiting + honeypot to POST /api/contact.
- **P3**: Careers — optional applicant form with file upload.
- **P3**: Migrate deprecated `@app.on_event('shutdown')` to FastAPI lifespan.
