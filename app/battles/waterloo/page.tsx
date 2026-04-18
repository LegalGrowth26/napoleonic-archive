import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE, slugify } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Waterloo 1815",
  description:
    "The Battle of Waterloo, 18 June 1815: hour-by-hour narrative, armies, casualties, key ground, commanders, regiments, eyewitness accounts and visiting the battlefield today.",
  path: "/battles/waterloo",
  keywords: [
    "Battle of Waterloo",
    "Waterloo 1815",
    "Sharpe's Waterloo",
    "Napoleon Waterloo",
    "Wellington Waterloo",
    "Mont-Saint-Jean",
    "Peninsular War",
    "Napoleonic Wars",
  ],
  type: "article",
});

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const armies = [
  {
    name: "Anglo-Allied Army",
    commander: "Duke of Wellington",
    personSlug: "arthur-wellesley-duke-of-wellington",
    strength: "68,000 men",
    guns: "156 guns",
    outcome: "Victory",
    colour: "text-gold-pale",
  },
  {
    name: "French Army",
    commander: "Emperor Napoleon",
    personSlug: "napoleon-bonaparte",
    strength: "72,000 men",
    guns: "246 guns",
    outcome: "Defeat",
    colour: "text-burgundy-bright",
  },
  {
    name: "Prussian Army",
    commander: "Field Marshal Blücher",
    personSlug: "gebhard-leberecht-von-blucher",
    strength: "50,000 engaged",
    guns: "104 guns",
    outcome: "Victory",
    colour: "text-gold-pale",
  },
] as const;

const casualties = [
  { label: "Anglo-Allied", value: "~17,000", pct: 34 },
  { label: "French", value: "~25,000 killed/wounded + 8,000 captured", pct: 67 },
  { label: "Prussian", value: "~7,000", pct: 14 },
] as const;

const timeline = [
  {
    time: "11:30",
    title: "The attack on Hougoumont",
    body: "Prince Jérôme Bonaparte's division assaulted the walled chateau and farm complex on Wellington's right flank. What Napoleon intended as a diversion drew in ever more French troops throughout the day, while the British and Nassauer defenders held the buildings and the orchard against repeated infantry attacks.",
  },
  {
    time: "13:00",
    title: "D'Erlon's I Corps attacks the Allied centre",
    body: "Four divisions of the Comte d'Erlon's I Corps, approximately 16,000 men, advanced in dense columns against the Allied line east of the Brussels road. They overran La Haye Sainte's garden and reached the crest of the ridge before being thrown back by Picton's division and the charge of the Household and Union cavalry brigades.",
  },
  {
    time: "14:30",
    title: "Picton killed leading the counter-charge",
    body: "Lieutenant-General Sir Thomas Picton, commanding the 5th Division, was shot through the head while leading his brigade forward to meet d'Erlon's columns. He was the most senior Allied officer killed in the battle; he had fought in civilian clothes, his uniform having been lost in transit.",
  },
  {
    time: "15:30",
    title: "Ney launches the great cavalry charges",
    body: "Marshal Ney, possibly misreading a realignment of Allied units as a withdrawal, launched wave after wave of unsupported heavy cavalry against Wellington's infantry squares on the right-centre of the ridge. Without infantry or horse artillery support the cuirassiers and lancers could not break the squares, and over two hours were repulsed with devastating losses.",
  },
  {
    time: "18:00",
    title: "La Haye Sainte falls",
    body: "The King's German Legion garrison under Major Baring, having exhausted their rifle ammunition, was overwhelmed by French infantry. The fall of this central position opened a gap in Wellington's line and allowed French skirmishers to fire directly into the Allied squares at close range, causing severe casualties.",
  },
  {
    time: "19:00",
    title: "The Prussians strike Plancenoit",
    body: "Blücher's leading corps under Bülow attacked the village of Plancenoit on Napoleon's right rear, threatening the French line of retreat along the Brussels road. Napoleon was forced to divert the Young Guard and eventually two battalions of the Old Guard to hold the village, weakening his reserves at the critical moment.",
  },
  {
    time: "19:30",
    title: "The Imperial Guard advances",
    body: "Napoleon committed his last reserve. Five battalions of the Middle and Old Guard advanced up the slope of Mont-Saint-Jean in echelon towards the Allied line. They were met by devastating musket volleys from Maitland's Guards brigade, who had been lying down behind the crest, and were then struck in the flank by the 52nd Light Infantry under Colonel Colborne.",
  },
  {
    time: "20:00",
    title: "La Garde recule. The Empire is finished.",
    body: "The Imperial Guard broke and retreated, the first time the Old Guard had ever been seen to give ground in battle. The cry 'La Garde recule!' spread through the French army. Wellington, standing in his stirrups, waved his hat forward and ordered a general advance. The French army disintegrated into a rout pursued by Prussian cavalry into the night.",
  },
] as const;

