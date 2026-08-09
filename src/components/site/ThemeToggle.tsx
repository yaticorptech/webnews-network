"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "webnews-theme";

/**
 * Light/dark toggle. Reads the class applied by the inline boot script in
 * `[locale]/layout.tsx`, so there is no flash of the wrong theme on first paint.
 */
export function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still applies for this page view */
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={dark ?? false}
      className="grid h-9 w-9 place-items-center rounded-full border border-subtle text-muted transition-colors hover:text-accent"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
            fill="currentColor"
          />
        )}
      </svg>
    </button>
  );
}
