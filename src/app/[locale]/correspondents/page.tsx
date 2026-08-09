import {
  ButtonLink,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { correspondentRoles } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/correspondents",
  title: { en: "Journalists & correspondents" },
  description: {
    en: "Be the voice of your community — WebNews Network is building opportunities for journalists, writers, photographers, videographers and local correspondents.",
  },
});

export default async function CorrespondentsPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Journalists & correspondents", path: "/correspondents" },
        ])}
      />

      <PageHero
        eyebrow="Journalists & correspondents"
        title="Be the Voice of Your Community."
        lede="We believe journalism becomes stronger when communities have people telling their own stories."
      />

      <Section>
        <SectionHead
          eyebrow="Opportunities"
          title="Roles across the network."
          lede="WebNews Network is building opportunities for journalists, writers, photographers, videographers and local correspondents. Opportunities may include:"
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {correspondentRoles.map((role) => (
            <li
              key={role.en}
              className="flex items-center gap-3 rounded-xl border border-subtle bg-raised px-4 py-3.5 text-sm font-semibold text-strong"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {t(role, locale)}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sunken">
        <SectionHead
          eyebrow="Join the network"
          title="Become a correspondent."
          lede="Tell us who you are, where you are, and the stories you want to tell."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={`mailto:${site.emails.careers}?subject=${encodeURIComponent(
              "Correspondent application",
            )}`}
            external
          >
            Become a correspondent
          </ButtonLink>
          <ButtonLink href={`/${locale}/careers`} variant="secondary">
            View all open positions
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
