import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Napoleonic Wars — Causes, Battles and Legacy",
  description:
    "The complete guide to the Napoleonic Wars: why they started, who fought them, the major battles from Trafalgar to Waterloo, and why they are called the Napoleonic Wars.",
  path: "/napoleonic-wars",
  keywords: [
    "Napoleonic Wars",
    "what were the Napoleonic Wars",
    "why are they called the Napoleonic Wars",
    "Napoleon Bonaparte",
    "Waterloo",
    "Trafalgar",
    "Peninsular War",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Napoleonic Wars: Causes, Battles and Legacy",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/napoleonic-wars`,
  inLanguage: "en-GB",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why are they called the Napoleonic Wars?", acceptedAnswer: { "@type": "Answer", text: "The wars are named after Napoleon Bonaparte, the French Emperor who dominated European politics and warfare from 1799 to 1815. The term distinguishes this period from the earlier French Revolutionary Wars and reflects Napoleon's central role as both the driving force and defining figure of the conflicts." } },
    { "@type": "Question", name: "When did the Napoleonic Wars start and end?", acceptedAnswer: { "@type": "Answer", text: "The Napoleonic Wars are generally dated from 1803 (the resumption of war between Britain and France after the Peace of Amiens) to 1815 (Napoleon's defeat at Waterloo and exile to St Helena). Some historians extend the starting date to 1799, when Napoleon seized power in France." } },
    { "@type": "Question", name: "Who won the Napoleonic Wars?", acceptedAnswer: { "@type": "Answer", text: "The Seventh Coalition — Britain, Prussia, Austria, Russia and their allies — won the Napoleonic Wars. The final victory came at the Battle of Waterloo on 18 June 1815, after which Napoleon abdicated and was exiled to St Helena." } },
    { "@type": "Question", name: "How many people died in the Napoleonic Wars?", acceptedAnswer: { "@type": "Answer", text: "Estimates vary, but approximately 3.5 to 6 million people died during the Napoleonic Wars (1803-1815), including soldiers and civilians. If the earlier French Revolutionary Wars (1792-1802) are included, the total is higher. These figures are debated among historians." } },
    { "@type": "Question", name: "What caused the Napoleonic Wars?", acceptedAnswer: { "@type": "Answer", text: "The wars grew out of the French Revolutionary Wars and Napoleon's ambition to dominate Europe. The immediate cause was the breakdown of the Peace of Amiens in 1803, but the deeper causes included revolutionary France's challenge to the European balance of power, Napoleon's personal ambition, and Britain's refusal to accept French dominance of the continent." } },
    { "@type": "Question", name: "How long did the Napoleonic Wars last?", acceptedAnswer: { "@type": "Answer", text: "The Napoleonic Wars lasted approximately 12 years, from 1803 to 1815. If the French Revolutionary Wars are included as a precursor, the overall period of conflict spans 23 years (1792-1815)." } },
  ],
};

const timeline = [
  { year: "1803", event: "War resumes between Britain and France after the collapse of the Peace of Amiens" },
  { year: "1805", event: "Third Coalition. Trafalgar secures British naval supremacy. Austerlitz destroys the Coalition on land" },
  { year: "1806", event: "Napoleon dissolves the Holy Roman Empire. Prussia destroyed at Jena-Auerstedt" },
  { year: "1807", event: "Treaty of Tilsit. France and Russia divide Europe between them" },
  { year: "1808", event: "Napoleon invades Spain. The Peninsular War begins" },
  { year: "1809", event: "Austria defeated at Wagram. Napoleon at the height of his power" },
  { year: "1812", event: "Napoleon invades Russia with 685,000 men. Fewer than 100,000 return" },
  { year: "1813", event: "Battle of Leipzig. The coalition closes in on France" },
  { year: "1814", event: "Napoleon abdicates. Exiled to Elba. The Bourbon monarchy restored" },
  { year: "1815", event: "The Hundred Days. Napoleon returns, fights Waterloo, loses, and is exiled to St Helena" },
];

