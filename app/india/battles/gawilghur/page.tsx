import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Storming of Gawilghur 1803",
  description:
    "The Storming of Gawilghur, 15 December 1803: Wellington's last major action in India, the fall of the cliff fortress, and the setting for Sharpe's Fortress.",
  path: "/india/battles/gawilghur",
  keywords: [
    "Gawilghur",
    "Gawilghur 1803",
    "Wellington India",
    "Sharpe's Fortress",
    "Second Anglo-Maratha War",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Storming of Gawilghur, 15 December 1803",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/india/battles/gawilghur`,
  url: `${SITE.baseUrl}/india/battles/gawilghur`,
  inLanguage: "en-GB",
};

export default function GawilghurPage() {
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
            The Storming of Gawilghur
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            15 December 1803 &middot; Deccan, India
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "15 Dec 1803" },
              { label: "Location", value: "Gawilghur, Deccan" },
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
            After the British victories at Assaye and Argaum, the Bhonsle of Nagpur retreated to his last stronghold: the fortress of Gawilghur, perched on the edge of a sheer cliff in the Deccan hills. The fortress had never been taken by assault and was widely considered impregnable. Its capture would end the Second Anglo-Maratha War and complete British supremacy across central India.
          </p>
        </div>
      </section>

      {/* 3. THE FORTRESS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Fortress</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Gawilghur stood on a flat-topped mountain bounded on three sides by sheer cliffs dropping hundreds of feet to the plains below. The only approach was along a narrow ridge connecting the fortress to the surrounding hills, defended by an outer wall, a deep ditch, and an inner fortress with its own walls and gates. The garrison had ample water, supplies, and artillery.
            </p>
            <p>
              The natural strength of the position made Gawilghur one of the most formidable fortifications in India. Previous armies had simply bypassed it rather than attempt the assault. Wellesley had no such option: the Bhonsle would not negotiate while Gawilghur held.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE ASSAULT */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Assault</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellesley planned a coordinated assault from two directions. Colonel Stevenson&rsquo;s column attacked the southern gate while a second force assaulted along the narrow ridge approach from the north. Siege batteries were established and breaches made in the outer wall over several days of bombardment.
          </p>
          <p>
            On 15 December, the storming parties went in through the breaches. The fighting in the outer works was fierce, but the attackers broke through and pursued the defenders into the inner fortress. The garrison, seeing resistance was hopeless, began to surrender. The fortress fell after several hours of fighting. Wellesley&rsquo;s coordinated attack from multiple directions had prevented the defenders from concentrating against any single assault column.
          </p>
        </div>
      </section>

      {/* 5. CASUALTIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~150</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">British &amp; Company killed and wounded</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">Not recorded</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Defender casualties</div>
            </div>
          </div>
          <p className="text-xs text-parchment/85 font-serif italic text-center">
            Defender casualties are not recorded in British sources. The gap in Indian casualty records reflects how the Company documented its wars.
          </p>
        </div>
      </section>

      {/* 6. WHY IT MATTERED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The fall of Gawilghur effectively ended the Second Anglo-Maratha War. The Bhonsle of Nagpur sued for peace within days, ceding territory and accepting a subsidiary alliance with the Company. It was Wellesley&rsquo;s last major action in India.
          </p>
          <p>
            Gawilghur demonstrated that no fortress in India, however strong its natural position, could resist a well-planned and well-supplied British assault. The lesson was not lost on the remaining Indian powers. Within two years, Wellesley would leave India as one of the most experienced generals in the British Army, his reputation built on the battles of Seringapatam, Assaye, Argaum and Gawilghur.
          </p>
        </div>
      </section>

      {/* 7. SHARPE'S FORTRESS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">Sharpe&rsquo;s Fortress</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              The third Sharpe novel in chronological order. Newly commissioned Ensign Sharpe is involved in the assault on Gawilghur, where Hakeswill makes his final India appearance. Cornwell&rsquo;s description of the fortress and the assault closely follows the historical record, with the fictional elements of Sharpe&rsquo;s personal story woven through the real campaign.
            </p>
            <a href="https://amzn.to/3QtV1dP" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Sharpe&rsquo;s Fortress &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 8. FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
          <Link href="/india/battles/assaye" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Assaye</Link>
          <Link href="/india/battles/argaum" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Argaum</Link>
          <Link href="/india/people/wellington-in-india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington in India</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
