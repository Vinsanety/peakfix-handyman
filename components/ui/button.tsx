import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode
} from "react";

/** WCAG AA-oriented variants — contrast checked for normal ~14px semibold label text. */
export type ButtonVariant = "primary" | "secondary" | "outline";

type VariantStyles = Record<
  ButtonVariant,
  { root: string; busy?: string; disabled?: string }
>;

const variantStyles: VariantStyles = {
  primary: {
    root:
      "border-2 border-coal bg-coal text-ivory hover:border-ash hover:bg-ash hover:text-ivory active:border-rustdark active:bg-rustdark active:text-ivory",
    busy:
      "border-2 border-coal bg-coal text-ivory opacity-100 cursor-wait",
    disabled:
      "border-2 border-steel/50 bg-mist text-concrete cursor-not-allowed opacity-100 hover:border-steel/50 hover:bg-mist hover:text-concrete"
  },
  secondary: {
    root:
      "border-2 border-rustdark bg-rustdark text-ivory hover:border-rust hover:bg-rust hover:text-ivory active:border-coal active:bg-coal active:text-ivory",
    busy:
      "border-2 border-rustdark bg-rustdark text-ivory cursor-wait",
    disabled:
      "border-2 border-steel/50 bg-mist text-concrete cursor-not-allowed hover:border-steel/50 hover:bg-mist hover:text-concrete"
  },
  outline: {
    root:
      "border-2 border-coal bg-transparent text-coal hover:bg-coal hover:text-ivory active:border-rustdark active:bg-rustdark active:text-ivory",
    busy:
      "border-2 border-coal bg-transparent text-coal cursor-wait",
    disabled:
      "border-2 border-steel/50 bg-mist text-concrete cursor-not-allowed hover:border-steel/50 hover:bg-mist hover:text-concrete"
  }
};

export const buttonFocusClasses =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-rustlight focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

const baseClasses =
  `inline-flex min-h-11 w-fit max-w-full items-center justify-center gap-2 rounded-none px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] shadow-[0_1px_0_rgba(28,40,33,0.14)] transition-[color,background-color,border-color,box-shadow,transform] duration-180 ease-out motion-reduce:transform-none active:translate-y-px ${buttonFocusClasses}`;

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
