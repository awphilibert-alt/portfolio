import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Product Management — Noé 2026",
  description:
    "Formation Product Management chez Noé (2026) : 4 semaines intensives en équipe sur une problématique sponsor BlaBlaCar. Certifié France Compétences RS6636.",
  alternates: { canonical: "/formation-noe" },
  openGraph: {
    title: "Formation Product Management — Noé 2026 | Alexandra Philibert",
    description:
      "4 semaines intensives en équipe sur une problématique sponsor BlaBlaCar. Use case, user research, priorisation, delivery. Certifié RS6636.",
  },
};

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
