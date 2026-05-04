import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Vitoria 1813",
  description: "The Battle of Vitoria, 21 June 1813: Wellington's decisive victory that ended French rule in Spain, the captured treasure, and Sharpe's Honour.",
  path: "/battles/vitoria",
  keywords: ["Battle of Vitoria", "Vitoria 1813", "Wellington", "Peninsular War", "Joseph Bonaparte", "Sharpe's Honour"],
  type: "article",
});

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "The Battle of Vitoria, 21 June 1813", author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, mainEntityOfPage: `${SITE.baseUrl}/battles/vitoria`, inLanguage: "en-GB" };

export default function VitoriaPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Vitoria</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">21 June 1813 &middot; The Battle That Ended French Spain</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "Date", value: "21 Jun 1813" }, { label: "Location", value: "Basque country" }, { label: "Result", value: "Allied victory" }, { label: "Casualties", value: "~13,000 total" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>By the spring of 1813, Wellington had assembled the largest Allied army of the Peninsular War: approximately 78,000 men. Joseph Bonaparte, nominal King of Spain, held the main French field army of approximately 57,000 around the Basque city of Vitoria. Wellington planned a sweeping outflanking movement through the mountains that would cut Joseph&rsquo;s line of retreat to France.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Allied</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~78,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Wellington. British, Portuguese and Spanish divisions in four attacking columns.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">France</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~57,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under King Joseph Bonaparte and Marshal Jourdan. Spread across a wide front covering Vitoria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Wellington launched a coordinated four-column attack that struck the French position from multiple directions simultaneously. The French line, spread too thin, could not hold everywhere at once. By mid-afternoon the entire French position was collapsing.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Treasure</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The extraordinary aftermath of Vitoria set it apart from every other Peninsular battle. The retreating French abandoned their entire baggage train: Joseph Bonaparte&rsquo;s personal treasure, artwork looted from Spanish palaces, the French army&rsquo;s pay chest, carriages full of silver and jewellery, and the personal baggage of hundreds of officers.</p>
            <p>The British army fell upon the baggage train with as much enthusiasm as it had attacked the French army. Discipline collapsed as soldiers broke open chests of gold and silver. Wellington was furious: the pursuit of the fleeing French halted entirely as his army looted. He wrote in his famous dispatch that he had &ldquo;the scum of the earth&rdquo; for soldiers. Napoleon sacked Marshal Jourdan for the defeat.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~5,000</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Allied killed and wounded</div>
          </div>
          <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~8,000 + 151 guns</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed, wounded and guns captured</div>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Vitoria effectively ended French rule in Spain. Joseph Bonaparte fled across the Pyrenees and never returned. Within months Wellington had crossed into France itself. Beethoven composed his orchestral piece &ldquo;Wellington&rsquo;s Victory&rdquo; to celebrate the battle, a work famous for being simultaneously very popular and very bad.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">Sharpe&rsquo;s Honour is set at Vitoria. Sharpe dies (officially) on the morning of the battle, framed by Major Ducos and the Inquisition. The battle itself provides the backdrop to one of the most complex plots in the series.</p>
          <a href="https://amzn.to/3OJTLmk" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Honour &rarr;</a>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/battles/peninsular-war" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Peninsular War</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center mt-6">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