export default function NapoleonicWarsPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Napoleonic Wars
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1803&ndash;1815 &middot; The Conflict That Shaped the Modern World
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Dates", value: "1803-1815" },
              { label: "Combatants", value: "All Europe" },
              { label: "Result", value: "Coalition victory" },
              { label: "Scale", value: "~6 million dead" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WERE THEY */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Were the Napoleonic Wars?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Napoleonic Wars were a series of conflicts fought between Napoleon Bonaparte&rsquo;s French Empire and various European coalitions between 1803 and 1815. They grew directly out of the French Revolutionary Wars (1792-1802), which had already destabilised the European order, and escalated when Napoleon, having seized power in France in 1799, began to reshape the continent by force.
          </p>
          <p>
            At their peak, the wars involved every major European power and spanned a theatre from Portugal to Moscow, from Egypt to the Baltic. They were fought on land and at sea, in pitched battles and guerrilla campaigns, in the frozen wastes of Russia and the scorching plains of Spain. The scale of destruction was unprecedented: armies of hundreds of thousands of men clashed in battles that decided the fate of nations in a single afternoon.
          </p>
          <p>
            The wars ended at <Link href="/battles/waterloo" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Waterloo</Link> on 18 June 1815, when a coalition army under the Duke of Wellington and Field Marshal Bl&uuml;cher defeated Napoleon for the last time. Napoleon was exiled to St Helena, where he died in 1821. The Congress of Vienna redrew the map of Europe and established a balance of power that would last, with modifications, until 1914.
          </p>
        </div>
      </section>

      {/* WHY CALLED */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why Are They Called the Napoleonic Wars?</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The wars are named after <Link href="/people/napoleon" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Napoleon Bonaparte</Link>, the French Emperor who dominated European politics and warfare from 1799 to 1815. The term distinguishes this period from the earlier French Revolutionary Wars (1792-1802) and reflects Napoleon&rsquo;s central role as both the driving force and the defining figure of the conflicts. He was simultaneously the principal aggressor, the greatest military commander of the age, and the man whose ambition united all of Europe against him.
            </p>
            <p>
              Napoleon himself referred to them as his wars. The coalitions that fought against him were formed specifically to contain or destroy his power. When he was finally defeated and exiled, the wars ended. No other figure in the period came close to his centrality: the wars began because of him, continued because of him, and ended when he was removed.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">When Were the Napoleonic Wars?</h2>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-4 items-baseline border-b border-gold/15 pb-4">
              <div className="font-display text-gold-pale text-xl tracking-widest shrink-0 w-16">{t.year}</div>
              <p className="text-parchment font-serif">{t.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO FOUGHT */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Fought in the Napoleonic Wars?</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              On one side: France and her allies, which varied over time but at their greatest extent included Spain (until 1808), the Italian states, the Confederation of the Rhine, the Duchy of Warsaw, and Denmark-Norway. On the other: a shifting series of coalitions, from the Third Coalition (1805) to the Seventh (1815), involving Britain, Austria, Prussia, Russia, Spain (after 1808), Portugal, Sweden, and numerous smaller states.
            </p>
            <p>
              Britain was the most consistent opponent, at war with France almost continuously from 1793 to 1815. Her contribution was naval supremacy (after <Link href="/battles/trafalgar" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Trafalgar</Link>), financial subsidies to the continental powers, and the army that fought the <Link href="/battles/peninsular-war" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Peninsular War</Link> under <Link href="/people/wellington" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Wellington</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* MAJOR BATTLES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Major Battles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Trafalgar (1805)", href: "/battles/trafalgar", desc: "Nelson destroys the Franco-Spanish fleet. Britain rules the waves." },
            { name: "Austerlitz (1805)", href: "/battles/austerlitz", desc: "Napoleon's masterpiece. The Third Coalition shattered." },
            { name: "Borodino (1812)", href: "/battles/borodino", desc: "The bloodiest day. 70,000 casualties. The road to Moscow." },
            { name: "Salamanca (1812)", href: "/battles/salamanca", desc: "Wellington defeats 40,000 men in 40 minutes." },
            { name: "Badajoz (1812)", href: "/battles/badajoz", desc: "The bloodiest night of the Peninsular War." },
            { name: "Waterloo (1815)", href: "/battles/waterloo", desc: "The final battle. The Empire falls." },
          ].map((b) => (
            <Link key={b.name} href={b.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
              <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{b.name}</div>
              <p className="text-parchment/85 font-serif text-sm">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY DID NAPOLEON LOSE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why Did Napoleon Lose?</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Napoleon lost because he fought too many enemies on too many fronts for too long. The <Link href="/battles/peninsular-war" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Peninsular War</Link> drained 300,000 French troops in a conflict they could never win. The <Link href="/battles/russian-campaign" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Russian campaign of 1812</Link> destroyed the Grande Arm&eacute;e. Britain&rsquo;s naval supremacy after Trafalgar strangled French trade and funded every coalition against him.
            </p>
            <p>
              But the deepest reason was structural: Napoleon could win battles but he could not win the peace. Each defeated coalition reformed, stronger and more determined. Britain paid for armies she did not field. Russia absorbed invasion and survived. Austria and Prussia learned from their defeats and modernised their armies. Napoleon could defeat any single opponent but he could not defeat all of them together, and in the end they all came together.
            </p>
          </div>
        </div>
      </section>

      {/* LEGACY */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Napoleonic Wars reshaped the world. The Congress of Vienna (1814-15) established the balance-of-power system that governed European politics until 1914. Nationalism, unleashed by the French Revolution and spread by Napoleon&rsquo;s armies, would redraw the map of Europe over the following century. The Napoleonic Code, Napoleon&rsquo;s legal framework, remains the basis of civil law in much of continental Europe and Latin America.
          </p>
          <p>
            Britain emerged as the dominant global power, its navy unchallenged, its empire expanding. The wars created the conditions for the long nineteenth-century peace in Europe, the age of empire, industrialisation, and the slow spread of liberal democracy. For better and worse, the modern world was made in the fires of the Napoleonic Wars.
          </p>
        </div>
      </section>

      {/* IN FICTION */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">In Fiction</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The Napoleonic Wars have inspired some of the greatest historical fiction ever written. Bernard Cornwell&rsquo;s 24 <Link href="/fiction" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Sharpe novels</Link> follow a British rifleman from India to Waterloo. Tolstoy&rsquo;s War and Peace is set during the Russian campaign of 1812. Patrick O&rsquo;Brian&rsquo;s Aubrey-Maturin series covers the naval war. C.S. Forester&rsquo;s Hornblower series predates them all. The period offers everything a novelist needs: heroism, villainy, impossible courage, and the fate of nations decided in an afternoon.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Explore the Sharpe Novels &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Why are they called the Napoleonic Wars?", a: "The wars are named after Napoleon Bonaparte, the French Emperor who dominated European politics and warfare from 1799 to 1815. The term distinguishes this period from the earlier French Revolutionary Wars." },
            { q: "When did the Napoleonic Wars start and end?", a: "Generally dated from 1803 (resumption of war after the Peace of Amiens) to 1815 (Waterloo). Some historians extend the start to 1799." },
            { q: "Who won the Napoleonic Wars?", a: "The Seventh Coalition: Britain, Prussia, Austria, Russia and their allies. The final victory came at Waterloo on 18 June 1815." },
            { q: "How many people died in the Napoleonic Wars?", a: "Estimates vary between 3.5 and 6 million, including soldiers and civilians. These figures are debated among historians." },
            { q: "What caused the Napoleonic Wars?", a: "The wars grew out of the French Revolutionary Wars and Napoleon's ambition to dominate Europe. The immediate cause was the breakdown of the Peace of Amiens in 1803." },
            { q: "How long did the Napoleonic Wars last?", a: "Approximately 12 years (1803-1815). Including the French Revolutionary Wars, the overall period of conflict spans 23 years (1792-1815)." },
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

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">All Battles</Link>
            <Link href="/people" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">People</Link>
            <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon</Link>
            <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington</Link>
          </div>
        </div>
      </section>
    </>
  );
}
