import Image from "next/image";
import { images } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  priority?: boolean;
};

export function GuidePortrait({ className, priority }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-mist",
        className,
      )}
    >
      <Image
        src={images.guidePortrait.src}
        alt={images.guidePortrait.alt}
        fill
        sizes="(min-width: 1024px) 46vw, 100vw"
        priority={priority}
        /* The guide stands in the lower half of the frame, so the crop is
           biased downwards — sky is what gets trimmed, not her. */
        className="object-cover object-[50%_60%]"
      />
    </div>
  );
}
