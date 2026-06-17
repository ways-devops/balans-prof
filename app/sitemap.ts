import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-17");
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.85 },
    { path: "/contacts", priority: 0.85 },
    { path: "/privacy", priority: 0.35 },
    { path: "/consent", priority: 0.35 },
    { path: "/agreement", priority: 0.35 },
  ];

  return routes.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
