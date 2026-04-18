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
    commander: "Field Marshal Bl\u00FCcher",
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
    body: "Prince J\u00E9r\u00F4me Bonaparte's division assaulted the walled chateau and farm complex on Wellington's right flank. What Napoleon intended as a diversion drew in ever more French troops throughout the day, while the British and Nassauer defenders held the buildings and the orchard against repeated infantry attacks.",
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
    body: "Bl\u00FCcher's leading corps under B\u00FClow attacked the village of Plancenoit on Napoleon's right rear, threatening the French line of retreat along the Brussels road. Napoleon was forced to divert the Young Guard and eventually two battalions of the Old Guard to hold the village, weakening his reserves at the critical moment.",
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

      {/* Sections 6-11 follow in the next update */}
    </>
  );
}
