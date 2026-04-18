import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-S259C9QGFV";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Napoleonic Wars & Sharpe · The Napoleonic Archive",
    template: "%s · The Napoleonic Archive",
  },
  description:
    "The Napoleonic Wars (1789–1815) and Bernard Cornwell's Sharpe novels: battles, people, regiments, first-hand stories, fiction and resources in one archive.",
  keywords: [
    "Napoleonic Wars",
    "Sharpe novels",
    "Bernard Cornwell",
    "Waterloo",
    "Austerlitz",
    "Peninsular War",
    "95th Rifles",
    "Duke of Wellington",
    "Napoleon Bonaparte",
    "Richard Sharpe",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: SITE.baseUrl,
  },
  openGraph: {
    title: "Napoleonic Wars & Sharpe · The Napoleonic Archive",
    description:
      "Battles, people, regiments and Bernard Cornwell's Sharpe novels, chronicled in one dark, atmospheric archive.",
    url: SITE.baseUrl,
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: SITE.ogImage,
        width: SITE.ogImageWidth,
        height: SITE.ogImageHeight,
        alt: "The Napoleonic Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Napoleonic Archive",
    description:
      "Napoleonic Wars history and Bernard Cornwell's Sharpe novels, in one curated archive.",
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
