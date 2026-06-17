import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card ring-1 ring-brand-500/20",
        className,
      )}
    >
      <Image
        src="/nova-mark.svg"
        alt=""
        width={128}
        height={128}
        className="h-8 w-8 object-contain"
        decoding="async"
      />
    </span>
  );
}
