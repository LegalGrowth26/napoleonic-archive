import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleon Bonaparte Biography",
  description:
    "Napoleon Bonaparte (1769-1821): from Corsican cadet to Emperor of the French. Biography, campaigns, legacy, eyewitness accounts and his role in Bernard Cornwell's Sharpe novels.",
  path: "/people/napoleon",
  keywords: [
    "Napoleon Bonaparte",
    "Napoleon biography",
    "Napoleon Napoleonic Wars",
    "Emperor of the French",
    "Napoleon campaigns",
    "Waterloo Napoleon",
    "Austerlitz",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Napoleon Bonaparte",
  alternateName: "Napoléon Bonaparte",
  birthDate: "1769-08-15",
  deathDate: "1821-05-05",
  birthPlace: {
    "@type": "Place",
    name: "Ajaccio, Corsica",
  },
  deathPlace: {
    "@type": "Place",
    name: "Longwood, Saint Helena",
  },
  jobTitle: "Emperor of the French",
  description:
    "Corsican-born French military commander and Emperor who dominated European affairs from 1799 to 1815.",
  url: `${SITE.baseUrl}/people/napoleon`,
  sameAs: [
    "https://en.wikipedia.org/wiki/Napoleon",
  ],
  mainEntityOfPage: `${SITE.baseUrl}/people/napoleon`,
};

