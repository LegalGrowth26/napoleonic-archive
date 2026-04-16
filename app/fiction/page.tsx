import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sharpe Novels by Bernard Cornwell",
  description:
    "All 24 Sharpe novels by Bernard Cornwell in chronological reading order: synopses, cover art and buy links for Richard Sharpe's full Napoleonic saga.",
  path: "/fiction",
  keywords: [
    "Sharpe novels in order",
    "Bernard Cornwell books",
    "Richard Sharpe",
    "Sharpe series",
    "Sharpe chronological order",
    "Bernard Cornwell Sharpe",
  ],
  type: "article",
});

interface Book {
  order: number;
  title: string;
  setting: string;
  synopsis: string;
  asin: string;
  link: string;
}

// Chronological (in-story) order of the 24 Sharpe novels.
const books: Book[] = [
  {
    order: 1,
    title: "Sharpe's Tiger",
    setting: "India · Seringapatam, 1799",
    synopsis:
      "Private Sharpe slips into the Tippoo Sultan's fortress on a clandestine mission and earns his first stripe in the storming of Seringapatam.",
    asin: "0007425791",
    link: "https://amzn.to/3QdRVuq",
  },
  {
    order: 2,
    title: "Sharpe's Triumph",
    setting: "India · Assaye, 1803",
    synopsis:
      "Sergeant Sharpe fights the bloody day of Assaye at Arthur Wellesley's side and commits the act that will win him a commission.",
    asin: "0007425805",
    link: "https://amzn.to/3OjyIa9",
  },
  {
    order: 3,
    title: "Sharpe's Fortress",
    setting: "India · Gawilghur, 1803",
    synopsis:
      "Newly-commissioned Ensign Sharpe climbs the cliff-fortress of Gawilghur against both Mahratta guns and the gentlemen of his own regiment.",
    asin: "0007425813",
    link: "https://amzn.to/3QtV1dP",
  },
  {
    order: 4,
    title: "Sharpe's Trafalgar",
    setting: "East Indiaman Calliope, 1805",
    synopsis:
      "Homeward-bound Sharpe is caught aboard a merchantman at the greatest sea battle ever fought.",
    asin: "0007425848",
    link: "https://amzn.to/4tTl50t",
  },
  {
    order: 5,
    title: "Sharpe's Prey",
    setting: "Denmark · Copenhagen, 1807",
    synopsis:
      "Sharpe hunts a Danish traitor through a burning city during Britain's ugly seizure of the Danish fleet.",
    asin: "0007425856",
    link: "https://amzn.to/3Omyi2O",
  },
  {
    order: 6,
    title: "Sharpe's Rifles",
    setting: "Spain · Retreat to Corunna, 1809",
    synopsis:
      "Cut off in the Galician mountains, Lieutenant Sharpe must shepherd a sacred relic and an unwilling company of riflemen to safety.",
    asin: "0007425864",
    link: "https://amzn.to/4cSwN4L",
  },
  {
    order: 7,
    title: "Sharpe's Havoc",
    setting: "Portugal · Crossing of the Douro, 1809",
    synopsis:
      "Sharpe defends an Anglo-Portuguese girl and gets tangled in Wellesley's audacious stroke at Oporto.",
    asin: "0007428081",
    link: "https://amzn.to/3ObcY09",
  },
  {
    order: 8,
    title: "Sharpe's Eagle",
    setting: "Spain · Talavera, 1809",
    synopsis:
      "Attached to the cowardly South Essex at Talavera, Sharpe seizes a French Imperial Eagle and makes his first enemies in high places.",
    asin: "0140294309",
    link: "https://amzn.to/4sXbzbX",
  },
  {
    order: 9,
    title: "Sharpe's Gold",
    setting: "Spain · Lines of Torres Vedras, 1810",
    synopsis:
      "Sharpe hunts a fortune in Spanish gold through the Portuguese interior to pay Wellington's hungry army.",
    asin: "0007452926",
    link: "https://amzn.to/3QJNU0Q",
  },
  {
    order: 10,
    title: "Sharpe's Escape",
    setting: "Portugal · Bussaco, 1810",
    synopsis:
      "Sharpe crosses the murderous Ferragus brothers as the French march into the scorched earth before the Lines.",
    asin: "0007120141",
    link: "https://amzn.to/4teLTYW",
  },
  {
    order: 11,
    title: "Sharpe's Fury",
    setting: "Spain · Barrosa, 1811",
    synopsis:
      "Sharpe is thrown into the brief, ferocious fight at Barrosa outside beleaguered Cádiz.",
    asin: "0007452942",
    link: "https://amzn.to/4vAIzJn",
  },
  {
    order: 12,
    title: "Sharpe's Battle",
    setting: "Spain · Fuentes de Oñoro, 1811",
    synopsis:
      "Sharpe commands an unwanted Irish company at the confused, bloody stand at Fuentes de Oñoro.",
    asin: "0007452950",
    link: "https://amzn.to/4ct5mhn",
  },
  {
    order: 13,
    title: "Sharpe's Company",
    setting: "Spain · Ciudad Rodrigo & Badajoz, 1812",
    synopsis:
      "Sergeant Hakeswill returns as Sharpe storms the terrible breach of Badajoz.",
    asin: "0007452969",
    link: "https://amzn.to/4thUGcX",
  },
  {
    order: 14,
    title: "Sharpe's Command",
    setting: "Portuguese–Spanish border, 1812",
    synopsis:
      "Sharpe leads a covert mission behind French lines before Wellington's march on Salamanca.",
    asin: "0008496803",
    link: "https://amzn.to/4mvUMuG",
  },
  {
    order: 15,
    title: "Sharpe's Sword",
    setting: "Spain · Salamanca, 1812",
    synopsis:
      "Sharpe hunts the French sword-master Colonel Leroux through the campaign that ends in rout on the Arapiles.",
    asin: "0007461755",
    link: "https://amzn.to/4cvSPtR",
  },
  {
    order: 16,
    title: "Sharpe's Enemy",
    setting: "Spain · Adrados, Christmas 1812",
    synopsis:
      "A band of deserters under Hakeswill seize a mountain village and an English colonel's wife on the blackest Christmas of the war.",
    asin: "0007452977",
    link: "https://amzn.to/487wQrL",
  },
  {
    order: 17,
    title: "Sharpe's Honour",
    setting: "Spain · Vitoria, 1813",
    synopsis:
      "Sharpe is framed, tried, and killed (officially) on the morning of Vitoria.",
    asin: "0007452861",
    link: "https://amzn.to/3OJTLmk",
  },
  {
    order: 18,
    title: "Sharpe's Regiment",
    setting: "England & the Pyrenees, 1813",
    synopsis:
      "Back in England, Sharpe investigates the crimping racket that is stealing the 2nd Battalion of the South Essex.",
    asin: "000745287X",
    link: "https://amzn.to/4cdNMzg",
  },
  {
    order: 19,
    title: "Sharpe's Siege",
    setting: "France · Atlantic coast, 1814",
    synopsis:
      "Sharpe is handed a rotting coastal fort in a forgotten corner of the final campaign.",
    asin: "0007452888",
    link: "https://amzn.to/4tifrFi",
  },
  {
    order: 20,
    title: "Sharpe's Revenge",
    setting: "France & Naples, April 1814",
    synopsis:
      "With the war over, Sharpe must clear his name of theft across a France in Bourbon-restorations mood.",
    asin: "0007452896",
    link: "https://amzn.to/484GHP5",
  },
  {
    order: 21,
    title: "Sharpe's Waterloo",
    setting: "Belgium · Quatre Bras & Waterloo, 1815",
    synopsis:
      "Lt-Colonel Sharpe rides into the Hundred Days and the slaughter on the ridge of Mont-Saint-Jean.",
    asin: "000745290X",
    link: "https://amzn.to/4cMW7df",
  },
  {
    order: 22,
    title: "Sharpe's Assassin",
    setting: "France · Occupation of Paris, 1815",
    synopsis:
      "In the Allied occupation of Paris, Sharpe hunts a French assassin through a city at war with itself.",
    asin: "0008184046",
    link: "https://amzn.to/3On32AM",
  },
  {
    order: 23,
    title: "Sharpe's Storm",
    setting: "Southern France, winter 1813",
    synopsis:
      "Sharpe and his riflemen face the Allied invasion of southern France and a gathering storm in the Pyrenean foothills.",
    asin: "0008496854",
    link: "https://amzn.to/4mztR11",
  },
  {
    order: 24,
    title: "Sharpe's Devil",
    setting: "Chile & Valdivia, 1820–1821",
    synopsis:
      "Post-war Sharpe sails to Chile with Lord Cochrane for a last, ghostly encounter with Napoleon from St Helena.",
    asin: "0007452918",
    link: "https://amzn.to/4tPFDXB",
  },
];

