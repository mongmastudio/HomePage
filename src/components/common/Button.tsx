import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "accent" | "rev";
export type ButtonSize = "default" | "sm";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean;
  onClick?: never;
  disabled?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: never;
  external?: never;
  download?: never;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

type Props = AsLink | AsButton;

function classFor(variant: ButtonVariant = "primary", size: ButtonSize = "default", extra?: string): string {
  const v: Record<ButtonVariant, string> = {
    primary: "",
    ghost: "btn--ghost",
    accent: "btn--accent",
    rev: "btn--rev",
  };
  const s: Record<ButtonSize, string> = { default: "", sm: "btn--sm" };
  return ["btn", v[variant], s[size], extra].filter(Boolean).join(" ");
}

export default function Button(props: Props) {
  const cls = classFor(props.variant, props.size, props.className);

  if ("href" in props && props.href !== undefined) {
    const isExternal =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          className={cls}
          href={props.href}
          style={props.style}
          target={props.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link className={cls} href={props.href} style={props.style}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={cls}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ?? "button"}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
