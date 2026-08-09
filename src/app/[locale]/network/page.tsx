import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { communityActions } from "@/content/company";
import { verticals } from "@/content/verticals";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/network",
  title: { en: "Our media ecosystem" },
  description: {
    en: "One network, many voices — WebNews News, Business, Education, Sports, Community, Culture and Events. The verticals of the WebNews Network.",
  },
});

const accentRing: Record<string, string> = {
  red: "from-red-500/28",
  crimson: "from-rose-600/24",
  ink: "from-slate-400/16",
};

export default async function NetworkPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Our media ecosystem", path: "/network" },
        ])}
      />

      <PageHero
        eyebrow="Our media ecosystem"
        title="One Network. Many Voices."
        lede="WebNews Network is designed to support different types of content and communities."
      />

      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <li key={v.slug} id={v.slug} className="scroll-mt-28">
              <Card interactive className="relative h-full overflow-hidden">
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accentRing[v.accent]} to-transparent blur-2xl`}
                />
                <h2 className="text-lg font-semibold text-strong">
                  {t(v.name, locale)}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {t(v.summary, locale)}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          These verticals can evolve as the WebNews network grows.
        </p>
      </Section>

      <Section tone="sunken">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHead
            eyebrow="Community"
            title="Stories That Matter to Communities."
            lede="WebNews is not only about headlines. It's about people — the stories that shape schools, businesses, neighborhoods, institutions and communities."
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              A platform where communities can:
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {communityActions.map((a) => (
                <li
                  key={a.en}
                  className="rounded-full border border-subtle bg-raised px-5 py-2.5 text-base font-semibold text-strong"
                >
                  {t(a, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/${locale}/organizations`}>
            Publish with WebNews
          </ButtonLink>
          <ButtonLink href={`/${locale}/local-news`} variant="secondary">
            The local news network
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
