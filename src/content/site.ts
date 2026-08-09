import type { Localized } from "@/i18n/localized";

/**
 * Single source of truth for organisation-level facts.
 * Swap this module for a CMS/API adapter later — every consumer only reads
 * from the typed shape below, so nothing else has to change.
 */

export const site = {
  name: "WebNews Network",
  legalName: "WebNews Network Pvt. Ltd.",
  domain: "webnews.in",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://webnews.in",
  founded: "2024",
  /** General enquiries — the default public contact channel. */
  email: "hello@webnews.in",
  adsEmail: "advertise@webnews.in",
  /** Desk-level addresses as published on the contact page. */
  emails: {
    general: "hello@webnews.in",
    advertising: "advertise@webnews.in",
    partnerships: "partners@webnews.in",
    careers: "careers@webnews.in",
    editorial: "editorial@webnews.in",
    corporate: "corporate@webnews.in",
  },
  /**
   * No street/city address is published. Email is the only public contact
   * channel — do not reintroduce a locality here unless it is the registered
   * office.
   */
  country: "India",
  countryCode: "IN",
  /* Core positioning — keep this wording consistent across the whole site. */
  tagline: {
    en: "Building the Future of Digital News",
  } satisfies Localized,
  descriptor: {
    en: "A technology-driven media company connecting people, communities, institutions and businesses through digital journalism.",
  } satisfies Localized,
  /**
   * The canonical brand statement, used in the footer and anywhere the company
   * describes itself in one sentence.
   */
  brandStatement: {
    en: "WebNews Network Pvt. Ltd. is building a technology-driven digital media network where every meaningful story can be discovered, shared and connected to the people who care about it.",
  } satisfies Localized,
  social: {
    facebook: "https://facebook.com/webnews.in",
    instagram: "https://instagram.com/webnews_in",
    x: "https://x.com/webnews_in",
    linkedin: "https://www.linkedin.com/company/webnews-in",
    youtube: "https://www.youtube.com/@webnews_in",
  },
  /** Live product surfaces that sit outside this corporate site. */
  product: {
    newsroom: "https://webnews.in",
    advertiserRegister: "https://webnews.in/advertiser/register",
    adSlots: "https://webnews.in/advertiser/ad-slots",
    careersApply: "https://www.webnews.in/careers/apply",
  },
} as const;

export type NavItem = {
  href: string;
  label: Localized;
  description?: Localized;
  external?: boolean;
};

export type NavGroup = {
  label: Localized;
  items: NavItem[];
};

/** Home sits outside the grouped nav — it is a destination, not a category. */
export const homeNav: NavItem = {
  href: "/",
  label: { en: "Home" },
};

/** Primary navigation — mirrors the corporate information model. */
export const primaryNav: NavGroup[] = [
  {
    label: { en: "Company" },
    items: [
      {
        href: "/about",
        label: { en: "About us" },
        description: { en: "A new generation of media company" },
      },
      {
        href: "/vision",
        label: { en: "Our vision" },
        description: { en: "Where we are going" },
      },
      {
        href: "/mission",
        label: { en: "Our mission" },
        description: { en: "Make every meaningful story discoverable" },
      },
      {
        href: "/values",
        label: { en: "Our values" },
        description: { en: "The principles behind the network" },
      },
      {
        href: "/trust",
        label: { en: "Our approach to trust" },
        description: { en: "Accuracy, transparency and responsible AI" },
      },
    ],
  },
  {
    label: { en: "Network" },
    items: [
      {
        href: "/platform",
        label: { en: "WebNews platform" },
        description: { en: "News that starts where you are" },
      },
      {
        href: "/network",
        label: { en: "Media ecosystem" },
        description: { en: "One network. Many voices." },
      },
      {
        href: "/local-news",
        label: { en: "Local news network" },
        description: { en: "Making local news visible" },
      },
      {
        href: "/technology",
        label: { en: "Technology" },
        description: { en: "Where journalism meets technology" },
      },
    ],
  },
  {
    label: { en: "Work with us" },
    items: [
      {
        href: "/organizations",
        label: { en: "For organizations" },
        description: { en: "Schools, NGOs, businesses and institutions" },
      },
      {
        href: "/advertise",
        label: { en: "Advertise with us" },
        description: { en: "Reach the right audience" },
      },
      {
        href: "/partnerships",
        label: { en: "Partner with WebNews" },
        description: { en: "Become part of the network" },
      },
      {
        href: "/correspondents",
        label: { en: "Journalists & correspondents" },
        description: { en: "Be the voice of your community" },
      },
      {
        href: "/corporate",
        label: { en: "Investors & corporate" },
        description: { en: "Building for long-term scale" },
      },
    ],
  },
];

/** Flat links that sit to the right of the grouped navigation. */
export const utilityNav: NavItem[] = [
  { href: "/careers", label: { en: "Careers" } },
  { href: "/contact", label: { en: "Contact" } },
];

/**
 * Footer columns — mirrors the corporate footer specification, which is wider
 * than the header nav and includes the flagship platform's verticals.
 */
export const footerNav: NavGroup[] = [
  {
    label: { en: "Company" },
    items: [
      { href: "/about", label: { en: "About Us" } },
      { href: "/vision", label: { en: "Our Vision" } },
      { href: "/mission", label: { en: "Our Mission" } },
      { href: "/network", label: { en: "Our Network" } },
      { href: "/technology", label: { en: "Technology" } },
      { href: "/careers", label: { en: "Careers" } },
    ],
  },
  {
    label: { en: "WebNews" },
    items: [
      {
        href: "https://webnews.in",
        label: { en: "WebNews.in" },
        external: true,
      },
      { href: "/local-news", label: { en: "Local News" } },
      { href: "/network#business", label: { en: "Business" } },
      { href: "/network#education", label: { en: "Education" } },
      { href: "/network#sports", label: { en: "Sports" } },
      { href: "/network#community", label: { en: "Community" } },
      { href: "/network#events", label: { en: "Events" } },
    ],
  },
  {
    label: { en: "Business" },
    items: [
      { href: "/advertise", label: { en: "Advertise With Us" } },
      { href: "/partnerships", label: { en: "Partner With Us" } },
      { href: "/media-kit", label: { en: "Media Kit" } },
      { href: "/corporate", label: { en: "Corporate Enquiries" } },
    ],
  },
  {
    label: { en: "Network" },
    items: [
      { href: "/correspondents", label: { en: "Become a Correspondent" } },
      { href: "/partnerships#content", label: { en: "Content Partners" } },
      {
        href: "/partnerships#institutional",
        label: { en: "Institutional Partners" },
      },
      { href: "/partnerships#media", label: { en: "Media Partners" } },
      {
        href: "/partnerships#technology",
        label: { en: "Technology Partners" },
      },
    ],
  },
];

export const footerLegalNav: NavItem[] = [
  { href: "/privacy", label: { en: "Privacy Policy" } },
  { href: "/terms", label: { en: "Terms of Use" } },
  { href: "/trust", label: { en: "Editorial Policy" } },
  { href: "/contact", label: { en: "Grievance / Contact" } },
];
