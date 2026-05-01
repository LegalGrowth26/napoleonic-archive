import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "52nd Light Infantry",
  description: "The 52nd Regiment of Foot (Light Infantry): the regiment that broke the Imperial Guard at Waterloo. Formation, Peninsular service and the decisive moment of 18 June 1815.",
  path: "/regiments/52nd-light-infantry",
  keywords: ["52nd Light Infantry", "Waterloo", "Imperial Guard", "Colonel Colborne", "Napoleonic Wars", "Shorncliffe"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "52nd Regiment of Foot (Light Infantry): The Regiment That Broke the Imperial Guard",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/52nd-light-infantry`,
  url: `${SITE.baseUrl}/regiments/52nd-light-infantry`, inLanguage: "en-GB",
};

export default function FiftySecondPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/regiments" className="hover:text-gold transition">The Napoleonic Archive &middot; Regiments</Link>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">52nd Regiment of Foot</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Light Infantry &middot; The Regiment That Broke the Imperial Guard</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1755" },
              { label: "Uniform", value: "Red coat, light infantry" },
              { label: "Role", value: "Light Infantry" },
              { label: "Battle Honours", value: "Peninsula, Waterloo" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Formation and Training</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The 52nd was converted to light infantry in 1803 and trained at Sir John Moore&rsquo;s camp at Shorncliffe in Kent alongside the 43rd and the 95th Rifles. Moore&rsquo;s training regime emphasised initiative, marksmanship, and the ability to fight in open order, qualities that set the Light Division apart from the rigid line regiments.</p>
          <p>The 52nd became one of the finest light infantry regiments in the British Army. Their combination of disciplined firepower and flexible tactics made them invaluable in the skirmishing warfare of the Peninsula.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Peninsular War</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The 52nd served throughout the Peninsular campaign as part of the Light Division, fighting at Vimeiro, Corunna, Busaco, Fuentes de O&ntilde;oro, Ciudad Rodrigo, Badajoz, Salamanca, Vitoria and Toulouse. They were among the hardest-worked regiments in Wellington&rsquo;s army, consistently deployed where the fighting was heaviest.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Waterloo: The Decisive Moment</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>At approximately 8pm on 18 June 1815, five battalions of Napoleon&rsquo;s Imperial Old Guard advanced up the ridge of Mont-Saint-Jean in the final French attack. The Guard had never been beaten in a set-piece assault. Their advance was the climax of the battle.</p>
          <p>As the Guard column approached the crest, Colonel John Colborne ordered the 52nd to wheel to the left, bringing their full firepower onto the flank of the advancing column. The 52nd poured volley after volley into the Guard&rsquo;s exposed flank at close range. Combined with fire from the 1st Foot Guards and other regiments on the crest, this broke the Guard&rsquo;s advance.</p>
          <p>When the Imperial Guard fell back, the cry went up across the French army: &ldquo;La Garde recule!&rdquo; The Guard retreats. The entire French army, exhausted after nine hours of fighting, collapsed. Wellington raised his hat and the Allied line advanced. The battle, the campaign, and the Empire were over.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Debate</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Wellington famously attributed the victory to the infantry generally, declining to single out any regiment for special credit. Supporters of the 52nd and of the 1st Foot Guards (later the Grenadier Guards) have debated for two centuries which regiment truly broke the Guard. The Guards claimed the credit in official histories; the 52nd&rsquo;s advocates pointed to Colborne&rsquo;s flanking manoeuvre as the tactically decisive action.</p>
            <p>Modern historians generally give credit to both, noting that the Guard advance was stopped by the combined fire of several regiments. But Colborne&rsquo;s wheel remains one of the most celebrated tactical decisions in British military history.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Colonel John Colborne</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Colonel Sir John Colborne commanded the 52nd at Waterloo. He had served throughout the Peninsula, was wounded at Ciudad Rodrigo, and was one of the most experienced light infantry officers in the army. His decision to wheel the 52nd onto the Guard&rsquo;s flank was made on his own initiative without direct orders from Wellington. He later became a full general and served as Governor of Upper Canada and Governor of the Cape Colony.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The 52nd&rsquo;s role at Waterloo is one of the most debated actions in military history. Whether they or the Guards deserve the principal credit for breaking the Imperial Guard remains an argument that generates strong opinions. What is not disputed is that the 52nd, trained at Shorncliffe, hardened in the Peninsula, and led by one of the finest colonels in the army, delivered a flanking volley at the critical moment of the most important battle of the century.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Regiments</Link>
          <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Waterloo</Link>
        </div>
      </section>
    </>
  );
}
