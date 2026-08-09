import type { MetadataRoute } from "next";
import { routes } from "@/content/routes";
import { locales, localeTags } from "@/i18n/config";
import { absUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: absUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [localeTags[l], absUrl(l, route.path)]),
        ),
      },
    })),
  );
}
