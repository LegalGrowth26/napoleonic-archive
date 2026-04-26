import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CharacterDatabase from "@/components/CharacterDatabase";
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

const faqItems = [
  {
    q: "What happens to Sharpe's daughter Antonia?",
    a: "Antonia is Sharpe's daughter with Teresa Moreno. After Teresa is killed by Hakeswill at Badajoz, Antonia is left in Spain in the care of others. She appears briefly in the novels as a young child but her ultimate fate is not clearly resolved in the main series — Cornwell leaves her story largely unfinished.",
  },
  {
    q: "Does Sharpe have any other children?",
    a: "Yes. With Lucille Castineau after the wars, Sharpe has a son named Patrick — named after Harper. He also had a son with Jane Gibbons but that child does not survive. His acknowledged surviving children are Antonia (with Teresa, fate unclear) and Patrick (with Lucille).",
  },
  {
    q: "What happens to Lucille Castineau?",
    a: "Lucille becomes Sharpe's enduring companion after the Napoleonic Wars. They settle together in Normandy, France, on her farm. She represents the domesticity and peace Sharpe never expected to find. In Sharpe's Devil she is still with him in Normandy and is widely regarded as the great love of his later life.",
  },
  {
    q: "Does Sharpe ever meet Napoleon?",
    a: "Yes — briefly, in Sharpe's Devil, the final novel. Sharpe travels to Chile with Lord Cochrane and on the voyage encounters Napoleon on St Helena. It is a brief atmospheric encounter rather than a dramatic confrontation. Napoleon is diminished by exile and Sharpe sees the man behind the legend. It is one of Cornwell's most affecting scenes.",
  },
  {
    q: "Is Sharpe still alive at the end of the series?",
    a: "Yes. At the end of Sharpe's Devil, Sharpe is alive and returns to Normandy and Lucille. He is in his mid-forties. Cornwell has continued adding novels — Sharpe's Assassin (2021) and Sharpe's Storm (2024) are set earlier in the timeline. As of the most recent novels, Sharpe survives the Napoleonic Wars and lives on in France with Lucille.",
  },
  {
    q: "Who kills Hakeswill?",
    a: "In the novel Sharpe's Enemy, Hakeswill is tried and sentenced to death by firing squad. Sharpe commands the execution and delivers the coup de grâce — cold, formal and deliberate. In the 1994 ITV television adaptation the scene is handled differently.",
  },
  {
    q: "What regiment is Sharpe in?",
    a: "Sharpe begins his career in the 33rd Regiment of Foot before becoming an officer in the 95th Rifles — the green-jacketed light infantry regiment that becomes his true home throughout the Peninsular War. He is briefly attached to the fictional South Essex Regiment as well.",
  },
  {
    q: "Who is Patrick Harper?",
    a: "Patrick Harper is Sharpe's closest friend and companion throughout the series — an Irish sergeant from Donegal in the 95th Rifles. Immensely strong, deeply loyal, and armed with a seven-barrelled volley gun, Harper is the second most dangerous man in any room Sharpe enters. He survives the wars and returns to Ireland with his wife Ramona.",
  },
  {
    q: "In what order should I read the Sharpe books?",
    a: "Most readers start with Sharpe's Eagle (1981), the first published novel, which introduces Sharpe already an officer in Spain. For chronological order start with Sharpe's Tiger (1799) set in India. See our complete reading guide on the Fiction page.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

interface MajorCharacter {
  name: string;
  rank: string;
  nationality: string;
  books: string;
  description: string;
  fate?: string;
  novelVsTv?: string;
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
    novelVsTv:
      "In the novel Sharpe's Enemy, Sharpe commands the firing squad and personally delivers the coup de grâce. In the 1994 ITV television film, Sharpe is present at the execution but another officer delivers the final shot. Hakeswill's last words, directed at Sharpe, his greatest enemy, are his famous line: You cannot kill me.",
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
      <JsonLd data={faqJsonLd} />

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
          <p className="text-sm text-parchment/95 font-serif leading-relaxed text-center mt-3">
            Character entries are based on Bernard Cornwell&rsquo;s novels.
            Where details are uncertain this is noted. If you spot an error
            please{" "}
            <Link href="/contact" className="text-gold-pale underline underline-offset-2 hover:text-gold transition">
              contact us via our contact page
            </Link>.
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
              {c.novelVsTv && (
                <div className="mt-4 border border-burgundy-bright/40 rounded-sm bg-burgundy-deep/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-burgundy-bright font-display text-sm" aria-hidden="true">
                      ❦
                    </span>
                    <span className="font-display text-xs uppercase tracking-[0.25em] text-burgundy-bright">
                      Novel vs TV
                    </span>
                  </div>
                  <p className="text-sm text-parchment/95 font-serif leading-relaxed">
                    {c.novelVsTv}
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
            {/* 9. Sharpe's Gold */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    9. Sharpe&rsquo;s Gold
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Torres Vedras, 1810
                  </span>
                </div>
                <a href="https://amzn.to/3QJNU0Q" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> (Captain) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">El Cat&oacute;lico</span> (Spanish guerrilla leader; the novel&rsquo;s main villain)</li>
                  <li><span className="text-gold-pale">Teresa Moreno</span> (first appearance; Spanish guerrilla fighter, later Sharpe&rsquo;s wife) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Major Michael Hogan</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 10. Sharpe's Escape */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    10. Sharpe&rsquo;s Escape
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Portugal · Bussaco, 1810
                  </span>
                </div>
                <a href="https://amzn.to/4teLTYW" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Ferragus</span> (Portuguese criminal, the novel&rsquo;s main villain)</li>
                  <li><span className="text-gold-pale">Lieutenant Price</span> (officer in the South Essex)</li>
                </ul>
              </div>
            </details>

            {/* 11. Sharpe's Fury */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    11. Sharpe&rsquo;s Fury
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Barrosa, 1811
                  </span>
                </div>
                <a href="https://amzn.to/4vAIzJn" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Father Sarsfield</span> (Irish priest in C&aacute;diz)</li>
                  <li><span className="text-gold-pale">General Thomas Graham</span> (commands the British at Barrosa) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                </ul>
              </div>
            </details>

            {/* 12. Sharpe's Battle */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    12. Sharpe&rsquo;s Battle
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Fuentes de O&ntilde;oro, 1811
                  </span>
                </div>
                <a href="https://amzn.to/4ct5mhn" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lord Kiely / Lord Runciman</span> (comic-villain officers of the Real Compa&ntilde;&iacute;a Irlandesa)</li>
                  <li><span className="text-gold-pale">Brigadier Loup</span> (French counter-guerrilla commander, the novel&rsquo;s main villain)</li>
                  <li><span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 13. Sharpe's Company */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    13. Sharpe&rsquo;s Company
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Badajoz, 1812
                  </span>
                </div>
                <a href="https://amzn.to/4thUGcX" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Obadiah Hakeswill</span> (returns; murders Teresa Moreno during the sack of Badajoz) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Teresa Moreno</span> (killed by Hakeswill) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 14. Sharpe's Command */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    14. Sharpe&rsquo;s Command
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain, 1812
                  </span>
                </div>
                <a href="https://amzn.to/4mvUMuG" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 15. Sharpe's Sword */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    15. Sharpe&rsquo;s Sword
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Salamanca, 1812
                  </span>
                </div>
                <a href="https://amzn.to/4cvSPtR" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Colonel Philippe Leroux</span> (French intelligence officer and swordsman; main villain)</li>
                  <li><span className="text-gold-pale">Major Michael Hogan</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lord Spears</span> (British officer, charming but untrustworthy)</li>
                </ul>
              </div>
            </details>

            {/* 16. Sharpe's Enemy */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    16. Sharpe&rsquo;s Enemy
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Adrados, Christmas 1812
                  </span>
                </div>
                <a href="https://amzn.to/487wQrL" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Obadiah Hakeswill</span> (returns for the last time; executed by firing squad) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Pot-au-Feu</span> (French deserter and bandit leader)</li>
                  <li><span className="text-gold-pale">Colonel Dubreton</span> (French officer; honourable antagonist who cooperates with Sharpe against the deserters)</li>
                </ul>
              </div>
            </details>
            {/* 17. Sharpe's Honour */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    17. Sharpe&rsquo;s Honour
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Spain · Vitoria, 1813
                  </span>
                </div>
                <a href="https://amzn.to/3OJTLmk" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Major Pierre Ducos</span> (French intelligence officer; main villain, returns in later novels) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">El Matarife</span> (Spanish guerrilla leader, brutal and treacherous)</li>
                  <li><span className="text-gold-pale">Helene Leroux / La Marquesa</span> (French spy, wife of Colonel Leroux from Sharpe&rsquo;s Sword)</li>
                  <li><span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 18. Sharpe's Regiment */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    18. Sharpe&rsquo;s Regiment
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    England &amp; Pyrenees, 1813
                  </span>
                </div>
                <a href="https://amzn.to/4cdNMzg" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-4 text-sm font-serif text-parchment/95">
                  <li>
                    <span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Lieutenant-Colonel &middot; English</span>
                    <p className="mt-1">Returns to England from Spain to find the South Essex&rsquo;s second battalion has been effectively dissolved, its recruits siphoned off in a crimping racket. Sharpe and Harper go undercover as common recruits to infiltrate the battalion&rsquo;s training camp and expose the conspiracy. Sharpe also meets and begins his courtship of Jane Gibbons.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">RSM &middot; Irish (Donegal)</span>
                    <p className="mt-1">Accompanies Sharpe to England and enlists alongside him in the second battalion under false names. His size and fighting ability make him conspicuous despite the disguise.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Colonel Girdwood</span>
                    <br /><span className="text-xs text-gold/70">Colonel, 2nd Battalion South Essex &middot; English</span>
                    <p className="mt-1">The commanding officer of the second battalion and the novel&rsquo;s principal villain. Girdwood runs the training camp where recruits are drilled and then sold to other regiments for profit. He is a petty tyrant who governs the camp through fear and rigid discipline. Girdwood is protected by his political connections to Lord Fenner.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: defeated and disgraced by Sharpe. Exact details of his final fate uncertain; readers should verify.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Lord Fenner</span>
                    <br /><span className="text-xs text-gold/70">Secretary at War &middot; English</span>
                    <p className="mt-1">The politician behind the crimping racket. Fenner occupies a senior position in the War Office and uses his authority to cover up the diversion of recruits from the South Essex. He is the power behind Girdwood and the more dangerous of the two villains because of his political connections.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: his conspiracy is exposed. Exact consequences uncertain; readers should verify.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Sergeant Lynch</span>
                    <br /><span className="text-xs text-gold/70">Sergeant, 2nd Battalion South Essex &middot; English</span>
                    <p className="mt-1">Girdwood&rsquo;s brutal enforcer at the training camp. Lynch maintains discipline through violence and intimidation. He is one of the men Sharpe and Harper must deal with while undercover as recruits.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: killed during the novel. Exact circumstances uncertain; readers should verify.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Jane Gibbons</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Civilian &middot; English</span>
                    <p className="mt-1">First appearance. A young, well-born Englishwoman and niece of Sir Henry Simmerson (the incompetent colonel from Sharpe&rsquo;s Eagle). Sharpe is attracted to her beauty and her apparent admiration for him. They marry, but the relationship deteriorates badly in later novels as Jane proves ill-suited to life with Sharpe.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: becomes Sharpe&rsquo;s second wife. Leaves him by Sharpe&rsquo;s Revenge.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Maggie Joyce</span>
                    <br /><span className="text-xs text-gold/70">Civilian &middot; English</span>
                    <p className="mt-1">A woman from Sharpe&rsquo;s past in London, connected to his youth before he enlisted. She provides a reminder of the world Sharpe came from and the poverty he escaped by joining the army.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Specific plot details uncertain; readers should verify from the novel.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">The Prince of Wales</span> <span className="text-xs text-gold/70 ml-1">historical</span>
                    <br /><span className="text-xs text-gold/70">Prince Regent &middot; English</span>
                    <p className="mt-1">The future George IV. Makes a minor appearance in the London scenes. Cornwell uses him to illustrate the contrast between the political world and the reality of the war in Spain.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Sir Henry Simmerson</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Former Colonel, South Essex &middot; English</span>
                    <p className="mt-1">Returns from Sharpe&rsquo;s Eagle. The disgraced former colonel of the South Essex who lost the King&rsquo;s Colour at Valdelacasa. Now involved in the crimping conspiracy through his political connections. Jane Gibbons is his niece.</p>
                  </li>
                </ul>
              </div>
            </details>

            {/* 19. Sharpe's Siege */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    19. Sharpe&rsquo;s Siege
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    France · Atlantic coast, 1814
                  </span>
                </div>
                <a href="https://amzn.to/4tifrFi" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Captain Bampfylde</span> (Royal Navy officer; incompetent and treacherous)</li>
                  <li><span className="text-gold-pale">Cornelius Killick</span> (American privateer captain)</li>
                </ul>
              </div>
            </details>

            {/* 20. Sharpe's Revenge */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    20. Sharpe&rsquo;s Revenge
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    France &amp; Naples, 1814
                  </span>
                </div>
                <a href="https://amzn.to/484GHP5" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Jane Sharpe</span> (leaves Sharpe, takes his money) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Major Pierre Ducos</span> (returns; frames Sharpe for theft) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lucille Castineau</span> (first appearance; French widow, becomes Sharpe&rsquo;s companion) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Captain William Frederickson</span> (Rifle officer, Sharpe&rsquo;s ally)</li>
                </ul>
              </div>
            </details>

            {/* 21. Sharpe's Waterloo */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    21. Sharpe&rsquo;s Waterloo
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Belgium · Waterloo, 1815
                  </span>
                </div>
                <a href="https://amzn.to/4cMW7df" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-4 text-sm font-serif text-parchment/95">
                  <li>
                    <span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Lieutenant-Colonel, liaison officer &middot; English</span>
                    <p className="mt-1">Attached to the Prince of Orange&rsquo;s staff as a liaison officer, a role that puts him in direct contact with the Allied command&rsquo;s worst decisions. Sharpe watches the Prince order catastrophic attacks and is powerless to countermand them. He fights at both Quatre Bras and Waterloo, ending the battle in the thick of the fighting around La Haye Sainte and the final defeat of the Imperial Guard.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">RSM (retired) &middot; Irish (Donegal)</span>
                    <p className="mt-1">Has left the army but comes to Belgium to find Sharpe. Fights alongside him at Waterloo as a civilian volunteer. Harper&rsquo;s presence at the battle is a deliberate choice: he comes because Sharpe needs him, not because he has to.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: survives Waterloo. Returns to Ireland.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">The Prince of Orange</span> <span className="text-xs text-gold/70 ml-1">historical</span>
                    <br /><span className="text-xs text-gold/70">Commander, Allied I Corps &middot; Dutch</span>
                    <p className="mt-1">William, Prince of Orange, heir to the Kingdom of the Netherlands. Cornwell portrays him as young, inexperienced and dangerously incompetent: he orders infantry into line when they should be in square, directly causing heavy casualties. His reckless commands are one of the novel&rsquo;s central sources of tension. Historically, the Prince was wounded at Waterloo and his battlefield performance has been debated by historians, though Cornwell&rsquo;s portrayal is notably harsh.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: wounded at Waterloo (historical).</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Field Marshal, Allied commander &middot; Anglo-Irish</span>
                    <p className="mt-1">Commands the Allied army at Waterloo. Cornwell portrays him as calm, cold, and utterly in command throughout the crisis. He recognises Sharpe&rsquo;s value and uses him where the fighting is hardest. Their long association across the series reaches its climax here.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Lord John Rossendale</span>
                    <br /><span className="text-xs text-gold/70">Officer &middot; English</span>
                    <p className="mt-1">Jane Sharpe&rsquo;s lover. A young, fashionable aristocrat who has taken up with Jane and is spending Sharpe&rsquo;s money. Rossendale serves in the Allied army at Waterloo. Sharpe wants to kill him but the battle intervenes.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Fate: specific outcome uncertain; readers should verify from the novel.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Napoleon Bonaparte</span> <span className="text-xs text-gold/70 ml-1">historical</span>
                    <br /><span className="text-xs text-gold/70">Emperor of the French</span>
                    <p className="mt-1">Seen at a distance commanding the French army. Cornwell does not give him a speaking role in this novel but his presence shapes every moment of the battle.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Lucille Castineau</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span>
                    <br /><span className="text-xs text-gold/70">Civilian &middot; French</span>
                    <p className="mt-1">Sharpe&rsquo;s companion, waiting for him in Normandy. She appears in the novel&rsquo;s framing scenes. Her presence is a reminder of what Sharpe has to survive for.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Harry Price</span>
                    <br /><span className="text-xs text-gold/70">Lieutenant &middot; English</span>
                    <p className="mt-1">A junior officer who serves under Sharpe. Price is a likeable, capable soldier who fights at Waterloo.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">Exact rank and role details uncertain; first appears earlier in the series (Sharpe&rsquo;s Escape or later). Readers should verify.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">General Rebecque</span> <span className="text-xs text-gold/70 ml-1">historical</span>
                    <br /><span className="text-xs text-gold/70">Chief of Staff, Netherlands Corps &middot; Dutch-Belgian</span>
                    <p className="mt-1">Jean Victor de Constant Rebecque, the Prince of Orange&rsquo;s chief of staff. In the novel he is portrayed as a competent professional officer who tries to mitigate the Prince&rsquo;s worst decisions. He acts as a foil to the Prince: experienced where the Prince is reckless, cautious where the Prince is impulsive. Rebecque cooperates with Sharpe because both men can see the danger the Prince poses.</p>
                  </li>
                  <li>
                    <span className="text-gold-pale">Peter d&rsquo;Alembord</span>
                    <br /><span className="text-xs text-gold/70">Captain &middot; English</span>
                    <p className="mt-1">An officer in Sharpe&rsquo;s battalion. D&rsquo;Alembord is a well-born officer who has served with Sharpe in earlier novels and fights at Waterloo.</p>
                    <p className="mt-1 text-xs text-parchment/70 italic">First appearance is earlier in the series. Exact details of his Waterloo role uncertain; readers should verify.</p>
                  </li>
                </ul>
              </div>
            </details>

            {/* 22. Sharpe's Assassin */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    22. Sharpe&rsquo;s Assassin
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Paris, 1815
                  </span>
                </div>
                <a href="https://amzn.to/3On32AM" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lucille Castineau</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Major Pierre Ducos</span> (final appearance) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Henri Lassan</span> (Lucille&rsquo;s brother)</li>
                </ul>
              </div>
            </details>

            {/* 23. Sharpe's Storm */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    23. Sharpe&rsquo;s Storm
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Southern France, 1813
                  </span>
                </div>
                <a href="https://amzn.to/4mztR11" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Sergeant Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">The Duke of Wellington</span> <span className="text-xs text-gold/70 ml-1">historical</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                </ul>
              </div>
            </details>

            {/* 24. Sharpe's Devil */}
            <details className="card rounded-sm group">
              <summary className="flex flex-wrap items-center justify-between gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider inline">
                    24. Sharpe&rsquo;s Devil
                  </h3>
                  <span className="text-xs text-parchment/85 ml-3 font-serif">
                    Chile, 1820 to 1821
                  </span>
                </div>
                <a href="https://amzn.to/4tPFDXB" target="_blank" rel="noopener noreferrer sponsored" className="px-3 py-1 border border-gold/50 bg-burgundy-deep/60 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold transition">Buy on Amazon</a>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <ul className="space-y-2 text-sm font-serif text-parchment/95">
                  <li><span className="text-gold-pale">Richard Sharpe</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Patrick Harper</span> <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Lord Cochrane</span> (commanding Chilean independence navy) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                  <li><span className="text-gold-pale">Don Blas Vivar</span> (returns from Sharpe&rsquo;s Rifles; now a prisoner in Chile) <span className="text-burgundy-bright text-xs ml-1">recurring</span></li>
                  <li><span className="text-gold-pale">Napoleon Bonaparte</span> (on St Helena; glimpsed in the final chapter) <span className="text-xs text-gold/70 ml-1">historical</span></li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* A-Z CHARACTER INDEX                                          */}
      {/* ============================================================ */}
      <section id="index" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>◈</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            A-Z Character Index
          </h2>
          <p className="mt-3 text-sm text-parchment/95 font-serif italic">
            Major named characters across all 24 novels, with the book they
            first appear in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1 text-sm font-serif">
          {[
            ["Astrid Skovgaard", "Sharpe's Prey"],
            ["Bampfylde, Captain", "Sharpe's Siege"],
            ["Blas Vivar, Captain (Don)", "Sharpe's Rifles"],
            ["Chase, Captain Joel", "Sharpe's Trafalgar"],
            ["Christopher, Colonel", "Sharpe's Havoc"],
            ["Cochrane, Lord", "Sharpe's Devil"],
            ["d'Alembord, Captain Peter", "Sharpe's Waterloo"],
            ["Dodd, William", "Sharpe's Triumph"],
            ["Dubreton, Colonel", "Sharpe's Enemy"],
            ["Ducos, Major Pierre", "Sharpe's Honour"],
            ["El Católico", "Sharpe's Gold"],
            ["El Matarife", "Sharpe's Honour"],
            ["Ferragus", "Sharpe's Escape"],
            ["Frederickson, Captain William", "Sharpe's Revenge"],
            ["Gibbons, Jane", "Sharpe's Regiment"],
            ["Gibbons, Lieutenant Christian", "Sharpe's Eagle"],
            ["Girdwood, Colonel", "Sharpe's Regiment"],
            ["Graham, General Thomas", "Sharpe's Fury"],
            ["Hakeswill, Sergeant Obadiah", "Sharpe's Tiger"],
            ["Hale, Lady Grace", "Sharpe's Trafalgar"],
            ["Hale, Lord William", "Sharpe's Trafalgar"],
            ["Harper, Sergeant Patrick", "Sharpe's Rifles"],
            ["Hogan, Major Michael", "Sharpe's Eagle"],
            ["Joyce, Maggie", "Sharpe's Regiment"],
            ["Killick, Cornelius", "Sharpe's Siege"],
            ["Lassan, Henri", "Sharpe's Assassin"],
            ["Lavisser, Captain John", "Sharpe's Prey"],
            ["Leroux, Colonel Philippe", "Sharpe's Sword"],
            ["Leroux, Helene (La Marquesa)", "Sharpe's Honour"],
            ["Loup, Brigadier", "Sharpe's Battle"],
            ["Lucille Castineau", "Sharpe's Revenge"],
            ["Lynch, Sergeant", "Sharpe's Regiment"],
            ["Mary Bickerstaff", "Sharpe's Tiger"],
            ["McCandless, Colonel", "Sharpe's Tiger"],
            ["Moore, Sir John", "Sharpe's Rifles"],
            ["Moreno, Teresa", "Sharpe's Gold"],
            ["Napoleon Bonaparte", "Sharpe's Waterloo"],
            ["Pot-au-Feu", "Sharpe's Enemy"],
            ["Price, Lieutenant Harry", "Sharpe's Escape"],
            ["Prince of Orange", "Sharpe's Waterloo"],
            ["Prince of Wales", "Sharpe's Regiment"],
            ["Rebecque, General", "Sharpe's Waterloo"],
            ["Rossendale, Lord John", "Sharpe's Waterloo"],
            ["Runciman, Lord", "Sharpe's Battle"],
            ["Sarsfield, Father", "Sharpe's Fury"],
            ["Savage, Kate", "Sharpe's Havoc"],
            ["Sevajee, Syud", "Sharpe's Fortress"],
            ["Sharpe, Richard", "Sharpe's Tiger"],
            ["Simmerson, Sir Henry", "Sharpe's Eagle"],
            ["Skovgaard, Ole", "Sharpe's Prey"],
            ["Spears, Lord", "Sharpe's Sword"],
            ["Stevenson, Colonel", "Sharpe's Fortress"],
            ["Tippoo Sultan", "Sharpe's Tiger"],
            ["Villeneuve, Admiral", "Sharpe's Trafalgar"],
            ["Wellington, Duke of", "Sharpe's Tiger"],
          ].map(([name, book]) => (
            <div
              key={name}
              className="flex justify-between items-baseline py-1.5 border-b border-gold/10"
            >
              <span className="text-gold-pale">{name}</span>
              <span className="text-parchment/85 text-xs ml-2 whitespace-nowrap">
                {book}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCHABLE DATABASE */}
      <CharacterDatabase />

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-parchment/95 font-serif italic">
            Common questions about Richard Sharpe and the characters of Bernard Cornwell&rsquo;s novels
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
            <details key={q} className="card rounded-sm group">
              <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-gold font-display text-sm mt-0.5 shrink-0" aria-hidden="true">Q</span>
                <span className="font-display text-lg text-gold-pale tracking-wide leading-snug">{q}</span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <p className="text-parchment leading-relaxed font-serif">{a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#major-characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            &uarr; Browse the complete character guide above
          </a>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
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
