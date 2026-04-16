import Link from "next/link";

const features = [
  {
    href: "/battles",
    title: "Battles",
    desc: "From Austerlitz's frozen ponds to the rye-trampled ridge of Mont-Saint-Jean, the engagements that shook Europe.",
    glyph: "⚔",
  },
  {
    href: "/people",
    title: "People",
    desc: "Emperors and rifle sergeants, marshals and drummer boys. The faces beneath the bicornes and shakos.",
    glyph: "♛",
  },
  {
    href: "/regiments",
    title: "Regiments",
    desc: "The 95th Rifles, the Old Guard, the Highland Black Watch: colours, facings, and the men who marched behind them.",
    glyph: "⚑",
  },
  {
    href: "/stories",
    title: "Stories",
    desc: "First-hand accounts from officers, riflemen, vivandières and surgeons: the war in their own ink.",
    glyph: "✒",
  },
  {
    href: "/fiction",
    title: "Fiction",
    desc: "Richard Sharpe from the breach at Badajoz to the slopes of Waterloo: Cornwell's chronicle, book by book.",
    glyph: "❦",
  },
  {
    href: "/resources",
    title: "Resources",
    desc: "Reading lists, museums, archives and maps for the student, the re-enactor, and the armchair general.",
    glyph: "◈",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/30 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(201,162,74,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,rgba(107,31,42,0.6),transparent_55%)]" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-6">
            Anno Domini 1789 to 1815
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-pale uppercase tracking-wider leading-tight">
            The Napoleonic
            <br />
            <span className="text-gold">Archive</span>
          </h1>
          <div className="ornament my-10 text-gold/70">
            <span className="text-lg">⚜</span>
          </div>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl italic text-parchment/85 leading-relaxed">
            A chronicle of the age of powder and ambition: the battles, the
            men, the regiments, and the fiction of Bernard Cornwell&rsquo;s
            <span className="text-gold-pale"> Sharpe</span>.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              href="/battles"
              className="inline-block px-8 py-3 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition shadow-regal"
            >
              Enter the Archive
            </Link>
            <Link
              href="/fiction"
              className="inline-block px-8 py-3 border border-gold/30 text-parchment/80 uppercase tracking-widest text-sm hover:border-gold/60 hover:text-gold-pale transition"
            >
              Meet Sharpe
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="drop-cap text-lg md:text-xl leading-relaxed text-parchment/90">
          Between the storming of the Bastille and the fall of the Emperor at
          Waterloo, a quarter-century of war reshaped Europe. Line infantry
          traded volleys at sixty paces; cuirassiers broke on British squares;
          riflemen stalked the sierras of Spain. The Napoleonic Archive gathers
          the campaigns, the captains and the common soldiers of that age,
          and, beside the history, the fiction it inspired: the green-jacketed
          rogue Richard Sharpe, climbing from the gutters of London to the
          epaulettes of a Chosen Man.
        </p>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <div className="ornament text-gold/70 mb-4">
            <span>✧</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Archive
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="card p-8 rounded-sm flex flex-col"
            >
              <div className="text-4xl text-gold mb-4 font-display">
                {f.glyph}
              </div>
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3">
                {f.title}
              </h3>
              <p className="text-parchment/75 leading-relaxed flex-1">
                {f.desc}
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Enter &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote band */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-navy-deep via-burgundy-deep/30 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <blockquote className="font-serif italic text-xl md:text-2xl text-parchment/90 leading-relaxed">
            &ldquo;It has been a damned nice thing, the nearest-run thing you
            ever saw in your life.&rdquo;
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.4em] text-gold/70">
            Arthur Wellesley, Duke of Wellington · after Waterloo, 1815
          </div>
        </div>
      </section>
    </>
  );
}
