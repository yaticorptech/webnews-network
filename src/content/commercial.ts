import type { Localized } from "@/i18n/localized";

/** Ad inventory as published on the live advertiser marketplace. */
export type AdSlot = {
  id: string;
  name: Localized;
  placement: Localized;
  size: string;
  formats: string;
};

export const adSlots: AdSlot[] = [
  {
    id: "logo-left",
    name: { en: "Logo Left" },
    placement: { en: "Header, beside the masthead" },
    size: "320 × 80",
    formats: "Image",
  },
  {
    id: "logo-right",
    name: { en: "Logo Right" },
    placement: { en: "Header, opposite the masthead" },
    size: "320 × 80",
    formats: "Image",
  },
  {
    id: "hero-left",
    name: { en: "Hero Left" },
    placement: { en: "Homepage sidebar, above the fold" },
    size: "300 × 300",
    formats: "Image, Video",
  },
  {
    id: "hero-right",
    name: { en: "Hero Right" },
    placement: { en: "Homepage sidebar, above the fold" },
    size: "300 × 300",
    formats: "Image, Video",
  },
  {
    id: "mid-banner",
    name: { en: "Mid-Page Banner" },
    placement: { en: "Full width, mid homepage" },
    size: "970 × 120",
    formats: "Image",
  },
  {
    id: "trending-sidebar",
    name: { en: "Trending Sidebar" },
    placement: { en: "Beside the video module" },
    size: "300 × 500",
    formats: "Image, Video",
  },
  {
    id: "newsletter-left",
    name: { en: "Left of Newsletter" },
    placement: { en: "Newsletter block, video or banner" },
    size: "640 × 360",
    formats: "Image, Video",
  },
  {
    id: "in-article",
    name: { en: "In-Article Card" },
    placement: { en: "Inside news pages" },
    size: "300 × 300",
    formats: "Image",
  },
];

/** Advertising opportunities across the network. */
export const advertisingOptions = [
  { en: "Display advertising" },
  { en: "Sponsored content" },
  { en: "Campaign promotion" },
  { en: "Event promotion" },
  { en: "Brand stories" },
  { en: "Institutional communication" },
  { en: "Digital campaigns" },
] satisfies Localized[];

/** Partnership tracks — networks grow through partnerships. */
export type PartnerType = {
  slug: string;
  title: Localized;
  body: Localized;
};

export const partnerTypes: PartnerType[] = [
  {
    slug: "institutional",
    title: { en: "Institutional Partners" },
    body: { en: "Schools, colleges and educational institutions." },
  },
  {
    slug: "community",
    title: { en: "Community Partners" },
    body: { en: "NGOs and community organizations." },
  },
  {
    slug: "media",
    title: { en: "Media Partners" },
    body: { en: "Journalists, publishers and media organizations." },
  },
  {
    slug: "business",
    title: { en: "Business Partners" },
    body: { en: "Companies and advertisers." },
  },
  {
    slug: "technology",
    title: { en: "Technology Partners" },
    body: { en: "Technology companies and digital service providers." },
  },
  {
    slug: "content",
    title: { en: "Content Partners" },
    body: { en: "Organizations contributing verified information and stories." },
  },
];

/** Organizations that can publish through the network, and what they share. */
export type OrganizationType = {
  slug: string;
  title: Localized;
  verb: Localized;
  items: Localized[];
};

