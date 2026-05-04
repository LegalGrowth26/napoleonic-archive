"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Welcome to the Archive. Check your inbox for confirmation.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      aria-label="Newsletter signup"
      className="relative overflow-hidden border border-gold/30 rounded-sm bg-gradient-to-b from-navy-deep via-navy to-navy-deep p-8 md:p-10 shadow-regal"
    >
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

        {status === "success" ? (
          <p className="text-gold-pale font-serif text-lg">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 bg-navy-muted/40 border border-gold/30 rounded-sm px-4 py-3 text-parchment placeholder-parchment/50 font-serif focus:outline-none focus:border-gold transition"
              aria-label="Email Address"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-gradient-to-b from-burgundy to-burgundy-deep border border-gold/60 text-gold-pale uppercase tracking-widest text-xs font-display hover:border-gold hover:text-gold transition shadow-regal disabled:opacity-60"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-burgundy-bright font-serif text-sm mt-4">{message}</p>
        )}
      </div>
    </section>
  );
}
