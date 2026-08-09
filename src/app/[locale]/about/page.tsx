import Link from "next/link";
import {
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { mission, values, vision, whoWeAre } from "@/content/company";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/about",
  title: { en: "About us" },
  description: {
    en: "WebNews Network Pvt. Ltd. is a new generation of media company — combining journalism and technology to build a modern digital media ecosystem.",
  },
});

const facts = [
  {
    label: { en: "Company" },
    value: { en: site.legalName },
  },
  {
    label: { en: "Flagship platform" },
    value: { en: "WebNews.in" },
  },
  {
    label: { en: "Focus" },
    value: {
      en: "Digital journalism, AI-powered media technology, local news",
    },
  },
  {
    label: { en: "General enquiries" },
    value: { en: site.emails.general },
  },
];

export default async function AboutPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "About us", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About us"
        title={t(whoWeAre.title, locale)}
        lede={t(whoWeAre.foundingIdea, locale)}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="max-w-2xl space-y-6">
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-body md:text-lg">
                {t(p, locale)}
              </p>
            ))}
          </div>

          <aside>
            <Card>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Company at a glance
              </h2>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label.en}>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      {t(f.label, locale)}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-strong">
                      {t(f.value, locale)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          </aside>
        </div>
      </Section>

      <Section tone="sunken">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our vision
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug text-strong">
                {t(vision.statement, locale)}
              </p>
            </div>
            <Link
              href={`/${locale}/vision`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Read the vision
              <span aria-hidden>→</span>
            </Link>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our mission
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug text-strong">
                {t(mission.statement, locale)}
              </p>
            </div>
            <Link
              href={`/${locale}/mission`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Read the mission
              <span aria-hidden>→</span>
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Our values"
          title="The principles behind the network."
        />
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.key} className="border-t border-subtle pt-5">
              <span className="text-xs font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-strong">
                {t(v.title, locale)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(v.body, locale)}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
