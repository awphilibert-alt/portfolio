import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas produit PM",
  description:
    "Trois décisions produit qui ont fait la différence : refonte de pricing, décision data-informed, stakeholder management.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Cas produit PM — Alexandra Philibert",
    description:
      "Trois décisions produit qui ont fait la différence : pricing, décision data-informed, stakeholder management.",
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
