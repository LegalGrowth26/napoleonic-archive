import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with The Napoleonic Archive: corrections, suggestions, or just to talk Napoleonic history.",
  path: "/contact",
  keywords: [
    "contact Napoleonic Archive",
    "Napoleonic Wars feedback",
    "historical corrections",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
