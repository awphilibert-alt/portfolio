"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../../lang-provider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const content = {
  back: { fr: "← Retour", en: "← Back" },
  pill: { fr: "Site associatif", en: "Association website" },
  subtitle: {
    fr: "Site vitrine pour une association parisienne dédiée à la MAO et à la création musicale pour les femmes et minorités de genre.",
    en: "Website for a Parisian association dedicated to music production (DAW) and creation for women and gender minorities.",
  },
  projectTitle: { fr: "Le projet", en: "The project" },
  projectP1: {
    fr: "DAWghters est une association parisienne qui crée des espaces pour les femmes et minorités de genre dans la production musicale (MAO).",
    en: "DAWghters is a Parisian association creating spaces for women and gender minorities in music production (DAW).",
  },
  projectP2: {
    fr: "Le site comprend un organigramme des membres (fiches détaillées : photo, style musical, artistes préférés, DAW), un agenda des événements, une page ressources avec des recommandations de professionnelles, et un espace admin protégé multi-comptes.",
    en: "The site includes a member directory (detailed profiles: photo, music style, favorite artists, DAW), an event calendar, a resources page with professional recommendations, and a multi-account protected admin area.",
  },
  projectP3: {
    fr: "Chaque responsable gère les membres, événements et ressources de façon autonome avec son propre accès.",
    en: "Each administrator manages members, events, and resources independently with their own access.",
  },
  stackTitle: { fr: "Stack technique", en: "Tech stack" },
  stack: {
    fr: ["Next.js + TypeScript", "Tailwind CSS", "Supabase (auth + base de données)", "Admin multi-comptes", "CRUD membres, événements, ressources", "Responsive mobile-first", "SEO-friendly"],
    en: ["Next.js + TypeScript", "Tailwind CSS", "Supabase (auth + database)", "Multi-account admin", "CRUD members, events, resources", "Responsive mobile-first", "SEO-friendly"],
  },
  pagesTitle: { fr: "Pages du site", en: "Site pages" },
  pages: {
    fr: ["Accueil", "Organigramme", "Agenda", "Ressources", "Rejoindre l'asso", "Nous soutenir", "Contact", "Admin (protégé)"],
    en: ["Home", "Directory", "Calendar", "Resources", "Join the association", "Support us", "Contact", "Admin (protected)"],
  },
  cta: { fr: "Voir le site en ligne →", en: "View live site →" },
} as const;

export default function DawghtersPage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <a href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-sky transition-colors">{content.back[lang]}</a>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-sky/10 text-sky text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">DAWghters<span className="text-sky">.</span></motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="bg-white border border-dark/5 overflow-hidden mb-16">
          <img src="/screenshot-dawghters.png" alt="DAWghters" className="w-full" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-heading text-lg font-bold mb-4">{content.pagesTitle[lang]}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {content.pages[lang].map((page) => (
              <div key={page} className="bg-white px-4 py-3 text-sm text-dark/60">{page}</div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <a href="https://dawghters.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 hover:-translate-y-1 hover:shadow-xl transition-all text-sm">
            {content.cta[lang]}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="pt-10 border-t-2 border-dark/10 flex justify-between">
          <Link href="/projets/maison-du-bonheur" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">← Colidays</Link>
          <span />
        </motion.div>
      </motion.div>
    </main>
  );
}
