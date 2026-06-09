"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../../lang-provider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const content = {
  back: { fr: "← Retour", en: "← Back" },
  pill: { fr: "Data-informed · Décision difficile · Nomad's 2024", en: "Data-informed · Tough decision · Nomad's 2024" },
  title: { fr: "Fermeture Marseille et Aix", en: "Closing Marseille and Aix" },
  subtitle: {
    fr: "12 mois de suivi terrain, 3 KPIs, une décision contre-intuitive qui a contribué au retour à la rentabilité.",
    en: "12 months of field monitoring, 3 KPIs, a counterintuitive decision that contributed to the return to profitability.",
  },
  situation: { fr: "Situation", en: "Situation" },
  situationP: {
    fr: "Fin 2023, Nomad's opère dans 6 villes. Marseille (ouverte en 2020) et Aix (ouverte en 2023) avaient été imaginées comme un hub Sud pour mailler le territoire. Sur le terrain, ça ne se passe pas comme prévu.",
    en: "End of 2023, Nomad's operates in 6 cities. Marseille (opened 2020) and Aix (opened 2023) were envisioned as a Southern hub to cover the territory. On the ground, things weren't going as planned.",
  },
  task: { fr: "Task", en: "Task" },
  taskP: {
    fr: "Décider si je continue à investir sur le hub Sud ou si je redirige les ressources vers les autres villes. Arbitrer entre la conviction initiale et ce que disait la réalité.",
    en: "Decide whether to keep investing in the Southern hub or redirect resources to other cities. Choose between the initial conviction and what reality was showing.",
  },
  action: { fr: "Action", en: "Action" },
  actionP: {
    fr: "J'ai posé un suivi serré sur trois KPIs : CA mensuel par ville, nombre de bars partenaires actifs, nombre de praticien·ne·s réellement opérationnel·le·s. En un an, le diagnostic est tombé. Marseille avait perdu plus de 50% de son CA, on tournait avec 3 bars partenaires actifs, 30 praticien·ne·s inscrit·e·s dont seulement 5 vraiment opérationnel·le·s. J'ai constaté qu'on n'arrivait pas à réamorcer le tissu local depuis Paris, parce que ce marché demande une gestion de proximité. J'ai pris la décision de fermer Marseille et Aix en 2024.",
    en: "I set up tight monitoring on three KPIs: monthly revenue per city, number of active partner bars, number of truly operational practitioners. After a year, the diagnosis was clear. Marseille had lost over 50% of its revenue, we had 3 active partner bars, 30 registered practitioners of which only 5 were truly operational. I realized we couldn't reboot the local network from Paris, because this market requires proximity management. I made the decision to close Marseille and Aix in 2024.",
  },
  result: { fr: "Résultat", en: "Result" },
  stats: {
    fr: [
      { value: "+35K€", desc: "swing EBITDA : -23 500€ en 2023 → +11 800€ en 2024" },
      { value: "Coûts ops", desc: "réduction des coûts opérationnels sur 2 villes non rentables" },
      { value: "Focus équipe", desc: "énergie recentrée sur 4 villes performantes, charge mentale allégée" },
    ],
    en: [
      { value: "+35K€", desc: "EBITDA swing: -23,500€ in 2023 → +11,800€ in 2024" },
      { value: "Ops costs", desc: "reduced operational costs on 2 unprofitable cities" },
      { value: "Team focus", desc: "energy refocused on 4 performing cities, reduced mental load" },
    ],
  },
  learning: { fr: "Learning", en: "Learning" },
  learningP: {
    fr: "Un marché local n'est pas interchangeable, la proximité humaine est un input critique pour ce type de marketplace. Et il faut accepter de fermer une hypothèse qui ne décolle pas. La décision la plus dure que j'ai prise en 9 ans, et c'est celle qui a sauvé la trajectoire de la boîte.",
    en: "A local market is not interchangeable, human proximity is a critical input for this type of marketplace. And you have to accept closing a hypothesis that isn't taking off. The hardest decision I've made in 9 years, and the one that saved the company's trajectory.",
  },
} as const;

export default function CaseMarseillePage() {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-cream text-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-cream/90 backdrop-blur-md border-b border-dark/5">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </Link>
        <a href="/#cases" className="text-sm font-semibold text-dark/40 hover:text-rose transition-colors">{content.back[lang]}</a>
      </nav>

      <motion.div className="max-w-4xl mx-auto px-6 pt-28 pb-24" initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} className="inline-block bg-rose/10 text-rose text-xs font-bold px-3 py-1.5 rounded-full mb-6">{content.pill[lang]}</motion.div>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {content.title[lang]}<span className="text-rose">.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-dark/50 leading-relaxed mb-16 max-w-2xl">{content.subtitle[lang]}</motion.p>

        <motion.div variants={fadeUp} className="space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.situation[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]">{content.situationP[lang]}</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.task[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]">{content.taskP[lang]}</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.action[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]">{content.actionP[lang]}</p>
          </div>

          <div className="bg-rose/5 border-l-4 border-rose p-8">
            <h2 className="font-heading text-2xl font-bold mb-6">{content.result[lang]}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {content.stats[lang].map((s) => (
                <div key={s.value}>
                  <div className="font-heading text-2xl font-bold text-rose">{s.value}</div>
                  <p className="text-dark/50 text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-6">{content.learning[lang]}</h2>
            <p className="text-dark/65 leading-[1.8]">{content.learningP[lang]}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-20 pt-10 border-t-2 border-dark/10 flex justify-between">
          <Link href="/cases/mads" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-violet transition-colors">
            {lang === "fr" ? "← Système Mads" : "← Mads System"}
          </Link>
          <Link href="/cases/le-labo-de-clairie" className="font-mono text-xs uppercase tracking-wider text-dark/40 hover:text-orange transition-colors">
            Le Labo de Clairie →
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
