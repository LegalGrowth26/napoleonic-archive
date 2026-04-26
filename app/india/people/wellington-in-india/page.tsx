import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wellington in India",
  description:
    "Arthur Wellesley in India 1797-1805: Seringapatam, Assaye, Argaum and Gawilghur. The campaigns that made the Duke of Wellington.",
  path: "/india/people/wellington-in-india",
  keywords: [
    "Wellington India",
    "Arthur Wellesley India",
    "Seringapatam",
    "Assaye",
    "Sharpe's Tiger",
    "East India Company",
  ],
  type: "article",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arthur Wellesley, Duke of Wellington",
  description: "Arthur Wellesley's campaigns in India 1797-1805, from Seringapatam to Gawilghur.",
  url: `${SITE.baseUrl}/india/people/wellington-in-india`,
};

export default function WellingtonInIndiaPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/india" className="hover:text-gold transition">
              The Napoleonic Archive &middot; India
            </Link>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Wellington in India
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">
            1797&ndash;1805 &middot; The Campaigns That Made Him
          </p>
          <div className="ornament my-8 text-gold/70"><span>⚔</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Arrived India", value: "February 1797" },
              { label: "Left India", value: "March 1805" },
              { label: "Battles Fought", value: "4 major actions" },
              { label: "Outcome", value: "Undefeated" },
            ].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ARRIVAL */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl md:text-4xl text-gold-pale uppercase tracking-widest mb-8 section-title">Arrival in India</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Arthur Wellesley arrived in India in February 1797, aged twenty-seven, as colonel of the 33rd Regiment of Foot. His elder brother Richard had been appointed Governor-General, a coincidence of patronage that gave Arthur opportunities few junior officers could expect. India in the late eighteenth century was a theatre of constant warfare between the Company, the Indian powers, and French influence. For an ambitious soldier with connections, it was the making ground.
          </p>
          <p>
            The brothers Wellesley worked in tandem: Richard provided the political authority and strategic direction, Arthur provided the military execution. It was an arrangement that would deliver British supremacy across southern India within eight years.
          </p>
        </div>
      </section>

      {/* 3. SERINGAPATAM */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Seringapatam 1799</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              The Fourth Anglo-Mysore War was triggered by Tippu Sultan&rsquo;s alliance with Revolutionary France. Governor-General Richard Wellesley ordered an immediate campaign to destroy Mysore before French reinforcements could arrive. General George Harris commanded the main army; Arthur Wellesley served as one of the key subordinate commanders.
            </p>
            <p>
              On the night of 5 April 1799, Wellesley led a force into a tope of trees near the fortress in an attempt to clear Mysorean outworks. The attack ended in confusion: his men became lost in the darkness, fired on each other, and were repulsed with casualties. It was the only significant military failure of his Indian career. The experience taught him never to attack at night in difficult ground, a lesson that informed his preference for defensive positions with clear fields of fire throughout the Peninsular War.
            </p>
            <p>
              The successful storming on 4 May ended the Kingdom of Mysore. Tippu Sultan was killed fighting at the northern gate. Wellesley was appointed governor of the captured city, his first experience of civil administration. He imposed order, suppressed looting, and governed with a mixture of firmness and pragmatism that prefigured his later administration of occupied territories in Spain.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/india/battles/seringapatam" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
              Read the full Seringapatam page &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MARATHA WARS */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Maratha Wars 1803</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            The Second Anglo-Maratha War began in 1803 after the collapse of negotiations between the Company and the Maratha Confederacy. Wellesley, now a Major-General, commanded the Deccan field force and advanced rapidly with approximately 7,000 men to prevent the Maratha armies from uniting.
          </p>
          <p>
            At Assaye on 23 September 1803 he found the combined armies of Scindia and the Bhonsle encamped between two rivers. Despite being outnumbered nearly six to one, he attacked immediately. The Maratha artillery was devastating; the 74th Highlanders were nearly destroyed. Wellesley had two horses shot under him. He consistently called it the hardest fighting he had ever seen, a verdict he maintained even after Waterloo.
          </p>
          <p>
            Argaum followed on 29 November, a more decisive and less costly victory that completed the destruction of the Berar army. The campaign concluded with the storming of Gawilghur, a cliff fortress considered impregnable, on 15 December 1803. These three actions gave Wellesley the experience of offensive warfare against numerically superior forces that would define his later career.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/india/battles/assaye" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            Battle of Assaye &rarr;
          </Link>
          <Link href="/india/battles/gawilghur" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">
            Storming of Gawilghur &rarr;
          </Link>
        </div>
      </section>

      {/* 5. WHAT INDIA TAUGHT HIM */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What India Taught Him</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>
              India gave Wellesley eight years of continuous campaigning in conditions that would have broken most officers. The lessons he learned shaped every campaign that followed.
            </p>
            <p>
              He learned logistics: feeding an army across the Deccan plateau, where roads were poor and water scarce, required meticulous planning. His later insistence on secure supply lines in the Peninsula, which frustrated his officers but kept his army fed and fighting, began here.
            </p>
            <p>
              He learned caution after aggression: Assaye taught him the cost of attacking against overwhelming odds, even when victorious. His later preference for defensive positions, reverse slopes, and careful preparation of the battlefield owed something to the memory of the 74th&rsquo;s destruction on the banks of the Kaitna.
            </p>
            <p>
              He learned civil administration: governing Seringapatam after the storm, feeding a province while pacifying guerrillas and managing local allies, gave him the skills he would deploy across Portugal and Spain a decade later.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LEAVING INDIA */}
      <section className="max-w-4xl mx-auto px-6 py-16 scroll-mt-24">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Leaving India</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>
            Wellesley left India in March 1805 as one of the most experienced generals in the British Army. He had commanded in four major actions, governed a conquered province, and learned the administrative and logistical skills that distinguished him from every other British general of his generation. The foundation for the Peninsular War, for Waterloo, and for everything that followed was laid in eight years under the Indian sun.
          </p>
        </div>
      </section>

      {/* 7. IN SHARPE'S WORLD */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="ornament text-gold/70 mb-4"><span>❦</span></div>
            <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest">In Sharpe&rsquo;s World</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-burgundy-bright">Fiction &middot; Bernard Cornwell</p>
          </div>
          <div className="card p-8 rounded-sm">
            <p className="text-parchment leading-relaxed font-serif text-lg mb-5">
              Cornwell&rsquo;s three India novels follow Sharpe from private to ensign in Wellesley&rsquo;s army. The historical Wellesley appears throughout: cold, precise, and professional, already the commander he would become in Spain.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://amzn.to/3QdRVuq" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Tiger &rarr;
              </a>
              <a href="https://amzn.to/3OjyIa9" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Triumph &rarr;
              </a>
              <a href="https://amzn.to/3QtV1dP" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">
                Sharpe&rsquo;s Fortress &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FURTHER READING */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington Biography</Link>
          <Link href="/india" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; India</Link>
          <Link href="/india/east-india-company" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">East India Company</Link>
        </div>
        <p className="text-xs uppercase tracking-widest text-parchment/85 text-center">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </section>
    </>
  );
}
