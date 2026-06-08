import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Maison du Bonheur — app collaborative",
  description:
    "App de planification de vacances entre familles : attribution des chambres, planning, binômes cuisine, budget type Tricount, paiement Stripe.",
  alternates: { canonical: "/projets/maison-du-bonheur" },
  openGraph: {
    title: "La Maison du Bonheur — app collaborative | Alexandra Philibert",
    description:
      "Planification de vacances entre familles : budget type Tricount, binômes cuisine, paiement Stripe. React + Vite.",
  },
};

export default function MaisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
