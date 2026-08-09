import Link from "next/link";
import {
  ButtonLink,
  Card,
  Section,
  SectionHead,
} from "@/components/ui/primitives";
import {
  belief,
  capabilities,
  intro,
  platformStructure,
} from "@/content/company";
import { verticals } from "@/content/verticals";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";
import type { Dictionary } from "@/i18n/dictionary";

const accentRing: Record<string, string> = {
  red: "from-red-500/28",
  crimson: "from-rose-600/24",
  ink: "from-slate-400/16",
};

/* ------------------------------------------------------------------- Intro */

export function IntroStrip({ locale }: { locale: Locale }) {
  return (
    <Section tone="sunken">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="The company"
            title={t(intro.title, locale)}
          />
          <div className="mt-6 max-w-2xl space-y-4">
            {intro.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {t(p, locale)}
              </p>
            ))}
          </div>
        </div>

        <Card className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Our belief
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug text-strong md:text-[1.75rem]">
            {t(belief, locale)}
          </p>
        </Card>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- What we do */

export function WhatWeDo({ locale }: { locale: Locale }) {
  return (
    <Section id="what-we-do">
      <SectionHead
        eyebrow="What we do"
        title="Technology. Journalism. Community."
        lede="Our ecosystem brings together multiple capabilities under one network."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <li key={c.key}>
            <Card interactive className="h-full">
              <h3 className="text-lg font-semibold text-strong">
                {t(c.title, locale)}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {t(c.body, locale)}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------------------------------------------- Flagship platform */

export function PlatformStrip({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section tone="sunken">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="Our flagship platform"
            title="WebNews — news that starts where you are."
            lede="WebNews.in is being designed around a local-first digital news model, allowing people to discover stories based on where they live and what matters to their communities."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.product.newsroom} external>
              {dict.exploreWebnews}
            </ButtonLink>
            <ButtonLink href={`/${locale}/platform`} variant="secondary">
              About the platform
            </ButtonLink>
          </div>
        </div>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Our structure
          </p>
          <p className="mt-4 text-lg font-semibold leading-relaxed text-strong">
            {platformStructure.levels
              .map((level) => t(level, locale))
              .join(" → ")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            This approach allows WebNews to combine broad coverage with highly
            relevant local information.
          </p>
        </Card>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Ecosystem */

export function EcosystemGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section id="ecosystem">
      <SectionHead
        eyebrow="Our media ecosystem"
        title="One Network. Many Voices."
        lede="WebNews Network is designed to support different types of content and communities."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {verticals.map((v) => (
          <li key={v.slug}>
            <Card interactive className="relative h-full overflow-hidden">
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${accentRing[v.accent]} to-transparent blur-2xl`}
              />
              <h3 className="text-lg font-semibold text-strong">
                {t(v.name, locale)}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {t(v.summary, locale)}
              </p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink href={`/${locale}/network`} variant="secondary">
          {dict.exploreNetwork}
        </ButtonLink>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Final CTA */

export function FinalCta({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section>
      <div className="grain overflow-hidden rounded-3xl border border-subtle p-8 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Let&rsquo;s Build the Future of Digital News.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Whether you have a story to tell, a community to represent, a
              business to grow, or an idea to build — we&rsquo;d love to hear
              from you. Join the WebNews Network.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <ButtonLink href={site.product.newsroom} external>
              {dict.exploreWebnews}
            </ButtonLink>
            <ButtonLink href={`/${locale}/partnerships`} variant="secondary">
              {dict.partnerWithUs}
            </ButtonLink>
            <ButtonLink href={`/${locale}/careers`} variant="secondary">
              {dict.joinOurTeam}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
