import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleon’s Russian Campaign 1812",
  description:
    "Napoleon’s Russian Campaign of 1812: the Grande Armée’s march to Moscow, the burning of the city, and the catastrophic winter retreat that destroyed the finest army in Europe.",
  path: "/battles/russian-campaign",
  keywords: [
    "Russian Campaign 1812",
    "Napoleon Russia 1812",
    "Grande Armée",
    "Battle of Borodino",
    "Moscow 1812",
    "Beresina crossing",
    "Napoleonic Wars",
    "retreat from Moscow",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Napoleon’s Russian Campaign 1812",
  description:
    "The Grande Armée’s invasion of Russia in 1812: from the crossing of the Niemen to the catastrophic winter retreat that broke Napoleon’s empire.",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.baseUrl}/favicon.ico`,
    },
  },
  mainEntityOfPage: `${SITE.baseUrl}/battles/russian-campaign`,
  url: `${SITE.baseUrl}/battles/russian-campaign`,
  inLanguage: "en-GB",
};

export default function RussianCampaignPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,rgba(107,31,42,0.6),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Battles
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Napoleon&rsquo;s Russian Campaign
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1812 &middot; The March That Destroyed an Empire
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>⚔</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Year", value: "1812" },
              { label: "Grande Armée", value: "~685,000" },
              { label: "Survivors", value: "~100,000" },
              { label: "Duration", value: "6 months" },
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
      <div className="relative w-full h-[250px] md:h-[400px]">
        <img
          src="/retreat-from-Russia.png"
          alt="The Grande Armee retreating from Moscow in winter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      {/* 2. WHY NAPOLEON INVADED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Why Napoleon Invaded
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The root cause of the Russian Campaign lay in the Continental System, Napoleon&rsquo;s
            attempt to strangle Britain by closing every European port to British trade. The
            strategy was economically brutal but demanded absolute enforcement: a single defecting
            power could unravel the blockade and allow British goods to flood the Continent. By
            1810, Tsar Alexander I had grown weary of the economic pain the System inflicted on
            Russia. Russian nobles were losing fortunes as British markets dried up and the rouble
            collapsed. In December 1810 Alexander opened Russian ports to neutral shipping, a
            transparent fiction that restored trade with Britain. To Napoleon it was an act of
            deliberate hostility.
          </p>
          <p>
            There were other irritants. Napoleon had annexed the Duchy of Oldenburg in northern
            Germany, whose duke was Alexander&rsquo;s uncle, without compensation. Russian
            ambitions in the Ottoman Empire chafed against French interests. The two emperors who
            had embraced at Tilsit in 1807 as the masters of Europe were now barely concealing
            their mutual contempt. Napoleon&rsquo;s calculation was simple in outline: a short,
            sharp campaign to inflict a decisive defeat near the border, force a treaty, and compel
            Russian compliance with the System. He had done it to Austria twice and to Prussia
            once. He expected to do it again.
          </p>
          <p>
            The fatal miscalculation was to assume that Russia would behave as a western European
            state. Russia had almost no major cities the loss of which would be strategically
            decisive, roads that turned to mud in rain and dust in dry weather, and a ruling class
            that could sustain military humiliation as long as the army survived. Napoleon&rsquo;s
            model of war, built on the swift annihilation of the enemy&rsquo;s field force
            followed by a peace conference, had no mechanism for dealing with an adversary willing
            to burn its own capital and keep retreating.
          </p>
        </div>
      </section>

      {/* 3. THE GRANDE ARMÉE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            The Grande Arm&eacute;e
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The army that crossed the Niemen river in June 1812 was the largest single military
              force ever assembled in European history to that point: approximately 685,000 men
              drawn from every corner of Napoleon&rsquo;s empire and its client states. Alongside
              French veterans marched Poles, Prussians, Austrians, Italians, Dutch, Swiss,
              Westphalians, Bavarians, Saxons, Spaniards and Croatians. It was an army that
              reflected the extraordinary reach of Napoleonic power at its zenith.
            </p>
            <p>
              The French core, organised in the numbered corps under marshals of proven ability,
              retained the qualities that had won Austerlitz and Jena: flexibility, speed of
              movement, and the esprit that came from years of shared victory. The Imperial Guard,
              Napoleon&rsquo;s elite reserve, contained some of the finest soldiers in the world.
              The cavalry, massed in greater numbers than on any previous campaign, was capable of
              sweeping reconnaissances and devastating pursuit.
            </p>
            <p>
              The vulnerabilities were equally significant, and most were visible before a single
              shot was fired. An army of 685,000 men and its animals consumed enormous quantities
              of food, fodder, and ammunition every single day. The supply trains assembled for
              the campaign were the largest in French experience but were still wholly inadequate
              for the distances involved. Russian roads were primitive and would destroy wheeled
              transport with brutal efficiency. The army&rsquo;s composition, drawing on
              conscripts and allied contingents whose loyalty was conditional, was a weakness that
              would deepen under stress. And the army had no established base in Russia: every
              mile east was another mile from France.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE ADVANCE */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Advance: Niemen to Smolensk
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            On 24 June 1812 the Grande Arm&eacute;e began crossing the Niemen river near Kaunas.
            Napoleon stood on the bank watching his columns stream across the pontoon bridges,
            and reportedly asked a Polish officer whether the river had ever been crossed. The
            symbolism was deliberate: here was the edge of the old world, and beyond lay conquest.
            What no one said was that Hannibal had also crossed his Rubicon.
          </p>
          <p>
            The Russian army, commanded by Barclay de Tolly and subsequently also by Bagration
            with his separate Second Army, declined to fight. The orders from St Petersburg were
            ambiguous but the strategic logic was clear enough: the Russian forces were too small
            individually to confront the Grande Arm&eacute;e and needed to concentrate first.
            French cavalry repeatedly lunged at the retreating columns only to find that the
            Russians had slipped away in the night. The pursuit was exhausting and demoralising.
          </p>
          <p>
            As the French advanced, the scale of the Russian strategy became apparent. Villages
            were abandoned, crops burned, fodder destroyed, wells poisoned. The army that had
            lived off the land in Italy, in Germany, and in Poland now found itself crossing a
            scorched landscape. The supply trains that had set out from Germany were already
            breaking down on the roads east of the Niemen. Horses were dying from lack of fodder.
            Men were dying from dysentery, typhus, and the sheer physical attrition of covering
            fifteen to twenty miles a day in summer heat without adequate food. The campaign was
            barely two weeks old and the army was already consuming itself.
          </p>
        </div>
      </section>

      {/* 5. SMOLENSK */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Smolensk: First Blood
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              By early August the two Russian armies had finally united near Smolensk. For a brief
              moment it appeared that Napoleon might achieve his decisive battle. The Russians
              briefly considered an offensive but hesitated, and Napoleon moved to cut their line
              of retreat. On 16 and 17 August French forces stormed the outer defences of Smolensk
              in furious fighting, breaking into the suburbs as the city burned around them.
            </p>
            <p>
              The engagement was inconclusive in the worst possible sense. The Russians suffered
              heavily but were not destroyed: Barclay de Tolly conducted a fighting withdrawal
              under the cover of darkness, preserving the army and leaving Napoleon in possession
              of a gutted city of no strategic value. The French paid thousands of casualties for
              a name on the map. The road to Moscow lay open but so did the terrible truth that
              the Russians simply refused to accept the kind of battle that would end the
              campaign. Napoleon pushed east.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BORODINO */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Borodino: The Bloodiest Day
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Barclay de Tolly&rsquo;s refusal to fight had made him politically untenable in
            Russia. Under enormous pressure from the Tsar and the nobility, he was replaced in
            August by Mikhail Kutuzov, the old one-eyed veteran of Austerlitz who was respected
            by the Russian people if not always by the Tsar. Kutuzov had no intention of fighting
            an open battle but he understood that he could not abandon Moscow without making some
            stand. He chose a position near the village of Borodino, on the old post road to
            Moscow, and ordered his army to entrench.
          </p>
          <p>
            On 7 September 1812 the two armies fought what remains one of the bloodiest single
            days in military history. Approximately 250,000 men were engaged and around 70,000
            became casualties before nightfall: roughly 35,000 on each side. The French assault,
            launched against the Russian fortifications, the Great Redoubt and the Bagration
            fl&ecirc;ches on the southern flank, was conducted with extraordinary courage by both
            sides. The fighting for the Great Redoubt alone cost thousands of lives.
          </p>
          <p>
            Napoleon&rsquo;s failure at Borodino was not tactical but strategic. At every crisis
            in the day his marshals &ndash; Ney, Murat, Davout &ndash; demanded that he commit
            the Imperial Guard to deliver the decisive blow. Each time Napoleon refused. He was
            unwell, uncertain, and unwilling to risk his last reserve so far from France. The
            Guard stood and watched as lesser regiments broke themselves against Russian cannon.
            When darkness fell the Russian army was battered but intact, and Kutuzov withdrew it
            eastward during the night. Napoleon had won the field but not the campaign.
          </p>
          <p>
            A dedicated Borodino page will be added to this archive in due course. Until then,
            see the{" "}
            <Link
              href="/battles"
              className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:text-gold hover:decoration-gold transition"
            >
              Battles index
            </Link>{" "}
            for related articles.
          </p>
        </div>
      </section>

      {/* 7. MOSCOW */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Moscow: A City on Fire
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              On 14 September 1812 the Grande Arm&eacute;e entered Moscow. Napoleon rode through
              streets that were almost entirely empty. The population had fled, the governor had
              ordered the city&rsquo;s magazines and warehouses set ablaze, and by nightfall the
              fires had spread beyond control. Much of the ancient city burned for several days.
              The army found shelter in what remained but the prize for which they had marched
              fifteen hundred miles was a shell, stinking of ash, stripped of the food and
              forage that might have sustained the men through a winter campaign.
            </p>
            <p>
              Napoleon waited. He sent three separate peace overtures to Alexander; all were
              ignored or went unanswered. The Tsar, influenced by his advisors and by a genuine
              patriotic fury at the invasion, refused to negotiate while a French soldier stood
              on Russian soil. Alexander had the luxury of waiting: every day the army sat in
              Moscow its horses consumed fodder that could not be replaced, its discipline
              eroded, and the Russian armies gathering to the south and east grew stronger.
            </p>
            <p>
              Napoleon waited thirty-five days in Moscow, from 14 September to 19 October. By the
              time he admitted that no peace was coming and gave the order to march, winter was
              already approaching. It was almost certainly too late.
            </p>
          </div>
        </div>
      </section>

      {/* 8. THE RETREAT */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Retreat: Road Without End
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Napoleon attempted to return via Kaluga and a different route than the one he had
            come, hoping to find untouched country. At Maloyaroslavets on 24 October the army
            fought a furious engagement against Kutuzov&rsquo;s force for control of the road
            south. The town changed hands several times and was eventually left a smoking ruin.
            Kutuzov did not pursue aggressively but positioned his army to block the southern
            route, and Napoleon, unwilling to risk another engagement with depleted forces, turned
            onto the Smolensk road: the same road they had already destroyed on the advance.
          </p>
          <p>
            From that moment the retreat became a catastrophe on a scale that European history
            had never seen. The autumn rains turned roads to mud, then in early November the
            temperature fell dramatically. Men who had already marched hundreds of miles in
            disintegrating boots now walked through snow without adequate clothing. Horses
            collapsed and died in their thousands. Wagons were abandoned. The wounded were left
            behind. Discipline collapsed in units that had not eaten for days.
          </p>
          <p>
            The Cossacks, fast, elusive, and merciless, harried the flanks and rear of the
            column constantly, cutting off stragglers, destroying detachments, and sowing terror
            in men too exhausted to fight effectively. The army moved in a long, straggling
            column of barely controlled misery, the Guard and the remaining organised units at
            its core, surrounded by tens of thousands of stragglers and civilian followers
            stumbling through the snow.
          </p>
          <p>
            The Beresina river crossing in late November 1812 was the nadir. Russian forces had
            seized the main crossing and threatened to destroy what remained of the army
            entirely. Napoleon&rsquo;s engineers, working in freezing water up to their shoulders,
            built two pontoon bridges under fire in a feat of extraordinary courage and technical
            skill. For three days the remnants of the Grande Arm&eacute;e crossed while French
            rearguards fought off Russian attacks on both banks. Thousands were killed in the
            fighting or drowned when bridges broke under the weight of fugitives. Thousands more
            were left on the eastern bank when the bridges were finally burned. Those who survived
            the Beresina still faced hundreds of miles through deepening winter to reach safety.
          </p>
        </div>
      </section>

      {/* 9. THE HUMAN COST */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            The Human Cost
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-3xl text-gold-pale mb-1">~685,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">
                Entered Russia
              </div>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-3xl text-gold-pale mb-1">&lt;100,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">
                Returned effective
              </div>
            </div>
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-3xl text-gold-pale mb-1">&gt;500,000</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">
                Dead, captured, missing
              </div>
            </div>
          </div>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The figures for the Russian Campaign are so extreme that they resist easy
              comprehension. Of the approximately 685,000 men who crossed the Niemen in June
              1812, fewer than 100,000 returned to French-held territory in any effective
              condition. The remainder were dead from battle, from cold, from starvation, from
              disease, or were in Russian captivity. The losses in horses and artillery were
              proportionally as catastrophic, stripping Napoleon of the cavalry and gun park
              that had been central to his method of war.
            </p>
            <p>
              These numbers include soldiers from every nation in Napoleon&rsquo;s empire.
              The Polish corps, fighting for a country that did not yet exist, suffered terribly.
              The Prussian and Austrian contingents, whose governments were already calculating
              how long the alliance with France could be sustained, watched the disaster with a
              mixture of horror and quiet calculation. The German states that had supplied men
              and matériel to the campaign would not forget what their contingents had suffered.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHY IT MATTERED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Why It Mattered
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Russian Campaign did not immediately end Napoleon&rsquo;s reign. He returned
            to Paris, suppressed a coup attempt by General Malet, and within months had
            assembled a new army from the conscript classes of 1813 and 1814. But it was never
            the same army. The veterans who had learned their trade in Italy, Egypt, and the
            great campaigns of 1805 &ndash; 1809 were gone, and their irreplaceable experience
            went with them. The new conscripts were brave enough but they could not yet match
            the hardened troops of Prussia and Russia in the mobile warfare that Napoleon&rsquo;s
            system demanded.
          </p>
          <p>
            More significantly, the news of the campaign&rsquo;s catastrophe destroyed the myth
            of French invincibility that had been the foundation of Napoleon&rsquo;s political
            control of Europe. Prussia broke its alliance with France in December 1812 and signed
            a convention with Russia at Tauroggen. By the spring of 1813 the Sixth Coalition was
            forming: Russia, Prussia, Austria, Britain, Sweden, and ultimately Spain united against
            France in a way they had never managed before. The 1813 campaign in Germany, the
            Battle of Leipzig and the final collapse in 1814, all flowed directly from the
            catastrophe of 1812. Without Russia, the empire might have endured for decades.
          </p>
          <p>
            The Russian Campaign also had a profound effect on the subsequent history of
            European nationalism. Polish soldiers had fought and died in the belief that
            Napoleon would restore their country; he had used them and could not deliver. The
            German states that had served France unwillingly now had a common narrative of
            sacrifice and humiliation around which a national consciousness could form. In
            Russia itself the campaign produced an outpouring of patriotic feeling that would
            shape Russian identity for generations. The war that was meant to consolidate
            Napoleon&rsquo;s empire instead began its dissolution.
          </p>
        </div>
      </section>

      {/* 11. CONTEMPORARY VOICES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Contemporary Voices
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Arm&eacute;d de Caulaincourt, Napoleon&rsquo;s Master of Horse and ambassador to
              Russia, accompanied the Emperor throughout the campaign and wrote one of its most
              important firsthand accounts. In his memoir, published posthumously, Caulaincourt
              described the mood at headquarters as the army entered Moscow to find it burning
              and empty. He recorded that Napoleon was visibly shaken by the sight, pacing
              the Kremlin and alternating between disbelief and fury at Alexander&rsquo;s
              refusal to negotiate. Caulaincourt had warned repeatedly, before the invasion,
              that Russia would not fight by the rules Napoleon expected. He understood the
              Russian character from his years in St Petersburg. Napoleon had listened and
              dismissed him.
            </p>
            <p>
              During the retreat Caulaincourt was one of the small group who rode with Napoleon
              in a sleigh from the army to Paris after the Emperor decided, in early December,
              that his presence was needed in France. He described the silence of the journey,
              the Emperor&rsquo;s grim acceptance, and Napoleon&rsquo;s own analysis of where
              the campaign had gone wrong. It is a document of unusual psychological depth,
              written by a man who was close enough to the Emperor to observe him honestly and
              honest enough to record what he saw without the flattery that mars so many
              Napoleonic memoirs.
            </p>
            <p>
              The soldier&rsquo;s experience was recorded in dozens of diaries and letters,
              many of which only surfaced decades after the campaign. Sergeant Bourgogne of
              the Imperial Guard, whose memoirs are among the most vivid accounts of the
              retreat, described men burning their shakos for warmth, sharing a single biscuit
              among six, and stepping over bodies that had frozen solid in the road. The
              literature of the Russian Campaign is vast and still growing as previously
              unknown documents emerge from French and Russian archives.
            </p>
          </div>
          <div className="mt-10 border border-gold/25 rounded-sm bg-navy-muted/30 p-6">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
              Source
            </div>
            <p className="font-serif italic text-parchment text-base leading-relaxed">
              Arm&eacute;d de Caulaincourt, <span className="not-italic">With Napoleon in Russia</span> (1935,
              drawn from his manuscript memoir completed c.1822). Caulaincourt served as Master
              of Horse and Grand Equerry to Napoleon throughout the campaign and was among the
              handful who accompanied the Emperor on the final sleigh journey to Paris.
            </p>
          </div>
        </div>
      </section>

      {/* 12. FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
          Further Reading
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link
            href="/battles"
            className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
          >
            &larr; All Battles
          </Link>
          <Link
            href="/people/napoleon"
            className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
          >
            Napoleon Bonaparte
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-base text-gold-pale uppercase tracking-wider mb-3">
              Primary Sources
            </h3>
            <ul className="font-serif text-parchment/95 space-y-2 text-sm leading-relaxed">
              <li>
                Caulaincourt, Arm&eacute;d de &ndash; <span className="italic">With Napoleon in Russia</span> (manuscript c.1822, published 1935)
              </li>
              <li>
                Bourgogne, Sergeant &ndash; <span className="italic">M&eacute;moires du Sergent Bourgogne</span> (1835)
              </li>
              <li>
                Ségur, Philippe-Paul de &ndash; <span className="italic">History of Napoleon and the Grand Army during the Year 1812</span> (1825)
              </li>
            </ul>
          </div>
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-base text-gold-pale uppercase tracking-wider mb-3">
              Modern Histories
            </h3>
            <ul className="font-serif text-parchment/95 space-y-2 text-sm leading-relaxed">
              <li>
                Zamoyski, Adam &ndash; <span className="italic">1812: Napoleon&rsquo;s Fatal March on Moscow</span> (2004)
              </li>
              <li>
                Lieven, Dominic &ndash; <span className="italic">Russia Against Napoleon</span> (2009)
              </li>
              <li>
                Chandler, David &ndash; <span className="italic">The Campaigns of Napoleon</span> (1966)
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/60 text-center">
          Book links, where present, may be affiliate links. As an Amazon Associate the
          Archive earns from qualifying purchases.
        </p>
      </section>
    </>
  );
}
