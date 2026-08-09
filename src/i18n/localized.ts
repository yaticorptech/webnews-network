import { defaultLocale, type Locale } from "./config";

/**
 * A value that may exist in several languages. Only the default locale is
 * required — everything else is optional so editorial can ship English first
 * and backfill translations without breaking the build.
 */
export type Localized<T = string> = { en: T } & Partial<Record<Locale, T>>;

/** Resolve a localized value, falling back to the default locale. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return (value[locale] ?? value[defaultLocale]) as T;
}

/** Resolve a list of localized values. */
export function tAll<T>(values: Localized<T>[], locale: Locale): T[] {
  return values.map((v) => t(v, locale));
}
