"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavGroup {
  heading: string;
  links: NavLink[];
}

interface NavSection {
  label: string;
  href: string;
  groups: NavGroup[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: "Battles",
    href: "/battles",
    groups: [
      {
        heading: "Campaigns",
        links: [
          { label: "All Battles", href: "/battles" },
          { label: "India 1799–1805", href: "/battles#india" },
          { label: "Peninsular War", href: "/battles#peninsular" },
          { label: "Hundred Days 1815", href: "/battles#hundred-days" },
        ],
      },
      {
        heading: "Featured Battles",
        links: [
          { label: "Battle of Waterloo", href: "/battles/waterloo" },
          { label: "Battle of Trafalgar", href: "/battles/trafalgar" },
          { label: "Battle of Austerlitz", href: "/battles/austerlitz" },
          { label: "Battle of Salamanca", href: "/battles/salamanca" },
          { label: "Siege of Seringapatam", href: "/india/battles/seringapatam" },
          { label: "Battle of Assaye", href: "/india/battles/assaye" },
        ],
      },
    ],
  },
  {
    label: "People",
    href: "/people",
    groups: [
      {
        heading: "British",
        links: [
          { label: "Duke of Wellington", href: "/people/wellington" },
          { label: "Horatio Nelson", href: "/people#person-horatio-nelson" },
          { label: "Sir John Moore", href: "/people#person-sir-john-moore" },
        ],
      },
      {
        heading: "French",
        links: [
          { label: "Napoleon Bonaparte", href: "/people/napoleon" },
          { label: "Marshal Ney", href: "/people#person-michel-ney" },
          { label: "Marshal Davout", href: "/people#person-louis-nicolas-davout" },
        ],
      },
      {
        heading: "Allied",
        links: [
          { label: "Blücher", href: "/people#person-gebhard-leberecht-von-blucher" },
        ],
      },
      {
        heading: "Sharpe's World",
        links: [
          { label: "All Figures", href: "/people" },
          { label: "Sharpe Characters", href: "/people#fictional" },
        ],
      },
    ],
  },
  {
    label: "India",
    href: "/india",
    groups: [
      {
        heading: "Overview",
        links: [
          { label: "East India Company", href: "/india/east-india-company" },
        ],
      },
      {
        heading: "Battles",
        links: [
          { label: "Seringapatam", href: "/india/battles/seringapatam" },
          { label: "Assaye", href: "/india/battles/assaye" },
        ],
      },
      {
        heading: "Key Figures",
        links: [
          { label: "Tippu Sultan", href: "/india/people/tippu-sultan" },
        ],
      },
    ],
  },
  {
    label: "Regiments",
    href: "/regiments",
    groups: [
      {
        heading: "Featured",
        links: [
          { label: "95th Rifles", href: "/regiments/95th-rifles" },
        ],
      },
      {
        heading: "Browse",
        links: [
          { label: "All Regiments", href: "/regiments" },
        ],
      },
      {
        heading: "Weapons & Equipment",
        links: [
          { label: "The Baker Rifle", href: "/regiments/baker-rifle" },
        ],
      },
    ],
  },
  {
    label: "Fiction",
    href: "/fiction",
    groups: [
      {
        heading: "Sharpe Novels",
        links: [
          { label: "All 24 Novels", href: "/fiction" },
          { label: "Where to Start", href: "/fiction#where-to-start" },
          { label: "Reading Order", href: "/fiction#reading-order" },
        ],
      },
      {
        heading: "Characters",
        links: [
          { label: "Character Guide", href: "/fiction/characters" },
          { label: "Character Database", href: "/fiction/characters#database" },
        ],
      },
      {
        heading: "TV Series",
        links: [
          { label: "The ITV Series", href: "/fiction#tv-series" },
        ],
      },
      {
        heading: "More Fiction",
        links: [
          { label: "If You Like Sharpe", href: "/fiction/recommendations" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      {
        heading: "Reading",
        links: [
          { label: "Books & Histories", href: "/resources" },
          { label: "Primary Sources", href: "/stories" },
        ],
      },
      {
        heading: "Life in the Era",
        links: [
          { label: "The Purchase System", href: "/stories/purchase-system" },
          { label: "Prisoners of War", href: "/stories/prisoners" },
        ],
      },
      {
        heading: "Visit",
        links: [
          { label: "Museums & Battlefields", href: "/resources#museums" },
        ],
      },
      {
        heading: "Archives",
        links: [
          { label: "Online Archives", href: "/resources#archives" },
        ],
      },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  return (
    <header className="border-b border-gold/20 bg-navy-deep/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/napoleon-bust.png"
            alt="The Napoleonic Archive"
            width="40"
            height="40"
            className="rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-gold-pale tracking-widest text-sm md:text-base uppercase">
              The Napoleonic
            </span>
            <span className="font-display text-gold tracking-[0.3em] text-xs md:text-sm uppercase">
              Archive
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label} className="relative group">
              <Link
                href={section.href}
                className="px-3 xl:px-4 py-2 text-sm uppercase tracking-widest text-parchment/80 hover:text-gold-pale border-b-2 border-transparent group-hover:border-gold/60 transition inline-block"
              >
                {section.label}
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">
                <div className="border-2 border-gold/60 bg-[#0a0e1a] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.7)] min-w-[280px]">
                  <div className="p-5 space-y-4">
                    {section.groups.map((group) => (
                      <div key={group.heading}>
                        <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold/70 mb-2">
                          {group.heading}
                        </div>
                        <div className="space-y-1">
                          {group.links.map((link) => (
                            <Link
                              key={link.href + link.label}
                              href={link.href}
                              className="block py-1 text-sm text-parchment/85 hover:text-gold-pale hover:pl-1 transition-all font-serif"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden text-gold-pale border border-gold/40 rounded px-3 py-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <span className="block w-5 text-center text-gold text-lg leading-none">&times;</span>
          ) : (
            <>
              <span className="block w-5 h-[2px] bg-gold my-1" />
              <span className="block w-5 h-[2px] bg-gold my-1" />
              <span className="block w-5 h-[2px] bg-gold my-1" />
            </>
          )}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-navy-deep z-[100] overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/napoleon-bust.png"
                alt="The Napoleonic Archive"
                width="36"
                height="36"
                className="rounded-full object-cover"
              />
              <span className="font-display text-gold-pale tracking-widest text-sm uppercase">
                The Napoleonic Archive
              </span>
            </Link>
            <button
              aria-label="Close menu"
              className="text-gold-pale border border-gold/40 rounded px-3 py-2"
              onClick={() => setMobileOpen(false)}
            >
              <span className="block w-5 text-center text-gold text-lg leading-none">&times;</span>
            </button>
          </div>

          <nav className="px-6 py-6 space-y-1">
            {NAV_SECTIONS.map((section) => (
              <div key={section.label} className="border-b border-gold/15">
                <button
                  type="button"
                  onClick={() => toggleMobileSection(section.label)}
                  className="w-full flex items-center justify-between py-4"
                >
                  <span className="font-display text-lg text-gold-pale uppercase tracking-widest">
                    {section.label}
                  </span>
                  <span
                    className={`text-gold/60 text-xl transition-transform ${
                      expandedSection === section.label ? "rotate-90" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>

                {expandedSection === section.label && (
                  <div className="pb-4 pl-2 space-y-4">
                    <Link
                      href={section.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-gold-pale uppercase tracking-widest"
                    >
                      View all {section.label} &rarr;
                    </Link>
                    {section.groups.map((group) => (
                      <div key={group.heading}>
                        <div className="font-display text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-2 pl-2">
                          {group.heading}
                        </div>
                        <div className="space-y-0.5">
                          {group.links.map((link) => (
                            <Link
                              key={link.href + link.label}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 pl-4 text-parchment/85 hover:text-gold-pale font-serif text-sm border-l-2 border-gold/15 hover:border-gold/50 transition-all"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-center border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
