import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiction · Sharpe · The Napoleonic Archive",
  description:
    "Bernard Cornwell's Sharpe novels in chronological order, from India in 1799 to India redux in 1820. Published order, historical setting and author's notes.",
};

interface Book {
  order: number;
  title: string;
  published: number;
  setting: string;
  synopsis: string;
  battle?: string;
}

// Chronological (in-story) order of the main Sharpe novels and novellas.
const books: Book[] = [
  {
    order: 1,
    title: "Sharpe's Tiger",
    published: 1997,
    setting: "India · Siege of Seringapatam, 1799",
    synopsis:
      "Private Richard Sharpe, about to be flogged for striking a sergeant, is recruited instead for a clandestine mission inside the fortress of the Tippoo Sultan. The book opens Sharpe's life and gives him, at the end, his first stripe.",
    battle: "Siege of Seringapatam",
  },
  {
    order: 2,
    title: "Sharpe's Triumph",
    published: 1998,
    setting: "India · Battle of Assaye, 1803",
    synopsis:
      "Sergeant Sharpe, now under a young general named Arthur Wellesley, fights the greatest battle of Wellesley's Indian career. The act that will win Sharpe his commission begins here.",
    battle: "Assaye",
  },
  {
    order: 3,
    title: "Sharpe's Fortress",
    published: 1999,
    setting: "India · Siege of Gawilghur, 1803",
    synopsis:
      "Ensign Sharpe is made, on paper. The gentlemen officers of the 74th want nothing to do with a ranker; the Mahratta fortress of Gawilghur has its own ideas about killing him.",
    battle: "Gawilghur",
  },
  {
    order: 4,
    title: "Sharpe's Trafalgar",
    published: 2000,
    setting: "East Indiaman Calliope · Trafalgar, 1805",
    synopsis:
      "Ensign Sharpe, homeward bound, finds himself pressed into a wooden hell at the greatest sea battle ever fought. A novella-brisk change of uniform for the rifleman-to-be.",
    battle: "Trafalgar",
  },
  {
    order: 5,
    title: "Sharpe's Prey",
    published: 2001,
    setting: "Denmark · Bombardment of Copenhagen, 1807",
    synopsis:
      "Ensign Sharpe in the 95th Rifles for the first time, hunting a Danish traitor through a burning city. Cornwell revisits one of the uglier British actions of the war.",
    battle: "Copenhagen",
  },
  {
    order: 6,
    title: "Sharpe's Rifles",
    published: 1988,
    setting: "Spain · Retreat to Corunna, 1809",
    synopsis:
      "The first-written Sharpe: a lieutenant of rifles, stranded in the Galician mountains with men who despise him, tries to shepherd a relic and a princess to safety. The founding book of the Peninsular saga.",
    battle: "Retreat to Corunna",
  },
  {
    order: 7,
    title: "Sharpe's Havoc",
    published: 2003,
    setting: "Portugal · Crossing of the Douro, 1809",
    synopsis:
      "A novella-paced northern-Portugal campaign. Sharpe defends a slave-trader's daughter and gets tangled in Wellesley's audacious stroke at Oporto.",
    battle: "Oporto (Second Douro)",
  },
  {
    order: 8,
    title: "Sharpe's Eagle",
    published: 1981,
    setting: "Spain · Battle of Talavera, 1809",
    synopsis:
      "The second-written but earlier-timed novel. Sharpe, attached to the cowardly South Essex, seizes a French Imperial Eagle in the smoke on the Cerro de Medellín, and makes his first enemies in high places.",
    battle: "Talavera",
  },
  {
    order: 9,
    title: "Sharpe's Gold",
    published: 1981,
    setting: "Spain · Lines of Torres Vedras, 1810",
    synopsis:
      "A treasure hunt through the Portuguese interior for Spanish gold that Wellington needs to pay his army. The lines of Torres Vedras loom in the background.",
    battle: "Almeida · Bussaco aftermath",
  },
  {
    order: 10,
    title: "Sharpe's Escape",
    published: 2003,
    setting: "Portugal · Battle of Bussaco, 1810",
    synopsis:
      "Sharpe enemies himself with the Ferragus brothers of Coimbra; the French are marched into the scorched earth in front of the Lines.",
    battle: "Bussaco",
  },
  {
    order: 11,
    title: "Sharpe's Fury",
    published: 2006,
    setting: "Spain · Battle of Barrosa, 1811",
    synopsis:
      "Sharpe thrown into the cockpit of Cádiz. The brief, ferocious fight at Barrosa, an almost-forgotten British victory, is the set-piece.",
    battle: "Barrosa",
  },
  {
    order: 12,
    title: "Sharpe's Battle",
    published: 1995,
    setting: "Spain · Fuentes de Oñoro, 1811",
    synopsis:
      "The South Essex is broken and re-formed. Sharpe commands an unwanted Real Compañía Irlandesa and fights perhaps the most confused battle of the Peninsula.",
    battle: "Fuentes de Oñoro",
  },
  {
    order: 13,
    title: "Sharpe's Company",
    published: 1982,
    setting: "Spain · Siege of Ciudad Rodrigo & Badajoz, 1812",
    synopsis:
      "The novel that made the series. Hakeswill returns; the breach of Badajoz is Cornwell's darkest and most compelling set-piece. Teresa dies in the aftermath.",
    battle: "Ciudad Rodrigo · Badajoz",
  },
  {
    order: 14,
    title: "Sharpe's Sword",
    published: 1983,
    setting: "Spain · Battle of Salamanca, 1812",
    synopsis:
      "The French swordmaster Colonel Leroux hunts Wellington's intelligence network. Sharpe hunts him. The climax on the Arapiles is classic Cornwell.",
    battle: "Salamanca",
  },
  {
    order: 15,
    title: "Sharpe's Skirmish",
    published: 2002,
    setting: "Spain · a bridge on the Tormes, 1812",
    synopsis:
      "A short-story novella. A single day's action defending a Roman bridge with a handful of riflemen.",
  },
  {
    order: 16,
    title: "Sharpe's Enemy",
    published: 1984,
    setting: "Spain · Adrados, Christmas 1812",
    synopsis:
      "Hakeswill, loose with a band of deserters, seizes a mountain village and the wife of a British colonel. The coldest, blackest Christmas in the series.",
    battle: "Adrados (fictional)",
  },
  {
    order: 17,
    title: "Sharpe's Honour",
    published: 1985,
    setting: "Spain · Battle of Vitoria, 1813",
    synopsis:
      "Sharpe is framed, tried, and killed (officially) on the morning of Vitoria. The cleverest plot of the Peninsular sequence.",
    battle: "Vitoria",
  },
  {
    order: 18,
    title: "Sharpe's Regiment",
    published: 1986,
    setting: "England & the Pyrenees, 1813",
    synopsis:
      "Sharpe returns to England to find the 2nd Battalion of the South Essex being 'crimped', that is, stolen, by a recruiting racket. The only Sharpe novel set mostly at home.",
    battle: "Nivelle",
  },
  {
    order: 19,
    title: "Sharpe's Siege",
    published: 1987,
    setting: "France · 1814",
    synopsis:
      "Sharpe is handed a rotting coastal fort in a forgotten corner of the final campaign. Betrayal in high places, seabirds overhead, mud everywhere.",
    battle: "Fortress of Teste-de-Buch",
  },
  {
    order: 20,
    title: "Sharpe's Revenge",
    published: 1989,
    setting: "France & Naples · April 1814",
    synopsis:
      "The war is over; Sharpe is accused of theft and has to clear his name across a France in Bourbon-restorations mood. The series' gentlest, saddest novel.",
    battle: "Toulouse",
  },
  {
    order: 21,
    title: "Sharpe's Waterloo",
    published: 1990,
    setting: "Belgium · Quatre Bras & Waterloo, 1815",
    synopsis:
      "Lieutenant-Colonel Sharpe rides into the Hundred Days as an attached liaison officer. Cornwell's set-piece of Mont-Saint-Jean is the best battle writing in English fiction.",
    battle: "Quatre Bras · Waterloo",
  },
  {
    order: 22,
    title: "Sharpe's Ransom",
    published: 1994,
    setting: "Normandy · Christmas 1815",
    synopsis:
      "A short story, published in an anthology. Peace-time Sharpe, and a home invasion that goes badly for the invaders.",
  },
  {
    order: 23,
    title: "Sharpe's Devil",
    published: 1992,
    setting: "Chile & Valdivia · 1820 – 1821",
    synopsis:
      "Post-war Sharpe in South America with Lord Cochrane. Napoleon makes a last, ghostly cameo from St Helena. Technically the last novel in chronology, and the only one at sea for its climax.",
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
    body: "New readers may prefer to start with Sharpe's Rifles (1988) or Sharpe's Eagle (1981), the first-written novels, which introduce Sharpe at his most essential. Chronological order (above) reads cleaner on a second pass, once Harper's jokes and Hakeswill's curses have become familiar.",
  },
];

