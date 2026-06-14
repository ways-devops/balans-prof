import { Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const contacts = [
  { label: "Телефон", value: company.phone, href: company.phoneHref, icon: Phone },
  { label: "Email", value: company.email, href: company.emailHref, icon: Mail },
];

export function ContactsSection() {
  return (
    <section id="contacts" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Свяжитесь с нами удобным способом"
            description="Готовы обсудить бухгалтерское сопровождение, восстановление учета, регистрацию бизнеса или налоговую консультацию."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
          {contacts.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <a
                href={item.href}
                className="group flex h-full gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-900 hover:bg-white hover:shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-900 ring-1 ring-slate-200 group-hover:bg-brand-900 group-hover:text-white">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500">{item.label}</span>
                  <span className="mt-2 block text-base font-semibold text-slate-950">{item.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-900 p-6 text-white shadow-soft sm:flex-row sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Мессенджеры</p>
              <p className="mt-2 text-xl font-semibold">Напишите в Telegram или WhatsApp</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild variant="secondary">
                <a href={company.telegram}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Telegram
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={company.whatsapp}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
