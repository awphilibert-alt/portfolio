"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../../lang-provider";
import { LangToggle } from "../../components/lang-toggle";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const content = {
  back: { fr: "← Retour", en: "← Back" },
  pill: { fr: "Mission PM · en cours · 2026", en: "PM mission · ongoing · 2026" },
  subtitle: {
    fr: "D'une chorale physique de 40 personnes à un produit digital qui vise 10 000 choristes (4 000 en présentiel, 6 000 en ligne). D'abord Product Builder, puis Product Manager.",
    en: "From a 40-person physical choir to a digital product targeting 10,000 members (4,000 in-person, 6,000 online). First Product Builder, then Product Manager.",
  },
  situation: { fr: "Situation", en: "Situation" },
  situationP1: {
    fr: "Le Labo de Clairie est une chorale physique qui a commencé à grossir très vite. Quand j'arrive en mai 2025, <strong class=\"text-dark\">tout est fait à la main</strong> : pas de base de données, pas d'automatisation. Le CEO a besoin de se dégager du temps pour se concentrer sur la vision et la croissance.",
    en: "Le Labo de Clairie is a physical choir that started growing very fast. When I joined in May 2025, <strong class=\"text-dark\">everything was done manually</strong>: no database, no automation. The CEO needed to free up time to focus on vision and growth.",
  },
  situationP2: {
    fr: "<strong class=\"text-dark\">Phase 1 (2025, Product Builder)</strong> : je livre une stack no-code complète. Base de données relationnelle, automatisations (inscriptions, réinscriptions, forfaits, Stripe, relances mail), mise en place de Circle comme plateforme communautaire. La chorale passe de 40 à 1 200 choristes.",
    en: "<strong class=\"text-dark\">Phase 1 (2025, Product Builder)</strong>: I delivered a complete no-code stack. Relational database, automations (registrations, re-registrations, plans, Stripe, email reminders), Circle setup as community platform. The choir grew from 40 to 1,200 members.",
  },
  situationP3: {
    fr: "<strong class=\"text-dark\">Phase 2 (2026)</strong> : le concept a fait ses preuves et l'entreprise a une ambition très forte de croissance rapide. 10 nouvelles chorales ouvrent dans toute la France (une trentaine au total), et surtout la création d'un <strong class=\"text-dark\">produit entièrement nouveau : une chorale exclusivement en ligne</strong> avec un concept de concert participatif où le public chante. Circle atteint ses limites. Ils veulent une plateforme custom.",
    en: "<strong class=\"text-dark\">Phase 2 (2026)</strong>: the concept proved itself and the company has a strong ambition for rapid growth. 10 new choirs opening across France (around thirty total), and most importantly the creation of an <strong class=\"text-dark\">entirely new product: an online-only choir</strong> with a participatory concert concept where the audience sings. Circle reached its limits. They want a custom platform.",
  },
  seeProject: { fr: "voir le projet build", en: "see the build project" },
  task: { fr: "Task", en: "Task" },
  taskP1: {
    fr: "L'ambition est forte, les idées fusent, <strong class=\"text-dark\">de nouvelles priorités arrivent en permanence</strong>. Le CEO produit des briefs denses (des dizaines de pages), le développeur implémente ce qu'il reçoit. Mais personne ne priorise, personne ne cadre. <strong class=\"text-dark\">Il manque quelqu'un entre les deux pour structurer, arbitrer et protéger le delivery.</strong> C'est là qu'on me demande d'intervenir en tant que PM.",
    en: "The ambition is strong, ideas are flying, <strong class=\"text-dark\">new priorities keep coming</strong>. The CEO produces dense briefs (dozens of pages), the developer implements what he receives. But no one prioritizes, no one frames. <strong class=\"text-dark\">Someone is missing between the two to structure, arbitrate, and protect delivery.</strong> That's when I was asked to step in as PM.",
  },
  taskP2: {
    fr: "En parallèle, la chorale en ligne est un <strong class=\"text-dark\">produit dont le concept n'existe pas encore sur le marché</strong>, mais qui s'appuie sur une communauté et un usage déjà prouvés (1 200 choristes, plateforme Circle). Il faut cadrer la vision, le positionnement et le modèle — un upgrade, pas un pari parti de zéro.",
    en: "In parallel, the online choir is a <strong class=\"text-dark\">product whose concept doesn't exist on the market yet</strong>, but which builds on a proven community and usage (1,200 members, Circle platform). The vision, positioning, and model need framing — an upgrade, not a bet from scratch.",
  },
  action: { fr: "Action", en: "Action" },
  actionP1: {
    fr: "<strong class=\"text-dark\">Priorisation et cadrage</strong> : en l'état, les briefs représentent trois ans de développement. J'ai découpé le périmètre en modules, priorisé par impact et faisabilité, et traduit la vision en specs exploitables. Alignement continu entre l'ambition produit et les contraintes techniques pour que chaque sprint livre de la valeur.",
    en: "<strong class=\"text-dark\">Prioritization and framing</strong>: as-is, the briefs represented three years of development. I broke the scope into modules, prioritized by impact and feasibility, and translated the vision into actionable specs. Continuous alignment between product ambition and technical constraints so each sprint delivers value.",
  },
  actionP2: {
    fr: "<strong class=\"text-dark\">Cadrage d'un nouveau produit</strong> : contribution à la vision et au positionnement de la chorale en ligne (concept inédit, pas de référent marché). Cadrage du modèle, des parcours utilisateurs, de l'architecture fonctionnelle.",
    en: "<strong class=\"text-dark\">New product framing</strong>: contributed to the vision and positioning of the online choir (unprecedented concept, no market reference). Framed the business model, user journeys, and functional architecture.",
  },
  actionP3: {
    fr: "<strong class=\"text-dark\">Architecture modulaire</strong> : conception en composants réutilisables pour absorber la croissance (30 chorales physiques + chorale en ligne + concert participatif).",
    en: "<strong class=\"text-dark\">Modular architecture</strong>: designed with reusable components to absorb growth (30 physical choirs + online choir + participatory concert).",
  },
  actionP4: {
    fr: "<strong class=\"text-dark\">Pilotage du lancement</strong> : backlog complet priorisé par impact et faisabilité, coordination CEO–dev sous contrainte de délai, mise en ligne de la V1 avec préinscriptions ouvertes (500 inscrits à date). Interviews utilisateurs et itérations sur les versions suivantes.",
    en: "<strong class=\"text-dark\">Launch management</strong>: complete backlog prioritized by impact and feasibility, CEO-dev coordination under deadline pressure, V1 launch with open pre-registrations (500 sign-ups to date). User interviews and iterations on subsequent versions.",
  },
  result: { fr: "Résultat (à date)", en: "Result (to date)" },
  stats: {
    fr: [
      { value: "500", desc: "préinscrits sur la V1 avant le lancement : demande validée" },
      { value: "1 200 → 10 000", desc: "choristes actifs aujourd'hui, objectif 10 000 (4 000 présentiel + 6 000 en ligne)" },
      { value: "Backlog priorisé", desc: "3 ans de briefs découpés et arbitrés pour un lancement cadré sous pression" },
    ],
    en: [
      { value: "500", desc: "pre-registrations on V1 before launch: demand validated" },
      { value: "1,200 → 10,000", desc: "active members today, target 10,000 (4,000 in-person + 6,000 online)" },
      { value: "Prioritized backlog", desc: "3 years of briefs broken down and arbitrated for a high-pressure launch" },
    ],
  },
  statsNote: {
    fr: "Migration depuis Circle (plateforme communautaire déjà en usage) vers une plateforme custom : un upgrade adossé à un usage prouvé, pas un produit parti de zéro.",
    en: "Migration from Circle (community platform already in use) to a custom platform: an upgrade backed by proven usage, not a product built from scratch.",
  },
  learning: { fr: "Learning", en: "Learning" },
  learningP: {
    fr: "Mon premier vrai exercice de stakeholder management produit. Apprendre à <strong class=\"text-dark\">influencer la vision sans la posséder</strong> : contribuer au cadrage, proposer, challenger, et accepter que la décision finale n'est pas la mienne. C'est une compétence directement transposable au rôle PM dans une équipe avec un sponsor fort.",
    en: "My first real exercise in product stakeholder management. Learning to <strong class=\"text-dark\">influence the vision without owning it</strong>: contribute to framing, propose, challenge, and accept that the final decision isn't mine. A skill directly transferable to the PM role in a team with a strong sponsor.",
  },
} as const;

