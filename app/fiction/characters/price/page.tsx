import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Lieutenant Harry Price — Sharpe Character Guide",
  description: "Lieutenant Harry Price: the inveterate gambler, Sharpe's most cheerful officer. From Hampshire, youngest son of a shipwright, always in debt, always surviving.",
  path: "/fiction/characters/price",
  keywords: ["Harry Price Sharpe", "Lieutenant Price", "South Essex", "Sharpe's Company"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Lieutenant Harry Price", description: "Fictional character from Bernard Cornwell's Sharpe novels. South Essex lieutenant, gambler, and one of Sharpe's most cheerful officers.", url: `${SITE.baseUrl}/fiction/characters/price` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Harry Price in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Lieutenant Harry Price is an officer in the South Essex. From Hampshire, youngest son of a shipwright. An inveterate gambler and self-confessed seducer. Sharpe likes him despite himself." } },
  { "@type": "Question", name: "Does Price survive Waterloo?", acceptedAnswer: { "@type": "Answer", text: "Yes. Price survives Waterloo as an officer in the Prince of Wales Own Volunteers." } },
  { "@type": "Question", name: "What happens to Price in Sharpe's Company?", acceptedAnswer: { "@type": "Answer", text: "Price first appears in Sharpe's Company at Badajoz. In the TV version he is shot by Hakeswill, though his novel fate differs." } },
] };

export default function PricePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Lieutenant Harry Price</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The Inveterate Gambler &middot; Sharpe&rsquo;s Most Cheerful Officer</p>
          <div className="ornament my-8 text-gold/70"><span>❦</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Company" }, { label: "Regiment", value: "South Essex" }, { label: "Character", value: "Gambler, optimist" }, { label: "TV Films", value: "Company, Enemy, Honour, Waterloo" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Price?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Harry Price is from Hampshire, youngest son of a shipwright. He is an inveterate gambler, a self-confessed seducer of women, cheerful in the face of death, and completely unreliable with money. Sharpe likes him despite himself. Where d&rsquo;Alembord is steady and Harper is solid, Price is the wild card: always in debt, always optimistic, always somehow surviving.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Appearance</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Price first appears in Sharpe&rsquo;s Company at Badajoz. In the ITV television version he is shot by Hakeswill during the storming, though his fate in the novel at Badajoz is different. This novel-vs-TV divergence is one of the more notable differences between the two versions of the character.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Gambling</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Price&rsquo;s gambling is a running thread through his appearances. He is always in debt and always confident his luck is about to turn. It is both his weakness and his charm: his optimism in the face of impossible odds applies as much to the card table as to the battlefield. Harper disapproves. Sharpe is amused. Price carries on regardless.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">At Waterloo</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>By Sharpe&rsquo;s Waterloo, Price is a lieutenant in the Prince of Wales Own Volunteers. His concern for his brother, caught up in the Prince of Orange&rsquo;s disastrous orders that send infantry into line when they should be in square, gives him one of his most human moments in the series. It is the one time we see Price genuinely afraid, not for himself but for family. He survives the battle.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Harry Price in Sharpe?", a: "A lieutenant in the South Essex. Gambler, optimist, youngest son of a shipwright from Hampshire." },
            { q: "Does Price survive Waterloo?", a: "Yes. He survives as an officer in the Prince of Wales Own Volunteers." },
            { q: "What happens to Price in Sharpe's Company?", a: "He first appears at Badajoz. In the TV version he is shot by Hakeswill; the novel version differs." },
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
            <Link href="/fiction/characters/dalembord" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">d&rsquo;Alembord</Link>
            <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
