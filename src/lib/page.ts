import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { t, type Localized } from "@/i18n/localized";
import { buildMetadata } from "@/lib/seo";

export type PageParams = { params: Promise<{ locale: string }> };

/**
 * Removes the per-page metadata boilerplate: every page declares its path and
 * a localized title/description, and gets canonical URLs + hreflang for free.
 */
export function pageMetadata(config: {
  path: string;
  title: Localized;
  description: Localized;
  index?: boolean;
}) {
  return async ({ params }: PageParams): Promise<Metadata> => {
    const { locale } = await params;
    if (!isLocale(locale)) return {};
    return buildMetadata({
      locale,
      path: config.path,
      title: t(config.title, locale),
      description: t(config.description, locale),
      index: config.index,
    });
  };
}

/** Validates the locale segment once, so pages can assume a typed `Locale`. */
export async function resolveLocale(
  params: PageParams["params"],
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale as Locale;
}
