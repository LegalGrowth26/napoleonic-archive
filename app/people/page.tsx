import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE, slugify } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleonic Figures & Commanders",
  description:
    "Napoleon Bonaparte, the Duke of Wellington, Nelson, Ney, Blücher and more: the commanders, memoirists and Sharpe-era figures of the Napoleonic Wars.",
  path: "/people",
  keywords: [
    "Napoleon Bonaparte",
    "Duke of Wellington",
    "Horatio Nelson",
    "Napoleonic figures",
    "Marshal Ney",
    "Blücher",
    "Napoleonic commanders",
  ],
});

interface Person {
  name: string;
  epithet: string;
  years: string;
  faction: string;
  bio: string;
  /** Battles this person fought at (matches Battle names for deep links). */
  relatedBattles?: readonly string[];
  /** Path to a dedicated sub-page, if one exists. */
  dedicatedPage?: string;
}

const groups: { title: string; intro: string; people: Person[] }[] = [
  {
    title: "French",
    intro:
      "Soldiers of the Republic, of the Consulate and of the Empire: the men who carried the eagles across Europe.",
    people: [
      {
        name: "Napoleon Bonaparte",
        epithet: "The Emperor",
        years: "1769 – 1821",
        faction: "Emperor of the French",
        dedicatedPage: "/people/napoleon",
        bio: "A Corsican artilleryman who became master of Europe. His genius lay in movement: in bringing more men to the decisive point than the enemy thought possible. He ruled by Civil Code, by the loot of a continent, and by the devotion of his Old Guard. He died in exile on St Helena, attended by his diary and a handful of grumblers.",
        relatedBattles: ["Marengo", "Austerlitz", "Jena–Auerstedt", "Eylau", "Borodino", "Leipzig", "Ligny", "Waterloo"],
      },
      {
        name: "Michel Ney",
        epithet: "Bravest of the Brave",
        years: "1769 – 1815",
        faction: "Marshal of the Empire",
        bio: "A cooper's son from Saarlouis. He commanded the rearguard of the retreat from Moscow. At Waterloo he had five horses shot under him. Tried by the Bourbons after the Hundred Days, he gave the firing squad the order himself.",
        relatedBattles: ["Quatre Bras", "Waterloo"],
      },
      {
        name: "Louis-Nicolas Davout",
        epithet: "The Iron Marshal",
        years: "1770 – 1823",
        faction: "Marshal · Duke of Auerstedt",
        bio: "Bespectacled, austere, undefeated. At Auerstedt his 26,000 men broke a Prussian army nearly twice their size. Alone among the marshals he never lost a battle in independent command. Napoleon trusted him with Hamburg when the Empire was crumbling; he held it to the last.",
        relatedBattles: ["Jena–Auerstedt"],
      },
      {
        name: "Joachim Murat",
        epithet: "The Dandy King",
        years: "1767 – 1815",
        faction: "Marshal · King of Naples",
        bio: "An innkeeper's son who became Napoleon's brother-in-law and the most theatrical cavalryman in Europe. He rode in plumes, velvet and gold lace; the Russians called his uniforms 'the peacock's feathers.' Shot by a Bourbon firing squad in Pizzo, he gave the order himself, refusing a blindfold.",
        relatedBattles: ["Eylau"],
      },
      {
        name: "Jean Lannes",
        epithet: "The Roland of the Army",
        years: "1769 – 1809",
        faction: "Marshal · Duke of Montebello",
        bio: "Gascon, hot-tempered, beloved. The only marshal who addressed Napoleon with the familiar 'tu.' Both his legs were shattered by a cannonball at Aspern-Essling; he died nine days later in Napoleon's arms. The Emperor is said to have wept, perhaps the only time for a subordinate.",
      },
      {
        name: "Pierre Cambronne",
        epithet: "Général de la Garde",
        years: "1770 – 1842",
        faction: "General of the Old Guard",
        bio: "Commanded a battalion of the Old Guard in the last square at Waterloo. Legend says that, summoned to surrender, he answered: 'La Garde meurt et ne se rend pas!', or, in the soldier's version, a single untranslatable word. He was taken alive, bloody and bitter.",
        relatedBattles: ["Waterloo"],
      },
    ],
  },
  {
    title: "British",
    intro:
      "Redcoats and their officers: the stubborn, parade-drilled, gin-soaked line that broke the Empire.",
    people: [
      {
        name: "Arthur Wellesley, Duke of Wellington",
        epithet: "The Iron Duke · Old Nosey",
        years: "1769 – 1852",
        faction: "Field Marshal · Commander-in-Chief, Peninsula & Waterloo",
        bio: "Born in the same year as Napoleon. Cold, private, calculating; he spoke of his men as 'the scum of the earth, enlisted for drink.' Yet he shared their biscuit in the mountains and never lost a battle in independent command. At Waterloo he said: 'I should like to be off my horse.'",
        relatedBattles: ["Vimeiro", "Talavera", "Ciudad Rodrigo", "Badajoz", "Salamanca", "Vitoria", "Toulouse", "Quatre Bras", "Waterloo"],
      },
      {
        name: "Horatio Nelson",
        epithet: "The Immortal Memory",
        years: "1758 – 1805",
        faction: "Vice-Admiral of the White",
        bio: "One-eyed, one-armed, and absolutely without fear. His signal at Trafalgar, 'England expects that every man will do his duty', has never been forgotten. Shot from the mizzen-top of the Redoutable, he died between decks, whispering: 'Thank God, I have done my duty.'",
        relatedBattles: ["Trafalgar"],
      },
      {
        name: "Sir John Moore",
        epithet: "The Martyr of Corunna",
        years: "1761 – 1809",
        faction: "Lieutenant-General",
        bio: "Architect of British light infantry training at Shorncliffe, father of the Light Division. He led the retreat to Corunna through a Galician winter and died on the ridge above the port, urged by his aide: 'I hope, sir, you are not much hurt.' 'I fear I am mortal.'",
        relatedBattles: ["Corunna"],
      },
      {
        name: "Robert Craufurd",
        epithet: "Black Bob",
        years: "1764 – 1812",
        faction: "Major-General · Light Division",
        bio: "Martinet, bible-reader, cold terror of the Light Division. He marched the Light Brigade forty-two miles in twenty-six hours to Talavera. Mortally wounded leading the stormers up the lesser breach at Ciudad Rodrigo, he lived four days and is buried in the ditch he took.",
        relatedBattles: ["Ciudad Rodrigo"],
      },
      {
        name: "Thomas Picton",
        epithet: "The Fighting General",
        years: "1758 – 1815",
        faction: "Lieutenant-General · 5th Division",
        bio: "Welsh, profane, unbreakable. He fought the Peninsular War in a top hat and greatcoat, swore in chapel and brigade. Shot through the head at Waterloo while leading Kempt's brigade in a counter-charge at the crisis of the day. Buried in civilian clothes; his uniforms were at the cleaner.",
        relatedBattles: ["Waterloo"],
      },
      {
        name: "Benjamin Harris",
        epithet: "Rifleman · memoirist",
        years: "1781 – 1858",
        faction: "95th Rifles (2nd Battalion)",
        bio: "A Dorset shepherd turned rifleman. His dictated 'Recollections' give us the private soldier's war: the lice, the hunger, the blistered feet, the dark comedy of the ranks on the retreat to Corunna. He died a shoemaker in London.",
        relatedBattles: ["Corunna"],
      },
    ],
  },
  {
    title: "Allied & Other",
    intro:
      "Tsars and Prussian hussars, Austrian archdukes and Spanish partisans: the coalitions that at last held.",
    people: [
      {
        name: "Gebhard Leberecht von Blücher",
        epithet: "Marshal Forwards",
        years: "1742 – 1819",
        faction: "Field Marshal · Prussia",
        bio: "Seventy-two at Waterloo, hair like a badger's brush, riding at the head of a cavalry charge. Thrown from his horse at Ligny, he lay under the dead until darkness and rose to march to Wellington's aid. 'Ich werde kommen,' he wrote, and came.",
        relatedBattles: ["Leipzig", "Ligny", "Waterloo"],
      },
      {
        name: "Mikhail Kutuzov",
        epithet: "The Old Fox of the North",
        years: "1745 – 1813",
        faction: "Field Marshal · Russia",
        bio: "One-eyed, corpulent, patient. He gave ground at Borodino, and gave Napoleon Moscow, and then strangled the Grande Armée on the road to Smolensk with famine, Cossacks and cold. He died on the march to Germany, having outlived his usefulness to the Tsar.",
        relatedBattles: ["Borodino"],
      },
      {
        name: "Karl Philipp, Prince of Schwarzenberg",
        epithet: "Generalissimo of the Coalition",
        years: "1771 – 1820",
        faction: "Field Marshal · Austria",
        bio: "The man who commanded all the armies at Leipzig, the first time in history. Cautious, conciliatory, Austrian; he made the coalition hold together where strong personalities would have smashed it apart. Without him, no Battle of the Nations.",
        relatedBattles: ["Leipzig"],
      },
      {
        name: "Archduke Charles of Austria",
        epithet: "The Habsburg Soldier",
        years: "1771 – 1847",
        faction: "Generalissimus · Austria",
        bio: "The first general to beat Napoleon in a major battle, at Aspern-Essling in May 1809. An epileptic, a reformer, an honest student of war. Dismissed after Wagram; he spent the rest of his life writing treatises that are still read at staff colleges.",
      },
      {
        name: "Don Julián Sánchez",
        epithet: "El Charro",
        years: "1774 – 1832",
        faction: "Spanish guerrilla leader",
        bio: "A farm-hand from the Salamanca plain whose parents and sister were murdered by French soldiers. He raised a lancer regiment of partisans, served under Wellington, and rode into Salamanca at the head of his Charros in 1812. Wellington loved him; Madrid, afterwards, did not.",
        relatedBattles: ["Salamanca"],
      },
      {
        name: "Louise Fusil",
        epithet: "Actress of Moscow",
        years: "1771 – 1848",
        faction: "Parisian actress · memoirist",
        bio: "Performed for the French garrison in Moscow and survived the retreat. Her memoirs record the burning city, the frozen Berezina, and the terrible kindness of a Russian woman who hid her under straw. The war as civilians saw it.",
      },
    ],
  },
  {
    title: "Of Sharpe's world",
    intro:
      "Names borrowed, transfigured or invented by Bernard Cornwell: the company kept by a rifleman from Yorkshire.",
    people: [
      {
        name: "Richard Sharpe",
        epithet: "Mr Sharpe · the Chosen Man",
        years: "b. 1777 (fictional)",
        faction: "95th Rifles · later South Essex",
        bio: "Born in a Cat Lane brothel; enlisted to escape a hanging. From sergeant at Assaye to lieutenant-colonel at Waterloo, he is the ladder-climbing rogue at the Empire's edge. Carries a Baker rifle, a heavy cavalry sword he prefers to the regulation sabre, and a permanent chip on his shoulder.",
        relatedBattles: ["Badajoz", "Salamanca", "Vitoria", "Waterloo"],
      },
      {
        name: "Patrick Harper",
        epithet: "The big Irishman",
        years: "b. c. 1779 (fictional)",
        faction: "Regimental Sergeant-Major, 95th",
        bio: "From Donegal, seven-barrelled volley gun at his shoulder, a crucifix under his jacket. Sharpe's friend, conscience, and armourer. The second most dangerous man in any room Sharpe enters, and often the first.",
        relatedBattles: ["Badajoz", "Waterloo"],
      },
      {
        name: "Major Michael Hogan",
        epithet: "Wellington's Irish head of intelligence",
        years: "b. c. 1770 (fictional)",
        faction: "Royal Engineers / Exploring Officers",
        bio: "Map-maker, spy-master, patron. A fictional cousin to the real Colquhoun Grant and George Scovell. He sees in Sharpe what the gentlemen officers will not: a useful, lethal, unpolished instrument.",
      },
      {
        name: "Obadiah Hakeswill",
        epithet: "Twitching Sergeant",
        years: "d. 1813 (fictional)",
        faction: "33rd Foot · South Essex",
        bio: "'I cannot be killed, it says so in the Scriptures!' The most loathsome of villains, a survivor of a botched hanging at fourteen. Based loosely on real army bullies; Cornwell's darkest invention. Sharpe kills him at last, by musket, in a ditch.",
      },
    ],
  },
];

