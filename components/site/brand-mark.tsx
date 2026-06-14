import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex h-11 w-11 shrink-0 overflow-hidden rounded-2xl bg-brand-900 shadow-soft ring-1 ring-brand-900/10",
        className,
      )}
    >
      <img
        src="/icon-192.png"
        alt=""
        width={192}
        height={192}
        className="h-full w-full object-cover"
        decoding="async"
      />
    </span>
  );
}
