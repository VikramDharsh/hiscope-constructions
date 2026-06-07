// Central site data — single source of truth for Hiscope Construction content
export const COMPANY = {
  name: "Hiscope Constructions",
  shortName: "HISCOPE.",
  tagline: "Building The Impossible.",
  description:
    "A design-led construction firm delivering high-integrity residential, commercial and industrial projects across two continents for over two decades.",
  yearsInBusiness: 22,
  projectsCompleted: 340,
  skilledWorkers: 180,
  certifications: 14,
  founded: 2003,
  phone: "+1 937 530 5382",
  phoneHref: "+19375305382",
  email: "Info@hiscopeconstructions.com",
  contactEmails: {
    hrConstructions: "hr@hiscopeconstructions.com",
    hrTechnologies: "hr@hiscopetechnologies.com",
  },
  offices: [
    {
      country: "USA",
      flag: "🇺🇸",
      label: "Headquarters",
      lines: ["Sheridan, Wyoming 82801", "United States"],
    },
    {
      country: "India",
      flag: "🇮🇳",
      label: "India Studio",
      lines: [
        "Level -1, Reliance Cyber Ville",
        "Vittal Rao Nagar, Madhapur, HITEC City",
        "Hyderabad, Telangana 500081",
      ],
    },
  ],
  hours: "Mon – Fri · 09:00 – 18:00",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const MEDIA = {
  hero:
    "https://images.unsplash.com/photo-1763189158851-a12144e779b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
  aboutStory:
    "https://images.unsplash.com/photo-1575282366139-d605e098a825?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBlbmdpbmVlciUyMGJsdWVwcmludCUyMGhlbG1ldHxlbnwwfHx8fDE3NzY4Mjg3MTN8MA&ixlib=rb-4.1.0&q=85",
  concreteTexture:
    "https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  team1:
    "https://images.unsplash.com/photo-1609664843043-a66fbe0684bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBlbmdpbmVlciUyMGJsdWVwcmludCUyMGhlbG1ldHxlbnwwfHx8fDE3NzY4Mjg3MTN8MA&ixlib=rb-4.1.0&q=85",
  team2:
    "https://images.unsplash.com/photo-1659353588892-e74f123e0228?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBlbmdpbmVlciUyMGJsdWVwcmludCUyMGhlbG1ldHxlbnwwfHx8fDE3NzY4Mjg3MTN8MA&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  {
    id: "residential",
    no: "01",
    title: "Residential Construction",
    short: "Custom homes, high-end renovations, multi-family residences.",
    long:
      "From architect-led custom homes to full-gut renovations, our residential division delivers spaces engineered for how people actually live. Every project starts with structure, daylight and materiality — not surface finishes.",
    deliverables: [
      "Custom single-family homes",
      "Luxury renovations & additions",
      "Multi-family & townhouse developments",
      "ADUs and accessory structures",
    ],
    image:
      "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "commercial",
    no: "02",
    title: "Commercial Construction",
    short: "Offices, retail, hospitality — built to scale, finished to spec.",
    long:
      "We ground-up build and fit-out commercial spaces with a ruthless focus on program, schedule, and lifecycle cost. Our preconstruction team works alongside your architects from day one.",
    deliverables: [
      "Ground-up office & mixed-use",
      "Retail & hospitality build-outs",
      "Tenant improvements",
      "Adaptive reuse / restoration",
    ],
    image:
      "https://images.unsplash.com/photo-1761315240398-53c1cb5eeea7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "industrial",
    no: "03",
    title: "Industrial & Infrastructure",
    short: "Warehouses, logistics centers, civil and heavy structures.",
    long:
      "Hiscope's industrial division handles the unglamorous work that keeps cities moving: distribution centers, manufacturing facilities, and heavy civil infrastructure. Engineered for tolerance, built for duty.",
    deliverables: [
      "Distribution & logistics facilities",
      "Manufacturing & cold storage",
      "Civil & site development",
      "Structural steel & tilt-up concrete",
    ],
    image:
      "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "design-build",
    no: "04",
    title: "Design-Build & Preconstruction",
    short: "A single accountable team from first sketch to certificate of occupancy.",
    long:
      "Integrated design-build delivery with preconstruction cost modeling, value engineering, and constructability review. One contract, one team, one source of truth.",
    deliverables: [
      "Preconstruction & budgeting",
      "Value engineering",
      "Constructability review",
      "Integrated design-build delivery",
    ],
    image:
      "https://images.pexels.com/photos/3661445/pexels-photo-3661445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const PROJECTS = [
  {
    id: "northbay-tower",
    title: "Northbay Tower",
    category: "Commercial",
    year: 2024,
    location: "Sheridan, WY",
    sqft: "210,000 sq ft",
    duration: "26 months",
    client: "Northbay Capital Partners",
    scope:
      "Ground-up 14-story Class-A office tower with two levels of below-grade parking, ground-floor retail, and a full curtain-wall envelope. Delivered under a single-source GMP contract with integrated MEP coordination from concept through commissioning.",
    highlights: [
      "Topped out 4 weeks ahead of schedule",
      "LEED Gold certification achieved",
      "Zero recordable incidents across 410,000 craft hours",
    ],
    image:
      "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1763189158851-a12144e779b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    ],
  },
  {
    id: "harbor-logistics",
    title: "Harbor Logistics Hub",
    category: "Industrial",
    year: 2024,
    location: "Hyderabad, IN",
    sqft: "480,000 sq ft",
    duration: "18 months",
    client: "Harbor Distribution Group",
    scope:
      "A high-bay distribution and cross-dock facility with 76 dock doors, structural steel and tilt-up concrete envelope, ESFR sprinklers, and full racking integration. Site civil works included 14 acres of paving and a dedicated truck court.",
    highlights: [
      "Delivered 6% under GMP",
      "Tilt-up panels erected at a rate of 12/day",
      "Pre-engineered structural steel sequenced JIT to site",
    ],
    image:
      "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },
  {
    id: "ashworth-residence",
    title: "Ashworth Residence",
    category: "Residential",
    year: 2023,
    location: "Sheridan, WY",
    sqft: "8,400 sq ft",
    duration: "22 months",
    client: "Private Client",
    scope:
      "Architect-led custom residence on a hillside lot. Cast-in-place concrete foundations, structural steel moment frames, full-height curtain wall, and high-craft interior millwork. Includes a detached 1,400 sq ft studio.",
    highlights: [
      "Architecture by an internationally awarded studio",
      "Site retaining wall and shoring engineered for 30-ft grade change",
      "Owner moved in two weeks ahead of contract",
    ],
    image:
      "https://images.unsplash.com/photo-1761315240398-53c1cb5eeea7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1761315240398-53c1cb5eeea7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    ],
  },
  {
    id: "district7-retail",
    title: "District 7 Retail Block",
    category: "Commercial",
    year: 2023,
    location: "Hyderabad, IN",
    sqft: "94,000 sq ft",
    duration: "14 months",
    client: "District Properties",
    scope:
      "Mixed-use retail block with 22 tenant bays, structured parking, public plaza, and façade restoration of an existing heritage frontage. Sequenced live-trade construction with zero retailer downtime.",
    highlights: [
      "Heritage façade restored stone-by-stone",
      "Zero shutdown for adjacent operating tenants",
      "Delivered through monsoon season",
    ],
    image:
      "https://images.pexels.com/photos/3661445/pexels-photo-3661445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/3661445/pexels-photo-3661445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1761315240398-53c1cb5eeea7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    ],
  },
  {
    id: "foundry-lofts",
    title: "Foundry Lofts",
    category: "Residential",
    year: 2022,
    location: "Sheridan, WY",
    sqft: "62,000 sq ft",
    duration: "20 months",
    client: "Foundry Development",
    scope:
      "Adaptive reuse of a 1920s industrial foundry into 38 residential lofts. Selective demolition, seismic retrofit, restoration of original steel trusses and brick masonry, and full MEP overhaul.",
    highlights: [
      "Original steel trusses preserved and exposed",
      "Adaptive reuse — 70% of envelope retained",
      "Awarded regional Historic Preservation citation",
    ],
    image:
      "https://images.unsplash.com/photo-1763189158851-a12144e779b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1763189158851-a12144e779b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1761315240398-53c1cb5eeea7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    ],
  },
  {
    id: "meridian-distribution",
    title: "Meridian Distribution Center",
    category: "Industrial",
    year: 2022,
    location: "Hyderabad, IN",
    sqft: "315,000 sq ft",
    duration: "16 months",
    client: "Meridian Logistics",
    scope:
      "Single-tenant distribution facility with 36-ft clear height, full ESFR fire protection, automated material handling fit-out coordination, and a 12-acre paved truck court.",
    highlights: [
      "Slab placed in three continuous pours of 100,000+ sq ft",
      "Tenant material-handling system commissioned in parallel with shell",
      "Site civil delivered through two monsoon cycles",
    ],
    image:
      "https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/16001335/pexels-photo-16001335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1766936587760-fcc13617ca3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzc2ODI4NzEzfDA&ixlib=rb-4.1.0&q=85",
    ],
  },
];

export const PROJECT_FILTERS = ["All", "Commercial", "Residential", "Industrial"];

export const VALUES = [
  {
    no: "01",
    title: "Precision",
    body: "Tolerances measured in millimeters. Schedules measured in hours. We don't miss by much, because we don't miss.",
  },
  {
    no: "02",
    title: "Integrity",
    body: "Transparent pricing, honest timelines, no surprises at closeout. A handshake still means something here.",
  },
  {
    no: "03",
    title: "Craft",
    body: "Every weld, every pour, every joint. Our field teams treat every project as their own name on the door.",
  },
  {
    no: "04",
    title: "Safety",
    body: "A 0.6 EMR. Three years without a lost-time incident. Safety is our most stubborn competitive advantage.",
  },
];

export const TEAM = [
  {
    name: "Marcus Ashton",
    role: "Founder & Principal",
    image: MEDIA.team1,
  },
  {
    name: "Elena Reyes",
    role: "VP, Preconstruction",
    image: MEDIA.team2,
  },
];

export const ROLES = [
  {
    id: "r1",
    title: "Senior Project Manager — Commercial",
    location: "Oakland, CA · On-site",
    type: "Full-time",
    summary:
      "Lead delivery of commercial ground-up and tenant improvement projects from $5M–$40M from precon through closeout.",
    requirements: [
      "10+ years commercial construction PM experience",
      "Strong command of Procore, MS Project, and estimating software",
      "Track record of on-budget, on-schedule delivery",
      "B.S. in Construction Management, Engineering, or equivalent",
    ],
  },
  {
    id: "r2",
    title: "Superintendent — Residential",
    location: "Bay Area · On-site",
    type: "Full-time",
    summary:
      "Run day-to-day field operations for high-end custom residential projects. Own quality, safety, and schedule on the ground.",
    requirements: [
      "7+ years as a field superintendent on high-end residential",
      "OSHA 30, First Aid / CPR certified",
      "Comfortable coordinating 10+ trades simultaneously",
    ],
  },
  {
    id: "r3",
    title: "Estimator — Industrial Division",
    location: "Oakland, CA · Hybrid",
    type: "Full-time",
    summary:
      "Build competitive, accurate estimates for industrial, logistics, and civil projects from schematic design to GMP.",
    requirements: [
      "5+ years estimating heavy commercial or industrial",
      "Proficient in On-Screen Takeoff, WinEst, or similar",
      "Strong subcontractor relationships in NorCal",
    ],
  },
  {
    id: "r4",
    title: "Carpenter — Finish",
    location: "Multiple sites",
    type: "Full-time · Union",
    summary:
      "Finish carpentry on architect-led projects. High-craft millwork, trim, and built-ins.",
    requirements: [
      "5+ years finish carpentry experience",
      "Own hand tools; valid driver's license",
      "Reads architectural plans and shop drawings fluently",
    ],
  },
  {
    id: "r5",
    title: "Project Engineer",
    location: "Oakland, CA",
    type: "Full-time · Entry-level welcome",
    summary:
      "Support PMs and supers on active projects — RFIs, submittals, schedule, cost tracking. A pathway into project management.",
    requirements: [
      "B.S. in Construction Management or Civil Engineering",
      "0–3 years experience; internships count",
      "Curious, organized, not afraid of a jobsite trailer",
    ],
  },
];
