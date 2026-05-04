import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Siege of Badajoz 1812",
  description: "The Siege of Badajoz, April 1812: the bloodiest night of the Peninsular War, the storming of the breaches, the sack, and the Sharpe connection.",
  path: "/battles/badajoz",
  keywords: ["Siege of Badajoz", "Badajoz 1812", "Peninsular War", "Wellington", "Sharpe's Company", "storming"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Siege of Badajoz, April 1812",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/badajoz`, inLanguage: "en-GB",
};

export default function BadajozPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Siege of Badajoz</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">April 1812 &middot; The Bloodiest Night of the Peninsular War</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "16 Mar - 6 Apr 1812" },
              { label: "Location", value: "Extremadura, Spain" },
              { label: "Result", value: "Allied victory" },
              { label: "Casualties", value: "~4,800 British" },
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
          src="/Badajoz.png"
          alt="The storming of Badajoz at night"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Badajoz was the gateway between Portugal and Spain. Whoever held the fortress controlled the main southern route of invasion. Wellington needed to take it before Marshal Soult could march from Andalusia to relieve the garrison. The siege had to be fast, which meant a storm rather than a methodical reduction. Everyone knew what that meant.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Fortress</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Badajoz was defended by a garrison of approximately 5,000 men under General Armand Philippon, one of the most capable French engineers. The fortress was protected by thick walls, a castle, inundations that flooded the approaches, and three breaches that Philippon had turned into killing grounds: lined with chevaux de frise (sword blades set in timber), broken glass, exploding shells on fuses, and planks studded with nails.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Assault: 6 April 1812</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>At 10pm on 6 April, three simultaneous attacks were launched. The Light Division and the 4th Division attacked the breaches in the walls. The 3rd Division under Picton escaladed the castle from the east. A Portuguese brigade attacked the San Vincente bastion from the west.</p>
          <p>At the breaches, the slaughter was appalling. Wave after wave of soldiers climbed into the ditch and tried to force their way through the defences. Bodies piled in the breaches until men could climb on them. Forty separate assaults were thrown at the Trinidad breach alone. The defenders fired at point-blank range into the mass of attackers.</p>
          <p>It was Picton&rsquo;s 3rd Division, escalading the castle walls with ladders, that actually broke into the fortress while the breach assaults were failing. Once the castle was taken, the French defences unravelled. By dawn, Badajoz had fallen.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Sack of Badajoz</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>What followed the storming was three days of uncontrolled looting, drunkenness and violence by British soldiers. The sack of Badajoz was one of the worst episodes of discipline breakdown in British military history. Soldiers who had endured the horror of the breaches turned their rage on the civilian population. Wellington ordered the provost marshal to restore order; it took three days and the erection of a gallows before discipline was re-established.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~4,800</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">British killed and wounded in the assault</div>
          </div>
          <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~1,800</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed and wounded</div>
          </div>
        </div>
        <p className="text-parchment/85 font-serif text-sm text-center">Wellington wept on the glacis at dawn when he saw the carnage. It was one of the bloodiest nights in British military history.</p>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The 95th Rifles at Badajoz</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The 95th were part of the Light Division that attacked the breaches. They suffered catastrophic losses in the ditch and on the glacis. Riflemen who had survived years of skirmishing warfare were killed in minutes trying to force their way through the chevaux de frise. The regiment&rsquo;s losses at Badajoz were among the worst it suffered in the entire war.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">Sharpe&rsquo;s Company is set at Badajoz. Hakeswill returns to plague Sharpe; Teresa Moreno is murdered during the sack. The storming of the breaches and the brutal aftermath form the climax of the novel and one of the darkest episodes in the entire series.</p>
          <a href="https://amzn.to/4thUGcX" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Company &rarr;</a>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Badajoz opened the road into Spain. Within months Wellington had won <Link href="/battles/salamanca" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Salamanca</Link> and entered Madrid. The cost was terrible, but the strategic result was decisive: France&rsquo;s hold on southern Spain was broken.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          <Link href="/battles/peninsular-war" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Peninsular War</Link>
          <Link href="/battles/salamanca" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Salamanca &rarr;</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center mt-6">As an Amazon Associate I earn from qualifying purchases.</p>
      </section>
    </>
  );
}