export default function NapoleonPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* ============================================================ */}
      {/* 1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,31,42,0.5),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/people" className="hover:text-gold transition">
              The Napoleonic Archive · People
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Napoleon Bonaparte
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1769 · 1821 · Emperor of the French
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>♛</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Born", value: "15 Aug 1769, Ajaccio" },
              { label: "Died", value: "5 May 1821, St Helena" },
              { label: "Reign", value: "1804 to 1814/15" },
              { label: "Battles fought", value: "~60" },
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

      {/* ============================================================ */}
      {/* 2. EARLY LIFE                                                */}
      {/* ============================================================ */}
      <section id="early-life" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Early Life
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Napoleone di Buonaparte was born on 15 August 1769 in Ajaccio,
            Corsica, barely a year after the island was ceded by Genoa to
            France. His father Carlo was a minor Corsican nobleman who secured
            a scholarship for his son at the Royal Military School at Brienne-
            le-Ch&acirc;teau on the French mainland. The boy arrived at ten,
            speaking heavily accented French; his classmates mocked his
            Corsican name and provincial manner.
          </p>
          <p>
            He was solitary, bookish and combative. He excelled at mathematics
            and devoured history, particularly the campaigns of Alexander and
            Caesar. At fifteen he transferred to the &Eacute;cole Militaire in
            Paris, where he was commissioned as a second lieutenant of
            artillery in 1785, at sixteen. He was the first Corsican to
            graduate from the school.
          </p>
          <p>
            The Revolution transformed his prospects. The old aristocratic
            officer corps emigrated or went to the guillotine, and the
            Republic needed men who could command. Bonaparte, a Jacobin
            sympathiser with technical skill and ferocious ambition, was
            perfectly placed. His outsider status, the very thing that had
            made him an object of contempt at Brienne, became an advantage: he
            owed nothing to the old order and everything to talent.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. THE RISE                                                  */}
      {/* ============================================================ */}
      <section
        id="the-rise"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            The Rise
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              In 1793 the young Captain Bonaparte distinguished himself at the
              siege of Toulon, where his placement of artillery forced the
              British fleet to withdraw. Promoted to brigadier-general at
              twenty-four, he survived the fall of Robespierre and the
              political turmoil that followed, and in 1795 he saved the
              Directory by turning his guns on a royalist mob in the streets
              of Paris (the famous &ldquo;whiff of grapeshot&rdquo;).
            </p>
            <p>
              The reward was command of the Army of Italy. In the campaigns of
              1796-97 he defeated the Austrians and Piedmontese in a string of
              battles that made his name across Europe:{" "}
              <Link
                href="/battles#battle-marengo"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Marengo
              </Link>
              , Lodi, Arcole, Rivoli. He returned to Paris a national hero.
              Egypt followed in 1798: a military adventure wrapped in
              scientific ambition, which ended in strategic failure but further
              burnished his legend.
            </p>
            <p>
              In November 1799, Bonaparte overthrew the Directory in the coup
              of 18 Brumaire and installed himself as First Consul. Within
              five years he had promulgated the Civil Code (the legal
              foundation of modern France and much of continental Europe),
              signed a Concordat with the Pope, reorganised French education,
              centralised the administration, and crowned himself Emperor of
              the French at Notre-Dame on 2 December 1804. He was thirty-five
              years old.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE CAMPAIGNS                                             */}
      {/* ============================================================ */}
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
              {
                date: "1796-97",
                name: "First Italian Campaign",
                outcome: "Victory",
                link: "/battles#battle-marengo",
                body: "General Bonaparte, aged twenty-six, took command of a starving, demoralised Army of Italy and in a year defeated the Austrians and Piedmontese in a sequence of battles: Montenotte, Lodi, Arcole, Rivoli. He dictated terms to Austria and returned to Paris a national hero.",
              },
              {
                date: "1798-99",
                name: "Egyptian Campaign",
                outcome: "Strategic failure",
                body: "Bonaparte invaded Egypt with 40,000 men, defeated the Mamluks at the Battle of the Pyramids, and brought a corps of scientists who produced the Description de l'Egypte. But Nelson destroyed his fleet at the Nile, stranding the army. Bonaparte abandoned his troops and sailed home to seize power in France.",
              },
              {
                date: "1800",
                name: "Marengo",
                outcome: "Narrow French victory",
                link: "/battles#battle-marengo",
                body: "Now First Consul, Bonaparte crossed the Alps and fought the Austrians at Marengo in northern Italy. The battle was nearly lost until Desaix's division arrived in the afternoon and Kellermann's cavalry charge shattered the Austrian line. Desaix was killed; the victory secured Bonaparte's political position.",
              },
              {
                date: "1805",
                name: "Austerlitz",
                outcome: "Crushing victory",
                link: "/battles#battle-austerlitz",
                body: "The Battle of the Three Emperors. Napoleon drew the Allies off the Pratzen Heights, then seized the ground with Soult's corps and destroyed the Russo-Austrian army. It was his most complete tactical triumph and forced Austria out of the Third Coalition.",
              },
              {
                date: "1806",
                name: "Jena-Auerstedt",
                outcome: "Decisive victory",
                link: "/battles#battle-jena-auerstedt",
                body: "Two battles fought on the same day destroyed the Prussian army. Davout's single corps broke the main Prussian force at Auerstedt while Napoleon smashed the secondary army at Jena. Prussia collapsed in a fortnight; Napoleon entered Berlin.",
              },
              {
                date: "1807",
                name: "Friedland",
                outcome: "French victory",
                body: "Napoleon defeated the Russians at Friedland in East Prussia, ending the War of the Fourth Coalition. The resulting Treaty of Tilsit, signed on a raft in the River Niemen, divided Europe between Napoleon and Tsar Alexander. It was the high-water mark of the Empire.",
              },
              {
                date: "1808-14",
                name: "Peninsular War",
                outcome: "Catastrophic failure",
                link: "/battles",
                body: "Napoleon invaded Spain to enforce the Continental System and placed his brother Joseph on the throne. The resulting guerrilla war and British intervention under Wellington bled France of 300,000 casualties over six years. Napoleon himself fought in Spain only briefly in late 1808 and never returned.",
              },
              {
                date: "1812",
                name: "Russian Campaign",
                outcome: "Catastrophe",
                body: "Napoleon invaded Russia with over 600,000 men, the largest army Europe had seen. He fought a costly battle at Borodino, entered Moscow to find it burning, and was forced into a winter retreat that destroyed the Grande Armée. Fewer than 100,000 men returned. It was the beginning of the end.",
              },
              {
                date: "1813",
                name: "Leipzig",
                outcome: "Decisive defeat",
                link: "/battles#battle-leipzig",
                body: "The Battle of the Nations. Half a million men fought over four days around the Saxon city. Napoleon was outnumbered and outflanked by the combined armies of Russia, Prussia, Austria and Sweden. The Confederation of the Rhine collapsed; Napoleon fell back to France with a shattered army.",
              },
              {
                date: "1814",
                name: "Abdication and Elba",
                outcome: "Exile",
                body: "After a brilliant but doomed defensive campaign in France, Napoleon's marshals refused to continue. He abdicated on 6 April 1814, was granted sovereignty of the island of Elba, and watched the Bourbons return to Paris. He would remain on Elba for less than a year.",
              },
              {
                date: "1815",
                name: "The Hundred Days and Waterloo",
                outcome: "Final defeat",
                link: "/battles/waterloo",
                body: "Napoleon escaped from Elba, marched on Paris, and rebuilt an army in a hundred days. He defeated the Prussians at Ligny but was destroyed at Waterloo by Wellington and Blücher on 18 June 1815. He abdicated again four days later and surrendered to the British. He would never return to France.",
              },
            ].map((c) => (
              <li key={c.date} className="relative pl-20 md:pl-28">
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 md:w-24 h-8 rounded-sm bg-burgundy border border-gold/60 text-gold-pale font-display text-sm tracking-wider">
                  {c.date}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                    {c.link ? (
                      <Link href={c.link} className="hover:text-gold transition">
                        {c.name}
                      </Link>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <span
                    className={`text-xs uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border ${
                      c.outcome.includes("ictory")
                        ? "border-gold/50 text-gold-pale"
                        : c.outcome.includes("failure") || c.outcome.includes("atastrophe") || c.outcome.includes("defeat")
                        ? "border-burgundy-bright/50 text-burgundy-bright"
                        : "border-gold/30 text-parchment/85"
                    }`}
                  >
                    {c.outcome}
                  </span>
                </div>
                <p className="text-parchment leading-relaxed font-serif">
                  {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. THE GENERAL                                               */}
      {/* ============================================================ */}
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
              Napoleon&rsquo;s military system rested on speed, concentration
              and aggression. He organised his army into self-contained corps,
              each with its own infantry, cavalry and artillery, capable of
              marching independently and fighting alone until reinforced. This
              allowed him to advance on a broad front, screening his
              intentions, and then concentrate overwhelming force at the
              decisive point faster than his opponents could react. The
              strategy of the central position, his signature approach, meant
              placing his army between two enemy forces and defeating each in
              turn before they could unite.
            </p>
            <p>
              He was a superb reader of terrain, choosing ground that
              multiplied his advantages: the Pratzen Heights at Austerlitz,
              the crossing at Arcole, the reverse slopes he used at Rivoli.
              His artillery background gave him an instinctive understanding
              of firepower and its concentration. He drove his men hard on the
              march but rewarded them with victory, promotion and plunder. His
              personal energy was extraordinary: he could work eighteen hours a
              day, dictate orders to multiple secretaries simultaneously, and
              retain the details of every regiment&rsquo;s strength and
              position.
            </p>
            <p>
              The counterarguments are substantial. After about 1807, some
              historians argue, his generalship became more rigid: he relied
              increasingly on frontal assault rather than manoeuvre, and his
              battles grew costlier. He struggled to delegate effectively,
              appointing marshals who excelled as corps commanders but faltered
              when given independent authority (Ney at Quatre Bras, Grouchy
              after Ligny). His strategic overreach in Spain and Russia, where
              he committed armies to campaigns he could not supervise in
              person, was catastrophic. Whether this represents a decline in
              ability or simply the impossibility of controlling an empire that
              stretched from Lisbon to Moscow remains debated by military
              historians. What is not disputed is that at his best, between
              1796 and 1809, he was the most formidable battlefield commander
              in European history.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. THE EMPEROR                                               */}
      {/* ============================================================ */}
      <section id="the-emperor" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Emperor
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Civil Code of 1804 remains Napoleon&rsquo;s most durable
            achievement. It replaced the patchwork of feudal, Roman and
            customary law across France with a single, rational legal system
            guaranteeing equality before the law, property rights and secular
            authority over marriage and civil status. Versions of the Code
            still form the basis of law in France, Belgium, the Netherlands,
            Italy and much of Latin America.
          </p>
          <p>
            He signed a Concordat with Pope Pius VII in 1801, restoring
            Catholicism as the majority religion of France while keeping the
            Church subordinate to the state. He reorganised French education
            around the lyc&eacute;e system and the grandes &eacute;coles. He
            created the Legion of Honour, the Bank of France and a
            centralised prefectoral administration. He placed his brothers on
            the thrones of Spain, Holland, Naples and Westphalia, building a
            dynasty that lasted only as long as his armies could sustain it.
            The Continental System, his attempt to strangle British trade by
            closing European ports, damaged France&rsquo;s own economy and
            drove him into the disastrous wars in Spain and Russia.
          </p>
          <p>
            His relationship with Josephine, his first wife, was passionate
            and turbulent. He divorced her in 1809 because she could not
            produce an heir, and married the Austrian Archduchess Marie
            Louise, who bore him a son. His marshals served him with varying
            degrees of loyalty and ability; he rewarded them with titles,
            estates and wealth, but never fully trusted any of them.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. THE PENINSULAR WAR, HIS GREATEST MISTAKE                */}
      {/* ============================================================ */}
      <section
        id="peninsular"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            The Peninsular War: His Greatest Mistake
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              In 1808 Napoleon deposed the Spanish Bourbons and placed his
              brother Joseph on the throne of Spain. He expected a swift
              political settlement. Instead he provoked a national uprising,
              a six-year guerrilla war that tied down over 300,000 French
              troops, and gave Britain, under Wellington, a continental
              foothold from which to bleed France year after year.
            </p>
            <p>
              Napoleon fought in Spain only once, in the winter campaign of
              1808, when he smashed the Spanish regular armies and chased the
              British to Corunna. He then left for Austria and never returned.
              He left the war to his marshals, who quarrelled among themselves
              and could not suppress the guerrillas or defeat Wellington. The
              result was a slow, grinding attrition that drained French
              manpower and morale. Napoleon later called it his &ldquo;Spanish
              ulcer.&rdquo;
            </p>
            <p>
              This is Bernard Cornwell&rsquo;s war. The{" "}
              <Link
                href="/fiction"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Sharpe novels
              </Link>{" "}
              follow a fictional rifleman through the Peninsular campaigns
              from 1809 to 1814, fighting alongside Wellington&rsquo;s real
              army at{" "}
              <Link
                href="/battles#battle-talavera"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Talavera
              </Link>
              ,{" "}
              <Link
                href="/battles#battle-badajoz"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Badajoz
              </Link>
              ,{" "}
              <Link
                href="/battles#battle-salamanca"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Salamanca
              </Link>{" "}
              and{" "}
              <Link
                href="/battles#battle-vitoria"
                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
              >
                Vitoria
              </Link>
              . Napoleon is the shadow over every page: the absent Emperor
              whose strategic error created the war Sharpe fights.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. THE FALL                                                  */}
      {/* ============================================================ */}
      <section id="the-fall" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Fall
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Russian campaign of 1812 destroyed the Grande Arm&eacute;e.
            Napoleon entered{" "}
            <Link
              href="/battles#battle-borodino"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Moscow after Borodino
            </Link>{" "}
            and found it burning. The retreat through the Russian winter
            killed hundreds of thousands through cold, starvation and
            Cossack pursuit. At{" "}
            <Link
              href="/battles#battle-leipzig"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Leipzig in 1813
            </Link>{" "}
            a coalition of all the European powers overwhelmed him. He
            abdicated in April 1814 and was exiled to the island of Elba.
          </p>
          <p>
            He escaped in March 1815, marched on Paris, and rebuilt an army
            in a hundred days. He defeated the Prussians at Ligny but was
            destroyed at{" "}
            <Link
              href="/battles/waterloo"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Waterloo
            </Link>{" "}
            on 18 June 1815 by the combined forces of Wellington and
            Bl&uuml;cher. He surrendered to the British and was exiled to
            Saint Helena in the South Atlantic, where he spent his last six
            years dictating his memoirs to the Comte de Las Cases.
          </p>
          <p>
            The resulting M&eacute;morial de Sainte-H&eacute;l&egrave;ne,
            published in 1823, was Napoleon&rsquo;s final campaign: the
            construction of his own legend. In it he presented himself as the
            champion of the Revolution, the liberator of Europe, the man
            betrayed by his marshals and defeated only by the Russian winter
            and British gold. The Memorial sold enormously and shaped the
            Napoleonic myth for the rest of the nineteenth century. He died
            on 5 May 1821, aged fifty-one.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. LEGACY                                                    */}
      {/* ============================================================ */}
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
              The Napoleonic Code remains the foundation of civil law in
              France, Belgium, the Netherlands, Italy, much of Latin America,
              and parts of the Middle East and Asia. His reorganisation of the
              French state, from the prefectoral system to the lyc&eacute;es,
              endures largely intact. The corps system he perfected shaped
              military organisation for the rest of the nineteenth century and
              beyond.
            </p>
            <p>
              He still divides opinion. To his admirers he was the son of the
              Revolution who carried its principles across Europe, abolishing
              feudalism and the Inquisition wherever his armies marched. To
              his critics he was a military dictator who plunged the continent
              into twenty years of war, re-established slavery in the French
              Caribbean in 1802, and governed by conscription, censorship and
              police surveillance. The truth, as most modern historians
              acknowledge, contains both. The Napoleonic myth endures because
              it answers a persistent human fascination with the idea of one
              extraordinary individual reshaping the world by force of will.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. IN SHARPE'S WORLD                                        */}
      {/* ============================================================ */}
      <section id="in-sharpe" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-8">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            In Sharpe&rsquo;s World
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
            Fiction · Bernard Cornwell
          </p>
        </div>
        <div className="card p-8 rounded-sm">
          <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
            Napoleon is the shadow over every{" "}
            <Link
              href="/fiction"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Sharpe novel
            </Link>
            , but he is rarely seen directly. Sharpe fights against
            Napoleon&rsquo;s armies for fourteen books without ever meeting the
            Emperor. He glimpses Napoleon at a distance during{" "}
            <Link
              href="/battles/waterloo"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Waterloo
            </Link>
            , and encounters him briefly on St Helena in the final novel,
            Sharpe&rsquo;s Devil. Cornwell portrays Napoleon as a genius whose
            hubris destroyed his own creation: brilliant at war, catastrophic
            in judgement, and always, to the riflemen who fought him, the
            distant cause of everything.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. CONTEMPORARY VOICES                                      */}
      {/* ============================================================ */}
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
            {/* Las Cases */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Napoleon to the Prince Regent
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  Recorded by Las Cases, M&eacute;morial de Sainte-H&eacute;l&egrave;ne (1823)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                I come, like Themistocles, to seek the hospitality of the
                British nation. I place myself under the protection of their
                laws, which I claim from your Royal Highness, as the most
                powerful, the most constant, and the most generous, of my
                enemies.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                  Source
                </span>
                <span className="font-serif">
                  M&eacute;morial de Sainte-H&eacute;l&egrave;ne by Emmanuel de Las Cases, 1823.
                  Napoleon&rsquo;s letter of surrender to the Prince Regent, July 1815.
                  Public domain.
                </span>
              </p>
            </article>

            <div className="gold-divider" />

            {/* Caulaincourt */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Napoleon before the Russian Campaign
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  Armand de Caulaincourt, With Napoleon in Russia (memoir written 1812-13, published 1933)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                If the fighting went against me, I should retire to
                Kamtchatka rather than cede provinces.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                  Source
                </span>
                <span className="font-serif">
                  With Napoleon in Russia: The Memoirs of General de Caulaincourt,
                  Duke of Vicenza. Public domain.
                </span>
              </p>
            </article>

            <div className="gold-divider" />

            {/* Madame de R&eacute;musat */}
            <article className="relative">
              <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
              <header className="mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  Napoleon&rsquo;s Working Habits
                </h3>
                <div className="text-sm italic text-burgundy-bright">
                  Madame de R&eacute;musat, M&eacute;moires (1880)
                </div>
              </header>
              <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
                Bonaparte dictated with great ease. He never wrote anything
                with his own hand. He spoke to the subalterns in a tone of
                good-fellowship, which delighted them all.
              </blockquote>
              <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
                <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                  Source
                </span>
                <span className="font-serif">
                  M&eacute;moires de Madame de R&eacute;musat, 1880.
                  Available via Fordham University Modern History Sourcebook.
                  Public domain.
                </span>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FURTHER READING                                          */}
      {/* ============================================================ */}
      <section id="reading" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
          Further Reading
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              The Campaigns of Napoleon
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              David G. Chandler, 1966
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              The single-volume standard in English on Napoleon as a soldier.
              Every campaign, every battle, every gambit, in one monumental
              study.
            </p>
            <a
              href="https://amzn.to/4vyf2QD"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
            >
              Buy on Amazon &rarr;
            </a>
          </div>

          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
              Wellington: A Personal History
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              Christopher Hibbert, 1997
            </div>
            <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
              The biography of the man who beat Napoleon. Essential
              counterpoint to any study of the Emperor.
            </p>
            <a
              href="https://amzn.to/4vyaCsL"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
            >
              Buy on Amazon &rarr;
            </a>
          </div>
        </div>

        <div className="text-center space-y-3">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/resources"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Browse all resources &rarr;
            </Link>
            <Link
              href="/battles/waterloo"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Battle of Waterloo
            </Link>
            <Link
              href="/people"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
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
