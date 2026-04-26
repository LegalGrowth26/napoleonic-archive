import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Richard Wellesley, Marquess Wellesley",
  description:
    "Richard Wellesley, Governor-General of India 1798-1805: the subsidiary alliance system, the destruction of Mysore, and the wars that made British India.",
  path: "/india/people/richard-wellesley",
  keywords: [
    "Richard Wellesley",
    "Marquess Wellesley",
    "Governor-General India",
    "East India Company",
    "Subsidiary Alliance",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Richard Wellesley, 1st Marquess Wellesley",
  description: "Governor-General of India 1798-1805. Architect of the subsidiary alliance system and British supremacy in India.",
  url: `${SITE.baseUrl}/india/people/richard-wellesley`,
};

export default function RichardWellesleyPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/india" className="hover:text-gold transition">
              The Napoleonic Archive &middot; India
            </Link>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Richard Wellesley
          </h1>
          <p className="text-base md:text-lg italic text-parchment font-serif">
            Marquess Wellesley &middot; 1760&ndash;1842 &middot; Governor-General of India
          </p>
          <div className="ornament my-8 text-gold/70"><span>♛</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Born", value: "20 June 1760" },
              { label: "Governor-General", value: "1798–1805" },
              { label: "Policy", value: "Subsidiary Alliance" },
              { label: "Legacy", value: "British supremacy" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BACKGROUND */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Richard Colley Wellesley, later 1st Marquess Wellesley, was the elder brother of Arthur Wellesley, the future Duke of Wellington. Born into the Anglo-Irish aristocracy, he entered politics young and rose through the ranks of the British establishment. His appointment as Governor-General of India in 1798, at the age of thirty-seven, gave him authority over the Company&rsquo;s vast territories at a moment when French revolutionary influence was spreading across the Indian Ocean.
          </p>
          <p>
            Richard was a man of grand ambition, imperial vision, and considerable political skill. Where previous Governors-General had been cautious, he was aggressive. He arrived in Calcutta determined to transform British India from a collection of trading posts into a territorial empire.
          </p>
        </div>
      </section>

      {/* 3. SUBSIDIARY ALLIANCE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Subsidiary Alliance System</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Wellesley&rsquo;s most consequential policy was the subsidiary alliance system. Under its terms, Indian rulers accepted a permanent British garrison on their territory, paid for by the ruler&rsquo;s treasury. In return, the Company provided military protection against external threats. The ruler retained nominal sovereignty but lost the ability to conduct an independent foreign policy, maintain a substantial army, or resist Company demands.
            </p>
            <p>
              In practice, the cost of maintaining Company troops drained Indian treasuries. When rulers could not pay, they ceded territory instead. The system was a mechanism for gradual absorption, transforming nominally independent states into dependencies and then into direct British possessions. It was the financial and political engine of Company expansion across India.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOURTH ANGLO-MYSORE WAR */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Fourth Anglo-Mysore War</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Richard Wellesley&rsquo;s first major military decision was to order the destruction of Tippu Sultan&rsquo;s Kingdom of Mysore before French support could arrive. Tippu had sent envoys to Mauritius seeking military assistance and had planted a Tree of Liberty in his capital. Wellesley judged that delay was dangerous: French reinforcements might arrive at any time.
          </p>
          <p>
            He gave his brother Arthur a key subordinate command in General Harris&rsquo;s army. The campaign was swift and decisive. Seringapatam fell on 4 May 1799; Tippu Sultan was killed in the fighting. The Kingdom of Mysore was dismembered: the Company absorbed the most valuable territories and installed a compliant ruler over the remainder.
          </p>
        </div>
      </section>

      {/* 5. SECOND ANGLO-MARATHA WAR */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Second Anglo-Maratha War</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The Maratha Confederacy, the dominant Indian power after the Mughal decline, was Richard Wellesley&rsquo;s next target. When negotiations collapsed in 1803, he gave Arthur command of the Deccan field force. The resulting campaign produced the battles of Assaye, Argaum and Gawilghur: the bloodiest and most formative actions of Arthur Wellesley&rsquo;s career.
            </p>
            <p>
              Richard provided the political authority; Arthur delivered the military victories. Between them, they broke the last Indian power capable of challenging Company supremacy in the subcontinent.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RECALL AND CONTROVERSY */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Recall and Controversy</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Richard Wellesley was recalled to London in 1805 amid controversy over the cost and aggression of his expansionist policy. The Company&rsquo;s directors, focused on profit margins, were alarmed by the expense of maintaining vast new territories and fighting costly wars. Parliament questioned whether the Governor-General had exceeded his authority.
          </p>
          <p>
            Wellesley defended his record vigorously, arguing that French influence in India had to be destroyed and that the subsidiary alliance system had secured British supremacy at a fraction of the cost of direct conquest. His critics were not persuaded. He never returned to India.
          </p>
        </div>
      </section>

      {/* 7. LEGACY */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Richard Wellesley transformed British India. When he arrived in 1798, the Company controlled a string of coastal territories and exercised influence through diplomacy and trade. When he left in 1805, the Company was the dominant military power on the subcontinent, with client states stretching from Mysore to Delhi.
            </p>
            <p>
              His subsidiary alliance system created the framework for eventual British dominance of the entire subcontinent. For better or worse, the India that Arthur Wellesley would leave behind in 1805, and that the British would rule for another century and a half, was substantially the creation of his elder brother&rsquo;s seven years in Calcutta.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-8">Further Reading</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
          <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington Biography</Link>
          <Link href="/india/people/wellington-in-india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington in India</Link>
        </div>
        <div className="text-center mb-6">
          <a href="https://amzn.to/4vMBAgH" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
            The Anarchy by William Dalrymple &rarr;
          </a>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