export const organizationTypes: OrganizationType[] = [
  {
    slug: "schools",
    title: { en: "Schools" },
    verb: { en: "Publish" },
    items: [
      { en: "Achievements" },
      { en: "Events" },
      { en: "Student accomplishments" },
      { en: "Announcements" },
      { en: "Activities" },
    ],
  },
  {
    slug: "colleges",
    title: { en: "Colleges & Universities" },
    verb: { en: "Publish" },
    items: [
      { en: "Campus news" },
      { en: "Research" },
      { en: "Events" },
      { en: "Student achievements" },
      { en: "Institutional announcements" },
    ],
  },
  {
    slug: "ngos",
    title: { en: "NGOs" },
    verb: { en: "Share" },
    items: [
      { en: "Social initiatives" },
      { en: "Community programs" },
      { en: "Impact stories" },
      { en: "Events" },
      { en: "Awareness campaigns" },
    ],
  },
  {
    slug: "businesses",
    title: { en: "Businesses" },
    verb: { en: "Promote" },
    items: [
      { en: "Company announcements" },
      { en: "New products" },
      { en: "Events" },
      { en: "Business stories" },
      { en: "Brand communication" },
    ],
  },
  {
    slug: "startups",
    title: { en: "Startups" },
    verb: { en: "Share" },
    items: [
      { en: "Launches" },
      { en: "Funding announcements" },
      { en: "Founder stories" },
      { en: "Product updates" },
      { en: "Milestones" },
    ],
  },
  {
    slug: "institutions",
    title: { en: "Institutions" },
    verb: { en: "Communicate" },
    items: [
      { en: "Programs" },
      { en: "Announcements" },
      { en: "Public information" },
      { en: "Achievements" },
      { en: "Events" },
    ],
  },
];

/** Opportunities for journalists and local correspondents. */
export const correspondentRoles = [
  { en: "Local Correspondents" },
  { en: "Reporters" },
  { en: "Content Writers" },
  { en: "Photojournalists" },
  { en: "Video Journalists" },
  { en: "Editors" },
  { en: "Regional Editors" },
  { en: "Digital Content Creators" },
] satisfies Localized[];

/** Careers — the teams that build the network. */
export type CareerTeam = {
  slug: string;
  title: Localized;
  roles: Localized[];
};

export const careerTeams: CareerTeam[] = [
  {
    slug: "editorial",
    title: { en: "Editorial" },
    roles: [
      { en: "Reporters" },
      { en: "Writers" },
      { en: "Editors" },
      { en: "Researchers" },
    ],
  },
  {
    slug: "technology",
    title: { en: "Technology" },
    roles: [
      { en: "Frontend Developers" },
      { en: "Backend Developers" },
      { en: "Full-Stack Developers" },
      { en: "AI Engineers" },
      { en: "Data Engineers" },
      { en: "DevOps" },
    ],
  },
  {
    slug: "marketing",
    title: { en: "Marketing" },
    roles: [
      { en: "Digital Marketing" },
      { en: "Social Media" },
      { en: "Performance Marketing" },
      { en: "Brand Marketing" },
    ],
  },
  {
    slug: "sales",
    title: { en: "Sales" },
    roles: [
      { en: "Advertising Sales" },
      { en: "Business Development" },
      { en: "Partnerships" },
    ],
  },
  {
    slug: "creative",
    title: { en: "Creative" },
    roles: [
      { en: "Graphic Designers" },
      { en: "Video Editors" },
      { en: "Motion Designers" },
    ],
  },
  {
    slug: "operations",
    title: { en: "Operations" },
    roles: [
      { en: "Media Operations" },
      { en: "Content Operations" },
      { en: "Customer Support" },
    ],
  },
];

export type Role = {
  slug: string;
  title: Localized;
  /** Business function the role belongs to. */
  function: Localized;
  territory: Localized;
  /** Role overview — the framing paragraphs at the top of the posting. */
  overview: Localized[];
  responsibilities: Localized[];
  /** "Who we are looking for" — paragraphs. */
  lookingFor: Localized[];
  attributes: Localized[];
  qualification: Localized[];
  /** "What makes this role different" — paragraphs. */
  distinction: Localized[];
  tagline?: Localized;
};

/**
 * Live vacancies. Do not invent roles here — an open listing that does not
 * exist wastes a candidate's application.
 */
