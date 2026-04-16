import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regiments · The Napoleonic Archive",
  description:
    "Famous regiments of the Napoleonic era: the 95th Rifles, Imperial Guard, Highland regiments, and the men who marched behind them.",
};

interface Regiment {
  name: string;
  nickname?: string;
  nation: string;
  type: string;
  raised: string;
  facings?: string;
  motto?: string;
  battles: string;
  body: string;
}

const regiments: Regiment[] = [
  {
    name: "95th (Rifle) Regiment of Foot",
    nickname: "The Grasshoppers · The Sweeps",
    nation: "Great Britain",
    type: "Rifle · Light Infantry",
    raised: "1800 (as Experimental Corps of Riflemen)",
    facings: "Green jackets, black facings, white piping",
    motto: "Celer et Audax (Swift and Bold)",
    battles: "Copenhagen · Corunna · Busaco · Ciudad Rodrigo · Badajoz · Salamanca · Vitoria · Waterloo",
    body:
      "The first regiment in British service clothed in rifle-green, armed with the Baker, a grooved, slow-loading weapon accurate to three hundred yards. They scouted for the Light Division and skirmished in pairs, the 'Chosen Men' of every company. Sergeant Richard Sharpe's home, in fiction. In fact they marched from the snows of Galicia to the mud of Mont-Saint-Jean and back, and scarcely lost an action.",
  },
  {
    name: "Garde Impériale, Vieille Garde",
    nickname: "Les Grognards (The Grumblers)",
    nation: "French Empire",
    type: "Élite Infantry / Cavalry Corps",
    raised: "1804 (from the Consular Guard, 1799)",
    facings: "Blue coat, white facings, bearskin bonnet",
    motto: "La Garde meurt, elle ne se rend pas",
    battles: "Austerlitz · Friedland · Wagram · Borodino · Leipzig · Waterloo",
    body:
      "Every man a veteran of ten campaigns; a moustache and two earrings a matter of right. Napoleon's last reserve, seldom committed. They grumbled in his face and worshipped him behind his back. At Waterloo six battalions advanced up the ridge of Mont-Saint-Jean in the twilight; they were broken by the 52nd Light and the Guards, and the Empire went with them.",
  },
  {
    name: "Royal Horse Guards",
    nickname: "The Blues",
    nation: "Great Britain",
    type: "Heavy Cavalry · Household",
    raised: "1650 (as the Earl of Oxford's Regiment)",
    facings: "Blue coat, red facings, gold lace",
    motto: "Honi soit qui mal y pense",
    battles: "Villers-en-Cauchies · Willems · Waterloo",
    body:
      "One of the three Household regiments, who together with the Life Guards formed the Household Brigade at Waterloo. Their charge down the slope against d'Erlon's I Corps, alongside the Scots Greys of the Union Brigade, was one of the great moments of the day, and then, unsupported, they were slaughtered by Milhaud's cuirassiers in the hollow beyond.",
  },
  {
    name: "42nd (Royal Highland) Regiment of Foot",
    nickname: "The Black Watch",
    nation: "Great Britain (Scotland)",
    type: "Line Infantry · Highland",
    raised: "1739 (as independent companies from 1725)",
    facings: "Government Sett kilt · blue facings on scarlet",
    motto: "Nemo me impune lacessit",
    battles: "Alexandria · Corunna · Burgos · Quatre Bras · Waterloo",
    body:
      "Black tartan against red coat, bagpipes on the march. At Quatre Bras they formed square in a field of head-high rye and broke a French lancer charge that killed half their officers. The regimental memory of Waterloo: the piper Kenneth Mackay pacing outside the square, playing 'Cogadh no Sith', meaning War or Peace.",
  },
  {
    name: "1st Regiment of Foot Guards",
    nickname: "The Gentlemen's Sons",
    nation: "Great Britain",
    type: "Foot Guards · Household",
    raised: "1656",
    facings: "Scarlet, blue facings, gold lace",
    motto: "Honi soit qui mal y pense",
    battles: "Talavera · Barrosa · Nivelle · Waterloo",
    body:
      "It was they who received the last charge of the Imperial Guard at Waterloo. Maitland's brigade, lying down behind the crest, rose to a volley at thirty yards and went in with the bayonet. For that action Queen Victoria renamed them the Grenadier Guards, on the regimental myth that they had destroyed the French Grenadiers of the Guard.",
  },
  {
    name: "The Cuirassiers",
    nickname: "Les Gros Frères (The Big Brothers)",
    nation: "French Empire",
    type: "Heavy Cavalry",
    raised: "An VI (1798) · reorganised 1802–03",
    facings: "Steel breastplate and helmet, blue coat, red facings",
    battles: "Austerlitz · Eylau · Borodino · Waterloo",
    body:
      "Six feet on a seventeen-hand horse, in three stone of steel. Their armour would turn a spent musket-ball. At Waterloo Ney launched them, again and again, unsupported by infantry, against Wellington's squares; they could neither break nor ride round, and in two hours they destroyed themselves. 'The finest sight of my life,' said an English officer afterwards.",
  },
  {
    name: "1st Regiment of Hussars (Paris)",
    nickname: "Bercheny's Hussars",
    nation: "French Empire (originally Hungarian)",
    type: "Light Cavalry",
    raised: "1720",
    facings: "Sky-blue dolman, red pelisse, fur shako",
    battles: "Marengo · Austerlitz · Eylau · Friedland · Wagram",
    body:
      "The oldest hussar regiment in French service. Dolmans braided, pelisses slung, shakos with a horsehair plume: they scouted, raided, drank, duelled and, when the moment came, charged. Lasalle of this school declared: 'Any hussar who is not dead by thirty is a blackguard.' He died at thirty-four, at Wagram.",
  },
  {
    name: "The Old Guard Chasseurs à Cheval",
    nickname: "The Invincibles",
    nation: "French Empire",
    type: "Élite Light Cavalry · Imperial Guard",
    raised: "1800 (as Consular Guard squadron)",
    facings: "Green dolman, red pelisse, bearskin colpack",
    battles: "Marengo · Austerlitz · Eylau · Wagram · Borodino · Waterloo",
    body:
      "Napoleon's personal escort. He wore their green coat in preference to any other uniform, and on St Helena he still kept one. In the retreat from Moscow they formed the final cordon of cavalry around the Emperor's sleigh, riding skeletons on skeletal horses. Not many returned.",
  },
  {
    name: "33rd (1st Yorkshire West Riding) Regiment",
    nickname: "The Havercake Lads",
    nation: "Great Britain",
    type: "Line Infantry",
    raised: "1702",
    facings: "Scarlet coat, red facings, silver lace",
    battles: "Seringapatam · Assaye · Waterloo",
    body:
      "Arthur Wesley's first command as a lieutenant-colonel in 1793. He fought his apprenticeship in India at their head, at Seringapatam and Assaye. In fiction, it is the 33rd from which Sergeant Richard Sharpe is plucked for a commission. In fact, the regiment gave the British army its greatest commander, and took the name 'The Duke of Wellington's' in 1853.",
  },
  {
    name: "Pavlov Grenadier Regiment",
    nickname: "The Broken-Mitre Grenadiers",
    nation: "Russia",
    type: "Grenadier Infantry · Guard",
    raised: "1796",
    facings: "Dark green coat, red facings, brass-fronted mitre cap",
    battles: "Friedland · Borodino · Leipzig · Paris 1814",
    body:
      "After their slaughter at Friedland in 1807, Tsar Alexander decreed that they would continue to wear the old-pattern grenadier mitre, bullet-pierced, dented, unrepaired, as their battle-honour. No other regiment in Europe dressed like them. They carried those battered brass caps into Paris in 1814.",
  },
  {
    name: "Brunswick 'Death's Head' Hussars",
    nickname: "The Black Brunswickers",
    nation: "Duchy of Brunswick (Allied)",
    type: "Light Cavalry",
    raised: "1809 by the 'Black Duke'",
    facings: "Black dolman, black pelisse, skull-and-crossbones shako",
    motto: "Nunquam retrorsum (Never Backwards)",
    battles: "Halberstadt 1809 · Peninsula · Quatre Bras · Waterloo",
    body:
      "Duke Frederick William of Brunswick raised his 'Black Horde' in mourning for his father, killed at Auerstedt. They dressed in black from shako to boots with a silver skull. At Quatre Bras the Duke himself was shot from his saddle. His sixteen-year-old pageboy, who became Queen Victoria's consort-in-law, was close by.",
  },
  {
    name: "King's German Legion",
    nickname: "The K.G.L.",
    nation: "Hanover (in British service)",
    type: "Combined Arms: Infantry, Cavalry, Artillery",
    raised: "1803 (from the disbanded Hanoverian army)",
    facings: "British pattern · distinctive KGL shoulder-strap",
    battles: "Copenhagen · Talavera · Albuera · Salamanca · Waterloo",
    body:
      "German exiles who fought under the British colours from 1803 to 1816. Their light battalions, under Baring, held La Haye Sainte at Waterloo all afternoon with Baker rifles, until their ammunition ran out and French engineers broke the door. Wellington said afterwards: 'I never saw steadier troops.' Few compliments were higher.",
  },
];

