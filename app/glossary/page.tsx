import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Napoleonic Wars Glossary",
  description: "Military terms, ranks and weapons from the Napoleonic Wars explained: from Baker Rifle to Voltigeur. Essential reading for Sharpe fans and history enthusiasts.",
  path: "/glossary",
  keywords: ["Napoleonic glossary", "military terms", "Baker Rifle", "forlorn hope", "Napoleonic ranks", "Sharpe terms"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Napoleonic Wars Glossary: Military Terms, Ranks and Weapons Explained",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/glossary`, inLanguage: "en-GB",
};

interface Term { term: string; definition: string; link?: string }

const terms: Term[] = [
  { term: "Baker Rifle", definition: "A flintlock rifle with a grooved barrel, accurate to 200-300 yards. The weapon of the 95th Rifles and the 60th. Slower to load than a musket but far more accurate, it transformed skirmishing warfare.", link: "/regiments/baker-rifle" },
  { term: "Battalion", definition: "The basic tactical unit of infantry, typically 500-1,000 men commanded by a lieutenant colonel. A regiment might have one or two battalions. Most Peninsular battles were decided by the discipline of battalion-level volleys." },
  { term: "Battalion gun", definition: "A light artillery piece, typically a 3-pounder or 6-pounder, attached directly to an infantry battalion for close fire support. Used by both British and French armies." },
  { term: "Brevet rank", definition: "An honorary promotion that gave an officer the title and precedence of a higher rank without the pay. Used to reward gallantry or long service. Sharpe holds brevet ranks at various points in the series." },
  { term: "Brigade", definition: "A formation of two to four battalions under a brigadier general. In Wellington's army, brigades were the building blocks of divisions." },
  { term: "Brown Bess", definition: "The India Pattern musket, the standard weapon of the British line infantry. A smoothbore flintlock effective to 50-75 yards. What it lacked in accuracy it made up in rate of fire: three or four volleys a minute." },
  { term: "Canister", definition: "An artillery round packed with musket balls. When fired, the balls spread in a cone like a giant shotgun blast. Devastating against infantry at close range. At Waterloo, British guns loaded with canister shredded the Imperial Guard at thirty yards." },
  { term: "Carbine", definition: "A shortened musket carried by cavalry. Less accurate and shorter-ranged than a full musket, but manageable on horseback." },
  { term: "Chosen Man", definition: "The best shots in a rifle company, selected for additional responsibilities as skirmishers. They fought in pairs and were trusted to use their initiative. Sharpe's chosen men are the core of his command.", link: "/regiments/baker-rifle" },
  { term: "Company", definition: "A sub-unit of a battalion, typically 80-100 men commanded by a captain. A battalion had ten companies including one grenadier and one light company." },
  { term: "Corporal", definition: "The lowest non-commissioned officer rank. Corporals commanded sections of approximately eight men and were responsible for day-to-day discipline." },
  { term: "Cuirassier", definition: "French heavy cavalry wearing steel breastplates (cuirasses). Their charges were among the most feared sights on a Napoleonic battlefield. At Waterloo, Ney hurled them against British squares for over an hour." },
  { term: "Division", definition: "A formation of two or more brigades with attached artillery, typically 5,000-8,000 men. Wellington's army in the Peninsula was organised into numbered divisions." },
  { term: "Eagle (French)", definition: "The gilded eagle standard carried by each French regiment, presented by Napoleon personally. Capturing an Eagle was the supreme battlefield trophy. Sharpe takes one at Talavera in Sharpe's Eagle.", link: "/fiction" },
  { term: "Ensign", definition: "The lowest commissioned officer rank in the infantry. An ensign carried the regimental colours in battle, an extremely dangerous duty. Sharpe is briefly an ensign after his battlefield commission." },
  { term: "Forlorn Hope", definition: "The first soldiers through a breach in a siege. Volunteer duty with a near-certain chance of death. Survivors were traditionally promoted. The name comes from the Dutch verloren hoop (lost troop). At Badajoz, the forlorn hope was virtually annihilated.", link: "/battles/badajoz" },
  { term: "Glacis", definition: "The sloping ground in front of a fortress wall, cleared of cover to give the defenders a clear field of fire. Wellington wept on the glacis of Badajoz at dawn after the storming." },
  { term: "Guerrilla", definition: "Irregular fighters, from the Spanish guerra (war) with the diminutive -illa (little). The word entered English from the Peninsular War. Spanish guerrillas tied down hundreds of thousands of French troops.", link: "/battles/peninsular-war" },
  { term: "Howitzer", definition: "An artillery piece that fires shells in a high arc, allowing it to hit targets behind walls or earthworks. Used extensively in siege warfare." },
  { term: "Hussar", definition: "Light cavalry used for scouting, screening and pursuit. Known for their elaborate uniforms: pelisses, sabretaches, and braided jackets. Both French and British armies fielded hussar regiments." },
  { term: "Light infantry", definition: "Infantry trained to fight in open order as skirmishers, screening the main line and picking off enemy officers. The 95th Rifles and the Light Division were elite light infantry formations.", link: "/regiments/95th-rifles" },
  { term: "Line infantry", definition: "The bulk of any Napoleonic army. Fought in rigid two-deep lines (British) or dense columns (French). Battles were decided by the firepower and discipline of the line." },
  { term: "Musket", definition: "A smoothbore, muzzle-loading flintlock. The standard weapon of line infantry on all sides. Inaccurate beyond 75 yards but devastating in volley fire at close range." },
  { term: "Officer", definition: "A commissioned leader holding the King's warrant. In the British Army, most officers purchased their commissions. Sharpe is one of the few to earn his through battlefield merit.", link: "/stories/purchase-system" },
  { term: "Picket", definition: "Sentries or small groups of soldiers posted ahead of the main army to give warning of enemy movement. Night picket duty was cold, dangerous and essential." },
  { term: "Private", definition: "The lowest rank in the army. The men who stood in the line, loaded and fired, charged with the bayonet, and died in their thousands. Sharpe begins as a private in the 33rd Foot." },
  { term: "Purchasing a commission", definition: "The system by which officers bought their rank. An ensigncy cost approximately £400; a lieutenant-colonelcy approximately £3,500. Abolished in 1871.", link: "/stories/purchase-system" },
  { term: "Redoubt", definition: "A temporary fortification, usually earthen, built to defend a position. The Raevsky Redoubt at Borodino and the fortified farms at Waterloo (Hougoumont, La Haye Sainte) are famous examples." },
  { term: "Regiment", definition: "The administrative unit of the British Army. A regiment might have one or more battalions. Officers belonged to their regiment for life and its identity was central to morale and esprit de corps." },
  { term: "Rifleman", definition: "A soldier armed with a rifle rather than a musket. Riflemen were trained as skirmishers and marksmen. The green-jacketed riflemen of the 95th and 60th were among the most effective soldiers in Wellington's army.", link: "/regiments/95th-rifles" },
  { term: "Sabre", definition: "A curved sword used by cavalry and light infantry officers. Designed for slashing from horseback. Sharpe carries a heavy cavalry sword instead, preferring its weight and reach." },
  { term: "Sergeant", definition: "A senior non-commissioned officer. Sergeants maintained discipline, trained recruits, and led sections in battle. Harper rises to Regimental Sergeant Major, the highest NCO rank." },
  { term: "Shako", definition: "The cylindrical military hat worn by most infantry of the period. The distinctive headgear of the Napoleonic soldier, varying in shape and decoration between nations and regiments." },
  { term: "Skirmisher", definition: "A soldier fighting in open order ahead of the main line, using cover and aimed fire rather than volleys. The 95th Rifles were specialist skirmishers.", link: "/regiments/95th-rifles" },
  { term: "Square (infantry)", definition: "A defensive formation where a battalion formed a hollow square with bayonets pointing outward on all sides. Properly formed, a square was almost impervious to cavalry. Breaking a square was the cavalry's ultimate achievement." },
  { term: "Subaltern", definition: "A junior officer: an ensign or lieutenant. Subalterns commanded platoons or sections and carried the colours. Mortality among subalterns was extremely high." },
  { term: "Volley", definition: "The simultaneous firing of all muskets in a line or company. British infantry volley fire, delivered at close range in a two-deep line, was the most destructive in Europe." },
  { term: "Voltigeur", definition: "French light infantry, the equivalent of British skirmishers. Voltigeurs were selected for their agility and were trained to fight in open order ahead of the main columns." },
];

const letters = Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort();

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Napoleonic Wars Glossary</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Military Terms, Ranks, and Weapons Explained</p>
        </div>
      </section>

      <nav className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="w-8 h-8 flex items-center justify-center border border-gold/30 text-gold-pale font-display text-sm hover:border-gold hover:text-gold transition">{l}</a>
          ))}
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        {letters.map((letter) => {
          const letterTerms = terms.filter((t) => t.term[0].toUpperCase() === letter);
          return (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-24 mb-10">
              <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-6 border-b border-gold/20 pb-2">{letter}</h2>
              <div className="space-y-6">
                {letterTerms.map((t) => (
                  <div key={t.term} id={`term-${t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-1">
                      {t.link ? <Link href={t.link} className="hover:text-gold transition">{t.term}</Link> : t.term}
                    </h3>
                    <p className="text-parchment leading-relaxed font-serif">{t.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battles</Link>
            <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Regiments</Link>
            <Link href="/resources" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Resources</Link>
          </div>
        </div>
      </section>
    </>
  );
}
