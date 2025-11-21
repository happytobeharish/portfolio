"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface HomeProps {
  colors: PaletteStyles;
  onCTAClick: () => void;
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({
  colors,
  onCTAClick,
  onContactClick,
}) => {
  return (
    <section id="home" className="text-center space-y-6">

      {/* WRAPPING EVERYTHING INSIDE LazyMotion FIXES THE ERROR */}
      <LazyMotion features={domAnimation}>
        
        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Hi, I'm{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${colors.gradient}`}
            >
              Harish
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Software Developer building scalable, reliable, and user-centered
            digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={onCTAClick}
              className={`px-6 py-3 rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md text-sm sm:text-base`}
            >
              View My Work
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white shadow-md text-sm sm:text-base backdrop-blur"
            >
              Get in Touch
            </button>
          </div>
        </m.div>

        {/* Social Icons */}
        <m.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* GitHub */}
          <m.a
            href="https://github.com/happytobeharish"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 shadow-md backdrop-blur-md transition hover:bg-white/20"
          >
            <Github className="w-6 h-6 text-gray-800 dark:text-white" />
          </m.a>

          {/* LinkedIn */}
          <m.a
            href="https://www.linkedin.com/in/harish-ganjoo-616630269"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 shadow-md backdrop-blur-md transition hover:bg-white/20"
          >
            <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </m.a>
        </m.div>

      </LazyMotion>
    </section>
  );
};

export default Home;
