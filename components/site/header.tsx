"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/brand-mark";
import { company, navigation } from "@/lib/content";

const getSectionHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/#top" className="flex min-w-0 items-center gap-3" aria-label="На главную" onClick={() => setIsOpen(false)}>
          <BrandMark className="h-10 w-10 rounded-xl sm:h-11 sm:w-11" />
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight tracking-tight text-slate-950">
              {company.name}
            </span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Бухгалтерские услуги для ИП и ООО
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex" aria-label="Навигация">
          {navigation.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-brand-900" href={getSectionHref(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-brand-900 transition-colors hover:text-brand-700 xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#lead">
              Получить консультацию
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-card transition hover:border-brand-900 lg:hidden"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold text-slate-700" aria-label="Мобильная навигация">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={getSectionHref(item.href)}
                className="rounded-2xl px-4 py-3 transition hover:bg-slate-50 hover:text-brand-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-brand-900"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <Button asChild className="mt-2 w-full">
              <Link href="/#lead" onClick={() => setIsOpen(false)}>Получить консультацию</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
