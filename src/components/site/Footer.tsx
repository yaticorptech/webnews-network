import Link from "next/link";
import { Logo } from "./Logo";
import { footerLegalNav, footerNav, site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";
import type { Dictionary } from "@/i18n/dictionary";

const socialLabels: Record<keyof typeof site.social, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const href = (path: string) => `/${locale}${path}`;
  const year = new Date().getFullYear();

  return (
    <footer className="rule-top bg-sunken">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo locale={locale} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {dict.footerBlurb}
            </p>
            <address className="mt-5 not-italic text-sm text-muted">
              {site.legalName}, {site.country}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:underline"
              >
                {site.email}
              </a>
            </address>
            <ul className="mt-6 flex flex-wrap gap-2">
              {(
                Object.keys(site.social) as (keyof typeof site.social)[]
              ).map((key) => (
                <li key={key}>
                  <a
                    href={site.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-subtle px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                  >
                    {socialLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {footerNav.map((group) => (
              <div key={group.label.en}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-strong">
                  {t(group.label, locale)}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {t(item.label, locale)}
                        </a>
                      ) : (
                        <Link
                          href={href(item.href)}
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {t(item.label, locale)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-strong">
                {dict.legal}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {footerLegalNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={href(item.href)}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {t(item.label, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* The canonical brand statement — keep this sentence consistent
            everywhere the company describes itself. */}
        <p className="mt-12 max-w-3xl border-t border-subtle pt-6 text-sm leading-relaxed text-muted">
          {t(site.brandStatement, locale)}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-subtle pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {dict.footerRights}
          </p>
          <p>
            {site.name} · {t(site.tagline, locale)}
          </p>
        </div>
      </div>
    </footer>
  );
}
