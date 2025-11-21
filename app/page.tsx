"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProofOfWork from "./components/ProofOfWork";
import Contact from "./components/Contact";

export type PaletteName = "bold" | "futuristic";

 export type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

const palettes: Record<PaletteName, PaletteStyles> = {
  bold: {
    gradient: "from-rose-500 to-orange-400",
    button: "from-rose-500 to-orange-400",
    textDark: "text-rose-300",
    textLight: "text-rose-700",
  },
  futuristic: {
    gradient: "from-indigo-500 to-violet-400",
    button: "from-indigo-500 to-violet-400",
    textDark: "text-indigo-300",
    textLight: "text-indigo-700",
  },
};

const SECTIONS = [
  "home",
  "about",
  "experience",
  "education",
  "proof-of-work",
  "contact",
] as const;

type SectionId = (typeof SECTIONS)[number];

export default function Page() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [palette, setPalette] = useState<PaletteName>("bold");
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const colors = palettes[palette];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (SECTIONS.includes(id)) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navSections: SectionId[] = [
    "home",
    "about",
    "experience",
    "education",
    "proof-of-work",
  ];

  return (
    <div
      className={
        darkMode
          ? "dark bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] text-white min-h-screen transition-colors duration-700"
          : "bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] text-gray-900 min-h-screen transition-colors duration-700"
      }
    >
      <Navbar
        sections={navSections}
        activeSection={activeSection}
        onNavClick={scrollToSection}
        darkMode={darkMode}
        palette={palette}
        setPalette={setPalette}
        colors={colors}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-24 space-y-24 sm:space-y-32">
        <Home
          darkMode={darkMode}
          colors={colors}
          onCTAClick={() => scrollToSection("proof-of-work")}
          onContactClick={() => scrollToSection("contact")}
        />
        <About darkMode={darkMode} colors={colors} />
        <Experience darkMode={darkMode} colors={colors} />
        <Education darkMode={darkMode} colors={colors} />
        <ProofOfWork darkMode={darkMode} colors={colors} />
        <Contact darkMode={darkMode} colors={colors} />
      </main>

      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 p-3 rounded-full border border-white/20 bg-black/40 dark:bg-white/10 shadow-lg backdrop-blur-md flex items-center justify-center"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <span className="text-amber-300 text-lg">☀️</span>
        ) : (
          <span className="text-indigo-700 text-lg">🌙</span>
        )}
      </button>
    </div>
  );
}
