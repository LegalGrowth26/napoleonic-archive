import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Peninsular War (1807-1814): Battles, Timeline & Guide",
  description:
    "Complete guide to the Peninsular War: Wellington's Iberian campaign against Napoleon, 20+ battles from Rolica to Toulouse, with map and timeline.",
  path: "/battles/peninsular-war",
  keywords: [
    "peninsular war",
    "peninsular campaign",
    "wellington peninsular war",
    "peninsular war battles",
    "peninsular war timeline",
    "sharpe peninsular war",
  ],
  type: "article",
});

interface HubBattle {
  id: string;
  name: string;
  dates: string;
  isoStart: string;
  isoEnd?: string;
  place: string;
  siege?: boolean;
  background: string;
  battle: string;
  significance: string;
  /** Dedicated battle page. */
  href: string;
}

const battles: HubBattle[] = [
  {
    id: "rolica",
    name: "Rolica",
    dates: "17 August 1808",
    isoStart: "1808-08-17",
    place: "Rolica, Portugal",
    background:
      "The Peninsular War truly began for Britain when Sir Arthur Wellesley landed in Portugal during the summer of 1808. Junot had occupied Portugal the previous year, but Spain had erupted in revolt following Napoleon's seizure of the Spanish throne. Britain recognised an opportunity. French General Delaborde was ordered to delay the British advance long enough for Junot to concentrate his scattered forces.",
    battle:
      "Delaborde chose an exceptionally strong defensive position around the village of Rolica. Wellesley attempted a double envelopment while pinning the French front. Several British brigades attacked prematurely and suffered heavily climbing steep ravines before eventually forcing the French to withdraw in good order.",
    significance:
      "Although tactically minor, Rolica marked the first major British victory against Napoleon's veteran armies in the Peninsula. It also demonstrated Wellesley's willingness to manoeuvre rather than simply attack head-on.",
    href: "/battles/rolica",
  },
  {
    id: "vimeiro",
    name: "Vimeiro",
    dates: "21 August 1808",
    isoStart: "1808-08-21",
    place: "Vimeiro, Portugal",
    background:
      "Junot realised he had to defeat Wellesley before more British reinforcements arrived. He attacked aggressively near the village of Vimeiro.",
    battle:
      "French columns repeatedly assaulted British positions but encountered disciplined musket volleys from troops deployed in line rather than column. The British infantry shattered attack after attack.",
    significance:
      "Junot's defeat effectively ended French control of Portugal for the time being. Unfortunately, the subsequent Convention of Cintra allowed the defeated French army to evacuate Portugal by Royal Navy transports, creating political outrage in Britain despite the battlefield victory.",
    href: "/battles/vimeiro",
  },
  {
    id: "corunna",
    name: "Corunna",
    dates: "16 January 1809",
    isoStart: "1809-01-16",
    place: "Corunna, Spain",
    background:
      "Napoleon personally entered Spain late in 1808 with over 200,000 troops. Sir John Moore advanced into northern Spain hoping to threaten French communications but suddenly found Napoleon marching directly against him. Moore conducted one of history's greatest fighting retreats across snow-covered mountains before reaching Corunna.",
    battle:
      "Marshal Soult attacked while the British were embarking. Moore successfully repelled repeated French assaults but was mortally wounded during the fighting.",
    significance:
      "The battle was technically a British victory because the evacuation succeeded. Strategically, Britain had abandoned Spain. Yet Moore's campaign delayed Napoleon and earned enormous respect for British discipline.",
    href: "/battles/corunna",
  },
  {
    id: "second-oporto",
    name: "Second Battle of Oporto",
    dates: "12 May 1809",
    isoStart: "1809-05-12",
    place: "Oporto, Portugal",
    background:
      "Marshal Soult invaded Portugal for a second time. Wellesley returned to command British forces.",
    battle:
      "In one of Wellington's boldest operations, British troops secretly crossed the Douro River using local wine barges while Soult believed the crossing impossible. French forces were completely surprised. Soult narrowly escaped capture.",
    significance:
      "Portugal was liberated for the second time. The battle established Wellington's reputation for deception and operational surprise.",
    href: "/battles/second-oporto",
  },
  {
    id: "talavera",
    name: "Talavera",
    dates: "27-28 July 1809",
    isoStart: "1809-07-27",
    isoEnd: "1809-07-28",
    place: "Talavera, Spain",
    background:
      "Wellington advanced into Spain alongside the Spanish army under General Cuesta. Relations between the allies were poor from the outset.",
    battle:
      "Marshal Victor launched repeated attacks against British positions. The fighting was brutal, especially around Cerro de Medellin. British infantry again demonstrated their superiority in defensive combat.",
    significance:
      "Talavera earned Wellesley his Viscount Wellington title. However, lack of Spanish cooperation and French manoeuvres forced him to retreat shortly afterwards. The victory therefore produced little immediate strategic gain.",
    href: "/battles/talavera",
  },
  {
    id: "busaco",
    name: "Busaco",
    dates: "27 September 1810",
    isoStart: "1810-09-27",
    place: "Busaco, Portugal",
    background:
      "Marshal Masséna's third French invasion of Portugal advanced into the interior. Wellington chose the long ridge at Busaco as a defensive position, hoping to bloody the French before withdrawing behind the Lines of Torres Vedras.",
    battle:
      "French columns attacked uphill against carefully placed British and Portuguese divisions. The reverse-slope defence, which would become Wellington's signature tactic, worked precisely as intended. French casualties were severe; Allied casualties were comparatively light.",
    significance:
      "Busaco delayed Masséna's advance and demonstrated the growing skill of Wellington's Portuguese troops fighting alongside British regiments. Wellington then withdrew as planned behind the Lines of Torres Vedras, where the French army starved through the winter of 1810-1811.",
    href: "/battles/busaco",
  },
  {
    id: "fuentes-de-onoro",
    name: "Fuentes de Onoro",
    dates: "3-5 May 1811",
    isoStart: "1811-05-03",
    isoEnd: "1811-05-05",
    place: "Fuentes de Onoro, Spain",
    background:
      "Marshal Masséna, having finally retreated from the Lines of Torres Vedras, attempted to relieve the besieged fortress of Almeida.",
    battle:
      "The village of Fuentes de Onoro changed hands repeatedly through hard street fighting. On the southern flank, Wellington narrowly avoided disaster when his right wing became exposed. The famous Light Division covered a difficult withdrawal with exceptional discipline.",
    significance:
      "Masséna ultimately failed to relieve Almeida. French hopes of recovering Portugal effectively ended. Wellington himself later remarked that if Napoleon had been there, they would have been beaten.",
    href: "/battles/fuentes-de-onoro",
  },
  {
    id: "albuera",
    name: "Albuera",
    dates: "16 May 1811",
    isoStart: "1811-05-16",
    place: "Albuera, Spain",
    background:
      "Marshal Soult attempted to relieve the French garrison at Badajoz. The Allied army was commanded by Marshal Beresford in Wellington's absence.",
    battle:
      "One of the bloodiest infantry battles of the war. A sudden French flank attack almost destroyed the Allied line. The British Fusilier Brigade suffered appalling casualties while standing under sustained French musketry, but their steadiness held the line.",
    significance:
      "The battle was tactically inconclusive but strategically prevented Soult from relieving Badajoz. It remains one of the most savage infantry engagements fought by the British Army during the Napoleonic Wars.",
    href: "/battles/albuera",
  },
  {
    id: "ciudad-rodrigo",
    name: "Ciudad Rodrigo",
    dates: "January 1812",
    isoStart: "1812-01-08",
    isoEnd: "1812-01-19",
    place: "Ciudad Rodrigo, Spain",
    siege: true,
    background:
      "The great fortress of Ciudad Rodrigo guarded the northern invasion route from Portugal into Spain. Without it, Wellington could not safely invade.",
    battle:
      "British engineers rapidly opened trenches despite winter conditions. Heavy artillery battered the walls. Once practicable breaches appeared, Wellington ordered an immediate assault. The town fell after fierce street fighting.",
    significance:
      "The siege lasted only twelve days. Its rapid success astonished Europe and opened the northern gateway into Spain.",
    href: "/battles/ciudad-rodrigo",
  },
  {
    id: "badajoz",
    name: "Badajoz",
    dates: "March-April 1812",
    isoStart: "1812-03-16",
    isoEnd: "1812-04-06",
    place: "Badajoz, Spain",
    siege: true,
    background:
      "If Ciudad Rodrigo guarded the northern road, Badajoz controlled the southern crossing of the Portuguese frontier. A first British attempt to take the fortress in 1811 had failed. Leaving it in French hands remained impossible.",
    battle:
      "Badajoz proved extraordinarily difficult. French governor Armand Philippon conducted one of the finest fortress defences of the Napoleonic Wars. The final assault on 6 April became one of the bloodiest episodes in British military history. Thousands fell attempting to storm the breaches. After entering the city, discipline collapsed. British troops looted Badajoz for nearly three days.",
    significance:
      "Badajoz secured Wellington's communications permanently. It also revealed the terrible human cost of siege warfare. Wellington was reportedly deeply shaken by the scale of the casualties among his troops.",
    href: "/battles/badajoz",
  },
  {
    id: "salamanca",
    name: "Salamanca",
    dates: "22 July 1812",
    isoStart: "1812-07-22",
    place: "Salamanca, Spain",
    background:
      "Marshal Marmont attempted to outflank Wellington near Salamanca. His army became dangerously overextended along the line of march.",
    battle:
      "Wellington, watching from a hilltop, immediately recognised Marmont's error. British divisions struck the exposed French left before the remainder of the French army could respond. The attack rapidly rolled up the French line.",
    significance:
      "Salamanca was Wellington's masterpiece of battlefield command. Unlike earlier defensive victories, this was an aggressive offensive battle won through rapid decision-making. Madrid fell shortly afterwards.",
    href: "/battles/salamanca",
  },
  {
    id: "burgos",
    name: "Burgos",
    dates: "September-October 1812",
    isoStart: "1812-09-19",
    isoEnd: "1812-10-21",
    place: "Burgos, Spain",
    siege: true,
    background:
      "Seeking to consolidate his advance after Salamanca, Wellington attempted to capture Burgos Castle.",
    battle:
      "The British lacked sufficient heavy siege artillery. Repeated assaults failed. French relief armies converged.",
    significance:
      "Wellington abandoned the siege and conducted another masterful retreat back to Portugal. The failure reminded Europe that French power remained formidable, and it was one of Wellington's rare setbacks in the war.",
    href: "/battles/burgos",
  },
  {
    id: "vitoria",
    name: "Vitoria",
    dates: "21 June 1813",
    isoStart: "1813-06-21",
    place: "Vitoria, Spain",
    background:
      "Joseph Bonaparte, Napoleon's brother and installed King of Spain, attempted to withdraw from Spain carrying vast quantities of treasure and supplies.",
    battle:
      "Wellington launched a coordinated attack in four columns. French communications collapsed under the coordinated pressure. Joseph's army disintegrated. The baggage train became hopelessly congested, and vast quantities of loot fell into Allied hands.",
    significance:
      "Vitoria effectively destroyed French rule in Spain. Napoleon later reflected in exile that after Vitoria, Spain was effectively lost. The victory also had major diplomatic consequences, helping to solidify the Sixth Coalition against Napoleon in Germany.",
    href: "/battles/vitoria",
  },
  {
    id: "san-sebastian",
    name: "San Sebastian",
    dates: "July-September 1813",
    isoStart: "1813-07-07",
    isoEnd: "1813-09-08",
    place: "San Sebastian, Spain",
    siege: true,
    background:
      "The coastal fortress of San Sebastian remained in French hands despite the disaster at Vitoria.",
    battle:
      "After an initial failed assault in July, British artillery created massive breaches during a second attempt. The final assault on 31 August succeeded after bitter fighting. As at Badajoz, discipline collapsed following the capture. Large parts of the town were destroyed by fire.",
    significance:
      "The fortress secured Allied supply lines along the northern coast and opened the way into the Pyrenees.",
    href: "/battles/san-sebastian",
  },
  {
    id: "nivelle",
    name: "Nivelle",
    dates: "10 November 1813",
    isoStart: "1813-11-10",
    place: "Nivelle river, France",
    background:
      "The Allies crossed onto French soil for the first time. Marshal Soult had constructed extensive defensive works along the Nivelle river.",
    battle:
      "Wellington coordinated multiple attacks across difficult terrain. French positions gradually collapsed.",
    significance:
      "For the first time, Wellington defeated the French on French soil. The invasion of France had begun.",
    href: "/battles/nivelle",
  },
  {
    id: "nive",
    name: "Nive",
    dates: "9-13 December 1813",
    isoStart: "1813-12-09",
    isoEnd: "1813-12-13",
    place: "Nive river, France",
    background:
      "Flooded rivers divided Wellington's army. Soult attempted to destroy isolated Allied corps.",
    battle:
      "Several separate engagements occurred over four days. The hard fighting around St Pierre on 13 December was particularly ferocious.",
    significance:
      "Despite repeated French attacks, Soult failed to regain the initiative. Wellington's grip on southern France tightened.",
    href: "/battles/nive",
  },
  {
    id: "orthez",
    name: "Orthez",
    dates: "27 February 1814",
    isoStart: "1814-02-27",
    place: "Orthez, France",
    background:
      "Soult attempted another defensive stand while retreating toward Toulouse.",
    battle:
      "French resistance proved stubborn. Eventually Wellington's pressure forced Soult to withdraw. Wellington himself was slightly wounded during the fighting.",
    significance: "The road into southern France lay open.",
    href: "/battles/orthez",
  },
  {
    id: "toulouse",
    name: "Toulouse",
    dates: "10 April 1814",
    isoStart: "1814-04-10",
    place: "Toulouse, France",
    background:
      "Napoleon had already abdicated on 6 April, but news had not reached the armies in the south.",
    battle:
      "Soult defended Toulouse vigorously. The Allies eventually captured the surrounding heights. French forces withdrew during the night.",
    significance:
      "Often regarded as the final major battle of the Peninsular War, Toulouse remains controversial because it was fought after the war had effectively ended. Casualties on both sides were essentially futile.",
    href: "/battles/toulouse",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
    { "@type": "ListItem", position: 2, name: "Battles", item: `${SITE.baseUrl}/battles` },
    { "@type": "ListItem", position: 3, name: "Peninsular War", item: `${SITE.baseUrl}/battles/peninsular-war` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Peninsular War (1807-1814): Battles, Timeline & Guide",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  mainEntityOfPage: `${SITE.baseUrl}/battles/peninsular-war`,
  inLanguage: "en-GB",
};

const eventsJsonLd = {
  "@context": "https://schema.org",
  "@graph": battles.map((b) => ({
    "@type": "Event",
    name: `${b.siege ? "Siege" : "Battle"} of ${b.name.replace(/^Second Battle of /, "")}`,
    startDate: b.isoStart,
    ...(b.isoEnd ? { endDate: b.isoEnd } : {}),
    location: { "@type": "Place", name: b.place },
    description: b.significance,
  })),
};

/** First sentence of a passage, for the shortened battle teasers. */
function firstSentence(text: string): string {
  const s = text.split(". ")[0];
  return s.endsWith(".") ? s : `${s}.`;
}

export default function PeninsularWarPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={eventsJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">The Napoleonic Archive &middot; Battles</Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Peninsular War (1807-1814)</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Wellington&rsquo;s Iberian Campaign Against Napoleon</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Duration", value: "1807-1814" },
              { label: "Theatre", value: "Portugal, Spain & France" },
              { label: "Result", value: "Allied victory" },
              { label: "Significance", value: "Napoleon's 'Spanish ulcer'" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src="/Peninsula.png"
          alt="British and French forces clashing in the Peninsula"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-deep/40" />
      </div>

      {/* ABOVE-THE-FOLD INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Peninsular War (1807-1814) was fought across Portugal, Spain, and southern France between Napoleon&rsquo;s forces and a coalition led by Britain under Sir Arthur Wellesley (later the Duke of Wellington), together with Portuguese and Spanish armies and irregular Spanish guerrillas. It was not one long march but a series of campaigns, sieges, and battles that gradually shifted the balance from French domination of Iberia to the invasion of southern France. Wellington rarely sought battle unless the conditions favoured him. Instead, he fought a war of logistics, manoeuvre, and attrition, using Portugal as a secure base while Spain&rsquo;s guerrillas bled French communications.</p>
          <p>Below is a chronological overview of the major engagements, from the first British landings in Portugal through to Wellington&rsquo;s crossing of the Pyrenees and the final battle at Toulouse.</p>
        </div>
      </section>

      {/* CAMPAIGN MAP */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <img
          src="/images/peninsular-war-map.png"
          alt="Map of the Peninsular Campaign 1807-1814 showing major battles including Rolica, Vimeiro, Corunna, Talavera, Ciudad Rodrigo, Badajoz, Salamanca, Vitoria, and Toulouse."
          className="w-full h-auto border border-gold/25 rounded-sm"
        />
        <p className="text-xs uppercase tracking-widest text-parchment/70 text-center mt-3">The Peninsular Campaign 1807-1814</p>
      </section>

      {/* QUICK-JUMP MENU */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-6 text-center">The Battles in Chronological Order</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {battles.map((b) => (
              <a key={b.id} href={`#${b.id}`} className="card px-4 py-3 rounded-sm flex items-baseline justify-between gap-3 hover:border-gold/60 transition">
                <span className="font-display text-gold-pale uppercase tracking-wider text-sm">{b.name}</span>
                <span className="text-xs text-parchment/70 font-serif shrink-0">{b.dates}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BATTLE SECTIONS */}
      {battles.map((b, i) => (
        <section
          key={b.id}
          id={b.id}
          className={
            i % 2 === 0
              ? "max-w-4xl mx-auto px-6 py-14 scroll-mt-24"
              : "border-t border-b border-gold/15 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24"
          }
        >
          <div className={i % 2 === 0 ? "" : "max-w-4xl mx-auto px-6 py-14"}>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-1 section-title">
              {b.siege ? `Siege of ${b.name}` : b.name}
            </h2>
            <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-6">{b.dates}</div>
            <div className="text-parchment leading-relaxed font-serif space-y-4 text-lg">
              <p>{b.background}</p>
              <p className="text-parchment/85 italic">{firstSentence(b.significance)}</p>
            </div>
            <div className="mt-6">
              <Link href={b.href} className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
                Read the full page &rarr;
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* THE CAMPAIGN IN PERSPECTIVE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Campaign in Perspective</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Looking across these engagements, a clear pattern emerges. The early years were characterised by Britain&rsquo;s struggle simply to survive in Portugal. The middle years focused on methodical siege warfare, with Ciudad Rodrigo and Badajoz opening the gateways into Spain. Salamanca demonstrated Wellington&rsquo;s ability to seize fleeting tactical opportunities, while the failed siege of Burgos showed the limits of his resources. Finally, Vitoria transformed the war from one of liberation into one of invasion, carrying the Allied armies across the Pyrenees and into France itself.</p>
          <p>Unlike Napoleon&rsquo;s preference for seeking decisive annihilation in a single campaign, Wellington won through patience, logistics, discipline, and careful management of risk. The Peninsular War became one of the greatest examples of coalition warfare in European history, steadily eroding French strength until the Allies stood on French soil, helping to set the stage for Napoleon&rsquo;s first abdication in 1814.</p>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/battles/corunna", title: "Battle of Corunna", desc: "The retreat that became a legend and the death of Sir John Moore." },
              { href: "/battles/salamanca", title: "Battle of Salamanca", desc: "Wellington's masterpiece of battlefield command." },
              { href: "/battles/badajoz", title: "Siege of Badajoz", desc: "The bloodiest siege of the war." },
              { href: "/people/wellington", title: "Duke of Wellington", desc: "The commander who never lost a major battle." },
              { href: "/regiments/95th-rifles", title: "The 95th Rifles", desc: "The green-jacketed riflemen whose service ran throughout the Peninsula." },
              { href: "/regiments/kings-german-legion", title: "The King's German Legion", desc: "Hanover's exiles in British service." },
              { href: "/fiction", title: "The Sharpe Series", desc: "Bernard Cornwell's novels, set during the Peninsular War." },
              { href: "/napoleonic-wars-books", title: "Reading Guide", desc: "The best non-fiction books on the Peninsular War, with a suggested starting order." },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card p-5 rounded-sm block group hover:border-gold/60 transition">
                <div className="font-display text-gold-pale uppercase tracking-wider text-sm group-hover:text-gold transition mb-1">{c.title}</div>
                <p className="text-parchment/85 font-serif text-sm">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest">Further Reading</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://amzn.to/4vyaCsL" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Wellington: The Iron Duke &rarr;</a>
          <a href="https://amzn.to/4cSwN4L" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Sharpe&rsquo;s Rifles &rarr;</a>
        </div>
      </section>

      {/* FOOTER LINKS + DISCLAIMER */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">As an Amazon Associate I earn from qualifying purchases.</p>
          <p className="text-[10px] text-parchment/50 text-center mt-2">Page last updated: July 2026</p>
        </div>
      </section>
    </>
  );
}
