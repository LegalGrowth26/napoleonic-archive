import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The East India Company",
  description:
    "The complete history of the East India Company: its founding in 1600, its rise to power, its role in the Napoleonic period, its opium trade, and its eventual dissolution after 1857.",
  path: "/india/east-india-company",
  keywords: [
    "East India Company",
    "EIC history",
    "British India",
    "Battle of Plassey",
    "Robert Clive",
    "Richard Wellesley",
    "Napoleonic India",
    "Company rule India",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The East India Company: History, Power and Legacy",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/india/east-india-company`,
  url: `${SITE.baseUrl}/india/east-india-company`,
  inLanguage: "en-GB",
};

export default function EastIndiaCompanyPage() {
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
            <Link href="/india" className="hover:text-gold transition">
              The Napoleonic Archive &middot; India
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The East India Company
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            Founded 1600 &middot; Dissolved 1858 &middot; The company that
            became an empire
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>◈</span>
          </div>
          <p className="text-parchment font-serif max-w-3xl mx-auto text-lg leading-relaxed">
            For 258 years, a London trading company governed a subcontinent,
            fought wars, collected taxes, grew opium, and made and unmade
            kings. No commercial organisation in history has wielded
            comparable power.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDING */}
      <section id="founding" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Founding
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            On 31 December 1600, Queen Elizabeth I granted a Royal Charter to
            &ldquo;The Governor and Company of Merchants of London Trading
            into the East-Indies.&rdquo; The original subscribers were London
            merchants seeking to break the Dutch monopoly on the spice trade.
            The first Governor was Sir Thomas Smythe, a veteran of the Levant
            Company, and the initial capital was modest by later standards.
          </p>
          <p>
            The Company&rsquo;s early years were focused on spices: pepper,
            nutmeg, cloves and mace from the Indonesian archipelago and the
            coasts of India. Its headquarters were modest offices in the City
            of London. It competed fiercely with the Dutch VOC (Vereenigde
            Oostindische Compagnie) and was initially outmuscled in the Spice
            Islands, particularly after the Amboyna massacre of 1623, which
            pushed it away from Indonesia and towards India instead. This
            near-failure turned out to be the making of the Company.
          </p>
        </div>
      </section>

      {/* 3. THE RISE */}
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
              The Company shifted from trade to territory in stages. It
              established its first permanent trading posts, known as
              factories, at Surat in 1613, Madras (Fort St George) in 1639,
              Bombay in 1668 (received as part of the dowry of Catherine of
              Braganza), and Calcutta (Fort William) in 1690. For over a
              century it operated as a commercial enterprise within the
              framework of the Mughal Empire, paying duties and negotiating
              privileges.
            </p>
            <p>
              The Mughal Empire&rsquo;s decline in the early eighteenth
              century, accelerated by the Persian invasion of 1739 and the
              Afghan raids that followed, created a power vacuum across the
              subcontinent. Regional rulers emerged, fought each other, and
              sought European military support. The Company, with its
              disciplined sepoy armies and access to European weapons and
              tactics, was ideally placed to exploit the chaos.
            </p>
            <p>
              The turning point was the Battle of Plassey on 23 June 1757.
              Robert Clive, with roughly 3,000 troops (of whom 2,100 were
              Indian sepoys), defeated the Nawab of Bengal, Siraj ud-Daulah,
              whose army numbered perhaps 50,000. The victory was achieved
              less by fighting than by bribery and conspiracy: Clive had
              suborned the Nawab&rsquo;s general, Mir Jafar, who held his
              forces back. By 1765 the Company had acquired the Diwani of
              Bengal: the right to collect revenue from one of the richest
              provinces in Asia. The transformation from merchant to ruler
              had begun.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 4-9 follow in subsequent updates */}
    </>
  );
}
