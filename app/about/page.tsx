import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  MapPin,
  MessageCircle,
  MessageSquareText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import { AccountingIllustration } from "@/components/site/accounting-illustration";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "О компании — Nova Consulting",
  description:
    "О Nova Consulting: команда специалистов с практическим опытом в бухгалтерии и налогообложении, удалённая работа по России и понятная поддержка бизнеса.",
  path: "/about",
});

const advantages = [
  {
    title: "Работаем с ИП и ООО",
    text: "на УСН и ОСН",
    icon: UsersRound,
  },
  {
    title: "Удалённо по всей России",
    text: "без привязки к месту",
    icon: MapPin,
  },
  {
    title: "Опыт специалистов",
    text: "более 10 лет практики",
    icon: BadgeCheck,
  },
  {
    title: "Доверие и ответственность",
    text: "основа нашей работы",
    icon: ShieldCheck,
  },
];

const principles = [
  {
    title: "Долгосрочное сотрудничество",
    text: "Строим отношения на доверии, честности и ответственности.",
    icon: Handshake,
  },
  {
    title: "Индивидуальный подход",
    text: "Изучаем ваш бизнес и предлагаем решения, которые действительно работают.",
    icon: UsersRound,
  },
  {
    title: "Соблюдение сроков",
    text: "Контролируем важные даты и сдаём отчётность точно и в срок.",
    icon: CalendarCheck2,
  },
  {
    title: "Понятное общение",
    text: "Объясняем сложные вопросы простым языком и всегда остаёмся на связи.",
    icon: MessageSquareText,
  },
];

const helpItems = [
  {
    title: "Бухгалтерский и налоговый учёт",
    text: "Ведём учёт, контролируем налоги и помогаем оптимизировать расходы.",
    icon: BookOpenCheck,
    accent: "dark",
  },
  {
    title: "Подготовка и сдача отчётности",
    text: "Подготавливаем и сдаём отчётность во все контролирующие органы.",
    icon: FileCheck2,
    accent: "gold",
  },
  {
    title: "Регистрация ИП и ООО",
    text: "Подготавливаем документы и сопровождаем процесс регистрации.",
    icon: BriefcaseBusiness,
    accent: "dark",
  },
  {
    title: "Налоговые консультации",
    text: "Консультируем по вопросам налогообложения, отчётности и ведения бизнеса.",
    icon: MessageCircle,
    accent: "gold",
  },
  {
    title: "Восстановление бухгалтерского учёта",
    text: "Исправляем ошибки и восстанавливаем учёт за прошлые периоды.",
    icon: RefreshCcw,
    accent: "dark",
  },
  {
    title: "Сопровождение бизнеса и финансов",
    text: "Помогаем принимать обоснованные финансовые решения.",
    icon: TrendingUp,
    accent: "gold",
  },
];

const steps = [
  {
    title: "Знакомимся и изучаем ваш бизнес",
    text: "Узнаём особенности компании и определяем ключевые задачи.",
    icon: UsersRound,
  },
  {
    title: "Определяем задачи и объём работ",
    text: "Анализируем данные и подбираем формат сотрудничества.",
    icon: ClipboardCheck,
  },
  {
    title: "Предлагаем решение и стоимость",
    text: "Формируем прозрачное коммерческое предложение.",
    icon: FileCheck2,
  },
  {
    title: "Берём бухгалтерские вопросы на себя",
    text: "Выполняем задачи и держим вас в курсе процессов.",
    icon: ShieldCheck,
  },
  {
    title: "Вы занимаетесь развитием бизнеса",
    text: "Мы берём на себя рутину, чтобы вы могли сосредоточиться на росте.",
    icon: Sparkles,
  },
];

const finalBenefits = [
  "Контролируем налоги и отчётность",
  "Сдаём отчётность без ошибок",
  "Персональный подход",
  "Консультации и поддержка",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top" className="overflow-hidden bg-white pt-16 sm:pt-20">
        <section className="relative border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_60%_18%,rgba(212,162,76,0.14),transparent_34%)] lg:block" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:px-8 lg:py-16">
            <Reveal>
              <div>
                <nav className="flex items-center gap-2 text-sm font-medium text-slate-500" aria-label="Хлебные крошки">
                  <Link href="/#top" className="transition-colors hover:text-brand-900">
                    Главная
                  </Link>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  <span className="text-slate-950">О нас</span>
                </nav>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white px-4 py-2 text-xs font-semibold text-brand-900 shadow-card sm:text-sm">
                  <Building2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  Nova Consulting
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  О нас
                </h1>
                <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-950 sm:text-xl">
                  Мы помогаем предпринимателям вести бизнес уверенно, законно и без лишних рисков.
                </p>
                <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    Наша цель — не просто подготовка отчётности, а комплексная поддержка клиентов в вопросах бухгалтерского учёта, налогообложения и финансового сопровождения.
                  </p>
                  <p>
                    Работаем с ИП и ООО на различных системах налогообложения, включая УСН и ОСН. Помогаем как начинающим предпринимателям, которые только открывают свой бизнес, так и действующим компаниям, которым требуется надёжное бухгалтерское сопровождение.
                  </p>
                </div>
                <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
                  <Link href="/#lead">
                    Получить консультацию
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 sm:p-7">
                <div className="grid gap-5">
                  {advantages.map((item) => (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl bg-slate-50/80 p-4 ring-1 ring-slate-200">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-card ring-1 ring-brand-500/20">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h2 className="text-sm font-semibold text-slate-950">{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold text-brand-500">Подход</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Наши принципы работы
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="group flex h-full min-h-[260px] flex-col items-center rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-soft sm:p-8">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-500/20 transition-colors duration-300 group-hover:bg-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-7 text-lg font-semibold leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold text-brand-500">Экспертиза</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Чем мы можем помочь
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {helpItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.035}>
                  <article className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/35 hover:shadow-soft sm:p-6">
                    <span
                      className={
                        item.accent === "gold"
                          ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-slate-950 shadow-card"
                          : "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20"
                      }
                    >
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-sm font-semibold leading-6 text-slate-950 sm:text-lg sm:leading-7">
                      {item.title}
                    </h3>
                    <p className="mt-3 hidden text-sm leading-7 text-slate-600 sm:block">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold text-brand-500">Процесс</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Как мы работаем
                </h2>
              </div>
            </Reveal>

            <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.04}>
                  <article className="relative flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-card">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-8">
                      <p className="text-sm font-semibold text-brand-500">{index + 1}</p>
                      <h3 className="mt-2 text-base font-semibold leading-7 text-slate-950">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about-consultation" className="bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-white via-[#FFFBF2] to-brand-50 p-6 shadow-soft sm:p-8 lg:p-10">
                <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Сосредоточьтесь на развитии бизнеса.
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-9 text-brand-700">
                  Мы берём на себя бухгалтерию и налоги.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {finalBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-brand-500/15">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                      <span className="text-sm font-semibold leading-6 text-slate-800">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-card">
                  <AccountingIllustration className="aspect-[16/9] w-full" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="flex h-full flex-col justify-between rounded-3xl border border-brand-500/20 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-slate-950">
                    Получите бесплатную консультацию
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    Расскажем, какой формат сопровождения подойдёт вашему бизнесу, и ответим на ключевые вопросы.
                  </p>
                </div>

                <Button asChild size="lg" className="mt-8 w-full">
                  <Link href="/#lead">
                    Получить консультацию
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
