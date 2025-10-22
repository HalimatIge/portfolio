"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-light text-gray-900 mb-6 tracking-tight"
        >
          Hello,
          <br />
          I&apos;m Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 font-light leading-relaxed"
        >
          A full-stack developer crafting digital experiences with modern
          technologies and clean design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors font-light"
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
