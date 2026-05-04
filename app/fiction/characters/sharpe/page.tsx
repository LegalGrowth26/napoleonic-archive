import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";
import { sharpeCharacters } from "@/data/sharpe-characters";

export const metadata = pageMeta({
  title: "Richard Sharpe — Complete Character Guide",
  description:
    "The complete guide to Richard Sharpe: his origins, career from private to lieutenant colonel, the women in his life, and his journey through Bernard Cornwell's 24 Sharpe novels.",
  path: "/fiction/characters/sharpe",
  keywords: ["Richard Sharpe", "Sharpe character", "Bernard Cornwell", "95th Rifles", "Sharpe novels"],
  type: "article",
});

const sharpe = sharpeCharacters.find((c) => c.name === "Richard Sharpe");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Richard Sharpe",
  description: "Fictional protagonist of Bernard Cornwell's Sharpe novels. Rises from private to lieutenant colonel during the Napoleonic Wars.",
  url: `${SITE.baseUrl}/fiction/characters/sharpe`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is Richard Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Richard Sharpe is the fictional protagonist of Bernard Cornwell's 24-novel series set during the Napoleonic Wars. Born in poverty in London, he rises from private soldier to lieutenant colonel entirely through battlefield merit." } },
    { "@type": "Question", name: "What regiment is Sharpe in?", acceptedAnswer: { "@type": "Answer", text: "Sharpe begins in the 33rd Regiment of Foot, transfers to the 95th Rifles, and is later attached to the fictional South Essex Regiment." } },
    { "@type": "Question", name: "What rank does Sharpe reach?", acceptedAnswer: { "@type": "Answer", text: "Sharpe reaches the rank of Lieutenant Colonel by the Battle of Waterloo in 1815." } },
    { "@type": "Question", name: "Who does Sharpe marry?", acceptedAnswer: { "@type": "Answer", text: "Sharpe marries Teresa Moreno (killed by Hakeswill) and later Jane Gibbons (who leaves him). His enduring companion is Lucille Castineau, with whom he settles in Normandy." } },
    { "@type": "Question", name: "Does Sharpe die?", acceptedAnswer: { "@type": "Answer", text: "No. Sharpe survives the Napoleonic Wars and retires to Normandy with Lucille Castineau. He is alive at the end of Sharpe's Devil, the final novel chronologically." } },
  ],
};

