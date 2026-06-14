import type { Metadata, Viewport } from "next";

import "./globals.css";

const siteUrl = "https://balans-prof.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Бухгалтерские услуги для ИП и ООО | Баланс Проф",
    template: "%s | Баланс Проф",
  },
  description:
    "Профессиональное бухгалтерское и налоговое сопровождение ИП и ООО на ОСНО, УСН, ПСН и ЕСХН. Отчетность, восстановление учета, консультации и регистрация бизнеса.",
  keywords: [
    "бухгалтерские услуги",
    "бухгалтер для ИП",
    "бухгалтер для ООО",
    "ведение бухгалтерии",
    "налоговый учет",
    "УСН",
    "ОСНО",
    "ПСН",
    "ЕСХН",
  ],
  authors: [{ name: "Баланс Проф" }],
  creator: "Баланс Проф",
  publisher: "Баланс Проф",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Бухгалтерские услуги для ИП и ООО",
    description:
      "Ведение бухгалтерского и налогового учета на всех системах налогообложения. Работаем онлайн по всей России.",
    url: siteUrl,
    siteName: "Баланс Проф",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/hero-accounting.png",
        width: 1200,
        height: 900,
        alt: "Бухгалтерские услуги для ИП и ООО",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2B5B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
