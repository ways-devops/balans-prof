import { Calculator, Globe2, Mail, MessageCircle, Phone, Send } from "lucide-react";

import { AboutDialog } from "@/components/site/about-dialog";
import { company, documentLinks, navigation } from "@/lib/content";

const socialLinks = [
  { label: "Telegram", href: company.telegram, icon: Send },
  { label: "WhatsApp", href: company.whatsapp, icon: MessageCircle },
  { label: "Email", href: company.emailHref, icon: Mail },
];

const getSectionHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-3" aria-label="На главную">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-soft">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-base font-bold text-slate-950">{company.name}</span>
              <span className="text-sm text-slate-500">бухгалтерские услуги для бизнеса</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Профессиональное бухгалтерское и налоговое сопровождение ИП и ООО на всех системах налогообложения.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950">Навигация</p>
          <nav className="mt-4 grid gap-3 text-sm text-slate-600" aria-label="Навигация в footer">
            {navigation.map((item) =>
              item.href === "#about" ? (
                <AboutDialog key={item.href}>
                  <button type="button" className="w-fit text-left transition-colors hover:text-brand-900">
                    {item.label}
                  </button>
                </AboutDialog>
              ) : (
                <a key={item.href} href={getSectionHref(item.href)} className="transition-colors hover:text-brand-900">
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950">Документы</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {documentLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-brand-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950">Контакты</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <a href={company.phoneHref} className="flex items-center gap-2 transition-colors hover:text-brand-900">
              <Phone className="h-4 w-4 text-brand-900" aria-hidden="true" />
              {company.phone}
            </a>
            <a href={company.emailHref} className="flex items-center gap-2 transition-colors hover:text-brand-900">
              <Mail className="h-4 w-4 text-brand-900" aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex items-center gap-2 text-slate-600">
              <Globe2 className="h-4 w-4 text-brand-900" aria-hidden="true" />
              Онлайн по всей России
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50/80 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="text-xs leading-6 text-slate-500">
            <p>© 2026 Все права защищены.</p>
            <p>Информация на сайте не является публичной офертой.</p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-900 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-900 hover:bg-brand-900 hover:text-white hover:shadow-soft"
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
