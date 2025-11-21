"use client";
import React from "react";
import { motion } from "framer-motion";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface AboutProps {
  darkMode: boolean;
  colors: PaletteStyles;
}

const About: React.FC<AboutProps> = ({ darkMode, colors }) => {
  return (
    <section
      id="about"
      className="space-y-6 text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg"
    >
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
          About Me
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          I’m a software developer passionate about crafting efficient, scalable
          and user-centered applications. I enjoy working across the full stack
          with React, Next.js, TypeScript and Node.js.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
