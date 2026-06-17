import { FileText, Leaf, Mail, PenLine } from "lucide-react";

import { BrandMark } from "@/components/site/brand-mark";
import { cn } from "@/lib/utils";

type ContactIllustrationProps = {
  className?: string;
};

export function ContactIllustration({ className }: ContactIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-[240px] overflow-hidden rounded-[18px] border border-slate-200 bg-gradient-to-br from-white via-[#FFFBF2] to-slate-50 shadow-card",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(212,162,76,0.22),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(15,23,42,0.06),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="absolute left-[8%] top-[12%] w-[40%] rotate-[-3deg] rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <BrandMark className="h-10 w-10 rounded-xl shadow-none" />
          <div>
            <div className="h-2.5 w-24 rounded-full bg-slate-200" />
            <div className="mt-2 h-2 w-16 rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <div className="h-2.5 rounded-full bg-slate-100" />
          <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
          <div className="h-2.5 w-2/3 rounded-full bg-slate-100" />
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-brand-50 p-3 text-brand-500 ring-1 ring-brand-500/20">
          <Mail className="h-5 w-5" />
          <div className="h-2 w-24 rounded-full bg-brand-500/30" />
        </div>
      </div>

      <div className="absolute right-[12%] top-[14%] flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-brand-500/15">
        <Leaf className="h-12 w-12 text-brand-500" />
      </div>
      <div className="absolute right-[6%] top-[7%] h-16 w-16 rounded-full bg-brand-500/15" />
      <div className="absolute right-[20%] top-[7%] h-10 w-10 rounded-full bg-slate-950/5" />

      <div className="absolute bottom-[14%] right-[10%] w-[42%] rotate-[2deg] rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-slate-950">
            <FileText className="h-5 w-5" />
          </span>
          <div className="space-y-2">
            <div className="h-2.5 w-24 rounded-full bg-slate-200" />
            <div className="h-2 w-16 rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="h-2 rounded-full bg-slate-100" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[18%] left-[42%] h-28 w-4 rotate-[50deg] rounded-full bg-slate-950 shadow-card" />
      <div className="absolute bottom-[21%] left-[50%] h-10 w-4 rotate-[50deg] rounded-full bg-brand-500" />
      <div className="absolute bottom-[12%] left-[38%] flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-card backdrop-blur">
        <PenLine className="h-5 w-5 text-brand-500" />
        <div className="h-2 w-28 rounded-full bg-slate-100" />
      </div>
    </div>
  );
}
