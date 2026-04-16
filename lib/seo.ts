import type { Metadata } from "next";

export const SITE = {
  name: "The Napoleonic Archive",
  baseUrl: "https://www.napoleonicarchive.com",
  description:
    "A chronicle of the Napoleonic Wars (1789–1815) and Bernard Cornwell's Sharpe novels: battles, people, regiments, first-hand accounts, fiction and resources.",
  ogImage: "/og-image.svg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: "@napoleonicarchive",
} as const;

interface PageMetaArgs {
  /** Primary keyword; the root layout template adds " — The Napoleonic Archive". */
  title: string;
  description: string;
  /** Path under the site, starting with "/". */
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
}

/**
 * Build a canonical, social-media-ready Metadata object for a page.
 * `title` is the short primary keyword; the root layout's title.template
 * appends " — The Napoleonic Archive" for <title>. OG and Twitter use the
 * full "{title} — {site}" string for social previews.
 */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetaArgs): Metadata {
  const url = `${SITE.baseUrl}${path}`;
  const fullTitle = `${title} — ${SITE.name}`;
  return {
    title,
    description,
    keywords: keywords as string[] | undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: "en_GB",
      images: [
        {
          url: SITE.ogImage,
          width: SITE.ogImageWidth,
          height: SITE.ogImageHeight,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SITE.ogImage],
    },
  };
}

/** Slugify a name for anchor ids and deep links. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[’'`´]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
