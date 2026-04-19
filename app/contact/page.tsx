"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  "Factual correction",
  "Content suggestion",
  "Primary source recommendation",
  "General question",
  "Other",
] as const;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/40 via-navy-deep to-navy-deep" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,74,0.3),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold/70 mb-4">
            The Napoleonic Archive
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-gold-pale uppercase tracking-wider leading-tight mb-4">
            Contact
          </h1>
          <p className="text-lg md:text-xl italic text-parchment font-serif max-w-2xl mx-auto">
            Questions, corrections, suggestions, or just wanting to talk
            Napoleonic history.
          </p>
          <div className="ornament my-8 text-gold/70">
            <span>✒</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-parchment leading-relaxed font-serif text-lg text-center">
          The Napoleonic Archive welcomes factual corrections, content
          suggestions, primary source recommendations, questions about the
          Napoleonic Wars, and general feedback. If you have spotted an error,
          know of a memoir we should cite, or simply want to discuss a battle,
          please get in touch.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        {status === "sent" ? (
          <div className="card p-8 rounded-sm text-center border-gold/40">
            <div className="text-4xl text-gold mb-4">✦</div>
            <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-3">
              Message Sent
            </h2>
            <p className="text-parchment font-serif">
              Thank you for your message. We will get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 inline-block px-6 py-3 border border-gold/40 text-gold-pale uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-8 rounded-sm space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-display text-xs uppercase tracking-[0.25em] text-gold/80 mb-2"
              >
                Name <span className="text-burgundy-bright">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-navy-deep/85 border border-gold/40 rounded-sm text-parchment font-serif placeholder:text-parchment/40 focus:border-gold focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-display text-xs uppercase tracking-[0.25em] text-gold/80 mb-2"
              >
                Email address <span className="text-burgundy-bright">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-navy-deep/85 border border-gold/40 rounded-sm text-parchment font-serif placeholder:text-parchment/40 focus:border-gold focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block font-display text-xs uppercase tracking-[0.25em] text-gold/80 mb-2"
              >
                Subject <span className="text-burgundy-bright">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-navy-deep/85 border border-gold/40 rounded-sm text-parchment font-serif focus:border-gold focus:outline-none transition appearance-none"
              >
                <option value="" className="bg-navy-deep">
                  Select a subject...
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="bg-navy-deep">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-display text-xs uppercase tracking-[0.25em] text-gold/80 mb-2"
              >
                Message <span className="text-burgundy-bright">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-navy-deep/85 border border-gold/40 rounded-sm text-parchment font-serif placeholder:text-parchment/40 focus:border-gold focus:outline-none transition resize-y"
                placeholder="Your message..."
              />
            </div>

            {status === "error" && (
              <div className="border border-burgundy-bright/50 bg-burgundy-deep/30 rounded-sm p-4 text-sm text-parchment font-serif">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 border border-gold/60 bg-gradient-to-b from-burgundy to-burgundy-deep text-gold-pale font-display uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition shadow-regal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>

      {/* ACCURACY PLEDGE */}
      <section className="border-t border-gold/20 bg-gradient-to-b from-navy-deep via-burgundy-deep/10 to-navy-deep">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <div className="ornament text-gold/70 mb-4">
            <span>⚜</span>
          </div>
          <h2 className="font-display text-2xl text-gold-pale uppercase tracking-widest mb-4">
            Accuracy Pledge
          </h2>
          <p className="text-parchment font-serif italic leading-relaxed">
            The Napoleonic Archive is committed to historical accuracy. If you
            spot an error anywhere on the site please use the form above:
            corrections are always welcome.
          </p>
        </div>
      </section>
    </>
  );
}
