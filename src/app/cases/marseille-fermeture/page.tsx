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

export default function CaseMarseillePage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/cases" className="text-sm font-semibold text-dark/40 hover:text-rose transition-colors">
          ← Tous les cases
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">Data-informed · Décision difficile · Nomad&apos;s 2024</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Fermeture Marseille et Aix<span className="text-rose">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          12 mois de suivi terrain, 3 KPIs, une décision contre-intuitive qui a contribué au retour à la rentabilité.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Situation</h2>
            <p className="text-dark/65 leading-[1.8]">
              Fin 2023, Nomad&apos;s opère dans 6 villes. Marseille (ouverte en 2020) et Aix (ouverte en 2023) avaient été imaginées comme un hub Sud pour mailler le territoire. Sur le terrain, ça ne se passe pas comme prévu.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Task</h2>
            <p className="text-dark/65 leading-[1.8]">
              Décider si je continue à investir sur le hub Sud ou si je redirige les ressources vers les autres villes. Arbitrer entre la conviction initiale et ce que disait la réalité.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Action</h2>
            <p className="text-dark/65 leading-[1.8]">
              J&apos;ai posé un suivi serré sur trois KPIs : CA mensuel par ville, nombre de bars partenaires actifs, nombre de praticien·ne·s réellement opérationnel·le·s. En un an, le diagnostic est tombé. Marseille avait perdu plus de 50% de son CA, on tournait avec 3 bars partenaires actifs, 30 praticien·ne·s inscrit·e·s dont seulement 5 vraiment opérationnel·le·s. J&apos;ai constaté qu&apos;on n&apos;arrivait pas à réamorcer le tissu local depuis Paris, parce que ce marché demande une gestion de proximité. J&apos;ai pris la décision de fermer Marseille et Aix en 2024.
            </p>
          </div>

          <div className="bg-rose/5 border-l-4 border-rose p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">Résultat</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="font-heading text-2xl font-bold text-rose">+35K€</div>
                <p className="text-dark/50 text-sm mt-1">swing EBITDA : -23 500€ en 2023 → +11 800€ en 2024</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-rose">4 villes</div>
                <p className="text-dark/50 text-sm mt-1">restantes ont continué à croître</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-rose">Rentabilité</div>
                <p className="text-dark/50 text-sm mt-1">retour confirmé sur l&apos;exercice 2024</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Learning</h2>
            <p className="text-dark/65 leading-[1.8]">
              Un marché local n&apos;est pas interchangeable, la proximité humaine est un input critique pour ce type de marketplace. Et il faut accepter de fermer une hypothèse qui ne décolle pas. La décision la plus dure que j&apos;ai prise en 9 ans, et c&apos;est celle qui a sauvé la trajectoire de la boîte.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex flex-wrap gap-4">
          <Link href="/cases" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">
            ← Voir tous les cas produit
          </Link>
          <span className="text-dark/20">·</span>
          <Link href="/cases/mads" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-violet transition-colors">
            Système Mads →
          </Link>
          <span className="text-dark/20">·</span>
          <Link href="/cases/le-labo-de-clairie" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-orange transition-colors">
            Le Labo de Clairie →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
