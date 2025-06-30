"use client"

import { useState, useEffect } from "react"
import { Github, Mail, Twitter, ExternalLink, Menu, X, MapPin, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Music Player",
      description:
        "Aplikasi pemutar musik yang dibuat menggunakan HTML, CSS, dan JavaScript vanilla dengan desain yang keren dan interaktif. Mendukung berbagai genre musik.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: null, // Will use custom thumbnail
      liveUrl: "https://music-playerbayu.netlify.app/",
      customThumbnail: {
        title: "Music Player",
        subtitle: "Music App",
        gradient: "from-red-600 via-red-700 to-black",
        icon: "🎵",
      },
    },
    {
      title: "Game 2048",
      description:
        "Implementasi game puzzle 2048 klasik dengan tema dark yang elegan, menggunakan Vanilla JavaScript dengan animasi smooth dan efek glow yang menarik.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: null, // Will use custom thumbnail
      liveUrl: "https://2048bayu.netlify.app/",
      customThumbnail: {
        title: "2048",
        subtitle: "Puzzle Game",
        gradient: "from-blue-600 via-purple-600 to-indigo-800",
        icon: "🎮",
      },
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-xl font-bold text-blue-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bayu Samudera
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {["home", "about", "projects", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item === "home" ? "Home" : item.replace("-", " ")}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {["home", "about", "projects", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-blue-400"
                >
                  {item === "home" ? "Home" : item.replace("-", " ")}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src="/placeholder.svg?height=200&width=200"
              alt="Bayu Samudera"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bayu Samudera
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mahasiswa Sistem Informasi | Telkom University
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <blockquote className="text-lg md:text-xl italic text-gray-400 border-l-4 border-blue-400 pl-4">
              "Nothing is impossible for those who work hard and never give up."
            </blockquote>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
              >
                Lihat Proyek
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-gray-600 hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto text-black"
              >
                Hubungi Saya
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tentang Saya
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Halo! Saya Bayu Samudera, mahasiswa Sistem Informasi di Telkom University yang passionate dalam bidang
                teknologi dan pengembangan perangkat lunak. Saya selalu antusias untuk belajar hal-hal baru dan
                mengembangkan skill programming saya.
              </p>

              <motion.div
                className="flex items-center mb-4 text-gray-400"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin size={20} className="mr-2 text-blue-400" />
                <span>Asal: Lampung, Indonesia</span>
              </motion.div>

              <motion.div
                className="flex items-center text-gray-400"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Fish size={20} className="mr-2 text-blue-400" />
                <span>Hobi: Memancing</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Fokus Belajar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-orange-400">•</span> HTML & CSS
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-yellow-400">•</span> JavaScript
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-red-400">•</span> Java
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-purple-400">•</span> C#
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-green-400">•</span> Python
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-blue-400">•</span> Web Development
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-cyan-400">•</span> Software Engineering
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <span className="text-pink-400">•</span> Database Management
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Proyek Saya
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-200"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Custom Thumbnail */}
                <motion.div
                  className={`w-full h-48 bg-gradient-to-br ${project.customThumbnail.gradient} flex flex-col items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-center z-10">
                    <div className="text-4xl mb-2">{project.customThumbnail.icon}</div>
                    <h4 className="text-2xl font-bold text-white mb-1 tracking-wide">
                      {project.customThumbnail.title}
                    </h4>
                    <p className="text-gray-200 text-sm font-medium tracking-wider uppercase">
                      {project.customThumbnail.subtitle}
                    </p>
                  </div>

                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-3 text-blue-400"
                    whileHover={{ color: "#60a5fa" }}
                    transition={{ duration: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors duration-150 bg-transparent"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Lihat Live Demo
                    </Button>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-blue-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hubungi Saya
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tertarik untuk berkolaborasi atau ingin berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:bayusamudera403@gmail.com"
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="text-blue-400" />
              <span>Email</span>
            </motion.a>

            <motion.a
              href="https://github.com/snorlaxxx666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="text-blue-400" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://x.com/snorlaxxx666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={20} className="text-blue-400" />
              <span>Twitter</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Bayu Samudera
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
