import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Bernard Cornwell: Complete Author Guide & Books in Order",
  description:
    "Bernard Cornwell, author of Sharpe and The Last Kingdom. Full biography, complete bibliography across all series, and where to start reading.",
  path: "/bernard-cornwell",
  keywords: [
    "Bernard Cornwell",
    "Bernard Cornwell books",
    "Bernard Cornwell books in order",
    "Bernard Cornwell Sharpe",
    "Bernard Cornwell author",
    "Bernard Cornwell biography",
    "Bernard Cornwell new book",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bernard Cornwell",
  birthDate: "1944",
  birthPlace: { "@type": "Place", name: "London, England" },
  occupation: "Novelist",
  nationality: "British",
  sameAs: [
    "https://en.wikipedia.org/wiki/Bernard_Cornwell",
    "https://www.bernardcornwell.net/",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "People", item: `${SITE.baseUrl}/people` },
    { "@type": "ListItem", position: 3, name: "Bernard Cornwell", item: `${SITE.baseUrl}/bernard-cornwell` },
  ],
};

const faqItems = [
  { q: "How many books has Bernard Cornwell written?", a: "More than 60 novels and one work of non-fiction. His best-known series are Sharpe (24 novels and 3 short stories), The Last Kingdom / Saxon Stories (13 novels), the Warlord Chronicles (3 novels), the Grail Quest (4 novels), and the Starbuck Chronicles (4 novels). He has also written several standalone novels including Azincourt, Stonehenge, and Fools and Mortals." },
  { q: "What is Bernard Cornwell's most famous book?", a: "His most famous individual book is probably The Last Kingdom (2004), the first of the Saxon Stories, largely because of the Netflix adaptation. His most famous series is the Sharpe series, which has sold over 20 million copies worldwide." },
  { q: "Is the Sharpe series finished?", a: "Possibly. Bernard Cornwell has said he suspects Sharpe's Storm (2025) may be the final Sharpe novel, though he has not ruled out future books. He has indicated his next two writing projects will be in other series." },
  { q: "Will Bernard Cornwell finish the Starbuck Chronicles?", a: "He has said for many years that he intends to, but no further Starbuck books have been published since The Bloody Ground in 1996. As of 2026 there is no announced publication date for a fifth Starbuck novel." },
  { q: "What order should I read Bernard Cornwell's books in?", a: "Each series can be read independently of the others. Within a series, most readers should follow publication order. The exception is the Sharpe series, where Cornwell himself recommends chronological order. There is no recommended order for reading the series themselves." },
  { q: "Where was Bernard Cornwell born?", a: "London, in 1944. He was given up for adoption shortly after birth and raised in Thundersley, Essex." },
  { q: "Does Bernard Cornwell still write?", a: "Yes. Sharpe's Storm was published in October 2025, and he has indicated he has further projects planned in other series." },
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

const sharpeListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The Sharpe Series by Bernard Cornwell",
  numberOfItems: 24,
  itemListElement: [
    "Sharpe's Tiger (1997)", "Sharpe's Triumph (1998)", "Sharpe's Fortress (1999)",
    "Sharpe's Trafalgar (2000)", "Sharpe's Prey (2001)", "Sharpe's Rifles (1988)",
    "Sharpe's Havoc (2003)", "Sharpe's Eagle (1981)", "Sharpe's Gold (1981)",
    "Sharpe's Escape (2004)", "Sharpe's Fury (2006)", "Sharpe's Battle (1995)",
    "Sharpe's Company (1982)", "Sharpe's Sword (1983)", "Sharpe's Enemy (1984)",
    "Sharpe's Honour (1985)", "Sharpe's Regiment (1986)", "Sharpe's Siege (1987)",
    "Sharpe's Revenge (1989)", "Sharpe's Waterloo (1990)", "Sharpe's Devil (1992)",
    "Sharpe's Assassin (2021)", "Sharpe's Command (2023)", "Sharpe's Storm (2025)",
  ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
};

const lastKingdomListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The Last Kingdom Series by Bernard Cornwell",
  numberOfItems: 13,
  itemListElement: [
    "The Last Kingdom (2004)", "The Pale Horseman (2005)", "The Lords of the North (2006)",
    "Sword Song (2007)", "The Burning Land (2009)", "Death of Kings (2011)",
    "The Pagan Lord (2013)", "The Empty Throne (2014)", "Warriors of the Storm (2015)",
    "The Flame Bearer (2016)", "War of the Wolf (2018)", "Sword of Kings (2019)", "War Lord (2020)",
  ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
};

const NAV_LINKS = [
  { id: "biography", label: "Biography" },
  { id: "sharpe", label: "Sharpe" },
  { id: "last-kingdom", label: "Last Kingdom" },
  { id: "warlord", label: "Warlord Chronicles" },
  { id: "grail", label: "Grail Quest" },
  { id: "starbuck", label: "Starbuck Chronicles" },
  { id: "standalones", label: "Standalones" },
  { id: "non-fiction", label: "Non-Fiction" },
  { id: "tv", label: "TV Adaptations" },
  { id: "where-to-start", label: "Where to Start" },
  { id: "faq", label: "FAQ" },
];

const aff = "text-burgundy-bright hover:text-gold transition underline underline-offset-2 decoration-burgundy-bright/40 hover:decoration-gold";

function AffLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="sponsored noopener" aria-label={`Buy ${typeof children === "string" ? children : ""} on Amazon (affiliate link)`} className={aff}>{children}</a>
  );
}

