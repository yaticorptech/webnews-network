"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

/**
 * Swaps the locale segment while preserving the current path, so a reader
 * never loses their place when switching between Kannada and English.
 */
export function LocaleSwitch({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname() || `/${current}`;
  const router = useRouter();

  function pathFor(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  function select(locale: Locale) {
    // 1-year cookie so the choice survives the middleware negotiation.
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`;
    router.push(pathFor(locale));
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-subtle p-0.5"
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => select(locale)}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-[var(--accent-contrast)]"
                : "rounded-full px-3 py-1 text-xs font-semibold text-muted transition-colors hover:text-accent"
            }
          >
            {locale === "kn" ? localeNames.kn : "EN"}
          </button>
        );
      })}
    </div>
  );
}
