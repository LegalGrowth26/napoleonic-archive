import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Napoleonic Wars & Sharpe Novels · The Napoleonic Archive",
  },
  description:
    "The Napoleonic Archive: battles, biographies, regiments, and the complete guide to Bernard Cornwell's Sharpe novels. Featuring the Battle of Waterloo, Napoleon and Wellington biographies, and the East India Company.",
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: "Napoleonic Wars & Sharpe Novels · The Napoleonic Archive",
    description:
      "Battles, biographies, regiments and Bernard Cornwell's Sharpe novels in one curated archive.",
    url: SITE.baseUrl,
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: SITE.ogImage,
        width: SITE.ogImageWidth,
        height: SITE.ogImageHeight,
        alt: "The Napoleonic Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Napoleonic Wars & Sharpe Novels · The Napoleonic Archive",
    description:
      "Battles, biographies, regiments and Bernard Cornwell's Sharpe novels in one curated archive.",
    images: [SITE.ogImage],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.baseUrl,
  description: SITE.description,
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.baseUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const eyewitness = [
  {
    quote:
      "My shoes had given out long before. The men tied strips of raw oxhide about their feet, bloody side in, and so we went: the women carrying children, the children carrying loaves, the loaves mouldered black.",
    author: "Benjamin Harris, 95th Rifles",
    source: "Recollections (1848)",
    context: "The retreat to Corunna",
  },
  {
    quote:
      "For three days and three nights Badajoz was a hell. Our own officers could not go among the soldiery without being shot at; men quarrelled over the plate of a sacristy and killed one another in the streets.",
    author: "Sir John Kincaid, 95th Rifles",
    source: "Adventures in the Rifle Brigade (1830)",
    context: "After the storm of Badajoz",
  },
  {
    quote:
      "He was brought down at twenty past one. The ball had broken his spine. He asked constantly, 'How goes the day with us?' and when told we had eighteen prizes he said twice, 'God be praised, I have done my duty.'",
    author: "Dr William Beatty, Surgeon of HMS Victory",
    source: "The Death of Lord Nelson (1807)",
    context: "Nelson below decks at Trafalgar",
  },
  {
    quote:
      "We were four thousand of the Guard left. The cold had glued the muskets to our hands; to let go was to leave the skin behind. We marched in column straight through the fire, and when we came out upon the further side we counted not the dead but the living.",
    author: "Sgt. Bourgogne, Imperial Guard",
    source: "Mémoires (1835)",
    context: "The Old Guard at Krasny, 1812",
  },
];

const features = [
  {
    href: "/battles",
    title: "Battles",
    desc: "Including the complete Battle of Waterloo: casualties, commanders, hour by hour.",
    glyph: "⚔",
  },
  {
    href: "/people",
    title: "People",
    desc: "Napoleon and Wellington: full biographies. Plus the real Sharpe characters.",
    glyph: "♛",
  },
  {
    href: "/india",
    title: "India",
    desc: "The East India Company, Seringapatam, Assaye: where Wellington was forged.",
    glyph: "◈",
  },
  {
    href: "/regiments",
    title: "Regiments",
    desc: "The 95th Rifles, the Old Guard, the King's German Legion.",
    glyph: "⚑",
  },
  {
    href: "/fiction",
    title: "Fiction",
    desc: "All 24 Sharpe novels, the TV series, the character guide.",
    glyph: "❦",
  },
  {
    href: "/resources",
    title: "Resources",
    desc: "Books, museums, podcasts, archives.",
    glyph: "✒",
  },
];

const recentPages = [
  { href: "/people/wellington", label: "Wellington Biography" },
  { href: "/people/napoleon", label: "Napoleon Biography" },
  { href: "/india", label: "India & the East India Company" },
  { href: "/fiction/characters", label: "Sharpe Character Guide" },
];

