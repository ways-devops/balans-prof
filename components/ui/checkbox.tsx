import * as React from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "mt-0.5 h-5 w-5 shrink-0 rounded-md border border-slate-300 text-brand-900 accent-brand-900 transition-all hover:border-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
