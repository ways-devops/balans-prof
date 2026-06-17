import Link from "next/link";
import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe2,
  Mail,
  MapPinned,
  MessageCircle,
  Monitor,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

import { ContactIllustration } from "@/components/site/contact-illustration";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { company, legalInfo } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Контакты — Nova Consulting",
  description:
    "Контакты Nova Consulting: телефон, email, режим работы и онлайн-консультации по бухгалтерскому сопровождению для ИП и ООО.",
  path: "/contacts",
});

const contactCards = [
  {
    title: "Телефон",
    value: company.phone,
    subtitle: "Звонки и сообщения",
    href: company.phoneHref,
    icon: Phone,
  },
  {
    title: "Email",
    value: company.email,
    subtitle: "Ответим на ваше письмо",
    href: company.emailHref,
    icon: Mail,
  },
  {
    title: "Режим работы",
    value: "Пн–Пт: 09:00–18:00",
    secondValue: "Сб–Вс: по договорённости",
    subtitle: "Работаем в удобное для вас время",
    icon: Clock3,
  },
  {
    title: "Онлайн-консультация",
    value: "Работаем удалённо по всей России",
    subtitle: "Удобно, быстро и эффективно",
    icon: Monitor,
  },
];

const reasons = [
  {
    title: "Ответим в течение одного рабочего дня",
    text: "Быстро реагируем на заявки и всегда на связи.",
    icon: ShieldCheck,
  },
  {
    title: "Бесплатная первичная консультация",
    text: "Оценим ситуацию и предложим варианты решения.",
    icon: MessageCircle,
  },
  {
    title: "Помощь ИП и ООО",
    text: "Работаем на УСН, ОСН и других системах налогообложения.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Персональный подход",
    text: "Учитываем особенности бизнеса и ваши задачи.",
    icon: UserRoundCheck,
  },
  {
    title: "Работаем удалённо по всей России",
    text: "Современные технологии — эффективное сотрудничество.",
    icon: Globe2,
  },
];

const requisites = [
  { label: "ИП", value: legalInfo.owner },
  { label: "ИНН", value: legalInfo.inn },
  { label: "ОГРНИП", value: legalInfo.ogrnip },
];

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main id="top" className="overflow-hidden bg-white pt-16 sm:pt-20">
        <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-14">
            <Reveal>
              <div>
                <nav className="flex items-center gap-2 text-sm font-medium text-slate-500" aria-label="Хлебные крошки">
                  <Link href="/#top" className="transition-colors hover:text-brand-900">
                    Главная
                  </Link>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  <span className="text-slate-950">Контакты</span>
                </nav>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white px-4 py-2 text-xs font-semibold text-brand-900 shadow-card sm:text-sm">
                  <MapPinned className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  Связь с Nova Consulting
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Контакты
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Готовы ответить на ваши вопросы и подобрать оптимальное решение для вашего бизнеса.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-soft">
                <ContactIllustration className="aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[16/7]" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {contactCards.map((card, index) => {
                const content = (
                  <article className="group flex h-full gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-soft sm:p-6">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-500/20 transition group-hover:bg-brand-500 group-hover:text-slate-950">
                      <card.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-950">{card.title}</h2>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">{card.value}</p>
                      {card.secondValue ? <p className="text-sm font-semibold leading-6 text-slate-800">{card.secondValue}</p> : null}
                      <p className="mt-2 text-xs leading-5 text-slate-500">{card.subtitle}</p>
                    </div>
                  </article>
                );

                return (
                  <Reveal key={card.title} delay={index * 0.04}>
                    {card.href ? (
                      <a href={card.href} className="block h-full">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <Reveal>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                    Получите бесплатную консультацию
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Оставьте заявку на главной странице, и мы свяжемся с вами, чтобы обсудить задачу и подобрать формат сопровождения.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <p className="text-sm font-semibold text-slate-950">Бесплатно</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Первично оценим ситуацию и объём работ.</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <p className="text-sm font-semibold text-slate-950">Удобно</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Работаем удалённо по всей России.</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="mt-7 w-full sm:w-auto">
                    <Link href="/#lead">
                      Получить консультацию
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <aside className="h-full rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-5 shadow-soft sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card ring-1 ring-brand-500/20">
                      <Sparkles className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Почему выбирают нас</h2>
                  </div>

                  <div className="mt-6 divide-y divide-brand-500/15">
                    {reasons.map((reason) => (
                      <div key={reason.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card ring-1 ring-brand-500/20">
                          <reason.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold leading-6 text-slate-950">{reason.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{reason.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>

            <Reveal>
              <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr_0.7fr_0.9fr] lg:items-center">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl font-semibold text-slate-950">Реквизиты</h2>
                  </div>
                  {requisites.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 lg:bg-transparent lg:p-0 lg:ring-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
