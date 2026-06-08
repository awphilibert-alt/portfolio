import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://alexandra-philibert.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alexandra Philibert — Product Manager & Builder no-code / IA",
  description:
    "Product Manager & product builder no-code et IA. Ex-fondatrice (9 ans, exit 2025), aujourd'hui PM sur des produits marketplace et plateforme. Discovery, priorisation, delivery — et capable de builder.",
  keywords: [
    "Product Manager",
    "Product Builder",
    "no-code",
    "IA",
    "marketplace",
    "plateforme",
    "discovery",
    "priorisation",
    "delivery",
    "Paris",
    "freelance",
  ],
  authors: [{ name: "Alexandra Philibert" }],
  creator: "Alexandra Philibert",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Alexandra Philibert",
    title: "Alexandra Philibert — Product Manager & Builder no-code / IA",
    description:
      "Ex-fondatrice (9 ans, exit 2025), aujourd'hui Product Manager sur des produits marketplace et plateforme. Discovery, priorisation, delivery — et capable de builder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Philibert — Product Manager & Builder no-code / IA",
    description:
      "Ex-fondatrice (9 ans, exit 2025), aujourd'hui Product Manager. Discovery, priorisation, delivery — et capable de builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandra Philibert",
  jobTitle: "Product Manager",
  url: siteUrl,
  email: "mailto:aw.philibert@gmail.com",
  description:
    "Product Manager & product builder no-code et IA. Ex-fondatrice de Nomad's (marketplace bien-être, 9 ans, exit 2025).",
  knowsLanguage: ["fr", "de", "en"],
  sameAs: ["https://www.linkedin.com/in/alexandra-philibert-016680113/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
