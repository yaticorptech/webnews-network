"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Wordmark } from "./Wordmark";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/localized";

/**
 * First-paint splash: the wordmark on a card that turns in 3D.
 *
 * The logo is rendered exactly once, in its real brand fills — the depth is in
 * the card behind it, never in the mark. Anything that would tint the wordmark
 * (extruded copies, coloured glows) is deliberately absent.
 *
 * Rendered server-side inside <body> so it is painted with the very first
 * frame — no blank flash before hydration. This component only decides *when*
 * it leaves; every visual lives in globals.css under `.splash-*`.
 *
 * It shows once per browser tab. The boot script in the layout stamps
 * `data-splash="off"` on <html> for repeat loads, hiding the markup in CSS
 * before paint, so an internal reload never flashes the splash.
 */

/** Long enough for the mark to land; short enough to never feel like a wait. */
const MIN_VISIBLE_MS = 1300;
/** Hard stop — a slow asset must never hold the page hostage. */
const MAX_VISIBLE_MS = 3200;
/** Must match the `splash-out` animation duration in globals.css. */
const EXIT_MS = 700;

export const SPLASH_SESSION_KEY = "webnews-splash-seen";

/** Copies of the card body stacked behind it to give the slab its thickness. */
const CARD_DEPTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Phase = "visible" | "leaving" | "gone";
type Timer = ReturnType<typeof setTimeout> | undefined;

export function SplashScreen({ locale }: { locale: Locale }) {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
    } catch {
      /* storage blocked — just show it */
    }
    if (seen) {
      setPhase("gone");
      return;
    }

    const started = performance.now();
    let minTimer: Timer;
    let exitTimer: Timer;

    const leave = () => {
      setPhase("leaving");
      try {
        sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      exitTimer = setTimeout(() => setPhase("gone"), EXIT_MS);
    };

    // Leave once the page has actually loaded, but never before the animation
    // has had time to resolve — a splash that blinks reads as a glitch.
    const scheduleLeave = () => {
      const elapsed = performance.now() - started;
      minTimer = setTimeout(leave, Math.max(0, MIN_VISIBLE_MS - elapsed));
    };

    const capTimer = setTimeout(leave, MAX_VISIBLE_MS);

    if (document.readyState === "complete") {
      scheduleLeave();
    } else {
      window.addEventListener("load", scheduleLeave, { once: true });
    }

    document.documentElement.classList.add("splash-lock");

    return () => {
      window.removeEventListener("load", scheduleLeave);
      clearTimeout(minTimer);
      clearTimeout(capTimer);
      clearTimeout(exitTimer);
      document.documentElement.classList.remove("splash-lock");
    };
  }, []);

  useEffect(() => {
    if (phase !== "visible") {
      document.documentElement.classList.remove("splash-lock");
    }
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className="splash"
      data-state={phase}
      role="status"
      aria-label={locale === "kn" ? "ಲೋಡ್ ಆಗುತ್ತಿದೆ" : "Loading"}
    >
      {/* Receding perspective floor — the cue that sells depth at a glance. */}
      <div className="splash-grid" aria-hidden />

      <div className="splash-stage">
        <div className="splash-card">
          {CARD_DEPTH.map((d) => (
            <span
              key={d}
              className="splash-card-depth"
              style={{ "--d": d } as CSSProperties}
              aria-hidden
            />
          ))}
          <span className="splash-card-face">
            <Wordmark className="splash-svg" title={site.name} />
          </span>
        </div>
        <span className="splash-shadow" aria-hidden />
      </div>

      <p className={`splash-tagline${locale === "kn" ? " is-kn" : ""}`}>
        {t(site.tagline, locale)}
      </p>

      <div className="splash-bar" aria-hidden>
        <span />
      </div>

      {/* Without JS nothing can dismiss the overlay, so never show it. */}
      <noscript>
        <style>{`.splash{display:none !important}`}</style>
      </noscript>
    </div>
  );
}
