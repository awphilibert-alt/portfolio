import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Système Mads — refonte du pricing",
  description:
    "Refonte du modèle de pricing B2C de Nomad's en 2019 : crédits prépayés, 100% de la facturation automatisée, stable depuis 7 ans.",
  alternates: { canonical: "/cases/mads" },
  openGraph: {
    title: "Système Mads — refonte du pricing | Alexandra Philibert",
    description:
      "Crédits prépayés, 100% de la facturation automatisée, encaissement à l'avance, stable depuis 7 ans.",
  },
};

export default function MadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
