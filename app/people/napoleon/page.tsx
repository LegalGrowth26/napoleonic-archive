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

      {/* Sections 4-12 follow in subsequent updates */}
    </>
  );
}