const LK_CTA_URL = "https://amzn.to/4y5Pmfu";
const AZ_CTA_URL = "https://www.amazon.co.uk/Azincourt-Bernard-Cornwell/dp/0007271220?tag=tomstansfi036-21";
const WL_CTA_URL = "https://amzn.to/4tjc80D";

export default function BernardCornwellPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={sharpeListJsonLd} />
      <JsonLd data={lastKingdomListJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/people" className="hover:text-gold transition">The Napoleonic Archive &middot; People</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Bernard Cornwell
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Complete Author Guide
          </p>
        </div>
      </section>

      {/* 1. ABOVE-THE-FOLD ANSWER BLOCK */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            <span className="text-gold-pale font-display uppercase tracking-wider">Bernard Cornwell</span> is a British historical novelist best known for the <Link href="/fiction" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Sharpe</Link> series, set during the <Link href="/napoleonic-wars" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Napoleonic Wars</Link>, and <strong>The Last Kingdom</strong> series (also known as the Saxon Stories), set during the Viking age. Born in London in 1944, he has written more than 60 novels and is widely considered one of the most prolific and successful writers of military historical fiction working today.
          </p>
          <p>
            His most recent novel, <em>Sharpe&rsquo;s Storm</em>, was published in October 2025. He has suggested it may be the final book in the Sharpe series, though he has not ruled out future Sharpe novels.
          </p>
        </div>
        <nav className="mt-10 flex flex-wrap gap-2 justify-center">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="px-3 py-1.5 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition">
              {l.label}
            </a>
          ))}
        </nav>
      </section>

      {/* 2. BIOGRAPHY */}
      <section id="biography" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Biography</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Bernard Cornwell was born in London in 1944, the child of a Canadian airman and a British member of the Women&rsquo;s Auxiliary Air Force. He was given up for adoption shortly after birth and raised in Thundersley, Essex by Joe and Marjorie Wiggins, who belonged to a small fundamentalist Christian sect called the Peculiar People. Cornwell has spoken openly about the strict, unhappy household this produced, and about the long road that eventually led him to trace and meet his biological parents in adulthood.</p>
            <p>He read theology at London University, then taught briefly before joining BBC Television as a researcher in the late 1960s. Over the next decade he worked his way up to become Head of Current Affairs Television for BBC Northern Ireland, based in Belfast during the height of the Troubles. It was there, in the early 1980s, that he met Judy, an American visitor, and fell in love.</p>
            <p>Judy was unable to leave the United States for family reasons, so Cornwell moved to America to be with her. Unable to get a green card and unable to take a conventional job, he began to write. The first novel he produced was <em>Sharpe&rsquo;s Eagle</em>, published in 1981. It launched what would become a 40-year career and the creation of one of the most enduring characters in modern historical fiction.</p>
            <p>Cornwell was appointed OBE in 2006 for services to literature. He divides his time between Cape Cod in Massachusetts and Charleston, South Carolina, and remains active as a writer.</p>
          </div>
        </div>
      </section>

      {/* 3. THE SHARPE SERIES */}
      <section id="sharpe" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Sharpe Series (1981 to present)</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p><strong>24 novels and 3 short stories.</strong> Sharpe is the work Cornwell is most associated with: the story of <Link href="/fiction/characters/sharpe" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Richard Sharpe</Link>, a soldier born in poverty who rises through the ranks of the British Army during the Napoleonic Wars. The series begins with Sharpe as a 16-year-old private at the siege of Seringapatam in 1799 and ends with him as a retired officer in Chile in 1821.</p>
          <p>The first novel, <em>Sharpe&rsquo;s Eagle</em>, was published in 1981. Cornwell continued adding to the series across four decades, eventually writing prequels set earlier in Sharpe&rsquo;s career and filling in gaps in the chronology. The most recent novel, <em>Sharpe&rsquo;s Storm</em>, was published in October 2025 and may be the final book in the series.</p>
          <p>The series was adapted into a long-running television series starring Sean Bean, which aired from 1993 to 2008.</p>
        </div>
        <div className="mt-8">
          <Link href="/fiction" className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
            Read the complete Sharpe books in order &rarr;
          </Link>
        </div>
        <div className="mt-4">
          <a href="https://amzn.to/4sXbzbX" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            Start with Sharpe&rsquo;s Eagle on Amazon &rarr;
          </a>
        </div>
      </section>

      {/* 4. THE LAST KINGDOM */}
      <section id="last-kingdom" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Last Kingdom (The Saxon Stories)</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p><strong>13 novels, complete series.</strong> Published between 2004 and 2020, this is Cornwell&rsquo;s epic of the birth of England. Set in the ninth and tenth centuries, it follows Uhtred of Bebbanburg, a Northumbrian noble&rsquo;s son captured and raised by Danish Vikings, who finds himself caught between two cultures as Alfred the Great struggles to unite the Saxon kingdoms against Danish invasion.</p>
            <p>Cornwell announced in 2020 that <em>War Lord</em>, the thirteenth book, would be the final novel in the series. He has since returned to the world with a companion volume, <em>Uhtred&rsquo;s Feast</em> (2024), mixing Anglo-Saxon recipes with short narrative pieces.</p>
            <p>The series was adapted by Netflix and the BBC as <em>The Last Kingdom</em>, starring Alexander Dreymon. The show ran for five seasons (2015 to 2022) and concluded with a feature-length film, <em>Seven Kings Must Die</em> (2023).</p>
          </div>
          <div className="mt-8">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-widest mb-4">Bibliography (publication order)</h3>
            <ol className="text-parchment font-serif space-y-1 text-sm list-decimal pl-6">
              <li><AffLink href={LK_CTA_URL}>The Last Kingdom</AffLink> (2004)</li>
              <li><AffLink href="https://amzn.to/4fgrf6c">The Pale Horseman</AffLink> (2005)</li>
              <li><AffLink href="https://amzn.to/4gRbPXd">The Lords of the North</AffLink> (2006)</li>
              <li><AffLink href="https://amzn.to/4vjF5K8">Sword Song</AffLink> (2007)</li>
              <li><AffLink href="https://amzn.to/4vDJvMJ">The Burning Land</AffLink> (2009)</li>
              <li><AffLink href="https://amzn.to/49HYM6i">Death of Kings</AffLink> (2011)</li>
              <li><AffLink href="https://amzn.to/4vjFjRu">The Pagan Lord</AffLink> (2013)</li>
              <li><AffLink href="https://amzn.to/4wnALKE">The Empty Throne</AffLink> (2014)</li>
              <li><AffLink href="https://amzn.to/4f0lDvJ">Warriors of the Storm</AffLink> (2015)</li>
              <li><AffLink href="https://amzn.to/4vjFzQs">The Flame Bearer</AffLink> (2016)</li>
              <li><AffLink href="https://amzn.to/4wrmHzY">War of the Wolf</AffLink> (2018)</li>
              <li><AffLink href="https://amzn.to/3SG59Bt">Sword of Kings</AffLink> (2019)</li>
              <li><AffLink href="https://amzn.to/4y8aguv">War Lord</AffLink> (2020)</li>
            </ol>
            <p className="text-parchment/85 font-serif text-sm mt-2 italic">Companion: <AffLink href="https://amzn.to/3QWs7Ud">Uhtred&rsquo;s Feast</AffLink> (2024)</p>
          </div>
          <p className="text-parchment/85 font-serif text-sm mt-4">A <Link href="/last-kingdom-books-in-order#checklist" className="text-gold-pale underline underline-offset-2 hover:text-gold transition">free printable reading checklist (PDF)</Link> is available on the dedicated reading guide.</p>
          <div className="mt-4">
            <Link href="/last-kingdom-books-in-order" className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
              Read the complete Last Kingdom books in order &rarr;
            </Link>
          </div>
          <div className="mt-4">
            <a href={LK_CTA_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Start with The Last Kingdom on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 5. WARLORD CHRONICLES */}
      <section id="warlord" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Warlord Chronicles (Arthur Trilogy)</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p><strong>3 novels, complete trilogy.</strong> Cornwell&rsquo;s retelling of the King Arthur legend, set in a brutal, plausible post-Roman Britain. Often cited by critics as some of his finest work. Told from the perspective of Derfel Cadarn, a warrior loyal to Arthur, the trilogy strips away the medieval romance and presents Arthur as a Dark Age warlord fighting to hold a collapsing Britain together against the Saxon invasion.</p>
        </div>
        <ol className="text-parchment font-serif space-y-1 text-sm list-decimal pl-6 mt-4">
          <li><AffLink href="https://amzn.to/4vvik6h">The Winter King</AffLink> (1995)</li>
          <li><AffLink href="https://amzn.to/49FAPwo">Enemy of God</AffLink> (1996)</li>
          <li><AffLink href="https://amzn.to/4xa8U1I">Excalibur</AffLink> (1997)</li>
        </ol>
        <p className="text-parchment/85 font-serif text-sm mt-2 italic">A television adaptation, The Winter King, aired on MGM+ in 2023 but was not renewed for a second season.</p>
      </section>

      {/* 6. GRAIL QUEST */}
      <section id="grail" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Grail Quest</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p><strong>4 novels.</strong> A Hundred Years War series following Thomas of Hookton, a young English archer caught up in the search for the Holy Grail amid the great battles of fourteenth-century France.</p>
          </div>
          <ol className="text-parchment font-serif space-y-1 text-sm list-decimal pl-6 mt-4">
            <li><AffLink href="https://amzn.to/49HNOh5">Harlequin</AffLink> (2000, published in the US as <em>The Archer&rsquo;s Tale</em>)</li>
            <li><AffLink href="https://amzn.to/4uK2uVo">Vagabond</AffLink> (2002)</li>
            <li><AffLink href="https://amzn.to/4x00KZE">Heretic</AffLink> (2003)</li>
            <li><AffLink href="https://amzn.to/49HZZdQ">1356</AffLink> (2012)</li>
          </ol>
          <p className="text-parchment/85 font-serif text-sm mt-2 italic"><em>1356</em>, set at the Battle of Poitiers, was published nine years after <em>Heretic</em> and is sometimes treated as a standalone, but it continues Thomas of Hookton&rsquo;s story and is generally considered part of the series.</p>
        </div>
      </section>

      {/* 7. STARBUCK CHRONICLES */}
      <section id="starbuck" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Starbuck Chronicles</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p><strong>4 novels, unfinished.</strong> Cornwell&rsquo;s American Civil War series, following Nathaniel Starbuck, a Boston-born son of an abolitionist preacher who finds himself fighting for the Confederacy.</p>
        </div>
        <ol className="text-parchment font-serif space-y-1 text-sm list-decimal pl-6 mt-4">
          <li><AffLink href="https://amzn.to/4e2sIev">Rebel</AffLink> (1993)</li>
          <li><AffLink href="https://amzn.to/4ufJPzK">Copperhead</AffLink> (1994)</li>
          <li><AffLink href="https://amzn.to/4uSIK27">Battle Flag</AffLink> (1995)</li>
          <li><AffLink href="https://amzn.to/4ae63ed">The Bloody Ground</AffLink> (1996)</li>
        </ol>
        <p className="text-parchment/85 font-serif text-sm mt-2 italic">Cornwell has said for many years that he intends to return to Starbuck and complete the series, but no further books have been published. This is the most-asked-about gap in his bibliography.</p>
      </section>

      {/* 8. STANDALONES */}
      <section id="standalones" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Standalone Novels</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Outside his major series, Cornwell has written a number of standalone historical novels covering periods from the Bronze Age to Shakespearean London. The most widely read include:</p>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong><AffLink href="https://amzn.to/4eopUda">Redcoat</AffLink></strong> (1987): the American Revolution, set during the British occupation of Philadelphia.</li>
              <li><strong><AffLink href="https://amzn.to/4vuv4dt">Stonehenge</AffLink></strong> (1999): Bronze Age Britain and the building of the monument.</li>
              <li><strong><AffLink href="https://amzn.to/4e9eysj">Gallows Thief</AffLink></strong> (2001): a murder mystery set in Regency London.</li>
              <li><strong><AffLink href={AZ_CTA_URL}>Azincourt</AffLink></strong> (2008, published in the US as <em>Agincourt</em>): the 1415 battle, told through the eyes of an English archer.</li>
              <li><strong><AffLink href="https://amzn.to/4ur8S36">Fools and Mortals</AffLink></strong> (2017): Elizabethan London, told from the perspective of William Shakespeare&rsquo;s younger brother Richard, an actor in the early theatre.</li>
            </ul>
          </div>
          <div className="mt-6">
            <a href={AZ_CTA_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Azincourt on Amazon &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 9. NON-FICTION */}
      <section id="non-fiction" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Non-Fiction</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Cornwell has published one full-length work of non-fiction:</p>
          <p><strong><AffLink href={WL_CTA_URL}>Waterloo: The History of Four Days, Three Armies, and Three Battles</AffLink></strong> (2014): a narrative history of the 1815 campaign, including the battles of Quatre Bras, Ligny, and Waterloo itself. Drawing on his decades of research for the Sharpe series, this is widely regarded as one of the most readable single-volume accounts of the battle for general readers.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={WL_CTA_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            Buy Waterloo on Amazon &rarr;
          </a>
          <Link href="/battles/waterloo" className="inline-block px-5 py-2 border border-gold/40 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition">
            Read about the Battle of Waterloo &rarr;
          </Link>
        </div>
      </section>

      {/* 10. TV AND FILM */}
      <section id="tv" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV and Film Adaptations</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Several of Cornwell&rsquo;s novels and series have been adapted for television:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>Sharpe</strong> (ITV, 1993 to 2008): sixteen feature-length episodes starring Sean Bean as Richard Sharpe. Adapted from many of the novels, with several original scripts.</li>
              <li><strong>The Last Kingdom</strong> (BBC Two and Netflix, 2015 to 2022): five seasons, starring Alexander Dreymon as Uhtred of Bebbanburg. Concluded with the feature-length film <em>Seven Kings Must Die</em> on Netflix in 2023.</li>
              <li><strong>The Winter King</strong> (MGM+, 2023): one season, based on the first novel of the Warlord Chronicles. Not renewed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. WHERE TO START */}
      <section id="where-to-start" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Where Should You Start with Bernard Cornwell?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Cornwell&rsquo;s catalogue is intimidatingly large, but the entry points are clearer than they look.</p>
          <p><span className="text-gold-pale">If you want military action and a single charismatic hero:</span> start with the <Link href="/fiction" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Sharpe series</Link>. Either <em>Sharpe&rsquo;s Eagle</em> (the first novel published, and still one of the best) or <em>Sharpe&rsquo;s Tiger</em> (the first in chronological order, set in India) work as starting points.</p>
          <p><span className="text-gold-pale">If you want a sprawling epic about the making of a nation:</span> start with <em><AffLink href={LK_CTA_URL}>The Last Kingdom</AffLink></em>, the first book of the Saxon Stories. If you have watched the Netflix series, the books cover the same story with significantly more depth.</p>
          <p><span className="text-gold-pale">If you want Cornwell at his most literary:</span> start with <em><AffLink href="https://amzn.to/4vvik6h">The Winter King</AffLink></em>, the first of the Warlord Chronicles. Many readers and critics consider these his finest novels.</p>
          <p><span className="text-gold-pale">If you want to test the waters with a single book:</span> try <em><AffLink href={AZ_CTA_URL}>Azincourt</AffLink></em>. It is a standalone, it is one of his best, and it gives you a full sense of his style in around 400 pages.</p>
        </div>
      </section>

      {/* 12. FAQ */}
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

      {/* 13. RELATED CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { href: "/fiction", title: "Sharpe Books in Order", desc: "The complete reading guide to all 24 novels." },
            { href: "/fiction/characters", title: "Sharpe Character Guide", desc: "150+ characters with the searchable database." },
            { href: "/battles/waterloo", title: "The Battle of Waterloo", desc: "The battle that ended the Empire." },
            { href: "/regiments/95th-rifles", title: "The 95th Rifles", desc: "Sharpe's regiment. Green jackets and Baker rifles." },
            { href: "/battles/peninsular-war", title: "The Peninsular War", desc: "Six years that broke Napoleon." },
            { href: "/napoleonic-wars", title: "The Napoleonic Wars", desc: "The conflict that shaped the modern world." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
              <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{c.title}</div>
              <p className="text-parchment/85 font-serif text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 14. AFFILIATE DISCLAIMER */}
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
