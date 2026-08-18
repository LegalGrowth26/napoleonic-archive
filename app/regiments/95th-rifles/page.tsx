import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "95th Rifles",
  description:
    "The 95th Rifles, Sharpe's regiment: origins, the Baker rifle, green jackets, the Light Division, the Peninsular War and Waterloo, and the Rifles today.",
  path: "/regiments/95th-rifles",
  keywords: [
    "95th Rifles",
    "95th Regiment of Foot",
    "Rifle Brigade",
    "Baker rifle",
    "green jackets",
    "Light Division",
    "Sharpe regiment",
    "Napoleonic light infantry",
    "Chosen Man",
  ],
  type: "article",
});

const faqItems = [
  { q: "What was the 95th Rifles?", a: "The 95th Rifles was a British Army regiment formed in 1800 as the Experimental Corps of Riflemen and established as a regular regiment in 1803. It was the first British regiment to be armed with rifles rather than smooth-bore muskets, and the first to wear green rather than red. It fought throughout the Napoleonic Wars, most notably in the Peninsular War and at Waterloo, and was renamed the Rifle Brigade in 1816." },
  { q: "What made the 95th different from other British regiments?", a: "Three things: they carried the Baker rifle instead of the Brown Bess musket, giving them greater accuracy at long range; they wore green jackets instead of red, making them harder to see in cover; and they fought in dispersed pairs as skirmishers rather than in line. They also had a distinctive culture that emphasised marksmanship, merit-based promotion, and individual initiative." },
  { q: "Was Sharpe based on a real person?", a: "No. Richard Sharpe is a fictional character created by Bernard Cornwell. However, Cornwell drew heavily on real officer and rifleman memoirs, particularly those of Harry Smith, John Kincaid, Jonathan Leach, and Rifleman Harris, and Sharpe's world is closely grounded in the real experience of the 95th." },
  { q: "What was the Baker rifle?", a: "The Baker rifle was the first British-made rifle accepted for regular infantry service, adopted by the 95th and the 60th in 1800. Designed by Ezekiel Baker of Whitechapel, it was a muzzle-loading flintlock accurate to 200 yards or more, considerably slower to load than the Brown Bess musket but dramatically more accurate." },
  { q: "What happened to the 95th Rifles?", a: "In 1816 the 95th was renamed the Rifle Brigade and removed from the numbered line of infantry. Through a series of subsequent amalgamations, the regiment's lineage passed to the Royal Green Jackets in 1966 and then to The Rifles in 2007, which is today the largest regiment in the British Army and still wears the green jacket the 95th first put on in 1800." },
  { q: "Where can I see 95th Rifles artefacts today?", a: "The Royal Green Jackets Museum at Peninsula Barracks in Winchester holds the largest 95th Rifles collection in the world, including Baker rifles, uniforms, and colours from the successor regiments." },
  { q: "Did the 95th really fight at Waterloo?", a: "Yes. The 1st Battalion of the 95th held a sandpit next to the farmhouse of La Haye Sainte in the centre of Wellington's line throughout 18 June 1815. They lost roughly a third of their strength killed and wounded." },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

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
      <JsonLd data={faqJsonLd} />

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

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="/95th-rifles.png"
          alt="Riflemen of the 95th in their green jackets"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

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
              The regiment was founded on 17 January 1800 as the Experimental
              Corps of Riflemen under Colonel Coote Manningham and Lieutenant
              Colonel William Stewart. It drew volunteers from across the
              army: men who could shoot, think, and act on their own
              initiative. From the beginning it was conceived as an elite,
              designed as a response to a specific problem: the British Army
              had no regular rifle-armed infantry capable of matching the
              French tirailleurs, the light troops who screened
              Napoleon&rsquo;s columns and harassed enemy formations.
            </p>
            <p>
              The Experimental Corps saw its first action within months,
              taking part in an unsuccessful raid on the Spanish coast at
              Ferrol in August 1800. In April 1801, a company under Captain
              Sidney Beckwith served aboard Nelson&rsquo;s ships at the First
              Battle of Copenhagen as marksmen in the rigging. The regiment
              lost its first officer, a lieutenant, during that battle. The
              unit was renamed the Rifle Corps in 1802 and, in January 1803,
              was formally added to the line as the 95th Regiment of Foot
              (Rifles).
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
            <p>
              At Shorncliffe the 95th was brigaded with the 43rd and 52nd
              Foot for a new kind of light infantry training. The Shorncliffe
              experiment produced the tactical doctrine and culture that
              would define the Light Division through the Peninsular War.
              Before its Peninsular deployment, the regiment took part in the
              capture of Bremen in 1805, the failed South American expedition
              in 1806, and the Second Battle of Copenhagen in 1807.
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
            and greased leather patches were used to grip the rifling,
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
          <p>
            The most famous demonstration of the Baker&rsquo;s reach was
            Rifleman Thomas Plunket&rsquo;s shooting of the French General
            Auguste-Marie-Fran&ccedil;ois Colbert at Cacabelos on 3 January
            1809, during the retreat to Corunna. Estimates of the range vary
            between 400 and 600 yards, with some accounts placing it further.
            Plunket then reloaded and shot the officer who came forward to
            help the fallen general, which was the point of the
            demonstration.
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
            <p>
              The doctrine had precedents in the North American wars, where
              British light troops had learned from encounters with French
              Canadian irregulars and American colonists. Sir John
              Moore&rsquo;s contribution at Shorncliffe was to systematise
              these lessons and add a distinctive training culture. Riflemen
              were taught rather than flogged. They trained with live
              ammunition, a luxury in the British Army at the time, and took
              part in shooting competitions with prizes for accuracy. Those
              who could not read or write were taught, to give them a better
              chance at promotion.
            </p>
            <p>
              The regiment carried no Colours: the standards that normally
              rallied a regiment in battle would have been a liability for
              troops fighting dispersed. Promotion in the 95th was more often
              by merit than by purchase, and the social distance between
              officers and men was narrower than in most Georgian regiments.
              Officers and riflemen slept rough on the same picket lines and
              endured the same marches. This egalitarian streak became a
              defining feature of the regiment&rsquo;s culture and appears
              throughout the surviving memoirs.
            </p>
          </div>
        </div>
      </section>

      {/* UNIFORM AND APPEARANCE */}
      <section id="uniform" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Uniform and Appearance
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The 95th were the first British regiment to abandon red for
            green. Their bottle-green jackets, black leather crossbelts and
            cartridge boxes, and dark shako were the British Army&rsquo;s
            first serious attempt at camouflage. The reasoning was practical:
            a skirmisher&rsquo;s job was to fire from cover and stay unseen.
            Red was ideal for line infantry, who wanted to be seen by their
            own side and unafraid of being seen by the enemy. For riflemen,
            red was a liability.
          </p>
          <p>
            The distinctive green earned them nicknames on both sides. The
            French called them <em>sauterelles</em> (&ldquo;grasshoppers&rdquo;)
            for the way they moved through cover in short rushes.
            Wellington&rsquo;s own army sometimes called them the
            &ldquo;Sweeps&rdquo; for the same reason. The green jacket became
            so identified with the regiment that it survived every subsequent
            renaming: the Rifle Brigade, the Royal Green Jackets, and
            today&rsquo;s Rifles all wear it.
          </p>
        </div>
      </section>

      {/* 6. THE CAMPAIGNS */}
      <section id="campaigns" className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 py-16">
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
              { date: "1808", name: "Mondego Bay & Obidos", body: "The 2/95th covered the British landings in Portugal and fired the first British shots of the Peninsular War at Obidos on 15 August. Lieutenant Ralph Bunbury became the first British officer killed in the war." },
              { date: "1808", name: "Rolica", link: "/battles/rolica", body: "The first pitched battle of the Peninsular War, fought on 17 August. The 95th fought as part of the 6th Brigade." },
              { date: "1808", name: "Vimeiro", link: "/battles/vimeiro", body: "The second British victory in Portugal, ending French control of the country for the time being." },
              { date: "1808-09", name: "Corunna", link: "/battles/corunna", body: "The harrowing winter retreat across Galicia. Riflemen of the 95th, with the 43rd and 52nd, formed the rearguard under Sir John Moore." },
              { date: "1809", name: "Cacabelos", body: "During the retreat, on 3 January, Rifleman Thomas Plunket shot the French General Colbert at extreme range, then reloaded and shot the officer who came forward to help him." },
              { date: "1810", name: "The Coa", body: "A rearguard action on the Portuguese frontier in July, where the 95th fought a difficult withdrawal." },
              { date: "1810", name: "Busaco", link: "/battles/busaco", body: "The 95th skirmished ahead of Wellington's line on the ridge of Busaco, blunting the French advance before the main engagement." },
              { date: "1810-11", name: "Torres Vedras", body: "The 95th spent the winter behind Wellington's fortified lines while the French army outside starved." },
              { date: "1811", name: "Fuentes de Onoro", link: "/battles/fuentes-de-onoro", body: "The Light Division covered a difficult withdrawal on the southern flank with exceptional discipline." },
              { date: "1812", name: "Ciudad Rodrigo", link: "/battles/ciudad-rodrigo", body: "A midwinter siege opened in frozen trenches. The 95th provided sharpshooters and assault troops at the breaches." },
              { date: "1812", name: "Badajoz", link: "/battles/badajoz", body: "The most costly night in the regiment's history. The 95th led storming parties at the breaches and the castle walls and was decimated." },
              { date: "1812", name: "Salamanca", link: "/battles/salamanca", body: "Riflemen skirmished across the Arapiles as Wellington's army destroyed Marmont's in forty minutes." },
              { date: "1813", name: "Vitoria", link: "/battles/vitoria", body: "The battle that drove the French from Spain. The 95th harassed the retreating French through the streets and into the baggage train." },
              { date: "1813", name: "Vera", body: "In August, a company under Captain Daniel Cadoux held off an entire French division at the bridge of Vera before being killed with most of his men in a doomed defence." },
              { date: "1813", name: "Nivelle", link: "/battles/nivelle", body: "The Light Division led the crossing of the Nivelle as Wellington broke Soult's defensive works on French soil." },
              { date: "1813", name: "Nive", link: "/battles/nive", body: "Hard fighting around St Pierre in December as Soult attacked Wellington's divided army." },
              { date: "1814", name: "Orthez", link: "/battles/orthez", body: "Wellington forced Soult from another stubborn defensive stand, opening the road into southern France." },
              { date: "1814", name: "Tarbes", body: "On 20 March, all three battalions of the 95th fought together, unsupported, for the first time, sweeping Marshal Soult's forces from Wellington's line of advance." },
              { date: "1814", name: "Toulouse", link: "/battles/toulouse", body: "The last major battle of the Peninsular War, fought four days after Napoleon's abdication. The 95th was in the line under Soult's guns." },
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

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Coote Manningham
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Colonel &middot; co-founder
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Co-founder and first commanding officer of the Experimental
                Corps of Riflemen. His lectures on light infantry service
                helped shape the regiment&rsquo;s doctrine. He died of illness
                in 1809 while the regiment was fighting in Spain.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Sidney Beckwith
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Lieutenant-Colonel &middot; Light Division brigade commander
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Commanded the company that served aboard Nelson&rsquo;s ships
                at Copenhagen in 1801, later commanded the 1st Battalion in
                the Peninsula, and rose to command a brigade in the Light
                Division.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Harry Smith
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Officer &middot; later general and colonial governor
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Served with the 95th through the Peninsula and at Waterloo,
                and married a young Spanish woman named Juana at Badajoz,
                whose story is told in Georgette Heyer&rsquo;s The Spanish
                Bride. He later became a general and a colonial governor.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Thomas Plunket
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Rifleman &middot; marksman
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The rifleman who shot General Colbert at Cacabelos in January
                1809, the most famous single shot of the Napoleonic Wars. His
                later life was less distinguished; he ended up in poverty and
                drink.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Daniel Cadoux
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Captain &middot; died at Vera, 1813
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The captain who held the bridge of Vera with a single company
                against an entire French division in August 1813, and died
                there with most of his men in a doomed defence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THE OTHER RIFLES: THE 60TH */}
      <section id="sixtieth" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Other Rifles: the 60th
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The 95th was not the only rifle regiment in Wellington&rsquo;s
            army. The 5th Battalion of the 60th Regiment of Foot, known as
            the 5/60th, was also rifle-armed and served alongside the 95th
            throughout the Peninsular War. The 60th had been raised for
            service in North America in the Seven Years War and drew heavily
            on German and other continental European recruits. Its riflemen
            wore green jackets and carried Baker rifles, and were distributed
            in companies among Wellington&rsquo;s brigades to provide
            skirmishing capability across the whole army.
          </p>
          <p>
            In Bernard Cornwell&rsquo;s novels, Sharpe serves in the 95th
            while his friend Captain William Frederickson is a 60th officer.
            The two rifle regiments had different characters: the 95th was a
            self-contained elite formation with its own three battalions and
            distinctive culture, while the 60th&rsquo;s rifle battalion was
            more often broken up and distributed for tactical use.{" "}
            <Link href="/fiction/characters/frederickson" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
              Read about Frederickson &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* 8. BADAJOZ, THE COSTLIEST NIGHT */}
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
            href="/battles/badajoz"
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
              their fire disrupted repeated French infantry advances against
              the farm and the ridge behind it. When La Haye Sainte fell in
              the late afternoon, after its King&rsquo;s German Legion
              garrison ran out of ammunition, the 95th&rsquo;s position
              became critical. They held on as French infantry pushed up the
              slope behind them.
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
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            In 1816 the 95th was removed from the numbered line of the army
            and constituted as the Rifle Brigade, a unique regiment marked
            out from the rest of the infantry. The number 95 was later
            assigned to a different regiment. From 1852 to 1861 Prince
            Albert served as colonel-in-chief, and the regiment took his
            name as the Prince Consort&rsquo;s Own Rifle Brigade. It fought
            throughout the Crimean War of 1854-1855, earning eight Victoria
            Crosses, the highest total for any single regiment, and served
            with distinction in both World Wars: in the First at Ypres and
            on the Somme, and in the Second in North Africa, Italy, and
            North West Europe.
          </p>
          <p>
            In 1966 the Rifle Brigade amalgamated with the 43rd, 52nd, 60th
            and King&rsquo;s Royal Rifle Corps to form the Royal Green
            Jackets. A further amalgamation in 2007 formed The Rifles,
            currently the largest regiment in the British Army, which still
            wears the green jacket the 95th first put on in 1800. The
            regimental museum is at Peninsula Barracks in Winchester, where
            the Royal Green Jackets Museum holds Baker rifles, jackets,
            colours and the largest 95th collection in the world.{" "}
            <Link
              href="/resources"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Find it on the Resources page &rarr;
            </Link>
          </p>
        </div>
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
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              Sharpe was not the first rifleman in fiction. C.S.
              Forester&rsquo;s <em>Rifleman Dodd</em> (published as
              <em> Death to the French</em> in the UK, 1932) is a taut
              novella about a lone rifleman cut off behind French lines in
              Portugal, widely used in military reading lists for its
              portrayal of small-unit initiative. Georgette Heyer&rsquo;s
              <em> The Spanish Bride</em> (1940) is a historical novel based
              closely on Harry Smith&rsquo;s memoir, telling the story of
              his marriage to Juana Maria de los Dolores. Both earlier works
              influenced Cornwell&rsquo;s decision to set Sharpe in the
              95th.
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

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
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

      {/* 12. FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-8">
          Read the Riflemen in Their Own Words
        </h2>
        <p className="text-parchment leading-relaxed font-serif text-lg max-w-3xl mx-auto text-center mb-12">
          The 95th left an unusually rich body of first-person literature for
          a single regiment. The memoirs of Leach, Kincaid, and Harris,
          together with those of Edward Costello and William Green, are the
          reason we know so much about the daily life of the
          Peninsula&rsquo;s riflemen, and Bernard Cornwell drew heavily on
          them for the Sharpe novels.
        </p>
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

          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Adventures of a Soldier
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Edward Costello, 1841
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed">
              Another important 95th memoir. Costello served through the
              Peninsula from the Coa to Waterloo, and his account is one of
              the frankest descriptions of a rifleman&rsquo;s life on
              campaign.
            </p>
          </div>

          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              The Travels and Adventures of William Green
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              William Green, 1857
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed">
              A brief outline of a rifleman&rsquo;s service, valuable for its
              private-soldier perspective on the marches, sieges and battles
              of the Peninsular War.
            </p>
          </div>
        </div>

        <p className="text-center text-parchment/95 font-serif italic max-w-2xl mx-auto mt-4">
          For a wider curated selection of memoirs and modern histories, see our{" "}
          <Link
            href="/napoleonic-wars-books"
            className="text-gold-pale underline underline-offset-2 hover:text-gold transition"
          >
            Napoleonic Wars reading guide &rarr;
          </Link>
        </p>

        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-4">
          Where the 95th Fought
        </h2>
        <p className="text-parchment/85 font-serif text-center max-w-2xl mx-auto mb-10">
          Follow the regiment through the battles of the Peninsular War and
          beyond.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { name: "Peninsular War Hub", href: "/battles/peninsular-war" },
            { name: "Rolica (1808)", href: "/battles/rolica" },
            { name: "Vimeiro (1808)", href: "/battles/vimeiro" },
            { name: "Corunna (1809)", href: "/battles/corunna" },
            { name: "Second Oporto (1809)", href: "/battles/second-oporto" },
            { name: "Talavera (1809)", href: "/battles/talavera" },
            { name: "Busaco (1810)", href: "/battles/busaco" },
            { name: "Fuentes de Onoro (1811)", href: "/battles/fuentes-de-onoro" },
            { name: "Albuera (1811)", href: "/battles/albuera" },
            { name: "Ciudad Rodrigo (1812)", href: "/battles/ciudad-rodrigo" },
            { name: "Badajoz (1812)", href: "/battles/badajoz" },
            { name: "Salamanca (1812)", href: "/battles/salamanca" },
            { name: "Burgos (1812)", href: "/battles/burgos" },
            { name: "Vitoria (1813)", href: "/battles/vitoria" },
            { name: "San Sebastian (1813)", href: "/battles/san-sebastian" },
            { name: "Nivelle (1813)", href: "/battles/nivelle" },
            { name: "Nive (1813)", href: "/battles/nive" },
            { name: "Orthez (1814)", href: "/battles/orthez" },
            { name: "Toulouse (1814)", href: "/battles/toulouse" },
            { name: "Waterloo (1815)", href: "/battles/waterloo" },
          ].map((b) => (
            <Link key={b.href} href={b.href} className="card px-4 py-3 rounded-sm block text-center hover:border-gold/60 transition">
              <span className="font-display text-gold-pale uppercase tracking-wider text-xs">{b.name}</span>
            </Link>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { href: "/people/wellington", title: "Duke of Wellington", desc: "The commander the riflemen followed from Portugal to Waterloo." },
            { href: "/bernard-cornwell", title: "Bernard Cornwell", desc: "The author who made the 95th famous. Complete guide and bibliography." },
            { href: "/fiction/characters", title: "Sharpe Character Guide", desc: "150+ characters from the novels, searchable." },
            { href: "/fiction", title: "Sharpe Books in Order", desc: "The complete reading guide to all 24 novels." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
              <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{c.title}</div>
              <p className="text-parchment/85 font-serif text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER LINKS + DISCLAIMER */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/regiments/baker-rifle"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              The Baker Rifle &rarr;
            </Link>
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
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center pt-6">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
          <p className="text-[10px] text-parchment/50 text-center mt-2">
            Page last updated: July 2026
          </p>
        </div>
      </section>
    </>
  );
}
