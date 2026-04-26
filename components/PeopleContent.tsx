"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/seo";

interface Person {
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
  people: Person[];
}

const CATEGORIES = ["All", "British", "French", "Allied", "Fictional"] as const;
type Category = (typeof CATEGORIES)[number];

export default function PeopleContent({ groups }: { groups: PeopleGroup[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    return groups
      .filter((g) => category === "All" || g.category === category)
      .map((g) => ({
        ...g,
        people: g.people.filter((p) => {
          if (!q) return true;
          return (
            p.name.toLowerCase().includes(q) ||
            p.epithet.toLowerCase().includes(q) ||
            p.faction.toLowerCase().includes(q) ||
            p.bio.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((g) => g.people.length > 0);
  }, [search, category, groups]);

  const totalPeople = groups.reduce((s, g) => s + g.people.length, 0);
  const shownPeople = filteredGroups.reduce((s, g) => s + g.people.length, 0);
  const hasFilters = search.trim() !== "" || category !== "All";

  return (
    <>
      {/* SEARCH & FILTER */}
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
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="px-3 py-1 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition"
            >
              Reset
            </button>
          )}
        </div>
      </section>

      {/* SECTION NAV */}
      <nav className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="px-4 py-2 border border-gold/30 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition"
            >
              {g.title}
            </a>
          ))}
        </div>
      </nav>

      {/* SECTIONS */}
      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {filteredGroups.length === 0 ? (
          <p className="text-center text-parchment/85 font-serif italic py-12">
            No figures match your search.
          </p>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-8">
                <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest section-title">
                  {group.title}
                </h2>
                <p className="mt-4 text-parchment italic text-lg max-w-3xl font-serif">
                  {group.intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {group.people.map((p) => {
                  const slug = slugify(p.name);
                  return (
                    <article
                      key={p.name}
                      id={`person-${slug}`}
                      className="card p-6 rounded-sm scroll-mt-24"
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider">
                          <a href={`#person-${slug}`} className="hover:text-gold">
                            {p.name}
                          </a>
                        </h3>
                        <span className="text-xs tracking-widest text-gold/70 whitespace-nowrap">
                          {p.years}
                        </span>
                      </div>
                      <div className="text-sm italic text-burgundy-bright mb-3">
                        {p.epithet}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-parchment/85 mb-4">
                        {p.faction}
                      </div>
                      <p className="text-parchment leading-relaxed font-serif">
                        {p.bio}
                      </p>
                      {p.relatedBattles && p.relatedBattles.length > 0 && (
                        <div className="mt-5 pt-5 border-t border-gold/15 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                          <span className="text-gold-pale uppercase text-xs tracking-widest">
                            Fought at
                          </span>
                          <span className="text-gold/40">&middot;</span>
                          {p.relatedBattles.map((battle, i) => (
                            <span key={battle} className="font-serif">
                              <Link
                                href={`/battles#battle-${slugify(battle)}`}
                                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
                              >
                                {battle}
                              </Link>
                              {i < p.relatedBattles!.length - 1 && (
                                <span className="text-gold/40 ml-3">&middot;</span>
                              )}
                            </span>
                          ))}
                        </div>
                      )}
                      {p.dedicatedPage && (
                        <div className="mt-5 pt-5 border-t border-gold/15">
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
                <a
                  href="#top"
                  className="text-xs uppercase tracking-widest text-parchment/70 hover:text-gold-pale transition"
                >
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
