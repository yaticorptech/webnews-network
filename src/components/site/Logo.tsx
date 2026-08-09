import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";

/**
 * Masthead lockup: the traced brand wordmark, with the tagline set as a
 * baseline rule beneath it. `compact` drops the tagline for tight contexts.
 */
export function Logo({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex flex-col gap-1.5"
      aria-label={`${site.name} — ${t(site.tagline, locale)}`}
    >
      <Wordmark
        className="h-5 w-auto text-strong transition-opacity duration-200 group-hover:opacity-85 md:h-[1.4rem]"
        title={site.name}
      />
      {!compact ? (
        <span className="hidden text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-muted sm:block">
          {t(site.tagline, locale)}
        </span>
      ) : null}
    </Link>
  );
}
