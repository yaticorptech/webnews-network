import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { aiCapabilities, contentWorkflow } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/technology",
  title: { en: "Technology" },
  description: {
    en: "Where journalism meets technology — AI-powered publishing, intelligent content workflows and the systems behind the WebNews Network.",
  },
});

export default async function TechnologyPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ])}
      />

      <PageHero
        eyebrow="Technology"
        title="Where Journalism Meets Technology."
        lede="The media industry is changing rapidly. The future isn't simply about publishing more content — it's about building better systems to discover, create, organize, verify, distribute and understand information."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              eyebrow="AI-powered publishing"
              title="Intelligence that assists the newsroom."
              lede="Artificial intelligence can help media teams process large volumes of information efficiently. WebNews Network is investing in technology to support this transformation."
            />
            <blockquote className="mt-8 rounded-2xl border-l-4 border-accent bg-sunken p-6">
              <p className="text-lg font-semibold leading-snug text-strong">
                Technology doesn&rsquo;t replace journalism. It empowers
                journalists to do more.
              </p>
            </blockquote>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Our technology vision includes systems for:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {aiCapabilities.map((c) => (
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
          </div>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Intelligent content workflow"
          title="From Information to Publication."
          lede="This technology-driven workflow is designed to improve speed while maintaining editorial responsibility."
        />
        <ol className="mt-12 flex flex-wrap items-center gap-3">
          {contentWorkflow.map((step, i) => (
            <li key={step.en} className="flex items-center gap-3">
              <Card className="px-5 py-3">
                <span className="mr-2 text-xs font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-strong">
                  {t(step, locale)}
                </span>
              </Card>
              {i < contentWorkflow.length - 1 ? (
                <span aria-hidden className="text-lg text-muted">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/trust`}>
            Our approach to trust
          </ButtonLink>
          <ButtonLink href={`/${locale}/careers`} variant="secondary">
            Join the technology team
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
