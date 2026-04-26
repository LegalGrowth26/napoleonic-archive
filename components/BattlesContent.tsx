"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/seo";

export interface Battle {
  name: string;
  date: string;
  location: string;
  belligerents: string;
  commanders: string;
  relatedPeople?: readonly string[];
  outcome: string;
  outcomeType: "allied" | "french" | "draw";
  casualties: string;
  summary: string;
  sharpe?: string;
  dedicatedPage?: string;
  campaign: string;
  flagship?: boolean;
}

const CAMPAIGNS = ["All", "India", "Early Napoleonic", "Peninsular War", "Hundred Days"] as const;
type CampaignFilter = (typeof CAMPAIGNS)[number];

const OUTCOMES = ["All Outcomes", "Allied Victory", "French Victory", "Draw"] as const;
type OutcomeFilter = (typeof OUTCOMES)[number];

const CAMPAIGN_META: Record<string, { id: string; title: string }> = {
  India: { id: "india", title: "India (1799–1805)" },
  "Early Napoleonic": { id: "early", title: "Early Napoleonic (1800–1807)" },
  "Peninsular War": { id: "peninsular", title: "Peninsular War (1808–1814)" },
  "Hundred Days": { id: "hundred-days", title: "The Hundred Days (1815)" },
};

const CAMPAIGN_ORDER = ["India", "Early Napoleonic", "Peninsular War", "Hundred Days"];

function matchOutcome(outcomeType: string, filter: OutcomeFilter): boolean {
  if (filter === "All Outcomes") return true;
  if (filter === "Allied Victory") return outcomeType === "allied";
  if (filter === "French Victory") return outcomeType === "french";
  if (filter === "Draw") return outcomeType === "draw";
  return true;
}

