import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources · The Napoleonic Archive",
  description:
    "Reading lists, primary sources, museums, archives, re-enactors, and podcasts for the Napoleonic Wars.",
};

interface ReadingEntry {
  author: string;
  title: string;
  year?: string;
  note: string;
}

const primarySources: ReadingEntry[] = [
  {
    author: "Benjamin Harris",
    title: "Recollections of Rifleman Harris",
    year: "1848",
    note: "Dictated memoir; the finest private-soldier view of the Peninsula.",
  },
  {
    author: "John Kincaid",
    title: "Adventures in the Rifle Brigade",
    year: "1830",
    note: "Droll, literate Kincaid of the 95th: indispensable, and very funny.",
  },
  {
    author: "George Robert Gleig",
    title: "The Subaltern",
    year: "1825",
    note: "An officer's view of the final Pyrenees and Nivelle campaigns.",
  },
  {
    author: "Armand de Caulaincourt",
    title: "With Napoleon in Russia",
    year: "1825 (pub. 1933)",
    note: "The Emperor's Grand Equerry on the 1812 catastrophe. A pitiless source.",
  },
  {
    author: "Adrien Bourgogne",
    title: "Mémoires du sergent Bourgogne",
    year: "1835",
    note: "The retreat from Moscow in the voice of a guardsman who survived it.",
  },
  {
    author: "Jean-Baptiste Marbot",
    title: "Mémoires du Général Baron de Marbot",
    year: "1891",
    note: "Theatrical, self-serving, marvellously readable: the ne plus ultra of cavalry memoirs.",
  },
  {
    author: "Cavalié Mercer",
    title: "Journal of the Waterloo Campaign",
    year: "1870",
    note: "A Royal Horse Artillery captain's day-by-day account of the Hundred Days. The Waterloo classic.",
  },
  {
    author: "William Napier",
    title: "History of the War in the Peninsula (6 vols)",
    year: "1828–40",
    note: "A participant's narrative that still defines Anglophone Peninsula historiography.",
  },
];

const modernHistories: ReadingEntry[] = [
  {
    author: "David Chandler",
    title: "The Campaigns of Napoleon",
    year: "1966",
    note: "The single-volume standard in English on the Napoleonic army and its operations.",
  },
  {
    author: "Charles Esdaile",
    title: "Napoleon's Wars: An International History",
    year: "2007",
    note: "The modern synthesis. Political, economic, military, all continents.",
  },
  {
    author: "Adam Zamoyski",
    title: "1812: Napoleon's Fatal March on Moscow",
    year: "2004",
    note: "Uses Polish and Russian sources; superb.",
  },
  {
    author: "Adam Zamoyski",
    title: "Rites of Peace: The Fall of Napoleon and the Congress of Vienna",
    year: "2007",
    note: "The diplomats take over where the soldiers left off.",
  },
  {
    author: "Rory Muir",
    title: "Wellington: The Path to Victory 1769–1814 / Wellington: Waterloo and the Fortunes of Peace 1814–1852",
    year: "2013 / 2015",
    note: "The definitive modern biography.",
  },
  {
    author: "Andrew Roberts",
    title: "Napoleon: A Life",
    year: "2014",
    note: "Sympathetic, thorough, based on the Correspondance Générale.",
  },
  {
    author: "Alessandro Barbero",
    title: "The Battle: A New History of Waterloo",
    year: "2003",
    note: "An elegant, multi-perspective day at Mont-Saint-Jean.",
  },
  {
    author: "Philip Haythornthwaite",
    title: "The Armies of Wellington / Napoleon's Military Machine",
    year: "1994 / 1988",
    note: "The order-of-battle reference shelves. Uniforms, weapons, organisation.",
  },
  {
    author: "Roger Knight",
    title: "Britain Against Napoleon",
    year: "2013",
    note: "The war from Whitehall and the dockyards. Logistics as drama.",
  },
  {
    author: "Dominic Lieven",
    title: "Russia Against Napoleon",
    year: "2009",
    note: "The other side of 1812: the Russian war from St Petersburg out.",
  },
];

const sharpeCompanion: ReadingEntry[] = [
  {
    author: "Bernard Cornwell",
    title: "Waterloo: The History of Four Days, Three Armies and Three Battles",
    year: "2014",
    note: "Cornwell's own non-fiction reckoning with his Waterloo novel.",
  },
  {
    author: "Bernard Cornwell",
    title: "Sharpe's Skirmish / Sharpe's Ransom (the short stories)",
    year: "1999 / 1994",
    note: "For the completist. Appended to many paperback reissues.",
  },
  {
    author: "Mark Adkin",
    title: "The Sharpe Companion: The Early Years",
    year: "2003",
    note: "Maps, orders of battle, uniform plates: the enthusiast's toolbox.",
  },
  {
    author: "Mark Adkin",
    title: "The Waterloo Companion",
    year: "2001",
    note: "Not a Sharpe book as such, but a field-by-field dissection of the battle of the last novel.",
  },
];

