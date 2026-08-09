import {
  ButtonLink,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { advertisingOptions, adSlots } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/advertise",
  title: { en: "Advertise with us" },
  description: {
    en: "Reach the right audience — display advertising, sponsored content, campaign promotion, event promotion, brand stories and digital campaigns on WebNews.",
  },
});

export default async function AdvertisePage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Advertise with us", path: "/advertise" },
        ])}
      />

      <PageHero
        eyebrow="Advertise with us"
        title="Reach the Right Audience."
        lede="WebNews gives businesses and organizations the opportunity to connect with audiences through digital media."
      />

      <Section>
        <SectionHead
          eyebrow="Advertising opportunities"
          title="Ways to advertise across the network."
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {advertisingOptions.map((option) => (
            <li
              key={option.en}
              className="flex items-center gap-3 rounded-xl border border-subtle bg-raised px-4 py-3.5 text-sm font-semibold text-strong"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {t(option, locale)}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Placements"
          title="Published placements on WebNews.in."
          lede="All dimensions in pixels. Placements adapt responsively on mobile without cropping your creative."
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-subtle">
          <table className="w-full min-w-[38rem] text-left text-sm">
            <thead className="bg-sunken">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Placement
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Position
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Size
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-strong">
                  Formats
                </th>
              </tr>
            </thead>
            <tbody>
              {adSlots.map((slot) => (
                <tr key={slot.id} className="border-t border-subtle bg-raised">
                  <th
                    scope="row"
                    className="px-5 py-4 text-left font-medium text-strong"
                  >
                    {t(slot.name, locale)}
                  </th>
                  <td className="px-5 py-4 text-muted">
                    {t(slot.placement, locale)}
                  </td>
                  <td className="px-5 py-4 font-mono text-xs tabular-nums text-accent">
                    {slot.size}
                  </td>
                  <td className="px-5 py-4 text-muted">{slot.formats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Get started"
          title="Let's Build Your Next Campaign."
          lede="Book a placement directly on the live marketplace, or write to the advertising desk for sponsored content, brand stories and custom campaigns."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={site.product.adSlots} external>
            Advertise with us
          </ButtonLink>
          <ButtonLink
            href={`mailto:${site.emails.advertising}?subject=${encodeURIComponent(
              "Advertising enquiry",
            )}`}
            variant="secondary"
            external
          >
            {site.emails.advertising}
          </ButtonLink>
          <ButtonLink href={`/${locale}/media-kit`} variant="secondary">
            Media kit
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
