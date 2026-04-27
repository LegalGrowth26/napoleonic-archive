import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Buying a Commission: The Purchase System",
  description:
    "How officers were made in the British Army of the Napoleonic era: the purchase system, the price of rank, and why Richard Sharpe could never quite belong.",
  path: "/stories/purchase-system",
  keywords: [
    "purchase system",
    "British Army commissions",
    "Napoleonic officer",
    "Sharpe commission",
    "Cardwell Reforms",
    "buying a commission",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Buying a Commission: The Purchase System in the British Army",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/stories/purchase-system`,
  url: `${SITE.baseUrl}/stories/purchase-system`,
  inLanguage: "en-GB",
};

export default function PurchaseSystemPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/stories" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Stories
            </Link>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Buying a Commission
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Purchase System &middot; How Officers Were Made in the British Army of the Napoleonic Era
          </p>
        </div>
      </section>

      {/* WHAT WAS IT */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Was the Purchase System?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            In the British Army of the Napoleonic period, a man became an officer by purchasing a commission. He did not attend an academy, pass an examination, or demonstrate military competence. He paid a set price, and the commission was his. When he wished to advance, he purchased the next rank by paying the difference between his current commission and the one above. When he wished to retire, he sold his commission and recouped his investment.
          </p>
          <p>
            The system applied to the infantry and cavalry of the line. The Royal Artillery, the Royal Engineers, and the East India Company&rsquo;s armies operated on merit and seniority. The navy had its own parallel system of patronage and examination. But in the infantry and cavalry that fought the Peninsular War and Waterloo, money was the primary route to command.
          </p>
        </div>
      </section>

      {/* PRICE OF RANK */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Price of Rank</h2>
          <p className="text-parchment leading-relaxed font-serif text-lg mb-8">
            Official regulation prices for commissions in a line infantry regiment, as set by the War Office circa 1810:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-serif">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Rank</th>
                  <th className="text-right py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Regulation Price</th>
                  <th className="text-right py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Approximate Modern Value</th>
                </tr>
              </thead>
              <tbody className="text-parchment/95">
                {[
                  { rank: "Ensign", price: "£400", modern: "~£40,000–45,000" },
                  { rank: "Lieutenant", price: "£550", modern: "~£55,000" },
                  { rank: "Captain", price: "£1,500", modern: "~£150,000" },
                  { rank: "Major", price: "£2,600", modern: "~£260,000" },
                  { rank: "Lieutenant-Colonel", price: "£3,500", modern: "~£350,000" },
                ].map((r) => (
                  <tr key={r.rank} className="border-b border-gold/10">
                    <td className="py-2.5 px-3 text-gold-pale">{r.rank}</td>
                    <td className="py-2.5 px-3 text-right">{r.price}</td>
                    <td className="py-2.5 px-3 text-right text-parchment/70">{r.modern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 mt-6">
            <p className="text-sm text-parchment/85 font-serif leading-relaxed">
              These are official regulated prices for line infantry. Cavalry commissions were significantly more expensive: the most prestigious regiments could cost three to four times the infantry price. Lord Cardigan famously paid &pound;35,000 for the lieutenant-colonelcy of the 11th Hussars in the 1830s, equivalent to approximately &pound;3.4 million today.
            </p>
            <p className="text-sm text-parchment/85 font-serif leading-relaxed">
              Payments above the regulated price were illegal but common, particularly for fashionable regiments. The gap between the official tariff and the actual price paid was an open secret.
            </p>
            <p className="text-sm text-parchment/85 font-serif leading-relaxed">
              During the Napoleonic Wars themselves, only about a third of commissions were actually purchased. Most were granted by seniority or merit as casualties created vacancies. This is why battlefield commissions like Sharpe&rsquo;s were possible, even if socially awkward. A man could rise without money, but he could never escape the stigma of having done so.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT EXISTED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Existed</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The theory was straightforward: officers who had invested their personal wealth in the army had more to lose if the army was defeated. They would fight harder, maintain discipline more rigorously, and remain loyal because their financial stake was at risk. A man who had paid &pound;3,500 for a lieutenant-colonelcy had a powerful incentive to keep his regiment intact.
          </p>
          <p>
            The system also ensured that the officer class was drawn from the gentry and aristocracy, the social classes that the British establishment trusted to govern. It prevented the emergence of a professional military caste independent of civilian control. Officers were gentlemen first and soldiers second; their loyalty was to the Crown and the social order, not to the army as an institution.
          </p>
        </div>
      </section>

      {/* THE REALITY */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Reality</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The reality was that money bought command regardless of competence. An officer who purchased a lieutenant-colonelcy might never have led men in battle, never studied tactics, never marched further than the parade ground. If he was wealthy enough, he could command a regiment of a thousand men on the strength of his banker&rsquo;s draft alone.
            </p>
            <p>
              The Peninsular War exposed the system&rsquo;s worst failures. Officers who had bought their way to senior command proved, in battle after battle, to be incompetent, cowardly, or both. The men who suffered were the soldiers who served under them. Wellington himself wrote privately that many of his officers were unfit for their rank, though he defended the purchase system publicly as a necessary check on military ambition.
            </p>
          </div>
        </div>
      </section>

      {/* WELLINGTON AND THE SYSTEM */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Wellington and the System</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellington himself had purchased his way through the ranks before India. He bought his first commission as an ensign in 1787, and by 1793 he had purchased a lieutenant-colonelcy. He was candid about it: he owed his early career to his family&rsquo;s money and connections.
          </p>
          <p>
            Yet Wellington also advanced the careers of men who had no money at all. He recommended battlefield promotions, used his influence to secure free commissions for deserving officers, and repeatedly argued that gallantry in action should be rewarded regardless of social standing. The contradiction was typical: he upheld the system while quietly undermining its worst consequences in individual cases.
          </p>
        </div>
      </section>

      {/* SHARPE AND THE SYSTEM */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">Sharpe and the System</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Richard Sharpe&rsquo;s battlefield commission at Assaye in 1803 made him an officer. It did not make him a gentleman. He had no money to purchase advancement, no family connections, no education, no social graces. Every step of his career depended on merit, patronage from men like Hogan and Wellington, and the death or disgrace of the officers above him.
            </p>
            <p>
              This is the social context for every confrontation Sharpe has with the officer class. Simmerson, Berry, Rymer, Girdwood: these are men who bought their commissions and resent the presence of a man who earned his with a sword. Sharpe can outfight any of them, but he can never outspend them. The purchase system is the invisible wall that defines his world.
            </p>
          </div>
        </div>
      </section>

      {/* ABOLITION */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Abolition</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The purchase system survived the Napoleonic Wars, survived the Crimean War, and survived repeated reform attempts by successive governments. It was finally abolished in 1871 under the Cardwell Reforms, introduced by Secretary of State for War Edward Cardwell. The abolition required a Royal Warrant after the House of Lords blocked the Army Regulation Bill, and the government paid approximately &pound;7 million in compensation to officers whose commissions lost their resale value.
          </p>
          <p>
            From 1871 onward, officers were commissioned on the basis of examination, training, and merit. The change was the end of an era that had lasted, in various forms, since the seventeenth century. The army that went to war in 1914 was a professional institution. The army that fought at Waterloo was, in its officer class, a club.
          </p>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Stories</Link>
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Sharpe Novels</Link>
            <Link href="/regiments/95th-rifles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">95th Rifles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
