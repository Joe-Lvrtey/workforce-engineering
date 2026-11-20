import type { MetadataRoute } from "next";
import { site } from "./site";

// Only indexable pages. /contact is still a draft (noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-20";
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/what-we-do`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
