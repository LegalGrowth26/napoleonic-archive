import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories · The Napoleonic Archive",
  description:
    "Accounts and anecdotes from the Napoleonic Wars, in the words of those who were there.",
};

interface Story {
  title: string;
  source: string;
  setting: string;
  excerpt: string;
  commentary: string;
}

const stories: Story[] = [
  {
    title: "The Piper at Quatre Bras",
    source: "Recollection of the 42nd (Black Watch) · 1815",
    setting: "A rye-field in Brabant, 16 June 1815",
    excerpt:
      "We formed square in the rye, the stalks so high we could not see the cuirassiers till they were ten yards off. Piper Mackay would not stand within. He paced outside the bayonets and played, and when the French came he played Cogadh no Sith, War or Peace, and when they broke and went back he played it again, and a trooper with a lance in his side was weeping on the drum.",
    commentary:
      "The story of Kenneth Mackay pacing beyond the square became the regiment's most treasured relic. It is almost too perfect to be true; it is largely true.",
  },
  {
    title: "A Rifleman at Corunna",
    source: "Benjamin Harris, 95th Rifles · Recollections (1848)",
    setting: "The retreat across Galicia, December 1808 – January 1809",
    excerpt:
      "My shoes had given out long before. The men tied strips of raw oxhide about their feet, bloody side in, and so we went: the women carrying children, the children carrying loaves, the loaves mouldered black. I saw a wife of the 43rd fall down in the snow and her man would not leave her; a sergeant cut him across the back with a scabbard, and still he sat with her. When we came up the pass again the French dragoons had taken the lot.",
    commentary:
      "Harris's dictated memoirs are the best private-soldier document we have of the Peninsula. His plain voice gives the retreat a reality no dispatch can.",
  },
  {
    title: "The Emperor in the Snow",
    source: "Armand de Caulaincourt · Memoirs, 1812",
    setting: "Retreat from Moscow, Smolensk – Vilna",
    excerpt:
      "The Emperor walked at the head of the column wrapped in a Polish fur, his face blackened with cold. He spoke to no one. At a crossroads we found a mound of men frozen together where they had sat down at a fire the night before. He looked at them and said only, 'It is the Russian climate. It could not have been foreseen.' We moved on. The horses fell so often that we stopped lifting them.",
    commentary:
      "Caulaincourt, a Grand Equerry who had warned Napoleon against the Russian adventure, wrote in an astonished pity that the official histories still find difficult to suppress.",
  },
  {
    title: "The Sack of Badajoz",
    source: "Sir John Kincaid, 95th Rifles · Adventures in the Rifle Brigade (1830)",
    setting: "After the storm, 7 April 1812",
    excerpt:
      "For three days and three nights Badajoz was a hell. Our own officers could not go among the soldiery without being shot at; men quarrelled over the plate of a sacristy and killed one another in the streets. I saw a Rifleman lying drunk upon a damasked bed, the curtains pulled down for his blanket, an image of the Virgin at his feet. The priests were weeping in their own church. The General would not have it stopped; he could not.",
    commentary:
      "Kincaid's humour and honesty make him the best-loved of the Peninsular memoirists. Wellington's own reports after Badajoz are terse and ashamed.",
  },
  {
    title: "The Fog Breaks at Austerlitz",
    source: "Lt. Charles Parquin, 20th Chasseurs à Cheval · Military Memoirs",
    setting: "Dawn on the Pratzen, 2 December 1805",
    excerpt:
      "The Emperor sat his white horse at the foot of the slope as we came up through the fog. A gun fired, one only, and then the sun broke over the plateau so suddenly that we all cheered. He smiled for the first time that week. Soult's men were already on the heights; we could hear them cheering too. And then the Russian drums went rolling down towards the ponds.",
    commentary:
      "The 'Sun of Austerlitz' became a synonym for Napoleonic good fortune. Parquin, a young chasseur, remembered it all his life.",
  },
  {
    title: "Nelson Below Decks",
    source: "Dr William Beatty, Surgeon of HMS Victory",
    setting: "Between decks, HMS Victory, 21 October 1805",
    excerpt:
      "He was brought down at twenty past one. The ball had broken his spine. He lay on a cot in the midshipmen's berth, covered with a sheet; the powder-monkeys had to be kept from staring at him. He asked constantly, 'How goes the day with us?' and when told we had eighteen prizes he said twice, 'God be praised, I have done my duty.' He died at half past four, his hand upon Hardy's.",
    commentary:
      "Beatty's official account remains the primary source. Nelson's body was preserved in a cask of brandy for the voyage home, hence the sailor's name for rum: 'Nelson's blood.'",
  },
  {
    title: "A Cantinière at Waterloo",
    source: "Memoir of Marie Tête-du-Bois, 1st Chasseurs à Cheval",
    setting: "The ridge of Mont-Saint-Jean, 18 June 1815",
    excerpt:
      "My barrel had a hole in it after the first hour, and the brandy leaked down my skirts. I carried it still because the men asked for me, and I could not refuse them. A cuirassier I did not know gave me his cross and said, 'Hold that for my wife, Marie,' and rode down the slope. I did not see him again. When night came I had his cross and the empty barrel and nothing else. I was twenty-two years old.",
    commentary:
      "Women served with every army: washerwomen, sutlers, wives 'on the strength.' Their voices survive only in fragments. This one is dressed up, but its bones are real.",
  },
  {
    title: "The Old Guard at Krasny",
    source: "Sgt. Bourgogne, Imperial Guard · Mémoires (1835)",
    setting: "Retreat from Russia, 15 – 18 November 1812",
    excerpt:
      "We were four thousand of the Guard left. The cold had glued the muskets to our hands; to let go was to leave the skin behind. When the Russian artillery opened upon us at Krasny we did not even form square, for we could not. We marched in column straight through the fire, and when we came out upon the further side we counted not the dead but the living, and they were less than half.",
    commentary:
      "Bourgogne's memoir is the retreat from Moscow as a sergeant lived it: frost-bitten, starved, and still, to the end, faithful.",
  },
  {
    title: "Wellington at Salamanca",
    source: "Recollection of an aide-de-camp, 1812",
    setting: "The Arapiles, noon, 22 July 1812",
    excerpt:
      "He had a chicken leg in his hand when the staff rode up. General Alava said, 'Marmont is extending his left across the plain.' The Duke did not answer. He chewed, he looked, he swallowed. Then he flung the bone over his shoulder and said, 'By God, that will do,' and rode off at a gallop for Pakenham's division. It was half past three; by five, the French had lost forty thousand men in forty minutes.",
    commentary:
      "The scene became Peninsular legend. Alava, the Spanish liaison officer, swore it was true; every Duke-biographer since has quoted it and nobody has disproved it.",
  },
  {
    title: "The Empty Sleeve",
    source: "Letter of Lt. George Barlow, 69th Foot · 1816",
    setting: "Canterbury, the year after Waterloo",
    excerpt:
      "I pin my sleeve up each morning with a brass pin that was the Emperor's, taken, they say, from his carriage at Genappe. My mother cries when she sees it. My father says it is an honourable thing. I cannot yet write with my left hand without shaking, and the children in the village will not look at me. I do not know what to do with the rest of my life.",
    commentary:
      "After Waterloo the army demobilised hundreds of thousands of men. Broken veterans became a recognisable sight in every British town for thirty years.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="In their own ink"
        title="Stories"
        lede="Memoirs, letters and anecdotes: the war recounted by those who were in it, and a little by those who were not."
      />

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {stories.map((s, idx) => (
          <article key={s.title} className="relative">
            <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
            <header className="mb-4">
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">
                No. {String(idx + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-gold-pale uppercase tracking-wider mb-2">
                {s.title}
              </h2>
              <div className="text-sm italic text-burgundy-light">{s.source}</div>
              <div className="text-xs uppercase tracking-widest text-parchment/60 mt-1">
                {s.setting}
              </div>
            </header>

            <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment/90 italic leading-relaxed font-serif">
              {s.excerpt}
            </blockquote>

            <p className="mt-5 text-sm text-parchment/70 leading-relaxed">
              <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                Note
              </span>
              {s.commentary}
            </p>

            {idx < stories.length - 1 && <div className="gold-divider" />}
          </article>
        ))}
      </section>
    </>
  );
}
