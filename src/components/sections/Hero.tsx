import Link from "next/link";
import { site } from "@/content/site";
import { platformStructure } from "@/content/company";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";
import type { Dictionary } from "@/i18n/dictionary";

/* Core positioning — keep this wording in lockstep with the brand statement in
   src/content/site.ts. This site is the corporate identity of WebNews Network
   Pvt. Ltd., distinct from the WebNews.in newsroom itself. */
const heroCopy = {
  eyebrow: {
    en: "WebNews Network Pvt. Ltd.",
  },
  headline: {
    en: "Building the Future of Digital News",
  },
  lede: {
    en: "WebNews Network Pvt. Ltd. is building a technology-driven media network that connects people, communities, institutions and businesses through trusted digital journalism.",
  },
  kicker: {
    en: "From local stories to a connected digital India.",
  },
};

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
      >
        <div className="pulse-line relative h-px w-full" />
      </div>

      <div className="shell grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-subtle bg-raised px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            {t(heroCopy.eyebrow, locale)}
          </p>

          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
            {t(heroCopy.headline, locale)}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {t(heroCopy.lede, locale)}
          </p>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t(heroCopy.kicker, locale)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={site.product.newsroom}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition-opacity hover:opacity-90"
            >
              {dict.exploreWebnews}
              <span aria-hidden>→</span>
            </a>
            <Link
              href={`/${locale}/partnerships`}
              className="inline-flex items-center gap-2 rounded-full border border-subtle px-6 py-3 text-sm font-semibold text-strong transition-colors hover:text-accent"
            >
              {dict.partnerWithUs}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              About the company
            </Link>
          </div>
        </div>

        {/* Local-first structure card — the platform model, not a screenshot */}
        <div className="reveal relative">
          <div className="rounded-3xl border border-subtle bg-raised p-6 shadow-2xl shadow-black/10">
            <div className="flex items-center justify-between border-b border-subtle pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Local-first by design
              </span>
              <span className="rounded-full bg-accent px-2 py-0.5 text-[0.65rem] font-semibold text-[var(--accent-contrast)]">
                WebNews.in
              </span>
            </div>

            <ol className="mt-6 space-y-1.5">
              {platformStructure.levels.map((level, i) => (
                <li key={level.en} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold tabular-nums text-accent"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-strong">
                    {t(level, locale)}
                  </span>
                  {i < platformStructure.levels.length - 1 ? (
                    <span aria-hidden className="text-xs text-muted">
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl bg-sunken p-4">
              <p className="text-xs leading-relaxed text-muted">
                For example: {t(platformStructure.example, locale)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
