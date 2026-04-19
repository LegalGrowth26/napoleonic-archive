import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Books Like Sharpe",
  description:
    "Love Bernard Cornwell's Sharpe novels? Discover the best similar historical fiction: Hornblower, Aubrey-Maturin, Flashman, Hervey and more. All set in the Napoleonic era.",
  path: "/fiction/recommendations",
  keywords: [
    "books like Sharpe",
    "Hornblower",
    "Aubrey-Maturin",
    "Patrick O'Brian",
    "Flashman",
    "historical fiction Napoleonic",
    "naval fiction",
    "C.S. Forester",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "If You Like Sharpe: Historical Fiction Recommendations for the Napoleonic Era",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/fiction/recommendations`,
  url: `${SITE.baseUrl}/fiction/recommendations`,
  inLanguage: "en-GB",
};

function BuyButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-[10px] md:text-xs hover:border-gold hover:text-gold transition shadow-regal"
    >
      {label}
    </a>
  );
}

export default function RecommendationsPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/fiction" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Fiction
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            If You Like Sharpe...
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif max-w-2xl mx-auto">
            The best historical fiction of the Napoleonic era: naval
            adventures, cavalry charges, and the grand sweep of the age.
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>❦</span>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-parchment leading-relaxed font-serif text-lg text-center">
          Sharpe fans often want more of the same period: the same mix of
          action, meticulous history and compelling characters, set against
          the smoke and spectacle of the Napoleonic wars. This page
          recommends the best series and standalone novels set in the same
          era. Every recommendation here has been read and chosen because it
          shares something essential with Cornwell&rsquo;s world.
        </p>
      </section>

      {/* 3. NAVAL FICTION */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="ornament text-gold/70 mb-4">
              <span>⚓</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
              Take to Sea
            </h2>
            <p className="mt-3 text-parchment font-serif italic max-w-2xl mx-auto">
              If Sharpe&rsquo;s Trafalgar whetted your appetite for the naval
              war, these series will keep you at sea for years.
            </p>
          </div>

          <div className="space-y-8">
            {/* Hornblower */}
            <article className="card p-8 rounded-sm">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
                The Hornblower Series
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-4">
                C.S. Forester &middot; 11 novels (1937-1967)
              </div>
              <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
                The series that inspired Sharpe. Hornblower is Forester&rsquo;s
                creation: a brilliant, self-doubting Royal Navy officer rising
                from midshipman to admiral through the Napoleonic wars. Where
                Sharpe fights on land, Hornblower fights at sea: frigates,
                broadsides, prize money and the merciless hierarchy of the
                Georgian navy. Cornwell himself has acknowledged the debt. If
                you have read Sharpe, you owe it to yourself to read
                Hornblower.
              </p>
              <div className="mb-4">
                <span className="text-gold-pale uppercase text-xs tracking-widest">
                  Where to start:
                </span>
                <span className="text-parchment font-serif ml-2">
                  Mr Midshipman Hornblower (Book 1)
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <BuyButton href="https://amzn.to/4txfkFK" label="Book 1" />
                <BuyButton href="https://amzn.to/4cumAMV" label="Book 2" />
                <BuyButton href="https://amzn.to/3OpaBqB" label="Book 3" />
                <BuyButton href="https://amzn.to/4sKkxJh" label="Book 4" />
                <BuyButton href="https://amzn.to/42lNtMM" label="Book 5" />
                <BuyButton href="https://amzn.to/41ICs8g" label="Book 6" />
                <BuyButton
                  href="https://amzn.to/4mBvR94"
                  label="Complete Collection"
                />
              </div>
            </article>

            {/* Aubrey-Maturin */}
            <article className="card p-8 rounded-sm">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
                The Aubrey-Maturin Series
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-4">
                Patrick O&rsquo;Brian &middot; 20 novels (1969-2004)
              </div>
              <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
                Twenty novels following Captain Jack Aubrey and his ship&rsquo;s
                surgeon Stephen Maturin through the Napoleonic wars at sea.
                Where Hornblower is accessible and fast-paced, O&rsquo;Brian is
                richer, more literary, and more demanding, but the reward is
                extraordinary. Many readers consider this the greatest
                historical fiction series ever written. Start with Master and
                Commander and give it three chapters before deciding.
              </p>
              <div className="mb-4">
                <span className="text-gold-pale uppercase text-xs tracking-widest">
                  Where to start:
                </span>
                <span className="text-parchment font-serif ml-2">
                  Master and Commander
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <BuyButton
                  href="https://amzn.to/4tVpBLR"
                  label="Master and Commander"
                />
                <BuyButton
                  href="https://amzn.to/48eXaQO"
                  label="5-Book Collection"
                />
              </div>
            </article>

            {/* Bolitho */}
            <article className="card p-8 rounded-sm">
              <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
                The Bolitho Series
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-4">
                Alexander Kent &middot; 30 novels (1968-2011)
              </div>
              <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
                Thirty novels following Richard Bolitho from midshipman to
                admiral. Less well known than Hornblower or Aubrey-Maturin but
                beloved by naval fiction readers. A good entry point for readers
                who find O&rsquo;Brian demanding: more straightforward action,
                the same period, the same world.
              </p>
              <div className="mb-4">
                <span className="text-gold-pale uppercase text-xs tracking-widest">
                  Where to start:
                </span>
                <span className="text-parchment font-serif ml-2">
                  Richard Bolitho Midshipman
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <BuyButton href="https://amzn.to/4cReAp8" label="Book 1" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. LAND-BASED FICTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Back on Dry Land
          </h2>
          <p className="mt-3 text-parchment font-serif italic max-w-2xl mx-auto">
            For readers who prefer their battles on solid ground, these series
            offer the same mix of action, history and compelling characters as
            Sharpe.
          </p>
        </div>

        <div className="space-y-8">
          {/* Hervey */}
          <article className="card p-8 rounded-sm">
            <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
              The Matthew Hervey Series
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-4">
              Allan Mallinson &middot; 16 novels (1999-2018)
            </div>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              The closest modern equivalent to Sharpe. Matthew Hervey is a
              cavalry officer in the same period: Waterloo, the aftermath of
              the Napoleonic wars, and the early Victorian campaigns that
              followed. Where Sharpe is rough-edged and class-resentful, Hervey
              is a gentleman officer, but the quality of historical research
              and the quality of the action are every bit as good. Mallinson is
              a former cavalry officer himself, and it shows. Start with A
              Close Run Thing, set at Waterloo.
            </p>
            <div className="mb-4">
              <span className="text-gold-pale uppercase text-xs tracking-widest">
                Where to start:
              </span>
              <span className="text-parchment font-serif ml-2">
                A Close Run Thing
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <BuyButton href="https://amzn.to/4tlv52y" label="Book 1" />
            </div>
          </article>

          {/* Flashman */}
          <article className="card p-8 rounded-sm">
            <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
              The Flashman Papers
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-4">
              George MacDonald Fraser &middot; 12 novels (1969-2005)
            </div>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              Twelve novels following Harry Flashman, coward, bully and cad, as
              he stumbles through every major military disaster of the Victorian
              era. It begins just after Waterloo. Fraser&rsquo;s research is
              impeccable, his humour is savage, and his hero is magnificently
              awful. Sharpe fans who want something darker and funnier will love
              Flashman. Not for the easily offended.
            </p>
            <div className="mb-4">
              <span className="text-gold-pale uppercase text-xs tracking-widest">
                Where to start:
              </span>
              <span className="text-parchment font-serif ml-2">
                Flashman (Book 1)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <BuyButton href="https://amzn.to/4mHlYH4" label="Flashman" />
            </div>
          </article>
        </div>
      </section>

      {/* 5. THE LITERARY GIANT */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <div className="ornament text-gold/70 mb-4">
              <span>◈</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
              If You Want the Full Picture
            </h2>
          </div>

          <article className="card p-8 rounded-sm max-w-3xl mx-auto">
            <h3 className="font-display text-2xl text-gold-pale uppercase tracking-wider mb-1">
              War and Peace
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-4">
              Leo Tolstoy &middot; 1869
            </div>
            <p className="text-parchment leading-relaxed font-serif text-lg mb-4">
              Not light reading, but if the Napoleonic wars have got under your
              skin, Tolstoy&rsquo;s masterpiece is the novel that puts the
              whole era in perspective. It follows several Russian aristocratic
              families through Napoleon&rsquo;s 1812 invasion. The battle
              scenes are extraordinary. The philosophical sections are
              demanding. It is one of the greatest novels ever written and it
              is set in exactly this world.
            </p>
            <div className="flex flex-wrap gap-2">
              <BuyButton
                href="https://amzn.to/4mClemF"
                label="War and Peace"
              />
            </div>
          </article>
        </div>
      </section>

      {/* 6. A NOTE ON READING ORDER */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
          A Note on Reading Order
        </h2>
        <p className="text-parchment leading-relaxed font-serif">
          Unlike Sharpe, most of these series can be read in any order. That
          said, starting at the beginning is usually recommended: the
          character arcs build over time, and the authors wrote them
          expecting you to arrive at the front door. For Hornblower and
          Aubrey-Maturin, the first-published novel (not the first in
          chronology) is generally the best entry point.
        </p>
      </section>

      {/* 7. RELATED LINKS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/fiction"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              &larr; Sharpe Novels
            </Link>
            <Link
              href="/resources"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Non-Fiction Resources
            </Link>
            <Link
              href="/battles"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              The Real Battles
            </Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
