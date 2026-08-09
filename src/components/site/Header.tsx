"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { homeNav, primaryNav, site, utilityNav } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";
import type { Dictionary } from "@/i18n/dictionary";
import { cx } from "@/components/ui/primitives";

/** Grace period before a dropdown closes, so diagonal mouse paths survive. */
const CLOSE_DELAY_MS = 160;

/** Tiny inline spinner shown on the item whose page is currently loading. */
function Spinner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cx("fade-in h-3.5 w-3.5 animate-spin", className)}
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M8 1.5a6.5 6.5 0 0 1 6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  /** Path of the link just clicked — cleared once the route change lands. */
  const [pending, setPending] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenGroup(null), CLOSE_DELAY_MS);
  };

  const openNow = (key: string) => {
    cancelClose();
    setOpenGroup(key);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every overlay — and clear the loading marker — on navigation.
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
    setPending(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenGroup(null);
      }
    };
    // A dropdown should also close when clicking anywhere outside the nav.
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => cancelClose, []);

  const href = (path: string) => `/${locale}${path}`;
  // The locale root, with no trailing slash — `href("/")` would add one.
  const homeHref = `/${locale}`;
  const onHome = pathname === homeHref;
  const isActive = (path: string) => pathname === href(path);
  const groupActive = (items: { href: string }[]) =>
    items.some((item) => !item.href.startsWith("http") && isActive(item.href));

  /** Mark a link as loading, so the click is visibly acknowledged. */
  const navClick = (path: string) => {
    if (!isActive(path)) setPending(path);
  };

  /* Shared classes: generous hit areas, a visible hover surface and a smooth
     springy press, so every top-level item reads — and feels — clickable. */
  const topItem =
    "press inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium hover:bg-sunken";

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-subtle bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] backdrop-blur-xl"
          : "border-transparent bg-surface",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo locale={locale} />

        {/* ------------------------------------------------ desktop nav */}
        <nav
          ref={navRef}
          aria-label="Primary"
          className="hidden items-center gap-0.5 lg:flex"
        >
          <Link
            href={homeHref}
            aria-current={onHome ? "page" : undefined}
            onClick={() => {
              if (!onHome) setPending("/");
            }}
            className={cx(
              topItem,
              onHome || pending === "/"
                ? "bg-sunken text-accent"
                : "text-body hover:text-accent",
            )}
          >
            {t(homeNav.label, locale)}
            {pending === "/" ? <Spinner /> : null}
          </Link>

          {primaryNav.map((group) => {
            const key = group.label.en;
            const expanded = openGroup === key;
            const active = groupActive(group.items);
            const childPending = group.items.some(
              (item) => item.href === pending,
            );
            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => openNow(key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-haspopup="menu"
                  onClick={() => (expanded ? setOpenGroup(null) : openNow(key))}
                  className={cx(
                    topItem,
                    "gap-1.5",
                    expanded || active || childPending
                      ? "bg-sunken text-accent"
                      : "text-body hover:text-accent",
                  )}
                >
                  {t(group.label, locale)}
                  {childPending ? (
                    <Spinner className="h-3 w-3" />
                  ) : (
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden
                      className={cx(
                        "h-3 w-3 transition-transform duration-200",
                        expanded && "rotate-180",
                      )}
                    >
                      <path
                        d="M2.5 4.5 6 8l3.5-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>

                {expanded ? (
                  <div className="absolute left-0 top-full w-[24rem] pt-2">
                    <ul className="menu-pop overflow-hidden rounded-2xl border border-subtle bg-raised p-2 shadow-2xl shadow-black/20">
                      {group.items.map((item) => {
                        const current = isActive(item.href);
                        const loading = pending === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={href(item.href)}
                              aria-current={current ? "page" : undefined}
                              onClick={() => navClick(item.href)}
                              className={cx(
                                "press group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 hover:bg-sunken",
                                (current || loading) && "bg-sunken",
                              )}
                            >
                              <span>
                                <span
                                  className={cx(
                                    "block text-sm font-semibold",
                                    current || loading
                                      ? "text-accent"
                                      : "text-strong group-hover/item:text-accent",
                                  )}
                                >
                                  {t(item.label, locale)}
                                </span>
                                {item.description ? (
                                  <span className="mt-0.5 block text-xs text-muted">
                                    {t(item.description, locale)}
                                  </span>
                                ) : null}
                              </span>
                              {loading ? (
                                <Spinner className="shrink-0 text-accent" />
                              ) : (
                                <span
                                  aria-hidden
                                  className="text-sm text-accent opacity-0 transition-opacity duration-150 group-hover/item:opacity-100"
                                >
                                  →
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}

          {utilityNav.map((item) => {
            const current = isActive(item.href);
            const loading = pending === item.href;
            return (
              <Link
                key={item.href}
                href={href(item.href)}
                aria-current={current ? "page" : undefined}
                onClick={() => navClick(item.href)}
                className={cx(
                  topItem,
                  current || loading
                    ? "bg-sunken text-accent"
                    : "text-body hover:text-accent",
                )}
              >
                {t(item.label, locale)}
                {loading ? <Spinner /> : null}
              </Link>
            );
          })}
        </nav>

        {/* ---------------------------------------------- right controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LocaleSwitch current={locale} label={dict.language} />
          </div>
          <ThemeToggle label={dict.theme} />
          <a
            href={site.product.newsroom}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[var(--accent-contrast)] hover:opacity-90 md:inline-flex"
          >
            {dict.exploreWebnews}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            className="press grid h-9 w-9 place-items-center rounded-full border border-subtle text-strong lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------- mobile drawer */}
      {open ? (
        <div
          id="mobile-nav"
          className="menu-pop max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-subtle bg-raised lg:hidden"
        >
          <div className="shell space-y-6 py-6">
            <Link
              href={homeHref}
              aria-current={onHome ? "page" : undefined}
              onClick={() => {
                if (!onHome) setPending("/");
              }}
              className={cx(
                "flex items-center gap-2 rounded-lg py-2.5 text-base font-semibold",
                onHome || pending === "/" ? "text-accent" : "text-strong",
              )}
            >
              {t(homeNav.label, locale)}
              {pending === "/" ? <Spinner /> : null}
            </Link>

            {primaryNav.map((group) => (
              <div key={group.label.en}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {t(group.label, locale)}
                </p>
                <ul className="mt-2 space-y-0.5">
                  {group.items.map((item) => {
                    const current = isActive(item.href);
                    const loading = pending === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={href(item.href)}
                          aria-current={current ? "page" : undefined}
                          onClick={() => navClick(item.href)}
                          className={cx(
                            "press -mx-3 flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-base font-medium active:bg-sunken",
                            current || loading
                              ? "bg-sunken text-accent"
                              : "text-strong",
                          )}
                        >
                          {t(item.label, locale)}
                          {loading ? (
                            <Spinner className="shrink-0 text-accent" />
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-3 border-t border-subtle pt-5">
              {utilityNav.map((item) => {
                const loading = pending === item.href;
                return (
                  <Link
                    key={item.href}
                    href={href(item.href)}
                    onClick={() => navClick(item.href)}
                    className={cx(
                      "press inline-flex items-center gap-2 rounded-full border border-subtle px-4 py-2.5 text-sm font-semibold",
                      loading ? "text-accent" : "text-strong",
                    )}
                  >
                    {t(item.label, locale)}
                    {loading ? <Spinner /> : null}
                  </Link>
                );
              })}
              <LocaleSwitch current={locale} label={dict.language} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
