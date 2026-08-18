import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Best Napoleonic Wars Books: Complete Reading Guide (2026)",
  description:
    "Curated non-fiction recommendations on Napoleon, Wellington, Waterloo, the Peninsular War, and Russia 1812. Where to start and what to read next.",
  path: "/napoleonic-wars-books",
  keywords: [
    "best napoleonic wars books",
    "napoleonic wars reading list",
    "best books on Napoleon",
    "best Napoleon biography",
    "best books about Waterloo",
    "what to read after Sharpe",
    "napoleonic wars non-fiction",
    "best Peninsular War books",
    "best book about 1812",
  ],
  type: "article",
});

// ---------- affiliate helpers ----------

const AMZ_TAG = "tomstansfi036-21";
function amzSearch(title: string, author: string) {
  const q = encodeURIComponent(`${title} ${author}`);
  return `https://www.amazon.co.uk/s?k=${q}&i=stripbooks&tag=${AMZ_TAG}`;
}

const affClass =
  "text-burgundy-bright hover:text-gold transition underline underline-offset-2 decoration-burgundy-bright/40 hover:decoration-gold";

function AffLink({
  title,
  author,
  children,
}: {
  title: string;
  author: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={amzSearch(title, author)}
      target="_blank"
      rel="sponsored noopener"
      aria-label={`Buy ${title} by ${author} on Amazon (affiliate link)`}
      className={affClass}
    >
      {children ?? title}
    </a>
  );
}

function BuyButton({ title, author }: { title: string; author: string }) {
  return (
    <a
      href={amzSearch(title, author)}
      target="_blank"
      rel="sponsored noopener"
      aria-label={`Buy ${title} by ${author} on Amazon (affiliate link)`}
      className="mt-4 inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
    >
      Buy on Amazon &rarr;
    </a>
  );
}

// ---------- data ----------

interface Book {
  title: string;
  author: string;
  year: string;
  yearNumeric: number;
  isbn?: string;
  seriesOf?: string; // for isPartOfSeries
  description: string;
}

const essentialFour: Book[] = [
  {
    title: "The Campaigns of Napoleon",
    author: "David G. Chandler",
    year: "1966",
    yearNumeric: 1966,
    description:
      "The classic operational history. Chandler was a British military historian whose single volume remains the standard English-language reference for how Napoleon's campaigns actually worked. Long, but exceptionally clear. If you read one military history of the wars, read this.",
  },
  {
    title: "1812: Napoleon's Fatal March on Moscow",
    author: "Adam Zamoyski",
    year: "2004",
    yearNumeric: 2004,
    description:
      "Zamoyski uses Polish and Russian sources most English-language histories don't reach. The result is the definitive modern account of the Russian campaign, and one of the most gripping narrative histories written in the last thirty years.",
  },
  {
    title: "The Peninsular War: A New History",
    author: "Charles Esdaile",
    year: "2002",
    yearNumeric: 2002,
    description:
      "The modern one-volume synthesis of the war Sharpe fights in. Esdaile is fair to all sides, sharp on Spanish politics (usually neglected in British accounts), and clear on why the campaign mattered strategically.",
  },
  {
    title: "Waterloo: The History of Four Days, Three Armies, and Three Battles",
    author: "Bernard Cornwell",
    year: "2014",
    yearNumeric: 2014,
    description:
      "Cornwell's only non-fiction book. Written with a novelist's pace but grounded in serious research. Covers Quatre Bras and Ligny as well as Waterloo itself. Widely considered one of the most readable accounts for general readers.",
  },
];

const napoleonBooks: Book[] = [
  {
    title: "Napoleon: A Life",
    author: "Andrew Roberts",
    year: "2014",
    yearNumeric: 2014,
    description:
      'The best single-volume biography in English (published in the UK as Napoleon the Great). Roberts drew on the complete Fondation Napoléon correspondence, then still being published, and produced a sympathetic but unromantic portrait. Bernard Cornwell has called it "simply dynamite". Long, but paced.',
  },
  {
    title: "Napoleon: A Life",
    author: "Adam Zamoyski",
    year: "2018",
    yearNumeric: 2018,
    description:
      "A different book, and a different take. Zamoyski strips away myth in both directions: not a god, not a monster, an ordinary man exhibiting extraordinary qualities. If Roberts leans slightly sympathetic, Zamoyski leans slightly critical. Read both if you can; either alone if you can't.",
  },
];

