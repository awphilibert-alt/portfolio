"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../../lang-provider";
import { ImageLightbox } from "../../components/image-lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const content = {
  back: { fr: "← Retour", en: "← Back" },
  pill: { fr: "Site vitrine · No-code", en: "Landing page · No-code" },
  subtitle: {
    fr: "Le site de mon studio no-code & automatisation IA. Conçu et construit de A à Z en vibe coding.",
    en: "My no-code & AI automation studio website. Designed and built from scratch with vibe coding.",
  },
  projectTitle: { fr: "Le projet", en: "The project" },
  projectP1: {
    fr: "Light Geek est mon studio d'automatisation IA et no-code. J'ai conçu et construit le site vitrine moi-même, en pur HTML/CSS/JS, sans framework ni build process.",
    en: "Light Geek is my AI automation and no-code studio. I designed and built the landing page myself, in pure HTML/CSS/JS, no framework or build process.",
  },
  projectP2: {
    fr: "Le site comprend une landing page avec un design audacieux (fond dark, néon, grille animée), un formulaire de candidature via Tally, et un système d'analytics via Umami.",
    en: "The site features a bold landing page (dark background, neon, animated grid), an application form via Tally, and analytics via Umami.",
  },
  projectP3: {
    fr: "J'ai également géré le SEO (meta tags, Open Graph, sitemap, robots.txt) et le déploiement sur Hostinger via webhook GitHub.",
    en: "I also handled SEO (meta tags, Open Graph, sitemap, robots.txt) and deployment on Hostinger via GitHub webhook.",
  },
  stackTitle: { fr: "Stack technique", en: "Tech stack" },
  stack: {
    fr: ["HTML / CSS / JS vanilla", "Formulaire Tally", "Analytics Umami", "Google Fonts (Unbounded, DM Sans, Space Mono)", "SEO : Open Graph, sitemap, robots.txt", "Déploiement Hostinger + webhook GitHub", "Custom cursor + scroll animations"],
    en: ["HTML / CSS / JS vanilla", "Tally form", "Umami analytics", "Google Fonts (Unbounded, DM Sans, Space Mono)", "SEO: Open Graph, sitemap, robots.txt", "Hostinger deployment + GitHub webhook", "Custom cursor + scroll animations"],
  },
  cta: { fr: "Voir le site en ligne →", en: "View live site →" },
} as const;

export default function LightGeekPage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <a href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-orange transition-colors">
          {content.back[lang]}
        </a>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Light Geek<span className="text-orange">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="mb-16">
          <ImageLightbox src="/screenshot-light-geek.png" alt="Light Geek" />
        </motion.div>

        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">{content.projectTitle[lang]}</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>{content.projectP1[lang]}</p>
              <p>{content.projectP2[lang]}</p>
              <p>{content.projectP3[lang]}</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">{content.stackTitle[lang]}</h2>
            <ul className="space-y-3">
              {content.stack[lang].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <a href="https://light-geek.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 hover:-translate-y-1 hover:shadow-xl transition-all text-sm">
            {content.cta[lang]}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="pt-10 border-t-2 border-dark/10 flex justify-between">
          <Link href="/projets/labo-de-clairie" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-violet transition-colors">← Le Labo de Clairie</Link>
          <Link href="/projets/maison-du-bonheur" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">Colidays →</Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
