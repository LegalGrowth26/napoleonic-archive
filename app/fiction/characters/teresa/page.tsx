import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Teresa Moreno — La Aguja",
  description: "Teresa Moreno: La Aguja, the Needle. Spanish guerrilla fighter, Sharpe's first wife, and one of the most important characters in Bernard Cornwell's Sharpe series.",
  path: "/fiction/characters/teresa",
  keywords: ["Teresa Moreno", "La Aguja", "Sharpe Teresa", "Assumpta Serna", "Sharpe's Gold"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Teresa Moreno", description: "Fictional character from Bernard Cornwell's Sharpe novels. Spanish guerrilla leader and Sharpe's first wife.", url: `${SITE.baseUrl}/fiction/characters/teresa` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Teresa in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Teresa Moreno is a Spanish guerrilla fighter and partisan leader who becomes Sharpe's first wife and the mother of his daughter Antonia." } },
  { "@type": "Question", name: "How does Teresa die in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Teresa is killed by Hakeswill in Sharpe's Enemy. He fires his musket blindly as she rides after him and the bullet catches her in the throat. She dies instantly." } },
  { "@type": "Question", name: "Who plays Teresa in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Teresa is played by Assumpta Serna in the ITV television series, appearing in Sharpe's Gold, Sharpe's Battle and Sharpe's Company." } },
] };

export default function TeresaPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Teresa Moreno</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">La Aguja &middot; The Needle</p>
          <div className="ornament my-8 text-gold/70"><span>❦</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Gold" }, { label: "Fate", value: "Killed by Hakeswill" }, { label: "Nationality", value: "Spanish" }, { label: "Portrayed By", value: "Assumpta Serna" }].map((f) => (
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
          src="/Teresa.png"
          alt="Teresa Moreno, the Spanish guerrilla fighter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Teresa?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Teresa Moreno is the first great love of Richard Sharpe&rsquo;s life. A Spanish guerrilla fighter, fierce, independent and courageous, she commands a band of partisans in the mountains of Spain. She takes the partisan name La Aguja, The Needle, after she kills El Cat&oacute;lico and takes over his band. She is everything Sharpe admires: brave, ruthless, loyal, and utterly her own woman.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Appearance</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Teresa first appears in Sharpe&rsquo;s Gold. Sharpe meets her in the Portuguese interior during the campaign around Torres Vedras. Their connection is immediate: two fighters who recognise the same quality in each other. She becomes his lover and then, across the following novels, his wife.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">La Aguja</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Teresa&rsquo;s role as a guerrilla leader is central to her character. She is not a camp follower or a passive love interest. She commands men, she fights, she kills. Her partisans operate in the mountains between the British and French lines, gathering intelligence, ambushing convoys, and making the French occupation of Spain ungovernable. In this she mirrors the real Spanish guerrillas who played such a crucial role in the Peninsular War.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Teresa and Sharpe</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Their relationship is passionate, complicated, and separated by war for long periods. Teresa and Sharpe marry the day after the storming of Badajoz. They have a daughter, Antonia. But the war keeps them apart more often than it brings them together. Teresa is always in the mountains with her guerrillas; Sharpe is always with the army. Their meetings are brief and intense.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Her Death</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Teresa is killed by Hakeswill in Sharpe&rsquo;s Enemy. He fires his musket blindly as she rides after him and the bullet catches her in the throat. She dies instantly. It is one of the most devastating moments in the entire series. Sharpe and Teresa had married the day after Badajoz; now she is gone, and their daughter Antonia is left motherless.</p>
          <p>Teresa&rsquo;s death changes Sharpe permanently. His subsequent relationships, with Jane Gibbons who betrays him and with Lucille Castineau who saves him, are shaped by the loss of the woman he loved most.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV Portrayal</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Teresa is played by Assumpta Serna in the ITV television series, appearing in Sharpe&rsquo;s Gold, Sharpe&rsquo;s Battle and Sharpe&rsquo;s Company. Serna brings a fierce intelligence to the role that captures Teresa&rsquo;s independence and courage.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Teresa in Sharpe?", a: "Teresa Moreno is a Spanish guerrilla fighter and partisan leader who becomes Sharpe's first wife and the mother of his daughter Antonia." },
            { q: "How does Teresa die in Sharpe?", a: "Teresa is killed by Hakeswill in Sharpe's Enemy. He fires his musket blindly and the bullet catches her in the throat." },
            { q: "Who plays Teresa in Sharpe?", a: "Assumpta Serna plays Teresa in the ITV television series." },
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
            <Link href="/fiction/characters/lucille" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Lucille Castineau</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/3QJNU0Q" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Gold &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
