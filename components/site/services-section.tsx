import { BriefcaseBusiness, Building2, Factory, HardHat, Laptop, ShoppingBag, ShoppingCart, Truck, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const industries = [
  { title: "Торговля", icon: ShoppingCart },
  { title: "Строительство", icon: HardHat },
  { title: "Маркетплейсы", icon: ShoppingBag },
  { title: "Онлайн-бизнес", icon: Laptop },
  { title: "Логистика", icon: Truck },
  { title: "Услуги", icon: Wrench },
  { title: "Производство", icon: Factory },
  { title: "Малый и средний бизнес", icon: Building2 },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-brand-500">Направления</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Кому подойдут наши услуги
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.035} className="h-full">
              <div className="group flex h-full min-h-[152px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 ring-1 ring-slate-200 transition group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex min-h-10 items-center justify-center text-sm font-semibold leading-5 text-slate-950">{item.title}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-brand-500/20 bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">Не нашли свою сферу?</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Оставьте заявку — подберём решение под особенности вашего бизнеса.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full border-brand-500/50 text-brand-900 hover:border-brand-500 sm:w-auto">
              <a href="#lead">Оставить заявку</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
