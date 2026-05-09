"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";

interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  category: "battle" | "political" | "sharpe" | "birth" | "death";
  link?: string;
}

type Category = "all" | "battle" | "political" | "sharpe" | "birth" | "death";

const CATEGORIES: { key: Category; label: string; color: string }[] = [
  { key: "all", label: "All Events", color: "border-gold" },
  { key: "battle", label: "Battles", color: "border-burgundy-bright" },
  { key: "political", label: "Political", color: "border-gold" },
  { key: "sharpe", label: "Sharpe Novels", color: "border-green-500" },
  { key: "birth", label: "Births & Deaths", color: "border-parchment/50" },
];

const BADGE_STYLES: Record<string, string> = {
  battle: "border-burgundy-bright/60 bg-burgundy-deep/30 text-burgundy-bright",
  political: "border-gold/60 bg-gold/10 text-gold-pale",
  sharpe: "border-green-600/60 bg-green-900/30 text-green-400",
  birth: "border-blue-400/60 bg-blue-900/30 text-blue-300",
  death: "border-parchment/40 bg-navy-muted/40 text-parchment/85",
};

const events: TimelineEvent[] = [
  { id: "rev", date: "July 1789", year: 1789, month: 7, title: "French Revolution Begins", description: "The storming of the Bastille triggers the collapse of the old order in Europe.", category: "political" },
  { id: "nap-born", date: "August 1769", year: 1769, month: 8, title: "Napoleon Born", description: "Napoleon Bonaparte born in Ajaccio, Corsica.", category: "birth" },
  { id: "well-born", date: "May 1769", year: 1769, month: 5, title: "Wellington Born", description: "Arthur Wellesley born in Dublin. The future Duke of Wellington.", category: "birth" },
  { id: "nelson-born", date: "1758", year: 1758, title: "Nelson Born", description: "Horatio Nelson born in Burnham Thorpe, Norfolk.", category: "birth" },
  { id: "louis", date: "January 1793", year: 1793, month: 1, title: "Execution of Louis XVI", description: "France declares war on Britain. Twenty-two years of conflict begin.", category: "political" },
  { id: "sering", date: "May 1799", year: 1799, month: 5, title: "Siege of Seringapatam", description: "Tippu Sultan killed. Wellington's first great action in India.", category: "battle", link: "/india/battles/seringapatam" },
  { id: "tippu-d", date: "May 1799", year: 1799, month: 5, title: "Tippu Sultan Killed", description: "The Tiger of Mysore dies fighting at the northern gate of his fortress.", category: "death" },
  { id: "brumaire", date: "November 1799", year: 1799, month: 11, title: "Napoleon's Coup", description: "The coup of 18 Brumaire. Napoleon becomes First Consul of France.", category: "political" },
  { id: "marengo", date: "June 1800", year: 1800, month: 6, title: "Battle of Marengo", description: "Napoleon defeats Austria, securing his political position as First Consul.", category: "battle" },
  { id: "amiens", date: "1802", year: 1802, title: "Treaty of Amiens", description: "Brief peace between Britain and France. The only break in 22 years of war.", category: "political" },
  { id: "assaye", date: "September 1803", year: 1803, month: 9, title: "Battle of Assaye", description: "Wellington's bloodiest battle. He called it the hardest fighting he ever saw.", category: "battle", link: "/india/battles/assaye" },
  { id: "war-resumes", date: "May 1803", year: 1803, month: 5, title: "War Resumes", description: "Britain declares war on France. The Napoleonic Wars officially begin.", category: "political" },
  { id: "emperor", date: "December 1804", year: 1804, month: 12, title: "Napoleon Crowned Emperor", description: "Napoleon crowns himself Emperor at Notre Dame. Pope Pius VII attends.", category: "political" },
  { id: "trafalgar", date: "October 1805", year: 1805, month: 10, title: "Battle of Trafalgar", description: "Nelson destroys the Franco-Spanish fleet. British naval supremacy for a century.", category: "battle", link: "/battles/trafalgar" },
  { id: "nelson-d", date: "October 1805", year: 1805, month: 10, title: "Nelson Killed", description: "Admiral Horatio Nelson shot at Trafalgar. Dies below decks on Victory.", category: "death" },
  { id: "austerlitz", date: "December 1805", year: 1805, month: 12, title: "Battle of Austerlitz", description: "Napoleon's masterpiece. The Third Coalition shattered in a single day.", category: "battle", link: "/battles/austerlitz" },
  { id: "contsys", date: "1806", year: 1806, title: "Continental System", description: "Napoleon attempts to blockade Britain economically. All Europe must comply.", category: "political" },
  { id: "tilsit", date: "1807", year: 1807, title: "Treaty of Tilsit", description: "Napoleon at the height of his power. Russia becomes an ally.", category: "political" },
  { id: "spain", date: "1808", year: 1808, title: "Peninsular War Begins", description: "Napoleon invades Spain. Joseph Bonaparte placed on the throne. Six years of war begin.", category: "political", link: "/battles/peninsular-war" },
  { id: "vimeiro", date: "August 1808", year: 1808, month: 8, title: "Battle of Vimeiro", description: "Wellesley's first Peninsular victory. British musketry destroys French columns.", category: "battle" },
  { id: "corunna", date: "January 1809", year: 1809, month: 1, title: "Battle of Corunna", description: "Moore's army escapes. Sir John Moore killed on the ridge above the port.", category: "battle", link: "/battles/corunna" },
  { id: "moore-d", date: "January 1809", year: 1809, month: 1, title: "Sir John Moore Killed", description: "Struck by a cannonball at Corunna. Buried at midnight by his soldiers.", category: "death" },
  { id: "talavera", date: "July 1809", year: 1809, month: 7, title: "Battle of Talavera", description: "Wellington holds the line in furnace heat. Created Viscount for the victory.", category: "battle" },
  { id: "torres", date: "1810", year: 1810, title: "Lines of Torres Vedras", description: "Wellington's defensive masterpiece. Massena starved out of Portugal.", category: "battle" },
  { id: "ciudad", date: "January 1812", year: 1812, month: 1, title: "Ciudad Rodrigo Stormed", description: "The first of the great sieges. Craufurd mortally wounded in the breach.", category: "battle" },
  { id: "badajoz", date: "April 1812", year: 1812, month: 4, title: "Siege of Badajoz", description: "The bloodiest night of the Peninsular War. 4,800 British casualties.", category: "battle", link: "/battles/badajoz" },
  { id: "salamanca", date: "July 1812", year: 1812, month: 7, title: "Battle of Salamanca", description: "Wellington defeats 40,000 men in 40 minutes. Madrid liberated.", category: "battle", link: "/battles/salamanca" },
  { id: "russia", date: "June 1812", year: 1812, month: 6, title: "Napoleon Invades Russia", description: "685,000 men cross the Niemen. Fewer than 100,000 will return.", category: "political", link: "/battles/russian-campaign" },
  { id: "borodino", date: "September 1812", year: 1812, month: 9, title: "Battle of Borodino", description: "The bloodiest day: 70,000 casualties. Napoleon refuses to commit the Guard.", category: "battle", link: "/battles/borodino" },
  { id: "vitoria", date: "June 1813", year: 1813, month: 6, title: "Battle of Vitoria", description: "French rule in Spain ends. Joseph Bonaparte's treasure captured.", category: "battle", link: "/battles/vitoria" },
  { id: "leipzig", date: "October 1813", year: 1813, month: 10, title: "Battle of Leipzig", description: "The Battle of Nations. 600,000 men. Napoleon's German empire collapses.", category: "battle", link: "/battles/leipzig" },
  { id: "abd1", date: "April 1814", year: 1814, month: 4, title: "Napoleon Abdicates", description: "Exiled to Elba. Louis XVIII restored. The Empire is over. Or is it.", category: "political" },
  { id: "elba", date: "March 1815", year: 1815, month: 3, title: "Napoleon Escapes Elba", description: "The Hundred Days begin. Louis XVIII flees. The army rallies to Napoleon.", category: "political", link: "/battles/hundred-days" },
  { id: "ligny", date: "16 June 1815", year: 1815, month: 6, title: "Battle of Ligny", description: "Napoleon defeats Blucher. His last victory.", category: "battle" },
  { id: "qb", date: "16 June 1815", year: 1815, month: 6, title: "Battle of Quatre Bras", description: "Ney fails to defeat Wellington. A crucial missed opportunity.", category: "battle" },
  { id: "waterloo", date: "18 June 1815", year: 1815, month: 6, title: "Battle of Waterloo", description: "Nine hours. The Guard broken. The Empire falls. The wars end.", category: "battle", link: "/battles/waterloo" },
  { id: "abd2", date: "June 1815", year: 1815, month: 6, title: "Napoleon Abdicates Again", description: "Second abdication. Surrenders to the British. Exiled to St Helena.", category: "political" },
  { id: "nap-d", date: "May 1821", year: 1821, month: 5, title: "Napoleon Dies", description: "Dies on St Helena aged 51. The era is finally over.", category: "death" },
  { id: "well-d", date: "September 1852", year: 1852, month: 9, title: "Wellington Dies", description: "The Duke of Wellington dies aged 83. State funeral at St Paul's.", category: "death" },
  { id: "s-eagle", date: "1981", year: 1981, title: "Sharpe's Eagle Published", description: "The first Sharpe novel. Talavera 1809. Bernard Cornwell launches the series.", category: "sharpe", link: "/fiction" },
  { id: "s-tiger", date: "1997", year: 1997, title: "Sharpe's Tiger Published", description: "Seringapatam 1799. First in chronological order. Where Sharpe's story begins.", category: "sharpe", link: "/fiction" },
  { id: "s-triumph", date: "1998", year: 1998, title: "Sharpe's Triumph Published", description: "Assaye 1803. Sharpe saves Wellesley's life and earns his commission.", category: "sharpe", link: "/fiction" },
  { id: "s-fortress", date: "1999", year: 1999, title: "Sharpe's Fortress Published", description: "Gawilghur 1803. The cliff fortress and the end of Sharpe's India years.", category: "sharpe", link: "/fiction" },
  { id: "s-traf", date: "2000", year: 2000, title: "Sharpe's Trafalgar Published", description: "Sharpe at the greatest sea battle ever fought. 1805.", category: "sharpe", link: "/fiction" },
  { id: "s-prey", date: "2001", year: 2001, title: "Sharpe's Prey Published", description: "Copenhagen 1807. The bombardment and the Danish fleet.", category: "sharpe", link: "/fiction" },
  { id: "s-havoc", date: "2003", year: 2003, title: "Sharpe's Havoc Published", description: "Oporto 1809. Sharpe in Portugal.", category: "sharpe", link: "/fiction" },
];

