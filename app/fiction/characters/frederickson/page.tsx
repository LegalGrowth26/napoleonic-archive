import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Captain Frederickson — Sweet William",
  description: "Captain William Frederickson: Sweet William, the most dangerous man in the Peninsula. Missing an eye, several teeth and part of an ear. One of Sharpe's finest allies.",
  path: "/fiction/characters/frederickson",
  keywords: ["Frederickson Sharpe", "Sweet William", "60th Rifles", "Philip Whitchurch", "Sharpe's Siege"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Captain William Frederickson", description: "Fictional character from Bernard Cornwell's Sharpe novels. Officer of the 60th Rifles known as Sweet William.", url: `${SITE.baseUrl}/fiction/characters/frederickson` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Frederickson in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Captain William Frederickson is an officer of the 60th Rifles known as Sweet William. Missing an eye, several teeth and part of an ear, he is one of Sharpe's most capable allies in the later Peninsular novels." } },
  { "@type": "Question", name: "What happened to Frederickson?", acceptedAnswer: { "@type": "Answer", text: "Frederickson survives the Napoleonic Wars. He appears in Sharpe's Siege, Sharpe's Revenge and Sharpe's Assassin. His fate after the wars is not described." } },
  { "@type": "Question", name: "Why is Frederickson called Sweet William?", acceptedAnswer: { "@type": "Answer", text: "The nickname is deeply ironic. Frederickson is missing an eye, several teeth and part of an ear, all lost in combat. He is one of the most fearsome-looking men in the army. The nickname contrasts his gentle Christian name with his terrifying appearance." } },
] };

export default function FredericksonPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Captain William Frederickson</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Sweet William &middot; The Most Dangerous Man in the Peninsula</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Siege" }, { label: "Regiment", value: "60th Rifles" }, { label: "Nickname", value: "Sweet William" }, { label: "Portrayed By", value: "Philip Whitchurch" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Frederickson?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Captain William Frederickson of the 60th Rifles is known throughout the army as Sweet William. The nickname is deeply ironic: Frederickson is missing an eye, several teeth and part of an ear, all lost in separate actions. He wears a black eye patch, removes his false teeth before battle to look as terrifying as possible, and dresses in a battered uniform that would disgrace a scarecrow. Despite this fearsome exterior he is one of the most intelligent, capable and lethal officers in the Peninsula.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Appearance</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Frederickson first appears in Sharpe&rsquo;s Siege, joining forces with Sharpe during the disastrous Atlantic coast raid. From the moment they meet there is a recognition between them: two professional soldiers of the highest quality who have survived by skill and aggression rather than birth or purchase.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Relationship with Sharpe</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Unlike most of Sharpe&rsquo;s relationships with officers, Frederickson treats him entirely as a peer. There is no condescension, no class tension, no resentment. They are both riflemen, both survivors, both men who have earned everything they have. Their friendship in the later novels is one of genuine mutual respect between equals, a rarity in Sharpe&rsquo;s world.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The False Teeth</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Frederickson removes his false teeth before battle. It is a deliberate psychological tactic: without them, combined with the missing eye and ear, he presents a face of such grotesque ferocity that enemy soldiers flinch from him. It works. The detail is one of Cornwell&rsquo;s finest character touches, turning a disability into a weapon.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Fate</h2>
        <div className="text-parchment leading-relaxed font-serif text-lg">
          <p>Frederickson survives the wars. He fights alongside Sharpe through the Atlantic coast raid (Sharpe&rsquo;s Siege), the campaign in southern France (Sharpe&rsquo;s Revenge), and the Paris mission (Sharpe&rsquo;s Assassin). His ultimate fate after the Napoleonic period is not described in the main series.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV Portrayal</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Philip Whitchurch plays Frederickson in Sharpe&rsquo;s Siege and Sharpe&rsquo;s Revenge. The TV portrayal captures both the ironic nickname and the fearsome appearance, though the make-up effects necessarily soften the extent of the disfigurement described in the novels.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Frederickson in Sharpe?", a: "An officer of the 60th Rifles known as Sweet William. Missing an eye, teeth and part of an ear. One of Sharpe's finest allies." },
            { q: "What happened to Frederickson?", a: "He survives the wars. Appears in Sharpe's Siege, Sharpe's Revenge and Sharpe's Assassin." },
            { q: "Why is Frederickson called Sweet William?", a: "The nickname is ironic. He is one of the most fearsome-looking men in the army." },
          ].map(({ q, a }) => (
            <details key={q} className="card rounded-sm">
              <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-gold font-display text-sm mt-0.5 shrink-0" aria-hidden="true">Q</span>
                <span className="font-display text-lg text-gold-pale tracking-wide leading-snug">{q}</span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15"><p className="text-parchment leading-relaxed font-serif">{a}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/4tifrFi" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Siege &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
