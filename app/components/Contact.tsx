"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type PaletteStyles = {
  gradient: string;
  button: string;
  textDark: string;
  textLight: string;
};

interface ContactProps {
  darkMode: boolean;
  colors: PaletteStyles;
}

const Contact: React.FC<ContactProps> = ({ darkMode, colors }) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as any).error || "Failed to send message");
      }

      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="space-y-6 text-center max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md mb-12"
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
          Contact Me
        </h3>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Feel free to reach out for opportunities, collaborations, or just a friendly chat.
        </p>
      </motion.div>

      {/* ✅ FIXED — no motion.form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <form
          className="space-y-4 text-left max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 font-medium text-sm">Name</label>
            <input
              name="name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-sm"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Message</label>
            <textarea
              name="message"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 h-32 text-sm"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg bg-gradient-to-r ${colors.button} text-white font-medium shadow-md text-sm disabled:opacity-70`}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-green-300 mt-3 text-sm">
              Thanks — your message has been sent!
            </p>
          )}

          {error && (
            <p className="text-red-300 mt-3 text-sm">
              {error}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
