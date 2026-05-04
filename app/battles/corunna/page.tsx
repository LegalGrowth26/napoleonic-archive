import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Corunna 1809",
  description: "The Battle of Corunna, 16 January 1809: the retreat through Galicia, the death of Sir John Moore, and the embarkation. The retreat that became a legend.",
  path: "/battles/corunna",
  keywords: ["Battle of Corunna", "retreat to Corunna", "Sir John Moore", "Peninsular War 1809", "Sharpe's Rifles"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Battle of Corunna, 16 January 1809",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/corunna`, inLanguage: "en-GB",
};

export default function CorunnaPage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Corunna</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">16 January 1809 &middot; The Retreat That Became a Legend</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "16 Jan 1809" },
              { label: "Location", value: "Galicia, Spain" },
              { label: "Result", value: "British victory" },
              { label: "Casualties", value: "~800 British" },
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
          src="/retreat-british.png"
          alt="British troops retreating through winter mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>In the autumn of 1808, Sir John Moore led a British army of approximately 30,000 men into Spain to support the Spanish uprising against Napoleon. When Napoleon himself arrived in Spain with massive reinforcements and smashed the Spanish armies, Moore found himself isolated deep in enemy territory. He had no choice but to retreat to the coast, to the port of Corunna (La Coru&ntilde;a) in Galicia, where the Royal Navy could evacuate him.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Retreat</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The retreat to Corunna was one of the most harrowing episodes of the Napoleonic Wars. Moore&rsquo;s army marched through the mountains of Galicia in the depths of winter, pursued by Marshal Soult. The roads were rivers of ice. Men collapsed from exhaustion and cold. Discipline broke down: soldiers broke into wine stores and drank themselves to death. Women and children with the army died by the roadside.</p>
            <p>Benjamin Harris of the 95th Rifles left the most vivid account of the retreat. He describes the blistered feet, the raw oxhide tied around ruined shoes, the bodies in the snow, and the French dragoons picking off stragglers. It is one of the most powerful eyewitness accounts in the memoir literature of the period.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>On 16 January 1809, with the transport ships finally in the harbour, Moore turned his army to fight. The battle was a rearguard action fought on the heights above Corunna to cover the embarkation of the army. The British infantry, despite their exhaustion, fought with discipline and determination. Soult&rsquo;s attacks were repulsed across the line. It was a clear tactical victory.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Death of Moore</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sir John Moore was struck by a cannonball on the ridge above the port during the battle. The ball shattered his left shoulder and ribs. He was carried to the rear and died that evening. His last words, reported by his aide-de-camp Captain Stanhope, included the wish that his country would do him justice.</p>
            <p>Moore was buried at midnight on the ramparts of Corunna, wrapped in his military cloak. Charles Wolfe&rsquo;s poem &ldquo;The Burial of Sir John Moore after Corunna&rdquo; (1817), which begins &ldquo;Not a drum was heard, not a funeral note,&rdquo; became one of the most famous poems of the Romantic period and ensured that Moore&rsquo;s death passed into British legend.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Embarkation</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The army successfully embarked during the night and the following day. Approximately 26,000 men were evacuated to Britain. The retreat had cost approximately 6,000 men from all causes: battle, disease, exhaustion and desertion. But the army had been saved, and Moore had left Iberia free for Wellesley&rsquo;s return later that year.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~800</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">British killed and wounded in the battle</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~1,500</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed and wounded</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">Sharpe&rsquo;s Rifles opens in the retreat to Corunna. This is where Sharpe first meets Patrick Harper, where the chosen men are formed, and where the 95th&rsquo;s Peninsular story begins. The retreat is the crucible that forges Sharpe&rsquo;s company.</p>
          <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Rifles &rarr;</a>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Harris on Corunna</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Benjamin Harris&rsquo;s <em>Recollections</em> provide the most vivid private-soldier account of the retreat. His descriptions of the suffering, the cold, the breakdowns and the small moments of human decency make the retreat real in a way no officer&rsquo;s dispatch can.</p>
          </div>
          <div className="mt-6">
            <Link href="/stories/rifleman-harris" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Rifleman Harris &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          <Link href="/battles/peninsular-war" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Peninsular War</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center mt-6">As an Amazon Associate I earn from qualifying purchases.</p>
      </section>
    </>
  );
}
