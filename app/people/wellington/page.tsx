import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Duke of Wellington Biography",
  description:
    "Arthur Wellesley, Duke of Wellington (1769-1852): from Dublin to Waterloo. Biography, campaigns, Peninsular War, Waterloo, legacy and his role in Bernard Cornwell's Sharpe novels.",
  path: "/people/wellington",
  keywords: [
    "Duke of Wellington",
    "Arthur Wellesley",
    "Wellington biography",
    "Wellington Peninsular War",
    "Wellington Waterloo",
    "Iron Duke",
    "Sharpe Wellington",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arthur Wellesley, 1st Duke of Wellington",
  alternateName: "The Iron Duke",
  birthDate: "1769-05-01",
  deathDate: "1852-09-14",
  birthPlace: { "@type": "Place", name: "Dublin, Ireland" },
  deathPlace: { "@type": "Place", name: "Walmer Castle, Kent" },
  jobTitle: "Field Marshal, Prime Minister of the United Kingdom",
  description:
    "Anglo-Irish soldier and statesman who commanded the Allied armies in the Peninsular War and at Waterloo, and later served as Prime Minister.",
  url: `${SITE.baseUrl}/people/wellington`,
  sameAs: ["https://en.wikipedia.org/wiki/Duke_of_Wellington"],
  mainEntityOfPage: `${SITE.baseUrl}/people/wellington`,
};

