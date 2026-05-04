import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Peninsular War 1808-1814",
  description: "The Peninsular War 1808-1814: Napoleon's Spanish ulcer, Wellington's campaign, the guerrilla war, and the six years that broke the French Empire.",
  path: "/battles/peninsular-war",
  keywords: ["Peninsular War", "Wellington Peninsular War", "Sharpe Peninsular War", "Spanish ulcer", "Napoleonic Wars Spain"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Peninsular War 1808-1814: Six Years That Broke Napoleon",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/peninsular-war`, inLanguage: "en-GB",
};

export default function PeninsularWarPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Peninsular War</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">1808&ndash;1814 &middot; Six Years That Broke Napoleon</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Duration", value: "1808-1814" },
              { label: "Theatre", value: "Spain & Portugal" },
              { label: "Result", value: "Allied victory" },
              { label: "Significance", value: "Napoleon's 'Spanish ulcer'" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[250px] md:h-[400px]">
        <img
          src="/Peninsula.png"
          alt="British and French forces clashing in the Peninsula"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Was the Peninsular War?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>In 1808, Napoleon invaded Spain and Portugal, deposing the Spanish Bourbons and placing his brother Joseph on the Spanish throne. The Spanish people rose in revolt. Britain, already at war with France, sent an army to Portugal under Sir Arthur Wellesley. What followed was six years of brutal, attritional warfare across the Iberian Peninsula: the longest continuous campaign of the Napoleonic Wars.</p>
          <p>The war combined three distinct conflicts: a conventional campaign between the British and French armies, a savage guerrilla war waged by Spanish irregulars, and a Portuguese national resistance. Together they created the strategic drain that Napoleon himself called his &ldquo;Spanish ulcer.&rdquo;</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered to Napoleon</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>At any given time during the Peninsular War, approximately 300,000 French troops were tied down in Spain and Portugal. These were troops Napoleon desperately needed elsewhere: in Germany, in Russia, in the defence of France itself. The Peninsula became a running sore that never healed, draining French manpower, money and morale year after year.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Guerrilla War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Spanish guerrillas, irregular fighters operating in the mountains and countryside, made French occupation impossible. The word &ldquo;guerrilla&rdquo; (little war) entered the English language from this conflict. Guerrilla bands ambushed supply convoys, assassinated French couriers, cut communications, and made every road in Spain dangerous for French soldiers. The guerrillas could not defeat the French in battle, but they could make the occupation ungovernable.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Wellington&rsquo;s Campaign</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Wellington&rsquo;s genius in the Peninsula was logistical as much as tactical. He built the Lines of Torres Vedras, a vast fortified barrier protecting Lisbon, and used the Portuguese countryside to deny the French food. He advanced methodically, securing his supply lines, never risking a battle he could not win, and wearing down the French through attrition and manoeuvre.</p>
            <p>The great sieges of Ciudad Rodrigo and <Link href="/battles/badajoz" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Badajoz</Link> opened the road into Spain. The victory at <Link href="/battles/salamanca" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Salamanca</Link> broke the French hold on central Spain. Vitoria in 1813 expelled Joseph from Madrid for good.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Key Battles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Vimeiro (1808)", href: "/battles#battle-vimeiro" },
            { name: "Corunna (1809)", href: "/battles/corunna" },
            { name: "Talavera (1809)", href: "/battles#battle-talavera" },
            { name: "Ciudad Rodrigo (1812)", href: "/battles#battle-ciudad-rodrigo" },
            { name: "Badajoz (1812)", href: "/battles/badajoz" },
            { name: "Salamanca (1812)", href: "/battles/salamanca" },
            { name: "Vitoria (1813)", href: "/battles#battle-vitoria" },
            { name: "Toulouse (1814)", href: "/battles#battle-toulouse" },
          ].map((b) => (
            <Link key={b.name} href={b.href} className="card p-4 rounded-sm block hover:border-gold/60 transition">
              <span className="font-display text-gold-pale uppercase tracking-wider text-sm">{b.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The End</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>In 1813, Wellington crossed the Pyrenees and invaded France itself. The battle of Toulouse on 10 April 1814 was the Peninsular veterans&rsquo; final fight, fought four days after Napoleon&rsquo;s abdication. Six years of war in Iberia were over. The army that emerged from the Peninsula was the most experienced and battle-hardened in Europe, and it would fight again at <Link href="/battles/waterloo" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Waterloo</Link>.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">The Peninsular War is the heart of the Sharpe series. Books 6 through 20, from Sharpe&rsquo;s Rifles to Sharpe&rsquo;s Revenge, cover the entire campaign from the retreat to Corunna in 1809 to the invasion of France in 1814.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">All 24 Novels &rarr;</Link>
            <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Rifles &rarr;</a>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/4vyaCsL" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Wellington: The Iron Duke &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
