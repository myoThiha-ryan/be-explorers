import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** `wide` for image-led sections, `narrow` for reading-width copy */
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-[1200px]",
  wide: "max-w-[1400px]",
  narrow: "max-w-[760px]",
};

export function Container({ children, className, size = "default" }: Props) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
