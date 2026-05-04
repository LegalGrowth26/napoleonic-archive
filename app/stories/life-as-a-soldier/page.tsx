import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Life as a British Soldier in the Napoleonic Wars",
  description: "Life as a British soldier: pay, food, discipline, flogging, medical care and survival. The everyday reality behind the battles of the Napoleonic Wars.",
  path: "/stories/life-as-a-soldier",
  keywords: ["British soldier Napoleonic", "army life 1800s", "flogging British Army", "Napoleonic soldier pay", "Wellington army"],
  type: "article",
});

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Life as a British Soldier in the Napoleonic Wars", author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, mainEntityOfPage: `${SITE.baseUrl}/stories/life-as-a-soldier`, inLanguage: "en-GB" };

export default function LifeAsSoldierPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/stories" className="hover:text-gold transition">The Napoleonic Archive &middot; Stories</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Life as a British Soldier</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Pay, Food, Discipline and Survival</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Joined Up?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The recruiting sergeant beat his drum in market towns and outside alehouses. The bounty for enlisting was typically a few guineas, enough for a week of drinking. The men who took the shilling were, by and large, the desperately poor: agricultural labourers thrown off the land by enclosure, weavers displaced by the factory system, petty criminals offered the choice of enlistment or prison, and men simply running from failed lives.</p>
          <p>Wellington was blunt about the composition of his army. His famous remark about &ldquo;the scum of the earth, enlisted for drink&rdquo; was made privately and was more nuanced than often quoted: he added that it was remarkable what fine fellows they became after enlistment and discipline. But the essential truth held. This was not a citizens&rsquo; army. It was composed of men with few other options.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Pay and Conditions</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>A private soldier was paid approximately one shilling per day. From this, stoppages were deducted for food, clothing, equipment repair, and the regimental fund. A soldier might receive as little as three or four pence in actual cash after deductions. Sergeants earned more, but not dramatically so. Officers purchased their commissions and lived on private income; the gap between officers and men was a social chasm.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Food</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The daily ration when available was one pound of bread (or biscuit on campaign), one pound of beef or pork (usually salt), and a gill of rum. Tea, sugar and rice were issued when supply allowed. In practice, on campaign, soldiers ate whatever they could find: foraged vegetables, stolen chickens, unripe fruit that gave them dysentery. The commissariat, the supply system, was Wellington&rsquo;s constant preoccupation.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Discipline</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The primary instrument of discipline was the lash. The cat o&rsquo; nine tails, nine knotted cords attached to a handle, was administered by the regimental drummer. Sentences ranged from 25 lashes for minor offences to 1,000 for desertion (though medical officers usually intervened before the full sentence was carried out). A hundred lashes would leave a man&rsquo;s back raw and bleeding; three hundred could kill.</p>
            <p>Wellington defended flogging as necessary for maintaining discipline in an army drawn from the lowest levels of society. Reformers campaigned against it throughout the period. It was not abolished until 1881. In the Sharpe novels, Sharpe himself is flogged by Hakeswill early in his career, an experience that shapes his attitude to authority for the rest of his life.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Medical Care</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The regimental surgeon was often the only medical officer available. His primary tool was the saw. Amputation was the standard treatment for serious limb wounds because infection, not blood loss, was the main killer. A good surgeon could amputate a leg in under two minutes. Disease killed far more soldiers than battle: typhus, dysentery and malaria were endemic on campaign.</p>
        </div>
        <div className="mt-6">
          <Link href="/stories/battlefield-medicine" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battlefield Medicine &rarr;</Link>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Camp Life</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>A small number of wives were permitted to accompany the army &ldquo;on the strength,&rdquo; selected by ballot. They cooked, washed, nursed the sick and buried the dead. The informal economy of a campaigning army included sutlers (civilian traders), prostitutes, and an unofficial market in everything from tobacco to stolen French silver.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">After the War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>After 1815, tens of thousands of soldiers were demobilised with minimal support. There were no pensions for ordinary soldiers (officers could sell their commissions). Many returned to the poverty they had left. Benjamin Harris, the rifleman whose memoir gives us the finest private-soldier account of the period, died a shoemaker in London. The nation that celebrated Waterloo did little for the men who won it.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Stories</Link>
            <Link href="/stories/purchase-system" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Purchase System</Link>
            <Link href="/stories/battlefield-medicine" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battlefield Medicine</Link>
          </div>
        </div>
      </section>
    </>
  );
}
