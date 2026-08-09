import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { organizationTypes } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/organizations",
  title: { en: "For organizations" },
  description: {
    en: "Schools, colleges, NGOs, businesses, startups and institutions — publish your achievements, announcements, initiatives and events through the WebNews Network.",
  },
});

export default async function OrganizationsPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "For organizations", path: "/organizations" },
        ])}
      />

      <PageHero
        eyebrow="For organizations"
        title="Your Story Deserves to Be Seen."
        lede="WebNews Network works with organizations that want to communicate their achievements, announcements, initiatives and events to relevant audiences."
      />

      <Section>
        <SectionHead
          eyebrow="Who can work with us"
          title="Built for every kind of organization."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {organizationTypes.map((org) => (
            <li key={org.slug}>
              <Card interactive className="h-full">
                <h2 className="text-lg font-semibold text-strong">
                  {t(org.title, locale)}
                </h2>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {t(org.verb, locale)}
                </p>
                <ul className="mt-3 space-y-2">
                  {org.items.map((item) => (
                    <li
                      key={item.en}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      {t(item, locale)}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Get started"
          title="Tell us about your organization."
          lede="Write to the partnerships desk and we will help you find the right way to share your stories with the network."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${site.emails.partnerships}?subject=${encodeURIComponent(
              "Organization enquiry",
            )}`}
            external
          >
            {site.emails.partnerships}
          </ButtonLink>
          <ButtonLink href={`/${locale}/partnerships`} variant="secondary">
            Partnership opportunities
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
