"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/seo";
import { sharpeCharacters } from "@/data/sharpe-characters";

interface HardcodedPerson {
  name: string;
  epithet: string;
  years: string;
  faction: string;
  bio: string;
  relatedBattles?: readonly string[];
  dedicatedPage?: string;
}

interface PeopleGroup {
  id: string;
  title: string;
  intro: string;
  category: string;
  people: HardcodedPerson[];
}

interface UnifiedPerson {
  name: string;
  subtitle: string;
  years: string;
  faction: string;
  description: string;
  fate?: string;
  firstAppearance?: string;
  relatedBattles?: readonly string[];
  dedicatedPage?: string;
  source: "hardcoded" | "database";
}

const CATEGORIES = ["All", "British", "French", "Allied", "Fictional"] as const;
type Category = (typeof CATEGORIES)[number];

const DEDICATED_PAGES: Record<string, string> = {
  "Napoleon Bonaparte": "/people/napoleon",
  "Arthur Wellesley": "/people/wellington",
  "Arthur Wellesley, Duke of Wellington": "/people/wellington",
};

function classifyNationality(nationality: string): "British" | "French" | "Allied" {
  const n = nationality.toLowerCase();
  if (n.includes("british") || n.includes("english") || n.includes("scottish") || n.includes("irish") || n.includes("welsh") || n.includes("anglo")) return "British";
  if (n.includes("french")) return "French";
  return "Allied";
}

function categorizeCharacter(type: string, nationality: string): Category {
  if (type === "recurring" || type === "fictional") return "Fictional";
  return classifyNationality(nationality);
}

const SECTION_META: Record<string, { id: string; title: string; intro: string }> = {
  British: { id: "british", title: "British Commanders", intro: "Redcoats and their officers: the stubborn, parade-drilled, gin-soaked line that broke the Empire." },
  Allied: { id: "allied", title: "Allied Commanders", intro: "Tsars and Prussian hussars, Austrian archdukes and Spanish partisans: the coalitions that at last held." },
  French: { id: "french", title: "French Commanders", intro: "Soldiers of the Republic, of the Consulate and of the Empire: the men who carried the eagles across Europe." },
  Fictional: { id: "fictional", title: "Sharpe's World", intro: "Names borrowed, transfigured or invented by Bernard Cornwell: the company kept by a rifleman from Yorkshire." },
};

const SECTION_ORDER: Category[] = ["British", "Allied", "French", "Fictional"];

