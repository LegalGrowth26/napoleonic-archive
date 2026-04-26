"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { sharpeCharacters } from "@/data/sharpe-characters";

type FilterType = "all" | "recurring" | "historical" | "fictional";

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "recurring", label: "Recurring" },
  { key: "historical", label: "Historical" },
  { key: "fictional", label: "Fictional" },
];

const BOOKS_IN_ORDER = [
  "Sharpe's Tiger",
  "Sharpe's Triumph",
  "Sharpe's Fortress",
  "Sharpe's Trafalgar",
  "Sharpe's Prey",
  "Sharpe's Rifles",
  "Sharpe's Havoc",
  "Sharpe's Eagle",
  "Sharpe's Gold",
  "Sharpe's Escape",
  "Sharpe's Fury",
  "Sharpe's Battle",
  "Sharpe's Company",
  "Sharpe's Command",
  "Sharpe's Sword",
  "Sharpe's Enemy",
  "Sharpe's Honour",
  "Sharpe's Regiment",
  "Sharpe's Siege",
  "Sharpe's Revenge",
  "Sharpe's Waterloo",
  "Sharpe's Assassin",
  "Sharpe's Storm",
  "Sharpe's Devil",
];

const TV_FILMS_IN_ORDER = [
  "Sharpe's Rifles",
  "Sharpe's Eagle",
  "Sharpe's Company",
  "Sharpe's Enemy",
  "Sharpe's Honour",
  "Sharpe's Gold",
  "Sharpe's Battle",
  "Sharpe's Sword",
  "Sharpe's Regiment",
  "Sharpe's Siege",
  "Sharpe's Mission",
  "Sharpe's Revenge",
  "Sharpe's Justice",
  "Sharpe's Waterloo",
  "Sharpe's Challenge",
  "Sharpe's Peril",
];

const NO_TV = "__none__";

