import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Clock3, FileText, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const heroBenefits = [
  "Работаем с ИП и ООО",
  "УСН и ОСНО",
  "Работаем по всей России",
  "Конфиденциальность гарантирована",
];

const panelStats = [
  { value: "99,8%", label: "отчетности сдано вовремя", icon: BadgeCheck },
  { value: "150+", label: "клиентов", icon: Building2 },
  { value: "0 ₽", label: "штрафов у клиентов", icon: ShieldCheck },
  { value: "15 минут", label: "среднее время ответа", icon: Clock3 },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-16 sm:pt-20">
      <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_72%_18%,rgba(212,162,76,0.16),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-24">
        <Reveal>
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white px-4 py-2 text-xs font-semibold text-brand-900 shadow-card sm:text-sm">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Бухгалтерское и налоговое сопровождение
          </p>
          <h1 className="max-w-4xl text-[32px] font-semibold leading-[1.1] tracking-tight text-slate-950 min-[390px]:text-4xl sm:text-5xl lg:text-[64px]">
            Помогаем предпринимателям <span className="text-brand-500">вести бизнес</span> без проблем с <span className="text-brand-500">налогами</span> и отчётностью
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Берём на себя бухгалтерский учёт, налоги и взаимодействие с контролирующими органами, чтобы вы могли сосредоточиться на развитии бизнеса.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full whitespace-normal px-4 text-center leading-5 sm:w-auto sm:whitespace-nowrap sm:px-7">
              <a href="#lead">
                Получить бесплатную консультацию
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href="#lead">Оставить заявку</a>
            </Button>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {heroBenefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-card"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-950">Ваш бизнес под контролем</p>
                <p className="mt-1 text-xs text-slate-500">Налоги, сроки и отчётность в одном процессе</p>
              </div>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">2026</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {panelStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
                  <stat.icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
                  <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-6 text-slate-950 shadow-card sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <ShieldCheck className="h-8 w-8 text-brand-500" aria-hidden="true" />
                  <p className="mt-8 max-w-sm text-xl font-semibold leading-8">
                    Контролируем налоги и отчётность, чтобы вы работали спокойно
                  </p>
                </div>
                <Sparkles className="h-6 w-6 shrink-0 text-brand-500" aria-hidden="true" />
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-brand-500/55 via-slate-200 to-transparent" />
              <div className="mt-5 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2">
                <span>Проверяем сроки</span>
                <span>Предупреждаем риски</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
