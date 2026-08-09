import type { Localized } from "@/i18n/localized";

/**
 * Vision, mission, values, trust principles and the narrative building blocks
 * of the corporate site. Keep this file editorial-owned: it is the canonical
 * wording that legal, sales decks and the website must all agree on.
 */

/** The one-line belief that anchors the whole network. */
export const belief = {
  en: "Every community has a story. Every story deserves a platform.",
} satisfies Localized;

/** Homepage intro — "We're Building More Than a News Platform". */
export const intro = {
  title: { en: "We're Building More Than a News Platform" },
  paragraphs: [
    {
      en: "WebNews Network Pvt. Ltd. is a digital media and technology company focused on building the next generation of news and information platforms.",
    },
    {
      en: "Our flagship platform, WebNews, brings relevant stories closer to people through local, regional and community-focused journalism.",
    },
    {
      en: "By combining journalism, artificial intelligence, technology and digital distribution, we are building a media ecosystem designed for the way people discover and consume information today.",
    },
  ] satisfies Localized[],
};

/** "What We Do" — the capabilities that make up the ecosystem. */
export const capabilities = [
  {
    key: "journalism",
    title: { en: "Digital Journalism" },
    body: {
      en: "Delivering timely, relevant and meaningful news across local, regional and national categories.",
    },
  },
  {
    key: "ai",
    title: { en: "AI-Powered Media Technology" },
    body: {
      en: "Building intelligent systems that assist content processing, organization, publishing and distribution.",
    },
  },
  {
    key: "local",
    title: { en: "Local News Network" },
    body: {
      en: "Creating deeper coverage through district, taluk and community-level news.",
    },
  },
  {
    key: "advertising",
    title: { en: "Digital Advertising" },
    body: {
      en: "Helping businesses and organizations reach relevant audiences through digital media.",
    },
  },
  {
    key: "community",
    title: { en: "Community Publishing" },
    body: {
      en: "Giving schools, NGOs, institutions and organizations a platform to share meaningful stories and updates.",
    },
  },
  {
    key: "distribution",
    title: { en: "Content Distribution" },
    body: {
      en: "Connecting stories with audiences across websites, social platforms and digital channels.",
    },
  },
];

/** About page — "Who We Are". */
export const whoWeAre = {
  eyebrow: { en: "Who we are" },
  title: { en: "A New Generation of Media Company" },
  foundingIdea: {
    en: "News should be closer to the people it matters to.",
  } satisfies Localized,
  paragraphs: [
    {
      en: "WebNews Network Pvt. Ltd. is being built with a simple idea: news should be closer to the people it matters to.",
    },
    {
      en: "Traditional media has historically operated through centralized publishing models. Digital technology gives us an opportunity to build something different — a connected network where local stories can be discovered, organized and distributed at scale.",
    },
    {
      en: "WebNews Network combines the strengths of journalism and technology to create a modern digital media ecosystem.",
    },
    {
      en: "We are focused on building platforms that make information more accessible, relevant and discoverable.",
    },
  ] satisfies Localized[],
};

export const vision = {
  statement: {
    en: "To build one of the world's most connected digital media networks.",
  } satisfies Localized,
  lede: {
    en: "We envision a future where stories from every community can be discovered by the people who care about them.",
  } satisfies Localized,
  body: {
    en: "From a local school achievement to a district-level development, from a startup launching a new product to a community organization creating social impact — we want meaningful information to have a digital home.",
  } satisfies Localized,
};

/** Future vision — "The Next Chapter of Digital Media". */
export const futureVision = {
  title: { en: "The Next Chapter of Digital Media" },
  paragraphs: [
    {
      en: "The way people consume information is changing. News is no longer limited to newspapers or television.",
    },
  ] satisfies Localized[],
  channelsLede: { en: "Today, news lives on:" } satisfies Localized,
  channels: [
    { en: "Websites" },
    { en: "Mobile devices" },
    { en: "Social platforms" },
    { en: "Messaging platforms" },
    { en: "Video" },
    { en: "AI-powered interfaces" },
    { en: "Emerging digital channels" },
  ] satisfies Localized[],
  ambition: {
    en: "Build a connected digital media network capable of taking stories from the smallest communities to audiences anywhere in the world.",
  } satisfies Localized,
};

