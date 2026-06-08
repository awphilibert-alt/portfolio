import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Light Geek · studio no-code & IA",
  description:
    "Le site de mon studio d'automatisation IA et no-code, conçu et construit de A à Z en HTML/CSS/JS, avec SEO et déploiement custom.",
  alternates: { canonical: "/projets/light-geek" },
  openGraph: {
    title: "Light Geek · studio no-code & IA · Alexandra Philibert",
    description:
      "Studio d'automatisation IA et no-code. Site vitrine conçu et construit de A à Z.",
  },
};

export default function LightGeekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
