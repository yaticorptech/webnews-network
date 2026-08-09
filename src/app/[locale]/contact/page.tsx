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
  path: "/contact",
  title: { en: "Contact" },
  description: {
    en: "Let's connect — general enquiries, advertising, partnerships, careers, editorial and corporate contacts for WebNews Network Pvt. Ltd.",
  },
});

const desks = [
  {
    title: { en: "General Enquiries" },
    email: site.emails.general,
    subject: "General enquiry",
  },
  {
    title: { en: "Advertising" },
    email: site.emails.advertising,
    subject: "Advertising enquiry",
  },
  {
    title: { en: "Partnerships" },
    email: site.emails.partnerships,
    subject: "Partnership enquiry",
  },
  {
    title: { en: "Careers" },
    email: site.emails.careers,
    subject: "Careers enquiry",
  },
  {
    title: { en: "Editorial" },
    email: site.emails.editorial,
    subject: "Editorial enquiry",
  },
  {
    title: { en: "Corporate" },
    email: site.emails.corporate,
    subject: "Corporate enquiry",
  },
];

export default async function ContactPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Connect."
        lede="Have a question, partnership proposal, advertising enquiry or media request? We're listening."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {desks.map((d) => (
              <li key={d.email + d.subject}>
                <Card interactive className="flex h-full flex-col">
                  <h2 className="text-base font-semibold text-strong">
                    {t(d.title, locale)}
                  </h2>
                  <a
                    href={`mailto:${d.email}?subject=${encodeURIComponent(d.subject)}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                  >
                    {d.email}
                    <span aria-hidden>→</span>
                  </a>
                </Card>
              </li>
            ))}
          </ul>

          <aside className="space-y-5">
            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Company
              </h2>
              <address className="mt-4 not-italic text-sm leading-relaxed text-body">
                {site.legalName}
                <br />
                {site.country}
              </address>
              <div className="mt-6">
                <ButtonLink
                  href={`mailto:${site.emails.general}?subject=${encodeURIComponent(
                    "Enquiry",
                  )}`}
                  external
                >
                  Send enquiry
                </ButtonLink>
              </div>
            </Card>

            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Social
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {(Object.keys(site.social) as (keyof typeof site.social)[]).map(
                  (key) => (
                    <li key={key}>
                      <a
                        href={site.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-accent"
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Grievance"
          title="Something we should put right?"
          lede="For grievances about published content or the service, write to the editorial desk with the details — grievances are acknowledged and handled with priority."
        />
      </Section>
    </>
  );
}
