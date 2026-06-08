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

export default function CaseMadsPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/cases" className="text-sm font-semibold text-dark/40 hover:text-violet transition-colors">
          ← Tous les cases
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-violet/10 text-violet text-xs font-bold px-3 py-1.5 rounded-full mb-6">Pricing · Modèle économique · Nomad&apos;s 2019</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Système Mads<span className="text-violet">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          Refonte complète du modèle de pricing B2C en 2019. Toujours en vigueur 7 ans plus tard.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Situation</h2>
            <p className="text-dark/65 leading-[1.8]">
              Avant 2019, le modèle B2C en bars reposait sur un système de commission plafonnée variable selon le lieu (par exemple 20% jusqu&apos;à 60€ par tournée, zéro au-delà). Deux problèmes : côté ops, je passais une journée entière par mois à recalculer les commissions et émettre une facture par praticien·ne, avec des erreurs récurrentes ; côté praticien·ne·s, le tarif était imprévisible et opaque.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Task</h2>
            <p className="text-dark/65 leading-[1.8]">
              Concevoir un nouveau modèle économique qui résolve la friction opérationnelle interne et améliore la transparence côté praticien·ne·s, sans dégrader le revenu.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Action</h2>
            <p className="text-dark/65 leading-[1.8]">
              En 2019, j&apos;ai conçu un système de crédits prépayés appelés Mads. Le principe : la praticien·ne achète un pack à l&apos;avance (par exemple 50 Mads à 129,90€), et chaque inscription à une tournée débite un nombre de Mads variable selon le coût d&apos;opération de la ville. J&apos;ai défini la grille tarifaire par ville, fait coder la mécanique dans la plateforme, et accompagné la transition auprès de la communauté. C&apos;est aussi à ce moment-là que j&apos;ai démarré mon parcours no-code : pour automatiser les paiements PayPal et la facturation autour des Mads, j&apos;ai appris à connecter mes outils, et de fil en aiguille j&apos;ai automatisé une grande partie de mes process internes.
            </p>
          </div>

          <div className="bg-violet/5 border-l-4 border-violet p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">Résultat</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="font-heading text-2xl font-bold text-violet">100%</div>
                <p className="text-dark/50 text-sm mt-1">de la facturation automatisée : 1 journée de calcul manuel libérée chaque mois, zéro erreur</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-violet">60 940€ HT</div>
                <p className="text-dark/50 text-sm mt-1">de CA en 2024 généré par cette mécanique</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-violet">7 ans</div>
                <p className="text-dark/50 text-sm mt-1">de stabilité sans modification structurelle</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-violet">30%</div>
                <p className="text-dark/50 text-sm mt-1">des praticien·ne·s les plus actif·ve·s consomment 50 à 70% des Mads, indicateur d&apos;engagement net</p>
              </div>
            </div>
            <p className="text-dark/50 text-sm mt-6">Encaissement à l&apos;avance : cash dans la boîte avant que la prestation soit consommée, impact direct sur la trésorerie.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Learning</h2>
            <p className="text-dark/65 leading-[1.8]">
              Le déclencheur de mon parcours no-code. Côté produit, j&apos;ai appris qu&apos;un changement de modèle économique réussit quand il résout à la fois une friction ops invisible et une friction utilisateur visible. Et qu&apos;un bon système se mesure à sa stabilité dans le temps : 7 ans sans refonte, c&apos;est mon meilleur indicateur de robustesse.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex flex-wrap gap-4">
          <Link href="/cases" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-violet transition-colors">
            ← Voir tous les cas produit
          </Link>
          <span className="text-dark/20">·</span>
          <Link href="/cases/marseille-fermeture" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">
            Fermeture Marseille / Aix →
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
