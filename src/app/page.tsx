"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const projects = [
  {
    title: "Le Labo de Clairie",
    slug: "labo-de-clairie",
    tag: "Produit · No-code",
    description: "Scaling d'une chorale en ligne de 40 à 1 200 membres. Stack no-code complète (Tally, Airtable, Stripe, Make), 400K€ de paiements traités, 2 ETP remplacés par l'automatisation.",
    color: "bg-violet",
  },
  {
    title: "Light Geek",
    slug: "light-geek",
    tag: "Site vitrine · No-code",
    description: "Site de mon studio conçu et construit en pur HTML/CSS/JS. Landing page, formulaire de candidature Tally, analytics Umami, SEO complet, déploiement Hostinger.",
    color: "bg-orange",
  },
  {
    title: "La Maison du Bonheur",
    slug: "maison-du-bonheur",
    tag: "App · React",
    description: "App collaborative de planification de vacances entre familles. Gestion de chambres, planning, budget partagé avec algorithme type Tricount, paiement Stripe.",
    color: "bg-rose",
  },
  {
    title: "DAWghters",
    slug: "dawghters",
    tag: "Site · Next.js + Supabase",
    description: "Site vitrine et back-office pour une association de MAO dédiée aux femmes et minorités de genre. Admin multi-comptes, CRUD complet, agenda, ressources.",
    color: "bg-sky",
  },
];

const skills = [
  { category: "Product", items: ["Discovery & User Research", "Roadmap & Priorisation (RICE)", "Marketplace / two-sided", "Data-informed", "Pricing & Monétisation", "UX/UI · Figma"], color: "text-orange" },
  { category: "Build", items: ["Vibe Coding", "Next.js · React", "Tailwind CSS", "Supabase", "Vercel"], color: "text-violet" },
  { category: "No-code & IA", items: ["Make · Zapier · n8n", "Airtable · Notion", "Tally · Stripe", "LLM en workflows", "HTML/CSS/JS"], color: "text-rose" },
  { category: "Business", items: ["Stratégie produit", "Stakeholder management", "Gestion de projet · Jira", "Entrepreneuriat (9 ans CEO)", "Trilingue FR/DE/EN"], color: "text-sky" },
];

