import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Last Kingdom Books in Order: Complete Reading Guide (2026)",
  description:
    "All 13 Bernard Cornwell Last Kingdom novels (also known as the Saxon Stories), in reading order. Plus how the books compare to the Netflix series.",
  path: "/last-kingdom-books-in-order",
  keywords: [
    "last kingdom books in order",
    "saxon stories in order",
    "bernard cornwell last kingdom",
    "how many last kingdom books",
    "uhtred books in order",
    "last kingdom series order",
  ],
  type: "article",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Fiction", item: `${SITE.baseUrl}/fiction` },
    { "@type": "ListItem", position: 3, name: "Last Kingdom Books in Order", item: `${SITE.baseUrl}/last-kingdom-books-in-order` },
  ],
};

const faqItems = [
  { q: "How many Last Kingdom books are there?", a: "There are 13 Last Kingdom novels, also known as the Saxon Stories or Saxon Chronicles. The first, The Last Kingdom, was published in 2004. The final book, War Lord, was published in 2020. Bernard Cornwell has also written one companion volume, Uhtred's Feast (2024), which mixes narrative pieces with Anglo-Saxon recipes." },
  { q: "Is the Last Kingdom series finished?", a: "Yes. Bernard Cornwell announced in March 2020 that War Lord would be the final novel in the series. He has confirmed that Uhtred's story is complete." },
  { q: "What is the correct reading order for the Last Kingdom books?", a: "Read them in publication order, which is also the chronological order of events. Unlike the Sharpe series, Cornwell did not write prequels or fill in earlier time periods after the fact, so the order is simple: start with The Last Kingdom and read through to War Lord." },
  { q: "Are the Last Kingdom books the same as the Saxon Stories?", a: "Yes. The series has been published under several names. In the United Kingdom it was originally called the Saxon Stories. It has also been marketed as the Warrior Chronicles and the Saxon Tales. After the Netflix adaptation became popular, the publisher rebranded the series as The Last Kingdom across most markets. The books are identical, only the series name differs." },
  { q: "Do I need to read the books if I have watched the Netflix series?", a: "The five seasons of the Netflix series cover roughly the first ten books, with significant condensation and some changes. The final three books, including the climactic Battle of Brunanburh, were partially adapted in the 2023 film Seven Kings Must Die but contain considerable material not shown on screen. Most readers who enjoyed the show find the books deeper and more rewarding." },
  { q: "Will there be more Last Kingdom books or TV episodes?", a: "No further novels are planned. Bernard Cornwell has confirmed Uhtred's story is complete. The Netflix series ended with Seven Kings Must Die in 2023 and has not been renewed." },
  { q: "Where does Uhtred fit in real history?", a: "Uhtred of Bebbanburg is fictional, but he is loosely inspired by a real Northumbrian nobleman of the same name. The historical events around him, including the reigns of Alfred the Great, Edward the Elder, and Aethelstan, the Viking invasions, and the major battles, are based on the Anglo-Saxon Chronicle and other historical sources. Cornwell adjusts dates and details for narrative purposes but the broad sweep is historically grounded." },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const LK_URL = "https://amzn.to/4y5Pmfu";

const aff = "text-burgundy-bright hover:text-gold transition underline underline-offset-2 decoration-burgundy-bright/40 hover:decoration-gold";
function AffLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="sponsored noopener" className={aff}>{children}</a>;
}

