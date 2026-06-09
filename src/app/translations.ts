export type Lang = "fr" | "en";

export const t = {
  nav: {
    parcours: { fr: "Parcours", en: "Background" },
    nomads: { fr: "Nomad's", en: "Nomad's" },
    cases: { fr: "Cases PM", en: "PM Cases" },
    projets: { fr: "Ce que je construis", en: "What I build" },
    contact: { fr: "Contact", en: "Contact" },
  },

  hero: {
    subtitle: { fr: "Product Manager & Builder no-code / IA", en: "Product Manager & no-code / AI Builder" },
    line1: { fr: "Je ", en: "I " },
    verb: { fr: "conçois", en: "design" },
    line2pre: { fr: "et je ", en: "and I " },
    line3: { fr: "des produits", en: "products" },
    tagline: {
      fr: "Ex-CEO 9 ans · exit 2025 <sep> Formation PM · Noé 2026 <sep> Trilingue FR/DE/EN",
      en: "Ex-CEO 9 years · exit 2025 <sep> PM Training · Noé 2026 <sep> Trilingual FR/DE/EN",
    },
    cta1: { fr: "Contact", en: "Contact" },
    cta2: { fr: "Projets", en: "Projects" },
  },

  rotatingWords: {
    fr: ["prototype", "construis", "livre", "scale", "no-code"],
    en: ["prototype", "build", "ship", "scale", "no-code"],
  },

  about: {
    label: { fr: "About me", en: "About me" },
    p1: {
      fr: "J'ai créé <strong>Nomad's</strong> en 2016, une marketplace bien-être que j'ai dirigée seule pendant 9 ans avant de la céder en 2025. Plus de 900 praticien·ne·s sont passé·e·s par la plateforme, dans 6 villes en France. J'étais seule aux commandes, sans équipe technique. Alors j'ai tout appris sur le tas, et j'ai tout automatisé. <strong>J'ai automatisé par nécessité, puis par conviction : c'est devenu mon métier.</strong>",
      en: "I founded <strong>Nomad's</strong> in 2016, a wellness marketplace I ran solo for 9 years before selling in 2025. Over 900 practitioners joined the platform across 6 cities in France. I was alone at the helm, no tech team. So I learned everything on the go and automated everything. <strong>I automated out of necessity, then out of conviction: it became my craft.</strong>",
    },
    p2: {
      fr: "Depuis un an, je suis <strong>Product Builder freelance</strong> en no-code et IA. Aujourd'hui formée au <strong>Product Management (Noé, 2026)</strong>, je travaille comme <strong>PM freelance pour Le Labo de Clairie</strong> et je cherche un poste de PM en startup ou scale-up où je peux concevoir, prioriser et garder les mains dans le produit.",
      en: "For the past year, I've been a <strong>freelance Product Builder</strong> in no-code and AI. Now trained in <strong>Product Management (Noé, 2026)</strong>, I work as a <strong>freelance PM for Le Labo de Clairie</strong> and I'm looking for a PM role in a startup or scale-up where I can design, prioritize, and keep my hands in the product.",
    },
    hobbies: {
      fr: [
        { emoji: "🧗‍♀️", label: "Escalade" },
        { emoji: "🏃‍♀️", label: "Course à pied" },
        { emoji: "🎮", label: "Jeux vidéo" },
        { emoji: "🎵", label: "Multi-instrumentiste & MAO" },
        { emoji: "🎤", label: "Choriste" },
        { emoji: "✏️", label: "Dessin" },
        { emoji: "📚", label: "SF exclusive" },
        { emoji: "🇩🇪", label: "18 ans à Berlin" },
      ],
      en: [
        { emoji: "🧗‍♀️", label: "Rock climbing" },
        { emoji: "🏃‍♀️", label: "Running" },
        { emoji: "🎮", label: "Video games" },
        { emoji: "🎵", label: "Multi-instrumentalist & music production" },
        { emoji: "🎤", label: "Choir singer" },
        { emoji: "✏️", label: "Drawing" },
        { emoji: "📚", label: "Sci-fi only" },
        { emoji: "🇩🇪", label: "18 years in Berlin" },
      ],
    },
  },

  parcours: {
    label: { fr: "Parcours", en: "Background" },
    experience: { fr: "Expérience", en: "Experience" },
    formation: { fr: "Formation", en: "Education" },
    cvButton: { fr: "Télécharger mon CV ↓", en: "Download my CV ↓" },
    experience_items: {
      fr: [
        { year: "2026 · présent", label: "Product Manager freelance", company: "Le Labo de Clairie", detail: "Nouvelle plateforme · V1 en ligne, objectif 10 000 choristes" },
        { year: "2025 · 2026", label: "Product Builder freelance", company: "Light Geek Studio", detail: "Studio no-code & IA, 9+ projets livrés" },
        { year: "2016 · 2025", label: "Fondatrice & CEO", company: "Nomad's", detail: "Marketplace bien-être à deux faces, 200 praticien·ne·s actif·ve·s, 900+ sur 9 ans, jusqu'à 6 villes (4 à la cession), cession à une entrepreneure en 2025" },
        { year: "2016", label: "Customer Experience", company: "Dior Parfums", detail: "Marchés UK, DACH, France · 3 langues" },
        { year: "2014 · 2016", label: "Traductrice freelance", company: "Arte", detail: "Transcription et traduction de rushs documentaires" },
      ],
      en: [
        { year: "2026 · present", label: "Freelance Product Manager", company: "Le Labo de Clairie", detail: "New platform · V1 live, 10,000 choir members target" },
        { year: "2025 · 2026", label: "Freelance Product Builder", company: "Light Geek Studio", detail: "No-code & AI studio, 9+ projects shipped" },
        { year: "2016 · 2025", label: "Founder & CEO", company: "Nomad's", detail: "Two-sided wellness marketplace, 200 active practitioners, 900+ over 9 years, up to 6 cities (4 at exit), sold in 2025" },
        { year: "2016", label: "Customer Experience", company: "Dior Parfums", detail: "UK, DACH & France markets · 3 languages" },
        { year: "2014 · 2016", label: "Freelance Translator", company: "Arte", detail: "Documentary rushes transcription and translation" },
      ],
    },
    formation_items: {
      fr: [
        { year: "2026", label: "Product Manager & AI for PM", company: "Noé" },
        { year: "2010 · 2014", label: "Philologie française, Économie, Histoire de l'art", company: "Freie Universität Berlin" },
      ],
      en: [
        { year: "2026", label: "Product Manager & AI for PM", company: "Noé" },
        { year: "2010 · 2014", label: "French Philology, Economics, Art History", company: "Freie Universität Berlin" },
      ],
    },
  },

  nomads: {
    label: { fr: "Ma boîte · 2016–2025", en: "My company · 2016–2025" },
    intro: {
      fr: "En 2016, j'ai créé une plateforme de mise en relation entre praticien·ne·s bien-être et bars, restaurants, entreprises et événements.",
      en: "In 2016, I created a platform connecting wellness practitioners with bars, restaurants, companies and events.",
    },
    mission: {
      fr: "La mission : démocratiser le bien-être et l'amener partout, pour tout le monde.",
      en: "The mission: democratize wellness and bring it everywhere, for everyone.",
    },
    origine: { fr: "L'origine", en: "The origin" },
    origineText: {
      fr: "<strong>J'ai vécu 18 ans à Berlin.</strong> C'est là-bas que j'ai découvert le massage bien-être en bar, sur chaise, accessible à tous. J'ai pratiqué ce métier pendant <strong>8 ans comme job étudiant</strong>, et j'en ai vécu. De retour à Paris, je constate que le concept n'existe pas. Et que c'est le meilleur job du monde. <strong>Je décide de le créer.</strong>",
      en: "<strong>I lived 18 years in Berlin.</strong> That's where I discovered chair massage in bars, accessible to everyone. I practiced it for <strong>8 years as a student job</strong>. Back in Paris, I realized the concept didn't exist. And that it was the best job in the world. <strong>I decided to create it.</strong>",
    },
    concept: { fr: "Le concept", en: "The concept" },
    conceptText: {
      fr: "Recruter et former des masseurs et masseuses freelance qui, via notre plateforme, proposent des massages dans les bars et restaurants partenaires, et interviennent en entreprise et en événementiel pour toute prestation de bien-être.",
      en: "Recruit and train freelance massage therapists who, through our platform, offer massages in partner bars and restaurants, and provide wellness services for corporate and event clients.",
    },
    plateforme: { fr: "La plateforme", en: "The platform" },
    plateformeText: {
      fr: "<strong>J'ai conçu la plateforme de A à Z</strong> : <strong>design, specs, priorisation, user research, tests utilisateurs.</strong> La tech a été construite avec des freelances dev que je pilotais. J'ai aussi <strong>posé toutes les bases de la V2</strong>, jamais livrée (cf. Pourquoi PM ci-dessous). Et un système de crédits prépayés (Mads) qui tourne depuis 7 ans sans modification.",
      en: "<strong>I designed the platform from A to Z</strong>: <strong>design, specs, prioritization, user research, user testing.</strong> Tech was built with freelance devs I managed. I also <strong>laid all the groundwork for V2</strong>, never shipped (see Why PM below). Plus a prepaid credit system (Mads) running for 7 years without modification.",
    },
    resultat: { fr: "Le résultat", en: "The result" },
    resultatText: {
      fr: "Nomad's s'est imposé pendant près de 10 ans dans le paysage du bien-être en France. Des clients comme BNP, L'Oréal, Doctolib, BETC, BMW, Coca-Cola, Netflix, Joone. Des centaines de milliers de massages. <strong>Des festivals, des trains, des rooftops, des lancements de presse...</strong> On a amené la culture du massage là où elle n'existait pas, et ouvert la porte de la reconversion à des centaines de praticien·ne·s.",
      en: "Nomad's established itself for nearly 10 years in the French wellness landscape. Clients like BNP, L'Oréal, Doctolib, BETC, BMW, Coca-Cola, Netflix, Joone. Hundreds of thousands of massages. <strong>Festivals, trains, rooftops, press launches...</strong> We brought massage culture where it didn't exist, and opened the door to career change for hundreds of practitioners.",
    },
    stats: {
      fr: [
        { value: "200", label: "praticien·ne·s actif·ve·s · 900+ sur 9 ans" },
        { value: "600K€/an", label: "volume communauté" },
        { value: "154", label: "prestations B2B livrées en 2024" },
        { value: "+35K€", label: "swing EBITDA 2023→2024" },
      ],
      en: [
        { value: "200", label: "active practitioners · 900+ over 9 years" },
        { value: "600K€/yr", label: "community volume" },
        { value: "154", label: "B2B services delivered in 2024" },
        { value: "+35K€", label: "EBITDA swing 2023→2024" },
      ],
    },
  },

  approche: {
    label: { fr: "Approche produit", en: "Product approach" },
    title: {
      fr: "Je pars du besoin utilisateur, je tranche avec la data, je livre",
      en: "I start from user needs, decide with data, and ship",
    },
    col1title: { fr: "Discovery en continu", en: "Continuous discovery" },
    col1: {
      fr: [
        "Chez Nomad's, mes praticien·ne·s étaient mes client·e·s. <strong>Leur avis était constamment demandé et implémenté</strong> : tests de features, sondages, interviews utilisateur, votes sur les fonctionnalités.",
        "Régulièrement dans l'année, des <strong>ateliers de co-construction et sessions de feedback</strong> pour réfléchir ensemble à partir de leurs vrais besoins.",
        "Ce ping-pong continu avec les utilisateurs donne des insights auxquels on n'aurait jamais pensé. C'est aussi ce qui m'a amenée à <strong>fermer 2 villes non rentables</strong> : contre-intuitif, mais c'est la décision qui a rendu la boîte rentable.",
      ],
      en: [
        "At Nomad's, my practitioners were my customers. <strong>Their feedback was constantly requested and implemented</strong>: feature tests, surveys, user interviews, feature voting.",
        "Throughout the year, <strong>co-construction workshops and feedback sessions</strong> to think together from their real needs.",
        "This continuous back-and-forth with users generates insights you'd never think of. It's also what led me to <strong>shut down 2 unprofitable cities</strong>: counterintuitive, but it's the decision that made the company profitable.",
      ],
    },
    col2title: { fr: "Toute la chaîne", en: "End-to-end" },
    col2: {
      fr: [
        "9 ans en CEO m'ont amenée à tout faire : <strong>vision produit, priorisation, specs, user research, delivery.</strong> Aujourd'hui, avec le no-code et le build IA-assisté, <strong>je livre aussi des produits complets moi-même.</strong>",
        "Ma force : <strong>je comprends les problématiques business</strong> d'un CEO parce que je l'ai été, et <strong>les contraintes techniques</strong> d'un dev parce que je sais ce que c'est de builder. Quand on me dit que quelque chose est possible ou pas, je comprends pourquoi.",
      ],
      en: [
        "9 years as CEO led me to do everything: <strong>product vision, prioritization, specs, user research, delivery.</strong> Today, with no-code and AI-assisted building, <strong>I also ship complete products myself.</strong>",
        "My strength: <strong>I understand the business challenges</strong> of a CEO because I was one, and <strong>the technical constraints</strong> of a dev because I know what it's like to build. When someone tells me something is or isn't possible, I understand why.",
      ],
    },
    col3title: { fr: "La data tranche, l'utilisateur décide", en: "Data decides, users lead" },
    col3: {
      fr: [
        "Ce qui me motive dans le produit, c'est <strong>le bon petit changement au bon endroit, mesuré dans les KPIs</strong>, en partant toujours des <strong>utilisateurs</strong> et en validant par les <strong>données</strong>.",
        "Chez Nomad's, le système Mads a automatisé 100% de la facturation et libéré 1 journée par mois. Au Labo de Clairie, une stack no-code a permis de passer de 40 à 1 200 choristes sans recruter.",
        "Chaque décision part d'un <strong>besoin utilisateur</strong>, <strong>se mesure dans les KPIs, et s'ajuste en continu</strong>. C'est cette boucle qui crée le vrai impact.",
      ],
      en: [
        "What motivates me in product is <strong>the right small change in the right place, measured in KPIs</strong>, always starting from <strong>users</strong> and validating with <strong>data</strong>.",
        "At Nomad's, the Mads system automated 100% of invoicing and freed 1 day per month. At Le Labo de Clairie, a no-code stack enabled scaling from 40 to 1,200 choir members without hiring.",
        "Every decision starts from a <strong>user need</strong>, <strong>is measured in KPIs, and is continuously adjusted</strong>. This loop is what creates real impact.",
      ],
    },
  },

  cases_section: {
    label: { fr: "Cases produit PM", en: "PM Product Cases" },
    title: {
      fr: "Trois décisions produit qui ont fait la différence",
      en: "Three product decisions that made the difference",
    },
    cta: { fr: "Lire le case →", en: "Read the case →" },
    items: {
      fr: [
        { tag: "Feature from scratch · Pricing", title: "Système Mads", description: "En 2019, passage d'un modèle à la commission à un système de crédits prépayés conçu from scratch. 100% de la facturation automatisée, métrique d'engagement claire. Stable depuis 7 ans." },
        { tag: "Data-informed · Sunset decision", title: "Fermeture Marseille / Aix", description: "12 mois de suivi terrain, 3 KPIs trackés, fermeture de 2 villes non rentables en 2024. Résultat : +35K€ de swing EBITDA et retour à la rentabilité." },
        { tag: "Mission PM en cours", title: "Le Labo de Clairie · Nouvelle plateforme", description: "D'abord Product Builder (stack no-code, 40 → 1 200 choristes), puis PM de la nouvelle plateforme. Backlog priorisé pour un lancement sous pression, V1 déjà en ligne (500 préinscrits), stakeholder management CEO/dev." },
      ],
      en: [
        { tag: "Feature from scratch · Pricing", title: "Mads System", description: "In 2019, shifted from a commission model to a prepaid credit system designed from scratch. 100% of invoicing automated, clear engagement metric. Stable for 7 years." },
        { tag: "Data-informed · Sunset decision", title: "Marseille / Aix Shutdown", description: "12 months of field tracking, 3 KPIs monitored, shutdown of 2 unprofitable cities in 2024. Result: +35K€ EBITDA swing and return to profitability." },
        { tag: "Ongoing PM mission", title: "Le Labo de Clairie · New platform", description: "First as Product Builder (no-code stack, 40 → 1,200 choir members), then PM for the new platform. Backlog prioritized under pressure, V1 live (500 pre-registrations), CEO/dev stakeholder management." },
      ],
    },
  },

  formation_section: {
    label: { fr: "Formation Product Management · 2026", en: "Product Management Training · 2026" },
    quote: { fr: "Mon premier mois en tant que Product Manager.", en: "My first month as a Product Manager." },
    p1: {
      fr: "4 semaines intensives en équipe sur une vraie problématique sponsor BlaBlaCar.",
      en: "4 intensive weeks in a team on a real BlaBlaCar sponsor problem.",
    },
    p2: {
      fr: "Use case, user research, priorisation, delivery.",
      en: "Use case, user research, prioritization, delivery.",
    },
    certif: { fr: "Certifié France Compétences · RS6636", en: "France Compétences Certified · RS6636" },
    cta: { fr: "Voir la formation →", en: "See the training →" },
  },

  projets_section: {
    label: { fr: "Product Builder", en: "Product Builder" },
    title: { fr: "Ce que je construis", en: "What I build" },
    cta: { fr: "Voir le projet →", en: "View project →" },
    items: {
      fr: [
        { tag: "No-code · Automatisation", title: "Le Labo de Clairie", description: "Back-office complet, base de données et automatisations sur stack no-code (Airtable, Make, Stripe). Scaling d'une chorale de 40 à 1 200 membres, 400K€ traités, 2 ETP automatisés." },
        { tag: "Site vitrine · Build IA-assisted", title: "Light Geek", description: "Site vitrine de mon studio freelance de Product Builder. Conçu et développé en build IA-assisted." },
        { tag: "App · React + Supabase", title: "Colidays", description: "App de coloc de vacances. Répartition du loyer par chambre/nuits/adultes, dépenses partagées type Tricount, planning cuisine et courses, activités avec vote." },
        { tag: "Site · Next.js + Supabase", title: "DAWghters", description: "Site avec admin multi-comptes pour une association de MAO. Gestion autonome des membres, des événements et de l'agenda par les administratrices." },
      ],
      en: [
        { tag: "No-code · Automation", title: "Le Labo de Clairie", description: "Complete back-office, database and automations on no-code stack (Airtable, Make, Stripe). Scaled a choir from 40 to 1,200 members, 400K€ processed, 2 FTEs automated." },
        { tag: "Landing page · AI-assisted build", title: "Light Geek", description: "Landing page for my freelance Product Builder studio. Designed and developed with AI-assisted building." },
        { tag: "App · React + Supabase", title: "Colidays", description: "Group vacation app. Rent split by room/nights/adults, shared expenses (Tricount-style), meal planning and grocery lists, activities with voting." },
        { tag: "Website · Next.js + Supabase", title: "DAWghters", description: "Multi-admin website for a music production association. Autonomous management of members, events, and calendar by administrators." },
      ],
    },
  },

  skills_section: {
    label: { fr: "Compétences", en: "Skills" },
    title: { fr: "Ma stack", en: "My stack" },
    items: {
      fr: [
        { category: "Product", items: ["Discovery & User Research", "Priorisation (RICE, MoSCoW)", "Data-informed · OKR", "Pricing & Monétisation", "Stakeholder management"] },
        { category: "Build (IA-assisted)", items: ["Sites & apps (React, Next.js)", "Supabase · Vercel", "Stripe (intégration paiement)", "Prototypage rapide", "Claude Code · Cowork"] },
        { category: "No-code, automatisation & IA", items: ["Make · Zapier · n8n", "Airtable · Notion", "Tally · Folk · HubSpot", "Agents IA · RAG · Dust", "Intégration IA dans les process"] },
        { category: "Transverse", items: ["Stratégie produit", "9 ans CEO (marketplace B2C)", "Trilingue FR/DE/EN", "Gestion de freelances tech", "Conception produit end-to-end"] },
      ],
      en: [
        { category: "Product", items: ["Discovery & User Research", "Prioritization (RICE, MoSCoW)", "Data-informed · OKR", "Pricing & Monetization", "Stakeholder management"] },
        { category: "Build (AI-assisted)", items: ["Sites & apps (React, Next.js)", "Supabase · Vercel", "Stripe (payment integration)", "Rapid prototyping", "Claude Code · Cowork"] },
        { category: "No-code, automation & AI", items: ["Make · Zapier · n8n", "Airtable · Notion", "Tally · Folk · HubSpot", "AI Agents · RAG · Dust", "AI integration in processes"] },
        { category: "Cross-functional", items: ["Product strategy", "9 years CEO (B2C marketplace)", "Trilingual FR/DE/EN", "Freelance tech management", "End-to-end product design"] },
      ],
    },
  },

  pourquoiPM: {
    label: { fr: "Pourquoi PM maintenant ?", en: "Why PM now?" },
    blocks: {
      fr: [
        { title: "La continuité du rôle, pas la rupture", text: "Quand je me suis posé la question de la suite après Nomad's, le rôle de PM est venu comme une évidence. C'est ce que j'aimais déjà en CEO : être au croisement de la tech, du business et des utilisateurs. Orchestrer, prioriser, arbitrer, faire. Le faire pour un produit, dans une équipe, en me concentrant pleinement sur la valeur utilisateur·ice et le delivery : c'est ce qui me donne envie de me lever le matin." },
        { title: "L'envie d'une équipe autour de moi", text: "J'ai travaillé seule longtemps, et l'envie aujourd'hui est inverse : m'inscrire dans une équipe, ne plus être la seule décisionnaire, avoir des collègues qui poussent dans la même direction. Avoir été à la tête de ma boîte 9 ans m'aide à comprendre comment fonctionne une organisation, et à savoir m'aligner sur une décision qui n'est pas la mienne quand c'est ce qu'il faut faire." },
        { title: "L'apprentissage qui a tout déclenché", text: "À Nomad's, j'ai conçu une V2 complète de la plateforme, spécifiée et prototypée. Elle n'a jamais été livrée. Sans PM dédié·e protégé·e dans l'organigramme, le rôle se sacrifie en premier : l'opérationnel mange systématiquement le temps produit. C'est exactement pour ça que je veux ce poste : pouvoir me consacrer à 100% au produit, dans un cadre où le delivery est protégé." },
      ],
      en: [
        { title: "A natural evolution, not a career change", text: "When I asked myself what's next after Nomad's, the PM role was obvious. It's what I already loved as CEO: being at the intersection of tech, business, and users. Orchestrating, prioritizing, deciding, shipping. Doing it for a product, in a team, fully focused on user value and delivery: that's what gets me out of bed in the morning." },
        { title: "The desire for a team around me", text: "I worked alone for a long time, and now I want the opposite: being part of a team, no longer the sole decision-maker, having colleagues pushing in the same direction. Being at the helm for 9 years helps me understand how organizations work, and how to align with a decision that isn't mine when that's what's needed." },
        { title: "The lesson that triggered everything", text: "At Nomad's, I designed a complete V2 of the platform, specced and prototyped. It was never shipped. Without a dedicated PM protected in the org chart, the role gets sacrificed first: operations systematically eats product time. That's exactly why I want this role: to focus 100% on product, in a framework where delivery is protected." },
      ],
    },
  },

  recherche: {
    label: { fr: "Ce que je recherche", en: "What I'm looking for" },
    title: { fr: "Un poste de PM qui construit", en: "A PM role that builds" },
    text: {
      fr: "CDI ou freelance en startup ou scale-up France, idéalement marketplace ou plateforme. PM hybride : concevoir, prioriser, arbitrer, et garder les mains dans le produit.",
      en: "Permanent or freelance in a French startup or scale-up, ideally marketplace or platform. Hybrid PM: design, prioritize, decide, and keep my hands in the product.",
    },
    tags: {
      fr: ["📍 Paris", "Mobile Marseille", "Remote FR", "CDI ou freelance"],
      en: ["📍 Paris", "Mobile Marseille", "Remote FR", "Permanent or freelance"],
    },
  },

  contact_section: {
    title: { fr: "Me contacter 👋", en: "Get in touch 👋" },
  },

  footer: {
    coded: { fr: "Codé maison · build IA-assisté", en: "Homemade · AI-assisted build" },
  },
} as const;
