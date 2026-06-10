"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../lang-provider";
import { LangToggle } from "../components/lang-toggle";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const content = {
  back: { fr: "← Retour", en: "← Back" },
  pill: { fr: "Formation Product Management · 2026", en: "Product Management Bootcamp · 2026" },
  title: {
    fr: "Noé · mon premier mois en tant que Product Manager",
    en: "Noé · my first month as a Product Manager",
  },
  subtitle: {
    fr: "4 semaines intensives en équipe sur une problématique sponsor BlaBlaCar. Programme certifié France Compétences (RS6636), 96% des alumni en poste PM dans les 6 mois.",
    en: "4 intensive weeks as a team on a BlaBlaCar sponsor challenge. Certified program (France Compétences RS6636), 96% of alumni in PM roles within 6 months.",
  },
  programTitle: { fr: "Le programme", en: "The program" },
  programP: {
    fr: "Noé est positionné comme ton premier mois en tant que PM. Cours le matin, mise en pratique l'après-midi sur le use case sponsor. 4 semaines bootcamp full-time. Sponsors officiels : BlaBlaCar, Decathlon, Getaround. Certifié France Compétences (RS6636). Réseau d'une vingtaine de PMs, Head of Product et CPO rencontrés pendant la formation (PayFit, Spendesk, BackMarket, Alan, Google, Stuart, Qonto, ManoMano).",
    en: "Noé is positioned as your first month as a PM. Morning classes, afternoon practice on the sponsor use case. 4-week full-time bootcamp. Official sponsors: BlaBlaCar, Decathlon, Getaround. Certified France Compétences (RS6636). Network of around twenty PMs, Heads of Product, and CPOs met during the program (PayFit, Spendesk, BackMarket, Alan, Google, Stuart, Qonto, ManoMano).",
  },
  practiceTitle: { fr: "Ce que j'y ai pratiqué", en: "What I practiced" },
  modules: {
    fr: [
      { title: "Strategy", color: "orange", desc: "Vision produit, business model, Product-Market-Fit, go-to-market. Metrics par type de produit (SaaS, Consumer, Platform). Impact de la stratégie sur la vision, les objectifs et la roadmap." },
      { title: "Problem", color: "violet", desc: "Data for PMs : segmentation, A/B test, exploration SQL. User research : interviews, usability testing, recherche quantitative. Priorisation : RICE, MoSCoW, Cost / Impact. Notions tech pour qualifier le coût technique d'une solution." },
      { title: "Solution", color: "rose", desc: "Design : UX/UI, duo PM-Designer, Figma, test utilisateur et itération. Specs : user stories, tracking plan, release planning, plan de rollout, edge cases. Delivery : Scrum, sprint, rôles dans la squad. Product Launch : rollout, beta testing, marketing produit interne et externe." },
      { title: "Impact", color: "sky", desc: "Communication stakeholders, savoir dire non, construction de la roadmap, public speaking. IA pour PMs : devenir PM augmenté·e grâce à l'IA, création d'un mini-agent personnalisé sur Dust." },
    ],
    en: [
      { title: "Strategy", color: "orange", desc: "Product vision, business model, Product-Market Fit, go-to-market. Metrics by product type (SaaS, Consumer, Platform). Strategy's impact on vision, objectives, and roadmap." },
      { title: "Problem", color: "violet", desc: "Data for PMs: segmentation, A/B testing, SQL exploration. User research: interviews, usability testing, quantitative research. Prioritization: RICE, MoSCoW, Cost/Impact. Tech fundamentals to assess technical cost of a solution." },
      { title: "Solution", color: "rose", desc: "Design: UX/UI, PM-Designer duo, Figma, user testing and iteration. Specs: user stories, tracking plan, release planning, rollout plan, edge cases. Delivery: Scrum, sprint, squad roles. Product Launch: rollout, beta testing, internal and external product marketing." },
      { title: "Impact", color: "sky", desc: "Stakeholder communication, saying no, roadmap building, public speaking. AI for PMs: becoming an AI-augmented PM, creating a custom mini-agent on Dust." },
    ],
  },
  useCaseTitle: { fr: "Le use case BlaBlaCar", en: "The BlaBlaCar use case" },
  useCaseIntro: {
    fr: "Travail d'équipe de 4 personnes sur 4 semaines. Présentation finale à Nicolas Beytout, Senior PM chez BlaBlaCar.",
    en: "4-person team work over 4 weeks. Final presentation to Nicolas Beytout, Senior PM at BlaBlaCar.",
  },
  useCaseP: {
    fr: "Sujet : How could we improve the trip success rate of our Newbie Drivers? Objectif : faire passer le Success Rate des newbie drivers de 30% à 50%. On a déroulé tout le process PM : discovery quantitative et qualitative, hypothèses, user research, priorisation, benchmark, solutions, itérations.",
    en: "Topic: How could we improve the trip success rate of our Newbie Drivers? Goal: increase the Success Rate of newbie drivers from 30% to 50%. We ran the full PM process: quantitative and qualitative discovery, hypotheses, user research, prioritization, benchmarking, solutions, iterations.",
  },
  approachTitle: { fr: "L'approche", en: "The approach" },
  steps: {
    fr: [
      "Discovery : interviews utilisateur + exploration SQL pour qualifier le baseline (30%)",
      "Hypothesis : ce qui pourrait influencer le Success Rate (photo profil, description trajet, certification, durée du trajet, prix)",
      "User Research : 4 thèmes (Trust & safety, Trip reliability, Comfort expectations, Flexibility & convenience)",
      "Prioritization : tableau Problème → Solution → Impact → Complexité (méthodo RICE)",
      "Benchmark : Airbnb \"New\" badge, Etsy \"New seller\", Upwork \"Rising Talent\", Hinge/Bumble, Gens de Confiance",
      "Solution : prototypage Figma sur 4 fonctionnalités (Sponsorship, Verbatim, Verified ID, Flexibility)",
      "Itérations basées sur les retours user research",
      "Présentation finale au sponsor",
    ],
    en: [
      "Discovery: user interviews + SQL exploration to qualify the baseline (30%)",
      "Hypothesis: what could influence the Success Rate (profile photo, trip description, certification, trip duration, price)",
      "User Research: 4 themes (Trust & safety, Trip reliability, Comfort expectations, Flexibility & convenience)",
      "Prioritization: Problem → Solution → Impact → Complexity matrix (RICE method)",
      "Benchmark: Airbnb \"New\" badge, Etsy \"New seller\", Upwork \"Rising Talent\", Hinge/Bumble, Gens de Confiance",
      "Solution: Figma prototyping on 4 features (Sponsorship, Verbatim, Verified ID, Flexibility)",
      "Iterations based on user research feedback",
      "Final presentation to sponsor",
    ],
  },
  contributionTitle: { fr: "Ma contribution propre", en: "My personal contribution" },
  contributionP: {
    fr: "Animation de la phase discovery + conduite des interviews utilisateur. Benchmark concurrentiel (en solo). Sur la phase solution, prise en charge de la fonctionnalité Verbatim de bout en bout : conception UX, prototypes Figma, test utilisateur, itération après retours. Première itération sur la fonctionnalité Verified ID.",
    en: "Led the discovery phase + conducted user interviews. Competitive benchmark (solo). On the solution phase, owned the Verbatim feature end-to-end: UX design, Figma prototypes, user testing, iteration after feedback. First iteration on the Verified ID feature.",
  },
  footerBack: { fr: "← Retour au portfolio", en: "← Back to portfolio" },
  footerCases: { fr: "Voir mes vrais cas produit en entreprise →", en: "See my real product cases in business →" },
} as const;

