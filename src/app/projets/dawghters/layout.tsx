import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAWghters — site associatif",
  description:
    "Site pour une association parisienne de MAO pour femmes et minorités de genre : admin multi-comptes, CRUD membres/événements/ressources. Next.js + Supabase.",
  alternates: { canonical: "/projets/dawghters" },
  openGraph: {
    title: "DAWghters — site associatif | Alexandra Philibert",
    description:
      "Association de MAO pour femmes et minorités de genre. Admin multi-comptes, CRUD, agenda. Next.js + Supabase.",
  },
};

export default function DawghtersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
