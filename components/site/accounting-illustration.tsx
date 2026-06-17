import { BarChart3, Calculator, CheckCircle2, FileSpreadsheet, Laptop, PieChart, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

type AccountingIllustrationProps = {
  className?: string;
};

export function AccountingIllustration({ className }: AccountingIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-[240px] overflow-hidden rounded-[18px] border border-slate-200 bg-gradient-to-br from-white via-[#FFFBF2] to-slate-50 shadow-card",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(212,162,76,0.22),transparent_30%),radial-gradient(circle_at_20%_82%,rgba(15,23,42,0.07),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="absolute left-[7%] top-[10%] w-[43%] rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
            <FileSpreadsheet className="h-5 w-5" />
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400">
            <PieChart className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-2.5 w-2/3 rounded-full bg-slate-200" />
          <div className="h-2.5 w-full rounded-full bg-slate-100" />
          <div className="h-2.5 w-5/6 rounded-full bg-slate-100" />
        </div>
        <div className="mt-6 flex h-24 items-end gap-2 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
          <span className="h-8 flex-1 rounded-t-lg bg-brand-500/45" />
          <span className="h-14 flex-1 rounded-t-lg bg-brand-500/70" />
          <span className="h-10 flex-1 rounded-t-lg bg-brand-500/55" />
          <span className="h-20 flex-1 rounded-t-lg bg-brand-500" />
          <span className="h-12 flex-1 rounded-t-lg bg-brand-500/60" />
        </div>
      </div>

      <div className="absolute right-[8%] top-[13%] w-[34%] rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between">
          <Laptop className="h-7 w-7 text-slate-950" />
          <BarChart3 className="h-6 w-6 text-brand-500" />
        </div>
        <div className="mt-4 rounded-2xl bg-slate-950 p-3">
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} className="h-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
        <div className="mt-3 h-2 rounded-full bg-slate-100" />
        <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-100" />
      </div>

      <div className="absolute bottom-[10%] right-[12%] w-[28%] rounded-3xl border border-brand-500/20 bg-brand-500 p-4 text-slate-950 shadow-soft">
        <Calculator className="h-7 w-7" />
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className="h-3 rounded-md bg-white/45" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[12%] left-[13%] flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-card backdrop-blur">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-500">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="space-y-1.5">
          <div className="h-2 w-24 rounded-full bg-slate-200" />
          <div className="h-2 w-16 rounded-full bg-slate-100" />
        </div>
      </div>

      <div className="absolute right-[31%] top-[49%] flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/20 bg-white text-brand-500 shadow-card">
        <CheckCircle2 className="h-6 w-6" />
      </div>
    </div>
  );
}
