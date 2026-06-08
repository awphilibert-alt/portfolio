"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function LaboDeClairiePage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <Link href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-violet transition-colors">
          ← Retour aux projets
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-violet/10 text-violet text-xs font-bold px-3 py-1.5 rounded-full mb-6">No-code · Automatisation</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Le Labo de Clairie<span className="text-violet">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          Un réseau de chorales en pleine croissance dans toute la France, 1200 choristes, aucun outil pour gérer l&apos;administratif. J&apos;ai conçu et livré la stack no-code complète qui a tout rendu possible.
        </motion.p>

        {/* Screenshot placeholder */}
        <motion.div variants={fadeUp} className="bg-white border border-dark/5 overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-violet/5 to-sky/5 flex items-center justify-center">
            <span className="text-dark/20 font-mono text-sm">Screenshot à venir</span>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Le projet</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>Le Labo de Clairie est un réseau de chorales présent dans toute la France. Passé de 40 à 1200 choristes en quelques années, le volume de gestion administrative est devenu impossible à traiter manuellement.</p>
              <p>J&apos;ai construit l&apos;intégralité du back-office : base de données unifiée, gestion des inscriptions, réinscriptions et changements de forfait (des dizaines de combinaisons), facturation automatisée, relances de paiement, inscription et désinscription automatique sur Circle selon le statut de paiement.</p>
              <p>Sans cette stack, rien de tout ça n&apos;aurait pu fonctionner à cette échelle. Avant mon intervention, tout était géré à la main.</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Stack technique</h2>
            <ul className="space-y-3">
              {[
                "Airtable (base de données unifiée choristes/forfaits)",
                "Tally (formulaires d'inscription et réinscription)",
                "Stripe (facturation automatisée, 400K€ traités)",
                "Make (automatisations, 2 ETP remplacés)",
                "Circle (communauté, sync auto inscription/désinscription)",
                "Scaling de 40 à 1200 choristes (x30)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 bg-violet flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Chiffres */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: "x30", label: "Scaling choristes" },
            { value: "400K€", label: "Paiements traités" },
            { value: "2 ETP", label: "Remplacés par l'auto" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center">
              <div className="font-heading text-2xl font-bold text-violet mb-1">{stat.value}</div>
              <div className="text-dark/40 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
