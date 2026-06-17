import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const points = ["Контроль налогов", "Сдача отчётности", "Защита от штрафов", "Персональная поддержка"];

export function LeadSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-6 text-slate-950 shadow-soft sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-500">Бесплатная консультация</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Сосредоточьтесь на развитии бизнеса. Мы возьмём на себя всё остальное.
                </h2>
              </div>
              <div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-brand-500/15">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                      <span className="text-sm font-semibold text-slate-800">{point}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-6 w-full whitespace-normal px-4 text-center leading-5 sm:w-auto sm:whitespace-nowrap sm:px-7">
                  <a href="#lead">
                    Получить бесплатную консультацию
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
