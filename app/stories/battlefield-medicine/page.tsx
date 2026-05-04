import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Battlefield Medicine in the Napoleonic Wars",
  description: "Battlefield medicine in the Napoleonic Wars: the regimental surgeon, amputation, survival rates, disease, and Dominique Larrey's flying ambulance.",
  path: "/stories/battlefield-medicine",
  keywords: ["Napoleonic medicine", "battlefield surgery", "amputation Napoleonic", "Larrey flying ambulance", "regimental surgeon"],
  type: "article",
});

const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Battlefield Medicine in the Napoleonic Wars", author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl }, mainEntityOfPage: `${SITE.baseUrl}/stories/battlefield-medicine`, inLanguage: "en-GB" };

export default function BattlefieldMedicinePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/stories" className="hover:text-gold transition">The Napoleonic Archive &middot; Stories</Link></div>
          <h1 className="font-display text-3xl md:text-5xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Battlefield Medicine</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">The Surgeon&rsquo;s Saw and the Survival Odds</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Regimental Surgeon</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Each British regiment had a surgeon and one or two assistant surgeons. Their training varied enormously: some had studied at Edinburgh or London hospitals, others had learned on the job as apprentices. Their equipment was basic: a case of instruments (saws, knives, probes, forceps), lint for dressings, opium for pain, and brandy or rum. Anaesthesia did not exist. Surgery was performed while the patient was conscious, held down by orderlies.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Amputation</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Amputation was the primary treatment for serious limb wounds. This was not barbarity but pragmatism: in an era before antiseptic surgery, a shattered limb would almost certainly become infected. Gangrene, once established, was fatal. A clean amputation, performed quickly, gave the patient a fighting chance of survival.</p>
            <p>Speed was essential. A good surgeon could remove a leg at the thigh in under two minutes. Charles Bell, who operated on casualties after Waterloo, described working without pause for hours, his apron soaked in blood, the floor of the operating room ankle-deep in severed limbs. The sight of the surgeon&rsquo;s table, with its saw and its pile of amputated limbs, was one of the most dreaded in the entire army.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Survival Rates</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Survival rates for amputations were remarkably high when the operation was performed quickly and cleanly. Approximately two-thirds of soldiers who underwent amputation survived. The key factors were speed (reducing shock and blood loss) and the location of the wound: below-the-knee amputations had much better outcomes than above-the-knee or hip disarticulations.</p>
          <p>Abdominal wounds were almost always fatal. There was no effective treatment for damage to the internal organs. A musket ball in the stomach was a death sentence, usually slow and agonising.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">The Battlefield</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Wounded men could lie on the battlefield for hours or days before receiving treatment. Water carriers, often soldiers&rsquo; wives, moved among the wounded offering water. The cries of the wounded between the lines at night were one of the sounds soldiers remembered longest. After Waterloo, it was three days before all the wounded were collected from the field.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Disease</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Disease killed far more soldiers than battle throughout the Napoleonic Wars. Typhus, dysentery, malaria, and various fevers were endemic on campaign. In the Peninsular War, the British army lost approximately 24,000 men to battle and over 24,000 to disease. In the Walcheren expedition of 1809, over 4,000 died of malaria-like fever out of 40,000 troops, compared to 106 battle deaths.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Dominique Larrey</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Napoleon&rsquo;s chief surgeon, Dominique Jean Larrey, was the most innovative military surgeon of the age. His greatest contribution was the &ldquo;flying ambulance&rdquo;: horse-drawn vehicles that collected wounded from the battlefield during the fighting rather than waiting until after. This dramatically reduced the time between wounding and treatment, saving thousands of lives.</p>
            <p>Larrey also established the principle of triage: treating the most urgently wounded first regardless of rank. Napoleon considered him the most virtuous man he had ever known.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Dr Beatty and Nelson</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Dr William Beatty was the surgeon aboard HMS Victory who tended Nelson as he lay dying on 21 October 1805. Beatty&rsquo;s published account, &ldquo;The Death of Lord Nelson&rdquo; (1807), is our primary source for Nelson&rsquo;s final hours. He examined the wound, recognised it as mortal, and attended Nelson until his death at approximately 4:30pm. His account is available as a <Link href="/stories" className="text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold hover:text-gold transition">primary source</Link> on our Stories page.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">In Sharpe&rsquo;s World</h2>
          <div className="text-parchment leading-relaxed font-serif text-lg">
            <p>Sharpe is wounded multiple times across the series. Cornwell&rsquo;s descriptions of battlefield medicine are accurate to the period: the operating table, the rum before the saw, the stump cauterised with hot pitch. The medical details ground the fiction in the reality of Napoleonic warfare.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/stories" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">&larr; Stories</Link>
          <Link href="/stories/life-as-a-soldier" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Life as a Soldier</Link>
        </div>
      </section>
    </>
  );
}
