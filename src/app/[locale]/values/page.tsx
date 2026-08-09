import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
} from "@/components/ui/primitives";
import { values } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/values",
  title: { en: "Our values" },
  description: {
    en: "Trust, community, innovation, responsibility, accessibility and growth — the six values behind WebNews Network.",
  },
});

export default async function ValuesPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Our values", path: "/values" },
        ])}
      />

      <PageHero
        eyebrow="Our values"
        title="The principles behind the network."
        lede="Six values guide how we build, publish and grow — from the newsroom to the technology behind it."
      />

      <Section>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.key}>
              <Card interactive className="h-full">
                <span
                  aria-hidden
                  className="text-2xl font-bold tabular-nums text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-strong">
                  {t(v.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {t(v.body, locale)}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sunken">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/trust`}>
            Our approach to trust
          </ButtonLink>
          <ButtonLink href={`/${locale}/about`} variant="secondary">
            About the company
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
