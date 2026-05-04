import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleonic Wars Book Reviews",
  description: "Honest reviews of the best history books on the Napoleonic era: Dalrymple, Chandler, Hibbert, Cornwell and more. Find the right book for your level.",
  path: "/resources/book-reviews",
  keywords: ["Napoleonic Wars books", "best Napoleonic history books", "Waterloo books", "Wellington biography", "Sharpe books"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Napoleonic Wars Book Reviews: The Best History Books on the Era",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/resources/book-reviews`,
  inLanguage: "en-GB",
};

interface Review {
  title: string;
  author: string;
  link: string;
  level: string;
  bestFor: string;
  review: string;
}

const reviews: Review[] = [
  {
    title: "The Anarchy",
    author: "William Dalrymple",
    link: "https://amzn.to/4vMBAgH",
    level: "Accessible",
    bestFor: "Anyone interested in the East India Company and British India",
    review:
      "Dalrymple tells the story of how a single trading company conquered a subcontinent. The Anarchy covers the East India Company from its origins to the eve of the Napoleonic period, making it essential context for understanding Wellington's Indian campaigns and the world Sharpe enters in the first three novels. Dalrymple writes with the pace of a thriller and the depth of a serious historian. He is particularly good on the Indian perspective, giving voice to the rulers and peoples who were conquered as well as the men who conquered them. The prose is vivid, the research immaculate, and the subject matter is directly relevant to The Napoleonic Archive's India section. If you read one book about how the British came to rule India, this should be it.",
  },
  {
    title: "The Campaigns of Napoleon",
    author: "David Chandler",
    link: "https://amzn.to/4vyf2QD",
    level: "Intermediate",
    bestFor: "Serious students of Napoleonic military history",
    review:
      "Chandler's masterwork is the single most comprehensive account of Napoleon's military career ever written. At over 1,100 pages it covers every campaign from Toulon to Waterloo with maps, orders of battle, and detailed tactical analysis. This is not light reading: it is a reference work that rewards repeated consultation. What makes it indispensable is Chandler's ability to explain both the strategic context and the tactical detail of each campaign. You understand why Napoleon made the decisions he made, what went right, and what went wrong. First published in 1966, it remains the standard work against which all subsequent Napoleonic military histories are measured. Essential for anyone who wants to understand the battles on this site in their full depth.",
  },
  {
    title: "Wellington: A Personal History",
    author: "Christopher Hibbert",
    link: "https://amzn.to/4vyaCsL",
    level: "Accessible",
    bestFor: "Readers wanting a complete Wellington biography",
    review:
      "Hibbert's biography is the most readable single-volume life of Wellington. It covers the full span from the Anglo-Irish childhood through India, the Peninsula, Waterloo, and the long political career that followed. Hibbert is particularly good on the personal Wellington: the cold exterior, the private warmth with close friends, the disastrous marriage, and the loneliness of supreme command. He writes clearly and without academic jargon, making this the ideal first Wellington biography. For Sharpe fans, the India and Peninsula chapters provide the real history behind the novels. For general readers, it is a compelling portrait of a man who was as complex as he was successful.",
  },
  {
    title: "Waterloo",
    author: "Bernard Cornwell",
    link: "https://amzn.to/4tjc80D",
    level: "Accessible",
    bestFor: "Anyone wanting to understand the Battle of Waterloo",
    review:
      "Cornwell brings the same narrative skill to non-fiction that makes his Sharpe novels irresistible. His account of Waterloo follows the battle hour by hour, from the overnight rain to the collapse of the Imperial Guard, with the novelist's eye for the telling detail and the human moment. This is not a strategic analysis in the Chandler mould: it is the battle as the men on the ground experienced it. Cornwell draws on eyewitness accounts, visits to the battlefield, and his deep knowledge of the period to produce a Waterloo that feels immediate and visceral. If you have read Sharpe's Waterloo and want to know what really happened, this is the book. If you have not read Sharpe, this will make you want to start.",
  },
  {
    title: "Recollections of Rifleman Harris",
    author: "Benjamin Harris (edited by Henry Curling)",
    link: "https://amzn.to/4elXalK",
    level: "Accessible",
    bestFor: "Sharpe fans and anyone interested in the common soldier's experience",
    review:
      "This is the memoir that Bernard Cornwell has called the best private-soldier account of the Napoleonic Wars. Harris, a shoemaker from Dorset who enlisted in the 95th Rifles, dictated his recollections to Captain Henry Curling after the war. The result is a short, vivid, entirely unpretentious account of what it was like to serve as a rifleman in the Peninsula. Harris writes about the retreat to Corunna, the hunger, the lice, the camaraderie, and the small details of army life that no officer would think to record. It is also available free online as a public domain text via Project Gutenberg. At under 200 pages it can be read in an afternoon, and it will change how you think about the Napoleonic Wars.",
  },
];

export default function BookReviewsPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/resources" className="hover:text-gold transition">The Napoleonic Archive &middot; Resources</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Book Reviews</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Honest reviews of the best history books on the Napoleonic era</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {reviews.map((r) => (
            <article key={r.title} className="card p-8 rounded-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                <div>
                  <h2 className="font-display text-2xl text-gold-pale uppercase tracking-wider">{r.title}</h2>
                  <div className="text-sm italic text-burgundy-bright mt-1">{r.author}</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-[10px] uppercase tracking-widest rounded-sm border border-gold/40 bg-gold/10 text-gold-pale">{r.level}</span>
                </div>
              </div>
              <p className="text-parchment leading-relaxed font-serif text-lg mb-4">{r.review}</p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gold/15">
                <p className="text-sm text-parchment/85 font-serif">
                  <span className="text-gold-pale uppercase text-xs tracking-widest mr-2">Best for</span>
                  {r.bestFor}
                </p>
                <a href={r.link} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-6 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal shrink-0">
                  Buy on Amazon &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/resources" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Resources</Link>
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Sharpe Novels</Link>
            <Link href="/stories/rifleman-harris" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Rifleman Harris</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center mt-6">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