const themeNotes = [
  {
    title: "The Chosen Man",
    body: "Cornwell explicitly modelled Sharpe on the idea of a ranker-promoted officer in a class-bound army, a tiny minority in fact, but represented in the period by figures like John Shipp. The 95th Rifles gave Cornwell both a famously egalitarian regiment and a weapon (the Baker rifle) accurate enough for his hero's marksmanship to be credible.",
  },
  {
    title: "History beside Fiction",
    body: "Most major set-pieces are historical: Talavera's burning fields, Badajoz's ditch of the dead, Salamanca's forty-minute rout, Waterloo's crisis at La Haye Sainte. Cornwell inserts Sharpe at the margin and allows the real battle to happen around him. The Author's Note at the end of every book tells the reader what he has invented.",
  },
  {
    title: "A Reading Order",
    body: "New readers may prefer to start with Sharpe's Rifles (1988) or Sharpe's Eagle (1981), the first-written novels, which introduce Sharpe at his most essential. Chronological order (as below) reads cleaner on a second pass, once Harper's jokes and Hakeswill's curses have become familiar.",
  },
];

const booksJsonLd = {
  "@context": "https://schema.org",
  "@graph": books.map((b) => ({
    "@type": "Book",
    name: b.title,
    bookFormat: "https://schema.org/Paperback",
    author: {
      "@type": "Person",
      name: "Bernard Cornwell",
      sameAs: "https://www.bernardcornwell.net/",
    },
    inLanguage: "en",
    isbn: b.asin,
    isPartOf: {
      "@type": "BookSeries",
      name: "Sharpe",
      author: { "@type": "Person", name: "Bernard Cornwell" },
    },
    position: b.order,
    description: b.synopsis,
    image: `https://images-na.ssl-images-amazon.com/images/P/${b.asin}.jpg`,
    url: `${SITE.baseUrl}/fiction`,
  })),
};

