"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface ExperienceProps {
  darkMode: boolean;
  colors: PaletteStyles;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode, colors }) => {
  return (
    <section
      id="experience"
      className="space-y-6 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg"
    >
      {/* FIX: LazyMotion wrapper required for React 19 */}
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-2xl sm:text-3xl font-semibold text-center ${
              darkMode ? colors.textDark : colors.textLight
            }`}
          >
            Experience
          </h3>

          <div className="space-y-6 text-gray-300">

            {/* Unified Mentor */}
            <div>
              <h4 className="text-lg font-semibold">
                Web Development Intern — Unified Mentor
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Aug 2024 – Oct 2024 • Gurugram, IN
              </p>

              <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-1">
                <li>Collaborated on tech selection and maintainable code.</li>
                <li>Built responsive apps using HTML, CSS, JS, and React.</li>
                <li>Worked with GitHub workflows and team collaboration.</li>
              </ul>
            </div>

            {/* CairoVision */}
            <div>
              <h4 className="text-lg font-semibold">
                Software Developer Intern — CairoVision
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Jul 2023 – Sep 2023 • Bengaluru, IN
              </p>

              <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400 text-sm space-y-1">
                <li>Contributed to full SDLC and feature development.</li>
                <li>Improved quality through structured code reviews.</li>
                <li>Suggested workflow & process improvements.</li>
              </ul>
            </div>

          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default Experience;
