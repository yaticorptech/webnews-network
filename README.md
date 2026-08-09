# WEBNEWS — corporate & brand site

Production Next.js 15 (App Router) codebase for the WEBNEWS corporate site: a
bilingual (Kannada + English) landing page plus the full company, newsroom,
commercial and legal page set.

Built to the structure of a media-group corporate site — hero, proof numbers,
brand/vertical grid, editorial standards, values, timeline, leadership,
commercial CTA — with the newsroom itself living separately at `webnews.in`.

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15, App Router, RSC | Static prerender per locale, zero client JS on most pages |
| Language | TypeScript (strict) | Content is typed, so a missing translation is a build error |
| Styling | Tailwind CSS v4 + CSS custom properties | Theme tokens live in one file; light/dark flips variables, not classes |
| i18n | `/[locale]` segment + middleware negotiation | Real URLs per language — required for hreflang and regional SEO |
| SEO | Metadata API, JSON-LD, sitemap, robots | `NewsMediaOrganization` schema incl. `publishingPrinciples` + `correctionsPolicy` |
| Content | Typed modules in `src/content` | Drop-in replaceable with a CMS adapter; no rewrite of components |

## Getting started

```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL
npm run dev                    # http://localhost:3000 → redirects to /en or /kn
```

Build and serve production:

```bash
npm run build
npm start
```

Quality gates:

```bash
npm run typecheck
npm run lint
```

## Routes

Every route exists at `/en/...` and `/kn/...` (40 prerendered pages total).

| Group | Routes |
| --- | --- |
| Landing | `/` |
| Company | `/about` `/vision` `/mission` `/values` `/story` `/leadership` |
| Newsroom | `/verticals` `/editorial-standards` `/corrections` `/reach` |
| Commercial | `/advertise` `/press-release` `/events` `/partnerships` `/media-kit` |
| People & legal | `/careers` `/contact` `/privacy` `/terms` |

`src/content/routes.ts` is the single registry — the sitemap reads from it, so a
page added there can never be silently missing from search.

## Project structure

```
src/
  app/
    layout.tsx              root boundary (global CSS only)
    not-found.tsx           root 404
    robots.ts sitemap.ts    generated, locale-aware, with hreflang alternates
    [locale]/
      layout.tsx            <html lang>, theme boot script, header/footer, JSON-LD
      page.tsx              landing page composition
      <route>/page.tsx      one file per corporate page
  components/
    site/                   Header, Footer, Logo, LocaleSwitch, ThemeToggle
    sections/               Hero + composable landing sections
    ui/                     primitives (Section, Card, ButtonLink, PageHero, JsonLd)
  content/                  site.ts, company.ts, commercial.ts, verticals.ts, routes.ts
  i18n/                     locale config, Localized<T> type, t() helper, UI dictionary
  lib/                      seo.ts (metadata + schema), page.ts (per-page boilerplate)
  middleware.ts             locale negotiation: cookie → Accept-Language → default
```

## Adding a language

1. Add the code to `locales` and `localeTags` in `src/i18n/config.ts`.
2. Add the key to the `dictionary` object in `src/i18n/dictionary.ts`.
3. Backfill `src/content/*` where you want translated copy.

`t()` falls back to English for any key you have not translated yet, so a new
language can launch partially translated without breaking a build or rendering
an empty string. Nothing else needs to change — routing, sitemap, hreflang and
the language switcher all derive from `locales`.

## Connecting a CMS

Components never import raw data; they import from `src/content`. To move to a
headless CMS, reimplement those modules as async fetchers returning the same
shapes (`Localized<T>`, `Vertical`, `Milestone`, `AdSlot`, …). Two places are
designed for this specifically:

- `src/app/[locale]/corrections/page.tsx` — the `corrections` array should be
  fed from the editorial system, never hand-maintained.
- `src/content/commercial.ts` — `adSlots` and `openRoles` should come from the
  ad marketplace and ATS respectively.

## Theming

All colour and spacing tokens are declared in `src/app/globals.css` under
`@theme` and the `:root` / `.dark` blocks. Changing the brand accent is a
one-line change to `--accent`. The theme is applied by a small inline script in
`[locale]/layout.tsx` before first paint, so there is no flash of wrong theme.

## Security

`next.config.ts` sets HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` and a restrictive `Permissions-Policy`. There is no
third-party script on any page. Extend the header list when you add analytics or
an ad server, and prefer self-hosted measurement to preserve the contextual-only
advertising promise made on `/privacy`.

## Before launch

- [ ] Replace placeholder leadership names in `src/content/company.ts`
- [ ] Have counsel review `/privacy` and `/terms` (they are structured templates)
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`
- [ ] Add `public/og-default.png` (1200×630) and favicons
- [ ] Point the corrections list at the editorial database
- [ ] Verify the `50K+` and `20+` figures against current analytics
