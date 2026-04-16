import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/20 bg-navy-deep/80">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-gold tracking-[0.3em] uppercase text-sm">
            The Napoleonic Archive
          </div>
          <p className="mt-3 text-parchment/70 text-sm leading-relaxed">
            A chronicle of the age of muskets and empires, for devotees of
            history, and of Sharpe.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold/80 mb-3">
            Explore
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/battles">Battles</Link>
            </li>
            <li>
              <Link href="/people">People</Link>
            </li>
            <li>
              <Link href="/regiments">Regiments</Link>
            </li>
            <li>
              <Link href="/stories">Stories</Link>
            </li>
            <li>
              <Link href="/fiction">Fiction</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold/80 mb-3">
            Motto
          </h4>
          <blockquote className="italic text-parchment/70 border-l-2 border-burgundy pl-4 text-sm">
            &ldquo;From the sulphur of a volley at Talavera to the muddy
            wheatfields of Mont-Saint-Jean: here lie the deeds, the men, the
            regiments.&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="border-t border-gold/10 py-5 text-center text-xs tracking-widest uppercase text-parchment/50">
        © {new Date().getFullYear()} The Napoleonic Archive
      </div>
    </footer>
  );
}
