import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { platformStructure } from "@/content/company";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/platform",
  title: { en: "WebNews — our flagship platform" },
  description: {
    en: "WebNews.in is the flagship digital news platform of WebNews Network Pvt. Ltd. — designed around a local-first news model. News that starts where you are.",
  },
});

export default async function PlatformPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "WebNews platform", path: "/platform" },
        ])}
      />

      <PageHero
        eyebrow="Our flagship platform"
        title="News That Starts Where You Are."
        lede="WebNews.in is the flagship digital news platform of WebNews Network Pvt. Ltd."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <p className="text-base leading-relaxed text-body md:text-lg">
              WebNews is being designed around a local-first digital news
              model, allowing people to discover stories based on where they
              live and what matters to their communities.
            </p>
            <p className="text-base leading-relaxed text-body md:text-lg">
              This approach allows WebNews to combine broad coverage with
              highly relevant local information.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={site.product.newsroom} external>
                Visit WebNews.in
              </ButtonLink>
              <ButtonLink href={`/${locale}/local-news`} variant="secondary">
                The local news network
              </ButtonLink>
            </div>
          </div>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Our structure
            </p>
            <ol className="mt-6 space-y-2">
              {platformStructure.levels.map((level, i) => (
                <li key={level.en} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold tabular-nums text-accent"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold text-strong">
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
              <p className="text-sm leading-relaxed text-muted">
                For example: {t(platformStructure.example, locale)}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Explore WebNews"
          title="From local stories to a connected digital India."
          lede="Stories from every taluk, district and state — organised so the people who care about them can find them."
        />
        <div className="mt-8">
          <ButtonLink href={site.product.newsroom} external>
            Explore WebNews
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
