import { CheckCircle2, Mail, Phone } from "lucide-react";

import { AccountingIllustration } from "@/components/site/accounting-illustration";
import { LeadForm } from "@/components/site/lead-form";
import { company } from "@/lib/content";
import { Reveal } from "@/components/site/reveal";

const contacts = [
  { label: "Телефон", value: company.phone, href: company.phoneHref, icon: Phone },
  { label: "Email", value: company.email, href: company.emailHref, icon: Mail },
];

const benefits = ["Контроль налогов", "Сдача отчётности", "Защита от штрафов", "Персональная поддержка"];

export function ContactsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:px-8">
        <Reveal className="min-w-0">
          <div className="min-w-0 overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-6 shadow-soft sm:p-8 lg:p-10">
            <p className="text-sm font-semibold text-brand-500">Бесплатная консультация</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Сосредоточьтесь на развитии бизнеса.
            </h2>
            <p className="mt-4 text-2xl font-semibold leading-9 text-brand-700">
              Мы берём на себя бухгалтерию и налоги.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-brand-500/15">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-slate-500">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-950">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-card">
              <AccountingIllustration className="aspect-[16/9] w-full" />
            </div>
          </div>
        </Reveal>

        <div id="lead" className="min-w-0 scroll-mt-24">
          <Reveal delay={0.08} className="min-w-0">
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
