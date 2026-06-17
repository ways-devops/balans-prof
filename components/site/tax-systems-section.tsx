import { Clock3, ShieldCheck, Star, UsersRound } from "lucide-react";

import { stats } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

const icons = [UsersRound, Clock3, ShieldCheck, Star];

export function TaxSystemsSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 sm:divide-y-0 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Star;
            return (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="flex h-full items-start gap-4 px-3 py-7 sm:px-6 lg:px-8">
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/15 sm:flex">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-500 sm:text-sm">{stat.label}</p>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
