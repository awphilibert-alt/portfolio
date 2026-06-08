import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fermeture Marseille & Aix · décision data-informed",
  description:
    "12 mois de suivi terrain sur 3 KPIs, fermeture de 2 villes non rentables, +35K€ de swing EBITDA et retour à la rentabilité.",
  alternates: { canonical: "/cases/marseille-fermeture" },
  openGraph: {
    title: "Fermeture Marseille & Aix · décision data-informed · Alexandra Philibert",
    description:
      "3 KPIs trackés sur 12 mois, fermeture de 2 villes non rentables, +35K€ de swing EBITDA. La décision qui a sauvé la trajectoire.",
  },
};

export default function MarseilleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