export default function RegimentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Colours & Facings"
        title="Regiments"
        lede="Green jackets and red coats, cuirasses and bearskins: the units whose numbers, honours and dead made the period."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {regiments.map((r) => (
            <article key={r.name} className="card p-7 rounded-sm">
              <div className="mb-4">
                <h2 className="font-display text-2xl text-gold-pale uppercase tracking-wider leading-tight">
                  {r.name}
                </h2>
                {r.nickname && (
                  <div className="mt-1 text-sm italic text-burgundy-light">
                    {r.nickname}
                  </div>
                )}
              </div>

              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm font-serif text-parchment/80 mb-5">
                <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                  Nation
                </dt>
                <dd>{r.nation}</dd>
                <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                  Type
                </dt>
                <dd>{r.type}</dd>
                <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                  Raised
                </dt>
                <dd>{r.raised}</dd>
                {r.facings && (
                  <>
                    <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                      Dress
                    </dt>
                    <dd>{r.facings}</dd>
                  </>
                )}
                {r.motto && (
                  <>
                    <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                      Motto
                    </dt>
                    <dd className="italic">{r.motto}</dd>
                  </>
                )}
                <dt className="uppercase text-xs tracking-widest text-gold/70 pt-0.5">
                  Battles
                </dt>
                <dd className="text-parchment/75 text-xs leading-relaxed">
                  {r.battles}
                </dd>
              </dl>

              <p className="text-parchment/90 leading-relaxed font-serif">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