const sortedEvents = [...events].sort((a, b) => {
  if (a.year !== b.year) return a.year - b.year;
  return (a.month || 0) - (b.month || 0);
});

export default function TimelineContent() {
  const [filter, setFilter] = useState<Category>("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return sortedEvents;
    if (filter === "birth") return sortedEvents.filter((e) => e.category === "birth" || e.category === "death");
    return sortedEvents.filter((e) => e.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-navy-deep">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Timeline
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Napoleonic Era &middot; 1769&ndash;1852
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[73px] z-40 border-b border-gold/20 bg-navy-deep/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              className={`px-3 py-1.5 border uppercase tracking-widest text-[10px] transition ${
                filter === c.key
                  ? "border-gold bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale"
                  : "border-gold/30 text-parchment/85 hover:border-gold/60 hover:text-gold-pale"
              }`}
            >
              {c.label}
            </button>
          ))}
          <span className="text-xs uppercase tracking-widest text-parchment/60 self-center ml-2">
            {filtered.length} events
          </span>
        </div>
      </div>

      {/* DESKTOP HORIZONTAL TIMELINE */}
      <div className="hidden md:block overflow-x-auto" ref={scrollRef}>
        <div className="relative min-w-[3000px] px-12 py-16">
          {/* Timeline axis */}
          <div className="absolute top-[120px] left-12 right-12 h-[2px] bg-gold/40" />

          {/* Year markers */}
          <div className="absolute top-[100px] left-12 right-12 flex justify-between">
            {Array.from({ length: 10 }, (_, i) => 1770 + i * 10).map((yr) => (
              <div key={yr} className="text-center">
                <div className="w-[2px] h-4 bg-gold/60 mx-auto mb-1" />
                <span className="font-display text-xs text-gold/70 tracking-widest">{yr}</span>
              </div>
            ))}
          </div>

          {/* Events */}
          <div className="relative pt-[160px] flex items-start gap-4" style={{ minWidth: `${filtered.length * 220}px` }}>
            {filtered.map((e, i) => (
              <div key={e.id} className={`w-[200px] shrink-0 ${i % 2 === 0 ? "" : "mt-32"}`}>
                <div className="w-[1px] h-8 bg-gold/40 mx-auto mb-2" />
                <div className="card p-4 rounded-sm text-center">
                  <span className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest rounded-sm border mb-2 ${BADGE_STYLES[e.category]}`}>
                    {e.category}
                  </span>
                  <div className="font-display text-xs text-gold/70 tracking-widest mb-1">{e.date}</div>
                  <h3 className="font-display text-sm text-gold-pale uppercase tracking-wider mb-2 leading-tight">{e.title}</h3>
                  <p className="text-xs text-parchment/85 font-serif leading-relaxed mb-2">{e.description}</p>
                  {e.link && (
                    <Link href={e.link} className="text-[10px] uppercase tracking-widest text-burgundy-bright hover:text-gold transition">
                      Read more &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE VERTICAL TIMELINE */}
      <div className="md:hidden px-4 py-8">
        <div className="relative pl-8 border-l-2 border-gold/30 space-y-6">
          {filtered.map((e) => (
            <div key={e.id} className="relative">
              <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-navy-deep border-2 border-gold/60" />
              <div className="card p-4 rounded-sm ml-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest rounded-sm border ${BADGE_STYLES[e.category]}`}>
                    {e.category}
                  </span>
                  <span className="font-display text-xs text-gold/70 tracking-widest">{e.date}</span>
                </div>
                <h3 className="font-display text-sm text-gold-pale uppercase tracking-wider mb-1">{e.title}</h3>
                <p className="text-xs text-parchment/85 font-serif leading-relaxed mb-2">{e.description}</p>
                {e.link && (
                  <Link href={e.link} className="text-[10px] uppercase tracking-widest text-burgundy-bright hover:text-gold transition">
                    Read more &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