const allPeople = groups.flatMap((g) => g.people);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Napoleonic Figures & Commanders",
  description:
    "Historical figures of the Napoleonic Wars: emperors, marshals, admirals, generals, riflemen and memoirists.",
  numberOfItems: allPeople.length,
  itemListElement: allPeople.map((p, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Person",
      name: p.name,
      alternateName: p.epithet,
      description: p.bio,
      jobTitle: p.faction,
      url: `${SITE.baseUrl}/people#person-${slugify(p.name)}`,
    },
  })),
};

const relatedPages = [
  {
    href: "/battles",
    title: "Battles",
    note: "The engagements these men and women commanded or survived.",
  },
  {
    href: "/regiments",
    title: "Regiments",
    note: "The units they led: 95th Rifles, Old Guard, Black Watch and more.",
  },
  {
    href: "/stories",
    title: "Stories",
    note: "Their own words, from Harris on Corunna to Caulaincourt in Moscow.",
  },
  {
    href: "/fiction",
    title: "Sharpe novels",
    note: "Fictional company for these real commanders, by Bernard Cornwell.",
  },
];

export default function PeoplePage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <PageHeader
        eyebrow="Dramatis Personæ"
        title="People"
        lede="Emperors and riflemen, marshals and memoirists: the men and women whose lives the powder scorched."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {groups.map((group) => (
          <div key={group.title}>
            <div className="mb-8">
              <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title">
                {group.title}
              </h2>
              <p className="mt-4 text-parchment italic text-lg max-w-3xl font-serif">
                {group.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {group.people.map((p) => {
                const slug = slugify(p.name);
                return (
                  <article
                    key={p.name}
                    id={`person-${slug}`}
                    className="card p-6 rounded-sm scroll-mt-24"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                        <a
                          href={`#person-${slug}`}
                          className="hover:text-gold"
                        >
                          {p.name}
                        </a>
                      </h3>
                      <span className="text-xs tracking-widest text-gold/70 whitespace-nowrap">
                        {p.years}
                      </span>
                    </div>
                    <div className="text-sm italic text-burgundy-bright mb-3">
                      {p.epithet}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-parchment/85 mb-4">
                      {p.faction}
                    </div>
                    <p className="text-parchment leading-relaxed font-serif">
                      {p.bio}
                    </p>
                    {p.relatedBattles && p.relatedBattles.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-gold/15 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                        <span className="text-gold-pale uppercase text-xs tracking-widest">
                          Fought at
                        </span>
                        <span className="text-gold/40">·</span>
                        {p.relatedBattles.map((battle, i) => (
                          <span key={battle} className="font-serif">
                            <Link
                              href={`/battles#battle-${slugify(battle)}`}
                              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
                            >
                              {battle}
                            </Link>
                            {i < p.relatedBattles!.length - 1 && (
                              <span className="text-gold/40 ml-3">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                    {p.dedicatedPage && (
                      <div className="mt-5 pt-5 border-t border-gold/15">
                        <Link
                          href={p.dedicatedPage}
                          className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
                        >
                          Read full biography &rarr;
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ))}

        <aside className="mt-16 pt-10 border-t border-gold/20">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Related
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
