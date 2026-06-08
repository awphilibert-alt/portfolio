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

export default function FormationNoePage() {
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
        <motion.div variants={fadeUp} className="inline-block bg-lime/10 text-lime text-xs font-bold px-3 py-1.5 rounded-full mb-6">Formation Product Management · 2026</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Noé · mon premier mois en tant que Product Manager<span className="text-lime">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          4 semaines intensives en équipe sur une problématique sponsor BlaBlaCar. Programme certifié France Compétences (RS6636), 96% des alumni en poste PM dans les 6 mois.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-20">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Le programme</h2>
            <p className="text-dark/65 leading-[1.8]">
              Noé est positionné comme ton premier mois en tant que PM. Cours le matin, mise en pratique l&apos;après-midi sur le use case sponsor. 4 semaines bootcamp full-time. Sponsors officiels : BlaBlaCar, Decathlon, Getaround. Certifié France Compétences (RS6636). Réseau d&apos;une vingtaine de PMs, Head of Product et CPO rencontrés pendant la formation (PayFit, Spendesk, BackMarket, Alan, Google, Stuart, Qonto, ManoMano).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-8">Ce que j&apos;y ai pratiqué</h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-heading text-lg font-bold text-orange mb-3">Strategy</h3>
                <p className="text-dark/65 leading-[1.8]">
                  Vision produit, business model, Product-Market-Fit, go-to-market. Metrics par type de produit (SaaS, Consumer, Platform). Impact de la stratégie sur la vision, les objectifs et la roadmap.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-violet mb-3">Problem</h3>
                <p className="text-dark/65 leading-[1.8]">
                  Data for PMs : segmentation, A/B test, exploration SQL. User research : interviews, usability testing, recherche quantitative. Priorisation : RICE, MoSCoW, Cost / Impact. Notions tech pour qualifier le coût technique d&apos;une solution.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-rose mb-3">Solution</h3>
                <p className="text-dark/65 leading-[1.8]">
                  Design : UX/UI, duo PM-Designer, Figma, test utilisateur et itération. Specs : user stories, tracking plan, release planning, plan de rollout, edge cases. Delivery : Scrum, sprint, rôles dans la squad. Product Launch : rollout, beta testing, marketing produit interne et externe.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-sky mb-3">Impact</h3>
                <p className="text-dark/65 leading-[1.8]">
                  Communication stakeholders, savoir dire non, construction de la roadmap, public speaking. IA pour PMs : devenir PM augmenté·e grâce à l&apos;IA, création d&apos;un mini-agent personnalisé sur Dust.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">Le use case BlaBlaCar</h2>
            <div className="bg-sky/5 border-l-4 border-sky p-8 mb-8">
              <p className="text-dark/65 leading-[1.8]">
                Travail d&apos;équipe de 4 personnes sur 4 semaines. Présentation finale à Nicolas Beytout, Senior PM chez BlaBlaCar.
              </p>
            </div>
            <p className="text-dark/65 leading-[1.8] mb-8">
              Sujet : How could we improve the trip success rate of our Newbie Drivers? Objectif : faire passer le Success Rate des newbie drivers de 30% à 50%. On a déroulé tout le process PM : discovery quantitative et qualitative, hypothèses, user research, priorisation, benchmark, solutions, itérations.
            </p>

            <h3 className="font-heading text-lg font-bold mb-4">L&apos;approche</h3>
            <ol className="space-y-4 mb-12">
              {[
                "Discovery : interviews utilisateur + exploration SQL pour qualifier le baseline (30%)",
                "Hypothesis : ce qui pourrait influencer le Success Rate (photo profil, description trajet, certification, durée du trajet, prix)",
                "User Research : 4 thèmes (Trust & safety, Trip reliability, Comfort expectations, Flexibility & convenience)",
                "Prioritization : tableau Problème → Solution → Impact → Complexité (méthodo RICE)",
                "Benchmark : Airbnb \"New\" badge, Etsy \"New seller\", Upwork \"Rising Talent\", Hinge/Bumble, Gens de Confiance",
                "Solution : prototypage Figma sur 4 fonctionnalités (Sponsorship, Verbatim, Verified ID, Flexibility)",
                "Itérations basées sur les retours user research",
                "Présentation finale au sponsor",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-dark/65 leading-[1.8]">
                  <span className="font-mono text-xs text-dark/30 flex-shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="bg-violet/5 border-l-4 border-violet p-8">
              <h3 className="font-heading text-lg font-bold mb-4">Ma contribution propre</h3>
              <p className="text-dark/65 leading-[1.8]">
                Animation de la phase discovery + conduite des interviews utilisateur. Benchmark concurrentiel (en solo). Sur la phase solution, prise en charge de la fonctionnalité Verbatim de bout en bout : conception UX, prototypes Figma, test utilisateur, itération après retours. Première itération sur la fonctionnalité Verified ID.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex flex-wrap gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-lime transition-colors">
            ← Retour au portfolio
          </Link>
          <span className="text-dark/20">·</span>
          <Link href="/cases" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">
            Voir mes vrais cas produit en entreprise →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
