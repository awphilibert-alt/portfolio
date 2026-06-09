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
  pill: { fr: "No-code · Automatisation", en: "No-code · Automation" },
  subtitle: {
    fr: "Un réseau de chorales en pleine croissance dans toute la France, 1200 choristes, aucun outil pour gérer l'administratif. J'ai conçu et livré la stack no-code complète qui a tout rendu possible.",
    en: "A fast-growing choir network across France, 1,200 members, no tools to manage admin. I designed and shipped the complete no-code stack that made it all possible.",
  },
  projectTitle: { fr: "Le projet", en: "The project" },
  projectP1: {
    fr: "Le Labo de Clairie est un réseau de chorales présent dans toute la France. Passé de 40 à 1 200 choristes en quelques années, le volume de gestion administrative est devenu impossible à traiter manuellement.",
    en: "Le Labo de Clairie is a choir network across France. Growing from 40 to 1,200 members in a few years, the administrative workload became impossible to handle manually.",
  },
  projectP2: {
    fr: "J'ai construit l'intégralité du back-office : base de données unifiée, gestion des inscriptions, réinscriptions et changements de forfait, facturation automatisée via Stripe (400K€ traités), relances de paiement, sync automatique avec Circle.",
    en: "I built the entire back-office: unified database, registration management, plan changes, automated billing via Stripe (400K€ processed), payment reminders, automatic Circle sync.",
  },
  projectP3: {
    fr: "Résultat : scaling x30, 2 ETP remplacés par l'automatisation, zéro intervention manuelle sur la facturation.",
    en: "Result: x30 scaling, 2 FTEs replaced by automation, zero manual intervention on billing.",
  },
  stackTitle: { fr: "Stack technique", en: "Tech stack" },
  stack: {
    fr: [
      "Airtable (base de données unifiée choristes/forfaits)",
      "Tally (formulaires d'inscription et réinscription)",
      "Stripe (facturation automatisée, 400K€ traités)",
      "Make (automatisations, 2 ETP remplacés)",
      "Circle (communauté, sync auto inscription/désinscription)",
      "Scaling de 40 à 1 200 choristes (x30)",
    ],
    en: [
      "Airtable (unified members/plans database)",
      "Tally (registration & re-registration forms)",
      "Stripe (automated billing, 400K€ processed)",
      "Make (automations, 2 FTEs replaced)",
      "Circle (community, auto registration/deregistration sync)",
      "Scaled from 40 to 1,200 choir members (x30)",
    ],
  },
  stats: {
    fr: [
      { value: "x30", label: "Scaling choristes" },
      { value: "400K€", label: "Paiements traités" },
      { value: "2 ETP", label: "Remplacés par l'auto" },
    ],
    en: [
      { value: "x30", label: "Member scaling" },
      { value: "400K€", label: "Payments processed" },
      { value: "2 FTEs", label: "Replaced by automation" },
    ],
  },
  cta: { fr: "Voir le site en ligne →", en: "View live site →" },
} as const;

export default function LaboDeClairiePage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <a href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-violet transition-colors">
          {content.back[lang]}
        </a>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-violet/10 text-violet text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Le Labo de Clairie<span className="text-violet">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          {content.subtitle[lang]}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-16">
          <ImageLightbox src="/screenshot-labo-de-clairie.png" alt="Le Labo de Clairie" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-violet flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mb-16">
          {content.stats[lang].map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center">
              <div className="font-heading text-2xl font-bold text-violet mb-1">{stat.value}</div>
              <div className="text-dark/40 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <a href="https://le-labo-de-clairie.lovable.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 hover:-translate-y-1 hover:shadow-xl transition-all text-sm">
            {content.cta[lang]}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="pt-10 border-t-2 border-dark/10 flex justify-between">
          <span />
          <Link href="/projets/light-geek" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-orange transition-colors">
            Light Geek →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
