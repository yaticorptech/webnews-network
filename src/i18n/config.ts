/**
 * Locale configuration.
 *
 * Adding a language is a two-step change: append the code here and add a
 * matching key to every `Localized<T>` record in `src/content`. The `t()`
 * helper falls back to the default locale so a partially translated launch
 * never renders an empty string.
 */
export const locales = ["en", "kn"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  kn: "ಕನ್ನಡ",
};

/** BCP-47 tags used for `<html lang>`, hreflang and Schema.org. */
export const localeTags: Record<Locale, string> = {
  en: "en-IN",
  kn: "kn-IN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
