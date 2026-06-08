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

export default function MaisonDuBonheurPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-rose transition-colors">
          ← Retour aux projets
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">App collaborative</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          La Maison du Bonheur<span className="text-rose">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          App de planification de vacances collaboratives entre familles. Chambres, planning, cuisine, courses, budget partagé type Tricount.
        </motion.p>

        {/* Screenshot placeholder */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl border border-dark/5 overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-rose/5 to-orange/5 flex items-center justify-center">
            <span className="text-dark/20 font-mono text-sm">Screenshot à venir</span>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Le projet</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>Une app complète pour organiser des vacances à plusieurs familles : attribution des chambres, planning jour par jour avec RSVP, binômes cuisine auto-générés, liste de courses liée aux menus.</p>
              <p>Le budget est réparti proportionnellement aux nuits de chaque famille avec un algorithme type Tricount pour la simplification des dettes.</p>
              <p>L&apos;app inclut aussi une page d&apos;abonnement avec Stripe Checkout (3 plans, toggle mensuel/annuel, essai gratuit).</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Stack technique</h2>
            <ul className="space-y-3">
              {["React 18 + Vite 5", "100% inline styles (pas de CSS externe)", "Persistance localStorage", "Stripe Checkout (serverless Vercel)", "Algorithme Tricount (simplification dettes)", "Générateur de binômes cuisine équitables", "Deploy auto Vercel depuis main"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Fonctionnalites */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-heading text-lg font-bold mb-6">Fonctionnalités</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Chambres & attribution", "Planning & RSVP", "Binômes cuisine", "Activités filtrables", "Profils familles", "Liste de courses", "Suivi dépenses", "Budget proportionnel", "Abonnement Stripe"].map((feat) => (
              <div key={feat} className="bg-white rounded-xl px-4 py-3 text-sm text-dark/60">{feat}</div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href="https://maison-du-bonheur-2026.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
          >
            Voir l&apos;app en ligne →
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
