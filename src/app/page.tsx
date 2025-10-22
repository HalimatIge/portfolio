"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import OrganicShapes from "@/components/OrganicShapes";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F4F4] relative overflow-hidden pt-20">
      <OrganicShapes />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-[#2D2D2D] mb-4 leading-tight"
            >
              Hello,
              <br />
              I&apos;m <span className="text-[#DDC0C5]">Halimat Ige</span>
            </motion.h1>
          </motion.div>

          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#DDC0C5] rounded-full px-6 py-3 mb-12"
          >
            <Sparkles className="w-4 h-4 text-[#DDC0C5]" />
            <span className="text-[#2D2D2D] font-light tracking-wide">
              Available for work
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-[#666] mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Full-stack developer crafting beautiful digital experiences with
            modern technologies and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* <button className="group bg-[#2D2D2D] text-white px-8 py-4 rounded-full font-light flex items-center gap-2 hover:bg-[#DDC0C5] transition-all duration-300 hover:scale-105">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border border-[#DDC0C5] text-[#2D2D2D] px-8 py-4 rounded-full font-light flex items-center gap-2 hover:bg-[#DDC0C5] hover:text-white transition-all duration-300 hover:scale-105">
              Let&apos;s Connect
            </button> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <button className="group bg-[#2D2D2D] text-white px-8 py-4 rounded-full font-light flex items-center gap-2 hover:bg-[#DDC0C5] transition-all duration-300 hover:scale-105">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="group border border-[#DDC0C5] text-[#2D2D2D] px-8 py-4 rounded-full font-light flex items-center gap-2 hover:bg-[#DDC0C5] hover:text-white transition-all duration-300 hover:scale-105">
                  Let&apos;s Connect
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
