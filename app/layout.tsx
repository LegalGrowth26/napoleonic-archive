import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GA_MEASUREMENT_ID = "G-S259C9QGFV";

export const metadata: Metadata = {
  title: "The Napoleonic Archive: Battles, Men, Regiments & Sharpe",
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
      "Chronicles of the Napoleonic Wars and Sharpe: battles, people, regiments, stories and more.",
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
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <Navigation />
        <main className="min-h-[calc(100vh-14rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
