import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Captain Leroy — The American in Sharpe",
  description: "Captain Thomas Leroy: the American from a Boston Loyalist family fighting for a German king. His death at Vitoria is one of the most quietly devastating moments in the series.",
  path: "/fiction/characters/leroy",
  keywords: ["Thomas Leroy Sharpe", "Captain Leroy", "South Essex", "Vitoria", "American Sharpe"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Captain Thomas Leroy", description: "Fictional character from Bernard Cornwell's Sharpe novels. American-born officer in the South Essex, killed at Vitoria.", url: `${SITE.baseUrl}/fiction/characters/leroy` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Leroy in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Thomas Leroy is an American-born officer in the South Essex from a Boston Loyalist family. He describes himself as an American with a French name from a Loyalist family fighting for an English king of German descent." } },
  { "@type": "Question", name: "How does Leroy die?", acceptedAnswer: { "@type": "Answer", text: "Leroy is killed at the Battle of Vitoria leading his men on foot into the village of Gamarra Mayor. He is shot in the head. It is his first battle as Battalion Commander." } },
  { "@type": "Question", name: "What nationality is Leroy in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "American. His Loyalist family left the United States after the Revolution and he joined the British Army." } },
] };

export default function LeroyPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Captain Thomas Leroy</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The American &middot; Sharpe&rsquo;s Most Unlikely Ally</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Eagle" }, { label: "Nationality", value: "American" }, { label: "Regiment", value: "South Essex" }, { label: "Fate", value: "Killed at Vitoria" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Leroy?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Thomas Leroy is an American fighting for the British Crown. From a Boston Loyalist family who left America after the Revolution, he joined the British army and ended up in the South Essex. He describes himself with characteristically dry wit as an American with a French name from a Loyalist family fighting for an English king of German descent. Silent, watchful, invariably with a cigar in his mouth, he is one of the most quietly compelling characters in the series.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Character</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Dry wit, complete reliability in a fight, no patience for incompetence. Leroy and Sharpe respect each other without ever becoming close friends in the way Sharpe and Harper are. There is a distance between them, not unfriendly but real: two outsiders who recognise each other&rsquo;s quality without needing to declare it. Leroy&rsquo;s American origins make him an outsider in the British army in a way that parallels Sharpe&rsquo;s class isolation.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Career Progression</h2>
        <div className="space-y-4">
          {[
            { rank: "Captain", book: "Sharpe's Eagle", note: "Described by Lennox as the only other decent soldier in the battalion" },
            { rank: "Captain", book: "Sharpe's Company", note: "Passed over for promotion to Major in favour of Collett" },
            { rank: "Major", book: "Sharpe's Sword", note: "South Essex" },
            { rank: "Lieutenant Colonel", book: "Sharpe's Honour", note: "Takes command after Forrest transfers. Killed at Gamarra Mayor" },
          ].map((step, i) => (
            <div key={`${step.book}-${i}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 border-b border-gold/15 pb-4">
              <div className="font-display text-gold-pale uppercase tracking-widest text-sm sm:w-48 shrink-0">{step.rank}</div>
              <div className="text-burgundy-bright text-sm font-serif sm:w-48 shrink-0">{step.book}</div>
              <div className="text-parchment/90 font-serif text-sm">{step.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Death</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Leroy is killed at the Battle of <Link href="/battles/vitoria" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Vitoria</Link> leading his men on foot into the village of Gamarra Mayor. Shot in the head. He dies in his first battle as Battalion Commander. It is one of the most quietly devastating deaths in the entire series: a man who waited years for command, who was passed over repeatedly while lesser men were promoted, who finally got what he deserved only to be killed on the day he proved he deserved it.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Leroy in Sharpe?", a: "An American-born officer in the South Essex from a Boston Loyalist family. Silent, watchful, invariably with a cigar." },
            { q: "How does Leroy die?", a: "Killed at Vitoria leading his men on foot into Gamarra Mayor. Shot in the head in his first battle as Battalion Commander." },
            { q: "What nationality is Leroy in Sharpe?", a: "American. His Loyalist family left the United States after the Revolution." },
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
            <Link href="/battles/vitoria" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Vitoria</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