const wellingtonBooks: Book[] = [
  {
    title: "Wellington: The Path to Victory 1769-1814",
    author: "Rory Muir",
    year: "2013",
    yearNumeric: 2013,
    description:
      "The first volume of the definitive modern two-volume biography. Rory Muir spent decades on Wellington. This first volume takes him from Ireland through India to the end of the Peninsular War. Superb on the military decisions.",
  },
  {
    title: "Wellington: Waterloo and the Fortunes of Peace 1814-1852",
    author: "Rory Muir",
    year: "2015",
    yearNumeric: 2015,
    description:
      "The second volume: Waterloo, the political career, the long shadow after the wars. Together the two volumes are 1,800 pages and worth every one.",
  },
  {
    title: "Wellington: A Personal History",
    author: "Christopher Hibbert",
    year: "1997",
    yearNumeric: 1997,
    description:
      "Shorter, more accessible, and more character-driven than Muir. Hibbert is particularly good on Wellington the man rather than Wellington the general. A good gateway book before committing to Muir.",
  },
];

const peninsularBooks: Book[] = [
  {
    title: "The Peninsular War 1807-1814",
    author: "Michael Glover",
    year: "1974",
    yearNumeric: 1974,
    description:
      "A shorter, more focused military history. Written by a former officer, it's clear on tactics and operations without becoming a textbook. Long out of print in some editions but easy to find secondhand.",
  },
  {
    title: "A History of the Peninsular War",
    author: "Sir Charles Oman",
    year: "1902-1930",
    yearNumeric: 1902,
    description:
      "The classic. Oman was writing when veterans were still alive and his research shaped every subsequent history of the war. Volumes are dense and priced accordingly, but for the serious reader they remain unrivalled. Available in modern reprints from Greenhill Books.",
  },
];

const russiaBooks: Book[] = [
  {
    title: "Russia Against Napoleon",
    author: "Dominic Lieven",
    year: "2009",
    yearNumeric: 2009,
    description:
      "The Russian side of the story, using Russian archives that most Western historians never reach. Lieven challenges the standard narrative (winter and scorched earth) with a proper analysis of Russian strategy, logistics, and political will. Won the Wolfson History Prize.",
  },
  {
    title: "With Napoleon in Russia",
    author: "General Armand de Caulaincourt",
    year: "1935",
    yearNumeric: 1935,
    description:
      "Caulaincourt rode alongside Napoleon during the entire campaign, including the sledge journey back to Paris. His memoir is a primary source of extraordinary immediacy. Various editions available.",
  },
];

const waterlooBooks: Book[] = [
  {
    title: "The Battle: A New History of Waterloo",
    author: "Alessandro Barbero",
    year: "2003",
    yearNumeric: 2003,
    description:
      "Elegant, multi-perspective account of a single day at Mont-Saint-Jean. Barbero interweaves French, British, Prussian, and Netherlandish perspectives without losing the through-line. Consistently recommended by academic historians and general readers alike.",
  },
  {
    title: "Waterloo: The Aftermath",
    author: "Paul O'Keeffe",
    year: "2014",
    yearNumeric: 2014,
    description:
      "The rare book about what happened after the guns stopped. The wounded, the political fallout, the myth-making. A distinctive angle on a much-written battle.",
  },
];

const widerPictureBooks: Book[] = [
  {
    title: "Napoleon's Wars: An International History 1803-1815",
    author: "Charles Esdaile",
    year: "2007",
    yearNumeric: 2007,
    description:
      "The modern political and diplomatic synthesis. Puts the whole conflict in continent-wide context. If Chandler is the operational history, Esdaile is the political one.",
  },
  {
    title: "The Napoleonic Wars: A Global History",
    author: "Alexander Mikaberidze",
    year: "2020",
    yearNumeric: 2020,
    description:
      "Recent, comprehensive, and genuinely global. Argues that the Napoleonic Wars were not just a European affair and traces their effects from South America to South Asia. Reshapes the way most Anglophone readers understand the period.",
  },
  {
    title: "Rites of Peace: The Fall of Napoleon and the Congress of Vienna",
    author: "Adam Zamoyski",
    year: "2007",
    yearNumeric: 2007,
    description:
      "The diplomats take over where the soldiers stop. What actually happened at Vienna, told with Zamoyski's usual eye for how sordid and human the reality was.",
  },
  {
    title: "Trafalgar: The Biography of a Battle",
    author: "Roy and Lesley Adkins",
    year: "2004",
    yearNumeric: 2004,
    description:
      "A solid single-volume account of Nelson's decisive naval victory. Draws on ships' logs, letters, and eyewitness testimony from every level of the fleet.",
  },
];

