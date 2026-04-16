import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
}

export default function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-gold/20">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep/40 via-navy to-navy-deep" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(201,162,74,0.25),transparent_55%)]" />
      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        {eyebrow && (
          <div className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold/80 mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-gold-pale mb-6 uppercase tracking-wider">
          {title}
        </h1>
        {lede && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-parchment/80 italic leading-relaxed">
            {lede}
          </p>
        )}
        <div className="ornament mt-8 text-gold/70">
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}