interface LinkEntry {
  name: string;
  where: string;
  note: string;
}

const museums: LinkEntry[] = [
  {
    name: "National Army Museum",
    where: "Chelsea, London",
    note: "Peninsular and Waterloo galleries; Wellington's funeral uniform; Sharpe-era weapons and kit.",
  },
  {
    name: "Royal Green Jackets (Rifles) Museum",
    where: "Winchester",
    note: "The Rifles' descendant museum: Baker rifles, jackets, the best 95th collection in the world.",
  },
  {
    name: "Musée de l'Armée",
    where: "Hôtel des Invalides, Paris",
    note: "The Napoleonic rooms are unparalleled; the Emperor's tomb is in the dome above.",
  },
  {
    name: "Mémorial 1815 · Hougoumont",
    where: "Braine-l'Alleud, Belgium",
    note: "The Waterloo battlefield visitor centre and the restored farm of Hougoumont.",
  },
  {
    name: "Museu Militar de Lisboa",
    where: "Lisbon",
    note: "Portuguese perspective; Torres Vedras diorama and Peninsular artillery.",
  },
  {
    name: "Borodino Museum-Reserve",
    where: "Mozhaysky District, Russia",
    note: "The battlefield preserved: the Raevsky redoubt, the Bagration flèches.",
  },
  {
    name: "Museum of the Battle of Vitoria",
    where: "Vitoria-Gasteiz, Spain",
    note: "On the plain where Joseph lost his kingdom and his baggage.",
  },
];

const archives: LinkEntry[] = [
  {
    name: "The Napoleon Series (napoleon-series.org)",
    where: "Online",
    note: "A vast, volunteer-curated archive of orders, OOBs, uniform essays, book reviews.",
  },
  {
    name: "Fondation Napoléon (napoleon.org)",
    where: "Online · Paris",
    note: "Scholarly articles, the Correspondance Générale, digital library.",
  },
  {
    name: "Waterloo200.org",
    where: "Online",
    note: "The bicentenary project's lasting archive of maps, lives and diaries.",
  },
  {
    name: "The British Newspaper Archive",
    where: "Online · £",
    note: "Contemporary reporting: dispatches as Londoners read them.",
  },
  {
    name: "Gallica (BnF)",
    where: "Online",
    note: "The French national library's digitised holdings: memoirs, Moniteurs, lithographs.",
  },
];

const podcasts: LinkEntry[] = [
  {
    name: "The Napoleon Podcast",
    where: "Podcast · Everett Rummage",
    note: "Deep, lucid narrative of Napoleon's life campaign by campaign.",
  },
  {
    name: "The Age of Napoleon",
    where: "Podcast · Alexander Mikaberidze (academic)",
    note: "Global, diplomatically-minded; a worthy pairing to the above.",
  },
  {
    name: "The Rest Is History: Waterloo / Napoleon sequences",
    where: "Podcast",
    note: "Tom Holland and Dominic Sandbrook on the period. Accessible and sharp.",
  },
];

const maps: LinkEntry[] = [
  {
    name: "West Point atlas of the Napoleonic Wars",
    where: "Online · free",
    note: "Still the best quick-reference maps of every major campaign.",
  },
  {
    name: "Ordnance Survey · Peninsular battlefields",
    where: "Print / online",
    note: "Modern topography laid over Wellington's maps.",
  },
  {
    name: "Waterloo · IGN 1:10,000 battlefield sheet",
    where: "Belgium",
    note: "The field itself, road-walkable, cornfield by cornfield.",
  },
];

