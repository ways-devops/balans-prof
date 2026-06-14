import type { Metadata, Viewport } from "next";

import "./globals.css";

const siteUrl = "https://balans-prof.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Баланс Проф — Бухгалтерские услуги для ИП и ООО",
    template: "%s | Баланс Проф",
  },
  description:
    "Профессиональное бухгалтерское сопровождение для ИП и ООО на всех системах налогообложения. Работаем удаленно по всей России.",
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
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Баланс Проф — Бухгалтерские услуги для ИП и ООО",
    description:
      "Профессиональное бухгалтерское сопровождение для ИП и ООО на всех системах налогообложения. Работаем удаленно по всей России.",
    url: siteUrl,
    siteName: "Баланс Проф",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Баланс Проф — Бухгалтерские услуги для ИП и ООО",
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
