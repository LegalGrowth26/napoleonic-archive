import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battles · The Napoleonic Archive",
  description:
    "Key battles of the Napoleonic Wars: Austerlitz, Trafalgar, Borodino, Salamanca, Leipzig, Waterloo and more.",
};

interface Battle {
  name: string;
  date: string;
  location: string;
  belligerents: string;
  commanders: string;
  outcome: string;
  casualties: string;
  summary: string;
  sharpe?: string;
}

const battles: Battle[] = [
  {
    name: "Marengo",
    date: "14 June 1800",
    location: "Piedmont, Italy",
    belligerents: "France vs. Austria",
    commanders: "Napoleon Bonaparte vs. Michael von Melas",
    outcome: "French victory (narrow)",
    casualties: "≈ 7,000 French · ≈ 9,500 Austrian",
    summary:
      "A day nearly lost and won back by the arrival of Desaix in the afternoon. Marengo confirmed Napoleon as First Consul and dictated terms to Austria. Desaix fell at the head of the counter-attack; Kellermann's cavalry charge shattered the Austrian column.",
  },
  {
    name: "Trafalgar",
    date: "21 October 1805",
    location: "Cape Trafalgar, off south-west Spain",
    belligerents: "Britain vs. France & Spain",
    commanders: "Vice-Admiral Horatio Nelson vs. Pierre Villeneuve",
    outcome: "Decisive British naval victory",
    casualties: "≈ 1,700 British · ≈ 13,780 Franco-Spanish (incl. captured)",
    summary:
      "Nelson's two columns pierced the Franco-Spanish line at right angles; nineteen enemy ships were taken or destroyed and not one British ship was lost. Nelson, struck by a sharpshooter from the Redoutable, died below decks, securing a century of British maritime supremacy.",
  },
  {
    name: "Austerlitz",
    date: "2 December 1805",
    location: "Moravia (modern Czech Republic)",
    belligerents: "France vs. Russia & Austria",
    commanders: "Napoleon vs. Tsar Alexander I & Emperor Francis II",
    outcome: "Crushing French victory",
    casualties: "≈ 9,000 French · ≈ 36,000 Russo-Austrian",
    summary:
      "The Battle of the Three Emperors. Napoleon feigned weakness on his right, drew the Allies across the Pratzen Heights, then seized those heights with Soult's corps and rolled up their centre. The Holy Roman Empire would not survive the following year.",
  },
  {
    name: "Jena–Auerstedt",
    date: "14 October 1806",
    location: "Thuringia, Prussia",
    belligerents: "France vs. Prussia",
    commanders: "Napoleon & Davout vs. Frederick William III & Brunswick",
    outcome: "Decisive French victory",
    casualties: "≈ 15,000 French · ≈ 38,000 Prussian",
    summary:
      "Two battles fought the same day. Davout's single corps, outnumbered two to one, broke the main Prussian army at Auerstedt while Napoleon smashed the secondary force at Jena. The Prussian state collapsed in a fortnight.",
  },
  {
    name: "Eylau",
    date: "7–8 February 1807",
    location: "East Prussia",
    belligerents: "France vs. Russia & Prussia",
    commanders: "Napoleon vs. Levin von Bennigsen",
    outcome: "Tactical draw; strategic French",
    casualties: "≈ 25,000 French · ≈ 15,000 Russian",
    summary:
      "A battle fought in driving snow. Augereau's corps lost its way in a blizzard and was annihilated by Russian guns; Murat's legendary charge of 10,700 horse saved the army. Napoleon, surveying the frozen dead, is said to have murmured: 'Quel massacre, et sans résultat.'",
  },
  {
    name: "Vimeiro",
    date: "21 August 1808",
    location: "Portugal",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Sir Arthur Wellesley vs. Jean-Andoche Junot",
    outcome: "British victory",
    casualties: "≈ 720 British · ≈ 2,000 French",
    summary:
      "Wellesley's first great Peninsular success. British musketry in line shredded advancing French columns on the sun-baked ridge. The subsequent Convention of Cintra, allowing the French to sail home with their loot, disgraced his seniors and left the command to Wellesley.",
    sharpe:
      "Sharpe's Rifles (indirectly): the 95th's Peninsular story begins here.",
  },
  {
    name: "Corunna",
    date: "16 January 1809",
    location: "Galicia, Spain",
    belligerents: "Britain vs. France",
    commanders: "Sir John Moore vs. Marshal Soult",
    outcome: "British rearguard victory; evacuation",
    casualties: "≈ 900 British · ≈ 2,000 French",
    summary:
      "The end of Moore's harrowing winter retreat across the Galician mountains. Moore was struck by a cannonball on the ridge above the port and died that evening, buried at midnight 'by the struggling moonbeam's misty light.' The army embarked; Moore left Iberia free for Wellesley's return.",
    sharpe: "Sharpe's Rifles: the novel opens in the retreat to Corunna.",
  },
  {
    name: "Talavera",
    date: "27–28 July 1809",
    location: "New Castile, Spain",
    belligerents: "Britain & Spain vs. France",
    commanders: "Wellesley vs. King Joseph & Marshal Victor",
    outcome: "Allied victory",
    casualties: "≈ 5,300 British · ≈ 7,300 French",
    summary:
      "A bloody two-day contest in furnace heat. The 48th Foot's counter-march plugged a break in the line; the field caught fire, burning the wounded where they lay. Wellesley was created Viscount Wellington of Talavera for the victory.",
    sharpe: "Sharpe's Eagle: Sharpe takes a French colour here.",
  },
  {
    name: "Ciudad Rodrigo",
    date: "8–19 January 1812",
    location: "Leon, Spain",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Wellington vs. Barrié (garrison)",
    outcome: "Allied storm; fortress taken",
    casualties: "≈ 1,100 British · ≈ 530 French",
    summary:
      "A midwinter siege opened in frozen trenches. On the night of 19 January the Light and 3rd Divisions went in through two breaches; General 'Black Bob' Craufurd was mortally wounded atop the lesser breach. The storming was followed by the usual drunken sack.",
    sharpe: "Sharpe's Company: the novel culminates in the breach.",
  },
  {
    name: "Badajoz",
    date: "16 March – 6 April 1812",
    location: "Extremadura, Spain",
    belligerents: "Britain & Portugal vs. France",
    commanders: "Wellington vs. Armand Philippon",
    outcome: "Allied storm; fortress taken",
    casualties: "≈ 4,800 British · ≈ 1,800 French",
    summary:
      "The most terrible storming of the war. Forty attempts and more were thrown at the breach of the Trinidad bastion; dead Britons piled in the ditch until the Light Division could climb on their bodies. Wellington wept on the glacis at dawn. The sack that followed lasted three days.",
    sharpe: "Sharpe's Company: the storming and its aftermath.",
  },
  {
    name: "Salamanca",
    date: "22 July 1812",
    location: "León, Spain",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. Marshal Marmont",
    outcome: "Decisive Allied victory",
    casualties: "≈ 5,200 Allied · ≈ 13,000 French",
    summary:
      "'Wellington defeated forty thousand men in forty minutes.' Marmont over-extended his left across the Arapiles; Wellington, eating a chicken leg, flung down the bone: 'By God, that will do!' Pakenham's 3rd Division rolled the French line from flank to centre.",
    sharpe: "Sharpe's Sword: the campaign of the French sword-master Leroux.",
  },
  {
    name: "Borodino",
    date: "7 September 1812",
    location: "Moscow province, Russia",
    belligerents: "France (Grande Armée) vs. Russia",
    commanders: "Napoleon vs. Prince Kutuzov",
    outcome: "French tactical victory; strategic pyrrhic",
    casualties: "≈ 30,000 French · ≈ 44,000 Russian",
    summary:
      "The bloodiest day of the Napoleonic wars. The Raevsky redoubt changed hands in mounds of dead; the Great Redoubt fell only at twilight. Napoleon refused to commit the Guard, saying, 'I will not have it destroyed 800 leagues from France.' A week later he entered Moscow; within eight weeks, the retreat began.",
  },
  {
    name: "Vitoria",
    date: "21 June 1813",
    location: "Basque country, Spain",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. King Joseph & Marshal Jourdan",
    outcome: "Decisive Allied victory",
    casualties: "≈ 5,100 Allied · ≈ 8,000 French (plus baggage)",
    summary:
      "The battle that lost Joseph his kingdom. The French army disintegrated among its own baggage train: carriages of plundered silver, paintings and mistresses clogged the road east. Wellington's Marshal's baton, awarded for the day, came from a captured French coach.",
    sharpe: "Sharpe's Honour: Sharpe dies (officially) on the day of victory.",
  },
  {
    name: "Leipzig",
    date: "16–19 October 1813",
    location: "Saxony",
    belligerents: "France vs. Russia, Prussia, Austria & Sweden",
    commanders: "Napoleon vs. Schwarzenberg, Blücher, Bernadotte, Bennigsen",
    outcome: "Allied victory; collapse of French Germany",
    casualties: "≈ 38,000 French · ≈ 54,000 Allied",
    summary:
      "The Battle of the Nations. Half a million men fought over four days around the Saxon city; a premature blast destroyed the Elster bridge behind the retreating French, drowning Marshal Poniatowski. The Confederation of the Rhine collapsed; Napoleon fell back to the Rhine with a wrecked army.",
  },
  {
    name: "Toulouse",
    date: "10 April 1814",
    location: "Languedoc, France",
    belligerents: "Britain, Portugal & Spain vs. France",
    commanders: "Wellington vs. Marshal Soult",
    outcome: "Tactical draw; strategic Allied",
    casualties: "≈ 4,600 Allied · ≈ 3,200 French",
    summary:
      "Fought four days after Napoleon's abdication, although the news had not reached the armies. The Peninsular veterans' final battle; Highlanders climbed the Calvinet heights under sleet. Soult withdrew the next night, and couriers at last confirmed the Empire was over.",
    sharpe: "Sharpe's Regiment / Revenge: the closing Peninsular chapters.",
  },
  {
    name: "Quatre Bras",
    date: "16 June 1815",
    location: "Brabant, Netherlands (Belgium)",
    belligerents: "Britain, Netherlands & Brunswick vs. France",
    commanders: "Wellington vs. Marshal Ney",
    outcome: "Tactical Allied (holding)",
    casualties: "≈ 4,800 Allied · ≈ 4,000 French",
    summary:
      "A meeting engagement at a crossroads, fought in fields of head-high rye. Ney failed to seize the junction before Wellington could concentrate; the Black Watch and Brunswickers held squares against cuirassiers. The Duke of Brunswick fell leading his black-clad hussars.",
  },
  {
    name: "Ligny",
    date: "16 June 1815",
    location: "Namur, Netherlands (Belgium)",
    belligerents: "France vs. Prussia",
    commanders: "Napoleon vs. Prince Blücher",
    outcome: "French victory (incomplete)",
    casualties: "≈ 12,400 French · ≈ 16,000 Prussian",
    summary:
      "Napoleon's last victory. The Prussian centre broke at evening when the Old Guard stormed Ligny village; old Blücher was ridden over in a cavalry mêlée. But the Prussians withdrew northward in good order, towards Wavre, and Waterloo.",
  },
  {
    name: "Waterloo",
    date: "18 June 1815",
    location: "Brabant (near Brussels)",
    belligerents:
      "Britain, Netherlands, Hanover, Brunswick & Prussia vs. France",
    commanders: "Wellington & Blücher vs. Napoleon",
    outcome: "Decisive Allied victory; end of the Empire",
    casualties: "≈ 25,000 French · ≈ 24,000 Allied",
    summary:
      "Nine hours of slaughter on a two-mile front. Hougoumont held; La Haye Sainte fell only at dusk; Ney's unsupported cavalry broke on British squares for an hour. The Prussians struck Plancenoit in the afternoon; at 7:30 the Imperial Guard advanced up the ridge, and were broken by the 52nd Light and the Guards. 'La Garde recule.' The Empire was finished.",
    sharpe: "Sharpe's Waterloo: Sharpe, now a Lt Colonel, rides the ridge.",
  },
];