function ReadingList({ entries }: { entries: ReadingEntry[] }) {
  return (
    <ul className="divide-y divide-gold/10">
      {entries.map((e) => (
        <li key={`${e.author}-${e.title}`} className="py-4">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <div>
              <span className="font-display uppercase tracking-wider text-gold-pale">
                {e.author}
              </span>
              <span className="text-parchment/85"> · </span>
              <span className="italic text-parchment font-serif">
                {e.title}
              </span>
            </div>
            {e.year && (
              <span className="text-xs tracking-widest text-gold/70 whitespace-nowrap">
                {e.year}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-parchment/95 font-serif">{e.note}</p>
        </li>
      ))}
    </ul>
  );
}

function LinkList({ entries }: { entries: LinkEntry[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {entries.map((e) => (
        <div
          key={e.name}
          className="border border-gold/20 rounded-sm p-4 bg-navy-muted/40"
        >
          <div className="font-display text-gold-pale uppercase tracking-wider">
            {e.name}
          </div>
          <div className="text-xs uppercase tracking-widest text-gold/60 mt-1">
            {e.where}
          </div>
          <p className="mt-2 text-sm text-parchment/95 font-serif leading-relaxed">
            {e.note}
          </p>
        </div>
      ))}
    </div>
  );
}

interface AffiliateBook {
  title: string;
  author: string;
  asin: string;
  link: string;
  description: string;
}

const affiliateBooks: AffiliateBook[] = [
  {
    title: "Recollections of Rifleman Harris",
    author: "Benjamin Harris",
    asin: "0486836037",
    link: "https://amzn.to/4elXalK",
    description:
      "A British rifleman's first-hand account of the Napoleonic Wars, dictated decades later from the memory of marches, breaches and the harrowing retreat to Corunna.",
  },
  {
    title: "Waterloo: The History of Four Days, Three Armies and Three Battles",
    author: "Bernard Cornwell",
    asin: "0062312065",
    link: "https://amzn.to/4tjc80D",
    description:
      "Cornwell's gripping non-fiction reckoning with the four days that ended Napoleon's Empire on the muddy ridge of Mont-Saint-Jean.",
  },
  {
    title: "The Campaigns of Napoleon",
    author: "David G. Chandler",
    asin: "0025236601",
    link: "https://amzn.to/4vyf2QD",
    description:
      "The single-volume standard in English on Napoleon as a soldier: every campaign, every battle, every gambit, in one monumental study.",
  },
  {
    title: "Wellington: A Personal History",
    author: "Christopher Hibbert",
    asin: "0738201480",
    link: "https://amzn.to/4vyaCsL",
    description:
      "Hibbert's intimate biography of the Iron Duke: politician, husband, soldier, and the only general to beat Napoleon in a pitched battle.",
  },
  {
    title: "The Sharpe Companion",
    author: "Mark Adkin",
    asin: "0060738146",
    link: "https://amzn.to/3OK6ohh",
    description:
      "An illustrated reader's guide to Cornwell's Sharpe novels with maps, orders of battle and historical commentary for every book in the series.",
  },
  {
    title: "An Illustrated Encyclopedia: Uniforms of the Napoleonic Wars",
    author: "Digby Smith",
    asin: "0754815714",
    link: "https://amzn.to/41CVBsc",
    description:
      "An illustrated reference to every army of the period: facings, shakos, sabretaches and standards from Lisbon to Moscow.",
  },
];

function AffiliateBookGrid({ books }: { books: AffiliateBook[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((b) => (
        <article
          key={b.asin}
          className="card p-6 rounded-sm flex flex-col"
        >
          <a
            href={b.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label={`${b.title} on Amazon`}
            className="block mx-auto mb-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://images-na.ssl-images-amazon.com/images/P/${b.asin}.01.LZZZZZZZ.jpg`}
              alt={`${b.title} cover`}
              loading="lazy"
              className="h-56 w-auto object-contain rounded-sm shadow-regal border border-gold/20 bg-navy-deep"
            />
          </a>

          <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider leading-snug mb-1">
            {b.title}
          </h3>
          <div className="text-sm italic text-burgundy-bright mb-3">
            {b.author}
          </div>
          <p className="text-sm text-parchment/95 font-serif leading-relaxed flex-1">
            {b.description}
          </p>

          <a
            href={b.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-5 inline-block self-start px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
          >
            View on Amazon &rarr;
          </a>
        </article>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For further reading"
        title="Resources"
        lede="Memoirs, modern histories, museums, archives, maps and podcasts: the archivist's further shelves."
      />

      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Primary Sources
          </h2>
          <ReadingList entries={primarySources} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Modern Histories
          </h2>
          <ReadingList entries={modernHistories} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Companion to Sharpe
          </h2>
          <ReadingList entries={sharpeCompanion} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Available on Amazon
          </h2>
          <p className="mb-8 text-parchment/95 font-serif italic max-w-3xl">
            A handful of recommended editions, in print and easy to find. Each
            link opens at Amazon in a new tab.
          </p>
          <AffiliateBookGrid books={affiliateBooks} />
          <p className="mt-8 text-xs uppercase tracking-widest text-parchment/85 text-center border-t border-gold/15 pt-5">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Museums & Battlefields
          </h2>
          <LinkList entries={museums} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Online Archives
          </h2>
          <LinkList entries={archives} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Podcasts
          </h2>
          <LinkList entries={podcasts} />
        </div>

        <div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Maps
          </h2>
          <LinkList entries={maps} />
        </div>

        <div className="gold-divider" />

        <p className="italic text-center text-parchment/95 text-sm font-serif">
          The Archive is a labour of love, not an academic register. Corrections
          and suggestions are always welcome; the bibliography above is a
          starting point, not a last word.
        </p>
      </section>
    </>
  );
}
