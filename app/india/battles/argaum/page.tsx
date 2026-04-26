import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Argaum 1803",
  description:
    "The Battle of Argaum, 29 November 1803: Wellesley's follow-up to Assaye that completed the destruction of the Berar army and opened the road to Gawilghur.",
  path: "/india/battles/argaum",
  keywords: [
    "Battle of Argaum",
    "Argaum 1803",
    "Wellington India",
    "Second Anglo-Maratha War",
    "Sharpe's Triumph",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Argaum, 29 November 1803",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/india/battles/argaum`,
  url: `${SITE.baseUrl}/india/battles/argaum`,
  inLanguage: "en-GB",
};

export default function ArgaumPage() {
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
            The Battle of Argaum
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            29 November 1803 &middot; Deccan, India
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "29 Nov 1803" },
              { label: "Location", value: "Argaum, Deccan" },
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
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            After the hard-won victory at Assaye in September 1803, Wellesley spent two months reorganising his battered force and pursuing the broken Maratha armies across the Deccan. The Bhonsle of Nagpur&rsquo;s army, though damaged at Assaye, had not been destroyed. Wellesley needed a decisive follow-up action to end the campaign before the monsoon season made further operations impossible.
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
              <div className="font-display text-2xl text-gold-pale mb-1">~11,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Major-General Arthur Wellesley. A mixed force of British regulars and Company sepoys, veterans of Assaye.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Maratha Confederacy</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~30,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">The Bhonsle of Nagpur&rsquo;s army with remaining forces from Scindia&rsquo;s compoo. Infantry and artillery, though less well equipped than at Assaye.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BATTLE */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Maratha infantry initially held firm, and for a time the issue was in doubt. Some of Wellesley&rsquo;s sepoy battalions wavered under the weight of Maratha fire. But Wellesley&rsquo;s disciplined attack, pressing home with the bayonet, broke the Maratha line. Once the infantry gave way, the cavalry completed the rout.
          </p>
          <p>
            Argaum was a more decisive and less costly victory than Assaye. The Maratha army broke and fled, losing its artillery and baggage. Wellesley&rsquo;s pursuit was vigorous and the Berar army was effectively destroyed as a fighting force.
          </p>
        </div>
      </section>

      {/* 5. CASUALTIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~350</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">British &amp; Company killed and wounded</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">Not recorded</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Maratha casualties</div>
            </div>
          </div>
          <p className="text-xs text-parchment/85 font-serif italic text-center">
            Maratha casualties are not reliably recorded in contemporary sources. The gap in Indian casualty records reflects how the Company documented its wars.
          </p>
        </div>
      </section>

      {/* 6. WHY IT MATTERED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Argaum completed the destruction of the Berar army and opened the road to Gawilghur, the cliff fortress that was the Bhonsle&rsquo;s last stronghold. Without Argaum, the campaign might have dragged on through the monsoon. With it, Wellesley could move immediately against Gawilghur and end the war.
          </p>
        </div>
      </section>

      {/* 7. SHARPE CONNECTION */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              Argaum falls between the events of Sharpe&rsquo;s Triumph (Assaye) and Sharpe&rsquo;s Fortress (Gawilghur). Cornwell does not set a novel specifically at Argaum, but the battle is part of the same campaign that forms the backdrop to both novels.
            </p>
            <a href="https://amzn.to/3OjyIa9" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Sharpe&rsquo;s Triumph &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 8. FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
          <Link href="/india/battles/assaye" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Assaye</Link>
          <Link href="/india/battles/gawilghur" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Gawilghur &rarr;</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