const memoirs: Book[] = [
  {
    title: "Recollections of Rifleman Harris",
    author: "Benjamin Harris (dictated to Henry Curling)",
    year: "1848",
    yearNumeric: 1848,
    description:
      "The finest private-soldier document of the Peninsular War. Harris was a Dorset shepherd turned rifleman. His voice makes the retreat to Corunna real in a way no dispatch can.",
  },
  {
    title: "Adventures in the Rifle Brigade",
    author: "John Kincaid",
    year: "1830",
    yearNumeric: 1830,
    description:
      "The literate, droll voice of the 95th, told by an officer who served from Walcheren through the Peninsula to Waterloo, where he was adjutant of the 1st Battalion.",
  },
  {
    title: "Rough Sketches of the Life of an Old Soldier",
    author: "Jonathan Leach",
    year: "1831",
    yearNumeric: 1831,
    description:
      "Leach served with the 95th from 1808 to Waterloo. Dry humour and a soldier's eye for detail.",
  },
  {
    title: "The Autobiography of Sir Harry Smith",
    author: "Sir Harry Smith",
    year: "1900",
    yearNumeric: 1900,
    description:
      "Smith served with the 95th through the Peninsula and at Waterloo. He married a young Spanish woman named Juana at Badajoz; her story is the basis of Georgette Heyer's The Spanish Bride. His autobiography is a life of exceptional adventure.",
  },
];

// ---------- FAQ ----------

const faqItems = [
  {
    q: "What is the best single book on the Napoleonic Wars?",
    a: "For a general reader, David Chandler's The Campaigns of Napoleon (1966) remains the standard operational history. For a shorter and more accessible starting point, Andrew Roberts' Napoleon: A Life (2014) covers Napoleon's whole career including the military side. If you want a modern global perspective, Alexander Mikaberidze's The Napoleonic Wars: A Global History (2020) is the best recent synthesis.",
  },
  {
    q: "What should I read after Bernard Cornwell's Sharpe novels?",
    a: "Charles Esdaile's The Peninsular War: A New History (2002) covers the campaigns Sharpe fights in with proper scholarly rigour. For memoirs, start with Recollections of Rifleman Harris. Cornwell drew heavily on it when creating Sharpe.",
  },
  {
    q: "What is the best biography of Napoleon?",
    a: "Andrew Roberts' Napoleon: A Life (2014) and Adam Zamoyski's Napoleon: A Life (2018) are the two best modern biographies in English. Roberts is more sympathetic; Zamoyski more sceptical. Both are excellent. If you want just one, Roberts is the more comprehensive military account.",
  },
  {
    q: "What is the best biography of Wellington?",
    a: "Rory Muir's two-volume biography (2013 and 2015) is the definitive modern account. For a shorter and more accessible read, Christopher Hibbert's Wellington: A Personal History (1997) is very good.",
  },
  {
    q: "What is the best book on Waterloo?",
    a: "For a general reader, Bernard Cornwell's Waterloo (2014) is the most accessible and readable single-volume account. For a more scholarly perspective, Alessandro Barbero's The Battle: A New History of Waterloo (2003) is exceptional.",
  },
  {
    q: "What is the best book on Napoleon's invasion of Russia?",
    a: "Adam Zamoyski's 1812: Napoleon's Fatal March on Moscow (2004) is the standard single-volume account. For the Russian perspective, Dominic Lieven's Russia Against Napoleon (2009) is essential.",
  },
  {
    q: "Are Sir Charles Oman's volumes still worth reading?",
    a: "Yes, though they are demanding. Oman's seven-volume A History of the Peninsular War (1902-1930) remains the most detailed English-language account of the war. Modern historians build on Oman rather than replace him. For a serious reader, they are unmatched.",
  },
] as const;

