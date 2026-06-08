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

export default function ColidaysPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <Link href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-rose transition-colors">
          ← Retour aux projets
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">App · React + Supabase</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Colidays<span className="text-rose">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          L&apos;app pour les vacances à plusieurs. Quand 4 familles louent une maison ensemble, tout devient compliqué : qui prend quelle chambre, combien chacun paye, qui cuisine quand, quoi acheter. Colidays gère tout ça.
        </motion.p>

        {/* Screenshot placeholder */}
        <motion.div variants={fadeUp} className="bg-white border border-dark/5 overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-rose/5 to-orange/5 flex items-center justify-center">
            <span className="text-dark/20 font-mono text-sm">Screenshot à venir</span>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Le problème</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>Plusieurs familles ou groupes d&apos;amis louent une maison de vacances ensemble. 15 personnes, des chambres de tailles et de prix différents, des gens qui n&apos;arrivent pas tous le même jour, qui ne restent pas le même nombre de nuits. Qui paye combien ?</p>
              <p>Et au-delà de l&apos;argent : qui cuisine quel soir, quoi acheter pour les repas, quelles activités faire dans le coin, comment se mettre d&apos;accord à 15.</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">La solution</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>Colidays centralise toute l&apos;organisation dans une seule app, avec deux fonctionnalités financières bien distinctes et plusieurs modules de planification.</p>
            </div>
          </div>
        </motion.div>

        {/* Fonctionnalités détaillées */}
        <motion.div variants={fadeUp} className="space-y-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-2">Répartition du loyer</h2>
            <p className="text-dark/60 leading-relaxed">Un algorithme qui calcule la part de chaque personne en fonction de la chambre occupée (taille, salle de bain, vue...), du nombre de nuits et du nombre d&apos;adultes. Une chambre avec salle de bain intégrée ne coûte pas la même chose que la petite chambre à côté de la cuisine.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-2">Dépenses partagées</h2>
            <p className="text-dark/60 leading-relaxed">Fonctionnalité type Tricount. Chacun enregistre ses achats (courses, resto, activités), l&apos;app rééquilibre automatiquement les dettes entre tous les membres. Distinct du loyer : deux comptabilités séparées, zéro confusion.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-2">Attribution des chambres</h2>
            <p className="text-dark/60 leading-relaxed">Visualisation de toutes les chambres avec leurs caractéristiques. Optimisation du remplissage en fonction des familles, des dates d&apos;arrivée et du nombre de couchages.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-2">Planning cuisine et courses</h2>
            <p className="text-dark/60 leading-relaxed">Planning des repas avec binômes cuisine. Liste de courses liée aux menus. Chacun sait quand il cuisine et quoi acheter.</p>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-2">Activités et vote</h2>
            <p className="text-dark/60 leading-relaxed">Recherche d&apos;activités à faire dans le coin, ajout dans l&apos;app, proposition au groupe et vote par les membres. Planning d&apos;activités collaboratif.</p>
          </div>
        </motion.div>

        {/* Stack */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-heading text-lg font-bold mb-4">Stack technique</h2>
          <ul className="space-y-3">
            {[
              "React 18 + Vite 5",
              "Supabase (auth, BDD, real-time)",
              "Stripe (abonnement)",
              "Algorithme de répartition loyer (nuits x chambre x adultes)",
              "Algorithme type Tricount (simplification des dettes)",
              "Deploy auto Vercel",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                <span className="w-1.5 h-1.5 bg-rose flex-shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href="https://maison-du-bonheur-2026.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
          >
            Voir l&apos;app en ligne →
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
