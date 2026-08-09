import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

/**
 * Locale routing.
 * 1. Skip assets and API routes.
 * 2. If the path already carries a locale, continue.
 * 3. Otherwise negotiate from the `NEXT_LOCALE` cookie, then `Accept-Language`,
 *    then fall back to the default locale.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const header = request.headers.get("accept-language") ?? "";
  const headerLocale = locales.find((l) => header.toLowerCase().includes(l));
  const locale =
    (locales as readonly string[]).includes(cookieLocale ?? "")
      ? cookieLocale
      : (headerLocale ?? defaultLocale);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
