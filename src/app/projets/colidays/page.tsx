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
  pill: { fr: "App · React + Supabase · IA", en: "App · React + Supabase · AI" },
  subtitle: {
    fr: "L'app pour les vacances à plusieurs. Quand 3-4 familles louent une grande maison ensemble, l'organisation part en chaos : chambres, cuisine, courses, dépenses, activités. Colidays centralise tout dans un outil collaboratif, multi-comptes, temps réel. En production.",
    en: "The app for group vacations. When 3-4 families rent a house together, organization turns to chaos: rooms, cooking, groceries, expenses, activities. Colidays centralizes everything in one collaborative, multi-account, real-time tool. In production.",
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
    fr: "Application en production. Multi-utilisateurs, authentification email et Google, base de données PostgreSQL avec sécurité par ligne (chaque famille ne voit que ses données), stockage photos.",
    en: "Application in production. Multi-user, email and Google authentication, PostgreSQL database with row-level security (each family only sees their own data), photo storage.",
  },
  stackTitle: { fr: "Stack technique", en: "Tech stack" },
  stack: {
    fr: [
      "React 18 + Vite · mobile-first, styles inline",
      "Supabase — Auth email + Google OAuth, PostgreSQL + RLS, Storage",
      "Supabase Edge Functions (Deno) — appels Claude côté serveur, clé API jamais exposée",
      "API Anthropic · Claude Haiku 4.5 (suggestions IA, génération ingrédients)",
      "Google Places API (géocodage pour suggestions locales)",
      "Deploy auto Vercel (CI depuis GitHub)",
    ],
    en: [
      "React 18 + Vite · mobile-first, inline styles",
      "Supabase — email + Google OAuth auth, PostgreSQL + RLS, Storage",
      "Supabase Edge Functions (Deno) — Claude calls server-side, API key never exposed",
      "Anthropic API · Claude Haiku 4.5 (AI suggestions, ingredient generation)",
      "Google Places API (geocoding for local suggestions)",
      "Auto deploy Vercel (CI from GitHub)",
    ],
  },
  featuresTitle: { fr: "Fonctionnalités", en: "Features" },
  features: {
    fr: [
      { title: "Attribution des chambres", desc: "2 modes d'optimisation au choix, avec explications. Chaque famille voit sa chambre assignée, ses dates, son coût calculé automatiquement." },
      { title: "Répartition du loyer", desc: "5 algorithmes au choix : par famille, par adulte, par personne, pondéré, ou par chambre. L'app calcule qui doit combien à qui." },
      { title: "Dépenses partagées", desc: "Chacun enregistre ses achats, l'app simplifie les dettes automatiquement. Comptabilité séparée du loyer : zéro confusion." },
      { title: "Planning cuisine, courses et activités", desc: "Tours de cuisine avec widget 'Aujourd'hui', liste de courses collaborative liée aux menus, planning jour par jour avec créneaux matin/après-midi/soir." },
      { title: "Carnet de recettes & invitations", desc: "Import de recette depuis une URL, recherche de recettes, invitations par lien, photos de couverture (upload ou banque d'ambiances)." },
    ],
    en: [
      { title: "Room assignment", desc: "2 optimization modes with explanations. Each family sees their assigned room, dates, and automatically calculated cost." },
      { title: "Rent split", desc: "5 algorithms: by family, by adult, by person, weighted, or by room. The app calculates who owes what to whom." },
      { title: "Shared expenses", desc: "Everyone logs their purchases, the app automatically simplifies debts. Separate ledger from rent: zero confusion." },
      { title: "Meal planning, groceries & activities", desc: "Cooking schedule with 'Today' widget, collaborative grocery list linked to menus, day-by-day schedule with morning/afternoon/evening slots." },
      { title: "Recipe book & invitations", desc: "Recipe import from URL, recipe search, invite by link, cover photos (upload or mood gallery)." },
    ],
  },
  aiTitle: { fr: "Features IA", en: "AI features" },
  aiFeatures: {
    fr: [
      { title: "Suggestions d'activités et restos par IA", desc: "L'utilisateur saisit l'adresse du séjour et l'ambiance (famille, festif, nature...). L'app géocode l'adresse via Google Places, trouve les lieux proches, puis Claude rédige des descriptions personnalisées et catégorise les suggestions. Résultat : une liste de sorties prêtes à importer dans le planning. LLM + API géo : le LLM apporte la couche éditoriale par-dessus des données factuelles." },
      { title: "Génération d'ingrédients par IA", desc: "À partir d'un nom de plat ou d'une recette, Claude génère la liste d'ingrédients, directement importable dans la liste de courses." },
    ],
    en: [
      { title: "AI activity & restaurant suggestions", desc: "The user enters the stay address and vibe (family, festive, nature...). The app geocodes via Google Places, finds nearby spots, then Claude writes personalized descriptions and categorizes suggestions. Result: a ready-to-import list of outings. LLM + geo API: the LLM adds the editorial layer on top of factual data." },
      { title: "AI ingredient generation", desc: "From a dish name or recipe, Claude generates the ingredient list, directly importable into the grocery list." },
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

        <motion.div variants={fadeUp} className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-lg font-bold">{content.aiTitle[lang]}</h2>
            <span className="font-mono text-[10px] uppercase tracking-wider bg-rose/10 text-rose px-2 py-1 rounded-full">Claude Haiku 4.5</span>
          </div>
          {content.aiFeatures[lang].map((feat) => (
            <div key={feat.title} className="border-l-4 border-rose pl-5">
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
