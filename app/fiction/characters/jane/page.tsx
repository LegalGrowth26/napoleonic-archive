import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Jane Gibbons — Sharpe's Second Wife",
  description: "Jane Gibbons: Sharpe's second wife, the woman who left him for Lord Rossendale. The complete guide to one of the most complex characters in the Sharpe series.",
  path: "/fiction/characters/jane",
  keywords: ["Jane Gibbons", "Jane Sharpe", "Sharpe wife", "Abigail Cruttenden", "Sharpe's Regiment"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Jane Gibbons", description: "Fictional character from Bernard Cornwell's Sharpe novels. Sharpe's second wife.", url: `${SITE.baseUrl}/fiction/characters/jane` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Jane in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Jane Gibbons is Sharpe's second wife, met during the investigation into the South Essex crimping racket in Sharpe's Regiment. She later leaves him for Lord John Rossendale." } },
  { "@type": "Question", name: "Does Jane betray Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Yes. While Sharpe is on campaign in France, Jane begins an affair with Lord Rossendale and takes Sharpe's money. Sharpe returns to find himself abandoned and nearly bankrupt." } },
  { "@type": "Question", name: "Who plays Jane in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Abigail Cruttenden plays Jane in the ITV television series across Sharpe's Regiment, Sharpe's Siege, Sharpe's Revenge and Sharpe's Waterloo." } },
  { "@type": "Question", name: "What happens to Jane Gibbons?", acceptedAnswer: { "@type": "Answer", text: "Jane leaves Sharpe for Lord Rossendale. She appears in Sharpe's Waterloo but her ultimate fate after the battle is not described in the novels." } },
] };

export default function JanePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Jane Gibbons</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Sharpe&rsquo;s Second Wife &middot; The Woman Who Left Him</p>
          <div className="ornament my-8 text-gold/70"><span>❦</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Regiment" }, { label: "Nationality", value: "English" }, { label: "Role", value: "Sharpe's second wife" }, { label: "Portrayed By", value: "Abigail Cruttenden" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Jane Gibbons?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Jane Gibbons is Sharpe&rsquo;s second wife. Young, beautiful, well-born, and initially devoted to Sharpe, she represents everything about civilian English life that he has never had: respectability, comfort, a home. She is the niece of Sir Henry Simmerson, though she is nothing like her uncle. Meeting Sharpe during his investigation into the South Essex crimping racket, she is attracted to his fame and his physical presence. He is attracted to her beauty and her apparent admiration.</p>
          <p>The marriage is probably a mistake from the beginning. Jane wants the glamour of a war hero; she is not prepared for the reality of the man, or for the poverty and violence of life on campaign.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Meeting</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sharpe meets Jane in Sharpe&rsquo;s Regiment, when he returns to England to investigate the South Essex battalion&rsquo;s crimping racket. Jane is connected to the world of Lord Fenner and the corruption surrounding the battalion. Their relationship develops quickly against the backdrop of danger and intrigue. Sharpe, recently widowed after Teresa&rsquo;s murder, is vulnerable. Jane is young and dazzled by his reputation. They marry.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Betrayal</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>While Sharpe is on campaign in France during Sharpe&rsquo;s Revenge, Jane begins an affair with Lord John Rossendale, a young, wealthy cavalry officer who represents everything Sharpe is not: well-born, charming, rich, and socially confident. Jane drains Sharpe&rsquo;s finances, taking his prize money and savings. When Sharpe returns from France he finds himself abandoned, nearly bankrupt, and accused of theft by the army.</p>
          <p>The betrayal is complete: his wife, his money, and his reputation are all gone. It is the lowest point of Sharpe&rsquo;s life, and it drives him to Normandy, to Lucille, and ultimately to the peace he never expected to find.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why She Left</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Jane is not simply a villain. Cornwell presents her as a young woman who married a man she barely knew, found herself in a world she was not prepared for, and made choices that were understandable even if unforgivable. She wanted comfort and security; Sharpe offered neither. She wanted social standing; Sharpe, for all his rank, would always be the man from the gutter. The marriage was a mismatch of expectations, and when a man who could offer what Sharpe could not appeared, she took the easier path.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Her Fate</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Jane and Rossendale appear in Sharpe&rsquo;s Waterloo. Sharpe wants to kill Rossendale but the battle intervenes. Her ultimate fate after the war is not described in the novels. She simply vanishes from Sharpe&rsquo;s life, replaced by Lucille and the peace of Normandy.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV Portrayal</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Abigail Cruttenden plays Jane across four ITV films: Sharpe&rsquo;s Regiment, Sharpe&rsquo;s Siege, Sharpe&rsquo;s Revenge and Sharpe&rsquo;s Waterloo. Cruttenden captures both the initial charm and the later coldness of the character. The TV series compresses the timeline but preserves the essential arc: attraction, marriage, betrayal, abandonment.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Teresa, Jane and Lucille</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p><Link href="/fiction/characters/teresa" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Teresa</Link> was passion and partnership: a guerrilla fighter who matched Sharpe in courage and loved him for what he was. Jane was ambition and incompatibility: a young woman who loved the idea of Sharpe but not the reality. <Link href="/fiction/characters/lucille" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Lucille</Link> is peace and permanence: a woman who asks nothing of Sharpe except that he come home. Jane sits in the middle of this emotional journey, the lesson Sharpe had to learn before he could accept what Lucille offered.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Who is Jane in Sharpe?", a: "Jane Gibbons is Sharpe's second wife, met during the crimping-racket investigation in Sharpe's Regiment. She later leaves him for Lord Rossendale." },
              { q: "Does Jane betray Sharpe?", a: "Yes. She begins an affair with Lord Rossendale while Sharpe is on campaign and takes his money." },
              { q: "Who plays Jane in Sharpe?", a: "Abigail Cruttenden across four ITV films." },
              { q: "What happens to Jane Gibbons?", a: "She leaves Sharpe for Rossendale. Her fate after Sharpe's Waterloo is not described." },
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
          <Link href="/fiction/characters/lucille" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Lucille Castineau</Link>
          <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
        </div>
      </section>
    </>
  );
}
