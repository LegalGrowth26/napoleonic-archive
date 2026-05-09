import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Peter d'Alembord — Sharpe Character Guide",
  description: "Captain Peter d'Alembord: officer and gentleman, Sharpe's most reliable subordinate in the later Peninsular novels and at Waterloo.",
  path: "/fiction/characters/dalembord",
  keywords: ["d'Alembord Sharpe", "Peter d'Alembord", "South Essex", "Sharpe's Regiment"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Captain Peter d'Alembord", description: "Fictional character from Bernard Cornwell's Sharpe novels. South Essex officer and Sharpe's most reliable subordinate.", url: `${SITE.baseUrl}/fiction/characters/dalembord` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is d'Alembord in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Captain Peter d'Alembord is an officer in the South Essex Regiment and one of Sharpe's most trusted subordinates. Steady, reliable and brave, he appears from Sharpe's Regiment through Sharpe's Waterloo." } },
  { "@type": "Question", name: "Is d'Alembord at Waterloo?", acceptedAnswer: { "@type": "Answer", text: "Yes. D'Alembord is present at Waterloo as an officer in the Prince of Wales Own Volunteers. He survives the battle." } },
  { "@type": "Question", name: "What regiment is d'Alembord in?", acceptedAnswer: { "@type": "Answer", text: "The South Essex Regiment (later the Prince of Wales Own Volunteers)." } },
] };

export default function DAlembordPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Captain Peter d&rsquo;Alembord</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Officer and Gentleman &middot; Sharpe&rsquo;s Most Reliable Subordinate</p>
          <div className="ornament my-8 text-gold/70"><span>♛</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Regiment" }, { label: "Regiment", value: "South Essex" }, { label: "Role", value: "Company commander" }, { label: "TV Films", value: "Regiment, Waterloo" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is d&rsquo;Alembord?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Captain Peter d&rsquo;Alembord is everything Sharpe is not in terms of background: well-born, well-educated, comfortable in society. Yet he respects and follows Sharpe without reservation. He is the kind of officer who makes everything around him work: steady, reliable, brave without being reckless. While Price provides comic relief and Harper provides muscle, d&rsquo;Alembord provides competence.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Career</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>D&rsquo;Alembord first appears in Sharpe&rsquo;s Regiment, joining the investigation into the South Essex crimping racket. He stays with Sharpe through the Atlantic coast raid (Sharpe&rsquo;s Siege), the campaign in France (Sharpe&rsquo;s Revenge), and finally at Waterloo. By the Hundred Days he is one of the senior officers of the Prince of Wales Own Volunteers, the regiment that was once the South Essex.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">At Waterloo</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>D&rsquo;Alembord is present throughout the battle. His quiet competence in the chaos of the day is one of the understated threads of Sharpe&rsquo;s Waterloo. He survives, one of the few South Essex officers to have served from the Regiment through to the final battle.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Who is d'Alembord in Sharpe?", a: "An officer in the South Essex and one of Sharpe's most trusted subordinates. Steady, reliable and brave." },
              { q: "Is d'Alembord at Waterloo?", a: "Yes. He is an officer in the Prince of Wales Own Volunteers and survives the battle." },
              { q: "What regiment is d'Alembord in?", a: "The South Essex Regiment (later the Prince of Wales Own Volunteers)." },
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
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
          <Link href="/fiction/characters/price" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Harry Price</Link>
          <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
        </div>
      </section>
    </>
  );
}
