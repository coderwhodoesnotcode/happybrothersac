import { MetadataRoute } from "next";
import { services, areas } from "../data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://happybrotherac.com";

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // ── 300 dynamic service + area pages ─────────────────────────────────────
  const dynamicPages: MetadataRoute.Sitemap = [];

  for (const service of services) {
    for (const area of areas) {
      dynamicPages.push({
        url: `${baseUrl}/${service.slug}/${area.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...dynamicPages];
}