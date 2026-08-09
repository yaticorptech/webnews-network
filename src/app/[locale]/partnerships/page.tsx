import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { partnerTypes } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/partnerships",
  title: { en: "Partner with WebNews" },
  description: {
    en: "Become part of the WebNews Network — institutional, community, media, business, technology and content partnerships.",
  },
});

export default async function PartnershipsPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Partner with WebNews", path: "/partnerships" },
        ])}
      />

      <PageHero
        eyebrow="Partner with WebNews"
        title="Become Part of the WebNews Network."
        lede="We're building a network — and networks grow through partnerships. Whether you're an institution, business, journalist, organization or technology company, there may be an opportunity to work together."
      />

      <Section>
        <SectionHead
          eyebrow="Partnership opportunities"
          title="Six ways to work with us."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((p) => (
            <li key={p.slug} id={p.slug} className="scroll-mt-28">
              <Card interactive className="h-full">
                <h2 className="text-lg font-semibold text-strong">
                  {t(p.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(p.body, locale)}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Partner with us"
          title="Start a conversation."
          lede="Tell us who you are and how you'd like to work together — the partnerships desk reads every proposal."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${site.emails.partnerships}?subject=${encodeURIComponent(
              "Partnership enquiry",
            )}`}
            external
          >
            Start a conversation
          </ButtonLink>
          <ButtonLink href={`/${locale}/organizations`} variant="secondary">
            For organizations
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
