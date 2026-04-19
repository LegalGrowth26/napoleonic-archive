import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sharpe Character Guide",
  description:
    "Complete guide to every major character in Bernard Cornwell's 24 Sharpe novels. Who is Patrick Harper? What happened to Hakeswill? Find every character organised by book.",
  path: "/fiction/characters",
  keywords: [
    "Sharpe characters",
    "Patrick Harper",
    "Obadiah Hakeswill",
    "Richard Sharpe",
    "Sharpe character guide",
    "Bernard Cornwell characters",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sharpe's World: The Complete Character Guide",
  description:
    "A reference guide to the major characters in Bernard Cornwell's 24 Sharpe novels.",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/fiction/characters`,
  url: `${SITE.baseUrl}/fiction/characters`,
  inLanguage: "en-GB",
};

interface MajorCharacter {
  name: string;
  rank: string;
  nationality: string;
  books: string;
  description: string;
  fate?: string;
}

const majorCharacters: MajorCharacter[] = [
  {
    name: "Richard Sharpe",
    rank: "Private to Lieutenant-Colonel",
    nationality: "English (London-born, Yorkshire in the TV series)",
    books: "All 24 novels",
    description:
      "The protagonist of the entire series. Born in poverty, enlisted in the 33rd Foot to escape a murder charge, and commissioned from the ranks after saving Arthur Wellesley's life at the Battle of Assaye in 1803. Transfers to the 95th Rifles and fights through the Peninsular War, rising by battlefield merit rather than purchase. Carries a heavy cavalry sword in preference to the regulation officer's sabre and is a crack shot with the Baker rifle.",
    fate: "Survives the wars. Settles in Normandy with Lucille Castineau after Waterloo.",
  },
  {
    name: "Patrick Harper",
    rank: "Private to Regimental Sergeant Major",
    nationality: "Irish (Donegal)",
    books: "Sharpe's Rifles onward (most Peninsular and later novels)",
    description:
      "Sharpe's closest friend, conscience and strong right arm. A huge Irishman from Donegal who carries a seven-barrelled Nock volley gun. Loyal, devout (carries a crucifix), immensely strong, and often the most dangerous man in the room. Marries Isabella, a Spanish woman, during the Peninsular campaigns.",
    fate: "Survives the wars. Returns to Ireland with Isabella.",
  },
  {
    name: "Obadiah Hakeswill",
    rank: "Sergeant",
    nationality: "English",
    books: "Sharpe's Tiger, Sharpe's Triumph, Sharpe's Fortress, Sharpe's Company, Sharpe's Enemy",
    description:
      "The most loathsome villain in the series. A former soldier in the 33rd Foot who tormented the young Private Sharpe in India. Survived a botched hanging as a child, which left him with a facial twitch and a conviction that he cannot be killed. A bully, thief, rapist and murderer who returns to plague Sharpe in the Peninsular War. He is responsible for the death of Teresa Moreno.",
    fate: "Killed by Sharpe. Executed by firing squad in Sharpe's Enemy.",
  },
  {
    name: "Major Michael Hogan",
    rank: "Major, Royal Engineers / Exploring Officers",
    nationality: "Irish",
    books: "Sharpe's Eagle through the mid-Peninsular novels",
    description:
      "Wellington's head of intelligence in the Peninsula. A fictional character loosely inspired by real exploring officers such as Colquhoun Grant and George Scovell. Urbane, shrewd and quietly ruthless, he acts as Sharpe's patron and protector, seeing in him a useful instrument that the gentlemen officers overlook. He is one of the few senior officers who treats Sharpe as an equal.",
    fate: "Dies during the Peninsular campaigns. His death is reported between novels.",
  },
  {
    name: "Arthur Wellesley, Duke of Wellington",
    rank: "General to Field Marshal",
    nationality: "Anglo-Irish",
    books: "Sharpe's Tiger (as Colonel Wellesley) onward through the Peninsular and Waterloo novels",
    description:
      "The real historical commander, depicted throughout the series as cold, private, calculating and brilliant. He recognises Sharpe's value while never quite accepting him socially. Their relationship is one of mutual respect without warmth. Cornwell portrays Wellington closely following the historical record, including his famous reserve and dry wit.",
  },
  {
    name: "Teresa Moreno",
    rank: "Partisan leader / La Aguja (The Needle)",
    nationality: "Spanish",
    books: "Sharpe's Rifles, Sharpe's Gold, Sharpe's Company, and others",
    description:
      "A Spanish guerrilla leader and Sharpe's first wife. Fierce, independent and a skilled fighter, she commands a band of partisans in the mountains of Spain. She and Sharpe have a daughter, Antonia. Teresa is murdered by Obadiah Hakeswill during the Peninsular campaigns.",
    fate: "Killed by Hakeswill. Her death is one of the defining tragedies of the series.",
  },
  {
    name: "Jane Gibbons",
    rank: "Civilian",
    nationality: "English",
    books: "Sharpe's Regiment, Sharpe's Siege, Sharpe's Revenge",
    description:
      "Sharpe's second wife. A young, well-born Englishwoman whom Sharpe marries during a return to England. The marriage deteriorates badly: Jane takes Sharpe's money and his London house, and by the time of Sharpe's Revenge she has left him for another man. She represents the class divide that Sharpe can never fully cross.",
    fate: "Leaves Sharpe. They are effectively separated by the end of the war.",
  },
  {
    name: "Lucille Castineau",
    rank: "Civilian (French noblewoman)",
    nationality: "French",
    books: "Sharpe's Revenge, Sharpe's Waterloo, Sharpe's Devil",
    description:
      "A Norman widow whose husband was killed serving in Napoleon's army. Sharpe meets her in Normandy during Sharpe's Revenge and stays with her after the war. She is calm, intelligent and grounded, a counterweight to Sharpe's restlessness. Unlike Jane, Lucille accepts Sharpe as he is.",
    fate: "Sharpe's enduring companion. They settle together at her farmhouse in Normandy.",
  },
];

export default function CharactersPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/fiction" className="hover:text-gold transition">
              The Napoleonic Archive · Fiction
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Sharpe&rsquo;s World
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Complete Character Guide
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>❦</span>
          </div>
          <p className="text-parchment/95 font-serif max-w-2xl mx-auto">
            Every major character in Bernard Cornwell&rsquo;s 24 Sharpe
            novels, from Richard Sharpe himself to the villains, lovers and
            comrades who shaped his story.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 pt-10">
        <aside className="card p-5 rounded-sm border-burgundy-bright/40 bg-burgundy-deep/20">
          <p className="text-sm text-parchment/95 font-serif leading-relaxed text-center">
            This is an independent fan reference guide and is not affiliated
            with Bernard Cornwell, HarperCollins, or any of his publishers.
            All characters are the creation of Bernard Cornwell. Character
            descriptions are written in our own words for reference purposes.
          </p>
        </aside>
      </section>

      {/* HOW TO USE */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
          How to Use This Guide
        </h2>
        <p className="text-parchment leading-relaxed font-serif">
          The guide begins with the major recurring characters who appear
          across multiple novels. Below that, characters are organised by the
          book in which they first appear. Recurring characters are noted with
          the full list of novels they feature in. Descriptions cover each
          character&rsquo;s role in the story without unnecessary spoilers,
          though key fates (deaths, departures) are included where they are
          central to the series.
        </p>
      </section>

      {/* RECURRING MAJOR CHARACTERS */}
      <section className="max-w-6xl mx-auto px-6 pb-16" id="major-characters">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>♛</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Recurring Major Characters
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {majorCharacters.map((c) => (
            <article
              key={c.name}
              id={`char-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="card p-6 rounded-sm scroll-mt-24"
            >
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                {c.name}
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-1">
                {c.rank}
              </div>
              <div className="text-xs uppercase tracking-widest text-parchment/85 mb-2">
                {c.nationality}
              </div>
              <div className="text-xs text-gold/70 mb-4">
                <span className="uppercase tracking-widest mr-1">
                  Appears in:
                </span>
                {c.books}
              </div>
              <p className="text-parchment leading-relaxed font-serif text-sm mb-3">
                {c.description}
              </p>
              {c.fate && (
                <div className="pt-3 border-t border-gold/15">
                  <p className="text-sm text-parchment/95 font-serif">
                    <span className="text-gold-pale uppercase text-xs tracking-widest mr-2">
                      Fate
                    </span>
                    {c.fate}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CHARACTERS BY BOOK (1-8) */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="ornament text-gold/70 mb-4">
              <span>⚔</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
              Characters by Book
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
              Books 1 to 8 · India, Trafalgar, Copenhagen, Spain
            </p>
          </div>

          <div className="space-y-4">
            {/* 1. Sharpe's Tiger */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    1. Sharpe&rsquo;s Tiger
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    India · Seringapatam, 1799
                  </span>
                </div>
                <a href="https://amzn.to/3QdRVuq" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Private, 33rd Foot) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Obadiah Hakeswill</span> (33rd Foot, Sharpe&rsquo;s tormentor) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Colonel McCandless</span> (East India Company intelligence officer)</li>
                  <li><span className="text-gold-pale">The Tippoo Sultan</span> (ruler of Mysore) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                  <li><span className="text-gold-pale">Colonel Arthur Wellesley</span> (33rd Foot, future Duke of Wellington) <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Mary Bickerstaff</span> (soldier&rsquo;s widow, Sharpe&rsquo;s lover in this novel)</li>
                </ul>
              </div>
            </details>

            {/* 2. Sharpe's Triumph */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    2. Sharpe&rsquo;s Triumph
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    India · Assaye, 1803
                  </span>
                </div>
                <a href="https://amzn.to/3OjyIa9" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Sergeant, 33rd Foot) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Colonel McCandless</span> (intelligence officer, returns from Tiger)</li>
                  <li><span className="text-gold-pale">William Dodd</span> (renegade British officer serving the Mahrattas, main villain)</li>
                  <li><span className="text-gold-pale">Major-General Arthur Wellesley</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Hakeswill</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 3. Sharpe's Fortress */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    3. Sharpe&rsquo;s Fortress
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    India · Gawilghur, 1803
                  </span>
                </div>
                <a href="https://amzn.to/3QtV1dP" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (newly commissioned Ensign) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Hakeswill</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Colonel Stevenson</span> (commands one of Wellesley&rsquo;s columns)</li>
                  <li><span className="text-gold-pale">Syud Sevajee</span> (Mahratta ally, guides the British assault on Gawilghur)</li>
                </ul>
              </div>
            </details>

            {/* 4. Sharpe's Trafalgar */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    4. Sharpe&rsquo;s Trafalgar
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    At sea, 1805
                  </span>
                </div>
                <a href="https://amzn.to/4tTl50t" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Lieutenant, homeward bound from India) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lord William Hale</span> (aristocratic villain aboard the East Indiaman)</li>
                  <li><span className="text-gold-pale">Lady Grace Hale</span> (Lord William&rsquo;s wife, Sharpe&rsquo;s lover; dies)</li>
                  <li><span className="text-gold-pale">Captain Joel Chase</span> (Royal Navy frigate captain, Sharpe&rsquo;s ally)</li>
                  <li><span className="text-gold-pale">Admiral Villeneuve</span> (commander of the Franco-Spanish fleet) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                </ul>
              </div>
            </details>

            {/* 5. Sharpe's Prey */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    5. Sharpe&rsquo;s Prey
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Denmark · Copenhagen, 1807
                  </span>
                </div>
                <a href="https://amzn.to/3Omyi2O" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Lieutenant, 95th Rifles) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Captain John Lavisser</span> (main villain, traitor working for the Danes)</li>
                  <li><span className="text-gold-pale">Ole Skovgaard</span> (Danish merchant sympathetic to the British)</li>
                  <li><span className="text-gold-pale">Astrid Skovgaard</span> (Ole&rsquo;s daughter)</li>
                </ul>
              </div>
            </details>

            {/* 6. Sharpe's Rifles */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    6. Sharpe&rsquo;s Rifles
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Retreat to Corunna, 1809
                  </span>
                </div>
                <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Lieutenant, 95th Rifles) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> (first appearance; Sharpe&rsquo;s future RSM and closest friend) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Captain Blas Vivar</span> (Spanish officer escorting a sacred relic behind French lines)</li>
                  <li><span className="text-gold-pale">Sir John Moore</span> (commander of the British retreat) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                </ul>
              </div>
            </details>

            {/* 7. Sharpe's Havoc */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    7. Sharpe&rsquo;s Havoc
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Portugal · Oporto, 1809
                  </span>
                </div>
                <a href="https://amzn.to/3ObcY09" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Colonel Christopher</span> (British officer turned traitor, main villain)</li>
                  <li><span className="text-gold-pale">Kate Savage</span> (young Englishwoman stranded in Portugal)</li>
                </ul>
              </div>
            </details>

            {/* 8. Sharpe's Eagle */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    8. Sharpe&rsquo;s Eagle
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Talavera, 1809
                  </span>
                </div>
                <a href="https://amzn.to/4sXbzbX" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Captain, attached to the South Essex) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sir Henry Simmerson</span> (incompetent colonel of the South Essex, main antagonist)</li>
                  <li><span className="text-gold-pale">Lieutenant Christian Gibbons</span> (Simmerson&rsquo;s nephew)</li>
                  <li><span className="text-gold-pale">Major Michael Hogan</span> (first appearance; Wellington&rsquo;s intelligence officer) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sir Arthur Wellesley</span> (later Duke of Wellington) <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>
          </div>

          <p className="mt-10 text-center text-parchment/95 font-serif italic text-sm">
            Books 9 to 24 will be added in a future update.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/fiction"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              &larr; Back to Fiction
            </Link>
            <Link
              href="/battles/waterloo"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Battle of Waterloo
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-6 text-center">
        <p className="text-xs uppercase tracking-widest text-parchment/85">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </div>
    </>
  );
}
