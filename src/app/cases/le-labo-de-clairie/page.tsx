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

export default function CaseLaboPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <Link href="/cases" className="text-sm font-semibold text-dark/40 hover:text-orange transition-colors">
          ← Tous les cases
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">Mission PM · en cours · 2026</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Le Labo de Clairie<span className="text-orange">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          D&apos;une chorale physique de 40 personnes à un produit digital qui vise 10 000 choristes (4 000 en présentiel, 6 000 en ligne). D&apos;abord Product Builder, puis Product Manager.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Situation</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p>
                Le Labo de Clairie est une chorale physique qui a commencé à grossir très vite. Quand j&apos;arrive en mai 2025, <strong className="text-dark">tout est fait à la main</strong> : pas de base de données, pas d&apos;automatisation. Le CEO a besoin de se dégager du temps pour se concentrer sur la vision et la croissance.
              </p>
              <p>
                <strong className="text-dark">Phase 1 (2025, Product Builder)</strong> : je livre une stack no-code complète. Base de données relationnelle, automatisations (inscriptions, réinscriptions, forfaits, Stripe, relances mail), mise en place de Circle comme plateforme communautaire. La chorale passe de 40 à 1 200 choristes (<Link href="/projets/labo-de-clairie" className="text-orange underline">voir le projet build</Link>).
              </p>
              <p>
                <strong className="text-dark">Phase 2 (2026)</strong> : le concept a fait ses preuves et l&apos;entreprise a une ambition très forte de croissance rapide. 10 nouvelles chorales ouvrent dans toute la France (une trentaine au total), et surtout la création d&apos;un <strong className="text-dark">produit entièrement nouveau : une chorale exclusivement en ligne</strong> avec un concept de concert participatif où le public chante. Circle atteint ses limites. Ils veulent une plateforme custom.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Task</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p>
                L&apos;ambition est forte, les idées fusent, <strong className="text-dark">de nouvelles priorités arrivent en permanence</strong>. Le CEO produit des briefs denses (des dizaines de pages), le développeur implémente ce qu&apos;il reçoit. Mais personne ne priorise, personne ne cadre. <strong className="text-dark">Il manque quelqu&apos;un entre les deux pour structurer, arbitrer et protéger le delivery.</strong> C&apos;est là qu&apos;on me demande d&apos;intervenir en tant que PM.
              </p>
              <p>
                En parallèle, la chorale en ligne est un <strong className="text-dark">produit dont le concept n&apos;existe pas encore sur le marché</strong>, mais qui s&apos;appuie sur une communauté et un usage déjà prouvés (1 200 choristes, plateforme Circle). Il faut cadrer la vision, le positionnement et le modèle — un upgrade, pas un pari parti de zéro.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Action</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p>
                <strong className="text-dark">Priorisation et cadrage</strong> : en l&apos;état, les briefs représentent trois ans de développement. J&apos;ai découpé le périmètre en modules, priorisé par impact et faisabilité, et traduit la vision en specs exploitables. Alignement continu entre l&apos;ambition produit et les contraintes techniques pour que chaque sprint livre de la valeur.
              </p>
              <p>
                <strong className="text-dark">Cadrage d&apos;un nouveau produit</strong> : contribution à la vision et au positionnement de la chorale en ligne (concept inédit, pas de référent marché). Cadrage du modèle, des parcours utilisateurs, de l&apos;architecture fonctionnelle.
              </p>
              <p>
                <strong className="text-dark">Architecture modulaire</strong> : conception en composants réutilisables pour absorber la croissance (30 chorales physiques + chorale en ligne + concert participatif).
              </p>
              <p>
                <strong className="text-dark">Pilotage du lancement</strong> : backlog complet priorisé par impact et faisabilité, coordination CEO–dev sous contrainte de délai, mise en ligne de la V1 avec préinscriptions ouvertes (500 inscrits à date). Interviews utilisateurs et itérations sur les versions suivantes.
              </p>
            </div>
          </div>

          <div className="bg-orange/5 border-l-4 border-orange p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">Résultat (à date)</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="font-heading text-2xl font-bold text-orange">500</div>
                <p className="text-dark/50 text-sm mt-1">préinscrits sur la V1 avant le lancement : demande validée</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-orange">1 200 → 10 000</div>
                <p className="text-dark/50 text-sm mt-1">choristes actifs aujourd&apos;hui, objectif 10 000 (4 000 présentiel + 6 000 en ligne)</p>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-orange">Backlog priorisé</div>
                <p className="text-dark/50 text-sm mt-1">3 ans de briefs découpés et arbitrés pour un lancement cadré sous pression</p>
              </div>
            </div>
            <p className="text-dark/50 text-sm mt-6">Migration depuis Circle (plateforme communautaire déjà en usage) vers une plateforme custom : un upgrade adossé à un usage prouvé, pas un produit parti de zéro.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Learning</h2>
            <p className="text-dark/65 leading-[1.8]">
              Mon premier vrai exercice de stakeholder management produit. Apprendre à <strong className="text-dark">influencer la vision sans la posséder</strong> : contribuer au cadrage, proposer, challenger, et accepter que la décision finale n&apos;est pas la mienne. C&apos;est une compétence directement transposable au rôle PM dans une équipe avec un sponsor fort.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex flex-wrap gap-4">
          <Link href="/cases" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-orange transition-colors">
            ← Voir tous les cas produit
          </Link>
          <span className="text-dark/20">·</span>
          <Link href="/projets/labo-de-clairie" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-violet transition-colors">
            Voir le projet build (phase 1) →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
