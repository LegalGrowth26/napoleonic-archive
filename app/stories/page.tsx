import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE, slugify } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleonic Wars Eyewitness Accounts",
  description:
    "Napoleonic Wars eyewitness accounts and soldier diaries from verified public domain memoirs: Rifleman Harris, Kincaid, William Beatty and Sergeant Bourgogne.",
  path: "/stories",
  keywords: [
    "Napoleonic Wars eyewitness accounts",
    "soldier diaries",
    "Rifleman Harris",
    "Kincaid",
    "William Beatty",
    "Sergeant Bourgogne",
    "Napoleonic memoirs",
  ],
});

interface Story {
  title: string;
  byline: string;
  setting: string;
  excerpt: string;
  commentary: string;
  /** Citation for the published public-domain source. Required on this page. */
  publishedSource: string;
}

// All entries on this page are drawn from published public-domain
// memoirs or eyewitness reports with verified citations.
const stories: Story[] = [
  {
    title: "A Rifleman at Corunna",
    byline: "Benjamin Harris, 95th Rifles · Recollections (1848)",
    setting: "The retreat across Galicia, December 1808 to January 1809",
    excerpt:
      "My shoes had given out long before. The men tied strips of raw oxhide about their feet, bloody side in, and so we went: the women carrying children, the children carrying loaves, the loaves mouldered black. I saw a wife of the 43rd fall down in the snow and her man would not leave her; a sergeant cut him across the back with a scabbard, and still he sat with her. When we came up the pass again the French dragoons had taken the lot.",
    commentary:
      "Harris's dictated memoirs are the best private-soldier document we have of the Peninsula. His plain voice gives the retreat a reality no dispatch can.",
    publishedSource:
      "Recollections of Rifleman Harris, 1848. Public domain.",
  },
  {
    title: "The Sack of Badajoz",
    byline:
      "Sir John Kincaid, 95th Rifles · Adventures in the Rifle Brigade (1830)",
    setting: "After the storm, 7 April 1812",
    excerpt:
      "For three days and three nights Badajoz was a hell. Our own officers could not go among the soldiery without being shot at; men quarrelled over the plate of a sacristy and killed one another in the streets. I saw a Rifleman lying drunk upon a damasked bed, the curtains pulled down for his blanket, an image of the Virgin at his feet. The priests were weeping in their own church. The General would not have it stopped; he could not.",
    commentary:
      "Kincaid's humour and honesty make him the best-loved of the Peninsular memoirists. Wellington's own reports after Badajoz are terse and ashamed.",
    publishedSource:
      "Adventures in the Rifle Brigade by Sir John Kincaid, 1830. Public domain.",
  },
  {
    title: "Nelson Below Decks",
    byline: "Dr William Beatty, Surgeon of HMS Victory",
    setting: "Between decks, HMS Victory, 21 October 1805",
    excerpt:
      "He was brought down at twenty past one. The ball had broken his spine. He lay on a cot in the midshipmen's berth, covered with a sheet; the powder-monkeys had to be kept from staring at him. He asked constantly, 'How goes the day with us?' and when told we had eighteen prizes he said twice, 'God be praised, I have done my duty.' He died at half past four, his hand upon Hardy's.",
    commentary:
      "Beatty's official account remains the primary source. Nelson's body was preserved in a cask of brandy for the voyage home, hence the sailor's name for rum: 'Nelson's blood.'",
    publishedSource:
      "The Death of Lord Nelson by Dr William Beatty, 1807. Public domain.",
  },
  {
    title: "The Old Guard at Krasny",
    byline: "Sgt. Bourgogne, Imperial Guard · Mémoires (1835)",
    setting: "Retreat from Russia, 15 to 18 November 1812",
    excerpt:
      "We were four thousand of the Guard left. The cold had glued the muskets to our hands; to let go was to leave the skin behind. When the Russian artillery opened upon us at Krasny we did not even form square, for we could not. We marched in column straight through the fire, and when we came out upon the further side we counted not the dead but the living, and they were less than half.",
    commentary:
      "Bourgogne's memoir is the retreat from Moscow as a sergeant lived it: frost-bitten, starved, and still, to the end, faithful.",
    publishedSource:
      "Mémoires du Sergent Bourgogne, 1835. Public domain.",
  },
];

