import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Tippu Sultan",
  description:
    "Tippu Sultan, the Tiger of Mysore: his wars against the East India Company, his alliance with France, his rocket corps, and his death at Seringapatam in 1799.",
  path: "/india/people/tippu-sultan",
  keywords: [
    "Tippu Sultan",
    "Tiger of Mysore",
    "Seringapatam",
    "Mysorean rockets",
    "Anglo-Mysore Wars",
    "East India Company",
    "Sharpe's Tiger",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tippu Sultan",
  alternateName: "Tipu Sultan, the Tiger of Mysore",
  birthDate: "1750",
  deathDate: "1799-05-04",
  birthPlace: { "@type": "Place", name: "Devanahalli, Mysore" },
  deathPlace: { "@type": "Place", name: "Seringapatam, Mysore" },
  jobTitle: "Sultan of Mysore",
  description:
    "Sultan of Mysore who resisted East India Company expansion, modernised his army with French advisers, and was killed at the siege of Seringapatam in 1799.",
  url: `${SITE.baseUrl}/india/people/tippu-sultan`,
  mainEntityOfPage: `${SITE.baseUrl}/india/people/tippu-sultan`,
};

export default function TippuSultanPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

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
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Tippu Sultan
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            c.1750 &middot; 1799 &middot; The Tiger of Mysore
          </p>
          <div className="ornament my-8 text-gold/70"><span>♛</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Born", value: "c. 1750, Devanahalli" },
              { label: "Died", value: "4 May 1799" },
              { label: "Ruled", value: "1782 to 1799" },
              { label: "Known as", value: "Tiger of Mysore" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Introduction</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Tippu Sultan was Britain&rsquo;s most formidable Indian opponent
            of the eighteenth century. Sultan of Mysore from 1782, he
            modernised his army with French military advisers, deployed the
            most advanced rockets of the age, sought alliances with France,
            the Ottoman Empire and Afghanistan, and resisted East India
            Company expansion until his death at Seringapatam in 1799.
          </p>
          <p>
            He is one of the most complex and debated figures in Indian
            history. To some he is a hero of resistance to colonialism, the
            ruler who came closest to challenging British dominance. To
            others he is an aggressive expansionist who persecuted Hindu
            and Christian minorities in the territories he conquered. An
            honest account must present both faces.
          </p>
        </div>
      </section>

      {/* 3. EARLY LIFE AND RISE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Early Life and Rise</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Tippu was born around 1750, the eldest son of Hyder Ali, a
              soldier of fortune who seized power in Mysore and built it into
              one of the strongest states in southern India. Hyder Ali was
              himself illiterate but ensured his son received a military and
              administrative education. Tippu saw his first combat at
              approximately fifteen, fighting alongside his father against the
              British in the First Anglo-Mysore War (1767-69).
            </p>
            <p>
              He succeeded his father in December 1782 during the Second
              Anglo-Mysore War, when Hyder Ali died of a carbuncle while on
              campaign. Tippu continued the war, fighting the British to a
              negotiated peace at the Treaty of Mangalore in 1784, the last
              occasion on which an Indian ruler dictated terms to the Company.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE RULER OF MYSORE */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Ruler of Mysore</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Tippu modernised the Mysore army along European lines,
            introducing new drill, uniforms, and weapons. His most
            significant military innovation was the rocket corps. Mysorean
            rockets used iron casings rather than the bamboo or cardboard
            tubes used elsewhere, giving them greater range and explosive
            power. They were the most advanced war rockets of their age, and
            after Seringapatam, captured examples directly inspired William
            Congreve&rsquo;s development of the British military rocket.
          </p>
          <p>
            He reformed the administration of Mysore, introduced new
            coinage, established a calendar, and promoted trade, including
            a state trading company modelled on European examples. His
            palace at Srirangapatna (the island fortress of Seringapatam)
            was decorated with tiger motifs: tiger-striped soldiers, tiger
            heads on his throne, and the famous mechanical tiger automaton,
            a life-size wooden tiger mauling a British soldier, now
            displayed in the Victoria and Albert Museum in London.
          </p>
          <p>
            He corresponded with Napoleon Bonaparte and the French Directory
            seeking military support against the British, and sent embassies
            to the Ottoman Empire and Afghanistan. These diplomatic efforts
            alarmed the Company and contributed directly to Richard
            Wellesley&rsquo;s decision to attack Mysore before French aid
            could arrive.
          </p>
        </div>
      </section>

      {/* 5. THE ANGLO-MYSORE WARS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">The Anglo-Mysore Wars</h2>
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />
            <ol className="space-y-8">
              {[
                { date: "1780-84", name: "Second Anglo-Mysore War", body: "Hyder Ali invaded the Carnatic and defeated a British force at Pollilur in 1780. Tippu succeeded his father in 1782 and continued the war, signing the Treaty of Mangalore in 1784 on terms favourable to Mysore." },
                { date: "1790-92", name: "Third Anglo-Mysore War", body: "Lord Cornwallis led a coalition of the Company, the Nizam of Hyderabad and the Marathas against Tippu. Defeated after a siege of Seringapatam, Tippu was forced to cede half his territory and surrender two of his sons as hostages." },
                { date: "1799", name: "Fourth Anglo-Mysore War", body: "Governor-General Richard Wellesley ordered the destruction of Mysore. General Harris invested Seringapatam. The fortress was stormed on 4 May 1799. Tippu Sultan was killed. The Kingdom of Mysore was dismembered." },
              ].map((c) => (
                <li key={c.date} className="relative pl-20 md:pl-28">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-16 md:w-24 h-8 rounded-sm bg-burgundy border border-gold/60 text-gold-pale font-display text-sm tracking-wider">{c.date}</div>
                  <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">{c.name}</h3>
                  <p className="text-parchment leading-relaxed font-serif">{c.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 6. THE SIEGE OF SERINGAPATAM */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Siege of Seringapatam, 1799</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Richard Wellesley, the Governor-General, decided to strike before
            French support could reach Tippu. General George Harris marched
            on Seringapatam with approximately 20,000 men, including Arthur
            Wellesley commanding a brigade. The fortress was invested in
            April 1799 and the walls breached over several weeks.
          </p>
          <p>
            On 4 May the British stormed the breaches. The fighting inside
            the fortress was savage. Tippu Sultan was found dead near the
            northern gate, among his soldiers, weapon in hand. He had not
            surrendered. Whether he was killed by a musket ball during the
            fighting or murdered after capture is disputed by historians;
            contemporary British accounts state he died fighting.
          </p>
          <p>
            Arthur Wellesley was appointed governor of the captured city. The
            Kingdom of Mysore was dismembered: a puppet Hindu maharaja was
            installed, and the Company absorbed the most valuable territories.
          </p>
          <Link
            href="/india/battles/seringapatam"
            className="inline-block mt-4 px-5 py-2 border border-gold/60 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition"
          >
            Read the full Seringapatam page &rarr;
          </Link>
        </div>
      </section>

      {/* 7. LEGACY */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Tippu Sultan has become a symbol of resistance to colonialism in
              India. His image has appeared on Indian postage stamps, streets
              and institutions are named after him, and he is celebrated in
              Karnataka as a regional hero. His rocket technology directly
              inspired William Congreve&rsquo;s development of the British
              military rocket, which was used at Copenhagen, Leipzig and
              Waterloo. The mechanical tiger automaton, his most famous
              artefact, remains one of the most popular exhibits at the
              Victoria and Albert Museum.
            </p>
            <p>
              His legacy is, however, deeply contested. Documented atrocities
              against Hindu and Christian populations in Coorg (Kodagu) and
              Malabar, including forced conversions, deportations and
              massacres, are recorded in both Indian and British sources of
              the period. Historians debate the scale and context: some argue
              these were acts of war and political consolidation comparable
              to those of other eighteenth-century rulers; others view them
              as systematic religious persecution.
            </p>
            <p>
              An honest assessment recognises both Tippu&rsquo;s courage and
              military innovation and the suffering inflicted under his rule.
              He was neither the uncomplicated hero of nationalist
              hagiography nor the monster of colonial propaganda. He was a
              formidable, ambitious, and at times ruthless ruler who fought
              harder against the Company than anyone before or after him.
            </p>
          </div>
        </div>
      </section>

      {/* 8. IN SHARPE'S WORLD */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
            Cornwell portrays Tippu Sultan in Sharpe&rsquo;s Tiger as a
            dangerous, intelligent ruler: theatrical, cruel to his enemies,
            and genuinely formidable. The novel&rsquo;s depiction of the
            siege of Seringapatam, including the storming of the breach
            and Tippu&rsquo;s death, follows the historical record closely.
            Cornwell fictionalises Sharpe&rsquo;s mission inside the
            fortress and invents several of Tippu&rsquo;s advisers, but the
            setting, the siege, and the ruler himself are drawn from
            documented sources.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://amzn.to/3QdRVuq" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Sharpe&rsquo;s Tiger &rarr;
            </a>
            <Link href="/fiction" className="text-sm text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition self-center">
              All Sharpe novels &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Further Reading</h2>
          <div className="card p-8 rounded-sm max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">The Anarchy</h3>
            <div className="text-sm italic text-burgundy-bright mb-3">William Dalrymple, 2019</div>
            <p className="text-parchment/95 font-serif leading-relaxed text-sm mb-4">
              The definitive modern account of the East India Company&rsquo;s
              rise. Dalrymple&rsquo;s chapters on the Mysore wars and
              Tippu&rsquo;s resistance are drawn from Indian, Persian and
              Company sources.
            </p>
            <a href="https://amzn.to/4vMBAgH" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy on Amazon &rarr;
            </a>
          </div>
          <div className="text-center space-y-3">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
              <Link href="/india/east-india-company" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">East India Company</Link>
              <Link href="/india/battles/seringapatam" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Seringapatam</Link>
            </div>
            <p className="text-xs uppercase tracking-widest text-parchment/85 pt-4">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
