import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import TimelineContent from "./TimelineContent";

export const metadata: Metadata = {
  title: "Napoleonic Wars Timeline 1789-1815 · The Napoleonic Archive",
  description: "Interactive timeline of the Napoleonic Wars: battles, political events, key deaths, and the Sharpe novels in chronological order from 1789 to 1815.",
  alternates: { canonical: `${SITE.baseUrl}/timeline` },
};

export default function TimelinePage() {
  return <TimelineContent />;
}
