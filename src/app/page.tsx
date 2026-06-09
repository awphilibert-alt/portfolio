"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { t } from "./translations";
import { useLang } from "./lang-provider";

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

const projectSlugs = ["labo-de-clairie", "light-geek", "maison-du-bonheur", "dawghters"];
const caseSlugs = ["mads", "marseille-fermeture", "le-labo-de-clairie"];
const caseColors = ["violet", "rose", "orange"];
const projectColors = ["violet", "orange", "rose", "sky"];
const statColors = ["text-orange", "text-violet", "text-rose", "text-lime"];
const skillColors = ["orange", "violet", "rose", "sky"];
const expColors = ["text-orange", "text-violet", "text-rose", "text-sky", "text-orange"];

const wordColors = ["text-violet", "text-rose", "text-sky", "text-lime", "text-sky"];

function RotatingWord() {
  const { lang } = useLang();
  const words = t.rotatingWords[lang];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[index];
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
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, currentWord, words.length]);

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

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className="font-mono text-xs uppercase tracking-wider border border-dark/20 px-2 py-1 hover:border-dark transition-colors ml-4"
      aria-label="Toggle language"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}

function MobileNav() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center md:hidden">
        <LangToggle />
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-10 ml-3" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-dark transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-dark/10 px-6 py-6 flex flex-col gap-5 md:hidden"
        >
          <a href="#parcours" onClick={() => setOpen(false)} className="text-dark hover:text-orange font-mono text-sm uppercase tracking-widest transition-colors">{t.nav.parcours[lang]}</a>
          <a href="#nomads" onClick={() => setOpen(false)} className="text-dark hover:text-violet font-mono text-sm uppercase tracking-widest transition-colors">{t.nav.nomads[lang]}</a>
          <a href="#cases" onClick={() => setOpen(false)} className="text-dark hover:text-rose font-mono text-sm uppercase tracking-widest transition-colors">{t.nav.cases[lang]}</a>
          <a href="#projets" onClick={() => setOpen(false)} className="text-dark hover:text-sky font-mono text-sm uppercase tracking-widest transition-colors">{t.nav.projets[lang]}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-dark hover:text-violet font-mono text-sm uppercase tracking-widest transition-colors">{t.nav.contact[lang]}</a>
        </motion.div>
      )}
    </>
  );
}

// Tailwind safelist for dynamic color classes
const _dependencies = "hover:border-orange hover:border-violet hover:border-rose hover:border-sky hover:border-lime text-orange text-violet text-rose text-sky text-lime bg-orange bg-violet bg-rose bg-sky bg-lime group-hover:text-orange group-hover:text-violet group-hover:text-rose group-hover:text-sky group-hover:text-lime border-orange/30 border-violet/30 border-rose/30 border-sky/30 border-lime/30";

/* eslint-disable react/no-danger */
function Html({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html.replace(/<strong>/g, '<strong class="text-dark">').replace(/<strong class="text-dark" class="text-dark">/g, '<strong class="text-dark">') }} />;
}

