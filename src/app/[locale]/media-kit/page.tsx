import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { adSlots } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/media-kit",
  title: { en: "Media kit" },
  description: {
    en: "Brand assets, colour tokens, ad specifications and the rules for referring to WebNews in your own materials.",
  },
});

const brandRules = [
  {
    en: "Write the platform as “WebNews” and the company as “WebNews Network Pvt. Ltd.” in running text. The all-caps form belongs to the logo lockup only.",
  },
  {
    en: "The “Web” half of the wordmark takes the surrounding text colour — black on light, white on dark. The “NEWS” half stays masthead red in every context.",
  },
  {
    en: "Keep clear space around the logo equal to the height of the glyph on all sides.",
  },
  {
    en: "Do not recolour, stretch, rotate or add effects to the mark.",
  },
  {
    en: "Do not imply endorsement. Citing an article is fine; suggesting we back your product is not.",
  },
  {
    en: "When quoting our reporting, link to the original article.",
  },
];

const palette = [
  {
    name: "Masthead Red",
    value: "#FD0002",
    use: { en: "Logo only — never for body text or small UI" },
  },
  {
    name: "Interface Red",
    value: "#CE0010",
    use: { en: "Links, buttons and accents on light surfaces" },
  },
  {
    name: "Ink",
    value: "#0F1115",
    use: { en: "Primary dark surface and headings" },
  },
  {
    name: "Paper",
    value: "#F7F7F7",
    use: { en: "Primary light surface" },
  },
  {
    name: "Signal Amber",
    value: "#D98A16",
    use: {
      en: "Alerts and correction notices, so they read as distinct from brand red",
    },
  },
];

export default async function MediaKitPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Media kit", path: "/media-kit" },
        ])}
      />

      <PageHero
        eyebrow="Media kit"
        title="The brand and the specs, in one place."
        lede="Everything here can be used without asking, provided you follow the rules below."
      />

      <Section>
        <SectionHead
          eyebrow="Palette"
          title="Brand colours."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((c) => (
            <li key={c.name}>
              <Card className="h-full">
                <span
                  aria-hidden
                  className="block h-16 w-full rounded-xl border border-subtle"
                  style={{ backgroundColor: c.value }}
                />
                <h3 className="mt-4 text-base font-semibold text-strong">
                  {c.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase text-accent">
                  {c.value}
                </p>
                <p className="mt-2 text-sm text-muted">{t(c.use, locale)}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Ad specifications"
          title="Everything a designer needs to build creative."
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-subtle">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Placement
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Size (px)
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Formats
                </th>
              </tr>
            </thead>
            <tbody>
              {adSlots.map((s) => (
                <tr key={s.id} className="border-t border-subtle bg-raised">
                  <th
                    scope="row"
                    className="px-5 py-4 text-left font-medium text-strong"
                  >
                    {t(s.name, locale)}
                  </th>
                  <td className="px-5 py-4 font-mono text-xs tabular-nums text-accent">
                    {s.size}
                  </td>
                  <td className="px-5 py-4 text-muted">{s.formats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Usage rules"
          title="Using our name and mark."
        />
        <ul className="mt-8 max-w-3xl space-y-3">
          {brandRules.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-body">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {t(r, locale)}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink
            href={`mailto:${site.emails.general}?subject=Media%20kit%20request`}
            external
          >
            Request logo files
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
