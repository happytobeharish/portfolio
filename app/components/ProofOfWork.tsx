"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brush, CreditCard, Brain } from "lucide-react";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface ProofProps {
  darkMode: boolean;
  colors: PaletteStyles;
}

const projects = [
  {
    title: "Draw App",
    description:
      "A real-time collaborative whiteboard built using TurboRepo, Next.js, WebSocket, PostgreSQL, and TypeScript.",
    tech: ["TurboRepo", "Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    github: "https://github.com/happytobeharish/draw-app",
  },
  {
    title: "Pay Me",
    description:
      "A digital payment simulation platform built with React, Tailwind CSS, and Node.js.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/happytobeharish/Pay-Me",
  },
  {
    title: "Second Brain",
    description:
      "A personal knowledge management system using React, TypeScript, Express, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Express", "Tailwind CSS"],
    github: "https://github.com/happytobeharish/Second-Brain-",
  },
];

const ProofOfWork: React.FC<ProofProps> = ({ darkMode, colors }) => {
  return (
    <motion.section
      id="proof-of-work"
      className="space-y-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3
        className={`text-2xl sm:text-3xl font-semibold text-center mb-4 ${
          darkMode ? colors.textDark : colors.textLight
        }`}
      >
        Proof of Work
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${colors.gradient} text-white shadow-md`}
            >
              {project.title === "Draw App" && <Brush className="w-6 h-6" />}
              {project.title === "Pay Me" && <CreditCard className="w-6 h-6" />}
              {project.title === "Second Brain" && <Brain className="w-6 h-6" />}
            </div>

            <h4
              className={`text-xl sm:text-2xl font-bold ${
                darkMode ? colors.textDark : colors.textLight
              }`}
            >
              {project.title}
            </h4>

            <p className="text-sm sm:text-base text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`text-[11px] sm:text-xs px-3 py-1 rounded-full bg-gradient-to-r ${colors.gradient} text-white shadow-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-md bg-gradient-to-r ${colors.button} text-white font-medium shadow-md text-sm`}
              >
                View Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default ProofOfWork;
