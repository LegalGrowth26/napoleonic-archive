import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "India & the East India Company",
  description:
    "India in the Napoleonic era: the East India Company, Wellington's formative campaigns at Seringapatam and Assaye, the Sharpe India novels, and the world of Taboo.",
  path: "/india",
  keywords: [
    "East India Company",
    "Wellington India",
    "Seringapatam",
    "Assaye",
    "Sharpe India",
    "Tippu Sultan",
    "British India Napoleonic",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "India & the East India Company",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/india`,
  url: `${SITE.baseUrl}/india`,
  inLanguage: "en-GB",
};

export default function IndiaPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,31,42,0.5),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            The Napoleonic Archive
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            India &amp; the East India Company
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1757 to 1858 &middot; Where Wellington was forged and Sharpe began
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>◈</span>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            India is the hidden foundation of the Napoleonic wars. The East
            India Company controlled vast territories with its own private
            army, larger than most European states could field. It was in
            India that Arthur Wellesley arrived in 1797, an undistinguished
            younger son with a purchased commission, and left in 1805 as one
            of Britain&rsquo;s most experienced and successful generals. The
            campaigns he fought there, at Seringapatam, Assaye, Argaum and
            Gawilghur, gave him the methods and the reputation he would carry
            into the Peninsula and ultimately to Waterloo.
          </p>
          <p>
            This is also where Richard Sharpe&rsquo;s story begins. The
            first three{" "}
            <Link
              href="/fiction"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Sharpe novels
            </Link>{" "}
            are set in India, and they show the Company&rsquo;s world through
            the eyes of a private soldier: sepoys, nabobs, fortresses, and
            the collision of European and Indian military traditions.
          </p>
        </div>
      </section>

      {/* 3. THE COMPANY */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link
            href="/india/east-india-company"
            className="card p-8 rounded-sm block group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
                Deep Dive
              </div>
              <h2 className="font-display text-3xl text-gold-pale uppercase tracking-wider mb-4">
                The East India Company
              </h2>
              <p className="text-parchment leading-relaxed font-serif text-lg max-w-3xl">
                A London trading charter that became a sovereign power. The
                Company maintained three private armies totalling over 200,000
                men, collected revenue from Bengal, grew opium for the China
                trade, and wielded political influence that reached into
                Parliament itself. Its story runs from the spice trade of 1600
                to the catastrophe of 1857.
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Read the full history &rarr;
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. THE CAMPAIGNS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Campaigns
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
            Wellington&rsquo;s Indian wars &middot; 1799 to 1803
          </p>
        </div>

        <aside className="card p-5 rounded-sm border-gold/35 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-gold text-xl leading-none" aria-hidden="true">
              ⚜
            </span>
            <p className="text-sm text-parchment leading-relaxed font-serif">
              <strong className="text-gold-pale">Note on casualties:</strong>{" "}
              British and Company casualty figures are drawn from official
              records. Indian casualty figures are often absent or unreliable
              in contemporary sources, a reflection of how the Company
              documented its wars. Where figures are estimates only, this is
              noted.
            </p>
          </div>
        </aside>

        <div className="space-y-8">
          {/* Seringapatam */}
          <article className="card p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider">
                Siege of Seringapatam
              </h3>
              <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                4 May 1799 &middot; Mysore
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-parchment/95 font-serif mb-5">
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Forces </span>~20,000 British &amp; Company vs ~30,000 Mysorean</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">British casualties </span>~1,400</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Outcome </span><span className="text-gold-pale">Decisive British victory</span></div>
            </div>
            <p className="text-xs text-parchment/85 font-serif italic mb-4">
              Defender casualties are not reliably recorded in contemporary
              sources. Tippu Sultan was killed during the assault.
            </p>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              The Fourth Anglo-Mysore War ended with the storm of Tippu
              Sultan&rsquo;s island fortress at Seringapatam. The British
              breached the walls after a month-long siege and stormed the
              fortress on 4 May. Tippu Sultan was killed fighting at the
              northern gate. Arthur Wellesley commanded a reserve column
              during the assault and was afterwards appointed governor of
              the captured city, where he demonstrated the administrative
              ability that would later sustain his Peninsular campaigns.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-burgundy-bright italic font-serif">In Sharpe: Sharpe&rsquo;s Tiger</span>
            </div>
          </article>

          {/* Assaye */}
          <article className="card p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider">
                Battle of Assaye
              </h3>
              <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                23 September 1803 &middot; Deccan
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-parchment/95 font-serif mb-5">
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Forces </span>~7,000 British vs ~40,000 Maratha</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">British casualties </span>~1,600 (nearly a quarter of his force)</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Outcome </span><span className="text-gold-pale">British victory (costly)</span></div>
            </div>
            <p className="text-xs text-parchment/85 font-serif italic mb-4">
              Maratha casualties are estimated at approximately 6,000 but
              contemporary Indian sources are limited and figures vary
              significantly between historians.
            </p>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              Wellington attacked a Maratha army that outnumbered him
              roughly five to one because he judged, correctly, that the
              ground between the rivers Kaitna and Juah would channel the
              enemy&rsquo;s numerical advantage. The fighting was ferocious.
              Two horses were shot under Wellington and his orderly was
              killed at his side. He later called Assaye the bloodiest
              battle he had ever seen, a verdict he maintained even after
              Waterloo. The victory shattered Scindia&rsquo;s army and
              opened the Deccan to Company expansion.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-burgundy-bright italic font-serif">In Sharpe: Sharpe&rsquo;s Triumph</span>
            </div>
          </article>

          {/* Argaum */}
          <article className="card p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider">
                Battle of Argaum
              </h3>
              <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                29 November 1803 &middot; Berar
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-parchment/95 font-serif mb-5">
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Forces </span>~11,000 British vs ~30,000 Maratha</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">British casualties </span>~350</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Outcome </span><span className="text-gold-pale">Decisive British victory</span></div>
            </div>
            <p className="text-xs text-parchment/85 font-serif italic mb-4">
              Maratha casualties estimated at approximately 5,000 but not
              reliably documented in contemporary sources.
            </p>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              A month after Assaye, Wellington confronted and destroyed a
              second Maratha army at Argaum (also known as Adgaon). This
              was a more decisive and less costly engagement than Assaye:
              the Maratha force, drawn mainly from the Bhonsle of
              Nagpur&rsquo;s army, broke under British volleys and a cavalry
              charge. The victory completed the destruction of the Berar
              army and cleared the way for the assault on Gawilghur.
            </p>
          </article>

          {/* Gawilghur */}
          <article className="card p-8 rounded-sm">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider">
                Storm of Gawilghur
              </h3>
              <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                15 December 1803 &middot; Deccan
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-parchment/95 font-serif mb-5">
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Forces </span>~11,000 British (assault)</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">British casualties </span>~150 killed and wounded</div>
              <div><span className="text-gold/70 uppercase text-xs tracking-widest">Outcome </span><span className="text-gold-pale">Fortress taken</span></div>
            </div>
            <p className="text-xs text-parchment/85 font-serif italic mb-4">
              Defender casualties were not recorded by British sources. The
              gap in the historical record reflects how the Company documented
              its wars.
            </p>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              Gawilghur was a seemingly impregnable hill-fortress perched
              on a cliff above the Deccan plateau, protected by ravines
              and massive walls. Wellington coordinated simultaneous attacks
              on the outer and inner works from two separate columns. The
              fortress fell in a single day. Its capture effectively ended
              the Second Anglo-Maratha War and confirmed Company dominance
              across central India.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-burgundy-bright italic font-serif">In Sharpe: Sharpe&rsquo;s Fortress</span>
            </div>
          </article>
        </div>
      </section>

      {/* 5. KEY FIGURES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            Key Figures
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                <Link href="/people/wellington" className="hover:text-gold transition">
                  Arthur Wellesley
                </Link>
              </h3>
              <div className="text-xs tracking-widest text-gold/70 mb-1">1769-1852</div>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Major-General, later Duke of Wellington
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Arrived in India in 1797 as an undistinguished younger son
                with a purchased commission. His brother Richard&rsquo;s
                patronage gave him independent commands. Seringapatam, Assaye
                and Gawilghur transformed him into one of Britain&rsquo;s
                most experienced and successful generals. He left India in
                1805 and carried its lessons to Portugal, Spain and Waterloo.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Richard Wellesley, Marquess Wellesley
              </h3>
              <div className="text-xs tracking-widest text-gold/70 mb-1">1760-1842</div>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Governor-General of India, 1798-1805
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The aggressive expansionist who doubled the Company&rsquo;s
                territory through the Subsidiary Alliance system: Indian
                rulers accepted Company garrisons, paid for by the ruler,
                commanded by Company officers. Those who refused were
                attacked. He gave his brother the military commands that
                made him, and was recalled to London in 1805 amid controversy
                over the cost and scale of his wars.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Tippu Sultan
              </h3>
              <div className="text-xs tracking-widest text-gold/70 mb-1">1750-1799</div>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Sultan of Mysore &middot; The Tiger of Mysore
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The Company&rsquo;s greatest Indian opponent and the last
                ruler to pose a serious military threat to British expansion
                in southern India. He modernised his army with French
                advisers, deployed iron-cased rockets (which influenced
                British rocket development), fortified Seringapatam, and
                sought alliances with Napoleon against the British. He was
                killed fighting at the northern gate of his fortress during
                the final storm on 4 May 1799.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                The Maratha Confederacy
              </h3>
              <div className="text-xs tracking-widest text-gold/70 mb-1">c.1674-1818</div>
              <div className="text-sm italic text-burgundy-bright mb-3">
                The dominant Indian power after Mughal decline
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                A loose confederacy of Hindu warrior states that filled the
                power vacuum left by the Mughal Empire&rsquo;s collapse. At
                their peak the Marathas controlled much of central and
                western India. Their armies, trained by European mercenaries
                and equipped with modern artillery, were the most formidable
                the Company faced. Wellington defeated them at Assaye, Argaum
                and Gawilghur in the Second Anglo-Maratha War (1803-05),
                breaking their military power and opening India to Company
                dominance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. SHARPE IN INDIA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Sharpe in India
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
            Bernard Cornwell &middot; The India Novels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Sharpe's Tiger",
              setting: "Seringapatam, 1799",
              desc: "Private Sharpe slips into Tippu Sultan's fortress on a clandestine mission and earns his first stripe.",
              link: "https://amzn.to/3QdRVuq",
            },
            {
              title: "Sharpe's Triumph",
              setting: "Assaye, 1803",
              desc: "Sergeant Sharpe fights at Wellesley's side and commits the act that wins him a commission.",
              link: "https://amzn.to/3OjyIa9",
            },
            {
              title: "Sharpe's Fortress",
              setting: "Gawilghur, 1803",
              desc: "Newly-commissioned Ensign Sharpe climbs the cliff-fortress against both Mahratta guns and the gentlemen of his own regiment.",
              link: "https://amzn.to/3QtV1dP",
            },
          ].map((b) => (
            <article key={b.title} className="card p-6 rounded-sm flex flex-col">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-1">
                {b.title}
              </h3>
              <div className="text-xs italic text-burgundy-bright mb-3">
                {b.setting}
              </div>
              <p className="text-parchment/95 font-serif text-sm leading-relaxed flex-1">
                {b.desc}
              </p>
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-block self-start px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Buy on Amazon &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* INDIA IN 1797 */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            India in 1797: A Continent in Flux
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              When Arthur Wellesley arrived in India in 1797, the Mughal
              Empire was a hollow shell. The Emperor in Delhi was a pensioner
              of the Marathas, who controlled much of central and western
              India. In the south, Tippu Sultan held Mysore with French
              military advisers and nursed ambitions of driving the British
              into the sea. The Nizam of Hyderabad, the Nawab of Oudh, and
              dozens of smaller rulers played the European powers against each
              other.
            </p>
            <p>
              The French connection was real and alarming. Napoleon&rsquo;s
              Egyptian campaign of 1798 was partly aimed at threatening British
              India, and Tippu Sultan had openly corresponded with the French
              Directory seeking an alliance. The Company&rsquo;s wars in India
              were not separate from the wider Napoleonic struggle: they were
              the eastern front of a global contest for supremacy.
            </p>
          </div>
        </div>
      </section>

      {/* EMPIRE AND EXPLOITATION */}
      <section id="darker-truth" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Empire and Exploitation
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Company&rsquo;s record cannot be separated from its human
            cost. The Bengal famine of 1770 killed an estimated ten million
            people, approximately one third of the province&rsquo;s population,
            and was exacerbated by the Company&rsquo;s insistence on collecting
            land revenue even as crops failed. The Indian textile industry,
            once the finest in the world, was systematically undermined:
            Bengali weavers were forced to sell at fixed prices while British
            manufactured goods were imported duty-free.
          </p>
          <p>
            The opium trade was cultivated under Company monopoly in Bengal
            and sold into China through private merchants, generating
            enormous profits. Forced cultivation of indigo displaced food
            crops. The historian William Dalrymple has characterised the
            Company as a corporate state that pioneered the techniques of
            aggressive colonial expansion. The economist Utsa Patnaik has
            estimated the total drain of wealth from India to Britain at $45
            trillion in modern terms, though this figure and methodology are
            disputed by other historians.
          </p>
          <p>
            The historical debate continues. Some historians note that the
            Company built roads, codified laws, and created institutions that
            outlasted it. Others argue that these achievements were incidental
            to exploitation. An honest account must acknowledge both the scale
            of the destruction and the complexity of the legacy.
          </p>
        </div>
      </section>

      {/* TABOO (expanded) */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
            Taboo (BBC/FX, 2017)
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Tom Hardy&rsquo;s television series is set in 1814 and shows the
              East India Company&rsquo;s London face: the boardroom of East
              India House on Leadenhall Street, the political corruption that
              reached into Parliament, and the ruthlessness with which the
              Company defended its monopolies. The series depicts the Company
              as willing to use assassination, bribery, and state violence to
              protect its commercial interests, particularly in the lucrative
              China trade.
            </p>
            <p>
              Taboo is fiction, and takes considerable dramatic liberties with
              both plot and chronology. But its portrayal of the Company as a
              corporate power with sovereign ambitions, operating at the
              intersection of commerce and government, is rooted in historical
              reality. The Company did maintain its own intelligence network,
              did influence parliamentary votes, and did use force to protect
              its monopoly system. For anyone interested in the Company&rsquo;s
              domestic political power, rather than its military campaigns in
              India, Taboo is a useful and atmospheric companion piece.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY INDIA MATTERS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
          Why India Matters
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            India shaped Wellington. The eight years he spent there, from 1797
            to 1805, taught him logistics, the management of sepoy armies,
            the importance of supply, and the decisive value of personal
            reconnaissance. His tactics at Assaye (attacking an army five
            times his size because he judged the ground correctly) and his
            administration of Mysore (feeding a province while running a war)
            were the rehearsal for everything that followed in Portugal and
            Spain.
          </p>
          <p>
            Without India there would have been no Peninsular War as we know
            it, no{" "}
            <Link
              href="/battles/waterloo"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Waterloo
            </Link>
            , and no Sharpe. The Company&rsquo;s wars produced the general
            who defeated Napoleon. That story begins here.
          </p>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            Further Reading
          </h2>
          <div className="card p-8 rounded-sm max-w-2xl mx-auto">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
              The Anarchy
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              William Dalrymple, 2019
            </div>
            <p className="text-parchment/95 font-serif leading-relaxed text-sm mb-4">
              The definitive modern account of the East India Company&rsquo;s
              rise from a London trading venture to a corporate sovereign
              ruling a subcontinent. Dalrymple draws on Indian, Persian and
              Company sources to tell the story from all sides.
            </p>
            <Link
              href="/resources"
              className="text-sm text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition"
            >
              Browse all resources &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* NAV + DISCLAIMER */}
      <section className="border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/india/east-india-company"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              East India Company &rarr;
            </Link>
            <Link
              href="/fiction"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Sharpe Novels
            </Link>
            <Link
              href="/people/wellington"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Wellington Biography
            </Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
