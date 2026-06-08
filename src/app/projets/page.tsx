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

const projects = [
  {
    title: "Le Labo de Clairie",
    slug: "labo-de-clairie",
    tag: "Produit · No-code · PM",
    description: "Scaling d'une chorale de 40 à 1 200 membres, 400K€ traités, 2 ETP automatisés. Puis PM de la nouvelle plateforme : V1 en ligne, 500 préinscrits, objectif 10 000 choristes.",
    color: "violet",
  },
  {
    title: "Light Geek",
    slug: "light-geek",
    tag: "Studio · No-code & IA",
    description: "Mon studio freelance. 9+ projets livrés : sites, apps, agents IA, CRM custom, automatisations.",
    color: "orange",
  },
  {
    title: "Colidays",
    slug: "maison-du-bonheur",
    tag: "App · React + Supabase",
    description: "App de coloc de vacances. Répartition du loyer par chambre/nuits/adultes, dépenses partagées type Tricount, planning cuisine et courses, activités avec vote.",
    color: "rose",
  },
  {
    title: "DAWghters",
    slug: "dawghters",
    tag: "Site · Next.js + Supabase",
    description: "Association de MAO pour femmes et minorités de genre. Admin multi-comptes, CRUD, agenda.",
    color: "sky",
  },
];

// Tailwind safelist for dynamic color classes
const _dependencies = "hover:border-orange hover:border-violet hover:border-rose hover:border-sky text-orange text-violet text-rose text-sky group-hover:text-orange group-hover:text-violet group-hover:text-rose group-hover:text-sky bg-orange bg-violet bg-rose bg-sky";

export default function ProjetsIndexPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/" className="text-sm font-semibold text-dark/40 hover:text-violet transition-colors">
          ← Retour
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-violet/10 text-violet text-xs font-bold px-3 py-1.5 rounded-full mb-6">Product Builder</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Ce que je construis<span className="text-violet">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">
          Une partie des projets livrés en parallèle de la mission PM, à travers mon studio Light Geek. Sites, apps, agents IA, automatisations.
        </motion.p>

        <div className="space-y-6">
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link href={`/projets/${project.slug}`}>
                <div className={`group border-2 border-dark/10 hover:border-${project.color} p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-lg`}>
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${project.color} font-bold mb-4`}>{project.tag}</div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-dark/55 leading-relaxed mb-6 max-w-2xl">{project.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-dark/30 group-hover:text-${project.color} transition-colors`}>Voir le projet →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