export default function SharpePage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Richard Sharpe</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Private to Lieutenant Colonel &middot; The Man Behind the Legend</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "First Appearance", value: "Sharpe's Tiger" },
              { label: "Final Rank", value: "Lieutenant Colonel" },
              { label: "Regiment", value: "95th Rifles" },
              { label: "Portrayed By", value: "Sean Bean" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="/richard-sharpe.png"
          alt="Richard Sharpe in his green rifleman's jacket"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Richard Sharpe?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Richard Sharpe is the protagonist of Bernard Cornwell&rsquo;s twenty-four-novel series set during the Napoleonic Wars. Born in a Cat Lane brothel in London, raised in a foundling home, enlisted in the army at sixteen to escape a murder charge, he is the most unlikely officer in the British Army. He has no money, no education, no connections, and no social graces. What he has is a talent for violence, an instinct for ground, and a stubborn refusal to die.</p>
          <p>Across the series, Sharpe rises from private soldier to lieutenant colonel entirely through battlefield merit, the only man in the army to have done so. He carries a Baker rifle, a heavy cavalry sword he prefers to the regulation officer&rsquo;s sabre, and a permanent chip on his shoulder about the gentlemen who bought their commissions while he earned his in blood.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Early Life and India</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sharpe enlists in the 33rd Regiment of Foot and sails to India, where he serves under the brutal Sergeant Hakeswill and the cold, precise Colonel Arthur Wellesley. At Seringapatam in 1799 he volunteers for a clandestine mission inside Tippu Sultan&rsquo;s fortress. At Assaye in 1803 he saves Wellesley&rsquo;s life on the battlefield and receives a battlefield commission, the event that transforms his life and makes him an officer.</p>
            <p>India gives Sharpe his commission, his first patron in Colonel McCandless, his first enemy in Hakeswill, and his first experience of the man who will shape his career: Wellington.</p>
          </div>
          <div className="mt-6">
            <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">India Section &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Peninsular War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Peninsular War is the heart of the Sharpe series. Sharpe transfers to the 95th Rifles and is attached to the fictional South Essex Regiment. He leads his chosen men, the picked riflemen who form the core of his command, through six years of campaigning from the retreat to Corunna in 1809 to the invasion of France in 1814.</p>
          <p>The key moments of his Peninsular career: the storming of Badajoz, where Teresa is murdered by Hakeswill; the victory at Salamanca; the triumph at Vitoria. Each battle costs him something and teaches him something. By the end of the war he is one of the most experienced combat officers in the army, respected by Wellington, feared by the French, and resented by every gentleman officer who bought his rank.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Physical Description</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Six feet tall, angular tanned face, black hair, blue eyes, with a slash of a scar on his left cheek from a Tippoo cavalryman&rsquo;s sword. He wears the green jacket of the 95th Rifles. In the novels he is London-born with a cockney accent; in the TV series, Sean Bean plays him as a Yorkshireman. Cornwell accepted the change and later wrote that Bean&rsquo;s portrayal influenced how he imagined the character.</p>
          </div>
        </div>
      </section>

      {sharpe?.career && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Military Career</h2>
          <div className="space-y-4">
            {sharpe.career.map((step, i) => (
              <div key={`${step.book}-${i}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 border-b border-gold/15 pb-4">
                <div className="font-display text-gold-pale uppercase tracking-widest text-sm sm:w-48 shrink-0">{step.rank}</div>
                <div className="text-burgundy-bright text-sm font-serif sm:w-48 shrink-0">{step.book}</div>
                {step.notes && <div className="text-parchment/90 font-serif text-sm">{step.notes}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Women in His Life</h2>
          <div className="space-y-6">
            {[
              { name: "Mary Bickerstaff", detail: "Camp follower. Sharpe's lover in India. Leaves him at the end of Sharpe's Tiger." },
              { name: "Teresa Moreno", detail: "Spanish guerrilla fighter. Sharpe's first wife and the mother of his daughter Antonia. Killed by Hakeswill." },
              { name: "Lady Grace Hale", detail: "Sharpe's lover during the voyage to Trafalgar. Dies in childbirth. The child does not survive." },
              { name: "Jane Gibbons", detail: "Sharpe's second wife. Leaves him for Lord Rossendale while Sharpe is on campaign." },
              { name: "Lucille Castineau", detail: "French widow. Sharpe's enduring companion. They settle together on her farm in Normandy after the wars. The great love of his later life." },
            ].map((w) => (
              <div key={w.name} className="card p-5 rounded-sm">
                <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-1">{w.name}</h3>
                <p className="text-parchment/95 font-serif text-sm">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Children</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p><span className="text-gold-pale">Antonia</span> (with Teresa Moreno). Left in Spain after Teresa&rsquo;s death. Her ultimate fate is not clearly resolved in the main series.</p>
          <p><span className="text-gold-pale">Patrick-Henri</span> (with Lucille Castineau). Named after Patrick Harper. Becomes a French cavalry officer, much to his father&rsquo;s chagrin.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Waterloo and After</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sharpe fights at Waterloo as a lieutenant colonel attached to the Prince of Orange&rsquo;s staff. He witnesses the Prince&rsquo;s catastrophic incompetence, fights in the crisis around La Haye Sainte, and survives the final defeat of the Imperial Guard. Harper comes to the battle as a civilian volunteer, discharged from the army but unable to stay away.</p>
            <p>After Waterloo, Sharpe retires to Normandy with Lucille. In Sharpe&rsquo;s Devil, the final novel chronologically, he travels to Chile with Harper to find the missing Don Blas Vivar. On the voyage he encounters Napoleon on St Helena, a brief, atmospheric meeting between the soldier and the emperor. It is one of Cornwell&rsquo;s most affecting scenes.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Makes Sharpe Different</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Sharpe&rsquo;s class resentment defines him. He is an officer who can outfight any gentleman in the army but can never outspend them. His relationship with Wellington is one of mutual respect without warmth. His bond with Harper is the emotional core of the series. His hatred of Hakeswill gives the novels their darkest villain. And his repeated survival against impossible odds makes him, for all his flaws, the most compelling soldier in historical fiction.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The TV Series</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Sean Bean played Richard Sharpe across sixteen ITV television films between 1993 and 2008. In the novels Sharpe is London-born and cockney; Bean played him as a Yorkshireman. Cornwell accepted the change and later said Bean&rsquo;s portrayal influenced his writing. The TV series, filmed largely in Turkey and Portugal, brought Sharpe to millions of viewers and remains one of the most successful historical drama series in British television.</p>
          </div>
          <div className="mt-6">
            <Link href="/fiction#tv-series" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">The TV Series &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Who is Richard Sharpe?", a: "Richard Sharpe is the fictional protagonist of Bernard Cornwell's 24-novel series set during the Napoleonic Wars. Born in poverty in London, he rises from private soldier to lieutenant colonel entirely through battlefield merit." },
            { q: "What regiment is Sharpe in?", a: "Sharpe begins in the 33rd Regiment of Foot, transfers to the 95th Rifles, and is later attached to the fictional South Essex Regiment." },
            { q: "What rank does Sharpe reach?", a: "Sharpe reaches the rank of Lieutenant Colonel by the Battle of Waterloo in 1815." },
            { q: "Who does Sharpe marry?", a: "Sharpe marries Teresa Moreno (killed by Hakeswill) and later Jane Gibbons (who leaves him). His enduring companion is Lucille Castineau, with whom he settles in Normandy." },
            { q: "Does Sharpe die?", a: "No. Sharpe survives the Napoleonic Wars and retires to Normandy with Lucille Castineau. He is alive at the end of Sharpe's Devil." },
          ].map(({ q, a }) => (
            <details key={q} className="card rounded-sm">
              <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-gold font-display text-sm mt-0.5 shrink-0" aria-hidden="true">Q</span>
                <span className="font-display text-lg text-gold-pale tracking-wide leading-snug">{q}</span>
              </summary>
              <div className="px-5 pb-5 pt-2 border-t border-gold/15">
                <p className="text-parchment leading-relaxed font-serif">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">All 24 Novels &rarr;</Link>
            <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
            <Link href="/fiction/characters/harper" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Patrick Harper</Link>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Rifles &rarr;</a>
            <a href="https://amzn.to/4cMW7df" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Waterloo &rarr;</a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
