"use client";
import React from "react";
import { motion } from "framer-motion";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface EducationProps {
  darkMode: boolean;
  colors: PaletteStyles;
}

const Education: React.FC<EducationProps> = ({ darkMode, colors }) => {
  return (
    <section
      id="education"
      className="space-y-6 text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg"
    >
      {/* Title Block */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3
          className={`text-2xl sm:text-3xl font-semibold ${
            darkMode ? colors.textDark : colors.textLight
          }`}
        >
          Education
        </h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-3">
          B.Tech in Computer Science — specializing in full-stack development,
          system design, and scalable web applications.
        </p>
      </motion.div>

      {/* Details Block – FIXED (className moved inside wrapper div) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4 text-left text-gray-300">
          <div>
            <h4 className="text-lg font-semibold">Bachelor of Technology (B.Tech)</h4>
            <p className="text-sm text-gray-400">Computer Science & Engineering</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Core Subjects</h4>
            <p className="text-sm text-gray-400">
              Data Structures, Algorithms, DBMS, OS, Networks, Web Development,
              Cloud Basics, and System Design Foundations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
