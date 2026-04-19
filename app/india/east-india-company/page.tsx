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

      {/* 4. THE COMPANY AT ITS PEAK */}
      <section id="napoleonic-period" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>♛</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Company at Its Peak
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gold/70">
            The Napoleonic Period &middot; 1790 to 1815
          </p>
        </div>

        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            By the 1790s the East India Company had become a state within a
            state. In London, a Court of 24 Directors elected by shareholders
            governed the Company&rsquo;s affairs, while the Board of Control,
            introduced by Pitt&rsquo;s India Act of 1784, gave the British
            government oversight of political and military decisions. In India,
            the Governor-General in Calcutta was the most powerful British
            official outside London, commanding three Presidency armies
            (Bengal, Bombay and Madras) that together fielded over 200,000
            men, the vast majority of them Indian sepoys.
          </p>

          <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider !mt-10 !mb-4">
            Richard Wellesley as Governor-General (1798-1805)
          </h3>
          <p>
            Richard Wellesley, Marquess Wellesley, arrived as Governor-General
            with an aggressive policy of expansion. His instrument was the
            Subsidiary Alliance system: Indian rulers were compelled to accept
            Company troops garrisoned in their territories, paid for by the
            ruler, and commanded by Company officers. Rulers who refused were
            attacked; those who accepted became dependents. The system
            gradually absorbed independent Indian states into the Company&rsquo;s
            orbit without formal annexation.
          </p>
          <p>
            Wellesley gave his younger brother Arthur the military commands
            that would make him. In the Fourth Anglo-Mysore War of 1799,
            Arthur Wellesley fought at the{" "}
            <Link href="/battles" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
              siege of Seringapatam
            </Link>
            , where Tippu Sultan was killed and the Kingdom of Mysore was
            destroyed. In the Second Anglo-Maratha War of 1803-05, Arthur won
            the battles of Assaye, Argaum and Gawilghur, breaking the
            Mahratta Confederacy. Richard Wellesley was recalled to London in
            1805 amid controversy over the cost and aggression of his policy,
            but the territorial gains were never reversed.
          </p>

          <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider !mt-10 !mb-4">
            The Company&rsquo;s Army
          </h3>
          <p>
            The backbone of Company power was the sepoy: the Indian soldier
            recruited, trained and equipped on European lines, commanded by a
            mix of British and Indian officers. The sepoys were professional,
            disciplined and generally loyal, but the relationship was always
            unequal. Company officers (who held commissions from the Company,
            not the Crown) were paid less and promoted more slowly than
            King&rsquo;s officers, breeding resentment on both sides. Pay and
            conditions for Indian soldiers were adequate but not generous, and
            the Company&rsquo;s disregard for caste and religious sensitivities
            would, in time, contribute to the catastrophe of 1857.
          </p>

          <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider !mt-10 !mb-4">
            The Company in London
          </h3>
          <p>
            In London, the Company rebuilt East India House on Leadenhall
            Street in 1799-1800, a grand classical building that housed its
            administrative headquarters, its museum, and its vast archive. The
            Company&rsquo;s political influence was enormous: it employed the
            relatives of hundreds of MPs and funded political campaigns. Its
            most profitable trade was opium, cultivated under Company monopoly
            in Bengal and sold to China through private merchants, generating
            extraordinary profits that sustained both the Company and the
            British exchequer. The Charter Act of 1813 ended the Company&rsquo;s
            monopoly on Indian trade, opening it to all British merchants, but
            the Company retained its monopoly on the China trade (and with it
            the opium revenues) until 1833.
          </p>
        </div>
      </section>

      {/* 5. THE DARKER TRUTH */}
      <section
        id="darker-truth"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            The Darker Truth
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The Company&rsquo;s record cannot be separated from its human
              cost. The drain of wealth from India to Britain over two
              centuries was immense; the economist Utsa Patnaik has estimated
              it at $45 trillion in modern terms, though the methodology and
              figure are disputed by other historians. What is not disputed is
              that Bengal, one of the richest textile-producing regions in the
              world in 1750, was impoverished within a generation of Company
              rule. Indian weavers were forced to sell at fixed prices; British
              manufactured goods were imported duty-free; and the Bengali
              textile industry was systematically destroyed.
            </p>
            <p>
              The Bengal famine of 1770, which killed an estimated ten million
              people (approximately one third of the population), was
              exacerbated by the Company&rsquo;s insistence on collecting
              land revenue even as crops failed. Forced cultivation of indigo
              and opium displaced food crops. In its early years, the Company
              also participated in the slave trade, transporting enslaved
              people between its Asian territories. The historian William
              Dalrymple has characterised the Company as a corporate state
              that pioneered the techniques of aggressive colonial expansion.
            </p>
            <p>
              The historical debate continues. Some historians note that the
              Company also built roads, railways (in its final decades),
              codified laws, established universities, and created
              institutions that outlasted it. Others argue that these
              achievements were incidental to exploitation, and that the
              infrastructure served primarily to extract wealth more
              efficiently. An honest account must acknowledge both the scale
              of the destruction and the complexity of the legacy.
            </p>
          </div>
        </div>
      </section>

      {/* 6. THE BEGINNING OF THE END */}
      <section id="beginning-of-the-end" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          The Beginning of the End
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Charter Act of 1813 ended the Company&rsquo;s monopoly on
            Indian trade. The Charter Act of 1833 ended its China trade
            monopoly as well, leaving the Company as a purely administrative
            and military body, governing India on behalf of the Crown but no
            longer trading. It had become, in effect, a branch of the British
            state wearing a corporate mask.
          </p>
          <p>
            Resentment grew among Indian soldiers and rulers alike. Lord
            Dalhousie&rsquo;s Doctrine of Lapse (1848-56) annexed Indian
            states whose rulers died without direct heirs, regardless of
            adopted successors. The policy was legally dubious and politically
            incendiary. The final trigger was the introduction of the new
            Enfield rifle in 1857, whose cartridges were rumoured to be
            greased with cow and pig fat, offensive to both Hindu and Muslim
            sepoys who had to bite them open before loading.
          </p>
          <p>
            In 1857 the accumulated grievances of a century of Company rule
            exploded into the most serious challenge to British power in
            India. The story of the uprising and the Company&rsquo;s
            dissolution is told on a dedicated page, coming soon.
          </p>
        </div>
      </section>

      {/* 7. KEY FIGURES */}
      <section
        id="key-figures"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-12">
            Key Figures of the Company Era
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Robert Clive",
                years: "1725-1774",
                role: "Governor of Bengal",
                body: "Victor of Plassey and founder of the Company's territorial power in India. He amassed an enormous personal fortune and was investigated by Parliament for corruption. He took his own life in 1774, aged forty-nine.",
              },
              {
                name: "Warren Hastings",
                years: "1732-1818",
                role: "First Governor-General of India",
                body: "Served as Governor-General from 1773 to 1785. A capable administrator who consolidated Company rule, he was impeached by Parliament on charges of corruption and cruelty in a trial that lasted seven years. He was acquitted in 1795.",
              },
              {
                name: "Richard Wellesley",
                years: "1760-1842",
                role: "Governor-General 1798-1805",
                body: "The aggressive expansionist who doubled the Company's territory through the Subsidiary Alliance system. He gave his brother Arthur the military commands that produced Seringapatam, Assaye and Gawilghur. Recalled over the cost of his wars.",
                link: "/people",
              },
              {
                name: "Arthur Wellesley",
                years: "1769-1852",
                role: "Major-General, later Duke of Wellington",
                body: "Learned his trade in Company service in India. His victories at Assaye and Gawilghur gave him the reputation and experience he carried into the Peninsular War and Waterloo.",
                link: "/people/wellington",
              },
              {
                name: "Tippu Sultan",
                years: "1750-1799",
                role: "Sultan of Mysore",
                body: "The Company's greatest Indian opponent. He modernised his army with French advisers, used rockets against the British, and resisted Company expansion until his death at the siege of Seringapatam in 1799. Known as the Tiger of Mysore.",
              },
            ].map((f) => (
              <article key={f.name} className="card p-6 rounded-sm">
                <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-1">
                  {f.link ? (
                    <Link href={f.link} className="hover:text-gold transition">
                      {f.name}
                    </Link>
                  ) : (
                    f.name
                  )}
                </h3>
                <div className="text-xs tracking-widest text-gold/70 mb-1">
                  {f.years}
                </div>
                <div className="text-sm italic text-burgundy-bright mb-3">
                  {f.role}
                </div>
                <p className="text-parchment/95 leading-relaxed font-serif text-sm">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE COMPANY AND FICTION */}
      <section id="fiction" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>❦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Company and Fiction
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">
            Sharpe &middot; Taboo
          </p>
        </div>

        <div className="space-y-8">
          <div className="card p-8 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              Sharpe&rsquo;s India Novels
            </h3>
            <p className="text-parchment leading-relaxed font-serif mb-5">
              The first three{" "}
              <Link href="/fiction" className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                Sharpe novels
              </Link>{" "}
              are set against the Company&rsquo;s wars in India. Private
              Sharpe storms Seringapatam alongside Arthur Wellesley in Tiger,
              fights the Mahrattas at Assaye in Triumph, and takes the
              fortress of Gawilghur in Fortress. Cornwell uses the Company
              as background rather than subject, but the world Sharpe moves
              through is the Company&rsquo;s India: sepoys, Company officers,
              nabobs, and the collision of European and Indian military
              traditions.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://amzn.to/3QdRVuq" target="_blank" rel="noopener noreferrer sponsored" className="px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Tiger
              </a>
              <a href="https://amzn.to/3OjyIa9" target="_blank" rel="noopener noreferrer sponsored" className="px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Triumph
              </a>
              <a href="https://amzn.to/3QtV1dP" target="_blank" rel="noopener noreferrer sponsored" className="px-4 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Fortress
              </a>
            </div>
          </div>

          <div className="card p-8 rounded-sm">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-3">
              Taboo (BBC/FX, 2017)
            </h3>
            <p className="text-parchment leading-relaxed font-serif">
              Tom Hardy&rsquo;s television series is set in 1814 and shows the
              Company&rsquo;s London face: the boardroom of East India House,
              the political corruption, the ruthlessness with which the
              Company defended its interests. It is fiction, and takes
              considerable dramatic liberties, but it is rooted in the
              Company&rsquo;s real political power and willingness to use
              violence to protect its monopolies. Worth watching as a
              companion piece to the historical record.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FURTHER READING */}
      <section
        id="reading"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest text-center mb-10">
            Further Reading
          </h2>

          <div className="card p-8 rounded-sm max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">
              The Anarchy
            </h3>
            <div className="text-sm italic text-burgundy-bright mb-3">
              William Dalrymple, 2019
            </div>
            <p className="text-parchment/95 font-serif leading-relaxed text-sm mb-4">
              The definitive modern account of the East India Company&rsquo;s
              rise from a small London trading venture to a corporate
              sovereign ruling a subcontinent. Dalrymple draws on Indian,
              Persian and Company sources to tell the story from all sides.
              Essential reading for anyone interested in the Company era.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/resources" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
                Browse all resources &rarr;
              </Link>
              <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
                Sharpe novels
              </Link>
            </div>
            <p className="text-xs uppercase tracking-widest text-parchment/85 pt-4">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
