import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode
} from "react";

/** WCAG AA-oriented variants — contrast checked for normal ~14px semibold label text. */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  /** Outlined control on dark surfaces (coal footer bands, modals, etc.) */
  | "outlineInverse"
  /** Outlined control on brand/rust surfaces */
  | "outlineOnBrand";

type VariantStyles = Record<
  ButtonVariant,
  { root: string; busy?: string; disabled?: string }
>;

const variantStyles: VariantStyles = {
  primary: {
    root:
      "border-2 border-coal bg-rustdark text-white hover:border-coal hover:bg-rusthover focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory active:bg-rusthover active:border-coal",
    busy:
      "border-2 border-coal bg-rustdark text-white opacity-100 cursor-wait focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
    disabled:
      "border-2 border-mist bg-mist text-coal cursor-not-allowed opacity-100 hover:bg-mist hover:border-mist hover:text-coal focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
  },
  secondary: {
    root:
      "border-2 border-coal bg-coal text-white hover:border-ash hover:bg-ash focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory active:bg-ash active:border-ash",
    busy:
      "border-2 border-coal bg-coal text-white cursor-wait focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
    disabled:
      "border-2 border-mist bg-mist text-coal cursor-not-allowed hover:bg-mist hover:border-mist hover:text-coal focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
  },
  outline: {
    root:
      "border-2 border-coal bg-transparent text-coal hover:bg-coal hover:text-white focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory active:bg-coal active:text-white",
    busy:
      "border-2 border-coal bg-transparent text-coal cursor-wait focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
    disabled:
      "border-2 border-mist bg-mist text-coal cursor-not-allowed hover:bg-mist hover:text-coal focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
  },
  outlineInverse: {
    root:
      "border-2 border-white bg-transparent text-white hover:bg-white hover:text-coal focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory active:bg-white active:text-coal",
    busy:
      "border-2 border-white bg-transparent text-white cursor-wait focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ivory",
    disabled:
      "border-2 border-mist bg-mist text-coal cursor-not-allowed hover:bg-mist hover:text-coal focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
  },
  outlineOnBrand: {
    root:
      "border-2 border-white bg-transparent text-white hover:bg-white hover:text-coal focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-rust active:bg-white active:text-coal",
    busy:
      "border-2 border-white bg-transparent text-white cursor-wait focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-rust",
    disabled:
      "border-2 border-mist bg-mist text-coal cursor-not-allowed hover:bg-mist hover:text-coal focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-rust"
  }
};

const baseClasses =
  "inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2";

function mergeVariantClasses(
  variant: ButtonVariant,
  state: "default" | "busy" | "disabled"
): string {
  const styles = variantStyles[variant];
  if (state === "busy" && styles.busy) return `${baseClasses} ${styles.busy}`;
  if (state === "disabled" && styles.disabled) return `${baseClasses} ${styles.disabled}`;
  return `${baseClasses} ${styles.root}`;
}

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({
  variant = "primary",
  className = "",
  children,
  disabled,
  "aria-busy": ariaBusy,
  ...props
}: ButtonProps) {
  const state = disabled ? "disabled" : ariaBusy ? "busy" : "default";

  return (
    <button
      className={`${mergeVariantClasses(variant, state)} ${className}`}
      disabled={disabled}
      aria-busy={ariaBusy}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  onClick,
  children,
  "aria-busy": ariaBusy,
  "aria-disabled": ariaDisabled
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
  "aria-busy"?: boolean;
  "aria-disabled"?: boolean | "true" | "false";
}) {
  const disabled = ariaDisabled === true || ariaDisabled === "true";
  const state = disabled ? "disabled" : ariaBusy ? "busy" : "default";

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-busy={ariaBusy}
      aria-disabled={ariaDisabled}
      className={`${mergeVariantClasses(variant, state)} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Same styles as ButtonLink for mailto/tel or other plain anchors. */
export function ButtonAnchor({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
}) {
  const disabled = props["aria-disabled"] === true || props["aria-disabled"] === "true";
  const isBusy = props["aria-busy"] === true;
  const state = disabled ? "disabled" : isBusy ? "busy" : "default";

  return (
    <a href={href} className={`${mergeVariantClasses(variant, state)} ${className}`} {...props}>
      {children}
    </a>
  );
}
