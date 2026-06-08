import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Labo de Clairie · mission PM",
  description:
    "PM de la nouvelle plateforme : backlog priorisé pour un lancement sous pression, V1 en ligne (500 préinscrits), objectif 10 000 choristes.",
  alternates: { canonical: "/cases/le-labo-de-clairie" },
  openGraph: {
    title: "Le Labo de Clairie · mission PM · Alexandra Philibert",
    description:
      "Backlog priorisé pour un lancement sous pression, V1 en ligne (500 préinscrits), objectif 10 000 choristes. Stakeholder management CEO/dev.",
  },
};

export default function LaboCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
