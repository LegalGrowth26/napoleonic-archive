import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Napoleonic Archive — Battles, Men, Regiments & Sharpe",
  description:
    "A dark-atmospheric chronicle of the Napoleonic Wars and Bernard Cornwell's Sharpe novels: battles, people, regiments, first-hand stories, fiction and resources.",
  keywords: [
    "Napoleonic Wars",
    "Sharpe",
    "Bernard Cornwell",
    "Waterloo",
    "Peninsular War",
    "95th Rifles",
    "Wellington",
    "Napoleon",
  ],
  authors: [{ name: "The Napoleonic Archive" }],
  openGraph: {
    title: "The Napoleonic Archive",
    description:
      "Chronicles of the Napoleonic Wars and Sharpe — battles, people, regiments, stories and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-[calc(100vh-14rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
