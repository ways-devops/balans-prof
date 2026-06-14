import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutDialog } from "@/components/site/about-dialog";
import { BrandMark } from "@/components/site/brand-mark";
import { company, navigation } from "@/lib/content";

const getSectionHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="На главную">
          <BrandMark />
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight tracking-tight text-slate-950">
              {company.name}
            </span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">
              Бухгалтерские услуги для ИП и ООО
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex" aria-label="Навигация">
          {navigation.map((item) => (
            item.href === "#about" ? (
              <AboutDialog key={item.href}>
                <button type="button" className="transition-colors hover:text-brand-900">
                  {item.label}
                </button>
              </AboutDialog>
            ) : (
              <a key={item.href} className="transition-colors hover:text-brand-900" href={getSectionHref(item.href)}>
                {item.label}
              </a>
            )
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
            <a href="#lead">
              Оставить заявку
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="icon" variant="secondary" className="xl:hidden">
            <a href={company.phoneHref} aria-label={`Позвонить ${company.phone}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
