"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe } from "lucide-react";
import OrganicShapes from "@/components/OrganicShapes";

// const skills = [
//   {
//     icon: Code2,
//     name: "Frontend",
//     tech: ["React", "Next.js", "TypeScript", "Tailwind"],
//   },
//   {
//     icon: Zap,
//     name: "Backend",
//     tech: ["Node.js", "Express", "Python", "REST APIs"],
//   },
//   {
//     icon: Palette,
//     name: "Design",
//     tech: ["Figma", "UI/UX", "Framer Motion", "Responsive"],
//   },
//   { icon: Globe, name: "Tools", tech: ["Git", "MongoDB", "Vercel", "Docker"] },
// ];

const skills = [
  {
    icon: Code2,
    name: "Frontend",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    icon: Zap,
    name: "Backend",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      // "JWT Auth",
      // "Middleware",
    ],
  },
  {
    icon: Palette,
    name: "Design & Tools",
    tech: [
      "Responsive Design",
      "CSS Animations",
      "Component Libraries",
      "Chrome DevTools",
    ],
  },
  {
    icon: Globe,
    name: "Development",
    tech: ["Git/GitHub", "Vercel", "Render", "Netlify", "Postman"],
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#F9F4F4] relative overflow-hidden pt-20">
      <OrganicShapes />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light mb-6 text-[#2D2D2D]"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#666] max-w-2xl mx-auto font-light"
            >
              Full-stack developer passionate about building scalable
              applications with modern technologies and clean code.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-[#DDC0C5]/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#DDC0C5] rounded-lg">
                    <skill.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-light text-[#2D2D2D] text-lg">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F9F4F4] text-[#666] rounded-full text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm border border-[#DDC0C5]/30 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-light mb-6 text-[#2D2D2D]">
              My Journey
            </h2>
            <div className="space-y-4 text-[#666] text-lg leading-relaxed font-light">
              <p>
                My tech journey started during the long ASUU strike in 2022. I
                didn’t want to just sit at home doing nothing, so I decided to
                learn something new. I joined a coding school, not fully sure
                what programming was about, but I knew I wanted to start
                somewhere.
              </p>
              <p>
                That simple decision opened a new chapter for me. I started with
                the basics of web development, building small projects and
                learning one step at a time. With consistency, I grew into
                full-stack development and began creating real applications that
                solve problems.
              </p>
              <p>
                Today, I’m passionate about building beautiful and functional
                web experiences, learning new technologies, and becoming better
                with every project I work on.
              </p>
            </div>

            {/* Additional Info Section */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-[#DDC0C5]/30"
            >
              <h3 className="text-2xl font-light mb-6 text-[#2D2D2D]">
                What I Bring
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-[#DDC0C5]">
                    Development Approach
                  </h4>
                  <ul className="space-y-2 text-[#666] font-light">
                    <li>• Clean, maintainable code architecture</li>
                    <li>• Performance optimization focus</li>
                    <li>• Scalable solution design</li>
                    <li>• Agile development methodology</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-[#DDC0C5]">
                    Collaboration Style
                  </h4>
                  <ul className="space-y-2 text-[#666] font-light">
                    <li>• Clear communication</li>
                    <li>• Proactive problem-solving</li>
                    <li>• Continuous learning mindset</li>
                    <li>• User-centered design thinking</li>
                  </ul>
                </div>
              </div>
            </motion.div> */}
            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-[#DDC0C5]/30"
            >
              <h3 className="text-2xl font-light mb-6 text-[#2D2D2D]">
                What I Bring
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-[#DDC0C5]">
                    Development Approach
                  </h4>
                  <ul className="space-y-2 text-[#666] font-light">
                    <li>• Writing clean and maintainable code</li>
                    <li>• Building scalable and efficient solutions</li>
                    <li>
                      • Paying attention to performance and user experience
                    </li>
                    <li>
                      • Staying flexible and learning through every project
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-[#DDC0C5]">
                    Collaboration Style
                  </h4>
                  <ul className="space-y-2 text-[#666] font-light">
                    <li>• Communicating clearly and respectfully</li>
                    <li>• Solving problems with creativity and teamwork</li>
                    <li>• Always open to feedback and improvement</li>
                    <li>• Putting users at the heart of every design</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Fun Facts / Personal Touch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-light mb-8 text-[#2D2D2D]">
              Beyond Code
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  emoji: "🍲",
                  fact: "Loves trying new food and exploring simple recipes",
                },
                { emoji: "🌱", fact: "Always learning and improving my craft" },
                {
                  emoji: "🎶",
                  fact: "Enjoys coding with soft music or a calm vibe in the background",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm border border-[#DDC0C5]/30 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <p className="text-[#666] font-light text-sm">{item.fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
