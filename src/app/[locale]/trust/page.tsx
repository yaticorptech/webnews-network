import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { trustPrinciples } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/trust",
  title: { en: "Our approach to trust" },
  description: {
    en: "Trust is our foundation — accuracy, transparency, editorial responsibility, corrections and responsible AI at WebNews Network.",
  },
});

export default async function TrustPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Our approach to trust", path: "/trust" },
        ])}
      />

      <PageHero
        eyebrow="Our approach to trust"
        title="Trust Is Our Foundation."
        lede="Digital media moves quickly. But speed should never come at the cost of responsibility."
      />

      <Section>
        <SectionHead
          eyebrow="Commitments"
          title="Systems and processes we are committed to."
          lede="We are committed to building systems and processes that support:"
        />
        <ol className="mt-12 space-y-6">
          {trustPrinciples.map((p, i) => (
            <li key={p.title.en}>
              <Card className="grid gap-6 md:grid-cols-[0.06fr_0.94fr] md:items-start">
                <span
                  aria-hidden
                  className="text-2xl font-bold tabular-nums text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-strong">
                    {t(p.title, locale)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {t(p.body, locale)}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sunken">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/technology`}>
            How our technology works
          </ButtonLink>
          <ButtonLink href={`/${locale}/values`} variant="secondary">
            Our values
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
