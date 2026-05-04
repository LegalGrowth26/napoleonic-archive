import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Lucille Castineau — Sharpe's Final Love",
  description: "Lucille Castineau: the French widow who gives Sharpe the peace he never expected to find. The complete guide to Sharpe's enduring companion.",
  path: "/fiction/characters/lucille",
  keywords: ["Lucille Castineau", "Sharpe Lucille", "Normandy", "Sharpe's Revenge", "Cecile Paoli"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Lucille Castineau", description: "Fictional character from Bernard Cornwell's Sharpe novels. French widow and Sharpe's enduring companion.", url: `${SITE.baseUrl}/fiction/characters/lucille` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Lucille in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Lucille Castineau is a French widow living on a farm in Normandy. She becomes Sharpe's enduring companion after the Napoleonic Wars, representing the peace and domesticity he never expected to find." } },
  { "@type": "Question", name: "Does Sharpe end up with Lucille?", acceptedAnswer: { "@type": "Answer", text: "Yes. Sharpe settles with Lucille on her farm in Normandy after the wars. She is still with him at the end of Sharpe's Devil, the final novel chronologically." } },
  { "@type": "Question", name: "Where do Sharpe and Lucille live?", acceptedAnswer: { "@type": "Answer", text: "Sharpe and Lucille live on her family farm in Normandy, France. They have a son, Patrick-Henri, named after Patrick Harper." } },
] };

export default function LucillePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Lucille Castineau</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The Peace Sharpe Never Expected to Find</p>
          <div className="ornament my-8 text-gold/70"><span>❦</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Revenge" }, { label: "Nationality", value: "French" }, { label: "Role", value: "Sharpe's companion" }, { label: "Portrayed By", value: "Cecile Paoli" }].map((f) => (
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
          src="/Lucielle.png"
          alt="Lucille Castineau on her Normandy farm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Lucille?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Lucille Castineau is a French widow living on a farm in Normandy. Her husband was killed serving in Napoleon&rsquo;s army. She is intelligent, calm, deeply good, and the opposite of the war that has defined Sharpe&rsquo;s entire life. Where Teresa was fire and war, Lucille is earth and peace. She represents the first real home Sharpe has ever known.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Meeting</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sharpe arrives at Lucille&rsquo;s farm in Normandy in Sharpe&rsquo;s Revenge. He is wounded, hunted by both French and British authorities (framed by Ducos for theft), and has lost everything: his wife Jane has left him, his money is gone, his reputation is destroyed. Lucille shelters him. It is the beginning of a relationship that will define the rest of his life.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What She Represents</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Lucille gives Sharpe something he has never had: a home, a place where he belongs, a person who accepts him completely. She never tries to change him or make him into a gentleman. She never resents his past or his violence. She simply offers him peace, and he takes it, surprised that such a thing was possible for a man like him.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Their Children</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sharpe and Lucille have a son, Patrick-Henri, named after Patrick Harper. The boy grows up on the Normandy farm and eventually becomes a French cavalry officer, much to his father&rsquo;s chagrin. The detail is one of Cornwell&rsquo;s most affectionate: the son of a British rifleman riding as a French hussar.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">How She Differs from Teresa and Jane</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Teresa was passion and war: a guerrilla fighter who matched Sharpe in courage and ferocity. Their love was intense but shaped by the battlefield. Jane Gibbons was ambition and betrayal: a young woman who wanted the glamour of a war hero but not the reality of the man. Lucille is peace and permanence. She asks nothing of Sharpe except that he come home. It is the simplest of her gifts and the most profound.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV Portrayal</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Lucille is played by Cecile Paoli in the ITV television series, appearing in Sharpe&rsquo;s Revenge, Sharpe&rsquo;s Waterloo, and Sharpe&rsquo;s Peril. Paoli brings a quiet warmth to the role that captures Lucille&rsquo;s essential quality: the calm centre that holds Sharpe&rsquo;s world together.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Lucille in Sharpe?", a: "Lucille Castineau is a French widow living on a farm in Normandy. She becomes Sharpe's enduring companion after the wars." },
            { q: "Does Sharpe end up with Lucille?", a: "Yes. Sharpe settles with Lucille on her farm in Normandy. She is still with him at the end of Sharpe's Devil." },
            { q: "Where do Sharpe and Lucille live?", a: "On Lucille's family farm in Normandy, France. They have a son, Patrick-Henri, named after Harper." },
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
            <Link href="/fiction/characters/teresa" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Teresa Moreno</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
