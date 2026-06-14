import { Clock3, ShieldCheck } from "lucide-react";

import { LeadForm } from "@/components/site/lead-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function LeadSection() {
  return (
    <section id="lead" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1fr] lg:px-8">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Заявка"
              title="Получите бесплатную консультацию"
              description="Оставьте контакты и кратко опишите задачу. Мы оценим объем работы, зададим уточняющие вопросы и предложим индивидуальное решение."
            />
            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand-900" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-600">
                  Обычно возвращаемся с первичным ответом в течение рабочего дня.
                </p>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-900" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-600">
                  Данные из заявки используем только для связи и расчета бухгалтерского сопровождения.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