const books = [
  { n: 1, title: "The Last Kingdom", year: 2004, period: "Northumbria and Wessex, 866-878", hook: "A young Northumbrian noble named Uhtred is captured by Vikings, raised among them, and finds himself caught between two worlds as the Danes invade Saxon Wessex.", note: "Also the title of the Netflix series.", url: LK_URL },
  { n: 2, title: "The Pale Horseman", year: 2005, period: "Wessex, 878", hook: "Alfred is driven into hiding in the marshes of Athelney, and Uhtred must choose which side to fight for at the Battle of Edington.", url: "https://amzn.to/4fgrf6c" },
  { n: 3, title: "The Lords of the North", year: 2006, period: "Northumbria, 878-880", hook: "Uhtred returns north to settle scores and reclaim his birthright at Bebbanburg.", url: "https://amzn.to/4gRbPXd" },
  { n: 4, title: "Sword Song", year: 2007, period: "London and Wessex, 885", hook: "The battle for London brings Uhtred back into Alfred's service, against his will.", url: "https://amzn.to/4vjF5K8" },
  { n: 5, title: "The Burning Land", year: 2009, period: "Wessex and East Anglia, 893", hook: "A new Danish invasion tests Wessex's defences and Uhtred's loyalties.", url: "https://amzn.to/4vDJvMJ" },
  { n: 6, title: "Death of Kings", year: 2011, period: "Wessex, 899-902", hook: "Alfred is dying, and his son Edward must defend the throne against Danish challengers and Saxon rivals.", url: "https://amzn.to/49HYM6i" },
  { n: 7, title: "The Pagan Lord", year: 2013, period: "Mercia and Northumbria, 911", hook: "Uhtred makes another attempt on Bebbanburg as a new Danish war approaches.", url: "https://amzn.to/4vjFjRu" },
  { n: 8, title: "The Empty Throne", year: 2014, period: "Mercia, 911", hook: "The death of a ruler leaves Mercia leaderless, and Uhtred's daughter Stiorra plays a central role.", url: "https://amzn.to/4wnALKE" },
  { n: 9, title: "Warriors of the Storm", year: 2015, period: "Mercia and Ireland, 917", hook: "A new Norse threat comes from Ireland, led by a warrior calling himself a god.", url: "https://amzn.to/4f0lDvJ" },
  { n: 10, title: "The Flame Bearer", year: 2016, period: "Northumbria, 917-918", hook: "Uhtred returns to Bebbanburg for what may be his final reckoning with the fortress that has shaped his life.", url: "https://amzn.to/4vjFzQs" },
  { n: 11, title: "War of the Wolf", year: 2018, period: "Wessex and Northumbria, 920s", hook: "A new Norse threat tests Uhtred's grandson Aethelstan, and Uhtred must defend a fragile peace.", url: "https://amzn.to/4wrmHzY" },
  { n: 12, title: "Sword of Kings", year: 2019, period: "Wessex, 920s", hook: "A succession crisis erupts in Wessex, and Uhtred is drawn into the struggle to keep Aethelstan on the path to the throne.", url: "https://amzn.to/3SG59Bt" },
  { n: 13, title: "War Lord", year: 2020, period: "Northern England, 937", hook: "The Battle of Brunanburh, the climactic conflict that established Aethelstan as the first king of all England, and Uhtred's last great fight.", note: "The final book in the series.", url: "https://amzn.to/4y8aguv" },
];

const booksJsonLd = {
  "@context": "https://schema.org",
  "@graph": books.map((b) => ({
    "@type": "Book",
    name: b.title,
    author: { "@type": "Person", name: "Bernard Cornwell" },
    datePublished: String(b.year),
    position: b.n,
    isPartOf: { "@type": "BookSeries", name: "The Last Kingdom" },
  })),
};

