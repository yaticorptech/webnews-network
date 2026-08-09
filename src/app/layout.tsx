import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root layout is intentionally thin: `[locale]/layout.tsx` owns <html lang>
 * and the site chrome. This exists so Next has a root boundary for the
 * middleware redirect and for global CSS.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