export default function PeopleContent({ groups }: { groups: PeopleGroup[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const mergedSections = useMemo(() => {
    const seen = new Set<string>();
    const sections: Record<string, UnifiedPerson[]> = {
      British: [],
      Allied: [],
      French: [],
      Fictional: [],
    };

    for (const g of groups) {
      for (const p of g.people) {
        const key = p.name.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          sections[g.category].push({
            name: p.name,
            subtitle: p.epithet,
            years: p.years,
            faction: p.faction,
            description: p.bio,
            relatedBattles: p.relatedBattles,
            dedicatedPage: p.dedicatedPage,
            source: "hardcoded",
          });
        }
      }
    }

    for (const c of sharpeCharacters) {
      const key = c.name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      const cat = categorizeCharacter(c.type, c.nationality);
      sections[cat].push({
        name: c.name,
        subtitle: c.rank,
        years: "",
        faction: c.nationality,
        description: c.role,
        fate: c.fate,
        firstAppearance: c.firstAppearance,
        dedicatedPage: DEDICATED_PAGES[c.name],
        source: "database",
      });
    }

    return sections;
  }, [groups]);

  const filteredSections = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SECTION_ORDER
      .filter((cat) => category === "All" || category === cat)
      .map((cat) => ({
        ...SECTION_META[cat],
        category: cat,
        people: mergedSections[cat].filter((p) => {
          if (!q) return true;
          return (
            p.name.toLowerCase().includes(q) ||
            p.subtitle.toLowerCase().includes(q) ||
            p.faction.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            (p.fate?.toLowerCase().includes(q) ?? false)
          );
        }),
      }))
      .filter((s) => s.people.length > 0);
  }, [search, category, mergedSections]);

  const totalPeople = SECTION_ORDER.reduce((s, cat) => s + mergedSections[cat].length, 0);
  const shownPeople = filteredSections.reduce((s, sec) => s + sec.people.length, 0);
  const hasFilters = search.trim() !== "" || category !== "All";

  const toggleExpand = (name: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <div className="max-w-xl mx-auto mb-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, role, or description..."
            className="w-full bg-navy-muted/40 border border-gold/30 rounded-sm px-4 py-3 text-parchment placeholder-parchment/50 font-serif focus:outline-none focus:border-gold transition"
            aria-label="Search people"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`px-4 py-2 border uppercase tracking-widest text-xs transition ${
                category === c
                  ? "border-gold bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale"
                  : "border-gold/30 text-parchment/85 hover:border-gold/60 hover:text-gold-pale"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="text-xs uppercase tracking-widest text-parchment/70">
            Showing {shownPeople} of {totalPeople} figures
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="px-3 py-1 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition"
            >
              Reset
            </button>
          )}
        </div>
      </section>

      <nav className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {SECTION_ORDER.map((cat) => (
            <a
              key={cat}
              href={`#${SECTION_META[cat].id}`}
              className="px-4 py-2 border border-gold/30 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition"
            >
              {SECTION_META[cat].title}
            </a>
          ))}
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {filteredSections.length === 0 ? (
          <p className="text-center text-parchment/85 font-serif italic py-12">
            No figures match your search.
          </p>
        ) : (
          filteredSections.map((sec) => (
            <div key={sec.id} id={sec.id} className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title">
                  {sec.title}
                </h2>
                <p className="mt-4 text-parchment italic text-lg max-w-3xl font-serif">
                  {sec.intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.people.map((p) => {
                  const slug = slugify(p.name);
                  const isLong = p.description.length > 200;
                  const isExpanded = expanded.has(p.name);
                  return (
                    <article
                      key={p.name}
                      id={`person-${slug}`}
                      className="card p-6 rounded-sm scroll-mt-24 flex flex-col"
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider leading-tight">
                          <a href={`#person-${slug}`} className="hover:text-gold">
                            {p.name}
                          </a>
                        </h3>
                        {p.years && (
                          <span className="text-[10px] tracking-widest text-gold/70 whitespace-nowrap">
                            {p.years}
                          </span>
                        )}
                      </div>
                      <div className="text-sm italic text-burgundy-bright mb-1">{p.subtitle}</div>
                      <div className="text-xs uppercase tracking-widest text-parchment/85 mb-3">{p.faction}</div>
                      {p.firstAppearance && (
                        <div className="text-xs text-gold/70 mb-3">
                          <span className="uppercase tracking-widest">First appearance:</span>{" "}
                          <span className="text-parchment/95 font-serif">{p.firstAppearance}</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className={`text-parchment leading-relaxed font-serif text-sm ${isLong && !isExpanded ? "line-clamp-3" : ""}`}>
                          {p.description}
                        </p>
                        {isLong && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(p.name)}
                            className="text-burgundy-bright text-xs mt-1 hover:text-gold transition"
                          >
                            {isExpanded ? "Show less" : "Read more..."}
                          </button>
                        )}
                      </div>
                      {p.fate && (
                        <div className="mt-3 pt-3 border-t border-gold/15">
                          <p className="text-sm text-parchment/95 font-serif">
                            <span className="text-gold-pale uppercase text-xs tracking-widest mr-2">Fate</span>
                            {p.fate}
                          </p>
                        </div>
                      )}
                      {p.relatedBattles && p.relatedBattles.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gold/15 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                          <span className="text-gold-pale uppercase text-xs tracking-widest">Fought at</span>
                          {p.relatedBattles.map((battle, i) => (
                            <span key={battle} className="font-serif text-xs">
                              <Link href={`/battles#battle-${slugify(battle)}`} className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold">
                                {battle}
                              </Link>
                              {i < p.relatedBattles!.length - 1 && <span className="text-gold/40 ml-1">&middot;</span>}
                            </span>
                          ))}
                        </div>
                      )}
                      {p.dedicatedPage && (
                        <div className="mt-4 pt-3 border-t border-gold/15">
                          <Link
                            href={p.dedicatedPage}
                            className="inline-block px-8 py-3 border-2 border-gold/70 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-sm font-display hover:border-gold hover:text-gold transition shadow-regal"
                          >
                            Read full biography &rarr;
                          </Link>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <a href="#top" className="text-xs uppercase tracking-widest text-parchment/70 hover:text-gold-pale transition">
                  &uarr; Back to top
                </a>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