// ---------- JSON-LD ----------

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.baseUrl}/resources` },
    { "@type": "ListItem", position: 3, name: "Napoleonic Wars Books", item: `${SITE.baseUrl}/napoleonic-wars-books` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Best Napoleonic Wars Books: A Complete Reading Guide",
  description:
    "Curated non-fiction recommendations on Napoleon, Wellington, Waterloo, the Peninsular War, and Russia 1812. Where to start and what to read next.",
  author: { "@type": "Organization", name: "The Napoleonic Archive" },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
  },
  mainEntityOfPage: `${SITE.baseUrl}/napoleonic-wars-books`,
  dateModified: "2026-08-18",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const allBooks: Book[] = [
  ...essentialFour,
  ...napoleonBooks,
  ...wellingtonBooks,
  ...peninsularBooks,
  ...russiaBooks,
  ...waterlooBooks,
  ...widerPictureBooks,
  ...memoirs,
];

const bookJsonLds = allBooks.map((b) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: b.title,
  author: { "@type": "Person", name: b.author },
  datePublished: b.yearNumeric.toString(),
  description: b.description,
  url: amzSearch(b.title, b.author),
}));

// ---------- rendering ----------

function BookCard({ b }: { b: Book }) {
  return (
    <article className="border border-gold/20 rounded-sm p-6 bg-navy-muted/40 hover:border-gold/50 transition flex flex-col">
      <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider leading-snug mb-1">
        <AffLink title={b.title} author={b.author} />
      </h3>
      <div className="text-sm italic text-burgundy-bright mb-3">
        {b.author} &middot; {b.year}
      </div>
      <p className="text-sm text-parchment/95 font-serif leading-relaxed flex-1">
        {b.description}
      </p>
      <BuyButton title={b.title} author={b.author} />
    </article>
  );
}

function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {books.map((b) => (
        <BookCard key={`${b.title}-${b.author}`} b={b} />
      ))}
    </div>
  );
}

const SECTIONS = [
  { id: "start-here", label: "Start Here: The Four Essential Books" },
  { id: "napoleon", label: "Best Books on Napoleon" },
  { id: "wellington", label: "Best Books on Wellington" },
  { id: "peninsular", label: "The Peninsular War (Sharpe's War)" },
  { id: "russia", label: "Napoleon's Russian Campaign (1812)" },
  { id: "waterloo", label: "Waterloo" },
  { id: "wider", label: "The Wider Picture: Naval, Diplomatic, Global" },
  { id: "memoirs", label: "Primary Sources: Soldiers' Memoirs" },
  { id: "faq", label: "FAQ" },
];

const relatedPages = [
  { href: "/battles/peninsular-war", title: "The Peninsular War", note: "The war Sharpe fights in, from Vimeiro to Toulouse." },
  { href: "/battles/russian-campaign", title: "Napoleon's Russian Campaign", note: "The 1812 catastrophe on the road to Moscow." },
  { href: "/battles/waterloo", title: "The Battle of Waterloo", note: "18 June 1815: the Hundred Days end at Mont-Saint-Jean." },
  { href: "/people/wellington", title: "The Duke of Wellington", note: "The only general to beat Napoleon in a pitched battle." },
  { href: "/bernard-cornwell", title: "Bernard Cornwell", note: "The complete author guide across every series." },
  { href: "/fiction", title: "Sharpe Books in Order", note: "All 24 Sharpe novels in chronological and publication order." },
  { href: "/regiments/95th-rifles", title: "The 95th Rifles", note: "Sharpe's regiment: the men whose memoirs are listed above." },
  { href: "/resources", title: "Resources & References", note: "Museums, archives, podcasts and maps." },
];

export default function NapoleonicWarsBooksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      {bookJsonLds.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <PageHeader
        eyebrow="A curated non-fiction reading guide"
        title="The Best Napoleonic Wars Books: A Complete Reading Guide"
        lede="Where to start on Napoleon, Wellington, Waterloo, the Peninsular War and Russia 1812, and what to read next."
      />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            If you&rsquo;ve watched <em>Sharpe</em>, read Bernard Cornwell&rsquo;s novels, or seen the Ridley Scott film, the next question is usually the same: what should I read to actually learn what happened? The Napoleonic Wars have a huge historical literature, some of it exceptional and some of it dated or partisan. This guide picks the books worth your time, from a single-volume introduction to campaign-specific classics, with recommended reading paths for different kinds of reader.
          </p>
          <p>
            Every book listed here is either in print or easily available secondhand. Where a book is particularly good, we say so. Where it&rsquo;s a classic that hasn&rsquo;t aged well, we say that too.
          </p>
        </div>

        {/* Quick-jump menu */}
        <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </section>

      {/* 1. Start Here */}
      <section id="start-here" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Start Here: If You Read Nothing Else
          </h2>
          <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
            These four books, in this order, will give you a stronger grasp of the Napoleonic Wars than nine readers in ten. Between them they cover the whole arc: Napoleon&rsquo;s rise, the disaster in Russia, the war in Spain and Portugal, and the final defeat at Waterloo.
          </p>
          <BookGrid books={essentialFour} />
        </div>
      </section>

      {/* 2. Napoleon */}
      <section id="napoleon" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
          Books About Napoleon
        </h2>
        <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
          Two modern one-volume biographies stand out. If you want the operational side as well, David Chandler&rsquo;s <em>The Campaigns of Napoleon</em> (listed in the essential four above) is the natural companion.
        </p>
        <BookGrid books={napoleonBooks} />
      </section>

      {/* 3. Wellington */}
      <section id="wellington" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Books About Wellington
          </h2>
          <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
            The two-volume Muir biography is the definitive modern account. Hibbert is the readable gateway.
          </p>
          <BookGrid books={wellingtonBooks} />
        </div>
      </section>

      {/* 4. Peninsular War */}
      <section id="peninsular" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
          The Peninsular War (Sharpe&rsquo;s War)
        </h2>
        <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
          Charles Esdaile&rsquo;s <em>The Peninsular War: A New History</em> is flagged in the essential four above and is the modern standard. The two books below sit alongside it. For Sharpe fans specifically: <em>Sharpe&rsquo;s Company</em> and <em>Sharpe&rsquo;s Battle</em> both take historical liberties, but the underlying campaigns are covered accurately in Esdaile and Glover. If you want to know what really happened at Badajoz, Salamanca, or Vitoria, start with Esdaile.
        </p>
        <BookGrid books={peninsularBooks} />
      </section>

      {/* 5. Russia */}
      <section id="russia" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Napoleon&rsquo;s Russian Campaign (1812)
          </h2>
          <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
            Adam Zamoyski&rsquo;s <em>1812</em> is flagged in the essential four above and is the standard single-volume account. The books below cover the Russian side and the essential French memoir of the campaign.
          </p>
          <BookGrid books={russiaBooks} />
        </div>
      </section>

      {/* 6. Waterloo */}
      <section id="waterloo" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
          Waterloo
        </h2>
        <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
          Bernard Cornwell&rsquo;s <em>Waterloo</em> is flagged in the essential four above and is the most readable one-volume account. The two below give the scholarly perspective and the rare account of what happened after the guns stopped.
        </p>
        <BookGrid books={waterlooBooks} />
      </section>

      {/* 7. Wider picture */}
      <section id="wider" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
            The Wider Picture
          </h2>
          <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
            The wars were not only about the great battles. Politics, diplomacy, and the wider world all mattered. These four books cover the ground the campaign histories leave out.
          </p>
          <BookGrid books={widerPictureBooks} />
          <p className="mt-10 text-parchment/85 font-serif italic text-sm max-w-3xl">
            The naval literature is huge and this section is deliberately brief. For a wider naval history, N.A.M. Rodger&rsquo;s <em>The Command of the Ocean</em> (2004) is the standard.
          </p>
        </div>
      </section>

      {/* 8. Memoirs */}
      <section id="memoirs" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-6">
          Read the Soldiers Themselves
        </h2>
        <p className="text-parchment font-serif text-lg leading-relaxed max-w-3xl mb-10">
          If you want to know what the wars actually felt like, read the men who fought them. The Peninsular War produced an unusually rich body of first-person memoirs, particularly from officers and riflemen of the 95th. See also Caulaincourt&rsquo;s <em>With Napoleon in Russia</em> in the section above.
        </p>
        <BookGrid books={memoirs} />
        <p className="mt-8 text-parchment/95 font-serif text-sm">
          Read more about the men of the 95th on our{" "}
          <Link href="/regiments/95th-rifles" className="text-gold-pale underline underline-offset-2 hover:text-gold transition">
            dedicated 95th Rifles page &rarr;
          </Link>
        </p>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqItems.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                  {f.q}
                </h3>
                <p className="text-parchment font-serif leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Related */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
          Explore More
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedPages.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="card p-5 rounded-sm block hover:border-gold/50 transition"
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
      </section>

      {/* 11. Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="gold-divider" />
        <p className="mt-8 text-xs uppercase tracking-widest text-parchment/85 text-center pt-2">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="mt-4 text-parchment/70 font-serif italic text-sm text-center">
          Page last updated: August 2026.
        </p>
      </section>
    </>
  );
}
