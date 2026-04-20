import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "95th Rifles",
  description:
    "The 95th Rifles: Baker rifle, green jacket, fighting in pairs. Sharpe's regiment. The complete history of the most feared light infantry in the Napoleonic Wars.",
  path: "/regiments/95th-rifles",
  keywords: [
    "95th Rifles",
    "Rifle Brigade",
    "Baker rifle",
    "Sharpe regiment",
    "Napoleonic light infantry",
    "green jacket",
    "Chosen Man",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 95th Regiment of Foot (Rifle Regiment)",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/95th-rifles`,
  url: `${SITE.baseUrl}/regiments/95th-rifles`,
  inLanguage: "en-GB",
};

export default function NinetyFifthRiflesPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/regiments" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Regiments
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            95th Regiment of Foot
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Rifle Brigade &middot; Swift and Bold &middot;
            Sharpe&rsquo;s Regiment
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>⚑</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1800" },
              { label: "Uniform", value: "Green jacket" },
              { label: "Weapon", value: "Baker Rifle" },
              { label: "Motto", value: "Celer et Audax" },
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

      {/* 2. INTRODUCTION */}
      <section
        id="introduction"
        className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24"
      >
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Introduction
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The 95th Rifles were unlike any other regiment in the British
            Army. Where line infantry stood shoulder to shoulder in rigid
            formation and traded volleys at fifty yards, the riflemen fought
            in pairs, using cover, thinking independently, and shooting
            accurately at three times the range of the standard musket. Armed
            with the Baker rifle and clothed in dark green instead of the
            regulation scarlet, they were the most feared light infantry in
            Europe.
          </p>
          <p>
            They are also Richard Sharpe&rsquo;s regiment. The green-jacketed
            95th is the home of Bernard Cornwell&rsquo;s hero and of Sergeant
            Patrick Harper, the big Irishman with the seven-barrelled volley
            gun. In fiction and in fact, the 95th Rifles defined a new kind of
            soldier: skilled, self-reliant, and deadly at range.
          </p>
        </div>
      </section>

      {/* 3. RAISING THE REGIMENT */}
      <section
        id="raising"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Raising the Regiment
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The regiment was founded in 1800 as the Experimental Corps of
              Riflemen under Colonel Coote Manningham and Lieutenant Colonel
              William Stewart. It drew volunteers from across the army: men
              who could shoot, think, and act on their own initiative. From
              the beginning it was conceived as an elite.
            </p>
            <p>
              The training system that shaped the 95th was developed at
              Shorncliffe Camp in Kent under Sir John Moore. Moore&rsquo;s
              methods emphasised individual initiative, marksmanship, fitness,
              and a relationship between officers and men that was closer and
              more respectful than in the line regiments. The soldiers were
              armed with the Baker rifle, a grooved, muzzle-loading weapon
              accurate to 300 yards, against the 50 to 75 yards effective
              range of the standard Brown Bess musket. They wore dark green
              jackets chosen for concealment, with black leather
              accoutrements: no bright brass buttons or white crossbelts to
              catch the light or the eye of an enemy marksman.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE BAKER RIFLE */}
      <section id="baker-rifle" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Baker Rifle
          </h2>
        </div>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Baker rifle, designed by Ezekiel Baker of Whitechapel and
            adopted in 1800, was the weapon that made the 95th what they
            were. Its barrel was shorter than the Brown Bess musket and had
            seven quarter-turn grooves that spun the ball, giving it far
            greater accuracy at range. The cost was speed: the tight-fitting
            ball had to be hammered down the grooved barrel with a mallet,
            making the Baker slower to load than a smoothbore musket. A
            trained rifleman could fire two aimed shots per minute; a line
            infantryman with a Brown Bess could manage three or four
            unaimed volleys.
          </p>
          <p>
            The trade-off was deliberate. The 95th were not expected to
            deliver massed fire. They were expected to pick off officers,
            sergeants, artillerymen and colour-bearers at ranges where the
            enemy could not reply. The best shots in each company were
            designated &ldquo;Chosen Men&rdquo; and given a distinguishing
            badge: they were the elite of an elite, trusted to select their
            own targets and fire independently.
          </p>
          <p>
            The Baker was fitted with a sword bayonet rather than the
            triangular spike bayonet of the line infantry. At 24 inches, it
            was longer than the standard bayonet and could be used as a short
            sword in close quarters. The rifleman was expected to be as
            dangerous with the blade as with the ball.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Effective range",
              baker: "200 to 300 yards",
              bess: "50 to 75 yards",
            },
            {
              label: "Rate of fire",
              baker: "2 aimed shots/min",
              bess: "3 to 4 volleys/min",
            },
            {
              label: "Barrel",
              baker: "Rifled (7 grooves)",
              bess: "Smoothbore",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="card p-5 rounded-sm text-center"
            >
              <div className="text-xs uppercase tracking-widest text-gold/70 mb-3">
                {c.label}
              </div>
              <div className="font-display text-gold-pale text-sm mb-1">
                Baker: {c.baker}
              </div>
              <div className="text-xs text-parchment/85 font-serif">
                Brown Bess: {c.bess}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TACTICS AND TRAINING */}
      <section
        id="tactics"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Tactics and Training
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Riflemen fought in pairs. While one loaded, the other aimed,
              ensuring that at least one rifle was always ready. The pair
              moved together, used cover instinctively, and operated with a
              degree of autonomy unknown in the line regiments. They were
              expected to read the ground, choose targets, and act without
              waiting for orders.
            </p>
            <p>
              Use of cover was revolutionary in an era when British line
              infantry stood upright in formation as a matter of regulation
              and pride. The 95th lay down behind walls, fired from copses,
              and crawled through standing crops to reach a firing position.
              NCOs and even privates were trained to act on their own
              initiative, a doctrinal shift that owed everything to Sir
              John Moore&rsquo;s Shorncliffe system.
            </p>
            <p>
              In place of the rolling drumbeats that controlled line infantry
              manoeuvres, the 95th used bugle calls. The bugle carried
              further over broken ground and through the noise of battle, and
              it suited a regiment whose soldiers were often scattered as
              skirmishers. They fought ahead of the main line, harassing
              enemy columns, picking off officers, and disrupting formations
              before the main British line ever came into volley range. Where
              a line regiment stood and fired in unison, the rifleman moved,
              thought, and chose his target.
            </p>
          </div>
        </div>
      </section>

      {/* 6. THE CAMPAIGNS */}
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
          <ol className="space-y-6">
            {[
              { date: "1807", name: "Copenhagen", body: "The 95th took part in the British expedition that bombarded Copenhagen and seized the Danish fleet." },
              { date: "1808-09", name: "Corunna", link: "/battles#battle-corunna", body: "The harrowing winter retreat across Galicia. Riflemen of the 95th formed the rearguard under Sir John Moore." },
              { date: "1810", name: "Busaco", body: "The 95th skirmished ahead of Wellington's line on the ridge of Busaco, blunting the French advance before the main engagement." },
              { date: "1812", name: "Ciudad Rodrigo", link: "/battles#battle-ciudad-rodrigo", body: "A midwinter siege opened in frozen trenches. The 95th provided sharpshooters and assault troops at the breaches." },
              { date: "1812", name: "Badajoz", link: "/battles#battle-badajoz", body: "The most costly night in the regiment's history. The 95th led storming parties at the breaches and the castle walls and was decimated." },
              { date: "1812", name: "Salamanca", link: "/battles#battle-salamanca", body: "Riflemen skirmished across the Arapiles as Wellington's army destroyed Marmont's in forty minutes." },
              { date: "1813", name: "Vitoria", link: "/battles#battle-vitoria", body: "The battle that drove the French from Spain. The 95th harassed the retreating French through the streets and into the baggage train." },
              { date: "1814", name: "Toulouse", link: "/battles#battle-toulouse", body: "The last major battle of the Peninsular War, fought four days after Napoleon's abdication. The 95th was in the line under Soult's guns." },
              { date: "1815", name: "Waterloo", link: "/battles/waterloo", body: "The 95th fought in the centre of Wellington's line, supporting La Haye Sainte all afternoon, and joined the final advance at dusk." },
            ].map((c) => (
              <li key={c.date + c.name} className="relative pl-20 md:pl-28">
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 md:w-24 h-8 rounded-sm bg-burgundy border border-gold/60 text-gold-pale font-display text-sm tracking-wider">
                  {c.date}
                </div>
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
                  {c.link ? (
                    <Link href={c.link} className="hover:text-gold transition">
                      {c.name}
                    </Link>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="text-parchment leading-relaxed font-serif">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. NOTABLE OFFICERS AND MEN */}
      <section
        id="notable"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            Notable Officers and Men
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Sir Andrew Barnard
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Major-General &middot; commanding officer at Waterloo
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                A career rifleman who rose from junior officer to general.
                Commanded the 1st Battalion of the 95th at Waterloo, where he
                was wounded in the action that supported La Haye Sainte. He
                later served as a senior officer of the army.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Jonathan Leach
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Captain &middot; memoirist
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Author of Rough Sketches of the Life of an Old Soldier
                (1831), one of the best officer memoirs of the Peninsular
                War. Leach served with the 95th from 1808 to Waterloo and
                wrote with dry humour and a soldier&rsquo;s eye for detail.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                John Kincaid
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Captain &middot; memoirist
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Author of Adventures in the Rifle Brigade (1830). Served with
                the 95th from the Walcheren expedition through the Peninsula
                to Waterloo, where he was adjutant of the 1st Battalion. The
                droll, literate voice of the regiment.{" "}
                <Link href="/stories" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                  Read his Badajoz extract on Stories &rarr;
                </Link>
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Benjamin Harris
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Rifleman &middot; memoirist
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                A Dorset shepherd turned rifleman whose dictated Recollections
                of Rifleman Harris (1848) is the finest private-soldier
                document we have of the Peninsular War. He served on the
                retreat to Corunna and his plain voice gives the experience a
                reality no dispatch can.{" "}
                <Link href="/stories" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                  Stories &rarr;
                </Link>{" "}
                &middot;{" "}
                <Link href="/resources" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                  Resources &rarr;
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 8. BADAJOZ — THE COSTLIEST NIGHT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="card p-8 rounded-sm border-burgundy-bright/40 bg-burgundy-deep/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-burgundy-bright font-display text-lg">❦</span>
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
              Badajoz: The Costliest Night
            </h3>
          </div>
          <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
            On the night of 6 April 1812 the 95th went into the breaches of
            Badajoz with the Light and 4th Divisions. The casualties were
            catastrophic. The assault parties at the Trinidad and Santa Maria
            breaches were broken again and again on the chevaux-de-frise and
            the murderous fire from the ramparts; dead Britons piled in the
            ditch until the storming columns could climb on their bodies. The
            95th lost officers and men in numbers the regiment had never
            suffered before, and would not suffer again.
          </p>
          <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
            The courage shown that night became part of regimental legend.
            Officers led from the front and died there; sergeants and
            corporals took over and led on. Wellington, who had seen many
            battles, wept on the glacis at dawn when he saw the cost.
          </p>
          <Link
            href="/battles#battle-badajoz"
            className="inline-block px-5 py-2 border border-gold/60 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition"
          >
            Read the Battle of Badajoz &rarr;
          </Link>
        </div>
      </section>

      {/* 9. WATERLOO */}
      <section
        id="waterloo"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Waterloo: The Final Battle
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              At{" "}
              <Link
                href="/battles/waterloo"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Waterloo
              </Link>{" "}
              the 1st Battalion of the 95th, under Sir Andrew Barnard, was
              positioned in the centre of Wellington&rsquo;s line. They
              skirmished ahead of the main British formations through the
              morning, then took up a position around the sandpit and a
              broken hedgerow on the eastern side of the Brussels road,
              directly supporting La Haye Sainte. From this ground they
              shot at French skirmishers and gunners all afternoon, and
              held even after La Haye Sainte fell at dusk and French
              infantry pushed up the slope behind them.
            </p>
            <p>
              When the Imperial Guard advanced and was broken, the 95th
              joined the general advance at evening, pursuing the French
              into the night. Casualties for the regiment at Waterloo were
              severe: the 1st Battalion lost roughly a third of its
              strength in killed and wounded. The 95th ended the day, and
              the war, in the centre of Wellington&rsquo;s victory.
            </p>
          </div>
        </div>
      </section>

      {/* 10. THE REGIMENT TODAY */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
          The Regiment Today
        </h2>
        <p className="text-parchment leading-relaxed font-serif text-lg">
          In 1816 the 95th was removed from the numbered line of the army
          and constituted as the Rifle Brigade, a unique regiment marked
          out from the rest of the infantry. Through successive amalgamations
          its lineage today survives in The Rifles, formed in 2007 and the
          largest regiment in the British Army. The regimental museum is at
          Peninsula Barracks in Winchester, where the Royal Green Jackets
          Museum holds Baker rifles, jackets, colours and the largest 95th
          collection in the world.{" "}
          <Link
            href="/resources"
            className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
          >
            Find it on the Resources page &rarr;
          </Link>
        </p>
      </section>

      {/* 11. IN SHARPE'S WORLD */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
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
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              The 95th is Sharpe&rsquo;s true home throughout the Cornwell
              novels. He transfers to the Rifles after his commission and
              spends the rest of the Peninsular series fighting in the green
              jacket. The dark coat and Baker rifle become inseparable from
              his identity: when he is detached to the (fictional) South
              Essex line battalion in Sharpe&rsquo;s Eagle, he keeps his
              green jacket and his rifle as a deliberate refusal to
              assimilate. Patrick Harper, the huge Irish sergeant with the
              seven-barrelled volley gun, is the archetypal rifleman:
              skilled, independent, devoted to Sharpe and to the regiment.
              Cornwell uses the 95th as a counterpoint to the line: a
              regiment of thinking soldiers in an army of drilled formations.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="https://amzn.to/4cSwN4L"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Sharpe&rsquo;s Rifles &rarr;
              </a>
              <a
                href="https://amzn.to/4sXbzbX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Sharpe&rsquo;s Eagle &rarr;
              </a>
              <a
                href="https://amzn.to/4thUGcX"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Sharpe&rsquo;s Company &rarr;
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="/fiction"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                All 24 Sharpe novels &rarr;
              </Link>
              <Link
                href="/fiction/characters"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Character guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FURTHER READING */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
          Further Reading
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Recollections of Rifleman Harris
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Benjamin Harris, 1848
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              The dictated memoirs of a Dorset shepherd turned rifleman. The
              best private-soldier document of the Peninsular War.
            </p>
            <a
              href="https://amzn.to/4elXalK"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
            >
              Buy on Amazon &rarr;
            </a>
          </div>

          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Adventures in the Rifle Brigade
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Captain John Kincaid, 1830
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              The literate, droll account of an officer of the 95th from
              Walcheren to Waterloo. Available in multiple editions; search
              Amazon for current paperbacks.
            </p>
            <a
              href="https://www.amazon.com/s?k=adventures+in+the+rifle+brigade+kincaid"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
            >
              Search on Amazon &rarr;
            </a>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/regiments"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              &larr; All Regiments
            </Link>
            <Link
              href="/stories"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Stories
            </Link>
            <Link
              href="/resources"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Resources
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