export default function WellingtonPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,31,42,0.5),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/people" className="hover:text-gold transition">
              The Napoleonic Archive &middot; People
            </Link>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Arthur Wellesley
            <br />
            <span className="text-gold">Duke of Wellington</span>
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1769 &middot; 1852 &middot; The Iron Duke
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>♛</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Born", value: "1 May 1769, Dublin" },
              { label: "Died", value: "14 Sep 1852, Walmer" },
              { label: "Commands", value: "Peninsula, Waterloo" },
              { label: "Battles fought", value: "~36" },
            ].map((f) => (
              <div
                key={f.label}
                className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3"
              >
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">
                  {f.label}
                </div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EARLY LIFE */}
      <section id="early-life" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Early Life
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Arthur Wesley (he changed the spelling to Wellesley in 1798) was
            born in Dublin on 1 May 1769, the same year as Napoleon Bonaparte.
            He was the third surviving son of the 1st Earl of Mornington, an
            Anglo-Irish peer of modest means. He was educated at Eton, where
            by his own later account he was unhappy and undistinguished, and
            then at the Royal Academy of Equitation at Angers in France, where
            he learned to ride and to speak French fluently.
          </p>
          <p>
            He purchased a commission in the army in 1787 and spent the next
            several years as an aide-de-camp to the Lord Lieutenant of Ireland,
            with little apparent ambition. He served briefly and unhappily in
            the disastrous Flanders campaign of 1793-95, an experience that
            taught him, he later said, what not to do. His career transformed
            when his elder brother Richard was appointed Governor-General of
            India in 1797. Arthur followed him east and found his vocation.
          </p>
        </div>
      </section>

      {/* 3. INDIA */}
      <section
        id="india"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            India
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              In India, Wellesley commanded his first independent campaigns
              and developed the methods that would define his career: meticulous
              logistics, careful reconnaissance, respect for local conditions,
              and an insistence on keeping his men fed, supplied and disciplined.
              He fought at the siege of Seringapatam in 1799, where the Tippoo
              Sultan was killed, and was made governor of Mysore afterwards.
            </p>
            <p>
              His masterpiece in India was the Battle of Assaye on 23 September
              1803, where he attacked a Mahratta army that outnumbered him
              roughly five to one. The fighting was ferocious and the casualties
              heavy; Wellesley later described Assaye as the bloodiest battle he
              had ever seen, a verdict he maintained even after Waterloo. He
              followed it with victories at Argaum and the storm of the fortress
              of Gawilghur, completing the destruction of the Mahratta
              Confederacy.
            </p>
            <p>
              This is the setting for the first three{" "}
              <Link
                href="/fiction"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Sharpe novels
              </Link>
              : Tiger (Seringapatam), Triumph (Assaye) and Fortress
              (Gawilghur). Cornwell places the fictional Richard Sharpe at
              Wellesley&rsquo;s side and has him save the general&rsquo;s life
              at Assaye, earning the commission that drives the rest of the
              series.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE CAMPAIGNS */}
      <section id="campaigns" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Campaigns
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />
          <ol className="space-y-8">
            {[
              { date: "1797-1805", name: "India", outcome: "Victory", link: "/battles", body: "Seringapatam, Assaye, Argaum, Gawilghur. Wellesley learned his trade in India: logistics, reconnaissance, attack when outnumbered, and the meticulous attention to supply that would sustain his later campaigns." },
              { date: "1807", name: "Copenhagen", outcome: "Success", body: "Wellesley commanded a division in the British expedition that bombarded Copenhagen and seized the Danish fleet. A secondary operation, but it returned him to European warfare after two years in England." },
              { date: "1808", name: "Vimeiro", outcome: "Victory", link: "/battles#battle-vimeiro", body: "Wellesley's first Peninsular engagement. British musketry in line shredded advancing French columns on the ridge. The victory was squandered by his superiors, who signed the Convention of Cintra and allowed the French to sail home with their plunder." },
              { date: "1809", name: "Corunna", outcome: "Moore's command", body: "Sir John Moore commanded the retreat to Corunna and was killed in the rearguard action. Wellesley was not present. Moore's death cleared the way for Wellesley's return to Portugal as independent commander." },
              { date: "1809", name: "Talavera", outcome: "Victory", link: "/battles#battle-talavera", body: "A bloody two-day contest in furnace heat. Wellesley held the line despite heavy casualties and was created Viscount Wellington of Talavera, the title by which he is known for the rest of the war." },
              { date: "1810", name: "Busaco", outcome: "Victory", body: "Wellington repulsed Mass&eacute;na's advance on Lisbon at the ridge of Busaco, then withdrew behind the impregnable Lines of Torres Vedras, starving the French out of Portugal without a fight." },
              { date: "1812", name: "Salamanca", outcome: "Decisive victory", link: "/battles#battle-salamanca", body: "Wellington destroyed Marmont's army in forty minutes. By Peninsular tradition, he flung down a chicken bone and said 'By God, that will do!' before riding off to launch the attack. The anecdote is widely repeated; its exact provenance is disputed." },
              { date: "1813", name: "Vitoria", outcome: "Decisive victory", link: "/battles#battle-vitoria", body: "The battle that drove Joseph Bonaparte from Spain. The French army disintegrated among its own baggage train. Wellington was made a Field Marshal and the war moved into France." },
              { date: "1814", name: "Toulouse", outcome: "Strategic Allied", link: "/battles#battle-toulouse", body: "The last major battle of the Peninsular War, fought four days after Napoleon's abdication. The news had not reached the armies. Soult withdrew; couriers confirmed the war was over." },
              { date: "1815", name: "Waterloo", outcome: "Decisive victory", link: "/battles/waterloo", body: "Nine hours on the ridge of Mont-Saint-Jean. Wellington held the line until Bl&uuml;cher's Prussians struck Napoleon's flank. The Imperial Guard was broken. The war, and Napoleon's career, ended in a single evening." },
            ].map((c) => (
              <li key={c.date + c.name} className="relative pl-20 md:pl-28">
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 md:w-24 h-8 rounded-sm bg-burgundy border border-gold/60 text-gold-pale font-display text-sm tracking-wider">
                  {c.date}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                    {c.link ? (
                      <Link href={c.link} className="hover:text-gold transition">{c.name}</Link>
                    ) : c.name}
                  </h3>
                  <span className={`text-xs uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border ${
                    c.outcome.includes("ictory") || c.outcome === "Success"
                      ? "border-gold/50 text-gold-pale"
                      : "border-gold/30 text-parchment/85"
                  }`}>{c.outcome}</span>
                </div>
                <p className="text-parchment leading-relaxed font-serif">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. THE GENERAL */}
      <section
        id="the-general"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            The General
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Wellington was the anti-Napoleon. Where Napoleon sought the
              decisive battle and the annihilation of enemy armies, Wellington
              sought to avoid defeat: to hold ground, conserve his forces, and
              wait for the right moment to strike. His genius lay in logistics,
              defensive positioning, and a cold-eyed understanding of what his
              army could and could not do.
            </p>
            <p>
              His signature tactic was the reverse slope. He deployed his
              infantry behind the crest of a ridge, sheltered from enemy
              artillery, and revealed them only when the French columns
              crested the rise and received devastating volleys at close range.
              He used this method at Busaco, Salamanca and Waterloo. He
              reconnoitred his positions personally, often riding ahead of his
              own pickets, and had an extraordinary eye for ground.
            </p>
            <p>
              He fed his army when other generals let theirs starve. His supply
              system in the Peninsula, based on sea-borne logistics through
              Lisbon and a chain of fortified depots, kept his men provisioned
              while the French lived by plunder and went hungry. He insisted on
              discipline and punished looting severely, not from sentiment but
              because an army that plundered alienated the local population and
              destroyed its own supply base.
            </p>
            <p>
              His view of his own men was famously unsentimental. In a private
              conversation recorded by the Earl Stanhope in November 1813, he
              described his soldiers as &ldquo;the very scum of the earth&rdquo;
              who had enlisted for drink, but added that &ldquo;it really is
              wonderful that we should have made them the fine fellows they
              are.&rdquo; The remark is sometimes quoted out of context as
              contempt; in full, it is closer to astonished professional pride.
            </p>
          </div>
        </div>
      </section>

      {/* 6. THE PENINSULAR WAR */}
      <section id="peninsular" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Peninsular War
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellington commanded in the Peninsula for six years, from his
            landing in Portugal in 1808 to his crossing of the Pyrenees into
            France in 1814. He fought with a polyglot army of British,
            Portuguese and Spanish troops, held together by his personal
            authority, his logistical system, and his refusal to risk a battle
            he might lose.
          </p>
          <p>
            His masterwork of 1810-11 was the Lines of Torres Vedras: a chain
            of 152 forts north of Lisbon, built in secret, behind which he
            withdrew after Busaco, leaving Mass&eacute;na&rsquo;s army to
            starve in a scorched countryside. The French retreated without a
            battle. Wellington then struck at the border fortresses of{" "}
            <Link href="/battles#battle-ciudad-rodrigo" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Ciudad Rodrigo</Link>
            {" "}and{" "}
            <Link href="/battles#battle-badajoz" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Badajoz</Link>
            {" "}in the terrible winter storms of 1812, opening the road into
            Spain.
          </p>
          <p>
            The great victories followed:{" "}
            <Link href="/battles#battle-salamanca" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Salamanca</Link>
            {" "}in 1812, where he destroyed Marmont&rsquo;s army, and{" "}
            <Link href="/battles#battle-vitoria" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Vitoria</Link>
            {" "}in 1813, which drove the French from Spain for good. By 1814
            he was fighting in France itself, winning the last battle of the
            war at{" "}
            <Link href="/battles#battle-toulouse" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Toulouse</Link>
            .
          </p>
          <p>
            This is the central theatre of Bernard Cornwell&rsquo;s{" "}
            <Link href="/fiction" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Sharpe novels</Link>
            . Sharpe serves under Wellington from Talavera to Toulouse, and
            Cornwell portrays the general as cold, brilliant, and willing to use
            Sharpe as an instrument while never quite acknowledging him as an
            equal.
          </p>
        </div>
      </section>

      {/* 7. WATERLOO */}
      <section
        id="waterloo"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Waterloo
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              On 18 June 1815 Wellington fought his greatest and most desperate
              battle on the ridge of{" "}
              <Link href="/battles/waterloo" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Mont-Saint-Jean</Link>
              . He chose the ground himself, having reconnoitred it the
              previous year. His army held a two-mile front against nine hours
              of French assault: the diversionary attack on Hougoumont, the
              massed infantry columns of d&rsquo;Erlon, Ney&rsquo;s
              unsupported cavalry charges, the fall of La Haye Sainte at dusk.
            </p>
            <p>
              The crisis came at 19:30 when the Imperial Guard advanced up the
              ridge. Wellington&rsquo;s Guards brigade, lying behind the crest,
              rose to deliver a volley at thirty yards; the 52nd Light Infantry
              struck the Guard in the flank. The French broke. Wellington waved
              his hat forward and ordered a general advance. The Prussians,
              arriving under Bl&uuml;cher, completed the rout.
            </p>
            <p>
              To Thomas Creevey the next morning, Wellington described the
              battle as &ldquo;the nearest run thing you ever saw in your
              life.&rdquo; He never fought again.
            </p>
          </div>
        </div>
      </section>

      {/* 8. AFTER THE WAR */}
      <section id="after-the-war" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          After the War
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellington entered politics and served as Prime Minister from 1828
            to 1830. He passed Catholic Emancipation in 1829, a pragmatic
            concession he saw as necessary to prevent civil war in Ireland,
            despite his own Tory instincts. He opposed parliamentary reform
            and became deeply unpopular: mobs smashed the windows of Apsley
            House, his London residence, and he earned the nickname the
            &ldquo;Iron Duke&rdquo; not for his generalship but for the iron
            shutters he fitted to protect the glass.
          </p>
          <p>
            He served as Commander-in-Chief of the army until his death at
            Walmer Castle on 14 September 1852, aged eighty-three. He was
            given a state funeral at St Paul&rsquo;s Cathedral. Over a million
            people lined the route.
          </p>
        </div>
      </section>

      {/* 9. LEGACY */}
      <section
        id="legacy"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Legacy
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Wellington is generally regarded as the greatest British soldier
              since Marlborough. He fought approximately thirty-six battles in
              his career and never lost one in independent command. His
              influence on the British army persisted for decades: its
              regimental system, its emphasis on musketry, and its tradition
              of defensive stubbornness all owe something to the Peninsular
              experience.
            </p>
            <p>
              He remains a complex figure: a brilliant field commander and a
              reactionary politician, a man who fed his soldiers but despised
              reform, who freed Catholic Ireland but opposed the extension of
              the franchise. Apsley House is now a museum; Stratfield Saye
              remains in the family. The Wellington boot, named for the style
              he popularised, is perhaps his most democratic memorial.
            </p>
          </div>
        </div>
      </section>

      {/* 10. IN SHARPE'S WORLD */}
      <section id="in-sharpe" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            In Sharpe&rsquo;s World
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
            Fiction &middot; Bernard Cornwell
          </p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg">
            Wellington appears throughout the{" "}
            <Link href="/fiction" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Sharpe novels</Link>
            , from a young Colonel Wellesley in India to the victorious
            commander at Waterloo. Cornwell portrays him as cold, calculating,
            brilliant and utterly unsentimental. He uses Sharpe as an
            instrument, recognises his value, and occasionally saves his career,
            but never quite acknowledges him as a social equal. The
            relationship is one of mutual respect without warmth. The famous
            chicken-bone scene at{" "}
            <Link href="/battles#battle-salamanca" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">Salamanca</Link>
            , where Wellington flings down his lunch and rides off to launch
            the attack, is Cornwell at his most vivid.
          </p>
        </div>
      </section>

      {/* 11. CONTEMPORARY VOICES */}
      <section
        id="voices"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <div className="text-center mb-10">
            <div className="ornament text-gold/70 mb-4">
              <span>✒</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
              Contemporary Voices
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
              Genuine verbatim extracts from published public-domain sources
            </p>
          </div>
          <div className="space-y-10">
            {/* Wellington to Creevey */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Wellington after Waterloo
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  Thomas Creevey, The Creevey Papers (1903)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                It has been a damned nice thing, the nearest run thing you ever
                saw in your life.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">Source</span>
                <span className="font-serif">
                  Recorded by Thomas Creevey, 19 June 1815. The Creevey Papers,
                  1903 edition. Public domain.
                </span>
              </p>
            </article>

            <div className="gold-divider" />

            {/* Wellington on his soldiers */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Wellington on His Soldiers
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  Earl Stanhope, Notes of Conversations with the Duke of
                  Wellington (1888)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                Our friends are the very scum of the earth. Some of our men
                enlist from having got bastard children, some for minor
                offences, many more for drink; but you can hardly conceive such
                a set brought together, and it really is wonderful that we
                should have made them the fine fellows they are.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">Source</span>
                <span className="font-serif">
                  Notes of Conversations with the Duke of Wellington by Earl
                  Stanhope, 1888. Conversation of 4 November 1813. Public
                  domain.
                </span>
              </p>
            </article>

            <div className="gold-divider" />

            {/* Kincaid */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Captain Kincaid at Waterloo
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  John Kincaid, Adventures in the Rifle Brigade (1830)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                I had never yet heard of a battle in which everybody was
                killed; but this seemed likely to be an exception, as all were
                going by turns.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">Source</span>
                <span className="font-serif">
                  Adventures in the Rifle Brigade by Captain John Kincaid,
                  1830. Public domain.
                </span>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 12. FURTHER READING */}
      <section id="reading" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Wellington: A Personal History
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Christopher Hibbert, 1997
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              The definitive single-volume biography. Hibbert covers the
              soldier, the politician and the private man with equal depth.
            </p>
            <a href="https://amzn.to/4vyaCsL" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy on Amazon &rarr;
            </a>
          </div>
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Waterloo: The History of Four Days, Three Armies and Three Battles
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Bernard Cornwell, 2014
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              Cornwell&rsquo;s non-fiction account of the Waterloo campaign,
              drawing on letters and dispatches. Essential companion to
              Sharpe&rsquo;s Waterloo.
            </p>
            <a href="https://amzn.to/4tjc80D" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy on Amazon &rarr;
            </a>
          </div>
        </div>
        <div className="text-center space-y-3">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/resources" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
              Browse all resources &rarr;
            </Link>
            <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
              Battle of Waterloo
            </Link>
            <Link href="/people" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
              &larr; All People
            </Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 pt-4">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
