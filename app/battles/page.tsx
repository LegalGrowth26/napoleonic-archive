import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import BattlesContent from "@/components/BattlesContent";
import type { Battle } from "@/components/BattlesContent";
import { pageMeta, SITE, slugify } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battles of the Napoleonic Wars",
  description:
    "Napoleonic Wars battles from Seringapatam and Austerlitz to the Peninsular War and Waterloo: commanders, combatants, casualties and outcomes in one archive.",
  path: "/battles",
  keywords: [
    "Napoleonic battles",
    "Waterloo",
    "Austerlitz",
    "Peninsular War",
    "Battle of Trafalgar",
    "Battle of Borodino",
    "Battle of Leipzig",
    "Salamanca",
    "Vitoria",
    "Seringapatam",
    "Assaye",
  ],
});

const battles: Battle[] = [
  {
    name: "Seringapatam",
    date: "4 May 1799",
    location: "Kingdom of Mysore, India",
    belligerents: "Britain & East India Company vs. Kingdom of Mysore",
    commanders: "General George Harris & Colonel Arthur Wellesley vs. Tippu Sultan",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "British victory. Tippu Sultan killed.",
    outcomeType: "allied",
    casualties: "~1,400 British. Mysore defender casualties not reliably recorded.",
    summary:
      "The storming of Tippu Sultan's fortress capital. Wellesley commanded the reserves and the night attack, his only significant failure came on 5 April when his force became confused in a tope of trees in darkness. The successful assault on 4 May ended the Kingdom of Mysore. Wellesley was appointed governor of the captured city.",
    sharpe: "Sharpe's Tiger: the novel is set entirely at this siege.",
    campaign: "India",
    dedicatedPage: "/india/battles/seringapatam",
  },
  {
    name: "Assaye",
    date: "23 September 1803",
    location: "Deccan, India",
    belligerents: "Britain & East India Company vs. Maratha Confederacy",
    commanders: "Major-General Arthur Wellesley vs. Maratha forces under Scindia",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "British victory",
    outcomeType: "allied",
    casualties: "~1,584 British, nearly a quarter of the force. Two horses shot under Wellesley. Maratha casualties ~6,000 est. but not reliably documented.",
    summary:
      "Wellington called it the hardest fighting he ever saw, a verdict he maintained even after Waterloo. Outnumbered nearly six to one, Wellesley identified a ford, crossed the River Kaitna and attacked immediately. The Maratha artillery was devastating. The 74th Highlanders were almost destroyed. Victory came at terrible cost.",
    sharpe: "Sharpe's Triumph: Sharpe saves Wellesley's life here and earns his commission.",
    campaign: "India",
    dedicatedPage: "/india/battles/assaye",
  },
  {
    name: "Marengo",
    date: "14 June 1800",
    location: "Piedmont, Italy",
    belligerents: "France vs. Austria",
    commanders: "Napoleon Bonaparte vs. Michael von Melas",
    relatedPeople: ["Napoleon Bonaparte"],
    outcome: "French victory (narrow)",
    outcomeType: "french",
    casualties: "~7,000 French · ~9,500 Austrian",
    summary:
      "A day nearly lost and won back by the arrival of Desaix in the afternoon. Marengo confirmed Napoleon as First Consul and dictated terms to Austria. Desaix fell at the head of the counter-attack; Kellermann's cavalry charge shattered the Austrian column.",
    campaign: "Early Napoleonic",
  },
  {
    name: "Trafalgar",
    date: "21 October 1805",
    location: "Cape Trafalgar, off south-west Spain",
    belligerents: "Britain vs. France & Spain",
    commanders: "Vice-Admiral Horatio Nelson vs. Pierre Villeneuve",
    relatedPeople: ["Horatio Nelson"],
    outcome: "Decisive British naval victory",
    outcomeType: "allied",
    casualties: "~1,700 British · ~13,780 Franco-Spanish (incl. captured)",
    summary:
      "Nelson's two columns pierced the Franco-Spanish line at right angles; nineteen enemy ships were taken or destroyed and not one British ship was lost. Nelson, struck by a sharpshooter from the Redoutable, died below decks, securing a century of British maritime supremacy.",
    campaign: "Early Napoleonic",
    dedicatedPage: "/battles/trafalgar",
  },
  {
    name: "Austerlitz",
    date: "2 December 1805",
    location: "Moravia (modern Czech Republic)",
    belligerents: "France vs. Russia & Austria",
    commanders: "Napoleon vs. Tsar Alexander I & Emperor Francis II",
    relatedPeople: ["Napoleon Bonaparte"],
    outcome: "Crushing French victory",
    outcomeType: "french",
    casualties: "~9,000 French · ~36,000 Russo-Austrian",
    summary:
      "The Battle of the Three Emperors. Napoleon feigned weakness on his right, drew the Allies across the Pratzen Heights, then seized those heights with Soult's corps and rolled up their centre. The Holy Roman Empire would not survive the following year.",
    campaign: "Early Napoleonic",
    dedicatedPage: "/battles/austerlitz",
  },
  {
    name: "Jena–Auerstedt",
    date: "14 October 1806",
    location: "Thuringia, Prussia",
    belligerents: "France vs. Prussia",
    commanders: "Napoleon & Davout vs. Frederick William III & Brunswick",
    relatedPeople: ["Napoleon Bonaparte", "Louis-Nicolas Davout"],
    outcome: "Decisive French victory",
    outcomeType: "french",
    casualties: "~15,000 French · ~38,000 Prussian",
    summary:
      "Two battles fought the same day. Davout's single corps, outnumbered two to one, broke the main Prussian army at Auerstedt while Napoleon smashed the secondary force at Jena. The Prussian state collapsed in a fortnight.",
    campaign: "Early Napoleonic",
  },
  {
    name: "Eylau",
    date: "7–8 February 1807",
    location: "East Prussia",
    belligerents: "France vs. Russia & Prussia",
    commanders: "Napoleon vs. Levin von Bennigsen",
    relatedPeople: ["Napoleon Bonaparte", "Joachim Murat"],
    outcome: "Tactical draw; strategic French",
    outcomeType: "draw",
    casualties: "~25,000 French · ~15,000 Russian",
    summary:
      "A battle fought in driving snow. Augereau's corps lost its way in a blizzard and was annihilated by Russian guns; Murat's legendary charge of 10,700 horse saved the army. Napoleon, surveying the frozen dead, is reportedly said to have murmured: 'Quel massacre, et sans résultat.' The quote's authenticity is disputed by historians.",
    campaign: "Early Napoleonic",
  },
  {
    name: "Borodino",
    date: "7 September 1812",
    location: "Moscow province, Russia",
    belligerents: "France (Grande Armée) vs. Russia",
    commanders: "Napoleon vs. Prince Kutuzov",
    relatedPeople: ["Napoleon Bonaparte", "Mikhail Kutuzov"],
    outcome: "French tactical victory; strategic pyrrhic",
    outcomeType: "french",
    casualties: "~30,000 French · ~44,000 Russian",
    summary:
      "The bloodiest day of the Napoleonic wars. The Raevsky redoubt changed hands in mounds of dead; the Great Redoubt fell only at twilight. According to de Ségur's memoirs, Napoleon refused to commit the Guard, saying: 'I will not have it destroyed 800 leagues from France.' A week later he entered Moscow; within eight weeks, the retreat began.",
    campaign: "Early Napoleonic",
  },
  {
    name: "Leipzig",
    date: "16–19 October 1813",
    location: "Saxony",
    belligerents: "France vs. Russia, Prussia, Austria & Sweden",
    commanders: "Napoleon vs. Schwarzenberg, Blücher, Bernadotte, Bennigsen",
    relatedPeople: ["Napoleon Bonaparte", "Karl Philipp, Prince of Schwarzenberg", "Gebhard Leberecht von Blücher"],
    outcome: "Allied victory; collapse of French Germany",
    outcomeType: "allied",
    casualties: "~38,000 French · ~54,000 Allied",
    summary:
      "The Battle of the Nations. Half a million men fought over four days around the Saxon city; a premature blast destroyed the Elster bridge behind the retreating French, drowning Marshal Poniatowski. The Confederation of the Rhine collapsed; Napoleon fell back to the Rhine with a wrecked army.",
    campaign: "Early Napoleonic",
  },
  {
    name: "Vimeiro",
    date: "21 August 1808",
    location: "Portugal",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Sir Arthur Wellesley vs. Jean-Andoche Junot",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "British victory",
    outcomeType: "allied",
    casualties: "~720 British · ~2,000 French",
    summary:
      "Wellesley's first great Peninsular success. British musketry in line shredded advancing French columns on the sun-baked ridge. The subsequent Convention of Cintra, allowing the French to sail home with their loot, disgraced his seniors and left the command to Wellesley.",
    sharpe: "Sharpe's Rifles (indirectly): the 95th's Peninsular story begins here.",
    campaign: "Peninsular War",
  },
  {
    name: "Corunna",
    date: "16 January 1809",
    location: "Galicia, Spain",
    belligerents: "Britain vs. France",
    commanders: "Sir John Moore vs. Marshal Soult",
    relatedPeople: ["Sir John Moore", "Benjamin Harris"],
    outcome: "British rearguard victory; evacuation",
    outcomeType: "allied",
    casualties: "~900 British · ~2,000 French",
    summary:
      "The end of Moore's harrowing winter retreat across the Galician mountains. Moore was struck by a cannonball on the ridge above the port and died that evening, buried at midnight 'by the struggling moonbeam's misty light.' The army embarked; Moore left Iberia free for Wellesley's return.",
    sharpe: "Sharpe's Rifles: the novel opens in the retreat to Corunna.",
    campaign: "Peninsular War",
  },
  {
    name: "Talavera",
    date: "27–28 July 1809",
    location: "New Castile, Spain",
    belligerents: "Britain & Spain vs. France",
    commanders: "Wellesley vs. King Joseph & Marshal Victor",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "Allied victory",
    outcomeType: "allied",
    casualties: "~5,300 British · ~7,300 French",
    summary:
      "A bloody two-day contest in furnace heat. The 48th Foot's counter-march plugged a break in the line; the field caught fire, burning the wounded where they lay. Wellesley was created Viscount Wellington of Talavera for the victory.",
    sharpe: "Sharpe's Eagle: Sharpe takes a French colour here.",
    campaign: "Peninsular War",
  },
  {
    name: "Ciudad Rodrigo",
    date: "8–19 January 1812",
    location: "Leon, Spain",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Wellington vs. Barrié (garrison)",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington", "Robert Craufurd"],
    outcome: "Allied storm; fortress taken",
    outcomeType: "allied",
    casualties: "~1,100 British · ~530 French",
    summary:
      "A midwinter siege opened in frozen trenches. On the night of 19 January the Light and 3rd Divisions went in through two breaches; General 'Black Bob' Craufurd was mortally wounded atop the lesser breach. The storming was followed by the usual drunken sack.",
    sharpe: "Sharpe's Company: the novel culminates in the breach.",
    campaign: "Peninsular War",
  },
  {
    name: "Badajoz",
    date: "16 March – 6 April 1812",
    location: "Extremadura, Spain",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Wellington vs. Armand Philippon",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "Allied storm; fortress taken",
    outcomeType: "allied",
    casualties: "~4,800 British · ~1,800 French",
    summary:
      "The most terrible storming of the war. Forty attempts and more were thrown at the breach of the Trinidad bastion; dead Britons piled in the ditch until the Light Division could climb on their bodies. Wellington wept on the glacis at dawn. The sack that followed lasted three days.",
    sharpe: "Sharpe's Company: the storming and its aftermath.",
    campaign: "Peninsular War",
  },
  {
    name: "Salamanca",
    date: "22 July 1812",
    location: "León, Spain",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. Marshal Marmont",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington", "Don Julián Sánchez"],
    outcome: "Decisive Allied victory",
    outcomeType: "allied",
    casualties: "~5,200 Allied · ~13,000 French",
    summary:
      "'Wellington defeated forty thousand men in forty minutes.' Marmont over-extended his left across the Arapiles. By Peninsular tradition (reported in the memoirs of General Alava, and widely repeated since), Wellington flung down a chicken bone with 'By God, that will do!' and spurred off to Pakenham's 3rd Division, which rolled the French line from flank to centre.",
    sharpe: "Sharpe's Sword: the campaign of the French sword-master Leroux.",
    campaign: "Peninsular War",
    dedicatedPage: "/battles/salamanca",
  },
  {
    name: "Vitoria",
    date: "21 June 1813",
    location: "Basque country, Spain",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. King Joseph & Marshal Jourdan",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "Decisive Allied victory",
    outcomeType: "allied",
    casualties: "~5,100 Allied · ~8,000 French (plus baggage)",
    summary:
      "The battle that lost Joseph his kingdom. The French army disintegrated among its own baggage train: carriages of plundered silver, paintings and mistresses clogged the road east. Wellington's Marshal's baton, awarded for the day, came from a captured French coach.",
    sharpe: "Sharpe's Honour: Sharpe dies (officially) on the day of victory.",
    campaign: "Peninsular War",
  },
  {
    name: "Toulouse",
    date: "10 April 1814",
    location: "Languedoc, France",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. Marshal Soult",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington"],
    outcome: "Tactical draw; strategic Allied",
    outcomeType: "draw",
    casualties: "~4,600 Allied · ~3,200 French",
    summary:
      "Fought four days after Napoleon's abdication, although the news had not reached the armies. The Peninsular veterans' final battle; Highlanders climbed the Calvinet heights under sleet. Soult withdrew the next night, and couriers at last confirmed the Empire was over.",
    sharpe: "Sharpe's Regiment / Revenge: the closing Peninsular chapters.",
    campaign: "Peninsular War",
  },
  {
    name: "Quatre Bras",
    date: "16 June 1815",
    location: "Brabant, Netherlands (Belgium)",
    belligerents: "Britain, Netherlands & Brunswick vs. France",
    commanders: "Wellington vs. Marshal Ney",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington", "Michel Ney"],
    outcome: "Tactical Allied (holding)",
    outcomeType: "draw",
    casualties: "~4,800 Allied · ~4,000 French",
    summary:
      "A meeting engagement at a crossroads, fought in fields of head-high rye. Ney failed to seize the junction before Wellington could concentrate; the Black Watch and Brunswickers held squares against cuirassiers. The Duke of Brunswick fell leading his black-clad hussars.",
    campaign: "Hundred Days",
  },
  {
    name: "Ligny",
    date: "16 June 1815",
    location: "Namur, Netherlands (Belgium)",
    belligerents: "France vs. Prussia",
    commanders: "Napoleon vs. Prince Blücher",
    relatedPeople: ["Napoleon Bonaparte", "Gebhard Leberecht von Blücher"],
    outcome: "French victory (incomplete)",
    outcomeType: "french",
    casualties: "~12,400 French · ~16,000 Prussian",
    summary:
      "Napoleon's last victory. The Prussian centre broke at evening when the Old Guard stormed Ligny village; old Blücher was ridden over in a cavalry mêlée. But the Prussians withdrew northward in good order, towards Wavre, and Waterloo.",
    campaign: "Hundred Days",
  },
  {
    name: "Waterloo",
    date: "18 June 1815",
    location: "Brabant (near Brussels)",
    dedicatedPage: "/battles/waterloo",
    belligerents: "Britain, Netherlands, Hanover, Brunswick & Prussia vs. France",
    commanders: "Wellington & Blücher vs. Napoleon",
    relatedPeople: ["Arthur Wellesley, Duke of Wellington", "Napoleon Bonaparte", "Gebhard Leberecht von Blücher", "Michel Ney", "Thomas Picton", "Pierre Cambronne"],
    outcome: "Decisive Allied victory; end of the Empire",
    outcomeType: "allied",
    casualties: "~25,000 French · ~24,000 Allied",
    summary:
      "Nine hours of slaughter on a two-mile front. Hougoumont held; La Haye Sainte fell only at dusk; Ney's unsupported cavalry broke on British squares for an hour. The Prussians struck Plancenoit in the afternoon; at 7:30 the Imperial Guard advanced up the ridge, and were broken by the 52nd Light and the Guards. 'La Garde recule.' The Empire was finished.",
    sharpe: "Sharpe's Waterloo: Sharpe, now a Lt Colonel, rides the ridge.",
    campaign: "Hundred Days",
    flagship: true,
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Battles of the Napoleonic Wars",
  description:
    "Key battles of the Napoleonic Wars (1799–1815), from Seringapatam to Waterloo.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: battles.length,
  itemListElement: battles.map((b, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Article",
      headline: `Battle of ${b.name}, ${b.date}`,
      name: b.name,
      about: b.belligerents,
      description: b.summary,
      url: `${SITE.baseUrl}/battles#battle-${slugify(b.name)}`,
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebPage",
        url: `${SITE.baseUrl}/battles`,
        name: "Battles of the Napoleonic Wars",
      },
      publisher: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.baseUrl,
      },
    },
  })),
};

const relatedPages = [
  {
    href: "/people",
    title: "People",
    note: "Commanders and memoirists who fought in these battles.",
  },
  {
    href: "/regiments",
    title: "Regiments",
    note: "The 95th Rifles, Old Guard, K.G.L. and the units who decided the day.",
  },
  {
    href: "/stories",
    title: "Stories",
    note: "Eyewitness accounts of Corunna, Badajoz, Waterloo and more.",
  },
  {
    href: "/fiction",
    title: "Sharpe novels",
    note: "Bernard Cornwell's novels set against the battles above.",
  },
];

export default function BattlesPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <div id="top">
        <PageHeader
          eyebrow="1799 to 1815"
          title="Battles"
          lede="Powder-smoke, square and column, the squeal of grape-shot: here are the engagements that made and unmade an empire."
        />
      </div>

      <BattlesContent battles={battles} />

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <aside className="pt-10 border-t border-gold/20">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest section-title mb-6">
            Related
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card p-5 rounded-sm block"
              >
                <div className="font-display text-gold-pale uppercase tracking-wider mb-2">
                  {r.title}
                </div>
                <p className="text-sm text-parchment/95 font-serif leading-relaxed">
                  {r.note}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
