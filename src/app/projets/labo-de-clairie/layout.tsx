import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Labo de Clairie — plateforme chorale",
  description:
    "Stack no-code complète pour la première chorale en ligne interactive : scaling de 40 à 1 200 choristes, 400K€ traités, 2 ETP automatisés.",
  alternates: { canonical: "/projets/labo-de-clairie" },
  openGraph: {
    title: "Le Labo de Clairie — plateforme chorale | Alexandra Philibert",
    description:
      "Stack no-code (Tally, Airtable, Stripe, Make) : scaling de 40 à 1 200 choristes, 400K€ traités, 2 ETP automatisés.",
  },
};

export default function LaboProjetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
