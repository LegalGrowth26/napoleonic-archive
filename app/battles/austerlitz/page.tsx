import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Battle of Austerlitz",
  description:
    "The Battle of Austerlitz, 2 December 1805: Napoleon's masterpiece, the Battle of the Three Emperors, and the destruction of the Third Coalition.",
  path: "/battles/austerlitz",
  keywords: [
    "Battle of Austerlitz",
    "Austerlitz 1805",
    "Napoleon",
    "Third Coalition",
    "Battle of the Three Emperors",
    "Pratzen Heights",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Austerlitz, 2 December 1805",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/battles/austerlitz`,
  url: `${SITE.baseUrl}/battles/austerlitz`,
  inLanguage: "en-GB",
};

export default function AusterlitzPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Battles
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Battle of Austerlitz
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            2 December 1805 &middot; Moravia
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "2 Dec 1805" },
              { label: "Location", value: "Moravia" },
              { label: "Result", value: "French victory" },
              { label: "Casualties", value: "~45,000 total" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            After the destruction of the Austrian army at Ulm in October 1805, Napoleon marched east to confront the combined forces of Russia and Austria. The Third Coalition, formed to contain French expansion, had united the two eastern empires against France. Tsar Alexander I and Emperor Francis II of Austria were both present with their armies, making the confrontation uniquely personal.
          </p>
          <p>
            Napoleon occupied Vienna without a fight but his position was precarious. His lines of communication stretched back to France across hundreds of miles. A Russian army under Kutuzov had escaped the Ulm disaster and was being reinforced. Napoleon needed a decisive battle before winter and before Prussia could join the Coalition against him.
          </p>
        </div>
      </section>

      {/* THE ARMIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">France</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~73,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Napoleon. Veterans of the Boulogne camp, the finest army France ever fielded. Soult, Lannes, Bernadotte, Murat commanding the corps.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Russia &amp; Austria</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~85,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Tsar Alexander I and nominally Kutuzov. Austrian contingent under Emperor Francis II. Numerically superior but divided by national jealousy and overconfidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAPOLEON'S PLAN */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Napoleon&rsquo;s Plan</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Napoleon deliberately weakened his right flank, inviting the Allies to attack it. He wanted them to commit their main strength to an assault on the Goldbach stream below the Pratzen Heights, drawing forces away from the Heights themselves. The Pratzen was the key to the battlefield: whoever held it dominated the entire field.
          </p>
          <p>
            The plan required precise timing. Davout&rsquo;s corps, marching from Vienna, had to arrive in time to reinforce the weakened right flank and hold long enough for the decisive stroke. The decisive stroke itself would be delivered by Soult&rsquo;s corps, hidden in the mist below the Pratzen Heights, launched at the exact moment when the Allied centre was stripped to feed their left-flank attack.
          </p>
        </div>
      </section>

      {/* THE BATTLE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The battle began in thick fog at dawn. As Napoleon had intended, the Allies launched a massive attack on his right, sending five columns south across the Goldbach. Davout&rsquo;s corps, arriving after a forced march, held the line at Telnitz and Sokolnitz in bitter fighting.
            </p>
            <p>
              By mid-morning the fog lifted, revealing the Pratzen Heights stripped of most of their defenders. Napoleon gave the order and Soult&rsquo;s two divisions stormed the Heights. The seizure of the Pratzen cut the Allied army in two: the forces attacking the French right were now isolated, and the Allied centre was shattered.
            </p>
            <p>
              The Allies attempted counter-attacks on the Pratzen but were repulsed by Soult&rsquo;s infantry and the Imperial Guard. On the Allied left, the retreating columns were driven onto the frozen Satschan ponds. French artillery fired into the ice, and soldiers, horses and guns plunged into the freezing water. The rout was complete by mid-afternoon. Tsar Alexander fled the field in tears.
            </p>
          </div>
        </div>
      </section>

      {/* CASUALTIES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~9,000</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed and wounded</div>
          </div>
          <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~36,000</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Russo-Austrian killed, wounded and captured</div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERED */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Austerlitz destroyed the Third Coalition. Austria sued for peace within days, signing the Treaty of Pressburg which stripped her of her Italian and German possessions. The Holy Roman Empire, a thousand years old, was formally dissolved the following year. Russia retreated eastward. Prussia, which had been wavering, was left to face Napoleon alone in 1806.
            </p>
            <p>
              Austerlitz was Napoleon&rsquo;s masterpiece, the battle by which all subsequent Napoleonic engagements were judged. The combination of deception, timing, and the exploitation of a single decisive point was never surpassed. On its first anniversary, Napoleon issued a proclamation to his soldiers: the date, 2 December, remained sacred to the Empire.
            </p>
          </div>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon Bonaparte</Link>
        </div>
        <div className="text-center mb-6">
          <a href="https://amzn.to/4vyf2QD" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            The Campaigns of Napoleon by David Chandler &rarr;
          </a>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
