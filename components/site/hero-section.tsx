import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";

const heroBenefits = [
  { label: "Надежность", icon: ShieldCheck },
  { label: "Экономия времени", icon: Timer },
  { label: "Индивидуальный подход", icon: CheckCircle2 },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-900">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Онлайн-сопровождение по всей России
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Профессиональные бухгалтерские услуги для ИП и ООО
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Ведение бухгалтерского и налогового учета на всех системах налогообложения.
            Экономим ваше время и защищаем от ошибок и штрафов.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#lead">
                Оставить заявку
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#services">Наши услуги</a>
            </Button>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {heroBenefits.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 z-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Сроки под контролем</p>
            <p className="mt-1 text-2xl font-semibold text-brand-900">100%</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft">
            <Image
              src="/images/hero-accounting.png"
              alt="Бухгалтерский рабочий стол с ноутбуком, документами и калькулятором"
              width={960}
              height={720}
              priority
              className="aspect-[4/3] h-full w-full object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-brand-900 p-5 text-white shadow-soft sm:right-8">
            <p className="text-sm text-white/75">Консультация</p>
            <a href={company.phoneHref} className="mt-1 block text-lg font-semibold">
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
