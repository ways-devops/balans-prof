import Link from "next/link";
import {
  ArrowRight,
  BadgeRussianRuble,
  Building2,
  Calculator,
  ChevronRight,
  ClipboardList,
  FileCheck2,
  FileText,
  Info,
  MessageSquareText,
  RefreshCcw,
} from "lucide-react";

import { AccountingIllustration } from "@/components/site/accounting-illustration";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Услуги — Nova Consulting",
  description:
    "Бухгалтерское сопровождение, налоговые консультации, регистрация ИП и ООО, подготовка отчётности и восстановление учёта.",
  path: "/services",
});

const costFactors = [
  "организационно-правовая форма (ИП или ООО)",
  "система налогообложения (УСН, ОСН и др.)",
  "количество сотрудников",
  "количество хозяйственных операций",
  "необходимость кадрового учёта",
  "дополнительные консультации",
];

const serviceCards = [
  {
    title: "Бухгалтерское сопровождение",
    icon: Calculator,
    description: "Комплексное ведение учета, налогов, первичных документов и регулярной отчетности.",
    prices: ["ИП на УСН — от 5 000 ₽", "ИП с сотрудниками — от 8 000 ₽", "ООО на УСН — от 10 000 ₽", "ООО на ОСН — от 15 000 ₽"],
    accent: "dark",
  },
  {
    title: "Налоговые консультации",
    icon: MessageSquareText,
    description: "Разовая консультация по вопросам налогообложения, отчётности и ведения бизнеса.",
    prices: ["Стоимость: от 2 000 ₽"],
    accent: "gold",
  },
  {
    title: "Регистрация бизнеса",
    icon: Building2,
    description: "Подготовка документов и сопровождение процедуры регистрации.",
    prices: ["Регистрация ИП — от 3 000 ₽", "Регистрация ООО — от 5 000 ₽"],
    accent: "gold",
  },
  {
    title: "Подготовка отчётности",
    icon: FileCheck2,
    description: "Подготовка и сдача налоговой и бухгалтерской отчётности.",
    prices: ["Стоимость: от 1 500 ₽"],
    accent: "dark",
  },
  {
    title: "Восстановление бухгалтерского учёта",
    icon: RefreshCcw,
    description: "Исправление ошибок и восстановление учёта за прошлые периоды.",
    prices: ["Стоимость: от 15 000 ₽"],
    accent: "dark",
    wide: true,
  },
];

export default function ServicesPage() {
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
                  <span className="text-slate-950">Услуги</span>
                </nav>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white px-4 py-2 text-xs font-semibold text-brand-900 shadow-card sm:text-sm">
                  <FileText className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  Бухгалтерские решения для бизнеса
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Наши услуги
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Бухгалтерское и налоговое сопровождение для стабильного роста вашего бизнеса
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-soft">
                <AccountingIllustration className="aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[16/7]" />
                <div className="absolute bottom-5 left-5 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-card backdrop-blur sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                      <ClipboardList className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Отчётность под контролем</p>
                      <p className="mt-1 text-xs text-slate-500">Документы, налоги и сроки</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.55fr] lg:items-start">
              <Reveal>
                <aside className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-6 shadow-soft sm:p-8 lg:sticky lg:top-28">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card ring-1 ring-brand-500/20">
                    <BadgeRussianRuble className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">Стоимость услуг</h2>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Каждый бизнес уникален, поэтому окончательная стоимость услуг рассчитывается индивидуально после консультации и анализа задач клиента.
                  </p>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-slate-950">На стоимость влияют:</p>
                    <ul className="mt-4 space-y-3">
                      {costFactors.map((factor) => (
                        <li key={factor} className="flex gap-3 text-sm leading-6 text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 h-px w-20 bg-brand-500/55" />
                  <p className="mt-6 text-sm font-medium leading-7 text-slate-700">
                    Ниже представлены ориентировочные цены для понимания порядка стоимости услуг.
                  </p>
                </aside>
              </Reveal>

              <div className="grid gap-5 md:grid-cols-2">
                {serviceCards.map((service, index) => (
                  <Reveal key={service.title} delay={index * 0.04} className={service.wide ? "md:col-span-2" : undefined}>
                    <article className="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-soft sm:p-6">
                      <div className="flex items-start gap-4">
                        <span
                          className={
                            service.accent === "gold"
                              ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-slate-950 shadow-card"
                              : "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20"
                          }
                        >
                          <service.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">{service.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        {service.prices.map((price) => (
                          <p key={price} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800 ring-1 ring-slate-200">
                            {price.includes("от ") ? (
                              <>
                                {price.split("от ")[0]}от <span className="text-brand-700">{price.split("от ")[1]}</span>
                              </>
                            ) : (
                              price
                            )}
                          </p>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <div className="flex h-full gap-4 rounded-3xl border border-brand-500/25 bg-white p-5 shadow-card sm:p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
                    <Info className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium leading-7 text-slate-700">
                    <span className="font-semibold text-slate-950">Указанные цены являются ориентировочными.</span>{" "}
                    Точная стоимость определяется индивидуально после изучения особенностей вашего бизнеса и объёма работ.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="h-full rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-5 shadow-soft sm:p-6">
                  <p className="text-base font-semibold leading-7 text-slate-950">
                    Оставьте заявку, и мы подготовим персональное предложение для вашей компании.
                  </p>
                  <Button asChild size="lg" className="mt-5 w-full sm:w-auto">
                    <Link href="/#lead">
                      Оставить заявку
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
