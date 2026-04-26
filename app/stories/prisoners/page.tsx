import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Prisoners of the Napoleonic Wars",
  description:
    "Capture, captivity and survival 1793-1815: prison hulks, the parole system, Dartmoor, Verdun and the experiences of Napoleonic prisoners of war.",
  path: "/stories/prisoners",
  keywords: [
    "Napoleonic prisoners of war",
    "prison hulks",
    "Dartmoor prison",
    "parole system",
    "Verdun",
    "Napoleonic captivity",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prisoners of the Napoleonic Wars: Capture, Captivity and Survival 1793-1815",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/stories/prisoners`,
  url: `${SITE.baseUrl}/stories/prisoners`,
  inLanguage: "en-GB",
};

export default function PrisonersPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/stories" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Stories
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Prisoners of the Napoleonic Wars
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            Capture, Captivity and Survival &middot; 1793&ndash;1815
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Overview</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The wars between 1793 and 1815 produced hundreds of thousands of prisoners on all sides. Capture was a common experience for soldiers and sailors of every nation, and the treatment of prisoners varied enormously depending on rank, nationality, the fortunes of war, and the resources available to the captor.
          </p>
          <p>
            At any given time during the wars, Britain held between 50,000 and 70,000 French and allied prisoners. France held smaller numbers of British prisoners, mostly naval personnel and officers captured in the Peninsular campaigns. The systems each country developed to manage these captives tell us as much about the societies themselves as about the conduct of the war.
          </p>
        </div>
      </section>

      {/* PRISON HULKS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Prison Hulks</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The most notorious aspect of British captivity was the prison hulk: decommissioned warships moored in harbours at Portsmouth, Plymouth, Chatham and elsewhere, stripped of their masts and rigging and converted into floating prisons. By 1814 there were approximately fifty hulks in service, each holding between 400 and 800 prisoners.
            </p>
            <p>
              Conditions on the hulks were grim. Prisoners were confined below decks for up to sixteen hours a day. Ventilation was poor, sanitation worse. Disease, particularly typhus and smallpox, was endemic. Mortality rates on the hulks were significantly higher than in the land-based depots. Contemporary French accounts describe the hulks as floating hells, though British authorities argued they were no worse than conditions aboard serving warships.
            </p>
            <p>
              The hulks were used primarily for rank-and-file soldiers and sailors. Officers were generally held under more favourable conditions, either on parole in designated towns or in the better-maintained land depots.
            </p>
          </div>
        </div>
      </section>

      {/* PAROLE SYSTEM */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Parole System</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Captured officers could be offered parole: they gave their word of honour not to attempt escape and in return were permitted to live in a designated British town with considerable personal freedom. They could rent lodgings, walk within a mile of the town boundary, receive money from home, and socialise with local inhabitants.
          </p>
          <p>
            Parole towns included Ashby-de-la-Zouch, Bishop&rsquo;s Waltham, Odiham, Tiverton, and many others. Some French officers married English women, taught French and fencing, or took up local trades. The arrangement was civilised by the standards of the era: officers were gentlemen, and the parole system reflected the shared aristocratic culture of the European officer class.
          </p>
          <p>
            Breaking parole was considered a profound dishonour, but it happened. Officers who broke their word and were recaptured forfeited their parole privileges and were sent to the hulks or land depots with the common soldiers. The system depended on honour, and when honour failed, the consequences were severe.
          </p>
        </div>
      </section>

      {/* DARTMOOR */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Dartmoor Prison</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Dartmoor Prison was built between 1806 and 1809 specifically to hold French prisoners of war, replacing the overcrowded hulks and temporary depots. Situated on the bleak Dartmoor plateau in Devon, it could hold approximately 6,000 prisoners.
            </p>
            <p>
              The prison was cold, damp and exposed to the Dartmoor weather, but conditions were generally better than the hulks. Prisoners could exercise in the yards, maintain small market gardens, and run an internal economy trading craft goods. French prisoners at Dartmoor produced remarkable bone ship models, carved from the bones of their meat rations, which are now prized collectibles in maritime museums.
            </p>
            <p>
              After the peace of 1814, American prisoners from the War of 1812 were also held at Dartmoor. The prison remained in use until 1816, when the last prisoners were repatriated. It was later converted into a civilian prison, which it remains today.
            </p>
          </div>
        </div>
      </section>

      {/* FRENCH PRISONERS IN BRITAIN */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">French Prisoners in Britain</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Between 1793 and 1815, Britain held a cumulative total of over 100,000 French and allied prisoners. The depot system included land-based prisons at Norman Cross (the first purpose-built POW camp in the world, opened 1797), Portchester Castle, Edinburgh Castle, and numerous smaller facilities across the country.
          </p>
          <p>
            The cost of maintaining this prisoner population was substantial. The British government spent approximately one shilling per prisoner per day on rations, a significant burden on the war budget. Prisoners could supplement their diet through work, craft, or money sent from France, but many endured genuine deprivation, particularly in the later years of the war when resources were stretched.
          </p>
        </div>
      </section>

      {/* BRITISH PRISONERS IN FRANCE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">British Prisoners in France</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              France held fewer British prisoners than Britain held French, but the experience of captivity was no less significant. The principal parole town for British officers was Verdun, where captured officers lived in relative comfort but under strict supervision. The town became a small English colony, complete with cricket matches, horse racing, and a social calendar.
            </p>
            <p>
              Napoleon&rsquo;s decision to detain all British civilians in France after the breakdown of the Peace of Amiens in 1803 was controversial. Thousands of British travellers, including women and children, were held as civilian detainees, an act that had no precedent in European warfare. Many remained in France for the duration of the wars, not returning home until 1814.
            </p>
          </div>
        </div>
      </section>

      {/* ESCAPE ATTEMPTS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Escape Attempts</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Escape was a constant preoccupation for prisoners on both sides. The most famous British escape was that of Captain Lord Cochrane (later 10th Earl of Dundonald), who was never actually a prisoner but whose adventures inspired generations of escape literature. More typical were the attempts by naval officers held at Verdun or Bitche to make their way to the coast and find a boat to England.
          </p>
          <p>
            French prisoners in Britain attempted escapes from the hulks, the depots, and from parole towns. Tunnelling was common: at Norman Cross, guards discovered multiple tunnel attempts. Some prisoners escaped by hiding in supply carts or bribing guards. The distances involved, Britain being an island, made successful escape to France extremely difficult, and most escapees were recaptured within days.
          </p>
          <p>
            The most celebrated French escape from Britain was that of General Fran&ccedil;ois Antoine Garneray, a privateer officer and painter held on the hulks at Portsmouth. His memoir, published after the wars, describes conditions on the hulks and his eventual transfer to the parole system. Whether his account is entirely reliable is debated by historians.
          </p>
        </div>
      </section>

      {/* AFTER RELEASE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">After Release</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The peace of 1814 and the final peace after Waterloo in 1815 led to the repatriation of prisoners on all sides. The process took months: tens of thousands of men had to be transported, documented, and returned to their home countries.
            </p>
            <p>
              Many prisoners returned to societies that had changed dramatically during their absence. French soldiers who had been captured early in the wars came home to find the Empire gone and the Bourbons restored. British sailors returned to a peacetime navy that had no use for most of them. Some prisoners had been held for over a decade and found themselves strangers in their own countries.
            </p>
            <p>
              The experience of captivity shaped the memoirs and literature of the post-war period. French accounts of the hulks became part of the nationalist narrative of British cruelty. British accounts of Verdun emphasised the civility of officer captivity. The truth, as with most aspects of the Napoleonic Wars, was more complicated than either side admitted.
            </p>
          </div>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Stories</Link>
          <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battles</Link>
          <Link href="/resources" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Resources</Link>
        </div>
      </section>
    </>
  );
}
