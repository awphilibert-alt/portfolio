import type { MetadataRoute } from "next";

const siteUrl = "https://alexandra-philibert.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/cases",
    "/cases/mads",
    "/cases/marseille-fermeture",
    "/cases/le-labo-de-clairie",
    "/projets",
    "/projets/labo-de-clairie",
    "/projets/light-geek",
    "/projets/maison-du-bonheur",
    "/projets/dawghters",
    "/formation-noe",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