export default function BattlesPage() {
  return (
    <>
      <PageHeader
        eyebrow="1800 to 1815"
        title="Battles"
        lede="Powder-smoke, square and column, the squeal of grape-shot: here are the engagements that made and unmade an empire."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {battles.map((b) => (
            <article
              key={b.name}
              className="card p-8 rounded-sm relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <h2 className="font-display text-3xl text-gold-pale uppercase tracking-wider">
                  {b.name}
                </h2>
                <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                  {b.date}
                </div>
              </div>

              <div className="mb-5 inline-flex items-center gap-3 px-4 py-2 border border-burgundy-light/50 bg-burgundy-deep/40 rounded-sm">
                <span className="text-burgundy-light font-display text-sm">
                  ⚔
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-gold/70">
                  Combatants
                </span>
                <span className="text-parchment font-serif">
                  {b.belligerents}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-parchment/95 mb-5 font-serif">
                <div>
                  <span className="text-gold/70 uppercase text-xs tracking-widest">
                    Location ·{" "}
                  </span>
                  {b.location}
                </div>
                <div>
                  <span className="text-gold/70 uppercase text-xs tracking-widest">
                    Commanders ·{" "}
                  </span>
                  {b.commanders}
                </div>
                <div>
                  <span className="text-gold/70 uppercase text-xs tracking-widest">
                    Outcome ·{" "}
                  </span>
                  <span className="text-gold-pale">{b.outcome}</span>
                </div>
                <div>
                  <span className="text-gold/70 uppercase text-xs tracking-widest">
                    Casualties ·{" "}
                  </span>
                  {b.casualties}
                </div>
              </div>

              <p className="text-parchment leading-relaxed text-lg font-serif">
                {b.summary}
              </p>

              {b.sharpe && (
                <div className="mt-5 pt-5 border-t border-gold/15 flex items-start gap-3">
                  <span className="text-burgundy-light font-display text-lg">
                    ❦
                  </span>
                  <p className="text-sm italic text-parchment/95">
                    <span className="text-gold-pale uppercase text-xs tracking-widest not-italic">
                      In Sharpe ·{" "}
                    </span>
                    {b.sharpe}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
