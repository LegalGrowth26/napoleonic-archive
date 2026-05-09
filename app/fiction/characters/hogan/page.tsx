import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { pageMeta, SITE } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Major Hogan — Wellington's Spymaster",
  description: "Major Michael Hogan: Wellington's intelligence officer, Sharpe's most valuable ally, and the man who sees what the gentleman officers will not.",
  path: "/fiction/characters/hogan",
  keywords: ["Major Hogan", "Sharpe Hogan", "Wellington intelligence", "Sharpe's Eagle", "Peninsular War spy"],
  type: "article",
});

const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Major Michael Hogan", description: "Fictional character from Bernard Cornwell's Sharpe novels. Wellington's chief intelligence officer in the Peninsula.", url: `${SITE.baseUrl}/fiction/characters/hogan` };
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Who is Hogan in Sharpe?", acceptedAnswer: { "@type": "Answer", text: "Major Michael Hogan is Wellington's chief intelligence officer in the Peninsular War and one of Sharpe's most important patrons. Irish, clever and sardonic, he provides Sharpe with missions and protection." } },
  { "@type": "Question", name: "What happens to Hogan?", acceptedAnswer: { "@type": "Answer", text: "In the novels, Hogan dies of fever during the Peninsular campaign and is replaced by Major Nairn. In the TV series, Hogan survives much longer." } },
  { "@type": "Question", name: "Is Hogan in all the Sharpe books?", acceptedAnswer: { "@type": "Answer", text: "No. Hogan appears from Sharpe's Eagle through Sharpe's Honour. He dies between novels and is replaced by Major Nairn in the later books." } },
] };

export default function HoganPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4"><Link href="/fiction/characters" className="hover:text-gold transition">The Napoleonic Archive &middot; Characters</Link></div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">Major Michael Hogan</h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif">Wellington&rsquo;s Spymaster &middot; Sharpe&rsquo;s Most Valuable Ally</p>
          <div className="ornament my-8 text-gold/70"><span>♛</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[{ label: "First Appearance", value: "Sharpe's Eagle" }, { label: "Nationality", value: "Irish" }, { label: "Role", value: "Intelligence officer" }, { label: "TV Actor", value: "Uncertain (see below)" }].map((f) => (
              <div key={f.label} className="border border-gold/30 rounded-sm bg-navy-muted/50 px-4 py-3">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold/70 mb-1">{f.label}</div>
                <div className="font-display text-sm md:text-base text-gold-pale tracking-wider">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Who Is Hogan?</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Major Michael Hogan is Wellington&rsquo;s chief intelligence officer in the Peninsula and one of Sharpe&rsquo;s most important patrons throughout the series. Irish, clever, sardonic and deeply capable, he is an engineer by training who became the Peninsula&rsquo;s most effective spymaster. Where Wellington provides the grand strategy, Hogan provides the intelligence that makes it possible. Where the gentleman officers despise Sharpe for his origins, Hogan sees in him a useful, lethal, unpolished instrument.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">First Appearance</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Hogan first appears in Sharpe&rsquo;s Eagle, already established as a key figure in Wellington&rsquo;s intelligence network. He is building a bridge when Sharpe encounters him, a reminder of his engineering background. From the beginning he is presented as a man who operates in the shadows between the military and political worlds, seeing connections and opportunities that others miss.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Role</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Hogan gathers intelligence on French movements, runs agents behind enemy lines, breaks codes, and provides Wellington with the information he needs to make decisions. He is also the man who gives Sharpe his most unusual assignments: missions that take him beyond the normal scope of a rifle officer and into the world of espionage, politics, and behind-the-lines operations. Without Hogan, Sharpe would be just another company commander. With Hogan, he becomes Wellington&rsquo;s troubleshooter.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Relationship with Sharpe</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>Hogan genuinely likes and respects Sharpe in a way that most officers do not. He appreciates Sharpe&rsquo;s ability to get things done regardless of obstacles, his street-level intelligence, and his willingness to take on tasks that other officers would refuse. Their friendship is one of the warmer relationships in the series: Hogan is something between a patron, a mentor, and a friend. He protects Sharpe politically when the gentlemen officers try to destroy him, and he uses Sharpe operationally when no one else can be trusted with a difficult mission.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">Relationship with Wellington</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>Hogan has Wellington&rsquo;s complete trust. He is one of the few men in the army who can speak frankly to the Duke, offering advice and counsel without deference. Their relationship is professional but tinged with genuine respect on both sides. Wellington values Hogan&rsquo;s intelligence network and his judgement about people. Hogan, in turn, understands Wellington&rsquo;s needs and provides what is required without being asked.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">His Fate</h2>
          <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
            <p>In the novels, Hogan dies of fever during the Peninsular campaign. His death is reported between novels rather than depicted on the page. He does not survive to Waterloo. He is replaced as Sharpe&rsquo;s main intelligence contact and patron by Major Nairn, a Scottish general officer who takes over some of Hogan&rsquo;s functions in the later books.</p>
            <p>The loss of Hogan is one of the quieter griefs of the series. He dies not in battle but of the disease that killed more soldiers than any French bullet. His absence from the later novels leaves a gap that Nairn can fill operationally but never emotionally.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest mb-8 section-title">TV Portrayal</h2>
        <div className="text-parchment leading-relaxed font-serif space-y-5 text-lg">
          <p>In the ITV television series, Hogan appears throughout the Peninsular campaign films. The TV portrayal differs significantly from the novels: in the TV series, Hogan survives much longer than in the novels and appears in films set after the point where the novel Hogan has already died of fever.</p>
          <p className="text-sm text-parchment/70 italic">Note: the actor who played Hogan in the TV series has been variously reported in fan sources. We have been unable to verify the casting with certainty and have flagged this for correction. If you can confirm, please <Link href="/contact" className="text-gold-pale underline underline-offset-2 hover:text-gold transition">contact us</Link>.</p>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display text-3xl text-gold-pale uppercase tracking-widest text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Who is Hogan in Sharpe?", a: "Wellington's chief intelligence officer and one of Sharpe's most important patrons. Irish, clever, and sardonic." },
              { q: "What happens to Hogan?", a: "In the novels he dies of fever during the Peninsular campaign. In the TV series he survives much longer." },
              { q: "Is Hogan in all the Sharpe books?", a: "No. He appears from Sharpe's Eagle through Sharpe's Honour, then dies and is replaced by Major Nairn." },
            ].map(({ q, a }) => (
              <details key={q} className="card rounded-sm">
                <summary className="flex items-start gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-gold font-display text-sm mt-0.5 shrink-0" aria-hidden="true">Q</span>
                  <span className="font-display text-lg text-gold-pale tracking-wide leading-snug">{q}</span>
                </summary>
                <div className="px-5 pb-5 pt-2 border-t border-gold/15"><p className="text-parchment leading-relaxed font-serif">{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/fiction/characters/sharpe" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Richard Sharpe</Link>
          <Link href="/people/wellington" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Wellington</Link>
          <Link href="/fiction/characters" className="inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition">Character Guide</Link>
        </div>
      </section>
    </>
  );
}