export const mission = {
  statement: {
    en: "Make every meaningful story discoverable.",
  } satisfies Localized,
  aims: [
    { en: "Strengthen local journalism" },
    { en: "Enable digital-first news publishing" },
    { en: "Use technology to improve media workflows" },
    { en: "Connect communities with relevant information" },
    { en: "Help organizations communicate their stories" },
    { en: "Build scalable digital media infrastructure" },
    {
      en: "Create opportunities for the next generation of journalists and media professionals",
    },
  ] satisfies Localized[],
};

export type Value = {
  key: string;
  title: Localized;
  body: Localized;
};

export const values: Value[] = [
  {
    key: "trust",
    title: { en: "Trust" },
    body: { en: "Credibility is the foundation of journalism." },
  },
  {
    key: "community",
    title: { en: "Community" },
    body: { en: "We believe local voices deserve visibility." },
  },
  {
    key: "innovation",
    title: { en: "Innovation" },
    body: {
      en: "Technology should continuously improve how information moves.",
    },
  },
  {
    key: "responsibility",
    title: { en: "Responsibility" },
    body: { en: "Publishing information comes with responsibility." },
  },
  {
    key: "accessibility",
    title: { en: "Accessibility" },
    body: { en: "News should be easy to discover and understand." },
  },
  {
    key: "growth",
    title: { en: "Growth" },
    body: { en: "We continuously learn, experiment and improve." },
  },
];

/**
 * The flagship platform's local-first structure — rendered as the ladder on
 * the home hero and the platform page.
 */
export const platformStructure = {
  levels: [
    { en: "India" },
    { en: "State" },
    { en: "District" },
    { en: "Taluk" },
    { en: "Local Community" },
  ] satisfies Localized[],
  example: {
    en: "Karnataka → Dakshina Kannada → Education → Local News",
  } satisfies Localized,
};

/** Local news network — the stories that motivate it. */
export const localStories = [
  { en: "A student wins a competition." },
  { en: "A local entrepreneur creates jobs." },
  { en: "A village launches an initiative." },
  { en: "A school achieves something remarkable." },
  { en: "An NGO transforms a community." },
] satisfies Localized[];

/** The path a local story travels — "From Local to Global". */
export const localToGlobal = [
  { en: "Local Story" },
  { en: "Taluk" },
  { en: "District" },
  { en: "State" },
  { en: "National Audience" },
  { en: "Global Discovery" },
] satisfies Localized[];

/** Technology page — what AI-assisted publishing covers. */
export const aiCapabilities = [
  { en: "Content processing" },
  { en: "AI-assisted article generation" },
  { en: "Content summarization" },
  { en: "Categorization" },
  { en: "Metadata generation" },
  { en: "Translation and localization" },
  { en: "Publishing workflows" },
  { en: "Content recommendations" },
  { en: "Distribution" },
  { en: "Analytics" },
] satisfies Localized[];

/** The intelligent content workflow — from information to publication. */
export const contentWorkflow = [
  { en: "Source" },
  { en: "Content Submission" },
  { en: "AI Processing" },
  { en: "Editorial Review" },
  { en: "Approval" },
  { en: "Publication" },
  { en: "Distribution" },
  { en: "Audience" },
] satisfies Localized[];

/** Our approach to trust — commitments rendered on the trust page. */
export const trustPrinciples = [
  {
    title: { en: "Accuracy" },
    body: { en: "Information should be responsibly handled." },
  },
  {
    title: { en: "Transparency" },
    body: { en: "Our readers should know what they are consuming." },
  },
  {
    title: { en: "Editorial Responsibility" },
    body: {
      en: "Technology should support — not eliminate — human accountability.",
    },
  },
  {
    title: { en: "Corrections" },
    body: {
      en: "When mistakes happen, they should be acknowledged and corrected.",
    },
  },
  {
    title: { en: "Responsible AI" },
    body: {
      en: "AI-assisted systems should operate within appropriate editorial and ethical safeguards.",
    },
  },
];

/** Community — what the platform lets communities do. */
export const communityActions = [
  { en: "Inform" },
  { en: "Connect" },
  { en: "Celebrate" },
  { en: "Question" },
  { en: "Grow" },
] satisfies Localized[];

/** Corporate page — long-term focus areas. */
export const longTermFocus = [
  { en: "Expanding local news coverage" },
  { en: "Building a strong correspondent network" },
  { en: "Developing AI-powered media technology" },
  { en: "Growing digital audiences" },
  { en: "Building new media verticals" },
  { en: "Expanding across regions" },
  { en: "Creating sustainable media businesses" },
] satisfies Localized[];
