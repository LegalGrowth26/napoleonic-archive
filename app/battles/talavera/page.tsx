import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battle of Talavera (1809): Peninsular War Battle Guide",
  description:
    "The Battle of Talavera, 27-28 July 1809: brutal fighting alongside Spanish allies that earned Wellesley his title as Viscount Wellington.",
  path: "/battles/talavera",
  keywords: ["Battle of Talavera","Talavera 1809","Peninsular War","Viscount Wellington"],
  type: "article",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Battles", item: `${SITE.baseUrl}/battles` },
    { "@type": "ListItem", position: 3, name: "Battle of Talavera", item: `${SITE.baseUrl}/battles/talavera` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Battle of Talavera, 27-28 July 1809",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/talavera`, inLanguage: "en-GB",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Battle of Talavera",
  startDate: "1809-07-27",
  endDate: "1809-07-28",
  location: { "@type": "Place", name: "Talavera, Spain" },
  description: "The Battle of Talavera, 27-28 July 1809: brutal fighting alongside Spanish allies that earned Wellesley his title as Viscount Wellington.",
};

const content = {
  summaryLead: "The Battle of Talavera, fought on 27-28 July 1809, earned Sir Arthur Wellesley his title as Viscount Wellington.",
  summaryRest: "British infantry repelled Marshal Victor's repeated attacks in brutal fighting, but poor cooperation with the Spanish army and French manoeuvres forced Wellington to retreat shortly afterwards.",
  background: "Wellington advanced into Spain alongside the Spanish army under General Cuesta. Relations between the allies were poor from the outset.",
  fight: "Marshal Victor launched repeated attacks against British positions. The fighting was brutal, especially around Cerro de Medellin. British infantry again demonstrated their superiority in defensive combat.",
  significance: "Talavera earned Wellesley his Viscount Wellington title. However, lack of Spanish cooperation and French manoeuvres forced him to retreat shortly afterwards. The victory therefore produced little immediate strategic gain.",
};

export default function TalaveraPage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Battle of Talavera</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">27-28 July 1809 &middot; The Victory That Made Wellington</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "27-28 July 1809" },
              { label: "Location", value: "Talavera, Spain" },
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
          <p>The Battle of Talavera was fought at the opening of the campaign (1808-1809). See where it sits in the full chronology of the campaign, from the first British landings in Portugal to the final battle at Toulouse, on the complete campaign guide.</p>
        </div>
        <div className="mt-6">
          <Link href="/battles/peninsular-war#talavera" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            The Peninsular War Timeline &rarr;
          </Link>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[{"href":"/battles/second-oporto","title":"Second Battle of Oporto","desc":"The previous engagement of the campaign, 12 May 1809."},{"href":"/battles/busaco","title":"Battle of Busaco","desc":"The next engagement of the campaign, 27 September 1810."},{"href":"/battles/peninsular-war","title":"The Peninsular War","desc":"The complete campaign guide, from Rolica in 1808 to Toulouse in 1814."}].map((c) => (
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
