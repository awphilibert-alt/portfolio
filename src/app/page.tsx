"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projects = [
  {
    title: "Le Labo de Clairie",
    slug: "labo-de-clairie",
    tag: "No-code · Automatisation",
    description: "Back-office complet, base de données et automatisations sur stack no-code (Airtable, Make, Stripe). Scaling d'une chorale de 40 à 1 200 membres, 400K€ traités, 2 ETP automatisés.",
    color: "violet",
  },
  {
    title: "Light Geek",
    slug: "light-geek",
    tag: "Site vitrine · Build IA-assisted",
    description: "Site vitrine de mon studio freelance de Product Builder. Conçu et développé en build IA-assisted.",
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
    description: "Site avec admin multi-comptes pour une association de MAO. Gestion autonome des membres, des événements et de l'agenda par les administratrices.",
    color: "sky",
  },
];

const cases = [
  {
    title: "Système Mads",
    slug: "mads",
    tag: "Feature from scratch · Pricing",
    description: "En 2019, passage d'un modèle à la commission à un système de crédits prépayés conçu from scratch. 100% de la facturation automatisée, métrique d'engagement claire. Stable depuis 7 ans.",
    color: "violet",
  },
  {
    title: "Fermeture Marseille / Aix",
    slug: "marseille-fermeture",
    tag: "Data-informed · Sunset decision",
    description: "12 mois de suivi terrain, 3 KPIs trackés, fermeture de 2 villes non rentables en 2024. Résultat : +35K€ de swing EBITDA et retour à la rentabilité.",
    color: "rose",
  },
  {
    title: "Le Labo de Clairie · Nouvelle plateforme",
    slug: "le-labo-de-clairie",
    tag: "Mission PM en cours",
    description: "D'abord Product Builder (stack no-code, 40 → 1 200 choristes), puis PM de la nouvelle plateforme. Backlog priorisé pour un lancement sous pression, V1 déjà en ligne (500 préinscrits), stakeholder management CEO/dev.",
    color: "orange",
  },
];

const skills = [
  { category: "Product", items: ["Discovery & User Research", "Priorisation (RICE, MoSCoW)", "Data-informed · OKR", "Pricing & Monétisation", "Stakeholder management"], color: "orange" },
  { category: "Build (IA-assisted)", items: ["Sites & apps (React, Next.js)", "Supabase · Vercel", "Stripe (intégration paiement)", "Prototypage rapide", "Claude Code · Cowork"], color: "violet" },
  { category: "No-code, automatisation & IA", items: ["Make · Zapier · n8n", "Airtable · Notion", "Tally · Folk · HubSpot", "Agents IA · RAG · Dust", "Intégration IA dans les process"], color: "rose" },
  { category: "Transverse", items: ["Stratégie produit", "9 ans CEO (marketplace B2C)", "Trilingue FR/DE/EN", "Gestion de freelances tech", "Conception produit end-to-end"], color: "sky" },
];

const experience = [
  { year: "2026 · présent", label: "Product Manager freelance", company: "Le Labo de Clairie", detail: "Nouvelle plateforme · V1 en ligne, objectif 10 000 choristes", color: "text-orange" },
  { year: "2025 · 2026", label: "Product Builder freelance", company: "Light Geek Studio", detail: "Studio no-code & IA, 9+ projets livrés", color: "text-violet" },
  { year: "2016 · 2025", label: "Fondatrice & CEO", company: "Nomad's", detail: "Marketplace bien-être à deux faces, 200 praticien·ne·s actif·ve·s, 900+ sur 9 ans, jusqu'à 6 villes (4 à la cession), cession à une entrepreneure en 2025", color: "text-rose" },
  { year: "2016", label: "Customer Experience", company: "Dior Parfums", detail: "Marchés UK, DACH, France · 3 langues", color: "text-sky" },
  { year: "2014 · 2016", label: "Traductrice freelance", company: "Arte", detail: "Transcription et traduction de rushs documentaires", color: "text-orange" },
];

const formation = [
  { year: "2026", label: "Product Manager & AI for PM", company: "Noé" },
  { year: "2010 · 2014", label: "Philologie française, Économie, Histoire de l'art", company: "Freie Universität Berlin" },
];

