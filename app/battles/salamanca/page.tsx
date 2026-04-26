import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Battle of Salamanca",
  description:
    "The Battle of Salamanca, 22 July 1812: Wellington defeated forty thousand men in forty minutes and broke the French hold on central Spain.",
  path: "/battles/salamanca",
  keywords: [
    "Battle of Salamanca",
    "Salamanca 1812",
    "Wellington",
    "Peninsular War",
    "Marshal Marmont",
    "Sharpe's Sword",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Salamanca, 22 July 1812",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/battles/salamanca`,
  url: `${SITE.baseUrl}/battles/salamanca`,
  inLanguage: "en-GB",
};

export default function SalamancaPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Battles
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Battle of Salamanca
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            22 July 1812 &middot; Le&oacute;n, Spain
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "22 Jul 1812" },
              { label: "Location", value: "Salamanca, Spain" },
              { label: "Result", value: "Allied victory" },
              { label: "Casualties", value: "~26,000 total" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            By the summer of 1812, Wellington had taken the frontier fortresses of Ciudad Rodrigo and Badajoz and was ready to advance into Spain. Marshal Marmont, commanding the French Army of Portugal, shadowed Wellington&rsquo;s advance towards Salamanca. For nearly a fortnight the two armies manoeuvred in parallel, each looking for an opening, neither willing to attack at a disadvantage.
          </p>
          <p>
            The watching and waiting tested the patience of both commanders. Wellington was criticised by his staff for excessive caution. Marmont, under pressure from Paris to produce results, grew increasingly impatient. On 22 July, Marmont saw what he believed was an opportunity: the Allied army appeared to be retreating, and he ordered his divisions to extend leftward to cut off Wellington&rsquo;s line of march. It was the mistake Wellington had been waiting for.
          </p>
        </div>
      </section>

      {/* THE ARMIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Allied</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~52,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Wellington. British, Portuguese and Spanish divisions. Pakenham&rsquo;s 3rd Division would deliver the decisive blow.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">France</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~50,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">Under Marshal Marmont. Eight infantry divisions, two cavalry divisions. Well-equipped and experienced, but about to over-extend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WELLINGTON'S MOMENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Wellington&rsquo;s Moment</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            By Peninsular tradition, reported in the memoirs of General Alava and widely repeated since, Wellington was eating a cold chicken leg when his telescope showed him Marmont&rsquo;s divisions extending to the left, opening a gap between his leading and trailing divisions. He is said to have flung down the chicken bone and exclaimed: &ldquo;By God, that will do!&rdquo; before spurring off to set the attack in motion.
          </p>
          <p>
            Whether the exact words are authentic, the speed of Wellington&rsquo;s response was extraordinary. Within minutes of spotting the over-extension, he had sent orders to Pakenham&rsquo;s 3rd Division to attack the exposed head of the French column from the flank.
          </p>
        </div>
      </section>

      {/* THE BATTLE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Pakenham&rsquo;s 3rd Division struck Thomi&egrave;res&rsquo;s leading division in the flank and rear. The attack was devastating: Thomi&egrave;res was killed, his division shattered in minutes. The blow rolled along the French line from left to right as each division, strung out along the march route, was struck before it could form for battle.
            </p>
            <p>
              Marmont himself was wounded early in the action by a shell splinter. Command passed first to Bonnet, who was also wounded almost immediately, and then to General Clausel, who attempted a counter-attack against Wellington&rsquo;s centre. Clausel&rsquo;s assault briefly threatened to stabilise the battle, but Wellington committed his reserves and the French line collapsed.
            </p>
            <p>
              The pursuit through the evening and into the night completed the rout. French soldiers threw away their muskets and fled towards the fords of the Tormes. The Army of Portugal lost nearly half its strength in a single afternoon.
            </p>
          </div>
        </div>
      </section>

      {/* CASUALTIES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~5,000</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Allied killed and wounded</div>
          </div>
          <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
            <div className="font-display text-2xl text-gold-pale mb-1">~14,000 + 7,000 captured</div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70">French killed, wounded and captured</div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERED */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Salamanca broke the French hold on central Spain. Within weeks, Wellington entered Madrid to a rapturous reception. The victory demonstrated that Wellington could attack as well as defend, that the supposedly invincible French system of war by column could be shattered by an army that moved faster and hit harder.
            </p>
            <p>
              For the wider war, Salamanca changed the calculus of the Peninsular campaign. It proved that the French could not hold Spain against a British army that had learned how to manoeuvre offensively. The road from Salamanca led through Vitoria to the Pyrenees and ultimately to the invasion of France itself.
            </p>
          </div>
        </div>
      </section>

      {/* IN SHARPE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
            Sharpe&rsquo;s Sword is set during the Salamanca campaign. Sharpe hunts the French intelligence officer Colonel Leroux, a master swordsman who has been systematically destroying Wellington&rsquo;s spy network. The battle itself provides the climax, with Sharpe wounded in the fighting on the Greater Arapile.
          </p>
          <a href="https://amzn.to/4cvSPtR" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            Buy Sharpe&rsquo;s Sword &rarr;
          </a>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington Biography</Link>
          </div>
          <div className="text-center mb-6">
            <a href="https://amzn.to/4vyaCsL" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Wellington: The Iron Duke by Richard Holmes &rarr;
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
