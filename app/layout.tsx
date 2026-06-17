import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { createPageMetadata, homeDescription, homeTitle, siteName, siteUrl } from "@/lib/seo";

import "./globals.css";

const yandexMetrikaScript = `
(function(m,e,t,r,i,k,a){
m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {
if (document.scripts[j].src === r) {
return;
}
}
k=e.createElement(t),
a=e.getElementsByTagName(t)[0],
k.async=1,
k.src=r,
a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109844142', 'ym');

ym(109844142, 'init', {
ssr: true,
webvisor: true,
clickmap: true,
ecommerce: "dataLayer",
referrer: document.referrer,
url: location.href,
accurateTrackBounce: true,
trackLinks: true
});
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
  }),
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
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  category: "business",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
