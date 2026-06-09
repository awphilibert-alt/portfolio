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

export default function DawghtersPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <Link href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-sky transition-colors">
          ← Retour aux projets
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-sky/10 text-sky text-xs font-bold px-3 py-1.5 rounded-full mb-6">Site associatif</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          DAWghters<span className="text-sky">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          Site vitrine pour une association parisienne dédiée à la MAO et à la création musicale pour les femmes et minorités de genre.
        </motion.p>

        {/* Screenshot placeholder */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl border border-dark/5 overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-sky/5 to-violet/5 flex items-center justify-center">
            <span className="text-dark/20 font-mono text-sm">Screenshot à venir</span>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Le projet</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>DAWghters est une association parisienne qui crée des espaces pour les femmes et minorités de genre dans la production musicale (MAO).</p>
              <p>Le site comprend un organigramme des membres (avec fiches détaillées : photo, style musical, artistes préférés, DAW), un agenda des événements, une page ressources avec des recommandations de professionnelles, et un espace admin protégé.</p>
              <p>L&apos;admin permet à chaque responsable de gérer les membres, événements et ressources de façon autonome avec son propre accès.</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Stack technique</h2>
            <ul className="space-y-3">
              {["Next.js + TypeScript", "Tailwind CSS", "Supabase (auth + base de données)", "Admin multi-comptes", "CRUD membres, événements, ressources", "Responsive mobile-first", "SEO-friendly"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Pages */}
        <motion.div variants={fadeUp}>
          <h2 className="font-heading text-lg font-bold mb-6">Pages du site</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Accueil", "Organigramme", "Agenda", "Ressources", "Rejoindre l'asso", "Nous soutenir", "Contact", "Admin (protégé)"].map((page) => (
              <div key={page} className="bg-white rounded-xl px-4 py-3 text-sm text-dark/60">{page}</div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
