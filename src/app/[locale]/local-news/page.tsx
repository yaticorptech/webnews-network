import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { localStories, localToGlobal } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/local-news",
  title: { en: "Local news network" },
  description: {
    en: "Some of the most important stories happen outside major cities. WebNews Network is building the infrastructure that helps local stories reach the people who care about them.",
  },
});

export default async function LocalNewsPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Local news network", path: "/local-news" },
        ])}
      />

      <PageHero
        eyebrow="Local news network"
        title="Making Local News Visible."
        lede="Some of the most important stories happen outside major cities."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <ul className="space-y-4">
              {localStories.map((story) => (
                <li key={story.en} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <p className="text-lg font-semibold leading-relaxed text-strong md:text-xl">
                    {t(story, locale)}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-semibold text-accent">
              These stories matter.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Our goal is to create the infrastructure that helps these stories
              reach the people who care about them.
            </p>
          </div>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              From local to global
            </p>
            <ol className="mt-6 space-y-2">
              {localToGlobal.map((step, i) => (
                <li key={step.en} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-xs font-bold tabular-nums text-accent"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold text-strong">
                    {t(step, locale)}
                  </span>
                  {i < localToGlobal.length - 1 ? (
                    <span aria-hidden className="text-xs text-muted">
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-sunken p-4">
              <p className="text-sm font-medium leading-relaxed text-strong">
                A story doesn&rsquo;t have to start big to become important.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Be part of it"
          title="Every community deserves a storyteller."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/correspondents`}>
            Become a correspondent
          </ButtonLink>
          <ButtonLink href={`/${locale}/organizations`} variant="secondary">
            Publish your organization&rsquo;s story
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
