import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Assaye 1803",
  description:
    "The Battle of Assaye, 23 September 1803: Wellington's bloodiest battle, the action he rated above Waterloo, and the setting for Sharpe's Triumph.",
  path: "/india/battles/assaye",
  keywords: [
    "Battle of Assaye",
    "Assaye 1803",
    "Wellington India",
    "Maratha War",
    "Sharpe's Triumph",
    "Second Anglo-Maratha War",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Assaye, 23 September 1803",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/india/battles/assaye`,
  url: `${SITE.baseUrl}/india/battles/assaye`,
  inLanguage: "en-GB",
};

export default function AssayePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/india" className="hover:text-gold transition">
              The Napoleonic Archive &middot; India
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Battle of Assaye
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            23 September 1803 &middot; Deccan, India
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "23 Sep 1803" },
              { label: "Location", value: "Assaye, Deccan" },
              { label: "Result", value: "British victory" },
              { label: "Commander", value: "Maj-Gen Wellesley" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BACKGROUND */}
      <section id="background" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Second Anglo-Maratha War began in 1803 after the collapse of
            negotiations between the Company and the Maratha Confederacy, the
            dominant Indian power after the Mughal decline. The Marathas were
            not a single state but a loose confederacy of warrior chieftains,
            the most powerful of whom, Daulat Rao Scindia and the Bhonsle of
            Nagpur, maintained large armies trained by European officers and
            equipped with modern artillery.
          </p>
          <p>
            Major-General Arthur Wellesley, commanding the Deccan field
            force, advanced rapidly with approximately 7,000 men to prevent
            the Maratha armies from uniting. On 23 September he found them
            encamped between the rivers Kaitna and Juah near the village of
            Assaye. Despite being outnumbered roughly five to one, he decided
            to attack immediately rather than wait for reinforcements.
          </p>
        </div>
      </section>

      {/* 3. THE ARMIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">British &amp; Company</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~7,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">
                Under Major-General Arthur Wellesley. Included the 74th and
                78th Highlanders, the 19th Light Dragoons, and several
                battalions of Company sepoys. No heavy artillery.
              </p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Maratha Confederacy</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~40,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">
                Under Scindia and the Bhonsle of Nagpur. Approximately 100
                artillery pieces, many served by European-trained gunners.
                Infantry battalions drilled on the French model by
                mercenary officers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BATTLE */}
      <section id="the-battle" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellesley identified a ford at the village of Peepulgaon where
            the Kaitna could be crossed, and led his force across under fire.
            The crossing channelled the Maratha numerical advantage: the
            ground between the two rivers confined the battlefield and
            prevented the enemy from using their full strength.
          </p>
          <p>
            The Maratha artillery, well-served and devastatingly accurate,
            tore into the advancing British lines. The 74th Highlanders, on
            the right of the line, advanced against the village of Assaye
            itself and were nearly destroyed: the regiment lost over 60 per
            cent of its strength in casualties. Wellesley had two horses
            shot under him and his orderly was killed beside him.
          </p>
          <p>
            The 19th Light Dragoons charged the Maratha gun line and
            overran it. But the Maratha infantry, far from broken, reformed
            and counterattacked. The battle swayed for several hours until
            the British finally held the field at dusk. Many of the Maratha
            gunners were found dead at their pieces, having been bayoneted
            by British infantry after pretending to be casualties and then
            re-opening fire.
          </p>
        </div>
      </section>

      {/* 5. CASUALTIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~1,584</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">British &amp; Company killed and wounded</div>
              <p className="text-xs text-parchment/85 font-serif">Nearly a quarter of the entire force. Two horses shot under Wellesley.</p>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~6,000 est.</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Maratha casualties (estimated)</div>
              <p className="text-xs text-parchment/85 font-serif">Not reliably documented. Contemporary Indian sources are limited and figures vary significantly between historians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WELLINGTON'S VERDICT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="card p-8 rounded-sm border-gold/40">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold font-display text-lg">♛</span>
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
              Wellington&rsquo;s Verdict
            </h3>
          </div>
          <p className="text-parchment leading-relaxed font-serif text-lg">
            Wellington consistently called Assaye the hardest fighting he had
            ever seen, a verdict he maintained even after Waterloo. When asked
            years later which battle he was most proud of, he named Assaye,
            not Waterloo. This is the measure of what he faced and what he
            achieved: a young general, outnumbered five to one, who attacked
            because he read the ground correctly and trusted his soldiers to
            hold.
          </p>
        </div>
      </section>

      {/* 7. WHY IT MATTERED */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Assaye shattered Scindia&rsquo;s army and the prestige of the
              Maratha military system. It demonstrated that even the best-
              trained Indian armies, equipped with modern artillery and drilled
              by European officers, could be defeated by a smaller British
              force under aggressive, competent leadership.
            </p>
            <p>
              For Wellington personally, Assaye was formative. It proved his
              willingness to attack against apparently impossible odds when he
              judged the ground correctly. But the near-disaster, the enormous
              casualties, the 74th&rsquo;s destruction, also taught him caution.
              His later preference for defensive positions, reverse slopes, and
              careful logistics owed something to the memory of how close he
              came to annihilation on the banks of the Kaitna.
            </p>
          </div>
        </div>
      </section>

      {/* 8. SHARPE'S TRIUMPH */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">Sharpe&rsquo;s Triumph</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
            The second Sharpe novel in chronological order. Sergeant Sharpe
            serves alongside Wellesley at Assaye and commits the act of
            battlefield heroism that earns him a commission from the ranks.
            Cornwell&rsquo;s depiction of the battle is closely researched:
            the crossing of the Kaitna, the destruction of the 74th, the
            charge of the 19th Dragoons, and the Maratha gunners who feigned
            death then reopened fire. The fictional elements are Sharpe&rsquo;s
            personal role and the villain William Dodd, a renegade British
            officer serving with the Marathas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://amzn.to/3OjyIa9" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Sharpe&rsquo;s Triumph &rarr;
            </a>
            <a href="https://amzn.to/4vvvfG6" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/40 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition">
              Further reading on Assaye &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 9. FURTHER READING + NAV */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
            <Link href="/india/east-india-company" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">East India Company</Link>
            <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington Biography</Link>
            <Link href="/india/battles/seringapatam" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Seringapatam</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