export default function CharacterDatabase() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [bookFilter, setBookFilter] = useState<string>("");
  const [tvFilmFilter, setTvFilmFilter] = useState<string>("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return sharpeCharacters.filter((c) => {
      if (typeFilter !== "all" && c.type !== typeFilter) return false;
      if (bookFilter && !c.books.includes(bookFilter)) return false;
      if (tvFilmFilter === NO_TV) {
        if (c.tvFilms.length > 0) return false;
      } else if (tvFilmFilter) {
        if (!c.tvFilms.includes(tvFilmFilter)) return false;
      }
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.rank.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.fate.toLowerCase().includes(q)
      );
    });
  }, [search, typeFilter, bookFilter, tvFilmFilter]);

  const hasActiveFilters =
    search.trim() !== "" ||
    typeFilter !== "all" ||
    bookFilter !== "" ||
    tvFilmFilter !== "";

  const resetAll = () => {
    setSearch("");
    setTypeFilter("all");
    setBookFilter("");
    setTvFilmFilter("");
  };

  const selectClass =
    "w-full bg-navy-muted/40 border border-gold/30 rounded-sm px-3 py-2 text-parchment font-serif text-sm focus:outline-none focus:border-gold transition";

  return (
    <section
      id="database"
      className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>◈</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Complete Character Database
          </h2>
          <p className="mt-3 text-sm text-parchment/95 font-serif italic max-w-2xl mx-auto">
            Every named character from the Sharpe novels and TV series, with verified book and film appearances.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-6">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, rank, role, or fate..."
            className="w-full bg-navy-muted/40 border border-gold/30 rounded-sm px-4 py-3 text-parchment placeholder-parchment/50 font-serif focus:outline-none focus:border-gold transition"
            aria-label="Search character database"
          />
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setTypeFilter(f.key)}
              className={`px-4 py-2 border uppercase tracking-widest text-xs transition ${
                typeFilter === f.key
                  ? "border-gold bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale"
                  : "border-gold/30 text-parchment/85 hover:border-gold/60 hover:text-gold-pale"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-4">
          <div>
            <label
              htmlFor="book-filter"
              className="block text-xs uppercase tracking-widest text-gold/70 mb-1"
            >
              Filter by Book
            </label>
            <select
              id="book-filter"
              value={bookFilter}
              onChange={(e) => setBookFilter(e.target.value)}
              className={selectClass}
            >
              <option value="">All Books</option>
              {BOOKS_IN_ORDER.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="tv-filter"
              className="block text-xs uppercase tracking-widest text-gold/70 mb-1"
            >
              Filter by TV Film
            </label>
            <select
              id="tv-filter"
              value={tvFilmFilter}
              onChange={(e) => setTvFilmFilter(e.target.value)}
              className={selectClass}
            >
              <option value="">All Films</option>
              <option value={NO_TV}>No TV appearance</option>
              {TV_FILMS_IN_ORDER.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <p className="text-xs uppercase tracking-widest text-parchment/70">
            Showing {filtered.length} of {sharpeCharacters.length} characters
          </p>
          <button
            type="button"
            onClick={resetAll}
            disabled={!hasActiveFilters}
            className="px-3 py-1 border border-gold/30 text-gold-pale uppercase tracking-widest text-[10px] hover:border-gold hover:text-gold transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gold/30 disabled:hover:text-gold-pale"
          >
            Reset filters
          </button>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-parchment/85 font-serif italic py-12">
            No characters match your filters.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <article key={c.name} className="card p-6 rounded-sm">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider leading-tight">
                    {c.name}
                  </h3>
                  <span
                    className={`shrink-0 inline-block px-2 py-1 text-[10px] uppercase tracking-widest rounded-sm border ${
                      c.type === "recurring"
                        ? "border-burgundy-bright/60 bg-burgundy-deep/30 text-burgundy-bright"
                        : c.type === "historical"
                        ? "border-gold/60 bg-gold/10 text-gold-pale"
                        : "border-parchment/30 bg-navy-muted/40 text-parchment/85"
                    }`}
                  >
                    {c.type}
                  </span>
                </div>
                <div className="text-sm italic text-burgundy-bright mb-1">{c.rank}</div>
                <div className="text-xs uppercase tracking-widest text-parchment/85 mb-3">
                  {c.nationality}
                </div>
                <div className="text-xs text-gold/70 mb-3">
                  <span className="uppercase tracking-widest">First appearance:</span>{" "}
                  <span className="text-parchment/95 font-serif">{c.firstAppearance}</span>
                </div>
                <p className="text-parchment leading-relaxed font-serif text-sm mb-3">
                  {c.role}
                </p>
                <div className="pt-3 border-t border-gold/15 mb-3">
                  <p className="text-sm text-parchment/95 font-serif">
                    <span className="text-gold-pale uppercase text-xs tracking-widest mr-2">
                      Fate
                    </span>
                    {c.fate}
                  </p>
                </div>
                {c.books.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs uppercase tracking-widest text-gold/70 mb-2">
                      Books
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.books.map((b) => (
                        <span
                          key={b}
                          className="inline-block px-2 py-0.5 text-[10px] border border-burgundy-bright/40 bg-burgundy-deep/20 text-burgundy-bright rounded-sm"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {c.tvFilms.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs uppercase tracking-widest text-gold/70 mb-2">
                      TV Films
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tvFilms.map((t) => (
                        <span
                          key={t}
                          className="inline-block px-2 py-0.5 text-[10px] border border-gold/40 bg-gold/10 text-gold-pale rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {c.novelVsTV && (
                  <div className="mt-3 border border-burgundy-bright/40 rounded-sm bg-burgundy-deep/20 p-3">
                    <div className="font-display text-xs uppercase tracking-[0.25em] text-burgundy-bright mb-1">
                      Novel vs TV
                    </div>
                    <p className="text-sm text-parchment/95 font-serif leading-relaxed">
                      {c.novelVsTV}
                    </p>
                  </div>
                )}
                {c.uncertain && (
                  <p className="mt-3 text-xs italic text-parchment/70 font-serif">
                    Some details unverified — corrections welcome via our{" "}
                    <Link
                      href="/contact"
                      className="text-gold-pale underline underline-offset-2 hover:text-gold transition"
                    >
                      contact page
                    </Link>
                    .
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
