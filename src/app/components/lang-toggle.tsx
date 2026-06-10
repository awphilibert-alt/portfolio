"use client";

import { useLang } from "../lang-provider";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center bg-dark/5 rounded-full p-0.5 ml-4">
      <button
        onClick={() => setLang("fr")}
        className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full transition-all ${
          lang === "fr"
            ? "bg-violet text-white font-bold"
            : "text-dark/40 hover:text-dark"
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full transition-all ${
          lang === "en"
            ? "bg-orange text-white font-bold"
            : "text-dark/40 hover:text-dark"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
