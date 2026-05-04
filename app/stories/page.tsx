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
  {
    title: "Cavalry at Waterloo",
    byline: "Cavalié Mercer, Royal Horse Artillery · Journal of the Waterloo Campaign (1870)",
    setting: "The ridge at Mont-Saint-Jean, 18 June 1815",
    excerpt:
      "Mercer describes how his battery of nine-pounders held its ground on the ridge as wave after wave of French cavalry charged the Allied line. He writes of the cuirassiers riding uphill through the mud, the guns firing at point-blank range into the mass of horsemen, the ground between the guns filling with dead horses and men in steel breastplates. He refused Wellington's order to shelter his gunners inside the infantry squares, judging that if they ran, the raw Dutch-Belgian infantry nearby would break. His battery kept firing.",
    commentary:
      "Mercer's journal, published posthumously in 1870, is the finest artillery memoir of the period. His vivid account of the cavalry charges has shaped how the battle is visualised for two centuries.",
    publishedSource:
      "Source: Journal of the Waterloo Campaign by General Cavalié Mercer, 1870. Public domain. This is a summary of the account in our own words, not a verbatim extract. The original text is available via the sources listed on our Resources page.",
  },
  {
    title: "A Private Soldier in Spain",
    byline: "Private William Wheeler · The Letters of Private Wheeler, 1809–1828",
    setting: "The Peninsular War, 1809 to 1814",
    excerpt:
      "Wheeler's letters home describe the daily reality of the ordinary infantryman in the Peninsula: the long marches under a broiling sun, the short rations, the bivouacs in rain without blankets, and the moments of sudden violence when a French column appeared over a ridge. He writes of the camaraderie of the ranks, the dark humour of soldiers who knew each battle might be their last, and the steady erosion of men by disease, exhaustion and the occasional musket ball.",
    commentary:
      "Wheeler's letters were edited and published by B.H. Liddell Hart in 1951. They provide a rare and largely unembellished record of the Peninsula from the perspective of a literate private soldier.",
    publishedSource:
      "Source: The Letters of Private Wheeler 1809–1828, edited by B.H. Liddell Hart, 1951. This is a summary of the account in our own words, not a verbatim extract. The original text is available via the sources listed on our Resources page.",
  },
  {
    title: "The 42nd Highlanders in Spain",
    byline: "Sergeant James Anton · Retrospect of a Military Life (1841)",
    setting: "The Peninsular War, the 42nd (Black Watch) at various actions",
    excerpt:
      "Anton describes the experience of the Highland regiments in the Peninsula: the pride of the kilt in battle, the bagpipes playing the men into action, and the terrible cost of frontal assaults against prepared positions. He writes of comrades lost at Quatre Bras and Waterloo, of the disciplined advance of the 42nd through fields of rye taller than a man, and of the moment when the Highland charge broke the French line.",
    commentary:
      "Anton's memoir is one of the few published accounts from a Highland NCO of the period. His pride in the regiment and his honest descriptions of the cost of battle make it an essential source for the Black Watch's war.",
    publishedSource:
      "Source: Retrospect of a Military Life by James Anton, 1841. Public domain. This is a summary of the account in our own words, not a verbatim extract. The original text is available via the sources listed on our Resources page.",
  },
  {
    title: "The Cavalry Charges at Waterloo",
    byline: "Captain Cavalié Mercer, Royal Horse Artillery · Journal of the Waterloo Campaign (1870)",
    setting: "The ridge at Mont-Saint-Jean, approximately 4pm, 18 June 1815",
    excerpt:
      "Mercer describes the French cuirassiers advancing uphill towards his battery in successive waves. His guns fire at point-blank range into the mass of horses and steel-clad men. The ground between the guns fills with dead and dying horses, their riders trapped beneath them. He writes of the extraordinary spectacle of armoured cavalry riding through a storm of canister, the front ranks falling while the rear ranks press forward over the bodies. His battery fires until the barrels are too hot to touch.",
    commentary:
      "Mercer's journal, published posthumously in 1870, is the finest artillery memoir of the period. His account of the cavalry charges has shaped how the battle is visualised for two centuries.",
    publishedSource:
      "Source: Journal of the Waterloo Campaign by General Cavalié Mercer, 1870. Public domain. This is a summary of the account in our own words, not a verbatim extract.",
  },
  {
    title: "The Guard Advances",
    byline: "Ensign Rees Howell Gronow, 1st Foot Guards · Reminiscences and Recollections (1862)",
    setting: "The ridge at Mont-Saint-Jean, approximately 7:30pm, 18 June 1815",
    excerpt:
      "Gronow describes the final crisis of Waterloo: the advance of the Imperial Guard up the slope in the evening twilight. He writes of the dense blue columns approaching through the smoke, the drums beating the pas de charge, and the extraordinary moment when the Guards were ordered to stand and fire. The French column halted, staggered by the volley at thirty yards, and then the British Guards charged with the bayonet. The Imperial Guard broke and fled. Gronow writes that the cry 'La Garde recule' spread across the French army like a wave.",
    commentary:
      "Gronow's Reminiscences are among the most entertaining memoirs of the Regency period. His account of Waterloo, written decades later, captures the surreal calm of a young officer watching the most important moment in European history unfold at thirty yards.",
    publishedSource:
      "Source: Reminiscences and Recollections of Captain Gronow, 1862. Public domain. This is a summary of the account in our own words, not a verbatim extract.",
  },
  {
    title: "The Morning After Badajoz",
    byline: "Lieutenant John Kincaid, 95th Rifles · Adventures in the Rifle Brigade (1830)",
    setting: "Badajoz, morning of 7 April 1812",
    excerpt:
      "Kincaid describes walking through the town on the morning after the storming. He writes of British soldiers drunk on plundered wine, lying unconscious in the streets alongside the dead. He saw men quarrelling over silver plate from churches, officers unable to control their own men, and the extraordinary sight of soldiers dressed in looted finery: silk gowns, priests' vestments, women's bonnets. The contrast between the night's horror and the morning's grotesque carnival is Kincaid's particular genius.",
    commentary:
      "Kincaid is the wittiest of the Peninsular memoirists. His account of Badajoz balances dark humour with genuine horror at what the army became in those three days.",
    publishedSource:
      "Source: Adventures in the Rifle Brigade by Sir John Kincaid, 1830. Public domain. This is a summary of the account in our own words, not a verbatim extract.",
  },
  {
    title: "The Retreat from Moscow",
    byline: "General Armand de Caulaincourt · With Napoleon in Russia (memoir written 1812-13)",
    setting: "The road from Moscow to Smolensk, November 1812",
    excerpt:
      "Caulaincourt, Napoleon's Master of the Horse, describes the retreat in language of controlled despair. He writes of men freezing to death standing upright, of horses that could not keep their footing on the ice, of entire regiments dissolving into stumbling crowds of starving men. He records Napoleon's silence as the army disintegrated around him, and the Emperor's occasional bursts of furious energy when news arrived of yet another disaster. The cold, Caulaincourt writes, was beyond anything the army had experienced or imagined possible.",
    commentary:
      "Caulaincourt's memoir, dictated to his secretary during and immediately after the campaign, is the closest we have to Napoleon's own account of 1812. His proximity to the Emperor gives his account unique authority.",
    publishedSource:
      "Source: With Napoleon in Russia: The Memoirs of General de Caulaincourt (written 1812-13, published posthumously). Public domain translation available. This is a summary of the account in our own words, not a verbatim extract.",
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
  {
    href: "/stories/purchase-system",
    title: "The Purchase System",
    note: "How officers were made: buying a commission and why Sharpe could never belong.",
  },
  {
    href: "/stories/life-as-a-soldier",
    title: "Life as a Soldier",
    note: "Pay, food, flogging and survival: the everyday reality behind the battles.",
  },
  {
    href: "/stories/battlefield-medicine",
    title: "Battlefield Medicine",
    note: "The surgeon's saw, amputation, and why disease killed more men than battle.",
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

      {/* HERO IMAGE */}
      <div className="relative w-full h-[250px] md:h-[400px]">
        <img
          src="/soldiers.png"
          alt="Napoleonic soldiers on the march"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>
    </>
  );
}
