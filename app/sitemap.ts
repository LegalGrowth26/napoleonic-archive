import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/battles", priority: 0.9 },
  { path: "/battles/waterloo", priority: 0.95 },
  { path: "/people", priority: 0.9 },
  { path: "/people/napoleon", priority: 0.9 },
  { path: "/people/wellington", priority: 0.9 },
  { path: "/regiments", priority: 0.9 },
  { path: "/regiments/95th-rifles", priority: 0.85 },
  { path: "/stories", priority: 0.8 },
  { path: "/fiction", priority: 0.9 },
  { path: "/fiction/characters", priority: 0.8 },
  { path: "/fiction/recommendations", priority: 0.8 },
  { path: "/resources", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
  { path: "/india/east-india-company", priority: 0.8 },
  { path: "/india", priority: 0.9 },
  { path: "/india/battles/seringapatam", priority: 0.8 },
  { path: "/india/battles/assaye", priority: 0.8 },
  { path: "/india/people/tippu-sultan", priority: 0.8 },
  { path: "/india/people/wellington-in-india", priority: 0.8 },
  { path: "/india/people/richard-wellesley", priority: 0.8 },
  { path: "/india/battles/argaum", priority: 0.8 },
  { path: "/india/battles/gawilghur", priority: 0.8 },
  { path: "/stories/prisoners", priority: 0.8 },
  { path: "/battles/austerlitz", priority: 0.9 },
  { path: "/battles/salamanca", priority: 0.9 },
  { path: "/battles/trafalgar", priority: 0.9 },
  { path: "/stories/purchase-system", priority: 0.8 },
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
