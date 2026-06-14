import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";

const siteUrl = "https://balans-prof.ru";
const yandexMetrikaScript = `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109844142', 'ym');

    ym(109844142, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

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
      <body>
        <Script
          id="yandex-metrika"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: yandexMetrikaScript }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/109844142"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