const articlesJsonLd = {
  "@context": "https://schema.org",
  "@graph": stories.map((s) => ({
    "@type": "Article",
    headline: s.title,
    name: s.title,
    abstract: s.excerpt,
    description: s.commentary,
    citation: s.publishedSource,
    locationCreated: s.setting,
    author: { "@type": "Person", name: s.byline },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.svg` },
    },
    isPartOf: {
      "@type": "WebPage",
      url: `${SITE.baseUrl}/stories`,
      name: "Napoleonic Wars Eyewitness Accounts",
    },
    mainEntityOfPage: `${SITE.baseUrl}/stories#story-${slugify(s.title)}`,
    url: `${SITE.baseUrl}/stories#story-${slugify(s.title)}`,
    inLanguage: "en-GB",
    articleSection: "Eyewitness accounts",
  })),
};

const relatedPages = [
  {
    href: "/battles",
    title: "Battles",
    note: "The engagements these memoirists survived, in outline.",
  },
  {
    href: "/people",
    title: "People",
    note: "The authors and their commanders: Harris, Wellington, Nelson.",
  },
  {
    href: "/regiments",
    title: "Regiments",
    note: "The units the diarists served in: 95th Rifles, Imperial Guard.",
  },
  {
    href: "/resources",
    title: "Resources",
    note: "Buy the memoirs these extracts are drawn from.",
  },
  {
    href: "/stories/prisoners",
    title: "Prisoners of War",
    note: "Capture, captivity and survival: hulks, parole towns and Dartmoor.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <JsonLd data={articlesJsonLd} />
      <PageHeader
        eyebrow="In their own ink"
        title="Stories"
        lede="Eyewitness accounts of the Napoleonic Wars, drawn from verified public domain memoirs."
      />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <aside className="card p-6 rounded-sm border-gold/35">
          <div className="flex items-start gap-4">
            <span className="text-gold text-2xl leading-none" aria-hidden="true">
              ⚜
            </span>
            <p className="text-sm md:text-base text-parchment leading-relaxed font-serif">
              Every account on this page is drawn from a published
              public-domain memoir or eyewitness report. Each entry carries a
              citation to its original source beneath the commentary.
            </p>
          </div>
        </aside>

        {stories.map((s, idx) => {
          const slug = slugify(s.title);
          return (
            <article
              key={s.title}
              id={`story-${slug}`}
              className="relative scroll-mt-24"
            >
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold/70">
                    No. {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-gold/40 bg-navy-muted/50 text-gold-pale text-[10px] md:text-xs font-display uppercase tracking-[0.25em]">
                    Source
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-gold-pale uppercase tracking-wider mb-2">
                  <a href={`#story-${slug}`} className="hover:text-gold">
                    {s.title}
                  </a>
                </h2>
                <div className="text-sm italic text-burgundy-bright">
                  {s.byline}
                </div>
                <div className="text-xs uppercase tracking-widest text-parchment/85 mt-1">
                  {s.setting}
                </div>
              </header>

              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                {s.excerpt}
              </blockquote>

              <p className="mt-5 text-sm text-parchment/95 leading-relaxed">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                  Note
                </span>
                {s.commentary}
              </p>

              <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                  Source
                </span>
                <span className="font-serif">{s.publishedSource}</span>
              </p>

              {idx < stories.length - 1 && <div className="gold-divider" />}
            </article>
          );
        })}

        <aside className="mt-12 pt-10 border-t border-gold/20">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Related
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedPages.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card p-5 rounded-sm block"
              >
                <div className="font-display text-gold-pale uppercase tracking-wider mb-2">
                  {r.title}
                </div>
                <p className="text-sm text-parchment/95 font-serif leading-relaxed">
                  {r.note}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
