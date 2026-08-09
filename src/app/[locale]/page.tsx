import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import {
  EcosystemGrid,
  FinalCta,
  IntroStrip,
  PlatformStrip,
  WhatWeDo,
} from "@/components/sections/HomeSections";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <IntroStrip locale={locale} />
      <WhatWeDo locale={locale} />
      <PlatformStrip locale={locale} dict={dict} />
      <EcosystemGrid locale={locale} dict={dict} />
      <FinalCta locale={locale} dict={dict} />
    </>
  );
}
