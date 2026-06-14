import { ArrowRight, CheckCircle2, Globe2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutDialog } from "@/components/site/about-dialog";
import { stats } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const principles = [
  "Работаем с первичными документами, банком, кассой, зарплатой и отчетностью.",
  "Объясняем налоговые вопросы простым языком и заранее предупреждаем о рисках.",
  "Подбираем формат сопровождения под фактический объем, а не по шаблонному тарифу.",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:px-8">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="О компании"
              title="Бухгалтерия, которая помогает бизнесу работать спокойно"
              description="Оказываем профессиональные бухгалтерские услуги для ИП и ООО на всех системах налогообложения. Берем на себя учет, отчетность и взаимодействие с государственными органами."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.value} delay={0.08 + index * 0.05}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                  <p className="text-3xl font-semibold tracking-tight text-brand-900">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AboutDialog>
                <Button type="button">
                  Подробнее о компании
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </AboutDialog>
              <Button asChild variant="outline">
                <a href="#lead">Получить консультацию</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">Системный подход</p>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">Понятные процессы и сроки</h3>
              </div>
            </div>

            <div className="mt-7 space-y-4">
              {principles.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-900" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4 rounded-2xl bg-brand-900 p-5 text-white">
              <Globe2 className="mt-1 h-5 w-5 shrink-0 text-white/80" aria-hidden="true" />
              <p className="text-sm leading-7 text-white/75">
                Работаем онлайн по всей России: консультации, документы и отчетность ведем дистанционно.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
