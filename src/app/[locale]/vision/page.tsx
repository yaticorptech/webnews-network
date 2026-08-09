import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { futureVision, vision } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/vision",
  title: { en: "Our vision" },
  description: {
    en: "To build one of the world's most connected digital media networks — where stories from every community can be discovered by the people who care about them.",
  },
});

export default async function VisionPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Our vision", path: "/vision" },
        ])}
      />

      <PageHero
        eyebrow="Our vision"
        title={t(vision.statement, locale)}
        lede={t(vision.lede, locale)}
      />

      <Section>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-body md:text-xl">
            {t(vision.body, locale)}
          </p>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Future vision"
          title={t(futureVision.title, locale)}
          lede={t(futureVision.paragraphs[0], locale)}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {t(futureVision.channelsLede, locale)}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {futureVision.channels.map((c) => (
                <li
                  key={c.en}
                  className="flex items-center gap-3 rounded-xl border border-subtle bg-raised px-4 py-3 text-sm font-medium text-strong"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {t(c, locale)}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted">
              WebNews Network is building for this future.
            </p>
          </div>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Our ambition
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug text-strong">
              {t(futureVision.ambition, locale)}
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={`/${locale}/mission`}>
            Read the mission
          </ButtonLink>
          <ButtonLink href={`/${locale}/network`} variant="secondary">
            Explore the network
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
