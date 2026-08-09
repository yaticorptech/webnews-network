import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ Section */

export function Section({
  children,
  className,
  tone = "base",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "base" | "sunken" | "raised";
  id?: string;
}) {
  const toneClass =
    tone === "sunken" ? "bg-sunken" : tone === "raised" ? "bg-raised" : "";
  return (
    <section
      id={id}
      className={cx("py-16 md:py-24 rule-top", toneClass, className)}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------- Section head */

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>
      ) : null}
    </header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      <span aria-hidden className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------- Card */

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-subtle bg-raised p-6",
        interactive && "card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ Buttons */

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[var(--accent-contrast)] hover:opacity-90",
  secondary:
    "border border-subtle text-strong hover:border-[color-mix(in_oklab,var(--accent)_60%,transparent)] hover:text-accent",
  ghost: "text-strong hover:text-accent",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  const classes = cx(buttonBase, buttonVariants[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------- Prose */

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-base leading-relaxed text-body [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-semibold [&_strong]:text-strong [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- Page hero */

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="grain relative overflow-hidden border-b border-subtle">
      <div className="shell py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------- JSON-LD */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is generated server-side from typed data, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
