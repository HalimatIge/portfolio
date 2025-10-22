"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import OrganicShapes from "@/components/OrganicShapes";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/halimatige",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/halimat-ige",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "🎉 Message sent successfully! I'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "❌ Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              className="text-5xl md:text-7xl font-light text-[#2D2D2D] mb-6"
            >
              Let&apos;s Work Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#666] max-w-2xl mx-auto font-light"
            >
              Have a project in mind? Let&apos;s discuss how we can bring your
              ideas to life.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-light text-[#2D2D2D] mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#DDC0C5] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#666] text-sm font-light">Email</p>
                    <p className="text-[#2D2D2D] font-light">
                      halimatyetundeige@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#DDC0C5] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#666] text-sm font-light">Phone</p>
                    <p className="text-[#2D2D2D] font-light">
                      +234 815 655 0086
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#DDC0C5] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#666] text-sm font-light">Location</p>
                    <p className="text-[#2D2D2D] font-light">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-light text-[#2D2D2D] mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#666] hover:text-[#DDC0C5] transition-colors font-light text-sm"
                      >
                        <Icon className="w-5 h-5" />
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm border border-[#DDC0C5]/30 rounded-2xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#2D2D2D] font-light mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#DDC0C5]/50 rounded-lg focus:outline-none focus:border-[#DDC0C5] focus:ring-1 focus:ring-[#DDC0C5] bg-white/50 font-light"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#2D2D2D] font-light mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#DDC0C5]/50 rounded-lg focus:outline-none focus:border-[#DDC0C5] focus:ring-1 focus:ring-[#DDC0C5] bg-white/50 font-light"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-[#2D2D2D] font-light mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#DDC0C5]/50 rounded-lg focus:outline-none focus:border-[#DDC0C5] focus:ring-1 focus:ring-[#DDC0C5] bg-white/50 font-light"
                    placeholder="e.g., Job opportunity, collaboration, or inquiry"
                  />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-[#2D2D2D] font-light mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#DDC0C5]/50 rounded-lg focus:outline-none focus:border-[#DDC0C5] focus:ring-1 focus:ring-[#DDC0C5] bg-white/50 font-light resize-none"
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2D2D2D] text-white py-4 rounded-lg font-light flex items-center justify-center gap-2 hover:bg-[#DDC0C5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
