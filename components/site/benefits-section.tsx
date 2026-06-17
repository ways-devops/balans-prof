import { BriefcaseBusiness, Globe2, MessageCircle, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

const icons = {
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
  globe: Globe2,
  message: MessageCircle,
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-brand-500">Преимущества</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Почему предприниматели выбирают нас
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon as keyof typeof icons];

            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <Card className="h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft">
                  <CardHeader>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/15">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-slate-600">{benefit.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
