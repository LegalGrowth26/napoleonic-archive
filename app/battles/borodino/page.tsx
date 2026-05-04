import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Borodino 1812",
  description: "The Battle of Borodino, 7 September 1812: the bloodiest day of the Napoleonic Wars, Napoleon's failure to commit the Guard, and the road to Moscow.",
  path: "/battles/borodino",
  keywords: ["Battle of Borodino", "Borodino 1812", "Napoleon Russia", "Raevsky Redoubt", "Kutuzov"],
  type: "article",
});

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "The Battle of Borodino, 7 September 1812", author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, mainEntityOfPage: `${SITE.baseUrl}/battles/borodino`, inLanguage: "en-GB" };

export default function BorodinoPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Borodino</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">7 September 1812 &middot; The Bloodiest Day of the Napoleonic Wars</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "Date", value: "7 Sep 1812" }, { label: "Location", value: "Moscow province" }, { label: "Result", value: "French tactical victory" }, { label: "Casualties", value: "~70,000 total" }].map((f) => (
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
          src="/Boradino.png"
          alt="The Battle of Borodino with the Raevsky Redoubt"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>For two months the Russian army had retreated before Napoleon, refusing battle, drawing the Grande Arm&eacute;e deeper into Russia. At Borodino, seventy-five miles west of Moscow, Kutuzov finally decided to stand. He could not yield Moscow without a fight: the political pressure was too great, and his army, reinforced and rested, was as strong as it would ever be.</p>
          <p>Napoleon needed a decisive victory. His army was weakened by disease, desertion and the long advance. He needed to destroy the Russian army in a single action and force Tsar Alexander to negotiate. Borodino was his opportunity.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">France</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~130,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Napoleon. The Grande Arm&eacute;e, weakened by the advance but still formidable. The Imperial Guard held in reserve.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Russia</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~120,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Prince Kutuzov. Entrenched behind earthwork fortifications: the Raevsky Redoubt and the Bagration Fl&egrave;ches.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battlefield</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Russian position was anchored on three key fortifications: the Raevsky Redoubt in the centre, a great earthwork fort bristling with artillery; the Bagration Fl&egrave;ches on the left, a series of arrow-shaped field works; and the village of Borodino on the right, covering the approach across the Kolocha river. Kutuzov had used the weeks of retreat to construct these positions and they would exact a terrible price.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The battle was a series of brutal frontal assaults. Napoleon lacked the room for manoeuvre that had characterised his earlier victories. Instead he hammered the Russian positions with massed artillery and infantry attacks. The Bagration Fl&egrave;ches changed hands seven times. Prince Bagration himself was mortally wounded leading a counterattack.</p>
            <p>The Raevsky Redoubt fell at last in the early afternoon when Eug&egrave;ne&rsquo;s corps stormed it from the front while cavalry attacked from the flanks. The fighting inside the redoubt was hand to hand, among the dead piled on the gun platforms. When it fell, the Russian centre was broken, but Kutuzov simply pulled his line back a few hundred yards and reformed.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Napoleon&rsquo;s Fatal Decision</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>At the crisis of the battle, with the Russian centre broken, Napoleon&rsquo;s marshals begged him to commit the Imperial Guard for the final blow that would destroy Kutuzov&rsquo;s army. Napoleon refused. According to the memoir of Philippe de S&eacute;gur, he said he would not have the Guard destroyed eight hundred leagues from France. The attribution is to S&eacute;gur&rsquo;s account, which is not universally accepted as verbatim but is the primary source for this decision.</p>
          <p>Without the Guard, the French could not exploit their advantage. Kutuzov withdrew in good order during the night. The Russian army survived to fight another day.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~28,000&ndash;35,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed and wounded</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~38,000&ndash;45,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Russian killed and wounded</div>
            </div>
          </div>
          <p className="text-xs text-parchment/85 font-serif italic text-center">Casualty figures are disputed between sources. The ranges given reflect the disagreement between French, Russian and modern historians.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Borodino opened the road to Moscow. But it did not destroy the Russian army, which was what Napoleon needed. A week later he entered Moscow to find it burning. Alexander refused to negotiate. Within eight weeks the retreat began, and the greatest military disaster in history followed.</p>
          <p>The decision not to commit the Guard haunted Napoleon. At Waterloo three years later, the same question arose, and this time he committed them. They were broken by the 52nd and the Guards on the ridge of Mont-Saint-Jean.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/battles/russian-campaign" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Russian Campaign &rarr;</Link>
            <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon</Link>
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
