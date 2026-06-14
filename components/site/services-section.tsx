import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Услуги"
              title="Бухгалтерские задачи, которые можно передать нам"
              description="Берем регулярную бухгалтерию, точечные консультации и стартовые задачи для новых предпринимателей."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="rounded-2xl border border-slate-200 bg-white p-6 text-base leading-8 text-slate-600 shadow-card">
              Перед началом работы оцениваем объем документов, систему налогообложения, сотрудников,
              кассу, банк и текущие риски. После этого предлагаем персональный формат сопровождения.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand-900 hover:shadow-soft">
                <CardHeader>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="h-1.5 w-16 rounded-full bg-brand-900" />
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-colors group-hover:text-brand-900" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
