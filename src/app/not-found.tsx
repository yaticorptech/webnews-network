import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import "./globals.css";

/**
 * Root 404. Rendered outside `[locale]`, so it owns its own <html> shell and
 * falls back to the default locale's copy.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <html lang="en-IN">
      <body className="grid min-h-dvh place-items-center bg-surface px-6 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            404
          </p>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            {dict.notFoundTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            {dict.notFoundBody}
          </p>
          <Link
            href={`/${defaultLocale}`}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)]"
          >
            {dict.backHome}
          </Link>
        </div>
      </body>
    </html>
  );
}