const rotatingWords = ["prototype", "construis", "livre", "scale", "no-code"];
const wordColors = ["text-violet", "text-rose", "text-sky", "text-lime", "text-sky"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = rotatingWords[index];
  const tick = useCallback(() => {
    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        return;
      }
    }
  }, [displayText, isDeleting, currentWord]);

  useEffect(() => {
    const speed = isDeleting ? 50 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={`${wordColors[index]}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <span className="animate-pulse text-dark/40">|</span>
    </span>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center" aria-label="Menu">
        <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
        <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-dark/10 px-6 py-6 flex flex-col gap-5 md:hidden"
        >
          <a href="#parcours" onClick={() => setOpen(false)} className="text-orange font-mono text-sm uppercase tracking-widest">Parcours</a>
          <a href="#nomads" onClick={() => setOpen(false)} className="text-violet font-mono text-sm uppercase tracking-widest">Nomad&apos;s</a>
          <a href="#cases" onClick={() => setOpen(false)} className="text-rose font-mono text-sm uppercase tracking-widest">Cases PM</a>
          <a href="#projets" onClick={() => setOpen(false)} className="text-sky font-mono text-sm uppercase tracking-widest">Ce que je construis</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-violet font-mono text-sm uppercase tracking-widest">Contact</a>
        </motion.div>
      )}
    </>
  );
}

// Tailwind safelist for dynamic color classes
const _dependencies = "hover:border-orange hover:border-violet hover:border-rose hover:border-sky hover:border-lime text-orange text-violet text-rose text-sky text-lime bg-orange bg-violet bg-rose bg-sky bg-lime group-hover:text-orange group-hover:text-violet group-hover:text-rose group-hover:text-sky group-hover:text-lime border-orange/30 border-violet/30 border-rose/30 border-sky/30 border-lime/30";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 bg-cream/80 backdrop-blur-md">
        <a href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#parcours" className="text-dark hover:text-orange transition-colors">Parcours</a>
          <a href="#nomads" className="text-dark hover:text-violet transition-colors">Nomad&apos;s</a>
          <a href="#cases" className="text-dark hover:text-rose transition-colors">Cases PM</a>
          <a href="#projets" className="text-dark hover:text-sky transition-colors">Ce que je construis</a>
          <a href="#contact" className="text-dark hover:text-violet transition-colors">Contact</a>
        </div>
        <MobileNav />
      </nav>

      {/* 1. Hero */}
      <section className="px-6 md:px-12 pt-24 pb-20 relative">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-6xl">
          <motion.p variants={slideRight} className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-6">
            Product Manager & Builder no-code / IA
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-0">
            Je <span className="text-orange">conçois</span>,
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-0">
            et je <RotatingWord />
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-8">
            des produits<span className="text-orange">.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-dark/50 font-bold mb-10">
            Ex-CEO 9 ans · exit 2025 <span className="text-dark/20 mx-2">·</span> Formation PM · Noé 2026 <span className="text-dark/20 mx-2">·</span> Trilingue FR/DE/EN
          </motion.p>

          <motion.div variants={slideRight} className="flex gap-3">
            <a href="#contact" className="bg-orange text-white font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-dark transition-colors">
              Contact
            </a>
            <a href="#projets" className="border-2 border-dark text-dark font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-dark hover:text-white transition-colors">
              Projets
            </a>
          </motion.div>
        </motion.div>

      </section>

      {/* Séparateur hero → about */}
      <div className="flex h-2">
        <div className="flex-1 bg-orange" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-lime" />
      </div>

      {/* 1b. About me + Parcours (une seule section dark, alignée) */}
      <section id="about" className="pt-32 pb-32 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>

          {/* About me */}
          <motion.div variants={fadeUp} className="md:grid md:grid-cols-12 gap-12 mb-24">
            <div className="col-span-4 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-3">About me</div>
              <div className="w-12 h-1 bg-orange mb-6" />
              <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
                Alexandra Philibert<span className="text-orange">.</span>
              </h2>
            </div>
            <div className="col-span-8 col-start-5">
              <div className="text-white/60 text-base leading-[1.9] space-y-5 mb-8">
                <p>
                  J&apos;ai créé <strong className="text-white">Nomad&apos;s</strong> en 2016, une marketplace bien-être que j&apos;ai dirigée seule pendant 9 ans avant de la céder en 2025. Plus de 900 praticien·ne·s sont passé·e·s par la plateforme, dans 6 villes en France. J&apos;étais seule aux commandes, sans équipe technique. Alors j&apos;ai tout appris sur le tas, et j&apos;ai tout automatisé. <strong className="text-white">J&apos;ai automatisé par nécessité, puis par conviction : c&apos;est devenu mon métier.</strong>
                </p>
                <p>
                  Depuis un an, je suis <strong className="text-white">Product Builder freelance</strong> en no-code et IA. Aujourd&apos;hui formée au <strong className="text-white">Product Management (Noé, 2026)</strong>, je travaille comme <strong className="text-white">PM freelance pour Le Labo de Clairie</strong> et je cherche un poste de PM en startup ou scale-up où je peux concevoir, prioriser et garder les mains dans le produit.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { emoji: "🧗‍♀️", label: "Escalade" },
                  { emoji: "🏃‍♀️", label: "Course à pied" },
                  { emoji: "🎮", label: "Jeux vidéo" },
                  { emoji: "🎵", label: "Multi-instrumentiste & MAO" },
                  { emoji: "🎤", label: "Choriste" },
                  { emoji: "✏️", label: "Dessin" },
                  { emoji: "📚", label: "SF exclusive" },
                  { emoji: "🇩🇪", label: "18 ans à Berlin" },
                ].map((item) => (
                  <span key={item.label} className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 text-xs text-white/80">
                    <span>{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Parcours (même grille, même colonne de départ) */}
          <motion.div id="parcours" variants={fadeUp} className="md:grid md:grid-cols-12 gap-12 scroll-mt-20">
            <div className="col-span-4 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-3">Parcours</div>
              <div className="w-12 h-1 bg-lime" />
            </div>
            <div className="col-span-8 col-start-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-6">Expérience</div>
              <div className="space-y-0 mb-16">
                {experience.map((item) => (
                  <motion.div key={item.year} variants={fadeUp} className="flex gap-6 py-5 border-b border-white/5">
                    <div className="font-mono text-xs text-white/25 w-24 flex-shrink-0 pt-0.5">{item.year}</div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-heading text-base font-bold">{item.label}</span>
                        {item.company && <span className={`text-sm ${item.color}`}>{item.company}</span>}
                      </div>
                      <div className="text-white/40 text-sm mt-1">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-6">Formation</div>
              <div className="space-y-0 mb-16">
                {formation.map((item) => (
                  <motion.div key={item.year} variants={fadeUp} className="flex gap-6 py-5 border-b border-white/5">
                    <div className="font-mono text-xs text-white/25 w-24 flex-shrink-0 pt-0.5">{item.year}</div>
                    <div>
                      <span className="font-heading text-base font-bold">{item.label}</span>
                      {item.company && <span className="text-sm text-violet ml-2">{item.company}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="/cv-alexandra-philibert.pdf" className="bg-white text-dark font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-lime transition-colors font-bold">
                  Télécharger mon CV ↓
                </a>
                <a href="https://www.linkedin.com/in/alexandra-philibert-016680113/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white/50 font-mono text-xs uppercase tracking-wider px-6 py-3 hover:border-white hover:text-white transition-colors">
                  LinkedIn →
                </a>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* 3. Séparateur */}
      <div className="flex h-2">
        <div className="flex-1 bg-orange" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-lime" />
      </div>

      {/* 4. Nomad's */}
      <section id="nomads" className="py-32 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-20">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">Ma boîte · 2016–2025</div>
            <h2 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[0.9]">
              Nomad&apos;s<span className="text-orange">.</span>
            </h2>
          </motion.div>

          <motion.div variants={slideRight} className="border-l-4 border-orange pl-8 md:pl-12 mb-20">
            <p className="font-heading text-xl md:text-2xl font-bold leading-[1.5] text-dark max-w-3xl">
              En 2016, j&apos;ai créé une plateforme de mise en relation entre praticien·ne·s bien-être et bars, restaurants, entreprises et événements.
              <br /><span className="text-orange text-lg md:text-xl">La mission : démocratiser le bien-être et l&apos;amener partout, pour tout le monde.</span>
            </p>
          </motion.div>

          <div className="md:grid md:grid-cols-12 gap-x-8 gap-y-20 mb-20">
            <motion.div variants={fadeUp} className="col-span-5 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">L&apos;origine</div>
              <p className="text-dark/65 leading-[1.8]">
                <strong className="text-dark">J&apos;ai vécu 18 ans à Berlin.</strong> C&apos;est là-bas que j&apos;ai découvert le massage bien-être en bar, sur chaise, accessible à tous. J&apos;ai pratiqué ce métier pendant <strong className="text-dark">8 ans comme job étudiant</strong>, et j&apos;en ai vécu. De retour à Paris, je constate que le concept n&apos;existe pas. Et que c&apos;est le meilleur job du monde. <strong className="text-dark">Je décide de le créer.</strong>
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 col-start-8 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-violet font-bold mb-6">Le concept</div>
              <p className="text-dark/65 leading-[1.8]">
                Recruter et former des masseurs et masseuses freelance qui, via notre plateforme, proposent des massages dans les bars et restaurants partenaires, et interviennent en entreprise et en événementiel pour toute prestation de bien-être.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-rose font-bold mb-6">La plateforme</div>
              <p className="text-dark/65 leading-[1.8]">
                <strong className="text-dark">J&apos;ai conçu la plateforme de A à Z</strong> : <strong className="text-dark">design, specs, priorisation, user research, tests utilisateurs.</strong> La tech a été construite avec des freelances dev que je pilotais. J&apos;ai aussi <strong className="text-dark">posé toutes les bases de la V2</strong>, jamais livrée (cf. Pourquoi PM ci-dessous). Et un système de crédits prépayés (Mads) qui tourne depuis 7 ans sans modification.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 col-start-8 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-6">Le résultat</div>
              <p className="text-dark/65 leading-[1.8]">
                Nomad&apos;s s&apos;est imposé pendant près de 10 ans dans le paysage du bien-être en France. Des clients comme BNP, L&apos;Oréal, Doctolib, BETC, BMW, Coca-Cola, Netflix, Joone. Des centaines de milliers de massages. <strong className="text-dark">Des festivals, des trains, des rooftops, des lancements de presse...</strong> On a amené la culture du massage là où elle n&apos;existait pas, et ouvert la porte de la reconversion à des centaines de praticien·ne·s.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-dark text-white p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {[
              { value: "200", label: "praticien·ne·s actif·ve·s · 900+ sur 9 ans", color: "text-orange" },
              { value: "600K€/an", label: "volume communauté", color: "text-violet" },
              { value: "154", label: "prestations B2B livrées en 2024", color: "text-rose" },
              { value: "+35K€", label: "swing EBITDA 2023→2024", color: "text-lime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`font-heading text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-white/40 text-xs leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 5. Approche produit */}
      <section id="approche" className="py-32 px-6 md:px-12 bg-orange text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-20">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 font-bold mb-6">Approche produit</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]">
              Je pars du besoin utilisateur, je tranche avec la data, je livre<span className="text-lime">.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="md:grid md:grid-cols-3 gap-px bg-white/15">
            <div className="bg-orange p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-dark font-bold mb-4">01</div>
              <h3 className="font-heading text-lg font-bold mb-5 text-dark">Discovery en continu</h3>
              <div className="text-white/90 text-base leading-relaxed space-y-4">
                <p>Chez Nomad&apos;s, mes praticien·ne·s étaient mes client·e·s. <strong className="text-white">Leur avis était constamment demandé et implémenté</strong> : tests de features, sondages, interviews utilisateur, votes sur les fonctionnalités.</p>
                <p>Régulièrement dans l&apos;année, des <strong className="text-white">ateliers de co-construction et sessions de feedback</strong> pour réfléchir ensemble à partir de leurs vrais besoins.</p>
                <p>Ce ping-pong continu avec les utilisateurs donne des insights auxquels on n&apos;aurait jamais pensé. C&apos;est aussi ce qui m&apos;a amenée à <strong className="text-white">fermer 2 villes non rentables</strong> : contre-intuitif, mais c&apos;est la décision qui a rendu la boîte rentable.</p>
              </div>
            </div>
            <div className="bg-orange p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-dark font-bold mb-4">02</div>
              <h3 className="font-heading text-lg font-bold mb-5 text-dark">Toute la chaîne</h3>
              <div className="text-white/90 text-base leading-relaxed space-y-4">
                <p>9 ans en CEO m&apos;ont amenée à tout faire : <strong className="text-white">vision produit, priorisation, specs, user research, delivery.</strong> Aujourd&apos;hui, avec le no-code et le build IA-assisté, <strong className="text-white">je livre aussi des produits complets moi-même.</strong></p>
                <p>Ma force : <strong className="text-white">je comprends les problématiques business</strong> d&apos;un CEO parce que je l&apos;ai été, et <strong className="text-white">les contraintes techniques</strong> d&apos;un dev parce que je sais ce que c&apos;est de builder. Quand on me dit que quelque chose est possible ou pas, je comprends pourquoi.</p>
              </div>
            </div>
            <div className="bg-orange p-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-dark font-bold mb-4">03</div>
              <h3 className="font-heading text-lg font-bold mb-5 text-dark">La data tranche, l&apos;utilisateur décide</h3>
              <div className="text-white/90 text-base leading-relaxed space-y-4">
                <p>Ce qui me motive dans le produit, c&apos;est <strong className="text-white">le bon petit changement au bon endroit, mesuré dans les KPIs</strong>, en partant toujours des <strong className="text-white">utilisateurs</strong> et en validant par les <strong className="text-white">données</strong>.</p>
                <p>Chez Nomad&apos;s, le système Mads a automatisé 100% de la facturation et libéré 1 journée par mois. Au Labo de Clairie, une stack no-code a permis de passer de 40 à 1 200 choristes sans recruter.</p>
                <p>Chaque décision part d&apos;un <strong className="text-white">besoin utilisateur</strong>, <strong className="text-white">se mesure dans les KPIs, et s&apos;ajuste en continu</strong>. C&apos;est cette boucle qui crée le vrai impact.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Cases PM */}
      <section id="cases" className="py-32 px-6 md:px-12 bg-dark text-white scroll-mt-20">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-6">Cases produit PM</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              Trois décisions produit qui ont fait la différence<span className="text-rose">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {cases.map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`}>
                <motion.div
                  variants={fadeUp}
                  className={`group relative border border-white/10 hover:border-${c.color} p-8 transition-all cursor-pointer h-full hover:-translate-y-1 flex flex-col`}
                >
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${c.color} font-bold mb-4`}>{c.tag}</div>
                  <h3 className="font-heading text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm flex-1">{c.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-white/30 group-hover:text-${c.color} transition-colors mt-6`}>Lire le case →</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Formation PM teaser */}
      <section className="py-20 px-6 md:px-12 bg-violet text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:flex md:items-center md:justify-between md:gap-12">
            <div className="mb-8 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-4">Formation Product Management · 2026</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Noé<span className="text-orange">.</span>
              </h2>
              <div className="text-white/80 text-base leading-relaxed max-w-xl space-y-2">
                <p className="italic">&laquo; Mon premier mois en tant que Product Manager. &raquo;</p>
                <p>4 semaines intensives en équipe sur une vraie problématique sponsor BlaBlaCar.</p>
                <p>Use case, user research, priorisation, delivery.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full w-fit">
                Certifié France Compétences · RS6636
              </div>
              <Link href="/formation-noe" className="bg-white text-dark font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-orange hover:text-white transition-colors inline-block font-bold text-center">
                Voir la formation →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 8. Product Builder */}
      <section id="projets" className="py-32 px-6 md:px-12 scroll-mt-20">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">Product Builder</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              Ce que je construis<span className="text-orange">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {projects.map((project) => (
              <Link key={project.title} href={`/projets/${project.slug}`}>
                <motion.div
                  variants={fadeUp}
                  className={`group relative border-2 border-dark/10 hover:border-${project.color} p-8 transition-all cursor-pointer h-full hover:-translate-y-1 hover:shadow-lg flex flex-col`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${project.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${project.color} font-bold mb-4`}>{project.tag}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-dark/55 leading-relaxed flex-1">{project.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-dark/30 group-hover:text-${project.color} transition-colors mt-6`}>Voir le projet →</span>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center">
            <Link href="/projets" className="font-mono text-xs uppercase tracking-wider text-orange hover:text-dark transition-colors border-b border-orange/30 pb-1">
              Voir tous les projets build →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 9. Compétences */}
      <section className="py-32 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-6">Compétences</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              Ma stack<span className="text-rose">.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {skills.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <h3 className={`font-heading text-base font-bold text-${group.color} mb-5 pb-3 border-b-2 border-${group.color}/30`}>{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/50 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Séparateur compétences → pourquoi PM */}
      <div className="flex h-2">
        <div className="flex-1 bg-orange" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-lime" />
      </div>

      {/* 10. Pourquoi PM + Ce que je recherche */}
      <section className="py-32 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:grid md:grid-cols-12 gap-8">
            <div className="col-span-3 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-violet font-bold mb-3">Pourquoi PM maintenant ?</div>
              <div className="w-12 h-1 bg-violet" />
            </div>
            <div className="col-span-8 col-start-5 space-y-10">
              <motion.div variants={slideRight}>
                <h3 className="font-heading text-lg font-bold mb-2">La continuité du rôle, pas la rupture</h3>
                <p className="text-dark/65 leading-[1.8]">Quand je me suis posé la question de la suite après Nomad&apos;s, le rôle de PM est venu comme une évidence. C&apos;est ce que j&apos;aimais déjà en CEO : être au croisement de la tech, du business et des utilisateurs. Orchestrer, prioriser, arbitrer, faire. Le faire pour un produit, dans une équipe, en me concentrant pleinement sur la valeur utilisateur·ice et le delivery : c&apos;est ce qui me donne envie de me lever le matin.</p>
              </motion.div>
              <motion.div variants={slideRight} className="border-t-2 border-orange pt-10">
                <h3 className="font-heading text-lg font-bold mb-2">L&apos;envie d&apos;une équipe autour de moi</h3>
                <p className="text-dark/65 leading-[1.8]">J&apos;ai travaillé seule longtemps, et l&apos;envie aujourd&apos;hui est inverse : m&apos;inscrire dans une équipe, ne plus être la seule décisionnaire, avoir des collègues qui poussent dans la même direction. Avoir été à la tête de ma boîte 9 ans m&apos;aide à comprendre comment fonctionne une organisation, et à savoir m&apos;aligner sur une décision qui n&apos;est pas la mienne quand c&apos;est ce qu&apos;il faut faire.</p>
              </motion.div>
              <motion.div variants={slideRight} className="border-t-2 border-rose pt-10">
                <h3 className="font-heading text-lg font-bold mb-2">L&apos;apprentissage qui a tout déclenché</h3>
                <p className="text-dark/65 leading-[1.8]">À Nomad&apos;s, j&apos;ai conçu une V2 complète de la plateforme, spécifiée et prototypée. Elle n&apos;a jamais été livrée. Sans PM dédié·e protégé·e dans l&apos;organigramme, le rôle se sacrifie en premier : l&apos;opérationnel mange systématiquement le temps produit. C&apos;est exactement pour ça que je veux ce poste : pouvoir me consacrer à 100% au produit, dans un cadre où le delivery est protégé.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 10b. Ce que je recherche */}
      <section className="py-20 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:flex md:items-center md:justify-between md:gap-12">
            <div className="mb-8 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-4">Ce que je recherche</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Un poste de PM qui construit<span className="text-orange">.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">
                CDI ou freelance en startup ou scale-up France, idéalement marketplace ou plateforme. PM hybride : concevoir, prioriser, arbitrer, et garder les mains dans le produit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 text-white/80 text-xs px-4 py-2">📍 Paris</span>
              <span className="bg-white/10 text-white/80 text-xs px-4 py-2">Mobile Marseille</span>
              <span className="bg-white/10 text-white/80 text-xs px-4 py-2">Remote FR</span>
              <span className="bg-white/10 text-white/80 text-xs px-4 py-2">CDI ou freelance</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-violet text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-12">
              Me contacter 👋
            </h2>
          </motion.div>
          <motion.div variants={slideRight} className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:aw.philibert@gmail.com" className="bg-white text-dark font-mono text-xs uppercase tracking-wider px-8 py-4 hover:bg-lime hover:text-dark transition-colors inline-block font-bold">
              aw.philibert@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/alexandra-philibert-016680113/" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white font-mono text-xs uppercase tracking-wider px-8 py-4 hover:border-white hover:bg-white hover:text-violet transition-colors inline-block">
              LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 12. Footer */}
      <footer className="py-6 px-6 md:px-12 flex justify-between items-center text-[11px] text-dark/30 font-mono">
        <span>© 2026 Alexandra Philibert</span>
        <span>Codé maison · build IA-assisté</span>
      </footer>
    </>
  );
}
