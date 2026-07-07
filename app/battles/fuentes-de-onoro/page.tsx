import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Fuentes de Onoro (1811): Peninsular War Guide",
  description:
    "The Battle of Fuentes de Onoro, 3-5 May 1811: Masséna's last attempt to relieve Almeida and the Light Division's famous withdrawal.",
  path: "/battles/fuentes-de-onoro",
  keywords: ["Battle of Fuentes de Onoro","Fuentes de Onoro 1811","Peninsular War","Light Division"],
  type: "article",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Battles", item: `${SITE.baseUrl}/battles` },
    { "@type": "ListItem", position: 3, name: "Battle of Fuentes de Onoro", item: `${SITE.baseUrl}/battles/fuentes-de-onoro` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Battle of Fuentes de Onoro, 3-5 May 1811",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/fuentes-de-onoro`, inLanguage: "en-GB",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Battle of Fuentes de Onoro",
  startDate: "1811-05-03",
  endDate: "1811-05-05",
  location: { "@type": "Place", name: "Fuentes de Onoro, Spain" },
  description: "The Battle of Fuentes de Onoro, 3-5 May 1811: Masséna's last attempt to relieve Almeida and the Light Division's famous withdrawal.",
};

const content = {
  summaryLead: "The Battle of Fuentes de Onoro, fought on 3-5 May 1811, was Marshal Masséna's final attempt to relieve the besieged fortress of Almeida.",
  summaryRest: "The village changed hands repeatedly in hard street fighting, and Wellington narrowly avoided disaster on his exposed southern flank. Masséna's failure effectively ended French hopes of recovering Portugal.",
  background: "Marshal Masséna, having finally retreated from the Lines of Torres Vedras, attempted to relieve the besieged fortress of Almeida.",
  fight: "The village of Fuentes de Onoro changed hands repeatedly through hard street fighting. On the southern flank, Wellington narrowly avoided disaster when his right wing became exposed. The famous Light Division covered a difficult withdrawal with exceptional discipline.",
  significance: "Masséna ultimately failed to relieve Almeida. French hopes of recovering Portugal effectively ended. Wellington himself later remarked that if Napoleon had been there, they would have been beaten.",
};

export default function FuentesDeOnoroPage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Fuentes de Onoro</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">3-5 May 1811 &middot; The Battle for Almeida</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "3-5 May 1811" },
              { label: "Location", value: "Fuentes de Onoro, Spain" },
              { label: "Result", value: "Allied victory" },
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
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
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
          <p>The Battle of Fuentes de Onoro was fought during the middle years of the war (1810-1811). See where it sits in the full chronology of the campaign, from the first British landings in Portugal to the final battle at Toulouse, on the complete campaign guide.</p>
        </div>
        <div className="mt-6">
          <Link href="/battles/peninsular-war#fuentes-de-onoro" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            The Peninsular War Timeline &rarr;
          </Link>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[{"href":"/battles/busaco","title":"Battle of Busaco","desc":"The previous engagement of the campaign, 27 September 1810."},{"href":"/battles/albuera","title":"Battle of Albuera","desc":"The next engagement of the campaign, 16 May 1811."},{"href":"/battles/peninsular-war","title":"The Peninsular War","desc":"The complete campaign guide, from Rolica in 1808 to Toulouse in 1814."}].map((c) => (
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