// Tailwind safelist for dynamic color classes
const _dependencies = "text-orange text-violet text-rose text-sky";

export default function FormationNoePage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <div className="flex items-center">
          <Link href="/" className="text-sm font-semibold text-dark/40 hover:text-lime transition-colors">{content.back[lang]}</Link>
          <LangToggle />
        </div>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-lime/10 text-lime text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {content.title[lang]}<span className="text-lime">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="space-y-20">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.programTitle[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]">{content.programP[lang]}</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-8">{content.practiceTitle[lang]}</h2>
            <div className="space-y-12">
              {content.modules[lang].map((m) => (
                <div key={m.title}>
                  <h3 className={`font-heading text-lg font-bold text-${m.color} mb-3`}>{m.title}</h3>
                  <p className="text-dark/65 leading-[1.8]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.useCaseTitle[lang]}</h2>
            <div className="bg-sky/5 border-l-4 border-sky p-8 mb-8">
              <p className="text-dark/65 leading-[1.8]">{content.useCaseIntro[lang]}</p>
            </div>
            <p className="text-dark/65 leading-[1.8] mb-8">{content.useCaseP[lang]}</p>

            <h3 className="font-heading text-lg font-bold mb-4">{content.approachTitle[lang]}</h3>
            <ol className="space-y-4 mb-12">
              {content.steps[lang].map((step, i) => (
                <li key={i} className="flex gap-4 text-dark/65 leading-[1.8]">
                  <span className="font-mono text-xs text-dark/30 flex-shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="bg-violet/5 border-l-4 border-violet p-8">
              <h3 className="font-heading text-lg font-bold mb-4">{content.contributionTitle[lang]}</h3>
              <p className="text-dark/65 leading-[1.8]">{content.contributionP[lang]}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex flex-wrap gap-4">
          <Link href="/" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-lime transition-colors">{content.footerBack[lang]}</Link>
          <span className="text-dark/20">·</span>
          <Link href="/cases" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-rose transition-colors">{content.footerCases[lang]}</Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
