import type { Localized } from "@/i18n/localized";

export type Vertical = {
  slug: string;
  name: Localized;
  summary: Localized;
  /**
   * Card glow intensity. Deliberately limited to the brand red family plus a
   * neutral, so the cards read as one masthead rather than a colour wheel.
   */
  accent: "red" | "crimson" | "ink";
  icon: string;
};

/**
 * The WebNews media ecosystem — one network, many voices.
 * These verticals can evolve as the WebNews network grows.
 */
export const verticals: Vertical[] = [
  {
    slug: "news",
    name: { en: "WebNews News" },
    summary: {
      en: "Local, regional and national news.",
    },
    accent: "red",
    icon: "flag",
  },
  {
    slug: "business",
    name: { en: "WebNews Business" },
    summary: {
      en: "Business, entrepreneurship, startups, markets and corporate stories.",
    },
    accent: "crimson",
    icon: "scale",
  },
  {
    slug: "education",
    name: { en: "WebNews Education" },
    summary: {
      en: "Schools, colleges, students, education initiatives and achievements.",
    },
    accent: "ink",
    icon: "book",
  },
  {
    slug: "sports",
    name: { en: "WebNews Sports" },
    summary: {
      en: "Local, regional and national sporting events and achievements.",
    },
    accent: "crimson",
    icon: "spark",
  },
  {
    slug: "community",
    name: { en: "WebNews Community" },
    summary: {
      en: "NGOs, social initiatives, community activities and public-interest stories.",
    },
    accent: "red",
    icon: "shield",
  },
  {
    slug: "culture",
    name: { en: "WebNews Culture" },
    summary: {
      en: "Arts, culture, traditions, festivals and local heritage.",
    },
    accent: "ink",
    icon: "leaf",
  },
  {
    slug: "events",
    name: { en: "WebNews Events" },
    summary: {
      en: "Events, conferences, programs and community activities.",
    },
    accent: "crimson",
    icon: "globe",
  },
];
