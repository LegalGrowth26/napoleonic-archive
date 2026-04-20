import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "India & the East India Company",
  description:
    "India in the Napoleonic era: the East India Company, Wellington's formative campaigns at Seringapatam and Assaye, the Sharpe India novels, and the world of Taboo.",
  path: "/india",
  keywords: [
    "East India Company",
    "Wellington India",
    "Seringapatam",
    "Assaye",
    "Sharpe India",
    "Tippu Sultan",
    "British India Napoleonic",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "India & the East India Company",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/india`,
  url: `${SITE.baseUrl}/india`,
  inLanguage: "en-GB",
};

export default function IndiaPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_70%_80%,rgba(107,31,42,0.5),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            The Napoleonic Archive
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            India &amp; the East India Company
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1757 to 1858 &middot; Where Wellington was forged and Sharpe began
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>◈</span>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            India is the hidden foundation of the Napoleonic wars. The East
            India Company controlled vast territories with its own private
            army, larger than most European states could field. It was in
            India that Arthur Wellesley arrived in 1797, an undistinguished
            younger son with a purchased commission, and left in 1805 as one
            of Britain&rsquo;s most experienced and successful generals. The
            campaigns he fought there, at Seringapatam, Assaye, Argaum and
            Gawilghur, gave him the methods and the reputation he would carry
            into the Peninsula and ultimately to Waterloo.
          </p>
          <p>
            This is also where Richard Sharpe&rsquo;s story begins. The
            first three{" "}
            <Link
              href="/fiction"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Sharpe novels
            </Link>{" "}
            are set in India, and they show the Company&rsquo;s world through
            the eyes of a private soldier: sepoys, nabobs, fortresses, and
            the collision of European and Indian military traditions.
          </p>
        </div>
      </section>

      {/* 3. THE COMPANY */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link
            href="/india/east-india-company"
            className="card p-8 rounded-sm block group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-3">
                Deep Dive
              </div>
              <h2 className="font-display text-3xl text-gold-pale uppercase tracking-wider mb-4">
                The East India Company
              </h2>
              <p className="text-parchment leading-relaxed font-serif text-lg max-w-3xl">
                A London trading charter that became a sovereign power. The
                Company maintained three private armies totalling over 200,000
                men, collected revenue from Bengal, grew opium for the China
                trade, and wielded political influence that reached into
                Parliament itself. Its story runs from the spice trade of 1600
                to the catastrophe of 1857.
              </p>
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold/80">
                Read the full history &rarr;
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. THE CAMPAIGNS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Campaigns
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
            Wellington&rsquo;s Indian wars &middot; 1799 to 1803
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Seringapatam",
              date: "1799",
              body: "The siege that destroyed Tippu Sultan and the Kingdom of Mysore. Arthur Wellesley commanded a night attack and was made governor of the captured city. The setting for Sharpe's Tiger.",
            },
            {
              name: "Assaye",
              date: "1803",
              body: "Wellington's masterpiece in India: he attacked a Mahratta army that outnumbered him five to one. He later called it the bloodiest battle he had ever seen, a verdict he maintained even after Waterloo. The setting for Sharpe's Triumph.",
            },
            {
              name: "Argaum",
              date: "1803",
              body: "A month after Assaye, Wellington destroyed a second Mahratta army at Argaum (Adgaon). A more conventional engagement that confirmed British dominance in the Deccan.",
            },
            {
              name: "Gawilghur",
              date: "1803",
              body: "The storm of the Mahratta hill-fortress of Gawilghur completed the destruction of the Mahratta Confederacy. The setting for Sharpe's Fortress.",
            },
          ].map((c) => (
            <article key={c.name} className="card p-7 rounded-sm">
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                  {c.name}
                </h3>
                <span className="text-xs tracking-widest text-gold/70">
                  {c.date}
                </span>
              </div>
              <p className="text-parchment leading-relaxed font-serif">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. KEY FIGURES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            Key Figures
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                <Link
                  href="/people/wellington"
                  className="hover:text-gold transition"
                >
                  Arthur Wellesley
                </Link>
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Major-General, later Duke of Wellington
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                Arrived in India in 1797 and fought his formative campaigns
                under his brother&rsquo;s patronage. Seringapatam, Assaye
                and Gawilghur gave him the experience and reputation he
                carried to Portugal and Waterloo.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Richard Wellesley
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Governor-General of India, 1798-1805
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The aggressive expansionist who doubled the Company&rsquo;s
                territory through the Subsidiary Alliance system. He gave
                his brother the commands that made him, and was recalled over
                the cost and controversy of his wars.
              </p>
            </article>

            <article className="card p-6 rounded-sm">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                Tippu Sultan
              </h3>
              <div className="text-sm italic text-burgundy-bright mb-3">
                Sultan of Mysore, 1750-1799
              </div>
              <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                The Company&rsquo;s greatest Indian opponent. He modernised
                his army with French advisers, used rockets against the
                British, and resisted Company expansion until his death at
                the siege of Seringapatam in 1799. Known as the Tiger of
                Mysore.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. SHARPE IN INDIA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            Sharpe in India
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
            Bernard Cornwell &middot; The India Novels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Sharpe's Tiger",
              setting: "Seringapatam, 1799",
              desc: "Private Sharpe slips into Tippu Sultan's fortress on a clandestine mission and earns his first stripe.",
              link: "https://amzn.to/3QdRVuq",
            },
            {
              title: "Sharpe's Triumph",
              setting: "Assaye, 1803",
              desc: "Sergeant Sharpe fights at Wellesley's side and commits the act that wins him a commission.",
              link: "https://amzn.to/3OjyIa9",
            },
            {
              title: "Sharpe's Fortress",
              setting: "Gawilghur, 1803",
              desc: "Newly-commissioned Ensign Sharpe climbs the cliff-fortress against both Mahratta guns and the gentlemen of his own regiment.",
              link: "https://amzn.to/3QtV1dP",
            },
          ].map((b) => (
            <article key={b.title} className="card p-6 rounded-sm flex flex-col">
              <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-1">
                {b.title}
              </h3>
              <div className="text-xs italic text-burgundy-bright mb-3">
                {b.setting}
              </div>
              <p className="text-parchment/95 font-serif text-sm leading-relaxed flex-1">
                {b.desc}
              </p>
              <a
                href={b.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-block self-start px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal"
              >
                Buy on Amazon &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* 7. TABOO */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
            Taboo (BBC/FX, 2017)
          </h2>
          <p className="text-parchment leading-relaxed font-serif text-lg">
            Tom Hardy&rsquo;s television series is set in 1814 and shows the
            East India Company&rsquo;s London face: the boardroom of East
            India House, the political corruption, the ruthlessness with which
            the Company defended its interests. It is fiction, and takes
            considerable dramatic liberties, but it is rooted in the
            Company&rsquo;s real political power and willingness to use
            violence to protect its monopolies.
          </p>
        </div>
      </section>

      {/* 8. WHY INDIA MATTERS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4 section-title">
          Why India Matters
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            India shaped Wellington. The eight years he spent there, from 1797
            to 1805, taught him logistics, the management of sepoy armies,
            the importance of supply, and the decisive value of personal
            reconnaissance. His tactics at Assaye (attacking an army five
            times his size because he judged the ground correctly) and his
            administration of Mysore (feeding a province while running a war)
            were the rehearsal for everything that followed in Portugal and
            Spain.
          </p>
          <p>
            Without India there would have been no Peninsular War as we know
            it, no{" "}
            <Link
              href="/battles/waterloo"
              className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
            >
              Waterloo
            </Link>
            , and no Sharpe. The Company&rsquo;s wars produced the general
            who defeated Napoleon. That story begins here.
          </p>
        </div>
      </section>

      {/* NAV + DISCLAIMER */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              href="/india/east-india-company"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              East India Company &rarr;
            </Link>
            <Link
              href="/fiction"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Sharpe Novels
            </Link>
            <Link
              href="/people/wellington"
              className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Wellington Biography
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
