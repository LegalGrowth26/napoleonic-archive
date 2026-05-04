import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Hundred Days 1815",
  description: "The Hundred Days: Napoleon's escape from Elba, the return to Paris, Ligny, Quatre Bras, and the final campaign that ended at Waterloo.",
  path: "/battles/hundred-days",
  keywords: ["Hundred Days", "Napoleon Elba", "Waterloo campaign", "Ligny", "Quatre Bras", "1815"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Hundred Days: Napoleon's Last Campaign, 1815",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/hundred-days`, inLanguage: "en-GB",
};

export default function HundredDaysPage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Hundred Days</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">1 March &ndash; 22 June 1815 &middot; Napoleon&rsquo;s Last Campaign</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Duration", value: "111 days" },
              { label: "Theatre", value: "France & Belgium" },
              { label: "Result", value: "Allied victory" },
              { label: "Final Battle", value: "Waterloo" },
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
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="/napoleon-homecoming.png"
          alt="Napoleon returning from Elba"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Were the Hundred Days?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Hundred Days is the name given to the period between Napoleon&rsquo;s escape from exile on Elba on 1 March 1815 and his second abdication on 22 June 1815. In 111 days, Napoleon returned to France, reclaimed the throne, rebuilt his army, and fought a final campaign that ended in the most famous battle in European history.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Escape from Elba</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Napoleon left Elba with approximately 1,000 men on 26 February 1815. He landed in the south of France on 1 March and began marching north towards Paris. Louis XVIII sent troops to arrest him. At Laffrey, near Grenoble, Napoleon walked towards the soldiers sent to stop him, opened his coat, and invited them to shoot their Emperor. They joined him. Regiment after regiment went over to Napoleon. Marshal Ney, who had promised to bring Napoleon back to Paris in an iron cage, marched to join him instead. Louis XVIII fled. On 20 March, Napoleon entered Paris.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Army Reassembles</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Napoleon rebuilt his army with extraordinary speed. Within weeks he had assembled approximately 125,000 men, the Arm&eacute;e du Nord, equipped, trained and ready to fight. The loyalty of the French army to Napoleon personally, despite the disasters of 1812-1814, was remarkable. These were veterans who believed in their Emperor. Many had served him for a decade or more.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Allied Response</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The European powers, meeting at the Congress of Vienna, declared Napoleon an outlaw and formed the Seventh Coalition. Wellington was appointed to command the Allied army in Belgium: a mixed force of British, Dutch-Belgian, Hanoverian and other German troops. Bl&uuml;cher commanded the Prussian army to Wellington&rsquo;s east. Together they would face Napoleon in Belgium.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Ligny: 16 June 1815</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Napoleon struck first, crossing the border into Belgium on 15 June. On 16 June he defeated Bl&uuml;cher&rsquo;s Prussians at Ligny, the last battle Napoleon would ever win. The Prussian centre broke at evening when the Old Guard stormed the village. Old Bl&uuml;cher was ridden over in a cavalry m&ecirc;l&eacute;e and lay under his dead horse until darkness.</p>
          <p>But the Prussians withdrew in good order, northward towards Wavre rather than eastward towards their supply lines. This decision, largely the work of Gneisenau, Bl&uuml;cher&rsquo;s chief of staff, kept the Prussian army in contact with Wellington. It would prove decisive.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Quatre Bras: 16 June 1815</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>On the same day, Ney attacked Wellington&rsquo;s position at the crossroads of Quatre Bras. The fighting was fierce, in fields of head-high rye, but Ney failed to seize the junction before Wellington could concentrate his forces. A missed opportunity: if Ney had taken Quatre Bras, Wellington would have been cut off from Bl&uuml;cher.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Two Days Between</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>On 17 June, Wellington retreated from Quatre Bras to a position he had reconnoitred months earlier: the ridge of Mont-Saint-Jean, south of the village of Waterloo. Bl&uuml;cher retreated to Wavre and promised to march to Wellington&rsquo;s aid. Napoleon sent Grouchy with 33,000 men to pursue the Prussians, but Grouchy pursued too slowly and in the wrong direction. The stage was set.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Waterloo: 18 June 1815</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Nine hours of slaughter on a two-mile front. The details are on the <Link href="/battles/waterloo" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">dedicated Waterloo page</Link>. What matters here is the result: the Imperial Guard was broken, the French army collapsed, and Napoleon&rsquo;s last campaign was over.</p>
          </div>
          <div className="mt-6">
            <Link href="/battles/waterloo" className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">Read the full Waterloo page &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Aftermath</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Napoleon returned to Paris and abdicated for the second time on 22 June. He surrendered to the British on 15 July, boarding HMS Bellerophon. The Allies exiled him to St Helena, a remote island in the South Atlantic, where he died on 5 May 1821. The Hundred Days were over. The Napoleonic era was finished.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">Sharpe&rsquo;s Waterloo covers the entire Hundred Days campaign. Sharpe is attached to the Prince of Orange&rsquo;s staff as a liaison officer, giving him a front-row seat to the incompetence and heroism of the final battle.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Sharpe Novels &rarr;</Link>
              <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Waterloo &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon</Link>
        </div>
      </section>
    </>
  );
}
