import type { Metadata } from "next";
import { site } from "@/content/site";
import { locales, localeTags, type Locale } from "@/i18n/config";
import { t, type Localized } from "@/i18n/localized";

type BuildMetaArgs = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /** Set false for legal/utility pages you do not want in search. */
  index?: boolean;
};

/** Absolute URL for a locale-scoped path. */
export function absUrl(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `${site.url}/${locale}${clean}`;
}

/** Consistent metadata + hreflang alternates for every page. */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  index = true,
}: BuildMetaArgs): Metadata {
  const url = absUrl(locale, path);
  const languages = Object.fromEntries(
    locales.map((l) => [localeTags[l], absUrl(l, path)]),
  );

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": absUrl("en", path) },
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: localeTags[locale].replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Schema.org graph describing the organisation as a news publisher. */
export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    slogan: t(site.tagline as Localized, locale),
    description: t(site.descriptor as Localized, locale),
    foundingDate: site.founded,
    email: site.email,
    knowsLanguage: ["kn-IN", "en-IN"],
    address: {
      "@type": "PostalAddress",
      addressCountry: site.countryCode,
    },
    sameAs: Object.values(site.social),
    publishingPrinciples: absUrl(locale, "/trust"),
    correctionsPolicy: absUrl(locale, "/trust"),
    ethicsPolicy: absUrl(locale, "/trust"),
    diversityPolicy: absUrl(locale, "/values"),
  };
}

/** Breadcrumbs help search engines render the corporate hierarchy. */
export function breadcrumbJsonLd(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(locale, item.path),
    })),
  };
}
