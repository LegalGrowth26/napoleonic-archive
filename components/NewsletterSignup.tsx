import Script from "next/script";

// The form HTML is rendered via dangerouslySetInnerHTML so it stays
// byte-for-byte the embed Kit gave us. The matching <script> tag is
// loaded separately via next/script because React does not execute
// <script> tags inserted through dangerouslySetInnerHTML.
const KIT_FORM_HTML = `<form action="https://app.kit.com/forms/9335516/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9335516" data-uid="0c930e0276" data-format="inline" data-version="5">
<div data-style="clean">
<ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
<div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
<div class="formkit-field">
<input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email">
</div>
<button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(122, 31, 39); border-radius: 4px; font-weight: 400;">
<div class="formkit-spinner"><div></div><div></div><div></div></div>
<span>Subscribe</span>
</button>
</div>
</div>
</form>`;

export default function NewsletterSignup() {
  return (
    <section
      aria-label="Newsletter signup"
      className="relative overflow-hidden border border-gold/30 rounded-sm bg-gradient-to-b from-navy-deep via-navy to-navy-deep p-8 md:p-10 shadow-regal"
    >
      <Script
        id="kit-embed"
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,rgba(201,162,74,0.25),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_bottom,rgba(107,31,42,0.4),transparent_55%)]"
      />

      <div className="relative text-center">
        <div className="ornament text-gold/70 mb-4">
          <span>✦</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl text-gold-pale uppercase tracking-widest mb-4">
          Dispatches from the Archive
        </h2>
        <p className="text-parchment max-w-2xl mx-auto leading-relaxed font-serif mb-8">
          Join the newsletter for battle dispatches, regimental histories, and
          new voices from the archive. No advertising. Unsubscribe at any
          time.
        </p>
        <div
          className="kit-form-wrapper max-w-md mx-auto"
          dangerouslySetInnerHTML={{ __html: KIT_FORM_HTML }}
        />
      </div>
    </section>
  );
}
