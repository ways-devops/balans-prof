"use client";

import type { ReactNode } from "react";
import { Award, Building2, Download, FileText, Globe2, Mail, Phone, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { company, legalInfo } from "@/lib/content";

type AboutDialogProps = {
  children: ReactNode;
};

const modalStats = [
  { value: "500+", label: "клиентов", icon: Users },
  { value: "10+", label: "лет опыта", icon: Award },
  { value: "98%", label: "довольных клиентов", icon: ShieldCheck },
];

const requisites = [
  { label: "Исполнитель", value: legalInfo.owner, icon: Building2 },
  { label: "ИНН", value: legalInfo.inn, icon: FileText },
  { label: "ОГРНИП", value: legalInfo.ogrnip, icon: FileText },
  { label: "Телефон", value: legalInfo.phone, icon: Phone, href: company.phoneHref },
  { label: "Email", value: legalInfo.email, icon: Mail, href: company.emailHref },
];

export function AboutDialog({ children }: AboutDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-[760px]">
        <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-7 sm:px-8 sm:py-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-soft">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <DialogHeader className="pr-10">
            <DialogTitle>О компании</DialogTitle>
            <DialogDescription>
              Мы оказываем профессиональные бухгалтерские услуги для ИП и ООО на всех системах налогообложения.
              Помогаем предпринимателям сосредоточиться на развитии бизнеса, беря на себя вопросы учета,
              отчетности и взаимодействия с государственными органами.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {modalStats.map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-3xl font-semibold tracking-tight text-brand-900">{stat.value}</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                    <stat.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-900 text-white">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">Реквизиты</h3>
            </div>

            <div className="mt-5 grid gap-3">
              {requisites.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-900" aria-hidden="true" />
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
              ))}
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-brand-900 sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-card">
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight">Работаем полностью удаленно</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Консультации, ведение бухгалтерского учета, подготовка и сдача отчетности осуществляются онлайн.
                Работаем с клиентами по всей России независимо от региона.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button asChild className="w-full sm:w-auto">
              <a href="#">
                <Download className="h-4 w-4" aria-hidden="true" />
                Скачать реквизиты
              </a>
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
