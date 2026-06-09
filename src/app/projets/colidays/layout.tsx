import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colidays · app de vacances collaborative",
  description:
    "App de planification de vacances entre familles : répartition du loyer, dépenses partagées, attribution des chambres, planning cuisine, activités avec vote.",
  alternates: { canonical: "/projets/colidays" },
  openGraph: {
    title: "Colidays · app de vacances collaborative · Alexandra Philibert",
    description:
      "Vacances entre familles : répartition du loyer, dépenses type Tricount, planning cuisine, activités avec vote. React + Supabase.",
  },
};

export default function MaisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