function Html({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function CaseLaboPage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <div className="flex items-center">
          <a href="/#cases" className="text-sm font-semibold text-dark/40 hover:text-orange transition-colors">{content.back[lang]}</a>
          <LangToggle />
        </div>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Le Labo de Clairie<span className="text-orange">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.situation[lang]}</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p><Html html={content.situationP1[lang]} /></p>
              <p><Html html={content.situationP2[lang]} /> (<Link href="/projets/labo-de-clairie" className="text-orange underline">{content.seeProject[lang]}</Link>).</p>
              <p><Html html={content.situationP3[lang]} /></p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.task[lang]}</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p><Html html={content.taskP1[lang]} /></p>
              <p><Html html={content.taskP2[lang]} /></p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.action[lang]}</h2>
            <div className="text-dark/65 leading-[1.8] space-y-4">
              <p><Html html={content.actionP1[lang]} /></p>
              <p><Html html={content.actionP2[lang]} /></p>
              <p><Html html={content.actionP3[lang]} /></p>
              <p><Html html={content.actionP4[lang]} /></p>
            </div>
          </div>

          <div className="bg-orange/5 border-l-4 border-orange p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">{content.result[lang]}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {content.stats[lang].map((s) => (
                <div key={s.value}>
                  <div className="font-heading text-2xl font-bold text-orange">{s.value}</div>
                  <p className="text-dark/50 text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-dark/50 text-sm mt-6">{content.statsNote[lang]}</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.learning[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]"><Html html={content.learningP[lang]} /></p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex justify-between">
          <Link href="/cases/marseille-fermeture" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">
            {lang === "fr" ? "← Fermeture Marseille / Aix" : "← Marseille / Aix Closure"}
          </Link>
          <span />
        </motion.div>
      </motion.div>
    </main>
  );
}
