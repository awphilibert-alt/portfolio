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

export default function LightGeekPage() {
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </Link>
        <Link href="/#projets" className="text-sm font-semibold text-dark/40 hover:text-orange transition-colors">
          ← Retour aux projets
        </Link>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">Site vitrine · No-code</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Light Geek<span className="text-orange">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-12 max-w-2xl">
          Le site de mon studio no-code & automatisation IA. Conçu et construit de A à Z en vibe coding.
        </motion.p>

        {/* Screenshot placeholder */}
        <motion.div variants={fadeUp} className="bg-white rounded-3xl border border-dark/5 overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-orange/5 to-rose/5 flex items-center justify-center">
            <span className="text-dark/20 font-mono text-sm">Screenshot à venir</span>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Le projet</h2>
            <div className="text-dark/60 leading-relaxed space-y-4">
              <p>Light Geek est mon studio d&apos;automatisation IA et no-code. J&apos;ai conçu et construit le site vitrine moi-même, en pur HTML/CSS/JS, sans framework ni build process.</p>
              <p>Le site comprend une landing page avec un design audacieux (fond dark, néon, grille animée), un formulaire de candidature via Tally, et un système d&apos;analytics via Umami.</p>
              <p>J&apos;ai également géré le SEO (meta tags, Open Graph, sitemap, robots.txt) et le déploiement sur Hostinger via webhook GitHub.</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold mb-4">Stack technique</h2>
            <ul className="space-y-3">
              {["HTML / CSS / JS vanilla", "Formulaire Tally", "Analytics Umami", "Google Fonts (Unbounded, DM Sans, Space Mono)", "SEO : Open Graph, sitemap, robots.txt", "Déploiement Hostinger + webhook GitHub", "Custom cursor + scroll animations"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Link */}
        <motion.div variants={fadeUp}>
          <a
            href="https://light-geek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
          >
            Voir le site en ligne →
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
}
