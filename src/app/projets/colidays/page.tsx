"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../../lang-provider";
import { ImageLightbox } from "../../components/image-lightbox";
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
  pill: { fr: "App · React + Supabase", en: "App · React + Supabase" },
  subtitle: {
    fr: "L'app pour les vacances à plusieurs. Quand 4 familles louent une maison ensemble, tout devient compliqué : qui prend quelle chambre, combien chacun paye, qui cuisine quand, quoi acheter. Colidays gère tout ça.",
    en: "The app for group vacations. When 4 families rent a house together, everything gets complicated: who gets which room, how much each person pays, who cooks when, what to buy. Colidays handles it all.",
  },
  projectTitle: { fr: "Le projet", en: "The project" },
  projectP1: {
    fr: "15 personnes, des chambres de tailles et de prix différents, des gens qui n'arrivent pas tous le même jour, qui ne restent pas le même nombre de nuits. Qui paye combien ?",
    en: "15 people, rooms of different sizes and prices, people arriving on different days, staying different numbers of nights. Who pays what?",
  },
  projectP2: {
    fr: "Colidays centralise toute l'organisation : répartition du loyer par chambre/nuits/adultes, dépenses partagées type Tricount (deux comptabilités séparées), attribution des chambres, planning cuisine avec liste de courses, et activités avec vote collaboratif.",
    en: "Colidays centralizes all organization: rent split by room/nights/adults, shared expenses Tricount-style (two separate ledgers), room assignment, meal planning with grocery lists, and activities with collaborative voting.",
  },
  projectP3: {
    fr: "V1 en beta test, hard codée. En cours de développement.",
    en: "V1 in beta test, hard coded. Under development.",
  },
  stackTitle: { fr: "Stack technique", en: "Tech stack" },
  stack: {
    fr: ["React 18 + Vite 5", "Supabase (auth, BDD, real-time)", "Stripe (abonnement)", "Algorithme de répartition loyer (nuits x chambre x adultes)", "Algorithme type Tricount (simplification des dettes)", "Deploy auto Vercel"],
    en: ["React 18 + Vite 5", "Supabase (auth, DB, real-time)", "Stripe (subscription)", "Rent split algorithm (nights x room x adults)", "Tricount-style algorithm (debt simplification)", "Auto deploy Vercel"],
  },
  featuresTitle: { fr: "Fonctionnalités", en: "Features" },
  features: {
    fr: [
      { title: "Répartition du loyer", desc: "Un algorithme qui calcule la part de chaque personne en fonction de la chambre occupée (taille, salle de bain, vue...), du nombre de nuits et du nombre d'adultes." },
      { title: "Dépenses partagées", desc: "Type Tricount. Chacun enregistre ses achats, l'app rééquilibre automatiquement les dettes. Distinct du loyer : deux comptabilités séparées, zéro confusion." },
      { title: "Attribution des chambres", desc: "Visualisation de toutes les chambres avec leurs caractéristiques. Optimisation du remplissage en fonction des familles et des dates." },
      { title: "Planning cuisine et courses", desc: "Planning des repas avec binômes cuisine. Liste de courses liée aux menus." },
      { title: "Activités et vote", desc: "Recherche d'activités dans le coin, proposition au groupe et vote par les membres." },
    ],
    en: [
      { title: "Rent split", desc: "An algorithm that calculates each person's share based on room (size, bathroom, view...), number of nights, and number of adults." },
      { title: "Shared expenses", desc: "Tricount-style. Everyone logs their purchases, the app automatically rebalances debts. Separate from rent: two ledgers, zero confusion." },
      { title: "Room assignment", desc: "Visualization of all rooms with their characteristics. Optimized allocation based on families and dates." },
      { title: "Meal planning & groceries", desc: "Meal schedule with cooking pairs. Grocery list linked to menus." },
      { title: "Activities & voting", desc: "Search local activities, propose to the group, and vote." },
    ],
  },
} as const;

export default function ColidaysPage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <div className="flex items-center">
          <a href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-rose transition-colors">{content.back[lang]}</a>
          <LangToggle />
        </div>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">Colidays<span className="text-rose">.</span></motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="mb-16">
          <ImageLightbox src="/screenshot-colidays.png" alt="Colidays" />
        </motion.div>

        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">{content.projectTitle[lang]}</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>{content.projectP1[lang]}</p>
              <p>{content.projectP2[lang]}</p>
              <p>{content.projectP3[lang]}</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">{content.stackTitle[lang]}</h2>
            <ul className="space-y-3">
              {content.stack[lang].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-8 mb-16">
          <h2 className="font-heading text-lg font-bold">{content.featuresTitle[lang]}</h2>
          {content.features[lang].map((feat) => (
            <div key={feat.title}>
              <h3 className="font-heading text-sm font-bold mb-1">{feat.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="pt-10 border-t-2 border-dark/10 flex justify-between">
          <Link href="/projets/light-geek" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-orange transition-colors">← Light Geek</Link>
          <Link href="/projets/dawghters" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-sky transition-colors">DAWghters →</Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