const keyGround = [
  {
    name: "Hougoumont",
    body: "The walled chateau, farm and orchard on the Allied right. Defended throughout the day by the Coldstream and Third Guards, Nassauers and Hanoverians, against repeated French infantry and artillery assault. Its defence pinned down a disproportionate number of French troops. Wellington later said that the outcome of the battle turned upon the closing of the gates of Hougoumont.",
  },
  {
    name: "La Haye Sainte",
    body: "The farmhouse astride the Brussels road in the centre of Wellington's line. Garrisoned by the 2nd Light Battalion of the King's German Legion armed with Baker rifles, it held out for most of the day until its ammunition was exhausted around 18:00. Its fall was the crisis of the battle, opening a gap through which French skirmishers poured fire into the Allied line.",
  },
  {
    name: "Papelotte",
    body: "The hamlet and farm complex on the Allied far left, held by Nassauer troops under Prince Bernhard of Saxe-Weimar. It formed the hinge between Wellington's line and the arriving Prussian forces. Fighting here was fierce but secondary to the main action; its importance lay in anchoring the junction between the two Allied armies.",
  },
  {
    name: "The Ridge of Mont-Saint-Jean",
    body: "Wellington's chosen defensive position: a low east-west ridge bisected by the Brussels road. His infantry were deployed on the reverse slope, sheltered from direct French artillery fire. They rose to deliver volleys only when the French crested the ridge, then retired behind the crest again. This use of ground was Wellington's signature tactic from the Peninsula, and it blunted Napoleon's artillery advantage throughout the day.",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Waterloo, 18 June 1815",
  name: "Battle of Waterloo",
  description:
    "A comprehensive account of the Battle of Waterloo: the armies, the casualties, an hour-by-hour narrative, the key ground, the commanders, the regiments, eyewitness voices, Sharpe's Waterloo, and visiting the battlefield today.",
  datePublished: "1815-06-18",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/battles/waterloo`,
  url: `${SITE.baseUrl}/battles/waterloo`,
  inLanguage: "en-GB",
  keywords:
    "Battle of Waterloo, Waterloo 1815, Napoleon, Wellington, Sharpe's Waterloo, Napoleonic Wars",
  about: {
    "@type": "Event",
    name: "Battle of Waterloo",
    startDate: "1815-06-18",
    endDate: "1815-06-18",
    location: {
      "@type": "Place",
      name: "Mont-Saint-Jean, near Waterloo, Belgium",
    },
  },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function WaterlooPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* ============================================================ */}
      {/* 1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,31,42,0.5),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            The Napoleonic Archive
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Battle of Waterloo
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            18 June 1815 · Mont-Saint-Jean, Belgium
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>⚔</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "18 June 1815" },
              { label: "Location", value: "Brabant, Belgium" },
              { label: "Duration", value: "~9 hours" },
              { label: "Result", value: "Allied victory" },
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
      {/* 2. THE ARMIES                                                */}
      {/* ============================================================ */}
      <section id="armies" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12 section-title mx-auto inline-block">
          The Armies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {armies.map((a) => (
            <div key={a.name} className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
                {a.name}
              </h3>
              <Link
                href={`/people#person-${a.personSlug}`}
                className="text-sm italic text-burgundy-bright hover:text-gold transition"
              >
                {a.commander}
              </Link>
              <div className="gold-divider !my-4" />
              <div className="space-y-2 text-parchment font-serif">
                <div className="text-2xl font-display text-gold-pale">
                  {a.strength}
                </div>
                <div className="text-sm text-parchment/95">{a.guns}</div>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 border rounded-sm text-xs uppercase tracking-[0.25em] font-display ${
                    a.outcome === "Victory"
                      ? "border-gold/50 text-gold-pale"
                      : "border-burgundy-bright/50 text-burgundy-bright"
                  }`}
                >
                  {a.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CASUALTIES                                                */}
      {/* ============================================================ */}
      <section
        id="casualties"
        className="border-y border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/15 to-navy-deep"
      >
        <div className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
            Casualties
          </h2>

          <div className="space-y-6 mb-10">
            {casualties.map((c) => (
              <div key={c.label}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-sm uppercase tracking-widest text-gold-pale">
                    {c.label}
                  </span>
                  <span className="text-sm text-parchment font-serif">
                    {c.value}
                  </span>
                </div>
                <div className="h-3 bg-navy-muted rounded-sm overflow-hidden border border-gold/15">
                  <div
                    className="h-full bg-gradient-to-r from-burgundy to-burgundy-bright rounded-sm transition-all duration-700"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 text-center mb-8">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5">
              <div className="font-display text-3xl text-gold-pale mb-1">
                ~190,000
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">
                Total engaged
              </div>
            </div>
            <div className="border border-burgundy-bright/40 rounded-sm bg-burgundy-deep/20 p-5">
              <div className="font-display text-3xl text-gold-pale mb-1">
                ~49,000
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70">
                Total casualties
              </div>
            </div>
          </div>

          <p className="text-center text-xs uppercase tracking-widest text-parchment/85">
            All casualty figures are approximate and vary between historical
            sources.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. THE NARRATIVE                                             */}
      {/* ============================================================ */}
      <section id="narrative" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="ornament text-gold/70 mb-4">
            <span>✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Day, Hour by Hour
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />

          <ol className="space-y-10">
            {timeline.map((t) => (
              <li key={t.time} className="relative pl-20 md:pl-28">
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 md:w-24 h-8 rounded-sm bg-burgundy border border-gold/60 text-gold-pale font-display text-sm tracking-wider">
                  {t.time}
                </div>
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
                  {t.title}
                </h3>
                <p className="text-parchment leading-relaxed font-serif">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. THE KEY GROUND                                            */}
      {/* ============================================================ */}
      <section
        id="ground"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-navy to-navy-deep"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
            The Key Ground
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {keyGround.map((g) => (
              <article key={g.name} className="card p-7 rounded-sm">
                <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-4">
                  {g.name}
                </h3>
                <p className="text-parchment leading-relaxed font-serif">
                  {g.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. THE COMMANDERS                                            */}
      {/* ============================================================ */}
      <section id="commanders" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
          The Commanders
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Arthur Wellesley, Duke of Wellington",
              role: "Commander-in-Chief, Anglo-Allied Army",
              slug: "arthur-wellesley-duke-of-wellington",
              body: "Directed the battle from the ridge of Mont-Saint-Jean, repeatedly riding forward to the most threatened points under heavy fire. He later described Waterloo as the nearest-run thing you ever saw in your life. He survived the battle unscathed.",
            },
            {
              name: "Napoleon Bonaparte",
              role: "Emperor of the French",
              slug: "napoleon-bonaparte",
              body: "Commanded the French army from the inn of La Belle Alliance, south of the battlefield. He committed the Imperial Guard too late and with too little support. After the rout he fled to Paris and abdicated four days later; he died in exile on St Helena in 1821.",
            },
            {
              name: "Michel Ney",
              role: "Marshal of the Empire",
              slug: "michel-ney",
              body: "Led the great cavalry charges against Wellington's squares and personally directed the Imperial Guard's final advance. He had five horses shot under him during the day. He was tried and executed by the restored Bourbon government in December 1815.",
            },
            {
              name: "Gebhard Leberecht von Blücher",
              role: "Field Marshal, Prussian Army",
              slug: "gebhard-leberecht-von-blucher",
              body: "Seventy-two years old and only two days recovered from being ridden over at the Battle of Ligny, he marched his army to Wellington's aid and struck Napoleon's right flank at Plancenoit in the late afternoon. His arrival decided the battle.",
            },
            {
              name: "Thomas Picton",
              role: "Lieutenant-General, 5th Division",
              slug: "thomas-picton",
              body: "The most senior Allied officer killed at Waterloo. He was shot through the head while leading Kempt's brigade in a counter-charge against d'Erlon's corps at approximately 14:30. He had fought the day concealing a wound received at Quatre Bras two days earlier.",
              killed: true,
            },
            {
              name: "Pierre Cambronne",
              role: "General, Old Guard",
              slug: "pierre-cambronne",
              body: "Commanded a battalion of the Old Guard in the final stand. Tradition attributes to him the defiant reply when summoned to surrender; the exact words are disputed by historians. He was wounded and captured on the field.",
            },
          ].map((c) => (
            <article key={c.name} className="card p-6 rounded-sm">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider">
                  <Link
                    href={`/people#person-${c.slug}`}
                    className="hover:text-gold transition"
                  >
                    {c.name}
                  </Link>
                </h3>
                {"killed" in c && c.killed && (
                  <span className="text-[10px] uppercase tracking-widest text-burgundy-bright border border-burgundy-bright/50 px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                    Killed
                  </span>
                )}
              </div>
              <div className="text-xs uppercase tracking-widest text-parchment/85 mb-4">
                {c.role}
              </div>
              <p className="text-parchment leading-relaxed font-serif text-sm">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. REGIMENTS AT WATERLOO                                     */}
      {/* ============================================================ */}
      <section
        id="regiments"
        className="border-y border-gold/20 bg-gradient-to-b from-navy-deep via-navy to-navy-deep"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
            Regiments at Waterloo
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* British & Allied */}
            <div>
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-6 section-title">
                British &amp; Allied
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "95th (Rifle) Regiment of Foot", slug: "95th-rifle-regiment-of-foot", note: "Skirmished ahead of the main line throughout the day" },
                  { name: "1st Regiment of Foot Guards", slug: "1st-regiment-of-foot-guards", note: "Received the Imperial Guard's final charge at the crest" },
                  { name: "52nd (Oxfordshire) Light Infantry", slug: null, note: "Flanked the Imperial Guard under Colonel Colborne" },
                  { name: "King's German Legion", slug: "kings-german-legion", note: "Defended La Haye Sainte until ammunition ran out" },
                  { name: "42nd (Royal Highland) Regiment (Black Watch)", slug: "42nd-royal-highland-regiment-of-foot", note: "Held squares against cavalry on the right-centre" },
                  { name: "Royal Horse Guards (The Blues)", slug: "royal-horse-guards", note: "Charged with the Household Brigade against d'Erlon" },
                ].map((r) => (
                  <li
                    key={r.name}
                    className="border border-gold/20 rounded-sm p-4 bg-navy-muted/30"
                  >
                    <div className="font-display text-gold-pale uppercase tracking-wider text-sm mb-1">
                      {r.slug ? (
                        <Link
                          href={`/regiments#regiment-${r.slug}`}
                          className="hover:text-gold transition"
                        >
                          {r.name}
                        </Link>
                      ) : (
                        r.name
                      )}
                    </div>
                    <p className="text-xs text-parchment/95 font-serif">
                      {r.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* French */}
            <div>
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-6 section-title">
                French
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Garde Impériale, Vieille Garde", slug: "garde-imperiale-vieille-garde", note: "Advanced up the ridge at 19:30 and were repulsed for the first time in their history" },
                  { name: "The Cuirassiers", slug: "the-cuirassiers", note: "Led Ney's great cavalry charges against Wellington's squares" },
                ].map((r) => (
                  <li
                    key={r.name}
                    className="border border-gold/20 rounded-sm p-4 bg-navy-muted/30"
                  >
                    <div className="font-display text-gold-pale uppercase tracking-wider text-sm mb-1">
                      {r.slug ? (
                        <Link
                          href={`/regiments#regiment-${r.slug}`}
                          className="hover:text-gold transition"
                        >
                          {r.name}
                        </Link>
                      ) : (
                        r.name
                      )}
                    </div>
                    <p className="text-xs text-parchment/95 font-serif">
                      {r.note}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border border-gold/20 rounded-sm p-4 bg-navy-muted/30">
                <h3 className="font-display text-gold-pale uppercase tracking-wider text-sm mb-1">
                  Prussian Army
                </h3>
                <p className="text-xs text-parchment/95 font-serif">
                  Blücher's IV Corps under Bülow struck Plancenoit on
                  Napoleon's right flank from late afternoon; I and II Corps
                  arrived progressively through the evening, completing the
                  pursuit after the French rout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. VOICES FROM THE BATTLE                                    */}
      {/* ============================================================ */}
      <section id="voices" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="ornament text-gold/70 mb-4">
            <span>✒</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Voices from the Battle
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
            Genuine verbatim extracts from published public-domain memoirs
          </p>
        </div>

        <div className="space-y-10">
          {/* Kincaid */}
          <article className="relative">
            <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
            <header className="mb-3">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Captain John Kincaid, 95th Rifles
              </h3>
              <div className="text-sm italic text-burgundy-bright">
                Adventures in the Rifle Brigade (1830)
              </div>
            </header>
            <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
              I had never yet heard of a battle in which everybody was killed;
              but this seemed likely to be an exception, as all were going by
              turns.
            </blockquote>
            <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
              <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                Source
              </span>
              <span className="font-serif">
                Adventures in the Rifle Brigade by Captain John Kincaid, 1830.
                Public domain.
              </span>
            </p>
          </article>

          <div className="gold-divider" />

          {/* Mercer */}
          <article className="relative">
            <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
            <header className="mb-3">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Captain Cavalié Mercer, Royal Horse Artillery
              </h3>
              <div className="text-sm italic text-burgundy-bright">
                Journal of the Waterloo Campaign (1870)
              </div>
            </header>
            <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
              On they came in compact squadrons, one behind the other, so
              numerous that those of the rear were still below the brow when
              the head of the column was but at some sixty or seventy yards
              from us, and all the while the ground shook beneath their
              thundering tramp.
            </blockquote>
            <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
              <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                Source
              </span>
              <span className="font-serif">
                Journal of the Waterloo Campaign by General Cavalié Mercer,
                1870. Public domain.
              </span>
            </p>
          </article>

          <div className="gold-divider" />

          {/* Gronow */}
          <article className="relative">
            <div className="absolute -left-2 -top-2 w-1 h-full bg-gradient-to-b from-burgundy via-burgundy-deep to-transparent hidden md:block" />
            <header className="mb-3">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Captain Rees Howell Gronow, 1st Foot Guards
              </h3>
              <div className="text-sm italic text-burgundy-bright">
                Reminiscences and Recollections (1862)
              </div>
            </header>
            <blockquote className="relative pl-6 pr-2 py-2 border-l-2 border-gold/50 text-lg text-parchment italic leading-relaxed font-serif">
              The word of command, &ldquo;Prepare to receive cavalry,&rdquo;
              had been given, every man in the front ranks knelt, and a wall
              bristling with steel, held together by steady hands, presented
              itself to the infuriated cuirassiers.
            </blockquote>
            <p className="mt-3 text-sm text-parchment/95 leading-relaxed">
              <span className="uppercase tracking-widest text-gold/70 text-xs mr-2">
                Source
              </span>
              <span className="font-serif">
                Reminiscences and Recollections of Captain Gronow, 1862.
                Public domain.
              </span>
            </p>
          </article>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SHARPE AT WATERLOO                                        */}
      {/* ============================================================ */}
      <section
        id="sharpe"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/15 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <div className="text-center mb-10">
            <div className="ornament text-gold/70 mb-4">
              <span>❦</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
              Sharpe at Waterloo
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
              Fiction · Bernard Cornwell
            </p>
          </div>

          <div className="card p-8 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-4">
              Sharpe&rsquo;s Waterloo (1990)
            </h3>
            <p className="text-parchment leading-relaxed font-serif mb-5">
              In the final full novel of the series, Lieutenant-Colonel Richard
              Sharpe serves as a liaison officer attached to the Prince of
              Orange&rsquo;s staff on the Allied ridge. Cornwell follows Sharpe
              through the defence of Hougoumont, the cavalry charges, and the
              crisis at La Haye Sainte, ending with the repulse of the
              Imperial Guard at dusk.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-display text-sm text-gold-pale uppercase tracking-widest mb-2">
                  What Cornwell got right
                </h4>
                <ul className="space-y-2 text-sm text-parchment/95 font-serif list-disc list-inside">
                  <li>
                    The sequence and timing of the battle follow the historical
                    record closely: Hougoumont, d&rsquo;Erlon, the cavalry
                    charges, La Haye Sainte, the Guard.
                  </li>
                  <li>
                    The terrain, the weather (overnight rain, muddy ground
                    delaying the French attack), and the key tactical decisions
                    are accurately depicted.
                  </li>
                  <li>
                    Real commanders appear in their documented roles:
                    Wellington on the ridge, Ney leading the charges, Picton
                    killed in the counter-attack.
                  </li>
                  <li>
                    The arrival of the Prussians and the final rout match the
                    historical timeline.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm text-gold-pale uppercase tracking-widest mb-2">
                  Fictional elements Cornwell added
                </h4>
                <ul className="space-y-2 text-sm text-parchment/95 font-serif list-disc list-inside">
                  <li>
                    Sharpe himself is fictional, as is his role as a liaison
                    officer at the battle.
                  </li>
                  <li>
                    The Prince of Orange is portrayed as recklessly
                    incompetent; while this has some historical basis, Cornwell
                    amplifies it for dramatic effect.
                  </li>
                  <li>
                    Several secondary characters and personal subplots
                    (including Sharpe&rsquo;s conflicts with officers on the
                    Allied staff) are invented.
                  </li>
                  <li>
                    Sharpe participates directly in the defence of Hougoumont
                    and the repulse of the Guard, placing him at every key
                    moment of the day.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-5 border-t border-gold/15">
              <a
                href="https://amzn.to/4cMW7df"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Buy Sharpe&rsquo;s Waterloo &rarr;
              </a>
              <Link
                href="/fiction"
                className="text-sm text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition"
              >
                See all 24 Sharpe novels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. VISIT WATERLOO TODAY                                     */}
      {/* ============================================================ */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
          Visit Waterloo Today
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              Mémorial 1815
            </h3>
            <p className="text-parchment leading-relaxed font-serif text-sm mb-4">
              The modern visitor centre at the foot of the Lion&rsquo;s Mound
              offers an immersive underground exhibition covering all three
              days of the campaign (Ligny, Quatre Bras and Waterloo) with
              panoramic film, artefacts and a 3D battle model. It is the
              starting point for any visit to the battlefield.
            </p>
            <a
              href="https://www.waterloo1815.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold-pale hover:text-gold inline-flex items-center gap-1.5"
            >
              waterloo1815.be
              <span aria-hidden="true" className="text-gold/70 text-xs">
                ↗
              </span>
            </a>
          </div>

          <div className="card p-7 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              Hougoumont Farm
            </h3>
            <p className="text-parchment leading-relaxed font-serif text-sm">
              The walled farm complex on the Allied right has been restored
              and opened as a museum. The north gate, where the fighting was
              fiercest, is preserved; the chapel and courtyard still show
              marks of the battle. It is a short walk across the fields from
              the Mémorial.
            </p>
          </div>

          <div className="card p-7 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              The Lion&rsquo;s Mound
            </h3>
            <p className="text-parchment leading-relaxed font-serif text-sm">
              The 40-metre artificial hill topped by a cast-iron lion was
              raised by the Kingdom of the Netherlands in the 1820s on the
              approximate spot where the Prince of Orange was wounded. Two
              hundred and twenty-six steps lead to a panoramic view of the
              entire battlefield. Wellington is said to have complained that
              the construction of the mound had altered the landscape he
              fought over.
            </p>
          </div>

          <div className="card p-7 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              Getting There
            </h3>
            <p className="text-parchment leading-relaxed font-serif text-sm">
              The battlefield is approximately 20 km south of Brussels.
              Regular buses run from Brussels-Midi station to Braine-l&rsquo;Alleud
              (line W); the journey takes about 40 minutes. By car, follow
              the N5 south from Brussels towards Charleroi. The Mémorial car
              park is well signposted from the motorway exit. Allow a full
              day to visit the visitor centre, the Lion&rsquo;s Mound,
              Hougoumont and La Haye Sainte on foot.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FURTHER READING                                          */}
      {/* ============================================================ */}
      <section
        id="reading"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-navy to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
            Further Reading
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card p-6 rounded-sm">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                Waterloo: The History of Four Days, Three Armies and Three
                Battles
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Bernard Cornwell, 2014
              </div>
              <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
                Cornwell&rsquo;s own non-fiction account of the campaign,
                drawing on letters, diaries and dispatches to reconstruct the
                four days from Napoleon&rsquo;s crossing of the frontier to
                the rout on the Brussels road.
              </p>
              <a
                href="https://amzn.to/4tjc80D"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Buy on Amazon &rarr;
              </a>
            </div>

            <div className="card p-6 rounded-sm">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                The Campaigns of Napoleon
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                David G. Chandler, 1966
              </div>
              <p className="text-sm text-parchment/95 font-serif leading-relaxed mb-4">
                The single-volume standard in English on Napoleon as a
                soldier. Chandler&rsquo;s account of the Waterloo campaign
                runs to over a hundred pages and remains essential reading for
                any serious student of the battle.
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
          </div>

          <div className="text-center space-y-4">
            <Link
              href="/resources"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Browse all resources &rarr;
            </Link>
            <p className="text-xs uppercase tracking-widest text-parchment/85">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
