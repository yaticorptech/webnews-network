import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { longTermFocus } from "@/content/company";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/corporate",
  title: { en: "Investors & corporate" },
  description: {
    en: "WebNews Network is building technology and infrastructure designed to support the next generation of digital media — built for long-term scale.",
  },
});

export default async function CorporatePage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Investors & corporate", path: "/corporate" },
        ])}
      />

      <PageHero
        eyebrow="Investors & corporate"
        title="Building for Long-Term Scale."
        lede="WebNews Network is building technology and infrastructure designed to support the next generation of digital media."
      />

      <Section>
        <SectionHead
          eyebrow="Long-term focus"
          title="Where the company is headed."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {longTermFocus.map((item, i) => (
            <li key={item.en}>
              <Card interactive className="h-full">
                <span className="text-xs font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-semibold leading-relaxed text-strong">
                  {t(item, locale)}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Interested in WebNews Network?"
          title="Talk to the corporate desk."
          lede="For investment, strategic and corporate enquiries."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${site.emails.corporate}?subject=${encodeURIComponent(
              "Corporate enquiry",
            )}`}
            external
          >
            Corporate enquiries
          </ButtonLink>
          <ButtonLink href={`/${locale}/vision`} variant="secondary">
            Read our vision
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