const timeline = [
  { year: "2014–16", label: "Traductrice freelance & Dior", detail: "Localisation web FR/DE/EN, documentaires Arte, puis clientèle internationale chez Dior Parfums", color: "bg-orange" },
  { year: "2016", label: "Création de Nomad's", detail: "Marketplace bien-être : 180 praticien·ne·s, 4 villes, clients B2B (BNP, L'Oréal, Doctolib)", color: "bg-violet" },
  { year: "2019", label: "Modèle de pricing par crédits", detail: "Système de Mads prépayés, facturation 100% automatisée, +460K€ générés pour la communauté", color: "bg-rose" },
  { year: "2025", label: "Exit — cession de Nomad's", detail: "Retour à la rentabilité, cession totale de la SAS à un repreneur", color: "bg-sky" },
  { year: "2026", label: "Light Geek + Formation PM", detail: "Studio no-code & IA + formation Product Manager chez Noé", color: "bg-orange" },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <a href="#" className="font-heading text-xl font-extrabold tracking-tight">
          A<span className="text-orange">.</span>P<span className="text-violet">.</span>
        </a>
        <div className="flex gap-6 text-sm font-semibold">
          <a href="#parcours" className="text-dark/40 hover:text-orange transition-colors">Parcours</a>
          <a href="#projets" className="text-dark/40 hover:text-violet transition-colors">Projets</a>
          <a href="#approche" className="text-dark/40 hover:text-rose transition-colors">Approche</a>
          <a href="#contact" className="text-dark/40 hover:text-sky transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-violet/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />

        <motion.div className="relative z-10 max-w-3xl mx-auto text-center pt-20" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-dark text-white text-xs font-semibold px-4 py-2 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-lime inline-block bounce-gentle" />
            Product Manager & Builder no-code / IA
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Je{" "}
            <span className="relative inline-block">
              <span className="relative z-10">conçois</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange/30 -rotate-1 rounded" />
            </span>
            {" "}et je{" "}
            <span className="relative inline-block">
              <span className="relative z-10">construis</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-violet/30 rotate-1 rounded" />
            </span>
            {" "}des produits<span className="text-rose">.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-dark/50 max-w-xl mx-auto mb-12 leading-relaxed">
            Ex-CEO 9 ans (marketplace, exit 2025), en formation PM chez Noé, fondatrice de Light Geek.
            Je transforme des idées en produits qui tournent, en no-code et en IA.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projets" className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all text-sm">
              Voir mes projets →
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-dark/10 text-dark/60 font-semibold px-8 py-4 rounded-full hover:border-violet hover:text-violet transition-all text-sm">
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* MON HISTOIRE */}
      <section className="py-24 px-6 md:px-12">
        <motion.div className="max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-orange/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">Mon histoire</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Le fil rouge<span className="text-rose">.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="text-lg leading-[1.9] text-dark/60 space-y-6">
            <p>
              Mon parcours n&apos;a rien de linéaire. Études de philo et d&apos;histoire de l&apos;art à Berlin, traduction de documentaires pour Arte, clientèle internationale chez Dior. Rien ne me prédestinait à monter une boîte tech.
            </p>
            <p>
              Et puis en 2016, j&apos;ai créé <strong className="text-dark font-semibold">Nomad&apos;s</strong>, une marketplace bien-être. 180 praticien·ne·s, 4 villes, des clients comme BNP, L&apos;Oréal, Doctolib. Le truc, c&apos;est que j&apos;étais seule. Pas de CTO, pas de salarié. Alors j&apos;ai tout automatisé : l&apos;onboarding, la facturation, le matching, le support. <strong className="text-dark font-semibold">Ce qui devait être une solution de survie est devenu ma vraie compétence.</strong>
            </p>
            <p>
              J&apos;ai inventé un modèle de pricing par crédits prépayés, piloté mes KPIs comme un produit tech, pris des décisions data-informed (comme fermer 2 villes non rentables pour revenir dans le vert). En 2025, j&apos;ai revendu la boîte après 9 ans.
            </p>
            <p>
              Aujourd&apos;hui, le fil rouge est toujours le même : <strong className="text-dark font-semibold">partir d&apos;un vrai problème, construire la solution la plus simple qui marche, et itérer.</strong> Je le fais avec <strong className="text-dark font-semibold">Light Geek</strong> (mon studio no-code & IA), et je structure tout ça avec une <strong className="text-dark font-semibold">formation Product Manager chez Noé</strong>.
            </p>
            <p>
              Trilingue FR/DE/EN, basée à Paris. Passionnée d&apos;escalade, de musique et de jeux vidéo.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* NOMAD'S — ÉTUDE DE CAS */}
      <section className="py-24 px-6 md:px-12 bg-dark text-white rounded-[40px] mx-4 md:mx-8 mb-4">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-white/10 text-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6">Étude de cas</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nomad&apos;s<span className="text-orange">.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg leading-relaxed mb-16 max-w-2xl">
            Marketplace bien-être à deux faces que j&apos;ai fondée, conçue et dirigée pendant 9 ans. De l&apos;idée à l&apos;exit.
          </motion.p>

          {/* Le problème */}
          <motion.div variants={fadeUp} className="mb-16">
            <h3 className="font-heading text-lg font-bold text-orange mb-4">Le problème</h3>
            <p className="text-white/50 leading-relaxed max-w-2xl">
              Les praticien·ne·s bien-être (massage, yoga, sophrologie...) travaillaient de façon isolée, sans visibilité, avec des outils dispersés. Côté client, impossible de trouver un·e praticien·ne de confiance facilement. Il n&apos;existait pas de plateforme qui connectait les deux mondes de façon simple et fiable.
            </p>
          </motion.div>

          {/* Ce que j'ai construit */}
          <motion.div variants={fadeUp} className="mb-16">
            <h3 className="font-heading text-lg font-bold text-violet mb-4">Ce que j&apos;ai construit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-bold text-white/70 mb-2">Plateforme marketplace</div>
                <p className="text-white/40 text-sm leading-relaxed">Inscription, profils, matching praticien/client, système de réservation, paiement intégré. Le tout orchestré et automatisé sans aucun salarié technique.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-bold text-white/70 mb-2">Modèle de pricing innovant</div>
                <p className="text-white/40 text-sm leading-relaxed">En 2019, j&apos;ai remplacé un système de commissions opaque par des crédits prépayés (&quot;Mads&quot;). Résultat : facturation 100% automatisée, 1 journée de calcul manuel libérée par mois, encaissement à l&apos;avance.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-bold text-white/70 mb-2">Automatisation totale</div>
                <p className="text-white/40 text-sm leading-relaxed">Onboarding, facturation, matching, support, relances : tout était automatisé. C&apos;est comme ça que j&apos;ai pu gérer 180 prestataires dans 4 villes, seule.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-bold text-white/70 mb-2">Clients B2B</div>
                <p className="text-white/40 text-sm leading-relaxed">Développement d&apos;une offre entreprise : BNP Paribas, L&apos;Oréal, Doctolib, Joone, BETC. Plus de 60 partenaires B2C.</p>
              </div>
            </div>
          </motion.div>

          {/* Décisions produit */}
          <motion.div variants={fadeUp} className="mb-16">
            <h3 className="font-heading text-lg font-bold text-rose mb-4">Décisions clés</h3>
            <div className="space-y-4 max-w-2xl">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-rose flex-shrink-0 mt-2" />
                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white/70">Fermeture de 2 villes non rentables (2024)</strong> — Décision data-informed difficile mais qui a contribué au retour à la rentabilité (exercice 2023 déficitaire → 2024 bénéficiaire).</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-rose flex-shrink-0 mt-2" />
                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white/70">Pivot du modèle de pricing (2019)</strong> — Passage des commissions aux crédits prépayés. Plus de transparence, trésorerie stabilisée, adoption immédiate par les praticien·ne·s.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-rose flex-shrink-0 mt-2" />
                <p className="text-white/50 text-sm leading-relaxed"><strong className="text-white/70">Coordination sans hiérarchie</strong> — 1 responsable régionale, 3 assistant·e·s terrain, 180 freelances. Pas de management classique, mais un produit et des process assez solides pour que tout tourne.</p>
              </div>
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div variants={fadeUp}>
            <h3 className="font-heading text-lg font-bold text-lime mb-6">Résultats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "180", label: "Praticien·ne·s" },
                { value: "4 villes", label: "Couverture" },
                { value: "460K€", label: "Revenus communauté (2024)" },
                { value: "Exit 2025", label: "Cession totale" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="font-heading text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/30 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PARCOURS */}
      <section id="parcours" className="py-24 px-6 md:px-12 bg-dark text-white rounded-[40px] mx-4 md:mx-8 mb-4">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-white/10 text-lime text-xs font-bold px-3 py-1.5 rounded-full mb-6">Parcours</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16">
            10 ans condensés<span className="text-orange">.</span>
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((item) => (
              <motion.div key={item.year} variants={fadeUp} className="relative">
                <div className={`w-3 h-3 rounded-full ${item.color} mb-4`} />
                <div className="font-mono text-xs font-bold text-white/40 mb-2">{item.year}</div>
                <div className="font-heading text-lg font-bold mb-2">{item.label}</div>
                <div className="text-white/40 text-sm leading-relaxed">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* APPROCHE PRODUIT */}
      <section id="approche" className="py-24 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">Approche produit</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Concevoir et livrer<span className="text-rose">.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-dark/50 leading-relaxed mb-16 max-w-2xl">
            Ce qui me passionne, c&apos;est d&apos;aller du problème utilisateur jusqu&apos;au produit qui tourne. Je fais à la fois la partie product (discovery, priorisation, roadmap) et la partie build (no-code, vibe coding, mise en prod). C&apos;est cette complémentarité que j&apos;apporte.
          </motion.p>

          {/* Chiffres */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "460K€", label: "Revenus générés pour la communauté Nomad's", color: "text-orange" },
              { value: "x30", label: "Scaling Le Labo de Clairie (40 → 1 200 membres)", color: "text-violet" },
              { value: "2 ETP", label: "Remplacés par l'automatisation no-code", color: "text-rose" },
              { value: "9 ans", label: "CEO solo, marketplace rentable, exit", color: "text-sky" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6">
                <div className={`font-heading text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-dark/40 text-xs leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Façon de travailler */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <div className={`w-3 h-3 rounded-full bg-orange mb-5`} />
              <h3 className="font-heading text-base font-bold mb-3">Problème d&apos;abord</h3>
              <p className="text-dark/50 text-sm leading-relaxed">Je ne commence jamais par la solution. Discovery, user research, données terrain. Chez Nomad&apos;s, j&apos;ai fermé 2 villes non rentables plutôt que de les maintenir sous perfusion.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className={`w-3 h-3 rounded-full bg-violet mb-5`} />
              <h3 className="font-heading text-base font-bold mb-3">Build & ship</h3>
              <p className="text-dark/50 text-sm leading-relaxed">Je ne reste pas côté spec. Je prototype, je code (ou no-code), je mets en prod. Le Labo de Clairie : de l&apos;idée au produit live en quelques semaines, pas en quelques mois.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className={`w-3 h-3 rounded-full bg-rose mb-5`} />
              <h3 className="font-heading text-base font-bold mb-3">Itérer avec les données</h3>
              <p className="text-dark/50 text-sm leading-relaxed">KPIs, rétention, tunnel, cohortes. Chez Nomad&apos;s : 30% des praticiens les plus actifs consommaient 50 à 70% des crédits. Ce genre de signal change les décisions.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-24 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-violet/10 text-violet text-xs font-bold px-3 py-1.5 rounded-full mb-6">Projets</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Ce que je construis<span className="text-violet">.</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <Link key={project.title} href={`/projets/${project.slug}`}>
                <motion.div
                  variants={fadeUp}
                  className={`group relative bg-white rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer h-full overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 ${project.color}/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`} />
                  <div className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${project.color === "bg-orange" ? "bg-orange/10 text-orange" : project.color === "bg-violet" ? "bg-violet/10 text-violet" : project.color === "bg-rose" ? "bg-rose/10 text-rose" : "bg-sky/10 text-sky"}`}>
                    {project.tag}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-dark/50 leading-relaxed mb-4">{project.description}</p>
                  <span className="text-sm font-semibold text-dark/30 group-hover:text-dark/60 transition-colors">Voir le projet →</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 md:px-12 bg-dark text-white rounded-[40px] mx-4 md:mx-8 mb-4">
        <motion.div className="max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-white/10 text-lime text-xs font-bold px-3 py-1.5 rounded-full mb-6">Compétences</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-16">
            Mon stack<span className="text-rose">.</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skills.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <h3 className={`font-heading text-sm font-bold ${group.color} mb-5`}>{group.category}</h3>
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

      {/* CE QUE JE CHERCHE */}
      <section className="py-24 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-sky/10 text-sky text-xs font-bold px-3 py-1.5 rounded-full mb-6">Disponible</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Ce que je cherche<span className="text-sky">.</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-heading text-lg font-bold mb-3">Un poste PM ou Product Builder</h3>
              <p className="text-dark/50 leading-relaxed">CDI ou freelance. J&apos;aimerais rejoindre une équipe produit où apporter ma vision terrain (9 ans de CEO), ma capacité à construire (no-code, vibe coding), et ma passion pour les vrais problèmes utilisateurs.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-heading text-lg font-bold mb-3">Des projets pour Light Geek</h3>
              <p className="text-dark/50 leading-relaxed">Vous avez un process à automatiser, une app à construire en no-code, ou un workflow IA à mettre en place ? C&apos;est ce que je fais au quotidien avec mon studio.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8">
              <div className="text-2xl mb-4">🤝</div>
              <h3 className="font-heading text-lg font-bold mb-3">Des collabs</h3>
              <p className="text-dark/50 leading-relaxed">Co-construire un side project, rejoindre une aventure early-stage, travailler avec d&apos;autres builders qui aiment shipper vite et bien.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8">
              <div className="text-2xl mb-4">💬</div>
              <h3 className="font-heading text-lg font-bold mb-3">Du réseau et du mentorat</h3>
              <p className="text-dark/50 leading-relaxed">Échanger avec des PM, des founders, des gens du produit. Apprendre, partager, se challenger. Si vous avez envie de prendre un café (virtuel ou non), je suis partante.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-12 text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">Contact</motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-2xl md:text-4xl font-bold tracking-tight mb-6">
            Un projet<span className="text-orange">?</span> Parlons-en<span className="text-violet">.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-dark/50 text-lg mb-10">
            Vous avez une idée, un produit à construire, ou vous souhaitez simplement échanger ? Écrivez-moi.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aw.philibert@gmail.com"
              className="inline-flex items-center gap-2 bg-dark text-white font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all text-sm"
            >
              aw.philibert@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alexandra-philibert-016680113/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-dark/10 text-dark/60 font-semibold px-8 py-4 rounded-full hover:border-violet hover:text-violet transition-all text-sm"
            >
              LinkedIn →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-xs text-dark/25">
        © 2026 Alexandra Philibert · Construit en vibe coding avec Claude Code ♥
      </footer>
    </>
  );
}
