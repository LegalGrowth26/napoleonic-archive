import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Patrick Harper — Complete Character Guide",
  description: "Patrick Harper: Sharpe's closest friend, the giant from Donegal, armed with a seven-barrelled volley gun. The complete guide to the most beloved character in the Sharpe series.",
  path: "/fiction/characters/harper",
  keywords: ["Patrick Harper", "Sharpe Harper", "Daragh O'Malley", "95th Rifles", "volley gun"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Patrick Harper", description: "Fictional character from Bernard Cornwell's Sharpe novels. Irish RSM of the 95th Rifles and Sharpe's closest friend.", url: `${SITE.baseUrl}/fiction/characters/harper` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Patrick Harper?", acceptedAnswer: { "@type": "Answer", text: "Patrick Harper is Sharpe's closest friend and companion throughout the series. An Irish sergeant from Donegal in the 95th Rifles, immensely strong and armed with a seven-barrelled volley gun." } },
  { "@type": "Question", name: "What weapon does Harper carry?", acceptedAnswer: { "@type": "Answer", text: "Harper carries a seven-barrelled Nock volley gun, a naval boarding weapon that fires seven barrels simultaneously. It is devastatingly effective at close range." } },
  { "@type": "Question", name: "Where is Harper from?", acceptedAnswer: { "@type": "Answer", text: "Harper is from Donegal in Ireland. He is Catholic and deeply devout, carrying a crucifix under his jacket." } },
  { "@type": "Question", name: "Does Harper survive the Sharpe series?", acceptedAnswer: { "@type": "Answer", text: "Yes. Harper survives the wars, returns to Ireland with his wife Isabella, and joins Sharpe for a final adventure in Chile in Sharpe's Devil." } },
] };

export default function HarperPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Patrick Harper</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Regimental Sergeant Major &middot; The Giant from Donegal</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "First Appearance", value: "Sharpe's Rifles" },
              { label: "Final Rank", value: "RSM (ret.)" },
              { label: "Regiment", value: "95th Rifles" },
              { label: "Portrayed By", value: "Daragh O'Malley" },
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
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Patrick Harper?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Patrick Harper is the most beloved character in the Sharpe series after Sharpe himself. From Donegal in the west of Ireland, he stands six feet four inches tall, is immensely strong, deeply Catholic, fiercely loyal, and possessed of a singing voice that could charm birds from trees. He carries a crucifix under his jacket and a seven-barrelled volley gun over his shoulder. He is the second most dangerous man in any room Sharpe enters, and often the first.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Meeting with Sharpe</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Harper first appears in Sharpe&rsquo;s Rifles during the disastrous retreat to Corunna in the winter of 1809. When the company&rsquo;s captain is killed, Sharpe takes command of a group of riflemen who despise him: an officer from the ranks, with no money, no breeding, and no right to command them. Harper leads the near-mutiny against Sharpe.</p>
            <p>Over the course of the novel, their relationship transforms. Harper recognises that Sharpe is the real thing: a fighter, a leader, a man who will keep them alive when a gentleman officer would get them killed. By the end of Sharpe&rsquo;s Rifles, the big Irishman has become Sharpe&rsquo;s closest friend, a bond that will last through twenty years of war and beyond.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Seven-Barrelled Volley Gun</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Harper&rsquo;s signature weapon is a seven-barrelled Nock volley gun, originally designed as a naval boarding weapon. It fires seven barrels simultaneously, producing a devastating blast at close range. The recoil is enormous and the weapon is almost impossible for a normal man to fire from the shoulder. Harper, being anything but normal, fires it with casual ease. The gun becomes as iconic as Harper himself.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Peninsular War</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Harper serves as Sharpe&rsquo;s right hand throughout the Peninsular campaign. He is promoted from private to sergeant early in the series and eventually to Regimental Sergeant Major. His courage is never in question. His strength is legendary. But his greatest quality is his judgement: he reads men better than Sharpe does, and his counsel, given quietly and without ceremony, saves Sharpe&rsquo;s life more than once.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Isabella</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Harper marries Isabella, a Spanish woman he meets during the Peninsular campaign. She follows the army throughout the later novels, devoted to Harper. After the wars they return to Ireland together. Their relationship is one of the warmest in the series, a counterpoint to the turbulence of Sharpe&rsquo;s own romantic life.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Waterloo</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Harper was discharged from the army in 1814 with Wellington&rsquo;s own signature on his discharge papers. When Napoleon escapes from Elba and war returns, Harper comes to Belgium as a civilian horse trader. Everyone knows the real reason: he cannot let Sharpe fight Waterloo alone. He joins the battle as a civilian volunteer, armed with his volley gun, and fights alongside Sharpe through the bloodiest day of the wars.</p>
            <p>It is at Waterloo that Hagman is killed, the best shot among the chosen men, and Harris dies trying to save him. Harper carries the grief of their deaths alongside the relief of survival.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">After the Wars</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Harper returns to Ireland with Isabella. In Sharpe&rsquo;s Devil he travels with Sharpe to Chile for the final adventure: the search for the missing Don Blas Vivar. The two old soldiers, grey now but still lethal, sail to South America and encounter Napoleon on St Helena. It is the last journey of the greatest partnership in historical fiction.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Harper in the TV Series</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Daragh O&rsquo;Malley played Patrick Harper across all sixteen ITV television films from 1993 to 2008. The chemistry between O&rsquo;Malley and Sean Bean is widely considered the heart of the TV series. O&rsquo;Malley&rsquo;s Harper is warmer, funnier and more openly emotional than the novel version, but the core of the character, the loyalty, the strength, the unshakeable friendship, is the same.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Patrick Harper?", a: "Patrick Harper is Sharpe's closest friend and companion throughout the series. An Irish sergeant from Donegal, immensely strong and armed with a seven-barrelled volley gun." },
            { q: "What weapon does Harper carry?", a: "A seven-barrelled Nock volley gun, a naval boarding weapon that fires seven barrels simultaneously." },
            { q: "Where is Harper from?", a: "Donegal in Ireland. He is Catholic and carries a crucifix under his jacket." },
            { q: "Does Harper survive the Sharpe series?", a: "Yes. Harper survives the wars, returns to Ireland with Isabella, and joins Sharpe for a final adventure in Chile." },
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
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Rifles &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