export default function HomePage() {
  const featured = eyewitness[Math.floor(Math.random() * eyewitness.length)];

  return (
    <>
      <JsonLd data={websiteJsonLd} />

      {/* 1. HERO */}
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
          <p className="max-w-2xl mx-auto text-xl md:text-2xl italic text-parchment leading-relaxed">
            The wars, the men, the fiction: from Seringapatam to Waterloo.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              href="/battles"
              className="inline-block px-8 py-3 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition shadow-regal"
            >
              Explore the Battles
            </Link>
            <Link
              href="/fiction/characters"
              className="inline-block px-8 py-3 border border-gold/30 text-parchment/80 uppercase tracking-widest text-sm hover:border-gold/60 hover:text-gold-pale transition"
            >
              Meet the Characters
            </Link>
            <Link
              href="/battles/waterloo"
              className="inline-block px-8 py-3 border border-gold/30 text-parchment/80 uppercase tracking-widest text-sm hover:border-gold/60 hover:text-gold-pale transition"
            >
              Read Waterloo
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Featured
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/battles/waterloo"
            className="card p-8 rounded-sm flex flex-col group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
                Flagship Article
              </div>
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3">
                The Battle of Waterloo
              </h3>
              <p className="text-parchment/95 leading-relaxed font-serif flex-1">
                Nine hours of slaughter on a two-mile front. From the first
                shots at Hougoumont to the breaking of the Imperial Guard: the
                complete story of 18 June 1815.
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Read &rarr;
              </div>
            </div>
          </Link>

          <Link
            href="/people/napoleon"
            className="card p-8 rounded-sm flex flex-col group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
                Biography
              </div>
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3">
                Napoleon Bonaparte 1769-1821
              </h3>
              <p className="text-parchment/95 leading-relaxed font-serif flex-1">
                Corsican outsider to Emperor of the French. The campaigns,
                the genius, the catastrophic overreach, and the myth he built
                on St Helena.
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Read &rarr;
              </div>
            </div>
          </Link>

          <Link
            href="/india"
            className="card p-8 rounded-sm flex flex-col group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
                Deep Dive
              </div>
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3">
                The Company That Ruled a Continent
              </h3>
              <p className="text-parchment/95 leading-relaxed font-serif flex-1">
                From a London trading charter in 1600 to the conquest of
                India: the East India Company, Wellington&rsquo;s formative
                campaigns, and the world of Taboo.
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Read &rarr;
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. NEW TO SHARPE? */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-navy-deep via-burgundy-deep/20 to-navy-deep">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-3">
              New to Sharpe?
            </h2>
            <p className="text-parchment font-serif italic text-lg max-w-2xl mx-auto">
              Bernard Cornwell&rsquo;s Sharpe novels are where history becomes
              addictive. Here&rsquo;s where to start.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/fiction#where-to-start"
              className="card p-6 rounded-sm text-center block"
            >
              <div className="text-3xl text-gold mb-3">❦</div>
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                Where to Start Reading
              </h3>
              <p className="text-sm text-parchment/95 font-serif">
                Eagle or Tiger? Two entry points for new readers.
              </p>
            </Link>
            <Link
              href="/fiction/characters"
              className="card p-6 rounded-sm text-center block"
            >
              <div className="text-3xl text-gold mb-3">♛</div>
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                The Character Guide
              </h3>
              <p className="text-sm text-parchment/95 font-serif">
                Sharpe, Harper, Hakeswill and every named character.
              </p>
            </Link>
            <Link
              href="/fiction/recommendations"
              className="card p-6 rounded-sm text-center block"
            >
              <div className="text-3xl text-gold mb-3">⚓</div>
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">
                Books Like Sharpe
              </h3>
              <p className="text-sm text-parchment/95 font-serif">
                Hornblower, Flashman, Aubrey-Maturin and more.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE ARCHIVE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
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
              <p className="text-parchment/95 leading-relaxed flex-1">
                {f.desc}
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Enter &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. EYEWITNESS */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-navy-deep via-burgundy-deep/30 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6">
            Eyewitness &middot; {featured.context}
          </div>
          <blockquote className="font-serif italic text-xl md:text-2xl text-parchment leading-relaxed">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.4em] text-gold/70">
            {featured.author} &middot; {featured.source}
          </div>
          <Link
            href="/stories"
            className="inline-block mt-8 text-sm text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition"
          >
            Read more eyewitness accounts &rarr;
          </Link>
        </div>
      </section>

      {/* 6. RECENTLY ADDED */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">
          Recently Added to the Archive
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentPages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card p-5 rounded-sm block"
            >
              <span className="inline-block px-2 py-0.5 mb-2 rounded-sm border border-gold/50 bg-navy-muted/50 text-gold-pale text-[10px] font-display uppercase tracking-[0.25em]">
                New
              </span>
              <div className="font-display text-gold-pale uppercase tracking-wider text-sm">
                {p.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER */}
      <section className="border-y border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/20 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <NewsletterSignup />
        </div>
      </section>

      {/* 8. WELLINGTON QUOTE */}
      <section className="bg-gradient-to-r from-navy-deep via-burgundy-deep/30 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <blockquote className="font-serif italic text-xl md:text-2xl text-parchment leading-relaxed">
            &ldquo;It has been a damned nice thing, the nearest-run thing you
            ever saw in your life.&rdquo;
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.4em] text-gold/70">
            Arthur Wellesley, Duke of Wellington &middot; after Waterloo, 1815
          </div>
        </div>
      </section>
    </>
  );
}
