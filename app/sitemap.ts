import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/battles", priority: 0.9 },
  { path: "/battles/waterloo", priority: 0.95 },
  { path: "/people", priority: 0.9 },
  { path: "/regiments", priority: 0.9 },
  { path: "/stories", priority: 0.8 },
  { path: "/fiction", priority: 0.9 },
  { path: "/resources", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