export default function FictionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bernard Cornwell"
        title="Fiction · Sharpe"
        lede="From a Seringapatam gunner to a Lt-Colonel at Waterloo: the Richard Sharpe novels in chronological order."
      />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {themeNotes.map((n) => (
            <div key={n.title} className="card p-6 rounded-sm">
              <h3 className="font-display text-lg uppercase tracking-wider text-gold-pale mb-3">
                {n.title}
              </h3>
              <p className="text-sm text-parchment/80 leading-relaxed font-serif">
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
            In order of Sharpe&rsquo;s life
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />

          <ol className="space-y-8">
            {books.map((b) => (
              <li key={b.title} className="relative pl-16 md:pl-24">
                <div className="absolute left-2 md:left-4 top-1 flex items-center justify-center w-9 h-9 rounded-full bg-burgundy border border-gold/60 text-gold-pale font-display text-sm">
                  {b.order}
                </div>

                <div className="card p-6 rounded-sm">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                    <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                      {b.title}
                    </h3>
                    <span className="text-xs tracking-widest text-gold/70">
                      Published {b.published}
                    </span>
                  </div>
                  <div className="text-sm italic text-burgundy-light mb-3">
                    {b.setting}
                  </div>
                  <p className="text-parchment/85 leading-relaxed font-serif">
                    {b.synopsis}
                  </p>
                  {b.battle && (
                    <div className="mt-4 text-xs uppercase tracking-[0.25em] text-gold/70">
                      Field · {b.battle}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="gold-divider" />

        <blockquote className="text-center italic text-lg md:text-xl text-parchment/80 max-w-2xl mx-auto font-serif leading-relaxed">
          &ldquo;I wrote Sharpe&rsquo;s Eagle because I wanted to read a book
          about a soldier fighting with Wellington, and nobody had written
          one.&rdquo;
          <footer className="mt-3 text-xs uppercase tracking-[0.3em] text-gold/70 not-italic">
            Bernard Cornwell
          </footer>
        </blockquote>
      </section>
    </>
  );
}
