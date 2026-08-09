/**
 * Every corporate route in one place.
 * Consumed by the sitemap, the footer and the internal-link checker so a new
 * page can never silently drop out of navigation or search.
 */
export const routes = [
  { path: "/", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/vision", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/mission", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/values", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/network", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/technology", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/local-news", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/organizations", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/advertise", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/partnerships", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/correspondents",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/press", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/corporate", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/trust", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/media-kit", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
] as const;

export type AppRoute = (typeof routes)[number]["path"];
