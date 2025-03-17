"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const FuturisticAbout = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Tecnologias com cores específicas
  const technologies = [
    { icon: FaReact, name: "React", color: "#61DAFB", glow: "#61DAFB40" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26", glow: "#E34F2640" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6", glow: "#1572B640" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E", glow: "#F7DF1E40" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933", glow: "#33993340" },
    { icon: FaGitAlt, name: "Git", color: "#F05032", glow: "#F0503240" },
    { icon: FaGithub, name: "GitHub", color: "#181717", glow: "#18171740" },
  ]

  // Serviços oferecidos
  const services = [
    {
      id: 0,
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web de alta performance com as tecnologias mais modernas.",
    },
    {
      id: 1,
      title: "Design de Interfaces",
      description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.",
    },
    {
      id: 2,
      title: "Otimização SEO",
      description: "Estratégias avançadas para posicionar seu site nos primeiros resultados dos buscadores.",
    },
  ]

  // Efeito para rastrear a posição do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Função para calcular a rotação baseada na posição do mouse
  const calculateRotation = (x: number, y: number) => {
    if (!isHovering) return { x: 0, y: 0 }
    const element = document.getElementById("hero-image")
    if (!element) return { x: 0, y: 0 }
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((x - centerX) / (rect.width / 2)) * 5 // max 5 degrees
    const rotateX = ((centerY - y) / (rect.height / 2)) * 5 // max 5 degrees
    return { x: rotateX, y: rotateY }
  }

  const rotation = calculateRotation(mousePosition.x, mousePosition.y)

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden py-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,#f0f4ff,#fff_70%)] opacity-70" />

      {/* Glowing detail */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-200/30 blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <span className="text-gray-700 font-medium">VANTAGENS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              O futuro da{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                tecnologia
              </span>
              <br />
              está aqui
            </h1>

            <div className="flex justify-center">
              <p className="text-gray-600 text-lg max-w-2xl">
                Nós da BravimTech unimos tecnologia e design para criar soluções reais e inteligentes para o mercado
                digital.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left column - 3D-like image */}
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
              {/* Main image with futuristic frame */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-[0_0_15px_rgba(0,100,255,0.1)] bg-gradient-to-br from-blue-50/40 to-indigo-50/40">
                <Image
                  src="/images/Banner.png"
                  alt="Tecnologia futurista"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay with scan lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:4px_4px] opacity-20" />

                {/* Glowing border */}
                <div
                  className="absolute inset-0 border-2 border-blue-300/30 rounded-2xl"
                  style={{ boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)" }}
                />
              </div>

              {/* Floating data elements */}
              <div className="absolute -top-6 -right-6 bg-white border border-gray-200 rounded-xl shadow-[0_0_10px_rgba(0,100,255,0.1)] p-4 z-30">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">5+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Anos de inovação</h4>
                    <p className="text-sm text-gray-600">Experiência comprovada</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl shadow-[0_0_10px_rgba(0,100,255,0.1)] p-4 z-30">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">100%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Satisfação</h4>
                    <p className="text-sm text-gray-600">Clientes satisfeitos</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-24">
                <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-2 border border-indigo-300/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-4 border border-cyan-300/10 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Content with tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)]">
              <h2 className="text-2xl font-bold mb-6">
                O que a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  BravimTech
                </span>{" "}
                Pode Oferecer
              </h2>

              {/* Tabs navigation */}
              <div className="flex mb-6 border-b border-gray-200 pb-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 font-medium text-sm transition-all relative ${
                      activeTab === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
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

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[120px] mb-8"
                >
                  <p className="text-gray-700 mb-4">{services[activeTab].description}</p>

                  {/* Animated list items */}
                  <ul className="space-y-3">
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
                        <div className="text-sm text-gray-600">
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

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-white shadow-[0_0_15px_rgba(0,100,255,0.2)] hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all">
                  BrandBook
                </button>
                <button className="px-6 py-3 bg-gray-100 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-200 transition-all">
                  Ver artigos
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies section */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Tecnologias que dominamos</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <motion.div key={index} className="relative group" whileHover={{ y: -5 }}>
                <div
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center transition-all group-hover:border-[color:var(--hover-color)] group-hover:shadow-[0_0_15px_var(--shadow-color)]"
                  style={
                    {
                      "--hover-color": tech.color,
                      "--shadow-color": tech.glow,
                    } as React.CSSProperties
                  }
                >
                  <tech.icon
                    size={32}
                    className="text-gray-600 group-hover:text-[color:var(--hover-color)] transition-colors"
                    style={{ "--hover-color": tech.color } as React.CSSProperties}
                  />
                  <span className="mt-3 font-medium text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--hover-color)] to-[color:var(--hover-color)] opacity-0 group-hover:opacity-10 rounded-xl blur-sm transition-opacity"
                    style={{ "--hover-color": tech.color } as React.CSSProperties}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent transform -translate-y-1/2 z-[-1]" />
        </div>
      </div>
    </div>
  )
}

export default FuturisticAbout