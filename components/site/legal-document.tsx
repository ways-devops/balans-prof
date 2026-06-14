import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  ScrollText,
  Shield,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Reveal } from "@/components/site/reveal";
import { company } from "@/lib/content";

export type LegalSectionData = {
  id: string;
  title: string;
  paragraphs: string[];
  listTitle?: string;
  items?: string[];
  contactDetails?: {
    owner: string;
    inn?: string;
    ogrnip?: string;
    phone?: string;
    phoneHref?: string;
    email?: string;
    emailHref?: string;
  };
  note?: {
    title: string;
    text: string;
  };
};

type LegalCardItem = {
  label: string;
  value: string;
  href?: string;
};

type OperatorCardData = {
  title: string;
  description?: string;
  items: LegalCardItem[];
};

type LegalDocumentProps = {
  variant: "privacy" | "consent" | "agreement";
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSectionData[];
  operatorCard?: OperatorCardData;
  lastUpdatedDate?: string;
};

type LegalPageLayoutProps = LegalDocumentProps;

const heroConfig: Record<
  LegalDocumentProps["variant"],
  {
    Icon: LucideIcon;
    SecondaryIcon: LucideIcon;
    badge: string;
  }
> = {
  privacy: {
    Icon: Shield,
    SecondaryIcon: LockKeyhole,
    badge: "Защита данных",
  },
  consent: {
    Icon: ClipboardCheck,
    SecondaryIcon: ShieldCheck,
    badge: "Согласие пользователя",
  },
  agreement: {
    Icon: ScrollText,
    SecondaryIcon: BadgeCheck,
    badge: "Условия сайта",
  },
};

export function LegalDocument(props: LegalDocumentProps) {
  return <LegalPageLayout {...props} />;
}

export function LegalPageLayout({
  variant,
  title,
  description,
  updatedAt,
  sections,
  operatorCard,
  lastUpdatedDate,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <LegalHero variant={variant} title={title} description={description} updatedAt={updatedAt} />

        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          <Reveal>
            <LegalSidebar title={title} sections={sections} />
          </Reveal>

          <Reveal delay={0.08}>
            <LegalContentCard updatedAt={updatedAt}>
              {sections.map((section, index) => (
                <LegalSection key={section.id} index={index} section={section} />
              ))}
              {operatorCard ? <OperatorCard {...operatorCard} /> : null}
              {lastUpdatedDate ? <LastUpdated date={lastUpdatedDate} /> : null}
            </LegalContentCard>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalHero({
  variant,
  title,
  description,
  updatedAt,
}: Pick<LegalDocumentProps, "variant" | "title" | "description" | "updatedAt">) {
  const { Icon, SecondaryIcon, badge } = heroConfig[variant];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8 lg:py-20">
        <Reveal>
          <div>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Хлебные крошки">
              <Link href="/" className="font-medium transition-colors hover:text-brand-900">
                Главная
              </Link>
              <span className="text-slate-300">/</span>
              <span>Документы</span>
              <span className="text-slate-300">/</span>
              <span className="font-medium text-slate-700">{title}</span>
            </nav>

            <p className="mt-8 inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-900">
              {badge}
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/#lead">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Вернуться на главную
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[56px] bg-brand-900/5" aria-hidden="true" />
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-soft">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                    <SecondaryIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Документ актуален</p>
                    <p className="mt-1 text-sm text-slate-500">Редакция от {updatedAt}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
                Оформлено в едином стиле сайта и адаптировано для удобного чтения на desktop, tablet и mobile.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function LegalSidebar({ title, sections }: Pick<LegalDocumentProps, "title" | "sections">) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <p className="text-sm font-semibold text-slate-950">Содержание</p>
        <nav className="mt-4 grid gap-1" aria-label={`Содержание документа ${title}`}>
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-600 transition-all hover:bg-brand-50 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
            >
              <span className="font-semibold text-slate-400 transition-colors group-hover:text-brand-900">
                {index + 1}.
              </span>
              <span>{section.title}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-900 p-5 text-white shadow-soft">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
          <Phone className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-4 text-base font-semibold">Есть вопросы?</p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Напишите нам, если нужно уточнить условия обработки данных или порядок оказания услуг.
        </p>
        <Button asChild variant="secondary" className="mt-5 w-full">
          <Link href="/#lead">Связаться с нами</Link>
        </Button>
      </div>
    </aside>
  );
}

export function LegalContentCard({
  updatedAt,
  children,
}: {
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-900">{company.name}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">Официальный документ сайта бухгалтерских услуг</p>
        </div>
        <p className="text-sm font-medium text-slate-500">Редакция от {updatedAt}</p>
      </div>
      <div className="px-5 py-2 sm:px-8 lg:px-10">{children}</div>
    </article>
  );
}

export function LegalSection({ index, section }: { index: number; section: LegalSectionData }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-b border-slate-200 py-8 last:border-b-0">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
        <span className="text-brand-900">{index + 1}. </span>
        {section.title}
      </h2>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraph}>
            <span className="mr-2 font-semibold text-slate-500">
              {index + 1}.{paragraphIndex + 1}.
            </span>
            {paragraph}
          </p>
        ))}
      </div>

      {section.items ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          {section.listTitle ? (
            <h3 className="text-base font-semibold tracking-tight text-slate-950">{section.listTitle}</h3>
          ) : null}
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-900" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {section.contactDetails ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p className="font-semibold text-slate-950">{section.contactDetails.owner}</p>
            {section.contactDetails.inn ? <p>ИНН: {section.contactDetails.inn}</p> : null}
            {section.contactDetails.ogrnip ? <p>ОГРНИП: {section.contactDetails.ogrnip}</p> : null}
            {section.contactDetails.phone ? (
              <p>
                Телефон:{" "}
                {section.contactDetails.phoneHref ? (
                  <a
                    href={section.contactDetails.phoneHref}
                    className="font-semibold text-brand-900 transition-colors hover:text-brand-700 hover:underline"
                  >
                    {section.contactDetails.phone}
                  </a>
                ) : (
                  section.contactDetails.phone
                )}
              </p>
            ) : null}
            {section.contactDetails.email ? (
              <p>
                Email:{" "}
                {section.contactDetails.emailHref ? (
                  <a
                    href={section.contactDetails.emailHref}
                    className="font-semibold text-brand-900 transition-colors hover:text-brand-700 hover:underline"
                  >
                    {section.contactDetails.email}
                  </a>
                ) : (
                  section.contactDetails.email
                )}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {section.note ? (
        <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5">
          <h3 className="flex items-center gap-3 text-base font-semibold tracking-tight text-brand-900">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            {section.note.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{section.note.text}</p>
        </div>
      ) : null}
    </section>
  );
}

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="border-t border-slate-200 py-6">
      <p className="text-sm leading-6 text-slate-500">Дата последнего обновления: {date}</p>
    </div>
  );
}

export function OperatorCard({ title, description, items }: OperatorCardData) {
  return (
    <section className="py-8">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-900 text-white">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
            </div>
            {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{description}</p> : null}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => {
            const isEmail = item.href?.startsWith("mailto:");
            const isPhone = item.href?.startsWith("tel:");
            const Icon = isEmail ? Mail : isPhone ? Phone : FileText;

            return (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-900" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block break-words text-sm font-semibold text-slate-950 transition-colors hover:text-brand-900"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-sm font-semibold text-slate-950">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
