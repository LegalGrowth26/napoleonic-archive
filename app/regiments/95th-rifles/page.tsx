import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "95th Rifles",
  description:
    "The 95th Rifles: Baker rifle, green jacket, fighting in pairs. Sharpe's regiment. The complete history of the most feared light infantry in the Napoleonic Wars.",
  path: "/regiments/95th-rifles",
  keywords: [
    "95th Rifles",
    "Rifle Brigade",
    "Baker rifle",
    "Sharpe regiment",
    "Napoleonic light infantry",
    "green jacket",
    "Chosen Man",
  ],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 95th Regiment of Foot (Rifle Regiment)",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` },
  },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/95th-rifles`,
  url: `${SITE.baseUrl}/regiments/95th-rifles`,
  inLanguage: "en-GB",
};

export default function NinetyFifthRiflesPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/regiments" className="hover:text-gold transition">
              The Napoleonic Archive &middot; Regiments
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            95th Regiment of Foot
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            The Rifle Brigade &middot; Swift and Bold &middot;
            Sharpe&rsquo;s Regiment
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>⚑</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1800" },
              { label: "Uniform", value: "Green jacket" },
              { label: "Weapon", value: "Baker Rifle" },
              { label: "Motto", value: "Celer et Audax" },
            ].map((f) => (
              <div
                key={f.label}
                className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3"
              >
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">
                  {f.label}
                </div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section
        id="introduction"
        className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24"
      >
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
          Introduction
        </h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The 95th Rifles were unlike any other regiment in the British
            Army. Where line infantry stood shoulder to shoulder in rigid
            formation and traded volleys at fifty yards, the riflemen fought
            in pairs, using cover, thinking independently, and shooting
            accurately at three times the range of the standard musket. Armed
            with the Baker rifle and clothed in dark green instead of the
            regulation scarlet, they were the most feared light infantry in
            Europe.
          </p>
          <p>
            They are also Richard Sharpe&rsquo;s regiment. The green-jacketed
            95th is the home of Bernard Cornwell&rsquo;s hero and of Sergeant
            Patrick Harper, the big Irishman with the seven-barrelled volley
            gun. In fiction and in fact, the 95th Rifles defined a new kind of
            soldier: skilled, self-reliant, and deadly at range.
          </p>
        </div>
      </section>

      {/* 3. RAISING THE REGIMENT */}
      <section
        id="raising"
        className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">
            Raising the Regiment
          </h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The regiment was founded in 1800 as the Experimental Corps of
              Riflemen under Colonel Coote Manningham and Lieutenant Colonel
              William Stewart. It drew volunteers from across the army: men
              who could shoot, think, and act on their own initiative. From
              the beginning it was conceived as an elite.
            </p>
            <p>
              The training system that shaped the 95th was developed at
              Shorncliffe Camp in Kent under Sir John Moore. Moore&rsquo;s
              methods emphasised individual initiative, marksmanship, fitness,
              and a relationship between officers and men that was closer and
              more respectful than in the line regiments. The soldiers were
              armed with the Baker rifle, a grooved, muzzle-loading weapon
              accurate to 300 yards, against the 50 to 75 yards effective
              range of the standard Brown Bess musket. They wore dark green
              jackets chosen for concealment, with black leather
              accoutrements: no bright brass buttons or white crossbelts to
              catch the light or the eye of an enemy marksman.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE BAKER RIFLE */}
      <section id="baker-rifle" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="text-center mb-10">
          <div className="ornament text-gold/70 mb-4">
            <span>⚔</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest">
            The Baker Rifle
          </h2>
        </div>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Baker rifle, designed by Ezekiel Baker of Whitechapel and
            adopted in 1800, was the weapon that made the 95th what they
            were. Its barrel was shorter than the Brown Bess musket and had
            seven quarter-turn grooves that spun the ball, giving it far
            greater accuracy at range. The cost was speed: the tight-fitting
            ball had to be hammered down the grooved barrel with a mallet,
            making the Baker slower to load than a smoothbore musket. A
            trained rifleman could fire two aimed shots per minute; a line
            infantryman with a Brown Bess could manage three or four
            unaimed volleys.
          </p>
          <p>
            The trade-off was deliberate. The 95th were not expected to
            deliver massed fire. They were expected to pick off officers,
            sergeants, artillerymen and colour-bearers at ranges where the
            enemy could not reply. The best shots in each company were
            designated &ldquo;Chosen Men&rdquo; and given a distinguishing
            badge: they were the elite of an elite, trusted to select their
            own targets and fire independently.
          </p>
          <p>
            The Baker was fitted with a sword bayonet rather than the
            triangular spike bayonet of the line infantry. At 24 inches, it
            was longer than the standard bayonet and could be used as a short
            sword in close quarters. The rifleman was expected to be as
            dangerous with the blade as with the ball.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Effective range",
              baker: "200 to 300 yards",
              bess: "50 to 75 yards",
            },
            {
              label: "Rate of fire",
              baker: "2 aimed shots/min",
              bess: "3 to 4 volleys/min",
            },
            {
              label: "Barrel",
              baker: "Rifled (7 grooves)",
              bess: "Smoothbore",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="card p-5 rounded-sm text-center"
            >
              <div className="text-xs uppercase tracking-widest text-gold/70 mb-3">
                {c.label}
              </div>
              <div className="font-display text-gold-pale text-sm mb-1">
                Baker: {c.baker}
              </div>
              <div className="text-xs text-parchment/85 font-serif">
                Brown Bess: {c.bess}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections 5-12 follow in subsequent updates */}
    </>
  );
}