export const openRoles: Role[] = [
  {
    slug: "business-relations-officer",
    title: { en: "Business Relations Officer (BRO)" },
    function: { en: "Business Relations & Growth" },
    territory: { en: "Assigned District / Region" },
    overview: [
      {
        en: "WebNews is looking for a dynamic and highly presentable Business Relations Officer (BRO) to represent the organization across the corporate, institutional and business community.",
      },
      {
        en: "The BRO will serve as a key business representative of WebNews, building relationships with business leaders, educational institutions, healthcare organizations, automobile groups, real-estate companies, financial institutions, retailers, industry associations and other key stakeholders.",
      },
      {
        en: "This is a relationship-driven business role for professionals who are confident meeting decision-makers, developing influential networks, identifying commercial opportunities and representing a modern media organization in the market.",
      },
    ],
    responsibilities: [
      {
        en: "Represent WebNews professionally before corporates, institutions, business leaders and key decision-makers.",
      },
      {
        en: "Develop and maintain strong relationships with CEOs, Directors, Marketing Heads, PROs, HR Heads, entrepreneurs and institutional management.",
      },
      {
        en: "Identify potential advertisers, sponsors, strategic partners and institutional clients.",
      },
      {
        en: "Present WebNews advertising, branding, promotional and media solutions to prospective clients.",
      },
      {
        en: "Develop new business opportunities and contribute directly to revenue growth.",
      },
      {
        en: "Manage important corporate accounts and build long-term client relationships.",
      },
      {
        en: "Attend business meetings, corporate programs, exhibitions, conferences and networking events as a representative of WebNews.",
      },
      {
        en: "Develop a strong professional network within the assigned territory.",
      },
      {
        en: "Understand clients' communication and promotional requirements and coordinate suitable WebNews solutions.",
      },
      {
        en: "Negotiate commercial proposals and facilitate successful business closures.",
      },
      {
        en: "Maintain regular engagement with existing clients to generate repeat business and referrals.",
      },
      {
        en: "Identify important developments, organizations and market opportunities relevant to WebNews.",
      },
      {
        en: "Maintain the professional reputation and business presence of WebNews throughout the assigned territory.",
      },
    ],
    lookingFor: [
      {
        en: "We are looking for individuals with strong communication, confidence, professional presence and relationship-building ability.",
      },
      {
        en: "The ideal candidate should be comfortable walking into a corporate office, meeting senior management, presenting business opportunities and developing relationships independently.",
      },
      {
        en: "Candidates with experience or strong networks in media, corporate relations, marketing, business development, banking, insurance, education, healthcare, automobile, real estate, hospitality, events or institutional relations will have an advantage.",
      },
    ],
    attributes: [
      { en: "Excellent communication and interpersonal skills" },
      { en: "Strong professional personality and presentation" },
      { en: "Ability to interact confidently with senior decision-makers" },
      { en: "Networking and relationship-building ability" },
      { en: "Business and commercial understanding" },
      { en: "Negotiation and presentation skills" },
      { en: "Result-oriented approach" },
      { en: "Strong local market knowledge" },
      { en: "Ability to independently manage an assigned territory" },
      { en: "High standards of professional conduct and representation" },
    ],
    qualification: [
      { en: "MBA / MSW or equivalent qualification preferred." },
      {
        en: "Candidates with exceptional communication skills, business networks and relevant professional experience may also be considered.",
      },
    ],
    distinction: [
      {
        en: "The Business Relations Officer is one of the key external representatives of WebNews.",
      },
      {
        en: "Rather than being limited to conventional sales activity, the BRO develops WebNews' presence within the business community, builds access to important organizations, establishes strategic relationships and converts those relationships into sustainable business opportunities.",
      },
      {
        en: "The position offers significant exposure to entrepreneurs, corporate leaders, institutional heads, professionals and influential members of the business community.",
      },
      {
        en: "For an ambitious professional, this role provides an opportunity to build a powerful business network while contributing directly to the growth of an emerging media organization.",
      },
    ],
    tagline: { en: "Represent. Connect. Build. Grow." },
  },
];
