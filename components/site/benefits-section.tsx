import { BriefcaseBusiness, Globe2, MessageCircle, ShieldCheck, UserRoundCheck, WalletCards } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const icons = {
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
  globe: Globe2,
  wallet: WalletCards,
  user: UserRoundCheck,
  message: MessageCircle,
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Преимущества"
            title="Почему выбирают нас"
            description="Мы строим бухгалтерское сопровождение как управляемый процесс: понятные сроки, прозрачная коммуникация и персональная ответственность."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon as keyof typeof icons];

            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <Card className="h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <CardHeader>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <CardTitle>{benefit.title}</CardTitle>
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