export default function BattlesContent({ battles }: { battles: Battle[] }) {
  const [search, setSearch] = useState("");
  const [campaignFilter, setCampaignFilter] = useState<CampaignFilter>("All");
  const [outcomeFilter, setOutcomeFilter] = useState<OutcomeFilter>("All Outcomes");

  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = battles.filter((b) => {
      if (campaignFilter !== "All" && b.campaign !== campaignFilter) return false;
      if (!matchOutcome(b.outcomeType, outcomeFilter)) return false;
      if (q) {
        return (
          b.name.toLowerCase().includes(q) ||
          b.location.toLowerCase().includes(q) ||
          b.commanders.toLowerCase().includes(q) ||
          b.outcome.toLowerCase().includes(q) ||
          b.summary.toLowerCase().includes(q)
        );
      }
      return true;
    });

    const groups: { campaign: string; id: string; title: string; battles: Battle[] }[] = [];
    for (const camp of CAMPAIGN_ORDER) {
      const campBattles = filtered.filter((b) => b.campaign === camp);
      if (campBattles.length > 0) {
        groups.push({
          campaign: camp,
          ...CAMPAIGN_META[camp],
          battles: campBattles,
        });
      }
    }
    return { groups, total: battles.length, shown: filtered.length };
  }, [search, campaignFilter, outcomeFilter, battles]);

  const hasFilters = search.trim() !== "" || campaignFilter !== "All" || outcomeFilter !== "All Outcomes";

  return (
    <>
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <div className="max-w-xl mx-auto mb-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search battles by name, location, commanders..."
            className="w-full bg-navy-muted/40 border border-gold/30 rounded-sm px-4 py-3 text-parchment placeholder-parchment/50 font-serif focus:outline-none focus:border-gold transition"
            aria-label="Search battles"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {CAMPAIGNS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCampaignFilter(c)}
              className={`px-4 py-2 border uppercase tracking-widest text-xs transition ${
                campaignFilter === c
                  ? "border-gold bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale"
                  : "border-gold/30 text-parchment/85 hover:border-gold/60 hover:text-gold-pale"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {OUTCOMES.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setOutcomeFilter(o)}
              className={`px-3 py-1.5 border uppercase tracking-widest text-[10px] transition ${
                outcomeFilter === o
                  ? "border-gold bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale"
                  : "border-gold/30 text-parchment/85 hover:border-gold/60 hover:text-gold-pale"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="text-xs uppercase tracking-widest text-parchment/70">
            Showing {grouped.shown} of {grouped.total} battles
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => { setSearch(""); setCampaignFilter("All"); setOutcomeFilter("All Outcomes"); }}
              className="px-3 py-1 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition"
            >
              Reset
            </button>
          )}
        </div>
      </section>

      <nav className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {CAMPAIGN_ORDER.map((camp) => (
            <a
              key={camp}
              href={`#${CAMPAIGN_META[camp].id}`}
              className="px-4 py-2 border border-gold/30 text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition"
            >
              {CAMPAIGN_META[camp].title}
            </a>
          ))}
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {grouped.groups.length === 0 ? (
          <p className="text-center text-parchment/85 font-serif italic py-12">
            No battles match your filters.
          </p>
        ) : (
          grouped.groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <div className="mb-8 text-center">
                <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">
                  {group.title}
                </h2>
              </div>

              <div className="space-y-8">
                {group.battles.map((b) => {
                  const slug = slugify(b.name);
                  return (
                    <article
                      key={b.name}
                      id={`battle-${slug}`}
                      className={`card rounded-sm relative scroll-mt-24 ${
                        b.flagship
                          ? "p-8 md:p-10 border-2 border-gold/50 shadow-[0_0_30px_rgba(201,162,74,0.15)]"
                          : "p-8"
                      }`}
                    >
                      {b.flagship && (
                        <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-burgundy to-burgundy-deep border-b border-l border-gold/50 rounded-bl-sm">
                          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold-pale">
                            Flagship Article
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                        <h3 className={`font-display uppercase tracking-wider text-gold-pale ${b.flagship ? "text-4xl" : "text-3xl"}`}>
                          <a href={`#battle-${slug}`} className="hover:text-gold">
                            {b.name}
                          </a>
                        </h3>
                        <div className="text-sm uppercase tracking-[0.2em] text-gold/80">
                          {b.date}
                        </div>
                      </div>

                      <div className="mb-5 inline-flex items-center gap-3 px-4 py-2 border border-burgundy-light/50 bg-burgundy-deep/40 rounded-sm">
                        <span className="text-burgundy-light font-display text-sm">⚔</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-gold/70">Combatants</span>
                        <span className="text-parchment font-serif">{b.belligerents}</span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-parchment/95 mb-5 font-serif">
                        <div>
                          <span className="text-gold/70 uppercase text-xs tracking-widest">Location · </span>
                          {b.location}
                        </div>
                        <div>
                          <span className="text-gold/70 uppercase text-xs tracking-widest">Commanders · </span>
                          {b.commanders}
                        </div>
                        <div>
                          <span className="text-gold/70 uppercase text-xs tracking-widest">Outcome · </span>
                          <span className="text-gold-pale">{b.outcome}</span>
                        </div>
                        <div>
                          <span className="text-gold/70 uppercase text-xs tracking-widest">Casualties · </span>
                          {b.casualties}
                        </div>
                      </div>

                      <p className="text-parchment leading-relaxed text-lg font-serif">
                        {b.summary}
                      </p>

                      {b.relatedPeople && b.relatedPeople.length > 0 && (
                        <div className="mt-5 pt-5 border-t border-gold/15 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                          <span className="text-gold-pale uppercase text-xs tracking-widest">Who fought here</span>
                          <span className="text-gold/40">&middot;</span>
                          {b.relatedPeople.map((name, i) => (
                            <span key={name} className="font-serif">
                              <Link
                                href={`/people#person-${slugify(name)}`}
                                className="text-gold-pale hover:text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
                              >
                                {name}
                              </Link>
                              {i < b.relatedPeople!.length - 1 && (
                                <span className="text-gold/40 ml-3">&middot;</span>
                              )}
                            </span>
                          ))}
                        </div>
                      )}

                      {b.sharpe && (
                        <div className="mt-5 pt-5 border-t border-gold/15 flex items-start gap-3">
                          <span className="text-burgundy-light font-display text-lg">❦</span>
                          <p className="text-sm italic text-parchment/95">
                            <span className="text-gold-pale uppercase text-xs tracking-widest not-italic">In Sharpe · </span>
                            {b.sharpe}
                          </p>
                        </div>
                      )}

                      {b.dedicatedPage && (
                        <div className="mt-5 pt-5 border-t border-gold/15">
                          <Link
                            href={b.dedicatedPage}
                            className={`inline-block border bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest hover:border-gold hover:text-gold transition shadow-regal ${
                              b.flagship
                                ? "px-10 py-4 border-2 border-gold/70 text-sm font-display"
                                : "px-5 py-2 border-gold/60 text-xs"
                            }`}
                          >
                            Read the full {b.name} page &rarr;
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