const relatedPages = [
  {
    href: "/battles",
    title: "Battles",
    note: "The real engagements Sharpe fights through, from Talavera to Waterloo.",
  },
  {
    href: "/people",
    title: "People",
    note: "Real commanders Sharpe serves under — and the fictional company he keeps.",
  },
  {
    href: "/regiments",
    title: "Regiments",
    note: "The 95th Rifles, Sharpe's real home regiment.",
  },
  {
    href: "/resources",
    title: "Resources",
    note: "The Sharpe Companion, Cornwell's own Waterloo, and more buying guides.",
  },
];

export default function FictionPage() {
  return (
    <>
      <JsonLd data={booksJsonLd} />
      <PageHeader
        eyebrow="Bernard Cornwell"
        title="Fiction · Sharpe"
        lede="Twenty-four novels from a Seringapatam gunner to a Lt-Colonel at Waterloo, and a last, ghostly voyage to Chile."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {themeNotes.map((n) => (
            <div key={n.title} className="card p-6 rounded-sm">
              <h3 className="font-display text-lg uppercase tracking-wider text-gold-pale mb-3">
                {n.title}
              </h3>
              <p className="text-sm text-parchment/95 leading-relaxed font-serif">
                {n.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-10 text-center">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Chronicle
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
            Twenty-four novels in the order of Sharpe&rsquo;s life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((b) => (
            <article
              key={b.asin}
              className="card p-5 rounded-sm flex flex-col"
            >
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                aria-label={`${b.title} on Amazon`}
                className="block mx-auto mb-4 relative"
              >
                <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-burgundy border border-gold/60 text-gold-pale font-display text-sm flex items-center justify-center z-10 shadow-regal">
                  {b.order}
                </span>
                <Image
                  src={`https://images-na.ssl-images-amazon.com/images/P/${b.asin}.jpg`}
                  alt={`${b.title} by Bernard Cornwell — book cover of Sharpe novel #${b.order} in chronological order`}
                  width={200}
                  height={300}
                  loading="lazy"
                  unoptimized
                  className="h-56 w-auto object-contain rounded-sm border border-gold/25 bg-navy-deep shadow-regal"
                />
              </a>

              <h3 className="font-display text-base text-gold-pale uppercase tracking-wider leading-snug mb-1">
                {b.title}
              </h3>
              <div className="text-xs italic text-burgundy-bright mb-3">
                {b.setting}
              </div>
              <p className="text-sm text-parchment/95 font-serif leading-relaxed flex-1">
                {b.synopsis}
              </p>

              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-block self-start px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Buy on Amazon &rarr;
              </a>
            </article>
          ))}
        </div>

        <div className="gold-divider" />

        <blockquote className="text-center italic text-lg md:text-xl text-parchment max-w-2xl mx-auto font-serif leading-relaxed">
          &ldquo;I wrote Sharpe&rsquo;s Eagle because I wanted to read a book
          about a soldier fighting with Wellington, and nobody had written
          one.&rdquo;
          <footer className="mt-3 text-xs uppercase tracking-[0.3em] text-gold/70 not-italic">
            Bernard Cornwell
          </footer>
        </blockquote>

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

        <p className="mt-12 text-xs uppercase tracking-widest text-parchment/85 text-center border-t border-gold/15 pt-5">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
