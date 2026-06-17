import type { Metadata } from "next";

export const siteName = "Nova Consulting";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nova-consulting.ru").replace(/\/$/, "");

export const homeTitle = "Nova Consulting — бухгалтерские услуги для ИП и ООО";
export const homeDescription =
  "Бухгалтерское сопровождение, налоговые консультации, регистрация бизнеса и подготовка отчётности. Работаем удалённо по всей России.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: homeTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
