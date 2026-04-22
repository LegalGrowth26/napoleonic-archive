import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Siege of Seringapatam 1799",
  description:
    "The Siege of Seringapatam, 4 May 1799: Tippu Sultan's last stand, Wellington's first great action, and the setting for Sharpe's Tiger.",
  path: "/india/battles/seringapatam",
  keywords: [
    "Siege of Seringapatam",
    "Seringapatam 1799",
    "Tippu Sultan",
    "Wellington India",
    "Sharpe's Tiger",
    "Fourth Anglo-Mysore War",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Siege of Seringapatam, 4 May 1799",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/india/battles/seringapatam`,
  url: `${SITE.baseUrl}/india/battles/seringapatam`,
  inLanguage: "en-GB",
};

export default function SeringapatamPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/india" className="hover:text-gold transition">
              The Napoleonic Archive &middot; India
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Siege of Seringapatam
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            4 May 1799 &middot; Kingdom of Mysore, India
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "4 May 1799" },
              { label: "Location", value: "Seringapatam, Mysore" },
              { label: "Result", value: "British victory" },
              { label: "Commander", value: "Gen. George Harris" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BACKGROUND */}
      <section id="background" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Fourth Anglo-Mysore War was triggered by Tippu Sultan&rsquo;s
            alliance with Revolutionary France. Tippu had sent envoys to
            Mauritius seeking military support and had planted a &ldquo;Tree
            of Liberty&rdquo; in his capital. Governor-General Richard
            Wellesley judged that French reinforcements might arrive at any
            time and ordered an immediate campaign to destroy Mysore before
            the alliance could bear fruit.
          </p>
          <p>
            General George Harris commanded the main army of approximately
            20,000 men. Arthur Wellesley, then a colonel commanding the 33rd
            Foot and a brigade of Company troops, served as one of the key
            subordinate commanders. The march on Seringapatam took two months
            across the Deccan plateau.
          </p>
        </div>
      </section>

      {/* 3. THE ARMIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Armies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">British &amp; Company</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~20,000 men</div>
              <p className="text-parchment/95 font-serif text-sm">
                Under General George Harris. Arthur Wellesley commanding
                reserves and the failed night attack of 5 April, later the
                successful assault on 4 May.
              </p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Kingdom of Mysore</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">~30,000 defenders</div>
              <p className="text-parchment/95 font-serif text-sm">
                Under Tippu Sultan. The fortress of Seringapatam was an
                island citadel on the River Kaveri, heavily fortified with
                modern ramparts and a substantial artillery park.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SIEGE */}
      <section id="the-siege" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Siege</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The British invested Seringapatam in early April 1799. Siege
            batteries were established and the walls breached over several
            weeks of bombardment. On the night of 5 April, Wellesley led a
            force into a tope (grove of trees) near the fortress in an
            attempt to clear Mysorean outworks. The attack ended in confusion:
            his men became lost in the darkness, fired on each other, and
            were repulsed with casualties. It was the only significant
            military failure of Wellesley&rsquo;s Indian career.
          </p>
          <p>
            On 4 May the main assault was launched through two breaches in
            the walls. The storming parties fought through the breaches and
            into the fortified interior. Tippu Sultan was found dead among
            his soldiers near the northern gate; he had not surrendered and
            had been killed fighting. The sack of the city that followed
            lasted several hours before discipline was restored.
          </p>
          <p>
            Wellesley was appointed governor of Seringapatam, his first
            experience of civil administration. He imposed order, suppressed
            looting, and governed the province with a mixture of firmness and
            pragmatism that prefigured his later administration of occupied
            territories in the Peninsula.
          </p>
        </div>
      </section>

      {/* 5. CASUALTIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~1,400</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">British &amp; Company killed and wounded</div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">Not recorded</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">Mysore defender casualties</div>
            </div>
          </div>
          <p className="text-xs text-parchment/85 font-serif italic text-center">
            Defender casualties are not reliably recorded in contemporary
            sources. Tippu Sultan was killed during the assault. The gap in
            Indian casualty records reflects how the Company documented its
            wars.
          </p>
        </div>
      </section>

      {/* 6. WHY IT MATTERED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Seringapatam destroyed the Kingdom of Mysore, the last
            independent power in southern India capable of resisting Company
            expansion. It removed French influence from the subcontinent at
            a moment when Napoleon was campaigning in Egypt with ambitions
            to threaten British India. And it gave Arthur Wellesley his first
            experience of both command and civil governance.
          </p>
          <p>
            The administrative skills Wellesley developed as governor of
            Seringapatam, feeding a province while pacifying guerrillas and
            managing local allies, were precisely the skills he would deploy
            across Portugal and Spain a decade later.
          </p>
        </div>
      </section>

      {/* 7. WELLINGTON'S FAILED NIGHT ATTACK */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="card p-8 rounded-sm border-burgundy-bright/40 bg-burgundy-deep/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-burgundy-bright font-display text-lg">❦</span>
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                Wellington&rsquo;s Failed Night Attack
              </h3>
            </div>
            <p className="text-parchment leading-relaxed font-serif">
              On the night of 5 April, Wellesley led a force into a tope of
              trees in darkness and was repulsed in confusion: his men fired
              on each other and he was briefly separated from his command. It
              was the only significant military failure of his Indian career.
              He later said the experience taught him never to attack at night
              in difficult ground. This lesson informed his preference for
              defensive positions with clear fields of fire throughout the
              Peninsular War.
            </p>
          </div>
        </div>
      </section>

      {/* 8. SHARPE'S TIGER */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">Sharpe&rsquo;s Tiger</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
            Cornwell&rsquo;s first Sharpe novel in chronological order. Private
            Richard Sharpe, serving in the 33rd Foot, is recruited for a
            clandestine mission inside the fortress of Seringapatam. The real
            siege and the death of Tippu Sultan form the backdrop; Sharpe&rsquo;s
            mission inside the fortress is Cornwell&rsquo;s invention. The
            historical detail, including Wellesley&rsquo;s failed night attack
            and the storming of the breach, is closely researched.
          </p>
          <a href="https://amzn.to/3QdRVuq" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            Buy Sharpe&rsquo;s Tiger &rarr;
          </a>
        </div>
      </section>

      {/* 9. TIPPU SULTAN */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">Tippu Sultan</h2>
          <p className="text-parchment leading-relaxed font-serif text-lg">
            The Tiger of Mysore. The Company&rsquo;s greatest Indian opponent,
            who modernised his army with French advisers, deployed iron-cased
            rockets, fortified Seringapatam, and sought alliances with
            Napoleon. He was killed fighting at the northern gate of his
            fortress on 4 May 1799, aged forty-eight.
          </p>
        </div>
      </section>

      {/* 10. FURTHER READING + NAV */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
          <Link href="/india/people/tippu-sultan" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Tippu Sultan</Link>
          <Link href="/india/east-india-company" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">East India Company</Link>
          <Link href="/india/battles/assaye" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Assaye &rarr;</Link>
        </div>
        <div className="text-center mb-6">
          <a href="https://amzn.to/4vMBAgH" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            The Anarchy by William Dalrymple &rarr;
          </a>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
