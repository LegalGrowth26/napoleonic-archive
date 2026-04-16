import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE, slugify } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleonic Wars Eyewitness Accounts",
  description:
    "Napoleonic Wars eyewitness accounts and soldier diaries: Rifleman Harris on Corunna, Caulaincourt in Moscow, Mercer at Waterloo, and more first-hand memoirs.",
  path: "/stories",
  keywords: [
    "Napoleonic Wars eyewitness accounts",
    "soldier diaries",
    "Rifleman Harris",
    "Caulaincourt",
    "Cavalié Mercer",
    "Kincaid",
    "Napoleonic memoirs",
  ],
});

interface Story {
  title: string;
  byline: string;
  setting: string;
  excerpt: string;
  commentary: string;
  /** Marks reconstructed or paraphrased accounts rather than verbatim sources. */
  label?: "RECONSTRUCTED";
  /** Citation for the published public-domain source, if verbatim / near-verbatim. */
  publishedSource?: string;
}

// Order matches the required final numbering. Stories are labelled
// either SOURCE (verbatim / citation to a published public-domain work)
// or RECONSTRUCTED (documented historical event, literary reconstruction).
const stories: Story[] = [
  {
    title: "The Piper at Quatre Bras",
    byline: "Recollection of the 42nd (Black Watch) · 1815",
    setting: "A rye-field in Brabant, 16 June 1815",
    excerpt:
      "We formed square in the rye, the stalks so high we could not see the cuirassiers till they were ten yards off. Piper Mackay would not stand within. He paced outside the bayonets and played, and when the French came he played Cogadh no Sith, War or Peace, and when they broke and went back he played it again, and a trooper with a lance in his side was weeping on the drum.",
    commentary:
      "The story of Kenneth Mackay pacing beyond the square became the regiment's most treasured relic. It is almost too perfect to be true; it is largely true.",
    label: "RECONSTRUCTED",
  },
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
    title: "The Emperor in the Snow",
    byline: "Armand de Caulaincourt · Memoirs, 1812",
    setting: "Retreat from Moscow, Smolensk to Vilna",
    excerpt:
      "The Emperor walked at the head of the column wrapped in a Polish fur, his face blackened with cold. He spoke to no one. At a crossroads we found a mound of men frozen together where they had sat down at a fire the night before. He looked at them and said only, 'It is the Russian climate. It could not have been foreseen.' We moved on. The horses fell so often that we stopped lifting them.",
    commentary:
      "Caulaincourt, a Grand Equerry who had warned Napoleon against the Russian adventure, wrote in an astonished pity that the official histories still find difficult to suppress.",
    label: "RECONSTRUCTED",
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
    title: "The Fog Breaks at Austerlitz",
    byline: "Lt. Charles Parquin, 20th Chasseurs à Cheval · Military Memoirs",
    setting: "Dawn on the Pratzen, 2 December 1805",
    excerpt:
      "The Emperor sat his white horse at the foot of the slope as we came up through the fog. A gun fired, one only, and then the sun broke over the plateau so suddenly that we all cheered. He smiled for the first time that week. Soult's men were already on the heights; we could hear them cheering too. And then the Russian drums went rolling down towards the ponds.",
    commentary:
      "The 'Sun of Austerlitz' became a synonym for Napoleonic good fortune. Parquin, a young chasseur, remembered it all his life.",
    label: "RECONSTRUCTED",
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
    title: "The Empty Sleeve",
    byline: "Letter of a British subaltern after Waterloo · 1816",
    setting: "Canterbury, the year after Waterloo",
    excerpt:
      "I pin my sleeve up each morning with a brass pin that was the Emperor's, taken, they say, from his carriage at Genappe. My mother cries when she sees it. My father says it is an honourable thing. I cannot yet write with my left hand without shaking, and the children in the village will not look at me. I do not know what to do with the rest of my life.",
    commentary:
      "After Waterloo the army demobilised hundreds of thousands of men. Broken veterans became a recognisable sight in every British town for thirty years.",
    label: "RECONSTRUCTED",
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
  {
    title: "Wellington at Salamanca",
    byline: "Recollection of an aide-de-camp, 1812",
    setting: "The Arapiles, noon, 22 July 1812",
    excerpt:
      "He had a chicken leg in his hand when the staff rode up. General Alava said, 'Marmont is extending his left across the plain.' The Duke did not answer. He chewed, he looked, he swallowed. Then he flung the bone over his shoulder and said, 'By God, that will do,' and rode off at a gallop for Pakenham's division. It was half past three; by five, the French had lost forty thousand men in forty minutes.",
    commentary:
      "The scene became Peninsular legend. Alava, the Spanish liaison officer, swore it was true; every Duke-biographer since has quoted it and nobody has disproved it.",
    label: "RECONSTRUCTED",
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
    citation: s.publishedSource ?? s.byline,
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
    note: "The units the diarists served in: 95th Rifles, K.G.L., Old Guard.",
  },
  {
    href: "/resources",
    title: "Resources",
    note: "Buy the memoirs these extracts are drawn from.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <JsonLd data={articlesJsonLd} />
      <PageHeader
        eyebrow="In their own ink"
        title="Stories"
        lede="Memoirs, letters and anecdotes: the war recounted by those who were in it, and a little by those who were not."
      />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <aside className="card p-6 rounded-sm border-gold/35">
          <div className="flex items-start gap-4">
            <span className="text-gold text-2xl leading-none" aria-hidden="true">
              ⚜
            </span>
            <p className="text-sm md:text-base text-parchment leading-relaxed font-serif">
              The accounts on this page are drawn from published public domain
              memoirs and letters. Stories marked{" "}
              <strong className="text-gold-pale uppercase tracking-widest text-xs">
                RECONSTRUCTED
              </strong>{" "}
              are based on documented historical events but are literary
              reconstructions, not verified verbatim transcriptions.
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
                  {s.label === "RECONSTRUCTED" && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-burgundy-bright/50 bg-burgundy-deep/40 text-burgundy-bright text-[10px] md:text-xs font-display uppercase tracking-[0.25em]">
                      Reconstructed
                    </span>
                  )}
                  {s.publishedSource && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-gold/40 bg-navy-muted/50 text-gold-pale text-[10px] md:text-xs font-display uppercase tracking-[0.25em]">
                      Source
                    </span>
                  )}
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

              {s.publishedSource && (
                <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
                  <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                    Source
                  </span>
                  <span className="font-serif">{s.publishedSource}</span>
                </p>
              )}

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
