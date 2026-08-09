import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/press",
  title: { en: "Media & press" },
  description: {
    en: "WebNews Network in the media — press coverage, company announcements and media enquiries.",
  },
});

/** What this page will carry as the company grows. */
const upcoming = [
  { en: "Press coverage" },
  { en: "Company announcements" },
  { en: "Product launches" },
  { en: "Interviews" },
  { en: "Media mentions" },
  { en: "Press releases" },
];

export default async function PressPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Media & press", path: "/press" },
        ])}
      />

      <PageHero
        eyebrow="Media & press"
        title="WebNews Network in the Media."
        lede="Coverage, announcements and everything the press needs about the company."
      />

      <Section>
        <SectionHead
          eyebrow="Coming soon"
          title="This section will grow with the network."
          lede="As WebNews Network grows, this page will carry:"
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((item) => (
            <li
              key={item.en}
              className="flex items-center gap-3 rounded-xl border border-subtle bg-raised px-4 py-3.5 text-sm font-semibold text-strong"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {t(item, locale)}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHead
            eyebrow="Media enquiries"
            title="Talk to our media team."
            lede="For press, interviews and media-related enquiries."
          />
          <Card className="flex flex-col items-start gap-4">
            <p className="text-sm leading-relaxed text-muted">
              Reach the corporate communications desk directly — we respond to
              working journalists first.
            </p>
            <ButtonLink
              href={`mailto:${site.emails.corporate}?subject=${encodeURIComponent(
                "Media enquiry",
              )}`}
              external
            >
              Contact our media team
            </ButtonLink>
          </Card>
        </div>
      </Section>
    </>
  );
}
