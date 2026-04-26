import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Battle of Trafalgar",
  description:
    "The Battle of Trafalgar, 21 October 1805: Nelson's victory, the death of the Admiral, and the battle that secured a century of British naval supremacy.",
  path: "/battles/trafalgar",
  keywords: [
    "Battle of Trafalgar",
    "Trafalgar 1805",
    "Admiral Nelson",
    "HMS Victory",
    "Villeneuve",
    "Sharpe's Trafalgar",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Battle of Trafalgar, 21 October 1805",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/battles/trafalgar`,
  url: `${SITE.baseUrl}/battles/trafalgar`,
  inLanguage: "en-GB",
};

export default function TrafalgarPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/battles" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Battles
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Battle of Trafalgar
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            21 October 1805 &middot; Cape Trafalgar, off south-west Spain
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚓</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Date", value: "21 Oct 1805" },
              { label: "Location", value: "Cape Trafalgar" },
              { label: "Result", value: "British victory" },
              { label: "Casualties", value: "~15,500 total" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Background</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            By the autumn of 1805, Napoleon&rsquo;s plan to invade Britain depended on gaining temporary control of the English Channel. His strategy required the Franco-Spanish fleet under Vice-Admiral Villeneuve to break out of the Mediterranean, draw the British fleet to the West Indies, double back across the Atlantic, and secure the Channel long enough for the Grande Arm&eacute;e to cross from Boulogne.
          </p>
          <p>
            The plan had already failed. Villeneuve, after a confused cruise to the Caribbean and back, had retreated to Cadiz rather than risk a confrontation with the Royal Navy in the Channel. Napoleon abandoned the invasion and marched east towards Ulm and Austerlitz. But Villeneuve, under pressure from Paris and facing replacement, put to sea on 19 October 1805 with thirty-three ships of the line, heading for the Mediterranean. Nelson, with twenty-seven ships, was waiting.
          </p>
        </div>
      </section>

      {/* THE FLEETS */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">The Fleets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Royal Navy</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">27 ships of the line</div>
              <p className="text-parchment/95 font-serif text-sm">Under Vice-Admiral Horatio Nelson in HMS Victory. Collingwood commanded the lee column in Royal Sovereign. The fleet included no first-rates other than Victory herself, but every crew had been drilled to a pitch of gunnery that no other navy could match.</p>
            </div>
            <div className="card p-7 rounded-sm text-center">
              <h3 className="font-display text-xl text-gold-pale uppercase tracking-wider mb-2">Franco-Spanish</h3>
              <div className="font-display text-2xl text-gold-pale mb-1">33 ships of the line</div>
              <p className="text-parchment/95 font-serif text-sm">Under Vice-Admiral Pierre-Charles Villeneuve. The fleet included the massive Spanish four-decker Santissima Trinidad, the largest warship afloat. Many crews were under-trained and undermanned; morale was low after months in harbour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NELSON'S PLAN */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Nelson&rsquo;s Plan</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Nelson planned to break the enemy line in two places simultaneously, attacking at right angles with two columns of ships. His column, the weather column, would strike the enemy centre; Collingwood&rsquo;s lee column would cut through the rear. This would isolate the Franco-Spanish van, which would have to reverse course against the wind to rejoin the battle, taking hours to return.
          </p>
          <p>
            The approach would be dangerous: the leading ships in each column would be under fire for thirty minutes or more before they could bring their own guns to bear. Nelson accepted the risk because he knew his crews could fire two or three broadsides to every one from the enemy. Once alongside, the superior British gunnery would be decisive.
          </p>
          <p>
            Before the battle, Nelson signalled the famous message: &ldquo;England expects that every man will do his duty.&rdquo;
          </p>
        </div>
      </section>

      {/* THE BATTLE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battle</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The two British columns approached the Franco-Spanish line in light winds, under a long, slow cannonade. Collingwood&rsquo;s Royal Sovereign broke through the enemy rear first, at approximately noon, engaging the Santa Ana at point-blank range. Nelson&rsquo;s Victory cut the line at approximately 12:30, passing under the stern of Villeneuve&rsquo;s flagship Bucentaure and raking her with a devastating broadside.
            </p>
            <p>
              What followed was a brutal close-range m&ecirc;l&eacute;e. Ships fought yardarm to yardarm, their rigging tangled, their gun crews firing into each other&rsquo;s hulls at a distance of feet. The French ship Redoutable, lashed alongside Victory, sent her crew to board, and the fighting became hand to hand on Victory&rsquo;s deck. It was a sharpshooter in the Redoutable&rsquo;s mizzen top who fired the shot that struck Nelson.
            </p>
            <p>
              The Franco-Spanish van, exactly as Nelson had planned, was unable to return in time. By late afternoon, nineteen enemy ships had been taken or destroyed. Not a single British ship was lost.
            </p>
          </div>
        </div>
      </section>

      {/* NELSON'S DEATH */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Death of Nelson</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Nelson was struck at approximately 1:15 in the afternoon by a musket ball fired from the mizzen top of the Redoutable. The ball entered his left shoulder, passed through his spine, and lodged below his right shoulder blade. He was carried below to the cockpit of Victory by Sergeant Secker of the Royal Marines and two sailors.
          </p>
          <p>
            Dr William Beatty, the ship&rsquo;s surgeon, attended him. Nelson was conscious and in great pain. He asked repeatedly how the battle was going. Captain Hardy visited him twice: on the second visit he informed Nelson that fourteen or fifteen enemy ships had struck their colours. Nelson replied: &ldquo;That is well, but I bargained for twenty.&rdquo;
          </p>
          <p>
            His last recorded words, repeated several times, were: &ldquo;Thank God, I have done my duty.&rdquo; He died at approximately 4:30 in the afternoon, knowing the battle was won. His body was preserved in a cask of brandy for the voyage home.
          </p>
        </div>
      </section>

      {/* CASUALTIES */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Casualties</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gold/25 rounded-sm bg-navy-muted/40 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~1,700</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">British killed and wounded</div>
              <p className="text-xs text-parchment/85 font-serif">449 killed, approximately 1,250 wounded. Not one British ship lost.</p>
            </div>
            <div className="border border-burgundy-bright/30 rounded-sm bg-burgundy-deep/20 p-5 text-center">
              <div className="font-display text-2xl text-gold-pale mb-1">~13,780</div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">Franco-Spanish killed, wounded and captured</div>
              <p className="text-xs text-parchment/85 font-serif">Approximately 4,400 killed, 2,500 wounded, 7,000 captured. 19 ships taken or destroyed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERED */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Why It Mattered</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Trafalgar ended any realistic prospect of a French invasion of Britain. The Royal Navy&rsquo;s supremacy at sea was established beyond challenge for the next century. Napoleon could dominate Europe by land, but he could never cross the Channel.
          </p>
          <p>
            The strategic consequences were immense. British command of the sea allowed the Peninsular War to be sustained by supply from the ocean. It protected British trade, funded the coalitions against France, and ensured that the war would ultimately be decided on land where Napoleon could be worn down by the relentless pressure of enemies he could defeat but never destroy.
          </p>
        </div>
      </section>

      {/* IN SHARPE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              Sharpe&rsquo;s Trafalgar places Sharpe aboard an East Indiaman during the battle. Having survived India, Sharpe is sailing home when he finds himself caught up in the greatest naval engagement ever fought. Cornwell uses the battle to show the war at sea through a soldier&rsquo;s eyes.
            </p>
            <a href="https://amzn.to/4tTl50t" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
              Buy Sharpe&rsquo;s Trafalgar &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* VISIT TODAY */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Visit Today</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">HMS Victory</h3>
            <p className="text-parchment/95 font-serif text-sm">Nelson&rsquo;s flagship, preserved in dry dock at the Portsmouth Historic Dockyard. You can walk the quarterdeck where Nelson fell and visit the cockpit where he died.</p>
          </div>
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">National Maritime Museum</h3>
            <p className="text-parchment/95 font-serif text-sm">Greenwich, London. Houses Nelson&rsquo;s uniform coat with the hole made by the fatal musket ball, along with the most comprehensive collection of Trafalgar artefacts in the world.</p>
          </div>
          <div className="card p-6 rounded-sm">
            <h3 className="font-display text-lg text-gold-pale uppercase tracking-wider mb-2">Trafalgar Cemetery</h3>
            <p className="text-parchment/95 font-serif text-sm">Gibraltar. The burial place of sailors who died of wounds after the battle. The cemetery is a short walk from the harbour where damaged British ships put in for repair.</p>
          </div>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/battles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; All Battles</Link>
            <Link href="/people/napoleon" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Napoleon Bonaparte</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>
      </section>
    </>
  );
}
