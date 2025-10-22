"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-[#DDC0C5]/30 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-light text-[#2D2D2D] tracking-wide"
          >
            Halima.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors font-light tracking-wide text-sm ${
                  pathname === item.path
                    ? "text-[#DDC0C5]"
                    : "text-[#666] hover:text-[#2D2D2D]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2D2D2D]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                className="w-6 h-0.5 bg-[#2D2D2D]"
              />
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-[#2D2D2D]"
              />
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                className="w-6 h-0.5 bg-[#2D2D2D]"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-sm border-b border-[#DDC0C5]/30 overflow-hidden"
            >
              <div className="flex flex-col space-y-0 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-4 py-3 transition-colors font-light tracking-wide ${
                      pathname === item.path
                        ? "text-[#DDC0C5] bg-[#F9F4F4]"
                        : "text-[#666] hover:text-[#2D2D2D] hover:bg-[#F9F4F4]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
