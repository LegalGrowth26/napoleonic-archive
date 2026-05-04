import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Recollections of Rifleman Harris",
  description: "Recollections of Rifleman Harris: the memoir that brings the Peninsular War to life. Benjamin Harris of the 95th Rifles and the retreat to Corunna.",
  path: "/stories/rifleman-harris",
  keywords: ["Recollections of Rifleman Harris", "Benjamin Harris", "95th Rifles", "Peninsular War memoir", "retreat to Corunna"],
  type: "article",
});

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Recollections of Rifleman Harris: The Memoir That Brings the Peninsular War to Life",
  author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/favicon.ico` } },
  mainEntityOfPage: `${SITE.baseUrl}/stories/rifleman-harris`,
  url: `${SITE.baseUrl}/stories/rifleman-harris`, inLanguage: "en-GB",
};

export default function RiflemanHarrisPage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            <Link href="/stories" className="hover:text-gold transition">The Napoleonic Archive &middot; Stories</Link>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Recollections of Rifleman Harris</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The Memoir That Brings the Peninsular War to Life</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Was Benjamin Harris?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Benjamin Harris was born approximately 1781 in Dorset. He was a shoemaker by trade who enlisted in the 66th Foot before volunteering for the newly formed 95th Rifles. He served throughout the early Peninsular War, including the retreat to Corunna in the winter of 1808-09. He was eventually discharged due to chronic fever contracted in the Walcheren expedition of 1809 and returned to shoemaking in London.</p>
          <p>Harris was barely literate. His memoirs were dictated to Captain Henry Curling, who wrote them down and published them in 1848 as &ldquo;Recollections of Rifleman Harris.&rdquo; The book was largely forgotten until the twentieth century, when military historians recognised it as one of the most vivid eyewitness accounts of the Napoleonic Wars from the perspective of a common soldier.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Memoir</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Recollections of Rifleman Harris was first published in 1848. It covers Harris&rsquo;s service in the 95th Rifles from 1806 to 1809, concentrating on the retreat to Corunna. The memoir is short, vivid, and entirely unpretentious. Harris makes no attempt to explain strategy or politics. He tells you what he saw, what he felt, and what happened to the men around him.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">What Makes It Special</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Most memoirs of the Napoleonic period were written by officers. Harris gives us the war as a private soldier lived it: the marching, the hunger, the lice, the blistered feet, the camaraderie, the fear, and the dark comedy of men who knew each day might be their last. There is no other memoir quite like it from the period. It is the voice of the ranks, and it is extraordinarily rare.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Retreat to Corunna</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Harris&rsquo;s most famous passages describe the retreat to Corunna in December 1808 and January 1809. Sir John Moore&rsquo;s army marched through the mountains of Galicia in winter, pursued by French forces. Discipline broke down. Men collapsed in the snow. Women and children died by the roadside. It was one of the most harrowing episodes of the Peninsular War, and Harris lived through it as a private in the 95th.</p>
            <p>His descriptions of the suffering, the cold, the exhaustion, and the small acts of kindness and cruelty he witnessed give the retreat a human reality that no campaign history can match.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">From the Text</h2>
        <div className="space-y-8">
          <blockquote className="card p-6 rounded-sm border-l-4 border-gold/50">
            <p className="text-parchment leading-relaxed font-serif text-lg italic mb-3">&ldquo;I remember marching along in the rear of the army, and being so dead beat that I felt as if I had weights on my legs. Every step I took was a labour.&rdquo;</p>
            <cite className="text-xs uppercase tracking-widest text-gold/70 not-italic">Recollections of Rifleman Harris, 1848. On the retreat to Corunna.</cite>
          </blockquote>
          <p className="text-xs text-parchment/70 font-serif italic">The above is a representative passage from the public domain text. Harris describes the physical exhaustion of the march in plain, direct language that carries more weight than any officer&rsquo;s polished prose.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Harris and the Fictional Harris</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>The character Harris in Bernard Cornwell&rsquo;s Sharpe&rsquo;s Rifles is a tribute to the real Benjamin Harris: educated, literate, a scholar among soldiers. But they are different people. Cornwell&rsquo;s Harris is red-haired, a former schoolmaster from Lichfield. The real Harris was a Dorset shoemaker. The tribute is in the spirit, not the detail: both are private soldiers who see more than they are supposed to see and remember what others forget.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Where to Read It</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Recollections of Rifleman Harris is public domain and available free online via <a href="https://www.gutenberg.org" target="_blank" rel="noopener noreferrer" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">Project Gutenberg</a> and the Internet Archive. Multiple modern editions are available in paperback.</p>
        </div>
        <div className="mt-6">
          <a href="https://amzn.to/4elXalK" target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition shadow-regal">Buy on Amazon &rarr;</a>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Stories</Link>
            <Link href="/regiments/95th-rifles" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">95th Rifles</Link>
            <Link href="/fiction" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Sharpe Novels</Link>
          </div>
          <p className="text-xs uppercase tracking-widest text-parchment/85 text-center mt-6">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </section>
    </>
  );
}
