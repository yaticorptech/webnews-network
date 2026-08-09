import { PageHero, Section } from "@/components/ui/primitives";
import type { Locale } from "@/i18n/config";
import { t, type Localized } from "@/i18n/localized";

export type LegalClause = { heading: Localized; body: Localized[] };

/**
 * Shared renderer for policy documents so Privacy and Terms stay visually and
 * structurally identical — and so a new policy is a data change, not a page.
 */
export function LegalPage({
  locale,
  eyebrow,
  title,
  lede,
  updated,
  clauses,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  clauses: LegalClause[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
          <nav
            aria-label={locale === "kn" ? "ಈ ಪುಟದಲ್ಲಿ" : "On this page"}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {locale === "kn" ? "ಕೊನೆಯ ನವೀಕರಣ" : "Last updated"}
            </p>
            <p className="mt-1.5 text-sm text-muted">{updated}</p>
            <ol className="mt-6 space-y-2">
              {clauses.map((c, i) => (
                <li key={i}>
                  <a
                    href={`#s-${i + 1}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {t(c.heading, locale)}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {clauses.map((c, i) => (
              <article key={i} id={`s-${i + 1}`} className="scroll-mt-28">
                <h2 className="text-xl font-semibold text-strong">
                  {t(c.heading, locale)}
                </h2>
                <div className="mt-3 space-y-3">
                  {c.body.map((p, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-body md:text-base"
                    >
                      {t(p, locale)}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
