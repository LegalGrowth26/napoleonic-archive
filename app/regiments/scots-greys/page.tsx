import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Royal Scots Greys",
  description: "The Royal Scots Greys: the famous charge at Waterloo, the capture of the Eagle, the Scotland Forever painting, and the regiment's place in British military history.",
  path: "/regiments/scots-greys",
  keywords: ["Scots Greys", "Royal Scots Greys", "Waterloo charge", "Scotland Forever", "Lady Butler", "2nd Dragoons"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "The Royal Scots Greys: 2nd Dragoons, The Charge at Waterloo",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/regiments/scots-greys`,
  url: `${SITE.baseUrl}/regiments/scots-greys`, inLanguage: "en-GB",
};

export default function ScotsGreysPage() {
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
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">The Royal Scots Greys</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">2nd Dragoons &middot; The Charge at Waterloo</p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Raised", value: "1681" },
              { label: "Uniform", value: "Grey horses" },
              { label: "Role", value: "Heavy Dragoons" },
              { label: "Motto", value: "Second to None" },
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
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">History</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The Royal Scots Greys, formally the Royal North British Dragoons and later the 2nd Dragoons, were one of the oldest cavalry regiments in the British Army. They took their popular name from the grey horses they rode, a tradition maintained throughout their history. Their motto, &ldquo;Second to None,&rdquo; reflected their pride and their seniority among British dragoon regiments.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Peninsular War</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The Scots Greys were held back from the Peninsular War for most of the conflict and did not serve in Spain or Portugal. This meant that when they were deployed to Belgium in 1815, many of their troopers had never been in action. They were fresh, eager, and mounted on powerful horses, but they lacked the hard-won experience of cavalry regiments like the KGL hussars who had fought across the Peninsula.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Famous Charge</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>At approximately 2pm on 18 June 1815, the French I Corps under General d&rsquo;Erlon launched a massive infantry assault on the Allied centre. As the French columns climbed the ridge, Lord Uxbridge ordered the Union Brigade to charge. The brigade consisted of three regiments: the 1st (Royals), the 6th (Inniskillings), and the 2nd (Scots Greys).</p>
          <p>The Scots Greys charged through the ranks of the Gordon Highlanders, who were fighting in line. The Highlanders famously grabbed the Greys&rsquo; stirrups and charged forward with them, shouting &ldquo;Scotland Forever!&rdquo; The combined assault struck d&rsquo;Erlon&rsquo;s infantry with devastating force. The French columns, already staggered by British volleys, broke and fled. The Greys overran the French gun line and captured the Eagle of the 45th Regiment of the Line.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Disaster</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The charge went too far. Carried forward by their momentum and the excitement of their first action, the Greys could not be halted. They rode deep into the French position, exhausting their horses on the heavy, rain-soaked ground. French cavalry and lancers counter-attacked, catching the Greys scattered and blown.</p>
            <p>The cost was catastrophic. The regiment lost nearly half its strength: approximately 100 killed and over 100 wounded from a total of about 400 who charged. Colonel Hamilton, commanding the Greys, was among the dead. The Union Brigade as a whole was effectively destroyed as a fighting force for the remainder of the battle.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Eagle</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Sergeant Charles Ewart of the Scots Greys captured the Eagle of the French 45th Regiment of the Line during the charge. It was one of only two Eagles captured by British forces at Waterloo (the other was taken by Captain Alexander Kennedy Clark of the 1st Royals from the 105th Regiment). Ewart fought off several French soldiers to secure the trophy. The Eagle is now held by the Royal Scots Dragoon Guards Museum in Edinburgh Castle.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Scotland Forever</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Lady Elizabeth Butler&rsquo;s 1881 painting &ldquo;Scotland Forever!&rdquo; depicts the Scots Greys at the moment of their charge, grey horses at full gallop, sabres raised, the line of horsemen stretching across the canvas. The painting became one of the most reproduced images of the Victorian era and remains the defining visual representation of a British cavalry charge.</p>
            <p>The painting hangs in Leeds Art Gallery. Its dramatic composition shaped how generations imagined the battle, though historians have noted that Butler painted the charge at full gallop on flat ground, when in reality the Greys advanced uphill at a trot through muddy fields.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Legacy</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>The charge of the Scots Greys at Waterloo is one of the most famous cavalry actions in British military history. It broke d&rsquo;Erlon&rsquo;s attack and captured an Eagle, but it also demonstrated the danger of cavalry that charges without discipline or control. The Greys&rsquo; inability to rally cost them dearly and deprived Wellington of a reserve he badly needed later in the day.</p>
          <p>The regiment later became the Royal Scots Greys and was amalgamated in 1971 with the 3rd Carabiniers to form the Royal Scots Dragoon Guards, who serve in the British Army today.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/regiments" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Regiments</Link>
            <Link href="/battles/waterloo" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Battle of Waterloo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
