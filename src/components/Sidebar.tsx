"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-80 border-r border-gray-200 bg-white hidden lg:flex flex-col justify-between py-12 px-8"
    >
      {/* Profile Section */}
      <div>
        {/* Circular Profile Image */}
        <div className="w-24 h-24 rounded-full bg-gray-100 mb-8 mx-auto overflow-hidden">
          {/* Add your profile image here */}
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Your Photo</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-light text-gray-900 text-center mb-2 tracking-wide">
          Your Name
        </h1>
        <p className="text-gray-500 text-sm text-center mb-12 font-light">
          Full-Stack Developer
        </p>

        {/* Navigation */}
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-gray-50 text-gray-900 border-l-2 border-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-light tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-gray-400 text-xs font-light tracking-wide">
          © 2024 Your Name
        </p>
      </div>
    </motion.nav>
  );
}
