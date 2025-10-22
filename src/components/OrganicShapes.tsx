"use client";

import { motion } from "framer-motion";

export default function OrganicShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-96 h-96 opacity-60 bg-[#DDC0C5]"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* Medium Blob Bottom Left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-48 -left-32 w-80 h-80 opacity-40 bg-[#DDC0C5]"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />
    </div>
  );
}
