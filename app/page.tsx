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
    "The Napoleonic Archive: battles, biographies, the Sharpe novels and the real history behind them. Waterloo, Wellington, Napoleon, the 95th Rifles and more.",
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: "Napoleonic Wars & Sharpe Novels · The Napoleonic Archive",
    description:
      "The Napoleonic Archive: battles, biographies, the Sharpe novels and the real history behind them.",
    url: SITE.baseUrl,
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
    images: [{ url: SITE.ogImage, width: SITE.ogImageWidth, height: SITE.ogImageHeight, alt: "The Napoleonic Archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Napoleonic Wars & Sharpe Novels · The Napoleonic Archive",
    description: "Battles, biographies, the Sharpe novels and the real history behind them.",
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
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is it called the Napoleonic Wars?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The wars are named after Napoleon Bonaparte, the French Emperor who dominated European politics and warfare from 1799 to 1815. The term distinguishes this period from the earlier French Revolutionary Wars and reflects Napoleon's central role as both the driving force and defining figure of the conflicts.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={homeFaqJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/50 via-navy-deep to-navy-deep" />
        <img
          src="/napoleon-vs-wellington.png"
          alt="Napoleon and Wellington facing each other across the battlefield"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_40%_20%,rgba(201,162,74,0.4),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-6">
            The Napoleonic Archive
          </h1>
          <p className="text-xl md:text-2xl text-parchment font-serif italic mb-10 max-w-2xl mx-auto">
            The wars that made the modern world, told through the men who fought them.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/battles/waterloo" className="px-8 py-4 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
              Start with Waterloo
            </Link>
            <Link href="/fiction/characters/sharpe" className="px-8 py-4 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
              Meet Richard Sharpe
            </Link>
            <Link href="/battles" className="px-8 py-4 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition">
              Explore the Archive
            </Link>
          </div>
        </div>
      </section>

      {/* 2. HOOK */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-6">
            Where does Sharpe&rsquo;s story begin?
          </h2>
          <p className="text-parchment font-serif text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            In India, 1799. Private Richard Sharpe volunteers for a suicide mission inside Tippu Sultan&rsquo;s fortress. It is the start of the greatest journey in historical fiction.
          </p>
          <Link href="/india" className="inline-block px-8 py-3 border-2 border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal">
            Begin in India &rarr;
          </Link>
        </div>
      </section>

      {/* 3. FEATURED CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/battles/waterloo" className="card p-8 rounded-sm block group hover:border-gold/60 transition">
            <div className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3 group-hover:text-gold transition">
              The Battle of Waterloo
            </div>
            <p className="text-parchment/95 font-serif leading-relaxed">
              Nine hours. Two armies. The future of Europe decided on a two-mile ridge south of Brussels.
            </p>
          </Link>
          <Link href="/fiction/characters/sharpe" className="card p-8 rounded-sm block group hover:border-gold/60 transition">
            <div className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3 group-hover:text-gold transition">
              Richard Sharpe
            </div>
            <p className="text-parchment/95 font-serif leading-relaxed">
              From workhouse to lieutenant colonel. The complete guide to the man behind the legend.
            </p>
          </Link>
          <Link href="/india/east-india-company" className="card p-8 rounded-sm block group hover:border-gold/60 transition">
            <div className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-3 group-hover:text-gold transition">
              The East India Company
            </div>
            <p className="text-parchment/95 font-serif leading-relaxed">
              The trading company that ruled a continent. Where Wellington was forged and Sharpe began.
            </p>
          </Link>
        </div>
      </section>

      {/* 3b. NAPOLEONIC WARS OVERVIEW */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <Link href="/napoleonic-wars" className="card p-6 rounded-sm block group hover:border-gold/60 transition text-center">
          <div className="font-display text-xl text-gold-pale uppercase tracking-widest group-hover:text-gold transition mb-2">
            New here? Start with the complete overview
          </div>
          <p className="text-parchment/85 font-serif">What were the Napoleonic Wars? Who fought them? Why do they matter? &rarr;</p>
        </Link>
      </section>

      {/* 4. QUICK ENTRY POINTS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/fiction", label: "New to Sharpe?", icon: "❦" },
              { href: "/fiction/characters", label: "Sharpe Characters", icon: "♛" },
              { href: "/battles", label: "Napoleonic Battles", icon: "⚔" },
              { href: "/people", label: "Wellington & Napoleon", icon: "◈" },
              { href: "/regiments/95th-rifles", label: "The 95th Rifles", icon: "⚑" },
              { href: "/stories", label: "Eyewitness Accounts", icon: "✦" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="border border-gold/30 rounded-sm p-4 text-center hover:border-gold/70 hover:bg-navy-muted/30 transition group">
                <div className="text-2xl text-gold/70 group-hover:text-gold transition mb-2">{item.icon}</div>
                <div className="font-display text-xs text-gold-pale uppercase tracking-widest group-hover:text-gold transition">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST FROM THE ARCHIVE */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">
          Recently Added
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: "/battles/peninsular-war", title: "Peninsular War Overview", badge: "Battles", desc: "Six years that broke Napoleon" },
            { href: "/fiction/characters/harper", title: "Patrick Harper", badge: "Fiction", desc: "The giant from Donegal" },
            { href: "/stories/life-as-a-soldier", title: "Life as a Soldier", badge: "Stories", desc: "Pay, food, discipline and survival" },
            { href: "/regiments/kings-german-legion", title: "King's German Legion", badge: "Regiments", desc: "Germany's finest in British service" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card p-5 rounded-sm flex items-start gap-4 group hover:border-gold/60 transition">
              <div className="shrink-0 px-2 py-1 border border-burgundy-bright/50 bg-burgundy-deep/30 text-burgundy-bright text-[10px] uppercase tracking-widest rounded-sm">
                {item.badge}
              </div>
              <div>
                <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition">{item.title}</div>
                <p className="text-parchment/85 font-serif text-sm mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. EYEWITNESS QUOTE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-5xl text-gold/40 font-serif mb-4">&ldquo;</div>
          <blockquote className="text-xl md:text-2xl text-parchment font-serif italic leading-relaxed max-w-3xl mx-auto mb-6">
            My shoes had given out long before. The men tied strips of raw oxhide about their feet, bloody side in, and so we went: the women carrying children, the children carrying loaves, the loaves mouldered black.
          </blockquote>
          <cite className="text-sm uppercase tracking-widest text-gold/70 not-italic block mb-8">
            Benjamin Harris, 95th Rifles &middot; Recollections (1848) &middot; The retreat to Corunna
          </cite>
          <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            Read the eyewitness accounts &rarr;
          </Link>
        </div>
      </section>

      {/* 7. SHARPE SHELF */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest">Start Reading Sharpe</h2>
          <Link href="/fiction" className="text-sm uppercase tracking-widest text-gold/70 hover:text-gold-pale transition hidden md:block">See all 24 novels &rarr;</Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { title: "Tiger", link: "https://amzn.to/3QdRVuq", asin: "0007425791" },
            { title: "Triumph", link: "https://amzn.to/3OjyIa9", asin: "0007425805" },
            { title: "Fortress", link: "https://amzn.to/3QtV1dP", asin: "0007425813" },
            { title: "Rifles", link: "https://amzn.to/4cSwN4L", asin: "0007425864" },
            { title: "Eagle", link: "https://amzn.to/4sXbzbX", asin: "0140294309" },
            { title: "Gold", link: "https://amzn.to/3QJNU0Q", asin: "0007452926" },
          ].map((book) => (
            <a key={book.title} href={book.link} target="_blank" rel="noopener noreferrer sponsored" className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images-na.ssl-images-amazon.com/images/P/${book.asin}.jpg`}
                alt={`Sharpe's ${book.title}`}
                width={130}
                height={200}
                className="w-full aspect-[2/3] object-cover rounded-sm border border-gold/20 group-hover:border-gold/60 transition"
              />
              <div className="mt-2 text-center font-display text-xs text-gold-pale uppercase tracking-wider group-hover:text-gold transition">
                {book.title}
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-6 md:hidden">
          <Link href="/fiction" className="text-sm uppercase tracking-widest text-gold/70 hover:text-gold-pale transition">See all 24 novels &rarr;</Link>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <NewsletterSignup />
        </div>
      </section>

      {/* 9. WELLINGTON QUOTE */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="text-lg text-parchment/90 font-serif italic leading-relaxed max-w-2xl mx-auto mb-4">
          &ldquo;All the business of war, and indeed all the business of life, is to endeavour to find out what you don&rsquo;t know by what you do.&rdquo;
        </blockquote>
        <cite className="text-xs uppercase tracking-widest text-gold/60 not-italic">
          Arthur Wellesley, Duke of Wellington
        </cite>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-parchment/85">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </div>
    </>
  );
}
