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

const cases = [
  {
    title: "Système Mads",
    slug: "mads",
    tag: "Pricing · Modèle économique · Nomad's 2019",
    description: "Refonte complète du modèle de pricing B2C. Remplacement d'un système de commissions calculé à la main par des crédits prépayés. 100% de la facturation automatisée, stable depuis 7 ans. C'est ce projet qui a déclenché mon parcours no-code.",
    color: "violet",
  },
  {
    title: "Fermeture Marseille et Aix",
    slug: "marseille-fermeture",
    tag: "Data-informed · Décision difficile · Nomad's 2024",
    description: "12 mois de suivi terrain sur 3 KPIs, fermeture de 2 villes non rentables. Contribution directe au retour à la rentabilité : swing EBITDA de +35K€. La décision la plus dure en 9 ans, et celle qui a sauvé la trajectoire.",
    color: "rose",
  },
  {
    title: "Le Labo de Clairie · Nouvelle plateforme",
    slug: "le-labo-de-clairie",
    tag: "Mission PM en cours · 2025-2026",
    description: "D'abord Product Builder (stack no-code, 40 → 1 200 choristes), puis PM de la nouvelle plateforme. Backlog priorisé pour un lancement sous pression, V1 en ligne (500 préinscrits), cadrage d'un concept inédit (chorale en ligne), stakeholder management CEO/dev.",
    color: "orange",
  },
];

// Tailwind safelist for dynamic color classes
const _dependencies = "hover:border-orange hover:border-violet hover:border-rose hover:border-sky text-orange text-violet text-rose text-sky group-hover:text-orange group-hover:text-violet group-hover:text-rose group-hover:text-sky";

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/" className="text-sm font-semibold text-dark/40 hover:text-lime transition-colors">
          ← Retour
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-lime/10 text-lime text-xs font-bold px-3 py-1.5 rounded-full mb-6">Cas produit PM</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Trois décisions produit qui ont fait la différence<span className="text-lime">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          Pricing, data-informed decision, stakeholder management. Trois cas réels, deux chez Nomad&apos;s (2019 et 2024), un en cours sur Le Labo de Clairie.
        </motion.p>

        <div className="space-y-6">
          {cases.map((c) => (
            <motion.div key={c.slug} variants={fadeUp}>
              <Link href={`/cases/${c.slug}`}>
                <div className={`group border-2 border-dark/10 hover:border-${c.color} p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-lg`}>
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${c.color} font-bold mb-4`}>{c.tag}</div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{c.title}</h2>
                  <p className="text-dark/55 leading-relaxed mb-6 max-w-2xl">{c.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-dark/30 group-hover:text-${c.color} transition-colors`}>Lire le case complet →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
