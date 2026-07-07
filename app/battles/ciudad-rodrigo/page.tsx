import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Siege of Ciudad Rodrigo (1812): Peninsular War Battle Guide",
  description:
    "The Siege of Ciudad Rodrigo, January 1812: Wellington's twelve-day winter siege that astonished Europe and opened the northern invasion route into Spain.",
  path: "/battles/ciudad-rodrigo",
  keywords: ["Siege of Ciudad Rodrigo","Ciudad Rodrigo 1812","Peninsular War","Wellington sieges"],
  type: "article",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Battles", item: `${SITE.baseUrl}/battles` },
    { "@type": "ListItem", position: 3, name: "Siege of Ciudad Rodrigo", item: `${SITE.baseUrl}/battles/ciudad-rodrigo` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Siege of Ciudad Rodrigo, January 1812",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/ciudad-rodrigo`, inLanguage: "en-GB",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Siege of Ciudad Rodrigo",
  startDate: "1812-01-08",
  endDate: "1812-01-19",
  location: { "@type": "Place", name: "Ciudad Rodrigo, Spain" },
  description: "The Siege of Ciudad Rodrigo, January 1812: Wellington's twelve-day winter siege that astonished Europe and opened the northern invasion route into Spain.",
};

const content = {
  summaryLead: "The Siege of Ciudad Rodrigo, in January 1812, lasted only twelve days.",
  summaryRest: "The great fortress guarded the northern invasion route from Portugal into Spain, and its rapid capture by Wellington's army astonished Europe and opened the northern gateway for the campaigns of 1812.",
  background: "The great fortress of Ciudad Rodrigo guarded the northern invasion route from Portugal into Spain. Without it, Wellington could not safely invade.",
  fight: "British engineers rapidly opened trenches despite winter conditions. Heavy artillery battered the walls. Once practicable breaches appeared, Wellington ordered an immediate assault. The town fell after fierce street fighting.",
  significance: "The siege lasted only twelve days. Its rapid success astonished Europe and opened the northern gateway into Spain.",
};

export default function CiudadRodrigoPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={eventJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Siege of Ciudad Rodrigo</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">January 1812 &middot; The Northern Gateway into Spain</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "January 1812" },
              { label: "Location", value: "Ciudad Rodrigo, Spain" },
              { label: "Result", value: "Fortress stormed" },
              { label: "Campaign", value: "Peninsular War" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOVE-THE-FOLD SUMMARY */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif text-lg">
          <p><strong>{content.summaryLead}</strong> {content.summaryRest}</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>{content.background}</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Siege</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>{content.fight}</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Significance</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>{content.significance}</p>
          </div>
        </div>
      </section>

      {/* WHERE THIS FITS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Where This Fits in the Peninsular War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Siege of Ciudad Rodrigo was fought during the turning point of the war (1812-1813). See where it sits in the full chronology of the campaign, from the first British landings in Portugal to the final battle at Toulouse, on the complete campaign guide.</p>
        </div>
        <div className="mt-6">
          <Link href="/battles/peninsular-war#ciudad-rodrigo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            The Peninsular War Timeline &rarr;
          </Link>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[{"href":"/battles/albuera","title":"Battle of Albuera","desc":"The previous engagement of the campaign, 16 May 1811."},{"href":"/battles/badajoz","title":"Siege of Badajoz","desc":"The next engagement of the campaign, March-April 1812."},{"href":"/battles/peninsular-war","title":"The Peninsular War","desc":"The complete campaign guide, from Rolica in 1808 to Toulouse in 1814."}].map((c) => (
              <Link key={c.href} href={c.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
                <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{c.title}</div>
                <p className="text-parchment/85 font-serif text-sm">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
          <Link href="/battles/peninsular-war" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Peninsular War</Link>
        </div>
        <p className="text-[10px] text-parchment/50 text-center mt-6">Page last updated: July 2026</p>
      </section>
    </>
  );
}
