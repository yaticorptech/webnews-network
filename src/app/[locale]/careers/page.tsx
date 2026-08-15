import {
  ButtonLink,
  Card,
  JsonLd,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import { careerTeams, openRoles } from "@/content/commercial";
import { site } from "@/content/site";
import { t } from "@/i18n/localized";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/careers",
  title: { en: "Careers" },
  description: {
    en: "Build the future of media with WebNews Network — editorial, technology, marketing, sales, creative and operations roles.",
  },
});

export default async function CareersPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />

      <PageHero
        eyebrow="Careers"
        title="Build the Future of Media With Us."
        lede="We're looking for people who want to work at the intersection of media, technology and community."
      />

      <Section tone="sunken" id="open-positions">
        <SectionHead
          eyebrow="Current openings"
          title={
            openRoles.length === 1
              ? "1 position open right now."
              : `${openRoles.length} positions open right now.`
          }
        />

        <div className="mt-10 space-y-8">
          {openRoles.map((r) => {
            const applyHref = site.product.careersApply;

            return (
              <article
                key={r.slug}
                id={r.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-subtle bg-raised"
              >
                {/* ------------------------------------------------ header */}
                <header className="flex flex-col gap-5 border-b border-subtle p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-strong">
                      {t(r.title, locale)}
                    </h3>
                    <p className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                      {[t(r.function, locale), t(r.territory, locale)].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-subtle px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </p>
                  </div>
                  <ButtonLink href={applyHref} external className="shrink-0">
                    Apply
                  </ButtonLink>
                </header>

                <div className="space-y-10 p-6 md:p-8">
                  {/* ----------------------------------------- overview */}
                  <div className="max-w-3xl space-y-4">
                    {r.overview.map((p, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-body"
                      >
                        {t(p, locale)}
                      </p>
                    ))}
                  </div>

                  <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* ---------------------------------- responsibilities */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Key responsibilities
                      </h4>
                      <ul className="mt-4 space-y-2.5">
                        {r.responsibilities.map((item) => (
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
                    </div>

                    <div className="space-y-8">
                      {/* ------------------------- who we are looking for */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Who we are looking for
                        </h4>
                        <div className="mt-4 space-y-3">
                          {r.lookingFor.map((p, i) => (
                            <p
                              key={i}
                              className="text-sm leading-relaxed text-muted"
                            >
                              {t(p, locale)}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* ---------------------------------- qualification */}
                      <div className="rounded-2xl border border-subtle border-l-4 border-l-accent bg-sunken p-5 md:p-6">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          Qualification
                        </h4>
                        <div className="mt-4 space-y-3">
                          {r.qualification.map((p, i) => (
                            <p
                              key={i}
                              className={
                                i === 0
                                  ? "text-base font-semibold leading-relaxed text-strong"
                                  : "text-sm leading-relaxed text-muted"
                              }
                            >
                              {t(p, locale)}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------------ key attributes */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      Key attributes
                    </h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {r.attributes.map((a) => (
                        <li
                          key={a.en}
                          className="rounded-full border border-subtle bg-sunken px-3.5 py-1.5 text-xs font-medium text-strong"
                        >
                          {t(a, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* --------------------------- what makes it different */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      What makes this role different
                    </h4>
                    <div className="mt-4 max-w-3xl space-y-3">
                      {r.distinction.map((p, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed text-muted"
                        >
                          {t(p, locale)}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* ------------------------------------------- closer */}
                  <div className="flex flex-col gap-5 rounded-2xl bg-sunken p-6 sm:flex-row sm:items-center sm:justify-between">
                    {r.tagline ? (
                      <p className="text-base font-bold uppercase tracking-[0.14em] text-strong">
                        {t(r.tagline, locale)}
                      </p>
                    ) : (
                      <span />
                    )}
                    <ButtonLink href={applyHref} external className="shrink-0">
                      Apply for this role
                    </ButtonLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted">
          Nothing on the list fits? Write to us anyway —{" "}
          <a
            href={`mailto:${site.emails.careers}`}
            className="text-accent hover:underline"
          >
            {site.emails.careers}
          </a>
        </p>
      </Section>

      <Section>
        <SectionHead eyebrow="Teams" title="The teams that build the network." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careerTeams.map((team) => (
            <li key={team.slug}>
              <Card interactive className="h-full">
                <h2 className="text-lg font-semibold text-strong">
                  {t(team.title, locale)}
                </h2>
                <ul className="mt-3 space-y-2">
                  {team.roles.map((role) => (
                    <li
                      key={role.en}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      {t(role, locale)}
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
          eyebrow="Beyond full-time roles"
          title="Be the voice of your community."
          lede="Journalists, writers, photographers and videographers can also join the network as local correspondents."
        />
        <div className="mt-8">
          <ButtonLink href={`/${locale}/correspondents`} variant="secondary">
            Become a correspondent
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
