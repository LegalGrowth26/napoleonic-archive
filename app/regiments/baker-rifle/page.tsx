import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "The Baker Rifle",
  description:
    "The Baker Rifle: the weapon that changed warfare. How the 95th Rifles used accuracy over volume to transform the Napoleonic battlefield.",
  path: "/regiments/baker-rifle",
  keywords: [
    "Baker Rifle",
    "95th Rifles",
    "flintlock rifle",
    "Napoleonic weapons",
    "Brown Bess",
    "Sharpe rifle",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Baker Rifle: The Weapon That Changed Warfare",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/baker-rifle`,
  url: `${SITE.baseUrl}/regiments/baker-rifle`,
  inLanguage: "en-GB",
};

export default function BakerRiflePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/regiments" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Regiments
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            The Baker Rifle
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Weapon That Changed Warfare
          </p>
        </div>
      </section>

      {/* WHAT MADE IT REVOLUTIONARY */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Made It Revolutionary</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Baker Rifle had a grooved barrel. Seven quarter-turn grooves cut into the bore spun the ball as it left the muzzle, giving it stability in flight and dramatically increasing accuracy. In the hands of a trained rifleman, the Baker was accurate to 200 yards and capable of hitting a man-sized target at 300 yards. The standard infantry musket, the India Pattern Brown Bess, was effective at 50 to 75 yards.
          </p>
          <p>
            This difference was transformative. A rifleman could kill a French officer at three times the range at which a musketeer could reliably hit anything. On a Napoleonic battlefield, where officers led from the front and were identified by their uniforms and horses, the ability to pick off individual targets changed the dynamics of command.
          </p>
        </div>
      </section>

      {/* HOW IT WORKED */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">How It Worked</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Loading the Baker was slower than loading a musket. The ball had to be wrapped in a greased leather or linen patch and hammered down the grooved barrel with a mallet or the butt of the ramrod. A trained rifleman could fire two aimed shots per minute; a musketeer could fire three or four unaimed volleys in the same time.
            </p>
            <p>
              The trade-off was fundamental: volume of fire versus accuracy. A line of musketeers won by the weight of lead they threw at the enemy. A rifleman won by placing each shot precisely. The two weapons demanded different tactics, different training, and different temperaments.
            </p>
          </div>
        </div>
      </section>

      {/* THE CHOSEN MAN */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Chosen Man</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The best shots in each company were selected as &ldquo;chosen men&rdquo; and given additional responsibilities as skirmishers. They fought in pairs: one man loaded while the other aimed and fired, then they swapped roles. This buddy system meant there was always a loaded rifle ready.
          </p>
          <p>
            Riflemen were trained to use ground, concealment and initiative in ways that would have been unthinkable for a line infantryman. They were expected to act independently, select their own targets, and use their judgement about when to fire and when to hold. The chosen man was the Napoleonic era&rsquo;s closest equivalent to the modern sniper.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Baker Rifle vs Brown Bess</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-serif">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="text-left py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Feature</th>
                  <th className="text-center py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Baker Rifle</th>
                  <th className="text-center py-3 px-3 font-display text-xs uppercase tracking-widest text-gold/80">Brown Bess</th>
                </tr>
              </thead>
              <tbody className="text-parchment/95">
                {[
                  { feature: "Barrel", baker: "Grooved (rifled)", bess: "Smooth bore" },
                  { feature: "Effective range", baker: "200-300 yards", bess: "50-75 yards" },
                  { feature: "Rate of fire", baker: "2 aimed/minute", bess: "3-4 volleys/minute" },
                  { feature: "Accuracy", baker: "High (aimed)", bess: "Low (volley)" },
                  { feature: "Barrel length", baker: "30 inches", bess: "39 inches" },
                  { feature: "Calibre", baker: ".625 (20 bore)", bess: ".75 (11 bore)" },
                  { feature: "Bayonet", baker: "24-inch sword bayonet", bess: "17-inch socket bayonet" },
                  { feature: "Weight", baker: "~9 lbs", bess: "~10.5 lbs" },
                ].map((r) => (
                  <tr key={r.feature} className="border-b border-gold/10">
                    <td className="py-2.5 px-3 text-gold-pale">{r.feature}</td>
                    <td className="py-2.5 px-3 text-center">{r.baker}</td>
                    <td className="py-2.5 px-3 text-center">{r.bess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SWORD BAYONET */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Sword Bayonet</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Baker&rsquo;s sword bayonet was 24 inches long, seven inches longer than the standard socket bayonet fitted to the Brown Bess. This compensated for the Baker&rsquo;s shorter barrel: with bayonet fixed, the rifle and musket were approximately the same overall length, giving the rifleman no disadvantage in close combat.
          </p>
          <p>
            The sword bayonet could also be used as a hand weapon in its own right, functioning as a short sword when detached from the rifle. Riflemen were trained in its use for both defensive and offensive fighting. It was a practical, lethal piece of equipment that reflected the dual nature of the rifle regiments: marksmen at range, close fighters in the scrimmage.
          </p>
        </div>
      </section>

      {/* IN BATTLE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">In Battle</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              Riflemen were deployed as skirmishers ahead of the main line, picking off officers, artillery crews and NCOs to disrupt the enemy&rsquo;s command and control before the main engagement. The loss of a single officer could paralyse a French battalion; the loss of an artillery crew could silence a battery.
            </p>
            <p>
              In the Peninsular War, the riflemen of the 95th and 60th became Wellington&rsquo;s eyes. They operated in the difficult ground between the armies, screening advances, covering retreats, and gathering intelligence. The Baker gave them the means to fight at a distance where the enemy could not reply.
            </p>
          </div>
        </div>
      </section>

      {/* FAMOUS USERS */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Famous Users</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The 95th Regiment of Foot (Rifles) was the most famous Baker-armed unit. Formed in 1800, the regiment fought in every major campaign of the Peninsular War and at Waterloo. The 60th (Royal American) Regiment also carried Bakers, as did the King&rsquo;s German Legion light battalions.
          </p>
          <p>
            The green jacket of the rifle regiments, replacing the red coat to aid concealment, became as iconic as the weapon itself. Where the line infantry stood in scarlet and died in rows, the riflemen moved in green and killed at a distance.
          </p>
        </div>
      </section>

      {/* IN SHARPE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              The Baker Rifle is as much a character in the Sharpe novels as Sharpe himself. From his first appearance as a 95th officer in Sharpe&rsquo;s Rifles, Sharpe carries a Baker alongside his heavy cavalry sword. The rifle defines his identity: he is a rifleman, a marksman, a man who kills precisely rather than in volleys. The chosen men he leads, Harris, Hagman, Harper with his volley gun, are all Baker men.
            </p>
            <Link href="/regiments/95th-rifles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
              Read about the 95th Rifles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* THE RIFLE TODAY */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Rifle Today</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Surviving Baker Rifles can be seen at the National Army Museum in London, the Royal Green Jackets Museum in Winchester, and the Rifles Museum in Winchester. Private collections and auction houses occasionally sell original Bakers; they are prized by collectors of Napoleonic militaria.
          </p>
        </div>
      </section>

      {/* FURTHER READING */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Regiments</Link>
            <Link href="/regiments/95th-rifles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">95th Rifles</Link>
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Sharpe Novels</Link>
          </div>
        </div>
      </section>
    </>
  );
}
