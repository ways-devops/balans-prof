import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <span className="relative block">
    <select
      ref={ref}
      className={cn(
        "flex h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-950 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
  </span>
));
Select.displayName = "Select";

export { Select };
