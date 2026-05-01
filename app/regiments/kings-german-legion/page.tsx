import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "King's German Legion",
  description:
    "The King's German Legion 1803-1816: Germany's finest soldiers in British service, from the Peninsular War to the defence of La Haye Sainte at Waterloo.",
  path: "/regiments/kings-german-legion",
  keywords: ["King's German Legion", "KGL", "La Haye Sainte", "Waterloo", "Napoleonic Wars", "Hanoverian soldiers"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The King's German Legion: Germany's Finest in British Service",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/kings-german-legion`,
  url: `${SITE.baseUrl}/regiments/kings-german-legion`,
  inLanguage: "en-GB",
};

export default function KGLPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/regiments" className="hover:text-gold transition">The Napoleonic Archive &middot; Regiments</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The King&rsquo;s German Legion</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">1803&ndash;1816 &middot; Germany&rsquo;s Finest in British Service</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1803" },
              { label: "Disbanded", value: "1816" },
              { label: "Peak Strength", value: "~14,000 men" },
              { label: "Battle Honours", value: "Peninsula, Waterloo" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Formation</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>In 1803, Napoleon dissolved the Electorate of Hanover. King George III, who was both King of Great Britain and Elector of Hanover, found his German subjects under French occupation. Thousands of Hanoverian soldiers refused to serve Napoleon and crossed the North Sea to Britain, where they were formed into the King&rsquo;s German Legion.</p>
          <p>The KGL was unique in the British Army: a complete, self-contained foreign formation of cavalry, infantry, artillery and engineers, all German-speaking, all volunteers, and all fighting for a king who was simultaneously their elector and their sovereign. They were exiles with a cause, and they fought with a professionalism that earned the respect of every British commander who served alongside them.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Structure</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>At its peak the KGL numbered approximately 14,000 men organised as a complete combined-arms force: two dragoon regiments, three hussar regiments, ten infantry battalions (including two elite light battalions), horse and foot artillery batteries, and an engineer detachment. This made the KGL one of the largest and most versatile formations in Wellington&rsquo;s army.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Peninsular War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>KGL units fought in every major Peninsular engagement from Talavera in 1809 to Toulouse in 1814. Wellington rated their infantry as equal to his best British battalions and their cavalry as the finest under his command. The KGL light battalions, trained to the same standards as the 95th Rifles, served as elite skirmishers throughout the campaign.</p>
          <p>Their reputation was built on discipline, marksmanship and steadiness under fire. At Salamanca the KGL cavalry charged with devastating effect. At Vitoria their infantry helped roll up the French line. Wherever Wellington needed reliable troops for the hardest work, the KGL were employed.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">La Haye Sainte</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The KGL&rsquo;s greatest moment, and greatest tragedy, came at Waterloo. The 2nd Light Battalion under Major Georg Baring was tasked with holding La Haye Sainte, the fortified farmhouse that anchored the centre of Wellington&rsquo;s line. The position was critical: if La Haye Sainte fell, the French would have a forward base from which to assault the Allied centre at close range.</p>
            <p>Baring&rsquo;s men held the farmhouse through repeated French assaults for most of the day. They fought room to room, bayonet to bayonet, holding the barricaded gates against infantry and cavalry. By late afternoon their ammunition was almost exhausted. Repeated requests for resupply went unanswered or unfulfilled. At approximately 6:30pm, with their last cartridges fired, the survivors were forced to abandon the position.</p>
            <p>Of the approximately 400 KGL light infantrymen who defended La Haye Sainte, only 42 came out unwounded. The fall of the farmhouse opened a crisis in Wellington&rsquo;s centre that was only resolved by the arrival of the Prussians and the repulse of the Imperial Guard.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Casualties at Waterloo</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The KGL suffered catastrophic losses at Waterloo. Across all their units engaged in the battle, they lost approximately 1,500 men killed and wounded, a casualty rate that reflected the ferocity of the fighting in the centre of the line and at La Haye Sainte.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Dissolution</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>After Waterloo and Napoleon&rsquo;s final defeat, the Electorate of Hanover was restored as the Kingdom of Hanover. The KGL was disbanded in 1816 and its veterans returned home to form the nucleus of the new Hanoverian army. Their thirteen years of service in British uniform had taken them from the beaches of the North Sea to the ridge at Mont-Saint-Jean.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The King&rsquo;s German Legion is widely considered one of the finest foreign formations ever to serve in the British Army. Their combination of German discipline, British-style training, and personal motivation as exiles fighting for their homeland made them uniquely effective. Wellington&rsquo;s praise was uncharacteristically warm: he considered them indispensable.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">The KGL appears throughout the Peninsular novels and at Waterloo. Their defence of La Haye Sainte is part of the backdrop to Sharpe&rsquo;s Waterloo. Cornwell portrays them as the reliable professionals they were, always present when the fighting was hardest.</p>
            <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Waterloo &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Regiments</Link>
          <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Waterloo</Link>
        </div>
      </section>
    </>
  );
}
