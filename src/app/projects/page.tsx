"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import OrganicShapes from "@/components/OrganicShapes";

const projects = [
  {
    title: "Food Delivery Platform",
    description:
      "Full-stack food delivery application with real-time order tracking, payment processing, and restaurant management system.",
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node"],
    liveUrl: "https://food-delivery-frontend-beta-six.vercel.app/",
    githubUrl: "https://github.com/HalimatIge/Food-Delivery-Frontend",
  },
  // {
  //   title: "TailorSync - Fashion Business Management",
  //   description:
  //     "Full-stack SaaS platform for fashion designers and tailors to manage clients, body measurements, orders, and sales with AI-powered size recommendations and real-time messaging.",
  //   tech: [
  //     "Next.js 14",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Socket.io",
  //     "JWT Auth",
  //   ],
  //   liveUrl: "https://tailorsync.vercel.app",
  //   githubUrl: "https://github.com/yourusername/tailorsync",
  //   features: [
  //     "Client Management & Body Measurements",
  //     "AI Body Type Detection & Size Recommendations",
  //     "Real-time Client Communication",
  //     "Order & Project Tracking",
  //     "Sales & Invoice Management",
  //     "Ready-to-Wear E-commerce",
  //   ],
  // },
  // {
  //   title: "SaaS Analytics Dashboard",
  //   description:
  //     "Modern dashboard with data visualization, user management, and subscription handling.",
  //   tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   title: "E-commerce Store",
  //   description:
  //     "Complete online shopping experience with cart, checkout, and inventory management.",
  //   tech: ["Next.js", "Tailwind", "MongoDB", "PayPal"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#F9F4F4] relative overflow-hidden pt-20">
      <OrganicShapes />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light mb-6 text-[#2D2D2D]"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#666] max-w-2xl mx-auto font-light"
            >
              A few projects that reflect my growth, creativity, and love for
              building user-friendly applications.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-[#DDC0C5]/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 p-8"
              >
                <h3 className="text-2xl font-light text-[#2D2D2D] mb-3 group-hover:text-[#DDC0C5] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#666] mb-4 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F9F4F4] text-[#666] rounded-full text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#666] hover:text-[#DDC0C5] transition-colors font-light"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#666] hover:text-[#DDC0C5] transition-colors font-light"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-[#666] mb-6 font-light">
              Want to see more of my work?
            </p>
            {/* <button className="group bg-[#2D2D2D] transition-transform" /> */}
            <button>
              <a
                href="https://github.com/halimatige"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2D2D2D] text-white px-8 py-4 rounded-full font-light flex items-center gap-2 hover:bg-[#DDC0C5] transition-all duration-300 hover:scale-105 mx-auto"
              >
                View GitHub Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
// https://github.com/HalimatIge
