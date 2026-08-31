import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onDark" | "onDarkGhost" | "quiet";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy-800 text-white hover:bg-navy-600",
  secondary:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-800 hover:bg-navy-50",
  onDark: "bg-white text-navy-800 hover:bg-navy-100",
  onDarkGhost:
    "border border-white/35 text-white hover:border-white hover:bg-white/10",
  quiet: "text-navy-800 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & { href: string; external?: boolean };
type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(
    base,
    variants[variant],
    variant === "quiet" ? "h-auto px-0" : sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Strip our own props before spreading the rest onto the DOM node.
  const rest: Partial<ButtonAsButton> = { ...(props as ButtonAsButton) };
  delete rest.variant;
  delete rest.size;
  delete rest.className;
  delete rest.children;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
