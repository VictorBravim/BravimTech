"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const About = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const technologies = [
    { icon: FaReact, name: "React", color: "#61DAFB", glow: "#61DAFB40" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26", glow: "#E34F2640" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", glow: "#1572B640" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E", glow: "#F7DF1E40" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933", glow: "#33993340" },
    { icon: FaGitAlt, name: "Git", color: "#F05032", glow: "#F0503240" },
    { icon: FaGithub, name: "GitHub", color: "#181717", glow: "#18171740" },
  ]

  const services = [
    {
      id: 0,
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web de alta performance com as tecnologias mais modernas.",
    },
    {
      id: 1,
      title: "Design de Interfaces",
      description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência.",
    },
    {
      id: 2,
      title: "Otimização SEO",
      description: "Estratégias avançadas para posicionar seu site nos primeiros resultados.",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateRotation = (x: number, y: number) => {
    if (!isHovering) return { x: 0, y: 0 }
    const element = document.getElementById("hero-image")
    if (!element) return { x: 0, y: 0 }
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((x - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - y) / (rect.height / 2)) * 5
    return { x: rotateX, y: rotateY }
  }

  const rotation = calculateRotation(mousePosition.x, mousePosition.y)

  return (
    <section className="flex justify-center w-full bg-white py-4 lg:py-12">
    <div className=" bg-white text-gray-900 overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-200/30 blur-[80px]" />

      <div className="container px-4 sm:px-6 md:px-16 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center my-2">
                <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
                  <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
                  <h1 className="text-black text-sm sm:text-md font-medium mr-2" style={{ fontFamily: "var(--font-archivo)" }}>Sobre nós</h1>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600" style={{ fontFamily: "var(--font-archivo)" }}>
                Sobre a BravimTech
              </h2>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              id="hero-image"
              className="relative z-20"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-[0_0_15px_rgba(0,100,255,0.1)] bg-gradient-to-br from-blue-50/40 to-indigo-50/40">
                <Image
                  src="/images/Banner.png"
                  alt="Tecnologia futurista"
                  width={600}
                  height={700}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:4px_4px] opacity-20" />

                <div
                  className="absolute inset-0 border-2 border-blue-300/30 rounded-xl sm:rounded-2xl"
                  style={{ boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)" }}
                />
              </div>

              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-[0_0_10px_rgba(0,100,255,0.1)] p-3 sm:p-4 z-30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-base sm:text-lg font-bold">5+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Anos de inovação</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Experiência comprovada</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-[0_0_10px_rgba(0,100,255,0.1)] p-3 sm:p-4 z-30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-base sm:text-lg font-bold">100%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Satisfação</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Clientes satisfeitos</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 sm:-right-12 transform -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24">
                <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-indigo-300/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-4 border border-cyan-300/10 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)]">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                O que a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  BravimTech
                </span>{" "}
                Pode Oferecer
              </h2>

              <div className="flex flex-col sm:flex-row mb-6 border-b border-gray-200 pb-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-3 sm:px-4 py-2 font-medium text-xs sm:text-sm transition-all relative ${activeTab === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {service.title}
                    {activeTab === index && (
                      <motion.div
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[100px] sm:min-h-[120px] mb-6 sm:mb-8"
                >
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">{services[activeTab].description}</p>

                  <ul className="space-y-2 sm:space-y-3">
                    {[1, 2, 3].map((item) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-1 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {activeTab === 0 &&
                            `Desenvolvimento ${item === 1 ? "de sites responsivos" : item === 2 ? "de aplicações web" : "de e-commerce"}`}
                          {activeTab === 1 &&
                            `Design ${item === 1 ? "de interfaces intuitivas" : item === 2 ? "de experiência do usuário" : "de identidade visual"}`}
                          {activeTab === 2 &&
                            `Otimização ${item === 1 ? "para mecanismos de busca" : item === 2 ? "de performance" : "de conteúdo"}`}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-white shadow-[0_0_15px_rgba(0,100,255,0.2)] hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all text-sm sm:text-base">
                  BrandBook
                </button>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition-all text-sm sm:text-base">
                  Ver artigos
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900">Tecnologias que dominamos</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.div key={index} className="relative group" whileHover={{ y: -5 }}>
                <div
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center transition-all group-hover:border-[color:var(--hover-color)] group-hover:shadow-[0_0_15px_var(--shadow-color)]"
                  style={
                    {
                      "--hover-color": tech.color,
                      "--shadow-color": tech.glow,
                    } as React.CSSProperties
                  }
                >
                  <tech.icon
                    size={24}
                    className="sm:h-8 sm:w-8 text-gray-600 group-hover:text-[color:var(--hover-color)] transition-colors"
                    style={{ "--hover-color": tech.color } as React.CSSProperties}
                  />
                  <span className="mt-2 sm:mt-3 font-medium text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>

                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--hover-color)] to-[color:var(--hover-color)] opacity-0 group-hover:opacity-10 rounded-lg sm:rounded-xl blur-sm transition-opacity"
                    style={{ "--hover-color": tech.color } as React.CSSProperties}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent transform -translate-y-1/2 z-[-1]" />
        </div>
      </div>
    </div>
    </section>
  )
}

export default About