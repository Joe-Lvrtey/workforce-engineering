import type { MetadataRoute } from "next";
import { site } from "./site";

// Only indexable pages. /contact and /what-we-do are drafts (noindex) for now.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: "2026-11-19", changeFrequency: "monthly", priority: 1 }];
}
