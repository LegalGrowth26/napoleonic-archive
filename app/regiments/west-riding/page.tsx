import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "33rd Regiment of Foot — West Riding Regiment",
  description: "The 33rd Regiment of Foot (West Riding): Wellington's own regiment and Sharpe's original regiment in India. The unit that shaped both the Duke and the Rifleman.",
  path: "/regiments/west-riding",
  keywords: ["33rd Regiment of Foot", "West Riding Regiment", "Wellington regiment", "Sharpe regiment", "Duke of Wellington's Regiment"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The 33rd Regiment of Foot (West Riding): Sharpe's Original Regiment",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/west-riding`,
  url: `${SITE.baseUrl}/regiments/west-riding`, inLanguage: "en-GB",
};

export default function WestRidingPage() {
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
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The West Riding Regiment</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">33rd Regiment of Foot &middot; Sharpe&rsquo;s Original Regiment</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1702" },
              { label: "County", value: "West Riding, Yorkshire" },
              { label: "Battle Honours", value: "Seringapatam, Waterloo" },
              { label: "Famous Commander", value: "Arthur Wellesley" },
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
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">History</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The 33rd Regiment of Foot was raised in 1702 and recruited from the West Riding of Yorkshire. By the late eighteenth century it was a solid, unremarkable line regiment with a respectable record but no particular fame. Its elevation to historic significance came through two men: Arthur Wellesley, who commanded it, and Richard Sharpe, who served in it.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Wellington&rsquo;s Regiment</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Arthur Wellesley purchased the lieutenant-colonelcy of the 33rd in 1793 at the age of twenty-four. He commanded the regiment until 1802, leading it to India in 1797 and through the campaigns that made his reputation. The 33rd fought at Seringapatam in 1799 and at Assaye in 1803 under Wellesley&rsquo;s direct command.</p>
            <p>Wellesley&rsquo;s association with the regiment was lifelong. When he was created Duke of Wellington, the 33rd eventually became the Duke of Wellington&rsquo;s Regiment, carrying his title as their own until amalgamation in 2006 into the Yorkshire Regiment.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">In India</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The 33rd sailed to India in 1797 and served there for eight years. At Seringapatam they were part of the storming force that took Tippu Sultan&rsquo;s fortress. At Assaye they fought in the bloodiest battle of Wellesley&rsquo;s career. The regiment&rsquo;s Indian service shaped the future Duke of Wellington, and its soldiers paid the price in casualties and tropical disease.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">Sharpe&rsquo;s Regiment</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>In Bernard Cornwell&rsquo;s novels, Richard Sharpe enlists in the 33rd Foot as a teenager to escape a murder charge. He serves in the regiment throughout the three India novels: Sharpe&rsquo;s Tiger, Sharpe&rsquo;s Triumph and Sharpe&rsquo;s Fortress. The 33rd is where Sharpe meets Hakeswill, his tormentor; where he first serves under Colonel Wellesley; and where he earns the battlefield commission at Assaye that transforms his life.</p>
            <p>After India, Sharpe transfers to the 95th Rifles, but the 33rd is where his story begins. The regiment is the crucible that forges him: its brutal discipline under men like Hakeswill and Captain Morris, and its redemption under Wellesley&rsquo;s cold but fair command.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide &rarr;</Link>
            <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">India Section &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">After India</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The 33rd returned to Britain and later served in the Peninsular War and at Waterloo, though by this time Wellesley had risen far beyond regimental command. The regiment continued to serve the Crown throughout the nineteenth century and into the twentieth, carrying the battle honour of Seringapatam on its colours.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The 33rd became the Duke of Wellington&rsquo;s Regiment in 1853, honouring the Iron Duke after his death in 1852. In 2006 the regiment was amalgamated into the Yorkshire Regiment (14th/15th, 19th and 33rd/76th Foot). The regimental museum is housed in Bankfield Museum, Halifax, West Yorkshire.</p>
            <p>The 33rd is unique among Napoleonic regiments in having a double connection to both the real Wellington and the fictional Sharpe. It is the regiment that shaped both the Duke and the Rifleman, and that makes it special for fans of both history and Cornwell&rsquo;s novels.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Regiments</Link>
          <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington</Link>
          <Link href="/regiments/95th-rifles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">95th Rifles</Link>
        </div>
      </section>
    </>
  );
}
