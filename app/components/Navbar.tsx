"use client";
import React, { useState } from "react";
import {
  Home as HomeIcon,
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Flame,
  Sparkles,
} from "lucide-react";

type SectionId =
  | "home"
  | "about"
  | "experience"
  | "education"
  | "proof-of-work"
  | "contact";

type PaletteName = "bold" | "futuristic";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface NavbarProps {
  sections: SectionId[];
  activeSection: SectionId;
  onNavClick: (id: SectionId) => void;
  darkMode: boolean;
  palette: PaletteName;
  setPalette: (p: PaletteName) => void;
  colors: PaletteStyles;
}

const sectionIcons: Record<SectionId, JSX.Element> = {
  home: <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
  about: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
  experience: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
  education: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
  "proof-of-work": <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />,
  contact: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
};

const Navbar: React.FC<NavbarProps> = ({
  sections,
  activeSection,
  onNavClick,
  darkMode,
  palette,
  setPalette,
  colors,
}) => {
  const [hovered, setHovered] = useState<SectionId | null>(null);

  const labelClasses = `absolute left-1/2 -translate-x-1/2 mt-9 text-xs px-2 py-1 rounded-md border border-white/20 backdrop-blur-md shadow-md whitespace-nowrap ${
    darkMode ? "bg-gray-900/80 text-white" : "bg-white text-gray-700"
  }`;

  return (
    <nav className="flex justify-center items-center py-4 sticky top-4 z-50">
      <div className="flex items-center gap-4 rounded-full px-4 sm:px-6 py-3 bg-white/10 dark:bg-gray-800/40 border border-white/20 shadow-lg backdrop-blur-xl">
        {sections.map((section) => {
          const label = section.replace(/-/g, " ");
          const isActive = section === activeSection;

          return (
            <button
              key={section}
              onClick={() => onNavClick(section)}
              onMouseEnter={() => setHovered(section)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-2 rounded-full transition flex flex-col items-center ${
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <span className={darkMode ? colors.textDark : colors.textLight}>
                {sectionIcons[section]}
              </span>

              {hovered === section && <span className={labelClasses}>{label}</span>}
              {isActive && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 text-[10px]">•</span>
              )}
            </button>
          );
        })}

        {/* Palette buttons */}
        <button
          onClick={() => setPalette("bold")}
          className={`p-2 rounded-full border ${
            palette === "bold"
              ? "border-rose-400 bg-rose-500/20"
              : "border-gray-600 hover:bg-gray-700"
          }`}
        >
          <Flame
            className={`w-5 h-5 ${
              palette === "bold" ? "text-rose-400" : "text-gray-300"
            }`}
          />
        </button>

        <button
          onClick={() => setPalette("futuristic")}
          className={`p-2 rounded-full border ${
            palette === "futuristic"
              ? "border-indigo-400 bg-indigo-500/20"
              : "border-gray-600 hover:bg-gray-700"
          }`}
        >
          <Sparkles
            className={`w-5 h-5 ${
              palette === "futuristic" ? "text-indigo-400" : "text-gray-300"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
