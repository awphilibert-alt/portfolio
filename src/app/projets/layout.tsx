import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets · Product Builder",
  description:
    "Ce que je construis : plateformes no-code, apps React, agents IA, CRM custom et automatisations.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets · Product Builder · Alexandra Philibert",
    description:
      "Plateformes no-code, apps React, agents IA, automatisations. 9+ projets livrés.",
  },
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