export default function LastKingdomBooksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={booksJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/fiction" className="hover:text-gold transition">The Napoleonic Archive &middot; Fiction</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Last Kingdom Books in Order
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            Bernard Cornwell&rsquo;s Saxon Stories &middot; Complete Reading Guide
          </p>
        </div>
      </section>

      {/* 1. ABOVE-THE-FOLD ANSWER */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            <strong>There are 13 Last Kingdom novels</strong> by <Link href="/bernard-cornwell" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Bernard Cornwell</Link>, also known as the Saxon Stories or Saxon Chronicles. The series follows Uhtred of Bebbanburg, a Saxon nobleman raised by Vikings, through the wars that forged England in the ninth and tenth centuries. The first novel, <em>The Last Kingdom</em>, was published in 2004. The thirteenth and final novel, <em>War Lord</em>, was published in 2020. Cornwell has also written one companion book, <em>Uhtred&rsquo;s Feast</em> (2024).
          </p>
          <p>
            <strong>The books should be read in publication order.</strong> This is the only sensible reading order: publication order matches the chronological order of events, and each book builds on the one before. Unlike the Sharpe series, Cornwell did not write prequels or fill in earlier periods after the fact.
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-2 justify-center">
          {[
            { id: "reading-order", label: "Reading Order" },
            { id: "where-to-start", label: "Where to Start" },
            { id: "books-vs-tv", label: "Books vs Netflix" },
            { id: "companion", label: "Uhtred's Feast" },
            { id: "checklist", label: "Free Checklist" },
            { id: "faq", label: "FAQ" },
          ].map((l) => (
            <a key={l.id} href={`#${l.id}`} className="px-3 py-1.5 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition">{l.label}</a>
          ))}
        </nav>

        <div className="mt-8 text-center">
          <a href={LK_URL} target="_blank" rel="sponsored noopener" className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
            Start with The Last Kingdom on Amazon &rarr;
          </a>
        </div>
      </section>

      {/* 2. READING ORDER */}
      <section id="reading-order" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-4 section-title">Last Kingdom Books in Reading Order</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg mb-10">
            <p>Each book follows directly from the last, and key characters reappear throughout the series. The story spans roughly fifty years of Uhtred&rsquo;s life, from a boy taken captive by Vikings in 866 to an old warrior fighting for the throne of England a generation later.</p>
          </div>

          <div className="space-y-6">
            {books.map((b) => (
              <article key={b.n} className="card p-6 rounded-sm flex gap-5">
                <div className="font-display text-3xl text-gold/50 leading-none shrink-0 w-10 text-right">{b.n}</div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-1">
                    <AffLink href={b.url}>{b.title}</AffLink>
                    <span className="text-parchment/70 text-sm ml-2">({b.year})</span>
                  </h3>
                  <div className="text-xs uppercase tracking-widest text-gold/60 mb-2">{b.period}</div>
                  <p className="text-parchment/95 font-serif text-sm leading-relaxed">{b.hook}</p>
                  {b.note && <p className="text-xs text-parchment/60 font-serif italic mt-1">{b.note}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE TO START */}
      <section id="where-to-start" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Where Should You Start with the Last Kingdom?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Start with <strong><AffLink href={LK_URL}>The Last Kingdom</AffLink></strong>, the first novel. Unlike the <Link href="/fiction" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Sharpe series</Link>, where Cornwell wrote prequels and fans debate chronological versus publication order, the Saxon Stories have one clear starting point.</p>
          <p>If you have watched the Netflix series and are wondering whether to read the books, the answer is yes: the books cover the same story with significantly more depth, additional characters, and several plotlines that the show condensed or dropped. The books also continue past the show&rsquo;s ending: the Netflix series adapts roughly books 1 to 10, and books 11 to 13 cover events not seen on screen.</p>
        </div>
      </section>

      {/* 4. BOOKS VS NETFLIX */}
      <section id="books-vs-tv" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Books and the Netflix Series</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p><em>The Last Kingdom</em> aired on BBC Two and Netflix from 2015 to 2022, running for five seasons starring Alexander Dreymon as Uhtred. The series concluded with a feature-length film, <em>Seven Kings Must Die</em>, released on Netflix in 2023.</p>
            <p><span className="text-gold-pale">What the show covers:</span> the five seasons broadly adapt the first ten novels, condensing storylines and combining characters to fit the television format. <em>Seven Kings Must Die</em> draws on elements of the final three books, particularly the Battle of Brunanburh from <em>War Lord</em>.</p>
            <p><span className="text-gold-pale">What the show changes or omits:</span> several major characters from the books appear briefly or not at all on screen. Some plotlines are simplified. The pacing of Uhtred&rsquo;s pursuit of Bebbanburg differs significantly between the two versions. Readers who enjoyed the show typically report being surprised by how much more is in the books, particularly in the middle stretch of the series.</p>
            <p><span className="text-gold-pale">What the show adds:</span> the television adaptation invented several minor characters and storylines, particularly involving Brida, whose arc on screen diverges from the books. Bernard Cornwell himself made a cameo appearance in season three.</p>
          </div>
        </div>
      </section>

      {/* 5. COMPANION VOLUME */}
      <section id="companion" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Uhtred&rsquo;s Feast (2024)</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>In 2024, Bernard Cornwell published <em><AffLink href="https://amzn.to/3QWs7Ud">Uhtred&rsquo;s Feast</AffLink></em>, a companion volume to the Saxon Stories. It is part cookbook and part collection of short narrative pieces set in the world of the novels, with recipes inspired by Anglo-Saxon and Viking food. It is not essential reading for the main series, but Last Kingdom fans who want to spend more time in Uhtred&rsquo;s world will find it enjoyable.</p>
        </div>
        <div className="mt-6">
          <a href="https://amzn.to/3QWs7Ud" target="_blank" rel="sponsored noopener" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            Buy Uhtred&rsquo;s Feast on Amazon &rarr;
          </a>
        </div>
      </section>

      {/* 6. PDF CHECKLIST */}
      <section id="checklist" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4">Free Last Kingdom Reading Checklist (PDF Download)</h2>
          <p className="text-parchment font-serif max-w-xl mx-auto mb-6">Print or download a free checklist of all 13 Last Kingdom novels in reading order, plus the Uhtred&rsquo;s Feast companion volume, with checkboxes to track your progress.</p>
          <a href="/downloads/last-kingdom-reading-checklist.pdf" target="_blank" rel="noopener" className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
            Download the free Last Kingdom reading checklist (PDF) &rarr;
          </a>
          <p className="text-xs text-parchment/60 mt-3">Free to print and share.</p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="card rounded-sm">
                <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-gold font-display text-sm mt-0.5 shrink-0" aria-hidden="true">Q</span>
                  <span className="font-display text-lg text-gold-pale tracking-wide leading-snug">{q}</span>
                </summary>
                <div className="px-5 pb-5 pt-2 border-t border-gold/15"><p className="text-parchment leading-relaxed font-serif">{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELATED CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: "/bernard-cornwell", title: "Bernard Cornwell", desc: "Complete author guide and bibliography." },
            { href: "/fiction", title: "Sharpe Books in Order", desc: "The complete reading guide to all 24 Sharpe novels." },
            { href: "/fiction/characters", title: "Sharpe Character Guide", desc: "150+ characters with the searchable database." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
              <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{c.title}</div>
              <p className="text-parchment/85 font-serif text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. AFFILIATE DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-6 py-6 text-center">
        <p className="text-xs uppercase tracking-widest text-parchment/85">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="text-[10px] text-parchment/50 mt-2">
          Page last updated: July 2026
        </p>
      </section>
    </>
  );
}
