import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { mission } from "@/content/company";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/mission",
  title: { en: "Our mission" },
  description: {
    en: "Make every meaningful story discoverable — by strengthening local journalism, enabling digital-first publishing and building scalable media infrastructure.",
  },
});

export default async function MissionPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Our mission", path: "/mission" },
        ])}
      />

      <PageHero
        eyebrow="Our mission"
        title={t(mission.statement, locale)}
        lede="The vision describes where we are going. The mission is what we work on every day."
      />

      <Section>
        <SectionHead
          eyebrow="What we aim to do"
          title="Seven commitments behind the mission."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mission.aims.map((aim, i) => (
            <li key={aim.en}>
              <Card interactive className="h-full">
                <span className="text-xs font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-semibold leading-relaxed text-strong">
                  {t(aim, locale)}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sunken">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/trust`}>
            Our approach to trust
          </ButtonLink>
          <ButtonLink href={`/${locale}/values`} variant="secondary">
            Our values
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
