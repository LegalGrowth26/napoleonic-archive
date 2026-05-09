import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Leipzig 1813 — The Battle of Nations",
  description: "The Battle of Leipzig, 16-19 October 1813: the largest battle in European history before 1914, the Saxon defection, the bridge disaster, and Napoleon's retreat to France.",
  path: "/battles/leipzig",
  keywords: ["Battle of Leipzig", "Battle of Nations", "Leipzig 1813", "Napoleon 1813", "Sixth Coalition", "Saxon defection"],
  type: "article",
});

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "The Battle of Leipzig, 16-19 October 1813: The Battle of Nations", author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, mainEntityOfPage: `${SITE.baseUrl}/battles/leipzig`, inLanguage: "en-GB" };

export default function LeipzigPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Leipzig</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">16&ndash;19 October 1813 &middot; The Battle of Nations</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "Dates", value: "16-19 Oct 1813" }, { label: "Location", value: "Saxony" }, { label: "Result", value: "Coalition victory" }, { label: "Scale", value: "~600,000 men" }].map((f) => (
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
          <p>After the catastrophe of the <Link href="/battles/russian-campaign" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Russian campaign</Link> in 1812, Napoleon rebuilt his army with extraordinary speed but could not replace the experience of the veterans he had lost. The Sixth Coalition, including Prussia, Austria, Russia and Sweden, assembled the largest military force Europe had ever seen. Napoleon chose to fight at Leipzig in Saxony rather than retreat behind the Rhine, gambling that he could defeat the Coalition armies before they could concentrate.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Scale</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">France &amp; Allies</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~185,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Napoleon. Including Saxon, Polish, Italian and Confederation of the Rhine contingents. Many were conscripts with limited training.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Coalition</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~380,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Schwarzenberg, Bl&uuml;cher, Bernadotte and Bennigsen. Prussians, Austrians, Russians and Swedes. The largest concentration of military force Europe had ever assembled.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Four Days</h2>
        <div className="space-y-6">
          {[
            { day: "16 October", title: "The First Day", desc: "The battle opened on multiple fronts around the city. Napoleon initially held his own, repulsing attacks from the south at Wachau and from the north at M&ouml;ckern. But the Coalition forces were not yet fully concentrated, and the fighting was inconclusive." },
            { day: "17 October", title: "The Pause", desc: "A day of relative quiet. Napoleon, recognising that the Coalition forces were growing stronger while his were not, offered peace terms. The Allies rejected them. During the night, additional Coalition armies arrived, tipping the numerical balance further against the French." },
            { day: "18 October", title: "The Turning Point", desc: "The decisive day. The Coalition attacked from all sides simultaneously. During the afternoon, the Saxon corps, fighting alongside Napoleon, switched sides and turned their guns on the French. The defection tore a hole in the French line and shattered any remaining hope of victory. Napoleon ordered a retreat." },
            { day: "19 October", title: "The Retreat", desc: "The French began withdrawing through the city and across the Elster river via the single bridge at Lindenau. The bridge was blown prematurely while thousands of French soldiers were still on the wrong side. Approximately 30,000 men were trapped and captured. Marshal Poniatowski, newly appointed the previous day, drowned attempting to swim the Elster." },
          ].map((d) => (
            <div key={d.day} className="card p-6 rounded-sm">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-gold-pale uppercase tracking-widest text-sm">{d.day}</span>
                <span className="text-burgundy-bright text-sm font-serif">{d.title}</span>
              </div>
              <p className="text-parchment font-serif leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Saxon Defection</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>One of the most dramatic moments of the entire Napoleonic Wars. On the afternoon of 18 October, the Saxon army, approximately 10,000 men who had been fighting alongside Napoleon, changed sides mid-battle. They wheeled their guns around and opened fire on their former allies. The defection was not spontaneous: the Saxon king had been negotiating with the Coalition, and many Saxon officers had lost faith in Napoleon after the Russian disaster. But the timing, in the middle of a battle, was extraordinary and devastating.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Bridge Disaster</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Napoleon had prepared only one line of retreat: a single bridge over the Elster river at Lindenau. On the morning of 19 October, with the French army streaming across, a corporal (according to most accounts) blew the bridge on the orders of a subordinate officer who believed the Coalition forces were about to seize it. The bridge was destroyed while approximately 30,000 French soldiers, including the rearguard, were still trapped on the city side.</p>
          <p>Those trapped attempted to swim the river. Many drowned, including Marshal Poniatowski, who had been made a Marshal of France only the day before. Others surrendered. It was one of the most catastrophic military blunders of the wars.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~54,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Coalition killed and wounded</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~45,000 + 30,000 captured</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed, wounded and captured</div>
            </div>
          </div>
          <p className="text-xs text-parchment/85 font-serif italic text-center">Total casualties of approximately 130,000 over four days made Leipzig one of the bloodiest battles in European history before the First World War.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Leipzig was the decisive battle of the 1813 campaign. After it, Napoleon retreated to France. The Confederation of the Rhine, his system of German client states, collapsed. His German allies abandoned him one by one. The Coalition invaded France in early 1814. Napoleon fought a brilliant defensive campaign but was overwhelmed by numbers. He abdicated on 6 April 1814 and was exiled to Elba.</p>
          <p>Leipzig made <Link href="/battles/waterloo" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Waterloo</Link> inevitable. Without Leipzig there would have been no exile, no Hundred Days, no final battle on the ridge of Mont-Saint-Jean.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon</Link>
            <Link href="/battles/russian-campaign" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Russian Campaign</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/4vyf2QD" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">The Campaigns of Napoleon &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
