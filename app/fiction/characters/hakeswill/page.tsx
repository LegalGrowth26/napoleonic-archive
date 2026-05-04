import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Obadiah Hakeswill — The Complete Guide",
  description: "Sergeant Obadiah Hakeswill: the man who could not be killed. The complete guide to the greatest villain in the Sharpe series, played by Pete Postlethwaite.",
  path: "/fiction/characters/hakeswill",
  keywords: ["Obadiah Hakeswill", "Sharpe villain", "Pete Postlethwaite", "Sharpe's Enemy", "Sharpe's Company"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Obadiah Hakeswill", description: "Fictional villain from Bernard Cornwell's Sharpe novels. A sergeant in the 33rd Foot and later the South Essex.", url: `${SITE.baseUrl}/fiction/characters/hakeswill` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Hakeswill in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Obadiah Hakeswill is the principal recurring villain of the Sharpe series. A sergeant who torments Sharpe from his earliest days as a soldier and eventually murders Teresa Moreno." } },
  { "@type": "Question", name: "How does Hakeswill die?", acceptedAnswer: { "@type": "Answer", text: "Hakeswill is tried and sentenced to death by firing squad in Sharpe's Enemy. Sharpe commands the execution." } },
  { "@type": "Question", name: "Who plays Hakeswill?", acceptedAnswer: { "@type": "Answer", text: "Pete Postlethwaite played Hakeswill in Sharpe's Company and Sharpe's Enemy, a performance widely considered one of the finest villain portrayals in British television." } },
  { "@type": "Question", name: "Why does Hakeswill twitch?", acceptedAnswer: { "@type": "Answer", text: "Hakeswill was hanged at age 12 and survived. The botched hanging left him with a terrible scar on his neck and an uncontrollable facial twitch." } },
] };

export default function HakeswillPage() {
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
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Sergeant Obadiah Hakeswill</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The Man Who Could Not Be Killed</p>
          <div className="ornament my-8 text-gold/70"><span>❦</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "First Appearance", value: "Sharpe's Tiger" },
              { label: "Final Appearance", value: "Sharpe's Enemy" },
              { label: "Fate", value: "Executed" },
              { label: "Portrayed By", value: "Pete Postlethwaite" },
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
      <div className="relative w-full h-[250px] md:h-[400px]">
        <img
          src="/Dark-Sergeant.png"
          alt="Sergeant Obadiah Hakeswill in the shadows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Hakeswill?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Obadiah Hakeswill is one of the greatest villains in British fiction. Tall, with a huge belly and a long scrawny neck bearing a terrible scar. Jaundiced yellowish skin, baby-blue eyes, blond hair going grey. He twitches uncontrollably, a facial tic that never stops. He genuinely believes he cannot be killed, because he was hanged at the age of twelve and survived. The hanging left him with the scar, the twitch, and an unshakeable conviction that God protects him.</p>
          <p>He is a bully, a thief, a rapist, a murderer, and a liar. He quotes scripture to justify every act of villainy. He is Sharpe&rsquo;s oldest and most personal enemy, and Bernard Cornwell&rsquo;s darkest creation.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Origins</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Hakeswill was hanged at the age of twelve, reportedly for a crime he may not have committed. The rope broke, or the drop was too short, and the boy survived. The experience left him with the scar around his neck, the permanent facial twitch, and a deranged belief in his own indestructibility. From that moment he believed that God had spared him and that no man could kill him. It says so in the scriptures.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Hakeswill and Sharpe</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Their enmity goes back to Sharpe&rsquo;s earliest days as a soldier in the 33rd Foot. Hakeswill was the sergeant of Sharpe&rsquo;s company in India, and he made the young private&rsquo;s life a misery. He had Sharpe flogged. He robbed, bullied and tormented every man under his command, with the complicity of Captain Morris. Their relationship runs through five novels, from Sharpe&rsquo;s Tiger to Sharpe&rsquo;s Enemy.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Crimes</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The catalogue of Hakeswill&rsquo;s crimes across the series: he torments and robs the men of his company. He frames Patrick Harper for theft. He murders Colonel McCandless in the confusion of battle to prevent McCandless from protecting Sharpe. He kills Teresa Moreno. He fires his musket blindly as she rides after him and the bullet catches her in the throat. She dies instantly.</p>
            <p>Each crime deepens the reader&rsquo;s desire for his destruction, and Cornwell delays the satisfaction with diabolical skill.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="card p-8 rounded-sm border-burgundy-bright/40 bg-burgundy-deep/15">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4">&ldquo;It Says So in the Scriptures&rdquo;</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Hakeswill&rsquo;s famous catchphrase. He invokes scripture to justify everything he does, from petty theft to murder. His deranged religiosity is one of the most unsettling aspects of his character: he genuinely believes that God is on his side, that he is protected by divine providence, and that his victims deserved what they got. The twitch gets worse when he is agitated, and his baby-blue eyes stare with the vacant certainty of a man who has been to the gallows and come back.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Death</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>In Sharpe&rsquo;s Enemy, Hakeswill leads a gang of deserters who have seized a mountain village. He is captured, tried, and sentenced to death by firing squad. Sharpe commands the execution. Hakeswill&rsquo;s last words are directed at Sharpe, his greatest enemy. The firing squad fires. The man who could not be killed is killed at last.</p>
            <p>It is one of the most satisfying moments in the entire series, and Cornwell earns it by making the reader wait through five novels for justice.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Novel vs TV</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Pete Postlethwaite played Hakeswill in two ITV television films: Sharpe&rsquo;s Company and Sharpe&rsquo;s Enemy. His performance is widely considered one of the finest villain portrayals in British television drama. The twitching, the baby-blue stare, the wheedling voice quoting scripture: Postlethwaite made Hakeswill unforgettable.</p>
          <p>The television Hakeswill is introduced in the Peninsular War. The India novels, which establish his origin as Sharpe&rsquo;s tormentor in the 33rd Foot, were written later and were never filmed. This means TV viewers meet Hakeswill without the backstory that novel readers know, which makes his villainy seem more sudden but no less powerful.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Who is Hakeswill in Sharpe?", a: "Obadiah Hakeswill is the principal recurring villain of the Sharpe series. A sergeant who torments Sharpe from his earliest days as a soldier and eventually murders Teresa Moreno." },
              { q: "How does Hakeswill die?", a: "Hakeswill is tried and sentenced to death by firing squad in Sharpe's Enemy. Sharpe commands the execution." },
              { q: "Who plays Hakeswill?", a: "Pete Postlethwaite played Hakeswill in Sharpe's Company and Sharpe's Enemy." },
              { q: "Why does Hakeswill twitch?", a: "He was hanged at age 12 and survived. The botched hanging left him with a scar and an uncontrollable facial twitch." },
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
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
          <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
        </div>
        <div className="text-center mb-6">
          <a href="https://amzn.to/4thUGcX" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Company &rarr;</a>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
      </section>
    </>
  );
}
