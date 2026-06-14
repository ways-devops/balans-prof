import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { taxSystems } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function TaxSystemsSection() {
  return (
    <section id="tax-systems" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Системы налогообложения"
            title="Работаем на всех системах налогообложения"
            description="Сопровождаем ИП и ООО на ОСНО, УСН, ПСН и ЕСХН: от первичных документов до сдачи отчетности."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {taxSystems.map((system, index) => (
            <Reveal key={system.title} delay={index * 0.06}>
              <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-brand-900 hover:shadow-soft">
                <CardHeader>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white transition-transform duration-300 group-hover:scale-105">
                    <span className="text-sm font-bold">{system.title}</span>
                  </div>
                  <CardTitle>{system.title}</CardTitle>
                  <CardDescription>{system.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {system.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-900" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
