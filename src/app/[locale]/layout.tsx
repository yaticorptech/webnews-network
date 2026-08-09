import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SplashScreen } from "@/components/site/SplashScreen";
import { JsonLd } from "@/components/ui/primitives";
import { site } from "@/content/site";
import { isLocale, locales, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { t } from "@/i18n/localized";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    ...buildMetadata({
      locale,
      path: "/",
      title: `${site.name} — ${t(site.tagline, locale)}`,
      description: t(site.descriptor, locale),
    }),
    title: {
      default: `${site.name} — ${t(site.tagline, locale)}`,
      template: `%s · ${site.name}`,
    },
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.legalName,
    formatDetection: { telephone: false, address: false, email: false },
  };
}

/**
 * Applied before first paint so the stored theme never flashes.
 * Kept inline and tiny; it is the only blocking script on the page.
 */
const themeBootScript = `(function(){try{var s=localStorage.getItem('webnews-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;

/**
 * Splash runs once per tab. Marking <html> here — before the first paint —
 * hides it in CSS on repeat loads, so a reload never flashes the animation.
 *
 * The timeout is a failsafe: if hydration never happens, nothing in React can
 * dismiss the overlay, and a full-screen splash that never lifts is a dead
 * site. It fires well after the component's own 3.2s cap.
 */
const splashBootScript = `(function(){try{var e=document.documentElement;if(sessionStorage.getItem('webnews-splash-seen')==='1'){e.dataset.splash='off';return}e.classList.add('splash-lock');setTimeout(function(){e.dataset.splash='off';e.classList.remove('splash-lock')},6000)}catch(t){}})()`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={localeTags[locale]} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script dangerouslySetInnerHTML={{ __html: splashBootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Kannada:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-dvh">
        <SplashScreen locale={locale} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--accent-contrast)]"
        >
          {dict.skipToContent}
        </a>
        <JsonLd data={organizationJsonLd(locale)} />
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
