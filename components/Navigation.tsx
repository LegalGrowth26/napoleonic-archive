"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/battles", label: "Battles" },
  { href: "/people", label: "People" },
  { href: "/india", label: "India" },
  { href: "/regiments", label: "Regiments" },
  { href: "/fiction", label: "Fiction" },
  { href: "/resources", label: "Resources" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gold/20 bg-navy-deep/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
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

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm uppercase tracking-widest text-parchment/80 hover:text-gold-pale border-b border-transparent hover:border-gold/60 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-gold-pale border border-gold/40 rounded px-3 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-[2px] bg-gold my-1" />
          <span className="block w-5 h-[2px] bg-gold my-1" />
          <span className="block w-5 h-[2px] bg-gold my-1" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gold/20 bg-navy-deep/95">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-widest text-parchment/80 hover:text-gold-pale border-b border-gold/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
