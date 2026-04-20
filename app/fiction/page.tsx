import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sharpe Novels by Bernard Cornwell",
  description:
    "Sharpe novels in order, Sharpe reading order, and the Sean Bean TV series: all 24 Bernard Cornwell books with synopses, cover art and buy links.",
  path: "/fiction",
  keywords: [
    "Sharpe novels in order",
    "Sharpe reading order",
    "Bernard Cornwell books",
    "Richard Sharpe",
    "Sharpe TV series Sean Bean",
    "Sharpe chronological order",
    "Sharpe publication order",
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
    body: null,
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
    note: "Real commanders Sharpe serves under, and the fictional company he keeps.",
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
                {n.body ?? (
                  <>
                    New readers may prefer to start with{" "}
                    <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                      Sharpe&rsquo;s Rifles (1988)
                    </a>{" "}
                    or{" "}
                    <a href="https://amzn.to/4sXbzbX" target="_blank" rel="noopener noreferrer sponsored" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                      Sharpe&rsquo;s Eagle (1981)
                    </a>
                    , the first-written novels, which introduce Sharpe at his
                    most essential. Chronological order (as below) reads
                    cleaner on a second pass, once Harper&rsquo;s jokes and
                    Hakeswill&rsquo;s curses have become familiar.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* CHARACTER GUIDE + RECOMMENDATIONS LINKS */}
        <div className="mb-16 flex flex-wrap gap-4 justify-center">
          <Link
            href="/fiction/characters"
            className="inline-block px-8 py-3 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition shadow-regal"
          >
            ♛ Character Guide
          </Link>
          <Link
            href="/fiction/recommendations"
            className="inline-block px-8 py-3 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition shadow-regal"
          >
            ❦ If You Like Sharpe...
          </Link>
        </div>

        {/* ======================================================== */}
        {/* WHERE TO START                                            */}
        {/* ======================================================== */}
        <div className="mb-16" id="where-to-start">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-8">
            Where to Start
          </h2>
          <p className="text-parchment leading-relaxed font-serif text-lg max-w-3xl mx-auto mb-8 text-center">
            New to Sharpe? The series was not written in chronological order, so
            there are two good entry points. Most readers begin with{" "}
            <strong className="text-gold-pale">Sharpe&rsquo;s Eagle</strong>,
            which drops you straight into the Peninsular War with Sharpe already
            an officer. If you prefer to follow his full arc from private soldier
            upward, start with{" "}
            <strong className="text-gold-pale">Sharpe&rsquo;s Tiger</strong>,
            the chronological beginning set in India. Either works; Eagle is the
            faster introduction, Tiger the longer journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-sm border-gold/40">
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">
                Recommended
              </div>
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
                Start with Sharpe&rsquo;s Eagle (1981)
              </h3>
              <p className="text-parchment/95 font-serif text-sm leading-relaxed">
                The first novel Cornwell published. Sharpe is already a
                lieutenant in the 95th Rifles serving in Spain. You meet
                Sergeant Harper, see your first volley, and watch Sharpe seize a
                French Imperial Eagle at the Battle of Talavera. The best
                introduction to his character and the series&rsquo; voice.
              </p>
            </div>
            <div className="card p-6 rounded-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">
                Chronological
              </div>
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
                Start with Sharpe&rsquo;s Tiger (1997)
              </h3>
              <p className="text-parchment/95 font-serif text-sm leading-relaxed">
                The chronological beginning. Sharpe is a private soldier at the
                siege of Seringapatam in India, 1799. You follow his entire
                journey from the ranks to a commission. A longer road, but you
                see every rung of the ladder he climbs.
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THE TV SERIES                                             */}
        {/* ======================================================== */}
        <div className="mb-16" id="tv-series">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-4">
            The TV Series
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-gold/70 text-center mb-8">
            ITV · 1993 to 2008 · Sean Bean as Richard Sharpe
          </p>
          <div className="card p-6 md:p-8 rounded-sm mb-8">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              Sixteen television films were produced by ITV between 1993 and
              2008, filmed largely on location in Turkey, Portugal and India.
              Paul McGann was originally cast as Sharpe but was injured during
              early filming; Sean Bean replaced him and made the role his own.
              Cornwell later rewrote Sharpe&rsquo;s backstory to give him
              Yorkshire origins, matching Bean&rsquo;s accent and screen
              presence.
            </p>
            <p className="text-parchment/95 font-serif text-sm">
              Streaming availability changes frequently. Search your preferred
              platform for &ldquo;Sharpe&rdquo; or check
              physical media retailers for the complete DVD box set.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-serif">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Film
                  </th>
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Year
                  </th>
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Based on
                  </th>
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Campaign / Battle
                  </th>
                </tr>
              </thead>
              <tbody className="text-parchment/95">
                {([
                  { film: "Sharpe's Rifles", year: "1993", source: "Sharpe's Rifles", slug: "sharpes-rifles", buy: "https://amzn.to/4cSwN4L", battle: "Retreat to Corunna, 1809" },
                  { film: "Sharpe's Eagle", year: "1993", source: "Sharpe's Eagle", slug: "sharpes-eagle", buy: "https://amzn.to/4sXbzbX", battle: "Battle of Talavera, 1809" },
                  { film: "Sharpe's Company", year: "1994", source: "Sharpe's Company", slug: "sharpes-company", buy: "https://amzn.to/4thUGcX", battle: "Siege of Badajoz, 1812" },
                  { film: "Sharpe's Enemy", year: "1994", source: "Sharpe's Enemy", slug: "sharpes-enemy", buy: "https://amzn.to/487wQrL", battle: "Adrados, Christmas 1812" },
                  { film: "Sharpe's Honour", year: "1994", source: "Sharpe's Honour", slug: "sharpes-honour", buy: "https://amzn.to/3OJTLmk", battle: "Battle of Vitoria, 1813" },
                  { film: "Sharpe's Gold", year: "1995", source: "Sharpe's Gold", slug: "sharpes-gold", buy: "https://amzn.to/3QJNU0Q", battle: "Portugal, 1810" },
                  { film: "Sharpe's Battle", year: "1995", source: "Sharpe's Battle", slug: "sharpes-battle", buy: "https://amzn.to/4ct5mhn", battle: "Fuentes de Oñoro, 1811" },
                  { film: "Sharpe's Sword", year: "1995", source: "Sharpe's Sword", slug: "sharpes-sword", buy: "https://amzn.to/4cvSPtR", battle: "Battle of Salamanca, 1812" },
                  { film: "Sharpe's Regiment", year: "1996", source: "Sharpe's Regiment", slug: "sharpes-regiment", buy: "https://amzn.to/4cdNMzg", battle: "England, 1813" },
                  { film: "Sharpe's Siege", year: "1996", source: "Sharpe's Siege", slug: "sharpes-siege", buy: "https://amzn.to/4tifrFi", battle: "France, 1814" },
                  { film: "Sharpe's Mission", year: "1996", source: null, slug: null, buy: "https://amzn.to/4thUGcX", battle: "France, 1813" },
                  { film: "Sharpe's Revenge", year: "1997", source: "Sharpe's Revenge", slug: "sharpes-revenge", buy: "https://amzn.to/484GHP5", battle: "Toulouse / Naples, 1814" },
                  { film: "Sharpe's Justice", year: "1997", source: null, slug: null, buy: "https://amzn.to/3OJTLmk", battle: "England, 1814" },
                  { film: "Sharpe's Waterloo", year: "1997", source: "Sharpe's Waterloo", slug: "sharpes-waterloo", buy: "https://amzn.to/4cMW7df", battle: "Battle of Waterloo, 1815" },
                  { film: "Sharpe's Challenge", year: "2006", source: null, slug: null, buy: "https://amzn.to/4sXbzbX", battle: "India, 1803" },
                  { film: "Sharpe's Peril", year: "2008", source: null, slug: null, buy: "https://amzn.to/4sXbzbX", battle: "India, 1803" },
                ] as const).map((row) => (
                  <tr key={row.film} className="border-b border-gold/10 hover:bg-navy-muted/30 transition">
                    <td className="py-2.5 px-3 text-gold-pale">
                      {row.film}
                    </td>
                    <td className="py-2.5 px-3">{row.year}</td>
                    <td className="py-2.5 px-3">
                      <span className="flex items-center gap-2">
                        {row.source && row.slug ? (
                          <a href={`#${row.slug}`} className="italic text-burgundy-bright hover:text-gold transition">
                            {row.source}
                          </a>
                        ) : (
                          <span className="italic text-burgundy-bright">Original screenplay</span>
                        )}
                        <a href={row.buy} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 px-1.5 py-0.5 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[9px] hover:border-gold transition rounded-sm">Buy</a>
                      </span>
                    </td>
                    <td className="py-2.5 px-3">{row.battle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* NOVELS AND THEIR REAL BATTLES                             */}
        {/* ======================================================== */}
        <div className="mb-16" id="novels-and-battles">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-8">
            Novels and Their Real Battles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-serif">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Novel
                  </th>
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    Real Battle / Campaign
                  </th>
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">
                    What Cornwell fictionalised
                  </th>
                </tr>
              </thead>
              <tbody className="text-parchment/95">
                {[
                  ["Sharpe's Tiger", "Siege of Seringapatam, 1799", "Real siege; fictional mission inside the fortress"],
                  ["Sharpe's Triumph", "Battle of Assaye, 1803", "Real battle; fictional act earning Sharpe's commission"],
                  ["Sharpe's Fortress", "Siege of Gawilghur, 1803", "Real siege; fictional officer rivalries"],
                  ["Sharpe's Trafalgar", "Battle of Trafalgar, 1805", "Real battle; Sharpe placed aboard a merchantman"],
                  ["Sharpe's Prey", "Bombardment of Copenhagen, 1807", "Real event; fictional espionage subplot"],
                  ["Sharpe's Rifles", "Retreat to Corunna, 1809", "Real retreat; fictional relic-recovery mission"],
                  ["Sharpe's Havoc", "Crossing of the Douro, 1809", "Real campaign; fictional rescue plot"],
                  ["Sharpe's Eagle", "Battle of Talavera, 1809", "Real battle; fictional capture of the Eagle"],
                  ["Sharpe's Gold", "Lines of Torres Vedras, 1810", "Real campaign; fictional treasure hunt"],
                  ["Sharpe's Escape", "Battle of Bussaco, 1810", "Real battle; fictional civilian antagonists"],
                  ["Sharpe's Fury", "Battle of Barrosa, 1811", "Real battle; fictional Cádiz intrigue"],
                  ["Sharpe's Battle", "Fuentes de Oñoro, 1811", "Real battle; fictional Irish company"],
                  ["Sharpe's Company", "Siege of Badajoz, 1812", "Real siege; Hakeswill subplot fictional"],
                  ["Sharpe's Command", "Portuguese border, 1812", "Real campaign; fictional covert mission"],
                  ["Sharpe's Sword", "Battle of Salamanca, 1812", "Real battle; fictional French swordsman"],
                  ["Sharpe's Enemy", "Winter 1812", "Fictional battle at Adrados; real setting"],
                  ["Sharpe's Honour", "Battle of Vitoria, 1813", "Real battle; fictional framing plot"],
                  ["Sharpe's Regiment", "England, 1813", "Real recruiting system; fictional crimping racket"],
                  ["Sharpe's Siege", "France, 1814", "Real final campaign; fictional coastal fort"],
                  ["Sharpe's Revenge", "Battle of Toulouse, 1814", "Real battle; fictional theft accusation"],
                  ["Sharpe's Waterloo", "Battle of Waterloo, 1815", "Real battle; Sharpe as fictional liaison officer"],
                  ["Sharpe's Assassin", "Occupation of Paris, 1815", "Real occupation; fictional assassination plot"],
                  ["Sharpe's Storm", "Invasion of southern France, 1813", "Real campaign; fictional Pyrenean mission"],
                  ["Sharpe's Devil", "Chilean War of Independence, 1820", "Real war; fictional encounter with Cochrane"],
                ].map(([novel, battle, fiction]) => (
                  <tr key={novel} className="border-b border-gold/10 hover:bg-navy-muted/30 transition">
                    <td className="py-2.5 px-3 text-gold-pale">{novel}</td>
                    <td className="py-2.5 px-3">{battle}</td>
                    <td className="py-2.5 px-3 italic text-parchment/85">{fiction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PUBLICATION vs CHRONOLOGICAL ORDER                        */}
        {/* ======================================================== */}
        <div className="mb-16" id="reading-order">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-4">
            Publication Order vs Chronological Order
          </h2>
          <p className="text-parchment leading-relaxed font-serif text-lg max-w-3xl mx-auto mb-8 text-center">
            Cornwell wrote the Peninsular War novels first, beginning with
            Sharpe&rsquo;s Eagle in 1981. He then went back to write the India
            prequels (Tiger, Triumph, Fortress) in the late 1990s, and
            continued to fill gaps in the chronology with later books. The
            result: publication order and story order are quite different.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-sm">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-4 text-center">
                Publication Order
              </h3>
              <ol className="space-y-1 text-sm font-serif text-parchment/95">
                {[
                  "Sharpe's Eagle (1981)",
                  "Sharpe's Gold (1981)",
                  "Sharpe's Company (1982)",
                  "Sharpe's Sword (1983)",
                  "Sharpe's Enemy (1984)",
                  "Sharpe's Honour (1985)",
                  "Sharpe's Regiment (1986)",
                  "Sharpe's Siege (1987)",
                  "Sharpe's Rifles (1988)",
                  "Sharpe's Revenge (1989)",
                  "Sharpe's Waterloo (1990)",
                  "Sharpe's Devil (1992)",
                  "Sharpe's Battle (1995)",
                  "Sharpe's Tiger (1997)",
                  "Sharpe's Triumph (1998)",
                  "Sharpe's Fortress (1999)",
                  "Sharpe's Trafalgar (2000)",
                  "Sharpe's Prey (2001)",
                  "Sharpe's Havoc (2003)",
                  "Sharpe's Escape (2004)",
                  "Sharpe's Fury (2006)",
                  "Sharpe's Assassin (2021)",
                  "Sharpe's Command (2023)",
                  "Sharpe's Storm (2024)",
                ].map((t, i) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-gold/70 w-6 text-right shrink-0">
                      {i + 1}.
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-6 rounded-sm border-gold/40">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-4 text-center">
                Chronological Order (Sharpe&rsquo;s life)
              </h3>
              <ol className="space-y-1 text-sm font-serif text-parchment/95">
                {books.map((b, i) => (
                  <li key={b.title} className="flex gap-2">
                    <span className="text-gold/70 w-6 text-right shrink-0">
                      {i + 1}.
                    </span>
                    {b.title}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THE CHRONICLE (existing book grid)                        */}
        {/* ======================================================== */}
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
              id={b.title.toLowerCase().replace(/[''`]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
              className="card p-5 rounded-sm flex flex-col scroll-mt-24"
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
                  alt={`${b.title} by Bernard Cornwell: book cover of Sharpe novel #${b.order} in chronological order`}
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