function HtmlWhite({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html.replace(/<strong>/g, '<strong class="text-white">').replace(/<strong class="text-dark">/g, '<strong class="text-white">') }} />;
}

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 bg-cream/80 backdrop-blur-md">
        <a href="/" className="font-heading text-lg font-bold tracking-tight">
          Alexandra Philibert<span className="text-orange">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#parcours" className="text-dark hover:text-orange transition-colors">{t.nav.parcours[lang]}</a>
          <a href="#nomads" className="text-dark hover:text-violet transition-colors">{t.nav.nomads[lang]}</a>
          <a href="#cases" className="text-dark hover:text-rose transition-colors">{t.nav.cases[lang]}</a>
          <a href="#projets" className="text-dark hover:text-sky transition-colors">{t.nav.projets[lang]}</a>
          <a href="#contact" className="text-dark hover:text-violet transition-colors">{t.nav.contact[lang]}</a>
          <LangToggle />
        </div>
        <MobileNav />
      </nav>

      {/* 1. Hero */}
      <section className="px-6 md:px-12 pt-24 pb-20 relative">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-6xl">
          <motion.p variants={slideRight} className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-6">
            {t.hero.subtitle[lang]}
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-0">
            {t.hero.line1[lang]}<span className="text-orange">{t.hero.verb[lang]}</span>,
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-0">
            {t.hero.line2pre[lang]}<RotatingWord />
          </motion.h1>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold tracking-tight leading-[0.95] mb-8">
            {t.hero.line3[lang]}<span className="text-orange">.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-dark/50 font-bold mb-10">
            {t.hero.tagline[lang].split("<sep>").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-dark/20 mx-2">·</span>}
                {part.trim()}
              </span>
            ))}
          </motion.p>

          <motion.div variants={slideRight} className="flex gap-3">
            <a href="#contact" className="bg-orange text-white font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-dark transition-colors">
              {t.hero.cta1[lang]}
            </a>
            <a href="#projets" className="border-2 border-dark text-dark font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-dark hover:text-white transition-colors">
              {t.hero.cta2[lang]}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Séparateur */}
      <div className="flex h-2">
        <div className="flex-1 bg-orange" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-lime" />
      </div>

      {/* 1b. About + Parcours */}
      <section id="about" className="pt-32 pb-32 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>

          <motion.div variants={fadeUp} className="md:grid md:grid-cols-12 gap-12 mb-24">
            <div className="col-span-4 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-3">{t.about.label[lang]}</div>
              <div className="w-12 h-1 bg-orange mb-6" />
              <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
                Alexandra Philibert<span className="text-orange">.</span>
              </h2>
            </div>
            <div className="col-span-8 col-start-5">
              <div className="text-white/60 text-base leading-[1.9] space-y-5 mb-8">
                <p><HtmlWhite html={t.about.p1[lang]} /></p>
                <p><HtmlWhite html={t.about.p2[lang]} /></p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.hobbies[lang].map((item) => (
                  <span key={item.label} className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 text-xs text-white/80">
                    <span>{item.emoji}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div id="parcours" variants={fadeUp} className="md:grid md:grid-cols-12 gap-12 scroll-mt-20">
            <div className="col-span-4 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-3">{t.parcours.label[lang]}</div>
              <div className="w-12 h-1 bg-lime" />
            </div>
            <div className="col-span-8 col-start-5">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-6">{t.parcours.experience[lang]}</div>
              <div className="space-y-0 mb-16">
                {t.parcours.experience_items[lang].map((item, i) => (
                  <motion.div key={item.year} variants={fadeUp} className="flex gap-6 py-5 border-b border-white/5">
                    <div className="font-mono text-xs text-white/25 w-24 flex-shrink-0 pt-0.5">{item.year}</div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-heading text-base font-bold">{item.label}</span>
                        {item.company && <span className={`text-sm ${expColors[i]}`}>{item.company}</span>}
                      </div>
                      <div className="text-white/40 text-sm mt-1">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/30 font-bold mb-6">{t.parcours.formation[lang]}</div>
              <div className="space-y-0 mb-16">
                {t.parcours.formation_items[lang].map((item) => (
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
                  {t.parcours.cvButton[lang]}
                </a>
                <a href="https://www.linkedin.com/in/alexandra-philibert-016680113/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white/50 font-mono text-xs uppercase tracking-wider px-6 py-3 hover:border-white hover:text-white transition-colors">
                  LinkedIn →
                </a>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Séparateur */}
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
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">{t.nomads.label[lang]}</div>
            <h2 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[0.9]">
              Nomad&apos;s<span className="text-orange">.</span>
            </h2>
          </motion.div>

          <motion.div variants={slideRight} className="border-l-4 border-orange pl-8 md:pl-12 mb-20">
            <p className="font-heading text-xl md:text-2xl font-bold leading-[1.5] text-dark max-w-3xl">
              {t.nomads.intro[lang]}
              <br /><span className="text-orange text-lg md:text-xl">{t.nomads.mission[lang]}</span>
            </p>
          </motion.div>

          <div className="md:grid md:grid-cols-12 gap-x-8 gap-y-20 mb-20">
            <motion.div variants={fadeUp} className="col-span-5 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">{t.nomads.origine[lang]}</div>
              <p className="text-dark/65 leading-[1.8]"><Html html={t.nomads.origineText[lang]} /></p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 col-start-8 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-violet font-bold mb-6">{t.nomads.concept[lang]}</div>
              <p className="text-dark/65 leading-[1.8]">{t.nomads.conceptText[lang]}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-rose font-bold mb-6">{t.nomads.plateforme[lang]}</div>
              <p className="text-dark/65 leading-[1.8]"><Html html={t.nomads.plateformeText[lang]} /></p>
            </motion.div>

            <motion.div variants={fadeUp} className="col-span-5 col-start-8 mb-16 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-6">{t.nomads.resultat[lang]}</div>
              <p className="text-dark/65 leading-[1.8]"><Html html={t.nomads.resultatText[lang]} /></p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-dark text-white p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {t.nomads.stats[lang].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className={`font-heading text-3xl md:text-4xl font-bold ${statColors[i]} mb-2`}>{stat.value}</div>
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
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 font-bold mb-6">{t.approche.label[lang]}</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]">
              {t.approche.title[lang]}<span className="text-lime">.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="md:grid md:grid-cols-3 gap-px bg-white/15">
            {[
              { num: "01", title: t.approche.col1title[lang], paragraphs: t.approche.col1[lang] },
              { num: "02", title: t.approche.col2title[lang], paragraphs: t.approche.col2[lang] },
              { num: "03", title: t.approche.col3title[lang], paragraphs: t.approche.col3[lang] },
            ].map((col) => (
              <div key={col.num} className="bg-orange p-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-dark font-bold mb-4">{col.num}</div>
                <h3 className="font-heading text-lg font-bold mb-5 text-dark">{col.title}</h3>
                <div className="text-white/90 text-base leading-relaxed space-y-4">
                  {col.paragraphs.map((p, i) => (
                    <p key={i}><HtmlWhite html={p} /></p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 6. Cases PM */}
      <section id="cases" className="py-32 px-6 md:px-12 bg-dark text-white scroll-mt-4">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-6">{t.cases_section.label[lang]}</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              {t.cases_section.title[lang]}<span className="text-rose">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {t.cases_section.items[lang].map((c, i) => (
              <Link key={caseSlugs[i]} href={`/cases/${caseSlugs[i]}`}>
                <motion.div
                  variants={fadeUp}
                  className={`group relative border border-white/10 hover:border-${caseColors[i]} p-8 transition-all cursor-pointer h-full hover:-translate-y-1 flex flex-col`}
                >
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${caseColors[i]} font-bold mb-4`}>{c.tag}</div>
                  <h3 className="font-heading text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-white/50 leading-relaxed text-sm flex-1">{c.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-white/30 group-hover:text-${caseColors[i]} transition-colors mt-6`}>{t.cases_section.cta[lang]}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Formation PM */}
      <section className="py-20 px-6 md:px-12 bg-violet text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:flex md:items-center md:justify-between md:gap-12">
            <div className="mb-8 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-4">{t.formation_section.label[lang]}</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Noé<span className="text-orange">.</span>
              </h2>
              <div className="text-white/80 text-base leading-relaxed max-w-xl space-y-2">
                <p className="italic">&laquo; {t.formation_section.quote[lang]} &raquo;</p>
                <p>{t.formation_section.p1[lang]}</p>
                <p>{t.formation_section.p2[lang]}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full w-fit">
                {t.formation_section.certif[lang]}
              </div>
              <Link href="/formation-noe" className="bg-white text-dark font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-orange hover:text-white transition-colors inline-block font-bold text-center">
                {t.formation_section.cta[lang]}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 8. Product Builder */}
      <section id="projets" className="py-32 px-6 md:px-12 scroll-mt-4">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-orange font-bold mb-6">{t.projets_section.label[lang]}</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              {t.projets_section.title[lang]}<span className="text-orange">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {t.projets_section.items[lang].map((project, i) => (
              <Link key={projectSlugs[i]} href={`/projets/${projectSlugs[i]}`}>
                <motion.div
                  variants={fadeUp}
                  className={`group relative border-2 border-dark/10 hover:border-${projectColors[i]} p-8 transition-all cursor-pointer h-full hover:-translate-y-1 hover:shadow-lg flex flex-col`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${projectColors[i]} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                  <div className={`font-mono text-xs uppercase tracking-[0.2em] text-${projectColors[i]} font-bold mb-4`}>{project.tag}</div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-dark/55 leading-relaxed flex-1">{project.description}</p>
                  <span className={`font-mono text-xs uppercase tracking-wider text-dark/30 group-hover:text-${projectColors[i]} transition-colors mt-6`}>{t.projets_section.cta[lang]}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. Compétences */}
      <section className="py-32 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-lime font-bold mb-6">{t.skills_section.label[lang]}</div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight">
              {t.skills_section.title[lang]}<span className="text-rose">.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.skills_section.items[lang].map((group, i) => (
              <motion.div key={group.category} variants={fadeUp}>
                <h3 className={`font-heading text-base font-bold text-${skillColors[i]} mb-5 pb-3 border-b-2 border-${skillColors[i]}/30`}>{group.category}</h3>
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

      {/* Séparateur */}
      <div className="flex h-2">
        <div className="flex-1 bg-orange" />
        <div className="flex-1 bg-violet" />
        <div className="flex-1 bg-rose" />
        <div className="flex-1 bg-sky" />
        <div className="flex-1 bg-lime" />
      </div>

      {/* 10. Pourquoi PM */}
      <section className="py-32 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:grid md:grid-cols-12 gap-8">
            <div className="col-span-3 mb-12 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-violet font-bold mb-3">{t.pourquoiPM.label[lang]}</div>
              <div className="w-12 h-1 bg-violet" />
            </div>
            <div className="col-span-8 col-start-5 space-y-10">
              {t.pourquoiPM.blocks[lang].map((block, i) => (
                <motion.div key={i} variants={slideRight} className={i > 0 ? `border-t-2 ${i === 1 ? "border-orange" : "border-rose"} pt-10` : ""}>
                  <h3 className="font-heading text-lg font-bold mb-2">{block.title}</h3>
                  <p className="text-dark/65 leading-[1.8]">{block.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 10b. Ce que je recherche */}
      <section className="py-20 px-6 md:px-12 bg-dark text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="md:flex md:items-center md:justify-between md:gap-12">
            <div className="mb-8 md:mb-0">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-sky font-bold mb-4">{t.recherche.label[lang]}</div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {t.recherche.title[lang]}<span className="text-orange">.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl">
                {t.recherche.text[lang]}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {t.recherche.tags[lang].map((tag) => (
                <span key={tag} className="bg-white/10 text-white/80 text-xs px-4 py-2">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-violet text-white">
        <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-12">
              {t.contact_section.title[lang]}
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
        <span>{t.footer.coded[lang]}</span>
      </footer>
    </>
  );
}
